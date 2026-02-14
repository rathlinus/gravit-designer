/**
 * Module 1016 - GGLSwirlEffect
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
  n.inherit("GGLSwirlEffect", a, r), a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLSwirlEffect", "name", this.getNodeName());
  }, a.prototype.getEffectPadding = function (e) {
    e && (this.swirlBBox = e);
    var t, i, n = this.swirlBBox ? this.swirlBBox.getWidth() : 0, r = this.swirlBBox ? this.swirlBBox.getHeight() : 0, o = 0.005 * this.$shp.radius * Math.max(n, r), a = n * (0.01 * this.$shp.centerX), s = r * (0.01 * this.$shp.centerY);
    return [
      t = Math.max(a - o < 0 ? o - a : 0, a + o - n > 0 ? a + o - n : 0),
      i = Math.max(s - o < 0 ? o - s : 0, s + o - r > 0 ? s + o - r : 0),
      t,
      i
    ];
  }, a.prototype.getAbsoluteEffectPadding = function () {
    var e = this.swirlBBox ? this.swirlBBox.getWidth() : 0, t = this.swirlBBox ? this.swirlBBox.getHeight() : 0, i = 0.005 * this.$shp.radius * Math.max(e, t), n = Math.abs(Math.sin(this.$shp.angle / 2)) * i;
    return [
      n,
      n,
      n,
      n
    ];
  }, a.GeometryProperties = {
    shp: {
      centerX: 50,
      centerY: 50,
      radius: 50,
      angle: 0.5
    },
    sh: "GGLSwirlShader"
  }, a.RANGES = {
    centerX: [
      0,
      100
    ],
    centerY: [
      0,
      100
    ],
    radius: [
      0,
      100
    ],
    angle: [
      -Math.PI,
      Math.PI
    ]
  }, e.exports = a;
}
