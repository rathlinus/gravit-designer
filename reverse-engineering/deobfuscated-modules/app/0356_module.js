/**
 * Webpack Module #356
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(49) /* module_49 */,
      i = n(23) /* module_23 */,
      a = n(27) /* module_27 */,
      r = n(277) /* module_277 */,
      s = n(288) /* module_288 */,
      l = n(100) /* module_100 */,
      c = n(136) /* module_136 */,
      d = n(243) /* module_243 */.f,
      u = n(144) /* module_144 */,
      p = n(454) /* module_454 */,
      g = n(62) /* module_62 */,
      h = n(460) /* module_460 */,
      f = n(344) /* module_344 */,
      m = n(1040) /* module_1040 */,
      y = n(79) /* module_79 */,
      v = n(21) /* module_21 */,
      _ = n(61) /* module_61 */,
      b = n(80) /* module_80 */.enforce,
      w = n(260) /* module_260 */,
      C = n(43) /* module_43 */,
      x = n(458) /* module_458 */,
      S = n(459) /* module_459 */,
      E = C("match"),
      A = i.RegExp,
      T = A.prototype,
      G = i.SyntaxError,
      P = a(T.exec),
      D = a("".charAt),
      L = a("".replace),
      I = a("".indexOf),
      k = a("".slice),
      O = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
      F = /a/g,
      R = /a/g,
      M = new A(F) !== F,
      N = f.MISSED_STICKY,
      B = f.UNSUPPORTED_Y,
      U =
        o &&
        (!M ||
          N ||
          x ||
          S ||
          v(function () {
            return (
              (R[E] = false),
              A(F) !== F || A(R) === R || "/a/i" !== String(A(F, "i"))
            );
          }));
    if (r("RegExp", U)) {
      for (
        var $ = function (e, t) {
            var n,
              o,
              i,
              a,
              r,
              d,
              f = u(T, this),
              m = p(e),
              y = undefined === t,
              v = [],
              w = e;
            if (!f && m && y && e.constructor === $) return e;
            if (
              ((m || u(T, e)) && ((e = e.source), y && (t = h(w))),
              (e = undefined === e ? "" : g(e)),
              (t = undefined === t ? "" : g(t)),
              (w = e),
              x &&
                ("dotAll" in F) &&
                (o = !!t && I(t, "s") > -1) &&
                (t = L(t, /s/g, "")),
              (n = t),
              N &&
                ("sticky" in F) &&
                (i = !!t && I(t, "y") > -1) &&
                B &&
                (t = L(t, /y/g, "")),
              S &&
                ((e = (a = (function (e) {
                  for (
                    var t,
                      n = e.length,
                      o = 0,
                      i = "",
                      a = [],
                      r = c(null),
                      s = false,
                      l = false,
                      d = 0,
                      u = "";
                    o <= n;
                    o++
                  ) {
                    if ("\\" === (t = D(e, o))) t += D(e, ++o);
                    else if ("]" === t) s = false;
                    else if (!s)
                      switch (true) {
                        case "[" === t:
                          s = true;
                          break;
                        case "(" === t:
                          if (((i += t), "?:" === k(e, o + 1, o + 3))) continue;
                          P(O, k(e, o + 1)) && ((o += 2), (l = true)), d++;
                          continue;
                        case ">" === t && l:
                          if ("" === u || _(r, u))
                            throw new G("Invalid capture group name");
                          (r[u] = true),
                            (a[a.length] = [u, d]),
                            (l = false),
                            (u = "");
                          continue;
                      }
                    l ? (u += t) : (i += t);
                  }
                  return [i, a];
                })(e))[0]),
                (v = a[1])),
              (r = s(A(e, t), f ? this : T, $)),
              (o || i || v.length) &&
                ((d = b(r)),
                o &&
                  ((d.dotAll = true),
                  (d.raw = $(
                    (function (e) {
                      for (
                        var t, n = e.length, o = 0, i = "", a = false;
                        o <= n;
                        o++
                      )
                        "\\" !== (t = D(e, o))
                          ? a || "." !== t
                            ? ("[" === t ? (a = true) : "]" === t && (a = false),
                              (i += t))
                            : (i += "[\\s\\S]")
                          : (i += t + D(e, ++o));
                      return i;
                    })(e),
                    n
                  ))),
                i && (d.sticky = true),
                v.length && (d.groups = v)),
              e !== w)
            )
              try {
                l(r, "source", "" === w ? "(?:)" : w);
              } catch (e) {}
            return r;
          },
          j = d(A),
          K = 0;
        j.length > K;

      )
        m($, A, j[K++]);
      (T.constructor = $),
        ($.prototype = T),
        y(i, "RegExp", $, { constructor: true });
    }
    w("RegExp");
  }