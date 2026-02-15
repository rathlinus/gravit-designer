/**
 * Module 731 - GGLDotScreenEffect
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
  n.inherit("GGLDotScreenEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.isAffectedByChildren = function () {
    return !0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLDotScreenEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      centerX: 50,
      centerY: 50,
      angle: 0,
      size: 10
    },
    sh: "GGLDotScreenShader"
  }, a.RANGES = {
    centerX: [
      0,
      100
    ],
    centerY: [
      0,
      100
    ],
    size: [
      0,
      20
    ],
    angle: [
      0,
      Math.PI / 2
    ]
  }, e.exports = a;
}
