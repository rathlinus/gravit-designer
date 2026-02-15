/**
 * Webpack Module #415
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(49) /* module_49 */,
      i = require(27) /* module_27 */,
      a = require(29) /* module_29 */,
      r = require(21) /* module_21 */,
      s = require(405) /* module_405 */,
      l = require(404) /* module_404 */,
      c = require(396) /* module_396 */,
      d = require(93) /* module_93 */,
      u = require(240) /* module_240 */,
      p = Object.assign,
      g = Object.defineProperty,
      h = i([].concat);
    exports.exports =
      !p ||
      r(function () {
        if (
          o &&
          1 !==
            p(
              { b: 1 },
              p(
                g({}, "a", {
                  enumerable: true,
                  get: function () {
                    g(this, "b", { value: 3, enumerable: false });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return true;
        var e = {},
          t = {},
          n = Symbol("assign detection");
        return (
          (e[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            t[e] = e;
          }),
          7 !== p({}, e)[n] || "abcdefghijklmnopqrst" !== s(p({}, t)).join("")
        );
      })
        ? function (e, t) {
            for (
              var require = d(e), i = arguments.length, r = 1, p = l.f, g = c.f;
              i > r;

            )
              for (
                var f,
                  m = u(arguments[r++]),
                  y = p ? h(s(m), p(m)) : s(m),
                  v = y.length,
                  _ = 0;
                v > _;

              )
                (f = y[_++]), (o && !a(g, m, f)) || (require[f] = m[f]);
            return require;
          }
        : p;
  }