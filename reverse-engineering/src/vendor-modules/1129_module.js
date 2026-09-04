/**
 * chunk.vendor.js Module #1129
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(147),
        o = i(12),
        a = i(793),
        s = i(598);

      function l() {
        a.apply(this, arguments);
      }
      (n.inherit(l, a),
        (l.prototype._getGradient = function () {
          if (this._data) {
            var e = s.parse(this._data.from),
              t = s.parse(this._data.to),
              i = e.getX(),
              n = e.getY(),
              a = t.getX() - e.getX(),
              l = t.getY() - e.getY(),
              h = -o.normalizeAngleRadians(-Math.atan2(l, a)),
              A =
                (0 !== a ? t.getX() - e.getX() : t.getY() - e.getY()) /
                Math.cos(h);
            return (
              (A < Number.MIN_VALUE || A > Number.MAX_VALUE) && (A = 1),
              new r(this._getStops(), A, h, i, n)
            );
          }
          return new r(null, 1, o.toRadians(90), 0.5, 0);
        }),
        (e.exports = l));
    }