/**
 * A Date property. This will validate the value it is connected with and render it down
 * @module DateProp
 */
/** imports **/
import * as sys from "lodash";
import BaseProp from "./BaseProp";
import { getLogger } from "@terryweiss/logger";

const logger = getLogger( "jsm:DateProp" );

/**
 * A Date property. This will validate the value it is connected with and render it down
 */
export default class DateProp extends BaseProp {
	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );

		logger.trace( `Loading DateProp ${this.name}` );
		this.ownDecorator = "IsDate";

		this.minDate = node[ "x-min-date" ];
		this.maxDate = node[ "x-max-date" ];

		this.propToTemplate = sys.merge( this.propToTemplate, {
			"minDate": "MinDate",
			"maxDate": "MaxDate"
		} );
	}

	/**
	 * Checks if the value is a date that's after the specified date.
	 */
	public minDate?: Date;
	/**
	 * Checks if the value is a date that's before the specified date.
	 */
	public maxDate?: Date;

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.date";
	}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {return [];}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {return [];}
}
