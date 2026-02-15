/**
 * Webpack Module #199
 * Type: exports
 * Name: Exports_GURABLE
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      i = require(61) /* module_61 */,
      a = Function.prototype,
      r = hasOwnProperty_wrapper && Object.getOwnPropertyDescriptor,
      s = i(a, "name"),
      l = s && "something" === function () {}.name,
      c = s && (!hasOwnProperty_wrapper || (hasOwnProperty_wrapper && r(a, "name").configurable));
    exports.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
  }