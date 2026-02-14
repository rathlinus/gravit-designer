/**
 * Module 910
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
  var n = i(2), r = i(12), o = i(7), a = i(5), s = i(6);
  e.exports = function (e) {
    e.Anchor = function () {
    }, e.Anchor.Eps = 1e-9, e.Anchor.AnchorType = {
      Start: 1,
      Middle: 2,
      End: 3,
      Stretch: 4
    }, e.Anchor.MetaProperties = {
      hacr: null,
      habox: null,
      hsbox: null,
      hatrf: null,
      hstrf: null,
      hdl: null,
      hdr: null,
      hcf: null,
      vacr: null,
      vabox: null,
      vsbox: null,
      vatrf: null,
      vstrf: null,
      vdt: null,
      vdb: null,
      vcf: null
    }, e.Anchor.prototype._noAnchoringPropsUpdate = !1, e.Anchor.prototype.oldHacr = null, e.Anchor.prototype.oldVacr = null, e.Anchor.prototype._handleAnchorChange = function (t, i) {
      if (t === n._Change.AfterPropertiesChange && (i.properties.indexOf("hacr") >= 0 || i.properties.indexOf("vacr") >= 0)) {
        var r = i.properties.indexOf("hacr");
        r >= 0 && (this.oldHacr = i.values[r]);
        var a = i.properties.indexOf("vacr");
        a >= 0 && (this.oldVacr = i.values[a]), this.getParent() && this.getParent().hasMixin(e.Layout) && !this.isRecordedTransaction() && this._setInitialAnchorProps(i.properties.indexOf("hacr") >= 0, i.properties.indexOf("vacr") >= 0);
      } else if (t === n._Change.AfterPropertiesChange && !this.isRecordedTransaction() && i.properties.indexOf("trf") >= 0 && (this.getProperty("hacr") || this.getProperty("vacr")) && !this.isRestoring())
        if (this.dependentUpdate) {
          if (!this._noAnchoringPropsUpdate) {
            var l = i.properties.indexOf("trf");
            if (this.getProperty("hacr")) {
              var h = this.getProperty("hstrf"), A = this.getProperty("trf"), c = null;
              (p = i.values[l]) && (c = p.inverted()), A && (c = c ? c.multiplied(A) : A), h = h ? h.multiplied(c) : c, this.setProperty("hstrf", h);
            }
            if (this.getProperty("vacr")) {
              var p, u = this.getProperty("vstrf");
              A = this.getProperty("trf"), c = null;
              (p = i.values[l]) && (c = p.inverted()), A && (c = c ? c.multiplied(A) : A), u = u ? u.multiplied(c) : c, this.setProperty("vstrf", u);
            }
          }
        } else {
          var d = this.getProperty("hacr"), g = this.getProperty("vacr");
          this.resetAnchorProperties(), this.setProperties([
            "hacr",
            "vacr"
          ], [
            d,
            g
          ]);
        }
      else if (t !== e._Change.GeometrySizeChanged && t !== n._Change.ParentAttached || this.isRecordedTransaction() || this.isRestoring() || this.dependentUpdate || !this.getProperty("hacr") && !this.getProperty("vacr"))
        t === n._Change.Store ? this.storeProperties(i.blob, e.Anchor.MetaProperties, function (e, t) {
          return "hatrf" !== e && "hstrf" !== e && "vatrf" !== e && "vstrf" !== e || !t ? "habox" !== e && "hsbox" !== e && "vabox" !== e && "vsbox" !== e || !t ? t : s.serialize(t) : o.serialize(t);
        }) : t === n._Change.Restore && this.restoreProperties(i.blob, e.Anchor.MetaProperties, function (e, t) {
          return "hatrf" !== e && "hstrf" !== e && "vatrf" !== e && "vstrf" !== e || !t ? "habox" !== e && "hsbox" !== e && "vabox" !== e && "vsbox" !== e || !t ? t : s.deserialize(t) : o.deserialize(t);
        });
      else if (t == n._Change.ParentAttached)
        this.resetAnchorProperties();
      else {
        d = this.getProperty("hacr"), g = this.getProperty("vacr");
        this.resetAnchorProperties(), this.setProperties([
          "hacr",
          "vacr"
        ], [
          d,
          g
        ]);
      }
    }, e.Anchor.prototype._setInitialAnchorProps = function (t, i) {
      var n = this.getParent(), a = n ? n.getGeometryBBox() : null, s = this.getGeometryBBox();
      if (a && (a.getWidth() || a.getHeight()) && s && (s.getWidth() || s.getHeight())) {
        var l = null;
        if (n instanceof e) {
          var h = this.getParent().getAngle();
          null === h || r.isEqualEps(h, 0, 0.0001) || (l = new o().rotated(-h), a = n.getPreTransformRect(l), s = this.getPreTransformRect(l));
        }
        if (t) {
          var A = this.getProperty("hacr");
          if (A)
            switch (n._notifyChange(e._Change.PrepareChildAnchoring), this.setProperties([
                "habox",
                "hsbox",
                "hatrf",
                "hstrf"
              ], [
                a,
                s,
                l,
                l
              ]), A) {
            case e.Anchor.AnchorType.Start:
              var c = this._getLeftDist(a, s);
              this.setProperties([
                "hdl",
                "hdr",
                "hcf"
              ], [
                c,
                null,
                null
              ]);
              break;
            case e.Anchor.AnchorType.Middle:
              var p = this._getMiddleHCoefficient(a, s);
              this.setProperties([
                "hdr",
                "hdl",
                "hcf"
              ], [
                null,
                null,
                p
              ]);
              break;
            case e.Anchor.AnchorType.End:
              var u = this._getRightDist(a, s);
              this.setProperties([
                "hdr",
                "hdl",
                "hcf"
              ], [
                u,
                null,
                null
              ]);
              break;
            case e.Anchor.AnchorType.Stretch:
              c = this._getLeftDist(a, s), u = this._getRightDist(a, s);
              this.setProperties([
                "hdr",
                "hdl",
                "hcf"
              ], [
                u,
                c,
                null
              ]);
            }
          else
            this.setProperties([
              "habox",
              "hsbox",
              "hatrf",
              "hstrf",
              "hdl",
              "hdr",
              "hcf"
            ], [
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]);
        }
        if (i) {
          var d = this.getProperty("vacr");
          if (d)
            switch (n._notifyChange(e._Change.PrepareChildAnchoring), this.setProperties([
                "vabox",
                "vsbox",
                "vatrf",
                "vstrf"
              ], [
                a,
                s,
                l,
                l
              ]), d) {
            case e.Anchor.AnchorType.Start:
              var g = this._getTopDist(a, s);
              this.setProperties([
                "vdt",
                "vdb",
                "vcf"
              ], [
                g,
                null,
                null
              ]);
              break;
            case e.Anchor.AnchorType.Middle:
              var f = this._getMiddleVCoefficient(a, s);
              this.setProperties([
                "vdt",
                "vdb",
                "vcf"
              ], [
                null,
                null,
                f
              ]);
              break;
            case e.Anchor.AnchorType.End:
              var m = this._getBottomDist(a, s);
              this.setProperties([
                "vdb",
                "vdt",
                "vcf"
              ], [
                m,
                null,
                null
              ]);
              break;
            case e.Anchor.AnchorType.Stretch:
              g = this._getTopDist(a, s), m = this._getBottomDist(a, s);
              this.setProperties([
                "vdb",
                "vdt",
                "vcf"
              ], [
                m,
                g,
                null
              ]);
            }
          else
            this.setProperties([
              "vabox",
              "vsbox",
              "vatrf",
              "vstrf",
              "vdt",
              "vdb",
              "vcf"
            ], [
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ]);
        }
      } else
        this.resetAnchorProperties();
    }, e.Anchor.prototype.resetAnchorProperties = function () {
      this.setProperties([
        "hacr",
        "habox",
        "hsbox",
        "hatrf",
        "hstrf",
        "hdl",
        "hdr",
        "hcf",
        "vacr",
        "vabox",
        "vsbox",
        "vatrf",
        "vstrf",
        "vdt",
        "vdb",
        "vcf"
      ], [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]);
    }, e.Anchor.prototype.relayoutAnchored = function (t) {
      var i = this.getProperty("hacr"), n = this.getProperty("vacr"), s = null, l = null, h = this.getProperty("hatrf"), A = this.getProperty("vatrf"), c = this.getProperty("habox"), p = this.getProperty("hsbox");
      if (i && c && p) {
        var u, d = this.getProperty("hstrf"), g = !1, f = !1, m = !1;
        (ne = r.isEqualEps(p.getHeight(), 0) || r.isEqualEps(p.getWidth(), 0)) && (u = d ? d.mapQuadrilateral(c) : new o().mapQuadrilateral(c));
        var y = (h = h ? h.multiplied(t) : t).mapQuadrilateral(c), _ = d ? d.mapQuadrilateral(p) : new o().mapQuadrilateral(p), v = y[0], b = y[3], C = y[1], w = y[2], E = _[0], B = _[3], x = _[1], P = _[2];
        if (ne) {
          var S = u[0], T = u[3], I = u[1];
          f = !r.isCoDirected(v.getX(), v.getY(), C.getX(), C.getY(), S.getX(), S.getY(), I.getX(), I.getY()), m = !r.isCoDirected(v.getX(), v.getY(), b.getX(), b.getY(), S.getX(), S.getY(), T.getX(), T.getY());
        } else
          g = r.segmentSide(E.getX(), E.getY(), B.getX(), B.getY(), x.getX(), x.getY()) != r.segmentSide(p.getX(), p.getY(), p.getX(), p.getY() + p.getHeight(), p.getX() + p.getWidth(), p.getY() + p.getHeight()), f = !r.isCoDirected(v.getX(), v.getY(), C.getX(), C.getY(), E.getX(), E.getY(), x.getX(), x.getY()), m = !r.isCoDirected(v.getX(), v.getY(), b.getX(), b.getY(), E.getX(), E.getY(), B.getX(), B.getY());
        var F = function () {
            var t = 0, i = 0, n = v.getX(), o = v.getY(), s = b.getX(), l = b.getY(), h = w.getX(), A = w.getY(), c = C.getX(), p = C.getY(), u = E.getX(), d = E.getY(), y = B.getX(), _ = B.getY();
            if (f && (n = C.getX(), o = C.getY(), s = w.getX(), l = w.getY(), h = b.getX(), A = b.getY(), c = v.getX(), p = v.getY()), m) {
              var x = n, S = o;
              n = s, o = l, s = x, l = S, h = c, A = p;
            }
            var T = this.getProperty("hdl"), I = r.pointToLineDist(n, o, s, l, u, d);
            if (I = -r.segmentSide(n, o, s, l, u, d) * I, g && (I = -I), null != I && !r.isEqualEps(I, T, e.Anchor.Eps)) {
              var F = T - I, R = P.getX(), D = P.getY(), k = r.getSin(u, d, y, _, R, D), G = r.ptDist(y, _, R, D), Q = k * G;
              if (r.isEqualEps(Q, 0, e.Anchor.Eps) || r.isEqualEps(u, y) && r.isEqualEps(d, _))
                if (Q = (k = r.getSin(n, o, s, l, h, A)) * (G = r.ptDist(s, l, h, A)), r.isEqualEps(Q, 0, e.Anchor.Eps)) {
                  if (!r.isEqualEps(n, s) || !r.isEqualEps(o, l)) {
                    var M = new a(o - l, s - n), N = Math.sqrt(r.vDotProduct(M.getX(), M.getY(), M.getX(), M.getY()));
                    t = F * (M = new a(M.getX() / N, M.getY() / N)).getX(), i = F * M.getY();
                  }
                } else
                  t = (h - s) * (Q = F / Q), i = (A - l) * Q;
              else
                t = (R - y) * (Q = F / Q), i = (D - _) * Q;
            }
            return new a(t, i);
          }.bind(this), R = function () {
            var t = 0, i = 0, n = C.getX(), o = C.getY(), s = w.getX(), l = w.getY(), h = b.getX(), A = b.getY(), c = v.getX(), p = v.getY(), u = x.getX(), d = x.getY(), y = P.getX(), _ = P.getY();
            if (f && (n = v.getX(), o = v.getY(), s = b.getX(), l = b.getY(), h = w.getX(), A = w.getY(), c = C.getX(), p = C.getY()), m) {
              var E = n, S = o;
              n = s, o = l, s = E, l = S, h = c, A = p;
            }
            var T = this.getProperty("hdr"), I = r.pointToLineDist(n, o, s, l, u, d);
            if (I = -r.segmentSide(n, o, s, l, u, d) * I, g && (I = -I), null != I && !r.isEqualEps(I, T, e.Anchor.Eps)) {
              var F = T - I, R = B.getX(), D = B.getY(), k = r.getSin(u, d, y, _, R, D), G = r.ptDist(y, _, R, D), Q = k * G;
              if (r.isEqualEps(Q, 0, e.Anchor.Eps) || r.isEqualEps(u, y) && r.isEqualEps(d, _))
                if (Q = (k = r.getSin(n, o, s, l, h, A)) * (G = r.ptDist(s, l, h, A)), r.isEqualEps(Q, 0, e.Anchor.Eps)) {
                  if (!r.isEqualEps(n, s) || !r.isEqualEps(o, l)) {
                    var M = new a(o - l, s - n), N = Math.sqrt(r.vDotProduct(M.getX(), M.getY(), M.getX(), M.getY()));
                    t = F * (M = new a(M.getX() / N, M.getY() / N)).getX(), i = F * M.getY();
                  }
                } else
                  t = (s - h) * (Q = F / Q), i = (l - A) * Q;
              else
                t = (y - R) * (Q = F / Q), i = (_ - D) * Q;
            }
            return new a(t, i);
          }.bind(this);
        switch (i) {
        case 1:
          var D = F();
          s = new o().translated(D.getX(), D.getY());
          break;
        case 2:
          var k = _[0].add(_[1]);
          k = new a(k.getX() / 2, k.getY() / 2);
          var G = _[2].add(_[3]);
          if (G = new a(G.getX() / 2, G.getY() / 2), null != (D = r.getLinesFromPointsIntersection(y[0].getX(), y[0].getY(), y[1].getX(), y[1].getY(), k.getX(), k.getY(), G.getX(), G.getY()))) {
            var Q = this.getProperty("hcf");
            f ? (_e = Q * (y[0].getX() - y[1].getX()) + y[1].getX(), ve = Q * (y[0].getY() - y[1].getY()) + y[1].getY()) : (_e = Q * (y[1].getX() - y[0].getX()) + y[0].getX(), ve = Q * (y[1].getY() - y[0].getY()) + y[0].getY()), s = new o().translated(_e - D.getX(), ve - D.getY());
          }
          break;
        case 3:
          D = R();
          s = new o().translated(D.getX(), D.getY());
          break;
        case 4:
          var M, N = _[0], U = _[1], V = F(), O = R(), L = V.getX(), Y = V.getY(), X = O.getX() - L, H = O.getY() - Y, W = U.getX() - N.getX(), Z = U.getY() - N.getY(), z = X + W, j = H + Z;
          M = r.isCoDirected(0, 0, W, Z, 0, 0, z, j) && (M = Math.sqrt(z * z + j * j)) > e.Transform.MinimalDimention ? M : e.Transform.MinimalDimention;
          var J = r.ptDist(N.getX(), N.getY(), U.getX(), U.getY()), q = M / (J = J > e.Transform.MinimalDimention ? J : e.Transform.MinimalDimention), K = Math.atan2(Z, W);
          s = new o().translated(-N.getX(), -N.getY()).rotated(-K).scaled(q, 1).rotated(K).translated(N.getX(), N.getY()).translated(L, Y);
        }
      }
      var $ = this.getProperty("vabox"), ee = this.getProperty("vsbox");
      if (n && $ && ee) {
        var te = this.getProperty("vstrf");
        te = te || new o(), s && (te = te.multiplied(s));
        var ie, ne;
        g = !1, f = !1, m = !1;
        (ne = r.isEqualEps(ee.getHeight(), 0) || r.isEqualEps(ee.getWidth(), 0)) && (ie = te ? te.mapQuadrilateral($) : new o().mapQuadrilateral($));
        var re = (A = A ? A.multiplied(t) : t).mapQuadrilateral($), oe = te.mapQuadrilateral(ee), ae = re[0], se = re[3], le = re[1], he = re[2], Ae = oe[0], ce = oe[3], pe = oe[1], ue = oe[2];
        if (ne) {
          var de = ie[0], ge = ie[3], fe = ie[1];
          f = !r.isCoDirected(ae.getX(), ae.getY(), le.getX(), le.getY(), de.getX(), de.getY(), fe.getX(), fe.getY()), m = !r.isCoDirected(ae.getX(), ae.getY(), se.getX(), se.getY(), de.getX(), de.getY(), ge.getX(), ge.getY());
        } else
          g = r.segmentSide(Ae.getX(), Ae.getY(), ce.getX(), ce.getY(), pe.getX(), pe.getY()) != r.segmentSide(ee.getX(), ee.getY(), ee.getX(), ee.getY() + ee.getHeight(), ee.getX() + ee.getWidth(), ee.getY() + ee.getHeight()), f = !r.isCoDirected(ae.getX(), ae.getY(), le.getX(), le.getY(), Ae.getX(), Ae.getY(), pe.getX(), pe.getY()), m = !r.isCoDirected(ae.getX(), ae.getY(), se.getX(), se.getY(), Ae.getX(), Ae.getY(), ce.getX(), ce.getY());
        var me = function () {
            var t = 0, i = 0, n = ae.getX(), o = ae.getY(), s = le.getX(), l = le.getY(), h = he.getX(), A = he.getY(), c = se.getX(), p = se.getY(), u = Ae.getX(), d = Ae.getY(), y = pe.getX(), _ = pe.getY();
            if (m && (n = se.getX(), o = se.getY(), s = he.getX(), l = he.getY(), h = le.getX(), A = le.getY(), c = ae.getX(), p = ae.getY()), f) {
              var v = n, b = o;
              n = s, o = l, s = v, l = b, h = c, A = p;
            }
            var C = this.getProperty("vdt"), w = r.pointToLineDist(n, o, s, l, u, d);
            if (w = r.segmentSide(n, o, s, l, u, d) * w, g && (w = -w), null != w && !r.isEqualEps(w, C, e.Anchor.Eps)) {
              var E = C - w, B = oe[2].getX(), x = oe[2].getY(), P = r.getSin(u, d, y, _, B, x), S = r.ptDist(y, _, B, x), T = P * S;
              if (r.isEqualEps(T, 0, e.Anchor.Eps) || r.isEqualEps(u, y) && r.isEqualEps(d, _))
                if (T = (P = r.getSin(n, o, s, l, h, A)) * (S = r.ptDist(s, l, h, A)), r.isEqualEps(T, 0, e.Anchor.Eps)) {
                  if (!r.isEqualEps(n, s) || !r.isEqualEps(o, l)) {
                    var I = new a(o - l, s - n), F = Math.sqrt(r.vDotProduct(I.getX(), I.getY(), I.getX(), I.getY()));
                    t = E * (I = new a(I.getX() / F, I.getY() / F)).getX(), i = E * I.getY();
                  }
                } else
                  t = (h - s) * (T = E / T), i = (A - l) * T;
              else
                t = (B - y) * (T = E / T), i = (x - _) * T;
            }
            return new a(t, i);
          }.bind(this), ye = function () {
            var t = 0, i = 0, n = se.getX(), o = se.getY(), s = he.getX(), l = he.getY(), h = le.getX(), A = le.getY(), c = ae.getX(), p = ae.getY(), u = ce.getX(), d = ce.getY(), y = ue.getX(), _ = ue.getY();
            if (m && (n = ae.getX(), o = ae.getY(), s = le.getX(), l = le.getY(), h = he.getX(), A = he.getY(), c = se.getX(), p = se.getY()), f) {
              var v = n, b = o;
              n = s, o = l, s = v, l = b, h = c, A = p;
            }
            var C = this.getProperty("vdb"), w = r.pointToLineDist(n, o, s, l, u, d);
            if (w = r.segmentSide(n, o, s, l, u, d) * w, g && (w = -w), null != w && !r.isEqualEps(w, C, e.Anchor.Eps)) {
              var E = C - w, B = oe[1].getX(), x = oe[1].getY(), P = r.getSin(u, d, y, _, B, x), S = r.ptDist(y, _, B, x), T = P * S;
              if (r.isEqualEps(T, 0, e.Anchor.Eps) || r.isEqualEps(u, y) && r.isEqualEps(d, _))
                if (T = (P = r.getSin(n, o, s, l, h, A)) * (S = r.ptDist(s, l, h, A)), r.isEqualEps(T, 0, e.Anchor.Eps)) {
                  if (!r.isEqualEps(n, s) || !r.isEqualEps(o, l)) {
                    var I = new a(o - l, s - n), F = Math.sqrt(r.vDotProduct(I.getX(), I.getY(), I.getX(), I.getY()));
                    t = E * (I = new a(I.getX() / F, I.getY() / F)).getX(), i = E * I.getY();
                  }
                } else
                  t = (s - h) * (T = E / T), i = (l - A) * T;
              else
                t = (y - B) * (T = E / T), i = (_ - x) * T;
            }
            return new a(t, i);
          }.bind(this);
        switch (n) {
        case 1:
          D = me();
          l = new o().translated(D.getX(), D.getY());
          break;
        case 2:
          k = oe[0].add(oe[3]);
          k = new a(k.getX() / 2, k.getY() / 2);
          G = oe[1].add(oe[2]);
          if (G = new a(G.getX() / 2, G.getY() / 2), null != (D = r.getLinesFromPointsIntersection(re[0].getX(), re[0].getY(), re[3].getX(), re[3].getY(), k.getX(), k.getY(), G.getX(), G.getY()))) {
            var _e, ve, be = this.getProperty("vcf");
            m ? (_e = be * (re[0].getX() - re[3].getX()) + re[3].getX(), ve = be * (re[0].getY() - re[3].getY()) + re[3].getY()) : (_e = be * (re[3].getX() - re[0].getX()) + re[0].getX(), ve = be * (re[3].getY() - re[0].getY()) + re[0].getY()), l = new o().translated(_e - D.getX(), ve - D.getY());
          }
          break;
        case 3:
          D = ye();
          l = new o().translated(D.getX(), D.getY());
          break;
        case 4:
          N = oe[0], U = oe[3];
          var Ce, we = me(), Ee = ye(), Be = we.getX(), xe = we.getY(), Pe = Ee.getX() - Be, Se = Ee.getY() - xe, Te = U.getX() - N.getX(), Ie = U.getY() - N.getY(), Fe = Pe + Te, Re = Se + Ie;
          Ce = r.isCoDirected(0, 0, Te, Ie, 0, 0, Fe, Re) && (Ce = Math.sqrt(Fe * Fe + Re * Re)) > e.Transform.MinimalDimention ? Ce : e.Transform.MinimalDimention;
          var De = r.ptDist(N.getX(), N.getY(), U.getX(), U.getY()), ke = Ce / (De = De > e.Transform.MinimalDimention ? De : e.Transform.MinimalDimention);
          K = Math.atan2(Te, Ie);
          l = new o().translated(-N.getX(), -N.getY()).rotated(K).scaled(1, ke).rotated(-K).translated(N.getX(), N.getY()).translated(Be, xe);
        }
      }
      if ((i || n) && (this.setProperties([
          "hatrf",
          "vatrf"
        ], [
          h,
          A
        ]), s || l)) {
        var Ge = s || new o();
        l && (Ge = Ge.multiplied(l));
        var Qe = t.getMatrix(), Me = 4 != i && 4 != n || r.isEqualEps(Qe[0], 1) && r.isEqualEps(Qe[1], 0) && r.isEqualEps(Qe[2], 0) && r.isEqualEps(Qe[3], 1);
        this.transform(Ge, Me, !1);
      }
    }, e.Anchor.prototype._getLeftDist = function (e, t) {
      return t.getX() - e.getX();
    }, e.Anchor.prototype._getRightDist = function (e, t) {
      return t.getX() + t.getWidth() - e.getX() - e.getWidth();
    }, e.Anchor.prototype._getMiddleHCoefficient = function (t, i) {
      var n = (i.getX() + i.getX() + i.getWidth()) / 2;
      return t.getWidth() > 0 ? (n - t.getX()) / t.getWidth() : e.Transform.MinimalDimention;
    }, e.Anchor.prototype._getTopDist = function (e, t) {
      return t.getY() - e.getY();
    }, e.Anchor.prototype._getBottomDist = function (e, t) {
      return t.getY() + t.getHeight() - e.getY() - e.getHeight();
    }, e.Anchor.prototype._getMiddleVCoefficient = function (t, i) {
      var n = (i.getY() + i.getY() + i.getHeight()) / 2;
      return t.getHeight() ? (n - t.getY()) / t.getHeight() : e.Transform.MinimalDimention;
    }, e.Anchor.prototype.toString = function () {
      return "[Mixin GElement.Anchor]";
    };
  };
}
