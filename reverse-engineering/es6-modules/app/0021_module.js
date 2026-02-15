/**
 * Webpack Module #21
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  exports.exports = function (e) {
    try {
      return !!e();
    } catch (e) {
      return true;
    }
  };
}
