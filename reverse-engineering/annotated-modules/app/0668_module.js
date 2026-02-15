/**
 * Webpack Module #668
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(23) /* globalThis */,
      a = n(146) /* DataModule_146 */,
      r = n(37) /* toString_default */,
      s = n(35) /* anObject */,
      l = n(208) /* DataModule_208 */,
      c = n(120) /* module_120 */,
      d = n(420) /* module_420 */,
      u = n(21) /* tryCall */,
      p = n(61) /* module_61 */,
      g = n(43) /* wellKnownSymbol */,
      h = n(251) /* Exports_GGY */.IteratorPrototype,
      f = n(49) /* hasOwnProperty_wrapper */,
      m = n(74) /* createNonEnumerableProperty */,
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
              configurable: !0,
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
      o({ global: !0, constructor: !0, forced: b }, { Iterator: w });
  }