/**
 * Module 962
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
    e.QA = {
      isEnabled: () => e.GET("/qa").then(() => !0).catch(() => !1),
      listUsers: t => e.GET("/qa/users", t),
      insertAccount: t => e.fetchJSON("/qa/user", {
        method: "PUT",
        body: t
      }),
      deleteAccount: t => e.fetchJSON("/qa/user/" + t, { method: "DELETE" })
    };
  };
}
