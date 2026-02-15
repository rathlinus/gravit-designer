/**
 * Webpack Module #100
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    createPropertyDescriptor = require(88) /* createPropertyDescriptor */,
    a = require(174); /* module_174 */
  exports.exports = hasOwnProperty_wrapper
    ? function (e, t, n) {
        return createPropertyDescriptor.f(e, t, a(1, n));
      }
    : function (e, t, n) {
        return ((e[t] = n), e);
      };
}
