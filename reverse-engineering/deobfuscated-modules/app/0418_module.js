/**
 * Webpack Module #418
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */,
      a = require(74) /* createNonEnumerableProperty */,
      r = require(199) /* Exports_GURABLE */,
      s = require(35) /* anObject */,
      l = require(419) /* module_419 */,
      c = require(208) /* module_208 */,
      d = require(175) /* module_175 */,
      u = require(137) /* setToStringTag */,
      p = require(100) /* createProperty */,
      g = require(79) /* defineBuiltIn */,
      h = require(43) /* wellKnownSymbol */,
      f = require(203) /* iteratorPrototype */,
      m = require(251) /* Exports_GGY */,
      y = r.PROPER,
      v = r.CONFIGURABLE,
      _ = m.IteratorPrototype,
      b = m.BUGGY_SAFARI_ITERATORS,
      w = h("iterator"),
      C = function () {
        return this;
      };
    exports.exports = function (e, t, n, r, h, m, x) {
      l(n, t, r);
      var S,
        E,
        A,
        T = function (e) {
          if (e === h && I) return I;
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
        L = D[w] || D["@@iterator"] || (h && D[h]),
        I = (!b && L) || T(h),
        k = ("Array" === t && D.entries) || L;
      if (
        (k &&
          (S = c(k.call(new e()))) !== Object.prototype &&
          S.next &&
          (a || c(S) === _ || (d ? d(S, _) : s(S[w]) || g(S, w, C)),
          u(S, G, true, true),
          a && (f[G] = C)),
        y &&
          "values" === h &&
          L &&
          "values" !== L.name &&
          (!a && v
            ? p(D, "name", "values")
            : ((P = true),
              (I = function () {
                return i(L, this);
              }))),
        h)
      )
        if (
          ((E = {
            values: T("values"),
            keys: m ? I : T("keys"),
            entries: T("entries"),
          }),
          x)
        )
          for (A in E) (b || P || !(A in D)) && g(D, A, E[A]);
        else o({ target: t, proto: true, forced: b || P }, E);
      return (a && !x) || D[w] === I || g(D, w, I, { name: h }), (f[t] = I), E;
    };
  }