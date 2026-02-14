/**
 * Module 1022 - GGLSketchEffect
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
  n.inherit("GGLSketchEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLSketchEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: { strength: 0.5 },
    sh: "GGLSketchShader"
  }, a.RANGES = {
    strength: [
      0,
      2
    ]
  }, e.exports = a;
}
