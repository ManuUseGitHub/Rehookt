"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
// Fonctions ------------------------------------------------------------------
var analyse_1 = require("./analyse");
var special_1 = require("./special");
var validity_1 = require("./validity");
// Public interface -----------------------------------------------------------
module.exports = (function () {
    /**
     * Create hooks from defined args
     *
     * @deprecated Since version 1.2. provide the prefered useStates method.
     * The generate Will be deleted in version 2.0. Use "useStates" instead.
     *
     * @param {...any[]} definitions
     * @return {*}
     */
    var generate = function () {
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        return useStates.apply(void 0, definitions);
    };
    /**
     * Create hooks from defined args
     *
     * @param {...any[]} definitions
     * @return {*}
     */
    var useStates = function () {
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        var state = {};
        var redefinitions = special_1.computeSpecialHooks.apply(void 0, __spreadArray([analyse_1.computeStatenameAndUse], definitions, false));
        validity_1.checkAbuses.apply(void 0, redefinitions);
        (0, validity_1.checkSpecialHooks)(analyse_1.computeStatenameAndUse, redefinitions);
        // Looping on all arguments.
        redefinitions.forEach(function (item) {
            var stateNameAndUse = (0, analyse_1.computeStatenameAndUse)(item);
            var stateName = stateNameAndUse.stateName, use = stateNameAndUse.use;
            // check the stateName integrity and state consistency
            (0, validity_1.checkValidity)(state, stateName);
            (0, validity_1.checkFormat)(state, stateName);
            if ((0, special_1.doesRejectHooks)(redefinitions)) {
                return;
            }
            // Storing the hook into the variable as an array.
            var hook = (0, react_1.useState)(use);
            var val = hook[0];
            var set = hook[1];
            // Adding the rehookt hook into the state object under the stateName.
            if (stateName !== undefined) {
                state[stateName] = { val: val, set: set };
            }
        });
        return state;
    };
    return { useStates: useStates, generate: generate };
})();
