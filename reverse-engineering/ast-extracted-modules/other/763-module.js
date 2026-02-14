/**
 * Module 763
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
  var n = i(64), r = i(150), o = i(0), a = i(5), s = i(52), l = i(6), h = i(77), A = i(289), c = i(211), p = i(24);
  function u() {
    c.call(this);
  }
  o.inherit(u, c), u.prototype._dragStart = null, u.prototype._dragCurrent = null, u.prototype._slice = null, u.prototype._dragArea = null, u.prototype._hasCreatedSlice = !1, u.prototype.getCursor = function () {
    return s.Cross;
  }, u.prototype.activate = function (e, t) {
    c.prototype.activate.call(this, e, t), t || (e.addEventListener(h.DragStart, this._mouseDragStart, this), e.addEventListener(h.Drag, this._mouseDrag, this), e.addEventListener(h.DragEnd, this._mouseDragEnd, this), e.addEventListener(h.Down, this._mouseDown, this), e.addEventListener(h.Release, this._mouseRelease, this), n.addEventListener(r, this._modifiersChanged, this));
  }, u.prototype.deactivate = function (e) {
    c.prototype.deactivate.call(this, e), e.removeEventListener(h.DragStart, this._mouseDragStart), e.removeEventListener(h.Drag, this._mouseDrag), e.removeEventListener(h.DragEnd, this._mouseDragEnd), e.removeEventListener(h.Down, this._mouseDown), e.removeEventListener(h.Release, this._mouseRelease), n.removeEventListener(r, this._modifiersChanged);
  }, u.prototype.isDeactivatable = function () {
    return !this._dragStart;
  }, u.prototype.paint = function (e) {
    if (this._slice) {
      var t = this._slice.getGeometryBBox();
      t = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapRect(t);
      var i = Math.floor(t.getX()), n = Math.floor(t.getY());
      p.outlineWidth % 2 != 0 && (i += 0.5, n += 0.5), e.canvas.strokeRect(i, n, t.getWidth(), t.getHeight(), p.outlineWidth, e.selectionOutlineColor);
    }
  }, u.prototype._mouseDown = function (e) {
    e.button === h.BUTTON_LEFT && this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), !1, this._view.getViewConfiguration());
  }, u.prototype._mouseRelease = function (e) {
    if (!this._hasCreatedSlice) {
      var t = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
      t = this._editor.getGuides().mapPoint(t);
    }
    this._hasCreatedSlice = !1, this._manager.notifyJobDone(this);
  }, u.prototype._mouseDragStart = function (e) {
    this._hasCreatedSlice = !1, this._dragStart = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), this._editor.getGuides().beginMap(), this._dragStart = this._editor.getGuides().mapPoint(this._dragStart), this._editor.getGuides().finishMap(), this._slice = new A(), this._invalidateSlice(), this.updateCursor();
  }, u.prototype._mouseDrag = function (e) {
    this._dragCurrent = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), this._invalidateSlice();
  }, u.prototype._mouseDragEnd = function (e) {
    this._editor.getGuides().invalidate();
    var t = this._slice;
    t && (this._slice = null, this._invalidateSliceArea(t), this._updateSlice(t, this._dragArea), this._dragStart = null, this._dragCurrent = null, this._slice = null, this._dragArea = null, this.updateCursor(), this._editor.insertElements([t]), this._hasCreatedSlice = !0);
  }, u.prototype._modifiersChanged = function (e) {
    (e.changed.shiftKey || e.changed.optionKey || e.changed.metaKey) && this._invalidateSlice();
  }, u.prototype._invalidateSlice = function () {
    if (this._dragStart && this._dragCurrent) {
      this._editor.getGuides().beginMap();
      var e = this._editor.getGuides().mapPoint(this._dragCurrent);
      if (this._editor.getGuides().finishMap(), a.equals(this._dragStart, e))
        this._invalidateSliceArea();
      else {
        var t = this._dragStart.getX(), i = this._dragStart.getY(), r = e.getX(), o = e.getY();
        if (n.modifiers.shiftKey) {
          var s = Math.abs(r - t), h = Math.abs(o - i), A = r < t ? -1 : 1, c = o < i ? -1 : 1;
          s >= h ? (r = t + s * A, o = i + s * c) : (r = t + h * A, o = i + h * c);
        }
        var p = null;
        p = n.modifiers.optionKey ? l.fromPoints(new a(t - (r - t), i - (o - i)), new a(t + (r - t), i + (o - i))) : l.fromPoints(new a(t, i), new a(r, o)), this._dragArea = p, this._invalidateSliceArea(), this._updateSlice(this._slice, p), this._invalidateSliceArea();
      }
    }
  }, u.prototype._invalidateSliceArea = function (e) {
    if (e = e || this._slice) {
      var t = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapRect(e.getGeometryBBox());
      t && (t.getWidth() > 0 || t.getHeight() > 0) && this.invalidateArea(t.expanded(1, 1, 1, 1));
    }
  }, u.prototype._updateSlice = function (e, t) {
    t && e.setProperties([
      "x",
      "y",
      "w",
      "h"
    ], [
      t.getX(),
      t.getY(),
      t.getWidth(),
      t.getHeight()
    ]);
  }, u.prototype.toString = function () {
    return "[Object GSliceTool]";
  }, e.exports = u;
}
