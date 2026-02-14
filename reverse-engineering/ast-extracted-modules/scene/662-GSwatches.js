/**
 * Module 662 - GSwatches
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
  i(75);
  var n = i(2), r = i(76);
  function o() {
    r.call(this);
  }
  n.inheritAndMix("swatches", o, r, [
    n.Container,
    n.Store
  ]), o.prototype._handleChange = function (e, t) {
    r.prototype._handleChange.call(this, e, t);
  }, o.prototype.validateInsertion = function (e, t) {
    return "scene" === n.getName(e);
  }, e.exports = o;
}
