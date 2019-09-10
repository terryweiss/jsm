/**
 * This an implementation of the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern)
 * @module crawl
 */
/** imports **/
import { each, isObject, isArray, isEmpty } from "lodash";
import { getLogger }                        from "@terryweiss/logger";

const logger = getLogger( "jsm:crawl" );

/**
 * This an implementation of the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern). Pass in an object and it will
 * traverse it using breadth first and call your visitor function once for each node it encounters
 *
 * @param {any} tree The object to crawl
 * @param {Function} visitor The function that will be called for each node. It will receive three parameters: object - the node that was found,
 * name - the name of the node, path - a dot delimited string that indicates depth and membership, depth - indicates how many nodes have been visited
 * level - a integer indicating depth in the object tree,
 * @param {string?} parent Intended to be used when called recursively. It is a dot delimited string that indicates depth and membership
 * @param {number?} depth Intended to be used when called recursively.
 * @param {number?} level Intended to be used when called recursively.
 */
export default function crawl( tree: any, visitor: Function, parent?: string, depth: number = 0, level: number = 0 ) {

	const keys = Object.keys( tree );

	each( keys, ( name: string ) => {
		depth++;
		const object = tree[ name ];
		let key      = isEmpty( parent ) ? name : `${parent}.${name}`;

		if ( !isEmpty( object ) ) {
			logger.debug(`Found object ${key}`);

			visitor( object, name, {
				parent: tree,
				path  : key,
				depth : depth,
				level : level
			} );

			if ( isArray( object ) || isObject( object ) ) {
				crawl( object, visitor, key, depth, level + 1 );
			}
		}

	} );
}
