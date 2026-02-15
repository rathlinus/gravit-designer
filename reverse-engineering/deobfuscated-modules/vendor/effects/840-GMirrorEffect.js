/**
 * Module 840 - GMirrorEffect
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
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(28) /* GStylable */, a = require(7) /* GTransform */, s = require(17) /* GRGBColor */, l = require(147) /* GLinearGradient */, h = require(14) /* GPaintCanvas */, A = require(6) /* GRect */, c = require(12) /* GMath */, p = require(9) /* GLocale */;
  function u() {
    o.Effect.call(this), this._setDefaultProperties(u.GeometryProperties, u.VisualProperties), this._theirsPadding = null, this._oursPadding = null;
  }
  r.inherit("mirrorEffect", u, o.Effect), u.prototype._theirsPadding = null, u.prototype._oursPadding = null, u.equals = function (e, t) {
    return e instanceof u && t instanceof u && e.arePropertiesEqual(t, Object.keys(u.GeometryProperties).concat(Object.keys(u.VisualProperties)));
  }, u.GeometryProperties = {
    rfh: 0.3,
    pad: 1
  }, u.VisualProperties = {
    pat: new l([
      {
        color: s.WHITE,
        position: 0,
        opacity: 1
      },
      {
        color: s.WHITE,
        position: 1,
        opacity: 0
      }
    ], 1, c.toRadians(90), 0.5, 0),
    opc: 0.6
  }, u.prototype.getNodeNameTranslated = function () {
    return p.getValue("GMirrorEffect", "name", this.getNodeName());
  }, u.prototype.isAffectedByChildren = function () {
    return true;
  }, u.prototype.isSingleton = function () {
    return true;
  }, u.prototype.isAffectedByContents = function () {
    return true;
  }, u.prototype.isOverlayEffect = function () {
    return true;
  }, u.prototype.getEffectType = function () {
    return o.Effect.Type.PostEffect;
  }, u.prototype.getEffectPadding = function (e) {
    if (e) {
      this._theirsPadding = this.getParent().getEffectsPadding(e, null, function (e) {
        return e !== this;
      }.bind(this));
      var module = e.getHeight() * this.$rfh + this.$pad;
      this._oursPadding = [
        0,
        -module,
        0,
        module
      ];
    }
    return this._oursPadding;
  }, u.prototype.render = function (e, t, i, n, r) {
    if (this.$pat && this.$opc > 0) {
      var o = t.getScale();
      1 != t.getScale() && t.setScale(1);
      var s = e.getScale();
      1 != e.getScale() && e.setScale(1);
      var l = t.getOffset(), c = this.$pad * n, p = this._oursPadding ? this._oursPadding[3] * n - c : 0, u = p / this.$rfh, d = this._theirsPadding ? this._theirsPadding[3] * n : 0, g = new a().translated(l.getX(), l.getY() + u + c).preMultiplied(new a().scaled(1, -1)), f = t.setTransform(t.getTransform(true).preMultiplied(g)), m = t._canvasContext.globalAlpha, y = t._blender.globalCompositeOperation, _ = t._convertImage(e);
      t._canvasContext.globalAlpha = 1, t._blender.globalCompositeOperation = h.CompositeOperator.SourceOver, t._blender.drawImage(_, 0, 0, t.getWidth(), t.getHeight(), 0, -u - 2 * d - c, t.getWidth(), t.getHeight()), e.setScale(s), t.setScale(o), t.setTransform(f), t._canvasContext.globalAlpha = m, t._blender.globalCompositeOperation = y;
      var v = t.getTransform(false).inverted().mapRect(new A(0, u + c, t.getWidth(), p + d)), b = t.createPatternPaint(this.$pat, v);
      if (b)
        if (b.transform) {
          f = t.setTransform(t.getTransform(true).preMultiplied(b.transform));
          t.fillRect(0, 0, 1, 1, b.paint, this.$opc, h.CompositeOperator.DestinationIn), t.setTransform(f);
        } else
          t.fillRect(v.getX(), v.getY(), v.getWidth(), v.getHeight(), b.paint, this.$opc, h.CompositeOperator.DestinationIn);
    }
  }, u.prototype._handleChange = function (e, t) {
    e === r._Change.Store ? (this.storeProperties(t.blob, u.GeometryProperties), this.storeProperties(t.blob, u.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.serialize(t) : t;
    })) : e === r._Change.Restore && (this.restoreProperties(t.blob, u.GeometryProperties), this.restoreProperties(t.blob, u.VisualProperties, function (e, t) {
      return t && "pat" === e ? n.deserialize(t) : t;
    })), this._handleVisualChangeForProperties(e, t, u.VisualProperties), this._handleGeometryChangeForProperties(e, t, u.GeometryProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, u.prototype.toString = function () {
    return "[Object GMirrorEffect]";
  }, exports.exports = u;
}
