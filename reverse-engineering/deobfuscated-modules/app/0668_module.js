/**
 * Webpack Module #668
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(23) /* module_23 */,
      a = n(146) /* module_146 */,
      r = n(37) /* module_37 */,
      s = n(35) /* module_35 */,
      l = n(208) /* module_208 */,
      c = n(120) /* module_120 */,
      d = n(420) /* module_420 */,
      u = n(21) /* module_21 */,
      p = n(61) /* module_61 */,
      g = n(43) /* module_43 */,
      h = n(251) /* Exports_GGY */.IteratorPrototype,
      f = n(49) /* module_49 */,
      m = n(74) /* module_74 */,
      y = g("toStringTag"),
      v = TypeError,
      _ = i.Iterator,
      b =
        m ||
        !s(_) ||
        _.prototype !== h ||
        !u(function () {
          _({});
        }),
      w = function () {
        if ((a(this, h), l(this) === h))
          throw new v("Abstract class Iterator not directly constructable");
      },
      C = function (e, t) {
        f
          ? c(h, e, {
              configurable: true,
              get: function () {
                return t;
              },
              set: function (t) {
                if ((r(this), this === h))
                  throw new v("You can't redefine this property");
                p(this, e) ? (this[e] = t) : d(this, e, t);
              },
            })
          : (h[e] = t);
      };
    p(h, y) || C(y, "Iterator"),
      (!b && p(h, "constructor") && h.constructor !== Object) ||
        C("constructor", w),
      (w.prototype = h),
      o({ global: true, constructor: true, forced: b }, { Iterator: w });
  }