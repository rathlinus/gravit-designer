/**
 * Webpack Module #342
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(37) /* toString_default */,
      i = n(408) /* module_408 */,
      a = n(194) /* module_194 */,
      r = n(43) /* wellKnownSymbol */("species");
    e.exports = function (e, t) {
      var n,
        s = o(e).constructor;
      return void 0 === s || a((n = o(s)[r])) ? t : i(n);
    };
  }