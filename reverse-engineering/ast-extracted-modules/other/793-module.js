/**
 * Module 793
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
  var n = i(0), r = i(599), o = i(600);
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, o), a.prototype._gradient = null, a.prototype.applyTo = function (e) {
    e.setProperty("_pt", this._gradient);
  }, a.prototype.parse = function () {
    this._gradient = this._getGradient();
  }, a.prototype._getGradient = function () {
    throw new Error("Not Implemented");
  }, a.prototype._getStops = function () {
    return this._data.stops.map(function (e) {
      var t = new r(e.color);
      return {
        position: e.position,
        color: t._color,
        opacity: t._alpha
      };
    });
  }, e.exports = a;
}
