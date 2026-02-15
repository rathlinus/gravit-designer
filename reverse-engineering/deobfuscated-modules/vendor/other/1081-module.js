/**
 * Module 1081
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
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(77) /* Wheel */, a = require(363) /* TransformEvent */, s = require(64) /* GPlatform */, l = require(150) /* GModifiersChangedEvent */, h = require(777) /* GEditorPaintConfiguration */, A = require(133) /* GScenePaintConfiguration */, c = require(24) /* GEditorOptions */, p = require(153) /* GBBoxGuide */, u = require(0) /* GObject */, d = require(6) /* GRect */, g = require(22) /* GElement */, f = require(7) /* GTransform */, m = require(82) /* SavePoint */, y = require(544) /* GFullPixelsGuide */, _ = require(36) /* PartsPropertyVals */, v = require(5) /* GPoint */, b = require(83) /* GPage */, C = require(553) /* ToolChangedEvent */, w = require(14) /* GPaintCanvas */, E = require(210) /* InvalidationRequestEvent */, B = require(540) /* InvalidationRequestEvent */, x = require(11) /* GUtil */, P = require(17) /* GRGBColor */, S = require(138) /* GGradient */, T = require(216) /* GSymbol */, I = require(9) /* GLocale */, F = require(47) /* GLocaleKey */, R = require(207) /* GSceneOptions */;
  function D(e) {
    var t = Array.prototype.slice.call(arguments);
    t[0] = e.getScene(), this._editor = e, this._viewConfiguration = new h(), this._viewConfiguration.enableFxCache = !a.WORKER_RENDERING_ENABLED, a.apply(this, t), this._htmlElement.className += " g-editor-widget";
    var i = this._editor.getGuides();
    i && (i.setView(this), i.addEventListener(E.InvalidationRequestEvent, this._editorHelpersInvalidationRequest, this));
    var n = this._editor.getDistanceHelper();
    n && (n.setView(this), n.addEventListener(B.InvalidationRequestEvent, this._editorHelpersInvalidationRequest, this)), this._dragEventerEvent = function (e) {
      e.preventDefault(), e.stopPropagation();
    }.bind(this), this._dragOverEvent = function (e) {
      e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move";
    }.bind(this), this._dropEvent = function (e) {
      return e.preventDefault(), e.stopPropagation(), this.handleDropEvent(e), false;
    }.bind(this), this._inputHtmlElement.addEventListener("dragenter", this._dragEventerEvent), this._inputHtmlElement.addEventListener("dragover", this._dragOverEvent), this._inputHtmlElement.addEventListener("drop", this._dropEvent), this._editor.addEventListener(m.InvalidationRequestEvent, this._editorInvalidationRequest, this, undefined, undefined, true), this._scene.addEventListener(r.AfterPropertiesChangeEvent, this._afterPropertiesChanged, this, undefined, undefined, true), this._scene.getWorkspace().getToolManager().addEventListener(C.InvalidationRequestEvent, this._toolInvalidationRequest, this);
  }
  u.inherit(D, a), D.prototype._editor = null, D.prototype._guideLineDiv = null, D.prototype._guideLineViewPoint = null, D.prototype._guideLinePosition = null, D.prototype._guideLineInfo = null, D.prototype._lastFocus = null, D.prototype._inputListener = null, D.prototype._inputListenerCompStart = null, D.prototype._inputListenerCompEnd = null, D.prototype._inputListenerCompUpd = null, D.prototype.setRulers = function (e) {
    e && !this._horizontalRuler ? (a.prototype.setRulers.call(this, e), this._horizontalRuler.addEventListener(o.Down, this._rulerDownLister, this), this._verticalRuler.addEventListener(o.Down, this._rulerDownLister, this)) : !e && this._horizontalRuler && (this._horizontalRuler.removeEventListener(o.Down, this._rulerDownLister, this), this._verticalRuler.removeEventListener(o.Down, this._rulerDownLister, this), a.prototype.setRulers.call(this, e));
  }, D.prototype.getHtmlElement = function () {
    return this._htmlElement;
  }, D.prototype.startMoveGuideLine = function (e, t) {
    this._guideLineInfo = {
      isVertical: e,
      guideIndex: t
    };
    var i = e ? "vgl" : "hgl", n = this._editor.getScene().getProperty(i), r = t >= 0 ? n[t] : 0, o = new v(r, r), a = this.getWorldTransform().mapPoint(o);
    this._guideLinePosition = o, this._guideLineDiv = document.createElement("div"), this._guideLineDiv.style.position = "absolute", this._guideLineDiv.style.backgroundColor = c.guideLineHintColor, t < 0 && (this._guideLineDiv.style.visibility = "hidden"), this._htmlElement.insertBefore(this._guideLineDiv, this._inlineHintDiv), e ? (this._guideLineDiv.style.top = "0px", this._guideLineDiv.style.bottom = "0px", this._guideLineDiv.style.width = "1px", this._guideLineDiv.style.left = a.getX() + "px") : (this._guideLineDiv.style.left = "0px", this._guideLineDiv.style.right = "0px", this._guideLineDiv.style.height = "1px", this._guideLineDiv.style.top = a.getY() + "px"), s.addEventListener(l, this._guideMoveModifierChangeListener, this);
  }, D.prototype.moveGuideLine = function (e) {
    if (this._guideLineInfo) {
      this._guideLineViewPoint = e;
      var module = this.getViewTransform().mapPoint(e);
      this._editor.getGuides().beginMap(), module = this._editor.getGuides().mapPoint(module, null, [
        p.ID,
        y.ID
      ]), this._editor.getGuides().finishMap(), e = this.getWorldTransform().mapPoint(module), this._guideLinePosition = module;
      var require = w.getScreenDPI();
      if (this._guideLineInfo.isVertical) {
        this._guideLineDiv.style.left = e.getX() / require + "px";
        var n = this._horizontalRuler ? this._horizontalRuler.getY() + this._horizontalRuler.getHeight() : this._viewOffset[1];
        this.updateInlineHint(this._editor.getScene().pointToString(module.getX(), 1) + this._editor.getScene().getProperty("ut"), new v(e.getX(), require * n + 3), d.Side.TOP_CENTER);
      } else {
        this._guideLineDiv.style.top = e.getY() / require + "px";
        var r = this._verticalRuler ? this._verticalRuler.getX() + this._verticalRuler.getWidth() : this._viewOffset[0];
        this.updateInlineHint(this._editor.getScene().pointToString(module.getY(), 1) + this._editor.getScene().getProperty("ut"), new v(require * r + 3, e.getY()), d.Side.LEFT_CENTER);
      }
      this._guideLineDiv.style.visibility = "";
    }
  }, D.prototype.finishMoveGuideLine = function () {
    if (this._guideLineInfo) {
      s.removeEventListener(l, this._guideMoveModifierChangeListener, this), this._editor.getGuides().invalidate();
      var exports = this._guideLineInfo.isVertical, module = this._guideLineInfo.guideIndex, require = exports ? "vgl" : "hgl", n = this._editor.getScene().getProperty(require);
      n = n ? n.slice() : [];
      var r = this._verticalRuler ? this._verticalRuler.getX() + this._verticalRuler.getWidth() : this._viewOffset[0] + c.pickDistance, o = this._horizontalRuler ? this._horizontalRuler.getY() + this._horizontalRuler.getHeight() : this._viewOffset[1] + c.pickDistance, a = this._verticalRuler ? this._verticalRuler.getX() : -100, h = this._horizontalRuler ? this._horizontalRuler.getY() : -100;
      if (!exports && this._guideLineDiv.offsetTop >= h && this._guideLineDiv.offsetTop <= o || exports && this._guideLineDiv.offsetLeft >= a && this._guideLineDiv.offsetLeft <= r) {
        if (module >= 0) {
          n.splice(module, 1), this._editor.beginTransaction();
          try {
            this._editor.getScene().setProperties([require], [n]);
          } finally {
            this._editor.commitTransaction(I.get(new F("GEditorWidget", "action.remove-guide-line")));
          }
        }
      } else {
        var A = exports ? this._guideLinePosition.getX() : this._guideLinePosition.getY();
        if (module < 0 || module >= 0 && n[module] !== A) {
          module >= 0 ? n[module] = A : n.push(A), this._editor.beginTransaction();
          try {
            this._editor.getScene().setProperties([require], [n]);
          } finally {
            this._editor.commitTransaction(module >= 0 ? I.get(new F("GEditorWidget", "action.change-guide-line")) : I.get(new F("GEditorWidget", "action.add-guide-line")));
          }
        }
      }
      this._htmlElement.removeChild(this._guideLineDiv), this._guideLineDiv = null, this._guideLinePosition = null, this._guideLineViewPoint = null, this._guideLineInfo = null, this.updateInlineHint(null);
    }
  }, D.prototype.getEditor = function () {
    return this._editor;
  }, D.prototype.hasFocus = function () {
    return !(!this._fakeTextBox || document.activeElement !== this._fakeTextBox) || a.prototype.hasFocus.call(this);
  }, D.prototype.focus = function () {
    return "none" !== this._fakeTextDiv.style.display ? (this._fakeTextBox.focus(), true) : a.prototype.focus.call(this);
  }, D.prototype.isCapturingInput = function () {
    return !!this._inputListener;
  }, D.prototype.startCaptureInput = function (e, t, i, n) {
    if (!this.isCapturingInput()) {
      if (this._inputRecorder)
        return;
      this._lastFocus = document.activeElement, this._fakeTextDiv.style.display = "", this._fakeTextBox.value = "", this._fakeTextBox.addEventListener("input", e), this._fakeTextBox.addEventListener("keydown", e), this._fakeTextBox.addEventListener("paste", this._preventListener), this._fakeTextBox.addEventListener("copy", this._preventListener), this._fakeTextBox.addEventListener("cut", this._preventListener), t && this._fakeTextBox.addEventListener("compositionstart", t), i && this._fakeTextBox.addEventListener("compositionend", i), n && this._fakeTextBox.addEventListener("compositionupdate", n), this._fakeTextBox.focus(), this._inputListener = e, this._inputListenerCompStart = t, this._inputListenerCompEnd = i, this._inputListenerCompUpd = n;
    }
  }, D.prototype.endCaptureInput = function () {
    this.isCapturingInput() && (document.activeElement = this._lastFocus, this._fakeTextDiv.style.display = "none", this._fakeTextBox.removeEventListener("input", this._inputListener), this._fakeTextBox.removeEventListener("keydown", this._inputListener), this._fakeTextBox.removeEventListener("keypress", this._inputListener), this._fakeTextBox.removeEventListener("paste", this._preventListener), this._fakeTextBox.removeEventListener("copy", this._preventListener), this._fakeTextBox.removeEventListener("cut", this._preventListener), this._inputListenerCompEnd && this._fakeTextBox.removeEventListener("compositionend", this._inputListenerCompEnd), this._inputListenerCompStart && this._fakeTextBox.removeEventListener("compositionstart", this._inputListenerCompStart), this._inputListenerCompUpd && this._fakeTextBox.removeEventListener("compositionupdate", this._inputListenerCompUpd), this._lastFocus = null, this._inputListener = null);
  }, D.prototype._preventListener = function (e) {
    e.preventDefault();
  }, D.prototype.updateInputBox = function (e, t) {
    if (!isNaN(e) && !isNaN(t)) {
      var require = new v(e, t), n = this.getWorldTransform().mapPoint(require), r = w.getScreenDPI();
      this._fakeTextDiv.style.left = n.getX() / r + "px", this._fakeTextDiv.style.top = n.getY() / r + "px";
    }
  }, D.prototype.resetInputBoxCursor = function () {
    this._fakeTextBox && "function" == typeof this._fakeTextBox.setSelectionRange && this._fakeTextBox.selectionStart !== this._fakeTextBox.value.length && this._fakeTextBox.setSelectionRange(this._fakeTextBox.value.length, this._fakeTextBox.value.length);
  }, D.prototype.resetInputBoxContent = function () {
    this._fakeTextBox && (this._fakeTextBox.value = "");
  }, D.prototype.release = function () {
    this._inputHtmlElement.removeEventListener("dragenter", this._dragEventerEvent), this._inputHtmlElement.removeEventListener("dragover", this._dragOverEvent), this._inputHtmlElement.removeEventListener("drop", this._dropEvent), this._editor.removeEventListener(m.InvalidationRequestEvent, this._editorInvalidationRequest, this), this._editor.getGuides().removeEventListener(E.InvalidationRequestEvent, this._editorHelpersInvalidationRequest, this), this._editor.getDistanceHelper().removeEventListener(B.InvalidationRequestEvent, this._editorHelpersInvalidationRequest, this), this._scene.removeEventListener(r.AfterPropertiesChangeEvent, this._afterPropertiesChanged, this), this._scene.getWorkspace().getToolManager().removeEventListener(C.InvalidationRequestEvent, this._toolInvalidationRequest, this), a.prototype.release.call(this);
  }, D.prototype._afterPropertiesChanged = function (e) {
    !e.temporary && (e.node === this._scene && x.containsOneOf(e.properties, [
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
      "gah"
    ]) || e.node instanceof b && x.containsOneOf(e.properties, this._viewConfiguration.pageDecoration.margin)) && this.invalidate();
  }, D.prototype._editorHelpersInvalidationRequest = function (e) {
    e.area && this.invalidate(this.getWorldTransform().mapRect(e.area));
  }, D.prototype._editorInvalidationRequest = function (e) {
    if (e.editor) {
      var module;
      if (e.args && e.args.pageTransform && this.getViewConfiguration().multiPageView) {
        var require = this.getWorldTransform(this.getScene()).preMultiplied(e.args.pageTransform);
        module = e.editor.invalidate(require, null);
      } else if (this.getViewConfiguration().multiPageView)
        module = e.editor.invalidate(this.getWorldTransform(e.getEditorPage() || this.getScene()), e.args);
      else {
        var n = this.getScene(), r = e.getEditorPage(), o = n ? n.getActivePage() : null;
        r && r !== n && r !== o || (module = e.editor.invalidate(this.getWorldTransform(r || n), e.args));
      }
      module && this.invalidate(module);
    }
  }, D.prototype._toolInvalidationRequest = function (e) {
    this.invalidate(e.area);
  }, D.prototype._rulerDownLister = function (e) {
    var t = e.sender === this._verticalRuler;
    if (!(t && e.client.getX() <= 2 * w.getScreenDPI())) {
      e.stopPropagation(), this.startMoveGuideLine(t, -1);
      var require = function (e) {
          this.moveGuideLine(e.client);
        }, n = function (e) {
          this.removeEventListener(o.Move, require, this), this.removeEventListener(o.Release, n, this), this.finishMoveGuideLine();
        };
      this.addEventListener(o.Move, require, this), this.addEventListener(o.Release, n, this);
    }
  }, D.prototype._guideMoveModifierChangeListener = function (e) {
    e.changed.metaKey && this.moveGuideLine(this._guideLineViewPoint);
  }, D.prototype._paintElement = function (e, t, i, n) {
    if (e = e || this.getWorldTransform(), t = t || this.getViewTransform(), this._viewConfiguration.pageDecoration.chessboard || this._viewConfiguration.pageDecoration.shadow > 0 && this._scene.isFixedSized())
      if (this._viewConfiguration.multiPageView) {
        var r = this;
        this._scene.iteratePages(function (t) {
          r._renderPageBackground.call(r, t, e);
        });
      } else
        this._renderPageBackground(this._scene.getActivePage(), e);
    a.prototype._paintElement.call(this, e, t, i, n);
    var o = _.getEditor(this._scene);
    if (o && o.paint(e, this._elementPaintContext), this._scene.getWorkspace().getToolManager().paint(this._elementPaintContext), this._viewConfiguration.pageDecoration.margin && this._scene.isFixedSized())
      if (this._viewConfiguration.multiPageView) {
        r = this;
        this._scene.iteratePages(function (t) {
          r._renderPageMargin.call(r, t, e);
        });
      } else
        this._renderPageMargin(this._scene.getActivePage(), e);
    var s = null;
    if (this._elementPaintContext.dirtyMatcher) {
      var l = t;
      this._elementPaintContext.dirtyMatcher.transform(t), l && (s = l.inverted());
    }
    this._editor.getGuides().paint(e, this._elementPaintContext);
    var h = this._editor.getDistanceHelper();
    h && h.isActivated() && h.paint(e, this._elementPaintContext), s && this._elementPaintContext.dirtyMatcher.transform(s);
  }, D.prototype._updateViewTransforms = function (e, t) {
    a.prototype._updateViewTransforms.apply(this, arguments);
    var i = this._viewConfiguration.pageDecoration;
    if (i.shadow > 0) {
      var n = i.shadowOffsetX || 0, r = i.shadowOffsetY || 0, o = 1 + 2 * i.shadow, s = this.getViewTransform(), l = s.getScaleFactor(), h = o + Math.max(0, -n), A = o + Math.max(0, -r), c = o + Math.max(0, n), p = o + Math.max(0, r);
      h *= l, A *= l, c *= l, p *= l, this._scene.setShadowExpandArea(h, A, c, p);
    } else
      this._scene.setShadowExpandArea(null);
    this._editor.updateInlineEditorForView(this);
  };
  var k = null, G = false;
  D.prototype._renderPageBackground = function (e, t) {
    var i = this._viewConfiguration.pageDecoration, n = e.getPosition(this._viewConfiguration.multiPageView), r = t.preMultiplied(new f(1, 0, 0, 1, n.getX(), n.getY())), o = e.isFixedSized() ? e.getGeometryBBox() : e.getPaintBBox(null, true);
    if (o) {
      var a = r.mapRect(o), s = a.getX(), l = a.getY(), h = a.getWidth(), c = a.getHeight(), p = this._elementPaintContext.dirtyMatcher, u = "undefined" != typeof navigator && navigator && 0 == navigator.userAgent.indexOf("Mozilla") && 0 == navigator.platform.indexOf("Win") && navigator.userAgent.indexOf("Edge") < 0 && navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Safari") < 0;
      u && i.shadow > 0 && !G && (G = true, console.warn("Due to browser bug (Firefox), shadow under canvas isn't displayed."));
      var g = i.shadow > 0 && !u && !(R.pagesCanOverlap && this._viewConfiguration.multiPageView), m = i.shadowOffsetX || 0, y = i.shadowOffsetY || 0;
      if (p) {
        var _ = 1 + 2 * i.shadow, v = a.expanded(_ + Math.max(0, -m), _ + Math.max(0, -y), _ + Math.max(0, m), _ + Math.max(0, y));
        if (!p.isDirty(v))
          return;
        if (g) {
          g = false;
          var b = v.subtracted(a, true);
          b instanceof d && (b = [b]);
          for (var C = 0; C < b.length; C++) {
            var E = b[C];
            if (p.isDirty(E)) {
              g = true;
              break;
            }
          }
        }
        if (!g && this._viewConfiguration.paintMode !== A.PaintMode.Outline && !this._sceneCanvas.isMasked() && 1 == e.getProperty("bop")) {
          var B = e.getProperty("bck");
          if (B instanceof P)
            return;
          if (B instanceof S && B.getStops().every(function (e) {
              return 1 == e.opacity;
            }))
            return;
        }
      }
      var x = i.background || "white";
      i.chessboard && (k || (k = w.createChessboard(8, "white", "rgb(205, 205, 205)")), x = this._elementCanvas.createTexture(k));
      try {
        if (g && (this._elementCanvas._canvasContext.shadowColor = i.shadowBackground || "rgba(0,0,0,0.5)", this._elementCanvas._canvasContext.shadowBlur = i.shadow, this._elementCanvas._canvasContext.shadowOffsetX = m, this._elementCanvas._canvasContext.shadowOffsetY = y), p && u) {
          var T = new d(Math.ceil(s), Math.ceil(l), Math.floor(h), Math.floor(c)), I = p.getNonIntersectingDirtyRectangles();
          for (C = 0; C < I.length; ++C) {
            var F = I[C];
            F = F.intersected(T), this._elementCanvas.fillRect(F.getX(), F.getY(), F.getWidth(), F.getHeight(), x);
          }
        } else
          this._elementCanvas.fillRect(Math.ceil(s), Math.ceil(l), Math.floor(h), Math.floor(c), x);
      } finally {
        g && (this._elementCanvas._canvasContext.shadowBlur = 0, this._elementCanvas._canvasContext.shadowColor = "transparent");
      }
    }
  }, D.prototype._renderPageMargin = function (e, t) {
    var i = e.getPosition(this._viewConfiguration.multiPageView), n = t.preMultiplied(new f(1, 0, 0, 1, i.getX(), i.getY())), r = e.getGeometryBBox();
    if (r) {
      var o = 0;
      c.outlineWidth % 2 != 0 && (o = 0.5);
      var a = r.expanded(-e.getProperty("ml"), -e.getProperty("mt"), -e.getProperty("mr"), -e.getProperty("mb")), s = n.mapRect(a).translated(o, o).toAlignedRect(), l = this._elementPaintContext.dirtyMatcher, h = Math.ceil(c.outlineWidth / 2);
      if ((!l || l.isDirty(s.expanded(h, h, h, h))) && !d.equals(r, a)) {
        var A = s.getX(), p = s.getY(), u = s.getWidth(), g = s.getHeight();
        this._elementPaintContext.canvas.strokeRect(A, p, u, g, c.outlineWidth, new P([
          255,
          0,
          255
        ]));
      }
    }
  }, D.prototype.handleDropEvent = function (e) {
    var t = this._convertClientPositionFromMousePosition(e);
    this._handleDrop(t, e.dataTransfer);
  }, D.prototype._handleSymbolDrop = function (e) {
    var t = this._scene.getSymbols();
    if (t) {
      for (var require = false, n = 0; n < t.length && !require; n++)
        t[n].getMultireferenceId() !== e.getMultireferenceId() || t[n].getParent() || (e = t[n], require = true);
      if (!require) {
        var r = e.getProperty("masterMultiRef");
        for (n = 0; n < t.length && !require; n++)
          t[n].getProperty("masterMultiRef") === r && (require = true);
        require ? console.log("inserting:found") : (e._master = true, e.getProperty("masterRef") === e.getReferenceId() && e.getProperty("masterMultiRef") === e.getMultireferenceId() || console.log("inserting: making non master a master"), e.setProperties([
          "masterRef",
          "masterMultiRef"
        ], [
          e.getReferenceId(),
          e.getMultireferenceId()
        ]));
      }
    }
    return e;
  }, D.prototype._handleDrop = function (e, t) {
    var i = this.getViewTransform(this._scene).mapPoint(e), o = this.getViewTransform(this._scene.getActivePage()).mapPoint(e);
    if (t.files && t.files.length > 0) {
      if (this._editor.hasEventListeners(m.FileDropEvent))
        for (var a = 0; a < t.files.length; ++a)
          this._editor.trigger(new m.FileDropEvent(t.files[a], o));
    } else if (t.types && t.types.length > 0) {
      var s = [], l = false;
      for (a = 0; a < t.types.length; ++a) {
        var h = t.types[a], A = t.getData(h);
        if (A) {
          var p = null, u = null;
          switch (h) {
          case n.MIME_TYPE:
            p = _.DropType.Pattern, u = n.deserialize(A);
            break;
          case r.MIME_TYPE:
            p = _.DropType.Node, (u = r.deserialize(A)) instanceof T && (u = this._handleSymbolDrop(u));
            break;
          case _.DROP_MIME_TYPE_FONT_FAMILY:
            p = _.DropType.FontFamily, u = A;
            break;
          case _.DROP_MIME_TYPE_CUSTOM:
            this._editor.hasEventListeners(m.CustomDropEvent) && this._editor.trigger(new m.CustomDropEvent(A, o));
            break;
          case "text/plain":
            p = _.DropType.Text, u = A;
            break;
          default:
            continue;
          }
          if (s.push({
              type: p,
              source: u
            }), null !== p) {
            var d = this._scene.hitTest(e, this.getWorldTransform(this._scene), null, true, -1, c.pickDistance, true, this._dropHitFilter, false, false, this._viewConfiguration.multiPageView);
            if (d && d.length > 0)
              for (var y = 0; y < d.length; ++y) {
                var v = d[y], C = _.createEditor(v.element);
                if (C) {
                  for (var w = null, E = v.element; E;) {
                    if (E instanceof b) {
                      w = this.getViewTransform(E).mapPoint(e);
                      break;
                    }
                    E = E.getParent();
                  }
                  if (w && C.acceptDrop(w, p, u, v.data)) {
                    l = true;
                    break;
                  }
                }
              }
          }
        }
      }
      if (!l)
        for (a = 0; a < s.length; ++a) {
          p = s[a].type, u = s[a].source;
          if (p === _.DropType.Node && u instanceof g) {
            if (u instanceof T) {
              var B = u.getGeometryBBox();
              if (B) {
                var x = B.getX(), P = B.getY();
                u.transform(new f(1, 0, 0, 1, -x + o.getX(), -P + o.getY()), true);
              }
            } else
              u.transform(new f(1, 0, 0, 1, o.getX(), o.getY()), true);
            this._editor.updateByMousePosition(i, null, false, this._viewConfiguration);
            var S = [], R = [], D = u.accept(function (e) {
                return !!(e instanceof T && e.isMaster()) && (S.push(e.getMultireferenceId()), R.push(e), true);
              }, false, true);
            D && this._editor.beginTransaction(), this._editor.insertElements([u], true, D, true), D && (this._scene.acceptChildren(function (e) {
              if (e instanceof T && !e.isMaster()) {
                var t = S.indexOf(e.getProperty("masterMultiRef"));
                if (t >= 0) {
                  var i = R[t];
                  this._scene.link(i, e), e.setProperty("masterRef", i.getReferenceId());
                }
              }
            }.bind(this)), this._editor.commitTransaction(I.get(new F("GEditorWidget", "action.insert-master-symbol")))), l = true;
          }
        }
    }
  }, D.prototype._dropHitFilter = function (e) {
    return !e.hasFlag(g.Flag.FullLocked);
  }, D.prototype.toString = function () {
    return "[Object GEditorWidget]";
  }, exports.exports = D;
}
