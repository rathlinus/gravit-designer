/**
 * Module 1015 - GGLOuterGlowEffect
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
  var n = require(2) /* GNode */, r = require(51) /* GWebGLEffect */, o = require(28) /* GStylable */, a = require(9) /* GLocale */;
  function s() {
    r.call(this), this._setDefaultProperties(s.GeometryProperties);
  }
  n.inherit("GGLOuterGlowEffect", s, r), s.prototype.getEffectType = function () {
    return o.Effect.Type.PostEffect;
  }, s.prototype.getEffectPadding = function () {
    return this.$shp.radius;
  }, s.prototype.propertyTransform = function (e, t) {
    switch (e) {
    case "radius":
      return r.polynomialTransform(t, 2, s.RANGES.radius);
    }
    return t;
  }, s.prototype.propertyInverseTransform = function (e, t) {
    switch (e) {
    case "radius":
      return r.polynomialInverseTransform(t, 2, s.RANGES.radius);
    }
    return t;
  }, s.prototype.getNodeNameTranslated = function () {
    return a.getValue("GGLOuterGlowEffect", "name", this.getNodeName());
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
    sh: "GGLOuterGlowShader"
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
