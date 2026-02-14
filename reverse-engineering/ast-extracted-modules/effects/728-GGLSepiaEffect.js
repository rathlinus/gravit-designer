/**
 * Module 728 - GGLSepiaEffect
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
  function l() {
    r.call(this), this._setDefaultProperties(l.GeometryProperties);
  }
  n.inherit("GGLSepiaEffect", l, r), l.prototype.getNodeNameTranslated = function () {
    return s.getValue("GGLSepiaEffect", "name", this.getNodeName());
  }, l.GeometryProperties = {
    shp: { amount: 0.5 },
    sh: "GGLSepiaShader"
  }, l.RANGES = {
    amount: [
      0,
      1
    ]
  }, l.prototype.getEffectPadding = function () {
    return 0;
  }, l.prototype.canApplyNativeEffect = function () {
    return o.hasFilters();
  }, l.prototype.applyNativeEffect = function (e, t, i, n) {
    e.setFilter(o.Filter.Sepia, a.clamp(0, this.$shp.amount, 1));
  }, l.prototype.removeNativeEffect = function (e, t, i) {
    e.setFilter(o.Filter.Sepia, null);
  }, e.exports = l;
}
