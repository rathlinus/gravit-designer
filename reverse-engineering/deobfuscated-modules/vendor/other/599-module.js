/**
 * Module 599
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
  var n = require(0) /* GObject */, r = require(17) /* GRGBColor */, o = require(600) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, o), a.prototype._color = null, a.prototype._alpha = 1, a.prototype.parse = function () {
    this._color = new r([
      Math.round(255 * this._data.red),
      Math.round(255 * this._data.green),
      Math.round(255 * this._data.blue)
    ]), this._alpha = this._data.alpha;
  }, a.prototype.applyTo = function (e) {
    e.setProperty("_pt", this._color), e.setProperty("_op", this._alpha);
  }, exports.exports = a;
}
