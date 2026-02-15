/**
 * Webpack Module #341
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(61) /* module_61 */,
      i = n(615) /* DataModule_615 */,
      a = n(222) /* objectGetOwnPropertyDescriptor */,
      r = n(88) /* createPropertyDescriptor */;
    e.exports = function (e, t, n) {
      for (var s = i(t), l = r.f, c = a.f, d = 0; d < s.length; d++) {
        var u = s[d];
        o(e, u) || (n && o(n, u)) || l(e, u, c(t, u));
      }
    };
  }