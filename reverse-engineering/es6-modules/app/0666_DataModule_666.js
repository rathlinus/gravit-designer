/**
 * Webpack Module #666
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var uncurryThis = require(27) /* uncurryThis */,
    DataModule_348 = require(348) /* DataModule_348 */,
    anObject = require(35) /* anObject */,
    DataModule_116 = require(116) /* DataModule_116 */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    l = uncurryThis([].push);
  exports.exports = function (e) {
    if (anObject(e)) return e;
    if (DataModule_348(e)) {
      for (
        var module = e.length, require = [], uncurryThis = 0;
        uncurryThis < module;
        uncurryThis++
      ) {
        var c = e[uncurryThis];
        'string' == typeof c
          ? l(require, c)
          : ('number' != typeof c &&
              'Number' !== DataModule_116(c) &&
              'String' !== DataModule_116(c)) ||
            l(require, requireObjectCoercible(c));
      }
      var d = require.length,
        u = true;
      return function (e, t) {
        if (u) return ((u = false), t);
        if (DataModule_348(this)) return t;
        for (var uncurryThis = 0; uncurryThis < d; uncurryThis++)
          if (require[uncurryThis] === e) return t;
      };
    }
  };
}
