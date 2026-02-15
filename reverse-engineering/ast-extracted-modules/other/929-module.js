/**
 * Module 929
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
  var n = i(512), r = i(569);
  function o() {
  }
  o.prototype._uid = null, o.prototype._srcAnchor = null, o.prototype._dstAnchor = null, o.prototype._directed = null, o.prototype._data = null, o.prototype.getId = function () {
    return this._uid;
  }, o.prototype.getSource = function () {
    return this._srcAnchor.getAnchor();
  }, o.prototype.getDestination = function () {
    return this._dstAnchor.getAnchor();
  }, o.prototype.getSourceId = function () {
    return this._srcAnchor.getId();
  }, o.prototype.getDestinationId = function () {
    return this._dstAnchor.getId();
  }, o.prototype.getAnchors = function () {
    return [
      this._srcAnchor ? this._srcAnchor.getAnchor() : null,
      this._dstAnchor ? this._dstAnchor.getAnchor() : null
    ];
  }, o.prototype.getData = function () {
    return this._data;
  }, o.prototype.setSource = function (e) {
    e instanceof n ? this._srcAnchor = e : (e instanceof r || e.hasMixin && e.hasMixin(r)) && (this._srcAnchor = new n(null, e));
  }, o.prototype.setDestination = function (e) {
    e instanceof n ? this._dstAnchor = e : (e instanceof r || e.hasMixin && e.hasMixin(r)) && (this._dstAnchor = new n(null, e));
  }, o.prototype.setAnchors = function (e) {
    e && 2 === e.length && (this.setSource(e[0]), this.setDestination(e[1]));
  }, o.prototype.setData = function (e) {
    this._data = e;
  }, o.prototype.init = function (e, t, i) {
    this.setSource(e), this.setDestination(t), i && this.setData(i);
  }, o.prototype.toString = function () {
    return "[Object GEdge]";
  }, e.exports = o;
}
