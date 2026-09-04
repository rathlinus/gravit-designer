/**
 * chunk.vendor.js Module #896
 * Type: unknown
 */

function (e, t) {
      function i(e) {
        this._buffer = e;
      }
      ((i.prototype._buffer = null),
        (i.prototype.setDPI = function (e) {
          var t = new DataView(this._buffer);
          255 === t.getUint8(0) &&
            216 === t.getUint8(1) &&
            255 === t.getUint8(2) &&
            224 === t.getUint8(3) &&
            (t.setUint8(13, 1), t.setUint16(14, e), t.setUint16(16, e));
        }),
        (i.prototype.getBlob = function () {
          return new Blob([this._buffer], {
            type: "image/jpeg",
          });
        }),
        (e.exports = i));
    }