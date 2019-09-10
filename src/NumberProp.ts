/**
 * A Number node. This will validate the value it is connected with and render it down
 * @module NumberProp
 */
/** imports **/
import * as sys from "lodash";
import BaseProp from "./BaseProp";

/**
 * A Number node. This will validate the value it is connected with and render it down
 */
export default class IntegerProp extends BaseProp {
	/**
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );

		this.ownDecorator = "IsNumber";

		this.min           = node.minimum;
		this.max           = node.maximum;
		this.isDivisibleBy = node.multipleOf;
		this.isPositive    = node[ "x-positive-number" ];
		this.isNegative    = node[ "x-negative-number" ];

		this.propToTemplate = sys.merge( this.propToTemplate, {
			"min"          : "Min",
			"max"          : "Max",
			"isDivisibleBy": "IsDivisibleBy",
			"isPositive"   : "IsPositive",
			"isNegative"   : "IsNegative"
		});
	}

	/**
	 * Checks if the given number is greater than or equal to given number.
	 */
	public min?: number;

	/**
	 * Checks if the given number is less than or equal to given number.
	 */
	public max?: number;

	/**
	 * Checks if the value is a positive number.
	 */
	public isPositive?: boolean;

	/**
	 * IsNegative
	 */
	public isNegative?: boolean;

	/**
	 * Checks if the value is a number that's divisible by another.
	 */
	public isDivisibleBy?: number;


	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.number";
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
