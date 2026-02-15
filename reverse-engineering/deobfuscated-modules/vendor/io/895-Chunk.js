/**
 * Module 895
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

function (exports, module) {
  var i, n, r, o = [];
  for (i = 0; i < 256; i++) {
    for (n = i, r = 0; r < 8; r++)
      1 & n ? n = 3988292384 ^ n >>> 1 : n >>>= 1;
    o[i] = n;
  }
  function a(e) {
    return [
      (4278190080 & e) >>> 24,
      (16711680 & e) >>> 16,
      (65280 & e) >>> 8,
      255 & e
    ];
  }
  function s(e) {
    this._buffer = e, this._view = new DataView(this._buffer);
  }
  s.Chunk = function (e, t, i) {
    this.length = e, this.data = i;
    for (var n = [], r = 0; r < t.length; r++)
      n.push(t.charCodeAt(r));
    this.type = new Uint8Array(n);
  }, s.Chunk.prototype.length = 0, s.Chunk.prototype.type = null, s.Chunk.prototype.data = null, s.Chunk.prototype.getBuffer = function () {
    var e = new Uint8Array(4 + this.type.byteLength + this.data.byteLength + 4);
    e.set(a(this.length), 0), e.set(this.type, 4), e.set(this.data, 4 + this.type.byteLength);
    var t = new Uint8Array(this.type.length + this.data.length);
    return t.set(this.type, 0), t.set(this.data, this.type.length), e.set(a(4294967295 ^ function (e, t) {
      for (var i, n = e, r = 0; r < t.length; r++)
        i = t[r], n = o[255 & (n ^ i)] ^ n >>> 8;
      return n;
    }(4294967295, t)), 4 + this.type.byteLength + this.data.length), e;
  }, s.prototype._buffer = null, s.prototype._view = null, s.prototype.setDPI = function (e) {
    var t = a(Math.floor(e / 0.0254)).concat(a(Math.floor(e / 0.0254))).concat(1), i = new s.Chunk(t.length, "pHYs", new Uint8Array(t)), n = this.findChunk("IDAT", 8);
    -1 !== n && this.addChunk(i, n);
  }, s.prototype.findChunk = function (e, t) {
    var i = this._view.getUint32(t);
    return String.fromCharCode.apply(null, [
      this._view.getUint8(t + 4),
      this._view.getUint8(t + 5),
      this._view.getUint8(t + 6),
      this._view.getUint8(t + 7)
    ]) === e ? t : (t += 8 + i + 4, this.findChunk(e, t));
  }, s.prototype.addChunk = function (e, t) {
    var i = e.getBuffer(), n = new Uint8Array(this._buffer.slice(0, t)), r = new Uint8Array(this._buffer.slice(t, this._buffer.byteLength));
    this._buffer = new Uint8Array(n.byteLength + r.byteLength + i.byteLength), this._buffer.set(n, 0), this._buffer.set(i, n.byteLength), this._buffer.set(r, n.byteLength + i.byteLength);
  }, s.prototype.getBlob = function () {
    return new Blob([this._buffer], { type: "image/png" });
  }, exports.exports = s;
}
