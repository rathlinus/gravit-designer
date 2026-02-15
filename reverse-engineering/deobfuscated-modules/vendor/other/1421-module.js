/**
 * Module 1421
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
  var n = require(1145) /* module */, r = require(849) /* module */;
  function o(e, t, i, o, a) {
    n.call(this, "DCTDecode"), 0 !== arguments.length && this.setBuffer(new r().encode(i, e, t, a || 85, o));
  }
  require(0) /* GObject */.inherit(o, n), o.prototype.setBuffer = function (e) {
    this._compressed = e;
  }, o.prototype.getBuffer = function () {
    return this._compressed;
  }, o.prototype.write = function (e) {
    e.writeBuffer(this._compressed);
  }, o.prototype.length = function () {
    return this._compressed.length;
  }, exports.exports = o;
}
