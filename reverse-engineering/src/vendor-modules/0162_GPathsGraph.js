/**
 * chunk.vendor.js Module #162
 * Type: class
 * Name: GPathsGraph
 */

function (e, t, i) {
      var n = i(22),
        r = i(63),
        o = (i(75), i(2)),
        a = i(0),
        s = i(347),
        l = i(187),
        h = i(56),
        A = i(112),
        c = i(28),
        p = i(5),
        u = i(818),
        d = i(14),
        g = i(6),
        f = i(656),
        m = i(7),
        y = i(657),
        _ = i(45),
        v = i(12),
        b = ((c = i(28)), i(11)),
        C = i(9);

      function w() {
        (h.call(this),
          (this._anchors = new o.MapContainer()),
          this._anchors._setParent(this),
          (this._edges = new w.Edges()),
          this._edges._setParent(this),
          (this._facets = new o.MapContainer()),
          this._facets._setParent(this),
          this.addEventListener(
            o.BeforeInsertEvent,
            this._beforeGeometryChange,
            this,
          ),
          this.addEventListener(
            o.BeforeRemoveEvent,
            this._beforeGeometryChange,
            this,
          ),
          this.addEventListener(o.AfterInsertEvent, this._geometryChange, this),
          this.addEventListener(o.AfterRemoveEvent, this._geometryChange, this),
          this.addEventListener(
            o.AfterPropertiesChangeEvent,
            this._geometryChange,
            this,
          ));
      }
      (o.inheritAndMix("Paths Graph", w, h, [u]),
        (w.defaultEps = 1e-5),
        (w.Edges = function () {
          o.MapContainer.call(this);
        }),
        o.inherit("GPathsGraph.Edges", w.Edges, o.MapContainer),
        (w.Edges.prototype._handleChange = function (e, t) {
          if (e == o._Change.BeforeChildInsert) {
            if (this._parent && this._parent instanceof w) {
              var i = t,
                n = i.getSourceId()
                  ? this._parent.getAnchors().getById(i.getSourceId())
                  : null,
                r = i.getDestinationId()
                  ? this._parent.getAnchors().getById(i.getDestinationId())
                  : null;
              n && r && this._parent.interconnectAnchors(n, r, i);
            }
          } else
            e == o._Change.AfterChildRemove &&
              this._parent &&
              this._parent instanceof w &&
              this._parent.disconnectAnchors(t);
          o.prototype._handleChange.call(this, e, t);
        }),
        (w.GraphPosition = function (e, t) {
          ((this._type = e), (this._posSpec = t));
        }),
        (w.GraphPosition.PosType = {
          Edge: 1,
          Anchor: 2,
          Facet: 3,
        }),
        (w.GraphPosition.EdgeSpec = function () {}),
        (w.GraphPosition.EdgeSpec.prototype._edge = null),
        (w.GraphPosition.EdgeSpec.prototype._hitResult = null),
        (w.GraphPosition.EdgeSpec.prototype.toString = function () {
          return "[Object GPathsGraph.GraphPosition.EdgeSpec]";
        }),
        (w.GraphPosition.AnchorSpec = function (e) {
          this._anchor = e;
        }),
        (w.GraphPosition.AnchorSpec.prototype._anchor = null),
        (w.GraphPosition.AnchorSpec.prototype.getAnchor = function () {
          return this._anchor;
        }),
        (w.GraphPosition.AnchorSpec.prototype.toString = function () {
          return "[Object GPathsGraph.GraphPosition.AnchorSpec]";
        }),
        (w.GraphPosition.FacetSpec = function () {}),
        (w.GraphPosition.FacetSpec.prototype._x = null),
        (w.GraphPosition.FacetSpec.prototype._y = null),
        (w.GraphPosition.FacetSpec.prototype.toString = function () {
          return "[Object GPathsGraph.GraphPosition.FacetSpec]";
        }),
        (w.GraphPosition.prototype._type = null),
        (w.GraphPosition.prototype._posSpec = null),
        (w.GraphPosition.prototype.getType = function () {
          return this._type;
        }),
        (w.GraphPosition.prototype.getPosSpec = function () {
          return this._posSpec;
        }),
        (w.GraphPosition.prototype.toString = function () {
          return "[Object GPathsGraph.GraphPosition]";
        }),
        (w.FacetsTree = function (e, t) {
          ((this._facet = e), (this._extInsidePoint = t || null));
        }),
        a.inheritAndMix(w.FacetsTree, o, [o.Container]),
        (w.FacetsTree.prototype._facet = null),
        (w.FacetsTree.prototype._extInsidePoint = null),
        (w.FacetsTree.prototype.validateInsertion = function (e, t) {
          return e instanceof w.FacetsTree;
        }),
        (w.FacetsTree.prototype.getExtPoint = function () {
          return this._extInsidePoint;
        }),
        (w.FacetsTree.prototype.getFacet = function () {
          return this._facet;
        }),
        (w.FacetsTree.prototype.insert = function (e) {
          var t = !1;
          if (this.getFirstChild() && e.getExtPoint()) {
            for (var i = null, n = this.getFirstChild(); n; n = i)
              if (
                ((i = n.getNext()),
                n.getFacet().isInside(e.getExtPoint(), null))
              ) {
                if ((t = n.insert(e))) break;
              } else
                n.getExtPoint() &&
                  e.getFacet().isInside(n.getExtPoint(), null) &&
                  (this.removeChild(n),
                  e.insert(n),
                  t || (this.insertChild(e, i), (t = !0)));
            t || (this.appendChild(e), (t = !0));
          } else (this.appendChild(e), (t = !0));
          return t;
        }),
        (w.prototype._facets = null),
        (w.prototype.getNodeNameTranslated = function () {
          return C.getValue("GPathsGraph", "name", this.getNodeName());
        }),
        (w.prototype._facetsHash = null),
        (w.prototype._facetsUpdateCounter = 0),
        (w.prototype._currentEdge = null),
        (w.prototype._currentFacet = null),
        (w.prototype.findPivots = function (e, t) {
          for (
            var i = null, n = this._anchors.getFirstChild();
            null != n;
            n = n.getNext()
          ) {
            var r = n.getPoint();
            (this.$trf && (r = this.$trf.mapPoint(r)),
              i ? i.push(r) : (i = [r]));
          }
          return i;
        }),
        (w.prototype.getFacets = function () {
          return this._facets;
        }),
        (w.prototype.connectAnchorsInPlace = function (e, t, i, n) {
          (this.interconnectAnchors(e, t, i), this.addEdgeInPlace(i, n));
        }),
        (w.prototype.addEdgeInPlace = function (e, t) {
          (e.getProperty("cSt") || e.assignStyleFrom(this),
            this._edges.insertChild(e, t));
        }),
        (w.prototype.addEdge = function (e) {
          (e.getProperty("cSt") || e.assignStyleFrom(this),
            this._edges.insertChild(e, null));
        }),
        (w.prototype.addAnchor = function (e) {
          this._anchors.insertChild(e, null);
        }),
        (w.prototype._removeEdge = function (e) {
          this._edges.removeChild(e);
        }),
        (w.prototype._removeAnchor = function (e) {
          this._anchors.removeChild(e);
        }),
        (w.prototype._getInternalMapAsArray = function (e) {
          return e instanceof o.MapContainer ? e.getAsArray() : null;
        }),
        (w.prototype.clone = function (e) {
          var t = o.serialize(this, e);
          return t ? o.deserialize(t) : null;
        }),
        (w.prototype.addGraphLine = function (e, t, i, n, r) {
          if (
            e &&
            e.getAnchorPoints().getFirstChild() &&
            e.getAnchorPoints().getFirstChild() !=
              e.getAnchorPoints().getLastChild()
          )
            try {
              this.prepareFacetsUpdate();
              for (
                var o = e.getAnchorPoints().getFirstChild();
                null != o;
                o = o.getNext()
              )
                o.setProperty("ah", !1);
              if (t && t.getType() == w.GraphPosition.PosType.Anchor) {
                var a = t.getPosSpec().getAnchor();
                e.getAnchorPoints()
                  .getFirstChild()
                  .setProperties(
                    ["x", "y"],
                    [a.getProperty("x"), a.getProperty("y")],
                  );
              }
              if (i && i.getType() == w.GraphPosition.PosType.Anchor) {
                var h = i.getPosSpec().getAnchor();
                e.getAnchorPoints()
                  .getLastChild()
                  .setProperties(
                    ["x", "y"],
                    [h.getProperty("x"), h.getProperty("y")],
                  );
              }
              var A = [];
              this._splitPathLineAtSelfIntersections(e, A);
              var c = [];
              if (r) {
                for (var p, u = 0; u < A.length; ++u)
                  ((p = []),
                    this._splitPathLineAtStraightPoints(A[u], p),
                    (c = c.concat(p)));
                ((A = c), (c = []));
              }
              var d = new l(),
                g = function (e, t) {
                  return e[0].polySeg0.seg < t[0].polySeg0.seg
                    ? -1
                    : e[0].polySeg0.seg > t[0].polySeg0.seg
                      ? 1
                      : e[0].slope0 - t[0].slope0;
                },
                f = function (e, t) {
                  return e.polySeg1.seg < t.polySeg1.seg
                    ? -1
                    : e.polySeg1.seg > t.polySeg1.seg
                      ? 1
                      : e.slope1 - t.slope1;
                };
              for (u = 0; u < A.length; ++u) {
                for (
                  var m = A[u], y = [], _ = this._edges.getFirstChild();
                  _;
                  _ = _.getNext()
                ) {
                  var b = d.intersect(m, _.getPathBase(), !1);
                  if (b && b.length) {
                    b.sort(f);
                    for (
                      var C = [],
                        E = 0,
                        B = _.getPathBase()
                          .getAnchorPoints()
                          .getFirstChild()
                          .getNext();
                      null != B;
                      B = B.getNext(), ++E
                    );
                    for (var x = 0; x < b.length; ++x) {
                      (1 == (F = b[x]).polySeg1.seg &&
                        v.isEqualEps(F.slope1, 0)) ||
                        (F.polySeg1.seg == E && v.isEqualEps(F.slope1, 1)) ||
                        C.push(F);
                    }
                    if (C.length) {
                      var P = C.map(function (e, t) {
                          return new s.SplitPoint(
                            e.polySeg1.seg - 1,
                            e.slope1,
                            e.pt,
                          );
                        }),
                        S = [],
                        T = [];
                      (this.splitEdge(_, P, !0, S, T), (_ = S[S.length - 1]));
                      for (x = 0; x < C.length; ++x) y.push([C[x], T[x]]);
                    }
                  }
                }
                var I = [];
                if (y.length) {
                  y.sort(g);
                  for (
                    E = 0, B = m.getAnchorPoints().getFirstChild().getNext();
                    null != B;
                    B = B.getNext(), ++E
                  );
                  for (x = 0; x < y.length; ++x) {
                    var F;
                    (1 == (F = y[x][0]).polySeg0.seg &&
                      v.isEqualEps(F.slope0, 0)) ||
                      (F.polySeg0.seg == E && v.isEqualEps(F.slope0, 1)) ||
                      I.push(y[x]);
                  }
                  if (I.length) {
                    var R = I.map(function (e, t) {
                        return new s.SplitPoint(
                          e[0].polySeg0.seg - 1,
                          e[0].slope0,
                          e[0].pt,
                        );
                      }),
                      D = [];
                    this._splitPathBase(m, R, !0, D);
                    for (x = 0; x < I.length; ++x)
                      c.push({
                        pathBase: D[x],
                        finishAnchor: I[x][1],
                      });
                  }
                }
                c.push(
                  I.length
                    ? {
                        pathBase: D[I.length],
                        finishAnchor: null,
                      }
                    : {
                        pathBase: m,
                        finishAnchor: null,
                      },
                );
              }
              if (1 == c.length) this._addGraphLine(e, t, i, n);
              else {
                var k = null;
                for (u = 0; u < c.length; ++u) {
                  var G = 0 == u ? t : k;
                  ((k =
                    u == c.length - 1
                      ? i
                      : c[u].finishAnchor
                        ? new w.GraphPosition(
                            w.GraphPosition.PosType.Anchor,
                            new w.GraphPosition.AnchorSpec(c[u].finishAnchor),
                          )
                        : null),
                    (k = this._addGraphLine(c[u].pathBase, G, k, n)));
                }
              }
            } finally {
              this.finishFacetsUpdate();
            }
        }),
        (w.prototype.splitEdge = function (e, t, i, n, r) {
          try {
            this.prepareFacetsUpdate();
            var o = [];
            if ((this._splitPathBase(e.getPathBase(), t, i, o), o.length > 1)) {
              var a,
                l,
                h = e.getSource(),
                A = e.getDestination(),
                c = e.getNext();
              this.removeEdge(e);
              for (var p = 0; p < o.length; ++p)
                if (
                  ((l = 0 == p ? h : a),
                  o[p].getAnchorPoints().getFirstChild() !=
                    o[p].getAnchorPoints().getLastChild())
                ) {
                  if (p == o.length - 1) a = A;
                  else {
                    a = new y();
                    var u = o[p].getAnchorPoints().getLastChild();
                    (a.setProperties(
                      ["x", "y"],
                      [u.getProperty("x"), u.getProperty("y")],
                    ),
                      this.addAnchor(a),
                      r.push(a));
                  }
                  var d = new s();
                  (d.setPathBase(o[p]),
                    this.connectAnchorsInPlace(l, a, d, c),
                    n.push(d));
                }
            }
          } finally {
            this.finishFacetsUpdate();
          }
        }),
        (w.prototype.getTransactionAction = function (e) {
          var t;
          if (e) {
            var i = this,
              n = e.oldFacets,
              r = this._facets;
            t = function () {
              (n._setParent(null), (i._facets = r), i._facets._setParent(i));
            };
          } else t = function () {};
          return t;
        }),
        (w.prototype.getTransactionActionSerialized = function (e) {
          var t;
          if (e) {
            (e.oldFacets, this._facets);
            t = {};
          } else t = null;
          return t;
        }),
        (w.prototype.getTransactionActionDeserialized = function (e) {
          if (!e) return function () {};
          (e.oldFacets, this._facets);
          return function () {};
        }),
        (w.prototype.getTransactionRevertAction = function (e) {
          var t;
          if (e) {
            var i = this,
              n = e.oldFacets,
              r = this._facets;
            t = function () {
              (r._setParent(null), (i._facets = n), i._facets._setParent(i));
            };
          } else t = function () {};
          return t;
        }),
        (w.prototype._setFacets = function (e) {
          var t = this._facets;
          (t._setParent(null),
            (this._facets = e),
            this._facets._setParent(this),
            this._canEventBeSent(o.AfterSpecialChangeEvent) &&
              this._sendEvent(
                new o.AfterSpecialChangeEvent(this, {
                  oldFacets: t,
                }),
              ));
        }),
        (w.prototype._recalculateFacets = function () {
          if (((this._facetsHash = null), this.getGeometryBBox())) {
            this._setFacets(new o.MapContainer());
            var e = new w.FacetsTree(),
              t = function (t, i) {
                if (i.length) {
                  var n = {
                    anchors: t,
                    edges: i,
                    intFacets: null,
                    extFacet: null,
                    extInsidePoint: null,
                  };
                  if (
                    (this._constructFacets(n), n.extFacet && n.extInsidePoint)
                  ) {
                    var r = new w.FacetsTree(n.extFacet, n.extInsidePoint),
                      o = n.intFacets;
                    if (o && o.length)
                      for (var a = 0; a < o.length; ++a) {
                        var s = new w.FacetsTree(o[a]);
                        r.appendChild(s);
                      }
                    e.insert(r);
                  }
                }
              }.bind(this);
            if (
              (this.dfsPartitioner(null, null, t, null), e && e.getFirstChild())
            ) {
              var i = function (e) {
                if (!e.getExtPoint()) {
                  var t = e.getFacet();
                  if (e.getFirstChild() && e.getFirstChild().getExtPoint()) {
                    for (var i = [], n = e.getFirstChild(); n; n = n.getNext())
                      i.push(n.getFacet().getPath());
                    i.length && t.extendPath(i);
                  }
                  t && (t.assignStyleFrom(this), this._facets.insertChild(t));
                }
                return !0;
              }.bind(this);
              e.acceptChildren(i, !1, !0);
            }
          }
        }),
        (w.prototype._detailHitTest = function (e, t, i, n) {
          for (
            var r = null, o = this._edges.getFirstChild();
            o;
            o = o.getNext()
          ) {
            if (
              (r = o
                .getPathBase()
                ._detailHitTest(
                  e,
                  this.$trf ? this.$trf.multiplied(t) : t,
                  i,
                  !1,
                ))
            )
              return new A(this, {
                hitRes: new h.HitResult(h.HitResult.Type.Stroke, r.data.vertex),
                edge: o,
              });
          }
          for (var a = this._facets.getFirstChild(); a; a = a.getNext()) {
            if (
              (r = a
                .getPath()
                ._detailHitTest(
                  e,
                  this.$trf ? this.$trf.multiplied(t) : t,
                  i,
                  n,
                ))
            )
              return new A(this, {
                hitRes: new h.HitResult(h.HitResult.Type.Fill, r.data.vertex),
                facet: a,
              });
          }
          return r;
        }),
        (w.prototype._constructFacets = function (e) {
          for (
            var t = {},
              i = function (e, t) {
                if (e)
                  for (var i = 0; i < e.length; ++i) if (e[i] == t) return !0;
                return !1;
              },
              n = 0;
            n < e.edges.length;
            ++n
          )
            for (
              var r = e.edges[n],
                o = r.getAnchors(),
                a = t[r.getId()],
                s = null,
                l = [],
                h = null,
                A = 0;
              A < o.length;
              ++A
            ) {
              var c = o[A],
                p = i(a, c);
              p || ((s = new f()), (l = []), (h = null));
              for (
                var u = c,
                  d = r,
                  g = new f.DirectedEdge(
                    d,
                    d.getSource() == u
                      ? f.DirectedEdge.Direction.Straight
                      : f.DirectedEdge.Direction.Reverse,
                  );
                d && !i(a, u);
              ) {
                (l.push(g), a ? a.push(u) : ((a = [u]), (t[d.getId()] = a)));
                var m,
                  _ = !1;
                (e.extFacet || h || (_ = !0),
                  (m =
                    g.getProperty("direction") ==
                    f.DirectedEdge.Direction.Straight
                      ? (u = d.getDestination()).getNextEdgeOrdered(
                          d,
                          y.EdgeType.In,
                          _,
                        )
                      : (u = d.getSource()).getNextEdgeOrdered(
                          d,
                          y.EdgeType.Out,
                          _,
                        ))
                    ? ((a =
                        t[
                          (d = (g = new f.DirectedEdge(
                            m.edge,
                            m.type == y.EdgeType.Out
                              ? f.DirectedEdge.Direction.Straight
                              : f.DirectedEdge.Direction.Reverse,
                          )).getEdge()).getId()
                        ]),
                      _ && m.insidePt && (h = m.insidePt))
                    : ((g = null), (d = null), (a = null)));
              }
              if (!p && l && l.length)
                s.init(l) &&
                  (e.extFacet || !h || s.isInside(h, !1)
                    ? e.intFacets
                      ? e.intFacets.push(s)
                      : (e.intFacets = [s])
                    : ((e.extFacet = s), (e.extInsidePoint = h)));
            }
        }),
        (w.prototype.prepareFacetsUpdate = function () {
          this._facetsUpdateCounter
            ? ++this._facetsUpdateCounter
            : ((this._facetsUpdateCounter = 1),
              (this._oldGraph = this.clone()));
        }),
        (w.prototype.finishFacetsUpdate = function () {
          if (1 == this._facetsUpdateCounter) {
            if (
              ((this._facetsUpdateCounter = 0),
              this._recalculateFacets(),
              this._oldGraph)
            ) {
              var e = this._oldGraph.getFacetsHash();
              if (
                (this._facets.getFirstChild() && this._calculateFacetsHash(),
                e && this._facetsHash)
              )
                for (var t in this._facetsHash) {
                  var i = e[t];
                  if (i)
                    for (var n = this._facetsHash[t], r = 0; r < n.length; ++r)
                      for (var o = !1, a = 0; a < i.length && !o; ++a)
                        (o = n[r].isSame(i[a])) &&
                          i[a].getProperty("cSt") &&
                          (n[r].assignStyleFrom(i[a]),
                          n[r].setProperty("cSt", !0));
                }
            }
            this._oldGraph = null;
          } else this._facetsUpdateCounter && --this._facetsUpdateCounter;
        }),
        (w.prototype.getFacetsHash = function () {
          return (
            !this._facetsHash &&
              this._facets.getFirstChild() &&
              this._calculateFacetsHash(),
            this._facetsHash
          );
        }),
        (w.prototype._calculateFacetsHash = function () {
          var e = null;
          if (this._facets && this._facets.getFirstChild()) {
            e = Object.create(null);
            for (var t = this._facets.getFirstChild(); t; t = t.getNext()) {
              var i = t.getHash();
              e[i] ? e[i].push(t) : (e[i] = [t]);
            }
          }
          this._facetsHash = e;
        }),
        (w.prototype._splitPathBase = function (e, t, i, n) {
          var r = t;
          if (!i) {
            (r = t.slice()).sort(function (e, t) {
              return e.seg < t.seg ? -1 : e.seg > t.seg ? 1 : e.slope - t.slope;
            });
          }
          var o = 0,
            a = new _(),
            s = new Float64Array(4),
            l = new Float64Array(4),
            h = e.getAnchorPoints().getFirstChild();
          if (h) {
            for (
              var A = !1, c = null, p = null, u = h.getNext(), d = 0;
              null != u;
              h = u, u = u.getNext(), ++d
            ) {
              var g = h.getProperty("x"),
                f = h.getProperty("y"),
                m = u.getProperty("x"),
                y = u.getProperty("y"),
                b = h.getProperty("hrx"),
                C = h.getProperty("hry"),
                w = u.getProperty("hlx"),
                E = u.getProperty("hly");
              if (
                (c
                  ? (p = c)
                  : ((p = new _.AnchorPoint()).deserialize(h.serialize()),
                    A && p.setProperties(["hlx", "hly"], [null, null]),
                    a.getAnchorPoints().appendChild(p)),
                (A = !1),
                r.length && o < r.length && r[o].seg == d)
              ) {
                for (var B = 0; o < r.length && r[o].seg == d; ++o) {
                  var x = r[o].slope,
                    P = r[o].pt;
                  if (
                    v.isEqualEps(x, 0) &&
                    (!P ||
                      (v.isEqualEps(P.getX(), g) && v.isEqualEps(P.getY(), f)))
                  )
                    A ||
                      (a
                        .getAnchorPoints()
                        .getLastChild()
                        .setProperties(["hrx", "hry"], [null, null]),
                      a &&
                        a.getAnchorPoints().getFirstChild() !=
                          a.getAnchorPoints().getLastChild() &&
                        n.push(a),
                      (a = new _()),
                      (p = new _.AnchorPoint()).deserialize(h.serialize()),
                      p.setProperties(["hlx", "hly"], [null, null]),
                      a.getAnchorPoints().appendChild(p),
                      (A = !0));
                  else if (
                    v.isEqualEps(x, 1) &&
                    (!P ||
                      (v.isEqualEps(P.getX(), m) && v.isEqualEps(P.getY(), y)))
                  ) {
                    if (!A) {
                      if (((c = new _.AnchorPoint()), 1 == x && 0 == B))
                        (c.deserialize(u.serialize()),
                          c.setProperties(["hrx", "hry"], [null, null]));
                      else if (
                        null !== b &&
                        null !== w &&
                        null !== C &&
                        null !== E
                      )
                        (v.getCtrlPts(g, m, b, w, B, x, s),
                          v.getCtrlPts(f, y, C, E, B, x, l),
                          p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                          c.setProperties(
                            ["x", "y", "hlx", "hly", "hrx", "hry"],
                            [m, y, s[2], l[2], null, null],
                          ));
                      else if (
                        (null !== b && null !== C) ||
                        (null !== w && null !== E)
                      ) {
                        (null !== b && null !== C
                          ? ((S = b), (T = C))
                          : ((S = w), (T = E)),
                          v.getCtrlPtsQuadratic(g, m, S, B, x, s),
                          v.getCtrlPtsQuadratic(f, y, T, B, x, l),
                          p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                          c.setProperties(
                            ["x", "y", "hlx", "hly", "hrx", "hry"],
                            [m, y, null, null, null, null],
                          ));
                      } else c.setProperties(["x", "y"], [m, y]);
                      (a.getAnchorPoints().appendChild(c),
                        a &&
                          a.getAnchorPoints().getFirstChild() !=
                            a.getAnchorPoints().getLastChild() &&
                          n.push(a),
                        (a = new _()),
                        (p = new _.AnchorPoint()).setProperties(
                          ["x", "y"],
                          [c.getProperty("x"), c.getProperty("y")],
                        ),
                        (c = null),
                        (A = !0));
                    }
                  } else {
                    if (
                      ((A = !1),
                      (c = new _.AnchorPoint()),
                      null !== b && null !== w && null !== C && null !== E)
                    )
                      (v.getCtrlPts(g, m, b, w, B, x, s),
                        v.getCtrlPts(f, y, C, E, B, x, l),
                        p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                        c.setProperties(
                          ["x", "y", "hlx", "hly"],
                          [
                            P ? P.getX() : s[3],
                            P ? P.getY() : l[3],
                            s[2],
                            l[2],
                          ],
                        ));
                    else if (
                      (null !== b && null !== C) ||
                      (null !== w && null !== E)
                    ) {
                      (null !== b && null !== C
                        ? ((S = b), (T = C))
                        : ((S = w), (T = E)),
                        v.getCtrlPtsQuadratic(g, m, S, B, x, s),
                        v.getCtrlPtsQuadratic(f, y, T, B, x, l),
                        p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                        c.setProperties(
                          ["x", "y"],
                          [P ? P.getX() : s[2], P ? P.getY() : l[2]],
                        ));
                    } else
                      c.setProperties(
                        ["x", "y"],
                        [
                          P ? P.getX() : g + x * (m - g),
                          P ? P.getY() : f + x * (y - f),
                        ],
                      );
                    (a.getAnchorPoints().appendChild(c),
                      a &&
                        a.getAnchorPoints().getFirstChild() !=
                          a.getAnchorPoints().getLastChild() &&
                        n.push(a),
                      (a = new _()),
                      (p = new _.AnchorPoint()).setProperties(
                        ["x", "y"],
                        [c.getProperty("x"), c.getProperty("y")],
                      ),
                      a.getAnchorPoints().appendChild(p));
                  }
                  B = x;
                }
                if (
                  !A ||
                  ((o == r.length || r[o].seg != d) && !v.isEqualEps(B, 1))
                ) {
                  if (
                    ((x = 1),
                    (c = new _.AnchorPoint()).deserialize(u.serialize()),
                    null !== b && null !== w && null !== C && null !== E)
                  )
                    (v.getCtrlPts(g, m, b, w, B, x, s),
                      v.getCtrlPts(f, y, C, E, B, x, l),
                      p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                      c.setProperties(["hlx", "hly"], [s[2], l[2]]));
                  else if (
                    (null !== b && null !== C) ||
                    (null !== w && null !== E)
                  ) {
                    var S, T;
                    (null !== b && null !== C
                      ? ((S = b), (T = C))
                      : ((S = w), (T = E)),
                      v.getCtrlPtsQuadratic(g, m, S, B, x, s),
                      v.getCtrlPtsQuadratic(f, y, T, B, x, l),
                      p.setProperties(["hrx", "hry"], [s[1], l[1]]),
                      c.setProperties(["hlx", "hly"], [null, null]));
                  }
                  a.getAnchorPoints().appendChild(c);
                }
              } else
                ((c = new _.AnchorPoint()).deserialize(u.serialize()),
                  a.getAnchorPoints().appendChild(c));
            }
            a &&
              a.getAnchorPoints().getFirstChild() !=
                a.getAnchorPoints().getLastChild() &&
              n.push(a);
          }
        }),
        (w.prototype._splitPathLineAtStraightPoints = function (e, t) {
          var i = e.getAnchorPoints().getFirstChild();
          if (i) {
            var n = new _(),
              r = new _.AnchorPoint();
            (r.deserialize(i.serialize()), n.getAnchorPoints().appendChild(r));
            for (var o = null, a = i.getNext(); null != a; i = a, a = o) {
              ((o = a.getNext()),
                (r = new _.AnchorPoint()).deserialize(a.serialize()),
                n.getAnchorPoints().appendChild(r));
              var s = a.getProperty("tp");
              o &&
                s != _.AnchorPoint.Type.Symmetric &&
                s != _.AnchorPoint.Type.Mirror &&
                s != _.AnchorPoint.Type.Connector &&
                (t.push(n),
                (n = new _()),
                (r = new _.AnchorPoint()).deserialize(a.serialize()),
                n.getAnchorPoints().appendChild(r));
            }
            t.push(n);
          }
        }),
        (w.prototype._splitPathLineAtSelfIntersections = function (e, t) {
          var i = new l(),
            n = [];
          (new Float64Array(4), new Float64Array(4));
          if ((M = e.getAnchorPoints().getFirstChild())) {
            var r = !1;
            v.isEqualEps(
              M.getProperty("x"),
              e.getAnchorPoints().getLastChild().getProperty("x"),
            ) &&
              v.isEqualEps(
                M.getProperty("y"),
                e.getAnchorPoints().getLastChild().getProperty("y"),
              ) &&
              (r = !0);
            for (
              var o = M.getNext(), a = 0;
              null != o;
              M = o, o = o.getNext(), ++a
            ) {
              var h = new _(),
                A = new _.AnchorPoint();
              (A.deserialize(M.serialize()),
                h.getAnchorPoints().appendChild(A),
                (A = new _.AnchorPoint()).deserialize(o.serialize()),
                h.getAnchorPoints().appendChild(A));
              for (
                var c = o, u = c.getNext(), d = a + 1;
                null != u;
                c = u, u = u.getNext(), ++d
              ) {
                var g = new _();
                ((A = new _.AnchorPoint()).deserialize(c.serialize()),
                  g.getAnchorPoints().appendChild(A),
                  (A = new _.AnchorPoint()).deserialize(u.serialize()),
                  g.getAnchorPoints().appendChild(A));
                var f = i.intersect(h, g, !1);
                if (f && f.length)
                  for (var m = 0; m < f.length; ++m)
                    (1 != f[m].slope0 ||
                      0 != f[m].slope1 ||
                      (r &&
                        M == e.getAnchorPoints().getFirstChild() &&
                        c == o)) &&
                      ((M == e.getAnchorPoints().getFirstChild() &&
                        0 == f[m].slope0) ||
                        n.push(new s.SplitPoint(a, f[m].slope0, f[m].pt)),
                      (u == e.getAnchorPoints().getLastChild() &&
                        1 == f[m].slope1) ||
                        n.push(new s.SplitPoint(d, f[m].slope1, f[m].pt)));
              }
              var y,
                b = M.getProperty("hrx"),
                C = M.getProperty("hry"),
                w = o.getProperty("hlx"),
                E = o.getProperty("hly"),
                B = [],
                x = null;
              if (null !== b && null !== C && null !== w && null !== E) {
                var P = M.getProperty("x"),
                  S = M.getProperty("y"),
                  T = o.getProperty("x"),
                  I = o.getProperty("y"),
                  F = new Float64Array(3),
                  R = new Float64Array(3);
                v.getBezierDerivativeEquationCoeffs(
                  P,
                  S,
                  T,
                  I,
                  b,
                  C,
                  w,
                  E,
                  F,
                  R,
                );
                var D = new Float64Array(4),
                  k = new Float64Array(4);
                ((D[0] = F[0]),
                  (D[1] = (3 * F[1]) / 2),
                  (D[2] = 3 * F[2]),
                  (D[3] = P),
                  (k[0] = R[0]),
                  (k[1] = (3 * R[1]) / 2),
                  (k[2] = 3 * R[2]),
                  (k[3] = S),
                  (x = v.getBezierSelfIntersections(D, k, B)));
              }
              if (null !== x || B.length)
                if (x)
                  ((y = new p(
                    v.evalCubic(D[0], D[1], D[2], D[3], x),
                    v.evalCubic(k[0], k[1], k[2], k[3], x),
                  )),
                    n.push(new s.SplitPoint(a, x, y)));
                else {
                  B[0] > 0 &&
                    ((y = new p(
                      v.evalCubic(D[0], D[1], D[2], D[3], B[0]),
                      v.evalCubic(k[0], k[1], k[2], k[3], B[0]),
                    )),
                    n.push(new s.SplitPoint(a, B[0], y)));
                  var G = (B[0] + B[1]) / 2;
                  ((y = new p(
                    v.evalCubic(D[0], D[1], D[2], D[3], G),
                    v.evalCubic(k[0], k[1], k[2], k[3], G),
                  )),
                    n.push(new s.SplitPoint(a, G, y)),
                    B[1] < 1 &&
                      ((y = new p(
                        v.evalCubic(D[0], D[1], D[2], D[3], B[1]),
                        v.evalCubic(k[0], k[1], k[2], k[3], B[1]),
                      )),
                      n.push(new s.SplitPoint(a, B[1], y))));
                }
            }
          }
          if (n.length) {
            n.sort(function (e, t) {
              return e.seg < t.seg ? -1 : e.seg > t.seg ? 1 : e.slope - t.slope;
            });
            for (
              var Q = [],
                M = e.getAnchorPoints().getFirstChild(),
                N = new p(M.getProperty("x"), M.getProperty("y")),
                U = 0;
              U < n.length;
              ++U
            ) {
              var V = n[U],
                O = V.pt;
              if (
                v.isEqualEps(N.getX(), O.getX()) &&
                v.isEqualEps(N.getY(), O.getY())
              )
                if (0 != V.slope) {
                  var L = e.getAnchorPoints().getChildByIndex(V.seg);
                  Q.push(
                    new s.SplitPoint(
                      V.seg,
                      0,
                      new p(L.getProperty("x"), L.getProperty("y")),
                    ),
                  );
                } else if (V.seg > 2) {
                  var Y = V.seg - 1;
                  L = e.getAnchorPoints().getChildByIndex(Y);
                  Q.push(
                    new s.SplitPoint(
                      Y,
                      0,
                      new p(L.getProperty("x"), L.getProperty("y")),
                    ),
                  );
                }
              (Q.push(V), (N = O));
            }
            o = e.getAnchorPoints().getLastChild();
            if (
              ((O = new p(o.getProperty("x"), o.getProperty("y"))),
              v.isEqualEps(N.getX(), O.getX()) &&
                v.isEqualEps(N.getY(), O.getY()))
            ) {
              V = n[n.length - 1];
              L = e.getAnchorPoints().getChildByIndex(V.seg);
              Q.push(
                new s.SplitPoint(
                  V.seg,
                  1,
                  new p(L.getProperty("x"), L.getProperty("y")),
                ),
              );
            }
            this._splitPathBase(e, Q, !1, t);
          } else t.push(e);
        }),
        (w.prototype._addGraphLine = function (e, t, i, n) {
          if (
            e.getAnchorPoints().getFirstChild() ==
            e.getAnchorPoints().getLastChild()
          )
            return i || t;
          var r,
            o,
            a = e.getAnchorPoints().getFirstChild();
          if (t && t.getType() == w.GraphPosition.PosType.Anchor)
            ((r = t.getPosSpec().getAnchor()),
              a.setProperties(
                ["x", "y"],
                [r.getProperty("x"), r.getProperty("y")],
              ));
          else {
            for (
              var l = a.getProperty("x"),
                h = a.getProperty("y"),
                A = null,
                c = this._anchors.getFirstChild();
              c && !A;
              c = c.getNext()
            )
              v.isEqualEps(c.getProperty("x"), l, w.defaultEps) &&
                v.isEqualEps(c.getProperty("y"), h, w.defaultEps) &&
                (A = c);
            A
              ? ((r = A),
                a.setProperties(
                  ["x", "y"],
                  [A.getProperty("x"), A.getProperty("y")],
                ))
              : ((r = new y()).setProperties(["x", "y"], [l, h]),
                this.addAnchor(r));
          }
          var p = e.getAnchorPoints().getLastChild();
          if (i && i.getType() == w.GraphPosition.PosType.Anchor)
            ((o = i.getPosSpec().getAnchor()),
              p.setProperties(
                ["x", "y"],
                [o.getProperty("x"), o.getProperty("y")],
              ));
          else {
            for (
              l = p.getProperty("x"),
                h = p.getProperty("y"),
                A = null,
                c = this._anchors.getFirstChild();
              c && !A;
              c = c.getNext()
            )
              v.isEqualEps(c.getProperty("x"), l, w.defaultEps) &&
                v.isEqualEps(c.getProperty("y"), h, w.defaultEps) &&
                (A = c);
            A
              ? ((o = A),
                p.setProperties(
                  ["x", "y"],
                  [A.getProperty("x"), A.getProperty("y")],
                ))
              : ((o = new y()).setProperties(["x", "y"], [l, h]),
                this.addAnchor(o),
                !0);
          }
          if (r != o) {
            var u = new s();
            (u.setPathBase(e),
              n && u.assignStyleFrom(n),
              this.connectAnchors(r, o, u));
          }
          return new w.GraphPosition(
            w.GraphPosition.PosType.Anchor,
            new w.GraphPosition.AnchorSpec(o),
          );
        }),
        (w.prototype._styleRepaint = function (e) {
          if (e instanceof c.PaintLayer) {
            for (
              var t = this._facets.getFirstChild();
              null != t;
              t = t.getNext()
            )
              t.getProperty("cSt") || t.assignStyleFrom(this);
            for (
              var i = this._edges.getFirstChild();
              null != i;
              i = i.getNext()
            )
              i.getProperty("cSt") || i.assignStyleFrom(this);
          }
          c.prototype._styleRepaint.call(this, e);
        }),
        (w.prototype._handleChange = function (e, t) {
          if (e === o._Change.Store)
            ((t.blob.anchors = o.serialize(this._anchors)),
              this._edges.getFirstChild() &&
                (t.blob.edges = o.serialize(this._edges)),
              this._facets.getFirstChild() &&
                (t.blob.facets = o.serialize(this._facets)));
          else if (e === o._Change.Restore) {
            t.blob.hasOwnProperty("anchors") &&
              ((this._anchors = o.deserialize(t.blob.anchors)),
              this._anchors._setParent(this));
            var i = null;
            t.blob.hasOwnProperty("edges") && (i = o.deserialize(t.blob.edges));
            var n = null;
            if (
              (t.blob.hasOwnProperty("facets") &&
                (n = o.deserialize(t.blob.facets)),
              i)
            )
              for (var r = null, a = i.getFirstChild(); null != a; a = r) {
                r = a.getNext();
                var s = this._anchors.getById(a.getSourceId()),
                  l = this._anchors.getById(a.getDestinationId());
                s && l && (i.removeChild(a), this.connectAnchors(s, l, a));
              }
            if (n) {
              for (
                var A = !0, c = ((r = null), n.getFirstChild());
                null != c && A;
                c = r
              ) {
                ((A = !1), (r = c.getNext()));
                var p = c.getDirectedEdges(),
                  u = [];
                if (p && p.getFirstChild())
                  for (var d = null, g = p.getFirstChild(); null != g; g = d) {
                    ((d = g.getNext()),
                      (a = this._edges.getById(g.getEdgeId().toString())) &&
                        (p.removeChild(g), g.updateEdge(a), u.push(g)));
                  }
                u.length && (A = c.init(u));
              }
              A && this._setFacets(n);
            }
          }
          if (
            (h.prototype._handleChange.call(this, e, t),
            e === o._Change.Restore && this._edges)
          )
            for (a = this._edges.getFirstChild(); a; a = a.getNext())
              a.getProperty("cSt") || a.assignStyleFrom(this);
        }),
        (w.prototype.rewindVertices = function (e) {
          ((this._currentEdge = this._edges.getFirstChild()),
            (this._vertexSource = null));
          for (var t = this._currentEdge; t; t = t.getNext())
            if (!t.getPathBase().rewindVertices(0)) return !1;
          return !0;
        }),
        (w.prototype.readVertex = function (e) {
          return this._currentEdge && !this._currentFacet
            ? !(!this._vertexSource || !this._vertexSource.readVertex(e)) ||
                (this._vertexSource &&
                  (this._currentEdge = this._currentEdge.getNext()),
                this._currentEdge
                  ? (this.$trf
                      ? (this._vertexSource = new r(
                          this._currentEdge.getPathBase(),
                          this.$trf,
                        ))
                      : (this._vertexSource = this._currentEdge.getPathBase()),
                    this._vertexSource.readVertex(e))
                  : ((this._vertexSource = null), !1))
            : (this._currentFacet, !1);
        }),
        (w.prototype.hasStyleFill = function () {
          var e = !1;
          if (this._facets.getFirstChild())
            for (var t = this._facets.getFirstChild(); t && !e; t = t.getNext())
              e = t.getPaintLayers().hasStyleFill();
          return e;
        }),
        (w.prototype._paintFill = function (e, t, i) {
          if (!e.configuration.isOutline(e) && this.hasStyleFill()) {
            var n = new m(2, 0, 0, 2, 0, 0),
              r = new m(0.5, 0, 0, 0.5, 0, 0),
              o = this.getPaintBBox(),
              a = n.mapRect(o),
              s = a.getSide(g.Side.TOP_LEFT),
              l = new d();
            (l.resize(a.getWidth(), a.getHeight()),
              l.prepare(),
              l.setTransform(new m(1, 0, 0, 1, -s.getX(), -s.getY())));
            for (
              var h = e.pushCanvas(l), A = this._facets.getFirstChild();
              A;
              A = A.getNext()
            )
              ((A._scene = this._scene),
                A._paintFill(
                  e,
                  t,
                  this.$trf ? this.$trf.multiplied(n) : n,
                  !0,
                ));
            for (A = this._facets.getFirstChild(); A; A = A.getNext())
              ((A._scene = this._scene),
                A._paintFill(
                  e,
                  t,
                  this.$trf ? this.$trf.multiplied(n) : n,
                  !1,
                  !0,
                ));
            var c = h.setTransform(h.getTransform(!0).preMultiplied(r));
            (h.drawImage(l, s.getX(), s.getY(), !1, null, null, !0),
              l.finish(),
              h.setTransform(c),
              e.popCanvas());
            for (A = this._facets.getFirstChild(); A; A = A.getNext())
              ((A._scene = this._scene), A._paintFill(e, t, this.$trf));
          }
        }),
        (w.prototype.hasStyleBorder = function () {
          for (
            var e = !1, t = this._edges.getFirstChild();
            t && !e;
            t = t.getNext()
          ) {
            var i = t.getPaintLayers();
            i && (e = i.hasStyleBorder());
          }
          return e;
        }),
        (w.prototype._isSeparateStylePaintLayer = function (e, t) {
          return (
            !!n.Stylable.prototype._isSeparateStylePaintLayer.call(
              this,
              e,
              t,
            ) ||
            !!(
              t === c.StyleLayer.Fill ||
              (t === c.StyleLayer.Border && this.hasStyleBorder())
            )
          );
        }),
        (w.prototype._paintBorder = function (e, t, i) {
          if (e.configuration.isOutline(e))
            h.prototype._paintBorder.call(this, e, t, i);
          else if (this.hasStyleBorder() && t) {
            if (i.$_pt && i.$_bw > 0 && i.$_op > 0 && !0 === i.$_vs) {
              var n = this._createStyleCanvas(e, this.getPaintBBox()),
                r = e.pushCanvas(n);
              try {
                for (var o = this._edges.getFirstChild(); o; o = o.getNext())
                  o.getProperty("cSt", !1, null, !0)
                    ? (o.painted = !1)
                    : (o._paintBorder(e, this.$trf, this._scene, !0, i),
                      (o.painted = !0));
                for (var a = this._anchors.getFirstChild(); a; a = a.getNext())
                  a._paintBorder(e, this.$trf, this._scene, !0);
                var s = this.getPatternBBox(e.isIncludingInvisible());
                if (s) {
                  var l = 0.5 * i.$_bw;
                  if (this.$trf)
                    ((l /= this.$trf.getScaleFactor()),
                      (s = s.expanded(l, l, l, l)));
                  else s = s.expanded(l, l, l, l);
                }
                var A = this.createShapePaint(e, i.$_pt, s);
                if (A && A.paint) {
                  var c = this.getGeometryBBox(),
                    p = this.getStyleBorderPadding(i);
                  p && (c = c.expanded(p, p, p, p));
                  var g = (c = this._calculateMarkersBorderBBox(c, i)),
                    f = null;
                  A.transform &&
                    A.transform.isValid() &&
                    ((f = A.transform),
                    this.$trf && (f = f.multiplied(this.$trf)),
                    i.$_px &&
                      !i.$_px.isIdentity() &&
                      (f = f.preMultiplied(i.$_px)));
                  var m = e.canvas;
                  if (f) {
                    g = f.inverted().mapRect(g);
                    var y = m.setTransform(m.getTransform(!0).multiplied(f));
                    (m.fillRect(
                      g.getX(),
                      g.getY(),
                      g.getWidth(),
                      g.getHeight(),
                      A.paint,
                      i.$_op,
                      d.CompositeOperator.SourceIn,
                    ),
                      m.setTransform(y));
                  } else
                    m.fillRect(
                      g.getX(),
                      g.getY(),
                      g.getWidth(),
                      g.getHeight(),
                      A.paint,
                      i.$_op,
                      d.CompositeOperator.SourceIn,
                    );
                }
                (r.drawCanvas(
                  n,
                  null,
                  null,
                  i.$_op,
                  i.getBlendingForContext(e),
                ),
                  n.finish());
              } finally {
                e.popCanvas();
              }
            }
            var _ = null,
              v = ((r = e.canvas), this.getPaintBBox());
            if (this.hasCustomStyleEdges()) {
              var C,
                w,
                E = this._getInternalMapAsArray(this._anchors),
                B = this._getInternalMapAsArray(this._edges),
                x = new u.ColorMap(),
                P = new u.ColorMap(),
                S = function (e) {
                  var t = !e.hasSameStyle(C);
                  return (t || w.push(e), t);
                };
              for (o = this._edges.getFirstChild(); o; o = o.getNext())
                if (!o.painted && o.getProperty("cSt", !1, null, !0)) {
                  ((_ = this._createStyleCanvas(e, v)),
                    (r = e.pushCanvas(_)),
                    (C = o),
                    (w = []));
                  try {
                    var T = o.getSource();
                    (x.initWhite(E),
                      P.initWhite(B),
                      this.depthFirstSearch(S, null, T, x, P));
                    for (
                      var I = x.getItemsOfColor(u.ColorMap.Colors.Black), F = 0;
                      F < I.length;
                      ++F
                    )
                      I[F]._paintBorder(e, this.$trf, this._scene, !0, C);
                    (b.each(
                      C.getPaintLayers().getBorderLayers(!0),
                      function (t, i) {
                        var n = this._createStyleCanvas(e, v),
                          r = e.pushCanvas(n);
                        try {
                          for (
                            var o = null, a = null, s = 0;
                            s < w.length;
                            ++s
                          ) {
                            (w[s]._paintBorder(
                              e,
                              this.$trf,
                              this._scene,
                              !0,
                              i,
                            ),
                              (w[s].painted = !0));
                            var l = w[s].getPathBase().getGeometryBBox();
                            o = o ? o.united(l) : l;
                            var h = w[s].getMarkersBorderBBox(this.$trf, i);
                            h && (a = a ? a.united(h) : h);
                          }
                          var A = this.createShapePaint(
                            e,
                            i.getProperty("_pt", !1, null, !0),
                            o,
                          );
                          if (A && A.paint) {
                            var c = this.$trf ? this.$trf.mapRect(o) : o,
                              p = C.getStyleBorderPadding(i);
                            p && (c = c.expanded(p, p, p, p));
                            var u = (c = a ? c.united(a) : c),
                              g = null;
                            if (A.transform && A.transform.isValid()) {
                              ((g = A.transform),
                                this.$trf && (g = g.multiplied(this.$trf)));
                              var f = i.getProperty("_px", !1, null, !0);
                              f && !f.isIdentity() && (g = g.preMultiplied(f));
                            }
                            if (g) {
                              u = g.inverted().mapRect(u);
                              var m = n.setTransform(
                                n.getTransform(!0).multiplied(g),
                              );
                              (n.fillRect(
                                u.getX(),
                                u.getY(),
                                u.getWidth(),
                                u.getHeight(),
                                A.paint,
                                i.getProperty("_op", !1, null, !0),
                                d.CompositeOperator.SourceIn,
                              ),
                                n.setTransform(m));
                            } else
                              n.fillRect(
                                u.getX(),
                                u.getY(),
                                u.getWidth(),
                                u.getHeight(),
                                A.paint,
                                i.getProperty("_op", !1, null, !0),
                                d.CompositeOperator.SourceIn,
                              );
                            r.drawCanvas(
                              n,
                              null,
                              null,
                              i.$_op,
                              i.getBlendingForContext(e),
                            );
                          }
                        } finally {
                          (n.finish(), e.popCanvas());
                        }
                      }.bind(this),
                    ),
                      r.drawCanvas(
                        _,
                        0,
                        0,
                        null,
                        d.CompositeOperator.DestinationOut,
                      ),
                      r.drawCanvas(
                        _,
                        0,
                        0,
                        null,
                        d.CompositeOperator.SourceOver,
                      ),
                      _.finish());
                  } finally {
                    e.popCanvas();
                  }
                }
            }
          }
        }),
        (w.prototype.hasCustomStyleEdges = function () {
          for (
            var e = !1, t = this._edges.getFirstChild();
            t && !e;
            t = t.getNext()
          )
            t.getProperty("cSt", !1, null, !0) && (e = !0);
          return e;
        }),
        (w.prototype._requireMiterLimitApproximation = function () {
          return !0;
        }),
        (w.prototype._calculateMarkersBorderBBox = function (e, t) {
          for (var i = this._edges.getFirstChild(); i; i = i.getNext()) {
            var n = i.getMarkersBorderBBox(this.$trf, t);
            n && (e = e.united(n));
          }
          return e;
        }),
        (w.prototype._calculatePaintBBox = function (e, t) {
          var i = this.getGeometryBBox(t);
          if (!i) return null;
          var n = this.getEffects(),
            r = i,
            o = new g(i.getX(), i.getY(), i.getWidth(), i.getHeight());
          if (this.hasStyleFill()) {
            var a = n.getEffectsBBox(i, c.StyleLayer.Fill, o);
            r = r.united(a);
          }
          var s = null;
          if (this.hasStyleBorder()) {
            var l = i;
            b.each(
              this.getPaintLayers().getBorderLayers(!0),
              function (e, t) {
                for (
                  var i = this.getStyleBorderPadding(t),
                    o = this._edges.getFirstChild();
                  o;
                  o = o.getNext()
                )
                  if (o.getProperty("cSt", !1, null, !0)) {
                    var a = o.getStyleBorderPadding(t);
                    a > i && (i = a);
                  }
                (i && (l = l.expanded(i, i, i, i)),
                  (l = this._calculateMarkersBorderBBox(l, t)));
                var h = n.getEffectsBBox(l, c.StyleLayer.Border, l);
                ((r = r.united(h)), (s = s ? s.united(l) : l));
              }.bind(this),
            );
          }
          return (r = n.getEffectsBBox(r, null, s || o));
        }),
        (w.prototype._geometryChange = function (e) {
          e.temporary || this._notifyChange(n._Change.FinishGeometryUpdate);
        }),
        (w.prototype._beforeGeometryChange = function (e) {
          this._notifyChange(n._Change.PrepareGeometryUpdate);
        }),
        (w.prototype.toString = function () {
          return "[Object GPathsGraph]";
        }),
        (e.exports = w));
    }