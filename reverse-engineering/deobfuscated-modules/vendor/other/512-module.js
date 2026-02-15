/**
 * Module 512
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

function (exports, module) {
  function i(e, t) {
    t ? this.setAnchor(t) : this._uid = e;
  }
  i.prototype._uid = null, i.prototype._anchor = null, i.prototype.getId = function () {
    return this._uid;
  }, i.prototype.setId = function (e) {
    e && this._anchor && !this._uid.isEqual(e) && (this._anchor = null), this._uid = e;
  }, i.prototype.getAnchor = function () {
    return this._anchor;
  }, i.prototype.setAnchor = function (e) {
    this._uid = e.getId(), this._anchor = e;
  }, i.prototype.toString = function () {
    return "[Object GAnchorLink]";
  }, exports.exports = i;
}
