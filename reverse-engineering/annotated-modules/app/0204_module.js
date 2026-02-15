/**
 * Webpack Module #204
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(131) /* module_131 */,
      i = n(145) /* getSubstitution */,
      a = n(194) /* module_194 */,
      r = n(203) /* iteratorPrototype */,
      s = n(43) /* wellKnownSymbol */("iterator");
    e.exports = function (e) {
      if (!a(e)) return i(e, s) || i(e, "@@iterator") || r[o(e)];
    };
  }