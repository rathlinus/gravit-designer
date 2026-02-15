/**
 * Webpack Module #3
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var GURABLE = require(199) /* Exports_GURABLE */.PROPER,
    defineBuiltIn = require(79) /* defineBuiltIn */,
    toString_default = require(37) /* toString_default */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    tryCall = require(21) /* tryCall */,
    regexpStickyHelpers = require(460) /* regexpStickyHelpers */,
    c = RegExp.prototype,
    d = c.toString,
    u = tryCall(function () {
      return '/a/b' !== d.call({ source: 'a', flags: 'b' });
    }),
    p = GURABLE && 'toString' !== d.name;
  (u || p) &&
    defineBuiltIn(
      c,
      'toString',
      function () {
        var e = toString_default(this);
        return (
          '/' +
          requireObjectCoercible(e.source) +
          '/' +
          requireObjectCoercible(regexpStickyHelpers(e))
        );
      },
      { unsafe: true }
    );
}
