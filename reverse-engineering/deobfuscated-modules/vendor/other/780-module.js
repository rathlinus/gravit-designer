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

function (exports, module, require) {
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(17) /* GRGBColor */, a = require(11) /* GUtil */, s = require(52) /* module */, l = require(5) /* GPoint */, h = require(24) /* GEditorOptions */, A = require(48) /* GVertex */, c = require(276) /* GGradientStyleEditor */, p = require(54) /* GVertexContainer */, u = require(7) /* GTransform */, d = require(12) /* GMath */, g = require(158) /* GRadialGradient */, f = require(39) /* PartInfo */, m = require(81) /* GEditorAnnotation */, y = require(64) /* GPlatform */, _ = require(14) /* GPaintCanvas */;
  function v() {
    c.call(this);
  }
  r.inherit(v, c), v.MOVE_HANDLE_PART_ID = a.uuid(), v.EXTRA_HANDLE_PART_ID = a.uuid(), v.START_HANDLE_PART_ID = a.uuid(), v.END_HANDLE_PART_ID = a.uuid(), v.prototype._xLeading = true, v.prototype.activate = function (e) {
    if (e.propName && e.propHolder instanceof n) {
      var module = e.propHolder.getProperty(e.propName, false, null, e.propTemporary);
      if (this._xLeading = true, module instanceof g)
        return c.prototype.activate.call(this, e);
    }
    return false;
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
      d.length && 0 == d[0].position || this._paintCross(l, t), d.length && 1 == d[d.length - 1].position || this._paintCross(u, t), m.paintAnnotation(t, null, this._xLeading ? n[2] : n[1], a.type, false, a.size, o.WHITE, o.WHITE, a.outlineWidth, a.shadowColor);
      var g = null;
      for (r = 0; r < i.length; ++r) {
        this._partSelection && this._partSelection.length && this._partSelection[0].idx == r ? g = r : m.paintAnnotation(t, null, i[r], a.type, false, a.size, o.WHITE, o.WHITE, a.outlineWidth, a.shadowColor);
      }
      null !== g && m.paintAnnotation(t, null, i[g], a.type, false, a.sizeBig, o.WHITE, d[g].color, a.outlineWidth, a.shadowColor);
    }
    c.prototype.paint.call(this, e, t);
  }, v.prototype.getPartInfoAt = function (e, t, i, n) {
    var r = null;
    if (this._iterateAnnotations(function (i, n) {
        if (m.getAnnotationBBox(t, i, h.annotationHandles.gradient.size, false).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e) && (r = new f.PartInfo(this, {
            type: c.STOP_HANDLE_PART_ID,
            idx: n
          }, { noEditorSelectionChangedEvent: true }, true, true), this._partSelection && this._partSelection.length && this._partSelection[0].idx == n))
          return true;
      }.bind(this)), r)
      return r;
    var o = this._getPivotPoints();
    if (o && 4 == o.length) {
      var a = this._xLeading ? o[2] : o[1], s = this._xLeading ? o[1] : o[2], l = this._gradient.getStops();
      if (m.getAnnotationBBox(t, a, h.annotationHandles.gradient.size, false).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e))
        r = new f.PartInfo(this, v.EXTRA_HANDLE_PART_ID, {
          point: a,
          noEditorSelectionChangedEvent: true
        }, true, true);
      else if (l.length && 1 == l[l.length - 1].position || !m.getAnnotationBBox(t, s, h.annotationHandles.gradient.size, false).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e))
        if (l.length && 0 == l[0].position || !m.getAnnotationBBox(t, o[3], h.annotationHandles.gradient.size, false).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e)) {
          var A = [], p = t ? t.inverted().mapPoint(e) : e, u = n;
          if (t && !t.isIdentity()) {
            var g = t.getScaleFactor();
            u = g ? n / g : n;
          }
          d.sqrSegmentDist(o[3].getX(), o[3].getY(), s.getX(), s.getY(), p.getX(), p.getY(), A) <= u * u ? r = new f.PartInfo(this, {
            type: c.PLUS_STOP_PART_ID,
            pos: A[0]
          }, { noEditorSelectionChangedEvent: true }, true, true) : d.sqrSegmentDist(o[0].getX(), o[0].getY(), o[1].getX(), o[1].getY(), p.getX(), p.getY(), A) <= u * u ? r = new f.PartInfo(this, v.MOVE_HANDLE_PART_ID, {
            noEditorSelectionChangedEvent: true,
            point: d.getPointAtSegment(o[0].getX(), o[0].getY(), o[1].getX(), o[1].getY(), A[0]),
            origTransformInv: this._getCompositeTransform(true).inverted()
          }, true, false) : d.sqrSegmentDist(o[0].getX(), o[0].getY(), o[2].getX(), o[2].getY(), p.getX(), p.getY(), A) <= u * u && (r = new f.PartInfo(this, v.MOVE_HANDLE_PART_ID, {
            noEditorSelectionChangedEvent: true,
            point: d.getPointAtSegment(o[0].getX(), o[0].getY(), o[2].getX(), o[2].getY(), A[0]),
            origTransformInv: this._getCompositeTransform(true).inverted()
          }, true, false));
        } else
          r = new f.PartInfo(this, v.START_HANDLE_PART_ID, {
            point: o[3],
            noEditorSelectionChangedEvent: true
          }, true, false);
      else
        r = new f.PartInfo(this, v.END_HANDLE_PART_ID, {
          point: s,
          noEditorSelectionChangedEvent: true
        }, true, false);
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
      }, { noEditorSelectionChangedEvent: true }, true, true), c.prototype.updatePartSelection.call(this, false, [r.id], i)) : r = new f.PartInfo(this, v.END_HANDLE_PART_ID, {
        point: n.point,
        noEditorSelectionChangedEvent: true
      }, true, false), this.requestInvalidation();
    } else
      r = c.prototype.updatePartSelection.call(this, false, n ? [n] : null, i);
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
      if (s = n.mapPoint(s), G = this._getCompositeTransform(true).inverted()) {
        if (s = G.mapPoint(s), !d.isEqualEps(s.getX(), this._gradient._cx) || !d.isEqualEps(s.getY(), this._gradient._cy)) {
          var g = d.ptSqrDist(s.getX(), s.getY(), this._gradient._cx, this._gradient._cy), f = this._gradient._scale * this._gradient._scale;
          if (g > f || d.isEqualEps(f, g)) {
            var m = this._gradient._scale / Math.sqrt(g) - 0.001;
            s = d.getPointAtSegment(this._gradient._cx, this._gradient._cy, s.getX(), s.getY(), m);
          }
        }
        this._gradient._fx = s.getX(), this._gradient._fy = s.getY(), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true);
      }
    } else if (!this._xLeading && e && (e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx == h.length - 1 && 1 == h[h.length - 1].position || e === v.END_HANDLE_PART_ID)) {
      y.modifiers.metaKey || (s = this._snapPosition(s));
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(true).inverted()) {
        s = G.mapPoint(s);
        var _ = new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), b = (this._gradient._cy - s.getY()) / this._gradient._scale, C = s.getY() - this._gradient._cy;
        d.isEqualEps(C, 0) && (C = d.defaultEps);
        var w = (s.getX() - _.getX()) / C, E = new u().translated(-this._gradient._cx, -this._gradient._cy).scaled(1, b).multiplied(new u(1, 0, w, 1, 0, 0)).translated(this._gradient._cx, this._gradient._cy);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true));
      }
    } else if (this._xLeading && e && (e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx == h.length - 1 && 1 == h[h.length - 1].position || e === v.END_HANDLE_PART_ID)) {
      if (y.modifiers.metaKey || (s = this._snapPosition(s)), o)
        if (A = this._getPivotPoints()) {
          p = A[0];
          s = this._constrainPosition(s, n.inverted(), null, p);
        }
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(true).inverted()) {
        s = G.mapPoint(s);
        _ = new l(this._gradient._cx + this._gradient._scale, this._gradient._cy);
        var B = (Q = s.getX() - this._gradient._cx) / this._gradient._scale;
        d.isEqualEps(Q, 0) && (Q = d.defaultEps);
        var x = (s.getY() - _.getY()) / Q;
        E = new u().translated(-this._gradient._cx, -this._gradient._cy).scaled(B, 1).multiplied(new u(1, x, 0, 1, 0, 0)).translated(this._gradient._cx, this._gradient._cy);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true));
      }
    } else if (e && e.type === c.STOP_HANDLE_PART_ID && h.length && e.idx >= 0 && e.idx <= h.length - 1 && A && 4 == A.length) {
      var P = A[3], S = this._xLeading ? A[1] : A[2], T = n ? n.inverted() : null;
      if (T && (P = T.mapPoint(P), S = T.mapPoint(S)), s = d.getVectorProjection(P.getX(), P.getY(), S.getX(), S.getY(), s.getX(), s.getY(), true, true), s = n ? n.mapPoint(s) : s, G = this._getCompositeTransform(true).inverted()) {
        s = G.mapPoint(s);
        var I = new l(this._gradient._fx, this._gradient._fy), F = this._xLeading ? new l(this._gradient._cx + this._gradient._scale, this._gradient._cy) : new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), R = d.ptDist(s.getX(), s.getY(), I.getX(), I.getY()), D = d.ptDist(F.getX(), F.getY(), I.getX(), I.getY()), k = D ? R / D : 0;
        d.isEqualEps(k, 1, c.DEFAULT_EPS) ? k = 1 : d.isEqualEps(k, 0, c.DEFAULT_EPS) && (k = 0), h[e.idx].position = k, this._synchIdx(e), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true);
      }
    } else if (e === v.MOVE_HANDLE_PART_ID) {
      var G;
      s = n.mapPoint(s);
      if (G = this._getCompositeTransform(true).inverted()) {
        s = G.mapPoint(s);
        _ = t.origTransformInv.mapPoint(t.point);
        var Q = s.getX() - _.getX();
        C = s.getY() - _.getY(), E = new u(1, 0, 0, 1, Q, C);
        this._gradient._transform && (E = E.multiplied(this._gradient._transform)), E.inverted() && (this._gradient.setTransform(E), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true));
      }
    }
  }, v.prototype.getCursor = function (e, t) {
    var i = c.prototype.getCursor.call(this, e, t);
    return i || (e === v.MOVE_HANDLE_PART_ID ? s.SelectCross : null);
  }, v.prototype.getCustomBBox = function (e, t) {
    var i = c.prototype.getCustomBBox.call(this, e, t), n = this._getPivotPoints();
    if (n && n.length)
      for (var r = 1; r < n.length; ++r) {
        var o = m.getAnnotationBBox(e, n[r], h.annotationHandles.gradient.size, true);
        i = i ? i.united(o) : o;
      }
    return i;
  }, v.prototype._getAnnotationPoints = function () {
    for (var exports = this._getGradientPoints(), module = this._getCompositeTransform(true), require = 0; require < exports.length; ++require)
      exports[require] = module.mapPoint(exports[require]);
    return exports;
  }, v.prototype._getPivotPoints = function () {
    var e = [];
    e[0] = new l(this._gradient._cx, this._gradient._cy), e[1] = new l(this._gradient._cx + this._gradient._scale, this._gradient._cy), e[2] = new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), e[3] = new l(this._gradient._fx, this._gradient._fy);
    for (var module = this._getCompositeTransform(true), require = 0; require < e.length; ++require)
      e[require] = module.mapPoint(e[require]);
    return e;
  }, v.prototype._getGradientPoints = function () {
    for (var exports = [], module = this._gradient.getStops(), require = this._xLeading ? new l(this._gradient._cx + this._gradient._scale, this._gradient._cy) : new l(this._gradient._cx, this._gradient._cy - this._gradient._scale), n = new l(this._gradient._fx, this._gradient._fy), r = require.getX() - n.getX(), o = require.getY() - n.getY(), a = 0; a < module.length; ++a) {
      var s = new l(this._gradient._fx + r * module[a].position, this._gradient._fy + o * module[a].position);
      exports.push(s);
    }
    return exports;
  }, v.prototype.toString = function () {
    return "[Object GRadialGradientEditor]";
  }, exports.exports = v;
}
