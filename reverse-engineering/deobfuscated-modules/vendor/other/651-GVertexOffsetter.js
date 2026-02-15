/**
 * Module 651 - GVertexOffsetter
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
  var n = require(0) /* GObject */, r = require(5) /* GPoint */, o = require(87) /* GVertexSource */, a = require(48) /* GVertex */, s = require(14) /* GPaintCanvas */, l = require(54) /* GVertexContainer */, h = require(12) /* GMath */;
  function A(e, t, i, n, r, o) {
    this._tolerance = r ? r / 3 : 0.01, this._source = e, this._offset = t, this._makeInset = i, this._makeOutset = n, this._startVertex = null, this._cap = o;
    for (var a = 1, s = (r = this._tolerance, 0); r < 1; ++s)
      r *= 10, a *= 10;
    this._tolRange = a;
  }
  n.inherit(A, o), A.MAX_RECURS = 100, A.PolySegment = function (e, t, i, n, r) {
    this.point = e, this.isCap = !!r, !t || !i || !n || n < 0 ? this.bulge = 0 : (this.bulge = t, this.center = i, this.radius = n);
  }, A.PolySegment.prototype.point = null, A.PolySegment.prototype.bulge = null, A.PolySegment.prototype.center = null, A.PolySegment.prototype.radius = null, A.PolySegment.prototype.isCap = false, A.PolySegment.prototype.next = null, A.PolySegment.prototype.previous = null, A.PolyOffsetSegment = function (e, t, i, n, r, o, a) {
    A.PolySegment.call(this, t, n, r, o, a), this.basepoint = e, i && (this.point2 = i);
  }, n.inherit(A.PolyOffsetSegment, A.PolySegment), A.PolyOffsetSegment.prototype.basepoint = null, A.PolyOffsetSegment.prototype.point2 = null, A.IntersectionType = function () {
  }, A.IntersectionType.prototype.TIP = false, A.IntersectionType.prototype.FIP = false, A.IntersectionType.prototype.PFIP = false, A.IntersectionResult = function () {
    this.intTypes = [
      new A.IntersectionType(),
      new A.IntersectionType()
    ];
  }, A.IntersectionResult.prototype.point = null, A.IntersectionResult.prototype.intTypes = null, A.IntersectionResult.prototype.clear = function () {
    this.point = null, this.intTypes[0].TIP = false, this.intTypes[0].FIP = false, this.intTypes[0].PFIP = false, this.intTypes[1].TIP = false, this.intTypes[1].FIP = false, this.intTypes[1].PFIP = false;
  }, A.PolySegmentContainer = function () {
    this.count = 0;
  }, A.PolySegmentContainer.prototype.head = null, A.PolySegmentContainer.prototype.end = null, A.PolySegmentContainer.prototype.closed = null, A.PolySegmentContainer.prototype.count = 0, A.PolySegmentContainer.prototype.insertSegment = function (e, t) {
    return e.next = null, e.previous = null, this.head ? t ? (this.head == t ? this.head = e : (e.previous = t.previous, t.previous.next = e), e.next = t, t.previous = e) : (this.end.next = e, e.previous = this.end, this.end = e) : (this.head = e, this.end = e), ++this.count, e;
  }, A.PolySegmentContainer.prototype.prependContainer = function (e) {
    this.head ? (e.end.next = this.head, this.head.previous = e.end, this.head = e.head) : (this.head = e.head, this.end = e.end), this.count += e.count;
  }, A.PolySegmentContainer.prototype.appendContainer = function (e) {
    this.head ? (this.end.next = e.head, e.head.previous = this.end, this.end = e.end) : (this.head = e.head, this.end = e.end), this.count += e.count;
  }, A.PolySegmentContainer.prototype.deleteSegment = function (e) {
    return e.previous && (e.previous.next = e.next), e.next && (e.next.previous = e.previous), this.head == e && (this.head = e.next), this.end == e && (this.end = e.previous), --this.count, e;
  }, A.IntersectionPt = function (e, t, i, n, r) {
    this.x = e, this.y = t, this.slope = i, this.segm = n, this.segmIdx = r;
  }, A.IntersectionPt.prototype.x = null, A.IntersectionPt.prototype.y = null, A.IntersectionPt.prototype.slope = null, A.IntersectionPt.prototype.segm = null, A.IntersectionPt.prototype.segmIdx = null, A.prototype._source = null, A.prototype._offset = null, A.prototype._makeInset = false, A.prototype._makeOutset = false, A.prototype._tolerance = null, A.prototype._tolRange = 1, A.prototype._polyline = null, A.prototype._polyinset = null, A.prototype._polyoutset = null, A.prototype._pieces = null, A.prototype._pieceIdx = 0, A.prototype._cap = null, A.prototype._startVertex = null, A.prototype.rewindVertices = function (e) {
    return 0 == e && (this._pieces = null, this._pieceIdx = 0, this._startVertex = null, this._source.rewindVertices(0));
  }, A.prototype.readVertex = function (e) {
    return !!(this._pieces && this._pieces.length && this._readVertex(e)) || (this._polyline = new A.PolySegmentContainer(), this._polyoutset = [], this._polyinset = [], this._pieces = [], this._pieceIdx = 0, this._startVertex = this.generatePolyLine(this._tolerance, this._startVertex), !!(this._polyline.count && (this.generatePolyOffset(Math.abs(this._offset), this._makeInset, this._makeOutset, this._tolerance), this.generateOffset(this._makeInset, this._makeOutset, this._tolerance), this._pieces.length && (this._rewindVertices(), this._pieceIdx = 0), this._pieces && this._pieces.length && this._readVertex(e))));
  }, A.prototype.hasVertexForRead = function () {
    return true;
  }, A.prototype.addCurveToPolyline = function (e, t, i, n, o) {
    ++o;
    var a = 1e-9;
    if (this._isQudraticCurveFlat(e, t, i, n)) {
      var s = new A.PolySegment(e, 0);
      this._polyline.insertSegment(s);
    } else {
      var l = h.ptDist(e.getX(), e.getY(), t.getX(), t.getY()), c = h.ptDist(t.getX(), t.getY(), i.getX(), i.getY()), p = h.ptDist(e.getX(), e.getY(), i.getX(), i.getY());
      if (h.isEqualEps(l, 0, a) || h.isEqualEps(c, 0, a)) {
        s = new A.PolySegment(e, 0);
        this._polyline.insertSegment(s);
      } else {
        if (h.isEqualEps(p, 0, a)) {
          s = new A.PolySegment(e, 0);
          return this._polyline.insertSegment(s), s = new A.PolySegment(new r((e.getX() + t.getX()) / 2, (e.getY() + t.getY()) / 2), 0), void this._polyline.insertSegment(s);
        }
        var u = new r((t.getX() - e.getX()) / l, (t.getY() - e.getY()) / l), d = new r((i.getX() - t.getX()) / c, (i.getY() - t.getY()) / c), g = new r((i.getX() - e.getX()) / p, (i.getY() - e.getY()) / p), f = h.vDotProduct(u.getX(), u.getY(), d.getX(), d.getY()), m = new r(l * (d.getX() - u.getX() * f), l * (d.getY() - u.getY() * f)), y = l * f - c, _ = c * f - l, v = new r(m.getX() + y * u.getX() + _ * d.getX(), m.getY() + y * u.getY() + _ * d.getY());
        y = Math.sqrt(h.vDotProduct(m.getX(), m.getY(), m.getX(), m.getY())), _ = Math.sqrt(h.vDotProduct(v.getX(), v.getY(), v.getX(), v.getY()));
        var b = function () {
          var i = new A.PolySegment(e, 0);
          this._polyline.insertSegment(i), i = new A.PolySegment(t, 0), this._polyline.insertSegment(i);
        }.bind(this);
        if (h.isEqualEps(y, 0, a) || h.isEqualEps(_, 0, a))
          b();
        else {
          var C = new r(m.getX() / y, m.getY() / y), w = new r(v.getX() / _, v.getY() / _), E = 1 - f, B = h.vDotProduct(d.getX(), d.getY(), C.getX(), C.getY()), x = h.vDotProduct(g.getX(), g.getY(), u.getX(), u.getY()), P = h.vDotProduct(g.getX(), g.getY(), C.getX(), C.getY()), S = h.vDotProduct(u.getX(), u.getY(), w.getX(), w.getY()), T = h.vDotProduct(g.getX(), g.getY(), d.getX(), d.getY()), I = h.vDotProduct(g.getX(), g.getY(), w.getX(), w.getY());
          if (h.isEqualEps(I, 0, a) || h.isEqualEps(P, 0, a) || h.isEqualEps(S, 0, a) || h.isEqualEps(B, 0, a))
            b();
          else {
            var F = B * x / P + S * T / I, R = -B * S / (P * I * 2), D = [];
            h.getQuadraticRoots(E, F, R, D);
            var k = null;
            if (null != D[0] && D[0] < 1 && D[0] > 0)
              k = D[0];
            else {
              if (!(null != D[1] && D[1] < 1 && D[1] > 0))
                return void b();
              k = D[1];
            }
            var G = k * p * I / S, Q = k * p * P / B;
            if (h.isEqualEps(x, 1, a) || h.isEqualEps(T, 1, a))
              b();
            else {
              var M = Math.sqrt((1 - x) / 2), N = Math.sqrt((1 + x) / 2), U = G * N / M, V = Math.sqrt((1 - T) / 2), O = Math.sqrt((1 + T) / 2), L = Q * O / V, Y = new r(e.getX() + U * C.getX(), e.getY() + U * C.getY()), X = new r(i.getX() + L * w.getX(), i.getY() + L * w.getY());
              y = 2 * l * x, D = [], h.getQuadraticRoots(p - y, y, -G * (1 + x), D);
              var H = 0.5;
              if (null != D[0] && D[0] < 1 && D[0] > 0)
                H = D[0];
              else {
                if (!(null != D[1] && D[1] < 1 && D[1] > 0))
                  return void b();
                H = D[1];
              }
              var W = Math.sqrt(1 - x * x), Z = Math.abs((2 * l * H * (1 - H) - G) * W), z = l * l, j = c * c, J = l * c * f;
              y = z + j - J;
              var q = Math.sqrt(1 - f * f), K = Z, $ = H;
              if (D = [], h.getQuadraticRoots(y, 3 * (J - z), 2 * z - U * c * q, D), null != D[0] && D[0] < H && D[0] > 0) {
                var ee = new r(h.getCurveAtT(e.getX(), i.getX(), t.getX(), D[0]), h.getCurveAtT(e.getY(), i.getY(), t.getY(), D[0])), te = Math.abs(U - h.ptDist(ee.getX(), ee.getY(), Y.getX(), Y.getY()));
                K < te && (K = te, $ = D[0]);
              }
              if (null != D[1] && D[1] < H && D[1] > 0) {
                var ie = new r(h.getCurveAtT(e.getX(), i.getX(), t.getX(), D[1]), h.getCurveAtT(e.getY(), i.getY(), t.getY(), D[1])), ne = Math.abs(U - h.ptDist(ie.getX(), ie.getY(), Y.getX(), Y.getY()));
                K < ne && (K = ne, $ = D[1]);
              }
              if (D = [], h.getQuadraticRoots(y, -2 * z + j + J, z + J - L * l * q, D), null != D[0] && D[0] < 1 && D[0] > H) {
                var re = new r(h.getCurveAtT(e.getX(), i.getX(), t.getX(), D[0]), h.getCurveAtT(e.getY(), i.getY(), t.getY(), D[0])), oe = Math.abs(L - h.ptDist(re.getX(), re.getY(), X.getX(), X.getY()));
                K < oe && (K = oe, $ = D[0]);
              }
              if (null != D[1] && D[1] < 1 && D[1] > H) {
                var ae = new r(h.getCurveAtT(e.getX(), i.getX(), t.getX(), D[1]), h.getCurveAtT(e.getY(), i.getY(), t.getY(), D[1])), se = Math.abs(L - h.ptDist(ae.getX(), ae.getY(), X.getX(), X.getY()));
                K < se && (K = se, $ = D[1]);
              }
              if (K > n && o < A.MAX_RECURS) {
                var le = new Float64Array(3), he = new Float64Array(3), Ae = new Float64Array(3), ce = new Float64Array(3);
                h.divideQuadraticCurve(e.getX(), t.getX(), i.getX(), $, le, Ae), h.divideQuadraticCurve(e.getY(), t.getY(), i.getY(), $, he, ce), this.addCurveToPolyline(e, new r(le[1], he[1]), new r(le[2], he[2]), n, o), this.addCurveToPolyline(new r(Ae[0], ce[0]), new r(Ae[1], ce[1]), i, n, o);
              } else {
                var pe = new r(e.getX() + G * (u.getX() + g.getX()), e.getY() + G * (u.getY() + g.getY())), ue = M / (N + 1);
                h.segmentSide(e.getX(), e.getY(), pe.getX(), pe.getY(), Y.getX(), Y.getY()) > 0 && (ue = -ue);
                s = new A.PolySegment(e, ue, Y, U);
                this._polyline.insertSegment(s);
                var de = V / (O + 1);
                ue < 0 && (de = -de), s = new A.PolySegment(pe, de, X, L), this._polyline.insertSegment(s);
              }
            }
          }
        }
      }
    }
  }, A.prototype.addCubicCurveToPolyline = function (e, t, i, n, r) {
    var o = new Float64Array(3), a = new Float64Array(3);
    h.getBezierDerivativeEquationCoeffs(e.getX(), e.getY(), n.getX(), n.getY(), t.getX(), t.getY(), i.getX(), i.getY(), o, a);
    for (var s, l, A = [], c = h.getCubicCurveSplits(o, a, A), p = new Float64Array(4), u = new Float64Array(4), d = 0; d < c - 1; ++d) {
      s = A[d], l = A[d + 1], h.getCtrlPts(e.getX(), n.getX(), t.getX(), i.getX(), s, l, p), h.getCtrlPts(e.getY(), n.getY(), t.getY(), i.getY(), s, l, u);
      this._addCubicSegmToPolyline(p, u, r, 0);
    }
  }, A.prototype._isQudraticCurveFlat = function (e, t, i, n) {
    var r = h.getCurveAtT(e.getX(), i.getX(), t.getX(), 0.5), o = h.getCurveAtT(e.getY(), i.getY(), t.getY(), 0.5);
    return h.ptSqrDist(r, o, (e.getX() + i.getX()) / 2, (e.getY() + i.getY()) / 2) <= n * n;
  }, A.prototype._isCubicCurveFlat = function (e, t, i) {
    var n = 3 * e[1] - 2 * e[0] - e[3];
    n *= n;
    var r = 3 * t[1] - 2 * t[0] - t[3];
    r *= r;
    var o = 3 * e[2] - 2 * e[3] - e[0];
    o *= o;
    var a = 3 * t[2] - 2 * t[3] - t[0];
    return n < o && (n = o), r < (a *= a) && (r = a), n + r <= 16 * i * i;
  }, A.prototype._addCubicSegmToPolyline = function (e, t, i, n) {
    ++n;
    var o = e[0], a = t[0], s = e[3], l = t[3];
    if (this._isCubicCurveFlat(e, t, i)) {
      var c = new A.PolySegment(new r(o, a), 0);
      this._polyline.insertSegment(c);
    } else {
      var p, u = !h.isEqualEps(o, e[1]) || !h.isEqualEps(a, t[1]), d = !h.isEqualEps(s, e[2]) || !h.isEqualEps(l, t[2]);
      if (u && d) {
        p = h.getIntersectionPoint(o, a, e[1], t[1], e[2], t[2], s, l, []) || new r(e[1], t[1]);
      } else if (u)
        p = new r(e[1], t[1]);
      else {
        if (!d)
          return void this._polyline.insertSegment(new A.PolySegment(new r(o, a), 0));
        p = new r(e[2], t[2]);
      }
      var g = h.ptDist(o, a, s, l), f = h.ptDist(o, a, p.getX(), p.getY()), m = h.ptDist(s, l, p.getX(), p.getY()), y = g + f + m, _ = (o * m + s * f + p.getX() * g) / y, v = (a * m + l * f + p.getY() * g) / y;
      if (h.isEqualEps(o, _) || h.isEqualEps(a, v) || h.isEqualEps(s, _) || h.isEqualEps(l, v)) {
        c = new A.PolySegment(new r(o, a), 0);
        this._polyline.insertSegment(c);
      } else {
        var b = (a - v) / (o - _), C = (l - v) / (s - _), w = (b * C * (a - l) + C * (o + _) - b * (_ + s)) / 2 / (C - b), E = -1 / b * (w - (o + _) / 2) + (a + v) / 2, B = h.ptDist(o, a, w, E), x = e[1] - o, P = 3 * x, S = t[1] - a, T = 3 * S, I = e[2] - e[1] - x, F = 3 * I, R = 2 * I, D = 3 * (I = t[2] - t[1] - S), k = 2 * I, G = s - e[2] - x - R, Q = l - t[2] - S - k, M = o - w, N = a - E, U = new Float64Array(7);
        U[0] = G * G + Q * Q, U[1] = 2 * (G * F + Q * D), U[2] = F * F + D * D + 2 * (G * P + Q * T), U[3] = 2 * (G * M + F * P + Q * N + D * T), U[4] = P * P + T * T + 2 * (F * M + D * N), U[5] = 2 * (P * M + T * N), U[6] = M * M + N * N;
        var V = new Float64Array(6);
        h.getCoeffPolyDeriv(U, 6, V);
        var O = new Float64Array(5);
        h.getCoeffPolyDeriv(V, 5, O);
        var L = new Float64Array(4);
        h.getCoeffPolyDeriv(O, 4, L);
        var Y = new Float64Array(6);
        h.inversePolyUnaryInterval(V, 5, Y);
        var X, H, W, Z, z = h.estimPositiveRootsDescartes(Y, 5), j = 0, J = [];
        if (z > 0) {
          var q = 0, K = 1;
          X = h.evalPoly(V, 5, q), h.isEqualEps(X, 0) && (q += 0.005, X = h.evalPoly(V, 5, q)), H = h.evalPoly(V, 5, K), h.isEqualEps(H, 0) && (K -= 0.005, H = h.evalPoly(V, 5, K)), z > 1 && (h.getSturmPRS(V, 5, O, J), W = [], Z = [
            X,
            H
          ], z = h.countRootsNSturm(V, 5, O, q, K, J, W, Z));
        }
        if (0 == z);
        else if (1 == z) {
          var $ = h.locateByNewton(q, K, X, H, V, 5, O, L, 0.005);
          null == $ && ($ = (q + K) / 2);
          var ee = h.evalCubic(G, F, P, o, $), te = h.evalCubic(Q, D, T, a, $);
          j = Math.abs(h.ptDist(ee, te, w, E) - B);
        } else {
          var ie = [];
          h.locRootsSturm(V, 5, O, q, K, J, z, W, Z, ie, 0);
          for (var ne = 0; ne < ie.length; ++ne) {
            null == ($ = h.locateByNewton(ie[ne][0], ie[ne][1], ie[ne][2], ie[ne][3], V, 5, O, L, 0.005, J)) && ($ = (ie[ne][0] + ie[ne][1]) / 2), ee = h.evalCubic(G, F, P, o, $), te = h.evalCubic(Q, D, T, a, $);
            var re = Math.abs(h.ptDist(ee, te, w, E) - B);
            re > j && (j = re);
          }
        }
        if (j > i && n < A.MAX_RECURS) {
          var oe = new Float64Array(4), ae = new Float64Array(4), se = new Float64Array(4), le = new Float64Array(4);
          h.getCtrlPtsCasteljau(e[0], e[1], e[2], e[3], 0.5, null, oe, se), h.getCtrlPtsCasteljau(t[0], t[1], t[2], t[3], 0.5, null, ae, le), this._addCubicSegmToPolyline(oe, ae, i, n), this._addCubicSegmToPolyline(se, le, i, n);
        } else {
          var he = g / 2 / B, Ae = he / (Math.sqrt(1 - he * he) + 1);
          h.segmentSide(o, a, s, l, w, E) > 0 && (Ae = -Ae);
          var ce = new A.PolySegment(new r(o, a), Ae, new r(w, E), B);
          this._polyline.insertSegment(ce);
        }
      }
    }
  }, A.prototype.generatePolyLine = function (e, t) {
    for (var require, n = null, o = t, s = o, l = new a(), c = true; c && this._source.readVertex(l);)
      switch (l.command) {
      case a.Command.Move:
        o && this._polyline.count ? (n = l, c = false) : (o = s = l, l = new a());
        break;
      case a.Command.Line:
        s ? (require = new A.PolySegment(new r(s.x, s.y), 0), this._polyline.insertSegment(require), s = l, l = new a()) : (s = l, l = new a());
        break;
      case a.Command.Curve:
        if (s) {
          var p = new r(s.x, s.y);
          if (s = l, l = new a(), this._source.readVertex(l)) {
            this.addCurveToPolyline(p, new r(l.x, l.y), new r(s.x, s.y), e, 0), l = new a();
          }
        } else
          s = l, l = new a();
        break;
      case a.Command.Curve2:
        if (s) {
          p = new r(s.x, s.y);
          var u = new r(l.x, l.y);
          s = l, l = new a();
          var d = new a();
          this._source.readVertex(l) && this._source.readVertex(d) && (this.addCubicCurveToPolyline(p, new r(l.x, l.y), new r(d.x, d.y), u, e), l = new a());
        } else
          s = l, l = new a();
        break;
      case a.Command.Close:
        this._polyline && (s && (require = new A.PolySegment(new r(s.x, s.y), 0), this._polyline.insertSegment(require), s = null), this._polyline.closed = true, require = new A.PolySegment(this._polyline.head.point, 0), this._polyline.insertSegment(require), (n = new a()).command = a.Command.Move, n.x = this._polyline.head.point.getX(), n.y = this._polyline.head.point.getY(), c = false);
        break;
      default:
        throw new Error("Unknown vertex command: " + vertex.command.toString());
      }
    return s && this._polyline.count && (require = new A.PolySegment(new r(s.x, s.y), 0), this._polyline.insertSegment(require), h.isEqualEps(s.x, this._polyline.head.point.getX()) && h.isEqualEps(s.y, this._polyline.head.point.getY()) && (this._polyline.closed = true)), n;
  }, A.prototype.generatePolyOffset = function (e, t, i, n) {
    var r, o = null, a = null;
    i && (o = new A.PolySegmentContainer()), t && (a = new A.PolySegmentContainer());
    for (var l = false, h = 0, c = this._polyline.head; h < this._polyline.count; ++h)
      i && (r = this._offsetPolySegment(c, -e, n)) && o.insertSegment(r), t && (r = this._offsetPolySegment(c, e, n)) && a.insertSegment(r), c = c.next;
    if (i && t && !this._polyline.closed) {
      this._genCap(a.head.point, o.head.point, this._polyline.head.point, this._polyline.head.next ? this._polyline.head.next.point : null, true, e, o, this._cap, n), this._genCap(a.end.point2, o.end.point2, this._polyline.end.point, this._polyline.end.previous ? this._polyline.end.previous.point : null, false, e, a, this._cap, n), this.makeInset = false, t = false, l = true;
      var p = new A.PolySegmentContainer();
      for (h = 0, c = a.end; h < a.count; ++h) {
        var u = new A.PolyOffsetSegment(0 == h ? this._polyline.head.point : c.next.basepoint, c.point2, c.point, this._cap === s.LineCap.Round && 0 === h ? c.bulge : -c.bulge, c.center, c.radius, c.isCap);
        p.insertSegment(u), c = c.previous;
      }
      o.appendContainer(p);
    }
    var d = new A.PolySegmentContainer(), g = new A.PolySegmentContainer();
    i && this._trimOffsetPoly(o, -e, d), t && this._trimOffsetPoly(a, e, g);
    var f = [], m = [];
    t && i && this._calcIntersectionPoints(d, g, f, m), i && this._calcSelfIntersectionPoints(d, f, l), t && this._calcSelfIntersectionPoints(g, m), f.length > 0 && this._sortInsertsectionPoints(f), m.length > 0 && this._sortInsertsectionPoints(m);
    var y = [], _ = [], v = [], b = [];
    if (i)
      if (f.length > 0) {
        v = this._splitForClipping(d, f);
        for (h = 0; h < v.length; ++h) {
          var C = [], w = [];
          if (this._calcIntersectionPoints(v[h], this._polyline, C, w), 0 == C.length)
            y.push(v[h]);
          else if (!this._polyline.closed) {
            for (var E = false, B = 0; B < C.length; ++B)
              if (C[B].segm.isCap) {
                E = true;
                break;
              }
            for (B = 0; B < w.length && !E; ++B)
              0 != w[B].segmIdx && w[B].segmIdx != this._polyline.count - 1 || (E = true);
            E && this._excludeCircleInside(v[h], C, w, e, y);
          }
        }
      } else
        y[0] = d;
    if (t)
      if (m.length > 0) {
        b = this._splitForClipping(g, m);
        for (h = 0; h < b.length; ++h) {
          C = [], w = [];
          if (this._calcIntersectionPoints(b[h], this._polyline, C, w), 0 == C.length)
            _.push(b[h]);
          else if (!this._polyline.closed) {
            for (E = false, B = 0; B < w.count; ++B)
              if (0 == w[B].segmIdx || w[B].segmIdx == this._polyline.count - 1) {
                E = true;
                break;
              }
            E && this._excludeCircleInside(b[h], C, w, e, _);
          }
        }
      } else
        _[0] = g;
    t && i || this._polyline.closed || l ? (y && y.length > 1 ? this._gcppFilter(y, this._polyline, e, 3 * n, this._polyoutset) : this._polyoutset = y, _ && _.length > 1 ? this._gcppFilter(_, this._polyline, e, 3 * n, this._polyinset) : this._polyinset = _) : (this._gcppClipping(y, this._polyline, e, this._polyoutset), this._gcppClipping(_, this._polyline, e, this._polyinset));
  }, A.prototype.generateOffset = function (e, t, i) {
    var n = [];
    t && e && !this._polyline.closed ? (this._genCurves(this._polyoutset, n, i), this._genCurves(this._polyinset, n, i)) : (t && this._genCurves(this._polyoutset, n, i), e && this._genCurves(this._polyinset, n, i)), this._pieces = this._mergePieces(n);
  }, A.prototype._mergePieces = function (e) {
    for (var module = []; e.length > 0;) {
      var require = e[0];
      e.splice(0, 1);
      for (var n = require.stPt.getX() != require.endPt.getX() || require.stPt.getY() != require.endPt.getY(); n;) {
        n = false;
        for (var r = null, o = e.length - 1; o >= 0; --o)
          (r = e[o]).stPt.getX() == require.endPt.getX() && r.stPt.getY() == require.endPt.getY() ? (require.endPt = r.endPt, require.vrt.push.apply(require.vrt, r.vrt), n = true, e.splice(o, 1)) : require.stPt.getX() == r.endPt.getX() && require.stPt.getY() == r.endPt.getY() && (r.endPt = require.endPt, r.vrt.push.apply(r.vrt, require.vrt), require = r, n = true, e.splice(o, 1));
      }
      var s = new l();
      s.addVertex(a.Command.Move, require.stPt.getX(), require.stPt.getY());
      for (o = 0; o < require.vrt.length; ++o) {
        var h = require.vrt[o];
        s.addVertex(h.c, h.x, h.y);
      }
      module.push(s);
    }
    return module;
  }, A.prototype._offsetPolySegment = function (e, t, i) {
    var n = null, o = Math.abs(t), a = e.point.getX(), s = e.point.getY();
    if (e.bulge) {
      if (e.radius) {
        var l = e.radius, c = null;
        if (t * e.bulge > 0 ? c = (l += o) / e.radius : h.isEqualEps(e.radius, o, i) || (e.radius > o ? c = (l -= o) / e.radius : (l = o - e.radius, c = o / e.radius)), null != c) {
          var p = e.center.getX(), u = e.center.getY();
          e.next ? (d = e.next.point.getX(), g = e.next.point.getY()) : (d = this._polyline.head.point.getX(), g = this._polyline.head.point.getY());
          y = new r(p + c * (a - p), u + c * (s - u)), _ = new r(p + c * (d - p), u + c * (g - u));
          n = new A.PolyOffsetSegment(e.point, y, _, e.bulge, e.center, l);
        }
      }
    } else if (e.next || this._polyline.closed) {
      var d, g;
      e.next ? (d = e.next.point.getX(), g = e.next.point.getY()) : (d = this._polyline.head.point.getX(), g = this._polyline.head.point.getY());
      var f = h.ptDist(a, s, d, g);
      if (!h.isEqualEps(f, 0)) {
        var m = new r(-t * (g - s) / f, -t * (a - d) / f), y = new r(a + m.getX(), s + m.getY()), _ = new r(d + m.getX(), g + m.getY());
        n = new A.PolyOffsetSegment(e.point, y, _, 0);
      }
    }
    return n;
  }, A.prototype._insersectOffsetSegments = function (e, t, i) {
    if (0 == e.bulge && 0 == t.bulge) {
      var n = [
          null,
          null
        ], o = h.getIntersectionPoint(e.point.getX(), e.point.getY(), e.point2.getX(), e.point2.getY(), t.point.getX(), t.point.getY(), t.point2.getX(), t.point2.getY(), n);
      i.point = o, o && (this._fillLineIntType(n[0], i.intTypes[0]), this._fillLineIntType(n[1], i.intTypes[1]));
    } else if (0 != e.bulge && 0 == t.bulge || 0 == e.bulge && 0 != t.bulge) {
      n = [
        null,
        null
      ];
      var a = null, s = null, l = null;
      if (0 == e.bulge) {
        var A = e.point.getX(), c = e.point.getY(), p = e.point2.getX() - e.point.getX(), u = e.point2.getY() - e.point.getY();
        if (h.circleLineIntersection(A, c, p, u, t.center.getX(), t.center.getY(), t.radius, n), null != n[0] && (a = A + p * n[0], s = c + u * n[0], l = n[0]), null != n[0] && null != n[1]) {
          var d = A + p * n[1], g = c + u * n[1], f = h.ptSqrDist(a, s, t.basepoint.getX(), t.basepoint.getY());
          h.ptSqrDist(d, g, t.basepoint.getX(), t.basepoint.getY()) < f && (a = d, s = g, l = n[1]);
        }
        null != l && (i.point = new r(a, s), this._fillLineIntType(l, i.intTypes[0]), this._fillArcIntType(t, a, s, i.intTypes[1]));
      } else {
        A = t.point.getX(), c = t.point.getY(), p = t.point2.getX() - t.point.getX(), u = t.point2.getY() - t.point.getY();
        if (h.circleLineIntersection(A, c, p, u, e.center.getX(), e.center.getY(), e.radius, n), null != n[0] && (a = A + p * n[0], s = c + u * n[0], l = n[0]), null != n[0] && null != n[1]) {
          d = A + p * n[1], g = c + u * n[1], f = h.ptSqrDist(a, s, t.basepoint.getX(), t.basepoint.getY());
          h.ptSqrDist(d, g, t.basepoint.getX(), t.basepoint.getY()) < f && (a = d, s = g, l = n[1]);
        }
        null != l && (i.point = new r(a, s), this._fillLineIntType(l, i.intTypes[1]), this._fillArcIntType(e, a, s, i.intTypes[0]));
      }
    } else {
      n = [
        null,
        null
      ];
      h.circleCircleIntersection(e.center.getX(), e.center.getY(), e.radius, t.center.getX(), t.center.getY(), t.radius, n);
      var m = null;
      if (null != n[0] && (m = 0), null != n[0] && null != n[1]) {
        f = h.ptSqrDist(n[0].getX(), n[0].getY(), t.basepoint.getX(), t.basepoint.getY());
        h.ptSqrDist(n[1].getX(), n[1].getY(), t.basepoint.getX(), t.basepoint.getY()) < f && (m = 1);
      }
      null !== m && (i.point = n[m], this._fillArcIntType(e, n[m].getX(), n[m].getY(), i.intTypes[0]), this._fillArcIntType(t, n[m].getX(), n[m].getY(), i.intTypes[1]));
    }
  }, A.prototype._fillArcIntType = function (e, t, i, n) {
    var r = e.point.getX(), o = e.point.getY(), a = e.point2.getX(), s = e.point2.getY(), l = e.center.getX(), A = e.center.getY();
    if (h.segmentSide(r, o, a, s, t, i) == h.segmentSide(r, o, a, s, l, A)) {
      var c = (r + a) / 2, p = (o + s) / 2, u = e.radius / h.ptDist(c, p, l, A), d = l + (l - c) * u, g = A + (A - p) * u;
      h.segmentSide(r, o, d, g, t, i) == h.segmentSide(r, o, d, g, l, A) ? (n.FIP = true, n.PFIP = true) : n.FIP = true;
    } else
      n.TIP = true;
  }, A.prototype._fillLineIntType = function (e, t) {
    e < 0 ? t.FIP = true : e > 1 ? (t.FIP = true, t.PFIP = true) : t.TIP = true;
  }, A.prototype._trimOffsetPoly = function (e, t, i) {
    var n = 0.000001, r = null, o = e.head;
    if (o) {
      i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
      for (var a = new A.IntersectionResult(), s = 0; s < e.count - 1; ++s)
        if (r = new A.PolyOffsetSegment(o.basepoint, i.end.point, o.point2, i.end.bulge, o.center, o.radius, o.isCap), o = o.next, h.isEqualEps(r.point2.getX(), o.point.getX(), n) && h.isEqualEps(r.point2.getY(), o.point.getY(), n))
          i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
        else if (a.clear(), this._insersectOffsetSegments(r, o, a), 0 == r.bulge && 0 == o.bulge)
          a.point ? a.intTypes[0].TIP && a.intTypes[1].TIP || a.intTypes[0].FIP && a.intTypes[1].FIP && a.intTypes[0].PFIP ? i.insertSegment(new A.PolySegment(a.point, 0)).isCap = o.isCap : (i.insertSegment(new A.PolySegment(r.point2, 0)).isCap = r.isCap, i.insertSegment(new A.PolySegment(o.point, 0)).isCap = o.isCap) : i.insertSegment(new A.PolySegment(r.point2, 0)).isCap = r.isCap;
        else if (0 == r.bulge && 0 != o.bulge)
          if (a.point)
            if (a.intTypes[0].TIP && a.intTypes[1].TIP || a.intTypes[0].TIP && a.intTypes[1].FIP && !a.intTypes[1].PFIP || a.intTypes[0].PFIP && a.intTypes[1].TIP) {
              a.point.getX(), o.point2.getX(), a.point.getY(), o.point2.getY();
              var l = this._calculateBulge(a.point.getX(), a.point.getY(), o.point2.getX(), o.point2.getY(), o.center.getX(), o.center.getY(), o.bulge);
              i.insertSegment(new A.PolySegment(a.point, l, o.center, o.radius, o.isCap));
            } else if (a.intTypes[0].PFIP && a.intTypes[1].FIP) {
              var c = this._constructJoinArc(r, o, true);
              i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
            } else
              i.insertSegment(new A.PolySegment(r.point2, 0)).isCap = r.isCap, i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
          else {
            c = this._constructJoinArc(r, o, true);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
          }
        else if (0 != r.bulge && 0 == o.bulge)
          if (a.point)
            if (a.intTypes[0].TIP && a.intTypes[1].TIP) {
              var p = this._calculateBulge(r.point.getX(), r.point.getY(), a.point.getX(), a.point.getY(), r.center.getX(), r.center.getY(), r.bulge);
              i.end.bulge = p, i.insertSegment(new A.PolySegment(a.point, 0));
            } else if (a.intTypes[0].FIP && a.intTypes[1].FIP && !a.intTypes[1].PFIP) {
              c = this._constructJoinArc(r, o, true);
              i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0)).isCap = o.isCap;
            } else
              i.insertSegment(new A.PolySegment(r.point2, 0)).isCap = r.isCap, i.insertSegment(new A.PolySegment(o.point, 0)).isCap = o.isCap;
          else {
            c = this._constructJoinArc(r, o, true);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0)).isCap = o.isCap;
          }
        else if (a.point)
          if (a.intTypes[0].FIP && !a.intTypes[0].PFIP || a.intTypes[1].PFIP) {
            c = this._constructJoinArc(r, o, false);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
          } else {
            p = this._calculateBulge(r.point.getX(), r.point.getY(), a.point.getX(), a.point.getY(), r.center.getX(), r.center.getY(), r.bulge);
            i.end.bulge = p, p = this._calculateBulge(a.point.getX(), a.point.getY(), o.point2.getX(), o.point2.getY(), o.center.getX(), o.center.getY(), o.bulge), i.insertSegment(new A.PolySegment(a.point, p, o.center, o.radius, o.isCap));
          }
        else {
          c = this._constructJoinArc(r, o, true);
          i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, o.bulge, o.center, o.radius, o.isCap));
        }
      if (this._polyline.closed)
        if (r = new A.PolyOffsetSegment(o.basepoint, i.end.point, o.point2, i.end.bulge, o.center, o.radius), o = e.head, h.isEqualEps(r.point2.getX(), o.point.getX(), n) && h.isEqualEps(r.point2.getY(), o.point.getY(), n))
          i.insertSegment(new A.PolySegment(o.point, 0));
        else if (a.clear(), this._insersectOffsetSegments(r, o, a), 0 == r.bulge && 0 == o.bulge)
          a.point ? a.intTypes[0].TIP && a.intTypes[1].TIP || a.intTypes[0].FIP && a.intTypes[1].FIP && a.intTypes[0].PFIP ? (i.insertSegment(new A.PolySegment(a.point, 0)), i.head.point = a.point) : (i.insertSegment(new A.PolySegment(r.point2, 0)), i.insertSegment(new A.PolySegment(o.point, 0))) : i.insertSegment(new A.PolySegment(r.point2, 0));
        else if (0 == r.bulge && 0 != o.bulge)
          if (a.point)
            if (a.intTypes[0].TIP && a.intTypes[1].TIP || a.intTypes[0].TIP && a.intTypes[1].FIP && !a.intTypes[1].PFIP || a.intTypes[0].PFIP && a.intTypes[1].TIP) {
              l = this._calculateBulge(a.point.getX(), a.point.getY(), o.point2.getX(), o.point2.getY(), o.center.getX(), o.center.getY(), o.bulge);
              i.insertSegment(new A.PolySegment(a.point, 0)), i.head.point = a.point, i.head.bulge = l;
            } else if (a.intTypes[0].PFIP && a.intTypes[1].FIP) {
              c = this._constructJoinArc(r, o, true);
              i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
            } else
              i.insertSegment(new A.PolySegment(r.point2, 0)), i.insertSegment(new A.PolySegment(o.point, 0));
          else {
            c = this._constructJoinArc(r, o, true);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
          }
        else if (0 != r.bulge && 0 == o.bulge)
          if (a.point)
            if (a.intTypes[0].TIP && a.intTypes[1].TIP) {
              p = this._calculateBulge(r.point.getX(), r.point.getY(), a.point.getX(), a.point.getY(), r.center.getX(), r.center.getY(), r.bulge);
              i.end.bulge = p, i.insertSegment(new A.PolySegment(a.point, 0)), i.head.point = a.point;
            } else if (a.intTypes[0].FIP && a.intTypes[1].FIP && !a.intTypes[1].PFIP) {
              c = this._constructJoinArc(r, o, true);
              i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
            } else
              i.insertSegment(new A.PolySegment(r.point2, 0)), i.insertSegment(new A.PolySegment(o.point, 0));
          else {
            c = this._constructJoinArc(r, o, true);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
          }
        else if (a.point)
          if (a.intTypes[0].FIP && !a.intTypes[0].PFIP || a.intTypes[1].PFIP) {
            c = this._constructJoinArc(r, o, false);
            i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
          } else {
            p = this._calculateBulge(r.point.getX(), r.point.getY(), a.point.getX(), a.point.getY(), r.center.getX(), r.center.getY(), r.bulge);
            i.end.bulge = p, i.insertSegment(new A.PolySegment(a.point, 0)), p = this._calculateBulge(a.point.getX(), a.point.getY(), o.point2.getX(), o.point2.getY(), o.center.getX(), o.center.getY(), o.bulge), i.head.point = a.point, i.head.bulge = p;
          }
        else {
          c = this._constructJoinArc(r, o, true);
          i.insertSegment(c), i.insertSegment(new A.PolySegment(o.point, 0));
        }
      else
        i.insertSegment(new A.PolySegment(o.point2, 0)).isCap = o.isCap;
    }
  }, A.prototype._constructJoinArc = function (e, t, i) {
    var n = 0;
    if (e.bulge) {
      var r = e.bulge > 0 ? 1 : -1, o = (e.point2.getY() - e.center.getY()) * r, a = (e.center.getX() - e.point2.getX()) * r;
      n = -h.segmentSide(e.point2.getX(), e.point2.getY(), e.point2.getX() + o, e.point2.getY() + a, t.point.getX(), t.point.getY());
    } else
      n = -h.segmentSide(e.point.getX(), e.point.getY(), e.point2.getX(), e.point2.getY(), t.point.getX(), t.point.getY());
    i || (n = -n);
    var s = 0;
    return n && (s = this._calculateBulge(e.point2.getX(), e.point2.getY(), t.point.getX(), t.point.getY(), t.basepoint.getX(), t.basepoint.getY(), n)), s ? new A.PolySegment(e.point2, s, t.basepoint, h.ptDist(e.point2.getX(), e.point2.getY(), t.basepoint.getX(), t.basepoint.getY())) : new A.PolySegment(e.point2, 0);
  }, A.prototype._calculateBulge = function (e, t, i, n, r, o, a) {
    var s = h.ptSqrDist(e, t, r, o), l = h.ptSqrDist(i, n, r, o), A = 0;
    if (h.isEqualEps(s, l, 1e-8)) {
      var c = h.ptSqrDist((e + i) / 2, (t + n) / 2, r, o);
      if (h.isEqualEps(c, 0, 1e-8))
        A = 1;
      else {
        var p = Math.sqrt(c / s);
        A = Math.sqrt((1 - p) / (1 + p));
      }
      var u = Math.sqrt(s);
      A = (t - o) / u * ((i - r) / u) - (e - r) / u * ((n - o) / u) < 0 ? -A : A, a && (a < 0 && A > 0 || a > 0 && A < 0) && (A = -1 / A);
    }
    return A;
  }, A.prototype._calcIntersectionPoints = function (e, t, i, n) {
    for (var r, o = e.head, a = 0; a < e.count - 1; ++a) {
      r = t.head;
      for (var s = 0; s < t.count - 1; ++s)
        this._calcSegmIntersectionPoints(o, r, a, s, i, n), r = r.next;
      o = o.next;
    }
  }, A.prototype._calcSelfIntersectionPoints = function (e, t, i) {
    for (var n, r = e.head, o = 0; o < e.count - 2; ++o) {
      n = r.next;
      for (var a = o + 1; a < e.count - 1; ++a)
        0 != o || a != e.count - 2 || !i && !this._polyline.closed ? this._calcSegmIntersectionPoints(r, n, o, a, t, t, a == o + 1) : this._calcSegmIntersectionPoints(n, r, a, o, t, t, true), n = n.next;
      r = r.next;
    }
  }, A.prototype._calcSegmIntersectionPoints = function (e, t, i, n, r, o, a) {
    if (e.bulge || t.bulge)
      if (!e.bulge && t.bulge) {
        y = [
          null,
          null
        ];
        var s = e.next.point.getX() - e.point.getX(), l = e.next.point.getY() - e.point.getY();
        if (h.circleLineIntersection(e.point.getX(), e.point.getY(), s, l, t.center.getX(), t.center.getY(), t.radius, y), null != y[0] && y[0] >= 0 && y[0] <= 1 && (!a || !h.isEqualEps(y[0], 1))) {
          var c = e.point.getX() + s * y[0], p = e.point.getY() + l * y[0];
          ((u = this._calculateBulge(t.point.getX(), t.point.getY(), c, p, t.center.getX(), t.center.getY(), t.bulge)) < 0 && u >= t.bulge || u > 0 && u <= t.bulge) && (r.push(new A.IntersectionPt(c, p, y[0], e, i)), o.push(new A.IntersectionPt(c, p, u, t, n)));
        }
        if (null != y[1] && y[1] >= 0 && y[1] <= 1 && (!a || !h.isEqualEps(y[1], 1))) {
          c = e.point.getX() + s * y[1], p = e.point.getY() + l * y[1];
          ((u = this._calculateBulge(t.point.getX(), t.point.getY(), c, p, t.center.getX(), t.center.getY(), t.bulge)) < 0 && u >= t.bulge || u > 0 && u <= t.bulge) && (r.push(new A.IntersectionPt(c, p, y[1], e, i)), o.push(new A.IntersectionPt(c, p, u, t, n)));
        }
      } else if (e.bulge && !t.bulge) {
        y = [
          null,
          null
        ], s = t.next.point.getX() - t.point.getX(), l = t.next.point.getY() - t.point.getY();
        if (h.circleLineIntersection(t.point.getX(), t.point.getY(), s, l, e.center.getX(), e.center.getY(), e.radius, y), null != y[0] && y[0] >= 0 && y[0] <= 1 && (!a || !h.isEqualEps(y[0], 0))) {
          c = t.point.getX() + s * y[0], p = t.point.getY() + l * y[0];
          ((u = this._calculateBulge(e.point.getX(), e.point.getY(), c, p, e.center.getX(), e.center.getY(), e.bulge)) < 0 && u >= e.bulge || u > 0 && u <= e.bulge) && (r.push(new A.IntersectionPt(c, p, u, e, i)), o.push(new A.IntersectionPt(c, p, y[0], t, n)));
        }
        if (null != y[1] && y[1] >= 0 && y[1] <= 1 && (!a || !h.isEqualEps(y[1], 0))) {
          var u;
          c = t.point.getX() + s * y[1], p = t.point.getY() + l * y[1];
          ((u = this._calculateBulge(e.point.getX(), e.point.getY(), c, p, e.center.getX(), e.center.getY(), e.bulge)) < 0 && u >= e.bulge || u > 0 && u <= e.bulge) && (r.push(new A.IntersectionPt(c, p, u, e, i)), o.push(new A.IntersectionPt(c, p, y[1], t, n)));
        }
      } else {
        y = [
          null,
          null
        ];
        if (h.circleCircleIntersection(e.center.getX(), e.center.getY(), e.radius, t.center.getX(), t.center.getY(), t.radius, y), y[0] && (!a || !h.isEqualEps(y[0].getX(), t.point.getX()) && !h.isEqualEps(y[0].getY(), t.point.getY()))) {
          var d = this._calculateBulge(e.point.getX(), e.point.getY(), y[0].getX(), y[0].getY(), e.center.getX(), e.center.getY(), e.bulge);
          if (d < 0 && d >= e.bulge || d > 0 && d <= e.bulge) {
            var g = this._calculateBulge(t.point.getX(), t.point.getY(), y[0].getX(), y[0].getY(), t.center.getX(), t.center.getY(), t.bulge);
            (g < 0 && g >= t.bulge || g > 0 && g <= t.bulge) && (r.push(new A.IntersectionPt(y[0].getX(), y[0].getY(), d, e, i)), o.push(new A.IntersectionPt(y[0].getX(), y[0].getY(), g, t, n)));
          }
        }
        if (y[1] && (!a || !h.isEqualEps(y[1].getX(), t.point.getX()) && !h.isEqualEps(y[1].getY(), t.point.getY()))) {
          var f = this._calculateBulge(e.point.getX(), e.point.getY(), y[1].getX(), y[1].getY(), e.center.getX(), e.center.getY(), e.bulge);
          if (f < 0 && f >= e.bulge || f > 0 && f <= e.bulge) {
            var m = this._calculateBulge(t.point.getX(), t.point.getY(), y[1].getX(), y[1].getY(), t.center.getX(), t.center.getY(), t.bulge);
            (m < 0 && m >= t.bulge || m > 0 && m <= t.bulge) && (r.push(new A.IntersectionPt(y[1].getX(), y[1].getY(), f, e, i)), o.push(new A.IntersectionPt(y[1].getX(), y[1].getY(), m, t, n)));
          }
        }
      }
    else if (!a) {
      var y = [
          null,
          null
        ], _ = h.getIntersectionPoint(e.point.getX(), e.point.getY(), e.next.point.getX(), e.next.point.getY(), t.point.getX(), t.point.getY(), t.next.point.getX(), t.next.point.getY(), y);
      _ && 0 <= y[0] && y[0] <= 1 && 0 <= y[1] && y[1] <= 1 && (r.push(new A.IntersectionPt(_.getX(), _.getY(), y[0], e, i)), o.push(new A.IntersectionPt(_.getX(), _.getY(), y[1], t, n)));
    }
  }, A.prototype._sortInsertsectionPoints = function (e) {
    e.sort(function (e, t) {
      return e.segmIdx != t.segmIdx ? e.segmIdx - t.segmIdx : e.slope > 0 ? e.slope - t.slope : t.slope - e.slope;
    });
  }, A.prototype._splitForClipping = function (e, t) {
    for (var require, n, o = 0.0001, a = 0, s = e.head, l = s, c = [], p = 0; p < t.length; ++p) {
      c[p] = new A.PolySegmentContainer();
      for (var u = a; u < t[p].segmIdx; ++u)
        c[p].insertSegment(new A.PolySegment(s.point, s.bulge, s.center, s.radius, s.isCap)), l = s = l.next;
      s.bulge ? h.isEqualEps(t[p].x, s.point.getX(), o) && h.isEqualEps(t[p].y, s.point.getY(), o) ? c[p].insertSegment(new A.PolySegment(s.point, 0)).isCap = s.isCap : (s == l ? c[p].insertSegment(new A.PolySegment(s.point, t[p].slope, s.center, s.radius, s.isCap)) : (require = (t[p].slope - t[p - 1].slope) / (1 + t[p].slope * t[p - 1].slope), c[p].insertSegment(new A.PolySegment(s.point, require, s.center, s.radius, s.isCap))), c[p].insertSegment(new A.PolySegment(new r(t[p].x, t[p].y), 0)).isCap = n, require = (l.bulge - t[p].slope) / (1 + l.bulge * t[p].slope), s = new A.PolySegment(new r(t[p].x, t[p].y), require, s.center, s.radius, s.isCap)) : (n = s.isCap, c[p].insertSegment(new A.PolySegment(s.point, 0)).isCap = n, h.isEqualEps(t[p].x, s.point.getX(), o) && h.isEqualEps(t[p].y, s.point.getY(), o) || (s = new A.PolySegment(new r(t[p].x, t[p].y), 0), c[p].insertSegment(s).isCap = n)), a = u, l.next && h.isEqualEps(t[p].x, l.next.point.getX(), o) && h.isEqualEps(t[p].y, l.next.point.getY(), o) && (++a, l = s = l.next);
    }
    var d = this._polyline.closed;
    if (a != e.count - 1) {
      c[p] = new A.PolySegmentContainer();
      for (u = a; u < e.count; ++u)
        c[p].insertSegment(new A.PolySegment(s.point, s.bulge, s.center, s.radius, s.isCap)), l = s = l.next;
    }
    if (1 == c[0].count && (c = c.slice(1)), d) {
      var g = c.length, f = c[g - 1], m = f.end.point, y = c[0].head.point;
      if (g > 1 && h.isEqualEps(m.getX(), y.getX(), o) && h.isEqualEps(m.getY(), y.getY(), o)) {
        f.deleteSegment(f.end), s = c[0].head;
        for (p = 0; p < c[0].count; ++p)
          f.insertSegment(new A.PolySegment(s.point, s.bulge, s.center, s.radius, s.isCap)), s = s.next;
        c = c.slice(1);
      } else
        c[0].closed = true;
    }
    var _ = [];
    for (p = 0; p < c.length; ++p)
      1 != c[p].count && 0 != c[p].count && _.push(c[p]);
    return _;
  }, A.prototype._excludeCircleInside = function (e, t, i, n, o) {
    for (var a, s = 0, l = new A.PolySegment(e.head.point, e.head.bulge, e.head.center, e.head.radius, e.head.isCap), c = e.head, p = null, u = 0; u < t.length; ++u) {
      for (p = new A.PolySegmentContainer(), a = s; a < t[u].segmIdx - 1; ++a)
        p.insertSegment(l), c = c.next, l = new A.PolySegment(c.point, c.bulge, c.center, c.radius, c.isCap);
      if (l.bulge) {
        m = [
          null,
          null
        ];
        if (h.circleCircleIntersection(c.center.getX(), c.center.getY(), c.radius, i[u].x, i[u].y, n, m), null != m[0]) {
          var d = this._calculateBulge(l.point.getX(), l.point.getY(), m[0].getX(), m[0].getY(), c.center.getX(), c.center.getY(), l.bulge);
          d < 0 && d > l.bulge || d > 0 && d < l.bulge ? (p.insertSegment(new A.PolySegment(l.point, d, c.center, c.radius, c.isCap)), p.insertSegment(new A.PolySegment(m[0], 0)).isCap = l.isCap, o.push(p)) : p.count && (p.insertSegment(new A.PolySegment(l.point, 0)).isCap = l.isCap, o.push(p));
        }
        if (null == m[1] || l.isCap)
          p.end && ((l = new A.PolySegment(p.end.point, 0)).isCap = p.end.isCap);
        else {
          var g = this._calculateBulge(l.point.getX(), l.point.getY(), m[1].getX(), m[1].getY(), c.center.getX(), c.center.getY(), l.bulge);
          if (g < 0 && g > l.bulge && g < d || g > 0 && g < l.bulge && g > d) {
            var f = (l.bulge - g) / (1 + l.bulge * g);
            l = new A.PolySegment(new r(v, b), f, c.center, c.radius, c.isCap);
          } else
            p.end && ((l = new A.PolySegment(p.end.point, 0)).isCap = p.end.isCap);
        }
      } else {
        var m = [
            null,
            null
          ], y = c.next.point.getX() - l.point.getX(), _ = c.next.point.getY() - l.point.getY();
        if (h.circleLineIntersection(l.point.getX(), l.point.getY(), y, _, i[u].x, i[u].y, n, m), null != m[0])
          if (m[0] <= 0)
            p.count && (p.insertSegment(new A.PolySegment(l.point, 0)).isCap = l.isCap, o.push(p));
          else if (m[0] > 0 && m[0] < 1 && !l.isCap) {
            var v = l.point.getX() + y * m[0], b = l.point.getY() + _ * m[0];
            p.insertSegment(new A.PolySegment(l.point, 0)).isCap = l.isCap, p.insertSegment(new A.PolySegment(new r(v, b), 0)).isCap = l.isCap, o.push(p);
          } else
            p.insertSegment(new A.PolySegment(l.point, 0)).isCap = l.isCap, p.insertSegment(new A.PolySegment(c.next.point, 0)).isCap = c.next.isCap, o.push(p);
        var C = l.isCap;
        null != m[1] && m[1] > m[0] && m[1] < 1 && !l.isCap ? (v = l.point.getX() + y * m[1], b = l.point.getY() + _ * m[1], (l = new A.PolySegment(new r(v, b), 0)).isCap = C) : (p.end && ((l = new A.PolySegment(p.end.point, 0)).isCap = C), (m[0] >= 1 || m[0] > 0 && C) && (c = c.next));
      }
      s = t[u].segmIdx;
    }
    for (p = null, a = s; a < e.count; ++a)
      l && (p || (p = new A.PolySegmentContainer(), o.push(p)), p.insertSegment(l), l = (c = c.next) ? new A.PolySegment(c.point, c.bulge, c.center, c.radius, c.isCap) : null);
  }, A.prototype._gcppClipping = function (e, t, i, n) {
    for (var r, o = 0; o < e.length; ++o) {
      r = e[o];
      for (var a = t.head, s = 0; s < t.count - 1; ++s) {
        for (var l = r.head, h = 0; h < r.count - 1; ++h)
          l = l.next;
        a = a.next;
      }
      n.push(r);
    }
  }, A.prototype._gcppFilter = function (e, t, i, n, r) {
    for (var o, a, s = (i - n) * (i - n), l = i + n, h = l * l, A = 0; A < e.length; ++A) {
      o = e[A];
      var c = t.head;
      a = h;
      for (var p = 0; p < t.count - 1 && a >= s; ++p) {
        for (var u = o.head, d = 0; d < o.count - 1 && a >= s; ++d)
          u.isCap || (a = this._getPlSegmSqrDist(c, c.next.point, u, u.next.point, l)), u = u.next;
        c = c.next;
      }
      a >= s && r.push(o);
    }
  }, A.prototype._getPlSegmSqrDist = function (e, t, i, n, r) {
    return e.bulge || i.bulge ? i.bulge ? e.bulge ? this._getArcToArcSqrDist(e, t, i, n, r) : this._getSegmToArcSqrDist(i.point, i.bulge, i.center, i.radius, n, e.point, t, r * r) : this._getSegmToArcSqrDist(e.point, e.bulge, e.center, e.radius, t, i.point, n, r * r) : h.getSegmToSegmSqrDist(e.point, t, i.point, n);
  }, A.prototype._getSegmToArcSqrDist = function (e, t, i, n, r, o, a, s) {
    if (h.isEqualEps(o.getX(), a.getX()) && h.isEqualEps(o.getY(), a.getY()))
      return this._getPtToArcSqrDist(e, t, i, n, r, o);
    var l, A = s, c = [
        null,
        null
      ], p = a.getX() - o.getX(), u = a.getY() - o.getY();
    if (h.circleLineIntersection(o.getX(), o.getY(), p, u, i.getX(), i.getY(), n, c), null != c[0] && null == c[1]) {
      var d = c[0] * p + o.getX(), g = c[0] * p + o.getY(), f = this._calculateBulge(e.getX(), e.getY(), d, g, i.getX(), i.getY(), t), m = d - o.getX(), y = g - o.getY();
      (m < 0 && p <= m || m >= 0 && p >= m) && (y < 0 && u <= y || y >= 0 && u >= y) ? f < 0 && t <= f || f >= 0 && t >= f ? A = 0 : (A = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), e.getX(), e.getY()), (l = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), r.getX(), r.getY())) < A && (A = l)) : (A = this._getPtToArcSqrDist(e, t, i, n, r, o), (l = this._getPtToArcSqrDist(e, t, i, n, r, a)) < A && (A = l));
    } else {
      if (null == c[0]) {
        var _ = [null];
        if (l = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), i.getX(), i.getY(), _), _[0] > 0 && _ < 1) {
          var v = o.getX() + _[0] * (a.getX() - o.getX()), b = o.getY() + _[0] * (a.getY() - o.getY()), C = n / Math.sqrt(l), w = i.getX() + C * (v - i.getX()), E = i.getY() + C * (b - i.getY()), B = this._calculateBulge(e.getX(), e.getY(), w, E, i.getX(), i.getY(), t);
          (B < 0 && t <= B || B >= 0 && t >= B) && (A = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), w, E));
        }
      }
      (l = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), e.getX(), e.getY())) < A && (A = l), A > 0 && ((l = h.sqrSegmentDist(o.getX(), o.getY(), a.getX(), a.getY(), r.getX(), r.getY())) < A && (A = l), A > 0 && ((l = this._getPtToArcSqrDist(e, t, i, n, r, o)) < A && (A = l), A > 0 && (l = this._getPtToArcSqrDist(e, t, i, n, r, a)) < A && (A = l)));
    }
    return A;
  }, A.prototype._getPtToArcSqrDist = function (e, t, i, n, r, o) {
    var a, s = h.ptSqrDist(o.getX(), o.getY(), i.getX(), i.getY());
    if (h.isEqualEps(s, 0))
      a = n * n;
    else {
      var l = n / Math.sqrt(s), A = i.getX() + l * (o.getX() - i.getX()), c = i.getY() + l * (o.getY() - i.getY()), p = this._calculateBulge(e.getX(), e.getY(), A, c, i.getX(), i.getY(), t);
      p < 0 && t <= p || p >= 0 && t >= p ? a = h.ptSqrDist(o.getX(), o.getY(), A, c) : (a = h.ptSqrDist(o.getX(), o.getY(), e.getX(), e.getY()), (s = h.ptSqrDist(o.getX(), o.getY(), r.getX(), r.getY())) < a && (a = s));
    }
    return a;
  }, A.prototype._getArcToArcSqrDist = function (e, t, i, n, o) {
    var a = e.center.getX(), s = e.center.getY(), l = i.center.getX(), A = i.center.getY(), c = e.radius + i.radius + o, p = o * o;
    if (h.ptSqrDist(a, s, l, A) > c * c)
      return p;
    var u, d, g, f = null, m = [
        e.point,
        t
      ], y = [
        i.point,
        n
      ], _ = [
        null,
        null
      ];
    h.circleCircleIntersection(a, s, e.radius, l, A, i.radius, _);
    for (var v = 0; v < 2 && null != _[v] && null === f; ++v)
      d = (u = this._calculateBulge(e.point.getX(), e.point.getY(), _[v].getX(), _[v].getY(), e.center.getX(), e.center.getY(), e.bulge)) < 0 && e.bulge <= u || u >= 0 && e.bulge >= u, g = (u = this._calculateBulge(i.point.getX(), i.point.getY(), _[v].getX(), _[v].getY(), i.center.getX(), i.center.getY(), i.bulge)) < 0 && i.bulge <= u || u >= 0 && i.bulge >= u, d && g ? f = 0 : d ? m.push(_[v]) : g && y.push(_[v]);
    if (!(_[0] || h.isEqualEps(a, l) && h.isEqualEps(s, A))) {
      var b, C, w = l - a, E = A - s, B = [
          null,
          null
        ];
      h.circleLineIntersection(a, s, w, E, l, A, i.radius, B);
      for (v = 0; v < 2 && null != B[v]; ++v)
        b = a + w * B[v], C = s + E * B[v], (g = (u = this._calculateBulge(i.point.getX(), i.point.getY(), b, C, i.center.getX(), i.center.getY(), i.bulge)) < 0 && i.bulge <= u || u >= 0 && i.bulge >= u) && y.push(new r(b, C));
      w = -w, E = -E, B = [
        null,
        null
      ], h.circleLineIntersection(l, A, w, E, a, s, e.radius, B);
      for (v = 0; v < 2 && null != B[v]; ++v)
        b = l + w * B[v], C = A + E * B[v], (d = (u = this._calculateBulge(e.point.getX(), e.point.getY(), b, C, e.center.getX(), e.center.getY(), e.bulge)) < 0 && e.bulge <= u || u >= 0 && e.bulge >= u) && m.push(new r(b, C));
    }
    if (0 !== f) {
      var x;
      f = p;
      for (v = 0; v < m.length && f > 0; ++v)
        (x = this._getPtToArcSqrDist(i.point, i.bulge, i.center, i.radius, n, m[v])) < f && (f = x);
      for (v = 0; v < y.length && f > 0; ++v)
        (x = this._getPtToArcSqrDist(e.point, e.bulge, e.center, e.radius, t, y[v])) < f && (f = x);
    }
    return f;
  }, A.prototype._roundOut = function (e) {
    return Math.round(e * this._tolRange) / this._tolRange;
  }, A.prototype._genCap = function (e, t, i, n, o, a, l, c, p) {
    var u = new A.PolySegmentContainer();
    if (n = n || i, e = e || i.add(new r(0, o ? -a : a)), t = t || i.add(new r(0, o ? a : -a)), c === s.LineCap.Square) {
      var d, g, f = h.normalizePoint(e.subtract(i)), m = h.normalizePoint(n.subtract(i)), y = new r(f.getY(), -f.getX()), _ = new r(-f.getY(), f.getX());
      m.dot(y) > m.dot(_) ? (d = new r(-1, 1), g = new r(1, -1)) : (d = new r(1, -1), g = new r(-1, 1));
      var v = i.subtract(e);
      v = new r(v.getY(), v.getX()).multiply(g).add(e);
      var b = i.subtract(t);
      b = new r(b.getY(), b.getX()).multiply(d).add(t), u.insertSegment(new A.PolyOffsetSegment(i, e, v, 0)), u.insertSegment(new A.PolyOffsetSegment(i, v, b, 0)), u.insertSegment(new A.PolyOffsetSegment(i, b, t, 0));
    } else
      c === s.LineCap.Butt ? u.insertSegment(new A.PolyOffsetSegment(i, e, t, 0)).isCap = true : u.insertSegment(new A.PolyOffsetSegment(i, e, t, -1, i, a));
    return o ? l.prependContainer(u) : l.appendContainer(u), u;
  }, A.prototype._genCurves = function (e, t, i) {
    for (var n, o = 0; o < e.length; ++o)
      if ((n = e[o]).count > 0) {
        for (var s = n.head, l = [], h = new r(this._roundOut(s.point.getX()), this._roundOut(s.point.getY())), A = h, c = 0; c < n.count - 1; ++c) {
          if (s.bulge) {
            if (this._genBeziers(s.point, s.next.point, s.bulge, s.center, s.radius, i, l), c == n.count - 2) {
              var p = l[l.length - 3];
              A = new r(p.x, p.y);
            }
          } else
            l.push({
              c: a.Command.Line,
              x: this._roundOut(s.next.point.getX()),
              y: this._roundOut(s.next.point.getY())
            }), c == n.count - 2 && (A = new r(this._roundOut(s.next.point.getX()), this._roundOut(s.next.point.getY())));
          s = s.next;
        }
        var u = {
          stPt: h,
          endPt: A,
          vrt: l
        };
        t.push(u);
      }
  }, A.prototype._genBeziers = function (e, t, i, n, r, o, s) {
    var l = Math.abs(4 * Math.atan(i)), h = Math.ceil(2 * l / Math.PI);
    for (l /= h; h <= 32 && this._getCubicBezierArcError(l, r) > o;)
      l /= 2, h *= 2;
    i > 0 && (l = -l);
    for (var A, c, p, u, d, g, f = Math.cos(l), m = Math.sin(l), y = (1 - f) / (1 + f), _ = r * m * (Math.sqrt(4 + 3 * y) - 1) / 3, v = (e.getX() - n.getX()) / r, b = (e.getY() - n.getY()) / r, C = e.getX(), w = e.getY(), E = 0; E < h; ++E)
      v = (A = v) * f - (c = b) * m, b = c * f + A * m, p = C - _ * c, u = w + _ * A, d = (C = n.getX() + r * v) + _ * b, g = (w = n.getY() + r * b) - _ * v, s.push({
        c: a.Command.Curve2,
        x: this._roundOut(C),
        y: this._roundOut(w)
      }), s.push({
        c: a.Command.Curve2,
        x: this._roundOut(p),
        y: this._roundOut(u)
      }), s.push({
        c: a.Command.Curve2,
        x: this._roundOut(d),
        y: this._roundOut(g)
      });
  }, A.prototype._getCubicBezierArcError = function (e, t) {
    var i = 5.15347174 * t, n = Math.cos(e), r = n * n, o = 2 * r - 1, a = (4 * r - 3) * n, s = 0.00022979 * n - 19.65763511 + 0.00042715 * o + 0.00103256 * a, l = 9.92683097 + 0.00045907 * n + 0.00174813 * o - 0.00034153 * a;
    return i * Math.exp(s + l * e);
  }, A.prototype._rewindVertices = function () {
    for (var exports = 0; exports < this._pieces.length; ++exports)
      this._pieces[exports].rewindVertices(0);
  }, A.prototype._readVertex = function (e) {
    return !(!this._pieces[this._pieceIdx] || !this._pieces[this._pieceIdx].readVertex(e)) || (++this._pieceIdx, this._pieces[this._pieceIdx] && this._pieces[this._pieceIdx].readVertex(e));
  }, A.prototype.toString = function () {
    return "[Object GVertexOffsetter]";
  }, exports.exports = A;
}
