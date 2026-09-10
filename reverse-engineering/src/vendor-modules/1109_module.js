/**
 * chunk.vendor.js Module #1109
 * Type: unknown
 */

function (e, t, i) {
      var n = i(559),
        r = i(0),
        o = i(188),
        a = i(437),
        s = i(390),
        l = i(182),
        h = function (e) {
          var t = 1;
          if (e instanceof o) e = e.getValue();
          else if ("string" == typeof e && 0 === e.indexOf("cmyk")) {
            var i = e.match(/\d+(\.\d+)?/g).map(function (e) {
              return parseFloat(e);
            });
            ((e = i.slice(0, 4)), 5 == i.length && (t = i[4]));
          }
          if (Array.isArray(e)) ((this._cmyk = e), (this._alpha = t));
          else {
            var r = new n(e);
            ((this._cmyk = s.rgbToCMYK(r.asRGBA())),
              (this._alpha = r.getAlpha()));
          }
        };
      (r.inheritAndMix(h, a, [s]),
        (h.prototype.getAlpha = function () {
          return this._alpha;
        }),
        (h.prototype.asArray = function () {
          return new l([
            this._cmyk[0] || 0,
            this._cmyk[1] || 0,
            this._cmyk[2] || 0,
            this._cmyk[3] || 0,
          ]);
        }),
        (e.exports = h));
    }