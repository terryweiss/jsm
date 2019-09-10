/**
* A canonical physical address. Based on `adr` microformat
*
* 

* @module Address
*/

/** Imports **/
import { validate , IsString, MaxLength, IsInstance } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";
import {Geo} from "./Geo";




export class Address {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.streetAddress !== "undefined" ){
                this.streetAddress = instance.streetAddress;
            }
        
            if ( typeof instance.extendedAddress !== "undefined" ){
                this.extendedAddress = instance.extendedAddress;
            }
        
            if ( typeof instance.poBox !== "undefined" ){
                this.poBox = instance.poBox;
            }
        
            if ( typeof instance.locality !== "undefined" ){
                this.locality = instance.locality;
            }
        
            if ( typeof instance.region !== "undefined" ){
                this.region = instance.region;
            }
        
            if ( typeof instance.postalCode !== "undefined" ){
                this.postalCode = instance.postalCode;
            }
        
            if ( typeof instance.country !== "undefined" ){
                this.country = instance.country;
            }
        
            if ( typeof instance.geo !== "undefined" ){
                this.geo = instance.geo;
            }
        
        }
    }

    /**
    * The first line of the street address
    * 
    */
    @MaxLength(128)
    @IsString()
    streetAddress?: string;
    /**
    * Line 2 of a street address
    * 
    */
    @MaxLength(128)
    @IsString()
    extendedAddress?: string;
    /**
    * A PO Box number
    * 
    */
    @MaxLength(24)
    @IsString()
    poBox?: string;
    /**
    * The city when US
    * 
    */
    @MaxLength(128)
    @IsString()
    locality?: string;
    /**
    * The state when US
    * 
    */
    @MaxLength(128)
    @IsString()
    region?: string;
    /**
    * A zip code
    * 
    */
    @MaxLength(16)
    @IsString()
    postalCode?: string;
    /**
    * The country
    * 
    */
    @MaxLength(128)
    @IsString()
    country?: string;
    /**
    * 
    * 
    */
    @IsInstance(Geo)
    geo?: Geo;



    /**
     * Validate an instance of this class at runtime. Returns a promise
     */
    public async validate():Promise<any> {
        return validate( this, { validationError: { target: false } } );
    }

    /**
     * Create an instance from a plain object
     */
    static async from( o:any ){
        return transformAndValidate( Address, o );
    }
}
