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

function (exports, module, require) {
  var n = require(0) /* GObject */, r = require(28) /* GStylable */, o = require(14) /* GPaintCanvas */, a = require(72) /* GEvent */, s = require(795) /* module */, l = require(1126) /* module */, h = require(1125) /* module */, A = require(1123) /* module */, c = require(1124) /* module */, p = require(561) /* module */;
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
      var exports = this._data.style;
      exports && (this._node.hasMixin(r) && exports.contextSettings && (this._node.setProperty("_sbl", undefined !== exports.contextSettings.blendMode ? u.BlendMode[exports.contextSettings.blendMode] : o.BlendMode.Normal), this._node.setProperty("_stop", undefined !== exports.contextSettings.opacity ? exports.contextSettings.opacity : 1)), exports.colorControls && new c(exports.colorControls).applyTo(this._node), exports.blur && new A(exports.blur).applyTo(this._node), exports.innerShadows && exports.innerShadows.forEach(function (e) {
        new l(e).applyTo(this._node);
      }.bind(this)), exports.shadows && exports.shadows.forEach(function (e) {
        new h(e).applyTo(this._node);
      }.bind(this))), this._sendEvent(new u.ProcessEvent(u.Process.AfterParse, this));
    }
  }, u.prototype._postAppendTo = function () {
    s.prototype._postAppendTo.apply(this, arguments), this._sendEvent(new u.ProcessEvent(u.Process.ParentAttached, this));
  }, u.prototype._sendEvent = function (e) {
    this._file && this._file.canEventBeSent(e.constructor) && this._file.hasEventListeners(e.constructor) && this._file.trigger(e);
  }, exports.exports = u;
}
