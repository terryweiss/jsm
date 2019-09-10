/**
 * A String property. This will validate and render the value
 *
 * @module ArrayProp
 */

/** imports **/
import * as template    from "ejs";
import { readFileSync } from "fs";
import * as sys         from "lodash";
import { isEmpty }      from "lodash";
import { join }         from "path";
import BaseProp         from "./BaseProp";
import config        from "@terryweiss/config";
import { relative }     from "path";
import { getLogger } from "@terryweiss/logger";

const logger = getLogger( "jsm:ArrayProp" );


/**
 * A String property. This will validate and render the value
 */
export default class ArrayProp extends BaseProp {

	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 * @param {any} symbols The entire symbol tree so that references can be identified
	 * @param {any} parentObj The immediate parent in the symbol tree
	 */
	constructor( node: any, name: string, protected symbols: any, protected parentObj: any ) {
		super( node, name );

		logger.trace( `Loading ArrayProp ${this.name}` );
		this.ownDecorator = "IsArray";

		this.minLength   = node.minItems;
		this.maxLength   = node.maxItems;
		this.arrayUnique = node.uniqueItems === true ? true : undefined;
		this.contains    = node[ "x-contains" ];
		this.notContains = node[ "x-not-contains" ];
		this.items       = "any";

		if ( node.items && node.items.$ref ) {
			const cls = node.items.$ref.replace( "#/", "" );
			const cl = symbols[ cls ];
			if ( cl ) {
				this.class           = cl;
				this.classSourcePath = relative( `${config.outpath}${parentObj.modelPath}`, `${config.outpath}${cl[ "x-model-path" ]}` );
				this.classSourcePath = isEmpty( this.classSourcePath ) ? "." : this.classSourcePath;
				this.items           = cl[ "x-model-name" ];
			}
		} else if ( node.class ) {
			this.class           = node.class;
			this.classSourcePath = relative( `${config.outpath}${parentObj.modelPath}`, `${config.outpath}${node.class}` );
			this.classSourcePath = isEmpty( this.classSourcePath ) ? "." : this.classSourcePath;
			this.items           = node.class;
		} else if ( node.items && node.items.type ) {
			this.items = node.items.type;
		}

		this.propToTemplate = sys.merge( this.propToTemplate, {
			"contains"     : "ArrayContains",
			"notContains"  : "ArrayNotContains",
			"minLength"    : "ArrayMinSize",
			"maxLength"    : "ArrayMaxSize",
			"arrayUnique"  : "ArrayUnique",
			"arrayNotEmpty": "ArrayNotEmpty"
		} );
	}

	/**
	 * The class name for the items in the array, if any
	 */
	public class?: any;
	/**
	 * What the types of the array are allowed to be
	 */
	public items?: any;
	/**
	 * Checks if array contains all values from the given array of values.
	 */
	public contains?: any[];

	/**
	 * Checks if array does not contain any of the given values.
	 */
	public notContains?: any[];

	/**
	 * Checks if array's length is as minimal this number.
	 */
	public minLength?: number;

	/**
	 * Checks if array's length is as maximal this number.
	 */
	public maxLength?: number;
	/**
	 * Checks if all array's values are unique. Comparison for objects is reference-based.
	 */
	public arrayUnique?: boolean;

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.array";
	}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {
		const h: any[] = [ "" ];
		if ( this.class ) {

			const t = readFileSync( join( __dirname, `./templates/requireClass.ejs` ) );

			const rendered = template.render( t.toString(), {
				prop: this,
				sys : this.sys
			}, this.defaultTemplateOptions );

			if ( !sys.isEmpty( rendered ) ) {
				h.push( rendered );
			}
		}

		return h;
	}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {
		return [];
	}
}
