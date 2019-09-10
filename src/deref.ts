/**
 * A function to look for all remote references in a file and pulling them into the file as a top level symbol and replacing the
 * external reference with an internal reference
 *
 * @module deref
 */
/** imports **/
import { each }       from "lodash";
import crawl                    from "./crawl";
import FilePayload              from "./file.payload";
import { classify, startsWith } from "underscore.string";

/**
 * A function to look for all remote references in a file and pulling them into the file as a top level symbol and replacing the
 * external reference with an internal reference
 *
 * @param {FilePayload[]} payload The files that will be analyzed
 * @param {Function} callback The standard callback returns with a regular `err` parameter and an updated payload object
 */
export default function ( payload: FilePayload[], callback: Function ) {

	each( payload, ( v:any) => {
		let loaded = false;
		do {
			loaded = false;
			crawl( v.schema, ( node: any, name: string, context: any ) => {
				if ( node ) {
					if ( name === "$ref" && !startsWith( node, "#" ) ) {
						loaded  = true;
						const o = v.refs.get( node );

						if ( Object.keys( o ).length === 1 ) {
							const i                = Object.keys( o )[ 0 ];
							v.schema[ i ]          = o[ i ];
							context.parent[ name ] = `#/${i}`;
							context.parent.typeName = i;
						}

					}
				}
			} );
		} while ( loaded );
	} );

	callback( null, payload );
}
