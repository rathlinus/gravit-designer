/**
 * chunk.vendor.js Module #1081
 * Type: class
 * Name: GEditorWidget
 */

function (e, t, i) {
      var n = i(50),
        r = i(2),
        o = i(77),
        a = i(363),
        s = i(64),
        l = i(150),
        h = i(777),
        A = i(133),
        c = i(24),
        p = i(153),
        u = i(0),
        d = i(6),
        g = i(22),
        f = i(7),
        m = i(82),
        y = i(544),
        _ = i(36),
        v = i(5),
        b = i(83),
        C = i(553),
        w = i(14),
        E = i(210),
        B = i(540),
        x = i(11),
        P = i(17),
        S = i(138),
        T = i(216),
        I = i(9),
        F = i(47),
        R = i(207);

      function D(e) {
        var t = Array.prototype.slice.call(arguments);
        ((t[0] = e.getScene()),
          (this._editor = e),
          (this._viewConfiguration = new h()),
          (this._viewConfiguration.enableFxCache = !a.WORKER_RENDERING_ENABLED),
          a.apply(this, t),
          (this._htmlElement.className += " g-editor-widget"));
        var i = this._editor.getGuides();
        i &&
          (i.setView(this),
          i.addEventListener(
            E.InvalidationRequestEvent,
            this._editorHelpersInvalidationRequest,
            this,
          ));
        var n = this._editor.getDistanceHelper();
        (n &&
          (n.setView(this),
          n.addEventListener(
            B.InvalidationRequestEvent,
            this._editorHelpersInvalidationRequest,
            this,
          )),
          (this._dragEventerEvent = function (e) {
            (e.preventDefault(), e.stopPropagation());
          }.bind(this)),
          (this._dragOverEvent = function (e) {
            (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = "move"));
          }.bind(this)),
          (this._dropEvent = function (e) {
            return (
              e.preventDefault(),
              e.stopPropagation(),
              this.handleDropEvent(e),
              !1
            );
          }.bind(this)),
          this._inputHtmlElement.addEventListener(
            "dragenter",
            this._dragEventerEvent,
          ),
          this._inputHtmlElement.addEventListener(
            "dragover",
            this._dragOverEvent,
          ),
          this._inputHtmlElement.addEventListener("drop", this._dropEvent),
          this._editor.addEventListener(
            m.InvalidationRequestEvent,
            this._editorInvalidationRequest,
            this,
            void 0,
            void 0,
            !0,
          ),
          this._scene.addEventListener(
            r.AfterPropertiesChangeEvent,
            this._afterPropertiesChanged,
            this,
            void 0,
            void 0,
            !0,
          ),
          this._scene
            .getWorkspace()
            .getToolManager()
            .addEventListener(
              C.InvalidationRequestEvent,
              this._toolInvalidationRequest,
              this,
            ));
      }
      (u.inherit(D, a),
        (D.prototype._editor = null),
        (D.prototype._guideLineDiv = null),
        (D.prototype._guideLineViewPoint = null),
        (D.prototype._guideLinePosition = null),
        (D.prototype._guideLineInfo = null),
        (D.prototype._originCrosshairV = null),
        (D.prototype._originCrosshairH = null),
        (D.prototype._originPosition = null),
        (D.prototype._lastFocus = null),
        (D.prototype._inputListener = null),
        (D.prototype._inputListenerCompStart = null),
        (D.prototype._inputListenerCompEnd = null),
        (D.prototype._inputListenerCompUpd = null),
        (D.prototype.setRulers = function (e) {
          e && !this._horizontalRuler
            ? (a.prototype.setRulers.call(this, e),
              this._horizontalRuler.addEventListener(
                o.Down,
                this._rulerDownLister,
                this,
              ),
              this._verticalRuler.addEventListener(
                o.Down,
                this._rulerDownLister,
                this,
              ),
              this._unitRuler.addEventListener(
                o.Down,
                this._cornerDownListener,
                this,
              ),
              this._unitRuler.addEventListener(
                o.DblClick,
                this._cornerDblClickListener,
                this,
              ))
            : !e &&
              this._horizontalRuler &&
              (this._horizontalRuler.removeEventListener(
                o.Down,
                this._rulerDownLister,
                this,
              ),
              this._verticalRuler.removeEventListener(
                o.Down,
                this._rulerDownLister,
                this,
              ),
              this._unitRuler.removeEventListener(
                o.Down,
                this._cornerDownListener,
                this,
              ),
              this._unitRuler.removeEventListener(
                o.DblClick,
                this._cornerDblClickListener,
                this,
              ),
              a.prototype.setRulers.call(this, e));
        }),
        (D.prototype.getHtmlElement = function () {
          return this._htmlElement;
        }),
        (D.prototype.startMoveGuideLine = function (e, t) {
          this._guideLineInfo = {
            isVertical: e,
            guideIndex: t,
          };
          var i = e ? "vgl" : "hgl",
            n = this._editor.getScene().getProperty(i),
            r = t >= 0 ? n[t] : 0,
            o = new v(r, r),
            a = this.getWorldTransform().mapPoint(o);
          ((this._guideLinePosition = o),
            (this._guideLineDiv = document.createElement("div")),
            (this._guideLineDiv.style.position = "absolute"),
            (this._guideLineDiv.style.backgroundColor = c.guideLineHintColor),
            t < 0 && (this._guideLineDiv.style.visibility = "hidden"),
            this._htmlElement.insertBefore(
              this._guideLineDiv,
              this._inlineHintDiv,
            ),
            e
              ? ((this._guideLineDiv.style.top = "0px"),
                (this._guideLineDiv.style.bottom = "0px"),
                (this._guideLineDiv.style.width = "1px"),
                (this._guideLineDiv.style.left = a.getX() + "px"))
              : ((this._guideLineDiv.style.left = "0px"),
                (this._guideLineDiv.style.right = "0px"),
                (this._guideLineDiv.style.height = "1px"),
                (this._guideLineDiv.style.top = a.getY() + "px")),
            s.addEventListener(l, this._guideMoveModifierChangeListener, this));
        }),
        (D.prototype.moveGuideLine = function (e) {
          if (this._guideLineInfo) {
            this._guideLineViewPoint = e;
            var t = this.getViewTransform().mapPoint(e);
            (this._editor.getGuides().beginMap(),
              (t = this._editor.getGuides().mapPoint(t, null, [p.ID, y.ID])),
              this._editor.getGuides().finishMap(),
              (e = this.getWorldTransform().mapPoint(t)),
              (this._guideLinePosition = t));
            var i = w.getScreenDPI();
            if (this._guideLineInfo.isVertical) {
              this._guideLineDiv.style.left = e.getX() / i + "px";
              var n = this._horizontalRuler
                ? this._horizontalRuler.getY() +
                  this._horizontalRuler.getHeight()
                : this._viewOffset[1];
              this.updateInlineHint(
                this._editor.getScene().pointToStringX(t.getX(), 1) +
                  this._editor.getScene().getProperty("ut"),
                new v(e.getX(), i * n + 3),
                d.Side.TOP_CENTER,
              );
            } else {
              this._guideLineDiv.style.top = e.getY() / i + "px";
              var r = this._verticalRuler
                ? this._verticalRuler.getX() + this._verticalRuler.getWidth()
                : this._viewOffset[0];
              this.updateInlineHint(
                this._editor.getScene().pointToStringY(t.getY(), 1) +
                  this._editor.getScene().getProperty("ut"),
                new v(i * r + 3, e.getY()),
                d.Side.LEFT_CENTER,
              );
            }
            this._guideLineDiv.style.visibility = "";
          }
        }),
        (D.prototype.finishMoveGuideLine = function () {
          if (this._guideLineInfo) {
            (s.removeEventListener(
              l,
              this._guideMoveModifierChangeListener,
              this,
            ),
              this._editor.getGuides().invalidate());
            var e = this._guideLineInfo.isVertical,
              t = this._guideLineInfo.guideIndex,
              i = e ? "vgl" : "hgl",
              n = this._editor.getScene().getProperty(i);
            n = n ? n.slice() : [];
            var r = this._verticalRuler
                ? this._verticalRuler.getX() + this._verticalRuler.getWidth()
                : this._viewOffset[0] + c.pickDistance,
              o = this._horizontalRuler
                ? this._horizontalRuler.getY() +
                  this._horizontalRuler.getHeight()
                : this._viewOffset[1] + c.pickDistance,
              a = this._verticalRuler ? this._verticalRuler.getX() : -100,
              h = this._horizontalRuler ? this._horizontalRuler.getY() : -100;
            if (
              (!e &&
                this._guideLineDiv.offsetTop >= h &&
                this._guideLineDiv.offsetTop <= o) ||
              (e &&
                this._guideLineDiv.offsetLeft >= a &&
                this._guideLineDiv.offsetLeft <= r)
            ) {
              if (t >= 0) {
                (n.splice(t, 1), this._editor.beginTransaction());
                try {
                  this._editor.getScene().setProperties([i], [n]);
                } finally {
                  this._editor.commitTransaction(
                    I.get(new F("GEditorWidget", "action.remove-guide-line")),
                  );
                }
              }
            } else {
              var A = e
                ? this._guideLinePosition.getX()
                : this._guideLinePosition.getY();
              if (t < 0 || (t >= 0 && n[t] !== A)) {
                (t >= 0 ? (n[t] = A) : n.push(A),
                  this._editor.beginTransaction());
                try {
                  this._editor.getScene().setProperties([i], [n]);
                } finally {
                  this._editor.commitTransaction(
                    t >= 0
                      ? I.get(
                          new F("GEditorWidget", "action.change-guide-line"),
                        )
                      : I.get(new F("GEditorWidget", "action.add-guide-line")),
                  );
                }
              }
            }
            (this._htmlElement.removeChild(this._guideLineDiv),
              (this._guideLineDiv = null),
              (this._guideLinePosition = null),
              (this._guideLineViewPoint = null),
              (this._guideLineInfo = null),
              this.updateInlineHint(null));
          }
        }),
        (D.prototype.getEditor = function () {
          return this._editor;
        }),
        (D.prototype.hasFocus = function () {
          return (
            !(
              !this._fakeTextBox || document.activeElement !== this._fakeTextBox
            ) || a.prototype.hasFocus.call(this)
          );
        }),
        (D.prototype.focus = function () {
          return "none" !== this._fakeTextDiv.style.display
            ? (this._fakeTextBox.focus(), !0)
            : a.prototype.focus.call(this);
        }),
        (D.prototype.isCapturingInput = function () {
          return !!this._inputListener;
        }),
        (D.prototype.startCaptureInput = function (e, t, i, n) {
          if (!this.isCapturingInput()) {
            if (this._inputRecorder) return;
            ((this._lastFocus = document.activeElement),
              (this._fakeTextDiv.style.display = ""),
              (this._fakeTextBox.value = ""),
              this._fakeTextBox.addEventListener("input", e),
              this._fakeTextBox.addEventListener("keydown", e),
              this._fakeTextBox.addEventListener(
                "paste",
                this._preventListener,
              ),
              this._fakeTextBox.addEventListener("copy", this._preventListener),
              this._fakeTextBox.addEventListener("cut", this._preventListener),
              t && this._fakeTextBox.addEventListener("compositionstart", t),
              i && this._fakeTextBox.addEventListener("compositionend", i),
              n && this._fakeTextBox.addEventListener("compositionupdate", n),
              this._fakeTextBox.focus(),
              (this._inputListener = e),
              (this._inputListenerCompStart = t),
              (this._inputListenerCompEnd = i),
              (this._inputListenerCompUpd = n));
          }
        }),
        (D.prototype.endCaptureInput = function () {
          this.isCapturingInput() &&
            ((document.activeElement = this._lastFocus),
            (this._fakeTextDiv.style.display = "none"),
            this._fakeTextBox.removeEventListener("input", this._inputListener),
            this._fakeTextBox.removeEventListener(
              "keydown",
              this._inputListener,
            ),
            this._fakeTextBox.removeEventListener(
              "keypress",
              this._inputListener,
            ),
            this._fakeTextBox.removeEventListener(
              "paste",
              this._preventListener,
            ),
            this._fakeTextBox.removeEventListener(
              "copy",
              this._preventListener,
            ),
            this._fakeTextBox.removeEventListener("cut", this._preventListener),
            this._inputListenerCompEnd &&
              this._fakeTextBox.removeEventListener(
                "compositionend",
                this._inputListenerCompEnd,
              ),
            this._inputListenerCompStart &&
              this._fakeTextBox.removeEventListener(
                "compositionstart",
                this._inputListenerCompStart,
              ),
            this._inputListenerCompUpd &&
              this._fakeTextBox.removeEventListener(
                "compositionupdate",
                this._inputListenerCompUpd,
              ),
            (this._lastFocus = null),
            (this._inputListener = null));
        }),
        (D.prototype._preventListener = function (e) {
          e.preventDefault();
        }),
        (D.prototype.updateInputBox = function (e, t) {
          if (!isNaN(e) && !isNaN(t)) {
            var i = new v(e, t),
              n = this.getWorldTransform().mapPoint(i),
              r = w.getScreenDPI();
            ((this._fakeTextDiv.style.left = n.getX() / r + "px"),
              (this._fakeTextDiv.style.top = n.getY() / r + "px"));
          }
        }),
        (D.prototype.resetInputBoxCursor = function () {
          this._fakeTextBox &&
            "function" == typeof this._fakeTextBox.setSelectionRange &&
            this._fakeTextBox.selectionStart !==
              this._fakeTextBox.value.length &&
            this._fakeTextBox.setSelectionRange(
              this._fakeTextBox.value.length,
              this._fakeTextBox.value.length,
            );
        }),
        (D.prototype.resetInputBoxContent = function () {
          this._fakeTextBox && (this._fakeTextBox.value = "");
        }),
        (D.prototype.release = function () {
          (this._inputHtmlElement.removeEventListener(
            "dragenter",
            this._dragEventerEvent,
          ),
            this._inputHtmlElement.removeEventListener(
              "dragover",
              this._dragOverEvent,
            ),
            this._inputHtmlElement.removeEventListener("drop", this._dropEvent),
            this._editor.removeEventListener(
              m.InvalidationRequestEvent,
              this._editorInvalidationRequest,
              this,
            ),
            this._editor
              .getGuides()
              .removeEventListener(
                E.InvalidationRequestEvent,
                this._editorHelpersInvalidationRequest,
                this,
              ),
            this._editor
              .getDistanceHelper()
              .removeEventListener(
                B.InvalidationRequestEvent,
                this._editorHelpersInvalidationRequest,
                this,
              ),
            this._scene.removeEventListener(
              r.AfterPropertiesChangeEvent,
              this._afterPropertiesChanged,
              this,
            ),
            this._scene
              .getWorkspace()
              .getToolManager()
              .removeEventListener(
                C.InvalidationRequestEvent,
                this._toolInvalidationRequest,
                this,
              ),
            a.prototype.release.call(this));
        }),
        (D.prototype._afterPropertiesChanged = function (e) {
          !e.temporary &&
            ((e.node === this._scene &&
              x.containsOneOf(e.properties, [
                "w",
                "h",
                "gx",
                "gy",
                "gm",
                "ga1",
                "ga2",
                "vgl",
                "hgl",
                "gaw",
                "gah",
              ])) ||
              (e.node instanceof b &&
                x.containsOneOf(
                  e.properties,
                  this._viewConfiguration.pageDecoration.margin,
                ))) &&
            this.invalidate();
        }),
        (D.prototype._editorHelpersInvalidationRequest = function (e) {
          e.area && this.invalidate(this.getWorldTransform().mapRect(e.area));
        }),
        (D.prototype._editorInvalidationRequest = function (e) {
          if (e.editor) {
            var t;
            if (
              e.args &&
              e.args.pageTransform &&
              this.getViewConfiguration().multiPageView
            ) {
              var i = this.getWorldTransform(this.getScene()).preMultiplied(
                e.args.pageTransform,
              );
              t = e.editor.invalidate(i, null);
            } else if (this.getViewConfiguration().multiPageView)
              t = e.editor.invalidate(
                this.getWorldTransform(e.getEditorPage() || this.getScene()),
                e.args,
              );
            else {
              var n = this.getScene(),
                r = e.getEditorPage(),
                o = n ? n.getActivePage() : null;
              (r && r !== n && r !== o) ||
                (t = e.editor.invalidate(
                  this.getWorldTransform(r || n),
                  e.args,
                ));
            }
            t && this.invalidate(t);
          }
        }),
        (D.prototype._toolInvalidationRequest = function (e) {
          this.invalidate(e.area);
        }),
        (D.prototype._rulerDownLister = function (e) {
          var t = e.sender === this._verticalRuler;
          if (!(t && e.client.getX() <= 2 * w.getScreenDPI())) {
            (e.stopPropagation(), this.startMoveGuideLine(t, -1));
            var i = function (e) {
                this.moveGuideLine(e.client);
              },
              n = function (e) {
                (this.removeEventListener(o.Move, i, this),
                  this.removeEventListener(o.Release, n, this),
                  this.finishMoveGuideLine());
              };
            (this.addEventListener(o.Move, i, this),
              this.addEventListener(o.Release, n, this));
          }
        }),
        (D.prototype._guideMoveModifierChangeListener = function (e) {
          e.changed.metaKey && this.moveGuideLine(this._guideLineViewPoint);
        }),
        // Custom ruler origin (Feature 3): drag from the corner square
        // between the two rulers (this._unitRuler, wired in setRulers above)
        // to set a new (0,0); double-click the same corner to reset. This is
        // new code -- that corner had no listeners before this feature.
        (D.prototype._cornerDownListener = function (e) {
          (e.stopPropagation(), this._startMoveRulerOrigin());
          var t = function (e) {
              this._moveRulerOrigin(e.client);
            },
            i = function (e) {
              (this.removeEventListener(o.Move, t, this),
                this.removeEventListener(o.Release, i, this),
                this._finishMoveRulerOrigin());
            };
          (this.addEventListener(o.Move, t, this),
            this.addEventListener(o.Release, i, this));
        }),
        (D.prototype._startMoveRulerOrigin = function () {
          // Same drag-ghost div pattern startMoveGuideLine uses for a single
          // guide, just two of them at once (a full crosshair, since an
          // origin is a point, not a single-axis line).
          ((this._originCrosshairV = document.createElement("div")),
            (this._originCrosshairV.style.position = "absolute"),
            (this._originCrosshairV.style.top = "0px"),
            (this._originCrosshairV.style.bottom = "0px"),
            (this._originCrosshairV.style.width = "1px"),
            (this._originCrosshairV.style.backgroundColor =
              c.guideLineHintColor),
            (this._originCrosshairH = document.createElement("div")),
            (this._originCrosshairH.style.position = "absolute"),
            (this._originCrosshairH.style.left = "0px"),
            (this._originCrosshairH.style.right = "0px"),
            (this._originCrosshairH.style.height = "1px"),
            (this._originCrosshairH.style.backgroundColor =
              c.guideLineHintColor),
            this._htmlElement.insertBefore(
              this._originCrosshairV,
              this._inlineHintDiv,
            ),
            this._htmlElement.insertBefore(
              this._originCrosshairH,
              this._inlineHintDiv,
            ));
        }),
        (D.prototype._moveRulerOrigin = function (e) {
          if (this._originCrosshairV && this._originCrosshairH) {
            var t = this.getViewTransform().mapPoint(e);
            // Verbatim the same guide-snapping call moveGuideLine makes --
            // snaps the crosshair to nearby hgl/vgl guides on both axes at
            // once, no new snapping math needed.
            (this._editor.getGuides().beginMap(),
              (t = this._editor.getGuides().mapPoint(t, null, [p.ID, y.ID])),
              this._editor.getGuides().finishMap(),
              (this._originPosition = t));
            var i = this.getWorldTransform().mapPoint(t),
              n = w.getScreenDPI();
            ((this._originCrosshairV.style.left = i.getX() / n + "px"),
              (this._originCrosshairH.style.top = i.getY() / n + "px"));
            var r = this._editor.getScene();
            this.updateInlineHint(
              r.pointToString(t.getX(), 1) +
                r.getProperty("ut") +
                ", " +
                r.pointToString(t.getY(), 1) +
                r.getProperty("ut"),
              new v(i.getX() + 3, i.getY() + 3),
              d.Side.TOP_LEFT,
            );
          }
        }),
        (D.prototype._finishMoveRulerOrigin = function () {
          if (this._originCrosshairV && this._originCrosshairH) {
            var e = this._originPosition,
              t = this._editor.getScene();
            if (
              e &&
              (e.getX() !== t.getRulerOriginX() ||
                e.getY() !== t.getRulerOriginY())
            ) {
              this._editor.beginTransaction();
              try {
                t.setProperties(["rox", "roy"], [e.getX(), e.getY()]);
              } finally {
                this._editor.commitTransaction("Change ruler origin");
              }
            }
            (this._htmlElement.removeChild(this._originCrosshairV),
              this._htmlElement.removeChild(this._originCrosshairH),
              (this._originCrosshairV = null),
              (this._originCrosshairH = null),
              (this._originPosition = null),
              this.updateInlineHint(null));
          }
        }),
        (D.prototype._cornerDblClickListener = function (e) {
          e.stopPropagation();
          var t = this._editor.getScene();
          if (
            null !== t.getProperty("rox") ||
            null !== t.getProperty("roy")
          ) {
            this._editor.beginTransaction();
            try {
              t.setProperties(["rox", "roy"], [null, null]);
            } finally {
              this._editor.commitTransaction("Reset ruler origin");
            }
          }
        }),
        (D.prototype._paintElement = function (e, t, i, n) {
          if (
            ((e = e || this.getWorldTransform()),
            (t = t || this.getViewTransform()),
            this._viewConfiguration.pageDecoration.chessboard ||
              (this._viewConfiguration.pageDecoration.shadow > 0 &&
                this._scene.isFixedSized()))
          )
            if (this._viewConfiguration.multiPageView) {
              var r = this;
              this._scene.iteratePages(function (t) {
                r._renderPageBackground.call(r, t, e);
              });
            } else this._renderPageBackground(this._scene.getActivePage(), e);
          a.prototype._paintElement.call(this, e, t, i, n);
          var o = _.getEditor(this._scene);
          if (
            (o && o.paint(e, this._elementPaintContext),
            this._scene
              .getWorkspace()
              .getToolManager()
              .paint(this._elementPaintContext),
            this._viewConfiguration.pageDecoration.margin &&
              this._scene.isFixedSized())
          )
            if (this._viewConfiguration.multiPageView) {
              r = this;
              this._scene.iteratePages(function (t) {
                r._renderPageMargin.call(r, t, e);
              });
            } else this._renderPageMargin(this._scene.getActivePage(), e);
          var s = null;
          if (this._elementPaintContext.dirtyMatcher) {
            var l = t;
            (this._elementPaintContext.dirtyMatcher.transform(t),
              l && (s = l.inverted()));
          }
          this._editor.getGuides().paint(e, this._elementPaintContext);
          var h = this._editor.getDistanceHelper();
          (h && h.isActivated() && h.paint(e, this._elementPaintContext),
            s && this._elementPaintContext.dirtyMatcher.transform(s));
        }),
        (D.prototype._updateViewTransforms = function (e, t) {
          a.prototype._updateViewTransforms.apply(this, arguments);
          var i = this._viewConfiguration.pageDecoration;
          if (i.shadow > 0) {
            var n = i.shadowOffsetX || 0,
              r = i.shadowOffsetY || 0,
              o = 1 + 2 * i.shadow,
              s = this.getViewTransform(),
              l = s.getScaleFactor(),
              h = o + Math.max(0, -n),
              A = o + Math.max(0, -r),
              c = o + Math.max(0, n),
              p = o + Math.max(0, r);
            ((h *= l),
              (A *= l),
              (c *= l),
              (p *= l),
              this._scene.setShadowExpandArea(h, A, c, p));
          } else this._scene.setShadowExpandArea(null);
          this._editor.updateInlineEditorForView(this);
        }));
      var k = null,
        G = !1;
      ((D.prototype._renderPageBackground = function (e, t) {
        var i = this._viewConfiguration.pageDecoration,
          n = e.getPosition(this._viewConfiguration.multiPageView),
          r = t.preMultiplied(new f(1, 0, 0, 1, n.getX(), n.getY())),
          o = e.isFixedSized() ? e.getGeometryBBox() : e.getPaintBBox(null, !0);
        if (o) {
          var a = r.mapRect(o),
            s = a.getX(),
            l = a.getY(),
            h = a.getWidth(),
            c = a.getHeight(),
            p = this._elementPaintContext.dirtyMatcher,
            u =
              "undefined" != typeof navigator &&
              navigator &&
              0 == navigator.userAgent.indexOf("Mozilla") &&
              0 == navigator.platform.indexOf("Win") &&
              navigator.userAgent.indexOf("Edge") < 0 &&
              navigator.userAgent.indexOf("Chrome") < 0 &&
              navigator.userAgent.indexOf("Safari") < 0;
          u &&
            i.shadow > 0 &&
            !G &&
            ((G = !0),
            console.warn(
              "Due to browser bug (Firefox), shadow under canvas isn't displayed.",
            ));
          var g =
              i.shadow > 0 &&
              !u &&
              !(R.pagesCanOverlap && this._viewConfiguration.multiPageView),
            m = i.shadowOffsetX || 0,
            y = i.shadowOffsetY || 0;
          if (p) {
            var _ = 1 + 2 * i.shadow,
              v = a.expanded(
                _ + Math.max(0, -m),
                _ + Math.max(0, -y),
                _ + Math.max(0, m),
                _ + Math.max(0, y),
              );
            if (!p.isDirty(v)) return;
            if (g) {
              g = !1;
              var b = v.subtracted(a, !0);
              b instanceof d && (b = [b]);
              for (var C = 0; C < b.length; C++) {
                var E = b[C];
                if (p.isDirty(E)) {
                  g = !0;
                  break;
                }
              }
            }
            if (
              !g &&
              this._viewConfiguration.paintMode !== A.PaintMode.Outline &&
              !this._sceneCanvas.isMasked() &&
              1 == e.getProperty("bop")
            ) {
              var B = e.getProperty("bck");
              if (B instanceof P) return;
              if (
                B instanceof S &&
                B.getStops().every(function (e) {
                  return 1 == e.opacity;
                })
              )
                return;
            }
          }
          var x = i.background || "white";
          i.chessboard &&
            (k || (k = w.createChessboard(8, "white", "rgb(205, 205, 205)")),
            (x = this._elementCanvas.createTexture(k)));
          try {
            if (
              (g &&
                ((this._elementCanvas._canvasContext.shadowColor =
                  i.shadowBackground || "rgba(0,0,0,0.5)"),
                (this._elementCanvas._canvasContext.shadowBlur = i.shadow),
                (this._elementCanvas._canvasContext.shadowOffsetX = m),
                (this._elementCanvas._canvasContext.shadowOffsetY = y)),
              p && u)
            ) {
              var T = new d(
                  Math.ceil(s),
                  Math.ceil(l),
                  Math.floor(h),
                  Math.floor(c),
                ),
                I = p.getNonIntersectingDirtyRectangles();
              for (C = 0; C < I.length; ++C) {
                var F = I[C];
                ((F = F.intersected(T)),
                  this._elementCanvas.fillRect(
                    F.getX(),
                    F.getY(),
                    F.getWidth(),
                    F.getHeight(),
                    x,
                  ));
              }
            } else
              this._elementCanvas.fillRect(
                Math.ceil(s),
                Math.ceil(l),
                Math.floor(h),
                Math.floor(c),
                x,
              );
          } finally {
            g &&
              ((this._elementCanvas._canvasContext.shadowBlur = 0),
              (this._elementCanvas._canvasContext.shadowColor = "transparent"));
          }
        }
      }),
        (D.prototype._renderPageMargin = function (e, t) {
          var i = e.getPosition(this._viewConfiguration.multiPageView),
            n = t.preMultiplied(new f(1, 0, 0, 1, i.getX(), i.getY())),
            r = e.getGeometryBBox();
          if (r) {
            var o = 0;
            c.outlineWidth % 2 != 0 && (o = 0.5);
            var a = r.expanded(
                -e.getProperty("ml"),
                -e.getProperty("mt"),
                -e.getProperty("mr"),
                -e.getProperty("mb"),
              ),
              s = n.mapRect(a).translated(o, o).toAlignedRect(),
              l = this._elementPaintContext.dirtyMatcher,
              h = Math.ceil(c.outlineWidth / 2);
            if ((!l || l.isDirty(s.expanded(h, h, h, h))) && !d.equals(r, a)) {
              var A = s.getX(),
                p = s.getY(),
                u = s.getWidth(),
                g = s.getHeight();
              this._elementPaintContext.canvas.strokeRect(
                A,
                p,
                u,
                g,
                c.outlineWidth,
                new P([255, 0, 255]),
              );
            }
          }
        }),
        (D.prototype.handleDropEvent = function (e) {
          var t = this._convertClientPositionFromMousePosition(e);
          this._handleDrop(t, e.dataTransfer);
        }),
        (D.prototype._handleSymbolDrop = function (e) {
          var t = this._scene.getSymbols();
          if (t) {
            for (var i = !1, n = 0; n < t.length && !i; n++)
              t[n].getMultireferenceId() !== e.getMultireferenceId() ||
                t[n].getParent() ||
                ((e = t[n]), (i = !0));
            if (!i) {
              var r = e.getProperty("masterMultiRef");
              for (n = 0; n < t.length && !i; n++)
                t[n].getProperty("masterMultiRef") === r && (i = !0);
              i
                ? console.log("inserting:found")
                : ((e._master = !0),
                  (e.getProperty("masterRef") === e.getReferenceId() &&
                    e.getProperty("masterMultiRef") ===
                      e.getMultireferenceId()) ||
                    console.log("inserting: making non master a master"),
                  e.setProperties(
                    ["masterRef", "masterMultiRef"],
                    [e.getReferenceId(), e.getMultireferenceId()],
                  ));
            }
          }
          return e;
        }),
        (D.prototype._handleDrop = function (e, t) {
          var i = this.getViewTransform(this._scene).mapPoint(e),
            o = this.getViewTransform(this._scene.getActivePage()).mapPoint(e);
          if (t.files && t.files.length > 0) {
            if (this._editor.hasEventListeners(m.FileDropEvent))
              for (var a = 0; a < t.files.length; ++a)
                this._editor.trigger(new m.FileDropEvent(t.files[a], o));
          } else if (t.types && t.types.length > 0) {
            var s = [],
              l = !1;
            for (a = 0; a < t.types.length; ++a) {
              var h = t.types[a],
                A = t.getData(h);
              if (A) {
                var p = null,
                  u = null;
                switch (h) {
                  case n.MIME_TYPE:
                    ((p = _.DropType.Pattern), (u = n.deserialize(A)));
                    break;
                  case r.MIME_TYPE:
                    ((p = _.DropType.Node),
                      (u = r.deserialize(A)) instanceof T &&
                        (u = this._handleSymbolDrop(u)));
                    break;
                  case _.DROP_MIME_TYPE_FONT_FAMILY:
                    ((p = _.DropType.FontFamily), (u = A));
                    break;
                  case _.DROP_MIME_TYPE_CUSTOM:
                    this._editor.hasEventListeners(m.CustomDropEvent) &&
                      this._editor.trigger(new m.CustomDropEvent(A, o));
                    break;
                  case "text/plain":
                    ((p = _.DropType.Text), (u = A));
                    break;
                  default:
                    continue;
                }
                if (
                  (s.push({
                    type: p,
                    source: u,
                  }),
                  null !== p)
                ) {
                  var d = this._scene.hitTest(
                    e,
                    this.getWorldTransform(this._scene),
                    null,
                    !0,
                    -1,
                    c.pickDistance,
                    !0,
                    this._dropHitFilter,
                    !1,
                    !1,
                    this._viewConfiguration.multiPageView,
                  );
                  if (d && d.length > 0)
                    for (var y = 0; y < d.length; ++y) {
                      var v = d[y],
                        C = _.createEditor(v.element);
                      if (C) {
                        for (var w = null, E = v.element; E; ) {
                          if (E instanceof b) {
                            w = this.getViewTransform(E).mapPoint(e);
                            break;
                          }
                          E = E.getParent();
                        }
                        if (w && C.acceptDrop(w, p, u, v.data)) {
                          l = !0;
                          break;
                        }
                      }
                    }
                }
              }
            }
            if (!l)
              for (a = 0; a < s.length; ++a) {
                ((p = s[a].type), (u = s[a].source));
                if (p === _.DropType.Node && u instanceof g) {
                  if (u instanceof T) {
                    var B = u.getGeometryBBox();
                    if (B) {
                      var x = B.getX(),
                        P = B.getY();
                      u.transform(
                        new f(1, 0, 0, 1, -x + o.getX(), -P + o.getY()),
                        !0,
                      );
                    }
                  } else u.transform(new f(1, 0, 0, 1, o.getX(), o.getY()), !0);
                  this._editor.updateByMousePosition(
                    i,
                    null,
                    !1,
                    this._viewConfiguration,
                  );
                  var S = [],
                    R = [],
                    D = u.accept(
                      function (e) {
                        return (
                          !!(e instanceof T && e.isMaster()) &&
                          (S.push(e.getMultireferenceId()), R.push(e), !0)
                        );
                      },
                      !1,
                      !0,
                    );
                  (D && this._editor.beginTransaction(),
                    this._editor.insertElements([u], !0, D, !0),
                    D &&
                      (this._scene.acceptChildren(
                        function (e) {
                          if (e instanceof T && !e.isMaster()) {
                            var t = S.indexOf(e.getProperty("masterMultiRef"));
                            if (t >= 0) {
                              var i = R[t];
                              (this._scene.link(i, e),
                                e.setProperty("masterRef", i.getReferenceId()));
                            }
                          }
                        }.bind(this),
                      ),
                      this._editor.commitTransaction(
                        I.get(
                          new F("GEditorWidget", "action.insert-master-symbol"),
                        ),
                      )),
                    (l = !0));
                }
              }
          }
        }),
        (D.prototype._dropHitFilter = function (e) {
          return !e.hasFlag(g.Flag.FullLocked);
        }),
        (D.prototype.toString = function () {
          return "[Object GEditorWidget]";
        }),
        (e.exports = D));
    }