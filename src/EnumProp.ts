/**
 * An Enumeration node. This will validate the value it is connected with and render it down
 * @module EnumProp
 */

/** imports **/
import { readFileSync }       from "fs";
import * as sys               from "lodash";
import { join }               from "path";
import BaseProp               from "./BaseProp";
import { classify, camelize } from "underscore.string";
import * as template          from "ejs";
import * as n2w               from "number-to-words";
import { getLogger }          from "@terryweiss/logger";

const logger = getLogger( "jsm:AnyProp" );
/**
 * An Enumeration node. This will validate the value it is connected with and render it down
 */
export default class EnumProp extends BaseProp {
	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );
		logger.trace( `Loading EnumProp ${this.name}` );

		this.ownDecorator = "IsEnum";

		this.items    = node.enum;
		this.enumType = classify( this.name );
	}

	/**
	 * The generated name of the enum
	 */
	public enumType: string;

	/**
	 * The enum contents
	 */
	public items?: any[];

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {
		const h = [];
		const t = readFileSync( join( __dirname, `./templates/declareEnum.ejs` ) );

		const rendered = template.render( t.toString(), {
			prop    : this,
			sys     : this.sys,
			n2w     : n2w,
			camelize: camelize
		}, this.defaultTemplateOptions );

		if ( !sys.isEmpty( rendered ) ) {
			h.push( rendered );
		}

		return h;
	}

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.enum";
	}

}
