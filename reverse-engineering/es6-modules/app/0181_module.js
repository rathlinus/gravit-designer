/**
 * Webpack Module #181
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    DataModule_223 = require(223) /* DataModule_223 */,
    tryCall = require(21) /* tryCall */,
    r = require(324) /* polyfill_ArrayBuffer_DataView */,
    toString_default = require(37) /* toString_default */,
    l = require(244) /* module_244 */,
    toStringTagSupport = require(117) /* toStringTagSupport */,
    d = r.ArrayBuffer,
    u = r.DataView,
    p = u.prototype,
    g = DataModule_223(d.prototype.slice),
    h = DataModule_223(p.getUint8),
    f = DataModule_223(p.setUint8);
  core_export(
    {
      target: 'ArrayBuffer',
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
            DataModule_223 = l(undefined === t ? require : t, require),
            tryCall = new d(toStringTagSupport(DataModule_223 - core_export)),
            r = new u(this),
            p = new u(tryCall),
            m = 0;
          core_export < DataModule_223;
        )
          f(p, m++, h(r, core_export++));
        return tryCall;
      },
    }
  );
}
