/**
 * Webpack Module #290
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      globalThis = require(23) /* globalThis */,
      uncurryThis = require(27) /* uncurryThis */,
      s = require(61) /* module_61 */,
      anObject = require(35) /* anObject */,
      c = require(144) /* stub_requires_27 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      u = require(120) /* module_120 */,
      copyConstructorProperties = require(341) /* copyConstructorProperties */,
      g = globalThis.Symbol,
      h = g && g.prototype;
    if (hasOwnProperty_wrapper && anObject(g) && (!("description" in h) || undefined !== g().description)) {
      var f = {},
        m = function () {
          var e =
              arguments.length < 1 || undefined === arguments[0]
                ? undefined
                : requireObjectCoercible(arguments[0]),
            t = c(h, this) ? new g(e) : undefined === e ? g() : g(e);
          return "" === e && (f[t] = true), t;
        };
      copyConstructorProperties(m, g), (m.prototype = h), (h.constructor = m);
      var y =
          "Symbol(description detection)" ===
          String(g("description detection")),
        v = uncurryThis(h.valueOf),
        _ = uncurryThis(h.toString),
        b = /^Symbol\((.*)\)[^)]+$/,
        w = uncurryThis("".replace),
        C = uncurryThis("".slice);
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
        core_export({ global: true, constructor: true, forced: true }, { Symbol: m });
    }
  }