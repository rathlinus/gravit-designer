/**
 * Module 1020 - GGLUnsharpMaskEffect
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
  n.inherit("GGLUnsharpMaskEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLUnsharpMaskEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      radius: 0,
      strength: 0
    },
    sh: "GGLUnsharpMaskShader"
  }, a.RANGES = {
    radius: [
      0,
      200
    ],
    strength: [
      0,
      5
    ]
  }, exports.exports = a;
}
