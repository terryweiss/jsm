/**
* A geographic location usable by a mapping application
*
* 

* @module Geo
*/

/** Imports **/
import { validate , IsNumber } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";




export class Geo {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.lat !== "undefined" ){
                this.lat = instance.lat;
            }
        
            if ( typeof instance.long !== "undefined" ){
                this.long = instance.long;
            }
        
            if ( typeof instance.alt !== "undefined" ){
                this.alt = instance.alt;
            }
        
        }
    }

    /**
    * Latitude
    * 
    */
    @IsNumber()
    lat?: number;
    /**
    * Longitude
    * 
    */
    @IsNumber()
    long?: number;
    /**
    * Altitude
    * 
    */
    @IsNumber()
    alt?: number;



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
        return transformAndValidate( Geo, o );
    }
}
