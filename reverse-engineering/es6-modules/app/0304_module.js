/**
 * Webpack Module #304
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  exports.exports = function (e) {
    try {
      return { error: false, value: e() };
    } catch (e) {
      return { error: true, value: e };
    }
  };
}
