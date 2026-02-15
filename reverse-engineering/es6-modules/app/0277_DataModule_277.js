/**
 * Webpack Module #277
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var tryCall = require(21) /* tryCall */,
    anObject = require(35) /* anObject */,
    a = /#|\.prototype\./,
    r = function (e, t) {
      var n = l[s(e)];
      return n === d || (n !== c && (anObject(t) ? tryCall(t) : !!t));
    },
    s = (r.normalize = function (e) {
      return String(e).replace(a, '.').toLowerCase();
    }),
    l = (r.data = {}),
    c = (r.NATIVE = 'N'),
    d = (r.POLYFILL = 'P');
  exports.exports = r;
}
