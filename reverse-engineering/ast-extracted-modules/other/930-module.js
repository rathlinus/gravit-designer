/**
 * Module 930
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
    t ? this.setEdge(t) : this._uid = e;
  }
  i.prototype._uid = null, i.prototype._edge = null, i.prototype.getId = function () {
    return this._uid;
  }, i.prototype.setId = function (e) {
    e && this._edge && !this._uid.isEqual(e) && (this._edge = null), this._uid = e;
  }, i.prototype.getEdge = function () {
    return this._edge;
  }, i.prototype.setEdge = function (e) {
    this._uid = e.getId(), this._edge = e;
  }, i.prototype.toString = function () {
    return "[Object GEdgeLink]";
  }, e.exports = i;
}
