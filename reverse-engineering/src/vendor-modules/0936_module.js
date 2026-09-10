/**
 * chunk.vendor.js Module #936
 * Type: unknown
 */

function (e, t, i) {
      var n = i(14),
        r = i(0),
        o = i(6),
        a = i(118);
      i(166);

      function s(e, t) {
        ((this._paintCanvases = []),
          (this._itemWidth = e),
          (this._itemHeight = t));
      }
      (r.inheritAndMix(s, r, [a]),
        (s.prototype._paintCanvases = null),
        (s.prototype._itemWidth = 0),
        (s.prototype._itemHeight = 0),
        (s.prototype._originX = 0),
        (s.prototype._originY = 0),
        (s.prototype._iterateGrid = function (e) {
          for (var t = 0; t < this._paintCanvases.length; t++) {
            var i = this._paintCanvases[t];
            e(i.canvas, i.x, i.y);
          }
        }),
        (s.prototype._iterateWholeGrid = function (e, t, i, n, r) {}),
        (s.prototype.setOrigin = function (e, t) {
          ((this._originX = e), (this._originY = t));
        }),
        (s.prototype.isEmpty = function () {
          return !this._paintCanvases.length;
        }),
        (s.prototype.drawFragmentTo = function (e, t, i, n, r, a, s) {
          ((t += this._originX), (i += this._originY));
          var l = new o(t, i, a, s);
          ((n -= t), (r -= i));
          this._iterateGrid(function (t, i, a) {
            var s = new o(i, a, t.getWidth(), t.getHeight()),
              h = l.intersected(s);
            h.isEmpty() ||
              (e.clearRect(
                h.getX() + n,
                h.getY() + r,
                h.getWidth(),
                h.getHeight(),
              ),
              e.drawImageFragment(
                t,
                h.getX() - i,
                h.getY() - a,
                h.getX() + n,
                h.getY() + r,
                h.getWidth(),
                h.getHeight(),
              ));
          });
        }),
        (s.prototype.drawImageFragment = function (e, t, i, n, r, o, a) {
          this.drawFragmentFrom(e, t, i, n, r, o, a);
        }),
        (s.prototype.drawFragmentFrom = function (e, t, i, r, a, s, l) {
          ((r += this._originX), (a += this._originY));
          var h,
            A,
            c,
            p = new o(r, a, s, l);
          ((r = t - r), (a = i - a));
          for (
            h = this._itemWidth * Math.floor(p.getX() / this._itemWidth),
              c = A =
                this._itemHeight * Math.floor(p.getY() / this._itemHeight);
            h < p.getX2();
          ) {
            for (A = c; A < p.getY2(); ) {
              var u = new o(h, A, this._itemWidth, this._itemHeight),
                d = p.intersected(u);
              if (!d.isEmpty()) {
                for (
                  var g = null, f = 0;
                  f < this._paintCanvases.length && !g;
                  f++
                ) {
                  var m = this._paintCanvases[f];
                  m.x === h && m.y === A && (g = m);
                }
                if (!g) {
                  var y = new n(!1, !0);
                  (y.setRenderAlgorithm(n.RenderAlgorithm.Crisp),
                    y.setImageSmoothingQuality(n.SmoothingQuality.High),
                    y.prepare(),
                    y.resize(this._itemWidth, this._itemHeight),
                    (g = {
                      x: h,
                      y: A,
                      canvas: y,
                    }),
                    this._paintCanvases.push(g));
                }
                (g.canvas.clearRect(
                  d.getX() - h,
                  d.getY() - A,
                  d.getWidth(),
                  d.getHeight(),
                ),
                  g.canvas.drawImageFragment(
                    e,
                    d.getX() + r,
                    d.getY() + a,
                    d.getX() - h,
                    d.getY() - A,
                    d.getWidth(),
                    d.getHeight(),
                  ));
              }
              A += this._itemHeight;
            }
            h += this._itemWidth;
          }
        }),
        (s.prototype.destroy = function () {
          (this._iterateGrid(function (e) {
            e.destroy();
          }),
            (this._paintCanvases = []));
        }),
        (s.prototype.clear = function () {
          this.destroy();
        }),
        (e.exports = s));
    }