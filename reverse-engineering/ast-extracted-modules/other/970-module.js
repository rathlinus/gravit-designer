/**
 * Module 970
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
  const {MaintenanceStatus: n} = i(971);
  e.exports = function (e) {
    e.maintenance = { getStatus: () => e.GET("/maintenance/status").then(e => new n(e)) };
  };
}
