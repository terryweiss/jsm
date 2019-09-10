/**
* Offical comments
*
* 

* @module Comment
*/

/** Imports **/
import { validate , IsString, IsDate } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";




export class Comment {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.author !== "undefined" ){
                this.author = instance.author;
            }
        
            if ( typeof instance.added !== "undefined" ){
                this.added = instance.added;
            }
        
            if ( typeof instance.content !== "undefined" ){
                this.content = instance.content;
            }
        
        }
    }

    /**
    * Who left the comment
    * 
    */
    @IsString()
    author?: string;
    /**
    * When it was added
    * 
    */
    @IsDate()
    added?: string;
    /**
    * The comment itself
    * 
    */
    @IsString()
    content?: string;



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
        return transformAndValidate( Comment, o );
    }
}
