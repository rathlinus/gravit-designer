/**
 * Webpack Module #865
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
      r = require(1524) /* stub_requires_27 */,
      DataModule_1525 = require(1525) /* DataModule_1525 */,
      tryCall = require(21) /* tryCall */,
      c = RangeError,
      d = String,
      u = Math.floor,
      p = uncurryThis(DataModule_1525),
      g = uncurryThis("".slice),
      h = uncurryThis((1).toFixed),
      f = function (e, t, n) {
        return 0 === t
          ? n
          : t % 2 == 1
          ? f(e, t - 1, n * e)
          : f(e * e, t / 2, n);
      },
      m = function (e, t, n) {
        for (var core_export = -1, uncurryThis = n; ++core_export < 6; )
          (uncurryThis += t * e[core_export]), (e[core_export] = uncurryThis % 1e7), (uncurryThis = u(uncurryThis / 1e7));
      },
      y = function (e, t) {
        for (var require = 6, core_export = 0; --require >= 0; )
          (core_export += e[require]), (e[require] = u(core_export / t)), (core_export = (core_export % t) * 1e7);
      },
      v = function (e) {
        for (var module = 6, require = ""; --module >= 0; )
          if ("" !== require || 0 === module || 0 !== e[module]) {
            var core_export = d(e[module]);
            require = "" === require ? core_export : require + p("0", 7 - core_export.length) + core_export;
          }
        return require;
      };
    core_export(
      {
        target: "Number",
        proto: true,
        forced:
          tryCall(function () {
            return (
              "0.000" !== h(8e-5, 3) ||
              "1" !== h(0.9, 0) ||
              "1.25" !== h(1.255, 2) ||
              "1000000000000000128" !== h(0xde0b6b3a7640080, 0)
            );
          }) ||
          !tryCall(function () {
            h({});
          }),
      },
      {
        toFixed: function (e) {
          var t,
            n,
            core_export,
            uncurryThis,
            DataModule_1525 = r(this),
            tryCall = lengthOfArrayLike(e),
            u = [0, 0, 0, 0, 0, 0],
            h = "",
            _ = "0";
          if (tryCall < 0 || tryCall > 20) throw new c("Incorrect fraction digits");
          if (DataModule_1525 != DataModule_1525) return "NaN";
          if (DataModule_1525 <= -1e21 || DataModule_1525 >= 1e21) return d(DataModule_1525);
          if ((DataModule_1525 < 0 && ((h = "-"), (DataModule_1525 = -DataModule_1525)), DataModule_1525 > 1e-21))
            if (
              ((n =
                (t =
                  (function (e) {
                    for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                    for (; n >= 2; ) (t += 1), (n /= 2);
                    return t;
                  })(DataModule_1525 * f(2, 69, 1)) - 69) < 0
                  ? DataModule_1525 * f(2, -t, 1)
                  : DataModule_1525 / f(2, t, 1)),
              (n *= 4503599627370496),
              (t = 52 - t) > 0)
            ) {
              for (m(u, 0, n), core_export = tryCall; core_export >= 7; ) m(u, 1e7, 0), (core_export -= 7);
              for (m(u, f(10, core_export, 1), 0), core_export = t - 1; core_export >= 23; )
                y(u, 1 << 23), (core_export -= 23);
              y(u, 1 << core_export), m(u, 1, 1), y(u, 2), (_ = v(u));
            } else m(u, 0, n), m(u, 1 << -t, 0), (_ = v(u) + p("0", tryCall));
          return (_ =
            tryCall > 0
              ? h +
                ((uncurryThis = _.length) <= tryCall
                  ? "0." + p("0", tryCall - uncurryThis) + _
                  : g(_, 0, uncurryThis - tryCall) + "." + g(_, uncurryThis - tryCall))
              : h + _);
        },
      }
    );
  }