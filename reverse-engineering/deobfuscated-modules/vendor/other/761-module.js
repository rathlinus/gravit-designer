/**
 * Module 761
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
  var n = require(99) /* module */, r = require(541) /* module */, o = require(0) /* GObject */, a = require(52) /* module */, s = require(77) /* Wheel */, l = require(5) /* GPoint */, h = require(24) /* GEditorOptions */, A = require(60) /* GPath */, c = require(45) /* GPathBase */, p = require(64) /* GPlatform */, u = require(155) /* GPathBaseEditor */, d = require(333) /* module */;
  function g() {
    r.call(this);
  }
  o.inheritAndMix(g, r, [d]), g.prototype.activate = function (e, t) {
    r.prototype.activate.call(this, e, t), t || (e.addEventListener(s.Drag, this._mouseDrag, this), e.addEventListener(s.Move, this._mouseMove, this), e.addEventListener(s.DragStart, this._mouseDragStart, this), e.addEventListener(s.DragEnd, this._mouseDragEnd, this)), this._checkMode();
  }, g.prototype.deactivate = function (e, t) {
    this._checkMode(), r.prototype.deactivate.call(this, e, t), e.removeEventListener(s.Drag, this._mouseDrag), e.removeEventListener(s.Move, this._mouseMove), e.removeEventListener(s.DragStart, this._mouseDragStart, this), e.removeEventListener(s.DragEnd, this._mouseDragEnd, this);
  }, g.prototype._mouseDragStart = function (e) {
    this.beginPan();
  }, g.prototype._mouseDragEnd = function (e) {
    this.endPan();
  }, g.prototype._mouseDown = function (e) {
    var t = new Date().getTime();
    if (t - this._mDownTime < r.DBLCLICKTM)
      "edit" == h.selectDoubleClickBehavior ? this._manager.notifyJobDone(this) : this._mouseDblClick(e);
    else {
      this._mDownTime = t, this._lastMouseEvent = e;
      var require, o = null;
      if (this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration()), this._dragStarted = false, this._dragStartPt = null, this._newPoint = null, this._editPt = null, e.button == s.BUTTON_LEFT || e.button == s.BUTTON_RIGHT && p.modifiers.optionKey) {
        if (this._released = false, this._blockDeactivation(), this._checkMode(), this._mode == r.Mode.Edit) {
          this._mouseDownOnEdit(e, function (e) {
            p.modifiers.optionKey && e.getProperty("tp") != c.AnchorPoint.Type.Connector && e.setProperty("tp", c.AnchorPoint.Type.Symmetric);
          });
        }
        var l;
        if (this._mode != r.Mode.Edit)
          if (this._renewPreviewLink(), require = this._constrainIfNeeded(e.client, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathRef), this._pathEditor && (l = this._mode == r.Mode.Append ? this._pathRef.getAnchorPoints().getFirstChild() : this._pathRef.getAnchorPoints().getLastChild()), l && this._pathEditor.hitAnchorPoint(l, require, this._view.getWorldTransform(this._view.getScene().getActivePage()), h.annotDropDistance))
            this._setCursorForPosition(a.PenEnd), this._startTransaction(r.Transaction.ModifyPathProperties), this._pathRef.setProperty("closed", true), this._makePointMajor(l), this._pathEditor.setActiveExtendingMode(u.ExtendingMode.Off), this._mode = r.Mode.Edit, this._editPt = this._pathEditor.getPathPointPreview(l), this._pathEditor.requestInvalidation();
          else {
            var A = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(require);
            this._editor.getGuides().beginMap(this._editor.getMappingScopes()), A = this._editor.getGuides().mapPoint(A, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap();
            var d, g = this._pathEditor ? this._hitSideConnectPoints(A) : null;
            if (g)
              this._connectPaths(g);
            else
              this._setCursorForPosition(a.Pen), this._pathEditor && (d = this._mode == r.Mode.Append ? this._pathRef.getAnchorPoints().getLastChild() : this._pathRef.getAnchorPoints().getFirstChild()), d && this._pathEditor.hitAnchorPoint(d, require, this._view.getWorldTransform(this._view.getScene().getActivePage()), h.annotDropDistance) ? (this._makePointMajor(d), this._editPt = this._pathEditor.getPathPointPreview(d), this._pathEditor.requestInvalidation()) : (o = this._constructNewPoint(e, A), this._addPoint(o, true, false));
          }
        this._pathEditor && this._pathEditor.blockRemoval();
      }
    }
  }, g.prototype._mouseMove = function (e) {
    if (this._released) {
      this._lastMouseEvent = e;
      var module = true;
      if (this._mode == r.Mode.Edit && p.modifiers.shiftKey && (this._setCursorForPosition(null, e.client), this._cursor == a.PenPlusMiddle && (module = false), this._highlightMiddle(e.client)), module) {
        var require = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
        if (this._editor.getGuides().beginMap(this._editor.getMappingScopes()), require = this._editor.getGuides().mapPoint(require, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), this._pathEditor && this._pathEditor.getActiveExtendingMode() && (this._mode == r.Mode.Append || this._mode == r.Mode.Prepend) && this._hitSideConnectPoints(require))
          this._setCursorForPosition(a.PenEnd);
        else {
          var o = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(require);
          this._setCursorForPosition(null, o);
        }
      }
    } else
      e.button == s.BUTTON_RIGHT && p.modifiers.optionKey && this._mouseDrag(e);
  }, g.prototype._mouseDrag = function (e) {
    if (this.isPanning() && this.panView(e.client, e.clientDelta), this._refPt && !this._released && (this._makePointMajor(this._refPt), this._editPt = this._pathEditor.getPathPointPreview(this._refPt), this._dragStartPt = this._refPt, this._pathEditor.requestInvalidation(), this._refPt = null), this._editPt && !this._released) {
      this._lastMouseEvent = e, this._dragStarted = true, this._pathEditor.requestInvalidation();
      var module, require = this._updatePoint(e.client);
      this._newPoint || this._pathRef.getAnchorPoints().getFirstChild() != this._pathRef.getAnchorPoints().getLastChild() ? (this._editPt == this._dpathRef.getAnchorPoints().getLastChild() ? module = this._pathRef.getAnchorPoints().getFirstChild() : this._editPt == this._dpathRef.getAnchorPoints().getFirstChild() && (module = this._pathRef.getAnchorPoints().getLastChild()), module && this._pathEditor.hitAnchorPoint(module, require, this._view.getWorldTransform(this._view.getScene().getActivePage()), h.annotDropDistance) ? this._setCursorForPosition(a.PenEnd) : this._setCursorForPosition(a.Pen)) : this._setCursorForPosition(a.Pen), this._pathEditor.requestInvalidation();
    }
  }, g.prototype._constructNewPoint = function (e, t) {
    var i = new A.AnchorPoint();
    return i.setProperties([
      "x",
      "y",
      "ah"
    ], [
      t.getX(),
      t.getY(),
      true
    ]), e.button == s.BUTTON_LEFT ? p.modifiers.optionKey && i.setProperty("tp", c.AnchorPoint.Type.Symmetric) : i.setProperty("tp", c.AnchorPoint.Type.Connector), i;
  }, g.prototype._closeIfNeeded = function () {
    if (this._pathRef && (this._newPoint || this._pathRef.getAnchorPoints().getFirstChild() != this._pathRef.getAnchorPoints().getLastChild()) && (this._mode == r.Mode.Append || this._mode == r.Mode.Prepend)) {
      var exports, module;
      this._mode == r.Mode.Append ? (exports = this._dpathRef.getAnchorPoints().getLastChild(), module = this._pathRef.getAnchorPoints().getFirstChild()) : (exports = this._dpathRef.getAnchorPoints().getFirstChild(), module = this._pathRef.getAnchorPoints().getLastChild());
      var require = new l(exports.getProperty("x"), exports.getProperty("y")), n = this._pathRef.getTransform();
      require = n ? n.mapPoint(require) : require, module && this._pathEditor.hitAnchorPoint(module, this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(require), this._view.getWorldTransform(this._view.getScene().getActivePage()), h.annotDropDistance) && (this._transactionType == r.Transaction.NoTransaction ? this._startTransaction(r.Transaction.ModifyPathProperties) : this._transactionType = r.Transaction.ModifyPathProperties, this._pathRef.beginUpdate(), this._pathEditor.selectOnePoint(module), p.modifiers.optionKey && module.setProperties([
        "ah",
        "tp"
      ], [
        false,
        c.AnchorPoint.Type.Asymmetric
      ]), module.getProperty("ah") || module.setProperties([
        "hlx",
        "hly"
      ], [
        exports.getProperty("hlx"),
        exports.getProperty("hly")
      ]), this._dpathRef.getAnchorPoints().removeChild(exports), this._newPoint || (exports = this._mode == r.Mode.Append ? this._pathRef.getAnchorPoints().getLastChild() : this._pathRef.getAnchorPoints().getFirstChild(), this._pathRef.getAnchorPoints().removeChild(exports)), this._dpathRef.setProperty("closed", true), this._pathRef.setProperty("closed", true), this._pathRef.endUpdate(), this._pathEditor.requestInvalidation(), this._pathEditor.setActiveExtendingMode(u.ExtendingMode.Off), this._newPoint = false);
    }
  }, g.prototype._mouseRelease = function (e) {
    if (this._pathEditor && this._pathEditor.allowRemoval(), this._editor.getGuides().invalidate(), !this._released)
      try {
        if (this._released = true, this._mode == r.Mode.Append || this._mode == r.Mode.Prepend) {
          var module = this._updatePoint(e.client);
          this._closeIfNeeded(), this._pathRef && this._pathRef.getProperty("closed") ? (this._setCursorForPosition(a.PenMinus), this._mode = r.Mode.Edit) : this._newPoint ? (this._addPoint(this._editPt, false, true), this._setCursorForPosition(a.Pen)) : this._editPt && this._pathRef && (this._transactionType == r.Transaction.NoTransaction && this._startTransaction(r.Transaction.MovePoint), this._pathEditor.applyTransform(this._pathRef), this._setCursorForPosition(a.PenEnd), this._pathEditor.setActiveExtendingMode(this._mode == r.Mode.Prepend ? u.ExtendingMode.Beginning : u.ExtendingMode.End)), this._commitChanges();
        } else if (this._mode == r.Mode.Edit && (this._editPt || this._refPt))
          if (this._dragStarted && this._editPt && this._pathRef) {
            module = this._updatePoint(e.client);
            this._transactionType == r.Transaction.NoTransaction && this._startTransaction(r.Transaction.MovePoint), this._pathEditor.applyTransform(this._pathRef), this._setCursorForPosition(null, module), this._commitChanges();
          } else
            this._editPt ? this._commitChanges() : this._mouseNoDragReleaseOnEdit(e.client);
        this._dragStarted = false, this._dragStartPt = null;
      } finally {
        this._finishTransaction();
      }
    this._lastMouseEvent = null, this._allowDeactivation();
  }, g.prototype.toString = function () {
    return "[Object GBezigonTool]";
  }, exports.exports = g;
}
