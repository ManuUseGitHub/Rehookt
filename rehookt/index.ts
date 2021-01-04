import { useState } from 'react';

// Fonctions ------------------------------------------------------------------
const { computeStatenameAndUse } = require('./analyse');
const { computeSpecialHooks, doesRejectHooks } = require('./special');
const {
  checkAbuses,
  checkValidity,
  checkFormat,
  checkSpecialHooks
} = require('./validity.ts');

// Public interface -----------------------------------------------------------
module.exports = (() => {
  /**
   * Create hooks from defined args
   *
   * @deprecated Since version 1.2. provide the prefered useStates method.
   * The generate Will be deleted in version 2.0. Use "useStates" instead.
   *
   * @param {...any[]} definitions
   * @return {*}
   */
  const generate = (...definitions: any[]): any => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useStates(...definitions);
  };

  /**
   * Create hooks from defined args
   *
   * @param {...any[]} definitions
   * @return {*}
   */
  const useStates = (...definitions: any[]): any => {
    const state = {};

    const redefinitions
      = computeSpecialHooks(computeStatenameAndUse, ...definitions);

    checkAbuses(...redefinitions);
    checkSpecialHooks(computeStatenameAndUse, redefinitions);

    // Looping on all arguments.
    redefinitions.forEach((item) => {
      const { stateName, use } = computeStatenameAndUse(item);

      // check the stateName integrity and state consistency
      checkValidity(state, stateName);
      checkFormat(state, stateName);

      if (doesRejectHooks(redefinitions)) {
        return;
      }

      // Storing the hook into the variable as an array.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const hook = useState(use);

      const val = hook[0];
      const set = hook[1];

      // Adding the rehookt hook into the state object under the stateName.
      state[stateName] = { val, set };
    });

    return state;
  };

  return { useStates, generate };
})();
