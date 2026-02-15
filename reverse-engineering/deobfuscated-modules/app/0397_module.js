/**
 * Webpack Module #397
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* module_29 */,
      i = require(46) /* module_46 */,
      a = require(241) /* module_241 */,
      r = require(145) /* module_145 */,
      s = require(614) /* module_614 */,
      l = require(43) /* module_43 */,
      c = TypeError,
      d = l("toPrimitive");
    exports.exports = function (e, t) {
      if (!i(e) || a(e)) return e;
      var n,
        l = r(e, d);
      if (l) {
        if ((undefined === t && (t = "default"), (n = o(l, e, t)), !i(n) || a(n)))
          return n;
        throw new c("Can't convert object to primitive value");
      }
      return undefined === t && (t = "number"), s(e, t);
    };
  }