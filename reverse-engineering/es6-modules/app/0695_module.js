/**
 * Webpack Module #695
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = Math.round;
  exports.exports = function (e) {
    var t = o(e);
    return t < 0 ? 0 : t > 255 ? 255 : 255 & t;
  };
}
