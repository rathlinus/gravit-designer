/**
 * Module 1406
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
  var n = require(0) /* GObject */, r = require(2) /* GNode */, o = require(280) /* GWorkspace */, a = require(11) /* GUtil */, s = require(5) /* GPoint */, l = require(1143) /* module */, h = require(28) /* GStylable */, A = require(798) /* GBitmapExport */, c = require(132) /* GLength */, p = require(1216) /* module */, u = require(1422) /* Job */, d = require(70) /* GText */, g = require(1444) /* module */, f = require(22) /* GElement */, m = require(7) /* GTransform */, y = require(1446) /* GPDFTLRender */, _ = require(289) /* GSlice */, v = require(95) /* GImage */, b = require(160) /* GScene */, C = require(83) /* GPage */, w = require(359) /* module */, E = require(56) /* GShape */, B = require(162) /* GPathsGraph */, x = require(347) /* GPGEdge */, P = require(569) /* module */, S = require(818) /* ColorMap */, T = require(321) /* GDropShadowEffect */, I = require(432) /* GInnerShadowEffect */, F = require(1448) /* module */, R = require(1449) /* module */, D = require(1451) /* module */, k = require(64) /* GPlatform */, G = require(9) /* GLocale */, Q = require(47) /* GLocaleKey */, M = require(1453) /* module */, N = require(1235) /* module */, U = require(1454) /* module */;
  function V() {
  }
  function O(e, t, i, n) {
    this._context = e, this._doc = t, this._options = i, this._compatibilityProcessor = n;
  }
  n.inherit(V, n), V.isSupported = function (e, t, i) {
    var n = true, r = function (e) {
        if (!N.isCompatible(e, t) || e instanceof v) {
          var r = A.getNodeSelfBitmapUsedArea(e, i), o = r.getWidth(), a = r.getHeight(), s = o * a;
          if (o > k.absoluteMaxImgLinearDimension || a > k.absoluteMaxImgLinearDimension || s > k.absoluteMaxImgAreaDots || 4 * s > k.maxPngDataSize)
            return n = false, true;
        }
      };
    return Array.isArray(e) ? e.some(function (e) {
      return e.accept(r);
    }) : e.accept(r), n;
  }, V.export = function (e, t, i, n, r) {
    if (i) {
      var o, a, h;
      if (r && r.message && r.message(G.get(new Q("GPDFExport", "text.wait"))), "undefined" != typeof Worker && !t.disableWorker) {
        o = [];
        var d = "undefined" != typeof navigator && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4, f = "pdfexport.worker.js" + ("?v=" + Math.random());
        (function (e, t) {
          try {
            var i = new URL(e);
            if (!i.origin || "null" === i.origin)
              return false;
          } catch (e) {
            return false;
          }
          var n = new URL(t, i);
          return i.origin === n.origin;
        }(window.location.href, f) || (a = new URL(f, window.location.href).href, h = "importScripts('" + a + "');", f = URL.createObjectURL(new Blob([h]))));
        for (var y = 0; y < d; y++)
          o.push(new Worker(f));
      }
      var v = w.RGB;
      t.colorSpace && (v = w[t.colorSpace.toUpperCase()]);
      var E = new u({
          version: 1.7,
          compress: true,
          colorSpace: v,
          workers: o,
          user: t.user,
          title: t.title,
          jpegQuality: t.jpegQuality,
          downsampleImages: t.downsampleImages
        }), B = Math.max(c.DPI, t.dpi || c.DPI), x = t.configuration || {
          ignoreEffects: false,
          forceEffectsWhenZoomed: true
        }, P = t.progress || null, S = B / c.DPI, T = function (e, i, n) {
          if (!E.isAbort())
            if (i || (i = e._getBitmapPaintArea())) {
              var r = E.newPage(i.getWidth(), i.getHeight());
              if (e instanceof C && e.$bl) {
                var o = i.expanded(2 * -e.$bl, 2 * -e.$bl, 0, 0);
                r.setBleedBox(o);
              }
              var a = Math.round(i.getWidth() * S), l = Math.round(i.getHeight() * S), h = new g(new p(E));
              h.configuration.sceneBackground = undefined !== x.sceneBackground ? x.sceneBackground : h.configuration.sceneBackground, h.canvas.resize(a, l), h.canvas.prepare(), h.canvas.setOrigin(new s(i.getX() * S, i.getY() * S));
              var c = h._context2d, u = c.getTransform().decomposed().translate.scaled(1 / S, 1 / S).mapPoint(new s(0, 0)), d = m.deserialize(c.getTransform().getMatrix()).scaled(1 / S, 1 / S).translated(-u.getX(), -u.getY()).scaled(S, S).translated(u.getX(), -u.getY());
              E.setPageOrigin(d.mapPoint(new s(0, 0))), h._context2d.setPageOrigin(E.getPageOrigin()), h.canvas.setScale(S), t.backgroundColor && h.canvas.fillCanvas(t.backgroundColor, t.backgroundOpacity);
              var f = new U(!x.ignoreEffects);
              f.processNode(e);
              try {
                new O(h, E, t, f).proxy(e).paint(h);
              } finally {
                var y = function () {
                  h.canvas.finish(), n();
                };
                if (f.hasRasterizableNodes()) {
                  var _, v = E.beginJob("Raster effects"), b = f.getRasterizableNodes(), w = function (e) {
                      if (e >= b.length)
                        return v.done(), void y();
                      if (!E.isAbort()) {
                        var t = b[e];
                        try {
                          if (!t.isVisible())
                            return void w(++e);
                          if (N.isAffectedByBackground(t)) {
                            if (_ || (_ = A.export(t.getPage(), B + "dpi", null, null, null, null, true)), _ && _.getWidth() && _.getHeight()) {
                              var i = A.getBitmapPaintArea(t.getPage(), "1x"), n = t.getPaintBBox();
                              h.canvas.getContext().replaceWithBitmap(_.getHTMLElement(), t, i, n);
                            }
                            w(++e);
                          } else
                            new D().export(h, E, t, B + "dpi").then(function () {
                              w(++e);
                            }).catch(V);
                        } catch (e) {
                          V(e);
                        }
                      }
                    };
                  w(0);
                } else
                  y();
              }
            } else
              n();
        }.bind(this), I = -1, F = function (e, t, i) {
          setTimeout(function () {
            e.length && !E.isAbort() ? t(e.shift(), function () {
              F(e, t, i);
            }) : i();
          }, 1), I < 0 && (I = e.length), P && P((I - e.length) / (I + 1) * 100);
        }, R = function (e, t) {
          var i = null, n = null, r = null;
          if (e instanceof _) {
            var o = e;
            r = o._getBitmapPaintArea(), i = (e = o.findParent(function (e) {
              return e instanceof C;
            })).getProperty("bck"), n = e.getProperty("bop"), e.setProperty("bck", o.$cls);
          }
          try {
            T(e, r, t);
          } finally {
            i && e.setProperties([
              "bck",
              "bop"
            ], [
              i,
              n
            ]);
          }
        }, M = function (e, t) {
          T(e, null, t);
        }, V = function (e) {
          E.finish(), i(e), e && console.error(e);
          var t = E.getLastJob();
          t && console.info("Last job", t.toString());
        }, L = function () {
          E.ready().then(function () {
            try {
              var e = n ? new n() : new l();
              E.write(e), i(null, e.asArray(), E);
            } catch (e) {
              V(e);
            } finally {
              E.finish();
            }
          }).catch(V);
        };
      return k.scheduleFrame(function () {
        if (e instanceof b) {
          var t = [];
          e.iteratePages(function (e) {
            t.push(e);
          }, true), F(t, M, L);
        } else
          Array.isArray(e) || (e = [e]), F(e, R, L);
      }), E;
    }
    console.error("No fnResult callback passed to GPDFExport.export.");
  }, O.prototype._doc = null, O.prototype._context = null, O.prototype._options = null, O.prototype._nodesToRasterize = null, O.prototype._isNeedToRaster = function (e) {
    return !!this._nodesToRasterize && this._nodesToRasterize.some(function (t) {
      return t === e;
    });
  }, O.prototype._instanceof = function (e, t) {
    return e.hasMixin && e.hasMixin(t) || e instanceof t;
  }, O.prototype.proxy = function (e) {
    if (e) {
      var module = this, require = Object.create(Object.getPrototypeOf(e));
      if (a.extend(require, e), require.__source__ = e, module._instanceof(require, r)) {
        var n = this._compatibilityProcessor.isVectorable(e);
        require._needToRaster = !n;
      }
      if (require instanceof o)
        require.getReference = function (e) {
          return module.proxy(this.__proto__.getReference.call(this, e));
        };
      else {
        if (module._instanceof(require, r) && (require.getNext = function () {
            return module.proxy(this.__proto__.getNext.call(this));
          }, require.getPrevious = function () {
            return module.proxy(this.__proto__.getPrevious.call(this));
          }), module._instanceof(require, E) && (require._paintBorder = function (e, t, i) {
            e._borderPaintLayer = i, this.__proto__._paintBorder.call(this, e, t, i);
          }, require._paintBorderSeparate = function (e, t, i, n, r) {
            new M(this).paint(e, t, i, n, r);
          }, require._paintFill = function (e, t, i) {
            e._fillPaintLayer = i, this.__proto__._paintFill.call(this, e, t, i), delete e._fillPaintLayer;
          }), module._instanceof(require, f)) {
          require._paintSharp = false;
          var s = module._options.configuration && module._options.configuration.ignoreEffects;
          require._paint = function (e) {
            e.beginNode(this.__source__), this._needToRaster || s || function (e, t) {
              if (t.hasMixin(h)) {
                var require = t.getEffects();
                if (require)
                  for (var n = require.getFirstChild(); null != n; n = n.getNext())
                    n instanceof T && n.$vs && new F().render(e, t, n);
              }
            }(e, this.__source__), this.__source__ instanceof v && this._needToRaster && !s || this.__proto__._paint.call(this, e), this._needToRaster || s || function (e, t) {
              if (t.hasMixin(h)) {
                var require = t.getEffects();
                if (require)
                  for (var n = require.getFirstChild(); null != n; n = n.getNext())
                    n instanceof I && n.$vs && new R().render(e, t, n);
              }
            }(e, this.__source__);
          }, require._finishPaint = function (e) {
            this.__proto__._finishPaint.call(this, e), e.endNode(this.__source__), module._instanceof(this, d) && (this.__source__._runsDirty = true);
          };
        }
        if (module._instanceof(require, r.Container) && (require.getFirstChild = function () {
            return module.proxy(this.__proto__.getFirstChild.call(this));
          }, require.getLastChild = function () {
            return module.proxy(this.__proto__.getLastChild.call(this));
          }), module._instanceof(require, S) && (require.depthFirstSearch = function (e, i, n, r, o) {
            this.__source__.depthFirstSearch(e, i, module.proxy(n), r, o);
          }), module._instanceof(require, P) && (require.getOutEdges = function () {
            return this.__source__.getOutEdges().map(function (e) {
              return module.proxy(e);
            });
          }, require.getInEdges = function () {
            return this.__source__.getInEdges().map(function (e) {
              return module.proxy(e);
            });
          }), module._instanceof(require, d)) {
          var l = require.getPaintLayers(), A = l.getFillLayers(true), c = l.getBorderLayers(true);
          A.length > 1 || c.length > 1 || require.getProperty("dir") || module._options && module._options.convertTextToPath ? require._paint = function (e) {
            e.beginNode(this.__source__);
            var i = this.getTextShapes();
            i && a.each(i, function (i, n) {
              module.proxy(n).paint(e);
            });
          } : require.setTLCore(new y(module._context, module._doc, require.__source__));
        } else
          module._instanceof(require, B) ? require._edges && (require._edges = module.proxy(require._edges)) : module._instanceof(require, x) ? (a.each(Object.getOwnPropertyNames(require.__source__), function (e, t) {
            Object.defineProperty(this, t, {
              configurable: true,
              set: function (e) {
                this.__source__[t] = e;
              },
              get: function () {
                return this.__source__[t];
              }
            });
          }.bind(require)), require._paintBorder = function (e, t, i, n, r) {
            e._borderPaintLayer = r, e._patternBBox = this._pathBase.getPatternBBox();
            try {
              this.__proto__._paintBorder.call(this, e, t, i, false, r);
            } finally {
              delete e._borderPaintLayer, delete e._patternBBox;
            }
          }) : module._instanceof(require, C) ? require._scene = module.proxy(require._scene) : module._instanceof(require, b) && (require._workspace = module.proxy(require._workspace));
      }
      return require;
    }
    return null;
  }, exports.exports = V;
}
