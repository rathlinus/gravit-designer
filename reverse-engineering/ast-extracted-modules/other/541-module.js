/**
 * Module 541
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
  var n = i(64), r = i(150), o = i(99), a = i(2), s = i(0), l = i(127), h = i(52), A = i(45), c = i(36), p = i(77), u = i(5), d = i(24), g = i(235), f = i(332), m = i(60), y = i(167), _ = i(164), v = i(39), b = i(81), C = i(17), w = i(12), E = i(22), B = i(82), x = i(155), P = i(9), S = i(47);
  function T() {
    f.call(this);
  }
  s.inherit(T, f), T.prototype._getRelatedItemClass = function () {
    return m;
  }, T.prototype._pathRef = null, T.prototype._dpathRef = null, T.prototype._newPoint = null, T.prototype._editPt = null, T.prototype._refPt = null, T.prototype._pathEditor = null, T.prototype._compoundPathEditor = null, T.prototype._released = !0, T.prototype._dragStarted = !1, T.prototype._dragStartPt = null, T.prototype._firstAlt = !1, T.Transaction = {
    NoTransaction: 0,
    InsertPoint: 1,
    AppendPoint: 2,
    MovePoint: 3,
    DeletePoint: 4,
    ModifyPointProperties: 5,
    ModifyPathProperties: 6,
    InsertElement: 7,
    JoinPaths: 8
  }, T.prototype._transactionType = T.Transaction.NoTransaction, T.Mode = {
    Append: 0,
    Prepend: 1,
    Edit: 2
  }, T.prototype._mode = T.Mode.Append, T.prototype._mDownTime = 0, Object.defineProperty(T, "DBLCLICKTM", {
    get: function () {
      return d.pathDbClickTime || 300;
    }
  }), T.prototype._cursor = null, T.prototype._lastMouseEvent = null, T.prototype._deactivationAllowed = !0, T.prototype._cached = null, T.prototype._sideConnectPoints = null, T.prototype.getCursor = function () {
    return this._cursor;
  }, T.prototype.catchesContextMenu = function (e) {
    return !e;
  }, T.prototype.activate = function (e, t) {
    f.prototype.activate.call(this, e, t), t || (e.addEventListener(p.Down, this._mouseDown, this), e.addEventListener(p.Release, this._mouseRelease, this), e.addEventListener(y.Down, this._keyDown, this), n.addEventListener(r, this._modifiersChanged, this), this._editor.addEventListener(B.MODIFIED_EVENT, this._sceneModified, this)), this._cursor = h.PenStart, this._transactionType = T.Transaction.NoTransaction, this._editor.setPathResize(!1, !0), this._initialSelectCorrection(), this._findSideConnectPoints(), this._lightDeactivationHandled = !1;
  }, T.prototype.deactivate = function (e, t) {
    this._pathEditor && this._pathEditor instanceof l && !t && this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off), this._pathEditor && (this._newPoint || this._dpathRef) && (this._pathEditor.requestInvalidation(), this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation()), this._finishTransaction(), this._allowDeactivation(), this._reset(), this._editor && (this._editor.getGuides().invalidate(), this._editor.removeEventListener(B.MODIFIED_EVENT, this._sceneModified), t || this._lightDeactivationHandled || this._editor.setPathResize(!0)), f.prototype.deactivate.call(this, e, t), e.removeEventListener(p.Down, this._mouseDown), e.removeEventListener(p.Release, this._mouseRelease), e.removeEventListener(y.Down, this._keyDown), n.removeEventListener(r, this._modifiersChanged), this._lightDeactivationHandled = t;
  }, T.prototype.isDeactivatable = function () {
    return this._deactivationAllowed;
  }, T.prototype.paint = function (e) {
    if (this._cached && this._cached.middlePoint) {
      var t = d.annotationHandles.path.center;
      b.paintAnnotation(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._cached.middlePoint, t.type, !1, t.size, C.WHITE, e.annotationColor);
    }
  }, T.prototype._allowDeactivation = function () {
    this._deactivationAllowed = !0;
  }, T.prototype._blockDeactivation = function () {
    this._deactivationAllowed = !1;
  }, T.prototype._checkPathEditor = function () {
    var e = this._editor.getPathSelection();
    e && (this._pathEditor = c.openEditor(e), this._pathEditor.setFlag(v.Flag.Detail), this._pathEditor instanceof g ? this._compoundPathEditor = this._pathEditor : this._compoundPathEditor = null);
  }, T.prototype._checkMode = function () {
    if (this._checkPathEditor(), this._pathEditor)
      if (this._compoundPathEditor)
        this._mode = T.Mode.Edit, this._compoundPathEditor.getElement().getWorkspace() || (this._pathRef = this._compoundPathEditor = this._pathEditor = null);
      else if (this._pathEditor.getPath().getWorkspace())
        if (this._pathRef = this._pathEditor.getPath(), this._pathRef.getProperty("closed"))
          this._mode = T.Mode.Edit;
        else {
          var e = this._pathEditor.getPointsSelectionType();
          e == l.PointsSelectionType.No || e == l.PointsSelectionType.Several || e == l.PointsSelectionType.Middle ? this._mode = T.Mode.Edit : e == l.PointsSelectionType.Last ? this._mode = T.Mode.Append : e == l.PointsSelectionType.First && (this._mode = T.Mode.Prepend);
        }
      else
        this._mode = T.Mode.Append, this._pathRef = this._compoundPathEditor = this._pathEditor = null;
    else
      this._mode = T.Mode.Append, this._pathRef = null;
  }, T.prototype._initialSelectCorrection = function () {
    if (this._checkPathEditor(), this._pathEditor && this._pathEditor instanceof l)
      if (this._pathRef = this._pathEditor.getPath(), this._pathRef.getProperty("closed"))
        this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off);
      else if (this._pathEditor.getActiveExtendingMode()) {
        var e = this._pathEditor.getPointsSelectionType();
        e != l.PointsSelectionType.Last && e != l.PointsSelectionType.First && this._pathEditor.selectOnePoint(this._pathEditor.getActiveExtendingMode() == x.ExtendingMode.Beginning ? this._pathRef.getAnchorPoints().getFirstChild() : this._pathRef.getAnchorPoints().getLastChild()), this._cursor = h.Pen;
      }
  }, T.prototype._renewPreviewLink = function () {
    this._pathEditor ? this._dpathRef = this._pathEditor.getPathPreview() : this._dpathRef = null;
  }, T.prototype._updatePoint = function (e) {
    var t = null;
    return this._pathRef && this._editPt && (t = this._mode != T.Mode.Edit ? this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathRef) : this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathRef, this._dpathRef.getAnchorPoints().getPreviousPoint(this._editPt)), this._editor.getGuides().beginMap(this._editor.getMappingScopes()), t = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(this._editor.getGuides().mapPoint(this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(t), o.DetailMap.Mode.DetailOnFilterOn)), this._editor.getGuides().finishMap(), this._pathEditor.movePoint(this._editPt, t, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._dragStartPt)), t;
  }, T.prototype._addPoint = function (e, t, i, n) {
    if (this._pathEditor && !i) {
      var r = this._pathRef && this._pathRef.getTransform();
      if (r) {
        var o = new u(e.getProperty("x"), e.getProperty("y"));
        o = r.inverted().mapPoint(o), e.setProperties([
          "x",
          "y"
        ], [
          o.getX(),
          o.getY()
        ]);
      }
    }
    t ? this._pathEditor ? (this._pathEditor.requestInvalidation(), this._mode == T.Mode.Append ? (n || this._dpathRef.getAnchorPoints().getLastChild().removeFlag(a.Flag.Selected), this._dpathRef.getAnchorPoints().appendChild(e), n || e.setFlag(a.Flag.Selected), this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._newPoint = !0, this._pathEditor.setActiveExtendingMode(x.ExtendingMode.End)) : this._mode == T.Mode.Prepend && (n || this._dpathRef.getAnchorPoints().getFirstChild().removeFlag(a.Flag.Selected), this._dpathRef.getAnchorPoints().insertChild(e, this._dpathRef.getAnchorPoints().getFirstChild()), n || e.setFlag(a.Flag.Selected), this._pathEditor.shiftPreviewTable(1), this._editPt = this._dpathRef.getAnchorPoints().getFirstChild(), this._newPoint = !0, this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Beginning)), this._pathEditor.requestInvalidation()) : (this._startTransaction(T.Transaction.InsertElement), this._createAndAppendPath(e), this._pathEditor ? (this._findSideConnectPoints(), this._pathEditor.selectOnePoint(e), this._checkMode(), this._renewPreviewLink(), this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._pathEditor.requestInvalidation(), this._pathEditor.setActiveExtendingMode(x.ExtendingMode.End)) : this._finishTransaction()) : this._pathEditor ? (this._pathEditor.requestInvalidation(), this._mode == T.Mode.Append ? (this._dpathRef && (this._dpathRef.getAnchorPoints().removeChild(e), this._dpathRef = null, e.hasFlag(a.Flag.Selected) && e.removeFlag(a.Flag.Selected)), this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation(), this._startTransaction(T.Transaction.AppendPoint), this._pathRef.getAnchorPoints().appendChild(e), this._pathEditor.selectOnePoint(e), this._pathEditor.setActiveExtendingMode(x.ExtendingMode.End)) : this._mode == T.Mode.Prepend && (this._dpathRef && (this._dpathRef.getAnchorPoints().removeChild(e), this._dpathRef = null, e.hasFlag(a.Flag.Selected) && e.removeFlag(a.Flag.Selected)), this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation(), this._startTransaction(T.Transaction.AppendPoint), this._pathRef.getAnchorPoints().insertChild(e, this._pathRef.getAnchorPoints().getFirstChild()), this._pathEditor.selectOnePoint(e), this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Beginning)), this._pathEditor.requestInvalidation()) : (this._startTransaction(T.Transaction.InsertElement), this._createAndAppendPath(e), this._findSideConnectPoints(), this._pathEditor.selectOnePoint(e), this._checkMode(), this._renewPreviewLink(), this._pathEditor.requestInvalidation(), this._pathEditor.setActiveExtendingMode(x.ExtendingMode.End));
  }, T.prototype._commitChanges = function () {
    this._pathEditor.requestInvalidation(), this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation(), this._reset();
  }, T.prototype._createAndAppendPath = function (e) {
    var t = new u(e.$x, e.$y), i = this._view.getScene().getActivePage(), n = this._view.getWorldTransform(i).mapPoint(t);
    this._editor.updateByMousePosition(n, this._view.getWorldTransform(this._scene), !1, this._view.getViewConfiguration());
    var r = this._view.getScene().getActivePage();
    i !== r && (t = this._view.getViewTransform(r).mapPoint(n), e.setProperties([
      "x",
      "y"
    ], [
      t.getX(),
      t.getY()
    ]));
    var o = new (this._getRelatedItemClass())();
    o.getAnchorPoints().appendChild(e), o.setFlag(a.Flag.Selected), this._editor.insertElements([o], !1, !0, !0), e.setFlag(a.Flag.Selected), this._checkPathEditor();
  }, T.prototype._mouseDown = function (e) {
    this._released = !1, this._pathEditor && this._pathEditor.blockRemoval();
  }, T.prototype._mouseDblClick = function (e) {
    this._lastMouseEvent = null, this._checkMode(), this._pathEditor && (this._pathEditor.updatePartSelection(!1), this._pathEditor instanceof l && this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off), this._commitChanges()), this._mode = T.Mode.Edit, this._setCursorForPosition(null, e.client);
  }, T.prototype._mouseRelease = function (e) {
    this._released = !0, this._dragStarted = !1, this._dragStartPt = null, this._pathEditor && this._pathEditor.allowRemoval(), this._editor.getGuides().invalidate();
  }, T.prototype._mouseMove = function (e) {
  }, T.prototype._reset = function () {
    if (this._compoundPathEditor ? this._compoundPathEditor.removeFlag(v.Flag.Detail) : this._pathEditor && this._pathEditor.removeFlag(v.Flag.Detail), this._dpathRef = null, this._pathRef = null, this._pathEditor = null, this._newPoint = !1, this._editPt = null, this._dragStartPt = null, this._refPt = null, this._compoundPathEditor = null, this._cached) {
      var e = this._getPaintRect();
      this._cached = null, e && this.invalidateArea(e);
    }
  }, T.prototype._keyDown = function (e) {
    f.prototype._keyDown.call(this, e), e.key === _.Constant.ESC ? (this._lastMouseEvent = null, this._escAction()) : e.key === _.Constant.ENTER && (this._lastMouseEvent = null, this._enterAction());
  }, T.prototype._modifiersChanged = function (e) {
    e.changed.shiftKey && this._lastMouseEvent ? this._released ? this._mouseMove(this._lastMouseEvent) : this._mouseDrag(this._lastMouseEvent) : e.changed.optionKey && (this._firstAlt = !1, this._released || (n.modifiers.optionKey && (this._firstAlt = !this._dragStarted), this._lastMouseEvent && this._mouseDrag(this._lastMouseEvent)));
  }, T.prototype._escAction = function () {
    this._released && (this._checkMode(), this._pathEditor && (this._pathEditor.updatePartSelection(!1), this._pathEditor instanceof l && (this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off), this._pathRef && this._pathRef.removeFlag(a.Flag.Selected)), this._commitChanges()), this._setCursorForPosition(h.PenStart), this._manager.notifyJobDone(this));
  }, T.prototype._enterAction = function () {
    this._released && (this._checkMode(), this._pathEditor && (this._pathEditor instanceof l && this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off), this._commitChanges()), this._manager.activateSubSelect());
  }, T.prototype._constrainIfNeeded = function (e, t, i, r) {
    var o = e;
    if (n.modifiers.shiftKey) {
      var a = null;
      r ? a = r : i && (this._mode == T.Mode.Append ? a = i.getAnchorPoints().getLastChild() : this._mode == T.Mode.Prepend && (a = i.getAnchorPoints().getFirstChild())), a && (o = this._pathEditor.constrainPosition(e, t, a));
    }
    return o;
  }, T.prototype._makePointMajor = function (e) {
    this._compoundPathEditor && (this._compoundPathEditor.updatePartSelection(!1), this._compoundPathEditor.releasePathPreview(), this._compoundPathEditor.requestInvalidation()), this._pathEditor.selectOnePoint(e), this._dpathRef = null, this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation(), this._dpathRef = this._pathEditor.getPathPreview(!1, e);
  }, T.prototype._startTransaction = function (e) {
    this._transactionType == T.Transaction.NoTransaction && this._editor.beginTransaction(), this._transactionType = e;
  }, T.prototype._finishTransaction = function () {
    try {
      switch (this._transactionType) {
      case T.Transaction.AppendPoint:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.append-point")));
        break;
      case T.Transaction.InsertElement:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.insert-elements")));
        break;
      case T.Transaction.InsertPoint:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.insert-point")));
        break;
      case T.Transaction.MovePoint:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.move-point")));
        break;
      case T.Transaction.DeletePoint:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.delete-point")));
        break;
      case T.Transaction.ModifyPointProperties:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.modify-point-properties")));
        break;
      case T.Transaction.ModifyPathProperties:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.modify-path-properties")));
        break;
      case T.Transaction.JoinPaths:
        this._editor.commitTransaction(P.get(new S("GPathTool", "action.join-paths")));
      }
    } finally {
      this._transactionType = T.Transaction.NoTransaction;
    }
  }, T.prototype._isSegmentMiddle = function (e) {
    return e.data.type == l.SegmentData.HitRes && e.data.hitRes.outline && 0.5 === e.data.hitRes.slope;
  }, T.prototype._mouseDownOnEdit = function (e, t) {
    var i = e.client;
    if (this._pathEditor && this._pathEditor.getElement().getWorkspace()) {
      this._pathEditor.requestInvalidation(), this._pathEditor.releasePathPreview(), this._pathEditor.requestInvalidation();
      var r = this._getPartInfo(i);
      if (r && (this._pathEditor = r.editor, this._pathRef = this._pathEditor.getPath()), r && r.id.type == l.PartType.Point) {
        var o = r.id.point;
        this._pathRef.getProperty("closed") || o !== this._pathRef.getAnchorPoints().getLastChild() ? this._pathRef.getProperty("closed") || o !== this._pathRef.getAnchorPoints().getFirstChild() ? (this._refPt = o, null !== this._refPt.getProperty("hlx") && null !== this._refPt.getProperty("hly") || null !== this._refPt.getProperty("hrx") && null !== this._refPt.getProperty("hry") ? this._setCursorForPosition(h.PenModify) : this._setCursorForPosition(h.PenMinus)) : (this._mode = T.Mode.Prepend, this._makePointMajor(o)) : (this._mode = T.Mode.Append, this._makePointMajor(o));
      } else if (r && r.id.type == l.PartType.Segment && r.data.type == l.SegmentData.HitRes) {
        if (n.modifiers.shiftKey && this._cached && this._cached.middlePoint) {
          r.data.hitRes.slope = 0.5;
          var a = this._getPaintRect();
          this._cached = null, this.invalidateArea(a);
        }
        if (this._isSegmentMiddle(r) ? this._setCursorForPosition(h.PenPlusMiddle) : this._setCursorForPosition(h.PenPlus), this._startTransaction(T.Transaction.InsertPoint), o = this._pathRef.insertHitPoint(r.data.hitRes)) {
          if (e.button == p.BUTTON_RIGHT && n.modifiers.optionKey)
            o.getProperty("tp") == A.AnchorPoint.Type.Asymmetric && o.setProperty("tp", A.AnchorPoint.Type.Connector);
          t && t(o), this._makePointMajor(o), this._refPt = o, this._editPt = this._pathEditor.getPathPointPreview(o), this._pathEditor.requestInvalidation(), this._mode = T.Mode.Edit;
        } else
          this._finishTransaction(), this._reset(), this._mode = T.Mode.Append;
      } else
        this._setCursorForPosition(h.PenStart), this._pathEditor.updatePartSelection(!1), this._commitChanges(), this._mode = T.Mode.Append;
    }
  }, T.prototype._mouseNoDragReleaseOnEdit = function (e) {
    this._refPt && (null != this._refPt.getProperty("hlx") || null != this._refPt.getProperty("hly") || null != this._refPt.getProperty("hrx") || null != this._refPt.getProperty("hry") ? (this._transactionType == T.Transaction.NoTransaction && this._startTransaction(T.Transaction.ModifyPointProperties), this._refPt.setProperties([
      "ah",
      "hlx",
      "hly",
      "hrx",
      "hry"
    ], [
      !1,
      null,
      null,
      null,
      null
    ]), this._makePointMajor(this._refPt), this._setCursorForPosition(h.PenMinus)) : (this._pathRef.getAnchorPoints().getFirstChild() != this._pathRef.getAnchorPoints().getLastChild() && (this._transactionType == T.Transaction.NoTransaction ? this._startTransaction(T.Transaction.DeletePoint) : this._transactionType = T.Transaction.DeletePoint, this._pathRef.getAnchorPoints().removeChild(this._refPt)), this._setCursorForPosition(null, e)), this._refPt = null, this._commitChanges());
  }, T.prototype._setCursorForPosition = function (e, t) {
    if (null !== e)
      this._cursor = e;
    else if (t)
      if (this._pathEditor || this._checkPathEditor(), this._pathEditor) {
        var i = this._getPartInfo(t);
        if (i && i.id.type == l.PartType.Point) {
          var r = i.id.point, o = i.editor.getPath();
          o.getProperty("closed") || r !== o.getAnchorPoints().getFirstChild() && r !== o.getAnchorPoints().getLastChild() ? this._mode == T.Mode.Edit ? null !== r.getProperty("hlx") && null !== r.getProperty("hly") || null !== r.getProperty("hrx") && null !== r.getProperty("hry") ? this._cursor = h.PenModify : this._cursor = h.PenMinus : this._cursor = h.Pen : this._mode == T.Mode.Append && r === o.getAnchorPoints().getFirstChild() || this._mode == T.Mode.Prepend && r === o.getAnchorPoints().getLastChild() ? this._cursor = h.PenEnd : this._mode == T.Mode.Append && r === o.getAnchorPoints().getLastChild() || this._mode == T.Mode.Prepend && r === o.getAnchorPoints().getFirstChild() ? this._cursor = h.PenModify : this._cursor = h.Pen;
        } else
          this._mode == T.Mode.Edit ? i && i.id.type == l.PartType.Segment ? n.modifiers.shiftKey || this._isSegmentMiddle(i) ? this._cursor = h.PenPlusMiddle : this._cursor = h.PenPlus : this._cursor = h.PenStart : this._cursor = h.Pen;
      } else
        this._cursor = h.PenStart;
    else
      this._cursor = h.PenStart;
    this.updateCursor();
  }, T.prototype._getPartInfo = function (e) {
    var t = null;
    if (this._pathEditor)
      if (this._cached && this._cached.point == e) {
        if (t = this._cached.partInfo, !n.modifiers.shiftKey && this._cached.middlePoint) {
          var i = this._getPaintRect();
          this._cached.middlePoint = null, this._cached.segmentNo = null, this.invalidateArea(i);
        }
      } else {
        t = this._pathEditor.getPartInfoAt(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), null, d.pickDistance);
        var r = null, o = null;
        this._cached && null !== this._cached.segmentNo && n.modifiers.shiftKey && (!t || t.id.type == l.PartType.Segment && t.data.type == l.SegmentData.HitRes && t.data.hitRes.outline && t.data.hitRes.segment === this._cached.segmentNo) ? (o = this._cached.segmentNo, r = this._cached.middlePoint) : this._cached && this._cached.middlePoint && this.invalidateArea(this._getPaintRect()), this._cached = {
          point: e,
          partInfo: t,
          segmentNo: o,
          middlePoint: r
        };
      }
    return t;
  }, T.prototype._highlightMiddle = function (e) {
    if (this._pathEditor) {
      var t = this._getPartInfo(e);
      if (!this._cached.middlePoint && t && t.id.type == l.PartType.Segment && t.data.type == l.SegmentData.HitRes && t.data.hitRes.outline) {
        var i = t.editor.getElement().getSegmentMiddle(t.data.hitRes.segment);
        i && (this._cached.segmentNo = t.data.hitRes.segment, this._cached.middlePoint = i, this.invalidateArea(this._getPaintRect()));
      }
    }
  }, T.prototype._getPaintRect = function () {
    if (this._cached && this._cached.middlePoint) {
      var e = d.annotationHandles.path.center;
      return b.getAnnotationBBox(this._view.getWorldTransform(this._view.getScene().getActivePage()), this._cached.middlePoint, e.size, !0);
    }
    return null;
  }, T.prototype._sceneModified = function (e) {
    this._findSideConnectPoints();
  }, T.prototype._findSideConnectPoints = function () {
    var e = this._scene.getActivePage();
    this._sideConnectPoints = null, this._checkPathEditor();
    var t = this._pathRef ? this._pathRef : this._pathEditor && this._pathEditor instanceof l ? this._pathEditor.getPath() : null;
    e.accept(function (e) {
      if (e instanceof m && !e.hasFlag(E.Flag.FullLocked) && !e.getProperty("closed") && e != t) {
        var i = e.getAnchorPoints(), n = new u(i.getFirstChild().getProperty("x"), i.getFirstChild().getProperty("y")), r = e.getProperty("trf"), o = {
            node: e,
            pt: n = r ? r.mapPoint(n) : n,
            end: 1
          };
        this._sideConnectPoints ? this._sideConnectPoints.push(o) : this._sideConnectPoints = [o], i.getFirstChild() != i.getLastChild() && (n = new u(i.getLastChild().getProperty("x"), i.getLastChild().getProperty("y")), n = r ? r.mapPoint(n) : n, this._sideConnectPoints.push({
          node: e,
          pt: n,
          end: 2
        }));
      }
      return !0;
    }.bind(this), !1, !0);
  }, T.prototype._hitSideConnectPoints = function (e) {
    if (this._sideConnectPoints)
      for (var t = 0; t < this._sideConnectPoints.length; ++t) {
        var i = this._sideConnectPoints[t];
        if (w.isEqualEps(i.pt.getX(), e.getX()) && w.isEqualEps(i.pt.getY(), e.getY()))
          return i;
      }
    return null;
  }, T.prototype._connectPaths = function (e) {
    if (this._pathRef) {
      var t = this._pathRef.getProperty("trf"), i = e.node.getProperty("trf"), n = null;
      if (null != t || null != i) {
        n = i || null;
        var r = t ? t.inverted() : null;
        r && (n = n ? n.multiplied(r) : r);
      }
      var o = new m();
      o.getAnchorPoints().deserialize(e.node.getAnchorPoints().serialize(n)), 2 == e.end && o.reverseOrder(), this._pathEditor.requestInvalidation(), this._pathEditor.releasePathPreview(), this._startTransaction(T.Transaction.JoinPaths), this._pathRef && this._mode == T.Mode.Prepend && this._pathRef.reverseOrder(), e.node.getParent().removeChild(e.node), this._refPt = null;
      for (var a = o.getAnchorPoints().getFirstChild(); null != a; a = o.getAnchorPoints().getFirstChild())
        o.getAnchorPoints().removeChild(a), this._pathRef.getAnchorPoints().appendChild(a), this._refPt || (this._refPt = a);
      this._makePointMajor(this._refPt), this._pathEditor.setActiveExtendingMode(x.ExtendingMode.Off), this._finishTransaction(), this._mode = T.Mode.Edit, this._editPt = this._pathEditor.getPathPointPreview(this._refPt), this._findSideConnectPoints();
    }
  }, T.prototype.toString = function () {
    return "[Object GPathTool]";
  }, e.exports = T;
}
