import { useState } from 'react';
const { checkAbuses, checkValidity } = require('./validity.ts');

console.log(checkAbuses);

const rehookt = _ => {
  // PUBLIC -------------------------------------------------------------------

  /**
   * @deprecated Since version 1.2. provide the prefered useStates method.
   * The generate Will be deleted in version 2.0. Use "useStates" instead.
   */
  const generate = (...definitions) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useStates(...definitions);
  };

  const useStates = function (...definitions) {
    const state = { };

    const redefinitions = computeSpecialHooks(...definitions);

    checkAbuses(...redefinitions);

    // Looping on all arguments.
    redefinitions.forEach(function (item) {
      const { stateName, use } = computeStatenameAndUse(item);

      // check the stateName integrity and state consistency
      checkValidity(state, stateName);

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

  // PRIVATE ------------------------------------------------------------------
  const keysMapping = (entry) => {
    const type = typeof (entry);

    if (type === 'string') {
      return entry.toUpperCase();
    }

    if (Array.isArray(entry)) {
      return entry[0].toUpperCase();
    } else if (type === 'object') {
      const { name } = entry;
      if (name) {
        return name.toUpperCase();
      }
    }

    return entry;
  };

  const doesRejectHooks = (definitions) => {
    // when REHOOKT_NONE is encountered, return a no hook object
    if (definitions.length === 1) {
      const keys = definitions.map(e => keysMapping(e));

      if (keys.includes('REHOOKT_NONE')) {
        return true;
      }
    }

    return false;
  };

  const redefineByXFunct = function (definitions, stateName, use) {
    if (/REHOOKT_X/i.test(stateName)) {
      const redefinitions = [];

      try {
        const { n, f, x, value } = use;
        let i = 0;
        for (;i < n; ++i) {
          redefinitions.push({ name: `rh_${f(x + i)}`, value });
        }
      } catch (err) {
      // eslint-disable-next-line no-console
        console.error(err);
      }

      return redefinitions;
    }
    return definitions;
  };

  const computeSpecialHooks = function (...definitions) {
    if (definitions.length === 1) {
      const { stateName, use } = computeStatenameAndUse(definitions[0]);

      const redefinitions = redefineByXFunct(definitions, stateName, use);

      return redefinitions;
    }

    return definitions;
  };

  /**
   * Parse the state name into json string object if it is not a string
   * By this way you have the representation in the log.
   *
   * @param {string} stateName
   * @return {string}
   */
  const specifiedStateName = function (stateName) {
    //
    if (typeof stateName !== 'string') {
      // dot apply on null or undefined because these can be valid names
      if (typeof stateName !== 'undefined' && stateName !== null) {
        return JSON.stringify(stateName);
      }
    }

    return stateName;
  };

  const computeStatenameAndUse = function (item) {
    let useValue, stateName;

    const theTipe = typeof item;
    const isntString = theTipe !== 'string';
    const isObject = theTipe === 'object';

    // dealing with objects or arrays.
    if (isntString) {
      // Checking if array first because it is also identified as object.
      if (Array.isArray(item)) {
        stateName = specifiedStateName(item[0]);
        useValue = item[1];
      } else if (isObject && item) {
        stateName = specifiedStateName(item.name);
        useValue = item.value;
      }
      /*else if (typeof item !== 'undefined' && item) {
        stateName = item;
      }*/

      // dealing with only the name of the hook
    } else {
      stateName = item;
    }

    return { stateName, use: useValue };
  };
  return { useStates, generate };
};

export default rehookt();