/**
 * Webpack Module #675
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(124) /* module_124 */,
      i = n(29) /* isCallable */,
      a = n(93) /* stub_requires_92 */,
      r = n(323) /* DataModule_323 */,
      s = n(305) /* DataModule_305 */,
      l = n(302) /* DataModule_302 */,
      c = n(101) /* stub_requires_117 */,
      d = n(420) /* module_420 */,
      u = n(246) /* DataModule_246 */,
      p = n(204) /* DataModule_204 */,
      g = Array;
    e.exports = function (e) {
      var t = a(e),
        n = l(this),
        h = arguments.length,
        f = h > 1 ? arguments[1] : void 0,
        m = void 0 !== f;
      m && (f = o(f, h > 2 ? arguments[2] : void 0));
      var y,
        v,
        _,
        b,
        w,
        C,
        x = p(t),
        S = 0;
      if (!x || (this === g && s(x)))
        for (y = c(t), v = n ? new this(y) : g(y); y > S; S++)
          (C = m ? f(t[S], S) : t[S]), d(v, S, C);
      else
        for (
          v = n ? new this() : [], w = (b = u(t, x)).next;
          !(_ = i(w, b)).done;
          S++
        )
          (C = m ? r(b, f, [_.value, S], !0) : _.value), d(v, S, C);
      return (v.length = S), v;
    };
  }