/**
 * Webpack Module #558
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(27) /* module_27 */,
      a = n(259) /* module_259 */,
      r = n(46) /* module_46 */,
      s = n(61) /* module_61 */,
      l = n(88) /* module_88 */.f,
      c = n(243) /* module_243 */,
      d = n(1103) /* module_1103 */,
      u = n(1104) /* module_1104 */,
      p = n(258) /* module_258 */,
      g = n(786) /* module_786 */,
      h = false,
      f = p("meta"),
      m = 0,
      y = function (e) {
        l(e, f, { value: { objectID: "O" + m++, weakData: {} } });
      },
      v = (e.exports = {
        enable: function () {
          (v.enable = function () {}), (h = true);
          var e = c.f,
            t = i([].splice),
            n = {};
          (n[f] = 1),
            e(n).length &&
              ((c.f = function (n) {
                for (var o = e(n), i = 0, a = o.length; i < a; i++)
                  if (o[i] === f) {
                    t(o, i, 1);
                    break;
                  }
                return o;
              }),
              o(
                { target: "Object", stat: true, forced: true },
                { getOwnPropertyNames: d.f }
              ));
        },
        fastKey: function (e, t) {
          if (!r(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!s(e, f)) {
            if (!u(e)) return "F";
            if (!t) return "E";
            y(e);
          }
          return e[f].objectID;
        },
        getWeakData: function (e, t) {
          if (!s(e, f)) {
            if (!u(e)) return true;
            if (!t) return false;
            y(e);
          }
          return e[f].weakData;
        },
        onFreeze: function (e) {
          return g && h && u(e) && !s(e, f) && y(e), e;
        },
      });
    a[f] = true;
  }