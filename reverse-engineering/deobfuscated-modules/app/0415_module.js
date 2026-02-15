/**
 * Webpack Module #415
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      uncurryThis = require(27) /* uncurryThis */,
      isCallable = require(29) /* isCallable */,
      tryCall = require(21) /* tryCall */,
      s = require(405) /* module_405 */,
      l = require(404) /* module_404 */,
      c = require(396) /* module_396 */,
      d = require(93) /* stub_requires_92 */,
      DataModule_240 = require(240) /* DataModule_240 */,
      p = Object.assign,
      g = Object.defineProperty,
      h = uncurryThis([].concat);
    exports.exports =
      !p ||
      tryCall(function () {
        if (
          hasOwnProperty_wrapper &&
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
              var require = d(e), uncurryThis = arguments.length, tryCall = 1, p = l.f, g = c.f;
              uncurryThis > tryCall;

            )
              for (
                var f,
                  m = DataModule_240(arguments[tryCall++]),
                  y = p ? h(s(m), p(m)) : s(m),
                  v = y.length,
                  _ = 0;
                v > _;

              )
                (f = y[_++]), (hasOwnProperty_wrapper && !isCallable(g, m, f)) || (require[f] = m[f]);
            return require;
          }
        : p;
  }