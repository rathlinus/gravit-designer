/**
 * Webpack Module #688
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(689) /* module_689 */,
      i = require(690) /* module_690 */,
      a = Math.abs;
    exports.exports = function (e, t, n, r) {
      var s = +e,
        l = a(s),
        c = o(s);
      if (l < r) return c * i(l / r / t) * r * t;
      var d = (1 + t / 2220446049250313e-31) * l,
        u = d - (d - l);
      return u > n || u != u ? c * (1 / 0) : c * u;
    };
  }