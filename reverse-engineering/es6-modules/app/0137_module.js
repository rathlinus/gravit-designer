/**
 * Webpack Module #137
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f,
    i = require(61) /* module_61 */,
    wellKnownSymbol = require(43)(/* wellKnownSymbol */ 'toStringTag');
  exports.exports = function (e, t, n) {
    (e && !n && (e = e.prototype),
      e &&
        !i(e, wellKnownSymbol) &&
        createPropertyDescriptor(e, wellKnownSymbol, { configurable: true, value: t }));
  };
}
