/**
 * The things that define a payload for a file
 *
 * @module FilePayload
 */
/**
 * The things that define a payload for a file
 */
export default class {
	/**
	 * All *raw* references that were found
	 */
	refs: any        = {};
	/**
	 * The *raw* contents of the file
	 */
	schema: any      = {};
	/**
	 * Dot separated paths to all objects in the file
	 */
	paths: any       = {};
	/**
	 * Dereferenced local paths
	 */
	refPaths: any    = {};
	/***
	 * The file name
	 */
	fileName: string = "";

}
