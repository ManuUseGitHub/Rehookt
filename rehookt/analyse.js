/* eslint-disable no-void */
"use strict";
exports.__esModule = true;
exports.computeStatenameAndUse = void 0;
/**
   * Parse the state name into json string object if it is not a string
   * By this way you have the representation in the log.
   *
   * @param {string} stateName
   * @return {string}
   */
var specifiedStateName = function (stateName) {
    if (typeof stateName !== "string") {
        // not apply on null or undefined because these can be valid names
        if (typeof stateName !== "undefined" && stateName !== null) {
            return JSON.stringify(stateName);
        }
    }
    return stateName;
};
/**
 * Is the item an [array] ?
 * Checking if array before checking if the item is an object
 * because an array can be considered as an is also identified as object.
 *
 * @param {IStateDescription} description
 * @param {*} item
 * @return {*}  {boolean}
 */
var doesDescribeFromAnArray = function (description, item) {
    if (Array.isArray(item)) {
        description.stateName = specifiedStateName(item[0]);
        description.use = item[1];
        return true;
    }
    return false;
};
/**
 * Is the item an [Object] and not null or not undefined ?
 *
 * @param {IStateDescription} description
 * @param {*} item
 * @return {*}  {boolean}
 */
var doesDescribeFromObject = function (description, item) {
    if ((typeof item === "object" && item)) {
        description.stateName = specifiedStateName(item.name);
        description.use = item.value;
        return true;
    }
    return false;
};
/**
 * Is the item anything else but not undefined ?
 *
 * @param {*} description
 * @param {*} item
 * @return {*}  {boolean}
 */
var doesDescribeFromDefined = function (description, item) {
    if (typeof item !== "undefined" && item) {
        description.stateName = item;
        return true;
    }
    return false;
};
/**
 * Gives a description for given item. A description describe for a
 * stateName a used state
 *
 * @param {any} item
 * @return {IStateDescription}
 */
var computeStatenameAndUse = function (item) {
    var description = {
        stateName: void 0,
        use: void 0
    };
    /* eslint-enable no-undefined */
    // dealing with objects or arrays.
    if (typeof item !== "string") {
        /* eslint-disable no-empty */
        if (doesDescribeFromAnArray(description, item)) {
        }
        else if (doesDescribeFromObject(description, item)) {
        }
        else if (doesDescribeFromDefined(description, item)) {
        }
        /* eslint-enable no-empty */
        // dealing with only the name of the hook
    }
    else {
        description.stateName = item;
    }
    return description;
};
exports.computeStatenameAndUse = computeStatenameAndUse;
