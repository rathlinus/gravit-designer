/**
 * Webpack Module #260
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(110) /* module_110 */,
      i = n(120) /* module_120 */,
      a = n(43) /* wellKnownSymbol */,
      r = n(49) /* hasOwnProperty_wrapper */,
      s = a("species");
    e.exports = function (e) {
      var t = o(e);
      r &&
        t &&
        !t[s] &&
        i(t, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  }