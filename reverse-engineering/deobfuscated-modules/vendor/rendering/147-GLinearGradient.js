/**
 * Module 147 - GLinearGradient
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
  var n = require(138) /* GGradient */, r = require(50) /* GPattern */, o = require(12) /* GMath */;
  function a(e, t, i, r, o, a) {
    n.call(this, e, t, r, o, a), this._fx = "number" == typeof r ? r : 0, this._angle = "number" == typeof i ? i : 0;
  }
  r.inherit("L", a, n), a.equals = function (e, t, i) {
    return e instanceof a && t instanceof a && !(!n.equals(e, t, i) || i) && o.isEqualEps(e._angle, t._angle);
  }, a.prototype._angle = 0, a.prototype.getAngle = function () {
    return this._angle;
  }, a.prototype.asCSSBackground = function (e) {
    return "linear-gradient(" + (Math.round(o.toDegrees(this._angle)) + 90) + "deg, " + this.toScreenCSS(e) + ")";
  }, a.prototype.clone = function () {
    return new a(this.getClonedStops(), this._scale, this._angle, this._fx, this._fy, this._transform);
  }, a.prototype._serializeToBlob = function () {
    var e = n.prototype._serializeToBlob.call(this);
    return e && !o.isEqualEps(this._angle, 0) && (e.r = this._angle), e;
  }, a.prototype._deserializeFromBlob = function (e) {
    n.prototype._deserializeFromBlob.call(this, e), this._angle = e.hasOwnProperty("r") ? e.r : 0;
  }, a.prototype.toString = function () {
    return "[Object GLinearGradient]";
  }, exports.exports = a;
}
