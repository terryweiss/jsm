/**
 * Creates a top level class from each file's root element and defines the initial structure of the symbol tree.
 * @module defineModules
 */

/** imports **/
import { each }       from "lodash";
import { startsWith } from "underscore.string";
import FilePayload    from "./file.payload";
import { getLogger }  from "@terryweiss/logger";

const logger = getLogger( "jsm:define.modules" );

/**
 * Creates a top level class from each file's root element and defines the initial structure of the symbol tree.
 * @param {FilePayload[]} files The files to look at
 * @param {Function} callback The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `symbols` of the entire symbol tree
 */
export default function ( files: FilePayload[], callback: Function ) {
	const symbols: any = {};

	each( files, ( file: FilePayload ) => {
		logger.trace( `Creating module for ${file.fileName}` );
		each( file.schema, ( f: any, k: string ) => {
			logger.trace( `Creating module  ${k}` );
			symbols[ k ]                            = f;
			symbols[ k ][ "x-model-name" ]          = k;
			symbols[ k ][ "x-model-instance-name" ] = camelize( k );
		} );
	} );

	callback( null, symbols );
}

/**
 * Camelize a string, cutting the string by multiple separators like
 * hyphens, underscores and spaces.
 *
 * @param {string} text Text to camelize
 * @return string Camelized text
 */
function camelize( text: string ) {
	return text.replace( /^([A-Z])|[\s-_]+(\w)/g, function ( match: any, p1: any, p2: any ) {
		if ( p2 ) {
			return p2.toUpperCase();
		}

		return p1.toLowerCase();
	} );
}
