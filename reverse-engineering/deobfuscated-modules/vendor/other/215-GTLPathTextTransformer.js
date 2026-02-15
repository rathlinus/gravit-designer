/**
 * Module 215 - GTLPathTextTransformer
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
  var n = require(0) /* GObject */, r = require(140) /* module */, o = require(650) /* module */, a = require(5) /* GPoint */, s = require(6) /* GRect */, l = require(48) /* GVertex */, h = require(651) /* GVertexOffsetter */, A = require(187) /* PolyLine */, c = require(7) /* GTransform */, p = require(12) /* GMath */;
  function u(e, t, i) {
    this._tlCore = e, this._type = u.TYPE, this._basePath = t, this._polys = {}, this._qtrees = {}, this._params = i || u.TransformerParams, this._params.direction === u.DIRECTION_INWARDS && t.reverseOrder();
  }
  n.inherit(u, o), u.TYPE = "path", u.OUTSIDE = 1, u.INSIDE = -1, u.DIRECTION_OUTWARDS = 0, u.DIRECTION_INWARDS = 1, u.MIN_SPATH_LEN = 1, u.TransformerParams = {
    side: u.INSIDE,
    direction: u.DIRECTION_OUTWARDS,
    offset: 0,
    distance: 0
  }, u.prototype._polys = null, u.prototype._qtrees = null, u.prototype._basePath = null, u.prototype._params = null, u.prototype._totalDist = 0, u.prototype.getMatrix = function (e, t, i, n, r) {
    var s, l = this._getPolyAtOffset(t);
    if (!l || !l.next)
      return o.prototype.getMatrix.call(this, e, t, i, n, r);
    s = new a(e + i.getWidth() / 2, t);
    var h = this._getMtxAtDist(l, e, s, i), A = new a(e, t);
    return h ? (A = h.mapPoint(A), i = h.mapRect(i), r && (h = r.multiplied(h))) : h = r, o.prototype.getMatrix.call(this, A.getX(), A.getY(), i, n, h);
  }, u.prototype.getBoxOrigin = function () {
    return this._basePath._calculateGeometryBBox().getSide(s.Side.TOP_LEFT);
  }, u.prototype.getPreTransform = function () {
    var e = this.getBoxOrigin(), t = this._tlCore._calculateRenderBounds(), i = new a(e.getX(), e.getY()).add(new a(t.getX(), t.getY()));
    return new c().translated(i.getX(), i.getY());
  }, u.prototype._inverseTransform = function (e, t) {
    var i, n = 8, s = e.getX(), l = e.getY(), h = {}, c = false, u = -1, d = this._basePath._calculateGeometryBBox();
    for (s += d.getX(), l += d.getY(); n < 1 << 20 && !c;) {
      for (var g in ((i = new A.PolyLine()).x = s - n / 2, i.y = l - n / 2, i.width = n, i.height = n, this._qtrees)) {
        var f = this._qtrees[g];
        u < 0 && (u = this._totalDist[g]);
        var m = f.retrieve(i, r.RETRIEVE_MODE_INTERSECT);
        if (m && m.length && (c = true, h[g] ? Array.prototype.push.apply(h[g], m) : h[g] = m), t)
          break;
      }
      n <<= 1;
    }
    if (!c)
      return console.warn("Path transformer: closest polygon not found"), o.prototype._inverseTransform.call(this, e, t);
    var y, _, v, b, C, w, E = null, B = Number.POSITIVE_INFINITY, x = [];
    for (var g in h)
      for (var P = h[g], S = 0; S < P.length; S++) {
        var T = P[S];
        if (!T.isLastSegment && T.next.point) {
          var I = p.sqrSegmentDist(T.point.getX(), T.point.getY(), T.next.point.getX(), T.next.point.getY(), s, l, x);
          I < B && (B = I, v = x[0], y = parseFloat(g), b = this._totalDist[g], E = T, _ = -p.segmentSide(T.point.getX(), T.point.getY(), T.next.point.getX(), T.next.point.getY(), s, l));
        }
      }
    if (null === E)
      return console.warn("Path transformer: closest point not found"), o.prototype._inverseTransform.call(this, e, t);
    var F = b / u, R = Math.max(0, Math.min(this._params.distance, b - 10));
    return C = E.m + (E.next.m - E.m) * v - R * F, w = y + _ * Math.sqrt(B) + this._params.offset, !t && C < 0 && (C += b), o.prototype._inverseTransform.call(this, new a(C, w), t);
  }, u.prototype._getMtxAtDist = function (e, t, i, n) {
    var r = this._params.distance;
    if (t += n.getWidth() / 2, this._basePath.$closed || this._params.distance > 0) {
      var o = -1;
      for (var s in this._polys) {
        if (o < 0 && (o = this._totalDist[s]), this._polys[s] === e) {
          var l = this._totalDist[s];
          this._params.distance > 0 && (r = Math.max(0, Math.min(l - 10, r)), t += r *= l / o), this._basePath.$closed && l <= t && (t %= l);
          break;
        }
      }
    } else
      t += r;
    for (var h, A, u = this._getSegmentAtParam(e, t), d = u.next, g = u.point, f = d.point; f && a.equals(g, f) && (f = (d = d.next).point, !d.isLastSegment || d.next.point););
    if (!f)
      return new c();
    if (a.equals(g, f) ? (h = d.isLastSegment && !d.next.point ? f : g, A = 0) : (A = (t - u.m) / (d.m - u.m), h = p.getPointAtSegment(g.getX(), g.getY(), f.getX(), f.getY(), A)), A > 1)
      return null;
    for (var m = f.subtract(h); f && !d.isLastSegment && p.isEqualEps(m.dot(m), 0);)
      (f = (d = d.next).point) && !d.isLastSegment && (m = f.subtract(h));
    var y = this._basePath._calculateGeometryBBox();
    if (!f || p.isEqualEps(m.dot(m), 0))
      return new c().translated(h.getX() - y.getX(), h.getY() - y.getY());
    var _ = Math.atan2(m.getY(), m.getX());
    return new c().translated(-i.getX(), -i.getY()).rotated(_).translated(h.getX() - y.getX(), h.getY() - y.getY());
  }, u.prototype._getPolyAtOffset = function (e) {
    var t = this._tlCore ? this._tlCore.getLines() : [], i = this._params.offset;
    t.length > 0 && (this._params.side === u.INSIDE ? i += t[0].descent : i += t[0].ascent);
    for (var n = 0; n < t.length; n++)
      if (e <= t[n].baseline) {
        e = t[n].baseline - i;
        break;
      }
    n === t.length && n > 0 && (e = t[t.length - 1].baseline - i);
    var r, o = this._polys[e];
    if (o)
      return o;
    if (0 !== e) {
      var a = this._params.side === u.INSIDE;
      r = new h(this._basePath, e, a, !a, 0, null);
      var s = new l();
      if (!r.rewindVertices(0) || !r.readVertex(s))
        return null;
    } else
      r = this._basePath;
    return this._polys[e] = A.polyFromVertexSource(r, false, false), o = this._generateDistancesFilterSubpaths(e), this._qtrees[e] = A.quadTreeFromPolygon(o), o;
  }, u.prototype._generateDistancesFilterSubpaths = function (e) {
    var t = this._polys[e], i = t.next, n = 0, r = 0, o = 0, a = null, s = t;
    if (i && i.point) {
      do {
        t.isLastSegment ? (r < u.MIN_SPATH_LEN && (a ? a.next = i : s = this._polys[e] = i, n -= r), a = t, r = 0) : (r += o = p.ptDist(t.point.getX(), t.point.getY(), i.point.getX(), i.point.getY()), n += o), i.m = n, i = (t = i).next;
      } while (i.point);
      return this._totalDist || (this._totalDist = {}), this._totalDist[e] = n, s;
    }
  }, u.prototype._getSegmentAtParam = function (e, t) {
    var i, n = e, r = n.next;
    if (!r || !r.point)
      return e;
    do {
      if (i = r.m, r.isLastSegment && !r.next.point || t < i)
        return n.isLastSegment && !r.isLastSegment ? r : n;
      r = (n = n.next).next;
    } while (r.point);
    return n;
  }, exports.exports = u;
}
