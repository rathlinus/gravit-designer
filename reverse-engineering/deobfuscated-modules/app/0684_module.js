/**
 * Webpack Module #684
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */,
      a = require(121) /* module_121 */,
      r = require(65) /* module_65 */,
      s = require(37) /* toString_default */,
      l = require(143) /* module_143 */,
      c = require(102) /* module_102 */,
      d = require(149) /* module_149 */("some", TypeError);
    o(
      { target: "Iterator", proto: true, real: true, forced: d },
      {
        some: function (e) {
          s(this);
          try {
            r(e);
          } catch (e) {
            c(this, "throw", e);
          }
          if (d) return i(d, this, e);
          var t = l(this),
            n = 0;
          return a(
            t,
            function (t, o) {
              if (e(t, n++)) return o();
            },
            { IS_RECORD: true, INTERRUPTED: true }
          ).stopped;
        },
      }
    );
  }