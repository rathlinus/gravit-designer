/**
 * Module 960
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
  const n = i(579);
  e.exports = function (e) {
    e.lock = {
      acquire: t => e.fetchJSON("/lock/file/" + t, { method: "PUT" }).then(e => new n(e)),
      release: t => e.fetchJSON("/lock/file/" + t, { method: "DELETE" }),
      get: t => e.GET("/lock/file/" + t).then(e => new n(e)),
      request: t => e.fetchJSON("/lock/file/" + t + "/request", { method: "POST" }),
      releaseSync: t => e.fetchSync({
        method: "DELETE",
        path: "/lock/file/" + t
      }),
      releaseAllSync: () => e.fetchSync({
        method: "DELETE",
        path: "/lock"
      })
    };
  };
}
