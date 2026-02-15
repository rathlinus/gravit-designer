/**
 * Webpack Module #65
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(35) /* anObject */,
      i = require(185) /* module_185 */,
      a = TypeError;
    exports.exports = function (e) {
      if (o(e)) return e;
      throw new a(i(e) + " is not a function");
    };
  }