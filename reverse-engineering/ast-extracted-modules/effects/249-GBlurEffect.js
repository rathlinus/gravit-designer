/**
 * Module 249 - GBlurEffect
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
  var n = i(931), r = i(2), o = i(28), a = i(282), s = i(226), l = i(14), h = i(9);
  function A() {
    o.Effect.call(this), this._setDefaultProperties(A.GeometryProperties), s.getGLContext() && (this._glblur = new a());
  }
  r.inherit("blurEffect", A, o.Effect), A.prototype._glblur = null, A.equals = function (e, t) {
    return e instanceof A && t instanceof A && e.arePropertiesEqual(t, Object.keys(A.GeometryProperties));
  }, A.GeometryProperties = {
    r: 5,
    b: !1
  }, A.prototype.getEffectType = function () {
    return o.Effect.Type.Filter;
  }, A.prototype.getNodeNameTranslated = function () {
    return h.getValue("GBlurEffect", "name", this.getNodeName());
  }, A.prototype.getEffectPadding = function () {
    return this.$b ? this._glblur ? 0 : -1 : this.$r;
  }, A.prototype.getAbsoluteEffectPadding = function () {
    return this.$r;
  }, A.prototype.propertyTransform = function (e, t) {
    return this._glblur ? this._glblur.propertyTransform(e, t) : t;
  }, A.prototype.propertyInverseTransform = function (e, t) {
    return this._glblur ? this._glblur.propertyInverseTransform(e, t) : t;
  }, A.prototype.canApplyNativeEffect = function () {
    return l.hasFilters() && !this.$b;
  }, A.prototype.applyNativeEffect = function (e, t, i, n) {
    e.setFilter(l.Filter.Blur, this.$r * n);
  }, A.prototype.removeNativeEffect = function (e, t, i) {
    e.setFilter(l.Filter.Blur, null);
  }, A.prototype.render = function (e, t, i, r, o, a) {
    return this.$r && (this.canApplyNativeEffect() ? (this.applyNativeEffect(e, t, i, r), e.drawCanvas(e, 0, 0, 1, l.CompositeOperator.Copy), this.removeNativeEffect(e)) : this._glblur ? (this._glblur.$shp = {
      radius: this.$r,
      clip: this.$b
    }, this._glblur.render(e, t, i, r, o, a)) : e.getBitmap().applyFilter(n, this.$r * r)), e;
  }, A.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? this.storeProperties(t.blob, A.GeometryProperties) : e === r._Change.Restore && this.restoreProperties(t.blob, A.GeometryProperties), this._handleGeometryChangeForProperties(e, t, A.GeometryProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, A.prototype.setAffectedByGLBug = function (e) {
    this._glblur && this._glblur.setAffectedByGLBug(e);
  }, A.prototype.toString = function () {
    return "[Object GBlurEffect]";
  }, A.prototype.destroy = function () {
    this._glblur && this._glblur.destroy();
  }, e.exports = A;
}
