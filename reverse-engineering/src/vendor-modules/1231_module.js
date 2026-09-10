/**
 * chunk.vendor.js Module #1231
 * Type: unknown
 */

function (e, t, i) {
      var n = i(1232),
        r = i(0),
        o = i(197);

      function a(e) {
        (o.call(this), (this.name = e), (this._encoding = n.WINANSI));
      }
      (r.inherit(a, o),
        (a.prototype._encoding = null),
        (a.prototype.encode = function (e, t) {
          return this._encoding.encode(e, t);
        }),
        (a.prototype.equals = function (e) {
          return this.name === e.name;
        }),
        (a.prototype.getName = function () {
          return this.name;
        }),
        (a.prototype.toString = function () {
          return "[GPDFFont]";
        }),
        (e.exports = a));
    }