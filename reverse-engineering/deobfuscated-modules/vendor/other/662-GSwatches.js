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

function (exports, module, require) {
  require(75) /* GEventTarget */;
  var n = require(2) /* GNode */, r = require(76) /* module */;
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
  }, exports.exports = o;
}
