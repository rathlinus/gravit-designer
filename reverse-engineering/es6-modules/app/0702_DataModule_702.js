/**
 * Webpack Module #702
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    tryCall = require(21) /* tryCall */,
    uncurryThis = require(27) /* uncurryThis */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    DataModule_262 = require(262) /* DataModule_262 */.trim,
    l = require(248) /* module_248 */,
    c = uncurryThis(''.charAt),
    d = globalThis.parseFloat,
    u = globalThis.Symbol,
    p = u && u.iterator,
    g =
      1 / d(l + '-0') != -1 / 0 ||
      (p &&
        !tryCall(function () {
          d(Object(p));
        }));
  exports.exports = g
    ? function (e) {
        var t = DataModule_262(requireObjectCoercible(e)),
          n = d(t);
        return 0 === n && '-' === c(t, 0) ? -0 : n;
      }
    : d;
}
