/**
 * Module 546
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
  var n = i(59), r = i(17), o = i(11), a = i(141), s = i(5), l = i(24), h = i(48), A = i(6), c = i(54), p = i(7), u = i(12), d = i(39), g = i(81), f = i(229), m = i(36), y = i(542), _ = i(749), v = i(750), b = i(543);
  function C(e, t, i, n, r) {
    var o = e.getSide(A.Side.TOP_LEFT);
    this.tlx = o.getX(), this.tly = o.getY();
    var a = e.getSide(A.Side.TOP_RIGHT);
    this.trx = a.getX(), this.try = a.getY();
    var s = e.getSide(A.Side.BOTTOM_RIGHT);
    this.brx = s.getX(), this.bry = s.getY();
    var l = e.getSide(A.Side.BOTTOM_LEFT);
    this.blx = l.getX(), this.bly = l.getY(), this._vertices = new c(), this.cx = t || (this.tlx + this.brx) / 2, this.cy = i || (this.tly + this.bry) / 2, this._tBoxFlags = n || C.TBoxFlag.Rotate | C.TBoxFlag.Skew | C.TBoxFlag.Move | C.TBoxFlag.Resize, this._scene = r;
  }
  C.TRANSFORM_MARGIN = 0, C.Handles = {
    TOP_LEFT: 0,
    TOP_CENTER: 1,
    TOP_RIGHT: 2,
    RIGHT_CENTER: 3,
    BOTTOM_RIGHT: 4,
    BOTTOM_CENTER: 5,
    BOTTOM_LEFT: 6,
    LEFT_CENTER: 7,
    ROTATION_CENTER: 8,
    SKEW_HORIZONTAL: 9,
    SKEW_VERTICAL: 10,
    ROTATE: 11
  }, C.HandlesToSide = [
    A.Side.TOP_LEFT,
    A.Side.TOP_CENTER,
    A.Side.TOP_RIGHT,
    A.Side.RIGHT_CENTER,
    A.Side.BOTTOM_RIGHT,
    A.Side.BOTTOM_CENTER,
    A.Side.BOTTOM_LEFT,
    A.Side.LEFT_CENTER
  ], C.OUTLINE = o.uuid(), C.INSIDE = o.uuid(), C.OUTSIDE = o.uuid(), C.FAR_OUTSIDE = o.uuid(), C.OUTSIDE_TOLERANCE = 100, C.TBoxFlag = {
    Rotate: 1,
    Skew: 2,
    Resize: 4,
    Move: 8
  }, C.isSkewing = function (e) {
    return e === C.OUTLINE || e === C.Handles.SKEW_HORIZONTAL || e === C.Handles.SKEW_VERTICAL;
  }, C.isRotating = function (e) {
    return e === C.OUTSIDE || e === C.Handles.ROTATE;
  }, C.prototype.tlx = null, C.prototype.tly = null, C.prototype.trx = null, C.prototype.try = null, C.prototype.brx = null, C.prototype.bry = null, C.prototype.blx = null, C.prototype.bly = null, C.prototype.cx = null, C.prototype.cy = null, C.prototype.trf = null, C.prototype.cTrf = null, C.prototype._tBoxFlags = 0, C.prototype._vertices = null, C.prototype._extTransform = null, C.prototype._scene = null, C.prototype.getTransform = function () {
    return this.trf;
  }, C.prototype.setTransform = function (e) {
    this.trf = e;
  }, C.prototype.rewindVertices = function (e) {
    return (null == this._vertices || this._verticesDirty || 0 == this._vertices.getCount()) && (this._vertices.clearVertices(), this._generateVertices(), this._verticesDirty = !1), this._vertices.rewindVertices(e);
  }, C.prototype.readVertex = function (e) {
    return this._vertices.readVertex(e);
  }, C.prototype.hasVertexForRead = function () {
    return this._vertices.hasVertexForRead();
  }, C.prototype._calculateGeometryBBox = function () {
    var e = this._getPoint(C.Handles.ROTATION_CENTER), t = e.getX(), i = t, n = e.getY(), r = n, o = [
        C.Handles.TOP_LEFT,
        C.Handles.TOP_RIGHT,
        C.Handles.BOTTOM_RIGHT,
        C.Handles.BOTTOM_LEFT
      ];
    l.annotationHandles.tranformBox.skew && (o = o.concat([
      C.Handles.SKEW_HORIZONTAL,
      C.Handles.SKEW_VERTICAL
    ])), l.annotationHandles.tranformBox.rotate && o.push(C.Handles.ROTATE);
    for (var a = 0; a < o.length; ++a) {
      var s = this._getPoint(o[a]);
      t > s.getX() && (t = s.getX()), i < s.getX() && (i = s.getX()), n > s.getY() && (n = s.getY()), r < s.getY() && (r = s.getY());
    }
    return new A(t, n, i - t, r - n);
  }, C.prototype._calculatePaintBBox = function () {
    var e = this._calculateGeometryBBox();
    if (e) {
      if (this._tBoxFlags & C.TBoxFlag.Resize) {
        var t = l.annotationHandles.tranformBox, i = g.getAnnotationPaintMargin(t.size);
        e = e.expanded(i, i, i, i);
      }
      return e;
    }
    return null;
  }, C.prototype.paint = function (e, t, i) {
    var n = t.canvas.resetTransform();
    this._extTransform = e ? n.multiplied(e) : n, this._verticesDirty = !0;
    var o = l.annotationHandles.tranformBox;
    if (!this._centerOnly) {
      if (!this.rewindVertices(0))
        return;
      var h = new a(this);
      if (t.canvas.putVertices(h), t.canvas.strokeVertices(t.transformBoxOutlineColor, l.outlineWidth), this._isSkewAnnotationEnabled() && this._tBoxFlags & C.TBoxFlag.Skew && (_.paintAnnotation(t, null, this._getPoint(C.Handles.SKEW_HORIZONTAL), 0, t.transformBoxOutlineColor), v.paintAnnotation(t, null, this._getPoint(C.Handles.SKEW_VERTICAL), 0, t.transformBoxOutlineColor)), this._isRotateAnnotationEnabled() && this._tBoxFlags & C.TBoxFlag.Rotate) {
        var A = this._getPoint(C.Handles.BOTTOM_CENTER).subtract(new s(l.outlineWidth / 2, l.outlineWidth / 2)), c = this._getPoint(C.Handles.ROTATE);
        t.canvas.strokeLine(A.getX(), A.getY(), c.getX(), c.getY(), l.outlineWidth, t.transformBoxOutlineColor), y.paintAnnotation(t, null, this._getPoint(C.Handles.ROTATE), 0, t.transformBoxOutlineColor);
      }
      if (this._tBoxFlags & C.TBoxFlag.Resize)
        for (var p = this._collectResizeHandles(e), u = 0; u < p.length; ++u) {
          var d = p[u], f = this._getPoint(d), m = C.HandlesToSide[d];
          m && l.isPreserveAspectRatioEnabledForSide(m) ? b.paintAnnotation(t, null, f, 0, t.transformBoxOutlineColor) : g.paintAnnotation(t, null, f, o.resizeType, o.inverted, o.size, t.transformBoxOutlineColor, r.WHITE, o.outlineWidth, o.shadowColor, o.outsideStroke);
        }
    }
    if (this._tBoxFlags & C.TBoxFlag.Rotate) {
      if (i) {
        A = this._getPoint(C.Handles.LEFT_CENTER), c = this._getPoint(C.Handles.RIGHT_CENTER);
        t.canvas.strokeLine(A.getX(), A.getY(), c.getX(), c.getY(), 1, t.annotationColor, !0);
      }
      g.paintAnnotation(t, null, this._getPoint(C.Handles.ROTATION_CENTER), o.pivotType, o.inverted, o.pivotSize || o.size, t.annotationColor, r.WHITE, o.pivotOutlineWidth, o.shadowColor, o.outsideStroke);
    }
    t.canvas.setTransform(n), this._extTransform = null;
  }, C.prototype.hide = function () {
    this._centerOnly = !0;
  }, C.prototype.show = function () {
    this._centerOnly = !1;
  }, C.prototype.setCenterTransform = function (e) {
    this.cTrf = e;
  }, C.prototype.getPartInfoAt = function (e, t, i, r) {
    var o = null;
    t && (this._extTransform = t, this._verticesDirty = !0);
    var a = l.annotationHandles.tranformBox, s = this._collectResizeHandles(t);
    this._tBoxFlags & C.TBoxFlag.Rotate && s.push(C.Handles.ROTATION_CENTER), this._isSkewAnnotationEnabled() && this._tBoxFlags & C.TBoxFlag.Skew && (s.push(C.Handles.SKEW_HORIZONTAL), s.push(C.Handles.SKEW_VERTICAL));
    for (var h = 0; h < s.length; ++h) {
      var A = this._getPoint(s[h]);
      if (g.getAnnotationBBox(null, A, a.size).expanded(l.annotPickDistance, l.annotPickDistance, l.annotPickDistance, l.annotPickDistance).containsPoint(e)) {
        o = new d.PartInfo(r, s[h], A);
        break;
      }
    }
    var c = new f();
    if (!o && (this._tBoxFlags & C.TBoxFlag.Skew || this._tBoxFlags & C.TBoxFlag.Move) && n.hitTest(e.getX(), e.getY(), this, 2 * i, !0, c))
      if (this._tBoxFlags & C.TBoxFlag.Skew && c.outline) {
        if (!this._isSkewAnnotationEnabled()) {
          var p = c.segment % 2;
          o = new d.PartInfo(r, C.OUTLINE, p);
        }
      } else
        this._tBoxFlags & C.TBoxFlag.Move && (o = new d.PartInfo(r, C.INSIDE, null));
    var u = function () {
      var i = this.getRotationSegment(e, t), n = this._getPoint(C.Handles.LEFT_CENTER), o = this._getPoint(C.Handles.RIGHT_CENTER);
      return new d.PartInfo(r, C.OUTSIDE, {
        rotationSegment: i,
        leftCenter: n,
        rightCenter: o
      });
    }.bind(this);
    if (this._isRotateAnnotationEnabled() && this._tBoxFlags & C.TBoxFlag.Rotate) {
      A = this._getPoint(C.Handles.ROTATE);
      g.getAnnotationBBox(null, A, a.size).expanded(l.annotPickDistance, l.annotPickDistance, l.annotPickDistance, l.annotPickDistance).containsPoint(e) && (o = u());
    }
    return !o && !this._isRotateAnnotationEnabled() && this._tBoxFlags & C.TBoxFlag.Rotate && n.hitTest(e.getX(), e.getY(), this, 2 * C.OUTSIDE_TOLERANCE, !0, c) && (o = u()), o || (o = new d.PartInfo(r, C.FAR_OUTSIDE)), this._extTransform = null, o;
  }, C.prototype.getRotationSegment = function (e, t) {
    var i = t.mapPoint(new s(this.cx, this.cy));
    return u.getRotationSegment(i, e);
  }, C.prototype.calculateTransformation = function (e, t, i, n, r, o, a, h) {
    var c = n.subtract(i), u = c.getX(), d = c.getY(), g = function (e, t, i, n) {
        var o = r.mapPoint(new s(e + u, t + d));
        i && (u = o.getX() - e), n && (d = o.getY() - t);
      }.bind(this);
    if (e.id < 8) {
      var f = [
          A.Side.TOP_LEFT,
          A.Side.TOP_CENTER,
          A.Side.TOP_RIGHT,
          A.Side.RIGHT_CENTER,
          A.Side.BOTTOM_RIGHT,
          A.Side.BOTTOM_CENTER,
          A.Side.BOTTOM_LEFT,
          A.Side.LEFT_CENTER
        ], m = new A(this.tlx, this.tly, this.brx - this.tlx, this.bry - this.tly), y = f[e.id], _ = m.getSide(y);
      return g(_.getX(), _.getY(), !0, !0), l.isPreserveAspectRatioEnabledForSide(y) && (a = !0), p.getResizeTransform(m, y, u, d, a, o);
    }
    if (e.id == C.Handles.ROTATION_CENTER)
      return g(this.cx, this.cy, !0, !0), new p(1, 0, 0, 1, u, d);
    if (!C.isRotating(e.id)) {
      if (C.isSkewing(e.id)) {
        var v = new p(1, 0, 0, 1, -this.cx, -this.cy), b = new p(1, 0, 0, 1, this.cx, this.cy);
        if (a && h) {
          var w = h || 20;
          u = Math.round(u / w) * w, d = Math.round(d / w) * w;
        }
        var E = new p(1, 2 * d / (this.brx - this.tlx), 2 * -u / (this.bry - this.tly), 1, 0, 0);
        return v.multiplied(E).multiplied(b);
      }
      var B = (this.brx - this.tlx) / 3, x = (this.bry - this.tly) / 3, P = this.cx, S = this.cy;
      return i.getX() <= this.tlx + B ? P = this.tlx : i.getX() >= this.tlx + 2 * B && (P = this.brx), i.getY() <= this.tly + x ? S = this.tly : i.getY() >= this.tly + 2 * x && (S = this.bry), g(P, S, !0, !0), new p(1, 0, 0, 1, u, d);
    }
    if (!a && !l.snapRotate)
      return p.getRotationTransform(i.getX(), i.getY(), n.getX(), n.getY(), this.cx, this.cy, a || l.snapRotate, a ? Math.PI / 12 : l.snapRotate ? Math.PI / 180 : null, l.snapRotate ? Math.PI / 45 : null);
    if (e.data && e.data.leftCenter && e.data.rightCenter) {
      var T = t.mapPoint(e.data.leftCenter), I = t.mapPoint(e.data.rightCenter);
      return p.getLineConstrainRotation(i.getX(), i.getY(), n.getX(), n.getY(), this.cx, this.cy, T.getX(), T.getY(), I.getX(), I.getY(), a ? Math.PI / 12 : l.snapRotate ? Math.PI / 180 : null, l.snapRotate ? Math.PI / 45 : null);
    }
  }, C.prototype.applyCenterTransform = function () {
    if (this.trf || this.cTrf) {
      var e = this.cx, t = this.cy, i = this.trf ? this.trf : this.cTrf;
      this.applyCenterTransformAction(i);
      var n = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
      n && n.afterTBoxCenterTransform(this._scene, e, t, this.cx, this.cy);
    }
  }, C.prototype.applyCenterTransformAction = function (e) {
    if (e) {
      var t = e.mapPoint(new s(this.cx, this.cy));
      this.setCenter(t.getX(), t.getY()), this.cTrf = null, this.trf = null;
    }
  }, C.prototype.setCenter = function (e, t) {
    var i = m.getEditor(this._scene);
    i && i.requestInvalidation(), this.cx = e, this.cy = t, i && i.requestInvalidation();
  }, C.prototype._generateVertices = function () {
    this._vertices && 5 == this._vertices.getCount() ? this._vertices.rewindVertices(0) : this._vertices = new c();
    var e = this._getPoint(C.Handles.TOP_LEFT), t = this._getPoint(C.Handles.TOP_RIGHT), i = this._getPoint(C.Handles.BOTTOM_RIGHT), n = this._getPoint(C.Handles.BOTTOM_LEFT);
    this._vertices.addVertex(h.Command.Move, e.getX(), e.getY()), this._vertices.addVertex(h.Command.Line, t.getX(), t.getY()), this._vertices.addVertex(h.Command.Line, i.getX(), i.getY()), this._vertices.addVertex(h.Command.Line, n.getX(), n.getY()), this._vertices.addVertex(h.Command.Close);
  }, C.prototype._getPoint = function (e, t) {
    var i = null, n = function (e, i) {
        var n = i || this.trf, r = this._extTransform;
        return n && !t && (r = r ? n.multiplied(r) : n), r && e && (e = r.mapPoint(e)), e;
      }.bind(this);
    switch (e) {
    case C.Handles.TOP_LEFT:
      i = n(new s(this.tlx, this.tly)), i = new s(i.getX() - C.TRANSFORM_MARGIN, i.getY() - C.TRANSFORM_MARGIN);
      break;
    case C.Handles.TOP_CENTER:
      i = n(new s((this.tlx + this.trx) / 2, (this.tly + this.try) / 2)), i = new s(i.getX(), i.getY() - C.TRANSFORM_MARGIN);
      break;
    case C.Handles.TOP_RIGHT:
      i = n(new s(this.trx, this.try)), i = new s(i.getX() + C.TRANSFORM_MARGIN, i.getY() - C.TRANSFORM_MARGIN);
      break;
    case C.Handles.RIGHT_CENTER:
      i = n(new s((this.trx + this.brx) / 2, (this.try + this.bry) / 2)), i = new s(i.getX() + C.TRANSFORM_MARGIN, i.getY());
      break;
    case C.Handles.BOTTOM_RIGHT:
      i = n(new s(this.brx, this.bry)), i = new s(i.getX() + C.TRANSFORM_MARGIN, i.getY() + C.TRANSFORM_MARGIN);
      break;
    case C.Handles.BOTTOM_CENTER:
      i = n(new s((this.blx + this.brx) / 2, (this.bly + this.bry) / 2)), i = new s(i.getX(), i.getY() + C.TRANSFORM_MARGIN);
      break;
    case C.Handles.BOTTOM_LEFT:
      i = n(new s(this.blx, this.bly)), i = new s(i.getX() - C.TRANSFORM_MARGIN, i.getY() + C.TRANSFORM_MARGIN);
      break;
    case C.Handles.LEFT_CENTER:
      i = n(new s((this.tlx + this.blx) / 2, (this.tly + this.bly) / 2)), i = new s(i.getX() - C.TRANSFORM_MARGIN, i.getY());
      break;
    case C.Handles.ROTATION_CENTER:
      i = n(new s(this.cx, this.cy), this.cTrf);
      break;
    case C.Handles.SKEW_HORIZONTAL:
      i = n(new s((this.tlx + this.trx) / 2, (this.tly + this.try) / 2)), i = new s(i.getX(), i.getY() - C.TRANSFORM_MARGIN - l.annotationHandles.tranformBox.skew.distance - l.annotationHandles.tranformBox.skew.size);
      break;
    case C.Handles.SKEW_VERTICAL:
      i = n(new s((this.trx + this.brx) / 2, (this.try + this.bry) / 2)), i = new s(i.getX() + C.TRANSFORM_MARGIN + l.annotationHandles.tranformBox.skew.distance + l.annotationHandles.tranformBox.skew.size, i.getY());
      break;
    case C.Handles.ROTATE:
      i = n(new s((this.blx + this.brx) / 2, (this.bly + this.bry) / 2)), i = new s(i.getX(), i.getY() + C.TRANSFORM_MARGIN + l.annotationHandles.tranformBox.rotate.distance + l.annotationHandles.tranformBox.rotate.size);
    }
    return i;
  }, C.prototype._collectResizeHandles = function (e) {
    var t = [];
    if (this._tBoxFlags & C.TBoxFlag.Resize) {
      var i = new A(this.tlx, this.tly, this.brx - this.tlx, this.bry - this.tly);
      i = this.trf ? this.trf.mapRect(i) : i;
      var n = e ? e.mapRect(i) : i, r = l.annotationHandles.tranformBox, o = g.getAnnotationPaintMargin(r.size);
      n.getHeight() > 2 * o && n.getWidth() > 2 * o && (t = t.concat([
        C.Handles.TOP_LEFT,
        C.Handles.TOP_RIGHT,
        C.Handles.BOTTOM_LEFT,
        C.Handles.BOTTOM_RIGHT
      ])), n.getHeight() > 3 * o && (t = t.concat([
        C.Handles.RIGHT_CENTER,
        C.Handles.LEFT_CENTER
      ])), n.getWidth() > 3 * o && (t = t.concat([
        C.Handles.TOP_CENTER,
        C.Handles.BOTTOM_CENTER
      ]));
    }
    return t;
  }, C.prototype._isSkewAnnotationEnabled = function () {
    return l.annotationHandles.tranformBox.skew && l.annotationHandles.tranformBox.skew.enabled;
  }, C.prototype._isRotateAnnotationEnabled = function () {
    return l.annotationHandles.tranformBox.rotate && l.annotationHandles.tranformBox.rotate.enabled;
  }, C.prototype.toString = function () {
    return "[GTransformBox]";
  }, e.exports = C;
}
