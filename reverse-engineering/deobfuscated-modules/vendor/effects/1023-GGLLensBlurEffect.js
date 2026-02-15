/**
 * Module 1023 - GGLLensBlurEffect
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
  var n = require(2) /* GNode */, r = require(51) /* GWebGLEffect */, o = require(9) /* GLocale */;
  function a() {
    r.call(this), this._setDefaultProperties(a.GeometryProperties);
  }
  n.inherit("GGLLensBlurEffect", a, r), a.prototype.getEffectPadding = function () {
    return this.$shp.radius;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLLensBlurEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      radius: 10,
      brightness: 0,
      angle: 0
    },
    sh: "GGLLensBlurShader"
  }, a.RANGES = {
    radius: [
      0,
      50
    ],
    brightness: [
      -1,
      1
    ],
    angle: [
      -Math.PI,
      Math.PI
    ]
  }, exports.exports = a;
}
