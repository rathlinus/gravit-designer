/**
 * Module 363
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
  var n = require(893) /* module */, r = require(133) /* GScenePaintConfiguration */, o = require(2) /* GNode */, a = require(83) /* GPage */, s = require(160) /* GScene */, l = require(0) /* GObject */, h = require(72) /* GEvent */, A = require(5) /* GPoint */, c = require(77) /* Wheel */, p = require(6) /* GRect */, u = require(7) /* GTransform */, d = require(644) /* module */, g = require(64) /* GPlatform */, f = require(14) /* GPaintCanvas */, m = require(663) /* module */, y = require(228) /* GPaintContext */, _ = require(664) /* Matcher */, v = require(207) /* GSceneOptions */, b = require(103) /* module */, C = require(12) /* GMath */, w = (m = require(663) /* module */, require(166) /* GRendererConfig */), E = require(176) /* GSystem */, B = require(470) /* module */, x = false;
  function P(e) {
    d.apply(this, arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : null), this._inputHtmlElement = this._createHTMLElement(true), this._htmlElement.appendChild(this._inputHtmlElement), this._htmlElement.className += " g-scene-widget", this._scene = e, e.increaseReferenceCounter(), this._viewOffset = [
      0,
      0,
      0,
      0
    ], this._viewMargin = [
      0,
      0,
      0,
      0
    ], this._logicalPixels = true, this._viewConfiguration || (this._viewConfiguration = new r(), this._viewConfiguration.enableFxCache = !w.WORKER_RENDERING_ENABLED), P.options.panOrZoomOnWheel && this.addEventListener(c.Wheel, this._wheelListener, this), this.addEventListener(c.Leave, this._leaveListener, this), this.addEventListener(c.Enter, this._enterListener, this), this._dirtyElementList = new _(), this._dirtySceneList = new _(), this._elementCanvas = new f(), this._elementCanvas.setRenderAlgorithm(f.RenderAlgorithm.Pixelated), this._elementCanvas.setImageSmoothingQuality(f.SmoothingQuality.Low), this._elementPaintContext = new y(), this._elementPaintContext.configuration = this._viewConfiguration, this._elementPaintContext.canvas = this._elementCanvas, this._elementCanvas._canvasContext.canvas.style.position = "absolute", this._elementCanvas._canvasContext.canvas.style.left = "0px", this._elementCanvas._canvasContext.canvas.style.top = "0px", this._htmlElement.insertBefore(this._elementCanvas._canvasContext.canvas, this._htmlElement.firstChild), w.DEBUG_AREAS !== w.DBG_AREAS_INFO.None && (this._debugCanvas = new f(), this._debugCanvas._canvasContext.canvas.style.position = "absolute", this._debugCanvas._canvasContext.canvas.style.left = "0px", this._debugCanvas._canvasContext.canvas.style.top = "0px", this._htmlElement.appendChild(this._debugCanvas._canvasContext.canvas)), E.hardware !== E.Hardware.Desktop && (w.DELETE_EFFECT_TEXTURES_AFTER_DRAW = true, w.DELETE_BLEND_AND_GRADIENT_TEXTURES_AFTER_DRAW = true), this._panHelperCanvas = new f(), this._panHelperCanvas.setRenderAlgorithm(f.RenderAlgorithm.Crisp), this._panHelperCanvas.setImageSmoothingQuality(f.SmoothingQuality.High), this._panHelperCanvas.prepare(), this._sceneCanvas = new m(w.CANVAS_GRID_HORIZONTAL, w.CANVAS_GRID_VERTICAL), this._sceneCanvas.setRenderAlgorithm(f.RenderAlgorithm.Crisp), this._sceneCanvas.setImageSmoothingQuality(f.SmoothingQuality.High), this._scenePaintContext = new y(), this._scenePaintContext.configuration = this._viewConfiguration, this._watermarkHelperCanvas = new f(), this._watermarkHelperCanvas.setRenderAlgorithm(f.RenderAlgorithm.Crisp), this._watermarkHelperCanvas.setImageSmoothingQuality(f.SmoothingQuality.High), this._watermarkHelperCanvas.prepare(), this._inlineHintDiv = document.createElement("div"), this._inlineHintDiv.className = "inline-hint", this._inlineHintDiv.style.position = "absolute", this._inlineHintDiv.style.display = "none", this._htmlElement.appendChild(this._inlineHintDiv), this._fakeTextDiv = document.createElement("div"), this._fakeTextDiv.style.overflow = "hidden", this._fakeTextDiv.style.position = "absolute", this._fakeTextDiv.style.height = "0px", this._fakeTextDiv.style.display = "none", this._fakeTextBox = document.createElement("textarea"), this._fakeTextBox.setAttribute("autocorrect", "off"), this._fakeTextBox.setAttribute("autocapitalize", "off"), this._fakeTextBox.setAttribute("spellcheck", "false"), this._fakeTextBox.setAttribute("tabindex", "0"), this._fakeTextBox.className = P.GRAVIT_IME, this._fakeTextBox.style.position = "absolute", this._fakeTextBox.style.padding = "0px", this._fakeTextBox.style.width = "1000px", this._fakeTextBox.style.height = "1em", this._fakeTextBox.style.outline = "none", this._fakeTextBox.style.fontSize = "4px", this._fakeTextDiv.appendChild(this._fakeTextBox), this._htmlElement.appendChild(this._fakeTextDiv), e.addEventListener(o.AfterFlagChangeEvent, this._afterFlagChange, this, undefined, undefined, true), e.addEventListener(s.InvalidationRequestEvent, this._sceneInvalidationRequest, this, undefined, undefined, true), e.addEventListener(s.RecordedTransactionStartedEvent, this._recordedTransactionStarted, this, undefined, undefined, true), e.addEventListener(s.RecordedTransactionFinishedEvent, this._recordedTranactionFinished, this, undefined, undefined, true), this._updateViewTransforms(true, true);
  }
  b.init(w.ENABLE_RENDERER, w.ENABLE_DEBUG), b.setRenderParameters({ offscreen: w.USE_OFFSCREEN_ALWAYS }), l.inherit(P, d), P.UPDATEHEIGHT = 50, P.GRAVIT_IME = "gravit-ime-textarea-608209", P.options = {
    minZoomFactor: 0.06,
    maxZoomFactor: 256,
    panOrZoomOnWheel: true,
    limitScrollingToView: false,
    pinchToZoomFactor: 100
  }, P.TransformEvent = function () {
  }, l.inherit(P.TransformEvent, h), P.TransformEvent.prototype.toString = function () {
    return "[Object GSceneWidget.TransformEvent]";
  }, P.TRANSFORMEVENT = new P.TransformEvent(), P.prototype._repaintRequestFrameId = null, P.prototype._resizeRequestFrameId = null, P.prototype._finishPanRequestFrameId = null, P.prototype._scene = null, P.prototype._dirtyElementList = null, P.prototype._dirtySceneList = null, P.prototype._elementCanvas = null, P.prototype._debugCanvas = null, P.prototype._elementPaintContext = null, P.prototype._sceneCanvas = null, P.prototype._panHelperCanvas = null, P.prototype._watermarkHelperCanvas = null, P.prototype._scenePaintContext = null, P.prototype._horizontalRuler = null, P.prototype._verticalRuler = null, P.prototype._unitRuler = null, P.prototype._inlineHintDiv = null, P.prototype._fakeTextDiv = null, P.prototype._fakeTextBox = null, P.prototype._viewOffset = null, P.prototype._viewMargin = null, P.prototype._scrollX = 0, P.prototype._scrollY = 0, P.prototype._scrollDX = 0, P.prototype._scrollDY = 0, P.prototype._zoom = 1, P.prototype._logicalPixels = false, P.prototype._worldToViewTransform = null, P.prototype._viewToWorldTransform = null, P.prototype._lastInvalidatedWtoVtransform = null, P.prototype._lastInvalidatedVtoWtransform = null, P.prototype._panSubAreas = null, P.prototype._cumulativeInvalidationArea = null, P.prototype._viewConfiguration = null, P.prototype._pendingInvalidationEvent = null, P.prototype._duringRecordedTransaction = false, P.prototype._zoomSteps = [
    0.12,
    0.25,
    0.5,
    0.66,
    1,
    1.5,
    2,
    3,
    4,
    8,
    16,
    32,
    64,
    128
  ], P.prototype._wheelScrollingOrZooming = false, P.prototype._isPanning = false, P.prototype._isZooming = false, P.prototype.hasRulers = function () {
    return null !== this._horizontalRuler;
  }, P.prototype.getSceneCanvas = function () {
    return this._sceneCanvas.getConsolidatedCanvas();
  }, P.prototype.updateInlineHint = function (e, t, i) {
    if (e && t) {
      i = i || p.Side.CENTER, e = e.replace(/\n/gi, "<br>"), this._inlineHintDiv.innerHTML = e;
      var n = t.getX(), r = t.getY(), o = this._inlineHintDiv.offsetWidth, a = this._inlineHintDiv.offsetHeight, s = f.getScreenDPI();
      switch (1 !== s && (n /= s, r /= s), i) {
      case p.Side.TOP_LEFT:
        break;
      case p.Side.TOP_CENTER:
        n -= o / 2;
        break;
      case p.Side.TOP_RIGHT:
        n -= o;
        break;
      case p.Side.RIGHT_CENTER:
        n -= o, r -= a / 2;
        break;
      case p.Side.BOTTOM_RIGHT:
        n -= o, r -= a;
        break;
      case p.Side.BOTTOM_CENTER:
        n -= o / 2, r -= a;
        break;
      case p.Side.BOTTOM_LEFT:
        r -= a;
        break;
      case p.Side.LEFT_CENTER:
        r -= a / 2;
        break;
      case p.Side.CENTER:
        r -= a / 2, n -= o / 2;
      }
      this._inlineHintDiv.style.left = n + "px", this._inlineHintDiv.style.top = r + "px", this._inlineHintDiv.style.display = "";
    } else
      this._inlineHintDiv.style.display = "none";
  }, P.prototype.setRulers = function (e) {
    e && !this._horizontalRuler ? (this._horizontalRuler = new n(n.Orientation.Horizontal, this._scene), this._verticalRuler = new n(n.Orientation.Vertical, this._scene), this._unitRuler = new n(null, this._scene, undefined, true, this._viewConfiguration), this._htmlElement.insertBefore(this._horizontalRuler._htmlElement, this._inlineHintDiv), this._htmlElement.insertBefore(this._verticalRuler._htmlElement, this._inlineHintDiv), this._htmlElement.insertBefore(this._unitRuler._htmlElement, this._inlineHintDiv), this._relayoutRulers(), this.addEventListener(c.Move, this._rulerMouseMoveListener, this)) : !e && this._horizontalRuler && (this._htmlElement.removeChild(this._horizontalRuler._htmlElement), this._htmlElement.removeChild(this._verticalRuler._htmlElement), this._htmlElement.removeChild(this._unitRuler._htmlElement), this._horizontalRuler.release(), this._verticalRuler.release(), this._unitRuler.release(), this._horizontalRuler = null, this._verticalRuler = null, this._unitRuler = null, this.removeEventListener(c.Move, this._rulerMouseMoveListener, this));
  }, P.prototype.resize = function (e, t, i, n) {
    if (e = Math.round(e), t = Math.round(t), e !== this._width || t !== this._height || i) {
      d.prototype.resize.call(this, e, t);
      var r = function () {
        this._inputHtmlElement.style.width = this._htmlElement.style.width, this._inputHtmlElement.style.height = this._htmlElement.style.height;
        var i = f.getScreenDPI();
        this._elementCanvas.resize(e * i, t * i), this._elementCanvas._canvasContext.canvas.style.width = e + "px", this._elementCanvas._canvasContext.canvas.style.height = t + "px", w.DEBUG_AREAS !== w.DBG_AREAS_INFO.None && (this._debugCanvas.resize(e * i, t * i), this._debugCanvas._canvasContext.canvas.style.width = e + "px", this._debugCanvas._canvasContext.canvas.style.height = t + "px"), this._sceneCanvas.resize(e * i, t * i), this._panHelperCanvas.resize(e * i, t * i), this._watermarkHelperCanvas.resize(e * i, t * i);
        var r = new p(0, 0, e * i, t * i), o = new p(0, 0, e * i, t * i);
        this._dirtyElementList.setArea(r), this._dirtySceneList.setArea(o), this.invalidate(null, true), this._relayoutRulers(), n && n();
      }.bind(this);
      this._repaintRequestFrameId || this._finishPanRequestFrameId ? (this._resizeRequestFrameId && (g.cancelFrame(this._resizeRequestFrameId), this._resizeRequestFrameId = null), this._scheduleRendering(function () {
        this.resize.call(this, e, t, true, n);
      }.bind(this), true)) : r();
    }
  }, P.prototype._scheduleRendering = function (e, t, i) {
    var n = this, r = function () {
        x ? t ? null !== n._resizeRequestFrameId && (n._resizeRequestFrameId = g.scheduleFrame(r)) : i ? null !== n._finishPanRequestFrameId && (n._finishPanRequestFrameId = g.scheduleFrame(r)) : null !== n._repaintRequestFrameId && (n._repaintRequestFrameId = g.scheduleFrame(r)) : (w.DEBUG_AREAS !== w.DBG_AREAS_INFO.None && undefined !== typeof window && window.setTimeout(function () {
          n._debugCanvas.clearRect(0, 0, n._debugCanvas.getWidth(), n._debugCanvas.getHeight());
        }, 2000), e());
      };
    t ? n._resizeRequestFrameId = g.scheduleFrame(r) : i ? n._finishPanRequestFrameId = g.scheduleFrame(r) : n._repaintRequestFrameId = g.scheduleFrame(r);
  }, P.prototype.getScene = function () {
    return this._scene;
  }, P.prototype.getViewConfiguration = function () {
    return this._viewConfiguration;
  }, P.prototype.getViewOffset = function () {
    return this._viewOffset;
  }, P.prototype.setViewOffset = function (e) {
    if (this._viewOffset = [
        0,
        0,
        0,
        0
      ], e && e.length > 0) {
      for (var module = 0; module < Math.min(4, e.length); ++module)
        this._viewOffset[module] = e[module];
      this._relayoutRulers();
    }
  }, P.prototype.getViewMargin = function () {
    return this._viewMargin;
  }, P.prototype.setViewMargin = function (e) {
    if (this._viewMargin = [
        0,
        0,
        0,
        0
      ], e && e.length > 0)
      for (var module = 0; module < Math.min(4, e.length); ++module)
        this._viewMargin[module] = e[module], this.invalidate();
  }, P.prototype.getScrollX = function () {
    return this._scrollX;
  }, P.prototype.getScrollY = function () {
    return this._scrollY;
  }, P.prototype.getZoom = function () {
    return this._zoom;
  }, P.prototype.getLogicalZoom = function () {
    return this._logicalPixels ? this._zoom * f.getScreenDPI() : this._zoom;
  }, P.prototype.isLogicalPixels = function () {
    return this._logicalPixels;
  }, P.prototype.setLogicalPixels = function (e) {
    this._logicalPixels !== e && (this._logicalPixels = e, this._updateViewTransforms());
  }, P.prototype.getWorldTransform = function (e) {
    if (e === this._scene)
      return this._worldToViewTransform;
    var t = e, i = this._worldToViewTransform;
    if (t) {
      var n = t.getPosition(this._viewConfiguration.multiPageView);
      i = i.preMultiplied(new u(1, 0, 0, 1, n.getX(), n.getY()));
    }
    return i;
  }, P.prototype.getViewTransform = function (e) {
    if (e === this._scene)
      return this._viewToWorldTransform;
    var t = e, i = this._viewToWorldTransform;
    if (t) {
      var n = t.getPosition(this._viewConfiguration.multiPageView);
      i = i.multiplied(new u(1, 0, 0, 1, -n.getX(), -n.getY()));
    }
    return i;
  }, P.prototype.getViewBox = function (e) {
    var t = this._viewOffset[0] + (e ? 0 : this._viewMargin[0]), i = this._viewOffset[1] + (e ? 0 : this._viewMargin[1]);
    return new p(t, i, this.getWidth() - (this._viewOffset[2] + (e ? 0 : this._viewMargin[2]) + t), this.getHeight() - (this._viewOffset[3] + (e ? 0 : this._viewMargin[3]) + i));
  }, P.prototype._getSceneRect = function () {
    return new p(0, 0, this._sceneCanvas.getWidth(), this._sceneCanvas.getHeight());
  }, P.prototype.transform = function (e, t, i) {
    this._zoom = i, this._correctScrollPosition(e, t), this._updateViewTransforms();
  }, P.prototype.zoomAtCenter = function (e, t) {
    t = t || this._zoom;
    var i = f.getScreenDPI(), n = this.getViewBox().scaled(i, i).getSide(p.Side.CENTER), r = this.getWorldTransform().mapPoint(e), o = Math.min(P.options.maxZoomFactor, Math.max(t, P.options.minZoomFactor));
    if (o != this._zoom || !A.equals(r, n)) {
      this._zoom = o;
      var a = this.getLogicalZoom(), s = new u().translated(-e.getX(), -e.getY()).scaled(a, a).translated(n.getX(), n.getY()).getMatrix(), l = -s[4], h = -s[5];
      this._correctScrollPosition(l, h), this._updateViewTransforms();
    }
  }, P.prototype.zoomAt = function (e, t) {
    var i = f.getScreenDPI(), n = this.getViewBox().scaled(i, i).getSide(p.Side.CENTER), r = this.getViewTransform().mapPoint(n).subtract(e), o = t / this._zoom;
    this.zoomAtCenter(new A(e.getX() + r.getX() / o, e.getY() + r.getY() / o), t);
  }, P.prototype.zoomAll = function (e, t, i) {
    var n = e.getSide(p.Side.CENTER), r = e.getWidth(), o = e.getHeight(), a = this.getViewBox();
    if (i && this._viewConfiguration.multiPageView) {
      var s = this._scene.getActivePage();
      s && (n = n.add(s.getPosition(true)));
    }
    if (t) {
      var l = this.getWorldTransform().mapRect(new p(n.getX() - r / 2, n.getY() - o / 2, r, o)), h = this._zoom * Math.min(1, Math.max(l.getWidth() / a.getWidth(), l.getHeight() / a.getHeight()));
      this.zoomAtCenter(n, h);
    } else
      this.zoomAtCenter(n, 1 / Math.max(r / a.getWidth(), o / a.getHeight()));
  }, P.prototype.scrollBy = function (e, t) {
    return 0 != e && Math.abs(e) > 0.5 || 0 != t && Math.abs(t) > 0.5 ? (this._correctScrollPosition(this._scrollX + e, this._scrollY + t), this._updateViewTransforms(), new A(this._scrollDX, this._scrollDY)) : null;
  }, P.prototype.invalidateAndResetCache = function (e) {
    e || (e = this._dirtySceneList.getArea()), e && !e.isEmpty() && (this._sceneCanvas.setDirtyCache(e, this.getLogicalZoom(), this._scrollX, this._scrollY), this.invalidate(e, true));
  }, P.prototype.invalidate = function (e, t, i) {
    var n = t ? this._dirtySceneList : this._dirtyElementList;
    if (e) {
      if (e.isEmpty())
        return false;
    } else
      n.reset(), e = n.getArea();
    return e && n.dirty(e.getX(), e.getY(), e.getWidth(), e.getHeight()) ? (t ? (w.DEBUG_AREAS & w.DBG_AREAS_INFO.Scene && this._debugCanvas.fillRect(e.getX(), e.getY(), e.getWidth(), e.getHeight(), "#f00", 0.2), null === i ? (this._dirtyElementList.reset(), i = this._dirtyElementList.getArea()) : undefined === i && (i = e), this._dirtyElementList.dirty(i.getX(), i.getY(), i.getWidth(), i.getHeight())) : w.DEBUG_AREAS & w.DBG_AREAS_INFO.Editor && this._debugCanvas.fillRect(e.getX(), e.getY(), e.getWidth(), e.getHeight(), "#0f0", 0.05), null == this._repaintRequestFrameId && this._scheduleRendering(this._repaint.bind(this)), true) : (null === this._repaintRequestFrameId && null === this._finishPanRequestFrameId && (this._duringRecordedTransaction ? this._pendingInvalidationEvent = true : this._scene.trigger(new s.InvalidationFinishedEvent(this._scene, this._viewConfiguration, false))), false);
  }, P.prototype._recordedTransactionStarted = function (e) {
    this._duringRecordedTransaction = true;
  }, P.prototype._recordedTranactionFinished = function (e) {
    this._duringRecordedTransaction = false, this._scene && null === this._repaintRequestFrameId && this._pendingInvalidationEvent && this._scene.trigger(new s.InvalidationFinishedEvent(this._scene, this._viewConfiguration, false)), this._pendingInvalidationEvent = false;
  }, P.prototype.release = function () {
    this.setRulers(false), this.removeAllEventListeners(true), this._scene.removeAllEventListeners(true), this._scene.getDictionary().removeAllEventListeners(true), this._scene.getSymbolDictionary().removeAllEventListeners(true), this._scene.__graphic_editor__ && this._scene.__graphic_editor__.removeAllEventListeners(true), this._scene.iteratePages(function (e) {
      e.removeAllEventListeners(true);
    }, true), this._scene.decreaseReferenceCounter(), this._sceneCanvas.destroy(), this._debugCanvas && this._debugCanvas.destroy(), this._panHelperCanvas.destroy(), this._watermarkHelperCanvas.destroy(), this._elementCanvas.destroy(), this._scenePaintContext.destroy(), this._elementPaintContext.destroy(), this._scene.releaseDictionaries(), B.destroyTextures(), this._pendingInvalidationEvent = false, this._duringRecordedTransaction = false, this._repaintRequestFrameId && (g.cancelFrame(this._repaintRequestFrameId), this._repaintRequestFrameId = null), this._resizeRequestFrameId && (g.cancelFrame(this._resizeRequestFrameId), this._resizeRequestFrameId = null), this._finishPanRequestFrameId && (g.cancelFrame(this._finishPanRequestFrameId), this._finishPanRequestFrameId = null);
  }, P.prototype._correctScrollPosition = function (e, t) {
    var i = this._scrollX, n = this._scrollY;
    if ((i !== e || n !== t) && (this._scrollDX = e - i, this._scrollDY = t - n, this._scrollX = e, this._scrollY = t, P.options.limitScrollingToView)) {
      var o = f.getScreenDPI(), s = this.getViewBox().scaled(o, o);
      B = this._viewConfiguration.paintMode === r.PaintMode.Output ? this._scene.getGeometryBBox(false, this._viewConfiguration.multiPageView).scaled(this.getLogicalZoom(), this.getLogicalZoom()) : this._scene.getPaintBBox(this._viewConfiguration.multiPageView).scaled(this.getLogicalZoom(), this.getLogicalZoom());
      for (var l = function (e, t) {
            return new u().translated(-t.getX(), -t.getY()).scaled(this.getLogicalZoom(), this.getLogicalZoom()).translated(e.getX(), e.getY()).getTranslation();
          }.bind(this), h = 1 * (v.pageGap || 20) / this.getLogicalZoom(), c = l(s.getSide(p.Side.CENTER), this._viewConfiguration.paintMode === r.PaintMode.Output ? this._scene.getGeometryBBox(false, this._viewConfiguration.multiPageView).getSide(p.Side.CENTER) : this._scene.getPaintBBox(this._viewConfiguration.multiPageView).getSide(p.Side.CENTER)), d = s.getSide(p.Side.BOTTOM_RIGHT), g = this._scene && this._scene.getLastChild(); g && !(g instanceof a);)
        g = g.getPrevious();
      if (!g)
        return;
      var m, y = g;
      m = this._viewConfiguration.paintMode === r.PaintMode.Output ? y.getGeometryBBox() : y.getPaintBBox();
      var _, b = this._scene.getLabelBBox(y.getScaleLabelFactor()).getHeight(), C = y.getPosition(this._viewConfiguration.multiPageView), w = l(d, (m = m.translated(C.getX(), C.getY()).expanded(0, b, 0, 0)).getSide(p.Side.BOTTOM_RIGHT).add(new A(h, h))), E = s.getSide(p.Side.TOP_LEFT);
      if (this._viewConfiguration.paintMode === r.PaintMode.Output) {
        var B, x = this._scene.getActivePage();
        _ = (B = x && x.getGeometryBBox()) && B.getSide(p.Side.TOP_LEFT).add(new A(-h, 0));
      } else
        _ = this._scene.getPaintBBox(this._viewConfiguration.multiPageView).getSide(p.Side.TOP_LEFT).add(new A(-h, 0));
      if (!_)
        return;
      var S = l(E, _);
      n !== this._scrollY && (B.getHeight() > s.getHeight() ? this._scrollY < 0 ? this._scrollY = -S.getY() : this._scrollY = Math.min(-w.getY(), this._scrollY) : this._scrollY = -c.getY()), i !== this._scrollX && (B.getWidth() > s.getWidth() ? i < this._scrollX ? this._scrollX = Math.min(-w.getX(), this._scrollX) : this._scrollX = Math.max(-S.getX(), this._scrollX) : this._scrollX = -c.getX()), this._scrollDX = this._scrollX - i, this._scrollDY = this._scrollY - n;
    }
  }, P.prototype._paintScene = function (e, t, i) {
    w.ENABLE_TIMING && console.time("Compositing time"), x = true, this._sceneCanvas.paintAndRender(this._scene, this._scenePaintContext, this.getViewTransform(), new A(this._scrollX, this._scrollY), this.getLogicalZoom(), e, t, i);
  }, P.prototype._paintElement = function (e, t, i, n) {
    var r = this._elementPaintContext.dirtyMatcher;
    w.DRAW_DURING_RENDERING || w.SHOW_LOWRES_GIMMICK ? this._sceneCanvas.drawTo(this._elementCanvas, r, n) : this._sceneCanvas.drawTo(this._elementCanvas, r);
  }, P.prototype._finishPaint = function (e, t, i, n, r, o) {
    if (e) {
      var a;
      if (w.DRAW_DURING_RENDERING && !w.SHOW_LOWRES_GIMMICK && o) {
        var s = this._sceneCanvas.getSubCanvasContainingGraphic(o), l = s.canvas, h = new p(s.cx, s.cy, l.getWidth(), l.getHeight());
        if (!(a = e.intersect(h)))
          return;
      }
      try {
        t && this._viewConfiguration.watermark && (this._elementCanvas.clearRect(0, 0, this._elementCanvas.getWidth(), this._elementCanvas.getHeight()), this._elementCanvas.drawImage(this._watermarkHelperCanvas, 0, 0)), a ? (this._elementCanvas.prepare(a.getDirtyRectangles()), this._elementPaintContext.dirtyMatcher = a) : (this._elementCanvas.prepare(e.getDirtyRectangles()), this._elementPaintContext.dirtyMatcher = e), this._paintElement(i, n, r, o);
      } catch (e) {
        console.error("Editor render error:" + e);
      } finally {
        r && (this._elementPaintContext.dirtyMatcher = null), this._elementCanvas.finish(), this._paintWatermark();
      }
    }
  }, P.prototype._paintWatermark = function () {
    if (this._viewConfiguration.watermark) {
      var exports = this._elementCanvas.createTexture(this._viewConfiguration.watermark);
      this._watermarkHelperCanvas.clearRect(0, 0, this._watermarkHelperCanvas.getWidth(), this._watermarkHelperCanvas.getHeight()), this._watermarkHelperCanvas.drawImage(this._elementCanvas, 0, 0), this._elementCanvas.fillRect(0, 0, this._elementCanvas.getWidth(), this._elementCanvas.getHeight(), exports);
    }
  }, P.prototype.getScreenBox = function () {
    var e = null;
    if (!this._scene.isFixedSized()) {
      var module = f.getScreenDPI(), require = this.getViewBox().scaled(module, module), n = require.getWidth(), r = require.getHeight();
      require = require.expanded(n, r, n, r), e = this.getViewTransform(this._scene).mapRect(require);
    }
    return e;
  }, P.prototype._repaint = function () {
    try {
      var exports = this._dirtyElementList.flush(), module = this._dirtySceneList.flush(), require = this.getWorldTransform(), n = this.getViewTransform();
      if (this._panSubAreas) {
        if (null !== exports && null !== module) {
          this._lastInvalidatedVtoWtransform || (this._lastInvalidatedVtoWtransform = this._viewToWorldTransform, this._lastInvalidatedWtoVtransform = this._worldToViewTransform);
          var r = this._worldToViewTransform.mapRect(this._lastInvalidatedVtoWtransform.mapRect(this._dirtySceneList.getArea())).intersected(this._dirtySceneList.getArea()), o = this._lastInvalidatedWtoVtransform.mapRect(this._viewToWorldTransform.mapRect(r));
          r = new p(Math.round(r.getX()), Math.round(r.getY()), Math.round(r.getWidth()), Math.round(r.getHeight())), o = new p(Math.round(o.getX()), Math.round(o.getY()), Math.round(o.getWidth()), Math.round(o.getHeight()));
          var a = this._getSceneRect();
          r = r.intersected(a), o = o.intersected(a), this._viewConfiguration.watermark && (this._elementCanvas.clearRect(0, 0, this._elementCanvas.getWidth(), this._elementCanvas.getHeight()), this._elementCanvas.drawImage(this._watermarkHelperCanvas, 0, 0)), this._panHelperCanvas.clearRect(0, 0, this._panHelperCanvas.getWidth(), this._panHelperCanvas.getHeight()), this._panHelperCanvas.drawImageFragment(this._elementCanvas, o.getX(), o.getY(), o.getX(), o.getY(), o.getWidth(), o.getHeight()), this._elementCanvas.clearRect(0, 0, this._elementCanvas.getWidth(), this._elementCanvas.getHeight()), this._elementCanvas.drawImageFragment(this._panHelperCanvas, o.getX(), o.getY(), r.getX(), r.getY(), r.getWidth(), r.getHeight()), this._sceneCanvas.moveContent(o, r), this._scenePaintContext.dirtyMatcher = module;
          var s = this._scenePaintContext.noWebGL;
          this._scenePaintContext.configuration.noWebGL = !(!b.getRenderParameters().quickRender && !b.getRenderParameters().noWebGL);
          var l = this, h = this._panSubAreas.slice(), A = this._lastInvalidatedVtoWtransform, c = this._worldToViewTransform;
          l._cumulativeInvalidationArea ? l._cumulativeInvalidationArea = l._cumulativeInvalidationArea.map(function (e) {
            return c.mapRect(A.mapRect(e));
          }).concat(h) : l._cumulativeInvalidationArea = h, this._paintScene(this.getScreenBox(), true, function (t, r, o) {
            (r || w.DRAW_DURING_RENDERING || w.SHOW_LOWRES_GIMMICK) && (w.ENABLE_TIMING && console.time("post render"), l._finishPaint(exports, false, require, n, r, t), w.ENABLE_TIMING && console.timeEnd("post render"), r && (l._scenePaintContext.configuration.noWebGL = s, l._scenePaintContext.dirtyMatcher = null, x = false, w.ENABLE_TIMING && console.timeEnd("rendering")));
          });
        }
      } else if (null !== module) {
        this._scenePaintContext.dirtyMatcher = module;
        s = this._scenePaintContext.noWebGL;
        this._scenePaintContext.configuration.noWebGL = !(!b.getRenderParameters().quickRender && !b.getRenderParameters().noWebGL);
        l = this;
        this._paintScene(this.getScreenBox(), false, function (t, r, o) {
          (r || w.DRAW_DURING_RENDERING || w.SHOW_LOWRES_GIMMICK) && (w.ENABLE_TIMING && console.time("post render"), l._finishPaint(exports, true, require, n, r, t), w.ENABLE_TIMING && console.timeEnd("post render"), r && (l._scenePaintContext.configuration.noWebGL = s, l._scenePaintContext.dirtyMatcher = null, x = false, w.ENABLE_TIMING && console.timeEnd("rendering"), !o && l._finishPanRequestFrameId && (l._cumulativeInvalidationArea = null, l._finishPanRequestFrameId = null)));
        });
      } else
        this._finishPaint(exports, true, require, n, true);
      this._panSubAreas && (this._panSubAreas = null);
    } finally {
      this._repaintRequestFrameId = null, this._lastInvalidatedWtoVtransform = this._worldToViewTransform, this._lastInvalidatedVtoWtransform = this._viewToWorldTransform;
    }
  }, P.prototype.beginZoom = function (e) {
    this._isZooming = true, null !== this._repaintRequestFrameId && (g.cancelFrame(this._repaintRequestFrameId), this._repaintRequestFrameId = null), b.setRenderParameters(e || {
      quickRender: w.QUICK_RENDER_WHEN_ZOOMING,
      noWebGL: w.NO_WEBGL_WHEN_ZOOMING
    });
  }, P.prototype.finishZoom = function () {
    if (this._isZooming && !this._isPanning) {
      this._isZooming = false;
      var exports = this;
      this._scheduleRendering(function () {
        b.setRenderParameters({
          quickRender: false,
          noWebGL: false
        });
        var t = exports._getSceneRect();
        exports.invalidate(t, true), exports._repaint();
      });
    }
  }, P.prototype.beginPan = function (e) {
    this._isPanning = true, null !== this._finishPanRequestFrameId ? (g.cancelFrame(this._finishPanRequestFrameId), this._finishPanRequestFrameId = null, b.setRenderParameters({
      quickRender: w.QUICK_RENDER_WHEN_PANNING,
      noWebGL: w.NO_WEBGL_WHEN_PANNING
    })) : b.setRenderParameters(e || {
      quickRender: w.QUICK_RENDER_WHEN_PANNING,
      noWebGL: w.NO_WEBGL_WHEN_PANNING
    });
  }, P.prototype.finishPan = function (e) {
    if (this._isPanning) {
      this._isZooming && ("number" == typeof this._wheelScrollingOrZooming && (clearTimeout(this._wheelScrollingOrZooming), this._wheelScrollingOrZooming = null), this._isZooming = false, this._cumulativeInvalidationArea = [this._getSceneRect()]), this._isPanning = false;
      var module = this;
      this._scheduleRendering(function () {
        b.setRenderParameters({
          quickRender: false,
          noWebGL: false
        });
        var i = module._getSceneRect();
        (module._cumulativeInvalidationArea || []).forEach(function (e) {
          module.invalidate(e.intersected(i), true);
        }), e && e();
      }, false, true);
    }
  }, P.prototype._updateViewTransforms = function (e, t) {
    this._scrollX = Math.round(this._scrollX), this._scrollY = Math.round(this._scrollY), this._scrollDX = Math.round(this._scrollDX), this._scrollDY = Math.round(this._scrollDY), this._isPanning && (this._dirtyElementList.translate(-this._scrollDX, -this._scrollDY), this._dirtySceneList.translate(-this._scrollDX, -this._scrollDY));
    var i = this._lastInvalidatedVtoWtransform || this._viewToWorldTransform, n = this.getLogicalZoom(), r = new u().scaled(n, n).translated(-this._scrollX, -this._scrollY);
    if (!u.equals(r, this._worldToViewTransform)) {
      if (this._worldToViewTransform = r, this._viewToWorldTransform = r.inverted(), v.scaleLabelFactor = this._viewToWorldTransform.getScaleFactor(), !t) {
        var o = false;
        if (i && this._viewToWorldTransform) {
          var a = f.getScreenDPI(), s = i.mapRect(new p(0, 0, this.getWidth() * a, this.getHeight() * a)), l = this._viewToWorldTransform.mapRect(new p(0, 0, this.getWidth() * a, this.getHeight() * a));
          if (C.isEqualEps(s.getWidth(), l.getWidth(), 0.000001) && C.isEqualEps(s.getHeight(), l.getHeight(), 0.000001)) {
            var h = l.subtracted(s, true), A = null;
            A = h instanceof Array ? h.map(function (e) {
              return r.mapRect(e);
            }) : [r.mapRect(h)];
            for (var c = false, d = 0; d < A.length; d++)
              c = this.invalidate(A[d], true) || c;
            (!w.ENABLE_RENDERER && c || w.ENABLE_RENDERER) && (this._panSubAreas = A), o = true;
          }
        }
        a = f.getScreenDPI();
        var g = this.getViewBox().scaled(a, a), m = g.getWidth(), y = g.getHeight();
        g = g.expanded(m, y, m, y), this._scene.setScreenBox(this.getViewTransform(this._scene).mapRect(g)), o || this.invalidate(null, true);
      }
      !e && this.hasEventListeners(P.TransformEvent) && this.trigger(P.TRANSFORMEVENT);
    }
    this._relayoutRulers();
  }, P.prototype._relayoutRulers = function () {
    if (this._horizontalRuler && this._verticalRuler && this._unitRuler) {
      var exports = f.getScreenDPI(), module = new A(0, 0), require = this._scene.getActivePage();
      if (require) {
        var n = require.getGeometryBBox();
        if (n) {
          var r = this.getWorldTransform().mapPoint(module);
          module = (module = this.getWorldTransform(require).mapPoint(new A(n.getX(), n.getY()))).subtract(r);
        }
      }
      var o = this._viewOffset[0], a = this._viewOffset[1], s = this._viewOffset[2], l = this._viewOffset[3], h = this._horizontalRuler.getHeight(), c = this._viewConfiguration.rulerLeftFill, p = this._viewConfiguration.ignoreRulerOffsets;
      this._horizontalRuler.resize(this.getWidth() - h - o - (p ? 0 : s), h), this._verticalRuler.resize(h + (c ? o : 0), this.getHeight() - h - a - (p ? 0 : l)), this._unitRuler.resize(h + (c ? o : 0), h), this._horizontalRuler.move(h + o, a), this._verticalRuler.move(c ? 0 : o, h + a), this._unitRuler.move(c ? 0 : o, a), this._horizontalRuler.updateView(-this._scrollX - o * exports - h * exports + module.getX(), this.getLogicalZoom()), this._verticalRuler.updateView(-this._scrollY - a * exports - h * exports + module.getY(), this.getLogicalZoom());
    }
  }, P.prototype._sceneInvalidationRequest = function (e) {
    var t = e.area;
    if (t) {
      if (e.page && !this.getViewConfiguration().multiPageView) {
        var require = this._scene && this._scene.getActivePage();
        if (require && require !== e.page)
          return;
      }
      t = (t = this.getWorldTransform(e.page || this._scene).mapRect(t)).expanded(2, 2, 2, 2);
    }
    this.invalidate(t, true), this._sceneCanvas.setDirtyCache(t, this.getLogicalZoom(), this._scrollX, this._scrollY);
  }, P.prototype.getViewVisibleArea = function () {
    var e = this._viewOffset[0];
    this._verticalRuler && (e += this._verticalRuler.getWidth());
    var t = this._viewOffset[1];
    this._horizontalRuler && (t += this._horizontalRuler.getHeight());
    var i = this._width - this._viewOffset[2], n = this._height - this._viewOffset[3], r = f.getScreenDPI();
    return new p(e * r, t * r, (i - e) * r, (n - t) * r);
  }, P.prototype._wheelListener = function (e) {
    if (g.modifiers.metaKey || g.modifiers.ctrlKey || e.zoom) {
      "number" == typeof this._wheelScrollingOrZooming && (clearTimeout(this._wheelScrollingOrZooming), this._cumulativeInvalidationArea = null, this._isPanning = false, this._wheelScrollingOrZooming = null), this._wheelScrollingOrZooming = setTimeout(function () {
        this._wheelScrollingOrZooming = null, this.finishZoom();
      }.bind(this), w.RERENDER_ZOOM_AFTER_MS), this.beginZoom();
      var module = 0 !== e.deltaX ? e.deltaX : e.deltaY, require = this.getZoom(), n = 1.6, r = null;
      if (Math.abs(module) > 20 && (module = 20 * (module < 0 ? -1 : 1)), module < 0) {
        var o = require / n;
        (r = require + -1 * module / w.ZOOM_STEP * o) >= P.options.maxZoomFactor && (r = P.options.maxZoomFactor);
      } else {
        o = require / n;
        (r = require - module / w.ZOOM_STEP * o) <= P.options.minZoomFactor && (r = P.options.minZoomFactor);
      }
      for (var a = 0; a < this._zoomSteps.length; ++a) {
        (r > (n = this._zoomSteps[a]) && require < n || r < n && require > n) && (r = this._zoomSteps[a]);
      }
      if (null !== r && r !== require) {
        var s = this.getViewTransform().mapPoint(e.client);
        this.zoomAt(s, r);
      }
    } else
      "number" == typeof this._wheelScrollingOrZooming && (clearTimeout(this._wheelScrollingOrZooming), this._isZooming && (this._isZooming = false, this._cumulativeInvalidationArea = [this._getSceneRect()]), this._wheelScrollingOrZooming = null), this._wheelScrollingOrZooming = setTimeout(function () {
        this._wheelScrollingOrZooming = null, this.finishPan();
      }.bind(this), w.RERENDER_PAN_AFTER_MS), this.beginPan(), g.modifiers.shiftKey ? this.scrollBy(e.deltaY, e.deltaX) : this.scrollBy(e.deltaX, e.deltaY);
  }, P.prototype._rulerMouseMoveListener = function (e) {
    var t = this._horizontalRuler.getHeight(), i = f.getScreenDPI();
    this._horizontalRuler.setMousePosition(e.client.getX() / i - t - this._viewOffset[0]), this._verticalRuler.setMousePosition(e.client.getY() / i - t - this._viewOffset[1]);
  }, P.prototype._leaveListener = function (e) {
    this._horizontalRuler && (this._horizontalRuler.setMousePosition(-999), this._verticalRuler.setMousePosition(-999)), this._inlineHintDiv.style.visibility = "hidden";
  }, P.prototype._enterListener = function (e) {
    "hidden" === this._inlineHintDiv.style.visibility && (this._inlineHintDiv.style.visibility = "");
  }, P.prototype._afterFlagChange = function (e) {
    e.node instanceof a && e.flag === o.Flag.Active && e.set && this._relayoutRulers();
  }, P.prototype.startTouchMode = function () {
    b.setRenderParameters({
      quickRender: w.QUICK_RENDER_WHEN_ZOOMING,
      noWebGL: w.NO_WEBGL_WHEN_ZOOMING
    });
  }, P.prototype.endTouchMode = function () {
    b.setRenderParameters({
      quickRender: false,
      noWebGL: false
    }), this.invalidate(null, true);
  }, P.prototype.cleanCache = function () {
    this._sceneCanvas.cleanCache();
  }, P.prototype.configureCache = function () {
    if (w.ENABLE_CACHE)
      switch (E.hardware) {
      case E.Hardware.Desktop:
        w.MAX_CACHED_ZOOM_LEVELS = 5, w.MAX_CACHED_PER_ONE_ZOOM = 64;
        break;
      default:
        w.MAX_CACHED_ZOOM_LEVELS = 3, w.MAX_CACHED_PER_ONE_ZOOM = 21;
      }
  }, P.prototype.toString = function () {
    return "[Object GSceneWidget]";
  }, exports.exports = P;
}
