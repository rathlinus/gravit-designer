/**
 * Webpack Module #418
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(29) /* isCallable */,
      a = n(74) /* createNonEnumerableProperty */,
      r = n(199) /* Exports_GURABLE */,
      s = n(35) /* anObject */,
      l = n(419) /* DataModule_419 */,
      c = n(208) /* DataModule_208 */,
      d = n(175) /* DataModule_175 */,
      u = n(137) /* setToStringTag */,
      p = n(100) /* createProperty */,
      g = n(79) /* defineBuiltIn */,
      h = n(43) /* wellKnownSymbol */,
      f = n(203) /* iteratorPrototype */,
      m = n(251) /* Exports_GGY */,
      y = r.PROPER,
      v = r.CONFIGURABLE,
      _ = m.IteratorPrototype,
      b = m.BUGGY_SAFARI_ITERATORS,
      w = h("iterator"),
      C = function () {
        return this;
      };
    e.exports = function (e, t, n, r, h, m, x) {
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
        P = !1,
        D = e.prototype,
        L = D[w] || D["@@iterator"] || (h && D[h]),
        I = (!b && L) || T(h),
        k = ("Array" === t && D.entries) || L;
      if (
        (k &&
          (S = c(k.call(new e()))) !== Object.prototype &&
          S.next &&
          (a || c(S) === _ || (d ? d(S, _) : s(S[w]) || g(S, w, C)),
          u(S, G, !0, !0),
          a && (f[G] = C)),
        y &&
          "values" === h &&
          L &&
          "values" !== L.name &&
          (!a && v
            ? p(D, "name", "values")
            : ((P = !0),
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
        else o({ target: t, proto: !0, forced: b || P }, E);
      return (a && !x) || D[w] === I || g(D, w, I, { name: h }), (f[t] = I), E;
    };
  }