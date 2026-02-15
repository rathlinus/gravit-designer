/**
 * Module 568
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
  var n = i(108);
  function r(e, t, i) {
    this._family = e, this._style = t, this._weight = i;
  }
  i(0).inherit(r, n), r.prototype._family = null, r.prototype._style = null, r.prototype._weight = null, r.prototype.isResolved = function () {
    return !1;
  }, r.prototype.getFamily = function () {
    return this._family;
  }, r.prototype.getStyle = function () {
    return this._style;
  }, r.prototype.getWeight = function () {
    return this._weight;
  }, e.exports = r;
}
