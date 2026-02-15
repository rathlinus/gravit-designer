/**
 * Webpack Module #667
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      i = require(93) /* stub_requires_92 */,
      a = Math.floor,
      r = uncurryThis("".charAt),
      s = uncurryThis("".replace),
      l = uncurryThis("".slice),
      c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      d = /\$([$&'`]|\d{1,2})/g;
    exports.exports = function (e, t, n, uncurryThis, u, p) {
      var g = n + e.length,
        h = uncurryThis.length,
        f = d;
      return (
        undefined !== u && ((u = i(u)), (f = c)),
        s(p, f, function (i, s) {
          var c;
          switch (r(s, 0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return l(t, 0, n);
            case "'":
              return l(t, g);
            case "<":
              c = u[l(s, 1, -1)];
              break;
            default:
              var d = +s;
              if (0 === d) return i;
              if (d > h) {
                var p = a(d / 10);
                return 0 === p
                  ? i
                  : p <= h
                  ? undefined === uncurryThis[p - 1]
                    ? r(s, 1)
                    : uncurryThis[p - 1] + r(s, 1)
                  : i;
              }
              c = uncurryThis[d - 1];
          }
          return undefined === c ? "" : c;
        })
      );
    };
  }