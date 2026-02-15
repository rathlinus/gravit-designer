/**
 * Webpack Module #61
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* uncurryThis */,
      i = require(93) /* stub_requires_92 */,
      a = o({}.hasOwnProperty);
    exports.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(i(e), t);
      };
  }