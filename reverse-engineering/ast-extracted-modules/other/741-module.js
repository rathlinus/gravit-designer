/**
 * Module 741
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
  var n = i(0), r = i(99), o = i(5), a = i(104), s = i(22), l = i(36), h = i(2), A = i(24), c = i(45), p = i(6), u = i(113), d = i(140), g = (i(11), [u]);
  function f(e) {
    r.call(this, e);
  }
  n.inheritAndMix(f, r, [
    r.Map,
    r.DetailMap
  ]), f.ID = "guide.points", f.prototype._priority = null, f.prototype._snapElems = null, f.prototype._scoped = !1, f.prototype._snapMainPage = null, f.prototype._eSnapElems = null, f.prototype.getId = function () {
    return f.ID;
  }, f.prototype.map = function (e, t, i, n, r, u) {
    var f, m, y = null, _ = null, v = null, b = null, C = null, w = null, E = null, B = (n = r ? n / r : n, null), x = null, P = null, S = new o(e, t), T = S, I = this._scene.getActivePage();
    this._guides.isMultiPageEnabled() ? (I && (m = I.getPosition(!0), u ? S = S.subtract(m) : T = S.add(m)), this._scene.iteratePages(function (e) {
      var t = e.getGeometryBBox(), i = e.getPosition(!0);
      if (t && t.translated(i.getX(), i.getY()).containsPoint(T))
        return B = e, x = t, P = i, !1;
    }.bind(this))) : I && (m = (B = I).getPosition(!1), x = B.getGeometryBBox(), P = m, u && (S = S.subtract(m)));
    var F = S;
    P && (F = F.subtract(P)), m && (F = F.add(m));
    var R = function (e, t, i) {
        var n = A.annotationHandles.path.node.straightType;
        return t !== c.AnchorPoint.Type.Asymmetric && t !== c.AnchorPoint.Type.Symmetric && t !== c.AnchorPoint.Type.Mirror && t !== c.AnchorPoint.Type.Connector || (n = A.annotationHandles.path.node.smoothType, i && (n = A.annotationHandles.path.node.autoType)), {
          pt: e,
          annot: n,
          size: A.annotationHandles.path.node.size
        };
      }, D = function (e) {
        if (this._exclusions && this._exclusions.length)
          for (var t = 0; t < this._exclusions.length; ++t)
            if (this._exclusions[t] == e)
              return;
        var i, r = function (e) {
            for (var t = 0; t < g.length; t++)
              if (e instanceof g[t])
                return !0;
            return !1;
          }(e), a = l.getEditor(e), s = e.getGeometryBBox(), h = new p(F.getX() - n, s.getY() - n, 2 * n, s.getHeight() + 2 * n);
        if (x && (h = h.intersected(x)), i = a ? a.findPivots(h) : e.findPivots(!1, h))
          for (t = 0; t < i.length; ++t) {
            var A = (B = i[t]).point ? B.point : B;
            if (r || h.containsPoint(A)) {
              var c = B.ptType ? B.ptType : null, u = !!B.autoH;
              if (A = A.add(P), m && (A = A.subtract(m)), f = Math.abs(S.getX() - A.getX()), null === y && f <= n || null !== y && f < Math.abs(S.getX() - y)) {
                y = A.getX(), C = f;
                var d = c ? R(A, c, u) : A;
                v = S.getY() <= A.getY() ? [
                  new o(y, S.getY()),
                  d
                ] : [
                  d,
                  new o(y, S.getY())
                ];
              } else
                null !== y && f === Math.abs(S.getX() - y) && (y = A.getX(), C = f, S.getY() <= A.getY() ? (v[1].pt ? v[1].pt.getY() : v[1].getY()) < A.getY() && (v[1] = c ? R(A, c, u) : A) : (v[0].pt ? v[0].pt.getY() : v[0].getY()) > A.getY() && (v[0] = c ? R(A, c, u) : A));
            }
          }
        var E = new p(s.getX() - n, F.getY() - n, s.getWidth() + 2 * n, 2 * n);
        if (x && (E = E.intersected(x)), r && (i = a ? a.findPivots(E) : e.findPivots(!1, E)), i)
          for (t = 0; t < i.length; ++t) {
            var B;
            A = (B = i[t]).point ? B.point : B;
            if (r || E.containsPoint(A)) {
              c = B.ptType ? B.ptType : null, u = !!B.autoH;
              if (A = A.add(P), m && (A = A.subtract(m)), f = Math.abs(S.getY() - A.getY()), null === _ && f <= n || null !== _ && f < Math.abs(S.getY() - _)) {
                _ = A.getY(), w = f;
                d = c ? R(A, c, u) : A;
                b = S.getX() <= A.getX() ? [
                  new o(S.getX(), _),
                  d
                ] : [
                  d,
                  new o(S.getX(), _)
                ];
              } else
                null !== _ && f === Math.abs(S.getY() - _) && (_ = A.getY(), w = f, S.getX() <= A.getX() ? (b[1].pt ? b[1].pt.getX() : b[1].getX()) < A.getX() && (b[1] = c ? R(A, c, u) : A) : (b[0].pt ? b[0].pt.getX() : b[0].getX()) > A.getX() && (b[0] = c ? R(A, c, u) : A));
            }
          }
      }.bind(this), k = function (e, t) {
        var i = [];
        if (!e.hasMixin(h.Container))
          return [];
        if (e.hasMixin(s.Accelerated))
          i = e.retrieveChildrenInGeometryBBox(t, d.RETRIEVE_MODE_INTERSECT) || [];
        else
          for (var n = e.getFirstChild(); n; n = n.getNext())
            if (n instanceof s) {
              var r = n.getGeometryBBox();
              r && r.intersectsRect(t) && i.push(n);
            }
        for (var o = [], a = 0; a < i.length; a++)
          o = o.concat(k(i[a], t));
        return i.concat(o);
      }.bind(this);
    if (B && (this._scoped && B != this._snapMainPage && this._setEffectiveScope(B), x)) {
      var G = new p(F.getX() - n, x.getY() - n, 2 * n, x.getHeight() + 2 * n), Q = new p(x.getX() - n, F.getY() - n, x.getWidth() + 2 * n, 2 * n), M = k(B, G);
      M = M.concat(k(B, Q).filter(function (e) {
        return M.indexOf(e) < 0;
      }));
      for (var N = 0; N < M.length; N++) {
        var U = M[N];
        if (U instanceof a && !U.hasFlag(s.Flag.Hidden)) {
          var V = null, O = this._getEffectiveSnapElems();
          if (O)
            for (var L = 0; L < O.length && !V; ++L)
              U == O[L] && (V = U);
          else
            V = U;
          V && D(V);
        }
      }
    }
    return null === y && null === _ || (E = {
      x: null !== y ? {
        value: y,
        guide: v,
        delta: C,
        page: I
      } : null,
      y: null !== _ ? {
        value: _,
        guide: b,
        delta: w,
        page: I
      } : null
    }), E;
  }, f.prototype.useExclusions = function (e) {
    if (e && e.length) {
      var t;
      this._exclusions = [];
      for (var i = 0; i < e.length; ++i)
        (t = e[i]) instanceof a && this._exclusions.push(t);
    }
  }, f.prototype.isRelativeToPage = function () {
    return !0;
  }, f.prototype.isScopeSupported = function () {
    return !0;
  }, f.prototype.setScope = function (e) {
    if (e && e.length) {
      this._snapElems = [];
      for (var t = 0; t < e.length; ++t) {
        var i = e[t];
        if (i.hasMixin(h.Container))
          for (var n = i.getFirstChild(); null != n; n = n.getNext())
            n instanceof a && this._snapElems.push(n);
      }
      this._scoped = !0, this._snapMainPage = this._scene.getActivePage();
    } else
      this._snapElems = null, this._scoped = !1, this._snapMainPage = null;
    this._eSnapElems = null;
  }, f.prototype._setEffectiveScope = function (e) {
    if (this._eSnapElems = [], e.hasMixin(h.Container))
      for (var t = e.getFirstChild(); null != t; t = t.getNext())
        t instanceof a && this._eSnapElems.push(t);
  }, f.prototype._getEffectiveSnapElems = function () {
    return this._eSnapElems ? this._eSnapElems : this._snapElems;
  }, f.prototype.toString = function () {
    return "[Object GPointsGuide]";
  }, e.exports = f;
}
