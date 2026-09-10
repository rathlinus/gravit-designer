/**
 * chunk.vendor.js Module #1214
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(562);

      function o() {
        r.apply(this, arguments);
      }
      (n.inherit(o, r),
        (o.prototype.version = null),
        (o.prototype.parse = function () {
          this.version = parseFloat(this._data.appVersion);
        }),
        (e.exports = o));
    }