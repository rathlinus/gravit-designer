/**
 * Module 923
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
  var n = i(0);
  e.exports = function (e) {
    e.PathNumber = function (t, i, n) {
      e.String.call(this, t, n(i.pathNumber));
    }, n.inherit(e.PathNumber, e.String);
  };
}
