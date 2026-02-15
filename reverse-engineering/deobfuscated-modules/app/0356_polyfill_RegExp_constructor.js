/**
 * Webpack Module #356
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      globalThis = require(23) /* globalThis */,
      uncurryThis = require(27) /* uncurryThis */,
      DataModule_277 = require(277) /* DataModule_277 */,
      s = require(288) /* module_288 */,
      createProperty = require(100) /* createProperty */,
      DataModule_136 = require(136) /* DataModule_136 */,
      d = require(243) /* module_243 */.f,
      u = require(144) /* stub_requires_27 */,
      DataModule_454 = require(454) /* DataModule_454 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      regexpStickyHelpers = require(460) /* regexpStickyHelpers */,
      DataModule_344 = require(344) /* DataModule_344 */,
      m = require(1040) /* module_1040 */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      tryCall = require(21) /* tryCall */,
      _ = require(61) /* module_61 */,
      internalState = require(80) /* internalState */.enforce,
      DataModule_260 = require(260) /* DataModule_260 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      DataModule_458 = require(458) /* DataModule_458 */,
      DataModule_459 = require(459) /* DataModule_459 */,
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
      N = DataModule_344.MISSED_STICKY,
      B = DataModule_344.UNSUPPORTED_Y,
      U =
        hasOwnProperty_wrapper &&
        (!M ||
          N ||
          DataModule_458 ||
          DataModule_459 ||
          tryCall(function () {
            return (
              (R[E] = false),
              A(F) !== F || A(R) === R || "/a/i" !== String(A(F, "i"))
            );
          }));
    if (DataModule_277("RegExp", U)) {
      for (
        var $ = function (e, t) {
            var n,
              hasOwnProperty_wrapper,
              globalThis,
              uncurryThis,
              DataModule_277,
              d,
              DataModule_344 = u(T, this),
              m = DataModule_454(e),
              defineBuiltIn = undefined === t,
              tryCall = [],
              DataModule_260 = e;
            if (!DataModule_344 && m && defineBuiltIn && e.constructor === $) return e;
            if (
              ((m || u(T, e)) && ((e = e.source), defineBuiltIn && (t = regexpStickyHelpers(DataModule_260))),
              (e = undefined === e ? "" : requireObjectCoercible(e)),
              (t = undefined === t ? "" : requireObjectCoercible(t)),
              (DataModule_260 = e),
              DataModule_458 &&
                ("dotAll" in F) &&
                (hasOwnProperty_wrapper = !!t && I(t, "s") > -1) &&
                (t = L(t, /s/g, "")),
              (n = t),
              N &&
                ("sticky" in F) &&
                (globalThis = !!t && I(t, "y") > -1) &&
                B &&
                (t = L(t, /y/g, "")),
              DataModule_459 &&
                ((e = (uncurryThis = (function (e) {
                  for (
                    var t,
                      n = e.length,
                      hasOwnProperty_wrapper = 0,
                      globalThis = "",
                      uncurryThis = [],
                      DataModule_277 = DataModule_136(null),
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
                          if ("" === u || _(DataModule_277, u))
                            throw new G("Invalid capture group name");
                          (DataModule_277[u] = true),
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
              (DataModule_277 = s(A(e, t), DataModule_344 ? this : T, $)),
              (hasOwnProperty_wrapper || globalThis || tryCall.length) &&
                ((d = internalState(DataModule_277)),
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
              e !== DataModule_260)
            )
              try {
                createProperty(DataModule_277, "source", "" === DataModule_260 ? "(?:)" : DataModule_260);
              } catch (e) {}
            return DataModule_277;
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
    DataModule_260("RegExp");
  }