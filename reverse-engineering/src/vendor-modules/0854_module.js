/**
 * chunk.vendor.js Module #854
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = function (e) {
          this._path = e;
        };
      (i(0).inherit(r, n),
        (r.prototype.getPath = function () {
          return this._path;
        }),
        (r.prototype.write = function (e) {
          this._path && (this._path.write(e), e.writeln(), e.write("W n"));
        }),
        (e.exports = r));
    }