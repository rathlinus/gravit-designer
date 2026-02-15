/**
 * Module 1007 - GGLHexagonalEffect
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
  n.inherit("GGLHexagonalEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.isAffectedByChildren = function () {
    return true;
  }, a.GeometryProperties = {
    shp: {
      centerX: 50,
      centerY: 50,
      scale: 1
    },
    sh: "GGLHexagonalShader"
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLHexagonalEffect", "name", this.getNodeName());
  }, a.RANGES = {
    centerX: [
      0,
      100
    ],
    centerY: [
      0,
      100
    ],
    scale: [
      0,
      100
    ]
  }, exports.exports = a;
}
