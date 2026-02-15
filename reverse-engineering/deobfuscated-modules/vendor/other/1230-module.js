/**
 * Module 1230
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
  var n = require(90) /* Container */, r = require(338) /* module */, o = function (e, t, i, n) {
      this._x = e, this._y = t, this._width = i, this._height = n;
    };
  require(0) /* GObject */.inherit(o, n), o.prototype.write = function (e) {
    e.write(r.normalizeNumber(this._x)), e.writeSpace(), e.write(r.normalizeNumber(this._y)), e.writeSpace(), e.write(r.normalizeNumber(this._width)), e.writeSpace(), e.write(r.normalizeNumber(this._height)), e.writeSpace(), e.write("re");
  }, exports.exports = o;
}
