/**
 * Module 1025 - GGLRecolourEffect
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
  n.inherit("GGLRecolourEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.GeometryProperties = {
    shp: {
      hue: 1,
      saturation: 1
    },
    sh: "GGLRecolourShader"
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLRecolourEffect", "name", this.getNodeName());
  }, a.RANGES = {
    hue: [
      0,
      1
    ],
    saturation: [
      0,
      1
    ]
  }, exports.exports = a;
}
