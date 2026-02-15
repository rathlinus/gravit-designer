/**
 * Webpack Module #19
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(184) /* toIndexedObject */,
      i = require(360) /* internalObjectKeys */,
      a = require(203) /* iteratorPrototype */,
      r = require(80) /* internalState */,
      s = require(88) /* createPropertyDescriptor */.f,
      l = require(418) /* defineIterator */,
      c = require(252) /* toStringClassof */,
      d = require(74) /* createNonEnumerableProperty */,
      u = require(49) /* hasOwnProperty_wrapper */,
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