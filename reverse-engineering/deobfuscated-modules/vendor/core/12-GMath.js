/**
 * Module 12 - GMath
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

function (exports, module, require) {
  var n = require(5) /* GPoint */;
  function r() {
  }
  r.PI2 = 2 * Math.PI, r.PIHALF = 0.5 * Math.PI, r.defaultEps = 1e-14, r.toRadians = function (e) {
    return e * Math.PI / 180;
  }, r.toDegrees = function (e) {
    return 180 * e / Math.PI;
  }, r.normalizeAngleRadians = function (e) {
    return e >= 0 ? r.mod(e, r.PI2) : e + r.PI2 * Math.floor(-e / r.PI2 + 1);
  }, r.normalizeAngleDegrees = function (e) {
    return e >= 0 ? r.mod(e, 360) : e + 360 * Math.floor(-e / 360 + 1);
  }, r.normalizeValue = function (e, t, i, n, r) {
    return "number" == typeof n && "number" == typeof r ? (e - t) * (r - n) / (i - t) + n : e < t ? t : e > i ? i : e;
  }, r.normalizePoint = function (e) {
    var t = e.dot(e), i = t && r.Q_rsqrt(t) || 1;
    return e.scale(i);
  }, r.isEqualEps = function (e, t, i) {
    return i || (i = r.defaultEps), Math.abs(e - t) <= i;
  }, r.getTurnAngle = function (e, t, i, n) {
    var o = t.subtract(e), a = n.subtract(i), s = Math.atan2(o.getY(), o.getX()) - Math.atan2(a.getY(), a.getX());
    return s <= -Math.PI ? s = r.PI2 + s : s > Math.PI && (s = -r.PI2 + s), s;
  }, r.round = function (e, t, i) {
    var n = (i = Math.abs(i) || 0) ? Math.pow(10, i) : 1;
    return t ? Math.ceil(e * n - 0.5) / n : Math.round(e * n) / n;
  }, r.mod = function (e, t) {
    return e < 0 ? -r.mod(-e, t) : e - Math.floor(e / t) * t;
  }, r.div = function (e, t) {
    return e < 0 ? -Math.floor(-e / t) : Math.floor(e / t);
  }, r.nextPowerOf2 = function (e) {
    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e |= e >> 32, ++e;
  }, r.getIntersectionPoint = function (e, t, i, o, a, s, l, h, A) {
    var c = (e - i) * (h - s) - (t - o) * (l - a), p = (e - a) * (h - s) - (t - s) * (l - a), u = (e - i) * (t - s) - (t - o) * (e - a);
    if (Math.abs(c) < r.defaultEps)
      return null;
    var d = p / c, g = u / c;
    return !A && 0 <= d && d <= 1 && 0 <= g && g <= 1 || A ? (A && (A[0] = d, A[1] = g), new n(e + d * (i - e), t + d * (o - t))) : null;
  }, r.circleLineIntersection = function (e, t, i, n, o, a, s, l) {
    var h = s * s, A = i * i + n * n;
    if (!r.isEqualEps(A, 0)) {
      var c = i * (a - t) - n * (o - e), p = h * A - c * c;
      r.isEqualEps(p, 0) ? l[0] = (i * (o - e) + n * (a - t)) / A : p > 0 && (c = i * (o - e) + n * (a - t), l[0] = (c - Math.sqrt(p)) / A, l[1] = (c + Math.sqrt(p)) / A);
    }
  }, r.circleCircleIntersection = function (e, t, i, o, a, s, l) {
    var h = r.ptSqrDist(e, t, o, a), A = Math.abs(i - s), c = A * A, p = i + s, u = p * p;
    if (!r.isEqualEps(h, 0)) {
      var d = (i * i - s * s) / (2 * h), g = (e + o) / 2 + (o - e) * d, f = (t + a) / 2 + (a - t) * d;
      if (r.isEqualEps(h, u) || !r.isEqualEps(h, 0) && r.isEqualEps(h, c))
        l[0] = new n(g, f);
      else if (c < h && h < u) {
        var m = (a - t) * (d = Math.sqrt((u - h) * (h - c)) / (2 * h)), y = (e - o) * d;
        l[0] = new n(g + m, f + y), l[1] = new n(g - m, f - y);
      }
    }
  }, r.getLinesIntersection = function (e, t, i, o, a, s) {
    var l = e * a - o * t;
    return r.isEqualEps(l, 0) ? null : new n((t * s - a * i) / l, (i * o - s * e) / l);
  }, r.getLinesFromPointsIntersection = function (e, t, i, n, o, a, s, l) {
    return r.getLinesIntersection(n - t, e - i, t * i - e * n, l - a, o - s, a * s - o * l);
  }, r.getCircumcircleCenter = function (e, t, i, n, o, a) {
    var s = e - i, l = t - n, h = i - o, A = n - a;
    return r.getLinesIntersection(s, l, -s * (e + i) / 2 - l * (t + n) / 2, h, A, -h * (i + o) / 2 - A * (n + a) / 2);
  }, r.getPointAtSegment = function (e, t, i, r, o) {
    return new n(e + o * (i - e), t + o * (r - t));
  }, r.getPointAtLength = function (e, t, i, o, a, s) {
    var l, h;
    return a <= 0 ? new n(e, t) : (l = Math.sqrt((i - e) * (i - e) + (o - t) * (o - t)), !s && a >= l ? new n(i, o) : (h = a / l, r.getPointAtSegment(e, t, i, o, h)));
  }, r.getCurveAtT = function (e, t, i, n) {
    var r = e + n * (i - e);
    return r + n * (i + n * (t - i) - r);
  }, r.getCubicCurveAtT = function (e, t, i, n, r) {
    var o = e + r * (i - e), a = i + r * (n - i), s = o + r * (a - o);
    return s + r * (a + r * (n + r * (t - n) - a) - s);
  }, r.vDotProduct = function (e, t, i, n) {
    return null == e || null == t || null == i || null == n ? 0 : e * i + t * n;
  }, r.Q_rsqrt_f = new Float32Array(1), r.Q_rsqrt_i = new Int32Array(r.Q_rsqrt_f.buffer), r.Q_rsqrt = function (e) {
    var t = 0.5 * e;
    return r.Q_rsqrt_f[0] = e, r.Q_rsqrt_i[0] = 1597463007 - (r.Q_rsqrt_i[0] >> 1), e = r.Q_rsqrt_f[0], e *= 1.5 - t * e * e;
  }, r.ptSqrDist = function (e, t, i, n) {
    var r, o;
    return null == e || null == t || null == i || null == n ? 0 : (r = e - i) * r + (o = t - n) * o;
  }, r.ptDist = function (e, t, i, n) {
    return Math.sqrt(r.ptSqrDist(e, t, i, n));
  }, r.segmentSide = function (e, t, i, n, o, a) {
    var s = (a - t) * (i - e) + (o - e) * (t - n);
    return r.isEqualEps(s, 0) ? 0 : s > 0 ? 1 : -1;
  }, r.sqrSegmentDist = function (e, t, i, n, o, a, s, l) {
    if (r.isEqualEps(e, i) && r.isEqualEps(t, n))
      return r.ptSqrDist(e, t, o, a);
    var h, A, c, p, u, d, g = 0, f = 0;
    return h = o - e, A = a - t, e == i && t == n ? (f = r.vDotProduct(h, A, h, A), s && (s[0] = 0)) : s && l && r.vDotProduct(h, A, h, A) <= l ? (s[0] = 0, f = 0) : s && l && r.ptSqrDist(o, a, i, n) <= l ? (s[0] = 1, f = 0) : (c = i - e, p = n - t, (g = r.vDotProduct(h, A, c, p) / r.vDotProduct(c, p, c, p)) <= 0 ? (f = r.vDotProduct(h, A, h, A), s && (s[0] = 0)) : g >= 1 ? (f = r.vDotProduct(o - i, a - n, o - i, a - n), s && (s[0] = 1)) : (u = h - c * g, d = A - p * g, f = r.vDotProduct(u, d, u, d), s && (s[0] = g))), f;
  }, r.getSegmToSegmSqrDist = function (e, t, i, n) {
    var o = r.sqrSegmentDist(e.getX(), e.getY(), t.getX(), t.getY(), i.getX(), i.getY()), a = o;
    return a > 0 && ((o = r.sqrSegmentDist(e.getX(), e.getY(), t.getX(), t.getY(), n.getX(), n.getY())) < a && (a = o), a > 0 && ((o = r.sqrSegmentDist(i.getX(), i.getY(), n.getX(), n.getY(), e.getX(), e.getY())) < a && (a = o), a > 0 && (o = r.sqrSegmentDist(i.getX(), i.getY(), n.getX(), n.getY(), t.getX(), t.getY())) < a && (a = o))), a;
  }, r.pointToLineDist = function (e, t, i, n, o, a) {
    var s = r.getVectorProjection(e, t, i, n, o, a);
    return r.ptDist(s.getX(), s.getY(), o, a);
  }, r.getVectorProjection = function (e, t, i, o, a, s, l, h) {
    var A, c = a - e, p = s - t, u = i - e, d = o - t, g = r.vDotProduct(u, d, u, d);
    if (r.isEqualEps(g, 0))
      A = new n(a, s);
    else {
      var f = r.vDotProduct(c, p, u, d) / g;
      A = f <= 0 && (l || h) ? new n(e, t) : f >= 1 && h ? new n(i, o) : new n(u * f + e, d * f + t);
    }
    return A;
  }, r.isCoDirected = function (e, t, i, n, o, a, s, l) {
    if (r.isEqualEps(e, i) && r.isEqualEps(t, n) || r.isEqualEps(o, s) && r.isEqualEps(a, l))
      return true;
    var h = s + e - o, A = l + t - a, c = r.getVectorProjection(e, t, i, n, h, A);
    return (i - e) * (c.getX() - e) >= 0 && (n - t) * (c.getY() - t) >= 0;
  }, r.getSin = function (e, t, i, n, o, a) {
    if (r.isEqualEps(e, i) && r.isEqualEps(t, n))
      return 1;
    var s = r.getVectorProjection(i, n, o, a, e, t, false);
    return Math.sqrt(r.ptSqrDist(e, t, s.getX(), s.getY()) / r.ptSqrDist(e, t, i, n));
  }, r.solveLinear2Pseudo = function (e, t, i, o, a, s) {
    var l, h, A = r.getLinesIntersection(e, t, -i, o, a, -s);
    null == A && (r.isEqualEps(e + t, 0) || r.isEqualEps(i, 0) && !r.isEqualEps(s, 0) ? r.isEqualEps(o + a, 0) || r.isEqualEps(s, 0) && !r.isEqualEps(i, 0) ? r.isEqualEps(t, 0) && r.isEqualEps(a, 0) ? r.isEqualEps(e, 0) && r.isEqualEps(o, 0) ? (l = 0, h = 0) : (h = 0, l = r.isEqualEps(e, 0) ? s / o : i / e) : (l = 0, h = r.isEqualEps(t, 0) ? s / a : i / t) : h = l = s / (o + a) : h = l = i / (e + t), r.isEqualEps(e * l + t * h, i) && r.isEqualEps(o * l + a * h, s) && (A = new n(l, h)));
    return A;
  }, r.divideQuadraticCurve = function (e, t, i, n, r, o) {
    var a = e + n * (t - e), s = t + n * (i - t), l = a + n * (s - a);
    r && (r[0] = e, r[1] = a, r[2] = l), o && (o[0] = l, o[1] = s, o[2] = i);
  }, r.evalCubic = function (e, t, i, n, r) {
    return 0 == r ? n : 1 == r ? e + t + i + n : ((r * e + t) * r + i) * r + n;
  }, r.getBezierDerivativeEquationCoeffs = function (e, t, i, n, r, o, a, s, l, h) {
    var A, c, p, u, d, g;
    A = i - a - (d = r - e) - (p = 2 * (a - r - d)), c = n - s - (g = o - t) - (u = 2 * (s - o - g)), l[0] = A, l[1] = p, l[2] = d, h[0] = c, h[1] = u, h[2] = g;
  }, r.uSortSegment = function (e, t, i, n) {
    var r = 0;
    if (i.sort(function (e, t) {
        return e - t;
      }), i[0] >= e && i[0] <= t && (n[0] = i[0], r = 1, 1 == i.length))
      return r;
    for (var o = 1; o < i.length; o++)
      i[o] != i[o - 1] && i[o] >= e && i[o] <= t && (n.push(i[o]), ++r);
    return r;
  }, r.getCubicCurveSplits = function (e, t, i) {
    var n = e[0], o = e[1], a = e[2], s = t[0], l = t[1], h = t[2], A = [
        0,
        1
      ];
    r.getQuadraticRoots(n, o, a, A), r.getQuadraticRoots(s, l, h, A);
    var c = o * s - l * n, p = 2 * (a * s - h * n), u = a * l - h * o;
    return r.getQuadraticRoots(c, p, u, A), r.uSortSegment(0, 1, A, i);
  }, r.getBezierSelfIntersections = function (e, t, i) {
    var n = new Float64Array(4), o = new Float64Array(4);
    r.shiftPoly(e, 3, 0.5, n), r.shiftPoly(t, 3, 0.5, o);
    var a = -n[0], s = n[1] / 3, l = -n[2] / 3, h = -o[0], A = o[1] / 3, c = -o[2] / 3, p = a * c - l * h, u = a * A - s * h, d = 12 * u * (s * c - l * A) - 3 * p * p;
    if (0 != u)
      if (0 == d) {
        var g = p / (2 * u);
        if (-0.5 < g && g < 0.5)
          return g + 0.5;
      } else if (d > 0) {
        var f = Math.sqrt(d), m = (p - f) / (2 * u), y = (p + f) / (2 * u);
        -0.5 <= m && m <= 0.5 && -0.5 <= y && y <= 0.5 && (i[0] = m + 0.5, i[1] = y + 0.5);
      }
    return null;
  }, r.getCtrlPtsCasteljau = function (e, t, i, n, r, o, a, s) {
    var l = e + r * (t - e), h = t + r * (i - t), A = i + r * (n - i), c = l + r * (h - l), p = h + r * (A - h), u = c + r * (p - c);
    if (null != o && 1 != o || (a[0] = e, a[1] = l, a[2] = c, a[3] = u), null == o || 2 == o) {
      if (2 == o)
        s = a;
      s[0] = u, s[1] = p, s[2] = A, s[3] = n;
    }
  }, r.getCtrlPts = function (e, t, i, n, o, a, s) {
    var l;
    0 != o ? 1 != a ? (r.getCtrlPtsCasteljau(e, i, n, t, o, 2, s), l = (a - o) / (1 - o), r.getCtrlPtsCasteljau(s[0], s[1], s[2], s[3], l, 1, s)) : r.getCtrlPtsCasteljau(e, i, n, t, o, 2, s) : r.getCtrlPtsCasteljau(e, i, n, t, a, 1, s);
  }, r.getCtrlPtsQuadratic = function (e, t, i, n, o, a) {
    var s;
    0 != n ? 1 != o ? (r.divideQuadraticCurve(e, i, t, n, null, a), s = (o - n) / (1 - n), r.divideQuadraticCurve(a[0], a[1], a[2], s, a, null)) : r.divideQuadraticCurve(e, i, t, n, null, a) : r.divideQuadraticCurve(e, i, t, o, a, null);
  }, r.getArcLengthQuadratic = function (e, t, i, n) {
    n = n || r.defaultEps;
    var o = function (e, t, i, n, a, s, l) {
      var h = r.ptDist(e, t, a, s), A = r.ptDist(e, t, i, n);
      if ((A += r.ptDist(i, n, a, s)) - h > l) {
        var c = new Float64Array(3), p = new Float64Array(3), u = new Float64Array(3), d = new Float64Array(3);
        return r.divideQuadraticCurve(e, i, a, 0.5, c, u), r.divideQuadraticCurve(t, n, s, 0.5, p, d), A = o(c[0], p[0], c[1], p[1], c[2], p[2], l), A += o(u[0], d[0], u[1], d[1], u[2], d[2], l);
      }
      return A;
    };
    return o(e.getX(), e.getY(), i.getX(), i.getY(), t.getX(), t.getY(), n);
  }, r.getArcLengthCubic = function (e, t, i, n, o) {
    o = o || 0.01;
    var a = function (e, t, i, n, o, s, l, h, A) {
      var c = r.ptDist(e, t, l, h), p = r.ptDist(e, t, i, n);
      if (p += r.ptDist(i, n, o, s), (p += r.ptDist(o, s, l, h)) - c > A) {
        var u = new Float64Array(4), d = new Float64Array(4), g = new Float64Array(4), f = new Float64Array(4);
        r.getCtrlPtsCasteljau(e, i, o, l, 0.5, null, u, g), r.getCtrlPtsCasteljau(t, n, s, h, 0.5, null, d, f), p = a(u[0], d[0], u[1], d[1], u[2], d[2], u[3], d[3], A), p += a(g[0], f[0], g[1], f[1], g[2], f[2], g[3], f[3], A);
      }
      return p;
    };
    return a(e.getX(), e.getY(), i.getX(), i.getY(), n.getX(), n.getY(), t.getX(), t.getY(), o);
  }, r.evalPoly = function (e, t, i) {
    var n = 0, r = null;
    if (t < 0)
      return null;
    if (t > 0)
      if (0 != i)
        if (r = e[0], 1 == i)
          for (n = 1; n <= t; ++n)
            r += e[n];
        else
          for (n = 1; n <= t; ++n)
            r = r * i + e[n];
      else
        r = e[t];
    else
      r = e[t];
    return r;
  }, r.getCoeffPolyDeriv = function (e, t, i) {
    var n = 0, r = false;
    if (t >= 1) {
      for (n = 0; n < t; ++n)
        i[n] = e[n] * (t - n);
      r = true;
    }
    return r;
  }, r.getCubicRoots = function (e, t, i, n, o, a) {
    var s, l, h, A, c, p, u, d, g, f, m, y, _, v, b, C = 0, w = new Float64Array(4), E = new Float64Array(4), B = new Float64Array(3), x = new Float64Array(2), P = -a;
    if (t >= i)
      return 0;
    if (e[0] < 0)
      for (b = 0; b < 4; ++b)
        w[b] = -e[b];
    else
      for (b = 0; b < 4; ++b)
        w[b] = e[b];
    return p = w[0], u = w[1], d = w[2], g = w[3], 0 == t && 1 == i ? r.inversePolyUnaryInterval(w, 3, E) : r.inversePolyInterval(w, 3, t, i, E), 0 == r.estimPositiveRootsDescartes(E, 3) ? 0 : (r.getCoeffPolyDeriv(w, 3, B), x[0] = 6 * p, x[1] = 2 * u, c = 0, 0 == (h = u * u - B[0] * d) ? (c = 1, l = s = -u / B[0]) : h > 0 && (c = 2, s = (-u - (A = Math.sqrt(h))) / B[0], l = (-u + A) / B[0]), f = r.evalCubic(p, u, d, g, t), m = r.evalCubic(p, u, d, g, i), 0 == c || s >= i || l <= t ? P <= f && f <= a ? o && (n[C] = t, C += 1) : P <= m && m <= a ? o && (n[C] = i, C += 1) : f < 0 && m > 0 && (v = r.locateByNewton(t, i, f, m, w, 3, B, x, a), n[C] = null != v ? v : (i + t) / 2, C += 1) : s <= t && l >= i ? P <= f && f <= a ? o && (n[C] = t, C += 1) : P <= m && m <= a ? o && (n[C] = i, C += 1) : f > 0 && m < 0 && (v = r.locateByNewton(t, i, f, m, w, 3, B, x, a), n[C] = null != v ? v : (i + t) / 2, C += 1) : s > t && l >= i ? P <= (y = r.evalCubic(p, u, d, g, s)) && y <= a ? (n[C] = s, C += 1) : y > 0 && (P <= f && f <= a ? o && (n[C] = t, C += 1) : f < 0 && (v = r.locateByNewton(t, s, f, y, w, 3, B, x, a), n[C] = null != v ? v : (t + s) / 2, C += 1), P <= m && m <= a ? o && (n[C] = i, C += 1) : m < 0 && (v = r.locateByNewton(s, i, y, m, w, 3, B, x, a), n[C] = null != v ? v : (s + i) / 2, C += 1)) : s <= t && l < i ? P <= (_ = r.evalCubic(p, u, d, g, l)) && _ <= a ? (n[C] = l, C += 1) : _ < 0 && (P <= f && f <= a ? o && (n[C] = t, C += 1) : f > 0 && (v = r.locateByNewton(t, l, f, _, w, 3, B, x, a), n[C] = null != v ? v : (t + l) / 2, C += 1), P <= m && m <= a ? o && (n[C] = i, C += 1) : m > 0 && (v = r.locateByNewton(l, i, _, m, w, 3, B, x, a), n[C] = null != v ? v : (l + i) / 2, C += 1)) : s == l ? P <= (y = r.evalCubic(p, u, d, g, s)) && y <= a ? (n[C] = s, C += 1) : P <= f && f <= a ? o && (n[C] = t, C += 1) : P <= m && m <= a ? o && (n[C] = i, C += 1) : y < 0 && m > 0 ? (v = r.locateByNewton(s, i, y, m, w, 3, B, x, a), n[C] = null != v ? v : (s + i) / 2, C += 1) : f < 0 && y > 0 && (v = r.locateByNewton(t, s, f, y, w, 3, B, x, a), n[C] = null != v ? v : (t + s) / 2, C += 1) : (y = r.evalCubic(p, u, d, g, s), _ = r.evalCubic(u, u, d, g, l), y <= 0 || _ >= 0 ? (P <= y && y <= a && (n[C] = s, C += 1), y <= 0 && (P <= m && m <= a ? o && (n[C] = i, C += 1) : _ < 0 && m > 0 && (v = r.locateByNewton(l, i, _, m, w, 3, B, x, a), n[C] = null != v ? v : (l + i) / 2, C += 1)), P <= _ && _ <= a && (n[C] = l, C += 1), _ >= 0 && (P <= f && f <= a ? o && (n[C] = t, C += 1) : f < 0 && y > 0 && (v = r.locateByNewton(t, s, f, y, w, 3, B, x, a), n[C] = null != v ? v : (t + s) / 2, C += 1))) : (v = r.locateByNewton(s, l, y, _, w, 3, B, x, a), n[C] = null != v ? v : (s + l) / 2, C += 1, P <= f && f <= a ? o && (n[C] = t, C += 1) : f < 0 && y > 0 && (v = r.locateByNewton(t, s, f, y, w, 3, B, x, a), n[C] = null != v ? v : (t + s) / 2, C += 1), P <= m && m <= a ? (n[C] = i, C += 1) : _ < 0 && m > 0 && (v = r.locateByNewton(l, i, _, m, w, 3, B, x, a), n[C] = null != v ? v : (l + i) / 2, C += 1))), C);
  }, r._maxIter = 100, r.locateByNewton = function (e, t, i, n, o, a, s, l, h, A, c) {
    var p, u, d, g, f, m, y, _, v, b, C, w = null, E = a - 1, B = -h, x = -r.defaultEps, P = 0, S = h + 1, T = [], I = [], F = [], R = [], D = [];
    if (B <= i && i <= h)
      return e;
    if (B <= n && n <= h)
      return t;
    if (g = e, f = t, 3 == a)
      (d = -l[1] / l[0]) < e || d > t ? (u = l[0] * e + l[1]) > 0 && i > 0 || u < 0 && i < 0 ? (w = e, S = i) : (u = l[0] * t + l[1]) > 0 && n > 0 || u < 0 && n < 0 ? (w = t, S = n) : w = null : B <= (S = r.evalPoly(o, a, d)) && S <= h ? w = d : S > 0 && i > 0 || S < 0 && i < 0 ? (g = d + h, S = r.evalPoly(o, a, g), (u = l[0] * g + l[1]) > 0 && S > 0 || u < 0 && S < 0 ? w = g : (u = l[0] * t + l[1]) > 0 && n > 0 || u < 0 && n < 0 ? (w = t, S = n) : w = null) : S > 0 && n > 0 || S < 0 && n < 0 ? (f = d - h, S = r.evalPoly(o, a, f), (u = l[0] * f + l[1]) > 0 && S > 0 || u < 0 && S < 0 ? w = f : (u = l[0] * e + l[1]) > 0 && i > 0 || u < 0 && i < 0 ? (w = e, S = i) : w = null) : w = null;
    else {
      if (5 != a)
        throw new Error("Unsupported polynomial degree.");
      if (b = false, C = false, i < 0 && n > 0 || i > 0 && n < 0 ? C = true : A && c && (b = true), _ = true, false, r.getCubicRoots(l, e, t, D, false, h), P = 0, 0 == D.length)
        g = e, F[0] = i, f = t, F[1] = n, b && (I[0] = c[0], I[1] = c[1]);
      else
        for (r.uSortSegment(e, t, D, R), g = e, F[0] = i, b && (I[0] = c[0]); P <= R.length && (P > 0 && (g = f, F[0] = F[1], b && (I[0] = I[1])), P < R.length ? (f = R[P], F[1] = null, b && (I[1] = null)) : (f = t, F[1] = n, b && (I[1] = c[1])), !(C && (null == F[1] && (F[1] = r.evalPoly(o, a, f)), r.isEqualEps(F[1], 0, h) && (w = f, S = F[1], _ = false), F[0] > 0 && F[1] < 0 || F[0] < 0 && F[1] > 0))) && (!b || 0 == r.countRootsNSturm(o, a, s, g, f, A, I, F));)
          ++P;
      if (_ && 0 == P && ((u = r.evalPoly(l, l.length - 1, e)) > 0 && i > 0 || u < 0 && i < 0) && (w = e, S = i, _ = false), _ && P == R.length && ((u = r.evalPoly(l, l.length - 1, t)) > 0 && n > 0 || u < 0 && n < 0) && (w = t, S = n, _ = false), _) {
        for (m = F[0], y = F[1], b && (T = I), w = (g + f) / 2, u = r.evalPoly(l, l.length - 1, w); f - g > h && _;)
          w = (g + f) / 2, B <= (S = r.evalPoly(o, a, w)) && S <= h || u > 0 && S > 0 || u < 0 && S < 0 ? _ = false : S > 0 && m < 0 || S < 0 && m > 0 ? (f = w, y = S, b && (T[1] = null)) : S > 0 && y < 0 || S < 0 && y > 0 ? (g = w, m = S, b && (T[0] = null)) : C || !b ? (_ = false, w = null) : (F = [
            m,
            S
          ], I = [
            T[0],
            null
          ], r.countRootsNSturm(o, a, s, g, w, A, I, F) > 0 ? (f = w, y = S, T[0] = I[0], T[1] = I[1]) : null != T[1] && I[1] == T[1] ? _ = false : (g = w, m = S, T[0] = I[0]));
        _ && (w = (g + f) / 2, S = r.evalPoly(o, a, w));
      }
    }
    for (P = 1; null != w && (S < B || h < S) && P < r._maxIter;)
      x < (p = r.evalPoly(s, E, w)) && p < r.defaultEps ? ((S = r.evalPoly(o, a, w)) < B || h < S) && (w = null) : (v = w, ((w -= p = (S = r.evalPoly(o, a, w)) / p) <= g || w >= f) && (w = null), p > 0 ? f = v : p < 0 && (g = v)), ++P;
    return P == r._maxIter && (w = null), w;
  }, r.getQuadraticRoots = function (e, t, i, n) {
    var r, o;
    0 == e ? 0 != t && n.push(-i / t) : 0 == (r = t * t - 4 * e * i) ? n.push(-t / (2 * e)) : r > 0 && (o = Math.sqrt(r), n.push((-t + o) / (2 * e)), n.push((-t - o) / (2 * e)));
  }, r._pseudoRem = function (e, t, i) {
    var n, r, o, a, s, l = [], h = [], A = true, c = t[0];
    if (t.length > e.length)
      return i = e, 1;
    for (a = 2; a <= e.length - t.length + 1; ++a)
      c *= t[0];
    for (a = 0; a < e.length; ++a)
      l[a] = e[a] * c;
    for (; A;) {
      for (r = l[0] / t[0], o = false, n = 1; n < t.length; ++n)
        (0 != (s = l[n] - r * t[n]) || o) && (h.push(s), 0 != s && (o = true));
      for (n = t.length; n < l.length; ++n)
        h.push(l[n]);
      h.length >= t.length ? (l = h, h = []) : A = false;
    }
    if (h.length > 0)
      for (a = 0; a < h.length; ++a)
        i[a] = h[a];
    return c;
  }, r.getSturmPRS = function (e, t, i, n) {
    var o, a, s, l, h, A, c, p = [], u = [], d = [], g = [], f = [], m = [];
    for (u[0] = null, n[0] = e, n[1] = i, p[0] = e[0], p[1] = i[0], d[0] = 1, u[1] = 1, g[0] = 1, g[1] = p[1], m[0] = 1, m[1] = 1, o = 1; o < t && (f = [], c = r._pseudoRem(n[o - 1], n[o], f), 0 != f.length); ++o) {
      for (n[o + 1] = [], a = 0; a < f.length; ++a)
        n[o + 1][a] = f[a] / u[o];
      for (d[o] = n[o + 1].length - n[o].length, p[o + 1] = n[o + 1][0], l = 1, h = 1, A = p[o + 1], s = 2; s <= d[o]; ++s)
        l *= g[o], h = -h, A *= p[o + 1];
      u[o + 1] = h * l * g[o] * p[o], g[o + 1] = A / l, u[o] > 0 && c > 0 || u[o] < 0 && c < 0 ? m[o + 1] = -m[o - 1] : m[o + 1] = m[o - 1];
    }
    for (o = 2; o < n.length; ++o)
      if (m[o] < 0)
        for (a = 0; a < n[o].length; ++a)
          n[o][a] = -n[o][a];
  }, r.countRootsNSturm = function (e, t, i, n, o, a, s, l) {
    var h, A, c, p = 0, u = 0;
    if (null == s[0]) {
      for (null == l[0] && (l[0] = r.evalPoly(a[0], a[0].length - 1, n)), h = l[0], c = 1; c < a.length; ++c)
        0 != (A = r.evalPoly(a[c], a[c].length - 1, n)) && (h < 0 && A > 0 || h > 0 && A < 0) && (++p, h = A);
      s[0] = p;
    } else
      p = s[0];
    if (null == s[1]) {
      for (null == l[1] && (l[1] = r.evalPoly(a[0], a[0].length - 1, o)), h = l[1], c = 1; c < a.length; ++c)
        0 != (A = r.evalPoly(a[c], a[c].length - 1, o)) && (h < 0 && A > 0 || h > 0 && A < 0) && (++u, h = A);
      s[1] = u;
    } else
      u = s[1];
    return p > u ? p - u : u - p;
  }, r.locRootsSturm = function (e, t, i, n, o, a, s, l, h, A, c) {
    var p, u, d, g, f;
    if (!(s <= 1))
      if (p = (n + o) / 2, u = [
          l[0],
          null
        ], d = [
          h[0],
          null
        ], f = s - (g = r.countRootsNSturm(e, t, i, n, p, a, u, d)), 1 == g || c > 31 ? A.push([
          n,
          p,
          d[0],
          d[1]
        ]) : g > 1 && (++c, r.locRootsSturm(e, t, i, n, p, a, g, u, d, A, c)), 1 == f || c > 31)
        A.push([
          p,
          o,
          d[1],
          h[1]
        ]);
      else if (f > 1) {
        ++c;
        var m = [
            u[1],
            l[1]
          ], y = [
            d[1],
            h[1]
          ];
        r.locRootsSturm(e, t, i, p, o, a, f, m, y, A, c);
      }
  }, r.shiftPoly = function (e, t, i, n) {
    var o, a, s = [];
    for (s[0] = 1, o = 1; o <= t; ++o)
      s.push(i * s[o - 1]);
    for (n[0] = e[0], o = 1; o <= t; ++o)
      for (n[o] = e[o], a = 0; a < o; ++a)
        n[o] += r.combNK(t - a, o - a) * e[a] * s[o - a];
  }, r._numComb5 = [
    1,
    5,
    10,
    10,
    5,
    1
  ], r._numComb4 = [
    1,
    4,
    6,
    4,
    1
  ], r._numComb3 = [
    1,
    3,
    3,
    1
  ], r._numComb2 = [
    1,
    2,
    1
  ], r._numComb1 = [
    1,
    1
  ], r.combNK = function (e, t) {
    if (!(e <= 5 && t <= e))
      throw new Error("Combinations calculation not implemented");
    return 5 == e ? r._numComb5[t] : 4 == e ? r._numComb4[t] : 3 == e ? r._numComb3[t] : 2 == e ? r._numComb2[t] : 1 == e ? r._numComb1[t] : 0;
  }, r.shiftPolyOne = function (e, t, i) {
    var n, o;
    for (i[0] = e[0], n = 1; n <= t; ++n)
      for (i[n] = e[n], o = 0; o < n; ++o)
        i[n] += r.combNK(t - o, n - o) * e[o];
  }, r.inversePolyInterval = function (e, t, i, n, o) {
    var a, s, l, h = new Float32Array(t + 1);
    for (a = 0; a <= t; ++a)
      h[a] = e[a];
    if (r.shiftPoly(e, t, i, h), 0 != (s = n - i))
      for (l = 1, a = 1; a <= t; ++a)
        l /= s, h[t - a] *= l;
    r.inversePolyUnaryInterval(h, t, o);
  }, r.inversePolyUnaryInterval = function (e, t, i) {
    var n, o = new Float32Array(t + 1);
    for (n = 0; n <= t; ++n)
      o[n] = e[t - n];
    r.shiftPolyOne(o, t, i);
  }, r.estimPositiveRootsDescartes = function (e, t) {
    var i, n = [], r = 0, o = 0;
    for (i = 0; i <= t; ++i)
      0 != e[i] && (n.push(e[i]), ++r);
    for (i = 0; i < r - 1; ++i)
      (n[i] > 0 && n[i + 1] < 0 || n[i] < 0 && n[i + 1] > 0) && (o += 1);
    return o;
  }, r.getRotationSegment = function (e, t) {
    var i = Math.atan2(t.getY() - e.getY(), t.getX() - e.getX()) + 7 * Math.PI / 8;
    i < 0 && (i += r.PI2);
    var n = Math.floor(i / (Math.PI / 4));
    return (n < 0 || n > 7) && (n = 7), n;
  }, Number.isNaN || Object.defineProperty(Number, "isNaN", {
    value: function e(t) {
      return "number" == typeof t && e(t);
    },
    configurable: true,
    enumerable: false,
    writable: true
  }), r.clamp = function (e, t, i) {
    return Math.min(i, Math.max(e, t));
  }, exports.exports = r;
}
