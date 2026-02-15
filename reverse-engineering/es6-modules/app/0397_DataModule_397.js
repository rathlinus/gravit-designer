/**
 * Webpack Module #397
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    toLength = require(46) /* toLength */,
    DataModule_241 = require(241) /* DataModule_241 */,
    getSubstitution = require(145) /* getSubstitution */,
    DataModule_614 = require(614) /* DataModule_614 */,
    wellKnownSymbol = require(43) /* wellKnownSymbol */,
    c = TypeError,
    d = wellKnownSymbol('toPrimitive');
  exports.exports = function (e, t) {
    if (!toLength(e) || DataModule_241(e)) return e;
    var n,
      wellKnownSymbol = getSubstitution(e, d);
    if (wellKnownSymbol) {
      if (
        (undefined === t && (t = 'default'),
        (n = isCallable(wellKnownSymbol, e, t)),
        !toLength(n) || DataModule_241(n))
      )
        return n;
      throw new c("Can't convert object to primitive value");
    }
    return (undefined === t && (t = 'number'), DataModule_614(e, t));
  };
}
