/**
 * Module 1032 - GGLBendEffect
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
  n.inherit("GGLBendEffect", a, r), a.prototype.getNodeNameTranslated = function () {
    return o.getValue("GGLBendEffect", "name", this.getNodeName());
  }, a.prototype.getEffectPadding = function () {
    var e = this.$shp.radius * Math.sin(this.$shp.strengthX * Math.PI / 2), t = this.$shp.radius * Math.sin(this.$shp.strengthY * Math.PI / 2);
    return [
      Math.max(e, 0),
      Math.max(t, 0),
      Math.max(-e, 0),
      Math.max(-t, 0)
    ];
  }, a.prototype.getAbsoluteEffectPadding = function () {
    var e = Math.abs(this.$shp.radius * Math.sin(this.$shp.strengthX * Math.PI / 2)), t = Math.abs(this.$shp.radius * Math.sin(this.$shp.strengthY * Math.PI / 2));
    return [
      e,
      t,
      e,
      t
    ];
  }, a.prototype.isAffectedByChildren = function () {
    return true;
  }, a.GeometryProperties = {
    shp: {
      strengthX: 0.5,
      strengthY: 0,
      radius: 50
    },
    sh: "GGLBendShader"
  }, a.RANGES = {
    strengthX: [
      -1,
      1
    ],
    strengthY: [
      -1,
      1
    ],
    radius: [
      0,
      100
    ]
  }, exports.exports = a;
}
