/**
 * Module 588 - GGLColorAdjustEffect
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
  var n = i(2), r = i(51), o = i(14), a = i(12), s = i(9);
  function l(e) {
    r.call(this), this._setDefaultProperties(l.GeometryProperties), this._setDefaultProperties(l.MetaProperties), e && (this.$comp = e);
  }
  n.inherit("GGLColorAdjustEffect", l, r), l.GeometryProperties = {
    shp: {
      brightness: 0,
      contrast: 0,
      hue: 0,
      saturation: 0
    },
    sh: "GGLColorAdjustShader"
  }, l.MetaProperties = { comp: !0 }, l.RANGES = {
    brightness: [
      -1,
      1
    ],
    contrast: [
      -1,
      1
    ],
    hue: [
      -1,
      1
    ],
    saturation: [
      -1,
      1
    ]
  }, l.prototype._compatibilityMode = !1, l.prototype._lastCanvasScale = null, l.prototype.getNodeNameTranslated = function () {
    return s.getValue("GGLColorAdjustEffect", "name", this.getNodeName());
  }, l.prototype.getEffectPadding = function () {
    return 0;
  }, l.prototype.isCacheable = function (e) {
    return !(!this._lastCanvasScale || this._lastCanvasScale !== e.getScale()) || (this._lastCanvasScale = e.getScale(), !1);
  }, l.prototype._handleChange = function (e, t) {
    e === n._Change.Store ? this.storeProperties(t.blob, l.MetaProperties) : e === n._Change.Restore && this.restoreProperties(t.blob, l.MetaProperties), r.prototype._handleChange.call(this, e, t);
  }, l.prototype.canApplyNativeEffect = function () {
    if (!o.hasFilters())
      return !1;
    if (this.$shp.brightness > 0)
      return !1;
    if (this.$comp) {
      if (this.$shp.brightness < 0)
        return !1;
      if (this.$shp.saturation < 0)
        return !1;
      if (0 != this.$shp.hue)
        return !1;
    }
    return !0;
  }, l.prototype.applyNativeEffect = function (e, t, i, n) {
    var r = this.$shp.brightness, s = this.$shp.contrast, l = this.$shp.hue, h = this.$shp.saturation;
    h > 0 ? (h > 1 && (h = 1), h = 1 + h / (1.001 - h)) : h = 1 + a.clamp(-1, h, 0), r = a.clamp(-1, r, 1) + 1, r *= r, s > 0 ? (s > 1 && (s = 1), s = 1 + s / (1.001 - s)) : s = 1 + a.clamp(-1, s, 0), l = Math.PI * a.clamp(-1, l, 1), e.setFilter(o.Filter.Brightness, r), e.setFilter(o.Filter.Contrast, s), e.setFilter(o.Filter.HueRotate, l), e.setFilter(o.Filter.Saturate, h);
  }, l.prototype.removeNativeEffect = function (e, t, i) {
    e.setFilter(o.Filter.Brightness, null), e.setFilter(o.Filter.Contrast, null), e.setFilter(o.Filter.HueRotate, null), e.setFilter(o.Filter.Saturate, null);
  }, e.exports = l;
}
