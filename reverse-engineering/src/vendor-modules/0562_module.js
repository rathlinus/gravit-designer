/**
 * chunk.vendor.js Module #562
 * Type: unknown
 */

function (e, t) {
      function i(e, t) {
        ((this._data = e), (this._file = t));
      }
      ((i.prototype._file = null),
        (i.prototype._data = null),
        (i.prototype.clone = function () {
          var e = Object.create(Object.getPrototypeOf(this));
          return ((e._data = this._data), (e._file = this._file), e);
        }),
        (i.prototype.parse = function (e, t) {
          throw new Error("Not implemented");
        }),
        (i.prototype._getReference = function (e) {
          return this._file.getReference(e);
        }),
        (e.exports = i));
    }