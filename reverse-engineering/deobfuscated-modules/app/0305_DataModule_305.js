/**
 * Webpack Module #305
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var wellKnownSymbol = require(43) /* wellKnownSymbol */,
      iteratorPrototype = require(203) /* iteratorPrototype */,
      a = wellKnownSymbol("iterator"),
      r = Array.prototype;
    exports.exports = function (e) {
      return undefined !== e && (iteratorPrototype.Array === e || r[a] === e);
    };
  }