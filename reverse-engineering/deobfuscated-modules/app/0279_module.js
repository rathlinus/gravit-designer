/**
 * Webpack Module #279
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* module_29 */,
      i = require(37) /* module_37 */,
      a = require(35) /* module_35 */,
      r = require(116) /* module_116 */,
      s = require(306) /* module_306 */,
      l = TypeError;
    exports.exports = function (e, t) {
      var n = e.exec;
      if (a(n)) {
        var c = o(n, e, t);
        return null !== c && i(c), c;
      }
      if ("RegExp" === r(e)) return o(s, e, t);
      throw new l("RegExp#exec called on incompatible receiver");
    };
  }