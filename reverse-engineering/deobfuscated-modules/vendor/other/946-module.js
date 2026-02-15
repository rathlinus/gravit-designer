/**
 * Module 946
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
  function n() {
  }
  n.prototype.toDate = function (e) {
    return "string" == typeof e || "number" == typeof e ? new Date(e) : e;
  }, n.prototype.format = function (e, t, i) {
    i = i || {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return this.toDate(e).toLocaleDateString(t, i);
  }, exports.exports = new n();
}
