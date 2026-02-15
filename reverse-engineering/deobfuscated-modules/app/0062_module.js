/**
 * Webpack Module #62
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_131 = require(131) /* DataModule_131 */,
      i = String;
    exports.exports = function (e) {
      if ("Symbol" === DataModule_131(e))
        throw new TypeError("Cannot convert a Symbol value to a string");
      return i(e);
    };
  }