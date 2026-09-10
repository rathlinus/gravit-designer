/**
 * chunk.vendor.js Module #83
 * Type: unknown
 */

function (e, t, i) {
      i(75);
      var n = i(50),
        r = i(2),
        o = i(0),
        a = i(72),
        s = i(5),
        l = i(69),
        h = i(104),
        A = i(6),
        c = i(7),
        p = i(22),
        u = i(159),
        d = i(112),
        g = i(139),
        f = i(68),
        m = i(207),
        y = i(14),
        _ = i(9),
        v = i(133),
        b = i(228),
        C = i(103),
        w = i(506);

      function E() {
        (l.call(this),
          this._setDefaultProperties(E.GeometryProperties, E.VisualProperties));
      }
      (r.inheritAndMix("page", E, l, [
        r.Container,
        p.Transform,
        p.Layout,
        p.Accelerated,
        r.Reference,
        l.LabelHolder,
      ]),
        (E.GeometryProperties = {
          w: 800,
          h: 600,
          x: 0,
          y: 0,
          bl: 0,
          ml: 0,
          mt: 0,
          mr: 0,
          mb: 0,
          gp: 10,
          off: null,
        }),
        (E.VisualProperties = {
          bck: null,
          bop: 1,
        }),
        (E.InvalidationRequestEvent = function (e) {
          this.area = e || null;
        }),
        o.inherit(E.InvalidationRequestEvent, a),
        (E.InvalidationRequestEvent.prototype.area = null),
        (E.InvalidationRequestEvent.prototype.toString = function () {
          return "[Event GPage.InvalidationRequestEvent]";
        }),
        (E.AfterThumbnailUpdate = function (e, t) {
          ((this.page = e), (this.image = t));
        }),
        o.inherit(E.AfterThumbnailUpdate, a),
        (E.AfterThumbnailUpdate.prototype.page = null),
        (E.AfterThumbnailUpdate.prototype.image = null),
        (E.AfterThumbnailUpdate.prototype.toString = function () {
          return "[Event GPage.AfterThumbnailUpdate]";
        }),
        (E.prototype._cachedPosition = null),
        (E.prototype._isInvalidating = !1),
        (E.prototype._cachedImage = null),
        (E.prototype._shouldRepaintThumbnail = !0),
        (E.prototype._annotations = null),
        (E.prototype.getNodeNameTranslated = function () {
          return _.getValue("GPage", "name", this.getNodeName());
        }),
        (E.prototype.transform = function (e, t, i) {}),
        (E.prototype.getTransform = function () {
          var e = this.getPosition(1);
          return new c(1, 0, 0, 1, e.getX(), e.getY());
        }),
        (E.prototype.getTrackTempPropNames = function () {
          return this.getPatternPropNames();
        }),
        (E.prototype.getPatternPropNames = function () {
          return ["bck"];
        }),
        (E.prototype.hasAnnotations = function () {
          return (
            !!this._getAnnotations() && !!this._getAnnotations().getFirstChild()
          );
        }),
        (E.prototype.getAnnotations = function () {
          var e = this._getAnnotations();
          return (
            e ||
            ((this._annotations = new w()),
            this.appendChild(this._annotations),
            this._annotations)
          );
        }),
        (E.prototype._getAnnotations = function () {
          return (
            this._annotations || (this._annotations = this._findAnnotations()),
            this._annotations
          );
        }),
        (E.prototype._findAnnotations = function () {
          for (
            var e = null, t = this.getLastChild();
            null !== t;
            t = t.getPrevious()
          )
            if (t instanceof w) {
              e = t;
              break;
            }
          return e;
        }),
        (E.prototype.setAnnotations = function (e) {
          var t = this._getAnnotations();
          ((this._annotations = e),
            t
              ? (this.insertChild(e, t), this.removeChild(t))
              : this.appendChild(this._annotations));
        }),
        (E.prototype.isFixedSized = function () {
          return this.$w && this.$h;
        }),
        (E.prototype.trimToContent = function () {
          var e = this.getContentBBox();
          if (e && !e.isEmpty()) {
            this.setProperties(["w", "h"], [e.getWidth(), e.getHeight()]);
            var t = new c().translated(-e.getX(), -e.getY());
            this.getChildren().forEach(function (e) {
              e instanceof p && e.hasMixin(p.Transform) && e.transform(t);
            });
          }
        }),
        (E.prototype.getContentBBox = function () {
          for (
            var e = null, t = this.getFirstChild();
            null != t;
            t = t.getNext()
          )
            if (t instanceof p) {
              if ("symbol" === r.getName(t)) {
                var i = t.getChildrenPaintBBox();
                i =
                  (t.getEffects() &&
                    i &&
                    t.getEffects().getEffectsBBox(i, null, i)) ||
                  i;
                var n = t.getFrame();
                n && !n.isEmpty() && (i = (i && i.united(n)) || n);
              } else i = t.getPaintBBox();
              i && !i.isEmpty() && (e = e ? e.united(i) : i);
            }
          return e;
        }),
        (E.prototype.getPosition = function (e, t, i, n) {
          if (!t && this._cachedPosition) return this._cachedPosition;
          var r = this._getGridPosition(e, i, n);
          return !n && this._scene && e && this.$off && !m.pagesPerRow
            ? r.add(this.$off.getTranslation())
            : r;
        }),
        (E.prototype._getGridPosition = function (e, t, i) {
          if (!this._scene) return new s(0, 0);
          if (!e) return new s(0, 0);
          var n = this._scene.$lbs + this._scene.$lbp + 5,
            r = n,
            o = n;
          if (m.pageGap) r = o = m.pageGap;
          else if (!this.isScaleLabel() && this.isFixedSized()) {
            var a = this.getGeometryBBox(),
              l = 0.125 * ((a && a.getWidth()) || 0);
            r = o = Math.max(
              l,
              this._scene
                .getLabelBBox(t ? 1 : this.getScaleLabelFactor())
                .getHeight(),
            );
          }
          var h,
            c,
            p,
            u,
            d = m.pagesPerRow || this._scene.getProperty("pgx"),
            g = 1,
            f = Number.MAX_VALUE,
            y = new s(0, 0),
            _ = null,
            v = null;
          ((h = 0),
            (c = 0),
            (i || !this.$off || m.pagesPerRow) &&
              this._scene.iteratePages(
                function (e) {
                  if (e === this) return !1;
                  var t = e.$off;
                  if (t && !m.pagesPerRow) {
                    if (((v = t.getTranslation()), m.pagesCanOverlap)) {
                      var i = v.getX() - h;
                      if (i < 0 || (i > 0 && i <= e.$w)) return;
                    }
                  } else v = y;
                  g++ % d == 0
                    ? ((h = 0),
                      (c += Math.min(f, e.$h + Math.min(0, v.getY())) + r),
                      (f = Number.MAX_VALUE))
                    : ((h += e.$w + o + Math.min(0, v.getX())),
                      (f = Math.min(f, e.$h + Math.min(0, v.getY()) + r)));
                }.bind(this),
              ),
            (p = h),
            (u = c),
            this.$off &&
              ((_ = this.$off.getTranslation()),
              (p += _.getX()),
              (u += _.getY())));
          var b = new A(p, u, this.$w, this.$h),
            C = function (i) {
              this._scene.iteratePages(
                function (n) {
                  if (n === this) return !1;
                  var a = n.getPosition(e, !0, t),
                    s = new A(a.getX(), a.getY(), n.$w, n.$h).expanded(
                      o,
                      r,
                      o,
                      r,
                    );
                  s.intersectsRect(b) && (b = i(n, s) || b);
                }.bind(this),
              );
            }.bind(this);
          return (
            this.isScaleLabel() &&
              C(
                function (e, t) {
                  var i = b.intersected(t);
                  if (i.getWidth() > i.getHeight())
                    return new A(
                      p,
                      t.getY() +
                        e.$h +
                        r +
                        r +
                        this._scene.$lbp * this.getScaleLabelFactor(),
                      this.$w,
                      this.$h,
                    );
                }.bind(this),
              ),
            (h = b.getX()),
            (c = b.getY()),
            _ && ((h -= _.getX()), (c -= _.getY())),
            new s(h, c)
          );
        }),
        (E.prototype.getPaintBBox = function (e, t, i, n) {
          return i || this.isVisible()
            ? t || i
              ? this._calculatePaintBBox(t, i, n)
              : (null == this._paintBBox &&
                  (this._paintBBox = this._calculatePaintBBox(null, i, n)),
                this._paintBBox)
            : null;
        }),
        (E.prototype._calculateGeometryBBox = function (e) {
          if (this.isFixedSized())
            return new A(this.$x, this.$y, this.$w, this.$h);
          var t = l.prototype._calculateGeometryBBox.call(this, e);
          if (t && this.hasAnnotations()) {
            var i = this._getAnnotations().getGeometryBBox();
            i && (t = t.united(i));
          }
          return t;
        }),
        (E.prototype._calculatePageBBox = function (e) {
          var t = this.getGeometryBBox(e);
          if (
            (this.$bl &&
              this.$bl > 0 &&
              (t = t.expanded(this.$bl, this.$bl, this.$bl, this.$bl)),
            this._scene && !e)
          ) {
            var i = this._scene.getShadowExpandArea();
            i && (t = t.expanded(i.left, i.top, i.right, i.bottom));
          }
          return t;
        }),
        (E.prototype._calculatePaintBBox = function (e, t, i) {
          var n = l.prototype._calculatePaintBBox.call(this, null, t);
          if (n && this.hasAnnotations()) {
            var r = this._getAnnotations().getPaintBBox();
            r && (n = n.united(r));
          }
          if (
            (!i &&
              this._scene &&
              this._scene.visitReferences(this, function (i) {
                if (i instanceof E) {
                  var r = i.getPaintBBox(null, e, t, !0);
                  r && (n = n ? n.united(r, !0) : n);
                }
              }),
            this.isFixedSized())
          ) {
            var o = this._calculatePageBBox(t);
            return n ? n.united(o, !0) : o;
          }
          return (
            e && e instanceof A
              ? (this._screen = e)
              : e &&
                !this._screen &&
                this._scene &&
                (this._screen = this._scene.getScreenBox()),
            e && this._screen ? this._screen : n
          );
        }),
        (E.prototype.getElementsByBBox = function (e, t) {
          var i = [];
          return (
            this.acceptChildren(function (n) {
              if (n instanceof p) {
                var r = n.getPaintBBox();
                r &&
                  !r.isEmpty() &&
                  ((t && e.intersectsRect(r)) || (!t && e.containsRect(r))) &&
                  i.push(n);
              }
            }),
            i
          );
        }),
        (E.prototype.getActiveLayer = function () {
          return (this.querySingle || i(507), this.querySingle("layer:active"));
        }),
        (E.prototype.setActiveLayer = function (e) {
          (this.acceptChildren(function (t) {
            t instanceof u && t !== e && t.removeFlag(r.Flag.Active);
          }),
            e && e.setFlag(r.Flag.Active));
        }),
        (E.prototype.updateActiveLayerForElem = function (e) {
          if (e instanceof h) {
            var t = e.findParent(function (e) {
              return e instanceof u;
            });
            t && !t.hasFlag(r.Flag.Active)
              ? this.setActiveLayer(t)
              : t || this.setActiveLayer(null);
          } else
            e instanceof u &&
              (e.hasFlag(r.Flag.Active) || e.hasFlag(r.Flag.Selected)
                ? e !== this.getActiveLayer() && this.setActiveLayer(null)
                : this.setActiveLayer(e));
        }),
        (E.prototype.getSuccessorActiveLayer = function (e) {
          var t = null;
          if (e instanceof u) {
            for (var i = e.getPrevious(); null !== i; i = i.getPrevious())
              if (i instanceof u) {
                t = i;
                break;
              }
            if (!t)
              for (i = e.getNext(); null !== i; i = i.getNext())
                if (i instanceof u) {
                  t = i;
                  break;
                }
            t ||
              (t = e.findParent(function (e) {
                return e instanceof u;
              }));
          }
          return t;
        }),
        (E.prototype.deleteActiveLayer = function (e) {
          if ((e = e || this.getActiveLayer())) {
            var t = this.getSuccessorActiveLayer(e);
            (this.setActiveLayer(t || null), e.getParent().removeChild(e));
          }
        }),
        (E.prototype.getClipBBox = function () {
          if (this.isFixedSized()) {
            var e = this.getGeometryBBox();
            if (e && !e.isEmpty()) {
              var t = this.$bl || 0;
              return e.expanded(t, t, t, t);
            }
            return e;
          }
          return null;
        }),
        (E.prototype.getMarginBBox = function () {
          if (this.isFixedSized()) {
            var e = this.getGeometryBBox();
            return e && !e.isEmpty()
              ? e.expanded(-this.$ml, -this.$mt, -this.$mr, -this.$mb)
              : e;
          }
          return null;
        }),
        (E.prototype._detailHitTest = function (e, t, i, n, r, o, a) {
          var s = this.getGeometryBBox();
          if (!s || s.isEmpty()) return null;
          var l = this.getPosition(o);
          (0 === l.getX() && 0 === l.getY()) ||
            (s = s.translated(l.getX(), l.getY()));
          return (
            t && (s = t.mapRect(s)),
            s.expanded(i, i, i, i).containsPoint(e)
              ? new d(this, {
                  label: !1,
                })
              : this._hitTestLabel(e, i, t, !this.isScaleLabel(), l)
          );
        }),
        (E.prototype.validateInsertion = function (e, t) {
          return "scene" === r.getName(e);
        }),
        (E.prototype._invalidateArea = function (e) {
          this.hasEventListeners(E.InvalidationRequestEvent) &&
            this.trigger(new E.InvalidationRequestEvent(e));
        }),
        (E.prototype._paintChildren = function (e) {
          var t = !1;
          if (e.configuration.clipArea && e.canvas.hasClip()) {
            var i = e.configuration.clipArea;
            (e.canvas.clipRect(i.getX(), i.getY(), i.getWidth(), i.getHeight()),
              (t = !0));
          }
          for (var n = this.getFirstChild(); null != n; n = n.getNext())
            n instanceof p && n.paint(e);
          if (
            (this.hasAnnotations() && this._getAnnotations().paint(e),
            p.Accelerated.PAINT_QTREES)
          ) {
            this.paintQTree(e);
            var r = this;
            this.acceptChildren(function (t) {
              if (t.hasMixin(p.Accelerated)) {
                for (var i = 1, n = t; n.getParent() !== r; )
                  ((n = n.getParent()), i++);
                var o =
                  (16711935 >>> (31 & i)) |
                  ((16711935 << ((24 - i) & 31)) & 16777215);
                t.paintQTree(e, void 0, void 0, "#" + Number(o).toString(16));
              }
            });
          }
          t && e.canvas.resetClip();
        }),
        (E.prototype._getBitmapPaintArea = function () {
          var e = this.getClipBBox();
          return e || l.prototype._getBitmapPaintArea.call(this);
        }),
        (E.prototype._paintToBitmap = function (e) {
          return (
            (e.configuration.clipToPage = !0),
            l.prototype._paintToBitmap.call(this, e)
          );
        }),
        (E.prototype.getMasterPages = function () {
          var e = [];
          return this._scene
            ? this.$refs
              ? (this._scene.iteratePages(
                  function (t) {
                    t !== this &&
                      this.$refs.indexOf(t.getReferenceId()) >= 0 &&
                      e.push(t);
                  }.bind(this),
                  !0,
                ),
                e)
              : null
            : e;
        }),
        (E.prototype.getSlavePages = function () {
          var e = [];
          return this._scene
            ? (this._scene.iteratePages(
                function (t) {
                  t !== this &&
                    t.$refs &&
                    t.$refs.indexOf(this.getReferenceId()) >= 0 &&
                    e.push(t);
                }.bind(this),
                !0,
              ),
              e)
            : e;
        }),
        (E.prototype.isSingleMasterBackgroundContent = function () {
          if (!this._scene) return !1;
          var e = !1,
            t = null,
            i = this._scene.getProperty("mpg");
          if (
            (this._scene.isLinked(this, i)
              ? (t = i)
              : ((i = this._scene.getProperty("empg")),
                this._scene.isLinked(this, i)
                  ? (t = i)
                  : ((i = this._scene.getProperty("ompg")),
                    this._scene.isLinked(this, i) && (t = i))),
            t)
          ) {
            var n = t.getProperty("bck"),
              r = t.getProperty("bop");
            if (n && r > 0 && !(n instanceof f)) e = !0;
            else e = !!t.getChildrenGeometryBBox();
          }
          return e;
        }),
        (E.prototype._referenceEvent = function (e) {
          e.target === this &&
            (!e.reference || e.reference instanceof E) &&
            (this._requestInvalidation(),
            l.prototype._referenceEvent.call(this, e));
        }),
        (E.prototype.isPaintable = function (e, t) {
          if (!e) return l.prototype.isPaintable.call(this, e, t);
          if (!this.isVisible()) return !1;
          var i;
          if (
            null ==
              (i =
                !e.configuration.multiPageView &&
                e.configuration.isClipToPage() &&
                this.isFixedSized()
                  ? this._calculatePageBBox()
                  : this.getPaintBBox(e.configuration.multiPageView, t)) ||
            i.isEmpty()
          )
            return !1;
          if ("m" === this.$_sbl) return !0;
          if (e) {
            if (e.dirtyMatcher && !e.dirtyMatcher.isDirty(i)) return !1;
            if (
              e.configuration &&
              e.configuration.clipArea &&
              !e.configuration.clipArea.intersectsRect(i)
            )
              return !1;
          }
          return !0;
        }),
        (E.prototype._getMasterPageClipRectForPage = function (e, t) {
          var i = null;
          return (
            (i = this.isFixedSized()
              ? new A(this.$x, this.$y, this.$w, this.$h)
              : this.getPaintBBox(null, e, t)),
            this._scene &&
              this._scene.visitReferences(this, function (n) {
                if (n instanceof E) {
                  var r = n.getPaintBBox(null, e, t, !0);
                  r && (i = i ? i.united(r, !0) : i);
                }
              }),
            i
          );
        }),
        (E.prototype._paint = function (e, t) {
          for (
            var i = e.canvas, n = !1, r = this.getFirstChild();
            null !== r;
            r = r.getNext()
          )
            if (r instanceof p) {
              n = !0;
              break;
            }
          !n &&
            this._getAnnotations() &&
            this._getAnnotations().isPaintable() &&
            (n = !0);
          var o = i.resetTransform(),
            a = e.isIncludingInvisible();
          if (this.isFixedSized()) {
            var l = !1,
              h = new A(this.$x, this.$y, this.$w, this.$h),
              u = (F = o.mapRect(h).toAlignedRect()).getX(),
              d = F.getY(),
              y = F.getWidth(),
              _ = F.getHeight();
            if (
              e.configuration.sceneBackground &&
              !e.configuration.isOutline(e) &&
              this.$bck &&
              this.$bop > 0
            ) {
              var v;
              if (this.$bck instanceof g) {
                var b = this.getTransform() || new c(),
                  C = this.getSourceBBox(a) || this.getGeometryBBox(a);
                v = this.$bck.createTextureTransform(C, b);
              }
              if (
                (R = e.canvas.createPatternPaint(
                  this.$bck,
                  this.$bck instanceof g ? null : F,
                  v,
                ))
              )
                if (R.transform) {
                  i.putVertices(
                    [
                      new s(u, d),
                      new s(u + y, d),
                      new s(u + y, d + _),
                      new s(u, d + _),
                    ],
                    !0,
                  );
                  var w = i.setTransform(
                    i.getTransform(!0).preMultiplied(R.transform),
                  );
                  (i.fillVertices(R.paint, this.$bop, null, !1),
                    i.setTransform(w));
                } else {
                  if (e.configuration.multiPageView && m.pagesCanOverlap)
                    if (
                      "undefined" != typeof navigator &&
                      navigator &&
                      0 == navigator.userAgent.indexOf("Mozilla") &&
                      0 == navigator.platform.indexOf("Win") &&
                      navigator.userAgent.indexOf("Edge") < 0 &&
                      navigator.userAgent.indexOf("Chrome") < 0 &&
                      navigator.userAgent.indexOf("Safari") < 0
                    )
                      i.strokeRect(
                        u - 0.5,
                        d - 0.5,
                        y + 1,
                        _ + 1,
                        null,
                        1,
                        0.4,
                      );
                    else {
                      var B = e.configuration.pageDecoration,
                        x = (B.shadow, B.shadowOffsetX || 0),
                        P = B.shadowOffsetY || 0;
                      ((i._canvasContext.shadowColor =
                        B.shadowBackground || "rgba(0,0,0,0.5)"),
                        (i._canvasContext.shadowBlur = B.shadow),
                        (i._canvasContext.shadowOffsetX = x),
                        (i._canvasContext.shadowOffsetY = P));
                    }
                  (i.fillRect(u, d, y, _, R.paint, this.$bop),
                    e.configuration.multiPageView &&
                      m.pagesCanOverlap &&
                      (i._canvasContext.shadowColor = "rgba(0,0,0,0)"));
                }
            }
            if (this._scene && !this.getProperty("cdr", !0)) {
              var S = this._getMasterPageClipRectForPage(t, !0);
              if (S && !S.isEmpty()) {
                var T = o.mapRect(S).toAlignedRect();
                this._scene.visitReferences(
                  this,
                  function (t) {
                    if (t instanceof E) {
                      if (i.hasClip() && !l)
                        if (((l = !0), e.configuration.isClipToPage())) {
                          var n = this.$bl || 0;
                          i.clipRect(u - n, d - n, y + 2 * n, _ + 2 * n);
                        } else
                          i.clipRect(
                            T.getX(),
                            T.getY(),
                            T.getWidth(),
                            T.getHeight(),
                          );
                      (t.$bck && i.fillRect(u, d, y, _, t.$bck, t.$bop),
                        t._paintChildren(e));
                    }
                  }.bind(this),
                );
              }
            }
            if (
              n &&
              !l &&
              e.configuration.isClipToPage() &&
              i.hasClip() &&
              !e.configuration.multiPageView
            ) {
              var I = this.$bl || 0;
              (i.clipRect(u - I, d - I, y + 2 * I, _ + 2 * I), (l = !0));
            } else l && (i.resetClip(), (l = !1));
            (n && this._paintChildren(e), l && i.resetClip());
          } else {
            if ((h = this.getPaintBBox(null, t, a)) && !h.isEmpty()) {
              var F, R;
              ((u = (F = o.mapRect(h).toAlignedRect()).getX()),
                (d = F.getY()),
                (y = F.getWidth()),
                (_ = F.getHeight()));
              if (
                e.configuration.sceneBackground &&
                !e.configuration.isOutline(e) &&
                this.$bck &&
                this.$bop > 0 &&
                this.$bck instanceof f
              )
                if ((R = e.canvas.createPatternPaint(this.$bck, F, null)))
                  if (R.transform) {
                    i.putVertices(
                      [
                        new s(u, d),
                        new s(u + y, d),
                        new s(u + y, d + _),
                        new s(u, d + _),
                      ],
                      !0,
                    );
                    w = i.setTransform(
                      i.getTransform(!0).preMultiplied(R.transform),
                    );
                    (i.fillVertices(R.paint, this.$bop, null, !1),
                      i.setTransform(w));
                  } else i.fillRect(u, d, y, _, R.paint, this.$bop);
            }
            n && this._paintChildren(e);
          }
          i.setTransform(o);
        }),
        (E.prototype._handleChange = function (e, t) {
          if (e === r._Change.Store)
            (this.storeProperties(
              t.blob,
              E.GeometryProperties,
              function (e, t) {
                return "off" === e && t ? c.serialize(t) : t;
              },
            ),
              this.storeProperties(t.blob, E.VisualProperties, function (e, t) {
                return "bck" === e && t ? n.serialize(t) : t;
              }));
          else if (e === r._Change.Restore)
            (this.restoreProperties(
              t.blob,
              E.GeometryProperties,
              function (e, t) {
                return "off" === e && t ? c.deserialize(t) : t;
              },
            ),
              this.restoreProperties(
                t.blob,
                E.VisualProperties,
                function (e, t) {
                  return "bck" === e && t ? n.deserialize(t) : t;
                },
              ));
          else if (e === r._Change.BeforePropertiesChange) {
            var i = !1,
              o = t.properties.indexOf("w"),
              a = t.properties.indexOf("h");
            if (
              (o >= 0
                ? t.values[o] > 0
                  ? 0 == t.values[a] && (i = !0)
                  : (i = !0)
                : 0 == t.values[a] && (i = !0),
              this._scene)
            )
              t.properties.indexOf("off") >= 0 && this._requestInvalidation();
            if (i && this._scene) {
              var s = 0;
              (this._scene.iteratePages(function (e) {
                if (s++) return !1;
              }),
                s > 1 &&
                  !(o >= 0 && a >= 0) &&
                  (o >= 0 && (t.properties.splice(o, 1), t.values.splice(o, 1)),
                  a >= 0 &&
                    (t.properties.splice(a, 1), t.values.splice(a, 1))));
            }
          } else if (e === r._Change.AfterPropertiesChange) {
            if (this._scene) {
              t.properties.indexOf("name") >= 0 && this._requestInvalidation();
              ((o = t.properties.indexOf("w")),
                (a = t.properties.indexOf("h")));
              if (!m.pagesCanOverlap && (o >= 0 || a >= 0)) {
                var h = this.doCollisionlessTransform(
                    new c(),
                    null,
                    !0,
                  ).getTranslation(),
                  A = this.getProperty("off") || new c();
                this.setProperty("off", A.translated(h.getX(), h.getY()));
              }
            }
          } else if (e === r._Change.AfterFlagChange) {
            var u = this.getScene();
            u && t.set && t.flag === r.Flag.Active && u.setActivePage(this);
          } else
            e == r._Change.AfterChildInsert
              ? t instanceof w &&
                (this._notifyChange(p._Change.ChildGeometryUpdate, [t, 1]),
                t._handleChange(p._Change.InvalidationRequest))
              : e == r._Change.BeforeChildRemove
                ? t instanceof w && this._requestInvalidateNode(t)
                : e == r._Change.AfterChildRemove &&
                  t instanceof w &&
                  this._notifyChange(p._Change.ChildGeometryUpdate, [t, 1]);
          if (
            (this._handleGeometryChangeForProperties(
              e,
              t,
              E.GeometryProperties,
            ),
            this._handleVisualChangeForProperties(e, t, E.VisualProperties),
            l.prototype._handleChange.call(this, e, t),
            e !== p._Change.InvalidationRequested || this._isInvalidating)
          ) {
            if (e === p._Change.FinishGeometryUpdate)
              this.isPaintable() && (this._shouldRepaintThumbnail = !0);
            else if (
              e === p._Change.ChildGeometryUpdate &&
              (t[0] instanceof p || t[0] instanceof w) &&
              t[0].getParent() === this &&
              t[1] &&
              this._scene
            ) {
              var d = t[2] || t[0].getPaintBBox();
              this._scene._notifyChange(p._Change.ChildGeometryUpdate, [
                this,
                1,
                d,
              ]);
            }
          } else
            ((this._isInvalidating = !0),
              this._scene &&
                (this.isPaintable() && (this._shouldRepaintThumbnail = !0),
                this._scene.visitLinks(
                  this,
                  function (e) {
                    e instanceof E && e._requestInvalidation();
                  }.bind(this),
                )),
              (this._isInvalidating = !1));
        }),
        (E.prototype.doCollisionlessTransform = function (e, t, i) {
          var n = this.getScene();
          if (!n) return e;
          var r,
            o,
            a,
            s,
            l = 0,
            h = i ? this._calculateGeometryBBox() : this.getGeometryBBox();
          if (!h) return e;
          if (this.isScaleLabel())
            a = s = (7 + n.$lbs + n.$lbp) * y.getScreenDPI();
          else {
            var p = 0.125 * h.getWidth();
            a = s = Math.max(p, n.getLabelBBox().getHeight());
          }
          var u = 0;
          n.iteratePages(function (e) {
            l++;
          });
          var d = this.getPosition(!0),
            g = new c(1, 0, 0, 1, d.getX(), d.getY()),
            f = e.multiplied(g).mapRect(h),
            m = f.getX(),
            _ = f.getX() + f.getWidth(),
            v = f.getY(),
            b = f.getY() + f.getHeight(),
            C = f.getSide(A.Side.CENTER);
          do {
            ((o = !1),
              n.iteratePages(
                function (i) {
                  if (t || i !== this) {
                    var n = i.getGeometryBBox();
                    if (n) {
                      var l = i.getPosition(!0),
                        p = (n = n
                          .translated(l.getX(), l.getY())
                          .expanded(s, a, a, a)).getX(),
                        u = n.getX() + n.getWidth(),
                        d = n.getY(),
                        y = n.getY() + n.getHeight();
                      if (n.intersectsRect(f)) {
                        if (!r) {
                          var w = n.getSide(A.Side.CENTER);
                          r = C.subtract(w);
                        }
                        var E = 0,
                          B = 0;
                        return (
                          (E = r.getX() > 0 ? u - m : p - _),
                          (B = r.getY() > 0 ? y - v : d - b),
                          Math.abs(E) < Math.abs(B) ? (B = 0) : (E = 0),
                          (e = e.multiplied(new c(1, 0, 0, 1, E, B))),
                          (f = e.multiplied(g).mapRect(h)),
                          (m = f.getX()),
                          (_ = f.getX() + f.getWidth()),
                          (v = f.getY()),
                          (b = f.getY() + f.getHeight()),
                          (C = f.getSide(A.Side.CENTER)),
                          (o = !0),
                          !1
                        );
                      }
                    }
                  }
                }.bind(this),
              ),
              u++);
          } while (o && u < l);
          return e;
        }),
        (E.prototype.getPageImage = function () {
          if (!this._cachedImage || this._shouldRepaintThumbnail) {
            this.toBitmap(null, null, null, null, {
              paintMode: v.PaintMode.Fast,
              defaultEffectDetailLevel: 0.5 / y.getScreenDPI(),
            });
            return this._cachedImage;
          }
          return this._cachedImage;
        }),
        (E.prototype.assignFrom = function (e) {
          (e instanceof E &&
            this.transferProperties(e, [
              E.GeometryProperties,
              E.VisualProperties,
            ]),
            (this._cachedImage = e._cachedImage),
            l.prototype.assignFrom.call(this, e));
        }),
        (E.prototype._invalidationFinishedHandler = function (e) {
          if (this._shouldRepaintThumbnail && e.configuration.pageThumbnails) {
            this._shouldRepaintThumbnail = !1;
            var t = this;
            this._getPageThumbnail(
              e.configuration.pageThumbnailSize,
              e.configuration.pageThumbnailSize,
              function (e) {
                e &&
                  ((t._cachedImage = e),
                  setTimeout(function () {
                    t.trigger(new E.AfterThumbnailUpdate(t, t._cachedImage));
                  }));
              },
            );
          }
        }),
        (E.prototype.paint = function (e, t) {
          if (
            this._preparePaint(e, t) &&
            (this._paint(e, t),
            this._finishPaint(e),
            this._shouldRepaintThumbnail && e.configuration.pageThumbnails)
          ) {
            this._shouldRepaintThumbnail = !1;
            var i = this;
            i._getPageThumbnail(
              e.configuration.pageThumbnailSize,
              e.configuration.pageThumbnailSize,
              function (e) {
                e &&
                  ((i._cachedImage = e),
                  setTimeout(function () {
                    i.trigger(new E.AfterThumbnailUpdate(i, i._cachedImage));
                  }));
              },
            );
          }
        }),
        (E.prototype._getPageThumbnail = function (e, t, i) {
          var n = this.getGeometryBBox();
          if (!n || n.isEmpty()) return null;
          var r = n.getWidth(),
            o = n.getHeight() / r,
            a = e,
            l = a * o;
          l > t && (a = (l = t) / o);
          var h = a / n.getWidth(),
            A = l / n.getHeight(),
            c = 1 * Math.min(h, A),
            p = Math.round(1 * a),
            u = Math.round(1 * l),
            d = new y();
          d.resize(p, u);
          var g = new b();
          g.canvas = d;
          var f = new v();
          if (
            ((f.paintMode = v.PaintMode.Full),
            (f.paintSharp = !1),
            (f.annotations = !1),
            (g.configuration = f),
            (f.clipArea = n.scaled(1, 1)),
            (f.clipDirty = !1),
            (f.enableFxCache = !1),
            (f.defaultEffectDetailLevel = 1),
            d.prepare(),
            d.setOrigin(new s(n.getX() * c, n.getY() * c)),
            d.setScale(c),
            C.isRenderPhase())
          ) {
            var m = this;
            C.tryRunRendering(
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
        (e.exports = E));
    }