const { useState } = require( "react" );

const Rehookt = ( _ => {

    const REHOOKT_ABUSE_EXP = {
        intro : "Hook integrity",
        code  : 0
    }

    const REHOOKT_UNCONCISTENCY_EXP = {
        intro : "Hook unconsitency",
        code  : 1000
    }

    const REHOOKT_REFERER_EXP = {
        intro : "Wrong hook referer",
        code  : 2000
    }

    const RehooktException = ( exclass, number, submessage ) => {

        const message = `${exclass.intro} exception\n${submessage}`;
        
        const error = new Error( message );
        
        error.code = exclass.code + number;

        return error;
    }
    
    RehooktException.prototype = Object.create(Error.prototype);

    class Uitility {
        
        // PUBLIC -----------------------------------------------------------------------
        generate( ...definitions ) {

            const state = {};

            this.checkAbuses( ...definitions );
            
            // Looping on all arguments.
            definitions.forEach( item => {

                const { stateName , use } = this.computeStatenameAndUse( item );

                // check the stateName integrity and state consistency
                this.checkValidity ( state, stateName );

                // Storing the hook into the variable as an array.
                const hook = useState( use );

                const val = hook[ 0 ];
                const set = hook[ 1 ];

                // Adding the rehookt hook into the state object under the stateName.
                state[ stateName ] = { val, set };
            })

            return state;
        }
        
        // PRIVATE ----------------------------------------------------------------------
        checkAbuses( ...definitions ){
            
            // At least one hook should be supplied for creation ...
            if( definitions.length === 0 ){

                throw RehooktException( REHOOKT_ABUSE_EXP, 1, `Rehookt need definitions to work on. Nothing provided.` );
            }

            // A hook should not be registered ...
            if( definitions.length > 99 ){

                throw RehooktException( REHOOKT_ABUSE_EXP, 2, `Rehookt prefers not to create an abusive number of rehookts.` );
            }
        }
        
        checkValidity ( state, stateName ){
            
            // A hook should have a name that is defined ...
            if( stateName === undefined ){

                throw RehooktException( REHOOKT_REFERER_EXP, 1, "Rehookts have to have a name defined" );
            }

            // A hook should have a name that is defined ...
            if( stateName === null ){

                throw RehooktException( REHOOKT_REFERER_EXP, 2, "Rehookts have to have a non null name" );
            }

            // A hook should not be registered ...
            if( state[ stateName ] !== undefined ){

                throw RehooktException( REHOOKT_UNCONCISTENCY_EXP, 1, `One hook already exists under the name ${stateName}` );
            }

            // A hook should have a name that is anything else than an string ...
            if( /^[\[{].*[\]}]$/.test( stateName ) ){

                throw RehooktException( REHOOKT_UNCONCISTENCY_EXP, 2, `Nothing than a string can be accepted as hook name given ${JSON.stringify( stateName )}` );
            }
        }

        specifiedStateName( stateName ){

            // Transform the state name into json string object to have the representation in the log.
            if( typeof stateName !== "string" ){
                
                // dot apply on null or undefined because these can be valid names
                if( stateName !== undefined && stateName !== null) {
                    return JSON.stringify( stateName );
                }
            }

            return stateName;
        }

        computeStatenameAndUse ( item ){

            let useValue, stateName;

            const theTipe    = typeof item;
            const isntString = theTipe !== "string";
            const isObject   = theTipe === "object";

            // dealing with objects or arrays.
            if( isntString ){

                // Checking if array first because it is also identified as object.
                if( Array.isArray( item ) ){
                    stateName = this.specifiedStateName( item[ 0 ] );
                    useValue  = item[ 1 ];
                }

                else if( isObject ){
                    stateName = this.specifiedStateName( item.name );
                    useValue  = item.value;
                }
                
            // dealing with only the name of the hook
            }else{
                stateName = item;
            }
            
            return { stateName, use : useValue }
        }
    }
    return new Uitility();

} ).call( this );

module.exports = Rehookt;