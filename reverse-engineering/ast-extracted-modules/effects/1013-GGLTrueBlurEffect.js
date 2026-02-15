/**
 * Module 1013 - GGLTrueBlurEffect
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
  var n = i(2), r = i(51), o = i(9);
  function a() {
    r.call(this), this._setDefaultProperties(a.GeometryProperties);
  }
  n.inherit("GGLTrueBlurEffect", a, r), a.prototype.getEffectPadding = function () {
    return this.$shp.radius;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLTrueBlurEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: { radius: 5 },
    sh: "GGLTrueBlurShader"
  }, a.RANGES = {
    radius: [
      0,
      50
    ]
  }, e.exports = a;
}
