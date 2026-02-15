/**
 * Webpack Module #683
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(121) /* module_121 */,
      a = n(65) /* module_65 */,
      r = n(37) /* module_37 */,
      s = n(143) /* module_143 */,
      l = n(102) /* module_102 */,
      c = n(149) /* module_149 */,
      d = n(200) /* module_200 */,
      u = n(21) /* module_21 */,
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