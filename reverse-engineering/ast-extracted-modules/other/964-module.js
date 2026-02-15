/**
 * Module 964
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
  e.exports = e => {
    e.magicLink = {
      create: (t, i) => e.fetchJSON("/magiclink/create", {
        method: "POST",
        body: { email: t }
      }, i),
      authenticate: (t, i, n) => e.fetchJSON("/magiclink/authenticate", {
        method: "POST",
        body: {
          token: t,
          fileID: i,
          publicShareToken: n
        }
      }),
      checkSharedFileExist: t => e.fetchJSON("/magiclink/fileExist", {
        method: "POST",
        body: {
          token: t.token,
          fileID: t.fileID
        }
      })
    };
  };
}
