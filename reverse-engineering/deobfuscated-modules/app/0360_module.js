/**
 * Webpack Module #360
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var wellKnownSymbol = require(43) /* wellKnownSymbol */,
      i = require(136) /* module_136 */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f,
      r = wellKnownSymbol("unscopables"),
      s = Array.prototype;
    undefined === s[r] && createPropertyDescriptor(s, r, { configurable: true, value: i(null) }),
      (exports.exports = function (e) {
        s[r][e] = true;
      });
  }