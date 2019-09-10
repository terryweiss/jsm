/**
* An entry in a log of some sort
*
* 

* @module Entry
*/

/** Imports **/
import { validate , IsString, IsDate, IsArray, IsInstance } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";
import {Comment} from "./Comment";




export class Entry {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.name !== "undefined" ){
                this.name = instance.name;
            }
        
            if ( typeof instance.summary !== "undefined" ){
                this.summary = instance.summary;
            }
        
            if ( typeof instance.content !== "undefined" ){
                this.content = instance.content;
            }
        
            if ( typeof instance.published !== "undefined" ){
                this.published = instance.published;
            }
        
            if ( typeof instance.updated !== "undefined" ){
                this.updated = instance.updated;
            }
        
            if ( typeof instance.author !== "undefined" ){
                this.author = instance.author;
            }
        
            if ( typeof instance.categories !== "undefined" ){
                this.categories = instance.categories;
            }
        
            if ( typeof instance.url !== "undefined" ){
                this.url = instance.url;
            }
        
            if ( typeof instance.uid !== "undefined" ){
                this.uid = instance.uid;
            }
        
            if ( typeof instance.syndication !== "undefined" ){
                this.syndication = instance.syndication;
            }
        
            if ( typeof instance.location !== "undefined" ){
                this.location = instance.location;
            }
        
            if ( typeof instance.comments !== "undefined" ){
                this.comments = instance.comments;
            }
        
        }
    }

    /**
    * The name of the entry
    * 
    */
    @IsString()
    name?: string;
    /**
    * A description of the entry
    * 
    */
    @IsString()
    summary?: string;
    /**
    * A longer description
    * 
    */
    @IsString()
    content?: string;
    /**
    * When it was published/recorded
    * 
    */
    @IsDate()
    published?: string;
    /**
    * Date of last update
    * 
    */
    @IsDate()
    updated?: string;
    /**
    * Who created
    * 
    */
    @IsString()
    author?: string;
    /**
    * The categories that the entry applies to
    * 
    */
    @IsArray()
    categories?: string[];
    /**
    * An associated url
    * 
    */
    @IsString()
    url?: string;
    /**
    * The global identifier
    * 
    */
    @IsString()
    uid?: string;
    /**
    * How it got here
    * 
    */
    @IsArray()
    syndication?: string[];
    /**
    * If there is a location associated with ntery
    * 
    */
    @IsString()
    location?: string;
    /**
    * Offical comments
    * 
    */
    @IsInstance(Comment)
    comments?: Comment;



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
        return transformAndValidate( Entry, o );
    }
}
