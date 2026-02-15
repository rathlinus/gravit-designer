/**
 * Webpack Module #181
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(223) /* module_223 */,
      a = require(21) /* tryCall */,
      r = require(324) /* module_324 */,
      s = require(37) /* toString_default */,
      l = require(244) /* module_244 */,
      c = require(117) /* toStringTagSupport */,
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
            var require = s(this).byteLength,
              o = l(e, require),
              i = l(undefined === t ? require : t, require),
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