/**
 * Module 890
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

function (e, t) {
  function i() {
  }
  i.prototype.toDate = function (e) {
    return "string" == typeof e || "number" == typeof e ? new Date(e) : e;
  }, i.prototype.format = function (e, t, i) {
    i = i || {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return this.toDate(e).toLocaleDateString(t, i);
  }, e.exports = new i();
}
