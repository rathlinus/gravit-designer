/**
 * Webpack Module #452
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(23) /* globalThis */,
      i = n(35) /* anObject */,
      a = o.WeakMap;
    e.exports = i(a) && /native code/.test(String(a));
  }