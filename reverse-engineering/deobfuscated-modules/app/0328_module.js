/**
 * Webpack Module #328
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(27) /* module_27 */,
      a = n(65) /* module_65 */,
      r = n(93) /* module_93 */,
      s = n(101) /* module_101 */,
      l = n(1038) /* module_1038 */,
      c = n(62) /* module_62 */,
      d = n(21) /* module_21 */,
      u = n(351) /* module_351 */,
      p = n(350) /* module_350 */,
      g = n(521) /* module_521 */,
      h = n(522) /* module_522 */,
      f = n(213) /* module_213 */,
      m = n(523) /* module_523 */,
      y = [],
      v = i(y.sort),
      _ = i(y.push),
      b = d(function () {
        y.sort(undefined);
      }),
      w = d(function () {
        y.sort(null);
      }),
      C = p("sort"),
      x = !d(function () {
        if (f) return f < 70;
        if (!(g && g > 3)) {
          if (h) return true;
          if (m) return m < 603;
          var e,
            t,
            n,
            o,
            i = "";
          for (e = 65; e < 76; e++) {
            switch (((t = String.fromCharCode(e)), e)) {
              case 66:
              case 69:
              case 70:
              case 72:
                n = 3;
                break;
              case 68:
              case 71:
                n = 4;
                break;
              default:
                n = 2;
            }
            for (o = 0; o < 47; o++) y.push({ k: t + o, v: n });
          }
          for (
            y.sort(function (e, t) {
              return t.v - e.v;
            }),
              o = 0;
            o < y.length;
            o++
          )
            (t = y[o].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t);
          return "DGBEFHACIJK" !== i;
        }
      });
    o(
      { target: "Array", proto: true, forced: b || !w || !C || !x },
      {
        sort: function (e) {
          undefined !== e && a(e);
          var t = r(this);
          if (x) return undefined === e ? v(t) : v(t, e);
          var n,
            o,
            i = [],
            d = s(t);
          for (o = 0; o < d; o++) o in t && _(i, t[o]);
          for (
            u(
              i,
              (function (e) {
                return function (t, n) {
                  return undefined === n
                    ? -1
                    : undefined === t
                    ? 1
                    : undefined !== e
                    ? +e(t, n) || 0
                    : c(t) > c(n)
                    ? 1
                    : -1;
                };
              })(e)
            ),
              n = s(i),
              o = 0;
            o < n;

          )
            t[o] = i[o++];
          for (; o < d; ) l(t, o++);
          return t;
        },
      }
    );
  }