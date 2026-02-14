/**
 * Module 289 - GSlice
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
  var n = i(50), r = i(2), o = i(112), a = i(104), s = i(6), l = i(83), h = i(159), A = i(9);
  function c() {
    a.call(this), this._setDefaultProperties(c.VisualProperties, c.GeometryProperties, c.MetaProperties);
  }
  r.inheritAndMix("slice", c, a), c.MetaProperties = {
    trm: !0,
    cls: null
  }, c.GeometryProperties = {
    x: 0,
    y: 0,
    w: 100,
    h: 100
  }, c.prototype.getNodeNameTranslated = function () {
    return A.getValue("GSlice", "name", this.getNodeName());
  }, c.prototype.validateInsertion = function (e, t) {
    return e instanceof h || e instanceof l;
  }, c.prototype._paintToBitmap = function (e) {
    if (!this._scene)
      throw new Error("Not part of a scene.");
    var t = e.configuration, i = t.sceneBackground;
    t.sceneBackground = !1;
    try {
      this.$cls && e.canvas.fillCanvas(this.$cls), this._scene.paint(e);
      var n = e.canvas.getBitmap();
      return this.getProperty("trm") && n.trim(), n;
    } finally {
      t.sceneBackground = i;
    }
  }, c.prototype._paint = function (e) {
    if (e.configuration.isSlicesVisible(e)) {
      var t = this.getGeometryBBox().toAlignedRect();
      e.configuration.isOutline(e) ? e.canvas.strokeRect(t.getX(), t.getY(), t.getWidth(), t.getHeight(), 1, e.getOutlineColor()) : e.canvas.fillRect(t.getX(), t.getY(), t.getWidth(), t.getHeight(), e.sliceColor, 0.25);
    }
  }, c.prototype._calculateGeometryBBox = function (e) {
    return this.getSourceBBox(e);
  }, c.prototype._calculatePaintBBox = function (e, t) {
    return this.getGeometryBBox(t);
  }, c.prototype._calculateSourceBBox = function (e) {
    return new s(this.$x, this.$y, this.$w, this.$h);
  }, c.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? (this.storeProperties(t.blob, c.MetaProperties, function (e, t) {
      return "cls" === e && t ? n.serialize(t) : t;
    }), this.storeProperties(t.blob, c.GeometryProperties)) : e === r._Change.Restore && (this.restoreProperties(t.blob, c.MetaProperties, function (e, t) {
      return "cls" === e && t ? n.deserialize(t) : t;
    }), this.restoreProperties(t.blob, c.GeometryProperties)), this._handleGeometryChangeForProperties(e, t, c.GeometryProperties), a.prototype._handleChange.call(this, e, t);
  }, c.prototype._detailHitTest = function (e, t, i, n) {
    return new o(this);
  }, e.exports = c;
}
