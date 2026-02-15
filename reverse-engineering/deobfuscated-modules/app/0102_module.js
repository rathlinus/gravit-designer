/**
 * Webpack Module #102
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(29) /* isCallable */,
      i = require(37) /* toString_default */,
      a = require(145) /* getSubstitution */;
    exports.exports = function (e, t, n) {
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