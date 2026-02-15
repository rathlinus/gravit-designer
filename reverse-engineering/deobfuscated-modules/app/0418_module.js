/**
 * Webpack Module #418
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      GURABLE = require(199) /* Exports_GURABLE */,
      anObject = require(35) /* anObject */,
      l = require(419) /* module_419 */,
      c = require(208) /* module_208 */,
      d = require(175) /* module_175 */,
      setToStringTag = require(137) /* setToStringTag */,
      createProperty = require(100) /* createProperty */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      iteratorPrototype = require(203) /* iteratorPrototype */,
      GGY = require(251) /* Exports_GGY */,
      y = GURABLE.PROPER,
      v = GURABLE.CONFIGURABLE,
      _ = GGY.IteratorPrototype,
      b = GGY.BUGGY_SAFARI_ITERATORS,
      w = wellKnownSymbol("iterator"),
      C = function () {
        return this;
      };
    exports.exports = function (e, t, n, GURABLE, wellKnownSymbol, GGY, x) {
      l(n, t, GURABLE);
      var S,
        E,
        A,
        T = function (e) {
          if (e === wellKnownSymbol && I) return I;
          if (!b && e && e in D) return D[e];
          switch (e) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        G = t + " Iterator",
        P = false,
        D = e.prototype,
        L = D[w] || D["@@iterator"] || (wellKnownSymbol && D[wellKnownSymbol]),
        I = (!b && L) || T(wellKnownSymbol),
        k = ("Array" === t && D.entries) || L;
      if (
        (k &&
          (S = c(k.call(new e()))) !== Object.prototype &&
          S.next &&
          (createNonEnumerableProperty || c(S) === _ || (d ? d(S, _) : anObject(S[w]) || defineBuiltIn(S, w, C)),
          setToStringTag(S, G, true, true),
          createNonEnumerableProperty && (iteratorPrototype[G] = C)),
        y &&
          "values" === wellKnownSymbol &&
          L &&
          "values" !== L.name &&
          (!createNonEnumerableProperty && v
            ? createProperty(D, "name", "values")
            : ((P = true),
              (I = function () {
                return isCallable(L, this);
              }))),
        wellKnownSymbol)
      )
        if (
          ((E = {
            values: T("values"),
            keys: GGY ? I : T("keys"),
            entries: T("entries"),
          }),
          x)
        )
          for (A in E) (b || P || !(A in D)) && defineBuiltIn(D, A, E[A]);
        else core_export({ target: t, proto: true, forced: b || P }, E);
      return (createNonEnumerableProperty && !x) || D[w] === I || defineBuiltIn(D, w, I, { name: wellKnownSymbol }), (iteratorPrototype[t] = I), E;
    };
  }