/**
 * Reads a list of filenames and creates and array of [[FilePayload]]s
 *
 * @module getFiles
 */
/** imports **/
import { map, series } from "async";
import { isEmpty, isObject }          from "lodash";
import { getLogger }                  from "@terryweiss/logger";
import FilePayload                    from "./file.payload";

const RefParser = require( "json-schema-ref-parser" );
const logger    = getLogger( "jsm:get.files" );

/**
 * Reads a list of filenames and creates and array of [[FilePayload]]s
 * @param fileNames The list of files to create payloads from
 * @param {Function} callback The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `payloads` of the entire symbol tree
 */
export default function ( fileNames: string[], callback: Function ) {

	map( fileNames, ( fn: string, done: Function ) => {
			logger.trace( `Reading ${fn}` );
			const parser = new RefParser();

			const payload    = new FilePayload();
			payload.fileName = fn;
			series(
				[
					( cb: Function ) => {
						logger.trace( "Resolving external references" );
						parser.resolve( fn, { external: true }, ( err: any, res: any ) => {
							payload.refs = res;
							cb( err );
						} );
					},
					( cb: Function ) => {
						logger.trace( "Converting source to JS object" );
						parser.parse( fn, { external: true }, ( err: any, res: any ) => {
							if ( isEmpty( res.swagger ) ) {
								payload.schema = res;
							} else if ( isObject( res.definitions ) ) {
								payload.schema = res.definitions;
							} else if ( isObject( res.components ) ) {
								payload.schema = res.components;
							}

							cb( err );
						} );
					}
				],
				( err ) => {
					done( err, payload );
				}
			);

		},
		( err: any, results: any ) => {
			callback( err, results );
		}
	);
}
