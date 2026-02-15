/**
 * Webpack Module #290
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(49) /* module_49 */,
      a = require(23) /* module_23 */,
      r = require(27) /* module_27 */,
      s = require(61) /* module_61 */,
      l = require(35) /* module_35 */,
      c = require(144) /* module_144 */,
      d = require(62) /* module_62 */,
      u = require(120) /* module_120 */,
      p = require(341) /* module_341 */,
      g = a.Symbol,
      h = g && g.prototype;
    if (i && l(g) && (!("description" in h) || undefined !== g().description)) {
      var f = {},
        m = function () {
          var e =
              arguments.length < 1 || undefined === arguments[0]
                ? undefined
                : d(arguments[0]),
            t = c(h, this) ? new g(e) : undefined === e ? g() : g(e);
          return "" === e && (f[t] = true), t;
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
        configurable: true,
        get: function () {
          var e = v(this);
          if (s(f, e)) return "";
          var t = _(e),
            n = y ? C(t, 7, -1) : w(t, b, "$1");
          return "" === n ? undefined : n;
        },
      }),
        o({ global: true, constructor: true, forced: true }, { Symbol: m });
    }
  }