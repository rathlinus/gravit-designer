/**
 * chunk.vendor.js Module #597
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(28),
        o = i(562);

      function a() {
        o.apply(this, arguments);
      }
      (n.inherit(a, o),
        (a.prototype._effect = null),
        (a.prototype.parse = function () {
          this._effect = this._getEffect();
        }),
        (a.prototype.applyTo = function (e) {
          if (this._effect && e.hasMixin(r)) {
            var t = e.getEffects();
            t &&
              (this._effect.setProperty("vs", this._data.isEnabled),
              t.appendChild(this._effect));
          }
        }),
        (a.prototype._getEffect = function () {
          throw new Error("Not Implemented");
        }),
        (e.exports = a));
    }