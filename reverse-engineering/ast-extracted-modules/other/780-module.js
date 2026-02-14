/**
 * Module 780
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
  var n = i(2), r = i(0), o = i(17), a = i(11), s = i(52), l = i(5), h = i(24), A = i(48), c = i(276), p = i(54), u = i(7), d = i(12), g = i(158), f = i(39), m = i(81), y = i(64), _ = i(14);
  function v() {
    c.call(this);
  }
  r.inherit(v, c), v.MOVE_HANDLE_PART_ID = a.uuid(), v.EXTRA_HANDLE_PART_ID = a.uuid(), v.START_HANDLE_PART_ID = a.uuid(), v.END_HANDLE_PART_ID = a.uuid(), v.prototype._xLeading = !0, v.prototype.activate = function (e) {
    if (e.propName && e.propHolder instanceof n) {
      var t = e.propHolder.getProperty(e.propName, !1, null, e.propTemporary);
      if (this._xLeading = !0, t instanceof g)
        return c.prototype.activate.call(this, e);
    }
    return !1;
  }, v.prototype.paint = function (e, t) {
    var i = this._getAnnotationPoints(), n = this._getPivotPoints();
    if (i && n && 4 == n.length) {
      if (e && !e.isIdentity()) {
        for (var r = 0; r < i.length; ++r)
          i[r] = e.mapPoint(i[r]);
        for (r = 0; r < n.length; ++r)
          n[r] = e.mapPoint(n[r]);
      }
      var a = h.annotationHandles.gradient;
      (s = new p()).addVertex(A.Command.Move, n[1].getX(), n[1].getY()), s.addVertex(A.Command.Line, n[0].getX(), n[0].getY()), s.addVertex(A.Command.Line, n[2].getX(), n[2].getY()), t.canvas.putVertices(s), t.canvas.strokeVertices(t.selectionOutlineColor, h.outlineWidth);
      var s, l = n[3], u = this._xLeading ? n[1] : n[2];
      l = c.alignHandlePoint(l, a.outlineWidth), u = c.alignHandlePoint(u, a.outlineWidth), (s = new p()).addVertex(A.Command.Move, l.getX(), l.getY()), s.addVertex(A.Command.Line, u.getX(), u.getY()), t.canvas.putVertices(s), t.canvas.strokeVertices(new o(o.parseCSSColor(a.lineShadowColor)), a.outlineWidth + 2 * _.getScreenDPI(), null, null, null, null, 0.6), t.canvas.strokeVertices(o.WHITE, a.outlineWidth);
      var d = this._gradient.getStops();
      d.length && 0 == d[0].position || this._paintCross(l, t), d.length && 1 == d[d.length - 1].position || this._paintCross(u, t), m.paintAnnotation(t, null, this._xLeading ? n[2] : n[1], a.type, !1, a.size, o.WHITE, o.WHITE, a.outlineWidth, a.shadowColor);
      var g = null;
      for (r = 0; r < i.length; ++r) {
        this._partSelection && this._partSelection.length && this._partSelection[0].idx == r ? g = r : m.paintAnnotation(t, null, i[r], a.type, !1, a.size, o.WHITE, o.WHITE, a.outlineWidth, a.shadowColor);
      }
      null !== g && m.paintAnnotation(t, null, i[g], a.type, !1, a.sizeBig, o.WHITE, d[g].color, a.outlineWidth, a.shadowColor);
    }
    c.prototype.paint.call(this, e, t);
  }, v.prototype.getPartInfoAt = function (e, t, i, n) {
    var r = null;
    if (this._iterateAnnotations(function (i, n) {
        if (m.getAnnotationBBox(t, i, h.annotationHandles.gradient.size, !1).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e) && (r = new f.PartInfo(this, {
            type: c.STOP_HANDLE_PART_ID,
            idx: n
          }, { noEditorSelectionChangedEvent: !0 }, !0, !0), this._partSelection && this._partSelection.length && this._partSelection[0].idx == n))
          return !0;
      }.bind(this)), r)
      return r;
    var o = this._getPivotPoints();
    if (o && 4 == o.length) {
      var a = this._xLeading ? o[2] : o[1], s = this._xLeading ? o[1] : o[2], l = this._gradient.getStops();
      if (m.getAnnotationBBox(t, a, h.annotationHandles.gradient.size, !1).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e))
        r = new f.PartInfo(this, v.EXTRA_HANDLE_PART_ID, {
          point: a,
          noEditorSelectionChangedEvent: !0
        }, !0, !0);
      else if (l.length && 1 == l[l.length - 1].position || !m.getAnnotationBBox(t, s, h.annotationHandles.gradient.size, !1).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e))
        if (l.length && 0 == l[0].position || !m.getAnnotationBBox(t, o[3], h.annotationHandles.gradient.size, !1).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e)) {
          var A = [], p = t ? t.inverted().mapPoint(e) : e, u = n;
          if (t && !t.isIdentity()) {
            var g = t.getScaleFactor();
            u = g ? n / g : n;
          }
          d.sqrSegmentDist(o[3].getX(), o[3].getY(), s.getX(), s.getY(), p.getX(), p.getY(), A) <= u * u ? r = new f.PartInfo(this, {
            type: c.PLUS_STOP_PART_ID,
            pos: A[0]
          }, { noEditorSelectionChangedEvent: !0 }, !0, !0) : d.sqrSegmentDist(o[0].getX(), o[0].getY(), o[1].getX(), o[1].getY(), p.getX(), p.getY(), A) <= u * u ? r = new f.PartInfo(this, v.MOVE_HANDLE_PART_ID, {
            noEditorSelectionChangedEvent: !0,
            point: d.getPointAtSegment(o[0].getX(), o[0].getY(), o[1].getX(), o[1].getY(), A[0]),
            origTransformInv: this._getCompositeTransform(!0).inverted()
          }, !0, !1) : d.sqrSegmentDist(o[0].getX(), o[0].getY(), o[2].getX(), o[2].getY(), p.getX(), p.getY(), A) <= u * u && (r = new f.PartInfo(this, v.MOVE_HANDLE_PART_ID, {
            noEditorSelectionChangedEvent: !0,
            point: d.getPointAtSegment(o[0].getX(), o[0].getY(), o[2].getX(), o[2].getY(), A[0]),
            origTransformInv: this._getCompositeTransform(!0).inverted()
          }, !0, !1));
        } else
          r = new f.PartInfo(this, v.START_HANDLE_PART_ID, {
            point: o[3],
            noEditorSelectionChangedEvent: !0
          }, !0, !1);
      else
        r = new f.PartInfo(this, v.END_HANDLE_PART_ID, {
          point: s,
          noEditorSelectionChangedEvent: !0
        }, !0, !1);
    }
    return r;
  }, v.prototype.updatePartSelection = function (e, t, i) {
    var n = t && t.length ? t[0] : null, r = null;
    if (n && n === v.EXTRA_HANDLE_PART_ID) {
      this._xLeading = !this._xLeading;
      var o = this._gradient.getStops();
      o && o.length && 1 == o[o.length - 1].position ? (r = new f.PartInfo(this, {
        type: c.STOP_HANDLE_PART_ID,
        idx: o.length - 1
      }, { noEditorSelectionChangedEvent: !0 }, !0, !0), c.prototype.updatePartSelection.call(this, !1, [r.id], i)) : r = new f.PartInfo(this, v.END_HANDLE_PART_ID, {
        point: n.point,
        noEditorSelectionChangedEvent: !0
      }, !0, !1), this.requestInvalidation();
    } else
      r = c.prototype.updatePartSelection.call(this, !1, n ? [n] : null, i);
    if (r)
      return r;
  }, v.prototype.movePart = function (e, t, i, n, r, o, a) {
    c.prototype.movePart.call(this, e, t, i, n, r, o, a);
    var s = i, h = this._gradient.getStops(), A = this._getPivotPoints();
    if (e && e.type === c.STOP_HANDLE_PART_ID && 0 == e.idx && h.length && 0 == h[0].position || e === v.START_HANDLE_PART_ID) {
      if (y.modifiers.metaKey || (s = this._snapPosition(s)), o && A) {
        var p = A[0];
        s = this._constrainPosition(s, n.inverted(), null, p);
      }
      if (s = n.mapPoint(s), G = this._getCompositeTransform(!0).inverted()) {
        if (s = G.mapPoint(s), !d.isEqualEps(s.getX(), this._gradient._cx) || !d.isEqualEps(s.getY(), this._gradient._cy)) {
          var g = d.ptSqrDist(s.getX(), s.getY(), this._gradient._cx, this._gradient._cy), f = this._gradient._scale * this._gradient._scale;
          if (g > f || d.isEqualEps(f, g)) {
            var m = this._gradient._scale / Math.sqrt(g) - 0.001;
            s = d.getPointAtSegment(this._gradient._cx, this._gradient._cy, s.getX(), s.getY(), m);
          }
        }
        this._gradient._fx = s.getX(), this._gradient._fy = s.getY(), this._propHolder.setProperty(this._propName, this._gradient.clone(), !1, !1, !0);
      }
    } else if (!this._xLeading && e && (e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx == h.length - 1 && 1 == h[h.length - 1].position || e === v.END_HANDLE_PART_ID)) {
      y.modifiers.metaKey || (s = this._snapPosition(s));
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(!0).inverted()) {
        s = G.mapPoint(s);
        var _ = new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), b = (this._gradient._cy - s.getY()) / this._gradient._scale, C = s.getY() - this._gradient._cy;
        d.isEqualEps(C, 0) && (C = d.defaultEps);
        var w = (s.getX() - _.getX()) / C, E = new u().translated(-this._gradient._cx, -this._gradient._cy).scaled(1, b).multiplied(new u(1, 0, w, 1, 0, 0)).translated(this._gradient._cx, this._gradient._cy);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), !1, !1, !0));
      }
    } else if (this._xLeading && e && (e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx == h.length - 1 && 1 == h[h.length - 1].position || e === v.END_HANDLE_PART_ID)) {
      if (y.modifiers.metaKey || (s = this._snapPosition(s)), o)
        if (A = this._getPivotPoints()) {
          p = A[0];
          s = this._constrainPosition(s, n.inverted(), null, p);
        }
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(!0).inverted()) {
        s = G.mapPoint(s);
        _ = new l(this._gradient._cx + this._gradient._scale, this._gradient._cy);
        var B = (Q = s.getX() - this._gradient._cx) / this._gradient._scale;
        d.isEqualEps(Q, 0) && (Q = d.defaultEps);
        var x = (s.getY() - _.getY()) / Q;
        E = new u().translated(-this._gradient._cx, -this._gradient._cy).scaled(B, 1).multiplied(new u(1, x, 0, 1, 0, 0)).translated(this._gradient._cx, this._gradient._cy);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), !1, !1, !0));
      }
    } else if (e && e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx >= 0 && e.idx <= h.length - 1 && A && 4 == A.length) {
      var P = A[3], S = this._xLeading ? A[1] : A[2], T = n ? n.inverted() : null;
      if (T && (P = T.mapPoint(P), S = T.mapPoint(S)), s = d.getVectorProjection(P.getX(), P.getY(), S.getX(), S.getY(), s.getX(), s.getY(), !0, !0), s = n ? n.mapPoint(s) : s, G = this._getCompositeTransform(!0).inverted()) {
        s = G.mapPoint(s);
        var I = new l(this._gradient._fx, this._gradient._fy), F = this._xLeading ? new l(this._gradient._cx + this._gradient._scale, this._gradient._cy) : new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), R = d.ptDist(s.getX(), s.getY(), I.getX(), I.getY()), D = d.ptDist(F.getX(), F.getY(), I.getX(), I.getY()), k = D ? R / D : 0;
        d.isEqualEps(k, 1, c.DEFAULT_EPS) ? k = 1 : d.isEqualEps(k, 0, c.DEFAULT_EPS) && (k = 0), h[e.idx].position = k, this._synchIdx(e), this._propHolder.setProperty(this._propName, this._gradient.clone(), !1, !1, !0);
      }
    } else if (e === v.MOVE_HANDLE_PART_ID) {
      var G;
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(!0).inverted()) {
        s = G.mapPoint(s);
        _ = t.origTransformInv.mapPoint(t.point);
        var Q = s.getX() - _.getX();
        C = s.getY() - _.getY(), E = new u(1, 0, 0, 1, Q, C);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), !1, !1, !0));
      }
    }
  }, v.prototype.getCursor = function (e, t) {
    var i = c.prototype.getCursor.call(this, e, t);
    return i || (e === v.MOVE_HANDLE_PART_ID ? s.SelectCross : null);
  }, v.prototype.getCustomBBox = function (e, t) {
    var i = c.prototype.getCustomBBox.call(this, e, t), n = this._getPivotPoints();
    if (n && n.length)
      for (var r = 1; r < n.length; ++r) {
        var o = m.getAnnotationBBox(e, n[r], h.annotationHandles.gradient.size, !0);
        i = i ? i.united(o) : o;
      }
    return i;
  }, v.prototype._getAnnotationPoints = function () {
    for (var e = this._getGradientPoints(), t = this._getCompositeTransform(!0), i = 0; i < e.length; ++i)
      e[i] = t.mapPoint(e[i]);
    return e;
  }, v.prototype._getPivotPoints = function () {
    var e = [];
    e[0] = new l(this._gradient._cx, this._gradient._cy), e[1] = new l(this._gradient._cx + this._gradient._scale, this._gradient._cy), e[2] = new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), e[3] = new l(this._gradient._fx, this._gradient._fy);
    for (var t = this._getCompositeTransform(!0), i = 0; i < e.length; ++i)
      e[i] = t.mapPoint(e[i]);
    return e;
  }, v.prototype._getGradientPoints = function () {
    for (var e = [], t = this._gradient.getStops(), i = this._xLeading ? new l(this._gradient._cx + this._gradient._scale, this._gradient._cy) : new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), n = new l(this._gradient._fx, this._gradient._fy), r = i.getX() - n.getX(), o = i.getY() - n.getY(), a = 0; a < t.length; ++a) {
      var s = new l(this._gradient._fx + r * t[a].position, this._gradient._fy + o * t[a].position);
      e.push(s);
    }
    return e;
  }, v.prototype.toString = function () {
    return "[Object GRadialGradientEditor]";
  }, e.exports = v;
}
