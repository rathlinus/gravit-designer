/**
 * Webpack Module #328
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(27) /* uncurryThis */,
      a = n(65) /* DataModule_65 */,
      r = n(93) /* stub_requires_92 */,
      s = n(101) /* stub_requires_117 */,
      l = n(1038) /* DataModule_1038 */,
      c = n(62) /* requireObjectCoercible */,
      d = n(21) /* tryCall */,
      u = n(351) /* module_351 */,
      p = n(350) /* module_350 */,
      g = n(521) /* stub_requires_129 */,
      h = n(522) /* stub_requires_129 */,
      f = n(213) /* DataModule_213 */,
      m = n(523) /* stub_requires_129 */,
      y = [],
      v = i(y.sort),
      _ = i(y.push),
      b = d(function () {
        y.sort(void 0);
      }),
      w = d(function () {
        y.sort(null);
      }),
      C = p("sort"),
      x = !d(function () {
        if (f) return f < 70;
        if (!(g && g > 3)) {
          if (h) return !0;
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
      { target: "Array", proto: !0, forced: b || !w || !C || !x },
      {
        sort: function (e) {
          void 0 !== e && a(e);
          var t = r(this);
          if (x) return void 0 === e ? v(t) : v(t, e);
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
                  return void 0 === n
                    ? -1
                    : void 0 === t
                    ? 1
                    : void 0 !== e
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