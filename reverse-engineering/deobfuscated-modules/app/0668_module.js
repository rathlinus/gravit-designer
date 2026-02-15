/**
 * Webpack Module #668
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(23) /* globalThis */,
      a = require(146) /* module_146 */,
      r = require(37) /* toString_default */,
      s = require(35) /* anObject */,
      l = require(208) /* module_208 */,
      c = require(120) /* module_120 */,
      d = require(420) /* module_420 */,
      u = require(21) /* tryCall */,
      p = require(61) /* module_61 */,
      g = require(43) /* wellKnownSymbol */,
      h = require(251) /* Exports_GGY */.IteratorPrototype,
      f = require(49) /* hasOwnProperty_wrapper */,
      m = require(74) /* createNonEnumerableProperty */,
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