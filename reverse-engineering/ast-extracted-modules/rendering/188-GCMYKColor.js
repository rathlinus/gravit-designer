/**
 * Module 188 - GCMYKColor
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
  var n = i(68), r = i(11);
  function o(e) {
    n.call(this, e || [
      1,
      1,
      1,
      1
    ]);
  }
  i(50).inherit("Y", o, n), o.equals = function (e, t) {
    return e instanceof o && t instanceof o && r.equals(e._value, t._value);
  }, o.prototype.toHumanString = function () {
    return "cmyk " + (100 * this._value[0]).toFixed() + "%," + (100 * this._value[1]).toFixed() + "%," + (100 * this._value[2]).toFixed() + "%," + (100 * this._value[3]).toFixed() + "%";
  }, o.prototype.toScreen = function (e) {
    return n.cmykToRGB(this._value, e);
  }, o.prototype.clone = function () {
    return new o(this._value);
  }, o.prototype.toString = function () {
    return "[Object GCMYKColor]";
  }, e.exports = o;
}
