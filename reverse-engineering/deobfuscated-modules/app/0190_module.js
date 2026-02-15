/**
 * Webpack Module #190
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      isCallable = require(29) /* isCallable */,
      a = require(152) /* polyfill_TypedArrays */,
      r = require(101) /* stub_requires_117 */,
      s = require(428) /* module_428 */,
      l = require(93) /* stub_requires_92 */,
      tryCall = require(21) /* tryCall */,
      d = globalThis.RangeError,
      u = globalThis.Int8Array,
      p = u && u.prototype,
      g = p && p.set,
      h = a.aTypedArray,
      f = a.exportTypedArrayMethod,
      m = !tryCall(function () {
        var e = new Uint8ClampedArray(2);
        return isCallable(g, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
      }),
      y =
        m &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        tryCall(function () {
          var e = new u(2);
          return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
    f(
      "set",
      function (e) {
        h(this);
        var t = s(arguments.length > 1 ? arguments[1] : undefined, 1),
          n = l(e);
        if (m) return isCallable(g, this, n, t);
        var globalThis = this.length,
          a = r(n),
          tryCall = 0;
        if (a + t > globalThis) throw new d("Wrong length");
        for (; tryCall < a; ) this[t + tryCall] = n[tryCall++];
      },
      !m || y
    );
  }