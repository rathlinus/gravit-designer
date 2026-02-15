/**
 * Webpack Module #279
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(29) /* isCallable */,
      i = n(37) /* toString_default */,
      a = n(35) /* anObject */,
      r = n(116) /* module_116 */,
      s = n(306) /* regexpExec */,
      l = TypeError;
    e.exports = function (e, t) {
      var n = e.exec;
      if (a(n)) {
        var c = o(n, e, t);
        return null !== c && i(c), c;
      }
      if ("RegExp" === r(e)) return o(s, e, t);
      throw new l("RegExp#exec called on incompatible receiver");
    };
  }