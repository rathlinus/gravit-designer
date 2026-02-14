/**
 * Module 1028 - GContactShadowEffect
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
  var n = i(50), r = i(68), o = i(2), a = i(28), s = i(7), l = i(17), h = i(158), A = i(14), c = i(6), p = i(12), u = i(249), d = i(9);
  function g() {
    a.Effect.call(this), this._setDefaultProperties(g.GeometryProperties, g.VisualProperties), this._blur = new u();
  }
  o.inherit("contactShadowEffect", g, a.Effect), g.prototype._savedBBox = null, g.prototype._padding = null, g.prototype._blur = null, g.equals = function (e, t) {
    return e instanceof g && t instanceof g && e.arePropertiesEqual(t, Object.keys(g.GeometryProperties).concat(Object.keys(g.VisualProperties)));
  }, g.GeometryProperties = {
    r: 5,
    a: 5,
    o: 5
  }, g.VisualProperties = {
    pat: l.BLACK,
    opc: 0.75
  }, g.prototype.isOverlayEffect = function () {
    return !0;
  }, g.prototype.getNodeNameTranslated = function () {
    return d.getValue("GContactShadowEffect", "name", this.getNodeName());
  }, g.prototype.getEffectType = function () {
    return a.Effect.Type.PostEffect;
  }, g.prototype.getEffectPadding = function (e) {
    var t = this.getParent().getEffectsPadding(e, null, function (e) {
      return e !== this;
    }.bind(this));
    e && (this._savedBBox = e), t && (this._savedBBox && (this._savedBBox = this._savedBBox.expanded(t[0], t[1], t[2], t[3])), this._padding = t[3]);
    var i = this._savedBBox ? this._getIsometricTransform().mapRect(this._savedBBox).getHeight() : 0;
    return [
      this.$r,
      this.$r - i - this.$o,
      this.$r,
      this.$r + i + this.$o
    ];
  }, g.prototype.render = function (e, t, i, n, o, a) {
    if (this.$pat && this.$opc > 0) {
      if (!this._savedBBox)
        return;
      var p = t.getScale();
      1 != t.getScale() && t.setScale(1);
      var u = t.getOffset(), d = i.getTransform(!1).mapRect(this._savedBBox), g = (this._padding || 0) * n, f = this._getIsometricTransform().mapRect(this._savedBBox).getHeight() * n, m = this.$r * n, y = this.$o * n, _ = u.getX(), v = u.getY() + d.getHeight() + y - g, b = new s().translated(_, v).preMultiplied(this._getIsometricTransform()), C = t.setTransform(t.getTransform(!0).preMultiplied(b));
      t.drawImage(e, 0, 0, 1, this.$opc), t.setScale(p), t.setTransform(C);
      var w = this.$pat;
      if (!(w instanceof r))
        if (w instanceof h) {
          var E = w.getStops();
          w = E && E[0] && E[0].color && E[0].color instanceof r ? E[0].color : l.BLACK;
        } else
          w = l.BLACK;
      var B = new h([
          {
            color: w,
            position: 0,
            opacity: 1
          },
          {
            color: l.WHITE,
            position: 1,
            opacity: 0
          }
        ]), x = t.getTransform(!1).inverted().mapRect(new c(0, v - u.getY(), t.getWidth(), f)), P = t.createPatternPaint(B, x);
      if (P)
        if (P.transform) {
          C = t.setTransform(t.getTransform(!0).preMultiplied(P.transform));
          t.fillRect(0, 0, 1, 1, P.paint, 1, A.CompositeOperator.SourceIn), t.setTransform(C);
        } else
          t.fillRect(x.getX(), x.getY(), x.getWidth(), x.getHeight(), P.paint, 1, A.CompositeOperator.SourceIn);
      m > 0 && (this._blur.$r = this.$r, this._blur.render(t, null, null, n, o, a));
    }
  }, g.prototype._getIsometricTransform = function () {
    var e = p.toRadians(90 - this.$a);
    return new s(Math.cos(0), Math.cos(e) * Math.sin(0), -Math.sin(0), Math.cos(e) * Math.cos(0), 0, 0);
  }, g.prototype._handleChange = function (e, t) {
    e === o._Change.Store ? (this.storeProperties(t.blob, g.GeometryProperties), this.storeProperties(t.blob, g.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.serialize(t) : t;
    })) : e === o._Change.Restore && (this.restoreProperties(t.blob, g.GeometryProperties), this.restoreProperties(t.blob, g.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.deserialize(t) : t;
    })), this._handleVisualChangeForProperties(e, t, g.VisualProperties), this._handleGeometryChangeForProperties(e, t, g.GeometryProperties), a.Effect.prototype._handleChange.call(this, e, t);
  }, g.prototype.toString = function () {
    return "[Object GContactShadow]";
  }, g.RANGES = {
    r: [
      5,
      200
    ]
  }, g.prototype.destroy = function () {
    this._blur && this._blur.destroy(), this._savedBBox = null, this._padding = null;
  }, e.exports = g;
}
