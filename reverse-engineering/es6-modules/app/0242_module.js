/**
 * Webpack Module #242
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    toLength = require(46) /* toLength */,
    a = globalThis.document,
    r = toLength(a) && toLength(a.createElement);
  exports.exports = function (e) {
    return r ? a.createElement(e) : {};
  };
}
