/**
 * Module 963
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
    e.tokenIssuer = {
      getWebCDR: (t, i) => e.fetchJSON("/tokenissuer/webcdr", {
        method: "POST",
        body: {
          fileId: t,
          data: i
        }
      })
    };
  };
}
