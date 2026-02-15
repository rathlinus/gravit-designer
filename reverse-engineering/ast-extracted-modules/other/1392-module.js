/**
 * Module 1392
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
  var n = i(12);
  i(6);
  function r() {
  }
  r._slicedToArray = function (e, t) {
    if (Array.isArray(e))
      return e;
    if (Symbol.iterator in Object(e))
      return function (e, t) {
        var i = [], n = !0, r = !1, o = void 0;
        try {
          for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            !n && s.return && s.return();
          } finally {
            if (r)
              throw o;
          }
        }
        return i;
      }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, r._mapToEllipse = function (e, t, i, n, r, o, a) {
    var s = e.x, l = e.y;
    return {
      x: n * (s *= t) - r * (l *= i) + o,
      y: r * s + n * l + a
    };
  }, r._approxUnitArc = function (e, t) {
    var i = 4 / 3 * Math.tan(t / 4), n = Math.cos(e), r = Math.sin(e), o = Math.cos(e + t), a = Math.sin(e + t);
    return [
      {
        x: n - r * i,
        y: r + n * i
      },
      {
        x: o + a * i,
        y: a - o * i
      },
      {
        x: o,
        y: a
      }
    ];
  }, r._vectorAngle = function (e, t, i, n) {
    var r = e * n - t * i < 0 ? -1 : 1, o = (e * i + t * n) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
    return o > 1 && (o = 1), o < -1 && (o = -1), r * Math.acos(o);
  }, r._getArcCenter = function (e, t, i, o, a, s, l, h, A, c, p, u) {
    var d = Math.pow(a, 2), g = Math.pow(s, 2), f = Math.pow(p, 2), m = Math.pow(u, 2), y = d * g - d * m - g * f;
    y < 0 && (y = 0), y /= d * m + g * f;
    var _ = (y = Math.sqrt(y) * (l === h ? -1 : 1)) * a / s * u, v = y * -s / a * p, b = c * _ - A * v + (e + i) / 2, C = A * _ + c * v + (t + o) / 2, w = (p - _) / a, E = (u - v) / s, B = (-p - _) / a, x = (-u - v) / s, P = r._vectorAngle(1, 0, w, E), S = r._vectorAngle(w, E, B, x);
    return 0 === h && S > 0 && (S -= n.PI2), 1 === h && S < 0 && (S += n.PI2), [
      b,
      C,
      P,
      S
    ];
  }, r.arcToBezier = function (e) {
    var t = e.px, i = e.py, o = e.cx, a = e.cy, s = e.rx, l = e.ry, h = e.xAxisRotation, A = void 0 === h ? 0 : h, c = e.largeArcFlag, p = void 0 === c ? 0 : c, u = e.sweepFlag, d = void 0 === u ? 0 : u, g = [];
    if (0 === s || 0 === l)
      return [];
    var f = Math.sin(A * n.PI2 / 360), m = Math.cos(A * n.PI2 / 360), y = m * (t - o) / 2 + f * (i - a) / 2, _ = -f * (t - o) / 2 + m * (i - a) / 2;
    if (0 === y && 0 === _)
      return [];
    s = Math.abs(s), l = Math.abs(l);
    var v = Math.pow(y, 2) / Math.pow(s, 2) + Math.pow(_, 2) / Math.pow(l, 2);
    v > 1 && (s *= Math.sqrt(v), l *= Math.sqrt(v));
    var b = r._getArcCenter(t, i, o, a, s, l, p, d, f, m, y, _), C = r._slicedToArray(b, 4), w = C[0], E = C[1], B = C[2], x = C[3], P = Math.max(Math.ceil(Math.abs(x) / (n.PI2 / 4)), 1);
    x /= P;
    for (var S = 0; S < P; S++)
      g.push(r._approxUnitArc(B, x)), B += x;
    return g.map(function (e) {
      var t = r._mapToEllipse(e[0], s, l, m, f, w, E), i = t.x, n = t.y, o = r._mapToEllipse(e[1], s, l, m, f, w, E), a = o.x, h = o.y, A = r._mapToEllipse(e[2], s, l, m, f, w, E);
      return {
        x1: i,
        y1: n,
        x2: a,
        y2: h,
        x: A.x,
        y: A.y
      };
    });
  }, e.exports = r;
}
