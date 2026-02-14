/**
 * Module 1011 - GGLToonEffect
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
  n.inherit("GGLToonEffect", a, r), a.prototype.getEffectPadding = function () {
    return 0;
  }, a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLToonEffect", "name", this.getNodeName());
  }, a.GeometryProperties = {
    shp: {
      threshold: 0.2,
      quantization: 10
    },
    sh: "GGLToonShader"
  }, a.RANGES = {
    threshold: [
      0,
      2
    ],
    quantization: [
      0,
      20
    ]
  }, e.exports = a;
}
