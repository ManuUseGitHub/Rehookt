"use strict";
exports.__esModule = true;
exports.getKeyMapping = exports.doesRejectHooks = exports.computeSpecialHooks = void 0;
/**
 *
 * @param {any} candidate
 * @return {*}
 */
var getKeyMapping = function (definitions) {
    return definitions.map(function (candidate) {
        var type = typeof candidate;
        if (type === "string") {
            return candidate.toUpperCase();
        }
        if (Array.isArray(candidate)) {
            return candidate[0].toUpperCase();
        }
        else if (type === "object") {
            var name_1 = candidate.name;
            if (name_1) {
                return name_1.toUpperCase();
            }
        }
        return candidate;
    });
};
exports.getKeyMapping = getKeyMapping;
/**
 * Tells if hook creation have to be cancell when REHOOKT_NONE special hook
 * is met
 *
 * @param {any[]} definitions
 * @return {boolean}  {boolean}
 */
var doesRejectHooks = function (definitions) {
    // when REHOOKT_NONE is encountered, return a no hook object
    if (definitions.length === 1) {
        var keys = getKeyMapping(definitions);
        if (keys.includes("REHOOKT_NONE")) {
            return true;
        }
    }
    return false;
};
exports.doesRejectHooks = doesRejectHooks;
/**
 * Redefines hook names to create by a formula via the REHOOKT_X special hook
 *
 * @param {any[]} definitions
 * @param {IStateDescription} entry
 * @return {any[]}
 */
var redefineByXFunct = function (entry) {
    var stateName = entry.stateName, use = entry.use;
    var redefinitions = [];
    if (stateName !== undefined) {
        if (/REHOOKT_X/i.test(stateName)) {
            try {
                var n = use.n, f = use.f, x = use.x, value = use.value;
                var i = 0;
                for (; i < n; ++i) {
                    redefinitions.push({ name: "rh_" + f(x + i), value: value });
                }
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.error(err);
            }
        }
    }
    return redefinitions;
};
/**
 * Process special Rehookt hooks.
 * The special Hook should be the only one listed
 *
 * @param {...any[]} definitions
 * @return {any[]}
 */
var computeSpecialHooks = function (computeStatenameAndUse) {
    var definitions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        definitions[_i - 1] = arguments[_i];
    }
    var generations = [];
    definitions.forEach(function (e) {
        var entry = computeStatenameAndUse(e);
        generations = generations.concat(redefineByXFunct(entry));
    });
    return cleanUpGenerationHooks(computeStatenameAndUse, definitions).concat(generations);
};
exports.computeSpecialHooks = computeSpecialHooks;
/**
 *
 * @param {Function} computeStatenameAndUse
 * @param {any[]} definitions
 * @return {*}
 */
var cleanUpGenerationHooks = function (computeStatenameAndUse, definitions) {
    return definitions.filter(function (e) {
        var stateName = computeStatenameAndUse(e).stateName;
        return !/REHOOKT_X/i.test(stateName);
    });
};
