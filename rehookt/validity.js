'use strict';
exports.__esModule = true;
exports.checkSpecialHooks = exports.checkFormat = exports.checkValidity = exports.checkAbuses = void 0;
var REHOOKT_ABUSE_EXP = {
    intro: 'Hook integrity',
    code: 0
};
var REHOOKT_UNCONCISTENCY_EXP = {
    intro: 'Hook unconsitency',
    code: 1000
};
var REHOOKT_REFERER_EXP = {
    intro: 'Wrong hook referer',
    code: 2000
};
var rehooktException = function (exclass, number, submessage) {
    var message = exclass.intro + " exception\n" + submessage;
    // eslint-disable-next-line no-undef
    var error = new Error(message);
    error.code = (exclass.code + number).toString();
    return error;
};
rehooktException.prototype = Object.create(Error.prototype);
var checkAbuses = function () {
    var definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        definitions[_i] = arguments[_i];
    }
    // At least one hook should be supplied for creation ...
    if (definitions.length === 0) {
        throw rehooktException(REHOOKT_ABUSE_EXP, 1, 'Rehookt need definitions to work on. Nothing provided.');
    }
    // A hook should not be registered ...
    if (definitions.length > 99) {
        throw rehooktException(REHOOKT_ABUSE_EXP, 2, 'Rehookt prefers not to create an abusive number of rehookts.');
    }
    return true;
};
exports.checkAbuses = checkAbuses;
var checkValidity = function (state, stateName) {
    // A hook should have a name that is defined ...
    if (typeof stateName === 'undefined') {
        throw rehooktException(REHOOKT_REFERER_EXP, 1, 'Rehookts have to have a name defined');
    }
    // A hook should have a name that is defined ...
    if (stateName === null) {
        throw rehooktException(REHOOKT_REFERER_EXP, 2, 'Rehookts have to have a non null name');
    }
    // A hook should not be registered ...
    if (typeof state[stateName] !== 'undefined') {
        throw rehooktException(REHOOKT_UNCONCISTENCY_EXP, 1, "One hook already exists under the name " + stateName);
    }
    return true;
};
exports.checkValidity = checkValidity;
var checkFormat = function (state, stateName) {
    // A hook should have a name that is anything else than an string ...
    // eslint-disable-next-line no-useless-escape
    if (/^[\[{].*[\]}]$/.test(stateName)) {
        throw rehooktException(REHOOKT_UNCONCISTENCY_EXP, 2, 'Nothing than a string can be accepted as hook'
            + (" name given " + JSON.stringify(stateName)));
    }
    // A hook should not start by a numeric ...
    if (/^[0-9].*$/.test(stateName)) {
        throw rehooktException(REHOOKT_REFERER_EXP, 3, 'A rehookt hook name should be valid.'
            + ' You should avoid making your hooks start by a number');
    }
    // A hook should not have a forbiden special char ...
    // eslint-disable-next-line no-useless-escape
    if (/^.*[!@#%^&*()+\=\[\]{};':"\\|.<>\/?~\]].*$/.test(stateName)) {
        throw rehooktException(REHOOKT_REFERER_EXP, 4, 'A rehookt hook name should be valid.'
            + ' You must avoid forbiden special chars in your hook name');
    }
    // A hook should not have a space or linebreak in the name ...
    if (/^.*[\r\n\s].*$/.test(stateName)) {
        throw rehooktException(REHOOKT_REFERER_EXP, 5, 'A rehookt hook name should be valid.'
            + ' You must avoid space chars or linebreak in your hook name');
    }
    return true;
};
exports.checkFormat = checkFormat;
var checkSpecialHooks = function (computeStatenameAndUse, definitions) {
    if (definitions.length > 1) {
        definitions.forEach(function (e) {
            var stateName = computeStatenameAndUse(e).stateName;
            if (/REHOOKT_NONE/i.test(stateName)) {
                throw rehooktException(REHOOKT_UNCONCISTENCY_EXP, 3, 'Special definition REHOOKT_NONE cannot coexist'
                    + ' with any other definition.');
            }
        });
    }
};
exports.checkSpecialHooks = checkSpecialHooks;
