/**
 * Module 1218
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
  var n = require(1145) /* module */;
  function r(e) {
    this._buffer = e;
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.write = function (e) {
    e.writeBuffer(this._buffer);
  }, r.prototype.length = function () {
    return this._buffer.byteLength;
  }, r.prototype.getBuffer = function () {
    return this._buffer;
  }, r.prototype.toString = function () {
    return "[Object GPDFRawBuffer]";
  }, exports.exports = r;
}
