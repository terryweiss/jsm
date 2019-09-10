/**
 * A function to find all nested objects (not `$ref` references) and move them to the root of the symbol tree and replace with with
 * local `#/` `$refs`.
 *
 * @module objToRoot
 */

/** imports **/
import { each, isObject } from "lodash";
import crawl              from "./crawl";
import FilePayload        from "./file.payload";
import { classify }       from "underscore.string";
import { getLogger }      from "@terryweiss/logger";

const logger = getLogger( "jsm:obj.to.root" );
/**
 * A function to find all nested objects (not `$ref` references) and move them to the root of the symbol tree and replace with with
 * local `#/` `$refs`.
 *
 * @param {FilePayload[]} payload The files to look at
 * @param {Function} callback The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `payload` of the entire symbol tree
 */
export default function ( payload: FilePayload[], callback: Function ) {

	each( payload, ( v:any ) => {

		crawl( v.schema, ( node: any, name: string, context: any ) => {
			if ( node ) {
				v.paths[ context.path ] = node;
				if ( isObject( node ) && (<any>node).type === "object" && isObject( (<any>node).properties ) && context.level > 0 ) {
					const className = classify( name );
					logger.trace( `Collapsing ${className}` );
					v.schema[ className ]  = node;
					context.parent[ name ] = { $ref: `#/${className}` };

				}
			}
		} );
	} );

	callback( null, payload );
}
