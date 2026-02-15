/**
 * Webpack Module #362
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var wellKnownSymbol = require(43)(/* wellKnownSymbol */ 'match');
  exports.exports = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return ((t[wellKnownSymbol] = false), '/./'[e](t));
      } catch (e) {}
    }
    return false;
  };
}
