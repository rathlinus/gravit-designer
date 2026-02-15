/**
 * Module 1014 - GGLDenoiseEffect
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
  n.inherit("GGLDenoiseEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.isAffectedByChildren = function () {
    return true;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLDenoiseEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: { exponent: 10 },
    sh: "GGLDenoiseShader"
  }, a.RANGES = {
    exponent: [
      0,
      50
    ]
  }, exports.exports = a;
}
