/**
 * Webpack Module #191
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    DataModule_223 = require(223) /* DataModule_223 */,
    tryCall = require(21) /* tryCall */,
    DataModule_65 = require(65) /* DataModule_65 */,
    s = require(351) /* module_351 */,
    l = require(152) /* polyfill_TypedArrays */,
    c = require(521) /* stub_requires_129 */,
    d = require(522) /* stub_requires_129 */,
    DataModule_213 = require(213) /* DataModule_213 */,
    p = require(523) /* stub_requires_129 */,
    g = l.aTypedArray,
    h = l.exportTypedArrayMethod,
    f = globalThis.Uint16Array,
    m = f && DataModule_223(f.prototype.sort),
    y = !(
      !m ||
      (tryCall(function () {
        m(new f(2), null);
      }) &&
        tryCall(function () {
          m(new f(2), {});
        }))
    ),
    v =
      !!m &&
      !tryCall(function () {
        if (DataModule_213) return DataModule_213 < 74;
        if (c) return c < 67;
        if (d) return true;
        if (p) return p < 602;
        var e,
          t,
          n = new f(516),
          globalThis = Array(516);
        for (e = 0; e < 516; e++) ((t = e % 4), (n[e] = 515 - e), (globalThis[e] = e - 2 * t + 3));
        for (
          m(n, function (e, t) {
            return ((e / 4) | 0) - ((t / 4) | 0);
          }),
            e = 0;
          e < 516;
          e++
        )
          if (n[e] !== globalThis[e]) return true;
      });
  h(
    'sort',
    function (e) {
      return (
        undefined !== e && DataModule_65(e),
        v
          ? m(this, e)
          : s(
              g(this),
              (function (e) {
                return function (t, n) {
                  return undefined !== e
                    ? +e(t, n) || 0
                    : n != n
                      ? -1
                      : t != t
                        ? 1
                        : 0 === t && 0 === n
                          ? 1 / t > 0 && 1 / n < 0
                            ? 1
                            : -1
                          : t > n;
                };
              })(e)
            )
      );
    },
    !v || y
  );
}
