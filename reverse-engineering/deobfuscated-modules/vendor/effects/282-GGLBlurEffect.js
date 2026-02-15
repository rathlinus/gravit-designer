/**
 * Module 282 - GGLBlurEffect
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
  var n = require(2) /* GNode */, r = require(51) /* GWebGLEffect */, o = require(206) /* module */, a = require(365) /* module */, s = require(226) /* module */, l = require(14) /* GPaintCanvas */, h = require(9) /* GLocale */;
  function A() {
    r.call(this), this._setDefaultProperties(A.GeometryProperties);
  }
  n.inherit("GGLBlurEffect", A, r), A.prototype._blurShader = null, A.prototype._clipBlurShader = null, A.prototype.setAffectedByGLBug = function (e) {
    this._isAffectedByGLBug = e;
  }, A.prototype.getEffectPadding = function () {
    return this.$shp.clip ? 0 : this.$shp.radius;
  }, A.prototype.getAbsoluteEffectPadding = function () {
    return this.$shp.radius;
  }, A.prototype.getNodeNameTranslated = function () {
    return h.getValue("GGLBlurEffect", "name", this.getNodeName());
  }, A.prototype.canApplyNativeEffect = function () {
    return this.$shp.radius && !this.$shp.clip && l.hasFilters();
  }, A.prototype.applyNativeEffect = function (e, t, i, n) {
    e.setFilter(l.Filter.Blur, this.$shp.radius * n);
  }, A.prototype.removeNativeEffect = function (e, t, i) {
    e.setFilter(l.Filter.Blur, null);
  }, A.prototype.prepareShader = function () {
    return !!s.getGLContext() && (this.$shp.clip ? (this._clipBlurShader || (this._clipBlurShader = new a(this)), this.shaderInstance instanceof a || (this.shaderInstance = this._clipBlurShader)) : (this._blurShader || (this._blurShader = new o(this)), this.shaderInstance instanceof o || (this.shaderInstance = this._blurShader)), r.prototype.prepareShader.call(this));
  }, A.prototype.getShaderClass = function () {
    return this.$shp.clip ? a : o;
  }, A.prototype._destroy = function () {
    this._blurShader && (this._blurShader.destroy(), this._blurShader = null), this._clipBlurShader && (this._clipBlurShader.destroy(), this._clipBlurShader = null), this.shaderInstance = null, r.prototype._destroy.call(this);
  }, A.GeometryProperties = {
    shp: {
      radius: 5,
      clip: false
    },
    sh: "GGLBlurShader"
  }, A.RANGES = {
    radius: [
      0,
      50
    ]
  }, exports.exports = A;
}
