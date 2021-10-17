"use strict";

import { IStateDescription } from "./interfaces";
import { useState } from "react";

// Fonctions ------------------------------------------------------------------

import { computeStatenameAndUse } from "./analyse";
import { computeSpecialHooks , doesRejectHooks } from "./special";
import { checkAbuses , checkValidity , checkFormat , checkSpecialHooks } from "./validity";

// Public interface -----------------------------------------------------------
module.exports = ( () => {

  /**
   * Create hooks from defined args
   *
   * @deprecated Since version 1.2. provide the prefered useStates method.
   * The generate Will be deleted in version 2.0. Use "useStates" instead.
   *
   * @param {...any[]} definitions
   * @return {*}
   */
  const generate = ( ...definitions: any[] ): any => {
    return useStates( ...definitions );
  };

  /**
   * Create hooks from defined args
   *
   * @param {...any[]} definitions
   * @return {*}
   */
  const useStates = ( ...definitions: any[] ): any => {
    const state : any = {};

    const redefinitions
      = computeSpecialHooks( computeStatenameAndUse , ...definitions );

    checkAbuses( ...redefinitions );
    checkSpecialHooks( computeStatenameAndUse , redefinitions );

    // Looping on all arguments.
    redefinitions.forEach( ( item:any ) => {
      const stateNameAndUse : IStateDescription = computeStatenameAndUse( item );
      let { stateName , use } = stateNameAndUse;

      // check the stateName integrity and state consistency
      checkValidity( state , stateName );
      checkFormat( state , stateName );

      if ( doesRejectHooks( redefinitions ) ) {
        return;
      }

      // Storing the hook into the variable as an array.
      const hook = useState( use );

      const val = hook[ 0 ];
      const set = hook[ 1 ];

      // Adding the rehookt hook into the state object under the stateName.
      if ( stateName !== undefined ) { state[ stateName ] = { val , set }; }
    } );

    return state;
  };

  return { useStates , generate };
} )();
