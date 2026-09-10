/**
 * chunk.vendor.js Module #599
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(17),
        o = i(600);

      function a() {
        o.apply(this, arguments);
      }
      (n.inherit(a, o),
        (a.prototype._color = null),
        (a.prototype._alpha = 1),
        (a.prototype.parse = function () {
          ((this._color = new r([
            Math.round(255 * this._data.red),
            Math.round(255 * this._data.green),
            Math.round(255 * this._data.blue),
          ])),
            (this._alpha = this._data.alpha));
        }),
        (a.prototype.applyTo = function (e) {
          (e.setProperty("_pt", this._color),
            e.setProperty("_op", this._alpha));
        }),
        (e.exports = a));
    }