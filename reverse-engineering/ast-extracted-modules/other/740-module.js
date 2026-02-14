/**
 * Module 740
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(0), r = i(99), o = i(160), a = i(5), s = (i(14), i(12)), l = i(6), h = i(24), A = i(132);
  function c(e) {
    r.call(this, e), this.disallowSnapZone(l.Side.CENTER);
  }
  n.inheritAndMix(c, r, [
    r.Visual,
    r.Map,
    r.DetailMap
  ]), c.ID = "guide.grid", c.MIN_CELL_SPACE = 10, c.prototype.getId = function () {
    return c.ID;
  }, c.prototype._limitGridSize = function (e, t) {
    var i = e * t;
    return Math.round(i) < c.MIN_CELL_SPACE && (i *= 1 + Math.floor(c.MIN_CELL_SPACE / i)), i;
  }, c.prototype.paint = function (e, t) {
    var i = this._scene.getProperty("gm");
    if (i && t.configuration.gridVisible) {
      var n = e.getScaleFactor(), r = this._scene.getProperty("gx"), A = this._scene.getProperty("gy"), c = this._scene.getProperty("gaw"), p = this._scene.getProperty("gah"), u = this._limitGridSize(r, n), d = this._limitGridSize(A, n), g = this._limitGridSize(c, n), f = this._limitGridSize(p, n);
      r = u / n, A = d / n, c = g / n, p = f / n;
      var m = t.dirtyMatcher.getDirtyRectangles();
      if (i === o.GridMode.Axonometric && m.length > 1) {
        for (var y = m[0], _ = 1; _ < m.length; ++_)
          y = y.united(m[_]);
        m = [y];
      }
      var v, b, C, w, E, B, x, P = [], S = i === o.GridMode.Axonometric, T = S ? c : r, I = S ? p : A;
      for (_ = S ? 0 : 1; _ < m.length; ++_) {
        v = m[_];
        var F = x = e.mapRect(v);
        i === o.GridMode.Boxed ? (b = new a(v.getX(), v.getY()), C = Math.round(b.getX() / r) * r, w = Math.round(b.getY() / A) * A, E = new a(C, w), B = e.mapPoint(E), F = new l(Math.round(B.getX()), Math.round(B.getY()), x.getWidth() + x.getX() - Math.round(B.getX()), x.getHeight() + x.getY() - Math.round(B.getY()))) : i === o.GridMode.Axonometric && (F = new l(Math.round(x.getX()), Math.round(x.getY()), Math.round(x.getWidth() + x.getX() - Math.round(x.getX())), Math.round(x.getHeight() + x.getY() - Math.round(x.getY()))));
        var R = t.canvas.createCanvas(F);
        R.drawCanvas(t.canvas, 0, 0), P.push(R);
      }
      for (_ = 0; _ < m.length; ++_) {
        if (v = m[_], x = e.mapRect(v), b = new a(v.getX(), v.getY()), C = Math.round(b.getX() / T) * T, w = Math.round(b.getY() / I) * I, E = new a(C, w), B = e.mapPoint(E), i === o.GridMode.Boxed && _ > 0 ? t.canvas.clearRect(Math.round(B.getX()), Math.round(B.getY()), x.getWidth() + x.getX() - Math.round(B.getX()), x.getHeight() + x.getY() - Math.round(B.getY())) : i === o.GridMode.Axonometric && t.canvas.clearRect(Math.round(x.getX()), Math.round(x.getY()), Math.round(x.getWidth() + x.getX() - Math.round(x.getX())), Math.round(x.getHeight() + x.getY() - Math.round(x.getY()))), _ > 0 || i === o.GridMode.Axonometric) {
          var D = i === o.GridMode.Axonometric ? _ : _ - 1;
          t.canvas.drawCanvas(P[D], 0, 0);
        }
        if (i === o.GridMode.Boxed) {
          for (var k = B.getX(); k - x.getX() < x.getWidth(); k += u)
            t.canvas.fillRect(Math.round(k), x.getY(), 1, x.getHeight(), h.gridColor, h.gridOpacity);
          for (var G = B.getY(); G - x.getY() < x.getHeight(); G += d)
            t.canvas.fillRect(x.getX(), Math.round(G), x.getWidth(), 1, h.gridColor, h.gridOpacity);
        } else if (i === o.GridMode.Axonometric) {
          for (k = B.getX(); k - x.getX() < x.getWidth(); k += g)
            t.canvas.fillRect(Math.round(k), x.getY(), 1, x.getHeight(), h.gridColor, h.gridOpacity);
          var Q, M = this._scene.getProperty("ga1"), N = Math.tan(-M), U = this._scene.getProperty("ga2"), V = Math.tan(-U);
          if (s.isEqualEps(N, 0) || s.isEqualEps(V, 0))
            for (G = B.getY(); G - x.getY() < x.getHeight(); G += f)
              t.canvas.fillRect(x.getX(), Math.round(G), x.getWidth(), 1, h.gridColor, h.gridOpacity);
          if (B = e.mapPoint(new a(0, 0)), !s.isEqualEps(N, 0))
            if (Q = s.getLinesIntersection(N, -1, B.getY() - N * B.getX(), 1, 0, -x.getX())) {
              (G = Q.getY()) > x.getY() && (G -= f * Math.floor((G - x.getY()) / f));
              var O = new a(Q.getX(), G);
              if (X = s.getLinesIntersection(N, -1, x.getY() + x.getHeight() - N * (x.getX() + x.getWidth()), 1, 0, -x.getX()))
                for (G = O.getY(); G < X.getY(); G += f) {
                  var L = new a(x.getX(), G);
                  if ((H = s.getLinesIntersection(N, -1, L.getY() - N * L.getX(), 0, 1, -x.getY())) && H.getX() > x.getX() + x.getWidth() && (H = s.getLinesIntersection(N, -1, L.getY() - N * L.getX(), 1, 0, -x.getX() - x.getWidth())), L.getY() > x.getY() + x.getHeight() && (L = s.getLinesIntersection(N, -1, L.getY() - N * L.getX(), 0, 1, -x.getY() - x.getHeight())), L && H) {
                    var Y = [
                      L,
                      H
                    ];
                    t.canvas.putVertices(Y, !0), t.canvas.strokeVertices(h.gridColor, 1, null, null, null, null, h.gridOpacity);
                  }
                }
            }
          if (!s.isEqualEps(V, 0))
            if (Q = s.getLinesIntersection(V, -1, B.getY() - V * B.getX(), 1, 0, -x.getX())) {
              (G = Q.getY()) < x.getY() + x.getHeight() && (G += f * Math.floor((x.getY() + x.getHeight() - G) / f));
              var X;
              O = new a(Q.getX(), G);
              if (X = s.getLinesIntersection(V, -1, x.getY() - V * (x.getX() + x.getWidth()), 1, 0, -x.getX()))
                for (G = O.getY(); G > X.getY(); G -= f) {
                  var H;
                  L = new a(x.getX(), G);
                  if ((H = s.getLinesIntersection(V, -1, L.getY() - V * L.getX(), 0, 1, -x.getY() - x.getHeight())) && H.getX() > x.getX() + x.getWidth() && (H = s.getLinesIntersection(V, -1, L.getY() - V * L.getX(), 1, 0, -x.getX() - x.getWidth())), L.getY() < x.getY() && (L = s.getLinesIntersection(V, -1, L.getY() - V * L.getX(), 0, 1, -x.getY())), L && H) {
                    Y = [
                      L,
                      H
                    ];
                    t.canvas.putVertices(Y, !0), t.canvas.strokeVertices(h.gridColor, 1, null, null, null, null, h.gridOpacity);
                  }
                }
            }
        }
      }
    }
  }, c.prototype.map = function (e, t) {
    var i = null, n = this._scene.getProperty("gm");
    if (!n)
      return i;
    var r = n === o.GridMode.Axonometric, a = this._scene.getProperty(r ? "gaw" : "gx"), s = this._scene.getProperty(r ? "gah" : "gy");
    if (a >= 1 && s >= 1) {
      var l, h = Math.round(e / a) * a;
      if (n === o.GridMode.Boxed)
        l = Math.round(t / s) * s;
      else if (n === o.GridMode.Axonometric) {
        var A = this._scene.getProperty("ga2"), c = h * Math.tan(-A);
        c -= Math.round(c / s) * s, l = Math.round((t - c) / s) * s + c;
      }
      i = {
        x: {
          value: h,
          guide: null,
          delta: Math.abs(e - h)
        },
        y: {
          value: l,
          guide: null,
          delta: Math.abs(t - l)
        }
      };
    }
    return i;
  }, c.prototype.canMapWithFullPixelsGuide = function () {
    var e = this._scene.getProperty("gm") === o.GridMode.Axonometric, t = this._scene.getProperty(e ? "gaw" : "gx"), i = this._scene.getProperty(e ? "gah" : "gy");
    return t > 1 && i > 1 || this._scene.getProperty("ut") !== A.Unit.PX && t >= 1 && i >= 1;
  }, c.prototype.toString = function () {
    return "[Object GGridGuide]";
  }, e.exports = c;
}
