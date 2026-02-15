/**
 * Webpack Module #149
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */;
    exports.exports = function (e, t) {
      var n = o.Iterator,
        i = n && n.prototype,
        a = i && i[e],
        r = false;
      if (a)
        try {
          a.call(
            {
              next: function () {
                return { done: true };
              },
              return: function () {
                r = true;
              },
            },
            -1
          );
        } catch (e) {
          e instanceof t || (r = false);
        }
      if (!r) return a;
    };
  }