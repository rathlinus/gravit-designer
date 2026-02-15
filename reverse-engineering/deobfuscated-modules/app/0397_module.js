/**
 * Webpack Module #397
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(29) /* module_29 */,
      i = n(46) /* module_46 */,
      a = n(241) /* module_241 */,
      r = n(145) /* module_145 */,
      s = n(614) /* module_614 */,
      l = n(43) /* module_43 */,
      c = TypeError,
      d = l("toPrimitive");
    e.exports = function (e, t) {
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