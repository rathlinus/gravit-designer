/**
 * chunk.vendor.js Module #649
 * Type: class
 * Name: GHSVColor
 */

function (e, t, i) {
      var n = i(17),
        r = i(68);

      function o(e) {
        (n.call(this),
          (this._value = e && e instanceof Array ? e.slice() : [0, 0, 0]));
      }
      (i(50).inherit("H", o, n),
        (o.prototype.clone = function () {
          return new o(this._value);
        }),
        (o.prototype.toScreen = function (e) {
          return r.hsvToRGB(this._value, e);
        }),
        (o.prototype.toHumanString = function () {
          return (
            "hsv " +
            this._value[0] +
            "," +
            this._value[1] +
            "," +
            this._value[2]
          );
        }),
        (o.prototype.toString = function () {
          return "[Object GHSVColor]";
        }),
        (e.exports = o));
    }