/**
 * Module 347 - GPGEdge
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
  var n = require(2) /* GNode */, r = require(512) /* module */, o = require(513) /* module */, a = require(929) /* module */, s = require(14) /* GPaintCanvas */, l = require(28) /* GStylable */, h = require(17) /* GRGBColor */, A = require(12) /* GMath */, c = require(45) /* GPathBase */, p = require(22) /* GElement */, u = require(11) /* GUtil */;
  function d() {
    this._setDefaultProperties(d.GeometryProperties), this.$uid = new o(), this._facets = [];
  }
  n.inheritAndMix("GPGEdge", d, n, [
    n.Store,
    n.Container,
    n.Properties,
    a,
    l,
    n.Multireference
  ]), d.GeometryProperties = {
    uid: null,
    cSt: false
  }, d.prototype.painted = false, d.prototype._pathBase = null, d.prototype._facets = null, d.SplitPoint = function (e, t, i) {
    this.seg = e, this.slope = t, i && (this.pt = i);
  }, d.SplitPoint.prototype.seg = null, d.SplitPoint.prototype.slope = null, d.SplitPoint.prototype.pt = null, d.prototype.getId = function () {
    return this.$uid;
  }, d.prototype.validateInsertion = function (e, t) {
    return e instanceof n.MapContainer && (!e.getParent() || "Paths Graph" === n.getName(e.getParent()));
  }, d.prototype.getStylePropertySets = function () {
    return [
      l.PropertySet.BorderPaintLayers,
      l.PropertySet.FillPaintLayers
    ];
  }, d.prototype._styleRepaint = function (e) {
    this._parent instanceof n.MapContainer && this._parent.getParent() && "Paths Graph" === n.getName(this._parent.getParent()) && this._parent.getParent()._notifyChange(p._Change.InvalidationRequest);
  }, d.prototype._styleFinishGeometryChange = function (e) {
    this._parent instanceof n.MapContainer && this._parent.getParent() && "Paths Graph" === n.getName(this._parent.getParent()) && this._parent.getParent()._notifyChange(p._Change.FinishGeometryUpdate, 1);
  }, d.prototype.getPathBase = function () {
    return this._pathBase;
  }, d.prototype.setPathBase = function (e) {
    this._pathBase && this.removeChild(this._pathBase), e && (this.insertChild(e), this._pathBase.assignStyleFrom(this));
  }, d.prototype.serialize = function () {
    var e = [];
    return e.push(this.$uid.toString()), e.push(this.$cSt), e.push(this._srcAnchor.getId().toString()), e.push(this._dstAnchor.getId().toString()), e.push(this._pathBase.getAnchorPoints().serialize()), e;
  }, d.prototype.deserialize = function (e) {
    if (e.length >= 5) {
      this.$uid = new o(e[0]), this.$cSt = e[1];
      var module = new r(new o(e[2])), require = new r(new o(e[3]));
      this.setAnchors([
        module,
        require
      ]);
      var n = new c();
      n.getAnchorPoints().deserialize(e[4]), this.setPathBase(n);
    }
  }, d.prototype.getStartAngle = function () {
    var e = this._pathBase.getAnchorPoints().getFirstChild(), t = e.getProperty("x"), i = e.getProperty("y"), n = e.getProperty("hrx"), r = e.getProperty("hry");
    return null !== n && null !== r || (n = (e = e.getNext()).getProperty("hlx"), r = e.getProperty("hly"), null !== n && null !== r || (n = e.getProperty("x"), r = e.getProperty("y"))), A.normalizeAngleRadians(-Math.atan2(r - i, n - t));
  }, d.prototype.getEndAngle = function () {
    var e = this._pathBase.getAnchorPoints().getLastChild(), t = e.getProperty("x"), i = e.getProperty("y"), n = e.getProperty("hlx"), r = e.getProperty("hly");
    return null !== n && null !== r || (n = (e = e.getPrevious()).getProperty("hrx"), r = e.getProperty("hry"), null !== n && null !== r || (n = e.getProperty("x"), r = e.getProperty("y"))), A.normalizeAngleRadians(-Math.atan2(r - i, n - t));
  }, d.prototype.getFirstSegment = function (e, t) {
    var i = new c.AnchorPoint(), n = this._pathBase.getAnchorPoints().getFirstChild();
    i.deserialize(n.serialize());
    var r = new c.AnchorPoint();
    if (r.deserialize(n.getNext().serialize()), t && t > 0 && t < 1) {
      var o = i.getProperty("hrx"), a = i.getProperty("hry"), s = r.getProperty("hlx"), l = r.getProperty("hly");
      if (null !== o && null !== a && null !== s && null !== l) {
        var h = new Float64Array(4), p = new Float64Array(4);
        A.getCtrlPtsCasteljau(i.getProperty("x"), o, s, r.getProperty("x"), t, 1, h), A.getCtrlPtsCasteljau(i.getProperty("y"), a, l, r.getProperty("y"), t, 1, p), i.setProperties([
          "hrx",
          "hry"
        ], [
          h[1],
          p[1]
        ]), r.setProperties([
          "hlx",
          "hly",
          "x",
          "y",
          "hrx",
          "hry"
        ], [
          h[2],
          p[2],
          h[3],
          p[3],
          null,
          null
        ]);
      } else if (null !== o && null !== a || null !== s && null !== l) {
        var u = null !== o && null !== a ? o : s, d = null !== o && null !== a ? a : l;
        h = new Float64Array(3), p = new Float64Array(3);
        A.divideQuadraticCurve(i.getProperty("x"), u, r.getProperty("x"), t, h), A.divideQuadraticCurve(i.getProperty("y"), d, r.getProperty("y"), t, p), i.setProperties([
          "hrx",
          "hry"
        ], [
          h[1],
          p[1]
        ]), r.setProperties([
          "hlx",
          "hly",
          "x",
          "y",
          "hrx",
          "hry"
        ], [
          null,
          null,
          h[2],
          p[2],
          null,
          null
        ]);
      } else {
        var g = A.getPointAtSegment(i.getProperty("x"), i.getProperty("y"), r.getProperty("x"), r.getProperty("y"), t);
        r.setProperties([
          "x",
          "y",
          "hrx",
          "hry"
        ], [
          g.getX(),
          g.getY(),
          null,
          null
        ]);
      }
    }
    var f = new c();
    return e ? (r.flip(), f.getAnchorPoints().appendChild(r), i.flip(), f.getAnchorPoints().appendChild(i)) : (f.getAnchorPoints().appendChild(i), f.getAnchorPoints().appendChild(r)), f;
  }, d.prototype.getLastSegment = function (e, t) {
    var i = new c.AnchorPoint(), n = this._pathBase.getAnchorPoints().getLastChild();
    i.deserialize(n.serialize());
    var r = new c.AnchorPoint();
    if (r.deserialize(n.getPrevious().serialize()), t && t > 0 && t < 1) {
      var o = r.getProperty("hrx"), a = r.getProperty("hry"), s = i.getProperty("hlx"), l = i.getProperty("hly");
      if (null !== o && null !== a && null !== s && null !== l) {
        var h = new Float64Array(4), p = new Float64Array(4);
        A.getCtrlPtsCasteljau(r.getProperty("x"), o, s, i.getProperty("x"), 1 - t, 2, h), A.getCtrlPtsCasteljau(r.getProperty("y"), a, l, i.getProperty("y"), 1 - t, 2, p), r.setProperties([
          "hlx",
          "hly",
          "x",
          "y",
          "hrx",
          "hry"
        ], [
          null,
          null,
          h[0],
          p[0],
          h[1],
          p[1]
        ]), i.setProperties([
          "hlx",
          "hly"
        ], [
          h[2],
          p[2]
        ]);
      } else if (null !== o && null !== a || null !== s && null !== l) {
        var u = null !== o && null !== a ? o : s, d = null !== o && null !== a ? a : l;
        h = new Float64Array(3), p = new Float64Array(3);
        A.divideQuadraticCurve(r.getProperty("x"), u, i.getProperty("x"), 1 - t, null, h), A.divideQuadraticCurve(r.getProperty("y"), d, i.getProperty("y"), 1 - t, null, p), r.setProperties([
          "hlx",
          "hly",
          "x",
          "y",
          "hrx",
          "hry"
        ], [
          null,
          null,
          h[2],
          p[2],
          null,
          null
        ]), i.setProperties([
          "hlx",
          "hly"
        ], [
          h[1],
          p[1]
        ]);
      } else {
        var g = A.getPointAtSegment(r.getProperty("x"), r.getProperty("y"), i.getProperty("x"), i.getProperty("y"), 1 - t);
        r.setProperties([
          "hlx",
          "hly",
          "x",
          "y"
        ], [
          null,
          null,
          g.getX(),
          g.getY()
        ]);
      }
    }
    var f = new c();
    return e ? (i.flip(), f.getAnchorPoints().appendChild(i), r.flip(), f.getAnchorPoints().appendChild(r)) : (f.getAnchorPoints().appendChild(r), f.getAnchorPoints().appendChild(i)), f;
  }, d.prototype.hasSameStyle = function (e) {
    return u.equals(this.getPaintLayers().getBorderLayers(true), e.getPaintLayers().getBorderLayers(true));
  }, d.prototype.getStyleBorderPadding = function (e) {
    var t = 0.5 * e.$_bw;
    return e.$_blj === s.LineJoin.Miter && e.$_bml > 0 && (t *= e.$_bml), t;
  }, d.prototype._handleChange = function (e, t) {
    e == n._Change.BeforeChildInsert && t instanceof c ? this._pathBase = t : e === n._Change.Store ? t.blob.props = this.serialize() : e === n._Change.Restore && t.blob.hasOwnProperty("props") && this.deserialize(t.blob.props), l.prototype._handleStyleChange.call(this, e, t), n.prototype._handleChange.call(this, e, t), e == n._Change.AfterChildRemove && t instanceof c && (this._pathBase = null);
  }, d.prototype._paintBorder = function (e, t, i, n, r) {
    var o = this._pathBase;
    t && ((o = new c(false, this._pathBase.cloneAnchorPoints())).setProperty("trf", t), o.assignStyleFrom(this)), u.each(o.getPaintLayers().getBorderLayers(), function (e, t) {
      t.setProperty("_ba", l.BorderAlignment.Center);
    }), o._scene = i;
    var a = e.canvas, A = o, p = r.$_bw, d = r.$_bml ? r.$_bml : 10, g = this.getSource(), f = this.getDestination(), m = g.getInEdges().length + g.getOutEdges().length == 1, y = f.getInEdges().length + f.getOutEdges().length == 1, _ = s.LineCap.Butt;
    m && y ? (_ = r.$_blc, (r.$_bhm || r.$_btm) && (_ = r.$_btmi || r.$_bhmi ? s.LineCap.Butt : s.LineCap.Square)) : m || y ? r.$_blc != s.LineCap.Round || r.$_blj != s.LineJoin.Round && r.$_blj != s.LineJoin.Miter ? this.$_blc == s.LineCap.Square && r.$_blj == s.LineJoin.Miter && (_ = s.LineCap.Square, (r.$_bhm && m || r.$_btm && y) && (_ = r.$_btmi || r.$_bhmi ? s.LineCap.Butt : s.LineCap.Square)) : (_ = s.LineCap.Round, (r.$_bhm && m || r.$_btm && y) && (r.$_btmi || r.$_bhmi ? _ = s.LineCap.Butt : r.$_blj == s.LineJoin.Miter && 1.4142 * r.$_bw / 2 <= d * r.$_bw - E / 2 && (_ = s.LineCap.Square))) : r.$_blc != s.LineCap.Round || r.$_blj != s.LineJoin.Round && r.$_blj != s.LineJoin.Miter || (_ = s.LineCap.Round);
    if (n)
      undefined !== a.putVertices(A) && (a.strokeVertices(h.BLACK, p, r.$_bds, _, r.$_blj, r.$_bml, 1), o._paintBorderMarkers(e, h.BLACK, r));
    else {
      var v = o.getPaintBBox(), b = o._createStyleCanvas(e, v), C = e.pushCanvas(b);
      try {
        var w = o.getPatternBBox();
        if (w) {
          var E = 0.5 * r.$_bw;
          if (t)
            E /= t.getScaleFactor(), w = w.expanded(E, E, E, E);
          else
            w = w.expanded(E, E, E, E);
        }
        var B = o.createShapePaint(e, r.$_pt, w);
        if (B && B.paint && undefined !== b.putVertices(A)) {
          var x = null;
          B.transform && B.transform.isValid() && (x = B.transform, t && (x = x.multiplied(t)), r.$_px && !r.$_px.isIdentity() && (x = x.preMultiplied(r.$_px)));
          var P = o.getGeometryBBox(), S = this.getStyleBorderPadding(r);
          S && (P = P.expanded(S, S, S, S));
          var T = P = o._calculateMarkersBorderBBox(P, r);
          if (b.strokeVertices(h.BLACK, p, r.$_bds, _, r.$_blj, r.$_bml, 1), o._paintBorderMarkers(e, h.BLACK, r), x) {
            T = x.inverted().mapRect(T);
            var I = b.setTransform(b.getTransform(true).multiplied(x));
            b.fillRect(T.getX(), T.getY(), T.getWidth(), T.getHeight(), B.paint, r.$_op, s.CompositeOperator.SourceIn), b.setTransform(I);
          } else
            b.fillRect(T.getX(), T.getY(), T.getWidth(), T.getHeight(), B.paint, r.$_op, s.CompositeOperator.SourceIn);
        }
        C.drawCanvas(b), b.finish();
      } finally {
        e.popCanvas();
      }
    }
  }, d.prototype.getMarkersBorderBBox = function (e, t) {
    var i = null;
    if (t.$_bhm || t.$_btm) {
      var n = this._pathBase;
      e && ((n = new c(false, this._pathBase.cloneAnchorPoints())).setProperty("trf", e), n.assignStyleFrom(this));
      i = n.getGeometryBBox();
      i = n._calculateMarkersBorderBBox(i, t);
    }
    return i;
  }, d.prototype.toString = function () {
    return "[Object GPGEdge]";
  }, exports.exports = d;
}
