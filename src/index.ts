#!/usr/bin/env node
/**
 * Creates decorated objects from a json-schema/swagger document
 *
 * @module index
 */
/** declarations **/
import config        from "@terryweiss/config";
import { Types }     from "@terryweiss/config/IOption";
import { getLogger } from "@terryweiss/logger";
import * as glob     from "glob";
import { waterfall } from "async";
import FilePayload   from "./file.payload";

config.option(
	{
		name       : "infiles",
		flag       : "in",
		shortFlag  : "i",
		required   : true,
		description: "The path to your schema files, can be a glob to yaml or json files or a mix thereof",
		type       : Types.string
	}
);

config.option(
	{
		name       : "outpath",
		flag       : "out",
		shortFlag  : "o",
		required   : true,
		description: "The path to write the files to",
		type       : Types.string
	}
);

config.option(
	{
		name       : "rootName",
		flag       : "root",
		shortFlag  : "r",
		required   : false,
		default    : "root",
		description: `When dealing with a schema that does not contains a root element, you can
			name the resultant object with this. This is only valuable when you are
			generating from a single file.`,
		type       : Types.string
	}
);

config.load();

const logger = getLogger( "jsm" );
logger.info( `Globbing ${config.infiles}` );

import generatePaths from "./generate.paths";
import objToRoot     from "./obj.to.root";
import deref         from "./deref";
import defineModules from "./define.modules";
import processFiles  from "./process.files";
import getFiles      from "./get.files";

async function go() {
	const fileList = glob.sync( config.infiles );

	waterfall(
		[
			( done: Function ) => {
				getFiles( fileList, done );
			},
			( files: FilePayload[], done: Function ) => {
				deref( files, done );
			},
			( files: FilePayload[], done: Function ) => {
				objToRoot( files, done );
			},
			( files: FilePayload[], done: Function ) => {
				generatePaths( files, done );
			},
			( files: FilePayload[], done: Function ) => {
				defineModules( files, done );
			},
			( symbols: any, done: Function ) => {
				processFiles( symbols, done );
			}
		],
		( err: any ) => {
			if ( err ) {
				logger.error( "An error occurred during processing", err );
			} else {
				logger.info( `Complete in ${process.uptime()} seconds` );
			}
		}
	);

}

// noinspection JSIgnoredPromiseFromCall
go();



