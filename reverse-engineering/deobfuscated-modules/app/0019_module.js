/**
 * Webpack Module #19
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toIndexedObject = require(184) /* toIndexedObject */,
      internalObjectKeys = require(360) /* internalObjectKeys */,
      iteratorPrototype = require(203) /* iteratorPrototype */,
      internalState = require(80) /* internalState */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f,
      defineIterator = require(418) /* defineIterator */,
      toStringClassof = require(252) /* toStringClassof */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      p = internalState.set,
      g = internalState.getterFor("Array Iterator");
    exports.exports = defineIterator(
      Array,
      "Array",
      function (e, t) {
        p(this, { type: "Array Iterator", target: toIndexedObject(e), index: 0, kind: t });
      },
      function () {
        var e = g(this),
          t = e.target,
          n = e.index++;
        if (!t || n >= t.length) return (e.target = null), toStringClassof(undefined, true);
        switch (e.kind) {
          case "keys":
            return toStringClassof(n, false);
          case "values":
            return toStringClassof(t[n], false);
        }
        return toStringClassof([n, t[n]], false);
      },
      "values"
    );
    var h = (iteratorPrototype.Arguments = iteratorPrototype.Array);
    if ((internalObjectKeys("keys"), internalObjectKeys("values"), internalObjectKeys("entries"), !createNonEnumerableProperty && hasOwnProperty_wrapper && "values" !== h.name))
      try {
        createPropertyDescriptor(h, "name", { value: "values" });
      } catch (e) {}
  }