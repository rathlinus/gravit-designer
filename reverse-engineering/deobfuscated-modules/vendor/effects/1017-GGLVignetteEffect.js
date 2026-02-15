/**
 * Module 1017 - GGLVignetteEffect
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
  n.inherit("GGLVignetteEffect", a, r), a.prototype.getEffectPadding = function (e) {
    return 0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLVignetteEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      size: 0.2,
      amount: 0.5
    },
    sh: "GGLVignetteShader"
  }, a.RANGES = {
    size: [
      0,
      1
    ],
    amount: [
      0,
      1
    ]
  }, exports.exports = a;
}
