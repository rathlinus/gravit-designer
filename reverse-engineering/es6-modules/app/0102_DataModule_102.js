/**
 * Webpack Module #102
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    toString_default = require(37) /* toString_default */,
    getSubstitution = require(145); /* getSubstitution */
  exports.exports = function (e, t, n) {
    var r, s;
    toString_default(e);
    try {
      if (!(r = getSubstitution(e, 'return'))) {
        if ('throw' === t) throw n;
        return n;
      }
      r = isCallable(r, e);
    } catch (e) {
      ((s = true), (r = e));
    }
    if ('throw' === t) throw n;
    if (s) throw r;
    return (toString_default(r), n);
  };
}
