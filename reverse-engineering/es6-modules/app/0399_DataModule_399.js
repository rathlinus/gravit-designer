/**
 * Webpack Module #399
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    tryCall = require(21) /* tryCall */,
    a = require(242); /* module_242 */
  exports.exports =
    !hasOwnProperty_wrapper &&
    !tryCall(function () {
      return (
        7 !==
        Object.defineProperty(a('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    });
}
