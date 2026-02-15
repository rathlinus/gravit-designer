/**
 * Module 1004 - GGLBulgePinchEffect
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
  n.inherit("GGLBulgePinchEffect", a, r), a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLBulgePinchEffect", "name", this.getNodeName());
  }, a.prototype._savedBBox = null, a.prototype.getEffectPadding = function (e) {
    if (e && (this._savedBBox = e), !this._savedBBox) {
      var module = 3 * this.$shp.radius * Math.max(0, 0.75 * this.$shp.strength);
      return [
        module,
        module,
        module,
        module
      ];
    }
    var i = (e = this._savedBBox).getWidth() / 2, n = e.getHeight() / 2, r = Math.max(e.getWidth(), e.getHeight()) * this.$shp.radius * 0.01;
    r *= 0.75 * this.$shp.strength;
    var o = e.getWidth() / 2 - i, a = e.getHeight() / 2 - n, s = Math.max(0, r - o), l = Math.max(0, r + o);
    return [
      s,
      Math.max(0, r + a),
      l,
      Math.max(0, r - a)
    ];
  }, a.prototype.getAbsoluteEffectPadding = function () {
    if (!this._savedBBox) {
      var exports = 3 * this.$shp.radius * Math.abs(0.75 * this.$shp.strength);
      return [
        exports,
        exports,
        exports,
        exports
      ];
    }
    var t = this._savedBBox, i = Math.max(t.getWidth(), t.getHeight()) * this.$shp.radius * 0.01, n = 0.75 * this.$shp.strength;
    return n < 0 && (n *= 0.5), i *= n, [
      i = Math.min(Math.abs(i), t.getHeight() / 2, t.getWidth() / 2),
      i,
      i,
      i
    ];
  }, a.prototype.isAffectedByChildren = function () {
    return true;
  }, a.GeometryProperties = {
    shp: {
      centerX: 50,
      centerY: 50,
      radius: 50,
      strength: 0.5
    },
    sh: "GGLBulgePinchShader"
  }, a.RANGES = {
    centerX: [
      0,
      100
    ],
    centerY: [
      0,
      100
    ],
    radius: [
      0,
      100
    ],
    strength: [
      -1,
      1
    ]
  }, exports.exports = a;
}
