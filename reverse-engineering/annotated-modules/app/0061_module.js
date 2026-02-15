/**
 * Webpack Module #61
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* uncurryThis */,
      i = n(93) /* stub_requires_92 */,
      a = o({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(i(e), t);
      };
  }