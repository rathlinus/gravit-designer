/**
 * Webpack Module #786
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21); /* tryCall */
  exports.exports = !tryCall(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}
