/**
 * Module 1005 - GGLEdgeWorkEffect
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
  n.inherit("GGLEdgeWorkEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.isAffectedByChildren = function () {
    return !0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLEdgeWorkEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: { radius: 10 },
    sh: "GGLEdgeWorkShader"
  }, a.RANGES = {
    radius: [
      1,
      200
    ]
  }, e.exports = a;
}
