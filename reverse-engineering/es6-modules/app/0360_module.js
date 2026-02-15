/**
 * Webpack Module #360
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var wellKnownSymbol = require(43) /* wellKnownSymbol */,
    DataModule_136 = require(136) /* DataModule_136 */,
    createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f,
    r = wellKnownSymbol('unscopables'),
    s = Array.prototype;
  (undefined === s[r] &&
    createPropertyDescriptor(s, r, { configurable: true, value: DataModule_136(null) }),
    (exports.exports = function (e) {
      s[r][e] = true;
    }));
}
