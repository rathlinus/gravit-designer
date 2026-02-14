/**
 * Module 335
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
  var n = i(2), r = i(77), o = i(5), a = i(332), s = i(167), l = i(39), h = i(64), A = i(150), c = i(60), p = i(52), u = i(380), d = i(164), g = i(0), f = i(45), m = i(99), y = i(127), _ = i(36), v = i(11), b = i(24), C = i(155), w = i(9), E = i(47), B = i(333);
  function x() {
    a.call(this);
  }
  g.inheritAndMix(x, a, [B]), x._SmoothingManager = function () {
  }, x._SmoothingManager.prototype._current = null, x._SmoothingManager.prototype._currentPoints = null, x._SmoothingManager.prototype._fitter = null, x._SmoothingManager.prototype._firstTangent = null, x._SmoothingManager.prototype._lastTangent = null, x._SmoothingManager.prototype._cdist = 0, x._SmoothingManager.prototype._path = null, x._SmoothingManager.prototype._lastPos = null, x._SmoothingManager.prototype._lastSmoothed = null, x._SmoothingManager.prototype._startingPoint = null, x._SmoothingManager.prototype.begin = function (e) {
    this._path = e;
  }, x._SmoothingManager.prototype.finish = function () {
    this._smoothCurrent();
  }, x.MAXPOINTS = 20, x.SAMPLEDISTANCE = 1, x.MINFITDISTSQ = 400;
  var P = x.MAXPOINTS, S = x.SAMPLEDISTANCE, T = x.MINFITDISTSQ;
  x._SmoothingManager.prototype.start = function (e) {
    this._current = null, this._currentPoints = [], this._fitter = new u(7), this._firstTangent = null, this._lastTangent = null, this._cdist = 0, this._lastPos = null, this._lastSmoothed = null, this._startingPoint = e;
  }, x._SmoothingManager.prototype.move = function (e) {
    var t = 0;
    if (this._current) {
      var i = this._current.subtract(e);
      t = i.dot(i), this._cdist += t;
    }
    if (null == this._current || t >= S) {
      (this._currentPoints.length === P || this._currentPoints.length > 4 && this._cdist > T) && this._smoothCurrent(e);
      var n = new c.AnchorPoint();
      n.setProperties([
        "x",
        "y"
      ], [
        e.getX(),
        e.getY()
      ]), this._path.getAnchorPoints().appendChild(n), this._currentPoints.push(e), this._current = e;
    }
    this._lastPos = e;
  }, x._SmoothingManager.prototype._smoothCurrent = function (e) {
    var t = !1, i = e || this._lastPos;
    if (this._currentPoints.length) {
      if (this._lastSmoothed) {
        var n = new o(this._lastSmoothed.$x, this._lastSmoothed.$y);
        this._firstTangent = this._currentPoints[0].subtract(n), this._lastTangent = this._currentPoints[this._currentPoints.length - 1].subtract(i);
        var r = this._lastTangent.dot(this._lastTangent);
        0 !== r && (this._lastTangent = this._lastTangent.scale(1 / Math.sqrt(r)));
      } else
        t = !0, this._currentPoints.length && this._startingPoint ? this._firstTangent = this._currentPoints[0].subtract(this._startingPoint) : this._firstTangent = new o(0, 0);
      var a, s = this._firstTangent.dot(this._firstTangent);
      if (0 !== s && (this._firstTangent = this._firstTangent.scale(1 / Math.sqrt(s))), this._currentPoints.length > 2) {
        for (var l, h, A, c = this._path.getAnchorPoints(), p = this._lastSmoothed ? this._lastSmoothed.getNext() : c.getFirstChild(); p;)
          l = p.getNext(), c.removeChild(p), p = l;
        if (a = this._fitter.fitCurve(this._currentPoints, P, this._firstTangent, this._lastTangent), t && a && a.length) {
          h = a[0], (A = new f.AnchorPoint()).setProperties([
            "x",
            "y"
          ], [
            h[0].getX(),
            h[0].getY()
          ]), c.appendChild(A);
          for (var u = 0; u < a.length; u++)
            h = a[u], A.setProperties([
              "hrx",
              "hry"
            ], [
              h[1].getX(),
              h[1].getY()
            ]), (A = new f.AnchorPoint()).setProperties([
              "x",
              "y",
              "hlx",
              "hly"
            ], [
              h[3].getX(),
              h[3].getY(),
              h[2].getX(),
              h[2].getY()
            ]), c.appendChild(A);
        } else if (a) {
          A = c.getLastChild();
          for (u = 0; u < a.length; u++)
            h = a[u], A.setProperties([
              "hrx",
              "hry"
            ], [
              h[1].getX(),
              h[1].getY()
            ]), (A = new f.AnchorPoint()).setProperties([
              "x",
              "y",
              "hlx",
              "hly"
            ], [
              h[3].getX(),
              h[3].getY(),
              h[2].getX(),
              h[2].getY()
            ]), c.appendChild(A);
        }
      }
      this._currentPoints = [], this._lastSmoothed = this._path.getAnchorPoints().getLastChild(), this._cdist = 0;
    }
  }, x.prototype._smoothingManager = null, x.prototype._released = !0, x.prototype._lastMouseEvent = null, x.prototype._newPath = null, x.prototype._createdPath = null, x.prototype._transactionStarted = !1, x.prototype._willMerge = !0, x.prototype._startingSelection = null, x.prototype._lastReleasedPos = null, x.prototype._deactivationAllowed = !0, x.prototype.getCursor = function () {
    return p.PenStart;
  }, x.prototype.activate = function (e, t) {
    a.prototype.activate.call(this, e, t), t || (e.addEventListener(r.Down, this._mouseDown, this), e.addEventListener(r.Release, this._mouseRelease, this), e.addEventListener(r.DragEnd, this._mouseDragEnd, this), e.addEventListener(s.Down, this._keyDown, this), e.addEventListener(r.DragStart, this._mouseDragStart, this), e.addEventListener(r.Drag, this._mouseDrag, this), e.addEventListener(r.Move, this._mouseMove, this), e.addEventListener(r.DblClick, this._mouseDblClick, this), h.addEventListener(A, this._modifiersChanged, this)), this._smoothingManager = new x._SmoothingManager(), this._editor.setPathResize(!1, !0);
  }, x.prototype.deactivate = function (e, t) {
    this._finishTransaction(), this._allowDeactivation(), this._reset(), a.prototype.deactivate.call(this, e, t), e.removeEventListener(r.Down, this._mouseDown), e.removeEventListener(r.Release, this._mouseRelease), e.removeEventListener(s.Down, this._keyDown), e.removeEventListener(r.Drag, this._mouseDrag), e.removeEventListener(r.DragStart, this._mouseDragStart, this), e.removeEventListener(r.DragEnd, this._mouseDragEnd, this), e.removeEventListener(r.Move, this._mouseMove), e.removeEventListener(r.DblClick, this._mouseDblClick), h.removeEventListener(A, this._modifiersChanged, this);
  }, x.prototype._mouseDragStart = function (e) {
    this.beginPan();
  }, x.prototype._mouseDragEnd = function (e) {
    this.endPan();
  }, x.prototype.isDeactivatable = function () {
    return this._deactivationAllowed;
  }, x.prototype._allowDeactivation = function () {
    this._deactivationAllowed = !0;
  }, x.prototype._blockDeactivation = function () {
    this._deactivationAllowed = !1;
  }, x.prototype._createAndAppendPath = function () {
    var e = new (this._getRelatedItemClass())();
    return this._editor.insertElements([e], !1, !0, !0), v.each(e.getPaintLayers().getFillLayers(), function (e, t) {
      t.setProperty("_vs", !1);
    }), e.removeFlag(n.Flag.Selected), this._pathEditor = _.openEditor(e), this._pathEditor.setFlag(l.Flag.Detail), e;
  }, x.prototype._reset = function () {
    this._createdPath = this._newPath, this._newPath = null, this._lastMouseEvent = null;
  }, x.prototype._keyDown = function (e) {
    if (a.prototype._keyDown.call(this, e), e.key === d.Constant.ESC)
      this._lastMouseEvent = null, this._escAction();
    else if (e.key === d.Constant.ENTER)
      this._lastMouseEvent = null, this._enterAction();
    else if (("string" == typeof e.key || e.key instanceof String) && e.key.match(/^[0-9]$/)) {
      var t = parseInt(e.key), i = this._newPath || this._createdPath;
      if (i) {
        var n = 0;
        if (n = 0 === t ? 1 : t / 10, this._transactionStarted)
          i.setProperty("_bop", n);
        else
          try {
            this._startTransaction(), i.setProperty("_bop", n);
          } finally {
            this._finishTransaction();
          }
      }
    }
  }, x.prototype._escAction = function () {
    this._released && (this._pathEditor && (this._pathEditor.updatePartSelection(!1), this._pathEditor instanceof y && (this._pathEditor.setActiveExtendingMode(C.ExtendingMode.Off), this._newPath && this._newPath.removeFlag(n.Flag.Selected))), this._manager.notifyJobDone(this));
  }, x.prototype._enterAction = function () {
    this._released && (this._pathEditor && this._pathEditor instanceof y && this._pathEditor.setActiveExtendingMode(C.ExtendingMode.Off), this._manager.activateSubSelect());
  }, x.prototype._startTransaction = function () {
    this._editor.beginTransaction(), this._transactionStarted = !0;
  }, x.prototype._finishTransaction = function () {
    this._transactionStarted && (this._editor.commitTransaction(w.get(new E("GFreehandTool", "action.create-freehand-path"))), this._transactionStarted = !1);
  }, x.prototype._mouseDown = function (e) {
    if (e.button === r.BUTTON_LEFT)
      if (h.modifiers.shiftKey)
        this._released = !1;
      else {
        this._pathEditor && this._pathEditor.blockRemoval(), this._lastMouseEvent = e, this._startingSelection = this._editor.getSelection(), this._startingSelection && (this._startingSelection = this._startingSelection.slice());
        var t = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client), i = null;
        if (this._lastReleasedPos) {
          for (var n = Date.now(), o = this._lastReleasedPos.length - 2; o >= 0; o--) {
            var a = this._lastReleasedPos[o];
            if (!(n - a.time < 500))
              break;
            var s = a.pt.subtract(t);
            if (s.dot(s) > 10) {
              i = a.pt;
              break;
            }
          }
          this._lastReleasedPos = [];
        }
        this._mouseMove(e), this._released = !1, this._blockDeactivation(), this._editor.getGuides().beginMap(this._editor.getMappingScopes()), t = this._editor.getGuides().mapPoint(t, m.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), !1, this._view.getViewConfiguration()), this._startTransaction(), this._newPath = this._createAndAppendPath(), this._newPath && (this._smoothingManager.begin(this._newPath), this._smoothingManager.start(i), this._smoothingManager.move(t), this._pathEditor.selectOnePoint(this._newPath.getAnchorPoints().getFirstChild()), this._pathEditor.requestInvalidation(), this._pathEditor.setActiveExtendingMode(C.ExtendingMode.End));
      }
  }, x.prototype._modifiersChanged = function (e) {
    e.changed.shiftKey && this._lastMouseEvent && this._newPath && (h.modifiers.shiftKey ? (this._smoothingManager._smoothCurrent(), this._mouseDrag(this._lastMouseEvent)) : this._released && (this._released = !1, this._mouseRelease(e)));
  }, x.prototype._mouseMove = function (e) {
    this._lastMouseEvent = e, this._released ? (this._lastReleasedPos || (this._lastReleasedPos = []), this._lastReleasedPos.push({
      pt: this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client),
      time: Date.now()
    }), this._lastReleasedPos.length > 10 && this._lastReleasedPos.shift(), h.modifiers.shiftKey && this._mouseDrag(e)) : e.button == r.BUTTON_RIGHT && this._mouseDrag(e);
  }, x.prototype._mouseDrag = function (e) {
    if (this._newPath) {
      this.isPanning() && this.panView(e.client, e.clientDelta);
      var t = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
      if (this._lastMouseEvent = e, h.modifiers.shiftKey)
        this._newPath.getAnchorPoints().getLastChild().setProperties([
          "x",
          "y"
        ], [
          t.getX(),
          t.getY()
        ]);
      else
        this._smoothingManager.move(t);
      this._closeIfNeeded(1) ? this._newPath.hasFlag(n.Flag.Highlighted) ? this._pathEditor.requestInvalidation() : this._newPath.setFlag(n.Flag.Highlighted) : this._newPath && this._newPath.hasFlag(n.Flag.Highlighted) && this._newPath.removeFlag(n.Flag.Highlighted);
    }
  }, x.prototype._mouseRelease = function (e) {
    if (h.modifiers.shiftKey) {
      if (this._newPath) {
        this._smoothingManager._smoothCurrent();
        var t = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
        this._smoothingManager.move(t);
      }
      this._released = !0;
    } else {
      this._pathEditor && this._pathEditor.allowRemoval();
      if (this._lastMouseEvent = e, !this._released)
        try {
          this._smoothingManager.finish(), this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), !1, this._view.getViewConfiguration()), this._released = !0;
          var i = this._newPath.getAnchorPoints();
          if (i.getFirstChild() === i.getLastChild()) {
            var r = new f.AnchorPoint();
            r.setProperties([
              "x",
              "y"
            ], [
              i.getFirstChild().$x + 1,
              i.getFirstChild().$y
            ]), i.appendChild(r);
          }
          this._finalizeDrawing(), this._newPath.hasFlag(n.Flag.Highlighted) && this._newPath.removeFlag(n.Flag.Highlighted);
        } finally {
          this._finishTransaction();
        }
      this._lastMouseEvent = null, this._reset(), this._allowDeactivation();
    }
  }, x.prototype._finalizeDrawing = function () {
    this._closeIfNeeded() && this._correctFillVisibility(), this._newPath.setFlag(n.Flag.Selected);
  }, x.prototype._correctFillVisibility = function () {
    if (this._newPath)
      if (this._startingSelection && this._startingSelection.length) {
        for (var e = null, t = this._startingSelection.length - 1; t >= 0; t--) {
          var i = this._startingSelection[t];
          if (i instanceof c && !0 === i.getProperty("closed") && !1 === i.getProperty("fvs")) {
            e = i;
            break;
          }
        }
        e || v.each(this._newPath.getPaintLayers().getFillLayers(), function (e, t) {
          t.setProperty("_vs", !0);
        });
      } else
        v.each(this._newPath.getPaintLayers().getFillLayers(), function (e, t) {
          t.setProperty("_vs", !0);
        });
  }, x.prototype._closeIfNeeded = function (e) {
    if (!this._newPath)
      return !1;
    var t = this._newPath.getAnchorPoints(), i = t.getFirstChild(), n = t.getLastChild(), r = (i.$x - n.$x) * (i.$x - n.$x) + (i.$y - n.$y) * (i.$y - n.$y), o = window.devicePixelRatio / this._view.getZoom();
    return r < 225 * o * o && (e || (n.setProperties([
      "x",
      "y"
    ], [
      i.$x,
      i.$y
    ]), this._newPath.correctClosedAttribute()), !0);
  }, x.prototype._getRelatedItemClass = function () {
    return c;
  }, x.prototype._mouseDblClick = function (e) {
    "edit" == b.selectDoubleClickBehavior && this._manager.notifyJobDone(this);
  }, x.prototype.toString = function () {
    return "[Object GFreehandTool]";
  }, e.exports = x;
}
