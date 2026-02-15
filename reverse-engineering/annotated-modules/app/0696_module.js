/**
 * Webpack Module #696
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(124) /* module_124 */,
      i = n(29) /* isCallable */,
      a = n(408) /* module_408 */,
      r = n(93) /* stub_requires_92 */,
      s = n(101) /* stub_requires_117 */,
      l = n(246) /* module_246 */,
      c = n(204) /* module_204 */,
      d = n(305) /* module_305 */,
      u = n(697) /* module_697 */,
      p = n(152) /* module_152 */.aTypedArrayConstructor,
      g = n(429) /* module_429 */;
    e.exports = function (e) {
      var t,
        n,
        h,
        f,
        m,
        y,
        v,
        _,
        b = a(this),
        w = r(e),
        C = arguments.length,
        x = C > 1 ? arguments[1] : void 0,
        S = void 0 !== x,
        E = c(w);
      if (E && !d(E))
        for (_ = (v = l(w, E)).next, w = []; !(y = i(_, v)).done; )
          w.push(y.value);
      for (
        S && C > 2 && (x = o(x, arguments[2])),
          n = s(w),
          h = new (p(b))(n),
          f = u(h),
          t = 0;
        n > t;
        t++
      )
        (m = S ? x(w[t], t) : w[t]), (h[t] = f ? g(m) : +m);
      return h;
    };
  }