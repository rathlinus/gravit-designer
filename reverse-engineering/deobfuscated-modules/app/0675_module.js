/**
 * Webpack Module #675
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(124) /* module_124 */,
      i = require(29) /* module_29 */,
      a = require(93) /* module_93 */,
      r = require(323) /* module_323 */,
      s = require(305) /* module_305 */,
      l = require(302) /* module_302 */,
      c = require(101) /* module_101 */,
      d = require(420) /* module_420 */,
      u = require(246) /* module_246 */,
      p = require(204) /* module_204 */,
      g = Array;
    exports.exports = function (e) {
      var t = a(e),
        n = l(this),
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
          (C = m ? r(b, f, [_.value, S], true) : _.value), d(v, S, C);
      return (v.length = S), v;
    };
  }