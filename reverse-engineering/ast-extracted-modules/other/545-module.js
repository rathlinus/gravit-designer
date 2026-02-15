/**
 * Module 545
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
  var n = i(2), r = i(0), o = i(546), a = i(52), s = i(36), l = i(331), h = i(5), A = i(24), c = i(160), p = i(22), u = i(39), d = i(81), g = i(7), f = i(82), m = i(66), y = i(12), _ = i(9), v = i(47);
  function b(e) {
    s.call(this, e);
  }
  r.inherit(b, s), b.exports(b, c), b.prototype._transformBox = null, b.prototype._visuals = null, b.prototype._visualsArea = null, b.TBoxMode = {
    NA: 0,
    PASSIVE: 1,
    TBOXMOVE: 2,
    CNTRMOVE: 3,
    ROTATE: 4,
    RESIZE: 5,
    SKEW: 6
  }, b.prototype._tBoxMode = b.TBoxMode.NA, b.prototype._tBoxFlags = 0, b.prototype._tBoxData = null, b.prototype._mouseInfo = null, b.prototype._paintChildren = function (e, t, i) {
    if (this._editors)
      for (var n = 0; n < this._editors.length; ++n) {
        var r = this._editors[n];
        if (!i || i(r))
          if (r instanceof l) {
            var o = r.getElement().getPosition(t.configuration.multiPageView), a = e.preMultiplied(new g(1, 0, 0, 1, o.getX(), o.getY()));
            this._editors[n].paint(a, t);
          } else
            this._editors[n].paint(e, t);
      }
  }, b.prototype.paint = function (e, t) {
    if (s.prototype.paint.call(this, e, t), this._transformBox) {
      var i = e.getScaleFactor(), n = t.canvas.getOrigin();
      if (t.configuration.multiPageView) {
        this._getGraphicEditor().getIndividualSelection();
        var r, o = this._element.getActivePage();
        (r = o ? o.getPosition(!0) : null) && t.canvas.setOrigin(n.subtract(r.scale(i)));
      }
      if (this._transformBox.paint(e, t, this.getTBoxMode() == b.TBoxMode.ROTATE), t.configuration.multiPageView && r && t.canvas.setOrigin(n), this._visuals) {
        for (var a, l = 0; l < this._visuals.length; ++l) {
          var h = (a = this._visuals[l])[0], c = a[1], p = 0;
          A.outlineWidth % 2 != 0 && (p = 0.5), t.canvas.strokeLine(Math.floor(h.getX()) + p, Math.floor(h.getY()) + p, Math.floor(c.getX()) + p, Math.floor(c.getY()) + p, A.outlineWidth, t.highlightOutlineColor);
        }
        this._visuals = null;
      }
    }
    t.computedBackgroundColor = null;
  }, b.prototype.getBBox = function (e) {
    var t = s.prototype.getBBox.call(this, e);
    if (this._transformBox) {
      var i = this._transformBox._calculateGeometryBBox();
      if (i && !i.isEmpty()) {
        var n = A.annotationHandles.tranformBox, r = d.getAnnotationPaintMargin(n.size);
        i = (i = e ? e.mapRect(i) : i).expanded(r, r, r, r), t = t ? t.united(i) : i;
      }
    }
    return t;
  }, b.prototype._detach = function () {
    this._transformBox && this.setTransformBoxActive(!1);
  }, b.prototype.isRelativeToPage = function () {
    return !1;
  }, b.prototype.isTransformBoxActive = function () {
    return null != this._transformBox;
  }, b.prototype.setTransformBoxActive = function (e, t, i) {
    if (e || null === e) {
      if ((r = this._getGraphicEditor().getSelectionEditor()) && !r.hasFlag(u.Flag.HideEditor))
        r.setFlag(u.Flag.HideEditor);
      else if (!r) {
        if (o = this._getGraphicEditor().getIndividualSelection())
          for (var n = 0; n < o.length; ++n) {
            (a = s.openEditor(o[n])).hasFlag(u.Flag.Outline) || a.setFlag(u.Flag.Outline);
          }
      }
      this._transformBox || (this._element.addEventListener(p.GeometryChangeEvent, this._geometryChange, this), this._getGraphicEditor().addEventListener(f.SelectionChangedEvent, this._selectionChanged, this)), i && (this._tBoxFlags = i), this._updateSelectionTransformBox(t, !t && null != this._transformBox);
    } else {
      var r;
      if (this._transformBox && (this._element.removeEventListener(p.GeometryChangeEvent, this._geometryChange, this), this._getGraphicEditor().removeEventListener(f.SelectionChangedEvent, this._selectionChanged, this), this.requestInvalidation(), this._transformBox = null, this._updateTBoxMode(b.TBoxMode.NA), this.requestInvalidation()), (r = this._getGraphicEditor().getSelectionEditor()) && r.hasFlag(u.Flag.HideEditor))
        r.removeFlag(u.Flag.HideEditor);
      else if (!r) {
        var o;
        if (o = this._getGraphicEditor().getIndividualSelection())
          for (n = 0; n < o.length; ++n) {
            var a;
            (a = s.getEditor(o[n])) && a.hasFlag(u.Flag.Outline) && a.removeFlag(u.Flag.Outline);
          }
      }
    }
  }, b.prototype.getTransformBox = function () {
    return this._transformBox;
  }, b.prototype.requestInvalidation = function (e) {
    var t = null, i = this._getGraphicEditor().getIndividualSelection();
    if (i && i.length) {
      var n = this._element.getActivePage(), r = n ? n.getPosition(!0) : null;
      !r || y.isEqualEps(r.getX(), 0) && y.isEqualEps(r.getY(), 0) || (t = new g(1, 0, 0, 1, r.getX(), r.getY()));
    }
    t && (e ? e.pageTransform = t : e = { pageTransform: t }), this._getGraphicEditor().requestInvalidation(this, e);
  }, b.prototype.getTBoxMode = function () {
    return this._tBoxMode;
  }, b.prototype._updateTBoxMode = function (e) {
    this._tBoxMode = e;
  }, b.prototype.hideTransformBox = function () {
    this._transformBox && this._transformBox.hide(), this.requestInvalidation();
  }, b.prototype.showTransformBox = function () {
    this._transformBox && this._transformBox.show(), this.requestInvalidation();
  }, b.prototype.getTransformBoxCenter = function () {
    return this._transformBox ? new h(this._transformBox.cx, this._transformBox.cy) : null;
  }, b.prototype._applyTBoxCenterTransform = function () {
    if (this._transformBox && (this._transformBox.trf || this._transformBox.cTrf)) {
      this._getGraphicEditor().beginTransaction();
      try {
        this._transformBox.applyCenterTransform();
      } finally {
        this._getGraphicEditor().commitTransaction(_.get(new v("GEditor", "action.move")));
      }
      this.requestInvalidation();
    }
  }, b.prototype.getCursor = function (e, t) {
    var i = a.Select;
    switch (e) {
    case o.INSIDE:
      i = a.SelectCross;
      break;
    case o.OUTSIDE:
      i = a.SelectRotate[t.rotationSegment];
    case o.Handles.ROTATE:
      i = a.SelectRotateRound;
      break;
    case o.OUTLINE:
      i = t ? a.SelectSkewHoriz : a.SelectSkewVert;
      break;
    case o.Handles.SKEW_HORIZONTAL:
      i = a.SelectSkewHoriz;
      break;
    case o.Handles.SKEW_VERTICAL:
      i = a.SelectSkewVert;
      break;
    case o.Handles.TOP_CENTER:
    case o.Handles.BOTTOM_CENTER:
      i = a.SelectResizeVert;
      break;
    case o.Handles.LEFT_CENTER:
    case o.Handles.RIGHT_CENTER:
      i = a.SelectResizeHoriz;
      break;
    case o.Handles.TOP_LEFT:
    case o.Handles.BOTTOM_RIGHT:
      i = a.SelectResizeUpLeftDownRight;
      break;
    case o.Handles.TOP_RIGHT:
    case o.Handles.BOTTOM_LEFT:
      i = a.SelectResizeUpRightDownLeft;
      break;
    case o.Handles.ROTATION_CENTER:
      i = a.SelectArrowOnly;
    }
    return i;
  }, b.prototype.updateTBoxUnderMouse = function (e, t, i) {
    var n = null, r = this._getGraphicEditor().getIndividualSelection(), a = null, s = !1;
    if (i.getViewConfiguration().multiPageView) {
      var l = this._element.getActivePage();
      a = l ? l.getPosition(!0) : null;
    }
    this._tBoxData ? (n = new u.PartInfo(this._tBoxData.editor, this._tBoxData.id, this._tBoxData.data), o.isRotating(n.id) && (n.data.rotationSegment = a ? this._transformBox.getRotationSegment(e, t.preMultiplied(new g(1, 0, 0, 1, a.getX(), a.getY()))) : this._transformBox.getRotationSegment(e, t))) : n = this.getTBoxPartInfoAt(e, t, A.pickDistance, i.getViewConfiguration().multiPageView), this._mouseInfo && this._mouseInfo.id == n.id && this._mouseInfo.data == n.data || (this._mouseInfo = n, s = !0);
    var h = null;
    this._visuals = null;
    var c = f.getGroupTransformBBox(r, !0);
    if (c && !c.isEmpty() && (a && (c = c.translated(-a.getX(), -a.getY())), this._tBoxMode == b.TBoxMode.PASSIVE && this._mouseInfo.id == o.INSIDE)) {
      h = t.mapRect(c);
      var p = this._getGraphicEditor().getGuides().getBBoxSnapZones(h, e);
      p && p.length && (this._visuals = p);
    }
    var d = this._visuals && h && h.expanded(2, 2, 2, 2);
    return d = d ? i.getViewTransform().mapRect(d) : null, (this._visualsArea || d) && (this.requestInvalidation(), this._visualsArea = d, this.requestInvalidation()), {
      newPInfo: s,
      partInfo: this._mouseInfo
    };
  }, b.prototype.getTBoxPartInfoAt = function (e, t, i, n) {
    if (n) {
      var r = this._element.getActivePage(), o = r ? r.getPosition(!0) : null;
      o && (t = t.preMultiplied(new g(1, 0, 0, 1, o.getX(), o.getY())));
    }
    return this._transformBox.getPartInfoAt(e, t, i, this);
  }, b.prototype.startTBoxTransform = function (e) {
    e && (this._visualsArea && (this.requestInvalidation(), this._visualsArea = null), this._tBoxData = new u.PartInfo(e.editor, e.id, e.data), o.isSkewing(this._tBoxData.id) ? this._updateTBoxMode(b.TBoxMode.SKEW) : o.isRotating(this._tBoxData.id) ? this._updateTBoxMode(b.TBoxMode.ROTATE) : this._tBoxData.id >= 0 && this._tBoxData.id < o.Handles.ROTATION_CENTER ? this._updateTBoxMode(b.TBoxMode.RESIZE) : this._tBoxData.id == o.Handles.ROTATION_CENTER ? this._updateTBoxMode(b.TBoxMode.CNTRMOVE) : this._updateTBoxMode(b.TBoxMode.TBOXMOVE), this.hideTransformBox());
  }, b.prototype.transformTBox = function (e, t, i, n, r, o, a) {
    if (this._tBoxMode != b.TBoxMode.PASSIVE && this._tBoxMode != b.TBoxMode.NA) {
      var s = this._getGraphicEditor().getGuides();
      s.useExclusions(this._getGraphicEditor().getAlignExclusions(!1)), s.beginMap(this._getGraphicEditor().getMappingScopes());
      var l = o;
      l || this._tBoxMode != b.TBoxMode.SKEW || (l = 10);
      var h = this._transformBox.calculateTransformation(this._tBoxData, i, e, t, s, n, r, l);
      if (s.finishMap(), this.requestInvalidation(), this._tBoxMode != b.TBoxMode.CNTRMOVE) {
        this._transformBox.setTransform(h);
        var A = new m.EdTransformOptions();
        A.isMultiPage = !!a, A.fullContentsTransform = !0, this._getGraphicEditor().transformSelection(h, null, null, A);
      } else
        this._transformBox.setCenterTransform(h), this.requestInvalidation();
      return h;
    }
    return null;
  }, b.prototype.applyTBoxTransform = function (e) {
    this._getGraphicEditor().getGuides().invalidate(), this._tBoxMode == b.TBoxMode.CNTRMOVE ? (this._applyTBoxCenterTransform(), this.showTransformBox()) : this._getGraphicEditor().applySelectionTransform(e, !1, !1, !0), this._updateTBoxMode(b.TBoxMode.PASSIVE), this._tBoxData = null, this._mouseInfo = null;
  }, b.prototype._updateSelectionTransformBox = function (e, t) {
    this.requestInvalidation();
    var i = this._getGraphicEditor().getIndividualSelection();
    if (i && i.length) {
      var n = this._transformBox, r = null, a = null;
      e ? (r = e.getX(), a = e.getY()) : this._transformBox && t && (r = this._transformBox.cx, a = this._transformBox.cy), this._transformBox = null;
      var s = f.getGroupTransformBBox(i, !0);
      if (s) {
        var l = this._element.getActivePage(), h = l ? l.getPosition(!0) : null;
        h && (s = s.translated(-h.getX(), -h.getY())), this._transformBox = new o(s, r, a, this._tBoxFlags, this.getElement());
      }
      var A = this.getElement().getWorkspace() ? this.getElement().getWorkspace().getTransactionRecorder() : null;
      A && A.afterTBoxChange(this.getElement(), n, this._transformBox), this.requestInvalidation(), this._transformBox ? this._updateTBoxMode(b.TBoxMode.PASSIVE) : this._updateTBoxMode(b.TBoxMode.NA), this._tBoxData = null, this._mouseInfo = null, this._visualsArea && (this._visualsArea = null);
    } else
      this.setTransformBoxActive(!1);
  }, b.prototype._geometryChange = function (e) {
    this._transformBox && e.element.hasFlag(n.Flag.Selected) && (e.type == p.GeometryChangeEvent.Type.After || e.type == p.GeometryChangeEvent.Type.Child) && ((this._transformBox.trf || this._transformBox.cTrf) && this._transformBox.applyCenterTransform(), this._updateSelectionTransformBox(null, !0));
  }, b.prototype._selectionChanged = function (e) {
    this.setTransformBoxActive(!0);
  }, b.prototype._getGraphicEditor = function () {
    return this._element.__graphic_editor__;
  }, b.prototype.toString = function () {
    return "[Object GSceneEditor]";
  }, e.exports = b;
}
