/**
 * Webpack Module #19
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(184) /* module_184 */,
      i = require(360) /* module_360 */,
      a = require(203) /* module_203 */,
      r = require(80) /* module_80 */,
      s = require(88) /* module_88 */.f,
      l = require(418) /* module_418 */,
      c = require(252) /* module_252 */,
      d = require(74) /* module_74 */,
      u = require(49) /* module_49 */,
      p = r.set,
      g = r.getterFor("Array Iterator");
    exports.exports = l(
      Array,
      "Array",
      function (e, t) {
        p(this, { type: "Array Iterator", target: o(e), index: 0, kind: t });
      },
      function () {
        var e = g(this),
          t = e.target,
          n = e.index++;
        if (!t || n >= t.length) return (e.target = null), c(undefined, true);
        switch (e.kind) {
          case "keys":
            return c(n, false);
          case "values":
            return c(t[n], false);
        }
        return c([n, t[n]], false);
      },
      "values"
    );
    var h = (a.Arguments = a.Array);
    if ((i("keys"), i("values"), i("entries"), !d && u && "values" !== h.name))
      try {
        s(h, "name", { value: "values" });
      } catch (e) {}
  }