/**
 * Webpack Module #34
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(200) /* advanceStringIndex */,
      i = n(29) /* isCallable */,
      a = n(27) /* uncurryThis */,
      r = n(278) /* fixRegExpWKS */,
      s = n(21) /* tryCall */,
      l = n(37) /* toString_default */,
      c = n(35) /* anObject */,
      d = n(46) /* toLength */,
      u = n(130) /* lengthOfArrayLike */,
      p = n(117) /* toStringTagSupport */,
      g = n(62) /* requireObjectCoercible */,
      h = n(92) /* classof */,
      f = n(308) /* regExpFlags */,
      m = n(145) /* getSubstitution */,
      y = n(667) /* DataModule_667 */,
      v = n(279) /* DataModule_279 */,
      _ = n(43) /* wellKnownSymbol */("replace"),
      b = Math.max,
      w = Math.min,
      C = a([].concat),
      x = a([].push),
      S = a("".indexOf),
      E = a("".slice),
      A = "$0" === "a".replace(/./, "$0"),
      T = !!/./[_] && "" === /./[_]("a", "$0");
    r(
      "replace",
      function (e, t, n) {
        var a = T ? "$" : "$0";
        return [
          function (e, n) {
            var o = h(this),
              a = d(e) ? m(e, _) : void 0;
            return a ? i(a, e, o, n) : i(t, g(o), e, n);
          },
          function (e, i) {
            var r = l(this),
              s = g(e);
            if ("string" == typeof i && -1 === S(i, a) && -1 === S(i, "$<")) {
              var d = n(t, r, s, i);
              if (d.done) return d.value;
            }
            var h = c(i);
            h || (i = g(i));
            var m,
              _ = r.global;
            _ && ((m = r.unicode), (r.lastIndex = 0));
            for (var A, T = []; null !== (A = v(r, s)) && (x(T, A), _); ) {
              "" === g(A[0]) && (r.lastIndex = f(s, p(r.lastIndex), m));
            }
            for (var G, P = "", D = 0, L = 0; L < T.length; L++) {
              for (
                var I,
                  k = g((A = T[L])[0]),
                  O = b(w(u(A.index), s.length), 0),
                  F = [],
                  R = 1;
                R < A.length;
                R++
              )
                x(F, void 0 === (G = A[R]) ? G : String(G));
              var M = A.groups;
              if (h) {
                var N = C([k], F, O, s);
                void 0 !== M && x(N, M), (I = g(o(i, void 0, N)));
              } else I = y(k, s, O, F, M, i);
              O >= D && ((P += E(s, D, O) + I), (D = O + k.length));
            }
            return P + E(s, D);
          },
        ];
      },
      !!s(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }) ||
        !A ||
        T
    );
  }