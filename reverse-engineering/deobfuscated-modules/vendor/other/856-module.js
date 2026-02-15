/**
 * Module 856
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
  var n = require(1145) /* module */, r = require(0) /* GObject */, o = require(165) /* module_165 */;
  function a(e) {
    n.call(this, "FlateDecode"), e && this.setBuffer(o.deflate(e));
  }
  r.inherit(a, n), a.prototype.setBuffer = function (e) {
    this._compressed = e;
  }, a.prototype.getBuffer = function () {
    return this._compressed;
  }, a.prototype.write = function (e) {
    e.writeBuffer(this._compressed);
  }, a.prototype.length = function () {
    return this._compressed.length;
  }, a.prototype.toString = function () {
    return "[Object GPDFFlateDecode]";
  }, exports.exports = a;
}
