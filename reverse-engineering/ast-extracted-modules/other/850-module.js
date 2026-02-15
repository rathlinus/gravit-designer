/**
 * Module 850
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

function (e, t) {
  function i(e) {
    this._bytePosition = 0, this._buffer = new Uint8ClampedArray(e);
  }
  i.prototype._bytePosition = 0, i.prototype._buffer = null, i.prototype.getBytePosition = function () {
    return this._bytePosition;
  }, i.prototype.writeByte = function (e) {
    this._ensureCapacity(this._bytePosition + 1), this._buffer.set([e], this._bytePosition++);
  }, i.prototype.writeWord = function (e) {
    this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, i.prototype.writeArray = function (e) {
    this._ensureCapacity(this._bytePosition + e.length), this._buffer.set(e, this._bytePosition), this._bytePosition += e.length;
  }, i.prototype._ensureCapacity = function (e) {
    if (e > this._buffer.byteLength) {
      var t = Math.ceil(3 * this._buffer.byteLength / 2 + 1);
      t = Math.max(t, e);
      var i = this._buffer;
      this._buffer = new Uint8ClampedArray(t), this._buffer.set(i);
    }
  }, i.prototype.getBuffer = function () {
    return this._buffer.slice(0, this._bytePosition);
  }, e.exports = i;
}
