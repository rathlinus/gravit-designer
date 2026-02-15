/**
 * Module 839 - GGLZoomBlurEffect
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
  n.inherit("GGLZoomBlurEffect", a, r), a.prototype._savedBBox = null, a.prototype.getEffectPadding = function (e) {
    e && (this._savedBBox = e);
    var t = this._savedBBox ? this._savedBBox.getWidth() : 0, i = this._savedBBox ? this._savedBBox.getHeight() : 0, n = 0.01 * t * this.$shp.centerX, r = 0.01 * i * this.$shp.centerY, o = 2 * this.$shp.strength;
    return [
      o * (n + 1),
      o * (r + 1),
      o * (t - n + 1),
      o * (i - r + 1)
    ];
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLZoomBlurEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      centerX: 50,
      centerY: 50,
      strength: 0.3
    },
    sh: "GGLZoomBlurShader"
  }, a.RANGES = {
    centerX: [
      0,
      100
    ],
    centerY: [
      0,
      100
    ],
    strength: [
      0,
      0.5
    ]
  }, e.exports = a;
}
