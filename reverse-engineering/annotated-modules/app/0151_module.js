/**
 * Webpack Module #151
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(29) /* isCallable */,
      i = n(278) /* fixRegExpWKS */,
      a = n(37) /* toString_default */,
      r = n(46) /* toLength */,
      s = n(117) /* toStringTagSupport */,
      l = n(62) /* requireObjectCoercible */,
      c = n(92) /* classof */,
      d = n(145) /* getSubstitution */,
      u = n(308) /* regExpFlags */,
      p = n(279) /* module_279 */;
    i("match", function (e, t, n) {
      return [
        function (t) {
          var n = c(this),
            i = r(t) ? d(t, e) : void 0;
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