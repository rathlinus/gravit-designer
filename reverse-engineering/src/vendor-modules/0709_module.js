/**
 * chunk.vendor.js Module #709
 * Type: unknown
 */

function (e, t, i) {
      "use strict";

      function n(e, t, i, n, r) {
        return (
          Math.pow(1 - r, 3) * e +
          3 * Math.pow(1 - r, 2) * r * t +
          3 * (1 - r) * Math.pow(r, 2) * i +
          Math.pow(r, 3) * n
        );
      }

      function r() {
        ((this.x1 = Number.NaN),
          (this.y1 = Number.NaN),
          (this.x2 = Number.NaN),
          (this.y2 = Number.NaN));
      }
      ((r.prototype.isEmpty = function () {
        return (
          isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2)
        );
      }),
        (r.prototype.addPoint = function (e, t) {
          ("number" == typeof e &&
            ((isNaN(this.x1) || isNaN(this.x2)) &&
              ((this.x1 = e), (this.x2 = e)),
            e < this.x1 && (this.x1 = e),
            e > this.x2 && (this.x2 = e)),
            "number" == typeof t &&
              ((isNaN(this.y1) || isNaN(this.y2)) &&
                ((this.y1 = t), (this.y2 = t)),
              t < this.y1 && (this.y1 = t),
              t > this.y2 && (this.y2 = t)));
        }),
        (r.prototype.addX = function (e) {
          this.addPoint(e, null);
        }),
        (r.prototype.addY = function (e) {
          this.addPoint(null, e);
        }),
        (r.prototype.addBezier = function (e, t, i, r, o, a, s, l) {
          var h = [e, t],
            A = [i, r],
            c = [o, a],
            p = [s, l];
          (this.addPoint(e, t), this.addPoint(s, l));
          for (var u = 0; u <= 1; u++) {
            var d = 6 * h[u] - 12 * A[u] + 6 * c[u],
              g = -3 * h[u] + 9 * A[u] - 9 * c[u] + 3 * p[u],
              f = 3 * A[u] - 3 * h[u];
            if (0 !== g) {
              var m = Math.pow(d, 2) - 4 * f * g;
              if (!(m < 0)) {
                var y = (-d + Math.sqrt(m)) / (2 * g);
                0 < y &&
                  y < 1 &&
                  (0 === u && this.addX(n(h[u], A[u], c[u], p[u], y)),
                  1 === u && this.addY(n(h[u], A[u], c[u], p[u], y)));
                var _ = (-d - Math.sqrt(m)) / (2 * g);
                0 < _ &&
                  _ < 1 &&
                  (0 === u && this.addX(n(h[u], A[u], c[u], p[u], _)),
                  1 === u && this.addY(n(h[u], A[u], c[u], p[u], _)));
              }
            } else {
              if (0 === d) continue;
              var v = -f / d;
              0 < v &&
                v < 1 &&
                (0 === u && this.addX(n(h[u], A[u], c[u], p[u], v)),
                1 === u && this.addY(n(h[u], A[u], c[u], p[u], v)));
            }
          }
        }),
        (r.prototype.addQuad = function (e, t, i, n, r, o) {
          var a = e + (2 / 3) * (i - e),
            s = t + (2 / 3) * (n - t),
            l = a + (1 / 3) * (r - e),
            h = s + (1 / 3) * (o - t);
          this.addBezier(e, t, a, s, l, h, r, o);
        }),
        (t.BoundingBox = r));
    }