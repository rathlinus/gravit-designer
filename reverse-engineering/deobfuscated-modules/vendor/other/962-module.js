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

function (exports, module, require) {
  "use strict";
  exports.exports = function (e) {
    e.QA = {
      isEnabled: () => e.GET("/qa").then(() => true).catch(() => false),
      listUsers: t => e.GET("/qa/users", t),
      insertAccount: t => e.fetchJSON("/qa/user", {
        method: "PUT",
        body: t
      }),
      deleteAccount: t => e.fetchJSON("/qa/user/" + t, { method: "DELETE" })
    };
  };
}
