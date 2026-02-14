/**
 * Module 1143
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
  var n = i(0), r = i(850), o = i(1215);
  function a(e) {
    this._byteBuffer = new r(e || 10240);
  }
  n.inherit(a, o), a.prototype._byteBuffer = null, a.prototype.getPosition = function () {
    return this._byteBuffer.getBytePosition();
  }, a.prototype.asArray = function () {
    return this._byteBuffer.getBuffer();
  }, a.prototype._write = function (e) {
    var t = encodeURIComponent(e.toString()).replace(/%([0-9A-F]{2})/g, function (e, t) {
        return String.fromCharCode("0x" + t);
      }), i = new Uint8Array(t.length);
    Array.prototype.forEach.call(t, function (e, t) {
      i[t] = e.charCodeAt(0);
    }), this.writeBuffer(i);
  }, a.prototype._concat = function (e) {
    this.writeBuffer(e.asArray());
  }, a.prototype._writeBuffer = function (e) {
    this._byteBuffer.writeArray(e);
  }, e.exports = a;
}
