/**
 * chunk.vendor.js Module #801
 * Type: unknown
 */

function (e, t, i) {
      var n = i(1119);

      function r() {
        this._decimalPlacesPrecision = 3;
      }
      ((r.prototype._decimalPlacesPrecision = 3),
        (r.prototype.setDecimalPlacesPrecision = function (e) {
          this._decimalPlacesPrecision = e;
        }),
        (r.prototype.formatMatrix = function (e) {
          return this.formatNumber(e);
        }),
        (r.prototype.formatNumber = function (e) {
          return n.round(e, this._decimalPlacesPrecision);
        }),
        (e.exports = new r()));
    }