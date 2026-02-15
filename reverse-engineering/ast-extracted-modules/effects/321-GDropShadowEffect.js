/**
 * Module 321 - GDropShadowEffect
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
  var n = i(50), r = i(2), o = i(28), a = i(17), s = i(68), l = i(14), h = i(6), A = i(249), c = i(9);
  function p() {
    o.Effect.call(this), this._setDefaultProperties(p.GeometryProperties, p.VisualProperties), this._blur = new A();
  }
  r.inherit("dropShadowEffect", p, o.Effect), p.prototype._blur = null, p.equals = function (e, t) {
    return e instanceof p && t instanceof p && e.arePropertiesEqual(t, Object.keys(p.GeometryProperties).concat(Object.keys(p.VisualProperties)));
  }, p.GeometryProperties = {
    r: 5,
    x: 0,
    y: 0
  }, p.VisualProperties = {
    pat: a.BLACK,
    opc: 0.65
  }, p.prototype.getEffectType = function () {
    return o.Effect.Type.PreEffect;
  }, p.prototype.isOverlayEffect = function () {
    return !0;
  }, p.prototype.getNodeNameTranslated = function () {
    return c.getValue("GDropShadowEffect", "name", this.getNodeName());
  }, p.prototype.getEffectPadding = function () {
    var e = Math.ceil(1.3 * this.$r);
    return [
      e - this.$x,
      e - this.$y,
      e + this.$x,
      e + this.$y
    ];
  }, p.prototype.canApplyNativeEffect = function () {
    return l.hasFilters() && this.$pat instanceof s;
  }, p.prototype.applyNativeEffect = function (e, t, i, n) {
    var r = this.$x * n, o = this.$y * n, a = this.$r * n;
    t.setFilter(l.Filter.DropShadow, [
      r,
      o,
      a,
      this.$pat,
      this.$opc
    ]);
  }, p.prototype.removeNativeEffect = function (e, t, i) {
    t.setFilter(l.Filter.DropShadow, null);
  }, p.prototype.render = function (e, t, i, n, r, o) {
    if (this.$pat && this.$opc > 0)
      if (this.canApplyNativeEffect())
        this.applyNativeEffect(e, t, i, n), t.drawCanvas(e, 0, 0, 1, l.CompositeOperator.Copy), this.removeNativeEffect(e, t);
      else {
        var a = this.$x * n, s = this.$y * n, A = this.$r * n, c = t.getTransform(!1).inverted().mapRect(new h(0, 0, t.getWidth(), t.getHeight())), p = t.createPatternPaint(this.$pat, c);
        if (p)
          if (p.transform) {
            var u = t.setTransform(t.getTransform(!0).preMultiplied(p.transform));
            t.fillRect(0, 0, 1, 1, p.paint, this.$opc), t.setTransform(u);
          } else
            t.fillRect(c.getX(), c.getY(), c.getWidth(), c.getHeight(), p.paint, this.$opc);
        t.drawCanvas(e, a, s, 1, l.CompositeOperator.DestinationIn), A > 0 && (this._blur.$r = this.$r, this._blur.render(t, null, null, n, r, o)), t.drawCanvas(e, 0, 0, 1, l.CompositeOperator.DestinationOut);
      }
  }, p.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? (this.storeProperties(t.blob, p.GeometryProperties), this.storeProperties(t.blob, p.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.serialize(t) : t;
    })) : e === r._Change.Restore && (this.restoreProperties(t.blob, p.GeometryProperties), this.restoreProperties(t.blob, p.VisualProperties, function (e, t) {
      return t && "pat" === e && t ? n.deserialize(t) : t;
    })), this._handleGeometryChangeForProperties(e, t, p.GeometryProperties), this._handleVisualChangeForProperties(e, t, p.VisualProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, p.prototype.toString = function () {
    return "[Object GDropShadowEffect]";
  }, p.RANGES = {
    r: [
      0,
      200
    ]
  }, p.prototype.destroy = function () {
    this._blur && this._blur.destroy();
  }, e.exports = p;
}
