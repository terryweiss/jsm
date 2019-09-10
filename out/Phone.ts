/**
* A phone number
*
* 

* @module Phone
*/

/** Imports **/
import { validate , IsString } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";




export class Phone {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.type !== "undefined" ){
                this.type = instance.type;
            }
        
            if ( typeof instance.tel !== "undefined" ){
                this.tel = instance.tel;
            }
        
        }
    }

    /**
    * Phone number type, like &#34;home&#34;, &#34;work&#34;, etc.
    * 
    */
    @IsString()
    type?: string;
    /**
    * The phone number being stored
    * 
    */
    @IsString()
    tel?: string;



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
        return transformAndValidate( Phone, o );
    }
}
