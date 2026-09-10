/**
 * chunk.vendor.js Module #560
 * Type: unknown
 */

function (e, t, i) {
      var n = i(1110),
        r = i(90),
        o = i(0),
        a = function (e) {
          this.value = e;
        };
      (o.inherit(a, r),
        (a.prototype.equals = function (e) {
          return this._wrap().equals(e);
        }),
        (a.prototype.isEmpty = function () {
          return this._wrap().isEmpty();
        }),
        (a.prototype.getValue = function () {
          return this.value;
        }),
        (a.prototype._wrap = function () {
          var e = this.value;
          return (e instanceof r || (e = new n(e)), e);
        }),
        (a.prototype.write = function (e) {
          this._wrap().write(e);
        }),
        (a.Null = function () {
          a.call(this, new r());
        }),
        o.inherit(a.Null, a),
        (e.exports = a));
    }