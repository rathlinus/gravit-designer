/**
 * Webpack Module #687
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(688); /* module_688 */
  exports.exports =
    Math.fround ||
    function (e) {
      return o(e, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54);
    };
}
