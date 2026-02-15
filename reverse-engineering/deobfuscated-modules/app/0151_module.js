/**
 * Webpack Module #151
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* isCallable */,
      i = require(278) /* fixRegExpWKS */,
      a = require(37) /* toString_default */,
      r = require(46) /* toLength */,
      s = require(117) /* toStringTagSupport */,
      l = require(62) /* requireObjectCoercible */,
      c = require(92) /* classof */,
      d = require(145) /* getSubstitution */,
      u = require(308) /* regExpFlags */,
      p = require(279) /* module_279 */;
    i("match", function (e, t, n) {
      return [
        function (t) {
          var n = c(this),
            i = r(t) ? d(t, e) : undefined;
          return i ? o(i, t, n) : new RegExp(t)[e](l(n));
        },
        function (e) {
          var o = a(this),
            i = l(e),
            r = n(t, o, i);
          if (r.done) return r.value;
          if (!o.global) return p(o, i);
          var c = o.unicode;
          o.lastIndex = 0;
          for (var d, g = [], h = 0; null !== (d = p(o, i)); ) {
            var f = l(d[0]);
            (g[h] = f),
              "" === f && (o.lastIndex = u(i, s(o.lastIndex), c)),
              h++;
          }
          return 0 === h ? null : g;
        },
      ];
    });
  }