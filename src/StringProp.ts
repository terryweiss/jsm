/**
 * A String node. This will validate the value it is connected with and render it down
 *
 * @module StringProp
 */
/** imports **/
import BaseProp    from "./BaseProp";
import { isEmpty } from "lodash";
import * as sys    from "lodash";
/**
 * A String property. This will validate the value it is connected with and render it down
 */
export default class StringProp extends BaseProp {
	/**
	 * @param {any} node The node being managed
	 * @param {string} name The name of the node
	 */
	constructor( node: any, name: string ) {
		super( node, name );

		this.ownDecorator = "IsString";

		this.minLength = node.minLength;
		this.maxLength = node.maxLength;
		if ( !isEmpty( node.pattern ) ) {
			this.matches = new RegExp( node.pattern );
		}
		this.contains    = node[ "x-contains" ];
		this.notContains = node[ "x-not-contains" ];

		this.propToTemplate = sys.merge( this.propToTemplate, {
			"isFQDN"         : "IsFQDN",
			"isEmail"        : "IsEmail",
			"isBase64"       : "IsBase64",
			"isAscii"        : "IsAscii",
			"IsAlphanumeric" : "IsAlphanumeric",
			"isAlpha"        : "IsAlpha",
			"notContains"    : "NotContains",
			"contains"       : "Contains",
			"isNumberString" : "IsNumberString",
			"isDateString"   : "IsDateString",
			"isBooleanString": "IsBooleanString",
			"matches"        : "Matches",
			"minLength"      : "MinLength",
			"maxLength"      : "MaxLength",
			"isIp"           : "IsIP",
			"isIso8601"      : "IsISO8601",
			"isMilitaryTime" : "IsMilitaryTime",
			"isJson"         : "IsJSON",
			"isLowercase"    : "IsLowercase",
			"isUppercase"    : "IsUppercase",
			"isMongoId"      : "IsMongoId",
			"isUrl"          : "IsUrl",
			"isUuid"         : "IsUUID"
		});

		switch ( node.format ) {
			case "hostname":
				this.isFQDN = true;
				break;
			case "email":
				this.isEmail = true;
				break;
			case "base64":
				this.isBase64 = true;
				break;
			case "ascii":
				this.isAscii = true;
				break;
			case "alphanumeric":
				this.IsAlphanumeric = true;
				break;
			case "alpha":
				this.isAlpha = true;
				break;
			case "number-string":
				this.isNumberString = true;
				break;
			case "date-string":
				this.isDateString = true;
				break;
			case "boolean-string":
				this.isBooleanString = true;
				break;
			case "ipv4":
				this.isIp = "4";
				break;
			case "ipv6":
				this.isIp = "6";
				break;
			case "iso8601":
				this.isIso8601 = true;
				break;
			case "militaryTime":
				this.isMilitaryTime = true;
				break;
			case "json":
				this.isJson = true;
				break;
			case "lowerCase":
				this.isLowercase = true;
				break;
			case "upperCase":
				this.isUppercase = true;
				break;
			case "mongoId":
				this.isMongoId = true;
				break;
			case "uri":
				this.isUrl = true;
				break;
			case "uuid":
				this.isUuid = true;
				break;
		}
	}

	/**
	 * Minimum string length
	 */
	public minLength?: number;

	/**
	 * Maximum string length
	 */
	public maxLength?: number;

	/**
	 * Regular Expression to validate against
	 */
	public matches?: RegExp;

	/**
	 * Checks if a string is a boolean (e.g. is "true" or "false").
	 */
	public isBooleanString?: boolean;

	/**
	 * Checks if a string is a complete representation of a date (e.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00").
	 */
	public isDateString?: boolean;

	/**
	 * Checks if a string is a number.
	 */
	public isNumberString?: boolean;

	/**
	 * Checks if the string contains the seed.
	 */
	public contains?: string;

	/**
	 * Checks if the string not contains the seed.
	 */
	public notContains?: string;

	/**
	 * Checks if the string contains only letters (a-zA-Z).
	 */
	public isAlpha?: boolean;

	/**
	 * Checks if the string contains only letters and numbers
	 */
	public IsAlphanumeric?: boolean;

	/**
	 * Checks if the string contains ASCII chars only.
	 */
	public isAscii?: boolean;

	/**
	 * Checks if a string is base64 encoded.
	 */
	public isBase64?: boolean;

	/**
	 * Checks if the string is an email.
	 */
	public isEmail?: boolean;

	/**
	 * Checks if the string is a fully qualified domain name (e.g. domain.com).
	 */
	public isFQDN?: boolean;

	/**
	 * Checks if the string is an IP address
	 */
	public isIp?: string;

	/**
	 * Checks if the string is a valid ISO 8601 date.
	 */
	public isIso8601?: boolean;

	/**
	 * Checks if the string is valid JSON.
	 */
	public isJson?: boolean;

	/**
	 * Checks if the string is lowercase.
	 */
	public isLowercase?: boolean;

	/**
	 * Checks if the string is uppercase.
	 */
	public isUppercase?: boolean;

	/**
	 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
	 */
	public isMongoId?: boolean;

	/**
	 * Checks if the string is an url.
	 */
	public isUrl?: boolean;

	/**
	 * Checks if the string is a UUID (version 3, 4 or 5).
	 */
	public isUuid?: boolean;

	/**
	 * Checks if the string is a valid representation of military time in the format HH:MM.
	 */
	public isMilitaryTime?: boolean;

	/**
	 * The template to render this type
	 */
	get prop(): string {
		return "type.string";
	}

	/**
	 * Returns a string array of needed imports
	 */
	public imports(): string[] {
		return [];
	}

	/**
	 * Things like extra classes and enums that need to be at the top level of the module
	 */
	public headers(): string[] {return [];}

}
