/**
 * Webpack Module #151
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(29) /* module_29 */,
      i = n(278) /* module_278 */,
      a = n(37) /* module_37 */,
      r = n(46) /* module_46 */,
      s = n(117) /* module_117 */,
      l = n(62) /* module_62 */,
      c = n(92) /* module_92 */,
      d = n(145) /* module_145 */,
      u = n(308) /* module_308 */,
      p = n(279) /* module_279 */;
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