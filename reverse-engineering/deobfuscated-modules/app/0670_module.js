/**
 * Webpack Module #670
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(29) /* module_29 */,
      a = require(121) /* module_121 */,
      r = require(65) /* module_65 */,
      s = require(37) /* module_37 */,
      l = require(143) /* module_143 */,
      c = require(102) /* module_102 */,
      d = require(149) /* module_149 */("forEach", TypeError);
    o(
      { target: "Iterator", proto: true, real: true, forced: d },
      {
        forEach: function (e) {
          s(this);
          try {
            r(e);
          } catch (e) {
            c(this, "throw", e);
          }
          if (d) return i(d, this, e);
          var t = l(this),
            n = 0;
          a(
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