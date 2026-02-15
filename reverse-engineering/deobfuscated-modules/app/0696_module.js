/**
 * Webpack Module #696
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(124) /* module_124 */,
      isCallable = require(29) /* isCallable */,
      a = require(408) /* module_408 */,
      r = require(93) /* stub_requires_92 */,
      s = require(101) /* stub_requires_117 */,
      l = require(246) /* module_246 */,
      c = require(204) /* module_204 */,
      d = require(305) /* module_305 */,
      u = require(697) /* module_697 */,
      p = require(152) /* module_152 */.aTypedArrayConstructor,
      g = require(429) /* module_429 */;
    exports.exports = function (e) {
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
        x = C > 1 ? arguments[1] : undefined,
        S = undefined !== x,
        E = c(w);
      if (E && !d(E))
        for (_ = (v = l(w, E)).next, w = []; !(y = isCallable(_, v)).done; )
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