/**
 * Webpack Module #401
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* module_27 */,
      i = n(21) /* module_21 */,
      a = n(35) /* module_35 */,
      r = n(61) /* module_61 */,
      s = n(49) /* module_49 */,
      l = n(199) /* Exports_GURABLE */.CONFIGURABLE,
      c = n(299) /* module_299 */,
      d = n(80) /* module_80 */,
      u = d.enforce,
      p = d.get,
      g = String,
      h = Object.defineProperty,
      f = o("".slice),
      m = o("".replace),
      y = o([].join),
      v =
        s &&
        !i(function () {
          return 8 !== h(function () {}, "length", { value: 8 }).length;
        }),
      _ = String(String).split("String"),
      b = (e.exports = function (e, t, n) {
        "Symbol(" === f(g(t), 0, 7) &&
          (t = "[" + m(g(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
          n && n.getter && (t = "get " + t),
          n && n.setter && (t = "set " + t),
          (!r(e, "name") || (l && e.name !== t)) &&
            (s ? h(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          v &&
            n &&
            r(n, "arity") &&
            e.length !== n.arity &&
            h(e, "length", { value: n.arity });
        try {
          n && r(n, "constructor") && n.constructor
            ? s && h(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var o = u(e);
        return (
          r(o, "source") || (o.source = y(_, "string" == typeof t ? t : "")), e
        );
      });
    Function.prototype.toString = b(function () {
      return (a(this) && p(this).source) || c(this);
    }, "toString");
  }