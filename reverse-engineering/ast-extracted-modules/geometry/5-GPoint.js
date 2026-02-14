/**
 * Module 5 - GPoint
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
  function i(e, t) {
    this._x = e, this._y = t;
  }
  i.equals = function (e, t, i) {
    return i = i || 1e-14, !(!e || e != t) || !(!e || !t) && Math.abs(e._x - t._x) < i && Math.abs(e._y - t._y) < i;
  }, i.min = function () {
    for (var e = new i(null, null), t = 0; t < arguments.length; ++t)
      (null == e._x || arguments[t]._x < e._x) && (e._x = arguments[t]._x), (null == e._y || arguments[t]._y < e._y) && (e._y = arguments[t]._y);
    return e;
  }, i.max = function () {
    for (var e = new i(null, null), t = 0; t < arguments.length; ++t)
      (null == e._x || arguments[t]._x > e._x) && (e._x = arguments[t]._x), (null == e._y || arguments[t]._y > e._y) && (e._y = arguments[t]._y);
    return e;
  }, i.prototype._x = 0, i.prototype._y = 0, i.prototype.getX = function () {
    return this._x;
  }, i.prototype.getY = function () {
    return this._y;
  }, i.prototype.scale = function (e) {
    return new i(this._x * e, this._y * e);
  }, i.prototype.multiply = function (e) {
    return new i(this._x * e._x, this._y * e._y);
  }, i.prototype.subtract = function (e) {
    return new i(this._x - e._x, this._y - e._y);
  }, i.prototype.cross = function (e) {
    return this._x * e._y - this._y * e._x;
  }, i.prototype.dot = function (e) {
    return this._x * e._x + this._y * e._y;
  }, i.prototype.add = function (e) {
    return new i(this._x + e._x, this._y + e._y);
  }, i.prototype.translated = function (e, t) {
    return new i(this._x + e, this._y + t);
  }, i.prototype.rotated = function (e) {
    var t = Math.cos(e), n = Math.sin(e);
    return new i(t * this._x - n * this._y, n * this._x + t * this._y);
  }, i.prototype.rotatedAt = function (e, t) {
    if (!t)
      return this.rotated(e);
    var n = Math.cos(e), r = Math.sin(e);
    return new i(n * (this._x - t._x) - r * (this._y - t._y) + t._x, r * (this._x - t._x) + n * (this._y - t._y) + t._y);
  }, i.prototype.lerp = function (e, t) {
    return new i(this._x + (e._x - this._x) * t, this._y + (e._y - this._y) * t);
  }, i.prototype.isFinite = function () {
    return "number" == typeof this._x && isFinite(this._x) && "number" == typeof this._y && isFinite(this._y);
  }, i.prototype.toString = function () {
    return "[Object GPoint(x=" + this._x + ", y=" + this._y + "]";
  }, e.exports = i;
}
