/**
 * Module 959
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
    e.realtime = {
      getCollaborators: function (t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.GET("/realtime/".concat(t, "/collaborators"), i);
      },
      publishFile: (t, i, n, r, o) => e.fetchJSON("/realtime/".concat(t, "/publish"), {
        method: "POST",
        body: {
          metadata: i,
          secondaryFormat: n,
          collabTextUpdate: r,
          sendEmail: o
        }
      })
    };
  };
}
