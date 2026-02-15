/**
 * Webpack Module #672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(348) /* module_348 */,
      i = require(302) /* module_302 */,
      toLength = require(46) /* toLength */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("species"),
      s = Array;
    exports.exports = function (e) {
      var t;
      return (
        o(e) &&
          ((t = e.constructor),
          ((i(t) && (t === s || o(t.prototype))) ||
            (toLength(t) && null === (t = t[wellKnownSymbol]))) &&
            (t = undefined)),
        undefined === t ? s : t
      );
    };
  }