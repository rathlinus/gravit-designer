/**
 * Webpack Module #558
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      a = require(259) /* module_259 */,
      toLength = require(46) /* toLength */,
      s = require(61) /* module_61 */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f,
      c = require(243) /* module_243 */,
      DataModule_1103 = require(1103) /* DataModule_1103 */,
      DataModule_1104 = require(1104) /* DataModule_1104 */,
      DataModule_258 = require(258) /* DataModule_258 */,
      g = require(786) /* module_786 */,
      h = false,
      f = DataModule_258("meta"),
      m = 0,
      y = function (e) {
        createPropertyDescriptor(e, f, { value: { objectID: "O" + m++, weakData: {} } });
      },
      v = (exports.exports = {
        enable: function () {
          (v.enable = function () {}), (h = true);
          var e = c.f,
            t = uncurryThis([].splice),
            n = {};
          (n[f] = 1),
            e(n).length &&
              ((c.f = function (n) {
                for (var core_export = e(n), uncurryThis = 0, a = core_export.length; uncurryThis < a; uncurryThis++)
                  if (core_export[uncurryThis] === f) {
                    t(core_export, uncurryThis, 1);
                    break;
                  }
                return core_export;
              }),
              core_export(
                { target: "Object", stat: true, forced: true },
                { getOwnPropertyNames: DataModule_1103.f }
              ));
        },
        fastKey: function (e, t) {
          if (!toLength(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!s(e, f)) {
            if (!DataModule_1104(e)) return "F";
            if (!t) return "E";
            y(e);
          }
          return e[f].objectID;
        },
        getWeakData: function (e, t) {
          if (!s(e, f)) {
            if (!DataModule_1104(e)) return true;
            if (!t) return false;
            y(e);
          }
          return e[f].weakData;
        },
        onFreeze: function (e) {
          return g && h && DataModule_1104(e) && !s(e, f) && y(e), e;
        },
      });
    a[f] = true;
  }