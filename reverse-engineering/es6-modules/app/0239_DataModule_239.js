/**
 * Webpack Module #239
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21); /* tryCall */
  exports.exports = !tryCall(function () {
    var e = function () {}.bind();
    return 'function' != typeof e || e.hasOwnProperty('prototype');
  });
}
