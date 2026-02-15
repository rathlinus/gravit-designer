/**
 * Webpack Module #62
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(131) /* module_131 */,
      i = String;
    exports.exports = function (e) {
      if ("Symbol" === o(e))
        throw new TypeError("Cannot convert a Symbol value to a string");
      return i(e);
    };
  }