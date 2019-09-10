/**
 * Controls the order of operations for rendering the entire batch
 * @module processFiles
 */
/** imports **/
import { getLogger }        from "@terryweiss/logger";
import { each as eachNode } from "lodash";
import { ObjectParser }     from "./ObjectParser";

const logger = getLogger( "jsm:process.files" );
/**
 * Controls the order of operations for rendering the entire batch
 * @param {any} symbols The symbol tree to process
 * @param {Function} callback Standard callback
 */
export default function processFiles( symbols: any, callback: Function ) {
	const obj: any = [];
	eachNode( symbols, ( v:any, k:string ) => {
		logger.trace(`Analyzing ${k}`);
		let op = new ObjectParser( v, symbols );
		op.parse();
		obj.push( op );
	} );

	eachNode( obj, ( v:any) => {
		logger.trace(`Rendering ${v.name}`);
		v.render();
	} );
	callback();
}
