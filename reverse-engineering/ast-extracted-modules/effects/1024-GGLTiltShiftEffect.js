/**
 * Module 1024 - GGLTiltShiftEffect
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
  n.inherit("GGLTiltShiftEffect", a, r), a.prototype.getEffectPadding = function () {
    return this.$shp.blurRadius;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLTiltShiftEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      startX: 25,
      startY: 50,
      endX: 75,
      endY: 50,
      blurRadius: 10,
      gradientRadius: 30
    },
    sh: "GGLTiltShiftShader"
  }, a.RANGES = {
    startX: [
      0,
      100
    ],
    startY: [
      0,
      100
    ],
    endX: [
      0,
      100
    ],
    endY: [
      0,
      100
    ],
    blurRadius: [
      0,
      50
    ],
    gradientRadius: [
      0,
      100
    ]
  }, e.exports = a;
}
