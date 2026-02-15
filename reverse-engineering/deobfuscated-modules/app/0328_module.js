/**
 * Webpack Module #328
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      DataModule_65 = require(65) /* DataModule_65 */,
      r = require(93) /* stub_requires_92 */,
      s = require(101) /* stub_requires_117 */,
      DataModule_1038 = require(1038) /* DataModule_1038 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      tryCall = require(21) /* tryCall */,
      u = require(351) /* module_351 */,
      p = require(350) /* module_350 */,
      g = require(521) /* stub_requires_129 */,
      h = require(522) /* stub_requires_129 */,
      DataModule_213 = require(213) /* DataModule_213 */,
      m = require(523) /* stub_requires_129 */,
      y = [],
      v = uncurryThis(y.sort),
      _ = uncurryThis(y.push),
      b = tryCall(function () {
        y.sort(undefined);
      }),
      w = tryCall(function () {
        y.sort(null);
      }),
      C = p("sort"),
      x = !tryCall(function () {
        if (DataModule_213) return DataModule_213 < 70;
        if (!(g && g > 3)) {
          if (h) return true;
          if (m) return m < 603;
          var exports,
            module,
            require,
            core_export,
            uncurryThis = "";
          for (exports = 65; exports < 76; exports++) {
            switch (((module = String.fromCharCode(exports)), exports)) {
              case 66:
              case 69:
              case 70:
              case 72:
                require = 3;
                break;
              case 68:
              case 71:
                require = 4;
                break;
              default:
                require = 2;
            }
            for (core_export = 0; core_export < 47; core_export++) y.push({ k: module + core_export, v: require });
          }
          for (
            y.sort(function (e, t) {
              return t.v - e.v;
            }),
              core_export = 0;
            core_export < y.length;
            core_export++
          )
            (module = y[core_export].k.charAt(0)), uncurryThis.charAt(uncurryThis.length - 1) !== module && (uncurryThis += module);
          return "DGBEFHACIJK" !== uncurryThis;
        }
      });
    core_export(
      { target: "Array", proto: true, forced: b || !w || !C || !x },
      {
        sort: function (e) {
          undefined !== e && DataModule_65(e);
          var t = r(this);
          if (x) return undefined === e ? v(t) : v(t, e);
          var n,
            core_export,
            uncurryThis = [],
            tryCall = s(t);
          for (core_export = 0; core_export < tryCall; core_export++) core_export in t && _(uncurryThis, t[core_export]);
          for (
            u(
              uncurryThis,
              (function (e) {
                return function (t, n) {
                  return undefined === n
                    ? -1
                    : undefined === t
                    ? 1
                    : undefined !== e
                    ? +e(t, n) || 0
                    : requireObjectCoercible(t) > requireObjectCoercible(n)
                    ? 1
                    : -1;
                };
              })(e)
            ),
              n = s(uncurryThis),
              core_export = 0;
            core_export < n;

          )
            t[core_export] = uncurryThis[core_export++];
          for (; core_export < tryCall; ) DataModule_1038(t, core_export++);
          return t;
        },
      }
    );
  }