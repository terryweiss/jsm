/**
* A human being. the basis for other people types
*
* 

* @module Person
*/

/** Imports **/
import { validate , IsString, IsArray, IsInstance } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";
import {Address} from "./Address";

import {Phone} from "./Phone";

import {Comment} from "./Comment";

import {Organization} from "./Organization";




export class Person {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.prefix !== "undefined" ){
                this.prefix = instance.prefix;
            }
        
            if ( typeof instance.first !== "undefined" ){
                this.first = instance.first;
            }
        
            if ( typeof instance.middle !== "undefined" ){
                this.middle = instance.middle;
            }
        
            if ( typeof instance.last !== "undefined" ){
                this.last = instance.last;
            }
        
            if ( typeof instance.suffix !== "undefined" ){
                this.suffix = instance.suffix;
            }
        
            if ( typeof instance.sort !== "undefined" ){
                this.sort = instance.sort;
            }
        
            if ( typeof instance.addresses !== "undefined" ){
                this.addresses = instance.addresses;
            }
        
            if ( typeof instance.phones !== "undefined" ){
                this.phones = instance.phones;
            }
        
            if ( typeof instance.url !== "undefined" ){
                this.url = instance.url;
            }
        
            if ( typeof instance.uid !== "undefined" ){
                this.uid = instance.uid;
            }
        
            if ( typeof instance.tags !== "undefined" ){
                this.tags = instance.tags;
            }
        
            if ( typeof instance.comments !== "undefined" ){
                this.comments = instance.comments;
            }
        
            if ( typeof instance.notes !== "undefined" ){
                this.notes = instance.notes;
            }
        
            if ( typeof instance.organizations !== "undefined" ){
                this.organizations = instance.organizations;
            }
        
            if ( typeof instance.timezone !== "undefined" ){
                this.timezone = instance.timezone;
            }
        
        }
    }

    /**
    * Mrs, Mr, Dr
    * 
    */
    @IsString()
    prefix?: string;
    /**
    * Foist name
    * 
    */
    @IsString()
    first?: string;
    /**
    * Midduhl name
    * 
    */
    @IsString()
    middle?: string;
    /**
    * Last name
    * 
    */
    @IsString()
    last?: string;
    /**
    * Phd, III, etc.
    * 
    */
    @IsString()
    suffix?: string;
    /**
    * How to sort this name in lists
    * 
    */
    @IsString()
    sort?: string;
    /**
    * 
    * 
    */
    @IsArray()
    addresses?: Address[];
    /**
    * 
    * 
    */
    @IsArray()
    phones?: Phone[];
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
    * Tags to locate the thing later
    * 
    */
    @IsArray()
    tags?: string[];
    /**
    * Offical comments
    * 
    */
    @IsInstance(Comment)
    comments?: Comment;
    /**
    * Internal notes
    * 
    */
    @IsInstance(Comment)
    notes?: Comment;
    /**
    * The organization this person belongs to
    * 
    */
    @IsArray()
    organizations?: Organization[];
    /**
    * The timezone where the person is
    * 
    */
    @IsString()
    timezone?: string;



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
        return transformAndValidate( Person, o );
    }
}
