/**
 * Webpack Module #19
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(184) /* module_184 */,
      i = n(360) /* module_360 */,
      a = n(203) /* module_203 */,
      r = n(80) /* module_80 */,
      s = n(88) /* module_88 */.f,
      l = n(418) /* module_418 */,
      c = n(252) /* module_252 */,
      d = n(74) /* module_74 */,
      u = n(49) /* module_49 */,
      p = r.set,
      g = r.getterFor("Array Iterator");
    e.exports = l(
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