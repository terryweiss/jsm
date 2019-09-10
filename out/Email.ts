/**
* 
*
* 

* @module Email
*/

/** Imports **/
import { validate , IsString, IsEmail } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";




export class Email {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.type !== "undefined" ){
                this.type = instance.type;
            }
        
            if ( typeof instance.adr !== "undefined" ){
                this.adr = instance.adr;
            }
        
        }
    }

    /**
    * The type, like &#34;home&#34;, &#34;work&#34;, &#34;billing&#34;, etc.
    * 
    */
    @IsString()
    type?: string;
    /**
    * The actual email address
    * 
    */
    @IsEmail()
    @IsString()
    adr?: string;



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
        return transformAndValidate( Email, o );
    }
}
