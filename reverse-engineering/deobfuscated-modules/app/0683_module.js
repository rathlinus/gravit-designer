/**
 * Webpack Module #683
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(121) /* module_121 */,
      a = require(65) /* module_65 */,
      toString_default = require(37) /* toString_default */,
      s = require(143) /* module_143 */,
      l = require(102) /* module_102 */,
      c = require(149) /* module_149 */,
      advanceStringIndex = require(200) /* advanceStringIndex */,
      tryCall = require(21) /* tryCall */,
      p = TypeError,
      g = tryCall(function () {
        [].keys().reduce(function () {}, undefined);
      }),
      h = !g && c("reduce", p);
    core_export(
      { target: "Iterator", proto: true, real: true, forced: g || h },
      {
        reduce: function (e) {
          toString_default(this);
          try {
            a(e);
          } catch (e) {
            l(this, "throw", e);
          }
          var t = arguments.length < 2,
            n = t ? undefined : arguments[1];
          if (h) return advanceStringIndex(h, this, t ? [e] : [e, n]);
          var core_export = s(this),
            c = 0;
          if (
            (i(
              core_export,
              function (core_export) {
                t ? ((t = false), (n = core_export)) : (n = e(n, core_export, c)), c++;
              },
              { IS_RECORD: true }
            ),
            t)
          )
            throw new p("Reduce of empty iterator with no initial value");
          return n;
        },
      }
    );
  }