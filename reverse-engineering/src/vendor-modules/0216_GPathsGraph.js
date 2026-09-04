/**
 * chunk.vendor.js Module #216
 * Type: class
 * Name: GPathsGraph
 */

function (e, t, i) {
      var n = i(104),
        r = i(112),
        o = i(2),
        a = i(76),
        s = i(22),
        l = i(28),
        h = (i(75), i(7)),
        A = i(72),
        c = i(0),
        p = i(45),
        u = i(70),
        d = i(95),
        g = i(56),
        f = i(69),
        m = i(12),
        y = i(6),
        _ = i(5),
        v = i(11),
        b = i(14),
        C = i(228),
        w = i(652),
        E = i(148),
        B = i(510),
        x = i(133),
        P = i(122),
        S = i(159),
        T = i(103),
        I = i(9),
        F = {},
        R = function (e) {
          return e
            .map(function (e) {
              if ("string" == typeof e.text) return e.text;
              if ("object" == typeof e.text && e.text.$) {
                var t = F[e.text.$];
                return (
                  "number" != typeof t &&
                    ((t = Object.keys(F).length), (F[e.text.$] = t)),
                  t
                );
              }
              return "_";
            })
            .join("");
        };

      function D() {
        (n.call(this),
          (this.temporaryReceiver = !0),
          (this._siblingMap = {}),
          (this._disabledSiblingMap = {}),
          this.addEventListener(
            o.AfterInsertEvent,
            this._afterNodeInsert,
            this,
          ),
          this.addEventListener(
            o.BeforeRemoveEvent,
            this._beforeNodeRemove,
            this,
          ),
          this.addEventListener(
            o.AfterPropertiesChangeEvent,
            this._afterPropertiesChange,
            this,
          ),
          this.addEventListener(
            o.AfterFlagChangeEvent,
            this._afterFlagChange,
            this,
          ),
          this._setDefaultProperties(D.GeometryProperties, D.MetaProperties));
      }
      o.inheritAndMix("symbol", D, n, [
        o.Container,
        s.Transform,
        s.Stylable,
        s.Layout,
        o.Reference,
        f.LabelHolder,
      ]);

      function k(e) {
        "function" == typeof gdb_loaddesign && console.warn(e);
      }
      ((D.BLOCK_EDITED = !1),
        (D.STOP_PROPAGATION = v.uuid(16)),
        (D.create = function (e, t, i) {
          var n = new D();
          ((n._master = !0),
            (n.$masterRef = n.getReferenceId()),
            (n.$masterMultiRef = n.getMultireferenceId()),
            i && (n.$name = v.xss(i)));
          for (var r = [], o = 0; o < e.length; ++o) {
            (h = e[o]).validateInsertion(n) &&
              !D.containsUnsupportedNodes(h) &&
              r.push(h);
          }
          if (r.length > 0) {
            var a;
            if (t && t.getScene()) a = t.getScene();
            else for (o = 0; o < e.length && !a; o++) a = e[o].getScene();
            if (a) {
              var s = [];
              for (o = 0; o < r.length; ++o) {
                (h = r[o]) instanceof p &&
                  a.visitReferences(h, function (e) {
                    e instanceof u && s.push([e, h]);
                  });
              }
            }
            var l = r[r.length - 1].getNext();
            if (t) {
              if (!t.isLocked() && n.validateInsertion(t)) {
                t.insertChild(n, l);
                for (o = 0; o < r.length; ++o) {
                  ((h = r[o]).getParent() && h.getParent().removeChild(h),
                    n.appendChild(h));
                }
              }
            } else
              for (o = 0; o < r.length; ++o) {
                ((h = r[o]).getParent() && h.getParent().removeChild(h),
                  n.appendChild(h));
              }
            if (a)
              for (o = 0; o < s.length; ++o) {
                var h = s[o];
                a.link(h[0], h[1]);
              }
          }
          return (n.setProperty("frame", n.getGeometryBBox()), n);
        }),
        (D.UNSUPPORTED_NODES = ["[Object GPathsGraph]"]),
        (D.containsUnsupportedNodes = function (e) {
          if (e && e instanceof o) {
            e.toString();
            if (D.UNSUPPORTED_NODES.indexOf(e.toString()) >= 0) return !0;
            if (e.hasMixin(o.Container)) {
              var t = !1;
              return (
                e.acceptChildren(function (e) {
                  if (D.UNSUPPORTED_NODES.indexOf(e.toString()) >= 0)
                    return ((t = !0), !1);
                }),
                t
              );
            }
            return !1;
          }
          return !0;
        }),
        (D._swapBaseTransforms = function (e, t, i) {
          var n = null,
            r = (t = t || new h()).inverted();
          return (
            r &&
              ((n = e ? r.preMultiplied(e) : r), i && (n = i.preMultiplied(n))),
            n
          );
        }),
        (D._getChangedText = function (e, t) {
          for (
            var i, n = e.length, r = t.length, o = Math.min(n, r), a = 0;
            a < o && e.charAt(a) == t.charAt(a);
          )
            a++;
          for (
            i = a, a = 0;
            i + a < o && e.charAt(n - a - 1) == t.charAt(r - a - 1);
          )
            a++;
          var s = n - a - i;
          return (s < 0 ? (s = n - i) : 0 === s && n > r && (s = 1), [i, s]);
        }),
        (D._assignChangedTextContentProperties = function (e, t, i, n) {
          if (e.length !== t.length || t.length !== i.length) return !1;
          for (var r = !1, o = 0; o < e.length; o++)
            for (var a in e[o])
              if (e[o][a] !== t[o][a]) {
                if (n && !n(a)) continue;
                ((i[o][a] = t[o][a]), (r = !0));
              }
          return r;
        }),
        (D._getChangedTextContentProperties = function (e, t) {
          var i = [];
          for (var n in t[0])
            for (var r = t[0][n], o = 0, a = 0, s = 0; ; ) {
              if (!(o < t.length)) {
                if (a < e.length) {
                  i.push({
                    property: n,
                    value: r,
                    oldValue: e[a][n],
                    range: [s, o],
                  });
                  break;
                }
                break;
              }
              if (!(a < e.length)) {
                if (0 == o) {
                  for (; o < t.length && t[o][n] === r; ) o++;
                  i.push({
                    property: n,
                    value: r,
                    oldValue: e.length ? e[a - 1][n] : null,
                    range: [0, o],
                  });
                  break;
                }
                i.push({
                  property: n,
                  value: r,
                  oldValue: e.length ? e[a - 1][n] : null,
                  range: [s, o],
                });
                break;
              }
              if (t[o][n] !== e[a][n]) {
                var l = e[a][n];
                if (0 == o) {
                  for (; o < t.length && t[o][n] === r; ) o++;
                  i.push({
                    property: n,
                    value: r,
                    oldValue: l,
                    range: [0, o],
                  });
                  break;
                }
                i.push({
                  property: n,
                  value: r,
                  oldValue: l,
                  range: [s, o],
                });
                break;
              }
              for (
                r = t[o][n], s = o;
                o < t.length && (t[o][n] === r || !t[o].hasOwnProperty(n));
              )
                o++;
              for (
                ;
                a < e.length && (e[a][n] === r || !e[a].hasOwnProperty(n));
              )
                a++;
            }
          return i.length ? i : null;
        }),
        (D.GeometryProperties = {
          trf: null,
          frame: null,
        }),
        (D.MetaProperties = {
          masterRef: null,
          masterMultiRef: null,
          blockEv: !1,
          dsb: null,
          sbl: null,
          swp: null,
          swpori: null,
        }),
        (D.AfterThumbnailUpdate = function (e, t) {
          ((this.symbol = e), (this.image = t));
        }),
        c.inherit(D.AfterThumbnailUpdate, A),
        (D.AfterThumbnailUpdate.prototype.symbol = null),
        (D.AfterThumbnailUpdate.prototype.image = null),
        (D.AfterThumbnailUpdate.prototype.toString = function () {
          return "[Event GSymbol.AfterThumbnailUpdate]";
        }),
        (D.AfterSiblingUpdate = function (e, t, i) {
          ((this.updated = t), (this.targetNode = e), (this.type = i));
        }),
        c.inherit(D.AfterSiblingUpdate, A),
        (D.AfterSiblingUpdate.INSERT = "insert"),
        (D.AfterSiblingUpdate.REMOVE = "remove"),
        (D.AfterSiblingUpdate.UPDATE = "update"),
        (D.AfterSiblingUpdate.prototype.updated = null),
        (D.AfterSiblingUpdate.prototype.targetNode = null),
        (D.AfterSiblingUpdate.prototype.type = null),
        (D.AfterSiblingUpdate.prototype.toString = function () {
          return "[Event GNode.AfterSiblingUpdate]";
        }),
        (D.prototype._siblingMap = null),
        (D.prototype._disabledSiblingMap = null),
        (D.prototype._master = !1),
        (D.prototype._blockEvents = 0),
        (D.prototype._killEvents = !1),
        (D.prototype._cachedImage = null),
        (D.prototype._cachedSymbolSiblings = null),
        (D.prototype._shouldRepaintThumbnail = !0),
        (D.enableSweepInstances = !1),
        (D.prototype.getNodeNameTranslated = function () {
          return I.getValue("GSymbol", "name", this.getNodeName());
        }),
        (D.prototype.synchronize = function (e, t, i) {
          if (!this.isMaster()) {
            var n = this.getMasterSymbol();
            if (!n) return (k("gsymbol: No master symbol found."), null);
            if (
              !D.BLOCK_EDITED &&
              e &&
              e !== this &&
              !this._siblingMap[e.getMultireferenceId()]
            ) {
              var r = this;
              do {
                if (
                  (r = this._symbolParent(r)) &&
                  r._siblingMap[e.getMultireferenceId()]
                )
                  return r.synchronize(e, t, i);
              } while (r);
            }
            var a = !1,
              s = {},
              l = [];
            for (var A in this._disabledSiblingMap) {
              var c = this._disabledSiblingMap[A];
              if (c) {
                if (
                  !e ||
                  (e &&
                    (e === c ||
                      c.findParent(function (t) {
                        return t === e;
                      })))
                ) {
                  if (
                    ((this._siblingMap[A] = c),
                    delete this._disabledSiblingMap[A],
                    (a = !0),
                    (e || !t) && c instanceof p.AnchorPoint)
                  ) {
                    var u = c.getParent().getParent();
                    l.indexOf(u) < 0 && l.push(u);
                  } else l.push(c);
                  c instanceof D &&
                    c.acceptChildren(function (e) {
                      l.push(e);
                    });
                }
                if ((e || !t) && c instanceof p.AnchorPoint) {
                  var g;
                  u = c.getParent().getParent();
                  (s.hasOwnProperty(u.getMultireferenceId())
                    ? (g = s[u.getMultireferenceId()])
                    : (s[u.getMultireferenceId()] = g = []),
                    g.push(c));
                }
              } else k("gsymbol: disabled node was null");
            }
            if (!((e && e !== this) || t || i)) {
              var f = n.getProperty("frame"),
                m = this.getProperty("frame");
              f &&
                !y.equals(m, f) &&
                this.setProperty("frame", y.deserialize(y.serialize(f)));
              var _ = this.getProperty("trf") || new h(),
                v = (n.getProperty("trf") || new h()).decomposed(),
                b = _.decomposed(),
                C = _.inverted();
              if (
                !h.equals(b.scale, v.scale, 1e-4) ||
                !h.equals(b.skew, v.skew, 1e-4)
              ) {
                var w = this.getFrame(),
                  E = w.getSide(y.Side.CENTER),
                  B = w.getSide(y.Side.TOP_LEFT);
                _ = _.translated(-E.getX(), -E.getY())
                  .multiplied(b.rotate.inverted())
                  .multiplied(b.skew.inverted());
                var x = y.fromPoints.apply(
                  null,
                  C.multiplied(_).mapQuadrilateral(w),
                );
                ((_ = _.translated(x.getWidth() / 2, x.getHeight() / 2)
                  .multiplied(b.scale.inverted())
                  .multiplied(v.scale)),
                  (x = y.fromPoints.apply(
                    null,
                    C.multiplied(_).mapQuadrilateral(w),
                  )),
                  (_ = _.translated(-x.getWidth() / 2, -x.getHeight() / 2)
                    .multiplied(v.skew)
                    .multiplied(b.rotate)),
                  (x = y.fromPoints.apply(
                    null,
                    C.multiplied(_).mapQuadrilateral(w),
                  )),
                  (_ = _.translated(
                    x.getWidth() / 2,
                    x.getHeight() / 2,
                  ).translated(B.getX(), B.getY())),
                  this.transform(C.multiplied(_)));
              }
              var P = (e && e.$masterMultiRef) || this.$masterMultiRef,
                S = this._symbolParent(e);
              if (
                (S &&
                  S.$swp &&
                  S.$swp.indexOf(P) % 2 == 1 &&
                  S.synchronize(this || e),
                !a)
              )
                return;
            }
            if (((this.$blockEv = !0), e || !t))
              (l = this._sortByDepth(l)).forEach(
                function (e) {
                  var t,
                    i,
                    r = e,
                    o = e.getMultireferenceId();
                  do {
                    if ((r = n._symbolParent(r)))
                      if (
                        (i = (t = r === this ? n : r.getMasterSymbol())
                          ._siblingMap[o])
                      ) {
                        var a, l;
                        if (
                          (e.hasProperty("trf") &&
                            (a = D._swapBaseTransforms(
                              i.getTransform(),
                              t.getTransform(),
                              r.getTransform(),
                            )),
                          e instanceof d &&
                            (l = D._swapBaseTransforms(
                              i.getImageTransform(),
                              t.getTransform(),
                              r.getTransform(),
                            )),
                          t === n)
                        ) {
                          e.assignFrom(i);
                          var A = this._getStylableProperties(e);
                          if (
                            (e.setProperties(A, e.getProperties(A)),
                            e instanceof p)
                          ) {
                            var c = s[e.getMultireferenceId()];
                            if (c)
                              for (var u = 0; u < c.length; u++) {
                                var g = c[u],
                                  f = t._siblingMap[g.getMultireferenceId()];
                                f &&
                                  g.transferProperties(f, [
                                    p.AnchorPoint.GeometryProperties,
                                  ]);
                              }
                          }
                        }
                        e instanceof d
                          ? e.setProperties(["trf", "itrf"], [a, l])
                          : e.hasProperty("trf") && e.setProperty("trf", a);
                      } else {
                        var m = this._translationSwapped(e);
                        m &&
                          (e.setProperty(
                            "trf",
                            (e.$trf || new h()).translated(
                              -m.getX(),
                              -m.getY(),
                            ),
                          ),
                          (i = !0));
                      }
                  } while (!i && r);
                }.bind(this),
              );
            else {
              var T = this.getTransform();
              this.assignFrom(n);
              var I = this._getStylableProperties(this);
              (this.setProperties(I, this.getProperties(I)),
                this.setProperty("trf", T),
                this.clearChildren(),
                n.acceptChildren(
                  function (e) {
                    var t = e.clone({
                      symbolMasterReplicate: !1,
                    });
                    (this.appendChild(t),
                      e.hasMixin(o.Properties) &&
                        e.hasProperty("trf") &&
                        e.setProperty(
                          "trf",
                          D._swapBaseTransforms(
                            e.getTransform(),
                            n.getTransform(),
                            this.getTransform(),
                          ),
                        ));
                  }.bind(this),
                ));
            }
            this.$blockEv = !1;
          }
        }),
        (D.prototype._sortByDepth = function (e) {
          for (var t = [], i = 0; i < e.length; i++) {
            var n = e[i],
              r = 0;
            do {
              ((n = n.getParent()), r++);
            } while (n);
            t.push({
              node: e[i],
              depth: r,
            });
          }
          return (
            t.sort(function (e, t) {
              return e.depth - t.depth;
            }),
            t.map(function (e) {
              return e.node;
            })
          );
        }),
        (D.prototype._translationSwapped = function (e, t) {
          if (!(e instanceof D)) return null;
          if (e.isMaster()) return null;
          var i = t || this._symbolParent(e);
          if (!i) return null;
          var n,
            r = e.$masterMultiRef,
            o = i.$swp && i.$swp.indexOf(r),
            a = i.getMasterSymbol();
          if (a && o % 2 == 1 && (n = a._siblingMap[e.$swpori[o - 1]])) {
            var s = D._swapBaseTransforms(
                n.getTransform(),
                a.getTransform(),
                i.getTransform(),
              ),
              l = e.getFrame().getSide(y.Side.TOP_LEFT),
              h = s.mapRect(n.$frame).getSide(y.Side.TOP_LEFT);
            return l.subtract(h);
          }
          return null;
        }),
        (D.prototype.getDisabledSiblings = function () {
          var e = {};
          for (var t in this._disabledSiblingMap)
            e[t] = this._disabledSiblingMap[t];
          return (
            (e.SYMBOL_FRAME = y.deserialize(
              y.serialize(this.getProperty("frame")),
            )),
            (e.SYMBOL_TRF = this.getTransform()
              ? this.getTransform().translated(0, 0)
              : null),
            e
          );
        }),
        (D.prototype.desynchronize = function (e) {
          if (!this.isMaster()) {
            if (!this.getMasterSymbol())
              return (k("gsymbol: No master symbol found."), null);
            var t = {},
              i = [];
            for (var n in e) {
              var r = e[n];
              if (r) {
                if ("SYMBOL_FRAME" !== n && "SYMBOL_TRF" !== n) {
                  var o;
                  if ((o = this._siblingMap[n]))
                    if (o instanceof p.AnchorPoint)
                      (s = o.getParent() && o.getParent().getParent()) &&
                        i.indexOf(s) < 0 &&
                        i.push(s);
                    else i.push(o);
                  else if ((o = this._disabledSiblingMap[n])) {
                    if (o instanceof p.AnchorPoint)
                      (s = o.getParent() && o.getParent().getParent()) &&
                        i.indexOf(s) < 0 &&
                        i.push(s);
                    else i.push(o);
                  } else k("instance item was deleted");
                  if (o instanceof p.AnchorPoint) {
                    var a,
                      s = o.getParent().getParent();
                    (t.hasOwnProperty(s.getMultireferenceId())
                      ? (a = t[s.getMultireferenceId()])
                      : (t[s.getMultireferenceId()] = a = []),
                      a.push(r));
                  }
                }
              } else k("gsymbol: disabled node was null");
            }
            var l = this.getProperty("frame"),
              A = e.SYMBOL_FRAME;
            A &&
              !y.equals(l, A) &&
              this.setProperty("frame", y.deserialize(y.serialize(A)));
            var c = e.SYMBOL_TRF,
              u = this.getProperty("trf") || new h(),
              d = (c || new h()).decomposed(),
              g = u.decomposed(),
              f = u.inverted();
            if (
              !h.equals(g.scale, d.scale, 1e-4) ||
              !h.equals(g.skew, d.skew, 1e-4)
            ) {
              var m = this.getFrame(),
                _ = m.getSide(y.Side.CENTER),
                v = m.getSide(y.Side.TOP_LEFT);
              u = u
                .translated(-_.getX(), -_.getY())
                .multiplied(g.rotate.inverted())
                .multiplied(g.skew.inverted());
              var b = y.fromPoints.apply(
                null,
                f.multiplied(u).mapQuadrilateral(m),
              );
              ((u = u
                .translated(b.getWidth() / 2, b.getHeight() / 2)
                .multiplied(g.scale.inverted())
                .multiplied(d.scale)),
                (b = y.fromPoints.apply(
                  null,
                  f.multiplied(u).mapQuadrilateral(m),
                )),
                (u = u
                  .translated(-b.getWidth() / 2, -b.getHeight() / 2)
                  .multiplied(d.skew)
                  .multiplied(g.rotate)),
                (b = y.fromPoints.apply(
                  null,
                  f.multiplied(u).mapQuadrilateral(m),
                )),
                (u = u
                  .translated(b.getWidth() / 2, b.getHeight() / 2)
                  .translated(v.getX(), v.getY())),
                this.transform(f.multiplied(u)));
            }
            i.length &&
              (i = this._sortByDepth(i)).forEach(
                function (i) {
                  var n = i.getMultireferenceId(),
                    r = e[n];
                  if (r) {
                    var o;
                    (i.hasProperty("trf") &&
                      (o = D._swapBaseTransforms(
                        r.getTransform(),
                        c,
                        this.getTransform(),
                      )),
                      i.assignFrom(r));
                    var a = this._getStylableProperties(i);
                    if (
                      (i.setProperties(a, i.getProperties(a)), i instanceof p)
                    ) {
                      var s = t[i.getMultireferenceId()];
                      if (s)
                        for (var l = 0; l < s.length; l++) {
                          var h = s[l],
                            A = e[h.getMultireferenceId()];
                          A &&
                            h.transferProperties(A, [
                              p.AnchorPoint.GeometryProperties,
                            ]);
                        }
                    }
                    i.hasProperty("trf") && i.setProperty("trf", o);
                  }
                }.bind(this),
              );
          }
        }),
        (D.prototype.inSync = function (e, t) {
          if (this.isMaster()) return !0;
          if (!this.getMasterSymbol()) return !0;
          var i,
            n = !1;
          if (!e || (t && e === this.getMasterSymbol()) || e === this) {
            var r = this.getMasterSymbol().getProperty("frame"),
              a = this.getProperty("frame");
            if (r && !y.equals(a, r)) return !1;
            var l = (
                this.getMasterSymbol().getProperty("trf") || new h()
              ).decomposed(),
              A = (this.getProperty("trf") || new h()).decomposed();
            if (!h.equals(A.scale, l.scale, 1e-4)) return !1;
            for (var c in this._disabledSiblingMap) {
              n = !0;
              break;
            }
            return !n;
          }
          if (this._disabledSiblingMap[e.getMultireferenceId()]) return !1;
          if (t && e && e.hasMixin(o.Container))
            for (var p in ((i = {}), e.getSubnodeIds(i), i))
              if (this._disabledSiblingMap.hasOwnProperty(p)) return !1;
          return (
            !t ||
            !e ||
            e instanceof D ||
            !e.findParent(function (t) {
              if (t instanceof D && !t.isMaster()) {
                if (
                  t._disabledSiblingMap.hasOwnProperty(e.getMultireferenceId())
                )
                  return !0;
                for (var n in i) {
                  var r = t._disabledSiblingMap[n];
                  if (r && !(r instanceof s))
                    if (
                      r.findParent(function (e) {
                        if (e instanceof s) return !0;
                      }) === e
                    )
                      return !0;
                }
              }
            })
          );
        }),
        (D.prototype.assignFrom = function (e) {
          (e instanceof D &&
            this.transferProperties(e, [
              D.GeometryProperties,
              D.MetaProperties,
            ]),
            (this._cachedImage = e._cachedImage),
            n.prototype.assignFrom.call(this, e));
        }),
        (D.prototype.isMaster = function () {
          return (
            this._master && this.getMultireferenceId() === this.$masterMultiRef
          );
        }),
        (D.prototype.getSymbolImage = function () {
          if (!this._cachedImage || this._shouldRepaintThumbnail) {
            console.log("GET SYMBOL IMAGE");
            this.toBitmap(null, null, null, null, {
              paintMode: x.PaintMode.Fast,
              defaultEffectDetailLevel: 0.5 / b.getScreenDPI(),
            });
            return this._cachedImage;
          }
          return this._cachedImage;
        }),
        (D.prototype._getMasterSibling = function (e, t, i) {
          if (this.isMaster())
            return t && this._siblingMap.hasOwnProperty(e)
              ? this._siblingMap[e]
              : null;
          var n = this.getMasterSymbol();
          if (n && n._siblingMap.hasOwnProperty(e)) return n._siblingMap[e];
          if (!i) return null;
          for (var r = [this], o = this; o; )
            if ((o = o._symbolParent())) {
              var a = o.getMasterSymbol();
              if (a) {
                for (var s = r.length; s > 0 && a; ) {
                  var l = r[--s];
                  a = a._siblingMap[l.getMultireferenceId()];
                }
                if (a && a._siblingMap.hasOwnProperty(e))
                  return a._siblingMap[e];
              }
              r.push(o);
            }
          return null;
        }),
        (D.prototype.convertToMaster = function (e, t) {
          var i = this.getScene();
          if (!this.getMasterSymbol() && (t || i)) {
            ((this._master = !0), this.resetMultireference());
            var n,
              r,
              a = v.xss(e || this.getProperty("name"));
            if (
              (this.setProperties(
                ["masterMultiRef", "masterRef", "name"],
                [this.getMultireferenceId(), this.getReferenceId(), a],
              ),
              i)
            ) {
              ((n = this.getParent()), (r = this.getNext()));
              var s = !1,
                l = !1;
              (i.startBlockReferenceChanges(),
                this.hasFlag(o.Flag.Selected) &&
                  ((s = !0), this.removeFlag(o.Flag.Selected)),
                this.hasFlag(o.Flag.Highlighted) &&
                  ((l = !0), this.removeFlag(o.Flag.Highlighted)),
                n.removeChild(this),
                n.insertChild(this, r),
                s && this.setFlag(o.Flag.Selected),
                l && this.setFlag(o.Flag.Highlighted),
                i.endBlockReferenceChanges());
            } else
              t &&
                t._symbolDictionary &&
                t._symbolDictionary._afterInsert({
                  node: this,
                });
            return !0;
          }
          return !1;
        }),
        (D.prototype.detach = function () {
          return (
            !(this.isMaster() || !this.getMasterSymbol() || !this.getScene()) &&
            (this.getScene().unlink(this.$masterRef, this),
            this.resetMultireference(),
            this.setProperties(["masterMultiRef", "masterRef"], [null, null]),
            !0)
          );
        }),
        (D.prototype.swapWith = function (e) {
          if (e !== this && e instanceof D && this.getScene()) {
            var t = this.getNext(),
              i = this.getParent();
            if (i) {
              var n = this._symbolParent(),
                r = this.getMultireferenceId(),
                o = n ? n.getMasterSymbol() : null;
              (this.$swpori ||
                this.setProperty("swpori", [r, this.$masterMultiRef]),
                i.removeChild(this));
              var a = e.clone();
              if (
                (a.setProperty("swpori", this.$swpori.slice()),
                a.$masterMultiRef === this.$swpori[1] &&
                  ((a._multiReferenceId = this.$swpori[0]),
                  (r = this.$swpori[0])),
                i.insertChild(a, t),
                o)
              ) {
                e._symbolParent();
                n._siblingMap[r] = a;
              }
              var s = this.getFrame().getSide(y.Side.TOP_LEFT),
                l = a.getFrame().getSide(y.Side.TOP_LEFT),
                A = s.subtract(l);
              a.transform(new h().translated(A.getX(), A.getY()));
              var c = ["hacr", "vacr"];
              a.setProperties(c, this.getProperties(c));
              var p = this._symbolParent(a);
              if (p) {
                var u = (p.getProperty("swp") || []).slice();
                (k("Swapped:"),
                  k(u),
                  u.push(this.$masterMultiRef),
                  u.push(a.$masterMultiRef));
                for (var d = 1; d < u.length; d += 2) {
                  var g = u[d],
                    f = u[d - 1];
                  if (g !== f) {
                    for (var m = [d - 1, d], _ = 0; _ < u.length; )
                      if (m.indexOf(_) >= 0) _ += 2;
                      else if (u[_] === g) {
                        if (
                          ((g = u[_ + 1]), m.push(_, _ + 1), (_ = 0), g === f)
                        )
                          break;
                      } else _ += 2;
                    if (g === f) {
                      m.sort(function (e, t) {
                        return t - e;
                      });
                      for (_ = 0; _ < m.length; _++) u.splice(m[_], 1);
                      break;
                    }
                  } else (u.splice(0, 2), (d -= 2), k("Strange swap array!"));
                }
                (k("Swapped after:"), k(u), p.setProperty("swp", u));
              }
              return a;
            }
          }
        }),
        (D.prototype.swapWithNew = function (e) {
          if (
            e !== this &&
            e instanceof D &&
            this.getScene() &&
            this.getParent() &&
            !this.isMaster()
          ) {
            for (var t = this.getFirstChild(); t; t = t.getNext())
              this.removeChild(t);
            var i = e.clone();
            if (e === this.getMasterSymbol())
              for (t = i.getFirstChild(); t; t = t.getNext())
                (i.removeChild(t), this.appendChild(t));
            else this.appendChild(i);
            return i;
          }
        }),
        (D.prototype.getMasterSymbol = function () {
          if (this.isMaster()) return this;
          if (!this._workspace) return null;
          var e = null;
          return (e = this._workspace.getReference(this.$masterRef)) &&
            (e.isMaster() ||
              k("GSymbol.getMasterSymbol: returning slave as master"),
            this.getScene() !== e.getScene())
            ? null
            : e;
        }),
        (D.prototype.getStylePropertySets = function () {
          return [l.PropertySet.Style, l.PropertySet.Effects];
        }),
        (D.prototype.getTransform = function () {
          return this.$trf;
        }),
        (D.prototype.getAngle = function () {
          var e = 0,
            t = this.getSourceBBox();
          if (t && !t.isEmpty()) {
            var i = t.getSide(y.Side.BOTTOM_LEFT),
              n = t.getSide(y.Side.BOTTOM_RIGHT);
            (this.$trf &&
              ((i = this.$trf.mapPoint(i)), (n = this.$trf.mapPoint(n))),
              (e = m.normalizeAngleRadians(
                -Math.atan2(n.getY() - i.getY(), n.getX() - i.getX()),
              )) > Math.PI && (e -= m.PI2));
          }
          return e;
        }),
        (D.prototype.setTransform = function (e) {
          this.setProperty("trf", e);
        }),
        (D.prototype.transform = function (e, t, i) {
          if (e && !e.isIdentity()) {
            ((this._layoutTransform = e),
              (this._relayoutNow = !this._relayout));
            var n = !1;
            this._relayout = !0;
            var r,
              o = this._hasMasterParent();
            ((!o || (o && this.isMaster() && this.dependentUpdate)) &&
              ((r = this.getProperty("blockEv")),
              (n = !0),
              this.setProperty("blockEv", !0)),
              this.setProperty("trf", this.$trf ? this.$trf.multiplied(e) : e));
            var a = this.hasAnchors();
            this.beginUpdate();
            try {
              if (a && this.dependentUpdate && !t) {
                if (a)
                  for (
                    var l = this.getFirstChild(!0);
                    null != l;
                    l = l.getNext(!0)
                  )
                    l instanceof s &&
                      l.hasMixin(s.Transform) &&
                      !l.getProperty("hacr") &&
                      !l.getProperty("vacr") &&
                      (!i || i.indexOf(l) < 0) &&
                      ((l.dependentUpdate = !0),
                      l.transform(e, t, i),
                      (l.dependentUpdate = !1));
              } else this._transformChildren(e, t);
            } finally {
              this.endUpdate();
            }
            (this._relayoutNow &&
              (this._layoutAnchorContents(null, null, this._layoutTransform),
              (this._layoutTransform = null),
              (this._relayoutNow = !1)),
              n && this.setProperty("blockEv", r));
          }
        }),
        (D.prototype.preTransform = function (e, t, i) {
          if (e && !e.isIdentity()) {
            ((this._layoutTransform = this.$trf
              ? this.$trf.inverted().multiplied(e).multiplied(this.$trf)
              : e),
              (this._relayoutNow = !this._relayout),
              (this._relayout = !0),
              this.setProperty("trf", this.$trf ? e.multiplied(this.$trf) : e));
            var n = this._hasMasterParent();
            (n || this._blockEvents++,
              s.Transform.prototype.preTransform.call(this, e, t, i),
              this._relayoutNow &&
                (this._layoutAnchorContents(null, null, this._layoutTransform),
                (this._layoutTransform = null),
                (this._relayoutNow = !1)),
              n || this._blockEvents--);
          }
        }),
        (D.prototype._hasMasterParent = function () {
          var e = this.findParent(function (e) {
            if (e instanceof D) return !0;
          });
          return e && e.isMaster();
        }),
        (D.prototype._calculateSourceBBox = function (e) {
          return this.getProperty("frame");
        }),
        (D.prototype._calculatePaintBBox = function (e, t) {
          var i = this.getChildrenPaintBBox(null, null, t);
          i =
            (i &&
              this.getEffects() &&
              this.getEffects().getEffectsBBox(i, null, i)) ||
            i;
          var n = this.getFrame();
          if (n && this.getScene()) {
            var r = this.getScene().getLabelBBox(this.isScaleLabel());
            ((r = new y(
              n.getX(),
              n.getY() - r.getHeight(),
              n.getWidth(),
              r.getHeight(),
            )),
              (i = i && !i.isEmpty() ? i.united(r) : r));
          }
          return i;
        }),
        (D.prototype._getBitmapPaintArea = function () {
          var e = this.getChildrenPaintBBox();
          if (!e) return new y(0, 0, 0, 0);
          e = this.getEffects()
            ? this.getEffects().getEffectsBBox(e, null, e)
            : e;
          var t = this.getFrame();
          return (t && this.getScene() && (e = e.united(t)), e);
        }),
        (D.prototype._calculateGeometryBBox = function (e) {
          return (
            this.getFrame() || n.prototype._calculateGeometryBBox.call(this, e)
          );
        }),
        (D.prototype._paintStyleContent = function (e, t, i, n, r) {
          this._paintChildren(e);
        }),
        (D.prototype._detailHitTest = function (e, t, i, n, o, a, s) {
          var l = this.getFrame();
          return !l || l.isEmpty()
            ? null
            : (t && (l = t.mapRect(l)),
              l.expanded(i, i, i, i).containsPoint(e)
                ? new r(this, {
                    label: !1,
                  })
                : this._hitTestLabel(e, i, t, !0));
        }),
        (D.prototype._getLabelGeometryBBox = function () {
          return this.getFrame();
        }),
        (D.prototype.getCustomCollisionBBox = function (e) {
          var t = this.getFrame(),
            i = this.getScene();
          if (t && i && this.isVisible()) {
            var n = i.getLabelBBox(this.isScaleLabel());
            return new y(
              t.getX(),
              t.getY() - n.getHeight(),
              t.getWidth(),
              n.getHeight(),
            );
          }
          return null;
        }),
        (D.prototype.getFrame = function () {
          return this.$frame && this.$trf
            ? this.$trf.mapRect(this.$frame)
            : this.$frame;
        }),
        (D.prototype.clone = function (e) {
          var t = n.prototype.clone.call(this, e);
          return (
            t &&
              (e && e.symbolMasterReplicate && this.isMaster()
                ? ((t._master = this._master),
                  t.resetMultireference(),
                  t.setProperties(
                    ["masterRef", "masterMultiRef"],
                    [t.getReferenceId(), t.getMultireferenceId()],
                  ))
                : (t._referenceId = v.uuid())),
            t
          );
        }),
        (D.prototype.insertChild = function (e, t) {
          if (!(e instanceof D) && e.hasMixin(o.Container)) {
            var i = !0,
              n = this.getMasterSymbol();
            if (
              n &&
              (e.acceptChildren(function (e) {
                if (e instanceof D && e.getMasterSymbol() === n)
                  return ((i = !1), !1);
              }),
              !i)
            )
              return;
          }
          return o.Container.prototype.insertChild.call(this, e, t);
        }),
        (D.prototype.validateInsertion = function (e) {
          if (n.prototype.validateInsertion.call(this, e)) {
            var t = this.getMasterSymbol();
            if (null === t) return !0;
            for (; e; ) {
              if (e instanceof D) return e.getMasterSymbol() !== t;
              e = e.getParent();
            }
            return !0;
          }
          return !1;
        }),
        (D.prototype._afterNodeInsert = function (e) {
          if (!(this._blockEvents > 0)) {
            if (this.isMaster() && e.node !== this) {
              if (e.customObj.hasOwnProperty(D.STOP_PROPAGATION)) return;
              e.customObj[D.STOP_PROPAGATION] = !0;
            }
            if (this.isMaster() || this._isRestoring) {
              var t = e.node.getMultireferenceId();
              if (
                (this._siblingMap[t] &&
                  (k("Multireference conflict detected in master symbol"),
                  e.node.resetMultireference(),
                  (t = e.node.getMultireferenceId())),
                (this._siblingMap[t] = e.node),
                e.node.hasMixin(o.Container))
              )
                (e.node.getSubnodeIds(this._siblingMap),
                  this._isRestoring || this._getDeadSiblingsFromNode(e.node));
              else if (e.node.hasMixin(s.Stylable))
                throw new Error(
                  "GSymbol: stylable without Container mixin. This corrupts some symbol principles.",
                );
            }
            if (!this.isMaster() && !this._isRestoring) {
              t = e.node.getMultireferenceId();
              if (
                ((this._siblingMap[t] = e.node), e.node.hasMixin(o.Container))
              )
                e.node.getSubnodeIds(this._siblingMap);
              else if (e.node.hasMixin(s.Stylable))
                throw new Error(
                  "GSymbol: stylable without Container mixin. This corrupts some symbol principles.",
                );
            }
            if (this.isMaster() && !this._isRestoring && e.node !== this) {
              var i = e.node,
                n = i.getNext(),
                r = i.getMultireferenceId(),
                a = i.getParent(),
                l = this;
              this._iterateSiblings(a, function (t, a, A) {
                var c, p;
                if (e.node instanceof D && e.node.isRecordedTransaction()) {
                  var u = a.getProperty("swp");
                  if (u)
                    for (var d = 0; d < u.length; d += 2)
                      if (u[d] === e.node.$masterMultiRef) return;
                }
                if (
                  (n && (c = a._siblingMap[n.getMultireferenceId()]),
                  "function" == typeof i.clone && (p = i.clone()),
                  p)
                ) {
                  var g = a;
                  if (
                    A === l ||
                    (g = a.findParent(function (e) {
                      return e instanceof D && e.$masterRef === l.$masterRef;
                    }))
                  ) {
                    if (
                      ((g._siblingMap[r] = p),
                      p.hasMixin(o.Container) && p.getSubnodeIds(g._siblingMap),
                      i.hasMixin(s.Transform))
                    ) {
                      var f = A.getTransform(),
                        m = D._swapBaseTransforms(
                          i.getTransform(),
                          f,
                          a.getTransform(),
                        ),
                        y = i.getTransform() || new h();
                      p.transform(y.inverted().multiplied(m));
                    }
                    var _;
                    if (t instanceof s)
                      (_ = t.getScene()) &&
                        _._beginBlockEvents([
                          o.AfterPropertiesChangeEvent,
                          o.BeforePropertiesChangeEvent,
                        ]);
                    (t._beginBlockEvents([
                      o.BeforeInsertEvent,
                      o.AfterInsertEvent,
                      o.AfterPropertiesChangeEvent,
                      o.BeforePropertiesChangeEvent,
                    ]),
                      t.insertChild(p, c),
                      t._endBlockEvents([
                        o.BeforeInsertEvent,
                        o.AfterInsertEvent,
                        o.AfterPropertiesChangeEvent,
                        o.BeforePropertiesChangeEvent,
                      ]),
                      _ &&
                        _._endBlockEvents([
                          o.AfterPropertiesChangeEvent,
                          o.BeforePropertiesChangeEvent,
                        ]),
                      p.hasMixin(o.Container) && g._getDeadSiblingsFromNode(p),
                      a._canEventBeSent(D.AfterSiblingUpdate) &&
                        a._sendEvent(
                          new D.AfterSiblingUpdate(
                            p,
                            t,
                            D.AfterSiblingUpdate.INSERT,
                          ),
                        ));
                  } else
                    k("symbol insert: couldn't find right symbol with map");
                } else k("symbol: Couldn't clone a node");
              });
            }
          }
        }),
        (D.prototype._getDeadSiblingsFromNode = function (e) {
          var t = this;
          e.accept(function (e) {
            if (e instanceof D && !e.isMaster()) {
              var i = e.findParent(function (e) {
                if (e instanceof D && e.isMaster()) return !0;
              });
              if (!i || i === t)
                for (var n = e.getFirstChild(); n; n = n.getNext())
                  e._getMasterSibling(n.getMultireferenceId()) ||
                    ((t._siblingMap[n.getMultireferenceId()] = n),
                    n.getSubnodeIds(t._siblingMap));
            }
          });
        }),
        (D.prototype._beforeNodeRemove = function (e) {
          if (!(this._blockEvents > 0)) {
            if (this.isMaster() && e.node !== this) {
              if (e.customObj.hasOwnProperty(D.STOP_PROPAGATION)) return;
              e.customObj[D.STOP_PROPAGATION] = !0;
            }
            var t = e.node;
            if (this.isMaster() && !this._isRestoring && t !== this) {
              var i = this;
              this._iterateSiblings(
                t,
                function (e, t, n) {
                  var r = t;
                  if (
                    n === i ||
                    (r = t.findParent(function (e) {
                      return e instanceof D && e.$masterRef === i.$masterRef;
                    }))
                  ) {
                    var a = e.getParent();
                    if (!a)
                      return (
                        delete r._siblingMap[e.getMultireferenceId()],
                        void delete r._disabledSiblingMap[
                          e.getMultireferenceId()
                        ]
                      );
                    var l = a instanceof s && a.getScene();
                    (l &&
                      l._beginBlockEvents([
                        o.AfterPropertiesChangeEvent,
                        o.BeforePropertiesChangeEvent,
                      ]),
                      a._beginBlockEvents([
                        o.BeforeRemoveEvent,
                        o.AfterRemoveEvent,
                        o.AfterPropertiesChangeEvent,
                        o.BeforePropertiesChangeEvent,
                      ]),
                      a.removeChild(e),
                      delete r._siblingMap[e.getMultireferenceId()],
                      delete r._disabledSiblingMap[e.getMultireferenceId()],
                      a._endBlockEvents([
                        o.BeforeRemoveEvent,
                        o.AfterRemoveEvent,
                        o.AfterPropertiesChangeEvent,
                        o.BeforePropertiesChangeEvent,
                      ]),
                      l &&
                        l._endBlockEvents([
                          o.AfterPropertiesChangeEvent,
                          o.BeforePropertiesChangeEvent,
                        ]),
                      t._canEventBeSent(D.AfterSiblingUpdate) &&
                        t._sendEvent(
                          new D.AfterSiblingUpdate(
                            e,
                            a,
                            D.AfterSiblingUpdate.REMOVE,
                          ),
                        ));
                  } else
                    k("symbol remove: couldn't find right symbol with map");
                },
                !0,
              );
            }
            this.isMaster() &&
              (delete this._siblingMap[t.getMultireferenceId()],
              delete this._disabledSiblingMap[t.getMultireferenceId()]);
            ((this.isMaster() && t !== this) || !this._hasMasterParent()) &&
              (function () {
                if (t.hasMixin(o.Container)) {
                  var e = {};
                  for (var i in (t.getSubnodeIds(e), e)) {
                    var n = e[i];
                    n instanceof D || n.resetMultireference();
                  }
                } else t.resetMultireference();
              })();
          }
        }),
        (D.prototype._comparePropertiesWithMaster = function (e, t) {
          var i = e.getMultireferenceId(),
            r = this._getMasterSibling(i);
          if (!r) {
            var a = this._translationSwapped(e, this);
            return !!(a && a.getX() * a.getX() + a.getY() * a.getY() < 1e-4);
          }
          for (
            var h = [],
              A = e,
              p = o.getClassFromId(c.getTypeId(A)),
              d = !1,
              m = !1;
            p && A instanceof o && A.hasMixin(o.Properties);
          ) {
            if (p.GeometryProperties)
              for (var y in p.GeometryProperties)
                "trf" === y
                  ? (d = !0)
                  : "content" === y && p === u
                    ? (m = !0)
                    : h.push(y);
            if (p.VisualProperties) for (var y in p.VisualProperties) h.push(y);
            if (p.MetaProperties && !(A instanceof u))
              for (var y in p.MetaProperties)
                p === D && "refs" === y && h.push(y);
            ((A = Object.getPrototypeOf(A)),
              (p = o.getClassFromId(c.getTypeId(Object.getPrototypeOf(A)))) ||
                (A instanceof g
                  ? (p = g)
                  : A instanceof n
                    ? (p = n)
                    : A instanceof f
                      ? (p = f)
                      : A instanceof l.Effect && (p = l.Effect)));
          }
          if (
            ((h = h.concat(this._getStylableProperties(e))),
            e.hasMixin(s.Anchor))
          )
            for (var y in s.Anchor.MetaProperties)
              "vatrf" !== y && "hatrf" !== y && h.push(y);
          if (
            (t &&
              t.forEach(function (e) {
                h.indexOf(e) < 0 && h.push(e);
              }),
            r && r.arePropertiesEqual(e, h))
          ) {
            if (d && !this._siblingTrfEqual(r, e)) return !1;
            if (m) {
              var _ = r.getContent(),
                b = e.getContent();
              return v.equals(_, b, !0);
            }
            return !0;
          }
          return !1;
        }),
        (D.prototype._getStylableProperties = function (e) {
          var t = [];
          e.hasMixin(l) &&
            e.getStylePropertySets().forEach(function (e) {
              var i = l.PropertySetInfo[e];
              if (i.visualProperties)
                for (var n in i.visualProperties) t.push(n);
              if (i.geometryProperties)
                for (var n in i.geometryProperties) t.push(n);
            });
          return t;
        }),
        (D.prototype._siblingTrfEqual = function (e, t) {
          var i = this.getMasterSymbol();
          if (!i) return !1;
          var n = D._swapBaseTransforms(
            e.getTransform(),
            i.getTransform(),
            this.getTransform(),
          );
          return !!h.equals(n, t.$trf, 1e-4);
        }),
        (D.prototype._hasAnchors = function (e) {
          return (
            e.hasMixin(s.Transform) &&
            e.hasMixin(s.Anchor) &&
            (e.getProperty("hacr") || e.getProperty("vacr"))
          );
        }),
        (D.prototype.hasAnchors = function () {
          if (Object.hasOwnProperty("values"))
            return (
              Object.values(this._siblingMap).some(this._hasAnchors) ||
              Object.values(this._disabledSiblingMap).some(this._hasAnchors)
            );
          for (var e in this._siblingMap)
            if (this._hasAnchors(this._siblingMap[e])) return !0;
          for (var e in this._disabledSiblingMap)
            if (this._hasAnchors(this._disabledSiblingMap[e])) return !0;
          return !1;
        }),
        (D.prototype.getSubnodeIds = function (e) {}),
        (D.prototype._afterPropertiesChange = function (e) {
          if (this._killEvents) e.isImmediatePropagationStopped = !0;
          else if (!(this._blockEvents > 0 || this.getProperty("blockEv"))) {
            if (e.node !== this && this.isMaster()) {
              if (e.customObj.hasOwnProperty(D.STOP_PROPAGATION)) return;
              e.customObj[D.STOP_PROPAGATION] = !0;
            }
            var t = e.node;
            if (
              this.isMaster() &&
              t !== this &&
              (!(t instanceof s) ||
                (t instanceof s && !t.isRecordedTransaction()))
            ) {
              var i = this;
              this._iterateSiblings(t, function (r, a, l) {
                var A = e.properties.slice(),
                  c = t.getProperties(
                    e.properties,
                    e.custom,
                    null,
                    e.temporary,
                  ),
                  p = A.indexOf("trf"),
                  d = e.values.slice(),
                  g = [],
                  f = [],
                  m = !1;
                if (!D.BLOCK_EDITED) {
                  var y = a._symbolParent();
                  y &&
                    y._disabledSiblingMap.hasOwnProperty(
                      a.getMultireferenceId(),
                    ) &&
                    (m = !0);
                }
                if (
                  !m &&
                  t.hasMixin(o.Properties) &&
                  t.hasProperty("trf") &&
                  p >= 0
                ) {
                  var _ = (l.$trf || new h()).inverted(),
                    b = !0;
                  if (_) {
                    var C = c[p],
                      x = d[p],
                      T = a.getTransform();
                    if (
                      ((C = C ? _.preMultiplied(C) : _),
                      (x = x ? _.preMultiplied(x) : _),
                      T && ((C = T.preMultiplied(C)), (x = T.preMultiplied(x))),
                      D.BLOCK_EDITED
                        ? ((d[p] = x), (c[p] = C))
                        : h.equals(x, r.getProperty("trf"), 1e-4)
                          ? m || ((d[p] = x), (c[p] = C))
                          : (A.splice(p, 1),
                            c.splice(p, 1),
                            d.splice(p, 1),
                            (b = !1)),
                      b)
                    ) {
                      var I,
                        F = !1;
                      if (
                        ((r instanceof P || r instanceof S) &&
                          !r.getProperty("frm") &&
                          (F = !0),
                        !F)
                      )
                        ((r._relayout = !0),
                          (I =
                            x && x.invertible()
                              ? x.inverted().multiplied(C)
                              : C),
                          (r._layoutTransform = I));
                    }
                  }
                } else
                  p >= 0 && (A.splice(p, 1), c.splice(p, 1), d.splice(p, 1));
                if (t instanceof u && A.indexOf("_we") >= 0) {
                  var G = A.indexOf("_we");
                  (A.splice(G, 1), c.splice(G, 1), d.splice(G, 1));
                }
                var Q = -1;
                if (t instanceof u && (Q = A.indexOf("content")) >= 0) {
                  var M = d[Q];
                  if (
                    (A.splice(Q, 1),
                    c.splice(Q, 1),
                    d.splice(Q, 1),
                    !t.isRecordedTransaction())
                  ) {
                    var N = t.getTLCore(),
                      U = r.getTLCore();
                    if (((B.DoMeasure = !1), N)) {
                      var V = N.getSelection();
                      if (V.start !== V.end && t._isEdited) {
                        var O,
                          L,
                          Y = N.getRange(V.start, V.end),
                          X = Y.save(),
                          H = U.getRange(V.start, V.end),
                          W = M;
                        M = [];
                        if (W) {
                          var Z = JSON.parse(W);
                          ((L = new w()).load(Z),
                            (M = (O = L.range(V.start, V.end)).save()));
                        }
                        var z = H.plainText(),
                          j = Y.plainText();
                        if (
                          (he = O ? O.plainText() : "") === j &&
                          X &&
                          X.length > 0
                        ) {
                          var J = D._getChangedTextContentProperties(M, X);
                          if (J) {
                            (ae = new w()).load(
                              JSON.parse(r.getProperty("content") || "[]"),
                            );
                            for (var q = 0; q < J.length; q++) {
                              for (
                                var K,
                                  $,
                                  ee = J[q],
                                  te = ee.range[0],
                                  ie = ee.range[1],
                                  ne = 0,
                                  re = 0;
                                re < X.length;
                                re++
                              )
                                if (
                                  (re === te && (K = ne),
                                  (ne += X[re].text.length),
                                  re + 1 === ie)
                                ) {
                                  $ = ne;
                                  break;
                                }
                              var oe = (pe = ae.range(
                                V.start + K,
                                V.start + $,
                              )).getFormatting();
                              (ee.oldValue !== oe[ee.property] &&
                                oe[ee.property] !== E.multipleValues) ||
                                (pe.setFormatting([ee.property], [ee.value]),
                                (Ae = !0));
                            }
                            Ae &&
                              (g.push("content"),
                              f.push(JSON.stringify(ae.save())));
                          }
                        } else if (z === he) {
                          ((j = N.getDocumentRange().plainText()),
                            (he = L.documentRange().plainText()),
                            (ce = D._getChangedText(j, he))[1] < 0 &&
                              (ce[1] = 0),
                            (Y = N.getRange(ce[0], ce[0] + ce[1])));
                          var ae = new w(),
                            se = r.getProperty("content") || "[]";
                          (ae.load(JSON.parse(se)),
                            (ce = D._getChangedText(he, j)),
                            (pe = ae.range(ce[0], ce[0] + ce[1])).setText(
                              Y.save(),
                            ),
                            (ue = JSON.stringify(ae.save())) !== se &&
                              (g.push("content"), f.push(ue)));
                        } else
                          X && X.length
                            ? k("Text was changed while selection still on?")
                            : k("no content inside?");
                      } else if (V.start === V.end || !t._isEdited) {
                        ((X = t.getContent()), (W = M), (M = []));
                        W && (M = JSON.parse(W));
                        var le = JSON.parse(r.getProperty("content") || "[]");
                        if (X && X.length > 0) {
                          ((z = R(U.getDocumentRange().save())),
                            (j = R(N.getDocumentRange().save())));
                          var he,
                            Ae = !1;
                          if ((he = R(M)) === j)
                            (Ae = D._assignChangedTextContentProperties(
                              M,
                              X,
                              le,
                              function (e) {
                                return (
                                  "text" === e &&
                                    k(
                                      "cannot handle simultaneous change of text and other properties",
                                    ),
                                  "text" !== e
                                );
                              },
                            )) &&
                              (g.push("content"), f.push(JSON.stringify(le)));
                          else if (z === he) {
                            var ce = D._getChangedText(j, he);
                            ((Y = N.getRange(ce[0], ce[0] + ce[1])),
                              (ae = new w()).load(le));
                            var pe,
                              ue,
                              de = V.start,
                              ge = V.end;
                            ((de = (ce = D._getChangedText(he, j))[0]),
                              (ge = ce[0] + ce[1]),
                              (pe = ae.range(de, ge)).setText(Y.save()),
                              (ue = JSON.stringify(ae.save())) !==
                                (se = JSON.stringify(le)) &&
                                (g.push("content"), f.push(ue)));
                          }
                        } else k("no content inside?");
                      }
                    }
                    B.DoMeasure = !0;
                  }
                }
                if (!D.BLOCK_EDITED) {
                  var fe = r.getProperties(A, e.custom, null, e.temporary);
                  for (re = c.length - 1; re >= 0; re--)
                    c[re] instanceof h
                      ? "trf" !== A[re] &&
                        (h.equals(d[re], fe[re], 1e-4) ||
                          (A.splice(re, 1), c.splice(re, 1)))
                      : v.equals(d[re], fe[re], !0, 1e-4) ||
                        (A.splice(re, 1), c.splice(re, 1));
                }
                for (var me in s.Anchor.MetaProperties) {
                  if ("hacr" !== me && "vacr" !== me)
                    (q = A.indexOf(me)) >= 0 &&
                      (A.splice(q, 1), c.splice(q, 1));
                }
                var ye = A.indexOf("swpori");
                ye >= 0 && (A.splice(ye, 1), c.splice(ye, 1));
                var _e,
                  ve = A.indexOf("subtrf");
                if (
                  (ve >= 0 && (A.splice(ve, 1), c.splice(ve, 1)),
                  !A.length && !g.length)
                )
                  return !1;
                (a._blockEvents++,
                  (r.dependentUpdate = t.dependentUpdate),
                  r instanceof n &&
                    ((_e = r.skipBorderUpdate), (r.skipBorderUpdate = !0)),
                  a._beginBlockChanges([
                    o._Change.BeforePropertiesChange,
                    o._Change.AfterPropertiesChange,
                  ]),
                  A.length &&
                    (r._beginBlockEvents([
                      o.BeforePropertiesChangeEvent,
                      o.AfterPropertiesChangeEvent,
                    ]),
                    r.setProperties(A, c, e.custom, !1, e.temporary),
                    r._endBlockEvents([
                      o.BeforePropertiesChangeEvent,
                      o.AfterPropertiesChangeEvent,
                    ]),
                    t._relayoutNow && (r._relayout = !1)),
                  g.length && r.setProperties(g, f, e.custom, !1, e.temporary),
                  a._endBlockChanges([
                    o._Change.BeforePropertiesChange,
                    o._Change.AfterPropertiesChange,
                  ]),
                  (r.dependentUpdate = !1),
                  a._blockEvents--,
                  r instanceof n && (r.skipBorderUpdate = _e),
                  e.temporary ||
                    (r instanceof D && !r.isMaster() && r !== a
                      ? a._updateDisabledSiblings(r, A.concat(g))
                      : a.isMaster() ||
                        a.getMasterSymbol() === i ||
                        a._updateDisabledSiblings(r, A.concat(g))));
              });
            } else
              e.temporary ||
                (this._hasMasterParent() &&
                  t !== this._siblingMap[t.getMultireferenceId()]) ||
                this._updateDisabledSiblings(t, e.properties);
          }
        }),
        (D.prototype._updateDisabledSiblings = function (e, t) {
          if (!this._isRestoring && !this.isMaster() && e !== this) {
            var i = e.getMultireferenceId();
            e: if (this._disabledSiblingMap.hasOwnProperty(i))
              this._comparePropertiesWithMaster(e) &&
                (D.BLOCK_EDITED
                  ? (this._siblingMap.hasOwnProperty([i]) ||
                      (this._siblingMap[i] = this._disabledSiblingMap[i]),
                    delete this._disabledSiblingMap[i])
                  : delete this._disabledSiblingMap[i]);
            else {
              var n = this._getMasterSibling(i);
              if (!n) {
                var r = t.indexOf("trf"),
                  l = t.indexOf("frame");
                if (r >= 0 || l >= 0) {
                  var h = this._translationSwapped(e, this);
                  if (h) {
                    (h.getX() * h.getX() + h.getY() * h.getY() >= 1e-4 &&
                      ((this._disabledSiblingMap[i] = this._siblingMap[i]),
                      D.BLOCK_EDITED && delete this._siblingMap[i]),
                      (t = ["trf"]));
                    break e;
                  }
                }
                return void k("no original and swapped sibling available");
              }
              var A = !0,
                c = !0,
                p = t.slice();
              if (
                ((r = p.indexOf("trf")) >= 0 &&
                  ((A = this._siblingTrfEqual(n, e)), p.splice(r, 1)),
                e instanceof D)
              ) {
                var d = p.indexOf("swpori");
                d >= 0 && p.splice(d, 1);
              }
              if (e instanceof a) {
                var g = p.indexOf("refs");
                g >= 0 && p.splice(g, 1);
              }
              if (e.hasMixin(s.Anchor) && e.getParent() === this) {
                var f = p.indexOf("hatrf");
                f >= 0 && p.splice(f, 1);
                var m = p.indexOf("vatrf");
                m >= 0 && p.splice(m, 1);
              }
              if (e instanceof u) {
                for (var y in u.MetaProperties) {
                  var _ = p.indexOf(y);
                  _ >= 0 && p.splice(_, 1);
                }
                var b = p.indexOf("content");
                if (b >= 0) {
                  var C = n.getContent(),
                    w = e.getContent();
                  ((c = v.equals(C, w, !0)), p.splice(b, 1));
                }
              }
              (n && A && c && e.arePropertiesEqual(n, p)) ||
                (D.BLOCK_EDITED
                  ? ((this._disabledSiblingMap[i] = this._siblingMap[i]),
                    (n &&
                      A &&
                      e instanceof u &&
                      !c &&
                      e.arePropertiesEqual(n, p)) ||
                      delete this._siblingMap[i])
                  : (this._disabledSiblingMap[i] = this._siblingMap[i]));
            }
            if (e instanceof D && t.indexOf("trf") >= 0 && !e.$blockEv) {
              for (var E in e._siblingMap) {
                (B = e._siblingMap[E]) &&
                  B.hasMixin(o.Properties) &&
                  B.hasProperty("trf") &&
                  e._updateDisabledSiblings(B, ["trf"]);
              }
              if (D.BLOCK_EDITED)
                for (var E in e._disabledSiblingMap) {
                  var B;
                  (B = e._siblingMap[E]) &&
                    B.hasMixin(o.Properties) &&
                    B.hasProperty("trf") &&
                    e._updateDisabledSiblings(B, ["trf"]);
                }
            }
          }
        }),
        (D.prototype._copyTextToContent = function (e, t) {
          for (var i = 0; i < e.length; i++) e[i].text;
        }),
        (D.prototype._afterFlagChange = function (e) {
          (e.flag, o.Flag.Active);
        }),
        (D.prototype._afterSpecialChange = function (e) {}),
        (D.prototype.getTransactionAction = function (e) {
          var t;
          if (e) {
            var i = this,
              n = e.scene;
            t = function () {
              n._canEventBeSent(o.AfterSpecialChangeEvent) &&
                n._sendEvent(
                  new o.AfterSpecialChangeEvent(i, {
                    created: !!e.created,
                    scene: n,
                  }),
                );
            };
          } else t = function () {};
          return t;
        }),
        (D.prototype.getTransactionActionSerialized = function (e) {
          var t;
          if (e) {
            e.scene;
            t = {
              created: !!e.created,
            };
          } else t = null;
          return t;
        }),
        (D.prototype.getTransactionActionDeserialized = function (e) {
          var t;
          if (!e) return function () {};
          var i = this.getScene();
          if (i) {
            var n = this;
            t = function () {
              i._canEventBeSent(o.AfterSpecialChangeEvent) &&
                i._sendEvent(
                  new o.AfterSpecialChangeEvent(n, {
                    created: !!e.created,
                    scene: i,
                  }),
                );
            };
          } else t = function () {};
          return t;
        }),
        (D.prototype.getTransactionRevertAction = function (e) {
          var t;
          if (e) {
            var i = this,
              n = e.scene;
            t = function () {
              n._canEventBeSent(o.AfterSpecialChangeEvent) &&
                n._sendEvent(
                  new o.AfterSpecialChangeEvent(i, {
                    created: !e.created,
                    scene: n,
                  }),
                );
            };
          } else t = function () {};
          return t;
        }),
        (D.prototype._iterateSiblings = function (e, t, i, n) {
          if (e)
            if (e === this || e.hasMixin(o.Multireference)) {
              if (this.isMaster()) {
                if ((n || (n = []), !n.length)) {
                  var r = this.getScene();
                  if (!r) return;
                  n.push(r);
                }
                e === this && (e = null);
                var a = e && e === this._effects,
                  l = e && e === this._paintLayers,
                  h =
                    e instanceof D
                      ? e
                      : e
                        ? e.findParent(function (e) {
                            return e instanceof D;
                          })
                        : this;
                if (h) {
                  var A,
                    c = this;
                  if (h !== this && h.isMaster()) A = h;
                  else if (h !== this) {
                    if (h._getMasterSibling(e.getMultireferenceId()))
                      A = h.getMasterSymbol();
                    else {
                      for (var p = this._symbolParent(h); p && !A; )
                        (p.isMaster() &&
                          p._siblingMap[e.getMultireferenceId()] &&
                          ((A = p), (h = p)),
                          (p = this._symbolParent(p)));
                      if (!A) return;
                    }
                  } else A = this;
                  var u = function (t, i) {
                      if (!t) return !1;
                      if (!(t instanceof s)) return !0;
                      if (!e) return !0;
                      if (!(e instanceof o)) return !0;
                      if (!e.dependentUpdate) {
                        if (
                          !e.isRecordedTransaction() ||
                          !e.getProperty("subtrf", !0, !1)
                        )
                          return !0;
                        k("ding!");
                      }
                      var n = t,
                        r = e,
                        a = !0;
                      do {
                        if (
                          (n !== i && (n = n.getParent()),
                          r !== h && (r = r.getParent()),
                          n ||
                            (k("some propagation errors might have occurred"),
                            (n = i)),
                          r ||
                            (k("some propagation errors might have occurred"),
                            (r = h)),
                          !r.hasMixin(o.Multireference) ||
                            !n.hasMixin(o.Multireference))
                        )
                          return !1;
                        r.getMultireferenceId() !== n.getMultireferenceId() &&
                          (a = !1);
                      } while (a && r.dependentUpdate && (n !== i || r !== h));
                      return a;
                    },
                    d = function (n) {
                      if (n instanceof D && n !== h && !n.isMaster()) {
                        if (A !== c) {
                          if (
                            !n.findParent(function (e) {
                              return (
                                e instanceof D && e.$masterRef === c.$masterRef
                              );
                            })
                          )
                            return;
                          if (
                            h.getMultireferenceId() !== n.getMultireferenceId()
                          )
                            return;
                        }
                        if (D.BLOCK_EDITED && !i) {
                          var r = n._symbolParent();
                          if (
                            r &&
                            r._disabledSiblingMap.hasOwnProperty(
                              n.getMultireferenceId(),
                            )
                          )
                            return;
                        }
                        var s = null;
                        if (
                          (s = a
                            ? n.getEffects()
                            : l
                              ? n.getPaintLayers()
                              : e
                                ? n._siblingMap[e.getMultireferenceId()]
                                : n)
                        )
                          u(s, n) && t(s, n, h);
                        else {
                          var p =
                            n._disabledSiblingMap[e.getMultireferenceId()];
                          i && u(p, n) && p instanceof o
                            ? t(p, n, h)
                            : p ||
                              k(
                                "GSymbol._iterateSiblings: Updating non existing sibling",
                              );
                        }
                      }
                    };
                  n.forEach(function (e) {
                    (e.visitLinks(A, d), A !== this && d(A));
                  });
                }
              }
            } else
              k(
                "GSymbol._iterateSiblings: Error: node is not a multireference",
              );
          else k("GSymbol._iterateSiblings: Supplied node is null");
        }),
        (D.prototype._symbolParent = function (e) {
          return (e || this).findParent(function (e) {
            return e instanceof D;
          });
        }),
        (D.prototype._handleGeometryChangeForProperties = function (e, t, i) {
          if (
            n.prototype._handleGeometryChangeForProperties.call(this, e, t, i)
          ) {
            if (
              e == o._Change.AfterPropertiesChange &&
              t.properties.indexOf("trf") >= 0 &&
              !this._relayout
            ) {
              var r,
                a = t.properties.indexOf("trf"),
                s = this.getProperty("trf"),
                l = t.values[a];
              (l && (r = l.inverted()),
                s && (r = r ? r.multiplied(s) : s),
                (this._layoutTransform = r));
            }
            return !0;
          }
          return !1;
        }),
        (D.prototype._handleChange = function (e, t) {
          (e != o._Change.BeforePropertiesChange &&
            e !== o._Change.BeforeChildRemove) ||
            this.isMaster() ||
            ((m = this.getMasterSymbol()) &&
              !this.hasFlag(o.Flag.Selected) &&
              m.isRecordedTransaction() &&
              (this.recordedTransaction = !0));
          this._handleGeometryChangeForProperties(e, t, D.GeometryProperties);
          var i = !1;
          if (e == s._Change.ChildGeometryUpdate)
            t &&
              t[0] &&
              t[0].getParent() === this &&
              (this._notifyChange(s._Change.PrepareGeometryUpdate), (i = !0));
          else if (e === o._Change.Store) {
            this.storeProperties(t.blob, D.GeometryProperties, function (e, t) {
              return "trf" === e && t
                ? h.serialize(t)
                : "frame" === e && t
                  ? y.serialize(t)
                  : t;
            });
            var r = this._disabledSiblingMap,
              l = this._siblingMap,
              A = (this.isMaster(), this);
            this.storeProperties(t.blob, D.MetaProperties, function (e, t) {
              if ("dsb" === e) {
                var i = [];
                for (var n in r) i.push(n);
                return i;
              }
              if ("swp" === e) return null;
              if ("blockEv" === e) return !1;
              if ("sbl" === e) {
                var o = [];
                for (var n in l) {
                  var a = l[n].findParent(function (e) {
                    return e instanceof D;
                  });
                  a && a !== A && o.push(n);
                }
                return o;
              }
              return t;
            });
          } else if (e === o._Change.Restore) {
            var p = this._siblingMap;
            r = this._disabledSiblingMap = {};
            (this.restoreProperties(
              t.blob,
              D.GeometryProperties,
              function (e, t) {
                return "trf" === e && t
                  ? h.deserialize(t).makeInvertible()
                  : "frame" === e && t
                    ? y.deserialize(t)
                    : t;
              },
            ),
              this.restoreProperties(
                t.blob,
                D.MetaProperties,
                function (e, t) {
                  if ("masterRef" === e && t) return t;
                  if ("dsb" === e && t) {
                    for (var i = 0; i < t.length; i++) {
                      var n = t[i];
                      for (var o in p)
                        if (n === o && p.hasOwnProperty(o)) {
                          var a = p[o];
                          (D.BLOCK_EDITED && delete p[o],
                            a
                              ? (r[o] = a)
                              : k("Nonexistent node in siblingMap"));
                        }
                    }
                    return null;
                  }
                  if ("blockEv" === e) return !1;
                  if ("sbl" === e && t) {
                    var s = function (e, t) {
                      if (e._siblingMap[t]) return e;
                      e._cachedSymbolSiblings ||
                        (e._cachedSymbolSiblings = Object.values(
                          e._siblingMap,
                        ).filter(function (e) {
                          return e instanceof D;
                        }));
                      for (
                        var i = e._cachedSymbolSiblings, n = i.length, r = 0;
                        r < n;
                        r++
                      ) {
                        var o = s(i[r], t);
                        if (o) return o;
                      }
                      return null;
                    };
                    for (i = 0; i < t.length; i++) {
                      n = t[i];
                      var l = s(this, n);
                      if (l) {
                        var h = l._siblingMap[n];
                        (delete l._siblingMap[n],
                          l._cachedSymbolSiblings &&
                            l._cachedSymbolSiblings.splice(
                              l._cachedSymbolSiblings.indexOf(h),
                              1,
                            ),
                          D.BLOCK_EDITED || (this._siblingMap[n] = h));
                      }
                    }
                  } else if ("swp" === e && t)
                    for (i = 0; i < t.length; i++)
                      this._siblingMap[t[i]]
                        ? (t[i] = this._siblingMap[t[i]].$masterMultiRef)
                        : k("restore: couldn't repair swp array");
                  return t;
                }.bind(this),
              ));
          } else if (e == o._Change.BeforePropertiesChange) {
            t.properties.indexOf("frame");
            this._blockEvents++;
          } else
            e == o._Change.AfterPropertiesChange &&
              (this._blockEvents--,
              this._blockEvents < 0 &&
                ((this._blockEvents = 0),
                k("too many afterpropertieschange events")));
          if (
            (n.prototype._handleChange.call(this, e, t),
            e == s._Change.ChildGeometryUpdate && i)
          ) {
            this._beginBlockChanges([s._Change.GeometrySizeChanged]);
            var u = t[2];
            (!u && t[0] && t[0] instanceof s && (u = t[0].getPaintBBox()),
              this._notifyChange(s._Change.FinishGeometryUpdate, [2, u]),
              this._endBlockChanges([s._Change.GeometrySizeChanged]));
          } else if (e === a._Change.SceneAttached && this._scene) {
            if (this._scene._isRestoring) {
              var d = this.getOldReferenceId();
              ((this.$masterRef && d === this.$masterRef) ||
              this.getReferenceId() === this.$masterRef
                ? (this._master = !0)
                : (this._master = !1),
                this._master && (this.$masterRef = this.getReferenceId()));
            } else if (!this._master && this.$masterRef)
              if (this.getMasterSymbol()) {
                var g = !1;
                (this._scene.getProperty("rb") &&
                  (this._scene.endBlockReferenceChanges(!0), (g = !0)),
                  this._scene.link(this.$masterRef, this),
                  g && this._scene.startBlockReferenceChanges());
              } else k("Couldn't link slave to master");
            if (this._master) {
              var f = o.getClassFromId(c.getTypeId(this._scene));
              this._scene.addEventListener(
                f.InvalidationFinishedEvent,
                this._invalidationFinishedHandler,
                this,
              );
            }
          } else if (e === a._Change.SceneDetached && this._scene) {
            if (
              !this._scene._isRestoring &&
              this.getMasterSymbol() &&
              !this._master &&
              this.$masterRef
            ) {
              g = !1;
              (this._scene.getProperty("rb") &&
                (this._scene.endBlockReferenceChanges(!0), (g = !0)),
                this._scene.unlink(this.$masterRef, this),
                g && this._scene.startBlockReferenceChanges());
            }
            if (this._master) {
              f = o.getClassFromId(c.getTypeId(this._scene));
              this._scene.removeEventListener(
                f.InvalidationFinishedEvent,
                this._invalidationFinishedHandler,
                this,
              );
            }
          } else if (
            e == o._Change.AfterPropertiesChange ||
            e === o._Change.AfterChildInsert
          ) {
            var m;
            if (!this.isMaster())
              (m = this.getMasterSymbol()) &&
                !this.hasFlag(o.Flag.Selected) &&
                m.isRecordedTransaction() &&
                (this.recordedTransaction = !1);
          } else if (e === o._Change.Restore) {
            var _ = this._siblingMap;
            (this._effects &&
              ((_[this._effects.getMultireferenceId()] = this._effects),
              this._effects.getSubnodeIds(_)),
              this._paintLayers &&
                ((_[this._paintLayers.getMultireferenceId()] =
                  this._paintLayers),
                this._paintLayers.getSubnodeIds(_)));
          } else
            e === s._Change.FinishGeometryUpdate
              ? this.isPaintable() && (this._shouldRepaintThumbnail = !0)
              : e === s._Change.InvalidationRequested &&
                this.isPaintable() &&
                (this._shouldRepaintThumbnail = !0);
          if (
            (e === a._Change.SceneDetached || e === a._Change.SceneAttached) &&
            this._scene &&
            this.isMaster() &&
            e === a._Change.SceneDetached &&
            D.enableSweepInstances
          ) {
            var v = this._scene;
            ((D.enableSweepInstances = !1),
              this._iterateSiblings(this, function (e, t) {
                var i = e.getParent();
                if (i) {
                  var n = e.getChildren();
                  (v.startBlockReferenceChanges(),
                    n.length > 1 && i.beginUpdate(),
                    n.forEach(function (t) {
                      (e.removeChild(t), i.appendChild(t));
                    }),
                    n.length > 1 && i.endUpdate(),
                    v.endBlockReferenceChanges(),
                    e.removeFlag(o.Flag.Selected),
                    i.removeChild(e));
                }
              }),
              (D.enableSweepInstances = !0));
          }
        }),
        (D.prototype._referenceEvent = function (e) {
          e.target === this &&
            "symbol" === o.getName(e.reference) &&
            (e.linked && (this.$masterRef = e.reference.getReferenceId()),
            n.prototype._referenceEvent.call(this, e));
        }),
        (D.prototype._invalidationFinishedHandler = function (e) {
          if (this._shouldRepaintThumbnail && e.configuration.thumbnails) {
            this._shouldRepaintThumbnail = !1;
            var t = this;
            this._getSymbolThumbnail(
              e.configuration.thumbnailSize,
              e.configuration.thumbnailSize,
              function (e) {
                e &&
                  ((t._cachedImage = e),
                  setTimeout(function () {
                    t.trigger(new D.AfterThumbnailUpdate(t, t._cachedImage));
                  }));
              },
            );
          }
        }),
        (D.prototype.paint = function (e) {
          if (
            this._preparePaint(e) &&
            (this._paint(e),
            this._finishPaint(e),
            this.isMaster() &&
              this._shouldRepaintThumbnail &&
              e.configuration.thumbnails)
          ) {
            this._shouldRepaintThumbnail = !1;
            var t = this;
            t._getSymbolThumbnail(
              e.configuration.thumbnailSize,
              e.configuration.thumbnailSize,
              function (e) {
                e &&
                  ((t._cachedImage = e),
                  setTimeout(function () {
                    t.trigger(new D.AfterThumbnailUpdate(t, t._cachedImage));
                  }));
              },
            );
          }
        }),
        (D.prototype._getSymbolThumbnail = function (e, t, i) {
          var n = this.getFrame();
          if (!n) return null;
          var r = this._getBitmapPaintArea();
          if (!r || r.isEmpty()) return null;
          var o = n.getWidth(),
            a = n.getHeight() / o,
            s = e,
            l = s * a;
          l > t && (s = (l = t) / a);
          var h = s / n.getWidth(),
            A = l / n.getHeight(),
            c = 1 * Math.min(h, A),
            p = Math.round(1 * s),
            u = Math.round(1 * l),
            d = new b();
          d.resize(p, u);
          var g = new C();
          g.canvas = d;
          var f = new x();
          if (
            ((f.paintMode = x.PaintMode.Full),
            (f.paintSharp = !1),
            (f.annotations = !1),
            (g.configuration = f),
            (f.clipArea = n.intersected(r).scaled(1, 1)),
            (f.clipDirty = !1),
            (f.enableFxCache = !1),
            (f.defaultEffectDetailLevel = 1),
            d.prepare(),
            d.setOrigin(new _(n.getX() * c, n.getY() * c)),
            d.setScale(c),
            T.isRenderPhase())
          ) {
            var m = this;
            T.tryRunRendering(
              d,
              function () {
                try {
                  m.paint(g);
                } finally {
                  d.finish();
                }
              },
              i,
              !1,
            );
          } else {
            try {
              this.paint(g);
            } finally {
              d.finish();
            }
            i(d);
          }
        }),
        (D.prototype.toString = function () {
          return "[GSymbol]";
        }),
        (e.exports = D));
    }