/**
 * All properties derive from this class. It provides a standard interface for rendering and interpreting `x-` vendor extension properties
 *
 * @module BaseProp
 */
/** imports **/
import * as template        from "ejs";
import { readFileSync }     from "fs";
import { each }             from "lodash";
import * as sys             from "lodash";
import { each as eachItem } from "lodash";
import { join }             from "path";
import { camelize }         from "underscore.string";
import { getLogger }        from "@terryweiss/logger";

const logger = getLogger( "jsm:BaseProp" );

/**
 * All properties derive from this class. It provides a standard interface for rendering and interpreting `x-` vendor extension properties
 */
export default class BaseProp {
	/**
	 * Create new property
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {

		this.name = camelize( name );

		this.title           = node.title;
		this.description     = node.description;
		this.isDefined       = node[ "x-is-defined" ];
		this.isOptional      = node.isRequired !== "true";
		this.equals          = node[ "x-equals" ];
		this.notEquals       = node[ "x-not-equals" ];
		this.empty           = node[ "x-empty" ] === true ? true : undefined;
		this.notEmpty        = node[ "x-not-empty" ] === true ? true : undefined;
		this.isIn            = node[ "x-in" ];
		this.isNotIn         = node[ "x-not-in" ];
		this.defaultValue    = node[ "x-default" ];
		this.reportedType    = node.type;
		this.classSourcePath = null;
	}

	[ key: string ]: any;

	/**
	 * The map from property to template decorators of the class validator class
	 */
	public propToTemplate: { [ key: string ]: any } = {
		isDefined: "IsDefined",
		equals   : "Equals",
		notEquals: "NotEquals",
		empty    : "IsEmpty",
		notEmpty : "NotEmpty",
		isIn     : "IsIn",
		isNotIn  : "IsNotIn"

	};

	/** The type that was defined in the json/yaml */
	public reportedType: string;
	/**
	 * The path to the the prooperty from the base property
	 */
	public classSourcePath: string | null;
	/**
	 * The name of the symbol
	 */
	public name: string;
	/**
	 * The name typescript expects for the type
	 */
	public typeName: string = "";
	/**
	 * Short documentation
	 */
	public title?: string;
	/**
	 * Detailed documentation
	 */
	public description?: string;
	/**
	 * Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.
	 */
	public isDefined?: any;
	/**
	 * Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.
	 */
	public isOptional?: boolean;
	/**
	 * Checks if value equals ("===") comparison
	 */
	public equals?: any;
	/**
	 * Checks if value equals ("===") comparison.
	 */
	public notEquals?: any;
	/**
	 * Checks if given value is empty (=== '', === null, === undefined).
	 */
	public empty?: any;
	/**
	 * Checks if given value is empty (=== '', === null, === undefined).
	 */
	public notEmpty?: any;
	/**
	 * Checks if value is in a array of allowed values.
	 */
	public isIn?: any[];
	/**
	 * Checks if value is not in a array of disallowed values.
	 */
	public isNotIn?: any[];
	/**
	 * A default value for the property
	 */
	public defaultValue?: any;

	/**
	 * The prop instance's own type decorator
	 */
	protected ownDecorator = "IsString";

	/**
	 * A local for templates to access lodash
	 */
	protected sys = sys;

	/**
	 * The default options for the template render
	 */
	protected defaultTemplateOptions = {
		rmWhitespace: false,
		debug       : false,
		compileDebug: false,
		escape      : function ( s: any ) {return s;}
	};

	/**
	 * The list of decorators templates supported by this type
	 */
	protected decs(): string[] {
		const imports: string[] = [];
		each( Object.keys( this.propToTemplate ), ( v: any ) => {
			if ( typeof this[ v ] !== "undefined" ) {
				imports.push( ( <any>this.propToTemplate )[ v ] );
			}
		} );
		logger.debug( `Rendered decorators for ${this.name} as\n${imports}` );

		return imports;
	}

	/**
	 * The template to render this type
	 */
	public get prop(): string {return "";}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {return [];}

	/**
	 * Gets the validators that are actually in use so that a single import can be created
	 */
	public validationImports(): string[] {
		const imports: string[] = [ this.ownDecorator ];
		each( Object.keys( this.propToTemplate ), ( v: any ) => {
			if ( typeof this[ v ] !== "undefined" ) {
				imports.push( ( <any>this.propToTemplate )[ v ] );
			}
		} );

		logger.debug( `Rendered validators for ${this.name} as\n${imports}` );

		return imports;
	}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {return [];}

	/**
	 * Render the decorators and characteristics
	 */
	public renderDeclarations(): string[] {
		const decs: string[] = [];
		eachItem( this.decs(), ( v: any ) => {
			const t        = readFileSync( join( __dirname, `./templates/${v}.ejs` ) );
			const rendered = template.render( t.toString(), {
				prop: this,
				sys : this.sys
			}, this.defaultTemplateOptions );
			if ( !sys.isEmpty( rendered ) ) {
				decs.push( rendered );
			}
		} );

		logger.debug( `Rendered decorators for ${this.name} as\n${decs}` );

		return decs;
	}

	/**
	 * Render the property, decorators and types and formats the output
	 */
	public renderProp(): string {

		const t = readFileSync( join( __dirname, `./templates/${this.prop}.ejs` ) );

		const templated = template.render( t.toString(), {
			prop: this,
			sys : this.sys,
			decs: this.renderDeclarations()
		} );

		logger.debug( `Rendered the property for ${this.name} as\n${templated}` );

		return templated;

	}

}
