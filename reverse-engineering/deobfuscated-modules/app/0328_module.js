/**
 * Webpack Module #328
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(27) /* module_27 */,
      a = require(65) /* module_65 */,
      r = require(93) /* module_93 */,
      s = require(101) /* module_101 */,
      l = require(1038) /* module_1038 */,
      c = require(62) /* module_62 */,
      d = require(21) /* module_21 */,
      u = require(351) /* module_351 */,
      p = require(350) /* module_350 */,
      g = require(521) /* module_521 */,
      h = require(522) /* module_522 */,
      f = require(213) /* module_213 */,
      m = require(523) /* module_523 */,
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
          var exports,
            module,
            require,
            o,
            i = "";
          for (exports = 65; exports < 76; exports++) {
            switch (((module = String.fromCharCode(exports)), exports)) {
              case 66:
              case 69:
              case 70:
              case 72:
                require = 3;
                break;
              case 68:
              case 71:
                require = 4;
                break;
              default:
                require = 2;
            }
            for (o = 0; o < 47; o++) y.push({ k: module + o, v: require });
          }
          for (
            y.sort(function (e, t) {
              return t.v - e.v;
            }),
              o = 0;
            o < y.length;
            o++
          )
            (module = y[o].k.charAt(0)), i.charAt(i.length - 1) !== module && (i += module);
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