/**
 * A Boolean node. This will render it down and validate the value
 * @module BooleanProp
 */
/** imports **/
import BaseProp from "./BaseProp";
import { getLogger } from "@terryweiss/logger";

const logger = getLogger( "jsm:BooleanProp" );

/**
 * A Boolean property. This will render it down and validate the value.
 */
export default class BooleanProp extends BaseProp {
	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );

		logger.trace( `Loading BooleanProp ${this.name}` );
		this.ownDecorator = "IsBoolean";
	}
	/**
	 * The list of decorators templates supported by this type
	 */
	 decs(): string[] {
		return [ ];
	}

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.boolean";
	}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {return [];}

	/**
	 * Gets the validators that are actually in use so that a single import can be created
	 */
	validationImports(): string[] {
		return ["IsBoolean"];
	}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {return [];}
}
