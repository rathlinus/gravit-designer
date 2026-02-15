/**
 * Webpack Module #181
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(223) /* module_223 */,
      tryCall = require(21) /* tryCall */,
      r = require(324) /* module_324 */,
      toString_default = require(37) /* toString_default */,
      l = require(244) /* module_244 */,
      toStringTagSupport = require(117) /* toStringTagSupport */,
      d = r.ArrayBuffer,
      u = r.DataView,
      p = u.prototype,
      g = i(d.prototype.slice),
      h = i(p.getUint8),
      f = i(p.setUint8);
    core_export(
      {
        target: "ArrayBuffer",
        proto: true,
        unsafe: true,
        forced: tryCall(function () {
          return !new d(2).slice(1, undefined).byteLength;
        }),
      },
      {
        slice: function (e, t) {
          if (g && undefined === t) return g(toString_default(this), e);
          for (
            var require = toString_default(this).byteLength,
              core_export = l(e, require),
              i = l(undefined === t ? require : t, require),
              tryCall = new d(toStringTagSupport(i - core_export)),
              r = new u(this),
              p = new u(tryCall),
              m = 0;
            core_export < i;

          )
            f(p, m++, h(r, core_export++));
          return tryCall;
        },
      }
    );
  }