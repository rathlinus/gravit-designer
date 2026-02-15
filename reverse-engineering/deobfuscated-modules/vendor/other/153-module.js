/**
 * Module 153
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
  var n = require(0) /* GObject */, r = require(99) /* module */, o = require(5) /* GPoint */, a = require(6) /* GRect */, s = require(104) /* GItem */, l = require(22) /* GElement */, h = require(210) /* InvalidationRequestEvent */, A = require(24) /* GEditorOptions */, c = require(12) /* GMath */, p = require(2) /* GNode */, u = require(69) /* GBlock */, d = require(159) /* GLayer */, g = require(83) /* GPage */, f = require(140) /* module */;
  require(11) /* GUtil */;
  function m(e) {
    r.call(this, e), this._priority = m.PRIORITY.DISTANCE_FIRST;
  }
  n.inheritAndMix(m, r, [r.Map]), m.ID = "guide.bbox", m.GUIDE_MARGIN = 20, m.PRIORITY = {
    DISTANCE_FIRST: 1,
    BBOX_FIRST: 2
  }, m.prototype._priority = null, m.prototype._snapElems = null, m.prototype._scoped = false, m.prototype._snapMainPage = null, m.prototype._eSnapElems = null, m.prototype.getId = function () {
    return m.ID;
  }, m.prototype.map = function (e, t, i, n, r, s) {
    var l, A, p = null, u = null, d = null, g = null, f = null, y = null, _ = null, v = i ? m.GUIDE_MARGIN : 0, b = (n = r ? n / r : n, null), C = null, w = null, E = this._scene.getActivePage(), B = new o(e, t), x = B;
    this._guides.isMultiPageEnabled() ? (E && (A = E.getPosition(true), s ? B = B.subtract(A) : x = B.add(A)), this._scene.iteratePages(function (e) {
      var t = e.getGeometryBBox(), i = e.getPosition(true);
      return t ? (t = t.translated(i.getX(), i.getY())).containsPoint(x) ? (b = e, C = A ? t.translated(-A.getX(), -A.getY()) : t, w = i, false) : undefined : (b = e, C = null, w = i, false);
    }.bind(this))) : E && (A = (b = E).getPosition(false), C = b.getGeometryBBox(), w = A, s && (B = B.subtract(A)));
    var P = function (e) {
      if (this._exclusions && this._exclusions.length)
        for (var t = 0; t < this._exclusions.length; ++t)
          if (this._exclusions[t] == e)
            return;
      var i = e.getGeometryBBox();
      if (i && !i.isEmpty()) {
        var r = i.getSide(a.Side.TOP_LEFT).add(w), s = i.getSide(a.Side.BOTTOM_RIGHT).add(w), m = i.getSide(a.Side.CENTER).add(w);
        A && (r = r.subtract(A), s = s.subtract(A), m = m.subtract(A));
        var _ = [
            r,
            s,
            m
          ], b = false;
        for (t = 0; t < _.length && !b; ++t)
          C && !C.containsPoint(_[t], true) || (b = true);
        if (!b)
          return;
        for (t = 0; t < _.length; ++t) {
          var E = _[t];
          (!C || C.getX() <= E.getX() && C.getX() + C.getWidth() >= E.getX()) && (l = Math.abs(B.getX() - E.getX()), null === p && l <= n || null !== p && l < Math.abs(B.getX() - p) ? (p = E.getX(), f = l, d = {
            bounds: [[
                r.getY(),
                s.getY()
              ]],
            orient: h.Orientation.V
          }, B.getY() <= r.getY() ? d.line = [
            new o(p, B.getY() - v),
            new o(p, s.getY() + v)
          ] : r.getY() < B.getY() && B.getY() < s.getY() ? d.line = [
            new o(p, r.getY() - v),
            new o(p, s.getY() + v)
          ] : d.line = [
            new o(p, r.getY() - v),
            new o(p, B.getY() + v)
          ]) : null !== p && c.isEqualEps(l, Math.abs(B.getX() - p)) && (p = E.getX(), f = l, d.bounds.push([
            r.getY(),
            s.getY()
          ]), B.getY() <= r.getY() ? d.line[1].getY() < s.getY() + v && (d.line[1] = new o(p, s.getY() + v)) : r.getY() < B.getY() && B.getY() < s.getY() ? (d.line[1].getY() < s.getY() + v && (d.line[1] = new o(p, s.getY() + v)), d.line[0].getY() > r.getY() - v && (d.line[0] = new o(p, r.getY() - v))) : d.line[0].getY() > r.getY() - v && (d.line[0] = new o(p, r.getY() - v)))), (!C || C.getY() <= E.getY() && C.getY() + C.getHeight() >= E.getY()) && (l = Math.abs(B.getY() - E.getY()), null === u && l <= n || null !== u && l < Math.abs(B.getY() - u) ? (u = E.getY(), y = l, g = {
            bounds: [[
                r.getX(),
                s.getX()
              ]],
            orient: h.Orientation.H
          }, B.getX() <= r.getX() ? g.line = [
            new o(B.getX() - v, u),
            new o(s.getX() + v, u)
          ] : r.getX() < B.getX() && B.getX() < s.getX() ? g.line = [
            new o(r.getX() - v, u),
            new o(s.getX() + v, u)
          ] : g.line = [
            new o(r.getX() - v, u),
            new o(B.getX() + v, u)
          ]) : null !== u && c.isEqualEps(l, Math.abs(B.getY() - u)) && (u = E.getY(), y = l, g.bounds.push([
            r.getX(),
            s.getX()
          ]), B.getX() <= r.getX() ? g.line[1].getX() < s.getX() + v && (g.line[1] = new o(s.getX() + v, u)) : r.getX() < B.getX() && B.getX() < s.getX() ? (g.line[1].getX() < s.getX() + v && (g.line[1] = new o(s.getX() + v, u)), g.line[0].getX() > r.getX() - v && (g.line[0] = new o(r.getX() - v, u))) : g.line[0].getX() > r.getX() - v && (g.line[0] = new o(r.getX() - v, u))));
        }
      }
    }.bind(this);
    if (b) {
      this._scoped && b != this._snapMainPage && this._setEffectiveScope(b);
      var S = B.subtract(w);
      A && (S = S.add(A)), this._applySnappingToPivots([S], n, b, P);
    }
    return null === p && null === u || (_ = {
      x: null !== p ? {
        value: p,
        guide: d,
        delta: f,
        page: E
      } : null,
      y: null !== u ? {
        value: u,
        guide: g,
        delta: y,
        page: E
      } : null
    }), _;
  }, m.prototype.useExclusions = function (e) {
    if (e && e.length) {
      var module;
      this._exclusions = [];
      for (var require = 0; require < e.length; ++require)
        ((module = e[require]) instanceof s || module instanceof d) && this._exclusions.push(module);
    }
  }, m.prototype.setPriority = function (e) {
    this._priority = e;
  }, m.prototype.getPriority = function () {
    return this._priority;
  }, m.prototype.hasPriorityDistanceFirst = function () {
    return this._priority === m.PRIORITY.BBOX_FIRST;
  }, m.prototype.checkDistanceGuidesMapping = function (e, t, i, n, r, o, s) {
    var l, h = [], A = [], c = null, p = null, u = null, d = null, g = (t = i ? t / i : t, [
        e.getSide(a.Side.TOP_LEFT),
        e.getSide(a.Side.BOTTOM_RIGHT),
        e.getSide(a.Side.CENTER)
      ]), f = e, m = null, y = this._scene.getActivePage();
    if (this._guides.isMultiPageEnabled()) {
      y && !n && (l = y.getPosition(true), g = g.map(function (e) {
        return e.add(l);
      }), f = f.translated(l.getX(), l.getY()));
      for (var _ = null, v = 0; v < g.length && !m; ++v)
        this._scene.iteratePages(function (e) {
          var t = e.getGeometryBBox(), i = e.getPosition(true);
          if (t && t.translated(i.getX(), i.getY()).containsPoint(g[v]))
            return m = e, _ = i, false;
        }.bind(this));
      _ && (g = g.map(function (e) {
        return e.subtract(_);
      }), f = f.translated(-_.getX(), -_.getY()));
    } else
      (m = y) && n && (l = m.getPosition(false), g = g.map(function (e) {
        return e.subtract(l);
      }), f = f.translated(-l.getX(), -l.getY()));
    if (!m)
      return null;
    var b = function (e, i, n) {
      if (this._exclusions && this._exclusions.length)
        for (var r = 0; r < this._exclusions.length; ++r)
          if (this._exclusions[r] == e)
            return;
      var o = e.getGeometryBBox();
      if (o && !o.isEmpty()) {
        var s, l, c = [
            o.getSide(a.Side.TOP_LEFT),
            o.getSide(a.Side.BOTTOM_RIGHT),
            o.getSide(a.Side.CENTER)
          ], p = null, u = null;
        for (r = 0; r < c.length; ++r)
          for (var d = c[r], f = 0; f < g.length; ++f)
            s = d.getX() - g[f].getX(), (l = Math.abs(s)) <= t && (!p || l < p.absDelta) && (p = {
              bBox: o,
              delta: s,
              absDelta: l
            }), s = d.getY() - g[f].getY(), (l = Math.abs(s)) <= t && (!u || l < u.absDelta) && (u = {
              bBox: o,
              delta: s,
              absDelta: l
            });
        p && (i || h).push(p), u && (n || A).push(u);
      }
    }.bind(this);
    this._scoped && m != this._snapMainPage && this._setEffectiveScope(m), this._applySnappingToPivots(g, t, m, b);
    var C = function (e) {
        for (var t, i = false, n = [], r = [], o = null, a = 0; a < e.length && !i; ++a) {
          t = e[a], !(i = !f.intersected(t.bBox).isEmpty()) && (null === o || t.absDelta <= o) && (null === o || t.absDelta < o ? (t.delta >= 0 ? (n = [t], r = []) : (r = [t], n = []), o = t.absDelta) : t.delta >= 0 ? n.push(t) : r.push(t));
        }
        return i && (n = [], r = []), {
          minDeltaPos: n,
          minDeltaNeg: r
        };
      }, w = function (e, i) {
        for (var n, r, o = [], a = 0; a < e.length - 1; ++a)
          for (var s = a + 1; s < e.length; ++s) {
            var l = e[a].bBox.getXYOffset(e[s].bBox, true, true);
            i ? l.y && !l.x && o.push({
              offsJfromI: l.y,
              i: a,
              j: s
            }) : l.x && !l.y && o.push({
              offsJfromI: l.x,
              i: a,
              j: s
            });
          }
        for (var h = null, A = 0; A < o.length; ++A) {
          var c = e[o[A].i].bBox, p = e[o[A].j].bBox;
          if (i ? (n = f.getXYOffset(c, false, true).y, r = f.getXYOffset(p, false, true).y) : (n = f.getXYOffset(c, true, false).x, r = f.getXYOffset(p, true, false).x), n && r) {
            var u = Math.abs(Math.abs(n) - Math.abs(o[A].offsJfromI));
            if (u <= t && (!h || u < h.absDelta))
              h = {
                absDelta: u,
                delta: Math.abs(o[A].offsJfromI) >= Math.abs(n) && n > 0 || Math.abs(o[A].offsJfromI) < Math.abs(n) && n < 0 ? -u : u,
                bbox1: c,
                bbox2: p
              };
            if ((u = Math.abs(Math.abs(r) - Math.abs(o[A].offsJfromI))) <= t && (!h || u < h.absDelta))
              h = {
                absDelta: u,
                delta: Math.abs(o[A].offsJfromI) >= Math.abs(r) && r > 0 || Math.abs(o[A].offsJfromI) < Math.abs(r) && r < 0 ? -u : u,
                bbox1: c,
                bbox2: p
              };
            if ((u = Math.abs(Math.abs(n) - Math.abs(r)) / 2) <= t && (!h || u < h.absDelta))
              h = {
                absDelta: u,
                delta: Math.abs(n) >= Math.abs(r) && n < 0 && r > 0 || Math.abs(n) <= Math.abs(r) && n > 0 && r < 0 ? -u : u,
                bbox1: c,
                bbox2: p
              };
          }
        }
        var d = null;
        return h && (d = i ? {
          absDeltaX: e[0].absDelta,
          deltaX: e[0].delta,
          absDeltaY: h.absDelta,
          deltaY: h.delta,
          bbox1: h.bbox1,
          bbox2: h.bbox2
        } : {
          absDeltaX: h.absDelta,
          deltaX: h.delta,
          absDeltaY: e[0].absDelta,
          deltaY: e[0].delta,
          bbox1: h.bbox1,
          bbox2: h.bbox2
        }), d;
      };
    if (h.length > 1) {
      var E = (S = C(h)).minDeltaPos, B = S.minDeltaNeg;
      if (E.length > 1 || B.length > 1) {
        var x = null, P = null;
        E.length > 1 && (x = w(E, true)), B.length > 1 && (P = w(B, true)), x && (!P || x.absDeltaY <= P.absDeltaY) ? u = x : P && (u = P);
      }
    }
    if (A.length > 1) {
      var S, T = (S = C(A)).minDeltaPos, I = S.minDeltaNeg;
      if (T.length > 1 || I.length > 1) {
        var F = null, R = null;
        T.length > 1 && (F = w(T, false)), I.length > 1 && (R = w(I, false)), F && (!R || F.absDeltaX <= R.absDeltaX) ? d = F : R && (d = R);
      }
    }
    if (u || d)
      if (u && (!d || u.absDeltaX < d.absDeltaY || u.absDeltaX == d.absDeltaY && u.absDeltaY <= d.absDeltaX)) {
        c = e.translated(u.deltaX, u.deltaY);
        var D = f.translated(u.deltaX, u.deltaY);
        if (r[0] = u.deltaX, r[1] = u.deltaY, p = this.getDistGuides(u.bbox1, u.bbox2, D, true))
          for (v = 0; v < p.length; ++v)
            o.push({
              guide: p[v],
              page: m
            });
      } else if (d) {
        c = e.translated(d.deltaX, d.deltaY);
        D = f.translated(d.deltaX, d.deltaY);
        if (r[0] = d.deltaX, r[1] = d.deltaY, p = this.getDistGuides(d.bbox1, d.bbox2, D, false))
          for (v = 0; v < p.length; ++v)
            s.push({
              guide: p[v],
              page: m
            });
      }
    return c;
  }, m.prototype.getDistGuides = function (e, t, i, n) {
    var r, o, s, l, p, u = [];
    n ? (o = (r = e.getY()) + e.getHeight(), l = (s = t.getY()) + t.getHeight(), p = i.getY(), i.getHeight()) : (o = (r = e.getX()) + e.getWidth(), l = (s = t.getX()) + t.getWidth(), p = i.getX(), i.getWidth());
    var d = [];
    o < s && o < p ? (d.push(e), l < p ? (d.push(t), d.push(i)) : (d.push(i), d.push(t))) : l < r && l < p ? (d.push(t), o < p ? (d.push(e), d.push(i)) : (d.push(i), d.push(e))) : (d.push(i), o < s ? (d.push(e), d.push(t)) : (d.push(t), d.push(e)));
    for (var g = 0; g < d.length - 1; ++g) {
      var f = d[g], m = d[g + 1], y = [], _ = [];
      n ? (y.push(f.getSide(a.Side.BOTTOM_LEFT)), y.push(f.getSide(a.Side.BOTTOM_CENTER)), y.push(f.getSide(a.Side.BOTTOM_RIGHT)), _.push(m.getSide(a.Side.TOP_LEFT)), _.push(m.getSide(a.Side.TOP_CENTER)), _.push(m.getSide(a.Side.TOP_RIGHT))) : (y.push(f.getSide(a.Side.TOP_RIGHT)), y.push(f.getSide(a.Side.RIGHT_CENTER)), y.push(f.getSide(a.Side.BOTTOM_RIGHT)), _.push(m.getSide(a.Side.TOP_LEFT)), _.push(m.getSide(a.Side.LEFT_CENTER)), _.push(m.getSide(a.Side.BOTTOM_LEFT)));
      for (var v = true, b = 0; b < y.length; ++b)
        for (var C = y[b], w = 0; w < _.length; ++w) {
          var E = _[w];
          if (n && c.isEqualEps(C.getX(), E.getX()) || !n && c.isEqualEps(C.getY(), E.getY())) {
            var B = {
              line: [
                C,
                E
              ]
            };
            v ? (n ? (B.orient = h.Orientation.V, B.valueSegments = [{
                bounds: [
                  C.getY(),
                  E.getY()
                ]
              }]) : (B.orient = h.Orientation.H, B.valueSegments = [{
                bounds: [
                  C.getX(),
                  E.getX()
                ]
              }]), v = false) : (B.freeSegments = B.freeSegments ? B.freeSegments : [], B.freeSegmentsColor = A.distanceHelperColor, n ? (B.orient = h.Orientation.V, B.freeSegments.push([
              C.getY(),
              E.getY()
            ])) : (B.orient = h.Orientation.H, B.freeSegments.push([
              C.getX(),
              E.getX()
            ]))), u.push(B);
          }
        }
    }
    return u.length ? u : null;
  }, m.prototype.isRelativeToPage = function () {
    return true;
  }, m.prototype.isScopeSupported = function () {
    return true;
  }, m.prototype.setScope = function (e) {
    if (e && e.length) {
      this._snapElems = [];
      for (var module = null, require = false, n = this._scene.getActivePage(), r = 0; r < e.length; ++r) {
        var o = e[r];
        if (o.hasMixin(p.Container))
          for (var a = o.getFirstChild(); null != a; a = a.getNext())
            a instanceof u && this._snapElems.push(a);
        require || (module = o instanceof g ? o : o.findParent(function (e) {
          return e instanceof g;
        })) == n && (require = true);
      }
      this._scoped = true, this._snapMainPage = require ? n : module;
    } else
      this._snapElems = null, this._scoped = false, this._snapMainPage = null;
    this._eSnapElems = null;
  }, m.prototype._setEffectiveScope = function (e) {
    if (this._eSnapElems = [], e.hasMixin(p.Container))
      for (var module = e.getFirstChild(); null != module; module = module.getNext())
        module instanceof u && this._eSnapElems.push(module);
  }, m.prototype._getEffectiveSnapElems = function () {
    return this._eSnapElems ? this._eSnapElems : this._snapElems;
  }, m.prototype._getAllChildrenInBBox = function (e, t) {
    var i = [];
    if (!e.hasMixin(p.Container))
      return [];
    if (e.hasMixin(l.Accelerated))
      i = e.retrieveChildrenInGeometryBBox(t, f.RETRIEVE_MODE_INTERSECT) || [];
    else
      for (var n = e.getFirstChild(); n; n = n.getNext())
        if (n instanceof l) {
          var r = n.getGeometryBBox();
          r && r.intersectsRect(t) && i.push(n);
        }
    for (var o = [], a = 0; a < i.length; a++)
      o = o.concat(this._getAllChildrenInBBox(i[a], t));
    return i.concat(o);
  }, m.prototype._applySnappingToPivots = function (e, t, i, n) {
    var r = i.getGeometryBBox();
    if (r) {
      for (var o = [], h = 0; h < e.length; h++) {
        var A = e[h].getX(), c = e[h].getY(), p = new a(A - t, r.getY() - t, 2 * t, r.getHeight() + 2 * t), u = new a(r.getX() - t, c - t, r.getWidth() + 2 * t, 2 * t);
        o = (o = o.concat(this._getAllChildrenInBBox(i, p).filter(function (e) {
          return o.indexOf(e) < 0;
        }))).concat(this._getAllChildrenInBBox(i, u).filter(function (e) {
          return o.indexOf(e) < 0;
        }));
      }
      for (h = 0; h < o.length; h++) {
        var g = o[h];
        if ((g instanceof s || g instanceof d) && !g.hasFlag(l.Flag.Hidden)) {
          var f = null, m = this._getEffectiveSnapElems();
          if (m || g.getParent() instanceof s) {
            if (m)
              for (var y = 0; y < m.length && !f; ++y)
                g == m[y] && (f = g);
          } else
            f = g;
          f && n(f);
        }
      }
    }
  }, m.prototype.toString = function () {
    return "[Object GBBoxGuide]";
  }, exports.exports = m;
}
