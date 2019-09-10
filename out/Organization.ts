/**
* 
*
* 

* @module Organization
*/

/** Imports **/
import { validate , IsString, IsArray } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";
import {Address} from "./Address";

import {Phone} from "./Phone";

import {Comment} from "./Comment";




export class Organization {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.name !== "undefined" ){
                this.name = instance.name;
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
        
        }
    }

    /**
    * 
    * 
    */
    @IsString()
    name?: string;
    /**
    * How to sort this name in lists
    * 
    */
    @IsString()
    sort?: string;
    /**
    * The physical addresses
    * 
    */
    @IsArray()
    addresses?: Address[];
    /**
    * All phone numbers for the organization
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
    @IsArray()
    comments?: Comment[];
    /**
    * Internal notes
    * 
    */
    @IsArray()
    notes?: Comment[];



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
        return transformAndValidate( Organization, o );
    }
}
