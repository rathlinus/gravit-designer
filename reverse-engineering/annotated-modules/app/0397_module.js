/**
 * Webpack Module #397
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(29) /* isCallable */,
      i = n(46) /* toLength */,
      a = n(241) /* module_241 */,
      r = n(145) /* getSubstitution */,
      s = n(614) /* module_614 */,
      l = n(43) /* wellKnownSymbol */,
      c = TypeError,
      d = l("toPrimitive");
    e.exports = function (e, t) {
      if (!i(e) || a(e)) return e;
      var n,
        l = r(e, d);
      if (l) {
        if ((void 0 === t && (t = "default"), (n = o(l, e, t)), !i(n) || a(n)))
          return n;
        throw new c("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), s(e, t);
    };
  }