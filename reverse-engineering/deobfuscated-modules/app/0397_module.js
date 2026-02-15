/**
 * Webpack Module #397
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var isCallable = require(29) /* isCallable */,
      toLength = require(46) /* toLength */,
      a = require(241) /* module_241 */,
      getSubstitution = require(145) /* getSubstitution */,
      s = require(614) /* module_614 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      c = TypeError,
      d = wellKnownSymbol("toPrimitive");
    exports.exports = function (e, t) {
      if (!toLength(e) || a(e)) return e;
      var n,
        wellKnownSymbol = getSubstitution(e, d);
      if (wellKnownSymbol) {
        if ((undefined === t && (t = "default"), (n = isCallable(wellKnownSymbol, e, t)), !toLength(n) || a(n)))
          return n;
        throw new c("Can't convert object to primitive value");
      }
      return undefined === t && (t = "number"), s(e, t);
    };
  }