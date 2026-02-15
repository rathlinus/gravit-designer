/**
 * Webpack Module #851
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(29) /* isCallable */,
      i = n(278) /* fixRegExpWKS */,
      a = n(37) /* toString_default */,
      r = n(46) /* toLength */,
      s = n(92) /* classof */,
      l = n(1387) /* module_1387 */,
      c = n(62) /* requireObjectCoercible */,
      d = n(145) /* getSubstitution */,
      u = n(279) /* module_279 */;
    i("search", function (e, t, n) {
      return [
        function (t) {
          var n = s(this),
            i = r(t) ? d(t, e) : void 0;
          return i ? o(i, t, n) : new RegExp(t)[e](c(n));
        },
        function (e) {
          var o = a(this),
            i = c(e),
            r = n(t, o, i);
          if (r.done) return r.value;
          var s = o.lastIndex;
          l(s, 0) || (o.lastIndex = 0);
          var d = u(o, i);
          return (
            l(o.lastIndex, s) || (o.lastIndex = s), null === d ? -1 : d.index
          );
        },
      ];
    });
  }