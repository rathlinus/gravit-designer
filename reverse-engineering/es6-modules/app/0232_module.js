/**
 * Webpack Module #232
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var defineBuiltIn = require(79); /* defineBuiltIn */
  exports.exports = function (e, t, n) {
    for (var i in t) defineBuiltIn(e, i, t[i], n);
    return e;
  };
}
