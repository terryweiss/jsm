/**
 * Generates dot delimited paths for each symbol in a file payload and captures `$refs` into the payload for later dereferencing.
 *
 * @module generatePaths
 */
/** imports **/
import { each, isObject } from "lodash";
import crawl                        from "./crawl";
import FilePayload                  from "./file.payload";
import { getLogger }                from "@terryweiss/logger";

const logger = getLogger( "jsm:generate.paths" );

/**
 * Generates dot delimited paths for each symbol in a file payload and captures `$refs` into the payload for later dereferencing.
 *
 * @param {FilePayload[]} payload The files to look at
 * @param {Function} callback The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `symbols` of the entire symbol tree

 */
export default function ( payload: FilePayload[], callback: Function ) {

	each( payload, ( v: any) => {
		v.paths    = {};
		v.refPaths = {};
		logger.trace( `Analyzing ${v.fileName}` );
		crawl( v.schema, ( node: any, name: string, context: any ) => {
			if ( node ) {
				v.paths[ context.path ] = node;

				if ( isObject( node ) ) {
					(<any>node)[ "x-symbol-path" ] = context.path;
					(<any>node)[ "x-level" ]       = context.level;
				}

				if ( name === "$ref" ) {
					v.refPaths[ context.path ] = node;

				}
			}
		} );
	} );

	callback( null, payload );
}
