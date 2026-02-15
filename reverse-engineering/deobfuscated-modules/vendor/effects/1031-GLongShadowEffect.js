/**
 * Module 1031 - GLongShadowEffect
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
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(28) /* GStylable */, a = require(17) /* GRGBColor */, s = require(14) /* GPaintCanvas */, l = require(6) /* GRect */, h = require(12) /* GMath */, A = require(9) /* GLocale */;
  function c() {
    o.Effect.call(this), this._setDefaultProperties(c.GeometryProperties, c.VisualProperties);
  }
  r.inherit("longShadowEffect", c, o.Effect), c.equals = function (e, t) {
    return e instanceof c && t instanceof c && e.arePropertiesEqual(t, Object.keys(c.GeometryProperties).concat(Object.keys(c.VisualProperties)));
  }, c.GeometryProperties = {
    l: 60,
    a: h.toRadians(-45)
  }, c.VisualProperties = {
    pat: a.BLACK,
    opc: 0.2,
    den: 1,
    fdm: true
  }, c.prototype.getNodeNameTranslated = function () {
    return A.getValue("GLongShadowEffect", "name", this.getNodeName());
  }, c.prototype.isOverlayEffect = function () {
    return true;
  }, c.prototype.getEffectType = function () {
    return o.Effect.Type.PreEffect;
  }, c.prototype.getEffectPadding = function () {
    var e = Math.cos(this.$a) * this.$l, t = -Math.sin(this.$a) * this.$l;
    return [
      -e,
      -t,
      e,
      t
    ];
  }, c.prototype.render = function (e, t, i, n) {
    if (this.$pat && this.$opc > 0) {
      for (var r, o, a = t.clone(false, {
            renderPhaseDraw: true,
            dontCopyContents: true
          }), h = Math.cos(this.$a), A = -Math.sin(this.$a), c = Math.round(this.$l * n), p = 1 / this.$den / s.getScreenDPI() / Math.max(n, 1), u = 1; u < c; u += p) {
        r = u * h, o = u * A;
        var d = this.$fdm ? Math.max(1 - u / c, 0) : 1;
        a.drawCanvas(e, r, o, d);
      }
      var g = t.getTransform(false).inverted().mapRect(new l(0, 0, t.getWidth(), t.getHeight())), f = t.createPatternPaint(this.$pat, g);
      if (f)
        if (f.transform) {
          var m = t.setTransform(t.getTransform(true).preMultiplied(f.transform));
          t.fillRect(0, 0, 1, 1, f.paint, this.$opc), t.setTransform(m);
        } else
          t.fillRect(g.getX(), g.getY(), g.getWidth(), g.getHeight(), f.paint, this.$opc);
      t.drawCanvas(a, 0, 0, 1, s.CompositeOperator.DestinationIn);
    }
  }, c.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? (this.storeProperties(t.blob, c.GeometryProperties), this.storeProperties(t.blob, c.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.serialize(t) : t;
    })) : e === r._Change.Restore && (this.restoreProperties(t.blob, c.GeometryProperties), this.restoreProperties(t.blob, c.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.deserialize(t) : t;
    })), this._handleVisualChangeForProperties(e, t, c.VisualProperties), this._handleGeometryChangeForProperties(e, t, c.GeometryProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, c.prototype.toString = function () {
    return "[Object GLongShadowEffect]";
  }, exports.exports = c;
}
