/**
 * chunk.vendor.js Module #1219
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(0),
        o = function (e, t) {
          ((this._node = e), (this._type = t));
        };
      (r.inherit(o, n),
        (o.Type = {
          BEGIN: 0,
          END: 1,
        }),
        (o.prototype.getType = function () {
          return this._type;
        }),
        (o.prototype.isEmpty = function () {
          return !0;
        }),
        (o.prototype.equals = function (e) {
          return (
            e instanceof o && this._node == e._node && this._type === e._type
          );
        }),
        (e.exports = o));
    }