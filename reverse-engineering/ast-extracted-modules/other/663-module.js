/**
 * Module 663
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
  var n = i(14), r = i(0), o = i(5), a = i(6), s = i(7), l = i(103), h = i(118), A = i(166), c = i(934), p = i(937);
  function u(e, t) {
    this._paintCanvases = [], this._numHorizontal = e, this._numVertical = t;
    for (var i = this.isThreaded(), r = 0; r < e; r++)
      for (var o = 0; o < t; o++)
        this._paintCanvases.push(new n(!0, !1, !0, i));
    this._panHelper = new n(!1, !0), this._panHelper.setRenderAlgorithm(n.RenderAlgorithm.Crisp), this._panHelper.setImageSmoothingQuality(n.SmoothingQuality.High), this._panHelper.prepare(), this._paintCanvasCache = new c();
  }
  r.inheritAndMix(u, r, [h]), u.prototype._paintCanvases = null, u.prototype._paintCanvasCache = null, u.prototype._panHelper = null, u.prototype._numHorizontal = 0, u.prototype._numVertical = 0, u.prototype._consolidatedCanvas = null, u.prototype._renderQueue = null, u.prototype._iterateGrid = function (e, t) {
    for (var i, n = 0, r = 0, o = 0; o < this._numHorizontal; o++) {
      r = 0;
      for (var a = 0; a < this._numVertical; a++) {
        if (i = this._paintCanvases[o * this._numVertical + a], !t || t && !i.$renderedBitmap) {
          var s = e(i, n, r);
          if (!1 === s)
            return s;
        }
        r += i.getHeight();
      }
      n += i.getWidth();
    }
  }, u.prototype._iterateGridAsync = function (e) {
    this._iterateGrid(function (t, i, n) {
      setTimeout(function () {
        e(t, i, n);
      });
    });
  }, u.prototype.getWidth = function () {
    for (var e = 0, t = 0; t < this._numHorizontal; t++)
      e += this._paintCanvases[t * this._numVertical].getWidth();
    return e;
  }, u.prototype.getHeight = function () {
    for (var e = 0, t = 0; t < this._numVertical; t++)
      e += this._paintCanvases[t].getHeight();
    return e;
  }, u.prototype.resize = function (e, t) {
    if (e != this.getWidth() || t != this.getHeight()) {
      for (var i, n, r = e / this._numHorizontal, o = t / this._numVertical, a = Math.floor(r), s = Math.floor(o), l = e - a * (this._numHorizontal - 1), h = t - s * (this._numVertical - 1), A = 1, c = 1, p = 0; p < this._numHorizontal; p++) {
        i = p === this._numHorizontal - 1 ? l : a, A = Math.max(A, i);
        for (var u = 0; u < this._numVertical; u++)
          n = u === this._numVertical - 1 ? h : s, c = Math.max(c, n), this._paintCanvases[p * this._numVertical + u].resize(i, n);
      }
      this._panHelper.resize(A, c), this._paintCanvasCache.resize(e, t), this._consolidatedCanvas = null;
    }
  }, u.prototype.isThreaded = function () {
    return A.WORKER_RENDERING_ENABLED;
  }, u.prototype.paintAndRender = function (e, t, i, n, r, o, a, s) {
    var l = new p();
    l.callback = s, l.origin = n, l.paintContext = t, l.panRepaint = a, l.scale = r, l.scene = e, l.screen = o, l.viewTransform = i, this._renderQueue ? this._renderQueue.push(l) : this._renderQueue = [l], this._scheduleRender();
  }, u.prototype._renderNext = function () {
    return 1 === this._renderQueue.length ? (this._renderQueue = [], !1) : (this._renderQueue = [this._renderQueue[this._renderQueue.length - 1]], this._scheduleRender(), !0);
  }, u.prototype._scheduleRender = function () {
    if (!(0 === this._renderQueue.length || this._renderQueue.length > 1)) {
      var e = this._renderQueue[0];
      l.isRenderPhase() || this._paintCanvases.some(function (e) {
        return l.isRenderPhase(e.getRendererContext());
      }) ? console.log("SCHEDULERENDER: ERROR: render phase render, waiting") : this._paintAndRenderInternal(e.scene, e.paintContext, e.viewTransform, e.origin, e.scale, e.screen, e.panRepaint, e.callback);
    }
  }, u.prototype._paintAndRenderInternal = function (e, t, i, n, r, h, c, p) {
    var u, d, g = 0, f = 0, m = this, y = this.isThreaded(), _ = t.dirtyMatcher, v = !1, b = [], C = [], w = [], E = [], B = function (e, i, n, o) {
        if (i && f++, i && !n) {
          var a = m._getGridIndexForNativeCanvas(e);
          if (!(!A.ENABLE_CACHE || !1 === w[a]) && b[a] && (!o || !o.quickRender && !o.noWebGL) && Date.now() - w[a] > A.CACHE_WHEN_DRAWING_LONGER_THAN) {
            var s = m._paintCanvases[a];
            m._paintCanvasCache.setCache(s, b[a], r, C[a]);
          }
        }
        if (n && (v = !0), f === g)
          t.dirtyMatcher = _, m._renderNext() || p(e, !0, v);
        else if ((A.DRAW_DURING_RENDERING || A.SHOW_LOWRES_GIMMICK) && (i || 1 === g))
          if (A.SHOW_LOWRES_GIMMICK && 1 === g) {
            a = m._getGridIndexForNativeCanvas(e);
            if (!E[a]) {
              var l = m._paintCanvasCache.getGimmick(b[a], C[a], r);
              l && p(l._canvasContext.canvas, !1, v), E[a] = !0;
            }
          } else
            p(e, !1, v);
      }, x = 0, P = [];
    (d = c || 1 === m._paintCanvases.length || m.isThreaded() ? m._iterateGrid : m._iterateGridAsync).call(m, function (c, u, d) {
      var f = new a(u, d, c.getWidth(), c.getHeight()), v = _.intersect(f);
      if (v) {
        var S;
        g++;
        var T = null;
        if (S = A.ENABLE_CACHE ? m._paintCanvasCache.cachedRender(c, v, n, r, u, d) : v, A.SHOW_LOWRES_GIMMICK_FOR_QUICKRENDER && ((l.getRenderParameters() || {}).quickRender || (l.getRenderParameters() || {}).noWebGL) && S && 1 === m._paintCanvases.length) {
          var I = S.getDirtyRectangles().slice();
          E[x] = !0, (T = m._paintCanvasCache.getGimmick(I, n, r)) && (S = null);
        }
        if (S) {
          (v = S).getDirtyRectangles() || console.warn("EMPTY DIRTY RECTS"), v.transform(new s().translated(-u, -d)), c.prepare(v.getDirtyRectangles()), b[x] = v.getDirtyRectangles().slice(), C[x] = n.add(new o(u, d)), v.transform(new s().translated(u, d)), c.setOrigin(C[x]), c.setScale(r), c.setMasked(-1), l.begin(y), t.canvas = c;
          var F = new s().multiplied(i);
          v.transform(F), t.dirtyMatcher = v, e.paint(t, h), c.finish(), l.finish();
        }
        try {
          A.DEBUG_GRID_PAINT_DELAY > 0 ? (w[x] = !!S && Date.now() + x * A.DEBUG_GRID_PAINT_DELAY, l.render(c.getRendererContext(), 0, function (e, t, i, n) {
            setTimeout(function () {
              B(e, t, i, n);
            }, (this.idx + Math.random()) * A.DEBUG_GRID_PAINT_DELAY);
          }.bind({ idx: x }))) : (w[x] = !!S && Date.now(), T ? B(T._canvasContext.canvas, !0, !1) : l.render(c.getRendererContext(), 0, B));
        } catch (e) {
          return console.error("Render error at canvas " + x + ":" + e), m.cleanup(), p(null, !0, !1), m._renderNext(), !1;
        } finally {
          P.push(c.getRendererContext());
        }
      }
      x++;
    }), m._consolidatedCanvas = null, d !== m._iterateGrid || u || (P.forEach(function (e) {
      l.disposeWorkerDataAfterRender(e);
    }), 0 === g && (p(null, !0, !1), m._renderNext()));
  }, u.prototype._getGridIndexForNativeCanvas = function (e) {
    for (var t = 0; t < this._paintCanvases.length; t++)
      if (this._paintCanvases[t].getRendererContext()) {
        if (this._paintCanvases[t].getRendererContext().$realCtx.canvas === e)
          return t;
      } else if (e instanceof n) {
        if (self._paintCanvases[t] === e)
          return t;
      } else if (self._paintCanvases[t]._canvasContext.canvas === e)
        return t;
    return -1;
  }, u.prototype.cleanup = function () {
    for (var e = 0; e < this._paintCanvases.length; e++)
      l.forceCleanup(this._paintCanvases[e].getRendererContext());
  }, u.prototype.setDirtyCache = function (e, t, i, n) {
    this._paintCanvasCache.setDirty(e, t, i, n);
  }, u.prototype.moveContent = function (e, t) {
    this._consolidatedCanvas = null;
    var i = this._panHelper;
    i.resize(this.getWidth(), this.getHeight()), i.clearRect(0, 0, i.getWidth(), i.getHeight()), this.drawFragmentTo(this._panHelper, e.getX(), e.getY(), e.getX(), e.getY(), e.getWidth(), e.getHeight());
    var n = t, r = e.getX() - t.getX(), o = e.getY() - t.getY(), s = this;
    this._iterateGrid(function (e, t, i) {
      var l = new a(t, i, e.getWidth(), e.getHeight()), h = n.intersected(l), A = e.getRendererContext().$realCtx;
      A ? A.clearRect(0, 0, e.getWidth(), e.getHeight()) : e.clearRect(0, 0, e.getWidth(), e.getHeight()), !h.isEmpty() && A && A.drawImage(s._panHelper._canvasContext.canvas, h.getX() + r, h.getY() + o, h.getWidth(), h.getHeight(), h.getX() - t, h.getY() - i, h.getWidth(), h.getHeight());
    });
  }, u.prototype.drawFragmentTo = function (e, t, i, n, r, o, s) {
    var l = new a(t, i, o, s);
    n -= t, r -= i;
    this._iterateGrid(function (t, i, o) {
      var s = new a(i, o, t.getWidth(), t.getHeight()), h = l.intersected(s);
      h.isEmpty() || e.drawImageFragment(t, h.getX() - i, h.getY() - o, h.getX() + n, h.getY() + r, h.getWidth(), h.getHeight());
    });
  }, u.prototype.drawFragmentFrom = function (e, t, i, n, r, o, s) {
    var l = new a(n, r, o, s);
    n = t - n, r = i - r;
    this._iterateGrid(function (t, i, o) {
      var s = new a(i, o, t.getWidth(), t.getHeight()), h = l.intersected(s);
      h.isEmpty() || t.drawImageFragment(e, h.getX() + n, h.getY() + r, h.getX() - i, h.getY() - o, h.getWidth(), h.getHeight());
    }), this._consolidatedCanvas = null;
  }, u.prototype.getSubCanvasContainingGraphic = function (e) {
    var t = null;
    return this._iterateGrid(function (i, n, r) {
      var o = i.getRendererContext().canvas;
      if (o.$realCanvas === e || o.$renderedBitmap === e || o === e)
        return t = {
          canvas: i,
          cx: n,
          cy: r
        }, !1;
    }), t;
  }, u.prototype.drawTo = function (e, t, i) {
    var n;
    if (t) {
      var r = t.getNonIntersectingDirtyRectangles();
      if (n = this._iterateGrid(function (t, n, o) {
          if (i) {
            var s = t.getRendererContext().canvas;
            if (s.$realCanvas !== i && s.$renderedBitmap !== i && s !== i)
              return;
          }
          for (var l = new a(n, o, t.getWidth(), t.getHeight()), h = 0; h < r.length; ++h) {
            var A = r[h].toAlignedRect();
            (A = A.intersected(l)).isEmpty() || e.drawImageFragment(t, A.getX() - n, A.getY() - o, A.getX(), A.getY(), A.getWidth(), A.getHeight());
          }
          if (i)
            return !1;
        }), i && !1 !== n && A.SHOW_LOWRES_GIMMICK)
        for (var o = new a(0, 0, i.width, i.height), s = 0; s < r.length; ++s) {
          var l = r[s].toAlignedRect();
          (l = l.intersected(o)).isEmpty() || e.drawImageFragment(i, l.getX(), l.getY(), l.getX(), l.getY(), l.getWidth(), l.getHeight());
        }
    } else
      n = this._iterateGrid(function (t, n, r) {
        if (i) {
          var o = t._canvasContext.canvas;
          if (o.$realCanvas === i || o.$renderedBitmap === i || o === i)
            return e.drawImage(t, n, r), !1;
        } else
          e.drawImage(t, n, r);
      }), i && !1 !== n && A.SHOW_LOWRES_GIMMICK && e.drawImage(i, 0, 0);
  }, u.prototype.getConsolidatedCanvas = function () {
    if (this._consolidatedCanvas)
      return this._consolidatedCanvas;
    var e = new n(!1, !0);
    return e.resize(this.getWidth(), this.getHeight()), e.prepare(), this._iterateGrid(function (t, i, n) {
      e.drawImage(t, i, n);
    }), this._consolidatedCanvas = e, e;
  }, u.prototype.isMasked = function () {
    return this._paintCanvases[0].isMasked();
  }, u.prototype.destroy = function () {
    for (var e = 0; e < this._paintCanvases.length; e++)
      this._paintCanvases[e].destroy();
    this._panHelper.destroy(), this._consolidatedCanvas && (this._consolidatedCanvas.destroy(), this._consolidatedCanvas = null), this.cleanCache();
  }, u.prototype.clear = function () {
    this._iterateGrid(function (e, t, i) {
      e.clearRect(0, 0, e.getWidth(), e.getHeight());
    }), this._consolidatedCanvas = null, this.cleanCache();
  }, u.prototype.cleanCache = function () {
    this._paintCanvasCache.destroy();
  }, u.prototype.setImageSmoothingQuality = function (e) {
    for (var t = 0; t < this._paintCanvases.length; t++)
      this._paintCanvases[t].setImageSmoothingQuality(e);
  }, u.prototype.setRenderAlgorithm = function (e) {
    for (var t = 0; t < this._paintCanvases.length; t++)
      this._paintCanvases[t].setRenderAlgorithm(e);
  }, e.exports = u;
}
