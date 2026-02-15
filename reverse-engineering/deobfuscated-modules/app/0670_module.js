/**
 * Webpack Module #670
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      DataModule_121 = require(121) /* DataModule_121 */,
      DataModule_65 = require(65) /* DataModule_65 */,
      toString_default = require(37) /* toString_default */,
      l = require(143) /* module_143 */,
      DataModule_102 = require(102) /* DataModule_102 */,
      d = require(149) /* module_149 */("forEach", TypeError);
    core_export(
      { target: "Iterator", proto: true, real: true, forced: d },
      {
        forEach: function (e) {
          toString_default(this);
          try {
            DataModule_65(e);
          } catch (e) {
            DataModule_102(this, "throw", e);
          }
          if (d) return isCallable(d, this, e);
          var t = l(this),
            n = 0;
          DataModule_121(
            t,
            function (t) {
              e(t, n++);
            },
            { IS_RECORD: true }
          );
        },
      }
    );
  }