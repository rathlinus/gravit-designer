/**
 * Webpack Module #279
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* isCallable */,
      i = require(37) /* toString_default */,
      a = require(35) /* anObject */,
      r = require(116) /* module_116 */,
      s = require(306) /* regexpExec */,
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