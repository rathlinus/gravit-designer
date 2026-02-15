/**
 * Webpack Module #614
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* module_29 */,
      i = require(35) /* module_35 */,
      a = require(46) /* module_46 */,
      r = TypeError;
    exports.exports = function (e, t) {
      var n, s;
      if ("string" === t && i((n = e.toString)) && !a((s = o(n, e)))) return s;
      if (i((n = e.valueOf)) && !a((s = o(n, e)))) return s;
      if ("string" !== t && i((n = e.toString)) && !a((s = o(n, e)))) return s;
      throw new r("Can't convert object to primitive value");
    };
  }