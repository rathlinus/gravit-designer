/**
 * Module 1008 - GColorGradingEffect
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
  var n = require(1009) /* module */, r = require(2) /* GNode */, o = require(28) /* GStylable */, a = require(9) /* GLocale */;
  function s() {
    o.Effect.call(this), this._setDefaultProperties(s.VisualProperties);
  }
  r.inherit("clGradingEffect", s, o.Effect), s.equals = function (e, t) {
    return e instanceof s && t instanceof s && e.arePropertiesEqual(t, Object.keys(s.VisualProperties));
  }, s.VisualProperties = { cp: null }, s.prototype.getEffectType = function () {
    return o.Effect.Type.Filter;
  }, s.prototype.getNodeNameTranslated = function () {
    return a.getValue("GColorGradingEffect", "name", this.getNodeName());
  }, s.prototype.render = function (e, t, i, r) {
    this.$cp && e.getBitmap().applyFilter(n, this.$cp);
  }, s.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? this.storeProperties(t.blob, s.VisualProperties) : e === r._Change.Restore && this.restoreProperties(t.blob, s.VisualProperties), this._handleVisualChangeForProperties(e, t, s.VisualProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, s.prototype.toString = function () {
    return "[Object GColorGradingEffect]";
  }, exports.exports = s;
}
