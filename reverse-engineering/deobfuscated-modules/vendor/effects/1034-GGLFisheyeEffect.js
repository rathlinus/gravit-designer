/**
 * Module 1034 - GGLFisheyeEffect
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
  n.inherit("GGLFisheyeEffect", a, r), a.prototype.getEffectPadding = function () {
    return 100;
  }, a.prototype.getAbsoluteEffectPadding = function () {
    return this.$shp.strength < -50 ? 100 + Math.abs(this.$shp.strength + 50) : 100;
  }, a.prototype.isAffectedByChildren = function () {
    return true;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLFisheyeEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: { strength: 50 },
    sh: "GGLFishEyeShader"
  }, a.RANGES = {
    strength: [
      -100,
      100
    ]
  }, exports.exports = a;
}
