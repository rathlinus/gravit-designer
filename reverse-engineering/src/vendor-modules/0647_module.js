/**
 * chunk.vendor.js Module #647
 * Type: unknown
 */

function (e, t, i) {
      var r = i(5),
        o = i(646),
        a = i(12),
        s = i(913);

      function l() {}
      ((l.LARGE_EPS = 1e-4),
        (l.SMALL_EPS = 1e-12),
        (l.LOG_EPS = -Math.log(l.SMALL_EPS) / Math.LN10),
        (l.TINY_EPS = a.defaultEps),
        (l._checkDegree = function (e) {
          if (!e.currCurve) return 1;
          if (e.currCurve.cp2 && !r.equals(e.currCurve.cp2, e.currCurve.cp1))
            return r.equals(e.currCurve.cp2, e.currCurve.nextCurve.point) ||
              r.equals(e.currCurve.cp1, e.currCurve.point)
              ? 2
              : 3;
          var t = e.currCurve.cp1.getX(),
            i = e.currCurve.cp1.getY(),
            n = e.currCurve.point,
            o = e.currCurve.nextCurve.point,
            s =
              (i - n.getY()) * (o.getX() - n.getX()) -
              (t - n.getX()) * (o.getY() - n.getY()),
            h = new r(l.SMALL_EPS / 2, l.SMALL_EPS / 2),
            A = r.min(n, o).subtract(h),
            c = r.max(n, o).add(h);
          return a.isEqualEps(s, 0, l.SMALL_EPS) &&
            i <= c.getY() &&
            i >= A.getY() &&
            t <= c.getX() &&
            t >= A.getX()
            ? 1
            : 2;
        }),
        (l.intersect = function (e, t, i) {
          function n(e, t, i) {
            var n = e.getX(),
              r = e.getY(),
              o = i.getX(),
              s = i.getY(),
              l = t.getX(),
              h = t.getY();
            return Math.sqrt(a.ptSqrDist(n, r, o, s) / a.ptSqrDist(n, r, l, h));
          }

          function r(e, t) {
            if (e.currCurve) {
              for (
                var i = e.currCurve, n = e.currCurve.nextCurve;
                i !== n && !(t <= i.next.m || i.next === n);
              )
                i = i.next;
              return i;
            }
            return e;
          }

          function s(e, t, i, a, s, l, h, A) {
            for (var c, p, u = [], d = 0; d < e.length; d++) {
              var g = e[d].p;
              (a
                ? ((c = n(h, A, g)), (p = e[d].m))
                : s
                  ? ((c = e[d].m), (p = n(h, A, g)))
                  : l
                    ? ((p = e[d].m1), (c = e[d].m0))
                    : ((p = e[d].m0), (c = e[d].m1)),
                u.push(new o(g, c, p, r(t, c), r(i, p))));
            }
            return u;
          }
          var h,
            A,
            c,
            p,
            u,
            d,
            g = l._checkDegree(e),
            f = l._checkDegree(t);
          if (1 === g && 1 === f) {
            ((c = t.currCurve ? t.currCurve.point : t.point),
              (p = t.currCurve ? t.currCurve.nextCurve.point : t.next.point),
              (u = e.currCurve ? e.currCurve.point : e.point),
              (d = e.currCurve ? e.currCurve.nextCurve.point : e.next.point));
            var m = [],
              y = a.getIntersectionPoint(
                u.getX(),
                u.getY(),
                d.getX(),
                d.getY(),
                c.getX(),
                c.getY(),
                p.getX(),
                p.getY(),
                m,
              );
            return (
              (h = m[0]),
              (A = m[1]),
              y && h >= 0 && h <= 1 && A >= 0 && A <= 1
                ? [new o(y, h, A, r(e, h), r(t, A))]
                : null
            );
          }
          return 1 === g && 2 === f
            ? ((u = e.currCurve ? e.currCurve.point : e.point),
              (d = e.currCurve ? e.currCurve.nextCurve.point : e.next.point),
              s(
                (y = l.intersectBezier2Line(
                  t.currCurve.point,
                  t.currCurve.cp1,
                  t.currCurve.nextCurve.point,
                  u,
                  d,
                )),
                e,
                t,
                !0,
                !1,
                !1,
                u,
                d,
              ))
            : 2 === g && 1 === f
              ? ((c = t.currCurve ? t.currCurve.point : t.point),
                (p = t.currCurve ? t.currCurve.nextCurve.point : t.next.point),
                s(
                  (y = l.intersectBezier2Line(
                    e.currCurve.point,
                    e.currCurve.cp1,
                    e.currCurve.nextCurve.point,
                    c,
                    p,
                  )),
                  e,
                  t,
                  !1,
                  !0,
                  !1,
                  c,
                  p,
                ))
              : 2 === g && 2 === f
                ? s(
                    (y = l.intersectBezier2Bezier2(
                      e.currCurve.point,
                      e.currCurve.cp1,
                      e.currCurve.nextCurve.point,
                      t.currCurve.point,
                      t.currCurve.cp1,
                      t.currCurve.nextCurve.point,
                    )),
                    e,
                    t,
                    !1,
                    !1,
                    !1,
                  )
                : 2 === g && 3 === f
                  ? s(
                      (y = l.intersectBezier2Bezier3(
                        e.currCurve.point,
                        e.currCurve.cp1,
                        e.currCurve.nextCurve.point,
                        t.currCurve.point,
                        t.currCurve.cp1,
                        t.currCurve.cp2,
                        t.currCurve.nextCurve.point,
                      )),
                      e,
                      t,
                      !1,
                      !1,
                      !1,
                    )
                  : 3 === g && 2 === f
                    ? s(
                        (y = l.intersectBezier2Bezier3(
                          t.currCurve.point,
                          t.currCurve.cp1,
                          t.currCurve.nextCurve.point,
                          e.currCurve.point,
                          e.currCurve.cp1,
                          e.currCurve.cp2,
                          e.currCurve.nextCurve.point,
                        )),
                        e,
                        t,
                        !1,
                        !1,
                        !0,
                      )
                    : 1 === g && 3 === f
                      ? ((u = e.currCurve ? e.currCurve.point : e.point),
                        (d = e.currCurve
                          ? e.currCurve.nextCurve.point
                          : e.next.point),
                        s(
                          (y = i
                            ? l.intersectBezier3Line(
                                t.currCurve.point,
                                t.currCurve.cp1,
                                t.currCurve.cp2,
                                t.currCurve.nextCurve.point,
                                u,
                                d,
                              )
                            : l.intersectBezier3LinePrecise(
                                t.currCurve.point,
                                t.currCurve.cp1,
                                t.currCurve.cp2,
                                t.currCurve.nextCurve.point,
                                u,
                                d,
                              )),
                          e,
                          t,
                          !0,
                          !1,
                          !1,
                          u,
                          d,
                        ))
                      : 3 === g && 1 === f
                        ? ((c = t.currCurve ? t.currCurve.point : t.point),
                          (p = t.currCurve
                            ? t.currCurve.nextCurve.point
                            : t.next.point),
                          s(
                            (y = i
                              ? l.intersectBezier3Line(
                                  e.currCurve.point,
                                  e.currCurve.cp1,
                                  e.currCurve.cp2,
                                  e.currCurve.nextCurve.point,
                                  c,
                                  p,
                                )
                              : l.intersectBezier3LinePrecise(
                                  e.currCurve.point,
                                  e.currCurve.cp1,
                                  e.currCurve.cp2,
                                  e.currCurve.nextCurve.point,
                                  c,
                                  p,
                                )),
                            e,
                            t,
                            !1,
                            !0,
                            !1,
                            c,
                            p,
                          ))
                        : 3 === g && 3 === f
                          ? s(
                              (y = l.intersectBezier3Bezier3(
                                e.currCurve.point,
                                e.currCurve.cp1,
                                e.currCurve.cp2,
                                e.currCurve.nextCurve.point,
                                t.currCurve.point,
                                t.currCurve.cp1,
                                t.currCurve.cp2,
                                t.currCurve.nextCurve.point,
                                !0,
                              )),
                              e,
                              t,
                              !1,
                              !1,
                              !1,
                            )
                          : void 0;
        }),
        (l.intersectBezier2Line = function (e, t, i, n, o) {
          var a,
            s,
            h,
            A,
            c,
            p = new r(l.TINY_EPS, l.TINY_EPS),
            u = r.min(n, o).subtract(p),
            d = r.max(n, o).add(p),
            g = [],
            f = l._calcQuadraticCoefficients(e, t, i);
          ((h = f[0]),
            (s = f[1]),
            (a = f[2]),
            (c = new r(n.getY() - o.getY(), o.getX() - n.getX())),
            (A = n.getX() * o.getY() - o.getX() * n.getY()));
          var m = new l.Polynomial([
            c.dot(a),
            c.dot(s),
            c.dot(h) + A,
          ]).getRoots();
          if (!m) return [];
          for (var y = 0; y < m.length; y++) {
            var _ = m[y];
            if (0 <= _ && _ <= 1) {
              var v = e.lerp(t, _),
                b = t.lerp(i, _),
                C = v.lerp(b, _);
              n.getX() == o.getX()
                ? u.getY() <= C.getY() &&
                  C.getY() <= d.getY() &&
                  g.push({
                    m: _,
                    p: C,
                  })
                : n.getY() == o.getY()
                  ? u.getX() <= C.getX() &&
                    C.getX() <= d.getX() &&
                    g.push({
                      m: _,
                      p: C,
                    })
                  : u.getX() <= C.getX() &&
                    C.getX() <= d.getX() &&
                    u.getY() <= C.getY() &&
                    C.getY() <= d.getY() &&
                    g.push({
                      m: _,
                      p: C,
                    });
            }
          }
          return g;
        }),
        (l.intersectBezier2Bezier2 = function (e, t, i, n, r, o) {
          var a,
            s,
            h,
            A,
            c,
            p,
            u,
            d = [];
          ((e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (r = this._roundPoint(r)),
            (o = this._roundPoint(o)));
          var g = l._calcQuadraticCoefficients(e, t, i);
          if (
            ((h = g[0]),
            (s = g[1]),
            (a = g[2]),
            (p = (g = l._calcQuadraticCoefficients(n, r, o))[0]),
            (c = g[1]),
            (A = g[2]),
            0 == a.getY())
          ) {
            var f = a.getX() * (h.getY() - p.getY()),
              m = f - s.getX() * s.getY(),
              y = s.getY() * s.getY();
            u = new l.Polynomial([
              a.getX() * A.getY() * A.getY(),
              2 * a.getX() * c.getY() * A.getY(),
              a.getX() * c.getY() * c.getY() -
                A.getX() * y -
                A.getY() * f -
                A.getY() * m,
              -c.getX() * y - c.getY() * f - c.getY() * m,
              (h.getX() - p.getX()) * y + (h.getY() - p.getY()) * m,
            ]);
          } else {
            var _ = a.getX() * A.getY() - a.getY() * A.getX(),
              v = a.getX() * c.getY() - c.getX() * a.getY(),
              b = s.getX() * a.getY() - s.getY() * a.getX(),
              C = h.getY() - p.getY(),
              w = a.getY() * (h.getX() - p.getX()) - a.getX() * C,
              E = -s.getY() * b + a.getY() * w,
              B = b * b;
            u = new l.Polynomial([
              _ * _,
              2 * _ * v,
              (-A.getY() * B + a.getY() * v * v + a.getY() * _ * w + _ * E) /
                a.getY(),
              (-c.getY() * B + a.getY() * v * w + v * E) / a.getY(),
              (C * B + w * E) / a.getY(),
            ]);
          }
          var x = u.getRoots();
          if (!x) return [];
          l.removeMultipleRoots(x);
          for (var P = 0; P < x.length; P++) {
            var S = x[P];
            if (0 <= S && S <= 1) {
              var T = new l.Polynomial([
                  a.getX(),
                  s.getX(),
                  h.getX() - p.getX() - S * c.getX() - S * S * A.getX(),
                ]).getRoots(),
                I = new l.Polynomial([
                  a.getY(),
                  s.getY(),
                  h.getY() - p.getY() - S * c.getY() - S * S * A.getY(),
                ]).getRoots();
              if (T) I || (I = T);
              else {
                if (!I) return [];
                T = I;
              }
              if (T.length > 0 && I.length > 0)
                e: for (var F = 0; F < T.length; F++) {
                  var R = T[F];
                  if (0 <= R && R <= 1)
                    for (var D = 0; D < I.length; D++)
                      if (Math.abs(R - I[D]) < l.LARGE_EPS) {
                        d.push({
                          m0: S,
                          m1: R,
                          p: A.scale(S * S).add(c.scale(S).add(p)),
                        });
                        break e;
                      }
                }
            }
          }
          return d;
        }),
        (l.intersectBezier2Bezier3 = function (e, t, i, n, o, a, s) {
          var h,
            A,
            c,
            p,
            u,
            d,
            g,
            f,
            m = [];
          ((e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (o = this._roundPoint(o)),
            (a = this._roundPoint(a)),
            (s = this._roundPoint(s)));
          var y = r.min(e, t, i, n, o, a, s);
          (y.getX() < 0 && (y = new r(-y.getX(), y.getY())),
            y.getY() < 0 && (y = new r(y.getX(), -y.getY())));
          var _ = l._calcCubicCoefficients(n, o, a, s);
          ((c = (f = l._calcQuadraticCoefficients(
            e.subtract(y),
            t.subtract(y),
            i.subtract(y),
          ))[0]),
            (A = f[1]),
            (h = f[2]),
            (g = (f = l._calcCubicCoefficients(
              n.subtract(y),
              o.subtract(y),
              a.subtract(y),
              s.subtract(y),
            ))[0]),
            (d = f[1]),
            (u = f[2]),
            (p = f[3]));
          var v = c.getX(),
            b = c.getY(),
            C = A.getX(),
            w = A.getY(),
            E = h.getX(),
            B = h.getY(),
            x = g.getX(),
            P = g.getY(),
            S = d.getX(),
            T = d.getY(),
            I = u.getX(),
            F = u.getY(),
            R = p.getX(),
            D = p.getY(),
            k = v * v,
            G = b * b,
            Q = C * C,
            M = w * w,
            N = E * E,
            U = B * B,
            V = x * x,
            O = P * P,
            L = S * S,
            Y = T * T,
            X = I * I,
            H = F * F,
            W = R * R,
            Z = D * D,
            z = new l.Polynomial([
              -2 * E * B * R * D + N * Z + U * W,
              2 * N * F * D + (-2 * I * D - 2 * F * R) * B * E + 2 * U * I * R,
              N * (2 * T * D + H) +
                (-2 * T * R - 2 * I * F - 2 * S * D) * B * E +
                (X + 2 * S * R) * U,
              (-2 * U * R + 2 * E * B * D) * v +
                (2 * E * B * R - 2 * N * D) * b -
                Q * B * D +
                (B * R + E * D) * w * C -
                M * E * R +
                N * (2 * P * D + 2 * T * F) +
                (-2 * P * R - 2 * T * I - 2 * x * D - 2 * S * F) * B * E +
                (2 * x * R + 2 * S * I) * U,
              (-2 * U * I + 2 * E * B * F) * v +
                (-2 * N * F + 2 * E * B * I) * b -
                Q * B * F +
                (B * I + E * F) * w * C -
                M * E * I +
                N * (2 * P * F + Y) +
                (-2 * S * T - 2 * x * F - 2 * P * I) * B * E +
                (2 * x * I + L) * U,
              (2 * E * B * T - 2 * S * U) * v +
                (-2 * N * T + 2 * E * S * B) * b -
                Q * B * T +
                (E * T + S * B) * w * C -
                M * E * S +
                2 * N * P * T +
                (-2 * x * T - 2 * P * S) * B * E +
                2 * x * S * U,
              k * U +
                (-C * w * B -
                  2 * x * U +
                  M * E +
                  2 * E * P * B -
                  2 * b * E * B) *
                  v +
                G * N +
                (-C * w * E + 2 * x * E * B + Q * B - 2 * N * P) * b -
                Q * P * B +
                (x * B + E * P) * w * C -
                x * M * E +
                N * O -
                2 * x * E * P * B +
                V * U,
            ]).getRootsInInterval(0, 1);
          l.removeMultipleRoots(z);
          for (var j = 0; j < z.length; j++) {
            var J = z[j],
              q = new l.Polynomial([
                E,
                C,
                v - x - J * S - J * J * I - J * J * J * R,
              ]).getRoots(),
              K = new l.Polynomial([
                B,
                w,
                b - P - J * T - J * J * F - J * J * J * D,
              ]).getRoots();
            if (q) K || (K = q);
            else {
              if (!K) return [];
              q = K;
            }
            if (q.length > 0 && K.length > 0)
              e: for (var $ = 0; $ < q.length; $++) {
                var ee = q[$];
                if (0 <= ee && ee <= 1)
                  for (var te = 0; te < K.length; te++)
                    if (Math.abs(ee - K[te]) < l.LARGE_EPS) {
                      m.push({
                        m0: J,
                        m1: ee,
                        p: _[3]
                          .scale(J * J * J)
                          .add(_[2].scale(J * J).add(_[1].scale(J).add(_[0]))),
                      });
                      break e;
                    }
              }
          }
          return m;
        }),
        (l.hitTestBezier3 = function (e, t, i, n, r, o) {
          var a, s, h, A;
          ((o = o || 0.01),
            (e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (r = this._roundPoint(r)));
          var c = [],
            p = l._calcCubicCoefficients(e, t, i, n);
          ((A = p[0]), (h = p[1]), (s = p[2]), (a = p[3]));
          var u = o * o,
            d = new l.Polynomial([
              a.getX() * a.getX() * u + a.getY() * a.getY() * u,
              2 * (a.getX() * s.getX() * u + a.getY() * s.getY() * u),
              2 * (a.getX() * h.getX() * u + a.getY() * h.getY() * u) +
                s.getX() * s.getX() * u +
                s.getY() * s.getY() * u,
              2 * a.getX() * u * (A.getX() - r.getX()) +
                2 * a.getY() * u * (A.getY() - r.getY()) +
                2 * (s.getX() * h.getX() * u + s.getY() * h.getY() * u),
              2 * s.getX() * u * (A.getX() - r.getX()) +
                2 * s.getY() * u * (A.getY() - r.getY()) +
                h.getX() * h.getX() * u +
                h.getY() * h.getY() * u,
              2 * h.getX() * u * (A.getX() - r.getX()) +
                2 * h.getY() * u * (A.getY() - r.getY()),
              A.getX() * A.getX() * u -
                2 * A.getY() * r.getY() * u -
                2 * A.getX() * r.getX() * u +
                A.getY() * A.getY() * u +
                r.getX() * r.getX() * u +
                r.getY() * r.getY() * u -
                u * u,
            ]).getRootsInInterval(0, 1);
          c = 0;
          if (d.length) {
            for (var g = 0; g < d.length; g++) {
              var f = d[g],
                m = e.lerp(t, f),
                y = t.lerp(i, f),
                _ = i.lerp(n, f),
                v = m.lerp(y, f),
                b = y.lerp(_, f);
              v.lerp(b, f);
              c += f;
            }
            return (c /= d.length);
          }
          return null;
        }),
        (l.intersectBezier3Line = function (e, t, i, n, o, a) {
          var s, h, A, c, p, u;
          ((e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (o = this._roundPoint(o)),
            (a = this._roundPoint(a)));
          var d = new r(l.SMALL_EPS, l.SMALL_EPS),
            g = r.min(o, a).subtract(d),
            f = r.max(o, a).add(d),
            m = [],
            y = l._calcCubicCoefficients(e, t, i, n);
          ((c = y[0]),
            (A = y[1]),
            (h = y[2]),
            (s = y[3]),
            (u = new r(o.getY() - a.getY(), a.getX() - o.getX())),
            (p = o.getX() * a.getY() - a.getX() * o.getY()));
          var _ = new l.Polynomial([
            u.dot(s),
            u.dot(h),
            u.dot(A),
            u.dot(c) + p,
          ]).getRoots();
          if (!_) return [];
          for (var v = 0; v < _.length; v++) {
            var b = _[v];
            if (0 <= b && b <= 1) {
              var C = e.lerp(t, b),
                w = t.lerp(i, b),
                E = i.lerp(n, b),
                B = C.lerp(w, b),
                x = w.lerp(E, b),
                P = B.lerp(x, b);
              o.getX() == a.getX()
                ? g.getY() <= P.getY() &&
                  P.getY() <= f.getY() &&
                  m.push({
                    m: b,
                    p: P,
                  })
                : o.getY() == a.getY()
                  ? g.getX() <= P.getX() &&
                    P.getX() <= f.getX() &&
                    m.push({
                      m: b,
                      p: P,
                    })
                  : g.getX() <= P.getX() &&
                    P.getX() <= f.getX() &&
                    g.getY() <= P.getY() &&
                    P.getY() <= f.getY() &&
                    m.push({
                      m: b,
                      p: P,
                    });
            }
          }
          return m;
        }),
        (l.intersectBezier3LinePrecise = function (e, t, i, n, o, a) {
          var h,
            A,
            c,
            p,
            u,
            d,
            g = l.SMALL_EPS,
            f = new r(g, g);
          ((e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (o = this._roundPoint(o)),
            (a = this._roundPoint(a)));
          var m = r.min(o, a).subtract(f),
            y = r.max(o, a).add(f),
            _ = [],
            v = l._calcCubicCoefficientsPrecise(e, t, i, n);
          ((p = v[0]),
            (c = v[1]),
            (A = v[2]),
            (h = v[3]),
            (d = [s(o.getY()).minus(s(a.getY())), s(a.getX()).minus(o.getX())]),
            (u = s(o.getX())
              .times(s(a.getY()))
              .minus(s(a.getX()).times(o.getY()))));
          var b = new l.Polynomial([
            d[0].times(h[0]).plus(d[1].times(h[1])),
            d[0].times(A[0]).plus(d[1].times(A[1])),
            d[0].times(c[0]).plus(d[1].times(c[1])),
            d[0].times(p[0]).plus(d[1].times(p[1])).plus(u),
          ]).getRoots(!0);
          if (!b) return [];
          for (var C = 0; C < b.length; C++) {
            var w = b[C];
            if (0 <= w && w <= 1) {
              var E = e.lerp(t, w),
                B = t.lerp(i, w),
                x = i.lerp(n, w),
                P = E.lerp(B, w),
                S = B.lerp(x, w),
                T = this._roundPoint(P.lerp(S, w));
              o.getX() == a.getX()
                ? m.getY() <= T.getY() &&
                  T.getY() <= y.getY() &&
                  _.push({
                    m: w,
                    p: T,
                  })
                : o.getY() == a.getY()
                  ? m.getX() <= T.getX() &&
                    T.getX() <= y.getX() &&
                    _.push({
                      m: w,
                      p: T,
                    })
                  : m.getX() <= T.getX() &&
                    T.getX() <= y.getX() &&
                    m.getY() <= T.getY() &&
                    T.getY() <= y.getY() &&
                    _.push({
                      m: w,
                      p: T,
                    });
            }
          }
          return _;
        }),
        (l._calcQuadraticCoefficients = function (e, t, i) {
          var n, o, a, s;
          return (
            (n = t.scale(-2)),
            (a = e.add(n.add(i))),
            (n = e.scale(-2)),
            (o = t.scale(2)),
            (s = n.add(o)),
            [new r(e.getX(), e.getY()), s, a]
          );
        }),
        (l._calcCubicCoefficients = function (e, t, i, n) {
          var o, a, s, l, h, A, c;
          return (
            (o = e.scale(-1)),
            (a = t.scale(3)),
            (s = i.scale(-3)),
            (l = o.add(a.add(s.add(n)))),
            (h = new r(l.getX(), l.getY())),
            (o = e.scale(3)),
            (a = t.scale(-6)),
            (s = i.scale(3)),
            (l = o.add(a.add(s))),
            (A = new r(l.getX(), l.getY())),
            (o = e.scale(-3)),
            (a = t.scale(3)),
            (s = o.add(a)),
            (c = new r(s.getX(), s.getY())),
            [new r(e.getX(), e.getY()), c, A, h]
          );
        }),
        (l._calcCubicCoefficientsPrecise = function (e, t, i, n) {
          var r,
            o,
            a,
            l,
            h,
            A,
            c,
            p,
            u = s(e.getX()),
            d = s(e.getY()),
            g = s(t.getX()),
            f = s(t.getY()),
            m = s(i.getX()),
            y = s(i.getY()),
            _ = s(n.getX()),
            v = s(n.getY());
          return (
            (r = u.times(-1)),
            (o = d.times(-1)),
            (a = g.times(3)),
            (l = f.times(3)),
            (h = m.times(-3)),
            (A = y.times(-3)),
            (c = [r.plus(a).plus(h).plus(_), o.plus(l).plus(A).plus(v)]),
            (r = u.times(3)),
            (o = d.times(3)),
            (a = g.times(-6)),
            (l = f.times(-6)),
            (h = m.times(3)),
            (A = y.times(3)),
            (p = [r.plus(a).plus(h), o.plus(l).plus(A)]),
            (r = u.times(-3)),
            (o = d.times(-3)),
            (a = g.times(3)),
            (l = f.times(3)),
            [[u, d], [(h = r.plus(a)), (A = o.plus(l))], p, c]
          );
        }),
        (l.intersectBezier3Bezier3 = function (e, t, i, n, o, a, s, h, A) {
          var c,
            p,
            u,
            d,
            g,
            f,
            m,
            y,
            _ = [];
          ((e = this._roundPoint(e)),
            (t = this._roundPoint(t)),
            (i = this._roundPoint(i)),
            (n = this._roundPoint(n)),
            (o = this._roundPoint(o)),
            (a = this._roundPoint(a)),
            (s = this._roundPoint(s)),
            (h = this._roundPoint(h)));
          var v = r.min(e, t, i, n, o, a, s, h);
          (v.getX() < 0 && (v = new r(-v.getX(), v.getY())),
            v.getY() < 0 && (v = new r(v.getX(), -v.getY())));
          var b = l._calcCubicCoefficients(o, a, s, h),
            C = l._calcCubicCoefficients(
              e.subtract(v),
              t.subtract(v),
              i.subtract(v),
              n.subtract(v),
            );
          ((d = C[0]),
            (u = C[1]),
            (p = C[2]),
            (c = C[3]),
            (y = (C = l._calcCubicCoefficients(
              o.subtract(v),
              a.subtract(v),
              s.subtract(v),
              h.subtract(v),
            ))[0]),
            (m = C[1]),
            (f = C[2]),
            (g = C[3]));
          var w = d.getX(),
            E = d.getY(),
            B = u.getX(),
            x = u.getY(),
            P = p.getX(),
            S = p.getY(),
            T = c.getX(),
            I = c.getY(),
            F = y.getX(),
            R = y.getY(),
            D = m.getX(),
            k = m.getY(),
            G = f.getX(),
            Q = f.getY(),
            M = g.getX(),
            N = g.getY(),
            U = l.bezoutResultant(
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
            ),
            V = new l.Polynomial(U),
            O = V.getRootsInInterval(0, 1);
          l.removeMultipleRoots(O);
          for (var L = [], Y = 0; Y < O.length; Y++) {
            var X = O[Y],
              H = new l.Polynomial([
                T,
                P,
                B,
                w - F - X * D - X * X * G - X * X * X * M,
              ]).getRoots(),
              W = new l.Polynomial([
                I,
                S,
                x,
                E - R - X * k - X * X * Q - X * X * X * N,
              ]).getRoots();
            if (H) W || (W = H);
            else {
              if (!W) return [];
              H = W;
            }
            if (H.length > 0 && W.length > 0) {
              var Z = 1e-4;
              e: for (var z = 0; z < H.length; z++) {
                var j = H[z];
                if (0 <= j && j <= 1)
                  for (var J = 0; J < W.length; J++)
                    if (Math.abs(j - W[J]) < Z) {
                      (A && L.push(j),
                        _.push({
                          m0: X,
                          m1: j,
                          p: b[3]
                            .scale(X * X * X)
                            .add(
                              b[2].scale(X * X).add(b[1].scale(X).add(b[0])),
                            ),
                        }));
                      break e;
                    }
              }
            }
          }
          if (A) {
            ((U = l.bezoutResultant(
              F,
              R,
              D,
              k,
              G,
              Q,
              M,
              N,
              w,
              E,
              B,
              x,
              P,
              S,
              T,
              I,
            )),
              (O = (V = new l.Polynomial(U)).getRootsInInterval(0, 1)),
              l.removeMultipleRoots(O));
            for (Y = 0; Y < O.length; Y++) {
              var q = O[Y],
                K = !1;
              for (z = 0; z < L.length; z++)
                if (Math.abs(L[z] - q) < Z) {
                  K = !0;
                  break;
                }
              if (!K) {
                ((H = new l.Polynomial([
                  M,
                  G,
                  D,
                  F - w - q * B - q * q * P - q * q * q * T,
                ]).getRoots()),
                  (W = new l.Polynomial([
                    N,
                    Q,
                    k,
                    R - E - q * x - q * q * S - q * q * q * I,
                  ]).getRoots()));
                if (H) W || (W = H);
                else {
                  if (!W) return [];
                  H = W;
                }
                if (H.length > 0 && W.length > 0) {
                  Z = 1e-4;
                  e: for (z = 0; z < H.length; z++) {
                    if (0 <= (X = H[z]) && X <= 1)
                      for (J = 0; J < W.length; J++)
                        if (Math.abs(X - W[J]) < Z) {
                          _.push({
                            m0: X,
                            m1: q,
                            p: b[3]
                              .scale(X * X * X)
                              .add(
                                b[2].scale(X * X).add(b[1].scale(X).add(b[0])),
                              ),
                          });
                          break e;
                        }
                  }
                }
              }
            }
          }
          return _;
        }),
        (l._roundPoint = function (e) {
          return new r(
            Number(e.getX().toFixed(l.LOG_EPS)),
            Number(e.getY().toFixed(l.LOG_EPS)),
          );
        }),
        (l._lerpPrecise = function (e, t, i) {
          var n, r, o, a;
          return (
            e instanceof Array
              ? ((n = e[0]), (r = e[1]))
              : ((n = s(n)), (r = s(r))),
            t instanceof Array
              ? ((o = t[0]), (a = t[1]))
              : ((o = s(o)), (a = s(a))),
            a instanceof s || (a = s(r)),
            [n.plus(o.minus(n).times(i)), r.plus(a.minus(r).times(i))]
          );
        }),
        (l.bezoutResultant = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          h,
          A,
          c,
          p,
          u,
          d,
          g,
        ) {
          var f = e * e,
            m = t * t,
            y = i * i,
            _ = i * i * i,
            v = n * n,
            b = n * n * n,
            C = r * r,
            w = r * r * r,
            E = o * o,
            B = o * o * o,
            x = a * a,
            P = a * a * a,
            S = s * s,
            T = s * s * s,
            I = l * l,
            F = h * h,
            R = A * A,
            D = c * c,
            k = p * p,
            G = u * u,
            Q = d * d,
            M = g * g;
          return [
            -P * (g * g * g) +
              T * (d * d * d) -
              3 * a * S * Q * g +
              3 * x * s * d * M,
            -3 * P * u * M +
              (6 * u * d * g + 3 * p * M) * s * x +
              (-6 * p * d * g - 3 * u * Q) * S * a +
              3 * p * T * Q,
            (-3 * c * M - 3 * G * g) * P +
              (3 * A * M + 6 * p * u * g + 6 * d * c * g + 3 * d * G) * s * x +
              (-6 * p * u * d - 3 * c * Q - 6 * A * d * g - 3 * k * g) * S * a +
              (3 * k * d + 3 * A * Q) * T,
            (6 * a * S * d * g - 3 * x * s * M - 3 * T * Q) * e +
              (3 * a * S * Q - 6 * x * s * d * g + 3 * P * M) * t +
              ((-3 * S * d * g + 3 * a * s * M) * r +
                (S * Q - 2 * x * M + a * s * d * g) * o) *
                i +
              ((-x * M + 2 * S * Q - a * s * d * g) * r +
                (3 * x * d * g - 3 * a * s * Q) * o) *
                n -
              w * s * M +
              (a * M + 2 * s * d * g) * o * C +
              (-s * Q - 2 * a * d * g) * E * r +
              B * a * Q +
              (-3 * h * M - 6 * c * u * g - u * u * u) * P +
              (3 * l * M +
                6 * d * h * g +
                6 * A * u * g +
                (6 * u * d + 6 * p * g) * c +
                3 * p * G) *
                s *
                x +
              (-6 * l * d * g -
                3 * h * Q +
                (-6 * p * g - 6 * u * d) * A -
                6 * c * p * d -
                3 * k * u) *
                S *
                a +
              (3 * l * Q + p * p * p + 6 * A * p * d) * T,
            (-6 * x * s * u * g +
              (6 * u * d + 6 * p * g) * S * a -
              6 * p * T * d) *
              e +
              (6 * P * u * g +
                (-6 * p * g - 6 * u * d) * s * x +
                6 * a * p * S * d) *
                t +
              ((6 * a * s * u * g + (-3 * p * g - 3 * u * d) * S) * r +
                (-4 * x * u * g + (p * g + u * d) * s * a + 2 * p * S * d) *
                  o) *
                i +
              ((-2 * x * u * g + (-p * g - u * d) * s * a + 4 * p * S * d) * r +
                ((3 * u * d + 3 * p * g) * x - 6 * a * p * s * d) * o) *
                n -
              2 * w * s * u * g +
              (2 * a * u * g + (2 * u * d + 2 * p * g) * s) * o * C +
              ((-2 * u * d - 2 * p * g) * a - 2 * p * s * d) * E * r +
              2 * B * a * p * d +
              (-3 * g * D - 6 * h * u * g - 3 * c * G) * P +
              (6 * l * u * g +
                (6 * u * d + 6 * p * g) * h +
                (6 * c * g + 3 * G) * A +
                6 * p * c * u +
                3 * d * D) *
                s *
                x +
              ((-6 * p * g - 6 * u * d) * l -
                6 * h * p * d -
                3 * R * g +
                (-6 * p * u - 6 * c * d) * A -
                3 * c * k) *
                S *
                a +
              (3 * A * k + 3 * R * d + 6 * l * p * d) * T,
            ((-6 * c * g - 3 * G) * s * x +
              (6 * c * d + 6 * A * g + 6 * p * u) * S * a +
              (-6 * A * d - 3 * k) * T) *
              e +
              ((6 * c * g + 3 * G) * P +
                (-6 * p * u - 6 * c * d - 6 * A * g) * s * x +
                (3 * k + 6 * A * d) * S * a) *
                t +
              (((6 * c * g + 3 * G) * s * a +
                (-3 * c * d - 3 * A * g - 3 * p * u) * S) *
                r +
                ((-4 * c * g - 2 * G) * x +
                  (p * u + A * g + c * d) * s * a +
                  (2 * A * d + k) * S) *
                  o) *
                i +
              (((-2 * c * g - G) * x +
                (-c * d - p * u - A * g) * s * a +
                (2 * k + 4 * A * d) * S) *
                r +
                ((3 * p * u + 3 * c * d + 3 * A * g) * x +
                  (-6 * A * d - 3 * k) * s * a) *
                  o) *
                n +
              w * s * (-2 * c * g - G) +
              ((2 * c * g + G) * a + (2 * A * g + 2 * c * d + 2 * p * u) * s) *
                o *
                C +
              ((-2 * A * g - 2 * c * d - 2 * p * u) * a +
                (-k - 2 * A * d) * s) *
                E *
                r +
              (2 * A * d + k) * a * B +
              ((-6 * c * g - 3 * G) * h - 3 * u * D) * P +
              ((6 * c * g + 3 * G) * l +
                (6 * c * d + 6 * A * g + 6 * p * u) * h +
                3 * p * D +
                6 * A * c * u) *
                s *
                x +
              ((-6 * p * u - 6 * c * d - 6 * A * g) * l +
                (-6 * A * d - 3 * k) * h -
                3 * R * u -
                6 * A * c * p) *
                S *
                a +
              ((3 * k + 6 * A * d) * l + 3 * R * p) * T,
            (-3 * a * S * g + 3 * T * d) * f +
              ((6 * x * s * g - 6 * a * S * d) * t +
                (3 * r * S * g + (-2 * S * d - a * s * g) * o) * i +
                ((-4 * S * d + a * s * g) * r +
                  (6 * a * s * d - 3 * x * g) * o) *
                  n -
                2 * C * o * s * g +
                (2 * a * g + 2 * s * d) * E * r -
                2 * B * a * d +
                (-6 * h * g - 6 * c * u) * s * x +
                (6 * h * d + 6 * c * p + 6 * l * g + 6 * A * u) * S * a +
                (-6 * l * d - 6 * A * p) * T) *
                e +
              (-3 * P * g + 3 * x * s * d) * m +
              (((3 * S * d - 6 * a * s * g) * r + (4 * x * g - a * s * d) * o) *
                i +
                ((a * s * d + 2 * x * g) * r - 3 * o * x * d) * n +
                2 * w * s * g +
                (-2 * s * d - 2 * a * g) * o * C +
                2 * r * E * a * d +
                (6 * h * g + 6 * c * u) * P +
                (-6 * l * g - 6 * A * u - 6 * c * p - 6 * h * d) * s * x +
                (6 * l * d + 6 * A * p) * S * a) *
                t -
              _ * S * g +
              ((2 * a * s * g + S * d) * n - E * a * g + r * o * s * g) * y +
              ((-x * g - 2 * a * s * d) * v +
                (-C * s * g + (-s * d + a * g) * o * r + E * a * d) * n +
                ((6 * h * g + 6 * c * u) * s * a +
                  (-3 * c * p - 3 * A * u - 3 * h * d - 3 * l * g) * S) *
                  r +
                ((-4 * h * g - 4 * c * u) * x +
                  (l * g + c * p + A * u + h * d) * s * a +
                  (2 * A * p + 2 * l * d) * S) *
                  o) *
                i +
              b * x * d +
              (-r * o * a * d + C * s * d) * v +
              (((-2 * h * g - 2 * c * u) * x +
                (-A * u - l * g - h * d - c * p) * s * a +
                (4 * A * p + 4 * l * d) * S) *
                r +
                ((3 * c * p + 3 * A * u + 3 * l * g + 3 * h * d) * x +
                  (-6 * l * d - 6 * A * p) * s * a) *
                  o) *
                n +
              w * s * (-2 * h * g - 2 * c * u) +
              ((2 * h * g + 2 * c * u) * a +
                (2 * l * g + 2 * A * u + 2 * c * p + 2 * h * d) * s) *
                o *
                C +
              ((-2 * l * g - 2 * c * p - 2 * A * u - 2 * h * d) * a +
                (-2 * A * p - 2 * l * d) * s) *
                E *
                r +
              (2 * A * p + 2 * l * d) * a * B +
              (-3 * F * g - c * c * c - 6 * h * c * u) * P +
              ((6 * h * g + 6 * c * u) * l +
                3 * F * d +
                (6 * c * p + 6 * A * u) * h +
                3 * A * D) *
                s *
                x +
              (-3 * I * g +
                (-6 * A * u - 6 * c * p - 6 * h * d) * l -
                6 * h * A * p -
                3 * R * c) *
                S *
                a +
              (3 * I * d + A * A * A + 6 * l * A * p) * T,
            (3 * p * T - 3 * a * S * u) * f +
              ((-6 * a * p * S + 6 * x * s * u) * t +
                (3 * r * S * u + (-2 * p * S - a * s * u) * o) * i +
                ((-4 * p * S + a * s * u) * r +
                  (6 * a * p * s - 3 * x * u) * o) *
                  n -
                2 * C * o * s * u +
                (2 * a * u + 2 * p * s) * E * r -
                2 * B * a * p +
                (-6 * h * u - 3 * D) * s * x +
                (6 * A * c + 6 * l * u + 6 * h * p) * S * a +
                (-3 * R - 6 * l * p) * T) *
                e +
              (-3 * P * u + 3 * x * p * s) * m +
              (((-6 * a * s * u + 3 * p * S) * r +
                (4 * x * u - a * p * s) * o) *
                i +
                ((a * p * s + 2 * x * u) * r - 3 * o * x * p) * n +
                2 * w * s * u +
                (-2 * p * s - 2 * a * u) * o * C +
                2 * r * E * a * p +
                (6 * h * u + 3 * D) * P +
                (-6 * A * c - 6 * h * p - 6 * l * u) * s * x +
                (3 * R + 6 * l * p) * S * a) *
                t -
              _ * S * u +
              ((2 * a * s * u + p * S) * n - E * a * u + r * o * s * u) * y +
              ((-2 * a * p * s - x * u) * v +
                (-C * s * u + (a * u - p * s) * o * r + E * a * p) * n +
                ((6 * h * u + 3 * D) * s * a +
                  (-3 * A * c - 3 * h * p - 3 * l * u) * S) *
                  r +
                ((-4 * h * u - 2 * D) * x +
                  (l * u + h * p + A * c) * s * a +
                  (2 * l * p + R) * S) *
                  o) *
                i +
              b * x * p +
              (-r * o * a * p + C * p * s) * v +
              (((-2 * h * u - D) * x +
                (-l * u - A * c - h * p) * s * a +
                (2 * R + 4 * l * p) * S) *
                r +
                ((3 * A * c + 3 * h * p + 3 * l * u) * x +
                  (-3 * R - 6 * l * p) * s * a) *
                  o) *
                n +
              w * s * (-2 * h * u - D) +
              ((2 * h * u + D) * a + (2 * l * u + 2 * A * c + 2 * h * p) * s) *
                o *
                C +
              ((-2 * A * c - 2 * h * p - 2 * l * u) * a +
                (-R - 2 * l * p) * s) *
                E *
                r +
              (2 * l * p + R) * a * B +
              (-3 * h * D - 3 * F * u) * P +
              ((6 * h * u + 3 * D) * l + 6 * h * A * c + 3 * F * p) * s * x +
              (-3 * I * u + (-6 * A * c - 6 * h * p) * l - 3 * h * R) * S * a +
              (3 * I * p + 3 * l * R) * T,
            (-3 * a * c * S + 3 * A * T) * f +
              ((-6 * A * a * S + 6 * x * c * s) * t +
                (3 * r * c * S + (-2 * A * S - a * c * s) * o) * i +
                ((a * c * s - 4 * A * S) * r +
                  (-3 * x * c + 6 * A * a * s) * o) *
                  n -
                2 * C * o * c * s +
                (2 * a * c + 2 * A * s) * E * r -
                2 * A * B * a -
                6 * h * x * c * s +
                (6 * l * c + 6 * h * A) * S * a -
                6 * l * A * T) *
                e +
              (-3 * P * c + 3 * A * x * s) * m +
              (((3 * A * S - 6 * a * c * s) * r + (4 * x * c - A * a * s) * o) *
                i +
                ((2 * x * c + A * a * s) * r - 3 * A * o * x) * n +
                2 * w * s * c +
                (-2 * A * s - 2 * a * c) * o * C +
                2 * r * A * E * a +
                6 * P * h * c +
                (-6 * l * c - 6 * h * A) * s * x +
                6 * l * A * a * S) *
                t -
              _ * c * S +
              ((A * S + 2 * a * c * s) * n + r * o * c * s - E * a * c) * y +
              ((-2 * A * a * s - x * c) * v +
                (-C * c * s + (a * c - A * s) * o * r + A * E * a) * n +
                (6 * h * a * c * s + (-3 * h * A - 3 * l * c) * S) * r +
                (-4 * h * x * c + (l * c + h * A) * s * a + 2 * l * A * S) *
                  o) *
                i +
              b * A * x +
              (C * A * s - r * A * o * a) * v +
              ((-2 * h * x * c + (-l * c - h * A) * s * a + 4 * l * A * S) * r +
                ((3 * l * c + 3 * h * A) * x - 6 * l * A * a * s) * o) *
                n -
              2 * w * h * c * s +
              (2 * h * a * c + (2 * l * c + 2 * h * A) * s) * o * C +
              ((-2 * h * A - 2 * l * c) * a - 2 * l * A * s) * E * r +
              2 * l * A * B * a -
              3 * F * P * c +
              (6 * l * h * c + 3 * F * A) * s * x +
              (-3 * I * c - 6 * l * h * A) * S * a +
              3 * I * A * T,
            -(e * e * e) * T +
              (3 * t * a * S +
                i * o * S +
                (2 * r * S - 3 * o * a * s) * n -
                r * E * s +
                3 * l * T +
                B * a -
                3 * h * a * S) *
                f +
              (-3 * m * x * s +
                ((o * a * s - 3 * r * S) * i +
                  (-r * a * s + 3 * o * x) * n -
                  6 * l * a * S +
                  2 * C * o * s -
                  2 * r * E * a +
                  6 * h * x * s) *
                  t -
                y * n * S +
                (2 * v * a * s +
                  (r * o * s - E * a) * n +
                  3 * r * h * S +
                  (-h * a * s - 2 * l * S) * o) *
                  i -
                b * x +
                (-C * s + r * o * a) * v +
                ((h * a * s - 4 * l * S) * r +
                  (6 * l * a * s - 3 * h * x) * o) *
                  n -
                2 * C * h * o * s +
                (2 * l * s + 2 * h * a) * E * r -
                3 * F * x * s +
                6 * l * h * a * S -
                3 * I * T -
                2 * l * B * a) *
                e +
              t * t * t * P +
              ((-2 * o * x + 3 * r * a * s) * i -
                3 * P * h +
                C * o * a -
                w * s +
                3 * l * x * s -
                n * r * x) *
                m +
              (_ * S +
                (E * a - r * o * s - 2 * n * a * s) * y +
                (v * x +
                  (-r * o * a + C * s) * n +
                  (3 * l * S - 6 * h * a * s) * r +
                  (4 * h * x - l * a * s) * o) *
                  i +
                ((l * a * s + 2 * h * x) * r - 3 * l * o * x) * n +
                2 * w * s * h +
                (-2 * h * a - 2 * l * s) * o * C +
                2 * l * r * E * a -
                6 * l * x * s * h +
                3 * P * F +
                3 * I * a * S) *
                t -
              _ * h * S +
              ((2 * h * a * s + l * S) * n - h * E * a + r * h * o * s) * y +
              ((-2 * l * a * s - h * x) * v +
                (-C * h * s + (-l * s + h * a) * o * r + l * E * a) * n +
                (3 * F * a * s - 3 * l * h * S) * r +
                (l * h * a * s - 2 * F * x + I * S) * o) *
                i +
              l * b * x +
              (l * C * s - l * r * o * a) * v +
              ((-F * x - l * h * a * s + 2 * I * S) * r +
                (-3 * I * a * s + 3 * l * h * x) * o) *
                n -
              w * F * s +
              (2 * l * s * h + F * a) * o * C +
              (-I * s - 2 * l * h * a) * E * r +
              l * l * l * T +
              I * B * a -
              3 * I * h * a * S -
              h * h * h * P +
              3 * l * F * x * s,
          ];
        }),
        (l.Polynomial = function (e) {
          ((this.coefs = e ? e.reverse() : []),
            (this._scaled = !1),
            (this.jt = new l.JenkinsTraub()));
        }),
        (l.Polynomial.TOLERANCE = 1e-6),
        (l.Polynomial.ACCURACY = 10),
        (l.Polynomial.prototype.coefs = null),
        (l.Polynomial.prototype._scaled = !1),
        (l.Polynomial.prototype.jt = null),
        (l.Polynomial.prototype.scale = function (e) {
          var t,
            i = this.getDegree(),
            r = this.coefs[i],
            o = -1,
            a = i;
          if (!this._scaled)
            if (((this._scaled = !0), e))
              try {
                for (; --a >= 0; ) {
                  ((this.coefs[a] = this.coefs[a].div(r)),
                    (s = Math.pow(this.coefs[a].abs(), 1 / (i - a))) > o &&
                      ((o = s), a));
                }
                for (a = 1, t = o; a <= i; a++, t *= o)
                  this.coefs[n - a] = this.coefs[n - a].div(t);
              } catch (e) {}
            else {
              for (; --a >= 0; ) {
                var s;
                ((this.coefs[a] = this.coefs[a] / r),
                  (s = Math.pow(Math.abs(this.coefs[a]), 1 / (i - a))) > o &&
                    ((o = s), a));
              }
              for (a = 1, t = o; a <= i; a++, t *= o) this.coefs[n - a] /= t;
            }
        }),
        (l.Polynomial.prototype.simplify = function (e) {
          if (e)
            for (
              var t = this.getDegree();
              t >= 0 && this.coefs[t].abs().lte(0);
              t--
            )
              this.coefs.pop();
          else
            for (
              t = this.getDegree();
              t >= 0 && Math.abs(this.coefs[t]) <= l.Polynomial.TOLERANCE;
              t--
            )
              this.coefs.pop();
        }),
        (l.Polynomial.prototype.getDegree = function () {
          return this.coefs.length - 1;
        }),
        (l.Polynomial.prototype.getRoots = function (e) {
          this.simplify(e);
          var t = null;
          switch (this.getDegree()) {
            case -1:
              break;
            case 0:
              t = [];
              break;
            case 1:
              t = e ? this.getLinearRootPrecise() : this.getLinearRoot();
              break;
            case 2:
              t = e
                ? this.getQuadraticRootsPrecise()
                : this.getQuadraticRoots();
              break;
            default:
              t = [];
              var i = [],
                n = [];
              this.jt.rpSolve(this, i, n);
              for (var r = 0; r < i.length; r++) 0 === n[r] && t.push(i[r]);
          }
          return t;
        }),
        (l.Polynomial.prototype.getLinearRoot = function (e) {
          var t = [],
            i = e || this.coefs,
            n = i[1];
          return (n && t.push(-i[0] / n), t);
        }),
        (l.Polynomial.prototype.getLinearRootPrecise = function () {
          var e = [],
            t = this.coefs,
            i = t[1];
          if (i) {
            var n = 0;
            try {
              ((n = Number(t[0].times(-1).div(i))), e.push(n));
            } catch (e) {}
          }
          return e;
        }),
        (l.Polynomial.prototype.getQuadraticRoots = function (e) {
          var t = [],
            i = e || this.coefs;
          if (2 == this.getDegree()) {
            var n = i[2],
              r = i[1] / n,
              o = r * r - 4 * (i[0] / n);
            if (o > 0) {
              var a = Math.sqrt(o);
              (t.push(0.5 * (-r + a)), t.push(0.5 * (-r - a)));
            } else 0 == o && t.push(0.5 * -r);
          }
          return t;
        }),
        (l.Polynomial.prototype.getQuadraticRootsPrecise = function () {
          var e = [],
            t = this.coefs;
          if (2 == this.getDegree())
            try {
              var i = t[2],
                n = t[1].div(i),
                r = t[0].div(i),
                o = n.times(n).minus(r.times(4));
              if (o.gt(0)) {
                var a = o.sqrt();
                (e.push(Number(a.minus(n).div(2))),
                  e.push(Number(a.times(-1).minus(n).div(2))));
              } else o.eq(0) && e.push(Number(n.div(-2)));
            } catch (e) {}
          return e;
        }),
        (l.Polynomial.prototype.getCubicRootsAnal = function () {
          var e,
            t = this.coefs[3],
            i = this.coefs[2],
            n = this.coefs[1],
            r = function (e) {
              var t = Math.pow(Math.abs(e), 1 / 3);
              return e < 0 ? -t : t;
            },
            o = (3 * t * n - i * i) / (3 * t * t),
            a =
              (2 * i * i * i - 9 * t * i * n + 27 * t * t * this.coefs[0]) /
              (27 * t * t * t);
          if (Math.abs(o) < l.SMALL_EPS) e = [r(-a)];
          else if (Math.abs(a) < l.SMALL_EPS)
            e = [0].concat(o < 0 ? [Math.sqrt(-o), -Math.sqrt(-o)] : []);
          else {
            var s = (a * a) / 4 + (o * o * o) / 27;
            if (Math.abs(s) < l.SMALL_EPS) e = [(-1.5 * a) / o, (3 * a) / o];
            else if (s > 0) {
              e = 0 === (h = r(-a / 2 - Math.sqrt(s))) ? [] : [h - o / (3 * h)];
            } else {
              var h = 2 * Math.sqrt(-o / 3),
                A = Math.acos((3 * a) / o / h) / 3,
                c = (2 * Math.PI) / 3;
              e = [
                h * Math.cos(A),
                h * Math.cos(A - c),
                h * Math.cos(A - 2 * c),
              ];
            }
          }
          for (var p = 0; p < e.length; p++) e[p] -= i / (3 * t);
          return e;
        }),
        (l.Polynomial.prototype.getCubicRootsAnalPrecise = function () {
          var e = this.coefs[3],
            t = this.coefs[2],
            i = this.coefs[1],
            n = this.coefs[0],
            r = function (e) {
              var t = Math.pow(Math.abs(e), 1 / 3);
              return e < 0 ? -t : t;
            };
          try {
            var o = e
                .times(i)
                .times(3)
                .minus(t.times(t))
                .div(e.times(e).times(3)),
              a = t
                .times(t)
                .times(t)
                .times(2)
                .minus(e.times(t).times(i).times(9))
                .plus(e.times(e).times(n).times(27))
                .div(e.times(e).times(e).times(27)),
              s = [];
            if (o.abs().lte(l.TINY_EPS)) s = [r(Number(a.times(-1)))];
            else if (a.abs().lte(l.TINY_EPS))
              s = [0].concat(
                o.lte(0)
                  ? [
                      Number(o.times(-1).sqrt()),
                      Number(o.times(-1).sqrt().times(-1)),
                    ]
                  : [],
              );
            else {
              var h = a.times(a).div(4).plus(o.times(o).times(o).div(27));
              if (h.abs().lte(l.TINY_EPS))
                (s = [
                  Number(a.div(o).times(-1.5)),
                  Number(a.div(o).times(3)),
                ])[0] === s[1] && (s = s.pop());
              else if (h.gt(0)) {
                s = [
                  (A = r(Number(a.div(2).times(-1).minus(h.sqrt())))) -
                    Number(o.div(3 * A)),
                ];
              } else {
                var A = Number(o.times(-1).div(3).sqrt().times(2)),
                  c = Number(Math.acos(Number(a.times(3).div(o).div(A))) / 3),
                  p = (2 * Math.PI) / 3;
                (s = [
                  A * Math.cos(c),
                  A * Math.cos(c - p),
                  A * Math.cos(c - 2 * p),
                ])[0] == s[1]
                  ? (s.shift(), s[0] == s[1] && s.pop())
                  : (s[1] == s[2] || s[0] == s[2]) &&
                    (s.pop(), s[0] == s[1] && s.pop());
              }
            }
            for (var u = Number(t.div(e.times(3))), d = 0; d < s.length; d++)
              s[d] -= u;
          } catch (e) {}
          return s;
        }),
        (l.Polynomial.prototype.getCubicRoots = function (e) {
          var t = [];
          if (3 == this.getDegree())
            if (e) {
              t = this.getCubicRootsAnalPrecise();
              for (var i = 0, n = 0; n < t.length; n++) {
                var r = t[n];
                r >= 0 && r <= 1 && i++;
              }
              if (i < 3) {
                var o = [];
                a.getCubicRoots(
                  [this.coefs[3], this.coefs[2], this.coefs[1], this.coefs[0]],
                  0,
                  1,
                  o,
                  !0,
                  l.Polynomial.TOLERANCE,
                );
                for (n = 0; n < o.length; n++) {
                  for (
                    var s = 0;
                    s < t.length &&
                    !a.isEqualEps(o[n], t[s], l.Polynomial.TOLERANCE);
                    s++
                  );
                  if (
                    s === t.length &&
                    (console.log("putting some unfound!"),
                    t.push(o[n]),
                    3 === t.length)
                  )
                    break;
                }
              }
            } else
              a.getCubicRoots(
                [this.coefs[3], this.coefs[2], this.coefs[1], this.coefs[0]],
                0,
                1,
                t,
                !0,
                l.Polynomial.TOLERANCE,
              );
          return t;
        }),
        (l.Polynomial.prototype.getQuarticRoots = function () {
          var e = [];
          if (4 == this.getDegree()) {
            var t = this.coefs[4],
              i = this.coefs[3] / t,
              n = this.coefs[2] / t,
              r = this.coefs[1] / t,
              o = this.coefs[0] / t,
              a = new l.Polynomial([
                1,
                -n,
                i * r - 4 * o,
                -i * i * o + 4 * n * o - r * r,
              ]).getCubicRootsAnal()[0],
              s = (i * i) / 4 - n + a;
            if ((Math.abs(s) <= l.Polynomial.TOLERANCE && (s = 0), s > 0)) {
              var h = Math.sqrt(s),
                A = (3 * i * i) / 4 - h * h - 2 * n,
                c = (4 * i * n - 8 * r - i * i * i) / (4 * h),
                p = A + c,
                u = A - c;
              if (
                (Math.abs(p) <= l.Polynomial.TOLERANCE && (p = 0),
                Math.abs(u) <= l.Polynomial.TOLERANCE && (u = 0),
                p >= 0)
              ) {
                var d = Math.sqrt(p);
                (e.push(-i / 4 + (h + d) / 2), e.push(-i / 4 + (h - d) / 2));
              }
              if (u >= 0) {
                var g = Math.sqrt(u);
                (e.push(-i / 4 + (g - h) / 2), e.push(-i / 4 - (g + h) / 2));
              }
            } else if (s < 0);
            else {
              var f = a * a - 4 * o;
              if (f >= -l.Polynomial.TOLERANCE) {
                f < 0 && (f = 0);
                var m = (3 * i * i) / 4 - 2 * n;
                if (m + (f = 2 * Math.sqrt(f)) >= l.Polynomial.TOLERANCE) {
                  var y = Math.sqrt(m + f);
                  (e.push(-i / 4 + y / 2), e.push(-i / 4 - y / 2));
                }
                if (m - f >= l.Polynomial.TOLERANCE) {
                  var _ = Math.sqrt(m - f);
                  (e.push(-i / 4 + _ / 2), e.push(-i / 4 - _ / 2));
                }
              }
            }
          }
          return e;
        }),
        (l.Polynomial.prototype.getRootsInInterval = function (e, t) {
          var i = [],
            n = [],
            r = [],
            o = l.SMALL_EPS;
          this.jt.rpSolve(this, n, r);
          for (var a = 0; a < n.length; a++)
            if (0 === r[a]) {
              var s = n[a];
              s < e && s > e - o
                ? ((s = e), i.push(s))
                : s > t && s < t + o
                  ? ((s = t), i.push(s))
                  : s <= t && s >= e && i.push(s);
            }
          return i;
        }),
        (l.Polynomial.prototype.getRootsInIntervalBisection = function (e, t) {
          var i = [],
            n = NaN;
          if (1 == this.getDegree())
            ((n = this.bisection(e, t)), isNaN(n) || i.push(n));
          else {
            var r = this.getDerivative().getRootsInInterval(e, t);
            if (r.length > 0) {
              ((n = this.bisection(e, r[0])), isNaN(n) || i.push(n));
              for (var o = 0; o <= r.length - 2; o++)
                ((n = this.bisection(r[o], r[o + 1])), isNaN(n) || i.push(n));
              ((n = this.bisection(r[r.length - 1], t)), isNaN(n) || i.push(n));
            } else ((n = this.bisection(e, t)), isNaN(n) || i.push(n));
          }
          return i;
        }),
        (l.Polynomial.prototype.bisection = function (e, t) {
          var i = this.eval(e),
            n = this.eval(t),
            r = NaN;
          if (Math.abs(i) <= l.Polynomial.TOLERANCE) r = e;
          else if (Math.abs(n) <= l.Polynomial.TOLERANCE) r = t;
          else if (i * n <= 0)
            for (
              var o = Math.log(t - e),
                a = Math.LN10 * l.Polynomial.ACCURACY,
                s = Math.ceil((o + a) / Math.LN2),
                h = 0;
              h < s;
              h++
            ) {
              r = 0.5 * (e + t);
              var A = this.eval(r);
              if (Math.abs(A) <= l.Polynomial.TOLERANCE) break;
              A * i < 0 ? ((t = r), (n = A)) : ((e = r), (i = A));
            }
          return r;
        }),
        (l.Polynomial.prototype.eval = function (e) {
          if (isNaN(e))
            throw new Error("Polynomial.eval: parameter must be a number");
          for (var t = 0, i = this.coefs.length - 1; i >= 0; i--)
            t = t * e + this.coefs[i];
          return t;
        }),
        (l.Polynomial.prototype.getDerivative = function () {
          for (var e = new l.Polynomial(), t = 1; t < this.coefs.length; t++)
            e.coefs.push(t * this.coefs[t]);
          return e;
        }),
        (l.removeMultipleRoots = function (e) {
          e.sort(function (e, t) {
            return e - t;
          });
          for (var t = 1; t < e.length; )
            Math.abs(e[t] - e[t - 1]) < l.TINY_EPS ? e.splice(t, 1) : t++;
        }),
        (l.JenkinsTraub = function () {}),
        (l.JenkinsTraub.prototype.quadSD = function (e, t, i, n, r, o) {
          ((r[0] = o.b = n[0]), (r[1] = o.a = -t * o.b + n[1]));
          for (var a = 2; a < e; a++)
            ((r[a] = -(t * o.a + i * o.b) + n[a]), (o.b = o.a), (o.a = r[a]));
        }),
        (l.JenkinsTraub.prototype.calcSC = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
        ) {
          var h = new Object(),
            A = 3;
          return (
            (h.b = h.a = 0),
            this.quadSD(t, a, s, o, l, h),
            (r.c = h.a),
            (r.d = h.b),
            (Math.abs(r.c) <= 100 * e * Math.abs(o[t - 1]) &&
              Math.abs(r.d) <= 100 * e * Math.abs(o[t - 2])) ||
              ((r.h = s * n),
              Math.abs(r.d) >= Math.abs(r.c)
                ? ((A = 2),
                  (r.e = i / r.d),
                  (r.f = r.c / r.d),
                  (r.g = a * n),
                  (r.a3 = r.e * (r.g + i) + r.h * (n / r.d)),
                  (r.a1 = -i + r.f * n),
                  (r.a7 = r.h + (r.f + a) * i))
                : ((A = 1),
                  (r.e = i / r.c),
                  (r.f = r.d / r.c),
                  (r.g = r.e * a),
                  (r.a3 = r.e * i + (r.g + r.h / r.c) * n),
                  (r.a1 = -i * (r.d / r.c) + n),
                  (r.a7 = r.g * r.d + r.h * r.f + i))),
            A
          );
        }),
        (l.JenkinsTraub.prototype.nextK = function (e, t, i, n, r, o, a, s, l) {
          var h;
          if (3 != i)
            if (((h = 1 == i ? r : n), Math.abs(o.a1) > 10 * e * Math.abs(h))) {
              ((o.a7 /= o.a1),
                (o.a3 /= o.a1),
                (a[0] = l[0]),
                (a[1] = -l[0] * o.a7 + l[1]));
              for (A = 2; A < t; A++)
                a[A] = -l[A - 1] * o.a7 + s[A - 2] * o.a3 + l[A];
            } else {
              ((a[0] = 0), (a[1] = -l[0] * o.a7));
              for (A = 2; A < t; A++) a[A] = -l[A - 1] * o.a7 + s[A - 2] * o.a3;
            }
          else {
            a[1] = a[0] = 0;
            for (var A = 2; A < t; A++) a[A] = s[A - 2];
          }
        }),
        (l.JenkinsTraub.prototype.newest = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          h,
          A,
          c,
          p,
          u,
          d,
          g,
          f,
        ) {
          var m, y, _, v, b, C, w, E;
          ((t.b = t.a = 0),
            3 != e &&
              (2 != e
                ? ((m = i + p * a + c * h), (y = s + (p + u * h) * l))
                : ((m = (i + A) * h + c), (y = (h + p) * s + u * l)),
              0 !=
                (E =
                  -(w =
                    -((b = (_ = -d[g - 1] / f[g]) * o) + (C = _ * _ * r)) +
                    u * (v = -(d[g - 2] + _ * f[g - 1]) / f[g]) * n) +
                  y +
                  _ * m) &&
                ((t.a = -(p * (C + b) + u * (_ * n + v * o)) / E + p),
                (t.b = u * (1 + w / E)))));
        }),
        (l.JenkinsTraub.prototype.quad = function (e, t, i, n) {
          var r, o, a;
          ((n.sr = n.si = n.lr = n.li = 0),
            0 != e
              ? 0 != i
                ? ((r = t / 2),
                  Math.abs(r) < Math.abs(i)
                    ? ((a = -(a = i >= 0 ? e : -e) + r * (r / Math.abs(i))),
                      (o = Math.sqrt(Math.abs(a)) * Math.sqrt(Math.abs(i))))
                    : ((a = (-e / r) * (i / r) + 1),
                      (o = Math.sqrt(Math.abs(a)) * Math.abs(r))),
                  a >= 0
                    ? ((o = r >= 0 ? -o : o),
                      (n.lr = (-r + o) / e),
                      (n.sr = 0 != n.lr ? i / n.lr / e : n.sr))
                    : ((n.lr = n.sr = -r / e),
                      (n.si = Math.abs(o / e)),
                      (n.li = -n.si)))
                : (n.lr = -t / e)
              : (n.sr = 0 != t ? -i / t : n.sr));
        }),
        (l.JenkinsTraub.prototype.quadIT = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
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
            E = new Object(),
            B = 0,
            x = 0;
          ((i.NZ = 0), (m = n), (_ = r));
          do {
            if (
              ((E.li = E.lr = E.si = E.sr = 0),
              this.quad(1, m, _, E),
              (i.szr = E.sr),
              (i.szi = E.si),
              (i.lzr = E.lr),
              (i.lzi = E.li),
              Math.abs(Math.abs(i.szr) - Math.abs(i.lzr)) >
                0.01 * Math.abs(i.lzr))
            )
              break;
            for (
              this.quadSD(a, m, _, l, o, s),
                u = Math.abs(-i.szr * s.b + s.a) + Math.abs(i.szi * s.b),
                b = Math.sqrt(Math.abs(_)),
                p = 2 * Math.abs(o[0]),
                f = -i.szr * s.b,
                C = 1;
              C < t;
              C++
            )
              p = p * b + Math.abs(o[C]);
            if (
              u <=
              20 *
                (p =
                  (9 * (p = p * b + Math.abs(f + s.a)) +
                    2 * Math.abs(f) -
                    7 * (Math.abs(s.a + f) + b * Math.abs(s.b))) *
                  e)
            ) {
              i.NZ = 2;
              break;
            }
            if (++B > 20) break;
            if (B >= 2 && g <= 0.01 && u >= d && !x) {
              for (
                m -= m * (g = g < e ? Math.sqrt(e) : Math.sqrt(g)),
                  _ += _ * g,
                  this.quadSD(a, m, _, l, o, s),
                  C = 0;
                C < 5;
                C++
              )
                ((w = this.calcSC(e, t, s.a, s.b, A, c, m, _, h)),
                  this.nextK(e, t, w, s.a, s.b, A, c, h, o));
              ((x = 1), (B = 0));
            }
            ((d = u),
              (w = this.calcSC(e, t, s.a, s.b, A, c, m, _, h)),
              this.nextK(e, t, w, s.a, s.b, A, c, h, o),
              (w = this.calcSC(e, t, s.a, s.b, A, c, m, _, h)),
              this.newest(
                w,
                s,
                s.a,
                A.a1,
                A.a3,
                A.a7,
                s.b,
                A.c,
                A.d,
                A.f,
                A.g,
                A.h,
                m,
                _,
                c,
                t,
                l,
              ),
              (y = s.a),
              0 != (v = s.b) &&
                ((g = Math.abs((-_ + v) / v)), (m = y), (_ = v)));
          } while (0 != v);
        }),
        (l.JenkinsTraub.prototype.realIT = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
        ) {
          var h,
            A,
            c,
            p,
            u,
            d,
            g,
            f,
            m,
            y,
            _,
            v = n - 1;
          for (t.NZ = _ = m = 0, g = i.a; ; ) {
            for (a[0] = d = r[0], y = 1; y < o; y++) a[y] = d = d * g + r[y];
            for (
              c = Math.abs(d), p = Math.abs(g), h = 0.5 * Math.abs(a[0]), y = 1;
              y < o;
              y++
            )
              h = h * p + Math.abs(a[y]);
            if (c <= 20 * e * (2 * h - c)) {
              ((t.NZ = 1), (t.szr = g), (t.szi = 0));
              break;
            }
            if (++_ > 10) break;
            if (_ >= 2 && Math.abs(f) <= 0.001 * Math.abs(-f + g) && c > u) {
              ((m = 1), (t.a = g));
              break;
            }
            for (u = c, l[0] = A = s[0], y = 1; y < n; y++)
              l[y] = A = A * g + s[y];
            if (Math.abs(A) > 10 * Math.abs(s[v]) * e)
              for (f = -d / A, s[0] = a[0], y = 1; y < n; y++)
                s[y] = f * l[y - 1] + a[y];
            else for (s[0] = 0, y = 1; y < n; y++) s[y] = l[y - 1];
            for (A = s[0], y = 1; y < n; y++) A = A * g + s[y];
            g += f = Math.abs(A) > 10 * Math.abs(s[v]) * e ? -d / A : 0;
          }
          return m;
        }),
        (l.JenkinsTraub.prototype.fxshfr = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          h,
          A,
        ) {
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
            I,
            F,
            R,
            D,
            k,
            G,
            Q,
            M,
            N,
            U = new Object(),
            V = new Object(),
            O = new Float64Array(t),
            L = new Float64Array(t);
          for (
            A.NZ = 0,
              d = u = 0.25,
              B = -2 * n,
              g = n,
              y = P = r,
              V.h =
                V.g =
                V.f =
                V.e =
                V.d =
                V.c =
                V.a7 =
                V.a3 =
                V.a1 =
                U.b =
                U.a =
                  0,
              this.quadSD(l, B, P, s, h, U),
              c = U.a,
              p = U.b,
              Q = this.calcSC(e, a, c, p, V, o, B, P, O),
              D = 0;
            D < i;
            D++
          ) {
            if (
              (this.nextK(e, a, Q, c, p, V, o, O, h),
              (Q = this.calcSC(e, a, c, p, V, o, B, P, O)),
              this.newest(
                Q,
                U,
                c,
                V.a1,
                V.a3,
                V.a7,
                p,
                V.c,
                V.d,
                V.f,
                V.g,
                V.h,
                B,
                P,
                o,
                a,
                s,
              ),
              (x = U.a),
              (T = S = U.b),
              (v = 0 != o[a - 1] ? -s[a] / o[a - 1] : 0),
              (b = w = 1),
              0 != D &&
                3 != Q &&
                ((M =
                  (E =
                    (w = 0 != T ? Math.abs((T - y) / T) : w) < m ? w * m : 1) <
                  d
                    ? 1
                    : 0),
                (k =
                  (C =
                    (b = 0 != v ? Math.abs((v - g) / v) : b) < f ? b * f : 1) <
                  u
                    ? 1
                    : 0) || M))
            ) {
              for (F = 0; F < a; F++) L[F] = o[F];
              ((_ = v), (G = N = 0), (I = 1));
              do {
                if (((R = 1), !I || 0 != (I = 0) || !k || (M && !(C < E)))) {
                  if (
                    (this.quadIT(e, a, A, x, S, h, l, U, s, O, V, o),
                    (c = U.a),
                    (p = U.b),
                    A.NZ > 0)
                  )
                    return;
                  if (((N = 1), (d *= 0.25), G || !k)) R = 0;
                  else for (F = 0; F < a; F++) o[F] = L[F];
                }
                if (0 != R) {
                  if (
                    ((U.a = _),
                    (R = this.realIT(e, A, U, a, s, l, h, o, O)),
                    (_ = U.a),
                    A.NZ > 0)
                  )
                    return;
                  if (((G = 1), (u *= 0.25), 0 != R)) {
                    ((x = -(_ + _)), (S = _ * _));
                    continue;
                  }
                }
                for (F = 0; F < a; F++) o[F] = L[F];
              } while (M && !N);
              (this.quadSD(l, B, P, s, h, U),
                (c = U.a),
                (p = U.b),
                (Q = this.calcSC(e, a, c, p, V, o, B, P, O)));
            }
            ((y = T), (g = v), (m = w), (f = b));
          }
        }),
        (l.JenkinsTraub.RADFAC = 0.017453292519943295),
        (l.JenkinsTraub.prototype.rpSolve = function (e, t, i) {
          for (
            var n,
              r,
              o,
              a,
              s,
              l,
              h,
              A,
              c,
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
              C = new Float64Array(e.coefs.length),
              w = e.getDegree(),
              E = w,
              B = Math.LN2,
              x = E + 1,
              P = new Float64Array(x),
              S = new Float64Array(x),
              T = new Float64Array(x),
              I = new Float64Array(x),
              F = {
                sr: 0,
                si: 0,
                li: 0,
                lr: 0,
              },
              R = {
                NZ: 0,
                szr: 0,
                szi: 0,
                lzr: 0,
                lzi: 0,
              },
              D = 0,
              k = 0;
            k <= w;
            k++
          )
            C[k] = e.coefs[w - k];
          for (
            var G = Number.MIN_VALUE / 2220446049250313e-31,
              Q = -0.06975647374412533,
              M = 0.9975640502598242,
              N = Math.SQRT1_2,
              U = -N;
            0 == C[E];
          )
            ((t[D] = i[D] = 0), E--, D++);
          for (v = E + 1; E >= 1; ) {
            if (E <= 2) {
              E < 2
                ? ((t[w - 1] = -C[1] / C[0]), (i[w - 1] = 0))
                : ((F.li = F.lr = F.si = F.sr = 0),
                  this.quad(C[0], C[1], C[2], F),
                  (t[w - 2] = F.sr),
                  (i[w - 2] = F.si),
                  (t[w - 1] = F.lr),
                  (i[w - 1] = F.li));
              break;
            }
            var V, O;
            for (V = 0, O = Number.MAX_VALUE, k = 0; k < v; k++)
              ((h = Math.abs(C[k])) > V && (V = h), 0 != h && h < O && (O = h));
            if (
              (((l = G / O) <= 1 && V >= 10) ||
                (l > 1 && Number.MAX_VALUE / l >= V)) &&
              ((l = 0 == l ? Number.MIN_VALUE : l),
              (y = Math.floor(Math.log(l) / B + 0.5)),
              1 != (a = Math.pow(2, y)))
            )
              for (k = 0; k < v; k++) C[k] *= a;
            for (k = 0; k < v; k++) S[k] = Math.abs(C[k]);
            ((S[E] = -S[E]),
              (_ = E - 1),
              (h = Math.exp((Math.log(-S[E]) - Math.log(S[0])) / E)),
              0 != S[_] && (h = (A = -S[E] / S[_]) < h ? A : h),
              (A = h));
            do {
              ((A = 0.1 * (h = A)), (s = S[0]));
              for (k = 1; k < v; k++) s = s * A + S[k];
            } while (s > 0);
            for (o = h; Math.abs(o / h) > 0.005; ) {
              r = s = S[0];
              for (k = 1; k < E; k++) r = h * r + (s = h * s + S[k]);
              h -= o = (s = h * s + S[E]) / r;
            }
            n = h;
            for (k = 1; k < E; k++) P[k] = ((E - k) * C[k]) / E;
            for (
              P[0] = C[0], c = C[E], p = C[_], b = 0 == P[_] ? 1 : 0, m = 0;
              m < 5;
              m++
            )
              if (((u = P[_]), b)) {
                for (k = 0; k < _; k++) P[(D = _ - k)] = P[D - 1];
                ((P[0] = 0), (b = 0 == P[_] ? 1 : 0));
              } else {
                g = -c / u;
                for (k = 0; k < _; k++) P[(D = _ - k)] = g * P[D - 1] + C[D];
                ((P[0] = C[0]),
                  (b =
                    Math.abs(P[_]) <= 2220446049250313e-31 * Math.abs(p) * 10
                      ? 1
                      : 0));
              }
            for (k = 0; k < E; k++) I[k] = P[k];
            for (m = 1; m <= 20; m++) {
              if (
                ((f = -M * U + Q * N),
                (U = M * N + Q * U),
                (d = n * (N = f)),
                this.fxshfr(
                  2220446049250313e-31,
                  x,
                  20 * m,
                  d,
                  n,
                  P,
                  E,
                  C,
                  v,
                  T,
                  R,
                ),
                0 != R.NZ)
              ) {
                ((t[(D = w - E)] = R.szr),
                  (i[D] = R.szi),
                  (E = (v -= R.NZ) - 1));
                for (k = 0; k < v; k++) C[k] = T[k];
                1 != R.NZ && ((t[D + 1] = R.lzr), (i[D + 1] = R.lzi));
                break;
              }
              for (k = 0; k < E; k++) P[k] = I[k];
            }
            if (m > 20) {
              w -= E;
              break;
            }
          }
          return w;
        }),
        (e.exports = l));
    }