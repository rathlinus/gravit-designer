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

function (e, t, i) {
  var n = i(77), r = i(52), o = i(0), a = (i(103), i(211));
  function s() {
    a.call(this);
  }
  o.inherit(s, a), s.prototype._panning = !1, s.prototype.getCursor = function () {
    return this._panning ? r.HandClosed : r.HandOpen;
  }, s.prototype.activate = function (e, t) {
    a.prototype.activate.call(this, e, t), t || (e.addEventListener(n.DragStart, this._mouseDragStart, this), e.addEventListener(n.Drag, this._mouseDrag, this), e.addEventListener(n.DragEnd, this._mouseDragEnd, this));
  }, s.prototype.deactivate = function (e, t) {
    a.prototype.deactivate.call(this, e, t), e.removeEventListener(n.DragStart, this._mouseDragStart), e.removeEventListener(n.Drag, this._mouseDrag), e.removeEventListener(n.DragEnd, this._mouseDragEnd);
  }, s.prototype.isDeactivatable = function () {
    return !this._panning;
  }, s.prototype._mouseDragStart = function (e) {
    this._panning = !0, this._view.beginPan(), this.updateCursor();
  }, s.prototype._mouseDrag = function (e) {
    this._panning && this._view.scrollBy(-e.clientDelta.getX(), -e.clientDelta.getY());
  }, s.prototype._mouseDragEnd = function (e) {
    this._panning && (this._panning = !1, this._view.finishPan(), this.updateCursor());
  }, s.prototype.toString = function () {
    return "[Object GHandTool]";
  }, e.exports = s;
}
