/**
 * Module 756
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
  var n = require(77) /* Wheel */, r = require(52) /* module */, o = require(0) /* GObject */, a = (require(103) /* module */, require(211) /* GTool */);
  function s() {
    a.call(this);
  }
  o.inherit(s, a), s.prototype._panning = false, s.prototype.getCursor = function () {
    return this._panning ? r.HandClosed : r.HandOpen;
  }, s.prototype.activate = function (e, t) {
    a.prototype.activate.call(this, e, t), t || (e.addEventListener(n.DragStart, this._mouseDragStart, this), e.addEventListener(n.Drag, this._mouseDrag, this), e.addEventListener(n.DragEnd, this._mouseDragEnd, this));
  }, s.prototype.deactivate = function (e, t) {
    a.prototype.deactivate.call(this, e, t), e.removeEventListener(n.DragStart, this._mouseDragStart), e.removeEventListener(n.Drag, this._mouseDrag), e.removeEventListener(n.DragEnd, this._mouseDragEnd);
  }, s.prototype.isDeactivatable = function () {
    return !this._panning;
  }, s.prototype._mouseDragStart = function (e) {
    this._panning = true, this._view.beginPan(), this.updateCursor();
  }, s.prototype._mouseDrag = function (e) {
    this._panning && this._view.scrollBy(-e.clientDelta.getX(), -e.clientDelta.getY());
  }, s.prototype._mouseDragEnd = function (e) {
    this._panning && (this._panning = false, this._view.finishPan(), this.updateCursor());
  }, s.prototype.toString = function () {
    return "[Object GHandTool]";
  }, exports.exports = s;
}
