/**
 * Module 1010 - GGLInnerGlowEffect
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
  var n = require(28) /* GStylable */, r = require(2) /* GNode */, o = require(51) /* GWebGLEffect */, a = require(9) /* GLocale */;
  function s() {
    o.call(this), this._setDefaultProperties(s.GeometryProperties);
  }
  r.inherit("GGLInnerGlowEffect", s, o), s.prototype.getEffectType = function () {
    return n.Effect.Type.Filter;
  }, s.prototype.getEffectPadding = function () {
    return 1;
  }, s.prototype.propertyTransform = function (e, t) {
    switch (e) {
    case "radius":
      return o.polynomialTransform(t, 2, s.RANGES.radius);
    }
    return t;
  }, s.prototype.propertyInverseTransform = function (e, t) {
    switch (e) {
    case "radius":
      return o.polynomialInverseTransform(t, 2, s.RANGES.radius);
    }
    return t;
  }, s.prototype.getNodeNameTranslated = function () {
    return a.getValue("GGLInnerGlowEffect", "name", this.getNodeName());
  }, s.GeometryProperties = {
    shp: {
      radius: 5,
      intensity: 1,
      color: [
        255,
        255,
        224
      ],
      opacity: {
        type: "opacity",
        value: 1
      }
    },
    sh: "GGLInnerGlowShader"
  }, s.RANGES = {
    radius: [
      0,
      50
    ],
    intensity: [
      0,
      2
    ]
  }, exports.exports = s;
}
