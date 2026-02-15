/**
 * Webpack Module #110
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    anObject = require(35) /* anObject */,
    a = function (e) {
      return anObject(e) ? e : undefined;
    };
  exports.exports = function (e, t) {
    return arguments.length < 2 ? a(globalThis[e]) : globalThis[e] && globalThis[e][t];
  };
}
