/**
 * Webpack Module #683
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    DataModule_121 = require(121) /* DataModule_121 */,
    DataModule_65 = require(65) /* DataModule_65 */,
    toString_default = require(37) /* toString_default */,
    s = require(143) /* module_143 */,
    DataModule_102 = require(102) /* DataModule_102 */,
    c = require(149) /* module_149 */,
    advanceStringIndex = require(200) /* advanceStringIndex */,
    tryCall = require(21) /* tryCall */,
    p = TypeError,
    g = tryCall(function () {
      [].keys().reduce(function () {}, undefined);
    }),
    h = !g && c('reduce', p);
  core_export(
    { target: 'Iterator', proto: true, real: true, forced: g || h },
    {
      reduce: function (e) {
        toString_default(this);
        try {
          DataModule_65(e);
        } catch (e) {
          DataModule_102(this, 'throw', e);
        }
        var t = arguments.length < 2,
          n = t ? undefined : arguments[1];
        if (h) return advanceStringIndex(h, this, t ? [e] : [e, n]);
        var core_export = s(this),
          c = 0;
        if (
          (DataModule_121(
            core_export,
            function (core_export) {
              (t ? ((t = false), (n = core_export)) : (n = e(n, core_export, c)), c++);
            },
            { IS_RECORD: true }
          ),
          t)
        )
          throw new p('Reduce of empty iterator with no initial value');
        return n;
      },
    }
  );
}
