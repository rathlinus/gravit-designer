/**
 * chunk.vendor.js Module #1230
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(338),
        o = function (e, t, i, n) {
          ((this._x = e), (this._y = t), (this._width = i), (this._height = n));
        };
      (i(0).inherit(o, n),
        (o.prototype.write = function (e) {
          (e.write(r.normalizeNumber(this._x)),
            e.writeSpace(),
            e.write(r.normalizeNumber(this._y)),
            e.writeSpace(),
            e.write(r.normalizeNumber(this._width)),
            e.writeSpace(),
            e.write(r.normalizeNumber(this._height)),
            e.writeSpace(),
            e.write("re"));
        }),
        (e.exports = o));
    }