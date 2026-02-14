/**
 * Module 794
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
  var n = i(0), r = i(28), o = i(14), a = i(72), s = i(795), l = i(1126), h = i(1125), A = i(1123), c = i(1124), p = i(561);
  function u() {
    s.apply(this, arguments);
  }
  n.inherit(u, s), u.Process = {
    AfterParse: 2,
    ParentAttached: 3
  }, u.ProcessEvent = function (e, t) {
    this.type = e, this.source = t;
  }, n.inherit(u.ProcessEvent, a), u.ProcessEvent.source = null, u.ProcessEvent.type = null, u.BlendMode = [
    o.BlendMode.Normal,
    o.BlendMode.Darken,
    o.BlendMode.Multiply,
    o.BlendMode.ColorBurn,
    o.BlendMode.Lighten,
    o.BlendMode.Screen,
    o.BlendMode.ColorDodge,
    o.BlendMode.Overlay,
    o.BlendMode.SoftLight,
    o.BlendMode.HardLight,
    o.BlendMode.Difference,
    o.BlendMode.Exclusion,
    o.BlendMode.Hue,
    o.BlendMode.Saturation,
    o.BlendMode.Color,
    o.BlendMode.Luminosity
  ], u.prototype.parse = function () {
    if (this._node) {
      s.prototype.parse.apply(this, arguments), this._parent && this._parent instanceof p.getClassFromName("shapeGroup") && this._parent.hasClippingMask() || this._node.setProperty("vis", this._data.isVisible), this._node.setProperty("lkt", this._data.isLocked), this._node.setProperty("name", this._data.name);
      var e = this._data.style;
      e && (this._node.hasMixin(r) && e.contextSettings && (this._node.setProperty("_sbl", void 0 !== e.contextSettings.blendMode ? u.BlendMode[e.contextSettings.blendMode] : o.BlendMode.Normal), this._node.setProperty("_stop", void 0 !== e.contextSettings.opacity ? e.contextSettings.opacity : 1)), e.colorControls && new c(e.colorControls).applyTo(this._node), e.blur && new A(e.blur).applyTo(this._node), e.innerShadows && e.innerShadows.forEach(function (e) {
        new l(e).applyTo(this._node);
      }.bind(this)), e.shadows && e.shadows.forEach(function (e) {
        new h(e).applyTo(this._node);
      }.bind(this))), this._sendEvent(new u.ProcessEvent(u.Process.AfterParse, this));
    }
  }, u.prototype._postAppendTo = function () {
    s.prototype._postAppendTo.apply(this, arguments), this._sendEvent(new u.ProcessEvent(u.Process.ParentAttached, this));
  }, u.prototype._sendEvent = function (e) {
    this._file && this._file.canEventBeSent(e.constructor) && this._file.hasEventListeners(e.constructor) && this._file.trigger(e);
  }, e.exports = u;
}
