/**
 * chunk.vendor.js Module #1406
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(2),
        o = i(280),
        a = i(11),
        s = i(5),
        l = i(1143),
        h = i(28),
        A = i(798),
        c = i(132),
        p = i(1216),
        u = i(1422),
        d = i(70),
        g = i(1444),
        f = i(22),
        m = i(7),
        y = i(1446),
        _ = i(289),
        v = i(95),
        b = i(160),
        C = i(83),
        w = i(359),
        E = i(56),
        B = i(162),
        x = i(347),
        P = i(569),
        S = i(818),
        T = i(321),
        I = i(432),
        F = i(1448),
        R = i(1449),
        D = i(1451),
        k = i(64),
        G = i(9),
        Q = i(47),
        M = i(1453),
        N = i(1235),
        U = i(1454);

      function V() {}

      function O(e, t, i, n) {
        ((this._context = e),
          (this._doc = t),
          (this._options = i),
          (this._compatibilityProcessor = n));
      }
      (n.inherit(V, n),
        (V.isSupported = function (e, t, i) {
          var n = !0,
            r = function (e) {
              if (!N.isCompatible(e, t) || e instanceof v) {
                var r = A.getNodeSelfBitmapUsedArea(e, i),
                  o = r.getWidth(),
                  a = r.getHeight(),
                  s = o * a;
                if (
                  o > k.absoluteMaxImgLinearDimension ||
                  a > k.absoluteMaxImgLinearDimension ||
                  s > k.absoluteMaxImgAreaDots ||
                  4 * s > k.maxPngDataSize
                )
                  return ((n = !1), !0);
              }
            };
          return (
            Array.isArray(e)
              ? e.some(function (e) {
                  return e.accept(r);
                })
              : e.accept(r),
            n
          );
        }),
        (V.export = function (e, t, i, n, r) {
          if (i) {
            var o, a, h;
            if (
              (r &&
                r.message &&
                r.message(G.get(new Q("GPDFExport", "text.wait"))),
              "undefined" != typeof Worker && !t.disableWorker)
            ) {
              o = [];
              var d =
                  "undefined" != typeof navigator &&
                  navigator.hardwareConcurrency
                    ? navigator.hardwareConcurrency
                    : 4,
                f = "pdfexport.worker.js" + ("?v=" + Math.random());
              (function (e, t) {
                try {
                  var i = new URL(e);
                  if (!i.origin || "null" === i.origin) return !1;
                } catch (e) {
                  return !1;
                }
                var n = new URL(t, i);
                return i.origin === n.origin;
              })(window.location.href, f) ||
                ((a = new URL(f, window.location.href).href),
                (h = "importScripts('" + a + "');"),
                (f = URL.createObjectURL(new Blob([h]))));
              for (var y = 0; y < d; y++) o.push(new Worker(f));
            }
            var v = w.RGB;
            t.colorSpace && (v = w[t.colorSpace.toUpperCase()]);
            var E = new u({
                version: 1.7,
                compress: !0,
                colorSpace: v,
                workers: o,
                user: t.user,
                title: t.title,
                jpegQuality: t.jpegQuality,
                downsampleImages: t.downsampleImages,
              }),
              B = Math.max(c.DPI, t.dpi || c.DPI),
              x = t.configuration || {
                ignoreEffects: !1,
                forceEffectsWhenZoomed: !0,
              },
              P = t.progress || null,
              S = B / c.DPI,
              T = function (e, i, n) {
                if (!E.isAbort())
                  if (i || (i = e._getBitmapPaintArea())) {
                    var r = E.newPage(i.getWidth(), i.getHeight());
                    if (e instanceof C && e.$bl) {
                      var o = i.expanded(2 * -e.$bl, 2 * -e.$bl, 0, 0);
                      r.setBleedBox(o);
                    }
                    var a = Math.round(i.getWidth() * S),
                      l = Math.round(i.getHeight() * S),
                      h = new g(new p(E));
                    ((h.configuration.sceneBackground =
                      void 0 !== x.sceneBackground
                        ? x.sceneBackground
                        : h.configuration.sceneBackground),
                      h.canvas.resize(a, l),
                      h.canvas.prepare(),
                      h.canvas.setOrigin(new s(i.getX() * S, i.getY() * S)));
                    var c = h._context2d,
                      u = c
                        .getTransform()
                        .decomposed()
                        .translate.scaled(1 / S, 1 / S)
                        .mapPoint(new s(0, 0)),
                      d = m
                        .deserialize(c.getTransform().getMatrix())
                        .scaled(1 / S, 1 / S)
                        .translated(-u.getX(), -u.getY())
                        .scaled(S, S)
                        .translated(u.getX(), -u.getY());
                    (E.setPageOrigin(d.mapPoint(new s(0, 0))),
                      h._context2d.setPageOrigin(E.getPageOrigin()),
                      h.canvas.setScale(S),
                      t.backgroundColor &&
                        h.canvas.fillCanvas(
                          t.backgroundColor,
                          t.backgroundOpacity,
                        ));
                    var f = new U(!x.ignoreEffects);
                    f.processNode(e);
                    try {
                      new O(h, E, t, f).proxy(e).paint(h);
                    } finally {
                      var y = function () {
                        (h.canvas.finish(), n());
                      };
                      if (f.hasRasterizableNodes()) {
                        var _,
                          v = E.beginJob("Raster effects"),
                          b = f.getRasterizableNodes(),
                          w = function (e) {
                            if (e >= b.length) return (v.done(), void y());
                            if (!E.isAbort()) {
                              var t = b[e];
                              try {
                                if (!t.isVisible()) return void w(++e);
                                if (N.isAffectedByBackground(t)) {
                                  if (
                                    (_ ||
                                      (_ = A.export(
                                        t.getPage(),
                                        B + "dpi",
                                        null,
                                        null,
                                        null,
                                        null,
                                        !0,
                                      )),
                                    _ && _.getWidth() && _.getHeight())
                                  ) {
                                    var i = A.getBitmapPaintArea(
                                        t.getPage(),
                                        "1x",
                                      ),
                                      n = t.getPaintBBox();
                                    h.canvas
                                      .getContext()
                                      .replaceWithBitmap(
                                        _.getHTMLElement(),
                                        t,
                                        i,
                                        n,
                                      );
                                  }
                                  w(++e);
                                } else
                                  new D()
                                    .export(h, E, t, B + "dpi")
                                    .then(function () {
                                      w(++e);
                                    })
                                    .catch(V);
                              } catch (e) {
                                V(e);
                              }
                            }
                          };
                        w(0);
                      } else y();
                    }
                  } else n();
              }.bind(this),
              I = -1,
              F = function (e, t, i) {
                (setTimeout(function () {
                  e.length && !E.isAbort()
                    ? t(e.shift(), function () {
                        F(e, t, i);
                      })
                    : i();
                }, 1),
                  I < 0 && (I = e.length),
                  P && P(((I - e.length) / (I + 1)) * 100));
              },
              R = function (e, t) {
                var i = null,
                  n = null,
                  r = null;
                if (e instanceof _) {
                  var o = e;
                  ((r = o._getBitmapPaintArea()),
                    (i = (e = o.findParent(function (e) {
                      return e instanceof C;
                    })).getProperty("bck")),
                    (n = e.getProperty("bop")),
                    e.setProperty("bck", o.$cls));
                }
                try {
                  T(e, r, t);
                } finally {
                  i && e.setProperties(["bck", "bop"], [i, n]);
                }
              },
              M = function (e, t) {
                T(e, null, t);
              },
              V = function (e) {
                (E.finish(), i(e), e && console.error(e));
                var t = E.getLastJob();
                t && console.info("Last job", t.toString());
              },
              L = function () {
                E.ready()
                  .then(function () {
                    try {
                      var e = n ? new n() : new l();
                      (E.write(e), i(null, e.asArray(), E));
                    } catch (e) {
                      V(e);
                    } finally {
                      E.finish();
                    }
                  })
                  .catch(V);
              };
            return (
              k.scheduleFrame(function () {
                if (e instanceof b) {
                  var t = [];
                  (e.iteratePages(function (e) {
                    t.push(e);
                  }, !0),
                    F(t, M, L));
                } else (Array.isArray(e) || (e = [e]), F(e, R, L));
              }),
              E
            );
          }
          console.error("No fnResult callback passed to GPDFExport.export.");
        }),
        (O.prototype._doc = null),
        (O.prototype._context = null),
        (O.prototype._options = null),
        (O.prototype._nodesToRasterize = null),
        (O.prototype._isNeedToRaster = function (e) {
          return (
            !!this._nodesToRasterize &&
            this._nodesToRasterize.some(function (t) {
              return t === e;
            })
          );
        }),
        (O.prototype._instanceof = function (e, t) {
          return (e.hasMixin && e.hasMixin(t)) || e instanceof t;
        }),
        (O.prototype.proxy = function (e) {
          if (e) {
            var t = this,
              i = Object.create(Object.getPrototypeOf(e));
            if ((a.extend(i, e), (i.__source__ = e), t._instanceof(i, r))) {
              var n = this._compatibilityProcessor.isVectorable(e);
              i._needToRaster = !n;
            }
            if (i instanceof o)
              i.getReference = function (e) {
                return t.proxy(this.__proto__.getReference.call(this, e));
              };
            else {
              if (
                (t._instanceof(i, r) &&
                  ((i.getNext = function () {
                    return t.proxy(this.__proto__.getNext.call(this));
                  }),
                  (i.getPrevious = function () {
                    return t.proxy(this.__proto__.getPrevious.call(this));
                  })),
                t._instanceof(i, E) &&
                  ((i._paintBorder = function (e, t, i) {
                    ((e._borderPaintLayer = i),
                      this.__proto__._paintBorder.call(this, e, t, i));
                  }),
                  (i._paintBorderSeparate = function (e, t, i, n, r) {
                    new M(this).paint(e, t, i, n, r);
                  }),
                  (i._paintFill = function (e, t, i) {
                    ((e._fillPaintLayer = i),
                      this.__proto__._paintFill.call(this, e, t, i),
                      delete e._fillPaintLayer);
                  })),
                t._instanceof(i, f))
              ) {
                i._paintSharp = !1;
                var s =
                  t._options.configuration &&
                  t._options.configuration.ignoreEffects;
                ((i._paint = function (e) {
                  (e.beginNode(this.__source__),
                    this._needToRaster ||
                      s ||
                      (function (e, t) {
                        if (t.hasMixin(h)) {
                          var i = t.getEffects();
                          if (i)
                            for (
                              var n = i.getFirstChild();
                              null != n;
                              n = n.getNext()
                            )
                              n instanceof T &&
                                n.$vs &&
                                new F().render(e, t, n);
                        }
                      })(e, this.__source__),
                    (this.__source__ instanceof v &&
                      this._needToRaster &&
                      !s) ||
                      this.__proto__._paint.call(this, e),
                    this._needToRaster ||
                      s ||
                      (function (e, t) {
                        if (t.hasMixin(h)) {
                          var i = t.getEffects();
                          if (i)
                            for (
                              var n = i.getFirstChild();
                              null != n;
                              n = n.getNext()
                            )
                              n instanceof I &&
                                n.$vs &&
                                new R().render(e, t, n);
                        }
                      })(e, this.__source__));
                }),
                  (i._finishPaint = function (e) {
                    (this.__proto__._finishPaint.call(this, e),
                      e.endNode(this.__source__),
                      t._instanceof(this, d) &&
                        (this.__source__._runsDirty = !0));
                  }));
              }
              if (
                (t._instanceof(i, r.Container) &&
                  ((i.getFirstChild = function () {
                    return t.proxy(this.__proto__.getFirstChild.call(this));
                  }),
                  (i.getLastChild = function () {
                    return t.proxy(this.__proto__.getLastChild.call(this));
                  })),
                t._instanceof(i, S) &&
                  (i.depthFirstSearch = function (e, i, n, r, o) {
                    this.__source__.depthFirstSearch(e, i, t.proxy(n), r, o);
                  }),
                t._instanceof(i, P) &&
                  ((i.getOutEdges = function () {
                    return this.__source__.getOutEdges().map(function (e) {
                      return t.proxy(e);
                    });
                  }),
                  (i.getInEdges = function () {
                    return this.__source__.getInEdges().map(function (e) {
                      return t.proxy(e);
                    });
                  })),
                t._instanceof(i, d))
              ) {
                var l = i.getPaintLayers(),
                  A = l.getFillLayers(!0),
                  c = l.getBorderLayers(!0);
                A.length > 1 ||
                c.length > 1 ||
                i.getProperty("dir") ||
                (t._options && t._options.convertTextToPath)
                  ? (i._paint = function (e) {
                      e.beginNode(this.__source__);
                      var i = this.getTextShapes();
                      i &&
                        a.each(i, function (i, n) {
                          t.proxy(n).paint(e);
                        });
                    })
                  : i.setTLCore(new y(t._context, t._doc, i.__source__));
              } else
                t._instanceof(i, B)
                  ? i._edges && (i._edges = t.proxy(i._edges))
                  : t._instanceof(i, x)
                    ? (a.each(
                        Object.getOwnPropertyNames(i.__source__),
                        function (e, t) {
                          Object.defineProperty(this, t, {
                            configurable: !0,
                            set: function (e) {
                              this.__source__[t] = e;
                            },
                            get: function () {
                              return this.__source__[t];
                            },
                          });
                        }.bind(i),
                      ),
                      (i._paintBorder = function (e, t, i, n, r) {
                        ((e._borderPaintLayer = r),
                          (e._patternBBox = this._pathBase.getPatternBBox()));
                        try {
                          this.__proto__._paintBorder.call(
                            this,
                            e,
                            t,
                            i,
                            !1,
                            r,
                          );
                        } finally {
                          (delete e._borderPaintLayer, delete e._patternBBox);
                        }
                      }))
                    : t._instanceof(i, C)
                      ? (i._scene = t.proxy(i._scene))
                      : t._instanceof(i, b) &&
                        (i._workspace = t.proxy(i._workspace));
            }
            return i;
          }
          return null;
        }),
        (e.exports = V));
    }