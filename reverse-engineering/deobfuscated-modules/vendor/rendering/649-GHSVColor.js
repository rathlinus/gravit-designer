/**
 * Module 649 - GHSVColor
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
  var n = require(17) /* GRGBColor */, r = require(68) /* GColor */;
  function o(e) {
    n.call(this), this._value = e && e instanceof Array ? e.slice() : [
      0,
      0,
      0
    ];
  }
  require(50) /* GPattern */.inherit("H", o, n), o.prototype.clone = function () {
    return new o(this._value);
  }, o.prototype.toScreen = function (e) {
    return r.hsvToRGB(this._value, e);
  }, o.prototype.toHumanString = function () {
    return "hsv " + this._value[0] + "," + this._value[1] + "," + this._value[2];
  }, o.prototype.toString = function () {
    return "[Object GHSVColor]";
  }, exports.exports = o;
}
