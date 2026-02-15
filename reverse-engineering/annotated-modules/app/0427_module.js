/**
 * Webpack Module #427
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(93) /* stub_requires_92 */,
      i = n(244) /* module_244 */,
      a = n(101) /* stub_requires_117 */;
    e.exports = function (e) {
      for (
        var t = o(this),
          n = a(t),
          r = arguments.length,
          s = i(r > 1 ? arguments[1] : void 0, n),
          l = r > 2 ? arguments[2] : void 0,
          c = void 0 === l ? n : i(l, n);
        c > s;

      )
        t[s++] = e;
      return t;
    };
  }