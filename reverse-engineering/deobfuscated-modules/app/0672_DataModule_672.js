/**
 * Webpack Module #672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_348 = require(348) /* DataModule_348 */,
      DataModule_302 = require(302) /* DataModule_302 */,
      toLength = require(46) /* toLength */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("species"),
      s = Array;
    exports.exports = function (e) {
      var t;
      return (
        DataModule_348(e) &&
          ((t = e.constructor),
          ((DataModule_302(t) && (t === s || DataModule_348(t.prototype))) ||
            (toLength(t) && null === (t = t[wellKnownSymbol]))) &&
            (t = undefined)),
        undefined === t ? s : t
      );
    };
  }