/**
 * Module 730 - GGLBrightnessContrastEffect
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
  var n = require(2) /* GNode */, r = require(51) /* GWebGLEffect */, o = require(14) /* GPaintCanvas */, a = require(12) /* GMath */, s = require(9) /* GLocale */;
  function l() {
    r.call(this), this._setDefaultProperties(l.GeometryProperties);
  }
  n.inherit("GGLBrightnessContrastEffect", l, r), l.GeometryProperties = {
    shp: {
      brightness: 0,
      contrast: 0
    },
    sh: "GGLBrightnessContrastShader"
  }, l.prototype.getNodeNameTranslated = function () {
    return s.getValue("GGLBrightnessContrastEffect", "name", this.getNodeName());
  }, l.RANGES = {
    brightness: [
      -1,
      1
    ],
    contrast: [
      -1,
      1
    ]
  }, l.prototype.getEffectPadding = function () {
    return 0;
  }, l.prototype.canApplyNativeEffect = function () {
    return !!o.hasFilters() && 0 == this.$shp.brightness;
  }, l.prototype.applyNativeEffect = function (e, t, i, n) {
    var r = a.clamp(-1, this.$shp.brightness, 1) + 1, s = this.$shp.contrast;
    s > 0 ? (s > 1 && (s = 1), s = 1 + s / (1.001 - s)) : s = 1 + a.clamp(-1, s, 0), e.setFilter(o.Filter.Brightness, r), e.setFilter(o.Filter.Contrast, s);
  }, l.prototype.removeNativeEffect = function (e, t, i) {
    e.setFilter(o.Filter.Brightness, null), e.setFilter(o.Filter.Contrast, null);
  }, exports.exports = l;
}
