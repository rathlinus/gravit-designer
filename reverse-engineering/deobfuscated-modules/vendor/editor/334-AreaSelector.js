/**
 * Module 334
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
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(11) /* GUtil */, a = require(6) /* GRect */, s = require(77) /* Wheel */, l = require(5) /* GPoint */, h = require(104) /* GItem */, A = require(83) /* GPage */, c = require(167) /* module */, p = require(159) /* GLayer */, u = require(39) /* PartInfo */, d = require(216) /* GSymbol */, g = require(64) /* GPlatform */, f = require(150) /* GModifiersChangedEvent */, m = require(0) /* GObject */, y = (require(17) /* GRGBColor */, require(72) /* GEvent */), _ = require(52) /* module */, v = require(289) /* GSlice */, b = require(545) /* GSceneEditor */, C = require(24) /* GEditorOptions */, w = require(60) /* GPath */, E = require(113) /* GCompoundPath */, B = require(162) /* GPathsGraph */, x = require(385) /* GStyleEditor */, P = require(276) /* GGradientStyleEditor */, S = require(164) /* GKey */, T = require(75) /* GEventTarget */, I = require(546) /* GTransformBox */, F = require(56) /* GShape */, R = require(211) /* GTool */, D = require(54) /* GVertexContainer */, k = require(22) /* GElement */, G = require(122) /* GGroup */, Q = require(82) /* SavePoint */, M = require(99) /* module */, N = require(127) /* GPathEditor */, U = require(235) /* GCompoundPathEditor */, V = require(233) /* GCompoundShape */, O = require(36) /* PartsPropertyVals */, L = require(154) /* LabelHolder */, Y = require(275) /* GPathsGraphEditor */, X = require(210) /* InvalidationRequestEvent */, H = require(66) /* EdTransformOptions */, W = require(329) /* ImageBoxEditor */, Z = require(48) /* GVertex */, z = require(59) /* GVertexInfo */, j = require(187) /* PolyLine */, J = require(95) /* GImage */, q = require(70) /* GText */, K = require(45) /* GPathBase */, $ = (require(73) /* GRectangle */, require(87) /* GVertexSource */), ee = require(7) /* GTransform */, te = require(534) /* GImageGrid */, ie = require(331) /* GPageEditor */, ne = require(141) /* module */, re = require(63) /* GVertexTransformer */, oe = require(12) /* GMath */, ae = (require(132) /* GLength */, require(128) /* GShapeEditor */, require(9) /* GLocale */), se = require(47) /* GLocaleKey */, le = require(140) /* module */, he = require(69) /* GBlock */, Ae = require(84) /* GAnnotation */, ce = require(333) /* module */;
  function pe(e) {
    R.call(this), ce.call(this), this._selectFilterFunc = this._selectFilter.bind(this), this._selectAcceptorFunc = this._selectAcceptor.bind(this), this._areaSelector = e || new pe._AreaSelector();
  }
  m.inheritAndMix(pe, R, [
    T,
    ce
  ]), pe.EditMode = {
    Select: 0,
    Transform: 1,
    Edit: 2
  }, pe._DblClick = {
    Disabled: null,
    EditModeSwitch: "edit",
    SubSelectSwitch: "subselect"
  }, pe._DistanceHelperBehaviour = {
    Default: null,
    Click: "click"
  }, pe._Mode = {
    Select: 1,
    Move: 2,
    Moving: 3,
    Transforming: 4,
    Editing: 5,
    MoveGuideLine: 6
  }, pe.DBLCLICKTM = 250, pe.InteractionMode = {
    Default: 0,
    Mixed: 1
  }, pe.Event = function (e, t) {
    this.type = e, this.args = t;
  }, m.inherit(pe.Event, y), pe.Event.Type = { EditModeChanged: 0 }, pe.Event.type = null, pe.Event.args = null, pe.Event.prototype.toString = function () {
    return "[Event GSelectTool.Event]";
  }, pe._AreaSelector = function () {
    this._vertexContainer = new D();
  }, pe._AreaSelector.prototype._vertexContainer = null, pe._AreaSelector.prototype._pixelTransformer = null, pe._AreaSelector.prototype._selectionColor = null, pe._AreaSelector.prototype.hasSelectArea = function () {
    return !!this._areaLastPos;
  }, pe._AreaSelector.prototype.clearArea = function () {
    this._vertexContainer.clearVertices(), this._pixelTransformer = null, this._areaStartedPos = null, this._areaLastPos = null, this._trf = null, this._selectionColor = null;
  }, pe._AreaSelector.prototype.hasAreaStarted = function () {
    return !!this._areaStartedPos;
  }, pe._AreaSelector.prototype.startArea = function (e) {
    this.clearArea(), this._areaStartedPos = e, this._areaLastPos = e, this._vertexContainer.addVertex(Z.Command.Move, e.getX(), e.getY());
  }, pe._AreaSelector.prototype.translate = function (e) {
    this._areaLastPos && (this._trf = new ee().translated(e.getX(), e.getY()), this._pixelTransformer = new re(this._vertexContainer, this._trf));
  }, pe._AreaSelector.prototype.moveToPoint = function (e) {
    if (this._areaLastPos) {
      var module = e.subtract(this._areaLastPos);
      this._trf = new ee().translated(module.getX(), module.getY()), this._pixelTransformer = new re(this._vertexContainer, this._trf);
    }
  }, pe._AreaSelector.prototype.expandToPoint = function (e) {
    this._vertexContainer.clearVertices(), this._areaStartedPos || (this._areaStartedPos = e), this._trf && (this._areaStartedPos = this._trf.mapPoint(this._areaStartedPos), this._trf = null, this._pixelTransformer = null), this._areaLastPos = e;
    var t = this._areaStartedPos.getX(), i = this._areaStartedPos.getY(), n = this._areaLastPos.getX(), r = this._areaLastPos.getY();
    this._vertexContainer.addVertex(Z.Command.Move, t, i), oe.isEqualEps(t, n) && oe.isEqualEps(i, r) || (this._vertexContainer.addVertex(Z.Command.Line, n, i), this._vertexContainer.addVertex(Z.Command.Line, n, r), this._vertexContainer.addVertex(Z.Command.Line, t, r), this._vertexContainer.addVertex(Z.Command.Close, 0, 0));
  }, pe._AreaSelector.prototype.getAreaPaintRect = function (e) {
    var t = null;
    if (this._pixelTransformer || this._areaLastPos) {
      var require = new ne(this._pixelTransformer ? this._pixelTransformer : this._vertexContainer);
      t = z.calculateBounds(require, false);
    }
    return e || (t = t ? t.expanded(C.outlineWidth, C.outlineWidth, C.outlineWidth, C.outlineWidth) : null), t;
  }, pe._AreaSelector.prototype.getCollisionArea = function (e) {
    var t = null;
    return (this._pixelTransformer || this._areaLastPos) && (t = new re(this._pixelTransformer ? this._pixelTransformer : this._vertexContainer, e)), t;
  }, pe._AreaSelector.prototype.paint = function (e) {
    var t = this.getAreaPaintRect(true);
    if (t && (t.getWidth() || t.getHeight())) {
      var require = t.getHeight();
      require = require > 0 ? Math.ceil(require) - 1 : 0;
      var n = t.getWidth();
      n = n > 0 ? Math.ceil(n) - 1 : 0, t = new a(Math.floor(t.getX()) + 0.5, Math.floor(t.getY()) + 0.5, n, require), this._selectionColor || (this._selectionColor = u.getOutlineColor(e, this._areaStartedPos.getX(), this._areaStartedPos.getY(), e.selectionOutlineColor)), e.canvas.fillRect(t.getX(), t.getY(), t.getWidth(), t.getHeight(), this._selectionColor, 0.1), e.canvas.strokeRect(t.getX(), t.getY(), t.getWidth(), t.getHeight(), C.outlineWidth, this._selectionColor);
    }
  }, pe.prototype._interactionMode = pe.InteractionMode.Default, pe.prototype._selectFilterFunc = null, pe.prototype._handlingDragEnd = null, pe.prototype._selectAcceptorFunc = null, pe.prototype._areaSelector = null, pe.prototype._releaseOnlySelection = false, pe.prototype._mode = null, pe.prototype._clickedElement = null, pe.prototype._clickGoDown = true, pe.prototype._selectionDone = false, pe.prototype._elementUnderMouse = null, pe.prototype._editorUnderMouseInfo = null, pe.prototype._editorMovePartInfo = null, pe.prototype._guideLineUnderMouse = null, pe.prototype._shiftConstraining = false, pe.prototype._keyDelta = null, pe.prototype._moveStart = null, pe.prototype._moveStartTransformed = null, pe.prototype._moveCurrent = null, pe.prototype._dragHandling = false, pe.prototype._visuals = null, pe.prototype._visualsArea = null, pe.prototype._editMode = pe.EditMode.Select, pe.prototype._itemsToAddToImageMask = null, pe.prototype._itemsToAddToPage = null, pe.prototype._pageCandidates = null, pe.prototype._allowDistanceHelper = false, pe.prototype._elementMeasurementsToggle = false, pe.prototype._mDownTime1 = null, pe.prototype._mDownTime2 = null, pe.prototype._lastMouseEvent = null, pe.prototype._clickToDragTimeout = null, pe.prototype._styleEdManager = null, pe.prototype._isBackgroundSelectEnabled = true, pe.prototype._selectIgnoreBackgroundElements = null, pe.prototype._backgroundSelectShouldBeEnabled = false, pe.prototype.supportsElementClick = function () {
    return true;
  }, pe.prototype.clearClickedElement = function () {
    this._clickedElement = null;
  }, pe.prototype.setInteractionMode = function (e) {
    this._interactionMode = e;
  }, pe.prototype.getEditMode = function () {
    return this._editMode;
  }, pe.prototype.setEditMode = function (e) {
    if (this._editMode !== e) {
      var module = this._editMode;
      switch (this._editMode) {
      case pe.EditMode.Edit:
        this._editor.setSelectionDetail(false), this._editor.setPathResize(this._hasPathResize()), this._editor.setSelectionEdit(false);
        break;
      case pe.EditMode.Transform:
        this._closeTransformBox(), undefined !== C.scaleBorderWidth ? this._scene.setBorderScale(C.scaleBorderWidth) : this._scene.setBorderScale(null), undefined !== C.scaleCorners ? this._scene.setCornersScale(C.scaleCorners) : this._scene.setCornersScale(null), this._editor.setFullContentTransform(false);
      }
      switch (this._editMode = e, this._editMode) {
      case pe.EditMode.Edit:
        this._editor.setSelectionDetail(true), this._editor.setPathResize(false), this._editor.setSelectionEdit(true);
        break;
      case pe.EditMode.Transform:
        this._openTransformBox(), this._editor.setFullContentTransform(true);
      }
      this.hasEventListeners(pe.Event) && this.trigger(new pe.Event(pe.Event.Type.EditModeChanged, {
        mode: this._editMode,
        previousMode: module
      }));
    }
  }, pe.prototype.getCursor = function () {
    if (g.modifiers.optionKey && this._mode == pe._Mode.Moving && (!this._editorMovePartInfo || !this._editorMovePartInfo.isolated))
      return _.SelectPlus;
    if (this._editorUnderMouseInfo) {
      var exports = this._editorUnderMouseInfo.editor.getCursor(this._editorUnderMouseInfo.id, this._editorUnderMouseInfo.data);
      return exports || (exports = _.SelectDot), exports;
    }
    return this._guideLineUnderMouse ? this._guideLineUnderMouse.isVertical ? _.SelectResizeHoriz : _.SelectResizeVert : this._elementUnderMouse ? _.SelectDot : _.Select;
  }, pe.prototype.activate = function (e, t) {
    R.prototype.activate.call(this, e, t), this._mDownTime1 = null, this._mDownTime2 = null, t || (e.addEventListener(s.DragStart, this._mouseDragStart, this), e.addEventListener(s.Drag, this._mouseDrag, this), e.addEventListener(s.DragEnd, this._mouseDragEnd, this), e.addEventListener(s.Down, this._mouseDown, this), e.addEventListener(s.Release, this._mouseRelease, this), e.addEventListener(s.Move, this._mouseMove, this), e.addEventListener(s.DblClick, this._mouseDblClick, this), e.addEventListener(c.Down, this._keyDown, this), e.addEventListener(c.Release, this._keyRelease, this), g.addEventListener(f, this._modifiersChanged, this), this._editor.addEventListener(Q.SelectionChangedEvent, this._selectionChanged, this)), this._editor.setPathResize(this._hasPathResize(), true), this._shiftConstraining = false, this._view.setRightDrag(true), this._releaseOnlySelection = false, this._lastMouseEvent = null;
  }, pe.prototype.deactivate = function (e, t) {
    this._elementUnderMouse && this._elementUnderMouse.removeFlag(n.Flag.Highlighted), this._visualsArea && (this.invalidateArea(this._visualsArea), this._visualsArea = null), this._lastMouseEvent = null, this._allowDistanceHelper && this._editor && this._editor.getDistanceHelper().isActivated() && this._editor.getDistanceHelper().deactivateMeasurement(), !t && this._editor && this._editor.setPathResize(true), this._editor && this._editor.removeEventListener(Q.SelectionChangedEvent, this._selectionChanged, this), this.updateInlineHint(null), e.removeEventListener(s.DragStart, this._mouseDragStart), e.removeEventListener(s.Drag, this._mouseDrag), e.removeEventListener(s.DragEnd, this._mouseDragEnd), e.removeEventListener(s.Down, this._mouseDown), e.removeEventListener(s.Release, this._mouseRelease), e.removeEventListener(s.Move, this._mouseMove), e.removeEventListener(s.DblClick, this._mouseDblClick), e.removeEventListener(c.Down, this._keyDown), e.removeEventListener(c.Release, this._keyRelease), g.removeEventListener(f, this._modifiersChanged), this._view && this._view.setRightDrag(false), R.prototype.deactivate.call(this, e, t);
  }, pe.prototype.isDeactivatable = function () {
    if (this._editor) {
      var exports = this._editor.getCurrentInlineEditorNode();
      return !this._mode && !exports || this._mode === pe._Mode.Transforming;
    }
  }, pe.prototype.hasSelectedArea = function () {
    return this._mode === pe._Mode.Select && !!this._areaSelector && this._areaSelector.hasSelectArea();
  }, pe.prototype.paint = function (e) {
    if (this._mode == pe._Mode.Select && this._areaSelector.hasSelectArea() && this._areaSelector.paint(e), this._visuals) {
      for (var module, require = 0; require < this._visuals.length; ++require) {
        var n = (module = this._visuals[require])[0], r = module[1], o = 0;
        C.outlineWidth % 2 != 0 && (o = 0.5), e.canvas.strokeLine(Math.floor(n.getX()) + o, Math.floor(n.getY()) + o, Math.floor(r.getX()) + o, Math.floor(r.getY()) + o, C.outlineWidth, C.guideOutlineColor);
      }
      this._visuals = null;
    }
  }, pe.prototype._selectionChanged = function () {
    if (this._mode == pe._Mode.Transforming) {
      var exports = this._editor.getIndividualSelection();
      exports && exports.length ? this.setEditMode(pe.EditMode.Transform, true) : this.setEditMode(pe.EditMode.Select);
    }
  }, pe.prototype._hasPathResize = function () {
    return true;
  }, pe.prototype._mouseMove = function (e) {
    if (this._lastMouseEvent = e, this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && !g.modifiers.optionKey && this._editor.getDistanceHelper().deactivateMeasurement(), !this._editor.getCurrentInlineEditorNode()) {
      var module = O.getEditor(this._scene);
      module && module.isTransformBoxActive() && this._mode != pe._Mode.MoveGuideLine && this._updateMode(pe._Mode.Transforming), this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), true, this._view.getViewConfiguration()), this._updateEditorUnderMouse(e.client);
    }
  }, pe.prototype._mouseDown = function (e) {
    this._mDownTime1 = this._mDownTime2, this._mDownTime2 = new Date().getTime(), this._lastMouseEvent = e, this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && !g.modifiers.optionKey && this._editor.getDistanceHelper().deactivateMeasurement();
    var t = this._editor.getCurrentInlineEditorNode();
    if (t) {
      var require = t.getPaintBBox();
      if (require && !require.isEmpty()) {
        require = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapRect(require);
        var r = C.pickDistance;
        require.expanded(r, r, r, r).containsPoint(e.client) || this._editor.closeInlineEditor();
      }
    } else {
      this._clickedElement = null, this._selectionDone = false;
      var a = g.modifiers.metaKey && null == this._manager.getTemporaryActiveTool(), l = g.modifiers.shiftKey && !this._shiftConstraining, h = O.getEditor(this._scene);
      if (h && h.isTransformBoxActive())
        this._mode != pe._Mode.Transforming && this._updateMode(pe._Mode.Transforming), this._editorMovePartInfo = h.getTBoxPartInfoAt(e.client, this._view.getWorldTransform(this._scene), C.pickDistance, this._view.getViewConfiguration().multiPageView), !this._guideLineUnderMouse || this._editorMovePartInfo.id !== I.OUTSIDE && this._editorMovePartInfo.id !== I.INSIDE && this._editorMovePartInfo.id !== I.FAR_OUTSIDE ? this._editorMovePartInfo.id === I.FAR_OUTSIDE && this.setEditMode(pe.EditMode.Select) : (this._updateMode(pe._Mode.MoveGuideLine), this._selectionDone = true);
      else if (this._updateMode(pe._Mode.Select), !a) {
        var c = O.getEditor(this._scene);
        if (c) {
          var p = o.find(this._scene.getChildren(), function (e) {
              if (e instanceof A && e.hasFlag(n.Flag.Highlighted))
                return e;
            }) || this._scene.getActivePage(), d = c.getPartInfoAt(e.client, this._view.getWorldTransform(p), function (e) {
              if (e.allowPartSelection()) {
                if (!e.isRelativeToPage())
                  return true;
                if (Q.getEditorPage(e) === p)
                  return true;
              }
              return false;
            }.bind(this), C.pickDistance, this._view.getViewConfiguration().multiPageView);
          if (d && (this._editor.hasSelectionDetail() || this._editor.hasSelectionEdit() || !this._isLineSegment(d))) {
            var f = d.editor, m = d.id, y = d.selectable || e.button === s.BUTTON_RIGHT && d.data && d.data.rightButton && d.data.rightButton.selectable;
            if (l || !f.isPartSelected(m) && y) {
              var _ = 0;
              if (d.data && d.data.ownerEditor)
                l && y && f.isPartSelected(m) && (_ = d.data.ownerEditor.getOwnedPartsSelectionLength()), (y && 1 !== _ || !y && l) && d.data.ownerEditor.updateOwnedPartsSelection(l, [d]);
              else if (l && y && f.isPartSelected(m) && (_ = f.getPartsSelectionLength()), y && 1 !== _ || !y && l) {
                var v = f.updatePartSelection(l, y ? [m] : null);
                v && v instanceof u.PartInfo && (m = (d = v).id, y = d.selectable || e.button === s.BUTTON_RIGHT && d.data && d.data.rightButton && d.data.rightButton.selectable), !this._editor.hasEventListeners(Q.SelectionChangedEvent) || d.data && d.data.noEditorSelectionChangedEvent || this._editor.trigger(Q.SELECTION_CHANGED_EVENT);
              }
              this._selectionDone = true;
            }
            y && !f.isPartSelected(m) && m !== L.LabelHolder.LABEL_PART_ID || (this._editorMovePartInfo = d), this._updateMode(pe._Mode.Move), m === L.LabelHolder.LABEL_PART_ID && this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration());
          }
        }
      }
      this._mode === pe._Mode.Select && (this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration()), this._guideLineUnderMouse && (this._updateMode(pe._Mode.MoveGuideLine), this._selectionDone = true), this._selectionDone || (this._isBackgroundSelectEnabled ? this._clickedElement = this._getSelectableForPosition(e.client, true, e.button === s.BUTTON_RIGHT) : this._selectIgnoreBackgroundElements = this._getAllHitTestedElems(e.client), this._clickedToggle = l, this._clickedElement ? (t && this._clickedElement !== t && this._editor.closeInlineEditor(), this._scene.updateActivePageForElem(this._clickedElement), this._scene.updateActiveLayerForElem(this._clickedElement)) : (this._releaseOnlySelection || this._updateSelection(this._clickedToggle, []), t && this._editor.closeInlineEditor())));
    }
  }, pe.prototype._getSelectableForPosition = function (e, t, i) {
    var r = this._checkSelectedUnderMouse(e);
    if (r && (!this._clickGoDown || t || i))
      return r;
    var o, a = g.modifiers.metaKey && null == this._manager.getTemporaryActiveTool(), s = X.options.zones && !a, l = function (e) {
        return !(e instanceof G || e instanceof p) && this._selectAcceptor(e);
      }.bind(this), c = function (t) {
        return this._scene.hitTest(e, this._view.getWorldTransform(this._scene), l, a, -1, C.pickDistance, s, this._selectFilterFunc, true, false, this._view.getViewConfiguration().multiPageView, t);
      }.bind(this);
    this._interactionMode === pe.InteractionMode.Mixed ? (o = c(false)) && o.length || (o = c(true)) : o = c(this._view.getViewConfiguration().isElementAnnotationsVisible());
    var u = null, d = null;
    if (o && !(o[0] instanceof A)) {
      for (var f = [], m = 0; m < o.length; ++m)
        f.push(o[m].element);
      d = this._getSelectableElements(f, true);
    }
    if (!d || !d.length)
      return null;
    if (a && d.length > 0) {
      var y = null;
      for (m = 0; m < d.length; ++m)
        d[m].hasFlag(n.Flag.Selected) && (y = m);
      u = null == y || y + 1 >= d.length ? d[0] : d[y + 1];
    } else if (d.length > 0)
      if (this._clickGoDown) {
        var _ = d[0];
        if (_.hasFlag(n.Flag.Selected))
          u = _;
        else if (C.visualGroupSelect)
          if (_ instanceof p || _ instanceof A)
            u = _;
          else {
            for (var v = null, b = _.getParent(); null != b && !u; b = b.getParent()) {
              if (b.hasFlag(n.Flag.Selected))
                u = _;
              else
                !b.acceptChildren(function (e) {
                  return !(e instanceof h && e.hasFlag(n.Flag.Selected));
                }, false, false) && b instanceof h ? u = _ : b instanceof h && (v = b);
            }
            !u && v && (u = v);
          }
        else
          for (b = _.getParent(); null != b && !u; b = b.getParent()) {
            if (b.hasFlag(n.Flag.Selected) && ((i || t) && b instanceof h && (u = b), t || i || (u = _)), !u)
              !b.acceptChildren(function (e) {
                return !(e instanceof h && e.hasFlag(n.Flag.Selected));
              }, false, false) && (u = _), !u && !b.hasFlag(n.Flag.Selected) && b instanceof h && !b.getProperty("clk") && (_ = b);
          }
        u || (u = _);
      } else
        u = d[0];
    return u;
  }, pe.prototype._checkSelectedUnderMouse = function (e) {
    var t = g.modifiers.metaKey && null == this._manager.getTemporaryActiveTool(), i = g.modifiers.shiftKey && !this._shiftConstraining;
    X.options.zones;
    if (!this._selectionDone && !t && !i && this._editor.getSelection() && this._editor.getSelection().length) {
      var r = this._scene.hitTest(e, this._view.getWorldTransform(this._scene), this._selectAcceptorFunc, true, -1, 0, true, this._selectFilterFunc, true, false, this._view.getViewConfiguration().multiPageView, this._view.getViewConfiguration().isElementAnnotationsVisible());
      if (r && r.length || (r = this._scene.hitTest(e, this._view.getWorldTransform(this._scene), this._selectAcceptorFunc, true, -1, C.pickDistance, true, this._selectFilterFunc, true, false, this._view.getViewConfiguration().multiPageView, this._view.getViewConfiguration().isElementAnnotationsVisible())), r) {
        for (var o = [], a = 0; a < r.length; ++a) {
          var s = null;
          (s = C.pageCollisionTransform ? r[a].element : r[a].element || r[a]).hasFlag(n.Flag.Selected) && !C.pageCollisionTransform && s instanceof A && o.push(s);
        }
        if (o.length)
          return (o = n.order(o))[o.length - 1];
      }
    }
    return null;
  }, pe.prototype._mouseRelease = function (e) {
    function module() {
      this._lastMouseEvent = e;
      var t = false;
      if (this._elementUnderMouse && (this._elementUnderMouse.removeFlag(n.Flag.Highlighted), this._elementUnderMouse = null, t = true), this._backgroundSelectShouldBeEnabled && (this._backgroundSelectShouldBeEnabled = false, this._isBackgroundSelectEnabled = true, this._selectIgnoreBackgroundElements = null), this._mode == pe._Mode.Select && !this._selectionDone)
        if (this._clickedElement) {
          if (!this._isDistanceHelperActivatedByClick() && (this._clickedElement = this._getSelectableForPosition(e.client, false, e.button === s.BUTTON_RIGHT), this._clickedElement instanceof A && this._scene.getActivePage() === this._clickedElement && !t && (this._clickedElement = null), this._clickedElement)) {
            var require = this._clickedToggle;
            g.modifiers.shiftKey && this._clickedElement instanceof q && this._editor.getCurrentInlineEditorNode() && (require = false), this._updateSelectionWithElement(require, this._clickedElement, false), this._selectionDone = true;
          }
        } else
          this._releaseOnlySelection && (this._updateSelection(this._clickedToggle, []), this._selectionDone = true), this._isDistanceHelperActivated() && this._isDistanceHelperClickBehaviour() && this._editor.getDistanceHelper().invalidate();
      if (e.button === s.BUTTON_LEFT && this._mode == pe._Mode.Move && this._editorMovePartInfo && this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id && this._editorMovePartInfo.id.type == N.PartType.Segment && this._editorMovePartInfo.data && this._editorMovePartInfo.data.type == N.SegmentData.HitRes) {
        var r = this._editorMovePartInfo.editor, o = r.getElement();
        this._editor.beginTransaction();
        try {
          var a = o.insertHitPoint(this._editorMovePartInfo.data.hitRes);
        } finally {
          this._editor.commitTransaction(ae.get(new se("GSelectTool", "action.insert-path-point")));
        }
        a && (!g.modifiers.shiftKey && r._parentEditor && r._parentEditor instanceof U && r._parentEditor.updatePartSelection(false, null), r.updatePartSelection(g.modifiers.shiftKey, [{
            type: N.PartType.Point,
            point: a
          }]));
      }
      this._editorMovePartInfo = null, this._moveStart = null, this._moveStartTransformed = null, this._moveCurrent = null, this._selectionDone = false, this._mode != pe._Mode.Transforming && (this._updateMode(null), this.updateCursor()), this._updateEditorUnderMouse(e.client), this._isDistanceHelperActivatedByClick() && this._editor.getSelection() && this._editor.getSelection().length && this._updateDistanceHelper(true);
    }
    this._handlingDragEnd ? this._handlingDragEnd.then(function () {
      module.call(this), this._handlingDragEnd = null;
    }.bind(this)) : module.call(this);
  }, pe.prototype._updateSelectionWithElement = function (e, t, i) {
    var r;
    if (t.hasFlag(n.Flag.Selected) || this.setEditMode(pe.EditMode.Select), e) {
      (t.hasMixin(n.Container) ? t.getInternalSelectedNodes() : null) && this._editor.clearInternalSelection(t), r = [], t.hasFlag(n.Flag.Selected) && i || r.push(t);
      for (var o = t.getParent(); null != o; o = o.getParent())
        o.hasFlag(n.Flag.Selected) && r.push(o);
      this._updateSelection(true, r);
    } else
      t.hasFlag(n.Flag.Selected) || this._updateSelection(false, [t]);
  }, pe.prototype._mouseDragStart = function (e) {
    if (this._lastMouseEvent = e, this._mode != pe._Mode.Select && this._mode != pe._Mode.Move && this._mode != pe._Mode.Transforming || this._editorMovePartInfo && this._editorMovePartInfo.editor instanceof x || this.beginPan(), this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && this._editor.getDistanceHelper().deactivateMeasurement(), this._elementUnderMouse && (this._elementUnderMouse.removeFlag(n.Flag.Highlighted), this._elementUnderMouse = null), !this._styleEdManager || !this._styleEdManager.getActiveEditor() || this._editorMovePartInfo && this._editorMovePartInfo.editor instanceof x || this._styleEdManager.deactivateEditor(), this._visualsArea && (this.invalidateArea(this._visualsArea), this._visualsArea = null), this._mode == pe._Mode.Select && !this._editor.getCurrentInlineEditorNode() && (this._areaSelector.clearArea(), !this._selectionDone))
      if (this._releaseOnlySelection) {
        var module = false;
        if ((o = this._editor.getSelection()) && o.length)
          for (var require = 0; require < o.length && !module; ++require) {
            var r = o[require];
            (r instanceof w || r instanceof E || r instanceof B) && (module = true);
          }
        !this._clickedElement || this._clickedElement instanceof w || this._clickedElement instanceof E || this._clickedElement instanceof B ? module || this._clickedElement && (!this._clickedElement || this._clickedElement.hasFlag(n.Flag.Selected) || !(this._clickedElement instanceof w || this._clickedElement instanceof E || this._clickedElement instanceof B)) || this._updateSelection(this._clickedToggle, []) : (this._clickedElement.hasFlag(n.Flag.Selected) || module || this._updateSelectionWithElement(this._clickedToggle, this._clickedElement, true), this._clickedElement.hasFlag(n.Flag.Selected) && (this._updateMode(pe._Mode.Move), this._selectionDone = true));
      } else
        this._clickedElement && (this._updateSelectionWithElement(this._clickedToggle, this._clickedElement, true), this._selectionDone = true, this._updateMode(pe._Mode.Move));
    if (this._mode == pe._Mode.Move) {
      var o;
      if (this._moveStart = e.client, this._moveStartTransformed = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(this._moveStart), this.catchesContextMenu() || e.button === s.BUTTON_LEFT)
        if (this._dragHandling = true, this._clickToDragTimeout = setTimeout(function () {
            this._updateMode(pe._Mode.Moving);
          }.bind(this), 33), this._editorMovePartInfo)
          if (this._editorMovePartInfo.isolated && e.button === s.BUTTON_LEFT || e.button === s.BUTTON_RIGHT && this._editorMovePartInfo.data && this._editorMovePartInfo.data.rightButton && this._editorMovePartInfo.data.rightButton.isolated)
            this._editorMovePartInfo = this._editorMovePartInfo.editor.selectToolDragStartAction(this._editorMovePartInfo, e.button == s.BUTTON_RIGHT);
          else if ((o = this._editor.getSelection()) && o.length)
            for (require = 0; require < o.length; ++require) {
              var a = O.getEditor(o[require]);
              if (a) {
                var l = a.selectToolDragStartAction(this._editorMovePartInfo, e.button == s.BUTTON_RIGHT);
                if (l) {
                  this._editorMovePartInfo = l;
                  break;
                }
              }
            }
      g.modifiers.optionKey && this.updateCursor();
    } else if (this._mode == pe._Mode.Transforming) {
      this._moveStart = e.client, this._moveStartTransformed = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(this._moveStart);
      var h = O.getEditor(this._scene);
      h && h.isTransformBoxActive() && h.startTBoxTransform(this._editorMovePartInfo);
    } else
      this._mode === pe._Mode.MoveGuideLine && this._view.startMoveGuideLine(this._guideLineUnderMouse.isVertical, this._guideLineUnderMouse.guideIndex);
  }, pe.prototype._mouseDrag = function (e) {
    if (this._lastMouseEvent = e, this.isPanning() && this.panView(e.client, e.clientDelta), this._mode == pe._Mode.Moving || this._mode == pe._Mode.Transforming)
      this._moveCurrent = e.client, this._updateSelectionTransform();
    else if (this._mode != pe._Mode.Select || e.button == s.BUTTON_RIGHT || this._editor.getCurrentInlineEditorNode())
      this._mode === pe._Mode.MoveGuideLine && this._view.moveGuideLine(e.client);
    else {
      if (this._areaSelector.hasSelectArea()) {
        var module = this._areaSelector.getAreaPaintRect();
        if (this.isPanning())
          (require = this.getLastPanMovement()) && (module = this._calculateInvalidationPanAreaForRect(require.inverted().mapRect(module), C.outlineWidth));
        this.invalidateArea(module);
      }
      if (this._areaSelector.hasAreaStarted())
        if (g.modifiers.spaceKey)
          this._areaSelector.moveToPoint(e.client);
        else {
          var require;
          if (require = this.getLastPanMovement()) {
            var n = require.inverted().getTranslation();
            this._areaSelector.translate(n);
          }
          this._areaSelector.expandToPoint(e.client);
        }
      else
        this._areaSelector.startArea(e.clientStart);
      if (this._areaSelector.hasSelectArea()) {
        this._processElementsUnderCollision(true);
        module = this._areaSelector.getAreaPaintRect();
        this.isPanning() && (module = this._calculateInvalidationPanAreaForRect(module)), this.invalidateArea(module);
      } else
        this._editor.clearHighlighted();
    }
  }, pe.prototype._mouseDragEnd = function (e) {
    function module(t) {
      if (this._mode == pe._Mode.Moving) {
        var require;
        this._dragHandling && setTimeout(function () {
          this._dragHandling = false;
        }.bind(this), 0);
        var r = null;
        this._editor.beginTransaction();
        try {
          this._editor.getGuides().invalidate();
          var a = !(!this._itemsToAddToImageMask || !this._itemsToAddToImageMask.length), l = !(!this._itemsToAddToPage || !this._itemsToAddToPage.length), h = (!this._editorMovePartInfo || this._editorMovePartInfo.id === L.LabelHolder.LABEL_PART_ID) && g.modifiers.optionKey;
          if (this._editorMovePartInfo && this._editorMovePartInfo.isolated && !h) {
            var c = [];
            if (this._editorMovePartInfo.id === H.RESIZE_HANDLE_PART_ID || this._editorMovePartInfo.id === H.ROTATION_HANDLE_PART_ID) {
              var p = this._editor.getSelection();
              if (p && p.length)
                for (var u = 0; u < p.length; ++u) {
                  var d = p[u];
                  c = c.concat(this._editor.getLinkedElementsInSelection(d, p));
                }
            }
            this._editorMovePartInfo.editor.applyPartMove(this._editorMovePartInfo.id, this._editorMovePartInfo.data, null, c), this._editorMovePartInfo.editor instanceof P && (r = this._editorMovePartInfo.editor.getEditorData());
            var f = this._editorMovePartInfo.editor.getObjectNameModified();
            f || (f = ae.get(new se("GSelectTool", "text.element"))), require = ae.get(new se("GSelectTool", "action.modify-element")).replace("%element", f);
          } else
            this._editor.applySelectionTransform(h, true, h && (a || l), true), require = h ? ae.get(new se("GSelectTool", "action.transform-clone-selection")) : ae.get(new se("GSelectTool", "action.transform-selection"));
          if (a) {
            var m = this._itemsToAddToImageMask, y = m.map(function (e) {
                return e.target;
              });
            o.uniqueObj(y);
            var _ = y.map(function (e) {
              return m.filter(function (t) {
                return t.target === e;
              }).map(function (e) {
                return {
                  src: e.source,
                  box: e.sourceBox
                };
              });
            });
            false;
            for (u = 0; u < _.length; u++) {
              var v = _[u], b = y[u];
              v.forEach(function (e) {
                var t = e.src;
                t.getParent().removeChild(t), b instanceof te ? b.addImage(t, e.box) : b.appendChild(t);
              });
            }
            this._editor.updateSelection(false, y), require = "Create image mask", this._itemsToAddToImageMask = null;
          } else if (l) {
            m = this._itemsToAddToPage, y = m.map(function (e) {
              return e.target;
            });
            o.uniqueObj(y);
            _ = y.map(function (e) {
              return m.filter(function (t) {
                return t.target === e;
              }).map(function (e) {
                return e.source;
              });
            });
            var w = false;
            m[0].source instanceof A && (w = true), this._scene.startBlockReferenceChanges(), w ? (require += " & Switch Pages", ie.SWITCH_ORDER && this._editor.clearSelection(), this._scene.beginUpdate()) : require += " & Move to Page";
            for (u = 0; u < _.length; u++) {
              var E = _[u];
              b = y[u];
              E.forEach(function (e) {
                var t, i, n = e.getParent();
                if (b.getScene() && n !== b)
                  if (w && (t = this._scene.getIndexOfChild(e), i = this._scene.getIndexOfChild(b)), w)
                    e.getParent().removeChild(e), ie.SWITCH_ORDER && (b._requestInvalidation(), t < i ? b.getNext() ? this._scene.insertChild(e, b.getNext()) : this._scene.appendChild(e) : this._scene.insertChild(e, b), b._requestInvalidation());
                  else {
                    if (e instanceof A && b instanceof A)
                      return void console.warn("tried to insert page into page, aborting");
                    e.getParent().removeChild(e), b.appendChild(e);
                    var r = Q.getElementPage(n), o = Q.getElementPage(b);
                    if (r && o && e.hasMixin(k.Transform)) {
                      var a = r.getPosition(true), s = o.getPosition(true), l = a.subtract(s);
                      e.transform(new ee(1, 0, 0, 1, l.getX(), l.getY()), true);
                    }
                  }
              }.bind(this)), b.removeFlag(n.Flag.Highlighted);
            }
            w ? (this._scene.endUpdate(), this._editor.updateSelection(false, m.map(function (e) {
              return e.source;
            }))) : ie.SWITCH_ORDER ? this._scene.setActivePage(y[0]) : this._editor.updateSelection(false, m.map(function (e) {
              return e.source;
            })), this._scene.endBlockReferenceChanges(), this._itemsToAddToPage = null;
          }
        } finally {
          this.updateInlineHint(null), this._editor.commitTransaction(require, r);
        }
        C.pagesCollisionTransform && this._editor.updateByMousePosition(e.client, this._view.getWorldTransform(this._scene), false, this._view.getViewConfiguration());
      } else if (this._mode == pe._Mode.Select && e.button != s.BUTTON_RIGHT) {
        if (this._editor.clearHighlighted(), this._areaSelector.hasSelectArea()) {
          this._isDistanceHelperActivatedByClick() || this._processElementsUnderCollision(false), this._selectionDone = true;
          var B = this._areaSelector.getAreaPaintRect();
          this._areaSelector.clearArea(), this.invalidateArea(B);
        }
      } else if (this._mode == pe._Mode.Transforming) {
        var x = O.getEditor(this._scene);
        x && x.isTransformBoxActive() && (x.applyTBoxTransform(), this.invalidateArea()), this.updateInlineHint(null);
      } else
        this._mode === pe._Mode.MoveGuideLine && this._view.finishMoveGuideLine();
      t && t();
    }
    this._lastMouseEvent = e, this._clickToDragTimeout && clearTimeout(this._clickToDragTimeout), this._clickToDragTimeout = null, this.isPanning() ? this._handlingDragEnd = new Promise(function (e) {
      this.endPan(function () {
        module.call(this, e);
      }.bind(this));
    }.bind(this)) : module.call(this);
  }, pe.prototype._processElementsUnderCollision = function (e) {
    var t, i = this._areaSelector.getCollisionArea(this._view.getViewTransform(this._view.getScene())), n = this._getCollisionFlags(), r = false;
    if (n) {
      t = this._scene.getCollisions(i, n, null, this._selectFilterFunc, function (e) {
        return !(e instanceof F);
      }, this._view.getViewConfiguration().multiPageView, this._view.getViewConfiguration().isElementAnnotationsVisible());
    } else
      t = this._editor.getSelection(), r = true;
    var a = this._getSelectableElements(t);
    !this._isBackgroundSelectEnabled && this._selectIgnoreBackgroundElements && this._selectIgnoreBackgroundElements.length > 0 && (a = a.filter(function (e) {
      return !this._selectIgnoreBackgroundElements.some(function (t) {
        return o.equals(e, t);
      });
    }.bind(this))), a = a.filter(this._selectAcceptorFunc), e ? this._editor.highlightSelectablesUnderCollision(g.modifiers.shiftKey, a, i, this._view.getViewConfiguration().multiPageView, r) : this._editor.updateSelectionUnderCollision(g.modifiers.shiftKey, a, i, this._view.getViewConfiguration().multiPageView, r);
  }, pe.prototype._getCollisionFlags = function () {
    var e = k.CollisionFlag.GeometryBBox;
    return (!g.modifiers.optionKey && !C.invertSelectionMode || g.modifiers.optionKey && C.invertSelectionMode) && (e |= k.CollisionFlag.Partial), e;
  }, pe.prototype._mouseDblClick = function (e) {
    this._lastMouseEvent = e;
    var t = null != this._mDownTime1 && null != this._mDownTime2 && this._mDownTime2 - this._mDownTime1 > pe.DBLCLICKTM;
    if (this._mDownTime1 = null, this._mDownTime2 = null, t)
      return true;
    if (this._editor.getCurrentInlineEditorNode())
      return true;
    var i = false;
    if (this._clickedElement && (i = this._editor.openInlineEditor(this._clickedElement, this._view, e.client)), i || C.selectDoubleClickBehavior === pe._DblClick.Disabled)
      i && this._handleInlineEditingStart();
    else if (this._editorUnderMouseInfo && this._editorUnderMouseInfo.editor.hasFlag(u.Flag.Selected)) {
      if (this._editorUnderMouseInfo.editor.canHandleDblClick()) {
        this._editor.beginTransaction();
        try {
          i = this._editorUnderMouseInfo.editor.handleDblClick(this._editorUnderMouseInfo.id, this._editorUnderMouseInfo.data);
        } finally {
          (r = this._editorUnderMouseInfo.editor.getObjectNameModified()) || (r = ae.get(new se("GSelectTool", "text.element"))), this._editor.commitTransaction(ae.get(new se("GSelectTool", "action.modify-element")).replace("%element", r));
        }
      }
    } else if (this._clickedElement) {
      var n = O.getEditor(this._clickedElement);
      if (n && n.canHandleDblClick()) {
        this._editor.beginTransaction();
        try {
          i = n.handleDblClick();
        } finally {
          var r;
          (r = n.getObjectNameModified()) || (r = ae.get(new se("GSelectTool", "text.element"))), this._editor.commitTransaction(ae.get(new se("GSelectTool", "action.modify-element")).replace("%element", r));
        }
      }
    }
    return i;
  }, pe.prototype.catchesContextMenu = function (e) {
    return !!this._isDistanceHelperActivatedByClick() || this._dragHandling || R.prototype.catchesContextMenu.call(this) || this._editorUnderMouseInfo && this._editorUnderMouseInfo.id != W.IMAGEINTERNAL_PART_ID;
  }, pe.prototype.isCropContext = function () {
    return this._editorUnderMouseInfo && this._editorUnderMouseInfo.id == W.IMAGEINTERNAL_PART_ID;
  }, pe.prototype._handleInlineEditingStart = function () {
    for (var exports = this._clickedElement.getParent(), module = this._editor.getSelection(), require = [this._clickedElement]; exports && module;) {
      if (module = module.concat(), exports instanceof G || exports instanceof V)
        for (var n = 0; n < module.length; n++)
          if (module[n] === exports) {
            require.push(exports), module.splice(n, 1);
            break;
          }
      exports = exports.getParent();
    }
    this._updateSelection(false, require);
  }, pe.prototype._keyDown = function (e) {
    if (R.prototype._keyDown.call(this, e), !this._editor.getCurrentInlineEditorNode()) {
      if (e.key !== S.Constant.X || g.modifiers.metaKey || this._disableBackgroundSelect(), e.key === S.Constant.UP || e.key === S.Constant.DOWN || e.key === S.Constant.LEFT || e.key === S.Constant.RIGHT) {
        if (g.modifiers.spaceKey)
          return;
        if (this._editor.hasSelection() && (!this._mode || this._mode === pe._Mode.Moving)) {
          this._mode !== pe._Mode.Moving && this._updateMode(pe._Mode.Moving);
          var module = g.modifiers.shiftKey ? C.cursorDistanceBig : C.cursorDistanceSmall, require = 0, n = 0;
          switch (e.key) {
          case S.Constant.UP:
            g.modifiers.plusKey || g.modifiers.minusKey ? (this._editorMovePartInfo || (this._editorMovePartInfo = new u.PartInfo(this._editor, H.RESIZE_HANDLE_PART_ID, { side: a.Side.TOP_CENTER })), n = g.modifiers.plusKey ? n - module : n + module) : n -= module;
            break;
          case S.Constant.DOWN:
            g.modifiers.plusKey || g.modifiers.minusKey ? (this._editorMovePartInfo || (this._editorMovePartInfo = new u.PartInfo(this._editor, H.RESIZE_HANDLE_PART_ID, { side: a.Side.BOTTOM_CENTER })), n = g.modifiers.plusKey ? n + module : n - module) : n += module;
            break;
          case S.Constant.LEFT:
            g.modifiers.plusKey || g.modifiers.minusKey ? (this._editorMovePartInfo || (this._editorMovePartInfo = new u.PartInfo(this._editor, H.RESIZE_HANDLE_PART_ID, { side: a.Side.LEFT_CENTER })), require = g.modifiers.plusKey ? require - module : require + module) : require -= module;
            break;
          case S.Constant.RIGHT:
            g.modifiers.plusKey || g.modifiers.minusKey ? (this._editorMovePartInfo || (this._editorMovePartInfo = new u.PartInfo(this._editor, H.RESIZE_HANDLE_PART_ID, { side: a.Side.RIGHT_CENTER })), require = g.modifiers.plusKey ? require + module : require - module) : require += module;
          }
          this._keyDelta = this._keyDelta ? this._keyDelta.add(new l(require, n)) : new l(require, n), (g.modifiers.plusKey || g.modifiers.minusKey) && this._editorMovePartInfo && this._editorMovePartInfo.id === H.RESIZE_HANDLE_PART_ID ? this._editor.resizeSelection(this._editorMovePartInfo.data.side, this._keyDelta, this._view.getViewConfiguration().multiPageView) : this._editor.moveSelection(this._keyDelta, false, null, null, null, null, this._view.getViewConfiguration().multiPageView, g.modifiers.metaKey), g.modifiers.optionKey && this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && this._editor.getSelection() && this._editor.getSelection().length && this._updateDistanceHelper();
        }
      } else if (e.key === S.Constant.ENTER && this._editor.hasSelection() && !this._view.getViewConfiguration().isElementAnnotationsVisible() && (!this._mode || this._mode === pe._Mode.Select)) {
        if (this._editor.getCurrentInlineEditorNode())
          return;
        var r = this._editor.getSelection();
        if (r && r.length) {
          for (var o = false, s = 0; s < r.length && !o; ++s) {
            var h = O.getEditor(r[s]);
            h && h.canInlineEdit() && (e.preventDefault(), e.stopPropagation(), o = this._editor.openInlineEditor(r[s], this._view));
          }
          o || this._manager.activateSubSelect();
        }
      }
      if (this._editor && this._editor.hasSelection()) {
        var A = this._editor.getSelection().filter(function (e) {
          return e instanceof q;
        });
        A.length && A.forEach(function (t) {
          var i = O.getEditor(t);
          i.canHandleKeyEvents() && i.handleKeyEvent(e);
        }.bind(this));
      }
    }
  }, pe.prototype._keyRelease = function (e) {
    this._editor.getCurrentInlineEditorNode() || (e.key === S.Constant.X && this._enableBackgroundSelect(), e.key !== S.Constant.UP && e.key !== S.Constant.DOWN && e.key !== S.Constant.LEFT && e.key !== S.Constant.RIGHT || (this._applyKeyTransformation(), g.modifiers.optionKey && this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && this._editor.getSelection() && this._editor.getSelection().length && this._updateDistanceHelper()));
  }, pe.prototype._modifiersChanged = function (e) {
    var t = O.getEditor(this._scene);
    if (t && t.isTransformBoxActive() && this._mode != pe._Mode.MoveGuideLine ? this._mode != pe._Mode.Transforming && this._updateMode(pe._Mode.Transforming) : this._mode == pe._Mode.Transforming && this._updateMode(null), this._keyDelta && (e.changed.metaKey || e.changed.tabKey))
      this._applyKeyTransformation();
    else if (!(e.changed.shiftKey || e.changed.optionKey || e.changed.metaKey) || this._mode !== pe._Mode.Moving && this._mode != pe._Mode.Transforming)
      if (e.changed.escapeKey && g.modifiers.escapeKey) {
        this._editor.closeInlineEditor() ? this._view.focus() : this._manager.notifyJobDone(this);
      } else
        (e.changed.shiftKey || e.changed.optionKey) && this._mode == pe._Mode.Select && e.button != s.BUTTON_RIGHT && !this._editor.getCurrentInlineEditorNode() && this._areaSelector.hasSelectArea() && (this._processElementsUnderCollision(true), this.invalidateArea(this._areaSelector.getAreaPaintRect()));
    else
      e.changed.shiftKey && g.modifiers.shiftKey && (this._shiftConstraining = true), this._updateSelectionTransform(), e.changed.optionKey && this._mode === pe._Mode.Moving && this.updateCursor();
    this._allowDistanceHelper && e.changed.optionKey && (g.modifiers.optionKey && null == this._mode ? this._editor.activateDistanceHelper(S.Constant.OPTION) && this._lastMouseEvent && this._updateEditorUnderMouse(this._lastMouseEvent.client) : g.modifiers.optionKey || this._editor.getDistanceHelper().deactivateMeasurement()), e.changed.shiftKey && (!g.modifiers.shiftKey || g.modifiers.shiftKey && this._mode !== pe._Mode.Moving && this._mode !== pe._Mode.Transforming) && (this._shiftConstraining = false), e.changed.metaKey && this._lastMouseEvent && (this._editor.updateByMousePosition(this._lastMouseEvent.client, this._view.getWorldTransform(this._scene), true, this._view.getViewConfiguration()), this._updateEditorUnderMouse(this._lastMouseEvent.client));
  }, pe.prototype._updateSelection = function (e, t) {
    this.setEditMode(pe.EditMode.Select), this._editor.updateSelection(e, t), this._elementMeasurementsToggle = false;
  }, pe.prototype._getAllHitTestedElems = function (e) {
    var t = function (e) {
        return !(e instanceof G || e instanceof p) && this._selectAcceptor(e);
      }.bind(this), i = this._view.getWorldTransform(this._scene), n = this._view.getViewConfiguration(), r = n.isElementAnnotationsVisible(), o = this._scene.hitTest(e, i, t, true, -1, 0, false, this._selectFilterFunc, true, true, n.multiPageView, r);
    o && o.length || (o = this._scene.hitTest(e, i, t, true, -1, C.pickDistance, false, this._selectFilterFunc, true, true, n.multiPageView, r));
    var a = [];
    return o && o.length && (a = o.map(function (e) {
      return this._getSelectableElement(e.element, true);
    }.bind(this))), a;
  }, pe.prototype._getTopMostHit = function (e, t, i) {
    var n;
    n = t ? this._selectAcceptorFunc : function (e) {
      return !(e instanceof G) && this._selectAcceptor(e);
    }.bind(this);
    var r = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), n, !!i, -1, 0, false, this._selectFilterFunc, true, !!i, this._view.getViewConfiguration().multiPageView, this._view.getViewConfiguration().isElementAnnotationsVisible());
    r && r.length || (r = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), n, !!i, -1, C.pickDistance, false, this._selectFilterFunc, true, !!i, this._view.getViewConfiguration().multiPageView, this._view.getViewConfiguration().isElementAnnotationsVisible()));
    var o = null;
    if (r && r.length)
      for (var a = 0; a < r.length && !o; ++a)
        o = this._getSelectableElement(r[a].element, true);
    return o;
  }, pe.prototype._applyKeyTransformation = function () {
    this._keyDelta && (this._editorMovePartInfo && this._editorMovePartInfo.id === H.RESIZE_HANDLE_PART_ID ? (this._editor.applyResizeSelection(this._editorMovePartInfo.id, this._editorMovePartInfo.data), this._editorMovePartInfo = null) : this._editor.applySelectionTransform(false, false, false, true), this._keyDelta = null, this._updateMode(null));
  }, pe.prototype._openTransformBox = function () {
    var e = O.openEditor(this._scene);
    return !(!e || e.isTransformBoxActive() || this._editor.getCurrentInlineEditorNode()) && (e.setTransformBoxActive(true), this._updateMode(pe._Mode.Transforming), this.invalidateArea(), this.updateCursor(), true);
  }, pe.prototype._closeTransformBox = function () {
    var e = O.getEditor(this._scene);
    return e && e.isTransformBoxActive() ? (e.setTransformBoxActive(false), this._updateMode(null), this.invalidateArea(), this.updateCursor(), true) : (this._updateMode(null), this.invalidateArea(), this.updateCursor(), false);
  }, pe.prototype._updateSelectionTransform = function () {
    if (this._mode == pe._Mode.Moving) {
      var exports = this._moveCurrent;
      if (!exports)
        return;
      if (this._editorMovePartInfo && this._editorMovePartInfo.isolated) {
        var module = this._editor.getSelection();
        if (this._editorMovePartInfo.id === H.RESIZE_HANDLE_PART_ID && module && this._editorMovePartInfo.editor instanceof O) {
          module = (module = []).concat(this._editor.getSelection());
          for (var require = this._editorMovePartInfo.editor.getElement(), r = 0; r < module.length && require != module[r]; ++r);
          r < module.length && require == module[r] && (module = module.splice(r, 1));
        }
        var o = g.modifiers.shiftKey;
        if (!o && C.preserveAspectRatio && (this._editor.getSelection().length > 1 || !(this._editor.getSelection()[0] instanceof q) || C.allowTextRatioPreservation)) {
          var s = [
            a.Side.TOP_LEFT,
            a.Side.TOP_RIGHT,
            a.Side.BOTTOM_LEFT,
            a.Side.BOTTOM_RIGHT
          ];
          o = !!this._editorMovePartInfo.data && -1 !== s.indexOf(this._editorMovePartInfo.data.side);
        }
        this._editor.getGuides().useExclusions(this._editor.getAlignExclusions(false, module)), this._editor.getGuides().beginMap(this._editor.getMappingScopes());
        var l = this._editorMovePartInfo.editor.movePart(this._editorMovePartInfo.id, this._editorMovePartInfo.data, exports, this._view.getViewTransform(this._view.getScene().getActivePage()), this._editor.getGuides(), o, g.modifiers.optionKey, this._view.getViewConfiguration().multiPageView);
        this._editor.getGuides().finishMap(), this._editor.hasEventListeners(Q.EdGeometryChangeEvent) && this._editor.trigger(new Q.EdGeometryChangeEvent()), this._updateResizeHint(l);
      } else {
        if (g.modifiers.shiftKey) {
          var h = this._moveStart;
          exports = this._editorMovePartInfo && (this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id.type == N.PartType.Point || this._editorMovePartInfo.editor instanceof Y && (this._editorMovePartInfo.id.type == Y.PartType.Point || this._editorMovePartInfo.id.type == Y.PartType.Anchor)) ? this._editorMovePartInfo.editor.constrainPosition(exports, this._view.getWorldTransform(this._view.getScene().getActivePage()), this._editorMovePartInfo.id.point) : Q.convertToConstrain(h.getX(), h.getY(), exports.getX(), exports.getY(), C.cursorConstraint), this._shiftConstraining = true;
        }
        var c = this._view.getViewTransform(this._view.getScene()).mapPoint(exports);
        exports = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(exports);
        var p = null, u = null;
        if (this._editorMovePartInfo && (this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id && (this._editorMovePartInfo.id.type == N.PartType.Point || this._editorMovePartInfo.id.type == N.PartType.Segment) || this._editorMovePartInfo.editor instanceof Y && this._editorMovePartInfo.id && (this._editorMovePartInfo.id.type == Y.PartType.Point || this._editorMovePartInfo.id.type == Y.PartType.Anchor || this._editorMovePartInfo.id.type == Y.PartType.Segment))) {
          if (!this._shiftConstraining && !this._view.getViewConfiguration().isElementAnnotationsVisible()) {
            if (module = this._editor.getSelection()) {
              module = (module = []).concat(this._editor.getSelection());
              require = this._editorMovePartInfo.editor.getElement();
              this._editorMovePartInfo.data && this._editorMovePartInfo.data.ownerEditor && (require = this._editorMovePartInfo.data.ownerEditor.getElement());
              for (r = 0; r < module.length && require != module[r]; ++r);
              r < module.length && require == module[r] && module.splice(r, 1);
            }
            if (this._editor.getGuides().useExclusions(this._editor.getAlignExclusions(false, module)), this._editor.getGuides().beginMap(this._editor.getMappingScopes()), this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id.type == N.PartType.Segment || this._editorMovePartInfo.editor instanceof Y && this._editorMovePartInfo.id.type == Y.PartType.Segment) {
              var d = this._editorMovePartInfo.editor.getPointCoord(this._editorMovePartInfo.id.apLeft), f = this._editorMovePartInfo.editor.getPointCoord(this._editorMovePartInfo.id.apRight), m = a.fromPoints(d, f);
              if (m) {
                p = exports.subtract(this._moveStartTransformed);
                var y = m.translated(p.getX(), p.getY());
                y = this._editor.getGuides().mapRect(y);
                var _ = m.getSide(a.Side.TOP_LEFT);
                p = y.getSide(a.Side.TOP_LEFT).subtract(_);
              }
            } else
              exports = this._editor.getGuides().mapPoint(exports, this._editor.hasSelectionDetail() || this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.editor.getElement().isLine() && C.simpleLineMode ? M.DetailMap.Mode.DetailOnFilterOn : M.DetailMap.Mode.DetailOffFilterOn);
            this._editor.getGuides().finishMap();
          }
          if (p = null !== p ? p : exports.subtract(this._moveStartTransformed), this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id.type == N.PartType.Point || this._editorMovePartInfo.editor instanceof Y && (this._editorMovePartInfo.id.type == Y.PartType.Point || this._editorMovePartInfo.id.type == Y.PartType.Anchor)) {
            var v = this._editorMovePartInfo.editor.getPointCoord(this._editorMovePartInfo.id.point);
            p = exports.subtract(v);
          }
          this._editor.moveSelection(p, false, this._editorMovePartInfo ? this._editorMovePartInfo.id : null, this._editorMovePartInfo ? this._editorMovePartInfo.data : null, null, null, this._view.getViewConfiguration().multiPageView, g.modifiers.metaKey), u = exports;
        } else
          p = this._editor.moveSelection(exports.subtract(this._moveStartTransformed), true, this._editorMovePartInfo ? this._editorMovePartInfo.id : null, this._editorMovePartInfo ? this._editorMovePartInfo.data : null, this._moveStartTransformed, g.modifiers.optionKey, this._view.getViewConfiguration().multiPageView, g.modifiers.metaKey);
        if (C.showTooltips && (C.coordinatesTooltip || C.bboxPositionTooltip)) {
          if (C.coordinatesTooltip && this._editorMovePartInfo && (this._editorMovePartInfo.editor instanceof N && this._editorMovePartInfo.id.type == N.PartType.Segment || this._editorMovePartInfo.editor instanceof Y && this._editorMovePartInfo.id.type == Y.PartType.Segment)) {
            d = this._editorMovePartInfo.editor.getPointCoord(this._editorMovePartInfo.id.apLeft), f = this._editorMovePartInfo.editor.getPointCoord(this._editorMovePartInfo.id.apRight);
            u = d.getX() < f.getX() || d.getX() == f.getX() && d.getY() < f.getY() ? d.add(p) : f.add(p);
          } else if (C.bboxPositionTooltip) {
            if (!u) {
              var b = this._editor.getIndividualSelection();
              if (b) {
                var w = Q.getGroupGeometryBBox(b, this._view.getViewConfiguration().multiPageView);
                if (w)
                  _ = (_ = w.getSide(a.Side.TOP_LEFT)).add(p), this._view.getViewConfiguration().multiPageView && (_ = _.subtract(this._scene.getActivePage().getPosition(true))), u = _;
              }
            }
          } else
            u = null;
          if (u) {
            var E = this._scene.pointToString(u.getX(), C.tooltipDecimalPlaces), B = this._scene.pointToString(u.getY(), C.tooltipDecimalPlaces);
            this.updateInlineHint(E + ", " + B, u, a.Side.BOTTOM_RIGHT);
          }
        }
      }
      if ((!this._editorMovePartInfo || this._editorMovePartInfo && this._editorMovePartInfo.id === L.LabelHolder.LABEL_PART_ID) && this._editor.getSelection() && this._editor.getSelection().length) {
        if (this._view.getViewConfiguration().multiPageView && c) {
          var x = new a(c.getX(), c.getY(), 0, 0), P = this._scene.retrieveChildrenInPaintBBox(x, le.RETRIEVE_MODE_INTERSECT).filter(function (e) {
              var t = e.getPosition(true);
              return e.getGeometryBBox().translated(t.getX(), t.getY()).containsPoint(c);
            });
          if (P.indexOf(this._scene.getActivePage()) < 0) {
            P.sort(function (e, t) {
              return t.getElementIndex() - e.getElementIndex();
            }), P.length && (P = [P[0]]), this._itemsToAddToPage = this._gatherItemsForAdd(function (e) {
              return true;
            }, function (e) {
              return e instanceof A;
            }, function (e) {
              for (var module = 0; module < P.length; module++)
                e(P[module]);
            }, c, A);
            var S = this._itemsToAddToPage.filter(function (e) {
              return !(e.source instanceof A);
            });
            S.length && (this._itemsToAddToPage = S);
          }
        }
        this._itemsToAddToImageMask = [], this._itemsToAddToPage && this._itemsToAddToPage.length || (this._itemsToAddToImageMask = this._gatherItemsForAdd(function (e) {
          return e instanceof J;
        }, function (e) {
          if (!(e instanceof J)) {
            if (e instanceof te)
              return true;
            if (e.hasMixin(n.Container))
              return g.modifiers.metaKey && (e instanceof K || e.hasMixin($));
          }
          return false;
        }, null, c)), this._cleanupTargetHighlights(this._itemsToAddToPage, this._scene.iteratePages.bind(this._scene)), this._cleanupTargetHighlights(this._itemsToAddToImageMask);
      }
    } else if (this._mode == pe._Mode.Transforming) {
      var T = O.getEditor(this._scene);
      if (T && T.isTransformBoxActive() && this._moveStart) {
        var I = this._view.getViewTransform(this._view.getScene().getActivePage()), F = I.mapPoint(this._moveCurrent), R = T.transformTBox(this._moveStartTransformed, F, I, g.modifiers.optionKey, g.modifiers.shiftKey, undefined, this._view.getViewConfiguration().multiPageView);
        this.invalidateArea(), this._updateResizeHint(R);
      }
    }
  }, pe.prototype._cleanupTargetHighlights = function (e, t) {
    if (e) {
      var require = e.map(function (e) {
        return e.target;
      });
      (t || this._scene.acceptChildren.bind(this._scene))(function (e) {
        e.hasFlag(n.Flag.Highlighted) && require.indexOf(e) < 0 && e.removeFlag(n.Flag.Highlighted);
      });
    }
  }, pe.prototype._gatherItemsForAdd = function (e, t, i, o, a) {
    var s = [], l = this._editor.getSelection();
    if (!l)
      return s;
    if (!l.every(e))
      return s;
    for (var h = function (e) {
          var t = [], i = e instanceof d;
          if (e instanceof r)
            return this._scene.visitReferences(e, function (e) {
              if (e instanceof k && e.getScene() && !(i && e instanceof d)) {
                for (var n = e.getParent(); n && n !== l[p];)
                  n = n.getParent();
                n || t.push(e);
              }
            }), t;
        }.bind(this), c = function (e, t) {
          for (var i = e; i && !(i instanceof A);)
            i = i.getParent();
          if (i) {
            var n = i.getPosition(this._view.getViewConfiguration().multiPageView);
            return new ee(1, 0, 0, 1, n.getX(), n.getY()).mapRect(t);
          }
          return t;
        }.bind(this), p = 0; p < l.length; p++) {
      var u = l[p];
      if (u.getPaintBBox() && (C.pageCollisionTransform || !(u instanceof A)) && (u instanceof d && u.isMaster() || !u.hasMixin(n.Reference) || !this._scene.hasLinks(u))) {
        var g = O.getEditor(u), f = new ee(), m = g.getBBox(f), y = c(u, m), _ = new D();
        _.addVertex(Z.Command.Move, m.getX(), m.getY()), _.addVertex(Z.Command.Line, m.getX() + m.getWidth(), m.getY()), _.addVertex(Z.Command.Line, m.getX() + m.getWidth(), m.getY() + m.getHeight()), _.addVertex(Z.Command.Line, m.getX(), m.getY() + m.getHeight()), _.addVertex(Z.Command.Close, 0, 0);
        var v = new j(), b = null;
        (i || this._scene.acceptChildren.bind(this._scene))(function (e) {
          if (u !== e && t(e)) {
            var i = u;
            do {
              i = i.getParent();
            } while (i && i !== e);
            if (null === i) {
              var r = c(e, e.getGeometryBBox());
              if (r) {
                if (r.containsRect(y, true))
                  return e.setFlag(n.Flag.Highlighted), s.push({
                    target: e,
                    source: u,
                    sourceBox: y
                  }), h(u).forEach(function (t) {
                    s.push({
                      target: e,
                      source: t,
                      sourceBox: y
                    });
                  }), false;
                if ((o && r.containsPoint(o) || a && e !== u && e instanceof a && u instanceof a) && r.intersectsRect(y, true)) {
                  if (!e.hasMixin($) || v.intersect(_, e, false, true, b))
                    return e.setFlag(n.Flag.Highlighted), s.push({
                      target: e,
                      source: u,
                      sourceBox: y
                    }), h(u).forEach(function (t) {
                      s.push({
                        target: e,
                        source: t,
                        sourceBox: y
                      });
                    }), false;
                  b = v._polyLine0;
                }
              }
            }
          }
        }.bind(this));
      }
    }
    return s;
  }, pe.prototype._updateResizeHint = function (e) {
    var t = null, i = null, n = null;
    if (this._moveCurrent && C.showTooltips) {
      if (e && this._editorMovePartInfo && this._editorMovePartInfo.editor instanceof H)
        if (this._editorMovePartInfo.id === H.RESIZE_HANDLE_PART_ID) {
          t = e.mapRect(this._editorMovePartInfo.editor.getBox());
          var r = this._editorMovePartInfo.editor.getBoxTransform(this._view.getViewConfiguration().multiPageView);
          r && (t = r.mapRect(t)), i = this._editorMovePartInfo.data.side;
        } else
          this._editorMovePartInfo.id === H.ROTATION_HANDLE_PART_ID && (n = 180 * this._editorMovePartInfo.editor.getRotationAngle() / Math.PI, (C.snapRotate || g.modifiers.shiftKey) && (n = Math.round(n)));
      if (this._mode == pe._Mode.Transforming && e) {
        var s = O.getEditor(this._scene);
        s && s.isTransformBoxActive() && this._moveStart && (s.getTBoxMode() === b.TBoxMode.RESIZE ? t = s.getTransformBox()._calculateGeometryBBox() : s.getTBoxMode() === b.TBoxMode.ROTATE && (n = 180 * e.decomposed().rotate.getRotationFactor() / Math.PI, (C.snapRotate || g.modifiers.shiftKey) && (n = Math.round(n))));
      }
      if ((C.angleTooltip || null === n) && (C.sizeTooltip || !t) && (null !== n || t)) {
        this._scene.getProperty("ut");
        var l, h, A = this._view.getViewTransform(this._view.getScene().getActivePage()).mapPoint(this._moveCurrent);
        t && (l = t.getWidth(), h = t.getHeight());
        var c = this._editor.getSelection();
        if (1 === c.length && c[0] instanceof w && c[0].isLine() && t) {
          var p = this._scene.pointToString(Math.sqrt(l * l + h * h), C.tooltipDecimalPlaces);
          this.updateInlineHint(p, A, a.Side.BOTTOM_LEFT);
        } else if (t) {
          var u = "";
          i !== a.Side.TOP_CENTER && i !== a.Side.BOTTOM_CENTER && (u = this._scene.pointToString(l, C.tooltipDecimalPlaces)), i !== a.Side.LEFT_CENTER && i !== a.Side.RIGHT_CENTER && (u && (u += " \xD7 "), u += this._scene.pointToString(h, C.tooltipDecimalPlaces)), u && this.updateInlineHint(u, A, a.Side.BOTTOM_LEFT);
        } else
          this.updateInlineHint(o.formatNumber(n, C.tooltipDecimalPlaces) + "\xB0", A, a.Side.BOTTOM_LEFT);
      }
    }
  }, pe.prototype._updateMode = function (e) {
    e !== this._mode && (this._mode = e);
  }, pe.prototype._updateEditorUnderMouse = function (e) {
    this._visuals = null;
    var t = this._view.getScene() ? this._view.getWorldTransform(this._view.getScene().getActivePage()) : null, i = this._view.getScene() ? this._view.getWorldTransform(this._view.getScene()) : null;
    if (i && t) {
      var r = null;
      if ((!this._mode || this._mode == pe._Mode.Transforming) && this._view.getViewConfiguration().guideLinesVisible) {
        var o = e.getX(), a = e.getY(), s = this._scene.getProperty("hgl"), c = this._scene.getProperty("vgl");
        if (s && s.length)
          for (var p = 0; p < s.length; ++p) {
            var u = i.mapPoint(new l(0, s[p])).getY();
            if (u >= a - C.pickDistance / 2 && u <= a + C.pickDistance / 2) {
              r = {
                isVertical: false,
                guideIndex: p
              };
              break;
            }
          }
        if (!r && c && c.length)
          for (p = 0; p < c.length; ++p) {
            var d = i.mapPoint(new l(c[p], 0)).getX();
            if (d >= o - C.pickDistance / 2 && d <= o + C.pickDistance / 2) {
              r = {
                isVertical: true,
                guideIndex: p
              };
              break;
            }
          }
      }
      if (this._mode == pe._Mode.Transforming) {
        var f = O.getEditor(this._scene);
        if (f && f.isTransformBoxActive()) {
          this._editorUnderMouseInfo && (this._editorUnderMouseInfo = null);
          var m = f.updateTBoxUnderMouse(e, i, this._view);
          if (this._editorUnderMouseInfo = m.partInfo, m.newPInfo || r || !r && this._guideLineUnderMouse) {
            var y = m.partInfo.id;
            !r || y != I.INSIDE && y != I.OUTSIDE && y != I.FAR_OUTSIDE ? (this._guideLineUnderMouse && (this._guideLineUnderMouse = null), r = null) : (this._guideLineUnderMouse = r, this._editorUnderMouseInfo = null), this.updateCursor();
          }
        } else
          this._updateMode(null);
      }
      var _ = null;
      if (!this._mode) {
        var v = false, b = false, w = O.getEditor(this._scene);
        if (w && ((_ = w.getPartInfoAt(e, t, function (e) {
            return e.allowPartSelection();
          }.bind(this), C.pickDistance, this._view.getViewConfiguration().multiPageView)) && !this._editor.hasSelectionDetail() && !this._editor.hasSelectionEdit() && this._isLineSegment(_) && (_ = null), _ !== this._editorUnderMouseInfo && (!this._editorUnderMouseInfo || !this._editorUnderMouseInfo.editor.highlightPart || _ && _.editor == this._editorUnderMouseInfo.editor || this._editorUnderMouseInfo.editor.requestInvalidation(), this._editorUnderMouseInfo = _, v = true, this._editorUnderMouseInfo && this._editorUnderMouseInfo.editor.highlightPart && this._editorUnderMouseInfo.editor.highlightPart(this._editorUnderMouseInfo.id, this._editorUnderMouseInfo.data), this.updateCursor())), !v && this._editorUnderMouseInfo && (this._editorUnderMouseInfo = null, this.updateCursor()), !v && r && (this._guideLineUnderMouse = r, this.updateCursor()), !r && this._guideLineUnderMouse && (this._guideLineUnderMouse = null, this.updateCursor()), !v && !r) {
          var E = this._getSelectableForPosition(e, false);
          !E || E.hasFlag(n.Flag.Selected) || E instanceof A && this._scene.getActivePage() === E || (this._elementUnderMouse && this._elementUnderMouse !== E && this._elementUnderMouse.removeFlag(n.Flag.Highlighted), this._elementUnderMouse = E, C.highlightOnHover && this._elementUnderMouse.setFlag(n.Flag.Highlighted), b = true, this.updateCursor());
        }
        !b && this._elementUnderMouse && (this._elementUnderMouse.removeFlag(n.Flag.Highlighted), this._elementUnderMouse = null, this.updateCursor()), this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated() && this._editor.getSelection() && this._editor.getSelection().length && C.distanceHelperBehaviour !== pe._DistanceHelperBehaviour.Click && this._updateDistanceHelper();
      }
      var B = null;
      this._visuals = null;
      var x = g.modifiers.metaKey && null == this._manager.getTemporaryActiveTool(), P = X.options.zones && !x;
      if ((!this._mode && !_ || this._mode == pe._Mode.Select) && !x && P) {
        var S, T = this._editor.getSelection();
        x = false;
        if (T && 1 == T.length && T[0] instanceof h && T[0].hitTest(e, t, this._selectAcceptorFunc, x, -1, C.pickDistance, P, null, true, false, this._view.getViewConfiguration().multiPageView) && (S = T[0]), S && (B = S.getGeometryBBox()) && !B.isEmpty()) {
          B = t.mapRect(B);
          var F = this._editor.getGuides().getBBoxSnapZones(B, e);
          F && F.length && (this._visuals = F);
        }
      }
      var R = this._visuals ? B.expanded(2, 2, 2, 2) : null;
      (this._visualsArea || R) && (this._visualsArea && this.invalidateArea(this._visualsArea), R && this.invalidateArea(R), this._visualsArea = R);
    }
  }, pe.prototype._updateDistanceHelper = function (e) {
    var t = null, i = this._editor.getSelection()[0], r = Q.getElementPage(i), o = null, a = false, s = false, l = this._editor.getSelectionEditor();
    if (l && !l.hasFlag(u.Flag.HideEditor))
      t = l.getBox(true);
    else if (1 == this._editor.getSelection().length) {
      var h = O.getEditor(i);
      t = i.hasMixin(k.Transform) && h ? h.getPEGeometryBBox() : i.getGeometryBBox();
      var A = i.getAngle();
      (null == (A = A ? Math.abs(A) : A) || oe.isEqualEps(A, 0, 0.0001) || oe.isEqualEps(A, Math.PI, 0.0001) || oe.isEqualEps(A, oe.PIHALF, 0.0001)) && h && h._showResizeBox() || (a = true);
    }
    if (t) {
      var c = r, p = !e || this._elementMeasurementsToggle, d = this._elementUnderMouse && !this._elementUnderMouse.hasFlag(n.Flag.Selected);
      p && d ? (o = this._elementUnderMouse.getGeometryBBox(), c = Q.getElementPage(this._elementUnderMouse), s = true) : c && (o = c.getGeometryBBox(), c.getProperty("h") || c.getProperty("w") || (s = true)), e && d && (this._elementMeasurementsToggle = !this._elementMeasurementsToggle), o && c == r && this._editor.getDistanceHelper().refreshVisuals(t, o, a, s);
    }
  }, pe.prototype._selectFilter = function (e) {
    return !(e instanceof v && !this._view.getViewConfiguration().slices) && !(e.hasMixin(Ae) && !this._view.getViewConfiguration().isElementAnnotationsVisible(e)) && !e.hasFlag(k.Flag.FullLocked) && !(e instanceof he && e.getProperty("plkt") & he.ProgramLck.NoSelect);
  }, pe.prototype._selectAcceptor = function (e) {
    return !(e instanceof A);
  }, pe.prototype._getSelectableElements = function (e, t) {
    for (var require = [], n = 0; n < e.length; ++n) {
      var r = this._getSelectableElement(e[n], t);
      r && require.indexOf(r, t) < 0 && require.push(r);
    }
    return require = this._pageFilterRule(require);
  }, pe.prototype._getSelectableElement = function (e, t) {
    for (var require = e; null !== require; require = require.getParent())
      if ((require instanceof h || require instanceof A) && (t || !require.getParent() || !(require.getParent() instanceof h)))
        return require;
    return null;
  }, pe.prototype._pageFilterRule = function (e) {
    return e.every(function (e) {
      return e instanceof A;
    }) ? e : e.filter(function (e) {
      return !(e instanceof A);
    });
  }, pe.prototype._switchToMoveFilter = function (e) {
    return e.filter(function (e) {
      return !(e instanceof A);
    });
  }, pe.prototype._isLineSegment = function (e) {
    return e.editor instanceof N && (!e.data || !(e.data.ownerEditor instanceof U)) && e.id.type == N.PartType.Segment && e.editor.getElement().isLine();
  }, pe.prototype._isDistanceHelperClickBehaviour = function () {
    return C.distanceHelperBehaviour === pe._DistanceHelperBehaviour.Click;
  }, pe.prototype._isDistanceHelperActivated = function () {
    return this._allowDistanceHelper && this._editor.getDistanceHelper().isActivated();
  }, pe.prototype._isDistanceHelperActivatedByClick = function () {
    return !!(this._isDistanceHelperActivated() && this._isDistanceHelperClickBehaviour() && g.modifiers.optionKey) && this._editor.hasSelection();
  }, pe.prototype._disableBackgroundSelect = function () {
    this._isBackgroundSelectEnabled = false;
  }, pe.prototype._enableBackgroundSelect = function () {
    this._mode === pe._Mode.Select ? this._backgroundSelectShouldBeEnabled = true : (this._isBackgroundSelectEnabled = true, this._selectIgnoreBackgroundElements = null);
  }, pe.prototype.toString = function () {
    return "[Object GSelectTool]";
  }, exports.exports = pe;
}
