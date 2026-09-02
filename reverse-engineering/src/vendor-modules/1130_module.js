/**
 * chunk.vendor.js Module #1130
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(158),
        o = i(7),
        a = i(5),
        s = i(12),
        l = i(793),
        h = i(598);

      function A() {
        l.apply(this, arguments);
      }
      (n.inherit(A, l),
        (A.prototype._getGradient = function () {
          if (this._data) {
            var e = h.parse(this._data.from),
              t = h.parse(this._data.to),
              i = 0.5,
              n = 0.5,
              l = new a(1, n),
              A = new a(i, 0),
              c = new o().translated(e.getX() - i, e.getY() - n),
              p = c.inverted().mapPoint(t),
              u = p.getX() - i,
              d = 0;
            s.isEqualEps(u, 0)
              ? (u = -s.ptDist(e.getX(), e.getY(), t.getX(), t.getY()))
              : (d = (p.getY() - l.getY()) / u);
            var g = u / 0.5,
              f = new o()
                .translated(-i, -n)
                .scaled(g, 1)
                .multiplied(new o(1, d, 0, 1, 0, 0))
                .translated(i, n);
            (f = f.multiplied(c)).inverted() && (c = f);
            var m = new o()
              .translated(-e.getX(), -e.getY())
              .rotated(s.toRadians(90))
              .translated(e.getX(), e.getY())
              .mapPoint(t);
            m = c.inverted().mapPoint(m);
            var y = g;
            0 !== this._data.elipseLength &&
              1 !== this._data.elipseLength &&
              (y = ((n - m.getY()) / 0.5) * (this._data.elipseLength || 1));
            var _ = m.getY() - n,
              v = 0;
            return (
              s.isEqualEps(_, 0) || (v = (m.getX() - A.getX()) / _),
              (f = (f = new o()
                .translated(-i, -n)
                .scaled(1, y)
                .multiplied(new o(1, 0, v, 1, 0, 0))
                .translated(i, n)).multiplied(c)).inverted() && (c = f),
              new r(this._getStops(), 0.5, 0.5, 0.5, i, n, c)
            );
          }
          return new r();
        }),
        (e.exports = A));
    }