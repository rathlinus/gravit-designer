/**
 * chunk.vendor.js Module #513
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11);

      function r(e) {
        this._uid = e || n.uuid();
      }
      ((r.prototype._uid = null),
        (r.prototype.isEqual = function (e) {
          return this._uid === e._uid;
        }),
        (r.prototype.toString = function () {
          return this._uid.toString();
        }),
        (e.exports = r));
    }