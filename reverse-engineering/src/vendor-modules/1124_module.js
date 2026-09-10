/**
 * chunk.vendor.js Module #1124
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(588),
        o = i(12),
        a = i(597);

      function s() {
        a.apply(this, arguments);
      }
      (n.inherit(s, a),
        (s.prototype._getEffect = function () {
          var e = new r(!0);
          return (
            e.setProperty("shp", {
              brightness: this._data.brightness,
              contrast: o.normalizeValue(this._data.contrast, 0, 4, -1, 1),
              hue: o.normalizeValue(this._data.hue, -Math.PI, Math.PI, -1, 1),
              saturation: o.normalizeValue(
                this._data.saturation,
                0,
                3.5,
                -1,
                1,
              ),
            }),
            e
          );
        }),
        (e.exports = s));
    }