/**
 * Webpack Module #615
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(110) /* module_110 */,
      i = require(27) /* uncurryThis */,
      a = require(243) /* module_243 */,
      r = require(404) /* module_404 */,
      s = require(37) /* toString_default */,
      l = i([].concat);
    exports.exports =
      o("Reflect", "ownKeys") ||
      function (e) {
        var t = a.f(s(e)),
          n = r.f;
        return n ? l(t, n(e)) : t;
      };
  }