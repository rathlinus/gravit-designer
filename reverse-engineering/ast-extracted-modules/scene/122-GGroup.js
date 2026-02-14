/**
 * Module 122 - GGroup
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
  var n = i(104), r = i(112), o = i(2), a = i(22), s = i(28), l = i(7), h = i(6), A = i(12), c = i(73), p = i(63), u = i(14), d = i(17), g = i(9);
  function f() {
    n.call(this), this._setDefaultProperties(f.GeometryProperties);
  }
  o.inheritAndMix("group", f, n, [
    o.Container,
    a.Transform,
    a.Layout,
    a.Stylable,
    a.Accelerated
  ]), f.GeometryProperties = {
    trf: null,
    frm: null
  }, f.prototype.getStylePropertySets = function () {
    return [
      s.PropertySet.Style,
      s.PropertySet.Effects
    ];
  }, f.prototype.transform = function (e, t, i) {
    if (e && !e.isIdentity()) {
      var n = this.getProperty("frm");
      this._relayoutNow = !1, n && (this._layoutTransform = e, this._relayoutNow = !this._relayout, this._relayout = !0), this.beginUpdate();
      try {
        this.assignTransformFrom(e, this);
        for (var r = this.getFirstChild(!0); null != r; r = r.getNext(!0))
          (!n || !this.dependentUpdate || t || r instanceof a && r.hasMixin(a.Transform) && !r.getProperty("hacr") && !r.getProperty("vacr")) && (!i || i.indexOf(r) < 0) && (r.dependentUpdate = !0, r.transform(e, t, i), r.dependentUpdate = !1);
      } finally {
        this.endUpdate();
      }
      n && this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null, this._relayoutNow = !1);
    }
  }, f.prototype.setTransform = function (e) {
    this.setProperty("trf", e);
  }, f.prototype.getNodeNameTranslated = function () {
    return g.getValue("GGroup", "name", this.getNodeName());
  }, f.prototype.getTransform = function () {
    return this.getProperty("trf");
  }, f.prototype.getAngle = function () {
    var e = this.getProperty("trf"), t = 0;
    if (e = (e = e ? e.decomposed() : null) ? e.rotate : null) {
      var i = e.getMatrix();
      t = -Math.atan2(i[1], i[0]);
    }
    return t;
  }, f.prototype.getCenter = function (e) {
    var t = this.getSourceBBox(), i = t ? t.getSide(h.Side.CENTER) : null;
    return i && e && this.$trf && (i = this.$trf.mapPoint(i)), i;
  }, f.prototype._calculateGeometryBBox = function (e) {
    var t = this.getProperty("frm");
    if (t) {
      var i = this.getProperty("trf");
      return i && i.mapRect(t) || t;
    }
    return n.prototype._calculateGeometryBBox.call(this, e);
  }, f.prototype._calculatePaintBBox = function (e, t) {
    var i;
    return i = this.getProperty("frm") ? this.getGeometryBBox(t) : n.prototype._calculatePaintBBox.call(this, e, t), this.getEffects() ? this.getEffects().getEffectsBBox(i, null, i) : i;
  }, f.prototype._calculateSourceBBox = function (e) {
    var t = this.getProperty("frm");
    if (t)
      return t;
    var i = this.getProperty("trf"), n = null;
    if (!i)
      return this.getGeometryBBox(e);
    for (var r = this.getFirstChild(); null != r; r = r.getNext())
      if (r instanceof a) {
        var o = r.getPreTransformRect(i);
        o && (n = n ? n.united(o) : o);
      }
    return n;
  }, f.prototype._calculatePreTransformRect = function (e) {
    if (!e || !e.invertible())
      return this.getGeometryBBox();
    var t = this.getProperty("frm");
    if (t) {
      var i = e.inverted(), n = this.getProperty("trf"), r = (i = n ? n.multiplied(i) : i).mapQuadrilateral(t);
      return h.fromPoints.apply(null, r);
    }
    for (var o = null, s = this.getFirstChild(); null != s; s = s.getNext())
      if (s instanceof a) {
        var l = s.getPreTransformRect(e);
        l && (o = o ? o.united(l) : l);
      }
    return o;
  }, f.prototype._paintStyleContent = function (e, t, i, n, r) {
    var o = this.getProperty("frm");
    if (o && this.getFirstChild()) {
      var a = new c(o.getX(), o.getY(), o.getWidth(), o.getHeight()), s = this.getProperty("trf");
      if (s && (a = new p(a, s)), e.canvas.hasClip()) {
        var l = this._createStyleCanvas(e, this.getGeometryBBox()), h = e.pushCanvas(l);
        try {
          if (void 0 !== l.putVertices(a)) {
            l.clipVertices();
            var A = this._createStyleCanvas(e, this.getGeometryBBox());
            e.pushCanvas(A);
            try {
              this._paintChildren(e), l.drawCanvas(A, 0, 0), A.finish();
            } finally {
              e.popCanvas();
            }
            l.resetClip();
          }
          h.drawCanvas(l), l.finish();
        } finally {
          e.popCanvas();
        }
      } else {
        h = e.pushCanvas(this._createStyleCanvas(e, this.getGeometryBBox()));
        try {
          this._paintChildren(e), void 0 !== e.canvas.putVertices(a) && e.canvas.fillVertices(d.BLACK, 1, u.CompositeOperator.DestinationIn), h.drawCanvas(e.canvas), e.canvas.finish();
        } finally {
          e.popCanvas();
        }
      }
    } else
      this._paintChildren(e);
  }, f.prototype._detailHitTest = function (e, t, i, n) {
    return new r(this);
  }, f.prototype._handleChange = function (e, t) {
    this._handleGeometryChangeForProperties(e, t, f.GeometryProperties);
    var i = !1;
    if (e == a._Change.ChildGeometryUpdate ? t && t[0] && t[0].getParent() === this && (this._notifyChange(a._Change.PrepareGeometryUpdate), i = !0) : e === o._Change.Store ? this.storeProperties(t.blob, f.GeometryProperties, function (e, t) {
        return "trf" === e && t ? l.serialize(t) : "frm" === e && t ? h.serialize(t) : t;
      }) : e === o._Change.Restore && this.restoreProperties(t.blob, f.GeometryProperties, function (e, t) {
        return "trf" === e && t ? l.deserialize(t).makeInvertible() : "frm" === e && t ? h.deserialize(t) : t;
      }), n.prototype._handleChange.call(this, e, t), i) {
      var r = t[2];
      !r && t[0] && t[0] instanceof a && (r = t[0].getPaintBBox()), this._notifyChange(a._Change.FinishGeometryUpdate, [
        2,
        r
      ]);
    } else
      e != a._Change.PrepareChildAnchoring || this.getProperty("frm") || this.setFrame(!0);
  }, f.prototype.setFrame = function (e) {
    var t = this.getAngle(), i = null;
    if (null === t || A.isEqualEps(t, 0, 0.0001) || (i = new l().rotated(-t)), e && !this.getProperty("frm")) {
      var n = i ? this.getPreTransformRect(i) : this.getGeometryBBox();
      if (n) {
        this.setProperties([
          "frm",
          "trf"
        ], [
          n,
          i
        ]);
        for (var r = this.getFirstChild(); null != r; r = r.getNext())
          r.hasMixin(a.Anchor) && (r.getProperty("hacr") || r.setProperty("hacr", r.oldHacr ? r.oldHacr : a.Anchor.AnchorType.Start), r.getProperty("vacr") || r.setProperty("vacr", r.oldVacr ? r.oldVacr : a.Anchor.AnchorType.Start));
      }
    } else if (!e && this.getProperty("frm")) {
      for (r = this.getFirstChild(); null != r; r = r.getNext())
        r.hasMixin(a.Anchor) && (r.getProperty("hacr") || r.getProperty("vacr")) && r.resetAnchorProperties();
      this.setProperties([
        "frm",
        "trf"
      ], [
        null,
        i
      ]);
    }
  }, f.prototype.toString = function () {
    return "[GGroup]";
  }, e.exports = f;
}
