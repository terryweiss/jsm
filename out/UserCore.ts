/**
* A system user
*
* 

* @module UserCore
*/

/** Imports **/
import { validate , IsString, IsDate, IsBoolean, IsInstance } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";
import {Person} from "./Person";

import {Organization} from "./Organization";




export class UserCore {
    constructor( instance?:any ){
        if ( instance ) {
        
            if ( typeof instance.timezone !== "undefined" ){
                this.timezone = instance.timezone;
            }
        
            if ( typeof instance.locale !== "undefined" ){
                this.locale = instance.locale;
            }
        
            if ( typeof instance.nickname !== "undefined" ){
                this.nickname = instance.nickname;
            }
        
            if ( typeof instance.salt !== "undefined" ){
                this.salt = instance.salt;
            }
        
            if ( typeof instance.accountEmail !== "undefined" ){
                this.accountEmail = instance.accountEmail;
            }
        
            if ( typeof instance.key !== "undefined" ){
                this.key = instance.key;
            }
        
            if ( typeof instance.lastPasswordChange !== "undefined" ){
                this.lastPasswordChange = instance.lastPasswordChange;
            }
        
            if ( typeof instance.lastLogin !== "undefined" ){
                this.lastLogin = instance.lastLogin;
            }
        
            if ( typeof instance.forcePasswordChange !== "undefined" ){
                this.forcePasswordChange = instance.forcePasswordChange;
            }
        
            if ( typeof instance.person !== "undefined" ){
                this.person = instance.person;
            }
        
            if ( typeof instance.organization !== "undefined" ){
                this.organization = instance.organization;
            }
        
        }
    }

    /**
    * The timezone where the user lives
    * 
    */
    @IsString()
    timezone?: string;
    /**
    * In the event the system is ever internationalized
    * 
    */
    @IsString()
    locale?: string;
    /**
    * The user&#39;s peferred name
    * 
    */
    @IsString()
    nickname?: string;
    /**
    * The user&#39;s salt for hashing and encrypting
    * 
    */
    @IsString()
    salt?: string;
    /**
    * The email address to use for account management
    * 
    */
    @IsString()
    accountEmail?: string;
    /**
    * The user&#39;s global identifier
    * 
    */
    @IsString()
    key?: string;
    /**
    * The last time the password was changed
    * 
    */
    @IsDate()
    lastPasswordChange?: string;
    /**
    * The last time this user logged in
    * 
    */
    @IsDate()
    lastLogin?: string;
    /**
    * Force the user to login
    * 
    */
    @IsBoolean()
    forcePasswordChange?: boolean;
    /**
    * The person record, if one exists
    * 
    */
    @IsInstance(Person)
    person?: Person;
    /**
    * The organization a user is associated with
    * 
    */
    @IsInstance(Organization)
    organization?: Organization;



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
        return transformAndValidate( UserCore, o );
    }
}
