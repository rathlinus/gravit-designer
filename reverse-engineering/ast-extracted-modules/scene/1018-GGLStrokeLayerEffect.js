/**
 * Module 1018 - GGLStrokeLayerEffect
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
  var n = i(2), r = i(51), o = i(17), a = i(47), s = i(9);
  function l() {
    r.call(this), this._setDefaultProperties(l.GeometryProperties);
  }
  n.inherit("GGLStrokeLayerEffect", l, r), l.prototype.getEffectPadding = function () {
    return 0 == this.$shp.placement.value ? this.$shp.width + 1 : 1 == this.$shp.placement.value ? 1 : 1 + Math.ceil(this.$shp.width / 2);
  }, l.prototype.propertyTransform = function (e, t) {
    switch (e) {
    case "width":
      return r.polynomialTransform(t, 2, l.RANGES.width);
    case "softness":
      return r.polynomialTransform(t, 2, l.RANGES.softness);
    }
    return t;
  }, l.prototype.getNodeNameTranslated = function () {
    return s.getValue("GGLStrokeLayerEffect", "name", this.getNodeName());
  }, l.prototype.propertyInverseTransform = function (e, t) {
    switch (e) {
    case "width":
      return r.polynomialInverseTransform(t, 2, l.RANGES.width);
    case "softness":
      return r.polynomialInverseTransform(t, 2, l.RANGES.softness);
    }
    return t;
  }, l.GeometryProperties = {
    shp: {
      width: 5,
      softness: 0.5,
      shape: 0.7071,
      color: o.WHITE.getValue(),
      opacity: {
        type: "opacity",
        value: 1
      },
      ellyptical: !1,
      placement: {
        type: "dropdown",
        value: 0
      }
    },
    sh: "GGLStrokeLayerShader"
  }, l.RANGES = {
    width: [
      0,
      100
    ],
    softness: [
      0.01,
      1
    ],
    shape: [
      0,
      2
    ],
    placement: [
      new a("GGLStrokeLayerEffect", "text.outside"),
      new a("GGLStrokeLayerEffect", "text.inside"),
      new a("GGLStrokeLayerEffect", "text.center")
    ]
  }, e.exports = l;
}
