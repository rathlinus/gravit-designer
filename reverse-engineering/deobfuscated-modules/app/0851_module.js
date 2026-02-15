/**
 * Webpack Module #851
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* isCallable */,
      i = require(278) /* fixRegExpWKS */,
      a = require(37) /* toString_default */,
      r = require(46) /* toLength */,
      s = require(92) /* classof */,
      l = require(1387) /* module_1387 */,
      c = require(62) /* requireObjectCoercible */,
      d = require(145) /* getSubstitution */,
      u = require(279) /* module_279 */;
    i("search", function (e, t, n) {
      return [
        function (t) {
          var n = s(this),
            i = r(t) ? d(t, e) : undefined;
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