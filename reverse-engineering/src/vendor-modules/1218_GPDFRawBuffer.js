/**
 * chunk.vendor.js Module #1218
 * Type: class
 * Name: GPDFRawBuffer
 */

function (e, t, i) {
      var n = i(1145);

      function r(e) {
        this._buffer = e;
      }
      (i(0).inherit(r, n),
        (r.prototype.write = function (e) {
          e.writeBuffer(this._buffer);
        }),
        (r.prototype.length = function () {
          return this._buffer.byteLength;
        }),
        (r.prototype.getBuffer = function () {
          return this._buffer;
        }),
        (r.prototype.toString = function () {
          return "[Object GPDFRawBuffer]";
        }),
        (e.exports = r));
    }