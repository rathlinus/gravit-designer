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

function (exports, module, require) {
  "use strict";
  const {MaintenanceStatus: n} = require(971) /* module */;
  exports.exports = function (e) {
    e.maintenance = { getStatus: () => e.GET("/maintenance/status").then(e => new n(e)) };
  };
}
