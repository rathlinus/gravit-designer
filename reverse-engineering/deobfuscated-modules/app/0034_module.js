/**
 * Webpack Module #34
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(200) /* advanceStringIndex */,
      i = require(29) /* isCallable */,
      a = require(27) /* uncurryThis */,
      r = require(278) /* fixRegExpWKS */,
      s = require(21) /* tryCall */,
      l = require(37) /* toString_default */,
      c = require(35) /* anObject */,
      d = require(46) /* toLength */,
      u = require(130) /* lengthOfArrayLike */,
      p = require(117) /* toStringTagSupport */,
      g = require(62) /* requireObjectCoercible */,
      h = require(92) /* classof */,
      f = require(308) /* regExpFlags */,
      m = require(145) /* getSubstitution */,
      y = require(667) /* module_667 */,
      v = require(279) /* module_279 */,
      _ = require(43) /* wellKnownSymbol */("replace"),
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
              a = d(e) ? m(e, _) : undefined;
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
                x(F, undefined === (G = A[R]) ? G : String(G));
              var M = A.groups;
              if (h) {
                var N = C([k], F, O, s);
                undefined !== M && x(N, M), (I = g(o(i, undefined, N)));
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