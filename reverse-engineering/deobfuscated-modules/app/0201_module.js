/**
 * Webpack Module #201
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(186) /* stub_requires_23 */,
      a = require(35) /* anObject */,
      r = require(277) /* module_277 */,
      s = require(299) /* module_299 */,
      l = require(43) /* wellKnownSymbol */,
      c = require(407) /* module_407 */,
      d = require(74) /* createNonEnumerableProperty */,
      u = require(213) /* module_213 */,
      p = i && i.prototype,
      g = l("species"),
      h = false,
      f = a(o.PromiseRejectionEvent),
      m = r("Promise", function () {
        var e = s(i),
          t = e !== String(i);
        if (!t && 66 === u) return true;
        if (d && (!p.catch || !p.finally)) return true;
        if (!u || u < 51 || !/native code/.test(e)) {
          var require = new i(function (e) {
              e(1);
            }),
            o = function (e) {
              e(
                function () {},
                function () {}
              );
            };
          if (
            (((require.constructor = {})[g] = o),
            !(h = require.then(function () {}) instanceof o))
          )
            return true;
        }
        return !(t || ("BROWSER" !== c && "DENO" !== c) || f);
      });
    exports.exports = { CONSTRUCTOR: m, REJECTION_EVENT: f, SUBCLASSING: h };
  }