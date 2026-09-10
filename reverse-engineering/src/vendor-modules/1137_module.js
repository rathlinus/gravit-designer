/**
 * chunk.vendor.js Module #1137
 * Type: unknown
 */

function (e, t, i) {
      var n = i(1138),
        r = i(250);

      function o(e) {
        this._bplist = e;
      }
      ((o.from = function (e) {
        return "string" == typeof e && e.length % 4 == 0
          ? o.from(r.toByteArray(e))
          : ArrayBuffer.isView(e)
            ? new o(new n().parse(e))
            : null;
      }),
        (o.prototype._bplist = null),
        (o.prototype.top = function () {
          return this.getByRef(this._bplist.$top.root);
        }),
        (o.prototype.getByRef = function (e) {
          return this._bplist.$objects[e];
        }),
        (o.prototype.toMap = function (e) {
          for (
            var t = e["NS.keys"].map(
                function (e) {
                  return this.getByRef(e);
                }.bind(this),
              ),
              i = e["NS.objects"].map(
                function (e) {
                  return this.getByRef(e);
                }.bind(this),
              ),
              n = {},
              r = 0;
            r < t.length;
            r++
          )
            n[t[r]] = i[r];
          return n;
        }),
        (o.toByte = function (e) {
          return String.fromCharCode
            .apply(
              null,
              new Uint8Array(e.buffer).slice(
                e.byteOffset,
                e.byteOffset + e.byteLength,
              ),
            )
            .split(" ")
            .map(function (e) {
              return 255 * parseFloat(e);
            });
        }),
        (e.exports = o));
    }