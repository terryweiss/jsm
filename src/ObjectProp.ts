/**
 * An object property is a property that references some other object. This will validate the value it is connected with and render it down
 *
 * @module ObjectProp
 */
/** imports **/
import * as template    from "ejs";
import { readFileSync } from "fs";
import * as sys         from "lodash";
import { isEmpty }      from "lodash";
import { join }         from "path";
import BaseProp         from "./BaseProp";

/**
 * An object property is a property that references some other object. This will validate the value it is connected with and render it down
 */
export default class ObjectProp extends BaseProp {
	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 * @param {any} symbols The entire symbol tree
	 * @param {any} parentObj The immediate parent of this node
	 */
	constructor( node: any, name: string, protected symbols: any, protected parentObj: any ) {
		super( node, name );

		this.ownDecorator = "IsInstance";
		if ( !isEmpty( node.$ref ) ) {
			this.$ref  = node.$ref.replace( "#/definitions/", "" ).replace( "#/components/", "" ).replace( "#/", "" );
			this.class = symbols[ <string>this.$ref ];
		}
		if ( !this.class ) {
			this.class = {};
		}

		// this.classSourcePath = relative( `${config.outpath}${parentObj.modelPath}`, `${config.outpath}${this.class[ "x-model-path" ]}` );
		// this.classSourcePath = isEmpty( this.classSourcePath ) ? "." : this.classSourcePath;
		this.classSourcePath = `./${this.class}`;
	}

	/**
	 * The generated jsons schema reference path
	 */
	public $ref?: string | null;

	/**
	 * The properties (json schema props) for this class
	 */
	public class?: {} | null;

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public imports(): string[] {
		const h: any[] = [ "" ];
		const t        = readFileSync( join( __dirname, `./templates/requireClass.ejs` ) );

		const rendered = template.render( t.toString(), {
			prop: this,
			sys : this.sys
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
		return "type.object";
	}

}
