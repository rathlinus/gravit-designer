/**
 * Webpack Module #246
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* isCallable */,
      i = require(65) /* module_65 */,
      a = require(37) /* toString_default */,
      r = require(185) /* module_185 */,
      s = require(204) /* module_204 */,
      l = TypeError;
    exports.exports = function (e, t) {
      var n = arguments.length < 2 ? s(e) : t;
      if (i(n)) return a(o(n, e));
      throw new l(r(e) + " is not iterable");
    };
  }