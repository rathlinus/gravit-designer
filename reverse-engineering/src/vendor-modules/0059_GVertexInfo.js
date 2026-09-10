/**
 * chunk.vendor.js Module #59
 * Type: class
 * Name: GVertexInfo
 */

function (e, t, i) {
      var n = i(5),
        r = i(48),
        o = i(6),
        a = i(12);

      function s() {}
      ((s.prototype._hitTestSegment = function (e, t, i, n, r, o, s, l, h) {
        var A = [];
        return (
          a.sqrSegmentDist(e, t, i, n, r, o, A, s) <= s &&
          (h &&
            ((h.segment = l),
            (h.x = e + A[0] * (i - e)),
            (h.y = t + A[0] * (n - t)),
            (h.slope = A[0]),
            (h.outline = !0)),
          !0)
        );
      }),
        (s.prototype._hitTestCurve = function (
          e,
          t,
          i,
          n,
          r,
          o,
          s,
          l,
          h,
          A,
          c,
        ) {
          var p,
            u,
            d,
            g,
            f,
            m,
            y,
            _,
            v,
            b,
            C,
            w,
            E,
            B,
            x = [],
            P = new Float64Array(5),
            S = new Float64Array(4),
            T = [],
            I = !1,
            F = !0;
          if (
            ((C = (e + i + r) / 3),
            (w = (t + n + o) / 3),
            a.sqrSegmentDist(e, t, i, n, s, l, x, h) <= h
              ? (I = !0)
              : a.segmentSide(e, t, i, n, s, l) *
                  a.segmentSide(e, t, i, n, C, w) <
                  0 && (F = !1),
            I && (0 == x[0] || 1 == x[0]))
          )
            return (
              c &&
                ((c.segment = A),
                (c.outline = !0),
                (c.slope = x[0]),
                0 == x[0] ? ((c.x = e), (c.y = t)) : ((c.x = i), (c.y = n))),
              !0
            );
          if (
            (a.sqrSegmentDist(e, t, r, o, s, l) <= h
              ? (I = !0)
              : a.segmentSide(e, t, r, o, s, l) *
                  a.segmentSide(e, t, r, o, C, w) <
                  0 && (F = !1),
            a.sqrSegmentDist(r, o, i, n, s, l) <= h
              ? (I = !0)
              : a.segmentSide(r, o, i, n, s, l) *
                  a.segmentSide(r, o, i, n, C, w) <
                  0 && (F = !1),
            !I && !F)
          )
            return !1;
          if (((u = n - 2 * o + t), 0 == (p = i - 2 * r + e) && 0 == u))
            return this._hitTestSegment(e, t, i, n, s, l, h, A, c);
          if (
            ((d = 2 * (r - e)),
            (g = 2 * (o - t)),
            (P[0] = p * p + u * u),
            (P[1] = 2 * (p * d + u * g)),
            (P[2] = d * d + g * g + 2 * p * (e - s) + 2 * u * (t - l)),
            (P[3] = 2 * (d * (e - s) + g * (t - l))),
            (P[4] = (e - s) * (e - s) + (t - l) * (t - l)),
            (E = 2 * P[0]),
            (f = (3 * P[1]) / (2 * E)),
            (m = P[2] / E),
            (y = P[3] / (2 * E)),
            (S[0] = 1),
            (S[1] = f),
            (S[2] = m),
            (S[3] = y),
            !1,
            0 == (_ = a.getCubicRoots(S, 0, 1, T, !1, 1e-6)))
          )
            return !1;
          for (v = h + 1, b = _ + 1, B = 0; B < _; ++B)
            v > (E = a.evalPoly(P, 4, T[B])) && ((v = E), (b = B));
          return (
            v <= h &&
            (c &&
              ((c.segment = A),
              (c.x = (T[b] * p + d) * T[b] + e),
              (c.y = (T[b] * u + g) * T[b] + t),
              (c.outline = !0),
              (c.slope = T[b])),
            !0)
          );
        }),
        (s.prototype._hitTestCurve2 = function (
          e,
          t,
          i,
          n,
          r,
          o,
          s,
          l,
          h,
          A,
          c,
          p,
          u,
        ) {
          var d,
            g,
            f,
            m,
            y,
            _,
            v,
            b,
            C,
            w,
            E,
            B,
            x,
            P,
            S,
            T,
            I,
            F,
            R,
            D,
            k,
            G,
            Q,
            M,
            N,
            U,
            V,
            O,
            L,
            Y,
            X,
            H,
            W,
            Z,
            z = [],
            j = new Float64Array(3),
            J = new Float64Array(3),
            q = new Float64Array(7),
            K = new Float64Array(6),
            $ = new Float64Array(6),
            ee = new Float64Array(4),
            te = new Float64Array(4),
            ie = null,
            ne = null,
            re = !1,
            oe = !0,
            ae = [];
          if (
            (a.getBezierDerivativeEquationCoeffs(e, t, i, n, r, o, s, l, j, J),
            (g = j[0]),
            (m = j[1]),
            (_ = j[2]),
            (f = J[0]),
            (y = J[1]),
            (C = 3 * _),
            (w = 3 * J[2]),
            (v = 1.5 * m),
            (b = 1.5 * y),
            (x = e - h),
            (P = t - A),
            (q[0] = g * g + f * f),
            (q[1] = 2 * (g * v + f * b)),
            (q[2] = v * v + b * b + 2 * (g * C + f * w)),
            (q[3] = 2 * (g * x + v * C + f * P + b * w)),
            (q[4] = C * C + w * w + 2 * (v * x + b * P)),
            (q[5] = 2 * (C * x + w * P)),
            (q[6] = x * x + P * P),
            a.getCoeffPolyDeriv(q, 6, K),
            a.inversePolyUnaryInterval(K, 5, $),
            0 == a.estimPositiveRootsDescartes($, 5))
          )
            return (
              (E = a.ptSqrDist(e, t, h, A)),
              (B = a.ptSqrDist(i, n, h, A)),
              (E <= c || B <= c) &&
                (u &&
                  ((u.segment = p),
                  (u.outline = !0),
                  E < B
                    ? ((u.x = e), (u.y = t), (u.slope = 0))
                    : ((u.x = i), (u.y = n), (u.slope = 1))),
                !0)
            );
          d = a.getCubicCurveSplits(j, J, z);
          for (var se = 0; se < d - 1; ++se) {
            if (0 == se) {
              if (
                ((S = z[se]),
                (I = a.evalCubic(g, v, C, e, S)),
                (F = a.evalCubic(f, b, w, t, S)),
                a.ptSqrDist(I, F, h, A) <= c)
              )
                return (
                  u &&
                    ((u.segment = p),
                    (u.outline = !0),
                    (u.x = I),
                    (u.y = F),
                    (u.slope = S)),
                  !0
                );
            } else ((S = T), (I = R), (F = D), k);
            if (
              ((T = z[se + 1]),
              (R = a.evalCubic(g, v, C, e, T)),
              (D = a.evalCubic(f, b, w, t, T)),
              (k = a.ptSqrDist(R, D, h, A)) <= c)
            )
              return (
                u &&
                  ((u.segment = p),
                  (u.outline = !0),
                  (u.x = R),
                  (u.y = D),
                  (u.slope = T)),
                !0
              );
            for (
              a.getCtrlPts(e, i, r, s, S, T, ee),
                a.getCtrlPts(t, n, o, l, S, T, te),
                re = !1,
                oe = !0,
                X = (ee[0] + ee[1] + ee[2] + ee[3]) / 4,
                H = (te[0] + te[1] + te[2] + te[3]) / 4,
                L = 0;
              L < 4;
              ++L
            ) {
              if (
                ((Y = 3 == L ? 0 : L + 1),
                a.sqrSegmentDist(ee[L], te[L], ee[Y], te[Y], h, A) <= c)
              ) {
                re = !0;
                break;
              }
              a.segmentSide(ee[L], te[L], ee[Y], te[Y], h, A) *
                a.segmentSide(ee[L], te[L], ee[Y], te[Y], X, H) <
                0 && (oe = !1);
            }
            if (
              (re || oe) &&
              ((G = a.evalPoly(K, 5, S)),
              a.isEqualEps(G, 0) && ((S += 0.005), (G = a.evalPoly(K, 5, S))),
              (Q = a.evalPoly(K, 5, T)),
              a.isEqualEps(Q, 0) && ((T -= 0.005), (Q = a.evalPoly(K, 5, T))),
              a.inversePolyInterval(K, 5, S, T, $),
              0 != (M = a.estimPositiveRootsDescartes($, 5)))
            ) {
              if (
                (ie ||
                  ((ie = new Float64Array(5)), a.getCoeffPolyDeriv(K, 5, ie)),
                ne ||
                  ((ne = new Float64Array(4)), a.getCoeffPolyDeriv(ie, 4, ne)),
                1 == M &&
                  (null ==
                    (U = a.locateByNewton(S, T, G, Q, K, 5, ie, ne, 0.005)) &&
                    (U = (S + T) / 2),
                  (V = a.evalCubic(g, v, C, e, U)),
                  (O = a.evalCubic(f, b, w, t, U)),
                  a.ptSqrDist(V, O, h, A) <= c))
              )
                return (
                  u &&
                    ((u.segment = p),
                    (u.outline = !0),
                    (u.x = V),
                    (u.y = O),
                    (u.slope = U)),
                  !0
                );
              if (M > 1) {
                if (
                  (0 == ae.length && a.getSturmPRS(K, 5, ie, ae),
                  (W = []),
                  (Z = [G, Q]),
                  0 == (N = a.countRootsNSturm(K, 5, ie, S, T, ae, W, Z)))
                )
                  continue;
                if (
                  1 == N &&
                  (null ==
                    (U = a.locateByNewton(
                      S,
                      T,
                      G,
                      Q,
                      K,
                      5,
                      ie,
                      ne,
                      0.005,
                      ae,
                      W,
                    )) && (U = (S + T) / 2),
                  (V = a.evalCubic(g, v, C, e, U)),
                  (O = a.evalCubic(f, b, w, t, U)),
                  a.ptSqrDist(V, O, h, A) <= c)
                )
                  return (
                    u &&
                      ((u.segment = p),
                      (u.outline = !0),
                      (u.x = V),
                      (u.y = O),
                      (u.slope = U)),
                    !0
                  );
                if (N > 1) {
                  var le = [];
                  a.locRootsSturm(K, 5, ie, S, T, ae, N, W, Z, le, 0);
                  for (var he = 0; he < le.length; ++he)
                    if (
                      (null ==
                        (U = a.locateByNewton(
                          le[he][0],
                          le[he][1],
                          le[he][2],
                          le[he][3],
                          K,
                          5,
                          ie,
                          ne,
                          0.005,
                          ae,
                        )) && (U = (le[he][0] + le[he][1]) / 2),
                      (V = a.evalCubic(g, v, C, e, U)),
                      (O = a.evalCubic(f, b, w, t, U)),
                      a.ptSqrDist(V, O, h, A) <= c)
                    )
                      return (
                        u &&
                          ((u.segment = p),
                          (u.outline = !0),
                          (u.x = V),
                          (u.y = O),
                          (u.slope = U)),
                        !0
                      );
                }
              }
            }
          }
          return !1;
        }),
        (s.prototype._hitUnderSegment = function (e, t, i, n, r, o, s) {
          var l, h, A;
          return (
            (l = a.segmentSide(0, 0, e, t, r, o)),
            (h = a.segmentSide(e, t, i, n, r, o)),
            (A = a.segmentSide(i, n, 0, 0, r, o)),
            l > 0 && h > 0 && A > 0
              ? 2
              : l < 0 && h < 0 && A < 0
                ? -2
                : 0 == l
                  ? h > 0 && A > 0
                    ? 1
                    : h < 0 && A < 0
                      ? -1
                      : 0
                  : 0 == A
                    ? l > 0 && h > 0
                      ? 1
                      : l < 0 && h < 0
                        ? -1
                        : 0
                    : s && 0 == h
                      ? l > 0 && A > 0
                        ? 1
                        : l < 0 && A < 0
                          ? -1
                          : 0
                      : 0
          );
        }),
        (s.prototype._evalConicReg = function (e, t, i, n, r, o, s, l, h, A) {
          var c,
            p,
            u,
            d,
            g = -a.segmentSide(e, t, i, n, r, o);
          return 0 == g
            ? this._hitUnderSegment(e, t, i, n, h, A)
            : ((c = this._hitUnderSegment(e, t, i, n, h, A, !0)),
              (p = s(h, A)) < 0
                ? c
                : 0 == p
                  ? g + c
                  : ((u = -l(r, o)),
                    ((d = -l(h, A)) > 0 && u < 0) || (d < 0 && u > 0)
                      ? g + g + c
                      : c));
        }),
        (s.prototype._hitUnderCurve = function (e, t, i, n, r, o, s, l) {
          return this._evalConicReg(
            e,
            t,
            i,
            n,
            r,
            o,
            function (s, l) {
              var h,
                A,
                c,
                p = (e + r + i) / 3,
                u = (t + o + n) / 3;
              return 0 == (c = a.segmentSide(i, n, e, t, s, l))
                ? 0
                : ((h = a.segmentSide(e, t, r, o, s, l)),
                  (A = a.segmentSide(r, o, i, n, s, l)),
                  h != a.segmentSide(e, t, r, o, p, u) ||
                  A != a.segmentSide(r, o, i, n, p, u) ||
                  c != a.segmentSide(i, n, e, t, p, u)
                    ? -1
                    : 1);
            },
            function (a, s) {
              var l = (e - r) * (n - o) + (r - i) * (t - o),
                h = a - r,
                A = s - o,
                c = h * (t - 2 * o + n) - A * (e - 2 * r + i);
              return c * c + (2 * (h * (t - n) + A * (i - e)) + l) * l;
            },
            s,
            l,
          );
        }),
        (s.prototype._hitUnderCurve2 = function (e, t, i, n, r, o, s, l, h, A) {
          var c,
            p,
            u,
            d,
            g,
            f,
            m,
            y,
            _,
            v,
            b,
            C,
            w,
            E,
            B,
            x,
            P,
            S,
            T,
            I = 0,
            F = [],
            R = new Float64Array(3),
            D = new Float64Array(3);
          if (
            (a.getBezierDerivativeEquationCoeffs(e, t, i, n, r, o, s, l, R, D),
            (c = R[0]),
            (u = R[1]),
            (g = R[2]),
            (p = D[0]),
            (d = D[1]),
            (_ = 3 * g),
            (v = 3 * (f = D[2])),
            (m = 1.5 * u),
            (y = 1.5 * d),
            (w = u * p - d * c),
            (E = 2 * (g * p - f * c)),
            (B = g * d - f * u),
            a.getQuadraticRoots(w, E, B, F),
            0 == F.length)
          ) {
            ((b = new Float64Array(4)),
              (C = new Float64Array(4)),
              (b[0] = c),
              (b[1] = m),
              (b[2] = _),
              (b[3] = e),
              (C[0] = p),
              (C[1] = y),
              (C[2] = v),
              (C[3] = t));
            var k = [];
            (a.getBezierSelfIntersections(b, C, k),
              2 == k.length &&
                (0 != k[0] && 1 != k[0] && F.push(k[0]),
                0 != k[1] && 1 != k[1] && F.push(k[1]),
                F.push((k[0] + k[1]) / 2)));
          }
          (F.push(0), F.push(1));
          var G = [],
            Q = a.uSortSegment(0, 1, F, G);
          ((x = new Float64Array(4)), (P = new Float64Array(4)));
          for (var M = 0; M < Q - 1; ++M) {
            function N(e, t) {
              var i = x[0] - 3 * x[1] + 3 * x[2] - x[3],
                n = (x[0] - x[1] - x[2] + x[3]) / 2,
                r = (x[0] + x[1] - x[2] - x[3]) / 4,
                o = (x[0] + 3 * x[1] + 3 * x[2] + x[3]) / 8,
                a = P[0] - 3 * P[1] + 3 * P[2] - P[3],
                s = (P[0] - P[1] - P[2] + P[3]) / 2,
                l = (P[0] + P[1] - P[2] - P[3]) / 4,
                h = (P[0] + 3 * P[1] + 3 * P[2] + P[3]) / 8,
                A = i * l - r * a,
                c = i * s - n * a,
                p = n * l - r * s,
                u = i * h - o * a,
                d = n * h - o * s,
                g = r * h - o * l,
                f = i * i,
                m = a * a,
                y = A * A,
                _ = u * u,
                v = c * d,
                b = c * A,
                C = 3 * v - A * u,
                w = 3 * y - c * (4 * u + 9 * p);
              return (
                (m * a * e -
                  3 * (i * m) * t +
                  3 * (u * m - 3 * a * (2 * c * l + A * s) + 9 * c * (s * s))) *
                  (e * e) +
                (3 * (f * a) * e -
                  f * i * t +
                  3 * (u * f - 3 * (2 * c * r + A * n) * i + 9 * c * (n * n))) *
                  (t * t) +
                3 *
                  ((_ * a +
                    6 * C * s +
                    3 * w * l +
                    9 * b * h -
                    ((2 * u + 3 * p) * i * a +
                      9 * (2 * c * n * s + n * r * m - f * s * l)) *
                      t) *
                    e -
                    (_ * i + 6 * C * n + 3 * w * r + 9 * b * o) * t) +
                (u * (_ - 9 * (A * d + 2 * c * g)) +
                  27 * (v * d + y * g) -
                  81 * (c * p) * g)
              );
            }

            function U(e, t) {
              var i,
                n,
                r,
                o = (x[0] + x[1] + x[2] + x[3]) / 4,
                s = (P[0] + P[1] + P[2] + P[3]) / 4;
              for (n = 0; n < 4; ++n) {
                if (
                  ((r = 3 == n ? 0 : n + 1),
                  (i = a.segmentSide(x[n], P[n], x[r], P[r], e, t)),
                  3 == n && 0 == i)
                )
                  return 0;
                if (i * a.segmentSide(x[n], P[n], x[r], P[r], o, s) < 0)
                  return -1;
              }
              return 1;
            }
            ((S = 0 == M ? G[M] : T),
              (T = G[M + 1]),
              0 == S && 1 == T
                ? ((x[0] = e),
                  (x[1] = r),
                  (x[2] = s),
                  (x[3] = i),
                  (P[0] = t),
                  (P[1] = o),
                  (P[2] = l),
                  (P[3] = n))
                : (a.getCtrlPts(e, i, r, s, S, T, x),
                  a.getCtrlPts(t, n, o, l, S, T, P)),
              a.isEqualEps(x[0], x[1]) && a.isEqualEps(P[0], P[1])
                ? (I += this._evalConicReg(
                    x[0],
                    P[0],
                    x[3],
                    P[3],
                    x[2],
                    P[2],
                    U,
                    N,
                    h,
                    A,
                  ))
                : (I += this._evalConicReg(
                    x[0],
                    P[0],
                    x[3],
                    P[3],
                    x[1],
                    P[1],
                    U,
                    N,
                    h,
                    A,
                  )));
          }
          return I;
        }),
        (s.prototype.hitTest = function (e, t, i, n, o, s, l) {
          var h,
            A,
            c,
            p,
            u,
            d,
            g,
            f,
            m = 0,
            y = !1,
            _ = new r(),
            v = n ? (n / 2) * (n / 2) : a.defaultEps,
            b = 0,
            C = 0;
          if (
            ((g = null),
            (f = null),
            a.isEqualEps(e, 0) && a.isEqualEps(t, 0) && (C = 1),
            i.rewindVertices(0))
          ) {
            for (; i.readVertex(_); )
              switch (_.command) {
                case r.Command.Move:
                  ((g = h = _.x), (f = A = _.y));
                  break;
                case r.Command.Line:
                  if (
                    (++m,
                    (y = this._hitTestSegment(h, A, _.x, _.y, e, t, v, m, s)))
                  )
                    return y;
                  (o &&
                    (b += this._hitUnderSegment(
                      h + C,
                      A,
                      _.x + C,
                      _.y,
                      e + C,
                      t,
                    )),
                    (h = _.x),
                    (A = _.y));
                  break;
                case r.Command.Curve:
                  if ((++m, (c = _.x), (p = _.y), i.readVertex(_))) {
                    if (
                      (y = this._hitTestCurve(
                        h,
                        A,
                        c,
                        p,
                        _.x,
                        _.y,
                        e,
                        t,
                        v,
                        m,
                        s,
                      ))
                    )
                      return y;
                    (o &&
                      (b += this._hitUnderCurve(
                        h + C,
                        A,
                        c + C,
                        p,
                        _.x + C,
                        _.y,
                        e + C,
                        t,
                      )),
                      (h = c),
                      (A = p));
                  }
                  break;
                case r.Command.Curve2:
                  if (
                    (++m,
                    (c = _.x),
                    (p = _.y),
                    i.readVertex(_) && ((u = _.x), (d = _.y), i.readVertex(_)))
                  ) {
                    if (
                      (y = this._hitTestCurve2(
                        h,
                        A,
                        c,
                        p,
                        u,
                        d,
                        _.x,
                        _.y,
                        e,
                        t,
                        v,
                        m,
                        s,
                      ))
                    )
                      return y;
                    (o &&
                      (b += this._hitUnderCurve2(
                        h + C,
                        A,
                        c + C,
                        p,
                        u + C,
                        d,
                        _.x + C,
                        _.y,
                        e + C,
                        t,
                      )),
                      (h = c),
                      (A = p));
                  }
                  break;
                case r.Command.Close:
                  if (g != h || f != A) {
                    if (
                      (++m,
                      (y = this._hitTestSegment(h, A, g, f, e, t, v, m, s)))
                    )
                      return y;
                    o &&
                      (b += this._hitUnderSegment(
                        h + C,
                        A,
                        g + C,
                        f,
                        e + C,
                        t,
                      ));
                  }
                  ((g = h), (f = A));
                  break;
                default:
                  throw new Error(
                    "Unknown vertex command: " + _.command.toString(),
                  );
              }
            o &&
              ((g == h && f == A) ||
                (b += this._hitUnderSegment(h + C, A, g + C, f, e + C, t)),
              ((null == l && (2 == b || -2 == b)) ||
                (2 == b && !l) ||
                (-2 == b && l)) &&
                (s && (s.outline = !1), (y = !0)));
          }
          return y;
        }),
        (s.prototype.calculateBounds = function (e, t) {
          if (e.rewindVertices(0)) {
            var i = Number.MAX_VALUE,
              n = Number.MAX_VALUE,
              s = -Number.MAX_VALUE,
              l = -Number.MAX_VALUE;

            function h(e, t) {
              (e < i && (i = e),
                e > s && (s = e),
                t < n && (n = t),
                t > l && (l = t));
            }

            function A(e, t, i, n, r, o) {
              var s = 0,
                l = 0,
                A = 0;
              (h(i, n),
                0 != (l = i - 2 * r + e) &&
                  (s = (e - r) / l) > 0 &&
                  s < 1 &&
                  h(
                    (e * i - r * r) / (i - 2 * r + e),
                    (A = a.getCurveAtT(t, n, o, s)),
                  ),
                0 != (l = n - 2 * o + t) &&
                  (s = (t - o) / l) > 0 &&
                  s < 1 &&
                  ((A = (t * n - o * o) / (n - 2 * o + t)),
                  h(a.getCurveAtT(e, i, r, s), A)));
            }

            function c(e, t, i, n, r, o, s, l) {
              h(i, n);
              var A = r - e,
                c = o - t,
                p = 2 * (s - r - A),
                u = 2 * (l - o - c),
                d = n - l - c - u;

              function g(A) {
                A > 0 &&
                  A < 1 &&
                  h(
                    a.getCubicCurveAtT(e, i, r, s, A),
                    a.getCubicCurveAtT(t, n, o, l, A),
                  );
              }

              function f(e, t, i) {
                var n = 0,
                  r = 0;
                0 == e
                  ? 0 != t && g(-i / t)
                  : 0 == (n = t * t - 4 * e * i)
                    ? g(-t / (2 * e))
                    : n > 0 &&
                      ((r = Math.sqrt(n)),
                      g((-t + r) / (2 * e)),
                      g((-t - r) / (2 * e)));
              }
              (f(i - s - A - p, p, A), f(d, u, c));
            }
            for (var p, u, d, g, f, m, y = new r(); e.readVertex(y); )
              switch (y.command) {
                case r.Command.Move:
                case r.Command.Line:
                  (h(y.x, y.y), (p = y.x), (u = y.y));
                  break;
                case r.Command.Curve:
                  ((d = y.x),
                    (g = y.y),
                    e.readVertex(y) &&
                      (t ? A(p, u, d, g, y.x, y.y) : (h(d, g), h(y.x, y.y)),
                      (p = d),
                      (u = g)));
                  break;
                case r.Command.Curve2:
                  ((d = y.x),
                    (g = y.y),
                    e.readVertex(y) &&
                      ((f = y.x),
                      (m = y.y),
                      e.readVertex(y) &&
                        (t
                          ? c(p, u, d, g, f, m, y.x, y.y)
                          : (h(d, g), h(f, m), h(y.x, y.y)),
                        (p = d),
                        (u = g))));
                  break;
                case r.Command.Close:
                  break;
                default:
                  throw new Error(
                    "Unknown vertex command: " + y.command.toString(),
                  );
              }
            if (i < Number.MAX_VALUE && n < Number.MAX_VALUE)
              return new o(
                i,
                n,
                s > -Number.MAX_VALUE ? s - i : 0,
                l > -Number.MAX_VALUE ? l - n : 0,
              );
          }
          return null;
        }),
        (s.prototype.getPathLength = function (e) {
          for (var t, i, o, s, l, h, A, c = new r(), p = 0; e.readVertex(c); )
            switch (c.command) {
              case r.Command.Move:
                ((t = h = c.x), (i = A = c.y));
                break;
              case r.Command.Line:
                ((p += a.ptDist(t, i, c.x, c.y)), (t = c.x), (i = c.y));
                break;
              case r.Command.Curve:
                ((o = c.x),
                  (s = c.y),
                  e.readVertex(c) &&
                    ((p += a.getArcLengthQuadratic(
                      new n(t, i),
                      new n(o, s),
                      new n(c.x, c.y),
                    )),
                    (t = o),
                    (i = s)));
                break;
              case r.Command.Curve2:
                ((o = c.x),
                  (s = c.y),
                  e.readVertex(c) &&
                    ((l = c.x),
                    c.y,
                    e.readVertex(c) &&
                      ((p += a.getArcLengthCubic(
                        new n(t, i),
                        new n(o, s),
                        new n(l, cx2),
                        new n(c.x, c.y),
                      )),
                      (t = o),
                      (i = s))));
                break;
              case r.Command.Close:
                (h === t && A === i) || (p += a.ptDist(h, A, t, i));
                break;
              default:
                throw new Error(
                  "Unknown vertex command: " + c.command.toString(),
                );
            }
          return p;
        }),
        (s.prototype.getSegmentPoint = function (e, t, i) {
          if (e.rewindVertices(0))
            for (
              var o, s, l, h, A, c, p = new r(), u = 0, d = null, g = null;
              e.readVertex(p);
            ) {
              var f = !e.hasVertexForRead();
              switch (p.command) {
                case r.Command.Move:
                  ((d = o = p.x), (g = s = p.y));
                  break;
                case r.Command.Line:
                  if (++u === t || f)
                    return new n((p.x - o) * i + o, (p.y - s) * i + s);
                  ((o = p.x), (s = p.y));
                  break;
                case r.Command.Curve:
                  if ((++u, (l = p.x), (h = p.y), e.readVertex(p))) {
                    f = !e.hasVertexForRead();
                    if (u === t || f)
                      return new n(
                        a.getCurveAtT(o, l, p.x, i),
                        a.getCurveAtT(s, h, p.y, i),
                      );
                    ((o = l), (s = h));
                  }
                  break;
                case r.Command.Curve2:
                  if ((++u, (l = p.x), (h = p.y), e.readVertex(p))) {
                    f = !e.hasVertexForRead();
                    if (((A = p.x), (c = p.y), e.readVertex(p))) {
                      f = !e.hasVertexForRead();
                      if (u === t || f)
                        return new n(
                          a.getCubicCurveAtT(o, l, A, p.x, i),
                          a.getCubicCurveAtT(s, h, c, p.y, i),
                        );
                      ((o = l), (s = h));
                    }
                  }
                  break;
                case r.Command.Close:
                  if (++u === t || f)
                    return new n((d - o) * i + o, (g - s) * i + s);
                  ((d = o), (g = s));
                  break;
                default:
                  throw new Error(
                    "Unknown vertex command: " + p.command.toString(),
                  );
              }
            }
          return null;
        }),
        (s.prototype.collinear = function (e, t, i, n, r) {
          r = r || a.defaultEps;

          function o(e, t, i, n, o, s) {
            var l = (t - n) * (o - i) - (e - i) * (s - n);
            return !!(
              a.isEqualEps(l, 0, r) &&
              t <= Math.max(n, s) + r &&
              t >= Math.min(n, s) - r &&
              e <= Math.max(i, o) + r &&
              e >= Math.min(i, o) - r
            );
          }

          function s(e, t) {
            (4 === e.length &&
              ((a.isEqualEps(e[0], e[1], r) && a.isEqualEps(t[0], t[1], r)) ||
              (a.isEqualEps(e[2], e[1], r) && a.isEqualEps(t[2], t[1], r))
                ? (e.splice(1), t.splice(1))
                : a.isEqualEps(e[2], e[3], r) &&
                  a.isEqualEps(t[2], t[3], r) &&
                  (e.splice(2), t.splice(2))),
              3 === e.length &&
                ((a.isEqualEps(e[0], e[1], r) && a.isEqualEps(t[0], t[1], r)) ||
                  (a.isEqualEps(e[2], e[1], r) &&
                    a.isEqualEps(t[2], t[1], r))) &&
                (e.splice(1), t.splice(1)));
          }
          if (
            ((e = e.slice()),
            (i = i.slice()),
            (t = t.slice()),
            (n = n.slice()),
            s(e, t),
            s(i, n),
            e.length > i.length)
          ) {
            var l = e;
            ((e = i), (i = l), (l = t), (t = n), (n = l));
          }
          if (2 !== e.length) return this._collinearBezier(e, t, i, n, r);
          if (2 === i.length) {
            if (
              o(e[0], t[0], i[0], n[0], i[1], n[1]) &&
              o(e[1], t[1], i[0], n[0], i[1], n[1])
            )
              return !0;
          } else if (4 === i.length) {
            if (
              o(i[1], n[1], i[0], n[0], i[3], n[3]) &&
              o(i[2], n[2], i[0], n[0], i[3], n[3]) &&
              o(e[0], t[0], i[0], n[0], i[3], n[3]) &&
              o(e[1], t[1], i[0], n[0], i[3], n[3])
            )
              return !0;
          } else if (
            3 === i.length &&
            o(i[1], n[1], i[0], n[0], i[2], n[2]) &&
            o(e[0], t[0], i[0], n[0], i[2], n[2]) &&
            o(e[1], t[1], i[0], n[0], i[2], n[2])
          )
            return !0;
          return !1;
        }),
        (s.prototype._collinearBezier = function (e, t, i, n, r) {
          var o = r ? Math.sqrt(r) : Math.sqrt(a.defaultEps);
          if (4 === i.length) {
            var s = a.getCubicCurveAtT(i[0], i[3], i[1], i[2], 0.25),
              l = a.getCubicCurveAtT(n[0], n[3], n[1], n[2], 0.25),
              h = a.getCubicCurveAtT(i[0], i[3], i[1], i[2], 0.75),
              A = a.getCubicCurveAtT(n[0], n[3], n[1], n[2], 0.75);
            if (4 === e.length) {
              if (
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  s,
                  l,
                  o,
                  0,
                  {},
                ) &&
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  h,
                  A,
                  o,
                  0,
                  {},
                ) &&
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  i[0],
                  n[0],
                  o,
                  0,
                  {},
                ) &&
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  i[3],
                  n[3],
                  o,
                  0,
                  {},
                )
              )
                return !0;
            } else if (
              3 === e.length &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                s,
                l,
                o,
                0,
                {},
              ) &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                h,
                A,
                o,
                0,
                {},
              ) &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                i[0],
                n[0],
                o,
                0,
                {},
              ) &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                i[3],
                n[3],
                o,
                0,
                {},
              )
            )
              return !0;
          } else if (3 === i.length) {
            ((s = a.getCurveAtT(i[0], i[2], i[1], 0.5)),
              (l = a.getCurveAtT(n[0], n[2], n[1], 0.5)));
            if (4 === e.length) {
              if (
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  s,
                  l,
                  o,
                  0,
                  {},
                ) &&
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  i[0],
                  n[0],
                  o,
                  0,
                  {},
                ) &&
                this._hitTestCurve2(
                  e[0],
                  t[0],
                  e[3],
                  t[3],
                  e[1],
                  t[1],
                  e[2],
                  t[2],
                  i[2],
                  n[2],
                  o,
                  0,
                  {},
                )
              )
                return !0;
            } else if (
              3 === e.length &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                s,
                l,
                o,
                0,
                {},
              ) &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                i[0],
                n[0],
                o,
                0,
                {},
              ) &&
              this._hitTestCurve(
                e[0],
                t[0],
                e[2],
                t[2],
                e[1],
                t[1],
                i[2],
                n[2],
                o,
                0,
                {},
              )
            )
              return !0;
          }
          return !1;
        }),
        (s.prototype.toString = function () {
          return "[Object GVertexInfo]";
        }),
        (e.exports = new s()));
    }