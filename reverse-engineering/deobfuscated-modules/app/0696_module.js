/**
 * Webpack Module #696
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(124) /* module_124 */,
      isCallable = require(29) /* isCallable */,
      DataModule_408 = require(408) /* DataModule_408 */,
      r = require(93) /* stub_requires_92 */,
      s = require(101) /* stub_requires_117 */,
      DataModule_246 = require(246) /* DataModule_246 */,
      DataModule_204 = require(204) /* DataModule_204 */,
      DataModule_305 = require(305) /* DataModule_305 */,
      DataModule_697 = require(697) /* DataModule_697 */,
      p = require(152) /* polyfill_TypedArrays */.aTypedArrayConstructor,
      DataModule_429 = require(429) /* DataModule_429 */;
    exports.exports = function (e) {
      var t,
        n,
        h,
        f,
        m,
        y,
        v,
        _,
        b = DataModule_408(this),
        w = r(e),
        C = arguments.length,
        x = C > 1 ? arguments[1] : undefined,
        S = undefined !== x,
        E = DataModule_204(w);
      if (E && !DataModule_305(E))
        for (_ = (v = DataModule_246(w, E)).next, w = []; !(y = isCallable(_, v)).done; )
          w.push(y.value);
      for (
        S && C > 2 && (x = o(x, arguments[2])),
          n = s(w),
          h = new (p(b))(n),
          f = DataModule_697(h),
          t = 0;
        n > t;
        t++
      )
        (m = S ? x(w[t], t) : w[t]), (h[t] = f ? DataModule_429(m) : +m);
      return h;
    };
  }