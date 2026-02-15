/**
 * Webpack Module #49
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21); /* tryCall */
  exports.exports = !tryCall(function () {
    return (
      7 !==
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  });
}
