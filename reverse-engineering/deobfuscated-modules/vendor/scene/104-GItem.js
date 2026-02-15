/**
 * Module 104 - GItem
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
  var n = require(6) /* GRect */, r = require(2) /* GNode */, o = require(0) /* GObject */, a = require(69) /* GBlock */, s = require(22) /* GElement */, l = require(28) /* GStylable */, h = require(11) /* GUtil */, A = require(12) /* GMath */;
  function c() {
    a.call(this), this._setDefaultProperties(c.MetaProperties), this._setDefaultProperties(s.Anchor.MetaProperties);
  }
  o.inheritAndMix(c, a, [s.Anchor]), c.MetaProperties = { clk: false }, c.prototype.skipBorderUpdate = false, c.prototype.validateInsertion = function (e, t) {
    return "layer" === r.getName(e) || e instanceof c || "page" === r.getName(e);
  }, c.prototype.assignFrom = function (e) {
    e instanceof c && this.transferProperties(e, [
      c.MetaProperties,
      s.Anchor.MetaProperties
    ]), a.prototype.assignFrom.call(this, e);
  }, c.prototype.getCenter = function (e) {
    var t = this.getGeometryBBox();
    return t ? t.getSide(n.Side.CENTER) : null;
  }, c.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? this.storeProperties(t.blob, c.MetaProperties) : e === r._Change.Restore ? this.restoreProperties(t.blob, c.MetaProperties) : e === r._Change.AfterPropertiesChange && t.properties.indexOf("trf") >= 0 && this._scene && !this.isRecordedTransaction() && !this.skipBorderUpdate && this._handleBorderScale(t), a.prototype._handleChange.call(this, e, t), s.Anchor.prototype._handleAnchorChange.call(this, e, t);
  }, c.prototype._handleBorderScale = function (e) {
    var t = this._scene ? this._scene.getTransformSettings() : null;
    if (this.hasMixin(l) && (!t || false !== t.borderScale)) {
      var require = this._layoutTransform;
      if (!require) {
        var n = e.properties.indexOf("trf"), r = this.getProperty("trf"), o = e.values[n];
        o && (require = o.inverted()), r && (require = require ? require.multiplied(r) : r);
      }
      if (require) {
        var a, s = require.decomposed().scale.getMatrix();
        if (a = Math.sqrt(Math.abs(s[0] * s[3])), !A.isEqualEps(a, 1, 1e-8)) {
          var c = this.getPaintLayers();
          c && h.each(c.getBorderLayers(), function (e, i) {
            (i.$_bs || t && true === t.borderScale) && i.setProperty("_bw", i.$_bw * a);
          });
        }
      }
    }
  }, exports.exports = c;
}
