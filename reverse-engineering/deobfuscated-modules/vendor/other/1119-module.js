/**
 * Module 1119
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
  var n = require(12) /* GMath */, r = require(6) /* GRect */;
  function o() {
    throw new Error("No instance");
  }
  o.round = function (e, t) {
    return isNaN(t) && (t = 3), e instanceof r ? new r(o.round(e.getX()), o.round(e.getY()), o.round(e.getWidth()), o.round(e.getHeight())) : Array.isArray(e) ? e.map(function (e) {
      return o.round(e, t);
    }) : isNaN(e) ? e : n.round(e, false, t);
  }, exports.exports = o;
}
