/**
 * Module 539
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
  var n = require(99) /* module */, r = require(2) /* GNode */, o = require(541) /* module */, a = require(0) /* GObject */, s = require(52) /* module */, l = require(77) /* Wheel */, h = require(5) /* GPoint */, A = require(24) /* GEditorOptions */, c = require(60) /* GPath */, p = require(12) /* GMath */, u = require(45) /* GPathBase */, d = require(64) /* GPlatform */, g = require(11) /* GUtil */, f = require(155) /* GPathBaseEditor */, m = require(333) /* module */;
  function y() {
    o.call(this), m.call(this);
  }
  a.inheritAndMix(y, o, [m]), y.prototype.activate = function (e, t) {
    o.prototype.activate.call(this, e, t), t || (e.addEventListener(l.DragStart, this._mouseDragStart, this), e.addEventListener(l.DragEnd, this._mouseDragEnd, this), e.addEventListener(l.Drag, this._mouseDrag, this), e.addEventListener(l.Move, this._mouseMove, this));
  }, y.prototype.deactivate = function (e, t) {
    this._checkMode(), o.prototype.deactivate.call(this, e, t), e.removeEventListener(l.Drag, this._mouseDrag), e.removeEventListener(l.Move, this._mouseMove), e.removeEventListener(l.DragStart, this._mouseDragStart, this), e.removeEventListener(l.DragEnd, this._mouseDragEnd, this);
  }, y.prototype._mouseDragStart = function (e) {
    this.beginPan();
  }, y.prototype._mouseDragEnd = function (e) {
    this.endPan();
  }, y.prototype._mouseDown = function (e) {
    var t = new Date().getTime();
    if (t - this._mDownTime < o.DBLCLICKTM)
      "edit" == A.selectDoubleClickBehavior ? this._manager.notifyJobDone(this) : this._mouseDblClick(e);
    else {
      var require = null;
      if (this._lastMouseEvent = e, this._dragStarted = false, this._dragStartPt = null, this._mouseMove(e), this._mDownTime = t, this._released = false, d.modifiers.optionKey && (this._firstAlt = true), this._blockDeactivation(), this._checkMode(), this._mode == o.Mode.Edit && this._mouseDownOnEdit(e), A.leaveWhenClosePath && this._pathRef && this._pathRef.getProperty("closed"))
        this._manager.notifyJobDone(this);
      else {
        if (this._mode != o.Mode.Edit)
          if (this._renewPreviewLink(), this._newPoint && this._pathEditor) {
            if (this._updatePoint(e.client), this._mode == o.Mode.Append) {
              var a = this._editPt.getPrevious();
              a && (a.removeFlag(r.Flag.Selected), this._editPt.setFlag(r.Flag.Selected));
            } else {
              var s = this._editPt.getNext();
              s && (s.removeFlag(r.Flag.Selected), this._editPt.setFlag(r.Flag.Selected));
            }
            this._pathEditor.requestInvalidation(), e.button == l.BUTTON_RIGHT && (d.modifiers.optionKey ? this._editPt.setProperty("tp", u.AnchorPoint.Type.Connector) : this._editPt.setProperties([
              "tp",
              "cu"
            ], [
              u.CornerType.Rounded,
              true
            ])), this._closeOrChangePreviewIfNeeded() || (this._dpathRef.getProperty("closed") && (this._mode == o.Mode.Append ? this._refPt = this._pathRef.getAnchorPoints().getFirstChild() : this._refPt = this._pathRef.getAnchorPoints().getLastChild()), this._pathEditor.requestInvalidation());
          } else if (this._pathEditor)
            this._mode == o.Mode.Append ? this._refPt = this._pathRef.getAnchorPoints().getLastChild() : this._refPt = this._pathRef.getAnchorPoints().getFirstChild();
          else {
            var h = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
            this._editor.getGuides().beginMap(this._editor.getMappingScopes()), h = this._editor.getGuides().mapPoint(h, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), require = this._constructNewPoint(e, h), e.button == l.BUTTON_RIGHT && (d.modifiers.optionKey ? require.setProperty("tp", u.AnchorPoint.Type.Connector) : require.setProperties([
              "tp",
              "cu"
            ], [
              u.CornerType.Rounded,
              true
            ])), this._addPoint(require, true, false);
          }
        this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration()), this._pathEditor && this._pathEditor.blockRemoval();
      }
    }
  }, y.prototype._renewPreviewLink = function () {
    if (this._pathEditor) {
      var exports, module = this._pathEditor.getPathPreview(true);
      if (this._editPt)
        exports = this._mode == o.Mode.Append ? module.getAnchorPoints().getLastChild() : module.getAnchorPoints().getFirstChild(), this._editPt != exports && (this._newPoint = false, this._editPt = null);
      this._dpathRef = module;
    } else
      this._editPt = null, this._newPoint = false, this._dpathRef = null;
  }, y.prototype._closeOrChangePreviewIfNeeded = function () {
    if (this._pathRef && this._newPoint && (this._mode == o.Mode.Append || this._mode == o.Mode.Prepend)) {
      var exports, module, require;
      this._mode == o.Mode.Append ? (exports = this._dpathRef.getAnchorPoints().getLastChild(), require = this._pathRef.getAnchorPoints().getLastChild(), module = this._dpathRef.getAnchorPoints().getFirstChild()) : (exports = this._dpathRef.getAnchorPoints().getFirstChild(), require = this._pathRef.getAnchorPoints().getFirstChild(), module = this._dpathRef.getAnchorPoints().getLastChild());
      var n = new h(exports.getProperty("x"), exports.getProperty("y")), a = this._pathRef.getTransform();
      if (n = a ? a.mapPoint(n) : n, module && this._pathEditor.hitAnchorPoint(module, this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n), this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance)) {
        this._dpathRef = this._pathEditor.getPathPreview(true), this._mode == o.Mode.Append ? this._editPt = this._dpathRef.getAnchorPoints().getFirstChild() : this._editPt = this._dpathRef.getAnchorPoints().getLastChild();
        this._editPt.getProperty("tp");
        this._editPt.setProperty("ah", false), this._dpathRef.getAnchorPoints().removeChild(exports), this._dpathRef.setProperty("closed", true), this._pathEditor.requestInvalidation(), this._editPt.setFlag(r.Flag.Selected), this._pathEditor.requestInvalidation(), this._newPoint = false;
      } else if (require && this._mode == o.Mode.Append && null !== require.getProperty("hrx") && null !== require.getProperty("hry") && this._pathEditor.hitAnchorPoint(require, this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n), this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance))
        require.setProperty("ah", false), require.setProperties([
          "hrx",
          "hry"
        ], [
          null,
          null
        ]), this._newPoint = false;
      else if (require && this._mode == o.Mode.Prepend && null !== require.getProperty("hlx") && null !== require.getProperty("hly") && this._pathEditor.hitAnchorPoint(require, this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n), this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance))
        require.setProperty("ah", false), require.setProperties([
          "hlx",
          "hly"
        ], [
          null,
          null
        ]), this._newPoint = false;
      else {
        var s = this._hitSideConnectPoints(n);
        if (s)
          return this._connectPaths(s), true;
      }
    }
    return false;
  }, y.prototype._mouseMove = function (e) {
    if (!(new Date().getTime() - this._mDownTime < o.DBLCLICKTM))
      if (A.leaveWhenClosePath && this._pathRef && this._pathRef.getProperty("closed"))
        this._manager.notifyJobDone(this);
      else {
        var module;
        if (this._released)
          if (this.isPanning() ? this.panView(e.client, new h(A.autoPanStep, A.autoPanStep), new h(40, 40)) : this.beginPan(), this._lastMouseEvent = e, this._checkMode(), this._mode == o.Mode.Edit) {
            if (this._setCursorForPosition(null, e.client), d.modifiers.shiftKey && this._highlightMiddle(e.client), this._cursor == s.PenStart) {
              var require = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
              this._editor.getGuides().beginMap(this._editor.getMappingScopes()), require = this._editor.getGuides().mapPoint(require, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap();
              var r = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(require);
              this._setCursorForPosition(null, r);
            }
          } else {
            this._renewPreviewLink();
            r = e.client;
            if (!this._newPoint && this._pathEditor) {
              r = this._constrainIfNeeded(e.client, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathRef);
              require = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(r);
              this._editor.getGuides().beginMap(this._editor.getMappingScopes()), require = this._editor.getGuides().mapPoint(require, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), r = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(require), module = this._constructNewPoint(e, require), this._addPoint(module, true, false, true);
            } else
              this._editPt && (this._pathEditor.requestInvalidation(), r = this._updatePoint(e.client), this._pathEditor.requestInvalidation());
            if (this._editPt) {
              var a, c;
              this._mode == o.Mode.Append ? (a = this._pathRef.getAnchorPoints().getFirstChild(), c = this._pathRef.getAnchorPoints().getLastChild()) : (a = this._pathRef.getAnchorPoints().getLastChild(), c = this._pathRef.getAnchorPoints().getLastChild()), this._pathEditor.hitAnchorPoint(a, r, this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance) ? this._setCursorForPosition(s.PenEnd) : this._pathEditor.hitAnchorPoint(c, r, this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance) ? this._setCursorForPosition(s.PenModify) : this._hitSideConnectPoints(this._view.getViewTransform().mapPoint(r)) ? this._setCursorForPosition(s.PenEnd) : this._setCursorForPosition(s.Pen);
            } else {
              require = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(r);
              this._editor.getGuides().beginMap(this._editor.getMappingScopes()), require = this._editor.getGuides().mapPoint(require, n.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), r = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(require), this._setCursorForPosition(null, r);
            }
          }
        else
          e.button == l.BUTTON_RIGHT && this._mouseDrag(e);
      }
  }, y.prototype._updateHandles = function (e) {
    var t, i, n, r, a = this._editPt.getProperty("tp"), s = this._editPt.getProperty("x"), l = this._editPt.getProperty("y");
    if (this._pathEditor.hitAnchorPoint(this._editPt, e, this._view.getWorldTransform(this._view.getScene().getActivePage()), 0) && !this._firstAlt)
      this._mode != o.Mode.Edit ? this._mode == o.Mode.Append ? null !== this._editPt.getProperty("hlx") && null !== this._editPt.getProperty("hly") ? this._editPt.setProperties([
        "tp",
        "hrx",
        "hry"
      ], [
        u.AnchorPoint.Type.Symmetric,
        null,
        null
      ]) : this._editPt.setProperties([
        "tp",
        "hrx",
        "hry"
      ], [
        u.AnchorPoint.Type.Asymmetric,
        null,
        null
      ]) : null !== this._editPt.getProperty("hrx") && null !== this._editPt.getProperty("hry") ? this._editPt.setProperties([
        "tp",
        "hlx",
        "hly"
      ], [
        u.AnchorPoint.Type.Symmetric,
        null,
        null
      ]) : this._editPt.setProperties([
        "tp",
        "hlx",
        "hly"
      ], [
        u.AnchorPoint.Type.Asymmetric,
        null,
        null
      ]) : d.modifiers.optionKey ? this._editPt.setProperties([
        "tp",
        "hrx",
        "hry"
      ], [
        u.AnchorPoint.Type.Asymmetric,
        null,
        null
      ]) : this._editPt.setProperties([
        "tp",
        "hlx",
        "hly",
        "hrx",
        "hry"
      ], [
        u.AnchorPoint.Type.Asymmetric,
        null,
        null,
        null,
        null
      ]);
    else {
      var h = this._pathEditor.getTransformFromNative(this._view.getWorldTransform(this._view.getScene().getActivePage())).inverted().mapPoint(e);
      if (this._newPoint || !d.modifiers.optionKey || !this._firstAlt || a == u.AnchorPoint.Type.Connector || null == this._editPt.getPrevious() && null == this._editPt.getNext()) {
        if (a != u.AnchorPoint.Type.Connector) {
          this._editPt.setProperty("ah", false);
          var A = h.getX(), c = h.getY();
          if (d.modifiers.optionKey)
            this._mode == o.Mode.Prepend ? this._editPt.setProperties([
              "tp",
              "hlx",
              "hly"
            ], [
              u.AnchorPoint.Type.Asymmetric,
              A,
              c
            ]) : this._editPt.setProperties([
              "tp",
              "hrx",
              "hry"
            ], [
              u.AnchorPoint.Type.Asymmetric,
              A,
              c
            ]);
          else {
            var g = u.AnchorPoint.Type.Symmetric, f = null == this._editPt.getPrevious() && null != this._editPt.getNext() || null != this._editPt.getPrevious() && null == this._editPt.getNext();
            if (this._mode == o.Mode.Edit || this._newPoint || this._dpathRef.getProperty("closed") || !f) {
              var m = s + s - A, y = l + l - c;
              if (this._dpathRef.getProperty("closed") && f && this._mode != o.Mode.Edit && !this._newPoint) {
                var _ = null;
                !(_ = this._mode == o.Mode.Append ? this._dpathRef.getAnchorPoints().getLastChild() : this._dpathRef.getAnchorPoints().getFirstChild()) || _ === this._editPt || _.getProperty("hrx") || _.getProperty("hry") || (g = u.AnchorPoint.Type.Asymmetric, A = c = null);
              }
              this._mode == o.Mode.Prepend ? this._editPt.setProperties([
                "tp",
                "hrx",
                "hry",
                "hlx",
                "hly"
              ], [
                g,
                m,
                y,
                A,
                c
              ]) : this._editPt.setProperties([
                "tp",
                "hrx",
                "hry",
                "hlx",
                "hly"
              ], [
                g,
                A,
                c,
                m,
                y
              ]);
            } else
              this._mode == o.Mode.Prepend ? this._editPt.setProperties([
                "tp",
                "hlx",
                "hly"
              ], [
                g,
                A,
                c
              ]) : this._editPt.setProperties([
                "tp",
                "hrx",
                "hry"
              ], [
                g,
                A,
                c
              ]);
          }
        } else if (this._mode == o.Mode.Append || this._mode == o.Mode.Edit && d.modifiers.optionKey) {
          t = null, i = null;
          var v = this._editPt.getPrevious();
          if (v) {
            var b = v.getProperty("x"), C = v.getProperty("y"), w = Math.sqrt(p.ptSqrDist(s, l, b, C));
            if (p.isEqualEps(w, 0))
              n = h.getX(), r = h.getY();
            else {
              var E = (s - b) / w, B = (l - C) / w;
              (T = p.vDotProduct(E, B, h.getX() - s, h.getY() - l)) > 0 ? (n = s + E * T, r = l + B * T) : (n = null, r = null);
            }
          } else
            n = h.getX(), r = h.getY();
          this._editPt.setProperties([
            "hlx",
            "hly",
            "hrx",
            "hry"
          ], [
            t,
            i,
            n,
            r
          ]);
        } else if (this._mode == o.Mode.Prepend) {
          n = null, r = null;
          var x = this._editPt.getNext();
          if (x) {
            var P = x.getProperty("x"), S = x.getProperty("y");
            w = Math.sqrt(p.ptSqrDist(s, l, P, S));
            if (p.isEqualEps(w, 0))
              t = h.getX(), i = h.getY();
            else {
              var T;
              E = (s - P) / w, B = (l - S) / w;
              (T = p.vDotProduct(E, B, h.getX() - s, h.getY() - l)) > 0 ? (t = s + E * T, i = l + B * T) : (t = null, i = null);
            }
          } else
            t = h.getX(), i = h.getY();
          this._editPt.setProperties([
            "hlx",
            "hly",
            "hrx",
            "hry"
          ], [
            t,
            i,
            n,
            r
          ]);
        }
      } else {
        var I = h.getX() - s, F = h.getY() - l;
        this._editPt.setProperty("ah", false);
        var R = this._dragStartPt.getProperty("hrx");
        n = null != R ? R + I : h.getX();
        var D = this._dragStartPt.getProperty("hry");
        r = null != D ? D + F : h.getY(), this._editPt.setProperty("ah", false), this._editPt.setProperties([
          "tp",
          "hrx",
          "hry"
        ], [
          u.AnchorPoint.Type.Asymmetric,
          n,
          r
        ]);
      }
    }
    this._pathEditor.requestInvalidation();
  }, y.prototype._mouseDrag = function (e) {
    this.isPanning() && this.panView(e.client, e.clientDelta), !this._refPt || this._editPt || this._released || (this._makePointMajor(this._refPt), this._editPt = this._pathEditor.getPathPointPreview(this._refPt), this._dragStartPt = this._refPt, e.button == l.BUTTON_LEFT && this._editPt.setProperty("tp", u.AnchorPoint.Type.Symmetric), this._pathEditor.requestInvalidation()), !this._released && this._editPt && (this._lastMouseEvent = e, this._setCursorForPosition(s.PenDrag), this._dragStartPt || (this._dragStartPt = this._refPt ? this._refPt : this._editPt, e.button == l.BUTTON_LEFT && this._editPt.getProperty("tp") != u.AnchorPoint.Type.Connector && this._editPt.setProperty("tp", u.AnchorPoint.Type.Symmetric)), this._dragStarted = true, this._updatePointProperties(e.client));
  }, y.prototype._constructNewPoint = function (e, t) {
    var i = new c.AnchorPoint();
    return i.setProperties([
      "x",
      "y"
    ], [
      t.getX(),
      t.getY()
    ]), i;
  }, y.prototype._mouseRelease = function (e) {
    this._pathEditor && this._pathEditor.allowRemoval(), this._editor.getGuides().invalidate();
    if (!this._released)
      try {
        if (this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration()), this._released = true, this._pathEditor && this._mode == o.Mode.Edit)
          this._dragStarted || !this._refPt || this._editPt ? this._dragStarted ? (this._updatePointProperties(e.client), this._transactionType == o.Transaction.NoTransaction && this._startTransaction(o.Transaction.ModifyPointProperties), this._pathEditor.applyTransform(this._pathRef), this._commitChanges(), this._setCursorForPosition(null, e.client)) : (this._commitChanges(), this._setCursorForPosition(null, e.client)) : this._mouseNoDragReleaseOnEdit(e.client);
        else if (this._dpathRef) {
          var module, require = e.client;
          if (this._dragStarted && (require = this._updatePointProperties(e.client)), this._dpathRef.getProperty("closed"))
            this._refPt && (this._startTransaction(o.Transaction.ModifyPathProperties), this._pathEditor.selectOnePoint(this._refPt), this._pathEditor.applyTransform(this._pathRef), this._pathEditor.requestInvalidation(), this._pathRef.setProperties(["closed"], [true]), g.each(this._pathRef.getPaintLayers().getFillLayers(), function (e, t) {
              t.setProperty("_vs", true);
            }), this._pathEditor.setActiveExtendingMode(f.ExtendingMode.Off), true), this._commitChanges(), this._mode = o.Mode.Edit, this._setCursorForPosition(null, e.client);
          else
            this._newPoint && (this._addPoint(this._editPt, false, true), this._pathEditor.requestInvalidation()), this._mode == o.Mode.Append ? (this._refPt = this._pathRef.getAnchorPoints().getLastChild(), module = this._pathRef.getAnchorPoints().getFirstChild()) : (this._refPt = this._pathRef.getAnchorPoints().getFirstChild(), module = this._pathRef.getAnchorPoints().getLastChild()), this._newPoint || (this._transactionType == o.Transaction.NoTransaction && this._startTransaction(o.Transaction.ModifyPointProperties), this._pathEditor.selectOnePoint(this._refPt), this._pathEditor.applyTransform(this._pathRef)), module && module != this._refPt && this._pathEditor.hitAnchorPoint(module, require, this._view.getWorldTransform(this._view.getScene().getActivePage()), A.annotDropDistance) ? this._setCursorForPosition(s.PenEnd) : this._setCursorForPosition(s.Pen), this._commitChanges();
          this._refPt = null;
        }
      } finally {
        this._finishTransaction();
      }
    this._dragStarted = false, this._dragStartPt = null, this._lastMouseEvent = null, this._firstAlt = false, this._allowDeactivation();
  }, y.prototype._updateShoulders = function (e) {
    if ((this._mode == o.Mode.Append || this._mode == o.Mode.Prepend) && this._editPt)
      if (this._pathEditor.hitAnchorPoint(this._editPt, e, this._view.getWorldTransform(this._view.getScene().getActivePage()), 0))
        this._mode == o.Mode.Append ? this._editPt.setProperty("cr", null) : this._mode == o.Mode.Prepend && this._editPt.setProperty("cl", null);
      else {
        var module = this._pathEditor.getTransformFromNative(this._view.getWorldTransform(this._view.getScene().getActivePage())), require = new h(this._editPt.getProperty("x"), this._editPt.getProperty("y"));
        require = module.mapPoint(require);
        var n = p.ptDist(require.getX(), require.getY(), e.getX(), e.getY());
        this._mode == o.Mode.Append ? this._editPt.setProperty("cr", n) : this._mode == o.Mode.Prepend && this._editPt.setProperty("cl", n);
      }
  }, y.prototype._updatePointProperties = function (e) {
    var t = e;
    if (this._pathEditor.requestInvalidation(), this._editPt && this._editPt.getProperty("tp") == u.CornerType.Rounded)
      this._updateShoulders(e);
    else if (d.modifiers.spaceKey) {
      if (this._lastMouseEvent && this._lastMouseEvent.clientDelta && this._editPt) {
        var require = this._editPt.getProperty("x"), n = this._editPt.getProperty("y"), r = new h(require + this._lastMouseEvent.clientDelta._x, n + this._lastMouseEvent.clientDelta._y);
        r = this._updatePoint(r), this._pathEditor.requestInvalidation(), t = t.add(new h(r.getX() - require, r.getY() - n));
      }
    } else
      t = this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathRef, this._dragStartPt), this._updateHandles(t);
    return t;
  }, y.prototype.toString = function () {
    return "[Object GPenTool]";
  }, exports.exports = y;
}
