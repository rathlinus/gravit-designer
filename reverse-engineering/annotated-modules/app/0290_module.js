/**
 * Webpack Module #290
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(49) /* module_49 */,
      a = n(23) /* module_23 */,
      r = n(27) /* module_27 */,
      s = n(61) /* module_61 */,
      l = n(35) /* module_35 */,
      c = n(144) /* module_144 */,
      d = n(62) /* module_62 */,
      u = n(120) /* module_120 */,
      p = n(341) /* module_341 */,
      g = a.Symbol,
      h = g && g.prototype;
    if (i && l(g) && (!("description" in h) || void 0 !== g().description)) {
      var f = {},
        m = function () {
          var e =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : d(arguments[0]),
            t = c(h, this) ? new g(e) : void 0 === e ? g() : g(e);
          return "" === e && (f[t] = !0), t;
        };
      p(m, g), (m.prototype = h), (h.constructor = m);
      var y =
          "Symbol(description detection)" ===
          String(g("description detection")),
        v = r(h.valueOf),
        _ = r(h.toString),
        b = /^Symbol\((.*)\)[^)]+$/,
        w = r("".replace),
        C = r("".slice);
      u(h, "description", {
        configurable: !0,
        get: function () {
          var e = v(this);
          if (s(f, e)) return "";
          var t = _(e),
            n = y ? C(t, 7, -1) : w(t, b, "$1");
          return "" === n ? void 0 : n;
        },
      }),
        o({ global: !0, constructor: !0, forced: !0 }, { Symbol: m });
    }
  }