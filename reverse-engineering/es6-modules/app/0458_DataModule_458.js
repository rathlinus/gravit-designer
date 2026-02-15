/**
 * Webpack Module #458
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21) /* tryCall */,
    globalThis = require(23) /* globalThis */.RegExp;
  exports.exports = tryCall(function () {
    var e = globalThis('.', 's');
    return !(e.dotAll && e.test('\n') && 's' === e.flags);
  });
}
