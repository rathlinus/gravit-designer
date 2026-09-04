/**
 * chunk.vendor.js Module #1215
 * Type: unknown
 */

function (e, t) {
      var i = function () {
        this._abort = !1;
      };
      ((i.prototype._abort = !1),
        (i.prototype.getPosition = function () {
          return 0;
        }),
        (i.prototype.writeSpace = function () {
          this.write(" ");
        }),
        (i.prototype.writeln = function (e) {
          (e && this.write(e), this.write("\n"));
        }),
        (i.prototype.write = function () {
          (this._checkAbort(), this._write.apply(this, arguments));
        }),
        (i.prototype.writeBuffer = function () {
          (this._checkAbort(), this._writeBuffer.apply(this, arguments));
        }),
        (i.prototype.concat = function () {
          (this._checkAbort(), this._concat.apply(this, arguments));
        }),
        (i.prototype._checkAbort = function () {
          if (this._abort) throw new Error("AbortError");
        }),
        (i.prototype.asArray = function () {}),
        (i.prototype._write = function () {}),
        (i.prototype._writeBuffer = function () {}),
        (i.prototype._concat = function () {}),
        (i.prototype.abort = function () {
          this._abort = !0;
        }),
        (e.exports = i));
    }