/**
 * An Any property - a type of no fixed hairstyle. This will validate the value it is connected with and render it down
 *
 * @module AnyProp
 */

/** imports **/
import BaseProp      from "./BaseProp";
import { getLogger } from "@terryweiss/logger";

const logger = getLogger( "jsm:AnyProp" );

/**
 * An Any property - a type of no fixed hairstyle. This will validate the value it is connected with and render it down
 */
export default class AnyProp extends BaseProp {
	/**
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );
		logger.trace( `Loading AnyProp ${this.name}` );
		this.ownDecorator = "";

	}

	/**
	 * The list of decorators templates supported by this type
	 */
	decs(): string[] {
		return [];
	}

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.any";
	}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {return [];}

	/**
	 * Gets the validators that are actually in use so that a single import can be created
	 */
	validationImports(): string[] {
		return [ "" ];
	}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {return [];}
}
