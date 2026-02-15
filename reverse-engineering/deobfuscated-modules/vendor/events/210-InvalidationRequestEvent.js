/**
 * Module 210
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
  var n = require(5) /* GPoint */, r = require(75) /* GEventTarget */, o = require(0) /* GObject */, a = require(72) /* GEvent */, s = require(363) /* TransformEvent */, l = require(24) /* GEditorOptions */, h = require(6) /* GRect */, A = require(11) /* GUtil */, c = require(7) /* GTransform */, p = require(540) /* InvalidationRequestEvent */, u = require(12) /* GMath */, d = require(81) /* GEditorAnnotation */;
  function g(e) {
    this._scene = e, this._guides = [], this._counter = 0, this._visuals = [];
  }
  o.inherit(g, r), g.options = {
    snapDistance: 5,
    visualsLength: 10,
    guides: [],
    disabled: false,
    zones: false
  }, g.Orientation = {
    H: 1,
    V: 2,
    O: 3
  }, g.InvalidationRequestEvent = function (e) {
    this.area = e;
  }, o.inherit(g.InvalidationRequestEvent, a), g.InvalidationRequestEvent.prototype.area = null, g.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GGuides.InvalidationRequestEvent]";
  }, g.prototype._scene = null, g.prototype._guides = null, g.prototype._counter = 0, g.prototype._visuals = null, g.prototype._area = null, g.prototype._view = null, g.prototype._bboxGuide = null, g.prototype._fullPixelsGuide = null, g.prototype.setView = function (e) {
    this._view = e && e instanceof s ? e : null;
  }, g.prototype.isMultiPageEnabled = function () {
    return this._view && this._view.getViewConfiguration().multiPageView;
  }, g.prototype.beginMap = function (e) {
    0 == this._counter && (this._visuals = [], this._area && !this._area.isEmpty() && this.invalidate(this._area), this._area = null), ++this._counter;
    for (var module = 0; module < this._guides.length; ++module) {
      var require = this._guides[module];
      require.isScopeSupported() && require.setScope(e);
    }
  }, g.prototype.finishMap = function () {
    if (this._counter > 0 && (--this._counter, 0 == this._counter)) {
      if (this._visuals.length) {
        for (var exports, module = null, require = null, r = null, o = null, a = null, s = function (e, n) {
              if (e && 2 == e.length)
                for (var a = 0; a < 2; ++a) {
                  var s = e[a].pt ? e[a].pt : e[a];
                  n && (s = s.add(n.getPosition(this.isMultiPageEnabled())));
                  var l = 0;
                  e[a].pt && (l = 1.414216 * e[a].size);
                  var A = new h(s.getX() - l, s.getY() - l, 2 * l, 2 * l);
                  (null === module || module > A.getX()) && (module = A.getX()), (null === require || require > A.getY()) && (require = A.getY()), (null === r || r < A.getX() + A.getWidth()) && (r = A.getX() + A.getWidth()), (null === o || o < A.getY() + A.getHeight()) && (o = A.getY() + A.getHeight());
                }
            }.bind(this), l = function (e, t) {
              var i = e.line;
              if ((e.orient == g.Orientation.V || e.orient == g.Orientation.H) && !e.valueSegments) {
                var r = e.bounds, o = e.srcBounds, l = [], h = [];
                if (e.orient == g.Orientation.V)
                  var A = i[0].getY(), u = i[1].getY();
                else
                  A = i[0].getX(), u = i[1].getX();
                if (!e.freeSegments && !e.valueSegments && r)
                  if (o) {
                    for (var d = [], f = 0; f < r.length; ++f)
                      d.push(r[f][0], r[f][1]);
                    d.sort(function (e, t) {
                      return e - t;
                    });
                    var m = false, y = false;
                    for (f = 0; f < d.length && !y; ++f)
                      o[0] > d[f] && !m && (f == d.length - 1 || d[f + 1] >= o[0]) && (l.push([
                        A,
                        d[f]
                      ]), h.push({
                        bounds: [
                          d[f],
                          o[0]
                        ]
                      }), m = true), o[1] < d[f] && !y && (m ? l.push([
                        o[0],
                        o[1]
                      ]) : l.push([
                        A,
                        o[1]
                      ]), h.push({
                        bounds: [
                          o[1],
                          d[f]
                        ]
                      }), d[f] < u && l.push([
                        d[f],
                        u
                      ]), y = true);
                    m || y ? y || o[0] < u && l.push([
                      o[0],
                      u
                    ]) : l.push([
                      A,
                      u
                    ]);
                  } else
                    l.push([
                      A,
                      u
                    ]);
                l && l.length && (e.freeSegments = l), h && h.length && (e.valueSegments = h);
              }
              if (s(i, t), e.valueSegments && e.valueSegments.length)
                for (var _ = this._view.getEditor().getDistanceHelper(), v = null, b = null, C = 0; C < e.valueSegments.length; ++C) {
                  var w = e.valueSegments[C], E = Math.abs(w.bounds[1] - w.bounds[0]);
                  if (_) {
                    var B = _.getValueBoxView(E);
                    e.orient == g.Orientation.V ? (v = new n(i[0].getX(), w.bounds[0] + (w.bounds[1] - w.bounds[0]) / 2), b = p.ValueDirection.Right) : (v = new n(w.bounds[0] + (w.bounds[1] - w.bounds[0]) / 2, i[0].getY()), b = p.ValueDirection.Down), w.value = E, w.valuePt = v, w.valueDir = b;
                    var x = _.getValueBoxScene(B, v, b);
                    if (t) {
                      var P = t.getPosition(this.isMultiPageEnabled());
                      x = new c().translated(P.getX(), P.getY()).mapRect(x);
                    }
                    a = a ? a.united(x) : x;
                  }
                }
            }.bind(this), A = 0; A < this._visuals.length; ++A) {
          exports = this._visuals[A].guide;
          var u = this._visuals[A].page;
          exports instanceof Array ? s(exports, u) : l(exports, u);
        }
        var d = Math.ceil(1 / this._view.getZoom());
        module -= d, require -= d, r += d, o += d, this._area = new h(module, require, r - module, o - require), a && (this._area = this._area.united(a)), this.invalidate(this._area);
      }
      this.cleanExclusions();
      for (A = 0; A < this._guides.length; ++A) {
        var f = this._guides[A];
        f.isScopeSupported() && f.setScope(null);
      }
    }
  }, g.prototype.mapPoint = function (e, t, i, r) {
    for (var o, a = null, s = null, l = null, h = [], A = [], c = this._view.getScene().getActivePage(), p = this._isGuideEnabled(this._fullPixelsGuide), u = 0; u < this._guides.length && (null === a || null === s); ++u)
      if (o = this._guides[u], this.canMapGuide(o, i, t, p)) {
        var d = o.isRelativeToPage();
        (l = o.map(e.getX(), e.getY(), true, g.options.snapDistance, this._view ? this._view.getLogicalZoom() : null, r)) && (l.x && null === a && (a = l.x.value, this._visuals && l.x.guide && (l.x.guide instanceof n ? (h.push(l.x.guide), A.push(d ? l.x.page ? l.x.page : c : null)) : this._visuals.push({
          guide: l.x.guide,
          page: d ? l.x.page ? l.x.page : c : null
        }))), l.y && null === s && (s = l.y.value, this._visuals && l.y.guide && (l.y.guide instanceof n ? (h.push(l.y.guide), A.push(d ? l.y.page ? l.y.page : c : null)) : this._visuals.push({
          guide: l.y.guide,
          page: d ? l.y.page ? l.y.page : c : null
        })))), l = null;
      }
    null === a && (a = e.getX()), null === s && (s = e.getY());
    var f, m = new n(a, s);
    for (u = 0; u < h.length; ++u)
      f = h[u], (Math.abs(a - f.getX()) >= 2 || Math.abs(s - f.getY()) >= 2) && this._visuals.push({
        guide: [
          m,
          f
        ],
        page: A[u]
      });
    return m;
  }, g.prototype.mapRect = function (e, t, i) {
    var r = e, o = e.getSide(h.Side.TOP_LEFT), a = e.getSide(h.Side.BOTTOM_RIGHT), s = e.getSide(h.Side.CENTER), l = {};
    l[h.Side.TOP_LEFT] = o, l[h.Side.BOTTOM_RIGHT] = a, l[h.Side.CENTER] = s;
    var c = Object.keys(l), p = Object.values(l), d = [], f = [], m = [], y = [], _ = [], v = null, b = this.isMultiPageEnabled(), C = this._view.getScene().getActivePage(), w = C.getPosition(b), E = this._isGuideEnabled(this._fullPixelsGuide), B = this._getBBoxGuide();
    if (B && this.canMapGuide(B, t, null, E) && (v = B.checkDistanceGuidesMapping(e, g.options.snapDistance, this._view ? this._view.getLogicalZoom() : null, i, m, y, _)) && (y.length || _.length) && B.hasPriorityDistanceFirst())
      return this._visuals = y.length ? this._visuals.concat(y) : this._visuals.concat(_), v;
    for (var x, P = function (e, t, i, n) {
          var r = e;
          if (t && i || b && i && i != C) {
            t || (r = r.add(w));
            var o = w;
            b && i && i != C && (o = i.getPosition(true)), r = r.subtract(o);
          } else
            t || i || !n.isRelativeToPage() || (r = r.add(w));
          return r;
        }, S = null, T = 0; T < this._guides.length && (!d.length || !f.length); ++T)
      if (x = this._guides[T], !(t && t.indexOf(x.getId()) < 0) && this.canMapGuide(x, t, null, E)) {
        for (var I = 0; I < p.length; ++I)
          if (x.snapZoneIsAllowed(c[I])) {
            var F = p[I];
            (S = x.map(F.getX(), F.getY(), false, g.options.snapDistance, this._view ? this._view.getLogicalZoom() : null, i)) && (S.x && (d.length ? d[0].idx === T && null !== d[0].delta && null !== S.x.delta && S.x.delta < d[0].delta && (d[0] = A.extend({}, S.x, {
              idx: T,
              pivotIdx: I
            })) : d.push(A.extend({}, S.x, {
              idx: T,
              pivotIdx: I
            }))), S.y && (f.length ? f[0].idx === T && null !== f[0].delta && null !== S.y.delta && S.y.delta < f[0].delta && (f[0] = A.extend({}, S.y, {
              idx: T,
              pivotIdx: I
            })) : f.push(A.extend({}, S.y, {
              idx: T,
              pivotIdx: I
            })))), S = null;
          }
        if (x === this._bboxGuide && v && (y.length || _.length) && m.length) {
          var R = 0, D = 0;
          if (d.length) {
            var k = P(p[d[0].pivotIdx], i, d[0].page, x);
            R = d[0].value - k.getX();
          }
          if (f.length) {
            k = P(p[f[0].pivotIdx], i, f[0].page, x);
            D = f[0].value - k.getY();
          }
          if (y.length && (!D || Math.abs(m[1]) < Math.abs(D)) ? (this._visuals = this._visuals.concat(y), r = v) : _.length && (!R || Math.abs(m[0]) < Math.abs(R)) && (this._visuals = this._visuals.concat(_), r = v), r)
            return r;
        }
      }
    var G = 0, Q = 0;
    if (d.length) {
      k = P(p[d[0].pivotIdx], i, d[0].page, this._guides[d[0].idx]);
      G = d[0].value - k.getX();
    }
    if (f.length) {
      k = P(p[f[0].pivotIdx], i, f[0].page, this._guides[f[0].idx]);
      Q = f[0].value - k.getY();
    }
    if (G || Q) {
      if (r = e.translated(G, Q), f = [], !(d = []).length || !f.length) {
        var M = new n(G, Q);
        p = [
          o = o.add(M),
          a = a.add(M),
          s = s.add(M)
        ];
        var N = o.getX(), U = a.getX(), V = o.getY(), O = a.getY();
        S = null;
        for (T = 0; T < this._guides.length && (!d.length || !f.length); ++T)
          if (x = this._guides[T], !(t && t.indexOf(x.getId()) < 0) && this.canMapGuide(x, t, null, E))
            for (I = 0; I < p.length; ++I)
              if (x.snapZoneIsAllowed(c[I])) {
                F = p[I];
                if (S = x.map(F.getX(), F.getY(), false, g.options.snapDistance, this._view ? this._view.getLogicalZoom() : null, i)) {
                  if (S.x && u.isEqualEps(S.x.delta, 0) && (!d.length || d[0].idx === T)) {
                    if (S.x.guide) {
                      var L = P(o, i, S.x.page, x), Y = P(a, i, S.x.page, x);
                      V = L.getY(), O = Y.getY(), V < ((X = S.x.guide.line ? S.x.guide.line : S.x.guide)[0].pt ? X[0].pt.getY() : X[0].getY()) && (X[0] = new n(X[0].pt ? X[0].pt.getX() : X[0].getX(), V)), O > (X[1].pt ? X[1].pt.getY() : X[1].getY()) && (X[1] = new n(X[1].pt ? X[1].pt.getX() : X[1].getX(), O)), S.x.guide.srcBounds = [
                        V,
                        O
                      ];
                    }
                    d.push(A.extend({}, S.x, {
                      idx: T,
                      pivotIdx: I
                    }));
                  }
                  if (S.y && u.isEqualEps(S.y.delta, 0) && (!f.length || f[0].idx === T)) {
                    if (S.y.guide) {
                      var X;
                      L = P(o, i, S.y.page, x), Y = P(a, i, S.y.page, x);
                      N = L.getX(), U = Y.getX(), N < ((X = S.y.guide.line ? S.y.guide.line : S.y.guide)[0].pt ? X[0].pt.getX() : X[0].getX()) && (X[0] = new n(N, X[0].pt ? X[0].pt.getY() : X[0].getY())), U > (X[1].pt ? X[1].pt.getX() : X[1].getX()) && (X[1] = new n(U, X[1].pt ? X[1].pt.getY() : X[1].getY())), S.y.guide.srcBounds = [
                        N,
                        U
                      ];
                    }
                    f.push(A.extend({}, S.y, {
                      idx: T,
                      pivotIdx: I
                    }));
                  }
                }
                S = null;
              }
      }
      if (this._visuals) {
        for (T = 0; T < d.length; ++T)
          if (this._visuals && d[T].guide) {
            var H = this._guides[d[T].idx].isRelativeToPage();
            if (d[T].guide instanceof n) {
              k = P(p[d[T].pivotIdx], i, d[T].page, this._guides[d[T].idx]);
              (Math.abs(d[T].value - d[T].guide.getX()) >= 2 || Math.abs(k.getY() - d[T].guide.getY()) >= 2) && this._visuals.push({
                guide: [
                  new n(d[T].value, k.getY()),
                  d[T].guide
                ],
                page: H ? d[T].page ? d[T].page : C : null
              });
            } else
              this._visuals.push({
                guide: d[T].guide,
                page: H ? d[T].page ? d[T].page : C : null
              });
          }
        for (T = 0; T < f.length; ++T)
          if (this._visuals && f[T].guide) {
            H = this._guides[f[T].idx].isRelativeToPage();
            if (f[T].guide instanceof n) {
              k = P(p[f[T].pivotIdx], i, f[T].page, this._guides[f[T].idx]);
              (Math.abs(f[T].value - f[T].guide.getY()) >= 2 || Math.abs(k.getX() - f[T].guide.getX()) >= 2) && this._visuals.push({
                guide: [
                  new n(k.getX(), f[T].value),
                  f[T].guide
                ],
                page: H ? f[T].page ? f[T].page : C : null
              });
            } else
              this._visuals.push({
                guide: f[T].guide,
                page: H ? f[T].page ? f[T].page : C : null
              });
          }
      }
    }
    return r;
  }, g.prototype.paint = function (e, t) {
    var i, r, o, a = e;
    if (t.configuration.multiPageView) {
      var s = this._scene.getActivePage().getPosition(true);
      a = a.preMultiplied(new c(1, 0, 0, 1, s.getX(), s.getY()));
    }
    for (var h = 0; h < this._guides.length; ++h)
      (i = this._guides[h]).isVisual() && (i.isRelativeToPage() ? i.paint(a, t) : i.paint(e, t));
    var A = 0;
    l.outlineWidth % 2 != 0 && (A = 0.5);
    var p = function (i, n, r, o) {
        var a, s, h = o || (r ? l.guideOutlineColor : l.distanceHelperColor);
        if (n) {
          var p = e;
          if (t.configuration.multiPageView) {
            var u = n.getPosition(true);
            p = p.preMultiplied(new c(1, 0, 0, 1, u.getX(), u.getY()));
          }
          a = p.mapPoint(i[0].pt ? i[0].pt : i[0]), s = p.mapPoint(i[1].pt ? i[1].pt : i[1]);
        } else
          a = e.mapPoint(i[0].pt ? i[0].pt : i[0]), s = e.mapPoint(i[1].pt ? i[1].pt : i[1]);
        t.canvas.strokeLine(Math.floor(a.getX()) + A, Math.floor(a.getY()) + A, Math.floor(s.getX()) + A, Math.floor(s.getY()) + A, l.outlineWidth, h, false), i[0].pt && d.paintAnnotation(t, null, a, i[0].annot, false, i[0].size, h, h), i[1].pt && d.paintAnnotation(t, null, s, i[1].annot, false, i[1].size, h, h);
      }, u = this._view.getEditor().getDistanceHelper();
    for (h = 0; h < this._visuals.length; ++h)
      if (r = this._visuals[h].guide, o = this._visuals[h].page, r instanceof Array)
        p(r, o, true);
      else {
        var f = r.line;
        if (r.freeSegments && r.freeSegments.length)
          for (var m = r.freeSegmentsColor ? r.freeSegmentsColor : null, y = 0; y < r.freeSegments.length; ++y)
            p(r.orient == g.Orientation.V ? [
              new n(f[0].getX(), r.freeSegments[y][0]),
              new n(f[0].getX(), r.freeSegments[y][1])
            ] : [
              new n(r.freeSegments[y][0], f[0].getY()),
              new n(r.freeSegments[y][1], f[0].getY())
            ], o, true, m);
        if (r.valueSegments && r.valueSegments.length) {
          var _ = e;
          if (o && t.configuration.multiPageView) {
            s = o.getPosition(true);
            _ = _.preMultiplied(new c(1, 0, 0, 1, s.getX(), s.getY()));
          }
          for (y = 0; y < r.valueSegments.length; ++y) {
            var v = r.valueSegments[y];
            p(r.orient == g.Orientation.V ? [
              new n(f[0].getX(), v.bounds[0]),
              new n(f[0].getX(), v.bounds[1])
            ] : [
              new n(v.bounds[0], f[0].getY()),
              new n(v.bounds[1], f[0].getY())
            ], o, false), null != v.value && u && u.paintDistanceHint(v.value, v.valuePt, v.valueDir, _, t, l.distanceHelperColor);
          }
        }
      }
    this._visuals = [];
  }, g.prototype.invalidate = function (e) {
    this.hasEventListeners(g.InvalidationRequestEvent) && (e && !e.isEmpty() ? this.trigger(new g.InvalidationRequestEvent(e)) : this._area && !this._area.isEmpty() && (this._visuals = [], this.trigger(new g.InvalidationRequestEvent(this._area)), this._area = null));
  }, g.prototype.useExclusions = function (e) {
    if (e && e.length)
      for (var module = 0; module < this._guides.length; ++module)
        this._guides[module].useExclusions(e);
  }, g.prototype.cleanExclusions = function () {
    for (var exports = 0; exports < this._guides.length; ++exports)
      this._guides[exports].cleanExclusions();
  }, g.prototype.getBBoxSnapZones = function (e, t) {
    for (var require = null, r = false, o = 0; o < this._guides.length && !r; ++o) {
      var a = this._guides[o];
      this.canMapGuide(a, null, null, this._isGuideEnabled(this._fullPixelsGuide)) && !a.mapTopLeftOnly() && (r = true);
    }
    var s = l.pickDistance;
    if (r && e && !e.isEmpty() && e.expanded(s, s, s, s).containsPoint(t, true)) {
      require = [];
      var A, c = e.getClosestSideName(t), p = e.getSide(c), u = e.getSide(h.Side.TOP_LEFT), d = e.getSide(h.Side.BOTTOM_RIGHT), f = Math.abs(d.getX() - u.getX()), m = Math.abs(d.getY() - u.getY());
      A = f > 2 * g.options.visualsLength ? g.options.visualsLength : f > g.options.visualsLength ? f / 2 : f;
      var y = p.getY(), _ = y, v = u.getX();
      switch (c) {
      case h.Side.TOP_CENTER:
      case h.Side.CENTER:
      case h.Side.BOTTOM_CENTER:
        v = p.getX() - A / 2;
        break;
      case h.Side.TOP_RIGHT:
      case h.Side.RIGHT_CENTER:
      case h.Side.BOTTOM_RIGHT:
        v = p.getX() - A;
      }
      var b, C = v + A;
      switch (require.push([
          new n(v, y),
          new n(C, _)
        ]), b = m > 2 * g.options.visualsLength ? g.options.visualsLength : m > g.options.visualsLength ? m / 2 : m, C = v = p.getX(), y = u.getY(), c) {
      case h.Side.LEFT_CENTER:
      case h.Side.CENTER:
      case h.Side.RIGHT_CENTER:
        y = p.getY() - b / 2;
        break;
      case h.Side.BOTTOM_LEFT:
      case h.Side.BOTTOM_CENTER:
      case h.Side.BOTTOM_RIGHT:
        y = p.getY() - b;
      }
      _ = y + b, require.push([
        new n(v, y),
        new n(C, _)
      ]);
    }
    return require;
  }, g.prototype.addGuide = function (e, t) {
    this._guides.push(e), t ? this._bboxGuide = e : e.isFullPixelsGuide() && (this._fullPixelsGuide = e);
  }, g.prototype._isGuideEnabled = function (e, t) {
    var i = g.options.guides;
    return !!(i && i.indexOf(e.getId()) >= 0) && (!t || !t.length || t.indexOf(e.getId()) >= 0);
  }, g.prototype._getBBoxGuide = function () {
    return this._bboxGuide || null;
  }, g.prototype.canMapGuide = function (e, t, i, n) {
    return this._isGuideEnabled(e, t) && e.isMappingAllowed(i) && (!n || e.canMapWithFullPixelsGuide());
  }, g.prototype.toString = function () {
    return "[Object GGuides]";
  }, exports.exports = g;
}
