/**
 * Webpack Module #679
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(29) /* isCallable */,
      a = n(121) /* DataModule_121 */,
      r = n(65) /* DataModule_65 */,
      s = n(37) /* toString_default */,
      l = n(143) /* module_143 */,
      c = n(102) /* DataModule_102 */,
      d = n(149) /* module_149 */("find", TypeError);
    o(
      { target: "Iterator", proto: !0, real: !0, forced: d },
      {
        find: function (e) {
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
              if (e(t, n++)) return o(t);
            },
            { IS_RECORD: !0, INTERRUPTED: !0 }
          ).result;
        },
      }
    );
  }