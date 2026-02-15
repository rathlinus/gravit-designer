/**
 * Webpack Module #102
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(29) /* isCallable */,
      i = n(37) /* toString_default */,
      a = n(145) /* getSubstitution */;
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
        (s = !0), (r = e);
      }
      if ("throw" === t) throw n;
      if (s) throw r;
      return i(r), n;
    };
  }