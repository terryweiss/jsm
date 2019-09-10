/**
* 
*
* 

* @module UserAccount
*/

/** Imports **/
import { validate , IsString } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";




export class UserAccount {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.accountEmail !== "undefined" ){
                this.accountEmail = instance.accountEmail;
            }
        
        }
    }

    /**
    * The email address to use for account management
    * 
    */
    @IsString()
    accountEmail?: string;



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
        return transformAndValidate( UserAccount, o );
    }
}
