/**
 * Webpack Module #102
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(29) /* module_29 */,
      i = n(37) /* module_37 */,
      a = n(145) /* module_145 */;
    e.exports = function (e, t, n) {
      var r, s;
      i(e);
      try {
        if (!(r = a(e, "return"))) {
          if ("throw" === t) throw n;
          return n;
        }
        r = o(r, e);
      } catch (e) {
        (s = true), (r = e);
      }
      if ("throw" === t) throw n;
      if (s) throw r;
      return i(r), n;
    };
  }