/**
 * Webpack Module #670
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */,
      a = n(121) /* module_121 */,
      r = n(65) /* module_65 */,
      s = n(37) /* module_37 */,
      l = n(143) /* module_143 */,
      c = n(102) /* module_102 */,
      d = n(149) /* module_149 */("forEach", TypeError);
    o(
      { target: "Iterator", proto: !0, real: !0, forced: d },
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
            { IS_RECORD: !0 }
          );
        },
      }
    );
  }