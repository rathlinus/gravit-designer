/**
 * Webpack Module #694
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var toLength = require(46) /* toLength */,
    i = Math.floor;
  exports.exports =
    Number.isInteger ||
    function (e) {
      return !toLength(e) && isFinite(e) && i(e) === e;
    };
}
