/**
 * Module 782
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
  var n = require(147) /* GLinearGradient */, r = require(2) /* GNode */, o = require(0) /* GObject */, a = require(17) /* GRGBColor */, s = require(5) /* GPoint */, l = require(24) /* GEditorOptions */, h = require(48) /* GVertex */, A = require(276) /* GGradientStyleEditor */, c = require(54) /* GVertexContainer */, p = require(7) /* GTransform */, u = require(12) /* GMath */, d = require(39) /* PartInfo */, g = require(81) /* GEditorAnnotation */, f = require(64) /* GPlatform */, m = require(14) /* GPaintCanvas */;
  function y() {
    A.call(this);
  }
  o.inherit(y, A), y.prototype.activate = function (e) {
    if (e.propName && e.propHolder instanceof r && e.propHolder.getProperty(e.propName, false, null, e.propTemporary) instanceof n)
      return A.prototype.activate.call(this, e);
    return false;
  }, y.prototype.paint = function (e, t) {
    var i = this._getAnnotationPoints();
    if (i) {
      if (e && !e.isIdentity())
        for (var n = 0; n < i.length; ++n)
          i[n] = e.mapPoint(i[n]);
      var r = l.annotationHandles.gradient, o = i[0], s = i[i.length - 1];
      o = A.alignHandlePoint(o, r.outlineWidth), s = A.alignHandlePoint(s, r.outlineWidth);
      var p = new c();
      p.addVertex(h.Command.Move, o.getX(), o.getY()), p.addVertex(h.Command.Line, s.getX(), s.getY()), t.canvas.putVertices(p), t.canvas.strokeVertices(new a(a.parseCSSColor(r.lineShadowColor)), r.outlineWidth + 2 * m.getScreenDPI(), null, null, null, null, 0.6), t.canvas.strokeVertices(a.WHITE, r.outlineWidth);
      var u = this._gradient.getStops(), d = null;
      for (n = 0; n < i.length; ++n) {
        this._partSelection && this._partSelection.length && this._partSelection[0].idx == n ? d = n : g.paintAnnotation(t, null, i[n], r.type, false, r.size, a.WHITE, a.WHITE, r.outlineWidth, r.shadowColor);
      }
      null !== d && g.paintAnnotation(t, null, i[d], r.type, false, r.sizeBig, a.WHITE, u[d].color, r.outlineWidth, r.shadowColor);
    }
    A.prototype.paint.call(this, e, t);
  }, y.prototype.getPartInfoAt = function (e, t, i, n) {
    var r = null;
    if (this._iterateAnnotations(function (i, n) {
        if (g.getAnnotationBBox(t, i, l.annotationHandles.gradient.size, false).expanded(l.annotPickDistance, l.annotPickDistance, l.annotPickDistance, l.annotPickDistance).containsPoint(e) && (r = new d.PartInfo(this, {
            type: A.STOP_HANDLE_PART_ID,
            idx: n
          }, { noEditorSelectionChangedEvent: true }, true, true), this._partSelection && this._partSelection.length && this._partSelection[0].idx == n))
          return true;
      }.bind(this)), r)
      return r;
    var o = [], a = this._getAnnotationPoints();
    if (a && a.length > 1) {
      var s = a[0], h = a[a.length - 1];
      if (t && !t.isIdentity() && (s = t.mapPoint(s), h = t.mapPoint(h)), u.sqrSegmentDist(s.getX(), s.getY(), h.getX(), h.getY(), e.getX(), e.getY(), o) <= n * n) {
        var c = this._gradient.getStops(), p = c && c.length ? c[0].position : null, f = c && c.length ? c[c.length - 1].position : null, m = 0;
        null !== p && null !== f && (m = o[0] * (f - p) + p), r = new d.PartInfo(this, {
          type: A.PLUS_STOP_PART_ID,
          pos: m
        }, { noEditorSelectionChangedEvent: true }, true, true);
      }
    }
    return r;
  }, y.prototype.movePart = function (e, t, i, n, r, o, a) {
    if (A.prototype.movePart.call(this, e, t, i, n, r, o, a), e && e.type === A.STOP_HANDLE_PART_ID) {
      var l = i, h = this._getCompositeTransform(false).inverted(), c = this._getGradientPoints(), d = e.idx, g = this._getAnnotationPoints();
      if (g)
        var m = g[0], y = g[g.length - 1];
      var _ = this._gradient.getScale();
      this._gradient.getAngle();
      if (0 == d || d == c.length - 1) {
        f.modifiers.metaKey || (l = this._snapPosition(l));
        var v, b, C, w = c[0], E = c[c.length - 1], B = 0, x = 0, P = null;
        0 == d ? (o && E && (l = this._constrainPosition(l, n ? n.inverted() : null, null, y)), l = n ? n.mapPoint(l) : l, B = (l = h.mapPoint(l)).getX() - w.getX(), x = l.getY() - w.getY(), P = new p(1, 0, 0, 1, B, x), l = E) : d == c.length - 1 && (o && w && (l = this._constrainPosition(l, n ? n.inverted() : null, null, m)), l = n ? n.mapPoint(l) : l, l = h.mapPoint(l)), C = new s(E.getX() + B, E.getY() + x), v = w.getX() + B, b = w.getY() + x;
        var S = new p(1, 0, 0, 1, -v, -b), T = new p(1, 0, 0, 1, v, b), I = u.ptDist(v, b, C.getX(), C.getY()), F = u.ptDist(v, b, l.getX(), l.getY()), R = I > 0 ? F / I : 1, D = new p(R, 0, 0, R, 0, 0), k = Math.atan2(C.getY() - b, C.getX() - v) - Math.atan2(l.getY() - b, l.getX() - v), G = Math.cos(k), Q = Math.sin(k), M = new p(G, -Q, Q, G, 0, 0), N = S.multiplied(D).multiplied(M).multiplied(T);
        P = P ? P.multiplied(N) : N, this._angleDelta = k, this._scaleDelta = R, this._gradient.setTransform(P), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true);
      } else if (d > 0 && d < c.length - 1 && m && y) {
        var U = n ? n.inverted() : null;
        U && (m = U.mapPoint(m), y = U.mapPoint(y)), l = u.getVectorProjection(m.getX(), m.getY(), y.getX(), y.getY(), l.getX(), l.getY(), true, true), l = n ? n.mapPoint(l) : l, l = h.mapPoint(l);
        var V = u.ptDist(l.getX(), l.getY(), this._gradient._fx, this._gradient._fy), O = _ ? V / _ : V, L = this._gradient.getStops();
        O < L[0].position ? O = L[0].position : O > L[L.length - 1].position && (O = L[L.length - 1].position), L[d].position = O, this._synchIdx(e), this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, true);
      }
    }
  }, y.prototype._applyPartMove = function (e, t, i, n) {
    if (e && e.type === A.STOP_HANDLE_PART_ID) {
      var r = e.idx, o = this._gradient.getStops();
      if (0 == r || r == o.length - 1) {
        if (this._gradient.getTransform()) {
          var a = this._gradient.getTransform().mapPoint(new s(this._gradient._fx, this._gradient._fy));
          this._gradient._fx = a.getX(), this._gradient._fy = a.getY();
        }
        this._gradient._scale *= this._scaleDelta, this._scaleDelta = 1, this._gradient._angle -= this._angleDelta, this._angleDelta = 0, this._gradient._angle = u.normalizeAngleRadians(this._gradient._angle), this._gradient.setTransform(null);
      }
    }
    A.prototype._applyPartMove.call(this, e, t, i, n);
  }, y.prototype.resetPartMove = function (e, t) {
    this._scaleDelta = 1, this._angleDelta = 0, this._gradient.setTransform(null), A.prototype.resetPartMove.call(this, e, t);
  }, y.prototype._getAnnotationPoints = function () {
    for (var exports = this._getGradientPoints(), module = this._getCompositeTransform(true), require = 0; require < exports.length; ++require)
      exports[require] = module.mapPoint(exports[require]);
    return exports;
  }, y.prototype._getGradientPoints = function () {
    for (var exports = this._gradient.getScale(), module = this._gradient.getAngle(), require = Math.cos(module) * exports, n = Math.sin(module) * exports, r = this._gradient.getStops(), o = [], a = 0; a < r.length; ++a) {
      var l = new s(this._gradient._fx + require * r[a].position, this._gradient._fy + n * r[a].position);
      o.push(l);
    }
    return o;
  }, y.prototype.toString = function () {
    return "[Object GLinearGradientEditor]";
  }, exports.exports = y;
}
