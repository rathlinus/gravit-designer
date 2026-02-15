/**
 * Module 432 - GInnerShadowEffect
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
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(28) /* GStylable */, a = require(17) /* GRGBColor */, s = require(14) /* GPaintCanvas */, l = require(6) /* GRect */, h = require(249) /* GBlurEffect */, A = require(9) /* GLocale */;
  function c() {
    o.Effect.call(this), this._setDefaultProperties(c.GeometryProperties, c.VisualProperties), this._blur = new h();
  }
  r.inherit("innerShadowEffect", c, o.Effect), c.prototype._blur = null, c.equals = function (e, t) {
    return e instanceof c && t instanceof c && e.arePropertiesEqual(t, Object.keys(c.GeometryProperties).concat(Object.keys(c.VisualProperties)));
  }, c.GeometryProperties = {
    r: 5,
    x: 0,
    y: 0
  }, c.VisualProperties = {
    pat: a.BLACK,
    opc: 0.5
  }, c.prototype.getEffectType = function () {
    return o.Effect.Type.PostEffect;
  }, c.prototype.isOverlayEffect = function () {
    return true;
  }, c.prototype.getEffectPadding = function () {
    return 0;
  }, c.prototype.getNodeNameTranslated = function () {
    return A.getValue("GInnerShadowEffect", "name", this.getNodeName());
  }, c.prototype.getAbsoluteEffectPadding = function () {
    return [
      Math.max(0, this.$r + this.$x),
      Math.max(0, this.$r + this.$y),
      Math.max(0, this.$r - this.$x),
      Math.max(0, this.$r - this.$y)
    ];
  }, c.prototype.render = function (e, t, i, n, r, o) {
    if (this.$pat && this.$opc > 0 && this.$r >= 0) {
      var a = t.getTransform(false).inverted().mapRect(new l(0, 0, t.getWidth(), t.getHeight())), h = t.createPatternPaint(this.$pat, a);
      if (h)
        if (h.transform) {
          var A = t.setTransform(t.getTransform(true).preMultiplied(h.transform));
          t.fillRect(0, 0, 1, 1, h.paint, this.$opc), t.setTransform(A);
        } else
          t.fillRect(a.getX(), a.getY(), a.getWidth(), a.getHeight(), h.paint, this.$opc);
      var c = this.$x * n, p = this.$y * n, u = this.$r * n;
      t.drawCanvas(e, c, p, 1, s.CompositeOperator.DestinationOut), u > 0 && (s.disableFilters(), !s.hasFilters() && this._blur._glblur && (this._blur._glblur._isAffectedByGLBug = true), this._blur.$r = this.$r, this._blur.render(t, null, null, n, r, o), s.enableFilters()), t.drawCanvas(e, 0, 0, 1, s.CompositeOperator.DestinationIn);
    }
  }, c.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? (this.storeProperties(t.blob, c.GeometryProperties), this.storeProperties(t.blob, c.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.serialize(t) : t;
    })) : e === r._Change.Restore && (this.restoreProperties(t.blob, c.GeometryProperties), this.restoreProperties(t.blob, c.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.deserialize(t) : t;
    })), this._handleGeometryChangeForProperties(e, t, c.GeometryProperties), this._handleVisualChangeForProperties(e, t, c.VisualProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, c.prototype.toString = function () {
    return "[Object GInnerShadowEffect]";
  }, c.RANGES = {
    r: [
      0,
      200
    ]
  }, c.prototype.destroy = function () {
    this._blur && this._blur.destroy();
  }, exports.exports = c;
}
