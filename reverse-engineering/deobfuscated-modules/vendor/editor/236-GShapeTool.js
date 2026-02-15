/**
 * Module 236
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
  var n = require(64) /* GPlatform */, r = require(150) /* GModifiersChangedEvent */, o = require(0) /* GObject */, a = require(60) /* GPath */, s = require(52) /* module */, l = require(141) /* module */, h = require(77) /* Wheel */, A = require(5) /* GPoint */, c = require(24) /* GEditorOptions */, p = require(332) /* GItemTool */, u = require(6) /* GRect */, d = require(56) /* GShape */, g = require(36) /* PartsPropertyVals */, f = require(22) /* GElement */, m = require(9) /* GLocale */, y = require(47) /* GLocaleKey */, _ = require(153) /* GBBoxGuide */, v = require(84) /* GAnnotation */, b = require(333) /* module */;
  function C(e, t) {
    p.call(this), b.call(this), this._keepRatio = e, this._fromCenter = t;
  }
  o.inheritAndMix(C, p, [b]), C.prototype._isDragging = false, C.prototype._dragStart = null, C.prototype._dragStartOrig = null, C.prototype._dragCurrent = null, C.prototype._dragCurrentOrig = null, C.prototype._keepRatio = false, C.prototype._fromCenter = false, C.prototype._shape = null, C.prototype._dragArea = null, C.prototype._dragLine = null, C.prototype._movePosition = null, C.prototype._hasCreatedShape = false, C.prototype.getCursor = function () {
    return s.Cross;
  }, C.prototype.activate = function (e, t) {
    p.prototype.activate.call(this, e, t), t || (e.addEventListener(h.Move, this._mouseMove, this), e.addEventListener(h.DragStart, this._mouseDragStart, this), e.addEventListener(h.Drag, this._mouseDrag, this), e.addEventListener(h.DragEnd, this._mouseDragEnd, this), e.addEventListener(h.Down, this._mouseDown, this), e.addEventListener(h.Release, this._mouseRelease, this), n.addEventListener(r, this._modifiersChanged, this));
  }, C.prototype.deactivate = function (e, t) {
    this._editor && this._editor.getGuides().invalidate(), this.updateInlineHint(null), p.prototype.deactivate.call(this, e), e.removeEventListener(h.Move, this._mouseMove, this), e.removeEventListener(h.DragStart, this._mouseDragStart), e.removeEventListener(h.Drag, this._mouseDrag), e.removeEventListener(h.DragEnd, this._mouseDragEnd), e.removeEventListener(h.Down, this._mouseDown), e.removeEventListener(h.Release, this._mouseRelease), n.removeEventListener(r, this._modifiersChanged);
  }, C.prototype.isDeactivatable = function () {
    return !this._isDragging;
  }, C.prototype.paint = function (e) {
  }, C.prototype.getAdditionalTransactionData = function (e, t) {
    return "function" == typeof this.getAdditionalTransactionDataMixin ? this.getAdditionalTransactionDataMixin(e, t) : null;
  }, C.prototype._paintOutline = function (e) {
    e.canvas.putVertices(new l(this._shape)), e.canvas.strokeVertices(e.selectionOutlineColor, c.outlineWidth);
  }, C.prototype._mouseDown = function (e) {
    e.button === h.BUTTON_LEFT && this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration());
  }, C.prototype._mouseRelease = function (e) {
    if (!this._hasCreatedShape) {
      var module = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
      this._editor.getGuides().beginMap(this._editor.getMappingScopes()), module = this._editor.getGuides().mapPoint(module, null, this._getExclusions()), this._editor.getGuides().finishMap(), this._createShapeManually(module);
    }
    this._hasCreatedShape = false, this._manager.notifyJobDone(this);
  }, C.prototype._mouseDragStart = function (e) {
    this._hasCreatedShape = false, this._isDragging = true, this.beginPan(), this._dragStart = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), this._editor.getGuides().beginMap(this._editor.getMappingScopes()), this._dragStart = this._editor.getGuides().mapPoint(this._dragStart, null, this._getExclusions()), this._editor.getGuides().finishMap(), this._shape = this._createShape(), this._invalidateShape(), this._hasCreatedShape = this._insertShape(this._shape, true);
    var t = g.getEditor(this._shape);
    t && (this._shape.setFlag(f.Flag.NoPaint), t.setOutlineTmpFlag()), this.updateInlineHint(null), this.updateCursor();
  }, C.prototype._mouseDrag = function (e) {
    this._dragCurrent = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), this.isPanning() && this.panView(e.client, e.clientDelta), n.modifiers.spaceKey && this._dragStartOrig && (this._dragStart = this._dragStartOrig.add(this._dragCurrent.subtract(this._dragCurrentOrig))), this._invalidateShape();
  }, C.prototype._mouseDragEnd = function (e) {
    this.endPan(), this._editor.getGuides().invalidate();
    var t = this._shape;
    if (this._shape = null, this._dragStart = null, this._dragCurrent = null, this._shape = null, this._dragArea = null, this._dragLine = null, this._dragStartOrig = null, this._dragCurrentOrig = null, this._isDragging = false, this.updateCursor(), this.updateInlineHint(null), !this._hasCreatedShape && t)
      this._prepareShapeForAppend(t), this._insertShape(t), this._hasCreatedShape = true;
    else if (this._hasCreatedShape) {
      t.removeFlag(f.Flag.NoPaint);
      var require = g.getEditor(t);
      require && require.removeOutlineTmpFlag(), t._notifyChange(f._Change.FinishGeometryUpdate, 1);
    }
  }, C.prototype._mouseMove = function (e) {
    this._isDragging || (this._movePosition = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), this._invalidateMovePosition());
  }, C.prototype._modifiersChanged = function (e) {
    this._keepRatio && e.changed.shiftKey || this._fromCenter && e.changed.optionKey || e.changed.metaKey ? this._invalidateShape() : e.changed.spaceKey && (n.modifiers.spaceKey ? (this._dragStartOrig = this._dragStart, this._dragCurrentOrig = this._dragCurrent) : (this._dragStartOrig = null, this._dragCurrentOrig = null)), e.changed.metaKey && !this._isDragging && this._invalidateMovePosition();
  }, C.prototype._getExclusions = function () {
    var e = this._getRelatedItemClass();
    return e && e.prototype.hasMixin.call(e.prototype, v) ? [_] : null;
  }, C.prototype._invalidateMovePosition = function () {
    if (this._movePosition) {
      this._editor.getGuides().beginMap(this._editor.getMappingScopes());
      var exports = this._editor.getGuides().mapPoint(this._movePosition, null, this._getExclusions());
      if (this._editor.getGuides().finishMap(), c.showTooltips && c.coordinatesTooltip && this._showMousePositionInlineHint()) {
        var module = this._scene.pointToString(exports.getX(), c.tooltipDecimalPlaces) + ", " + this._scene.pointToString(exports.getY(), c.tooltipDecimalPlaces);
        this.updateInlineHint(module, exports, u.Side.BOTTOM_LEFT);
      }
    }
  }, C.prototype._invalidateShape = function () {
    if (this._dragStart && this._dragCurrent) {
      this._editor.getGuides().useExclusions([this._shape]), this._editor.getGuides().beginMap(this._editor.getMappingScopes());
      var exports = this._editor.getGuides().mapPoint(this._dragCurrent, null, this._getExclusions());
      if (this._editor.getGuides().finishMap(), !A.equals(this._dragStart, exports)) {
        var module = this._dragStart.getX(), require = this._dragStart.getY(), r = exports.getX(), o = exports.getY(), s = r, l = o;
        if (this._keepRatio && n.modifiers.shiftKey) {
          var h = r < module ? -1 : 1, p = o < require ? -1 : 1;
          (m = Math.abs(r - module)) >= (y = Math.abs(o - require)) ? (r = module + m * h, o = require + m * p, l = m < 2 * y ? o : require) : (r = module + y * h, o = require + y * p, s = y < 2 * m ? r : module);
        }
        var d = null, g = null;
        if (this._fromCenter && n.modifiers.optionKey ? (d = u.fromPoints(new A(module - (r - module), require - (o - require)), new A(module + (r - module), require + (o - require))), g = [
            new A(module - (s - module), require - (l - require)),
            new A(module + (s - module), require + (l - require))
          ]) : (d = u.fromPoints(new A(module, require), new A(r, o)), g = [
            new A(module, require),
            new A(s, l)
          ]), this._dragArea = d, this._dragLine = g, this._updateShape(this._shape, d, g, true), c.showTooltips && c.sizeTooltip && this._showAreaInlineHint()) {
          var f = null;
          if (this._dragArea) {
            var m = this._dragArea.getWidth(), y = this._dragArea.getHeight();
            f = this._shape instanceof a && this._shape.isLine() ? this._scene.pointToString(Math.sqrt(m * m + y * y), c.tooltipDecimalPlaces) : this._scene.pointToString(m, c.tooltipDecimalPlaces) + " \xD7 " + this._scene.pointToString(y, c.tooltipDecimalPlaces);
          }
          this.updateInlineHint(f, this._dragCurrent, u.Side.BOTTOM_LEFT);
        }
      }
    }
  }, C.prototype._prepareShapeForAppend = function (e) {
    return this._updateShape(e, this._dragArea, this._dragLine, true);
  }, C.prototype._insertShape = function (e, t, i, n) {
    if (e && e.getParent())
      return false;
    if (i)
      this._editor.insertElements([e], false, !!i, true);
    else
      try {
        this._editor.beginTransaction(), this._editor.insertElements([e], false, true, true);
      } finally {
        var r = this.getAdditionalTransactionData(e, e.getParent());
        this._editor.commitTransaction(n || m.get(new y("GShapeTool", "action.insert-elements")), r);
      }
    return true;
  }, C.prototype._createShapeManually = function (e) {
  }, C.prototype._createShape = function () {
    return new (this._getRelatedItemClass())();
  }, C.prototype._updateShape = function (e, t, i, n) {
    throw new Error("Not Supported.");
  }, C.prototype._hasCenterCross = function () {
    return false;
  }, C.prototype._showMousePositionInlineHint = function () {
    return false;
  }, C.prototype._showAreaInlineHint = function () {
    return false;
  }, C.prototype._getRelatedItemClass = function () {
    return d;
  }, C.prototype.toString = function () {
    return "[Object GShapeTool]";
  }, exports.exports = C;
}
