/**
 * Webpack Module #181
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(223) /* module_223 */,
      a = n(21) /* module_21 */,
      r = n(324) /* module_324 */,
      s = n(37) /* module_37 */,
      l = n(244) /* module_244 */,
      c = n(117) /* module_117 */,
      d = r.ArrayBuffer,
      u = r.DataView,
      p = u.prototype,
      g = i(d.prototype.slice),
      h = i(p.getUint8),
      f = i(p.setUint8);
    o(
      {
        target: "ArrayBuffer",
        proto: true,
        unsafe: true,
        forced: a(function () {
          return !new d(2).slice(1, undefined).byteLength;
        }),
      },
      {
        slice: function (e, t) {
          if (g && undefined === t) return g(s(this), e);
          for (
            var n = s(this).byteLength,
              o = l(e, n),
              i = l(undefined === t ? n : t, n),
              a = new d(c(i - o)),
              r = new u(this),
              p = new u(a),
              m = 0;
            o < i;

          )
            f(p, m++, h(r, o++));
          return a;
        },
      }
    );
  }