/**
 * Webpack Module #620
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(621) /* stub_requires_46 */,
    i = String,
    a = TypeError;
  exports.exports = function (e) {
    if (o(e)) return e;
    throw new a("Can't set " + i(e) + ' as a prototype');
  };
}
