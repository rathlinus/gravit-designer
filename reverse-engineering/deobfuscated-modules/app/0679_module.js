/**
 * Webpack Module #679
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      a = require(121) /* module_121 */,
      r = require(65) /* module_65 */,
      toString_default = require(37) /* toString_default */,
      l = require(143) /* module_143 */,
      c = require(102) /* module_102 */,
      d = require(149) /* module_149 */("find", TypeError);
    core_export(
      { target: "Iterator", proto: true, real: true, forced: d },
      {
        find: function (e) {
          toString_default(this);
          try {
            r(e);
          } catch (e) {
            c(this, "throw", e);
          }
          if (d) return isCallable(d, this, e);
          var t = l(this),
            n = 0;
          return a(
            t,
            function (t, core_export) {
              if (e(t, n++)) return core_export(t);
            },
            { IS_RECORD: true, INTERRUPTED: true }
          ).result;
        },
      }
    );
  }