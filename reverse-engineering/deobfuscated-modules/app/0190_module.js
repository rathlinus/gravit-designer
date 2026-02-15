/**
 * Webpack Module #190
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(29) /* module_29 */,
      a = require(152) /* module_152 */,
      r = require(101) /* module_101 */,
      s = require(428) /* module_428 */,
      l = require(93) /* module_93 */,
      c = require(21) /* module_21 */,
      d = o.RangeError,
      u = o.Int8Array,
      p = u && u.prototype,
      g = p && p.set,
      h = a.aTypedArray,
      f = a.exportTypedArrayMethod,
      m = !c(function () {
        var e = new Uint8ClampedArray(2);
        return i(g, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
      }),
      y =
        m &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        c(function () {
          var e = new u(2);
          return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
    f(
      "set",
      function (e) {
        h(this);
        var t = s(arguments.length > 1 ? arguments[1] : undefined, 1),
          n = l(e);
        if (m) return i(g, this, n, t);
        var o = this.length,
          a = r(n),
          c = 0;
        if (a + t > o) throw new d("Wrong length");
        for (; c < a; ) this[t + c] = n[c++];
      },
      !m || y
    );
  }