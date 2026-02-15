/**
 * Webpack Module #1376
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = TypeError;
  exports.exports = function (e) {
    if (e > 9007199254740991) throw o('Maximum allowed index exceeded');
    return e;
  };
}
