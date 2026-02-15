/**
 * Webpack Module #201
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      i = require(186) /* stub_requires_23 */,
      anObject = require(35) /* anObject */,
      r = require(277) /* module_277 */,
      s = require(299) /* module_299 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      c = require(407) /* module_407 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      u = require(213) /* module_213 */,
      p = i && i.prototype,
      g = wellKnownSymbol("species"),
      h = false,
      f = anObject(globalThis.PromiseRejectionEvent),
      m = r("Promise", function () {
        var e = s(i),
          t = e !== String(i);
        if (!t && 66 === u) return true;
        if (createNonEnumerableProperty && (!p.catch || !p.finally)) return true;
        if (!u || u < 51 || !/native code/.test(e)) {
          var require = new i(function (e) {
              e(1);
            }),
            globalThis = function (e) {
              e(
                function () {},
                function () {}
              );
            };
          if (
            (((require.constructor = {})[g] = globalThis),
            !(h = require.then(function () {}) instanceof globalThis))
          )
            return true;
        }
        return !(t || ("BROWSER" !== c && "DENO" !== c) || f);
      });
    exports.exports = { CONSTRUCTOR: m, REJECTION_EVENT: f, SUBCLASSING: h };
  }