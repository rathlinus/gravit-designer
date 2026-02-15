/**
 * Webpack Module #34
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(200) /* module_200 */,
      i = n(29) /* module_29 */,
      a = n(27) /* module_27 */,
      r = n(278) /* module_278 */,
      s = n(21) /* module_21 */,
      l = n(37) /* module_37 */,
      c = n(35) /* module_35 */,
      d = n(46) /* module_46 */,
      u = n(130) /* module_130 */,
      p = n(117) /* module_117 */,
      g = n(62) /* module_62 */,
      h = n(92) /* module_92 */,
      f = n(308) /* module_308 */,
      m = n(145) /* module_145 */,
      y = n(667) /* module_667 */,
      v = n(279) /* module_279 */,
      _ = n(43) /* module_43 */("replace"),
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