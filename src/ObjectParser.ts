/**
 * Anything that has a json schema type of `object` with a `properties`, it will be parsed by this module and the appropriate types will be assigned to each
 * property that belongs to the object
 * @module ObjectParser
 */
/** imports **/
import config                         from "@terryweiss/config";
import * as template                     from "ejs";
import { readFileSync, writeFileSync }   from "fs";
import { each, isEmpty, union, without } from "lodash";
import * as sys                          from "lodash";
import BaseProp                          from "./BaseProp";
import DateProp                          from "./DateProp";
import StringProp                        from "./StringProp";
import NumberProp                        from "./NumberProp";
import IntegerProp                       from "./IntegerProp";
import BooleanProp                       from "./BooleanProp";
import EnumProp                          from "./EnumProp";
import ArrayProp                         from "./ArrayProp";
import ObjectProp                        from "./ObjectProp";
import AnyProp                           from "./AnyProp";
import { join }                          from "path";
import * as mkdirp                       from "mkdirp";



/**
 * Anything that has a json schema type of `object` with a `properties`, it will be parsed by this module and the appropriate types will be assigned to each
 * property that belongs to the object.
 */
export class ObjectParser {
	/**
	 *
	 * @param {any} node The node being managed
	 * @param {string} symbols The entire symbol tree to allow the parser to look up references
	 */
	constructor( public node: any, public symbols: any ) {

		this.name           = node[ "x-model-name" ];
		this.title          = node.title || node.summary;
		this.description    = node.description;
		this.modelPath      = node[ "x-model-path" ] || "";
		this.modelName      = node[ "x-model-name" ];
		this.instanceName   = node[ "x-model-instance-name" ];
		this.properties     = node.properties;
		this.required       = node.required;
		this.modelNamespace = node[ "x-namespace" ];
		this.modelExtends   = node[ "x-extends" ];

	}

	/**
	 * If the model extends an object, it goes here
	 */
	public modelExtends?: string;
	/**
	 * The documentable namespace
	 */
	public modelNamespace?: string;
	/**
	 * Decorated properties
	 */
	public members: { [ s: string ]: BaseProp; } = {};
	/**
	 * What fields are required
	 */
	public required: string[];
	/**
	 * The raw properties of the schema definition
	 */
	public properties: any;
	/**
	 * The instance name when referenced by a parent or outer model
	 */
	public instanceName: string;
	/**
	 * The name of the generated model
	 */
	public modelName: string;
	/**
	 * The model path is the disk path for the model
	 */
	public modelPath: string;

	/**
	 * The name of the symbol
	 */
	public name: string;
	/**
	 * Documentation
	 */
	public title?: string;
	/**
	 * Documentation
	 */
	public description?: string;
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
	 * Renders a model to a string
	 */
	public render() {
		let properties                  = "";
		let validationImports: string[] = [];
		let headers: string[]           = [];
		let imports: string[]           = [];

		each( this.members, ( v ) => {
			properties += v.renderProp();
			headers           = without( union( headers, v.headers() ), "" );
			imports           = without( union( imports, v.imports() ), "" );
			validationImports = without( union( validationImports, v.validationImports() ), "" );
		} );

		const t = readFileSync( join( __dirname, `./templates/module.ejs` ) );

		const rendered = template.render( t.toString(), {
			module           : this,
			sys              : sys,
			properties       : properties,
			headers          : headers,
			imports          : imports,
			validationImports: validationImports

		}, this.defaultTemplateOptions );

		mkdirp.sync( `${config.outpath}/${this.modelPath}` );
		writeFileSync( `${config.outpath}/${this.modelPath}/${this.modelName}.ts`, rendered );
	}

	/**
	 * Parse the properties
	 */
	public parse() {
		each( this.properties, ( prop: any, key: string ) => {
			if ( prop.const ) {
				prop[ "x-equals" ] = prop.const;
			}

			if ( !isEmpty( prop.enum ) ) {
				this.members[ key ] = new EnumProp( prop, key );
				this.members[ key ] = new EnumProp( prop, key );
			} else if ( !isEmpty( prop.$ref ) || ( prop.type === "object" && !isEmpty( prop.properties ) ) ) {
				this.members[ key ] = new ObjectProp( prop, key, this.symbols, this );
			} else if ( prop.type === "object" ) {
				this.members[ key ] = new AnyProp( prop, key );
			} else {
				switch ( prop.type ) {
					case "string":
						if ( !isEmpty( prop.format ) && ( prop.format === "date" || prop.format === "time" ) ) {
							this.members[ key ] = new DateProp( prop, key );
						} else if ( !isEmpty( prop.format ) && prop.format === "date-time" ) {
							this.members[ key ] = new DateProp( prop, key );
						} else {
							this.members[ key ] = new StringProp( prop, key );
						}
						break;
					case "number":
						this.members[ key ] = new NumberProp( prop, key );
						break;
					case "any":
						this.members[ key ] = new AnyProp( prop, key );
						break;
					case "integer":
						this.members[ key ] = new IntegerProp( prop, key );
						break;
					case "boolean":
						this.members[ key ] = new BooleanProp( prop, key );
						break;
					case "array":
						this.members[ key ] = new ArrayProp( prop, key, this.symbols, this );
						break;
				}
			}

		} );

		each( this.required, ( v: string ) => {
			this.members[ v ].isOptional = false;
		} );
	}

}
