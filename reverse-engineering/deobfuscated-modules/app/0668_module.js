/**
 * Webpack Module #668
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      globalThis = require(23) /* globalThis */,
      a = require(146) /* module_146 */,
      toString_default = require(37) /* toString_default */,
      anObject = require(35) /* anObject */,
      l = require(208) /* module_208 */,
      c = require(120) /* module_120 */,
      d = require(420) /* module_420 */,
      tryCall = require(21) /* tryCall */,
      p = require(61) /* module_61 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      GGY = require(251) /* Exports_GGY */.IteratorPrototype,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      y = wellKnownSymbol("toStringTag"),
      v = TypeError,
      _ = globalThis.Iterator,
      b =
        createNonEnumerableProperty ||
        !anObject(_) ||
        _.prototype !== GGY ||
        !tryCall(function () {
          _({});
        }),
      w = function () {
        if ((a(this, GGY), l(this) === GGY))
          throw new v("Abstract class Iterator not directly constructable");
      },
      C = function (e, t) {
        hasOwnProperty_wrapper
          ? c(GGY, e, {
              configurable: true,
              get: function () {
                return t;
              },
              set: function (t) {
                if ((toString_default(this), this === GGY))
                  throw new v("You can't redefine this property");
                p(this, e) ? (this[e] = t) : d(this, e, t);
              },
            })
          : (GGY[e] = t);
      };
    p(GGY, y) || C(y, "Iterator"),
      (!b && p(GGY, "constructor") && GGY.constructor !== Object) ||
        C("constructor", w),
      (w.prototype = GGY),
      core_export({ global: true, constructor: true, forced: b }, { Iterator: w });
  }