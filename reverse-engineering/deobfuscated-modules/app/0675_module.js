/**
 * Webpack Module #675
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(124) /* module_124 */,
      isCallable = require(29) /* isCallable */,
      a = require(93) /* stub_requires_92 */,
      DataModule_323 = require(323) /* DataModule_323 */,
      DataModule_305 = require(305) /* DataModule_305 */,
      DataModule_302 = require(302) /* DataModule_302 */,
      c = require(101) /* stub_requires_117 */,
      d = require(420) /* module_420 */,
      DataModule_246 = require(246) /* DataModule_246 */,
      DataModule_204 = require(204) /* DataModule_204 */,
      g = Array;
    exports.exports = function (e) {
      var t = a(e),
        n = DataModule_302(this),
        h = arguments.length,
        f = h > 1 ? arguments[1] : undefined,
        m = undefined !== f;
      m && (f = o(f, h > 2 ? arguments[2] : undefined));
      var y,
        v,
        _,
        b,
        w,
        C,
        x = DataModule_204(t),
        S = 0;
      if (!x || (this === g && DataModule_305(x)))
        for (y = c(t), v = n ? new this(y) : g(y); y > S; S++)
          (C = m ? f(t[S], S) : t[S]), d(v, S, C);
      else
        for (
          v = n ? new this() : [], w = (b = DataModule_246(t, x)).next;
          !(_ = isCallable(w, b)).done;
          S++
        )
          (C = m ? DataModule_323(b, f, [_.value, S], true) : _.value), d(v, S, C);
      return (v.length = S), v;
    };
  }