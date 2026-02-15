/**
 * Module 753
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
  var n = i(64), r = i(150), o = i(657), a = i(99), s = i(2), l = i(0), h = i(24), A = i(52), c = i(275), p = i(36), u = i(77), d = i(5), g = i(164), f = i(66), m = i(332), y = i(167), _ = i(162), v = i(45), b = i(39), C = i(9), w = i(47), E = i(155);
  function B() {
    m.call(this);
  }
  l.inherit(B, m), B.prototype._pathsGraphRef = null, B.prototype._dpathRef = null, B.prototype._pathBaseRef = null, B.prototype._newPoint = null, B.prototype._editPt = null, B.prototype._refPt = null, B.prototype._mouseDownPartInfo = null, B.prototype._graphEditor = null, B.prototype._released = !0, B.prototype._dragStarted = !1, B.prototype._dragStartPt = null, B.prototype._firstAlt = !1, B.Transaction = {
    NoTransaction: 0,
    InsertPoint: 1,
    AppendPoint: 2,
    MovePoint: 3,
    DeletePoint: 4,
    ModifyPointProperties: 5,
    ModifyPathProperties: 6,
    InsertElement: 7
  }, B.prototype._transactionType = B.Transaction.NoTransaction, B.Mode = {
    Append: 0,
    Edit: 1
  }, B.prototype._mode = B.Mode.Append, B.prototype._mDownTime = 0, Object.defineProperty(B, "DBLCLICKTM", {
    get: function () {
      return h.pathDbClickTime || 300;
    }
  }), B.prototype._cursor = null, B.prototype._lastMouseEvent = null, B.prototype._deactivationAllowed = !0, B.prototype._cached = null, B.prototype._getRelatedItemClass = function () {
    return _;
  }, B.prototype.getCursor = function () {
    return this._cursor;
  }, B.prototype.catchesContextMenu = function (e) {
    return !e;
  }, B.prototype.activate = function (e, t) {
    m.prototype.activate.call(this, e, t), t || (e.addEventListener(u.Down, this._mouseDown, this), e.addEventListener(u.Release, this._mouseRelease, this), e.addEventListener(y.Down, this._keyDown, this), e.addEventListener(u.Drag, this._mouseDrag, this), e.addEventListener(u.Move, this._mouseMove, this), n.addEventListener(r, this._modifiersChanged, this)), this._cursor = A.PenStart, this._transactionType = B.Transaction.NoTransaction, this._editor.setPathResize(!1, !0);
  }, B.prototype.deactivate = function (e, t) {
    this._checkMode(), this._graphEditor && (this._newPoint || this._dpathRef) && (this._graphEditor.requestInvalidation(), this._graphEditor.releasePreview(), this._graphEditor.requestInvalidation()), this._finishTransaction(), this._allowDeactivation(), this._reset(), this._editor && (this._editor.getGuides().invalidate(), t || this._editor.setPathResize(!0)), m.prototype.deactivate.call(this, e, t), e.removeEventListener(u.Down, this._mouseDown), e.removeEventListener(u.Release, this._mouseRelease), e.removeEventListener(y.Down, this._keyDown), e.removeEventListener(u.Drag, this._mouseDrag), e.removeEventListener(u.Move, this._mouseMove), n.removeEventListener(r, this._modifiersChanged);
  }, B.prototype.isDeactivatable = function () {
    return this._deactivationAllowed;
  }, B.prototype._allowDeactivation = function () {
    this._deactivationAllowed = !0;
  }, B.prototype._blockDeactivation = function () {
    this._deactivationAllowed = !1;
  }, B.prototype._checkPathsGraphEditor = function () {
    var e = this._editor.getSelection(), t = null;
    e && 1 == e.length && e[0] instanceof _ && (t = e[0]), t && (this._graphEditor = p.openEditor(t), this._graphEditor.setFlag(b.Flag.Detail), this._graphEditor.removeFlag(f.Flag.ResizeAll), this._pathBaseRef || (this._pathBaseRef = this._graphEditor.getPathBaseInEdit()));
  }, B.prototype._checkMode = function () {
    this._checkPathsGraphEditor(), this._graphEditor ? this._graphEditor.getGraph().getWorkspace() ? (this._graphRef = this._graphEditor.getGraph(), this._graphEditor.getActiveExtendingMode() ? this._mode = B.Mode.Append : this._mode = B.Mode.Edit) : (this._mode = B.Mode.Append, this._graphRef = null, this._graphEditor = null) : (this._mode = B.Mode.Append, this._graphRef = null);
  }, B.prototype._renewPreviewLink = function () {
    if (this._graphEditor) {
      var e = this._graphEditor.getPathBasePreview();
      if (this._editPt) {
        var t = null;
        this._mode == B.Mode.Append && e && (t = e.getAnchorPoints().getLastChild()), this._editPt != t && (this._newPoint = !1, this._editPt = null);
      }
      this._dpathRef = e;
    } else
      this._editPt = null, this._newPoint = !1, this._dpathRef = null;
  }, B.prototype._addPoint = function (e, t, i, n) {
    if (this._graphEditor && !i) {
      var r = this._graphRef.getTransform();
      if (r) {
        var a = new d(e.getProperty("x"), e.getProperty("y"));
        a = r.inverted().mapPoint(a), e.setProperties([
          "x",
          "y"
        ], [
          a.getX(),
          a.getY()
        ]);
      }
    }
    if (t)
      if (this._graphEditor) {
        if (this._graphEditor.requestInvalidation(), this._mode == B.Mode.Append) {
          if (this._dpathRef)
            n || this._dpathRef.getAnchorPoints().getLastChild().removeFlag(s.Flag.Selected), this._dpathRef.getAnchorPoints().appendChild(e), n || e.setFlag(s.Flag.Selected), this._newPoint = !0;
          else {
            var l = new v();
            l.setProperty("fpt", null), l.getAnchorPoints().appendChild(e), l.setFlag(s.Flag.Selected), this._pathBaseRef = l;
            var h = new o();
            h.setProperties([
              "x",
              "y"
            ], [
              e.getProperty("x"),
              e.getProperty("y")
            ]), this._transactionType == B.Transaction.NoTransaction && this._startTransaction(B.Transaction.InsertPoint), this._graphEditor.getElement().addAnchor(h), this._finishTransaction(), this._graphEditor.setOutgoingPathBase(h, this._pathBaseRef), this._graphEditor.selectOnePoint(e), this._checkMode(), this._renewPreviewLink();
          }
          this._dpathRef && (this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.End)), this._graphEditor.requestInvalidation();
        }
      } else {
        if (this._createPathsGraph(e), !this._graphEditor || !this._pathBaseRef)
          return;
        this._graphEditor.selectOnePoint(e), this._checkMode(), this._renewPreviewLink(), this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._graphEditor.requestInvalidation(), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.End);
      }
    else
      this._graphEditor && (this._graphEditor.requestInvalidation(), this._mode == B.Mode.Append && (this._dpathRef && (this._dpathRef.getAnchorPoints().removeChild(e), this._dpathRef = null, e.hasFlag(s.Flag.Selected) && e.removeFlag(s.Flag.Selected)), this._graphEditor.releasePreview(), this._graphEditor.requestInvalidation(), this._pathBaseRef.getAnchorPoints().appendChild(e), this._graphEditor.selectOnePoint(e), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.End), this._graphEditor.requestInvalidation()));
  }, B.prototype._commitChanges = function () {
    this._graphEditor.requestInvalidation(), this._graphEditor.releasePreview(), this._graphEditor.requestInvalidation(), this._reset();
  }, B.prototype._createPathsGraph = function (e) {
    var t = new v();
    t.setProperty("fpt", null), t.getAnchorPoints().appendChild(e), t.setFlag(s.Flag.Selected), this._pathBaseRef = t, this._startTransaction(B.Transaction.InsertElement);
    var i = new _(), n = new o();
    n.setProperties([
      "x",
      "y"
    ], [
      e.getProperty("x"),
      e.getProperty("y")
    ]), i.addAnchor(n), this._editor.updateByMousePosition(new d(e.getProperty("x"), e.getProperty("y")), null, !1, this._view.getViewConfiguration()), this._editor.insertElements([i], !1, !0, !0), i.setFlag(s.Flag.Selected), e.setFlag(s.Flag.Selected), this._finishTransaction(), this._checkPathsGraphEditor(), this._graphEditor && this._graphEditor.setOutgoingPathBase(n, this._pathBaseRef);
  }, B.prototype._mouseDown = function (e) {
    var t = new Date().getTime();
    if (t - this._mDownTime < B.DBLCLICKTM)
      "edit" == h.selectDoubleClickBehavior ? this._manager.notifyJobDone(this) : this._mouseDblClick(e);
    else {
      var i = null;
      if (this._lastMouseEvent = e, this._dragStarted = !1, this._dragStartPt = null, this._mouseMove(e), this._mDownTime = t, this._released = !1, n.modifiers.optionKey && (this._firstAlt = !0), this._blockDeactivation(), this._checkMode(), this._graphEditor && this._graphEditor.blockRemoval(), this._mode == B.Mode.Edit && this._mouseDownOnEdit(e), this._mode == B.Mode.Append)
        if (this._renewPreviewLink(), this._newPoint && this._graphEditor) {
          this._firstAlt && this._editPt.setProperties([
            "ah",
            "tp"
          ], [
            !0,
            v.AnchorPoint.Type.Symmetric
          ]);
          var r = this._getPartInfo(e.client);
          if (r)
            if (this._mouseDownPartInfo = r, this._mouseDownPartInfo.id.type == c.PartType.Anchor) {
              var o = this._mouseDownPartInfo.id.point.getPoint(), l = this._graphRef.getTransform();
              l && (o = l.mapPoint(o)), this._graphEditor.movePoint(this._editPt, this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(o), this._view.getWorldTransform(this._view.getScene().getActivePage()), null);
            } else
              this._updatePoint(e.client);
          else
            this._updatePoint(e.client);
          var A = this._editPt.getPrevious();
          A && (A.removeFlag(s.Flag.Selected), this._editPt.setFlag(s.Flag.Selected)), this._graphEditor.requestInvalidation();
        } else if (this._mouseDownPartInfo)
          this._mouseDownPartInfo = null, this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._mode = B.Mode.Edit;
        else {
          o = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
          this._editor.getGuides().beginMap(this._editor.getMappingScopes()), o = this._editor.getGuides().mapPoint(o, a.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), i = this._constructNewPoint(e, o), this._addPoint(i, !0, !1);
        }
    }
  }, B.prototype._constructNewPoint = function (e, t) {
    var i = new v.AnchorPoint();
    return i.setProperties([
      "x",
      "y",
      "ah"
    ], [
      t.getX(),
      t.getY(),
      !0
    ]), n.modifiers.optionKey && i.setProperties([
      "ah",
      "tp"
    ], [
      !0,
      v.AnchorPoint.Type.Symmetric
    ]), i;
  }, B.prototype._graphHitAction = function () {
  }, B.prototype._mouseMove = function (e) {
    if (!(new Date().getTime() - this._mDownTime < B.DBLCLICKTM) && this._released) {
      var t;
      if (this._lastMouseEvent = e, this._checkMode(), this._mode == B.Mode.Append) {
        this._renewPreviewLink();
        var i = e.client;
        if (!this._newPoint && this._graphEditor) {
          i = this._constrainIfNeeded(e.client, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._graphRef);
          var n = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(i);
          this._editor.getGuides().beginMap(this._editor.getMappingScopes()), n = this._editor.getGuides().mapPoint(n, a.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), i = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n), t = this._constructNewPoint(e, n), this._addPoint(t, !0, !1, !0), this._setCursorForPosition(null, i);
        } else if (this._editPt)
          this._graphEditor.requestInvalidation(), i = this._updatePoint(e.client), this._graphEditor.requestInvalidation(), this._setCursorForPosition(null, e.client);
        else {
          n = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(i);
          this._editor.getGuides().beginMap(this._editor.getMappingScopes()), n = this._editor.getGuides().mapPoint(n, a.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap(), i = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n), this._setCursorForPosition(null, i);
        }
      } else {
        n = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(e.client);
        this._editor.getGuides().beginMap(this._editor.getMappingScopes()), n = this._editor.getGuides().mapPoint(n, a.DetailMap.Mode.DetailOnFilterOn), this._editor.getGuides().finishMap();
        i = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(n);
        this._setCursorForPosition(null, i);
      }
    }
  }, B.prototype._updatePoint = function (e) {
    var t = null;
    return this._pathBaseRef && this._editPt && (t = this._mode != B.Mode.Edit ? this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathBaseRef) : this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathBaseRef, this._dpathRef.getAnchorPoints().getPreviousPoint(this._editPt)), this._editor.getGuides().beginMap(this._editor.getMappingScopes()), t = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapPoint(this._editor.getGuides().mapPoint(this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(t), a.DetailMap.Mode.DetailOnFilterOn)), this._editor.getGuides().finishMap(), this._graphEditor.movePoint(this._editPt, t, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._dragStartPt)), t;
  }, B.prototype._updateHandles = function (e) {
    var t, i, r = this._editPt.getProperty("tp"), o = this._editPt.getProperty("x"), a = this._editPt.getProperty("y");
    if (this._graphEditor.hitAnchorPoint(this._editPt, e, this._view.getWorldTransform(this._view.getScene().getActivePage()), 0))
      r == v.AnchorPoint.Type.Symmetric ? this._editPt.setProperties([
        "tp",
        "hlx",
        "hly",
        "hrx",
        "hry"
      ], [
        v.AnchorPoint.Type.Asymmetric,
        null,
        null,
        null,
        null
      ]) : this._editPt.setProperties([
        "hrx",
        "hry"
      ], [
        null,
        null
      ]);
    else {
      var s = this._graphEditor.getTransformFromNative(this._view.getWorldTransform(this._view.getScene().getActivePage())).inverted().mapPoint(e);
      if (this._newPoint || !n.modifiers.optionKey || !this._firstAlt || r == v.AnchorPoint.Type.Connector || null == this._editPt.getPrevious() && null == this._editPt.getNext()) {
        this._editPt.setProperty("ah", !1);
        var l = s.getX(), h = s.getY();
        if (n.modifiers.optionKey)
          this._editPt.setProperties([
            "tp",
            "hrx",
            "hry"
          ], [
            v.AnchorPoint.Type.Asymmetric,
            l,
            h
          ]);
        else {
          var A = v.AnchorPoint.Type.Symmetric, c = null == this._editPt.getPrevious() && null != this._editPt.getNext() || null != this._editPt.getPrevious() && null == this._editPt.getNext();
          if (this._mode != B.Mode.Edit && !this._newPoint && c)
            this._editPt.setProperties([
              "tp",
              "hrx",
              "hry"
            ], [
              A,
              l,
              h
            ]);
          else {
            var p = o + o - l, u = a + a - h;
            this._editPt.setProperties([
              "tp",
              "hrx",
              "hry",
              "hlx",
              "hly"
            ], [
              A,
              l,
              h,
              p,
              u
            ]);
          }
        }
      } else {
        var d = s.getX() - o, g = s.getY() - a;
        this._editPt.setProperty("ah", !1);
        var f = this._dragStartPt.getProperty("hrx");
        t = null != f ? f + d : s.getX();
        var m = this._dragStartPt.getProperty("hry");
        i = null != m ? m + g : s.getY(), this._editPt.setProperty("ah", !1), this._editPt.setProperties([
          "tp",
          "hrx",
          "hry"
        ], [
          v.AnchorPoint.Type.Asymmetric,
          t,
          i
        ]);
      }
    }
    this._graphEditor.requestInvalidation();
  }, B.prototype._updatePointProperties = function (e) {
    var t;
    return this._graphEditor.requestInvalidation(), t = this._constrainIfNeeded(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._pathBaseRef, this._dragStartPt), this._updateHandles(t), t;
  }, B.prototype._mouseDrag = function (e) {
    !this._released && this._editPt && (this._lastMouseEvent = e, this._setCursorForPosition(A.PenDrag), this._dragStartPt || (this._dragStartPt = this._refPt ? this._refPt : this._editPt, this._editPt.setProperties([
      "ah",
      "tp"
    ], [
      !1,
      v.AnchorPoint.Type.Symmetric
    ]), this._editPt.getPrevious() && this._editPt.getPrevious().setProperty("ah", !1)), this._dragStarted = !0, this._updatePointProperties(e.client));
  }, B.prototype._mouseDblClick = function (e) {
    this._lastMouseEvent = null, this._checkMode(), this._graphEditor && (this._graphEditor.updatePartSelection(!1), this._commitChanges()), this._mode = B.Mode.Edit, this._setCursorForPosition(null, e.client);
  }, B.prototype._mouseRelease = function (e) {
    if (this._graphEditor && this._graphEditor.allowRemoval(), this._editor.getGuides().invalidate(), !this._released)
      try {
        if (this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), !1, this._view.getViewConfiguration()), this._released = !0, this._graphEditor && this._mode == B.Mode.Edit)
          this._dragStarted || !this._refPt || this._editPt ? this._dragStarted ? (this._updatePointProperties(e.client), this._transactionType, B.Transaction.NoTransaction, this._graphEditor.applyTransform(this._pathBaseRef), this._commitChanges(), this._setCursorForPosition(null, e.client)) : (this._commitChanges(), this._setCursorForPosition(null, e.client)) : this._mouseNoDragReleaseOnEdit(e.client);
        else if (this._dpathRef) {
          e.client;
          if (this._dragStarted && this._updatePointProperties(e.client), this._newPoint) {
            var t = this._dragStarted && this._pathBaseRef && this._pathBaseRef.getAnchorPoints().getLastChild() ? this._pathBaseRef.getAnchorPoints().getLastChild() : null;
            this._addPoint(this._editPt, !1, !0), t && t.setProperty("ah", !1), this._graphEditor.requestInvalidation();
          }
          var i = null;
          this._mouseDownPartInfo && (this._graphEditor = this._mouseDownPartInfo.editor, this._graphRef = this._graphEditor.getGraph(), this._mouseDownPartInfo.id.type == c.PartType.Anchor ? i = this._mouseDownPartInfo.id.point : (this._startTransaction(B.Transaction.InsertPoint), i = this._graphEditor.splitEdge(this._mouseDownPartInfo, !0), this._finishTransaction())), this._mouseDownPartInfo = null, i ? (this._graphEditor.updatePartSelection(!1), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.Off), this._startTransaction(B.Transaction.InsertElement), this._graphEditor.insertOutgoingPathBase(i), this._finishTransaction(), this._commitChanges(), this._setCursorForPosition(null, e.client)) : (this._commitChanges(), this._setCursorForPosition(A.Pen));
        }
        this._refPt = null;
      } finally {
        this._finishTransaction();
      }
    this._released = !0, this._dragStarted = !1, this._dragStartPt = null, this._lastMouseEvent = null, this._firstAlt = !1, this._allowDeactivation();
  }, B.prototype._reset = function () {
    this._graphEditor && this._graphEditor.removeFlag(b.Flag.Detail), this._dpathRef = null, this._graphRef = null, this._graphEditor = null, this._newPoint = !1, this._editPt = null, this._dragStartPt = null, this._refPt = null, this._mouseDownPartInfo = null;
  }, B.prototype._keyDown = function (e) {
    m.prototype._keyDown.call(this, e), e.key === g.Constant.ESC ? (this._lastMouseEvent = null, this._escAction()) : e.key === g.Constant.ENTER && (this._lastMouseEvent = null, this._enterAction());
  }, B.prototype._modifiersChanged = function (e) {
    e.changed.shiftKey && this._lastMouseEvent ? this._released ? this._mouseMove(this._lastMouseEvent) : this._mouseDrag(this._lastMouseEvent) : e.changed.optionKey && (this._firstAlt = !1, this._released ? this._newPoint && (this._editPt.setProperties(["tp"], [n.modifiers.optionKey ? v.AnchorPoint.Type.Symmetric : v.AnchorPoint.Type.Asymmetric]), this._graphEditor.requestInvalidation()) : (n.modifiers.optionKey && (this._firstAlt = !this._dragStarted), this._mouseDrag(this._lastMouseEvent)));
  }, B.prototype._escAction = function () {
    this._released && (this._checkMode(), this._graphEditor && (this._graphEditor.updatePartSelection(!1), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.Off), this._startTransaction(B.Transaction.InsertElement), this._graphEditor.insertOutgoingPathBase(), this._finishTransaction(), this._commitChanges()), this._setCursorForPosition(A.PenStart));
  }, B.prototype._enterAction = function () {
    this._released && (this._checkMode(), this._graphEditor && (this._graphEditor.setActiveExtendingMode(E.ExtendingMode.Off), this._commitChanges()), this._manager.activateSubSelect());
  }, B.prototype._constrainIfNeeded = function (e, t, i, r) {
    var o = e;
    if (n.modifiers.shiftKey) {
      var a = null;
      r ? a = r : i && (a = this._mode == B.Mode.Append ? i.getAnchorPoints().getLastChild() : i.getAnchorPoints().getFirstChild()), a && (o = this._graphEditor.constrainPosition(e, t, a));
    }
    return o;
  }, B.prototype._makePointMajor = function (e) {
    this._graphEditor.selectOnePoint(e), this._dpathRef = null, this._graphEditor.releasePreview(), this._graphEditor.requestInvalidation(), this._dpathRef = this._graphEditor.getPathBasePreview(e);
  }, B.prototype._startTransaction = function (e) {
    this._transactionType == B.Transaction.NoTransaction && this._editor.beginTransaction(), this._transactionType = e;
  }, B.prototype._finishTransaction = function () {
    try {
      switch (this._transactionType) {
      case B.Transaction.AppendPoint:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.append-point")));
        break;
      case B.Transaction.InsertElement:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.insert-elements")));
        break;
      case B.Transaction.InsertPoint:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.insert-point")));
        break;
      case B.Transaction.MovePoint:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.move-point")));
        break;
      case B.Transaction.DeletePoint:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.delete-point")));
        break;
      case B.Transaction.ModifyPointProperties:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.modify-point-properties")));
        break;
      case B.Transaction.ModifyPathProperties:
        this._editor.commitTransaction(C.get(new w("GPathsGraphTool", "action.modify-path-properties")));
      }
    } finally {
      this._transactionType = B.Transaction.NoTransaction;
    }
  }, B.prototype._isSegmentMiddle = function (e) {
    return e.data.type == c.SegmentData.HitRes && e.data.hitRes.outline && 0.5 === e.data.hitRes.slope;
  }, B.prototype._mouseDownOnEdit = function (e, t) {
    var i = e.client;
    if (this._graphEditor.getElement().getWorkspace()) {
      this._graphEditor.requestInvalidation(), this._graphEditor.releasePreview(), this._graphEditor.requestInvalidation();
      var n = null, r = this._getPartInfo(i);
      if (r && (this._graphEditor = r.editor, this._graphRef = this._graphEditor.getGraph(), r.id.type == c.PartType.Anchor ? n = r.id.point : (this._transactionType == B.Transaction.NoTransaction && this._startTransaction(B.Transaction.InsertPoint), n = this._graphEditor.splitEdge(r), this._finishTransaction())), n) {
        var o = n.getPoint(), a = this._constructNewPoint(e, o);
        this._pathBaseRef = new v(), this._pathBaseRef.setProperty("fpt", null), this._pathBaseRef.getAnchorPoints().appendChild(a), this._pathBaseRef.setFlag(s.Flag.Selected), this._graphEditor.setOutgoingPathBase(n, this._pathBaseRef), this._graphEditor.setActiveExtendingMode(E.ExtendingMode.End), this._graphEditor.selectOnePoint(a), this._renewPreviewLink(), this._mode = B.Mode.Append, this._editPt = this._dpathRef.getAnchorPoints().getLastChild(), this._mouseDownPartInfo = r;
      } else
        this._setCursorForPosition(A.PenStart), this._graphEditor.updatePartSelection(!1), this._pathBaseRef = null, this._renewPreviewLink(), this._mode = B.Mode.Append;
    }
  }, B.prototype._mouseNoDragReleaseOnEdit = function (e) {
    this._refPt && (null == this._refPt.getProperty("hlx") && null == this._refPt.getProperty("hly") && null == this._refPt.getProperty("hrx") && null == this._refPt.getProperty("hry") || (this._transactionType == B.Transaction.NoTransaction && this._startTransaction(B.Transaction.ModifyPointProperties), this._refPt.setProperties([
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
    ]), this._finishTransaction(), this._makePointMajor(this._refPt), this._setCursorForPosition(A.PenMinus)), this._refPt = null, this._commitChanges());
  }, B.prototype._setCursorForPosition = function (e, t) {
    if (null !== e)
      this._cursor = e;
    else if (t)
      if (this._graphEditor || this._checkPathsGraphEditor(), this._graphEditor) {
        var i = this._getPartInfo(t);
        this._mode == B.Mode.Edit ? i ? i.id.type == c.PartType.Anchor ? this._cursor = A.PenEnd : i.id.type == c.PartType.Point ? this._cursor = A.PenModify : this._cursor = A.PenPlus : this._cursor = A.PenStart : i ? i.id.type == c.PartType.Anchor ? this._cursor = A.PenEnd : i.id.type == c.PartType.Point ? this._cursor = A.PenModify : this._cursor = A.PenPlus : this._cursor = A.Pen;
      } else
        this._cursor = A.PenStart;
    this.updateCursor();
  }, B.prototype._getPartInfo = function (e) {
    var t = null;
    return this._graphEditor && (this._cached && this._cached.point == e ? t = this._cached.partInfo : ((t = this._graphEditor.getPartInfoAt(e, this._view.getWorldTransform(this._view.getScene().getActivePage()), null, h.pickDistance)) && t.id.type == c.PartType.Facet && (t = null), this._cached = {
      point: e,
      partInfo: t
    })), t;
  }, B.prototype.toString = function () {
    return "[Object GPathsGraphTool]";
  }, e.exports = B;
}
