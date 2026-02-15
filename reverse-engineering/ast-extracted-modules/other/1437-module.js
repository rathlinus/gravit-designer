/**
 * Module 1437
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
  var n = i(799), r = function (e) {
      n.call(this, e.getPDFObject().getName(), e);
    };
  i(0).inherit(r, n), r.prototype.getFont = function () {
    return this.getPDFObject();
  }, e.exports = r;
}
