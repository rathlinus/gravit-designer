/**
 * Module 597
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
  var n = require(0) /* GObject */, r = require(28) /* GStylable */, o = require(562) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, o), a.prototype._effect = null, a.prototype.parse = function () {
    this._effect = this._getEffect();
  }, a.prototype.applyTo = function (e) {
    if (this._effect && e.hasMixin(r)) {
      var module = e.getEffects();
      module && (this._effect.setProperty("vs", this._data.isEnabled), module.appendChild(this._effect));
    }
  }, a.prototype._getEffect = function () {
    throw new Error("Not Implemented");
  }, exports.exports = a;
}
