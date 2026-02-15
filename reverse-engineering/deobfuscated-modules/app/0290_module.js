/**
 * Webpack Module #290
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(49) /* hasOwnProperty_wrapper */,
      a = require(23) /* globalThis */,
      r = require(27) /* uncurryThis */,
      s = require(61) /* module_61 */,
      l = require(35) /* anObject */,
      c = require(144) /* stub_requires_27 */,
      d = require(62) /* requireObjectCoercible */,
      u = require(120) /* module_120 */,
      p = require(341) /* copyConstructorProperties */,
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