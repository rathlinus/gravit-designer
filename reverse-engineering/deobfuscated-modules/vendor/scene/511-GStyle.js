/**
 * Module 511 - GStyle
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
  var n = require(22) /* GElement */, r = require(2) /* GNode */, o = require(28) /* GStylable */, a = require(76) /* module */;
  function s() {
    a.call(this), this._setDefaultProperties(s.MetaProperties), this._setStyleDefaultProperties();
  }
  r.inheritAndMix("style", s, a, [
    r.Properties,
    r.Store,
    r.Reference,
    o
  ]), s.MetaProperties = {
    name: null,
    ps: [
      o.PropertySet.Style,
      o.PropertySet.Effects,
      o.PropertySet.Text,
      o.PropertySet.Paragraph,
      o.PropertySet.BorderPaintLayers,
      o.PropertySet.FillPaintLayers
    ],
    defaultStyle: true
  }, s.prototype.assignStyleFrom = function (e) {
    o.prototype.assignStyleFrom.call(this, e, true), this._scene && this._scene.visitLinks(this, function (t) {
      t !== e && t.hasMixin(o) && t.assignStyleFrom(this, true);
    }.bind(this));
  }, s.prototype.disconnectStyle = function () {
    this._scene && this._scene.visitLinks(this, function (e) {
      e.hasMixin(n.Stylable) && e.setProperty("sref", null);
    });
  }, s.prototype.getStylePropertySets = function () {
    return this.$ps;
  }, s.prototype.validateInsertion = function (e, t) {
    return "styles" === r.getName(e);
  }, s.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? this.storeProperties(t.blob, s.MetaProperties) : e === r._Change.Restore && this.restoreProperties(t.blob, s.MetaProperties), this._handleStyleChange(e, t), r.prototype._handleChange.call(this, e, t);
  }, s.prototype.toString = function () {
    return "[Mixin GStyle]";
  }, exports.exports = s;
}
