/**
 * Module 329
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
  var n = require(11) /* GUtil */, r = require(5) /* GPoint */, o = require(39) /* PartInfo */, a = require(52) /* module */, s = require(24) /* GEditorOptions */, l = require(59) /* GVertexInfo */, h = require(0) /* GObject */, A = require(17) /* GRGBColor */, c = require(330) /* GRectangleEditor */, p = require(56) /* GShape */, u = (require(22) /* GElement */, require(45) /* GPathBase */), d = require(73) /* GRectangle */, g = require(6) /* GRect */, f = require(54) /* GVertexContainer */, m = require(7) /* GTransform */, y = require(82) /* SavePoint */, _ = require(63) /* GVertexTransformer */, v = require(36) /* PartsPropertyVals */, b = require(66) /* EdTransformOptions */, C = require(48) /* GVertex */, w = require(95) /* GImage */, E = require(12) /* GMath */, B = require(229) /* GHitResult */, x = require(14) /* GPaintCanvas */, P = require(9) /* GLocale */, S = require(47) /* GLocaleKey */;
  function T(e) {
    c.call(this, e);
  }
  h.inherit(T, c), v.exports(T, w);
  var I = x.getScreenDPI();
  T.Annots = {
    Width: 5 * I,
    MiddleLength: 30 * I,
    AngleLength: 20 * I
  }, T.IMAGEINTERNAL_PART_ID = n.uuid(), T.CROPFRAME_PART_ID = n.uuid(), T.ImageBoxEditor = function (e) {
    b.call(this), this._image = e, this._flags |= o.Flag.BackEditor, this._alignment = b.OutlineAlignment.Outside, this.removeFlag(b.Flag.ResizeAll | b.Flag.RotateCorners | b.Flag.RotateHandle);
  }, h.inherit(T.ImageBoxEditor, b), T.ImageBoxEditor.prototype._image = null, T.ImageBoxEditor.prototype._preTransform = null, T.ImageBoxEditor.prototype.getBox = function () {
    return new g(0, 0, this._image.getWidth(), this._image.getHeight());
  }, T.ImageBoxEditor.prototype.getBoxTransform = function () {
    return this._image.getImageTransform();
  }, T.ImageBoxEditor.prototype.getObjectNameModified = function () {
    return "Image";
  }, T.ImageBoxEditor.prototype.requestInvalidation = function (e) {
    this._image.getScene() && y.getEditor(this._image.getScene()).requestInvalidation(this, e);
  }, T.ImageBoxEditor.prototype._showOutline = function () {
    return true;
  }, T.ImageBoxEditor.prototype.transformBox = function (e, t) {
    var i = this.getBox();
    i && !i.isEmpty() ? (this.requestInvalidation(), t && (this._storedMoveData = t.storedMoveData), this._preTransform = e, this.requestInvalidation()) : this.edTransform(e, null, null, t);
  }, T.ImageBoxEditor.prototype._paintOutline = function (e, t, i, n, r) {
    var o = this.getBox();
    if (o) {
      var a = e, s = this.getBoxTransform();
      a = s ? s.multiplied(a) : a, a = this._preTransform ? this._preTransform.multiplied(a) : a, this._paintTransformedQuadrilateral(a, o, t, n);
    }
  }, T.ImageBoxEditor.prototype._showRotationHandle = function () {
    return this._showAnnotations() && s.resizeHandles && this.hasFlag(b.Flag.RotateHandle) && s.rotateHandle;
  }, T.ImageBoxEditor.prototype.getBBox = function (e) {
    if (this.hasFlag(o.Flag.Selected)) {
      var module = e;
      this._transform && (module = this._transform.multiplied(e));
      var require = this.getBox();
      if (require && !require.isEmpty()) {
        var n = this.getBoxTransform();
        n && (module = n.multiplied(module)), this._preTransform && (module = this._preTransform.multiplied(module)), require = module.mapRect(require);
        var r = this.getCustomBBox(e, false);
        r && (require = require.united(r));
        var a = this.getBBoxMargin();
        require = require.expanded(a, a, a, a);
      }
      return require;
    }
    return null;
  }, T.ImageBoxEditor.prototype._applyPartMove = function (e, t, i, n) {
    e !== b.RESIZE_HANDLE_PART_ID && e !== b.ROTATION_HANDLE_PART_ID || (this._preTransform && !this._preTransform.isIdentity() ? (this._image.preTransformImage(this._preTransform), this._preTransform = null) : this._transform && !this._transform.isIdentity() && this._image.transformImage(this._transform), this.resetTransform()), b.prototype._applyPartMove.call(this, e, t, i, n);
  }, T.prototype._editMode = false, T.prototype.initialSetup = function (e) {
  }, T.prototype.createElementPreview = function () {
    if (!this._elementPreview) {
      var exports = this._element.getSourceBBox();
      this._setElementPreview(new d(exports.getX(), exports.getY(), exports.getWidth(), exports.getHeight())), this._elementPreview.transferProperties(this._element, [
        p.GeometryProperties,
        d.GeometryProperties,
        u.MetaProperties
      ]), this._elementPreview.setProperty("csc", !this._editMode);
    }
  }, T.prototype.canApplyTransform = function () {
    return this._preTransform && this._preTransform.invertible() || this._elementPreview && this._elementPreview.getTransform().invertible() || c.prototype.canApplyTransform.call(this);
  }, T.prototype._applyTransform = function (e, t, i, n) {
    this._preTransform && !this._preTransform.isIdentity() ? (e.preTransform(this._preTransform, t, i), b.prototype._applyTransform.call(this)) : v.prototype._applyTransform.call(this, e, t, i, n);
  }, T.prototype.hasSelectionEditing = function () {
    return true;
  }, T.prototype.setEditMode = function (e, t, i, n) {
    if (this._editMode !== e || t)
      if (this._editMode = e, this._element.setProperties([
          "dblMode",
          "csc"
        ], [
          e,
          !e
        ]), this._elementPreview && this._elementPreview.setProperty("csc", !this._editMode), this._editMode && !this._imgBoxEditor) {
        var r = this._element.getTransform(), a = this._element.getImageTransform();
        if (i && s.imageCropDistance && (!r && !a || m.equals(r, a, 1e-11))) {
          var l = this._element.getSourceBBox(), h = r, c = n || 1, p = s.imageCropDistance / c, u = l.getSide(g.Side.TOP_LEFT), d = l.getSide(g.Side.BOTTOM_LEFT), f = l.getSide(g.Side.BOTTOM_RIGHT);
          h && (u = h.mapPoint(u), d = h.mapPoint(d), f = h.mapPoint(f));
          var _ = E.pointToLineDist(d.getX(), d.getY(), f.getX(), f.getY(), u.getX(), u.getY()), v = E.pointToLineDist(d.getX(), d.getY(), u.getX(), u.getY(), f.getX(), f.getY());
          if (_ >= 3 * p && v >= 3 * p) {
            var b = (_ - 2 * p) / _, C = (v - 2 * p) / v, w = l.getSide(g.Side.CENTER), B = new m(1, 0, 0, 1, -w.getX(), -w.getY()).scaled(C, b).translated(w.getX(), w.getY()), x = this._element.getScene(), I = x ? y.getEditor(x) : null;
            I && I.beginTransaction();
            try {
              this._element.setProperty("trf", h ? B.multiplied(h) : B);
            } finally {
              I && I.commitTransaction(P.get(new S("GImageEditor", "action.crop-image")));
            }
          }
        }
        this._imgBoxEditor = new T.ImageBoxEditor(this._element), this.insertEditor(this._imgBoxEditor, this._editors && this._editors.length ? this._editors[0] : null), this._imgBoxEditor.setFlag(o.Flag.Selected), this._imgBoxEditor.setColor(new A([
          0,
          255,
          168
        ])), this._imgBoxEditor._rotCornerDist *= 2;
      } else if (!this._editMode && this._imgBoxEditor) {
        this._imgBoxEditor.requestInvalidation();
        var F = this._imgBoxEditor;
        this._imgBoxEditor = null, this.removeEditor(F, true);
      }
  }, T.prototype.removeFlag = function (e) {
    0 != (this._flags & e) && 0 != (e & o.Flag.Selected) && this.setEditMode(false), c.prototype.removeFlag.call(this, e);
  }, T.prototype.getBBox = function (e) {
    var t = c.prototype.getBBox.call(this, e);
    if (this._imgBoxEditor) {
      var require = this._imgBoxEditor.getBBox(e);
      require && (t = t ? t.united(require) : require);
    }
    return t;
  }, T.prototype.movePart = function (e, t, i, n, r, a, s) {
    var l = c.prototype.movePart.call(this, e, t, i, n, r, a, s);
    if (e === T.CROPFRAME_PART_ID || e === T.IMAGEINTERNAL_PART_ID) {
      var h = n.mapPoint(i), A = n.mapPoint(t.point), p = h.subtract(A), u = this;
      e === T.IMAGEINTERNAL_PART_ID && (u = this._imgBoxEditor);
      var d = u.getBox();
      if (d && !d.isEmpty()) {
        if (r) {
          for (var f, y = this; y = y.getParentEditor();)
            if ("function" == typeof y._getGraphicEditor) {
              f = y._getGraphicEditor();
              break;
            }
          if (f) {
            var _ = t.origTrf ? t.origTrf : u.getBoxTransform(), v = (d = _ ? _.mapRect(d) : d).translated(p.getX(), p.getY());
            r.useExclusions(this._element), r.beginMap(f.getMappingScopes());
            var b = r.mapRect(v);
            r.finishMap();
            var C = v.getSide(g.Side.TOP_LEFT), w = b.getSide(g.Side.TOP_LEFT).subtract(C);
            p = p.add(w);
          }
        }
        var E = new m(1, 0, 0, 1, p.getX(), p.getY());
        if (e === T.CROPFRAME_PART_ID)
          this.edTransform(E);
        else if (e === T.IMAGEINTERNAL_PART_ID) {
          this._imgBoxEditor && o.prototype.movePart.call(this._imgBoxEditor, e, t, i, n, r, a, s);
          var B = t.origTrf ? t.origTrf.multiplied(E) : E;
          this._element.setImageTransform(B, false, true);
        }
      }
    }
    return l;
  }, T.prototype._applyPartMove = function (e, t, i, n) {
    e === T.CROPFRAME_PART_ID ? this.canApplyTransform() ? (this._prepareApplyTransform(this._element), this._applyTransform(this._element)) : this.resetTransform() : e === T.IMAGEINTERNAL_PART_ID && (this._element.setImageTransform(this._element.getImageTransform(), true), this._imgBoxEditor && o.prototype.resetTransform.call(this._imgBoxEditor)), c.prototype._applyPartMove.call(this, e, t, i, n);
  }, T.prototype._paintResizeHandles = function (e, t) {
    this._editMode ? this._iterateCropHandles(e, function (e, i, n) {
      t.canvas.putVertices(e), t.canvas.fillVertices(t.selectionOutlineColor);
    }) : c.prototype._paintResizeHandles.call(this, e, t);
  }, T.prototype.getCursor = function (e, t) {
    return e === T.IMAGEINTERNAL_PART_ID ? a.SelectCross : e === b.ROTATION_HANDLE_PART_ID && this._editMode ? a.SelectSmallRotateRound : c.prototype.getCursor(e, t);
  }, T.prototype.getPartInfoAt = function (e, t, i, n) {
    var r = c.prototype.getPartInfoAt.call(this, e, t, i, n);
    return r || (this._editMode && this.hasFlag(o.Flag.Selected) ? this._getInternalPartInfoAt(e, t, n) : null);
  }, T.prototype._getInternalPartInfoAt = function (e, t, i) {
    var n = [], r = this.getBoxQuadrilateral(t);
    r && n.push(r), this._imgBoxEditor && (r = this._imgBoxEditor.getBoxQuadrilateral(t)) && n.push(r);
    for (var a = 0; a < n.length; ++a) {
      r = n[a];
      var s = new f();
      s.addVertex(C.Command.Move, r[0].getX(), r[0].getY());
      for (var h = 1; h < 4; ++h)
        s.addVertex(C.Command.Line, r[h].getX(), r[h].getY());
      s.addVertex(C.Command.Close);
      var A = new B();
      if (l.hitTest(e.getX(), e.getY(), s, 0, true, A))
        return new o.PartInfo(this, T.IMAGEINTERNAL_PART_ID, {
          point: e,
          origTrf: this._element.getImageTransform()
        }, true, false);
    }
    return null;
  }, T.prototype._getPartInfoAt = function (e, t, i) {
    var n = c.prototype._getPartInfoAt.call(this, e, t, i);
    return n || (this._editMode && this.hasFlag(o.Flag.Selected) && (n = this._getOutlinePartInfoAt(e, t, i)), n);
  }, T.prototype._getOutlinePartInfoAt = function (e, t, i) {
    var n = this.getBoxQuadrilateral(t), r = new f();
    r.addVertex(C.Command.Move, n[0].getX(), n[0].getY());
    for (var a = 1; a < 4; ++a)
      r.addVertex(C.Command.Line, n[a].getX(), n[a].getY());
    r.addVertex(C.Command.Close);
    var s = new B();
    return l.hitTest(e.getX(), e.getY(), r, 2 * i, false, s) ? new o.PartInfo(this, T.CROPFRAME_PART_ID, { point: e }, true, false) : null;
  }, T.prototype._getResizePartInfoAt = function (e, t, i) {
    if (!this._editMode)
      return c.prototype._getResizePartInfoAt.call(this, e, t, i);
    var n = null;
    return this._iterateCropHandles(t, function (t, i, r, a) {
      var h = new B();
      if (l.hitTest(e.getX(), e.getY(), t, 2 * s.annotPickDistance, true, h))
        return n = new o.PartInfo(this, b.RESIZE_HANDLE_PART_ID, {
          side: r,
          point: i,
          resizeSegment: a
        }, true, false), true;
    }.bind(this)), n || undefined;
  }, T.prototype._iterateCropHandles = function (e, t) {
    var i = this.getBox();
    if (i && !i.isEmpty()) {
      p = (p = this.getBoxTransform()) || new m();
      var n = {
          tl: (p = e ? p.multiplied(e) : p).mapPoint(i.getSide(g.Side.TOP_LEFT)),
          tc: p.mapPoint(i.getSide(g.Side.TOP_CENTER)),
          tr: p.mapPoint(i.getSide(g.Side.TOP_RIGHT)),
          rc: p.mapPoint(i.getSide(g.Side.RIGHT_CENTER)),
          br: p.mapPoint(i.getSide(g.Side.BOTTOM_RIGHT)),
          bc: p.mapPoint(i.getSide(g.Side.BOTTOM_CENTER)),
          bl: p.mapPoint(i.getSide(g.Side.BOTTOM_LEFT)),
          lc: p.mapPoint(i.getSide(g.Side.LEFT_CENTER)),
          c: p.mapPoint(i.getSide(g.Side.CENTER))
        }, r = E.getVectorProjection(n.bl.getX(), n.bl.getY(), n.br.getX(), n.br.getY(), n.tl.getX(), n.tl.getY()), o = E.ptDist(n.tl.getX(), n.tl.getY(), r.getX(), r.getY());
      r = E.getVectorProjection(n.tr.getX(), n.tr.getY(), n.br.getX(), n.br.getY(), n.tl.getX(), n.tl.getY());
      var a = E.ptDist(n.tl.getX(), n.tl.getY(), r.getX(), r.getY()), s = E.ptDist(n.tl.getX(), n.tl.getY(), n.bl.getX(), n.bl.getY()), l = E.ptDist(n.tl.getX(), n.tl.getY(), n.tr.getX(), n.tr.getY()), h = T.Annots.AngleLength + T.Annots.Width / 1.5 + T.Annots.Width, A = 2 * T.Annots.AngleLength + 2;
      if (o >= h && a >= h && s >= A && l >= A) {
        var c, p, u = [];
        this.hasFlag(b.Flag.ResizeEdges) && (c = new f(), this._constructAngleAnnot(n.bl, n.tl, n.tr, s, l, c) && (u.push({
          vertices: c,
          point: n.tl,
          side: g.Side.TOP_LEFT
        }), p = new m().translated(-n.tl.getX(), -n.tl.getY()).rotated(Math.PI).translated(n.br.getX(), n.br.getY()), u.push({
          vertices: new _(c, p),
          point: n.br,
          side: g.Side.BOTTOM_RIGHT
        })), c = new f(), this._constructAngleAnnot(n.tl, n.tr, n.br, l, s, c) && (u.push({
          vertices: c,
          point: n.tr,
          side: g.Side.TOP_RIGHT
        }), p = new m().translated(-n.tr.getX(), -n.tr.getY()).rotated(Math.PI).translated(n.bl.getX(), n.bl.getY()), u.push({
          vertices: new _(c, p),
          point: n.bl,
          side: g.Side.BOTTOM_LEFT
        }))), this.hasFlag(b.Flag.ResizeCenters) && (l > A + T.Annots.MiddleLength + 2 && o / 2 > 2 * T.Annots.Width + 2 && a / 2 > T.Annots.MiddleLength / 2 + T.Annots.Width + 2 && (c = new f(), this._constructMiddleAnnot(n.tl, n.tc, n.tr, l, c) && (u.push({
          vertices: c,
          point: n.tc,
          side: g.Side.TOP_CENTER
        }), p = new m().translated(-n.tc.getX(), -n.tc.getY()).rotated(Math.PI).translated(n.bc.getX(), n.bc.getY()), u.push({
          vertices: new _(c, p),
          point: n.bc,
          side: g.Side.BOTTOM_CENTER
        }))), s > A + T.Annots.MiddleLength + 2 && a / 2 > 2 * T.Annots.Width + 2 && o / 2 > T.Annots.MiddleLength / 2 + T.Annots.Width + 2 && (c = new f(), this._constructMiddleAnnot(n.tr, n.rc, n.br, s, c) && (u.push({
          vertices: c,
          point: n.rc,
          side: g.Side.RIGHT_CENTER
        }), p = new m().translated(-n.rc.getX(), -n.rc.getY()).rotated(Math.PI).translated(n.lc.getX(), n.lc.getY()), u.push({
          vertices: new _(c, p),
          point: n.lc,
          side: g.Side.LEFT_CENTER
        }))));
        for (var d = E.getRotationSegment(n.c, n.tc), y = E.getRotationSegment(n.c, n.rc), v = (y >= 3 ? y : d - y >= 4 ? y + 8 : y) > (d >= 3 ? d : y - d >= 4 ? d + 8 : d), C = 0; C < u.length; ++C) {
          var w = u[C], B = this._getResizeSegment(w.side, d, y, v);
          if (true === t(w.vertices, w.point, w.side, B))
            break;
        }
      }
    }
  }, T.prototype._constructAngleAnnot = function (e, t, i, n, o, a) {
    var s = false;
    if (n > 0 && o > 0) {
      var l = E.getPointAtLength(t.getX(), t.getY(), e.getX(), e.getY(), T.Annots.AngleLength), h = E.getPointAtLength(t.getX(), t.getY(), i.getX(), i.getY(), T.Annots.AngleLength), A = t.getX() - e.getX(), c = t.getY() - e.getY(), p = new r(-c / n * T.Annots.Width, A / n * T.Annots.Width), u = l.add(p), d = t.add(p), g = t.getX() - i.getX(), f = t.getY() - i.getY(), m = new r(f / o * T.Annots.Width, -g / o * T.Annots.Width), y = h.add(m), _ = t.add(m), v = E.getIntersectionPoint(u.getX(), u.getY(), d.getX(), d.getY(), y.getX(), y.getY(), _.getX(), _.getY());
      v ? (a.addVertex(C.Command.Move, l.getX(), l.getY()), a.addVertex(C.Command.Line, t.getX(), t.getY()), a.addVertex(C.Command.Line, h.getX(), h.getY()), a.addVertex(C.Command.Line, y.getX(), y.getY()), a.addVertex(C.Command.Line, v.getX(), v.getY()), a.addVertex(C.Command.Line, u.getX(), u.getY()), a.addVertex(C.Command.Close), s = true) : (v = E.getIntersectionPoint(l.getX(), l.getY(), u.getX(), u.getY(), h.getX(), h.getY(), y.getX(), y.getY())) ? (a.addVertex(C.Command.Move, l.getX(), l.getY()), a.addVertex(C.Command.Line, t.getX(), t.getY()), a.addVertex(C.Command.Line, h.getX(), h.getY()), a.addVertex(C.Command.Line, v.getX(), v.getY()), a.addVertex(C.Command.Close), s = true) : (a.addVertex(C.Command.Move, l.getX(), l.getY()), a.addVertex(C.Command.Line, t.getX(), t.getY()), a.addVertex(C.Command.Line, h.getX(), h.getY()), a.addVertex(C.Command.Close), s = true);
    }
    return s;
  }, T.prototype._constructMiddleAnnot = function (e, t, i, n, o) {
    var a = false;
    if (n > 0) {
      var s = i.getX() - e.getX(), l = i.getY() - e.getY(), h = new r(-l / n * T.Annots.Width, s / n * T.Annots.Width), A = E.getPointAtLength(t.getX(), t.getY(), e.getX(), e.getY(), T.Annots.MiddleLength / 2), c = A.add(h), p = E.getPointAtLength(t.getX(), t.getY(), i.getX(), i.getY(), T.Annots.MiddleLength / 2), u = p.add(h);
      o.addVertex(C.Command.Move, A.getX(), A.getY()), o.addVertex(C.Command.Line, p.getX(), p.getY()), o.addVertex(C.Command.Line, u.getX(), u.getY()), o.addVertex(C.Command.Line, c.getX(), c.getY()), o.addVertex(C.Command.Close), a = true;
    }
    return a;
  }, T.prototype._showResizeHandlesInDetailMode = function () {
    return true;
  }, T.prototype.toString = function () {
    return "[Object GImageEditor]";
  }, exports.exports = T;
}
