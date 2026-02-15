/**
 * Webpack Module #558
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(27) /* uncurryThis */,
      a = require(259) /* module_259 */,
      r = require(46) /* toLength */,
      s = require(61) /* module_61 */,
      l = require(88) /* createPropertyDescriptor */.f,
      c = require(243) /* module_243 */,
      d = require(1103) /* module_1103 */,
      u = require(1104) /* module_1104 */,
      p = require(258) /* module_258 */,
      g = require(786) /* module_786 */,
      h = false,
      f = p("meta"),
      m = 0,
      y = function (e) {
        l(e, f, { value: { objectID: "O" + m++, weakData: {} } });
      },
      v = (exports.exports = {
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