/**
 * Module 159 - GLayer
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
  var n = i(50), r = i(2), o = i(17), a = i(112), s = i(69), l = i(133), h = i(22), A = i(6), c = i(73), p = i(7), u = i(14), d = i(9);
  function g() {
    s.call(this), this._setDefaultProperties(g.VisualProperties), this._setDefaultProperties(g.GeometryProperties);
  }
  r.inheritAndMix("layer", g, s, [
    r.Container,
    h.Transform,
    h.Layout,
    h.Anchor,
    h.Stylable,
    h.Accelerated
  ]), g.VisualProperties = {
    otl: !1,
    prt: !0,
    cls: new o([
      0,
      168,
      255
    ])
  }, g.GeometryProperties = { frm: !1 }, g.prototype.validateInsertion = function (e, t) {
    return e instanceof g || "page" === r.getName(e);
  }, g.prototype.transform = function (e, t, i) {
    if (e && !e.isIdentity()) {
      var n = this.getProperty("frm");
      this._relayoutNow = !1, n && (this._relayoutNow = !this._relayout, this._relayout = !0), this.beginUpdate();
      try {
        if (n) {
          var r = p.correctForFrame(e, n);
          r && !r.isIdentity() && this.setProperty("frm", r.mapRect(n));
        }
        n && this.dependentUpdate && !t || h.Transform.prototype._transformChildren.call(this, e, t, i);
      } finally {
        this.endUpdate();
      }
      if (n && this._relayoutNow) {
        var o = this.getProperty("frm");
        this._layoutAnchorContents(o, n, null), this._relayoutNow = !1;
      }
    }
  }, g.prototype.getNodeNameTranslated = function () {
    return d.getValue("GLayer", "name", this.getNodeName());
  }, g.prototype._calculateGeometryBBox = function (e) {
    var t = this.getProperty("frm");
    return t || s.prototype._calculateGeometryBBox.call(this, e);
  }, g.prototype._calculatePaintBBox = function (e, t) {
    var i;
    return i = this.getProperty("frm") ? this.getGeometryBBox(t) : s.prototype._calculatePaintBBox.call(this, e, t), this.getEffects() ? this.getEffects().getEffectsBBox(i, null, i) : i;
  }, g.prototype._calculatePreTransformRect = function (e) {
    if (!e || !e.invertible())
      return this.getGeometryBBox();
    var t = this.getProperty("frm");
    if (t) {
      var i = e.inverted().mapQuadrilateral(t);
      return A.fromPoints.apply(null, i);
    }
    for (var n = null, r = this.getFirstChild(); null != r; r = r.getNext())
      if (r instanceof h) {
        var o = r.getPreTransformRect(e);
        o && (n = n ? n.united(o) : o);
      }
    return n;
  }, g.prototype._preparePaint = function (e) {
    return !!s.prototype._preparePaint.call(this, e) && !(!this.$prt && !e.configuration.isAnnotationsVisible(e)) && (e.configuration.paintMode !== l.PaintMode.Outline && this.$otl && e.outlineColors.push(this.$cls), !0);
  }, g.prototype._finishPaint = function (e) {
    e.configuration.paintMode !== l.PaintMode.Outline && this.$otl && e.outlineColors.pop(), s.prototype._finishPaint.call(this, e);
  }, g.prototype._paintStyleContent = function (e, t, i, n, r) {
    var a = this.getProperty("frm");
    if (a && this.getFirstChild()) {
      var s = new c(a.getX(), a.getY(), a.getWidth(), a.getHeight());
      if (e.canvas.hasClip()) {
        var l = this._createStyleCanvas(e, this.getGeometryBBox()), h = e.pushCanvas(l);
        try {
          if (void 0 !== l.putVertices(s)) {
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
          this._paintChildren(e), void 0 !== e.canvas.putVertices(s) && e.canvas.fillVertices(o.BLACK, 1, u.CompositeOperator.DestinationIn), h.drawCanvas(e.canvas), e.canvas.finish();
        } finally {
          e.popCanvas();
        }
      }
    } else
      this._paintChildren(e);
  }, g.prototype._detailHitTest = function (e, t, i, n) {
    return new a(this);
  }, g.prototype._handleChange = function (e, t) {
    this._handleGeometryChangeForProperties(e, t, g.GeometryProperties), e === r._Change.Store ? (this.storeProperties(t.blob, g.VisualProperties, function (e, t) {
      return "cls" === e && t ? n.serialize(t) : t;
    }), this.storeProperties(t.blob, g.GeometryProperties, function (e, t) {
      return "frm" === e && t ? A.serialize(t) : t;
    }), this.hasFlag(r.Flag.Active) && (t.blob.__active = !0)) : e === r._Change.Restore && (this.restoreProperties(t.blob, g.VisualProperties, function (e, t) {
      return "cls" === e && t ? n.deserialize(t) : t;
    }), this.restoreProperties(t.blob, g.GeometryProperties, function (e, t) {
      return "frm" === e && t ? A.deserialize(t) : t;
    }), t.blob.__active && this.setFlag(r.Flag.Active)), this._handleVisualChangeForProperties(e, t, g.VisualProperties);
    var i = !1;
    if (e == h._Change.ChildGeometryUpdate && t && t[0] && t[0].getParent() === this && (this._notifyChange(h._Change.PrepareGeometryUpdate), i = !0), s.prototype._handleChange.call(this, e, t), this._handleAnchorChange.call(this, e, t), e == h._Change.ChildGeometryUpdate && i) {
      var o = t[2];
      !o && t[0] && t[0] instanceof h && (o = t[0].getPaintBBox()), this._notifyChange(h._Change.FinishGeometryUpdate, [
        2,
        o
      ]);
    } else
      e != h._Change.PrepareChildAnchoring || this.getProperty("frm") || this.setFrame(!0);
  }, g.prototype.setFrame = function (e) {
    if (e && !this.getProperty("frm")) {
      var t = this.getGeometryBBox();
      if (t) {
        this.setProperties(["frm"], [t]);
        for (var i = this.getFirstChild(); null != i; i = i.getNext())
          i.hasMixin(h.Anchor) && (i.getProperty("hacr") || i.setProperty("hacr", i.oldHacr ? i.oldHacr : h.Anchor.AnchorType.Start), i.getProperty("vacr") || i.setProperty("vacr", i.oldVacr ? i.oldVacr : h.Anchor.AnchorType.Start));
      }
    } else if (!e && this.getProperty("frm")) {
      for (i = this.getFirstChild(); null != i; i = i.getNext())
        i.hasMixin(h.Anchor) && (i.getProperty("hacr") || i.getProperty("vacr")) && i.resetAnchorProperties();
      this.setProperties(["frm"], [null]);
    }
  }, g.prototype._handleAnchorChange = function (e, t) {
    if (h.Anchor.prototype._handleAnchorChange.call(this, e, t), e === r._Change.AfterPropertiesChange && !this.isRecordedTransaction() && t.properties.indexOf("frm") >= 0 && (this.getProperty("hacr") || this.getProperty("vacr")) && !this.isRestoring())
      if (this.dependentUpdate) {
        if (!this._noAnchoringPropsUpdate) {
          var i = t.properties.indexOf("frm"), n = this.getProperty("frm"), o = t.values[i], a = o.getWidth() > h.Transform.MinimalDimention ? o.getWidth() : h.Transform.MinimalDimention, s = o.getHeight() > h.Transform.MinimalDimention ? o.getHeight() : h.Transform.MinimalDimention, l = n.getWidth() > h.Transform.MinimalDimention ? n.getWidth() : h.Transform.MinimalDimention, A = n.getHeight() > h.Transform.MinimalDimention ? n.getHeight() : h.Transform.MinimalDimention, c = new p().translated(-o.getX(), -o.getY()).scaled(l / a, A / s).translated(n.getX(), n.getY());
          if (this.getProperty("hacr")) {
            var u = this.getProperty("hstrf");
            u = u ? u.multiplied(c) : c, this.setProperty("hstrf", u);
          }
          if (this.getProperty("vacr")) {
            var d = this.getProperty("vstrf");
            d = d ? d.multiplied(c) : c, this.setProperty("vstrf", d);
          }
        }
      } else {
        var g = this.getProperty("hacr"), f = this.getProperty("vacr");
        this.resetAnchorProperties(), this.setProperties([
          "hacr",
          "vacr"
        ], [
          g,
          f
        ]);
      }
  }, e.exports = g;
}
