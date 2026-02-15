/**
 * Webpack Module #356
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      globalThis = require(23) /* globalThis */,
      uncurryThis = require(27) /* uncurryThis */,
      r = require(277) /* module_277 */,
      s = require(288) /* module_288 */,
      createProperty = require(100) /* createProperty */,
      c = require(136) /* module_136 */,
      d = require(243) /* module_243 */.f,
      u = require(144) /* stub_requires_27 */,
      p = require(454) /* module_454 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      regexpStickyHelpers = require(460) /* regexpStickyHelpers */,
      f = require(344) /* module_344 */,
      m = require(1040) /* module_1040 */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      tryCall = require(21) /* tryCall */,
      _ = require(61) /* module_61 */,
      internalState = require(80) /* internalState */.enforce,
      w = require(260) /* module_260 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      x = require(458) /* module_458 */,
      S = require(459) /* module_459 */,
      E = wellKnownSymbol("match"),
      A = globalThis.RegExp,
      T = A.prototype,
      G = globalThis.SyntaxError,
      P = uncurryThis(T.exec),
      D = uncurryThis("".charAt),
      L = uncurryThis("".replace),
      I = uncurryThis("".indexOf),
      k = uncurryThis("".slice),
      O = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
      F = /a/g,
      R = /a/g,
      M = new A(F) !== F,
      N = f.MISSED_STICKY,
      B = f.UNSUPPORTED_Y,
      U =
        hasOwnProperty_wrapper &&
        (!M ||
          N ||
          x ||
          S ||
          tryCall(function () {
            return (
              (R[E] = false),
              A(F) !== F || A(R) === R || "/a/i" !== String(A(F, "i"))
            );
          }));
    if (r("RegExp", U)) {
      for (
        var $ = function (e, t) {
            var n,
              hasOwnProperty_wrapper,
              globalThis,
              uncurryThis,
              r,
              d,
              f = u(T, this),
              m = p(e),
              defineBuiltIn = undefined === t,
              tryCall = [],
              w = e;
            if (!f && m && defineBuiltIn && e.constructor === $) return e;
            if (
              ((m || u(T, e)) && ((e = e.source), defineBuiltIn && (t = regexpStickyHelpers(w))),
              (e = undefined === e ? "" : requireObjectCoercible(e)),
              (t = undefined === t ? "" : requireObjectCoercible(t)),
              (w = e),
              x &&
                ("dotAll" in F) &&
                (hasOwnProperty_wrapper = !!t && I(t, "s") > -1) &&
                (t = L(t, /s/g, "")),
              (n = t),
              N &&
                ("sticky" in F) &&
                (globalThis = !!t && I(t, "y") > -1) &&
                B &&
                (t = L(t, /y/g, "")),
              S &&
                ((e = (uncurryThis = (function (e) {
                  for (
                    var t,
                      n = e.length,
                      hasOwnProperty_wrapper = 0,
                      globalThis = "",
                      uncurryThis = [],
                      r = c(null),
                      s = false,
                      createProperty = false,
                      d = 0,
                      u = "";
                    hasOwnProperty_wrapper <= n;
                    hasOwnProperty_wrapper++
                  ) {
                    if ("\\" === (t = D(e, hasOwnProperty_wrapper))) t += D(e, ++hasOwnProperty_wrapper);
                    else if ("]" === t) s = false;
                    else if (!s)
                      switch (true) {
                        case "[" === t:
                          s = true;
                          break;
                        case "(" === t:
                          if (((globalThis += t), "?:" === k(e, hasOwnProperty_wrapper + 1, hasOwnProperty_wrapper + 3))) continue;
                          P(O, k(e, hasOwnProperty_wrapper + 1)) && ((hasOwnProperty_wrapper += 2), (createProperty = true)), d++;
                          continue;
                        case ">" === t && l:
                          if ("" === u || _(r, u))
                            throw new G("Invalid capture group name");
                          (r[u] = true),
                            (uncurryThis[uncurryThis.length] = [u, d]),
                            (createProperty = false),
                            (u = "");
                          continue;
                      }
                    createProperty ? (u += t) : (globalThis += t);
                  }
                  return [globalThis, uncurryThis];
                })(e))[0]),
                (tryCall = uncurryThis[1])),
              (r = s(A(e, t), f ? this : T, $)),
              (hasOwnProperty_wrapper || globalThis || tryCall.length) &&
                ((d = internalState(r)),
                hasOwnProperty_wrapper &&
                  ((d.dotAll = true),
                  (d.raw = $(
                    (function (e) {
                      for (
                        var t, n = e.length, hasOwnProperty_wrapper = 0, globalThis = "", uncurryThis = false;
                        hasOwnProperty_wrapper <= n;
                        hasOwnProperty_wrapper++
                      )
                        "\\" !== (t = D(e, hasOwnProperty_wrapper))
                          ? uncurryThis || "." !== t
                            ? ("[" === t ? (uncurryThis = true) : "]" === t && (uncurryThis = false),
                              (globalThis += t))
                            : (globalThis += "[\\s\\S]")
                          : (globalThis += t + D(e, ++hasOwnProperty_wrapper));
                      return globalThis;
                    })(e),
                    n
                  ))),
                globalThis && (d.sticky = true),
                tryCall.length && (d.groups = tryCall)),
              e !== w)
            )
              try {
                createProperty(r, "source", "" === w ? "(?:)" : w);
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
        defineBuiltIn(globalThis, "RegExp", $, { constructor: true });
    }
    w("RegExp");
  }