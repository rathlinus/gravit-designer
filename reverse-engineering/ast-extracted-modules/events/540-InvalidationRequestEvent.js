/**
 * Module 540
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
  var n = i(0), r = i(6), o = i(5), a = i(24), s = i(75), l = i(72), h = i(14), A = i(7);
  function c(e) {
    this._scene = e, this._activated = !1;
  }
  n.inherit(c, s), c.ValueDirection = {
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4
  };
  var p = h.getScreenDPI();
  c.VALUE_MARGIN = 5 * p, c.FONT_SIZE = 10 * p, c.InvalidationRequestEvent = function (e) {
    this.area = e;
  }, n.inherit(c.InvalidationRequestEvent, l), c.InvalidationRequestEvent.prototype.area = null, c.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GDistanceHelper.InvalidationRequestEvent]";
  }, c.prototype._scene = null, c.prototype._view = null, c.prototype._activated = !1, c.prototype._visuals = null, c.prototype._baseRect = null, c.prototype._targetRect = null, c.prototype._area = null, c.prototype.setView = function (e) {
    this._view = e;
  }, c.prototype.activateMeasurement = function () {
    this._view && (this._activated = !0, this.clearVisuals(), this._area = null);
  }, c.prototype.deactivateMeasurement = function () {
    this.invalidate(), this._activated = !1;
  }, c.prototype.isActivated = function () {
    return this._activated;
  }, c.prototype.refreshVisuals = function (e, t, i, n) {
    if (this._activated) {
      this.clearVisuals(), this.invalidate(), i && (this._baseRect = e), n && (this._targetRect = t);
      var a = e.getXYOffset(t, !0, !0, !0);
      if (a.x || a.y)
        if (a.x && !a.y) {
          re = (d = a.topDist >= 0 ? t.getY() : e.getY()) <= (y = a.bottomDist >= 0 ? e.getSide(r.Side.BOTTOM_LEFT).getY() : t.getSide(r.Side.BOTTOM_LEFT).getY()) ? d : y, D = d <= y ? y : d;
          var s = e.getSide(r.Side.LEFT_CENTER).getY();
          (s < re || s > D) && ((s = t.getSide(r.Side.LEFT_CENTER).getY()) < re || s > D) && (s = re);
          var l = Math.abs(a.x), h = (I = this.getValueBoxView(l), a.x > 0 ? t.getX() : e.getX());
          F = (p = new o(h, s)).add(new o(-l / 2, 0)), R = [
            p,
            p.add(new o(-l, 0))
          ], k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re, D);
          this._visuals.push({
            line: G.line,
            value: l,
            valueBoxView: I,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          });
        } else if (a.y && !a.x) {
          Be = (h = a.leftDist >= 0 ? t.getX() : e.getX()) <= (m = a.rightDist >= 0 ? e.getSide(r.Side.TOP_RIGHT).getX() : t.getSide(r.Side.TOP_RIGHT).getX()) ? h : m, M = h <= m ? m : h;
          var A = e.getSide(r.Side.TOP_CENTER).getX();
          (A < Be || A > M) && ((A = t.getSide(r.Side.TOP_CENTER).getX()) < Be || A > M) && (A = Be);
          var p, u = Math.abs(a.y), d = (I = this.getValueBoxView(u), a.y > 0 ? t.getY() : e.getY());
          F = (p = new o(A, d)).add(new o(0, -u / 2)), R = [
            p,
            p.add(new o(0, -u))
          ], k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be, M);
          this._visuals.push({
            line: G.line,
            value: u,
            valueBoxView: I,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          });
        } else {
          l = Math.abs(a.x);
          var g = this.getValueBoxView(l), f = (u = Math.abs(a.y), this.getValueBoxView(u)), m = (h = a.x > 0 ? t.getX() : e.getX()) - l, y = (d = a.y > 0 ? t.getY() : e.getY()) - u, _ = a.y > 0 ? e.getSide(r.Side.BOTTOM_LEFT).getY() : e.getY(), v = a.y > 0 ? t.getY() : t.getSide(r.Side.BOTTOM_LEFT).getY(), b = new o(h - l / 2, _);
          R = [
            new o(h, _),
            new o(m, _)
          ], k = a.y > 0 ? c.ValueDirection.Up : c.ValueDirection.Down;
          (G = this.correctValuePoint(b, g, R, k, null, null, !0)).valuePt ? (this._visuals.push({
            line: G.line,
            value: l,
            valueBoxView: g,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          }), this._visuals.push({
            line: [
              new o(h, v),
              new o(m, v)
            ]
          })) : (b = new o(h - l / 2, v), R = [
            new o(h, v),
            new o(m, v)
          ], k = a.y > 0 ? c.ValueDirection.Down : c.ValueDirection.Up, G = this.correctValuePoint(b, g, R, k, null, null), this._visuals.push({
            line: G.line,
            value: l,
            valueBoxView: g,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          }), this._visuals.push({
            line: [
              new o(h, _),
              new o(m, _)
            ]
          }));
          var C = a.x > 0 ? e.getSide(r.Side.TOP_RIGHT).getX() : e.getX(), w = a.x > 0 ? t.getX() : t.getSide(r.Side.TOP_RIGHT).getX(), E = new o(C, d - u / 2);
          R = [
            new o(C, d),
            new o(C, y)
          ], k = a.x > 0 ? c.ValueDirection.Left : c.ValueDirection.Right;
          (G = this.correctValuePoint(E, f, R, k, null, null, !0)).valuePt ? (this._visuals.push({
            line: G.line,
            value: u,
            valueBoxView: f,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          }), this._visuals.push({
            line: [
              new o(w, d),
              new o(w, y)
            ]
          })) : (E = new o(w, d - u / 2), R = [
            new o(w, d),
            new o(w, y)
          ], k = a.x > 0 ? c.ValueDirection.Right : c.ValueDirection.Left, G = this.correctValuePoint(E, f, R, k, null, null), this._visuals.push({
            line: G.line,
            value: u,
            valueBoxView: f,
            valuePt: G.valuePt,
            valueDir: G.valueDir
          }), this._visuals.push({
            line: [
              new o(C, d),
              new o(C, y)
            ]
          }));
        }
      else {
        var B = a.leftDist <= 0 && a.topDist <= 0 && a.rightDist >= 0 && a.bottomDist >= 0, x = a.leftDist >= 0 && a.topDist >= 0 && a.rightDist <= 0 && a.bottomDist <= 0;
        if (B || x) {
          var P = B ? e : t;
          if (a.leftDist) {
            var S = P.getSide(r.Side.LEFT_CENTER), T = Math.abs(a.leftDist), I = this.getValueBoxView(T), F = S.add(new o(-T / 2, 0)), R = [
                S.add(new o(-T, 0)),
                S
              ], D = (re = P.getY()) + P.getHeight(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: T,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if (a.topDist) {
            var Q = P.getSide(r.Side.TOP_CENTER), I = (T = Math.abs(a.topDist), this.getValueBoxView(T)), F = Q.add(new o(0, -T / 2)), R = [
                Q.add(new o(0, -T)),
                Q
              ], M = (Be = P.getX()) + P.getWidth(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be);
            this._visuals.push({
              line: G.line,
              value: T,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if (a.rightDist) {
            var N = P.getSide(r.Side.RIGHT_CENTER), I = (T = Math.abs(a.rightDist), this.getValueBoxView(T)), F = N.add(new o(T / 2, 0)), R = [
                N.add(new o(T, 0)),
                N
              ], D = (re = P.getY()) + P.getHeight(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: T,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if (a.bottomDist) {
            var U = P.getSide(r.Side.BOTTOM_CENTER), R = (T = Math.abs(a.bottomDist), I = this.getValueBoxView(T), F = U.add(new o(0, T / 2)), [
                U.add(new o(0, T)),
                U
              ]), M = (Be = P.getX()) + P.getWidth(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be);
            this._visuals.push({
              line: G.line,
              value: T,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
        } else if (a.leftDist * a.topDist * a.rightDist * a.bottomDist > 0) {
          var V = a.leftDist < 0 && a.topDist < 0 && a.rightDist < 0 && a.bottomDist < 0, O = a.leftDist > 0 && a.topDist > 0 && a.rightDist > 0 && a.bottomDist > 0, L = a.leftDist > 0 && a.topDist < 0 && a.rightDist > 0 && a.bottomDist < 0, Y = a.leftDist < 0 && a.topDist > 0 && a.rightDist < 0 && a.bottomDist > 0, X = a.leftDist < 0 && a.topDist > 0 && a.rightDist > 0 && a.bottomDist < 0, H = a.leftDist > 0 && a.topDist < 0 && a.rightDist < 0 && a.bottomDist > 0;
          if (V || O || X || H) {
            var W = V || H ? t : e, Z = V || H ? e : t, z = W.getSide(r.Side.TOP_RIGHT), j = W.getSide(r.Side.BOTTOM_RIGHT), J = W.getSide(r.Side.BOTTOM_LEFT), q = Z.getSide(r.Side.TOP_RIGHT), K = Z.getSide(r.Side.TOP_LEFT), $ = Z.getSide(r.Side.BOTTOM_LEFT);
            if (X || H) {
              var ee = J;
              J = $, $ = ee;
            }
            var te = W.getSide(r.Side.CENTER), ie = Z.getSide(r.Side.CENTER), ne = Math.abs(a.rightDist), R = (I = this.getValueBoxView(ne), F = z.add(new o(ne / 2, 0)), [
                z,
                z.add(new o(ne, 0))
              ]), re = z.getY(), k = (D = X || H ? ie.getY() : j.getY(), c.ValueDirection.Up), G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ne,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            var oe = Math.abs(a.topDist);
            I = this.getValueBoxView(oe), F = q.add(new o(0, -oe / 2)), R = [
              q,
              q.add(new o(0, -oe))
            ], Be = X || H ? te.getX() : K.getX(), M = q.getX(), k = c.ValueDirection.Right, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: oe,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            var ae = Math.abs(a.leftDist);
            I = this.getValueBoxView(ae), F = $.add(new o(-ae / 2, 0)), R = [
              $,
              $.add(new o(-ae, 0))
            ], re = X || H ? ie.getY() : K.getY(), D = $.getY(), k = c.ValueDirection.Down, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re), this._visuals.push({
              line: G.line,
              value: ae,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            var se = Math.abs(a.bottomDist);
            I = this.getValueBoxView(se), F = J.add(new o(0, se / 2)), R = [
              J,
              J.add(new o(0, se))
            ], Be = J.getX(), M = X || H ? te.getX() : j.getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: se,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if (L || Y || X || H) {
            var le = L || H ? t : e, he = L || H ? e : t, Ae = le.getSide(r.Side.TOP_LEFT), ce = (J = le.getSide(r.Side.BOTTOM_LEFT), j = le.getSide(r.Side.BOTTOM_RIGHT), q = he.getSide(r.Side.TOP_RIGHT), K = he.getSide(r.Side.TOP_LEFT), he.getSide(r.Side.BOTTOM_RIGHT));
            if (X || H) {
              ee = j;
              j = ce, ce = ee;
            }
            var pe = le.getSide(r.Side.CENTER), ue = he.getSide(r.Side.CENTER), re = (ne = Math.abs(a.rightDist), I = this.getValueBoxView(ne), F = ce.add(new o(ne / 2, 0)), R = [
                ce,
                ce.add(new o(ne, 0))
              ], X || H ? ue.getY() : q.getY());
            D = ce.getY(), k = c.ValueDirection.Down, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ne,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            se = Math.abs(a.bottomDist);
            I = this.getValueBoxView(se), F = j.add(new o(0, se / 2)), R = [
              j,
              j.add(new o(0, se))
            ], Be = X || H ? pe.getX() : J.getX(), M = j.getX(), k = c.ValueDirection.Right, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: se,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            oe = Math.abs(a.topDist);
            I = this.getValueBoxView(oe), F = K.add(new o(0, -oe / 2)), R = [
              K,
              K.add(new o(0, -oe))
            ], Be = K.getX(), M = X || H ? pe.getX() : q.getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: oe,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            ae = Math.abs(a.leftDist);
            I = this.getValueBoxView(ae), F = Ae.add(new o(-ae / 2, 0)), R = [
              Ae,
              Ae.add(new o(-ae, 0))
            ], re = Ae.getY(), D = X || H ? ue.getY() : J.getY(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re), this._visuals.push({
              line: G.line,
              value: ae,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
        } else {
          var de = a.leftDist >= 0 && a.topDist >= 0 && a.rightDist >= 0 && a.bottomDist <= 0, ge = a.leftDist <= 0 && a.topDist <= 0 && a.rightDist <= 0 && a.bottomDist >= 0, fe = a.leftDist >= 0 && a.topDist >= 0 && a.rightDist <= 0 && a.bottomDist >= 0, me = a.leftDist <= 0 && a.topDist <= 0 && a.rightDist >= 0 && a.bottomDist <= 0, ye = a.leftDist <= 0 && a.topDist >= 0 && a.rightDist <= 0 && a.bottomDist <= 0, _e = a.leftDist >= 0 && a.topDist <= 0 && a.rightDist >= 0 && a.bottomDist >= 0, ve = a.leftDist >= 0 && a.topDist <= 0 && a.rightDist <= 0 && a.bottomDist <= 0, be = a.leftDist <= 0 && a.topDist >= 0 && a.rightDist >= 0 && a.bottomDist >= 0;
          if ((de || ge || ve || be) && a.topDist && a.rightDist) {
            var Ce = de || be ? t : e;
            z = (we = de || be ? e : t).getSide(r.Side.TOP_RIGHT), q = Ce.getSide(r.Side.TOP_RIGHT), ne = Math.abs(a.rightDist), I = this.getValueBoxView(ne), F = z.add(new o(ne / 2, 0)), R = [
              z,
              z.add(new o(ne, 0))
            ], re = z.getY(), D = de || ge ? Ce.getSide(r.Side.LEFT_CENTER).getY() : we.getSide(r.Side.BOTTOM_RIGHT).getY(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ne,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            oe = Math.abs(a.topDist);
            I = this.getValueBoxView(oe), F = q.add(new o(0, -oe / 2)), R = [
              q,
              q.add(new o(0, -oe))
            ], Be = de || ge ? Ce.getX() : we.getSide(r.Side.TOP_CENTER).getX(), M = q.getX(), k = c.ValueDirection.Right, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: oe,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((ye || _e || ve || be) && a.topDist && a.leftDist) {
            Ce = ye || be ? e : t, Ae = (we = ye || be ? t : e).getSide(r.Side.TOP_LEFT), K = Ce.getSide(r.Side.TOP_LEFT), ae = Math.abs(a.leftDist), I = this.getValueBoxView(ae), F = K.add(new o(-ae / 2, 0)), R = [
              K,
              K.add(new o(-ae, 0))
            ], re = K.getY(), D = ye || _e ? we.getSide(r.Side.LEFT_CENTER).getY() : Ce.getSide(r.Side.BOTTOM_LEFT).getY(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ae,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            oe = Math.abs(a.topDist);
            I = this.getValueBoxView(oe), F = Ae.add(new o(0, -oe / 2)), R = [
              Ae,
              Ae.add(new o(0, -oe))
            ], Be = Ae.getX(), M = ye || _e ? we.getSide(r.Side.TOP_RIGHT).getX() : Ce.getSide(r.Side.TOP_CENTER).getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: oe,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((ye || _e || fe || me) && a.bottomDist && a.leftDist) {
            Ce = ye || me ? e : t, J = (we = ye || me ? t : e).getSide(r.Side.BOTTOM_LEFT), $ = Ce.getSide(r.Side.BOTTOM_LEFT), ae = Math.abs(a.leftDist), I = this.getValueBoxView(ae), F = $.add(new o(-ae / 2, 0)), R = [
              $,
              $.add(new o(-ae, 0))
            ], re = ye || _e ? we.getSide(r.Side.LEFT_CENTER).getY() : Ce.getY(), D = $.getY(), k = c.ValueDirection.Down, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ae,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            se = Math.abs(a.bottomDist);
            I = this.getValueBoxView(se), F = J.add(new o(0, se / 2)), R = [
              J,
              J.add(new o(0, se))
            ], Be = J.getX(), M = ye || _e ? we.getSide(r.Side.BOTTOM_RIGHT).getX() : Ce.getSide(r.Side.TOP_CENTER).getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: se,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((de || ge || fe || me) && a.bottomDist && a.rightDist) {
            Ce = de || me ? t : e, j = (we = de || me ? e : t).getSide(r.Side.BOTTOM_RIGHT), ce = Ce.getSide(r.Side.BOTTOM_RIGHT), ne = Math.abs(a.rightDist), I = this.getValueBoxView(ne), F = j.add(new o(ne / 2, 0)), R = [
              j,
              j.add(new o(ne, 0))
            ], re = de || ge ? Ce.getSide(r.Side.LEFT_CENTER).getY() : we.getY(), D = j.getY(), k = c.ValueDirection.Down, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ne,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
            se = Math.abs(a.bottomDist);
            I = this.getValueBoxView(se), F = ce.add(new o(0, se / 2)), R = [
              ce,
              ce.add(new o(0, se))
            ], Be = de || ge ? Ce.getX() : we.getSide(r.Side.TOP_CENTER).getX(), M = ce.getX(), k = c.ValueDirection.Right, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be), this._visuals.push({
              line: G.line,
              value: se,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((de || ge) && a.leftDist) {
            S = (Ce = de ? t : e).getSide(r.Side.LEFT_CENTER), ae = Math.abs(a.leftDist), I = this.getValueBoxView(ae), F = S.add(new o(-ae / 2, 0)), R = [
              S,
              S.add(new o(-ae, 0))
            ], re = Ce.getY(), D = Ce.getSide(r.Side.BOTTOM_LEFT).getY(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ae,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((ye || _e) && a.rightDist) {
            var we;
            N = (we = ye ? t : e).getSide(r.Side.RIGHT_CENTER), ne = Math.abs(a.rightDist), I = this.getValueBoxView(ne), F = N.add(new o(ne / 2, 0)), R = [
              N,
              N.add(new o(ne, 0))
            ], re = we.getY(), D = we.getSide(r.Side.BOTTOM_LEFT).getY(), k = c.ValueDirection.Up, G = this.correctValuePoint(F, I, R, k, re <= D ? re : D, re <= D ? D : re);
            this._visuals.push({
              line: G.line,
              value: ne,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((ve || be) && a.bottomDist) {
            var Ee = ve ? t : e, Be = (U = Ee.getSide(r.Side.BOTTOM_CENTER), se = Math.abs(a.bottomDist), I = this.getValueBoxView(se), F = U.add(new o(0, se / 2)), R = [
                U,
                U.add(new o(0, se))
              ], Ee.getX());
            M = Ee.getSide(r.Side.TOP_RIGHT).getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be);
            this._visuals.push({
              line: G.line,
              value: se,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
          if ((fe || me) && a.topDist) {
            var xe = fe ? t : e, Be = (Q = xe.getSide(r.Side.TOP_CENTER), oe = Math.abs(a.topDist), I = this.getValueBoxView(oe), F = Q.add(new o(0, -oe / 2)), R = [
                Q,
                Q.add(new o(0, -oe))
              ], xe.getX());
            M = xe.getSide(r.Side.TOP_RIGHT).getX(), k = c.ValueDirection.Left, G = this.correctValuePoint(F, I, R, k, Be <= M ? Be : M, Be <= M ? M : Be);
            this._visuals.push({
              line: G.line,
              value: oe,
              valueBoxView: I,
              valuePt: G.valuePt,
              valueDir: G.valueDir
            });
          }
        }
      }
      this.requestInvalidation();
    }
  }, c.prototype.clearVisuals = function () {
    this._visuals = [], this._baseRect = null, this._targetRect = null;
  }, c.prototype.requestInvalidation = function () {
    if (this._visuals && this._visuals.length) {
      var e, t = null, i = null, n = null, o = null;
      this._area = null;
      for (var a = 0; a < this._visuals.length; ++a) {
        var s = this._visuals[a];
        e = s.line;
        for (var l = 0; l < 2; ++l) {
          var h = e[l];
          (null === t || t > h.getX()) && (t = h.getX()), (null === i || i > h.getY()) && (i = h.getY()), (null === n || n < h.getX()) && (n = h.getX()), (null === o || o < h.getY()) && (o = h.getY());
        }
        if (s.valueBoxView) {
          var c = this.getValueBoxScene(s.valueBoxView, s.valuePt, s.valueDir);
          this._area = this._area ? this._area.united(c) : c;
        }
      }
      var p = Math.ceil(1 / this._view.getZoom()), u = new r(t -= p, i -= p, (n += p) - t, (o += p) - i);
      if (this._area = this._area ? this._area.united(u) : u, this._baseRect) {
        var d = this._baseRect.expanded(p, p, p, p);
        this._area = this._area ? this._area.united(d) : d;
      }
      if (this._targetRect) {
        var g = this._targetRect.expanded(p, p, p, p);
        this._area = this._area ? this._area.united(g) : g;
      }
      if (this._area && this._view.getViewConfiguration().multiPageView) {
        var f = this._scene.getActivePage().getPosition(!0), m = new A(1, 0, 0, 1, f.getX(), f.getY());
        this._area = m.mapRect(this._area);
      }
    } else
      this._area = null;
    this.invalidate(this._area);
  }, c.prototype.invalidate = function (e) {
    this.hasEventListeners(c.InvalidationRequestEvent) && (e && !e.isEmpty() ? this.trigger(new c.InvalidationRequestEvent(e)) : this._area && !this._area.isEmpty() && (this.clearVisuals(), this.trigger(new c.InvalidationRequestEvent(this._area)), this._area = null));
  }, c.prototype.paint = function (e, t) {
    if (this._activated) {
      e = e;
      if (t.configuration.multiPageView) {
        var i = this._scene.getActivePage().getPosition(!0);
        e = e.preMultiplied(new A(1, 0, 0, 1, i.getX(), i.getY()));
      }
      if (this._baseRect) {
        var n = e ? e.mapRect(this._baseRect) : this._baseRect;
        t.canvas.strokeRect(n.getX(), n.getY(), n.getWidth(), n.getHeight(), a.outlineWidth, a.distanceHelperColor);
      }
      if (this._targetRect) {
        var r = e ? e.mapRect(this._targetRect) : this._targetRect;
        t.canvas.strokeRect(r.getX(), r.getY(), r.getWidth(), r.getHeight(), a.outlineWidth, a.distanceHelperColor);
      }
      if (this._visuals && this._visuals.length)
        for (var o = 0; o < this._visuals.length; ++o) {
          var s = this._visuals[o], l = s.line, h = e ? e.mapPoint(l[0]) : l[0], c = e ? e.mapPoint(l[1]) : l[1], p = 0;
          a.outlineWidth % 2 != 0 && (p = 0.5), t.canvas.strokeLine(Math.floor(h.getX()) + p, Math.floor(h.getY()) + p, Math.floor(c.getX()) + p, Math.floor(c.getY()) + p, a.outlineWidth, a.distanceHelperColor, null == s.value), null != s.value && this.paintDistanceHint(s.value, s.valuePt, s.valueDir, e, t);
        }
      this.clearVisuals();
    }
  }, c.prototype.getValueBoxView = function (e) {
    var t = this._scene.pointToString(e, 1).length;
    return new r(0, 0, c.FONT_SIZE / 1.2 * t + 3 * p, 1.6 * c.FONT_SIZE + 3 * p);
  }, c.prototype.getValueBoxScene = function (e, t, i) {
    var n = this._view ? this._view.getZoom() : 1, o = new r(0, 0, e.getWidth() / n, e.getHeight() / n), a = c.VALUE_MARGIN / n;
    return i == c.ValueDirection.Left ? o = o.translated(t.getX() - a - o.getWidth(), t.getY() - o.getHeight() / 2) : i == c.ValueDirection.Right ? o = o.translated(t.getX() + a, t.getY() - o.getHeight() / 2) : i == c.ValueDirection.Up ? o = o.translated(t.getX() - o.getWidth() / 2, t.getY() - a - o.getHeight()) : i == c.ValueDirection.Down && (o = o.translated(t.getX() - o.getWidth() / 2, t.getY() + a)), o;
  }, c.prototype.paintDistanceHint = function (e, t, i, n, r, s) {
    var l = this._scene.pointToString(e, 1), h = n ? n.mapPoint(t) : t, A = "alphabetic", p = "right";
    i == c.ValueDirection.Left ? (h = h.add(new o(-c.VALUE_MARGIN, 0)), A = "middle") : i == c.ValueDirection.Right ? (h = h.add(new o(c.VALUE_MARGIN, 0)), A = "middle", p = "left") : i == c.ValueDirection.Up ? (h = h.add(new o(0, -c.VALUE_MARGIN)), p = "center") : i == c.ValueDirection.Down && (h = h.add(new o(0, c.VALUE_MARGIN)), p = "center", A = "hanging");
    var u = s || a.distanceHelperColor;
    r.canvas.putAuxilliaryText(l, h.getX(), h.getY(), c.FONT_SIZE + "px Verdana", A, p, 1, u.toScreenCSS());
  }, c.prototype.correctValuePoint = function (e, t, i, n, r, a, s) {
    var l = this._view.getViewVisibleArea(), h = this._view.getWorldTransform(this._scene.getActivePage()), A = h.mapPoint(e), p = [
        h.mapPoint(i[0]),
        h.mapPoint(i[1])
      ], u = l, d = e, g = n, f = i;
    if (n == c.ValueDirection.Left || n == c.ValueDirection.Right) {
      if (!(u = n == c.ValueDirection.Left ? l.expanded(-t.getWidth() - c.VALUE_MARGIN, -t.getHeight() / 2, 0, -t.getHeight() / 2) : l.expanded(0, -t.getHeight() / 2, -t.getWidth() - c.VALUE_MARGIN, -t.getHeight() / 2)).containsPoint(A)) {
        var m = A.getX(), y = A.getY();
        if (l.containsPoint(p[0]) || l.containsPoint(p[1]))
          n == c.ValueDirection.Left && u.getX() > m ? g = c.ValueDirection.Right : n == c.ValueDirection.Right && u.getX() + u.getWidth() < m && (g = c.ValueDirection.Left), u.getY() > y ? y = u.getY() : u.getY() + u.getHeight() < y && (y = u.getY() + u.getHeight()), d = new o(m, y), d = this._view.getViewTransform().mapPoint(d);
        else if (null != r && null != a && (p[0].getY() > u.getY() && p[0].getY() < u.getY() + u.getHeight() || p[1].getY() > u.getY() && p[1].getY() < u.getY() + u.getHeight())) {
          n == c.ValueDirection.Left && u.getX() > m ? (g = c.ValueDirection.Right, u = l.expanded(0, -t.getHeight() / 2, -t.getWidth() - c.VALUE_MARGIN, -t.getHeight() / 2)) : n == c.ValueDirection.Right && u.getX() + u.getWidth() < m && (g = c.ValueDirection.Left, u = l.expanded(-t.getWidth() - c.VALUE_MARGIN, -t.getHeight() / 2, 0, -t.getHeight() / 2));
          var _ = new o(r, i[0].getY()), v = new o(a, i[0].getY());
          _ = h.mapPoint(_), v = h.mapPoint(v);
          var b = Math.max(_.getX(), u.getX()), C = Math.min(v.getX(), u.getX() + u.getWidth());
          b <= u.getX() + u.getWidth() && C >= u.getX() && (m = (b + C) / 2, u.getY() > y ? y = u.getY() : u.getY() + u.getHeight() < y && (y = u.getY() + u.getHeight()), d = new o(m, y), d = this._view.getViewTransform().mapPoint(d), f = [
            new o(d.getX(), i[0].getY()),
            new o(d.getX(), i[1].getY())
          ]);
        } else
          s && (d = null, g = null, f = null);
      }
    } else if ((n == c.ValueDirection.Up || n == c.ValueDirection.Down) && !(u = n == c.ValueDirection.Up ? l.expanded(-t.getWidth() / 2, -t.getHeight() - c.VALUE_MARGIN, -t.getWidth() / 2, 0) : l.expanded(-t.getWidth() / 2, 0, -t.getWidth() / 2, -t.getHeight() - c.VALUE_MARGIN)).containsPoint(A)) {
      m = A.getX(), y = A.getY();
      if (l.containsPoint(p[0]) || l.containsPoint(p[1]))
        n == c.ValueDirection.Up && u.getY() > y ? g = c.ValueDirection.Down : n == c.ValueDirection.Down && u.getY() + u.getHeight() < y && (g = c.ValueDirection.Up), u.getX() > m ? m = u.getX() : u.getX() + u.getWidth() < m && (m = u.getX() + u.getWidth()), d = new o(m, y), d = this._view.getViewTransform().mapPoint(d);
      else if (null != r && null != a && (p[0].getX() > u.getX() && p[0].getX() < u.getX() + u.getWidth() || p[1].getX() > u.getX() && p[1].getX() < u.getX() + u.getWidth())) {
        n == c.ValueDirection.Up && u.getY() > y ? (g = c.ValueDirection.Down, u = l.expanded(-t.getWidth() / 2, 0, -t.getWidth() / 2, -t.getHeight() - c.VALUE_MARGIN)) : n == c.ValueDirection.Down && u.getY() + u.getHeight() < y && (g = c.ValueDirection.Up, u = l.expanded(-t.getWidth() / 2, -t.getHeight() - c.VALUE_MARGIN, -t.getWidth() / 2, 0));
        _ = new o(i[0].getX(), r), v = new o(i[0].getX(), a);
        _ = h.mapPoint(_), v = h.mapPoint(v);
        var w = Math.max(_.getY(), u.getY()), E = Math.min(v.getY(), u.getY() + u.getHeight());
        w <= u.getY() + u.getHeight() && E >= u.getY() && (y = (w + E) / 2, u.getX() > m ? m = u.getX() : u.getX() + u.getWidth() < m && (m = u.getX() + u.getWidth()), d = new o(m, y), d = this._view.getViewTransform().mapPoint(d), f = [
          new o(i[0].getX(), d.getY()),
          new o(i[1].getX(), d.getY())
        ]);
      } else
        s && (d = null, g = null, f = null);
    }
    return {
      valuePt: d,
      valueDir: g,
      line: f
    };
  }, c.prototype.toString = function () {
    return "[DistanceHelper]";
  }, e.exports = c;
}
