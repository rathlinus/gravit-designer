/**
 * chunk.vendor.js Module #856
 * Type: class
 * Name: GPDFFlateDecode
 */

function (e, t, i) {
      var n = i(1145),
        r = i(0),
        o = i(165);

      function a(e) {
        (n.call(this, "FlateDecode"), e && this.setBuffer(o.deflate(e)));
      }
      (r.inherit(a, n),
        (a.prototype.setBuffer = function (e) {
          this._compressed = e;
        }),
        (a.prototype.getBuffer = function () {
          return this._compressed;
        }),
        (a.prototype.write = function (e) {
          e.writeBuffer(this._compressed);
        }),
        (a.prototype.length = function () {
          return this._compressed.length;
        }),
        (a.prototype.toString = function () {
          return "[Object GPDFFlateDecode]";
        }),
        (e.exports = a));
    }