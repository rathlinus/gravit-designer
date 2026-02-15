/**
 * Webpack Module #683
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(121) /* module_121 */,
      a = require(65) /* module_65 */,
      r = require(37) /* toString_default */,
      s = require(143) /* module_143 */,
      l = require(102) /* module_102 */,
      c = require(149) /* module_149 */,
      d = require(200) /* advanceStringIndex */,
      u = require(21) /* tryCall */,
      p = TypeError,
      g = u(function () {
        [].keys().reduce(function () {}, undefined);
      }),
      h = !g && c("reduce", p);
    o(
      { target: "Iterator", proto: true, real: true, forced: g || h },
      {
        reduce: function (e) {
          r(this);
          try {
            a(e);
          } catch (e) {
            l(this, "throw", e);
          }
          var t = arguments.length < 2,
            n = t ? undefined : arguments[1];
          if (h) return d(h, this, t ? [e] : [e, n]);
          var o = s(this),
            c = 0;
          if (
            (i(
              o,
              function (o) {
                t ? ((t = false), (n = o)) : (n = e(n, o, c)), c++;
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