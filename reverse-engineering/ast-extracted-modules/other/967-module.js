/**
 * Module 967
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  "use strict";
  e.exports = function (e) {
    e.marketing = {
      listFiles: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.GET("/marketing/api/v1/list", t);
      }
    };
  };
}
