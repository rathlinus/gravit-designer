/**
 * Webpack Module #201
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    i = require(186) /* stub_requires_23 */,
    anObject = require(35) /* anObject */,
    DataModule_277 = require(277) /* DataModule_277 */,
    s = require(299) /* module_299 */,
    wellKnownSymbol = require(43) /* wellKnownSymbol */,
    DataModule_407 = require(407) /* DataModule_407 */,
    createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
    DataModule_213 = require(213) /* DataModule_213 */,
    p = i && i.prototype,
    g = wellKnownSymbol('species'),
    h = false,
    f = anObject(globalThis.PromiseRejectionEvent),
    m = DataModule_277('Promise', function () {
      var e = s(i),
        t = e !== String(i);
      if (!t && 66 === DataModule_213) return true;
      if (createNonEnumerableProperty && (!p.catch || !p.finally)) return true;
      if (!DataModule_213 || DataModule_213 < 51 || !/native code/.test(e)) {
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
      return !(t || ('BROWSER' !== DataModule_407 && 'DENO' !== DataModule_407) || f);
    });
  exports.exports = { CONSTRUCTOR: m, REJECTION_EVENT: f, SUBCLASSING: h };
}
