/**
 * Module 911
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
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(0) /* GObject */, a = require(28) /* GStylable */, s = require(14) /* GPaintCanvas */, l = require(133) /* GScenePaintConfiguration */, h = require(5) /* GPoint */, A = require(6) /* GRect */, c = require(11) /* GUtil */, p = require(42) /* module */;
  exports.exports = function (e) {
    e.Stylable = function () {
    }, o.inherit(e.Stylable, a), e.Stylable.GeometryProperties = { sref: null }, e.Stylable._ENABLE_PARTIAL_RESET = true, e.Stylable.prototype._fxCache = [], e.Stylable.prototype.assignStyleFrom = function (e, t) {
      this.beginUpdate();
      try {
        a.prototype.assignStyleFrom.call(this, e, t);
      } finally {
        this.endUpdate();
      }
    }, e.Stylable.prototype.addStyle = function (e) {
      this.setProperty("sref", e);
    }, e.Stylable.prototype.removeStyle = function (e) {
      this.setProperty("sref", null);
    }, e.Stylable.prototype.getReferencedStyle = function () {
      return this._workspace && this.$sref ? this._workspace.getReference(this.$sref) : null;
    }, e.Stylable.prototype._paintStyle = function (e, t) {
      var i = this.getStyleLayers();
      if (e.configuration.isOutline(e))
        this._paintStyleFillLayer(e, t, i);
      else if (this.$_stop > 0) {
        var n;
        n = e.configuration.ignoreEffects || e.configuration.noWebGL || e.getRootCanvas().getScale() > 6 && e.configuration.enableFxCache && !e.configuration.forceEffectsWhenZoomed ? null : this._effects ? this._effects.getLayersEffects(i, true) : null;
        var r = false, o = function (e) {
            var t = e.getEffectType();
            return t === a.Effect.Type.PreEffect || t === a.Effect.Type.PostEffect || t === a.Effect.Type.Multi;
          }, l = null;
        if (n) {
          var h = this._fxPadding, A = n.filter(function (e) {
              if (e)
                return true;
            });
          0 === A.length ? A = [
            0,
            0,
            0,
            0
          ] : 1 === A.length ? A = h(A[0], o, e.canvas.getScale()) : (A[0] = h(A[0], o, e.canvas.getScale()), A = A.reduce(function (t, i) {
            var n = h(i, o, e.canvas.getScale());
            return t.map(function (e, t) {
              return Math.max(e, n[t]);
            });
          }));
          for (var c = 0; c < n.length && !l; ++c)
            if (n[c])
              for (var p = 0; p < n[c].length && !l; ++p)
                r = true, o(n[c][p]) && (l = this._createStyleCanvas(e, t, A));
        }
        1 !== this.$_stop || this.$_sbl !== s.BlendMode.Normal ? this._paintStyleSeparate(e, t, i, n, l, r) : this._paintStyleFillLayer(e, t, i, n, l, r);
      }
      l && l.finish();
    }, e.Stylable.prototype._isStyleSeparate = function () {
      return false;
    }, e.Stylable.prototype._paintStyleSeparate = function (e, t, i, n, r, o) {
      var a = this._createStyleCanvas(e, t), s = e.pushCanvas(a);
      try {
        this._paintStyleFillLayer(e, t, i, n, r, o), this._paintCompositedWithBackground(s, function (e, t, i) {
          e.drawCanvas(a, 0, 0, t, i);
        }), a.finish();
      } finally {
        e.popCanvas();
      }
    }, e.Stylable.prototype._paintCompositedWithBackground = function (e, t) {
      if ("m" === this.$_sbl || "!m" === this.$_sbl) {
        var require = false, n = this._getStyleMaskClipArea();
        n && e.hasClip() && (e.clipRect(n.getX(), n.getY(), n.getWidth(), n.getHeight()), require = true);
        try {
          t(e, this.$_stop, "m" === this.$_sbl ? s.CompositeOperator.DestinationIn : s.CompositeOperator.DestinationOut);
        } finally {
          require && e.resetClip();
        }
      } else
        t(e, this.$_stop, this.$_sbl);
    }, e.Stylable.prototype._paintStyleFillLayer = function (e, t, i, n, r, o) {
      if (e.configuration.isOutline(e))
        this._paintStyleContent(e, t, i, n, r, o);
      else {
        var a = n ? n[i && i.length ? i.length : 0] : null;
        if (1 !== this.$_sfop || a) {
          var s = [null], l = [1], h = this._createStyleCanvas(e, t, this._fxPadding(a, null, e.canvas.getScale()), s, l), A = e.pushCanvas(h);
          try {
            if (this._paintStyleContent(e, t, i, n, r, o), a) {
              var c = [];
              if (i)
                for (var p = 0; p < i.length; p++)
                  n[p] && (c = c.concat(n[p]));
              this._paintWithEffects(h, e.getRootCanvas(), A, this.$_sfop, a, r, c, e.configuration.enableFxCache, s[0], l[0]);
            } else
              A.drawCanvas(h, 0, 0, this.$_sfop);
            h.finish();
          } catch (e) {
            "function" == typeof gdb_loaddesign && console.warn("Rendering error:" + e);
          } finally {
            e.popCanvas();
          }
        } else
          this.$_sfop > 0 && this._paintStyleContent(e, t, i, n, r, o);
      }
    }, e.Stylable.prototype._fxPadding = function (e, t, i) {
      var n = [
        0,
        0,
        0,
        0
      ];
      if (!e)
        return n;
      if (0 === (e = e.filter(function (e) {
          if (e)
            return !t || t(e);
        })).length)
        return n;
      var r = e[0].getAbsoluteEffectPadding && e[0].getAbsoluteEffectPadding();
      return "number" == typeof r ? r = [
        r,
        r,
        r,
        r
      ] : r || (r = n), 1 === e.length ? r.map(function (e) {
        return Math.ceil(e * i);
      }) : (e[0] = r, e.reduce(function (e, t) {
        var i = t.getAbsoluteEffectPadding();
        return "number" == typeof i ? i = [
          i,
          i,
          i,
          i
        ] : i || (i = n), (e || n).map(function (e, t) {
          return Math.max(e, i[t]);
        });
      }).map(function (e) {
        return Math.ceil(e * i);
      }));
    }, e.Stylable.prototype._paintStyleContent = function (e, t, i, n, r, o) {
      if (i && i.length) {
        for (var a = e.configuration.isOutline(e), s = null, l = [null], h = 0; h < i.length; ++h) {
          var A = i[h];
          if (a)
            this._paintStyleLayer(e, A, false);
          else {
            var c = n ? n[h] : null;
            if (c || this._isSeparateStylePaintLayer(e, A)) {
              var p = [1];
              s ? s.clear() : s = this._createStyleCanvas(e, t, c ? [
                0,
                0,
                0,
                0
              ] : null, l, p);
              var u = e.pushCanvas(s);
              try {
                this._paintStyleLayer(e, A, true), c ? this._paintWithEffects(s, e.getRootCanvas(), u, 1, c, r, null, e.configuration.enableFxCache, l[0], p[0]) : u.drawCanvas(s);
              } finally {
                e.popCanvas();
              }
            } else
              this._paintStyleLayer(e, A, false);
          }
        }
        s && s.finish();
      }
    }, e.Stylable.prototype._getFxCache = function (e, t, i, n) {
      if (!t.isCacheable(e))
        return false;
      var r = this._getFxIdx(t);
      if (r >= 0 && this._fxCache[r]) {
        var o = this._fxCache[r], a = o.deps.every(function (e) {
            return this._fxExists(e);
          }, this), l = o.bmp, h = l && l.isRendered();
        if (a && h) {
          var c = l.getScale(), p = e.getScale();
          if (c !== p) {
            if (c > p || e.getWidth() * e.getHeight() > 16777216) {
              if (n)
                return true;
              var u;
              if (Math.ceil(Math.log(Math.max(c, p) / Math.min(c, p)) / Math.log(2)) > 1)
                return this._resetFxCacheAndState(t, true), false;
              u = i ? i.getSide(A.Side.TOP_LEFT) : e.getOffset();
              var d = e.getTransform(false), g = e.getTransform(true), f = d.inverted();
              e.setTransform(f), e.clear();
              var m = e.getScale(), y = e.getOffset(), _ = c * (y.getX() - u.getX()) / m, v = c * (y.getY() - u.getY()) / m, b = c * e.getWidth() / m, C = c * e.getHeight() / m, w = Math.max(0, 0), E = Math.max(0, 0), B = new A(0, 0, l.getWidth(), l.getHeight()), x = new A(_ + w, v + E, Math.floor(b), Math.floor(C));
              x = x.intersected(B);
              var P = e.getWidth() - 0, S = e.getHeight() - 0;
              return x.isEmpty() || (e._canvasContext.globalAlpha = 1, e._canvasContext.globalCompositeOperation = "source-over", e._canvasContext.drawImage(l._canvasContext.canvas, x.getX(), x.getY(), x.getWidth(), x.getHeight(), 0, 0, P, S)), e.setTransform(g), true;
            }
            return this._resetFxCacheAndState(t, true), false;
          }
          return !i && (Math.abs(l.getWidth() - e.getWidth()) > 1 || Math.abs(l.getHeight() - e.getHeight()) > 1) ? (console.log("fx cache: size misfit"), this._resetFxCacheAndState(t, true), false) : (n || (i ? l.setOffset(i.getSide(A.Side.TOP_LEFT)) : l.setOffset(e.getOffset()), e.drawCanvas(l, 0, 0, 1, s.CompositeOperator.Copy)), true);
        }
        a && h || this._fxCache.splice(r, 1);
      }
      return false;
    }, e.Stylable.prototype._setFxCache = function (e, t, i) {
      if (!e.isClipped() && this._scene) {
        if (!t.isCacheable(e))
          return false;
        var n = e.clone(false, {
          renderPhaseDraw: true,
          dontCopyContents: false,
          persistent: true
        });
        this._scene.addDestroyable(n), this._reinvalidateRemovedFx(t);
        for (var r = this._fxCache, o = 0; o < r.length; o++)
          if (r[o] && r[o].fx === t)
            return void (r[o] = {
              bmp: n,
              deps: i,
              fx: t
            });
        this._fxCache.push({
          bmp: n,
          deps: i,
          fx: t
        });
      }
    }, e.Stylable.prototype._reinvalidateFxDeps = function (e, t) {
      for (var require = e.length - 1; require >= 0; require--) {
        var n = this._getFxIdx(e[require], true);
        if (n >= 0 && this._fxCache[n]) {
          var r = e.slice(0, require).concat(t), o = this._fxCache[n].deps;
          c.equals(r, o) || this._resetFxCacheAndState(e[require], true);
        }
      }
    }, e.Stylable.prototype._reinvalidateRemovedFx = function (e) {
      var t = this._scene;
      this._fxCache = this._fxCache.filter(function (i) {
        if (!i)
          return false;
        for (var n = i.deps, r = 0; r < n.length; r++) {
          var o = n[r];
          if (o === e || !this._fxExists(o))
            return t.destroy([i.bmp]), false;
        }
        return true;
      }, this);
    }, e.Stylable.prototype._resetFxCacheAndState = function (t, i) {
      var n = false, r = this._scene;
      if (e.Stylable._ENABLE_PARTIAL_RESET && t) {
        var o = this._getFxIdx(t);
        if (o >= 0) {
          var a = this._fxCache[o];
          a && r.destroy([a.bmp]), this._fxCache.splice(o, 1), n = true, i && this._reinvalidateRemovedFx(t);
        }
      } else
        (this._fxCache || []).forEach(function (e) {
          e && r.destroy([e.bmp]);
        }), this._fxCache = [], n = true;
      if (n) {
        for (var s = this.getParent(); s && !(s instanceof e && s.hasMixin(e.Stylable));)
          s = s.getParent();
        s && (s._workspace || s._scene) && s._resetFxCacheAndState();
      }
    }, e.Stylable.prototype._fxExists = function (e) {
      var t = this._getFxIdx(e);
      return !!(t >= 0 && this._fxCache[t]);
    }, e.Stylable.prototype._getFxIdx = function (e, t) {
      if (!this._effects)
        return -1;
      for (var require = this._fxCache, n = -1, r = 0; r < require.length; r++)
        if (require[r].fx === e) {
          n = r;
          break;
        }
      if (n < 0)
        return -1;
      for (var o = this._effects.getFirstChild(), a = 0; null !== o; o = o.getNext(), a++)
        if (o === e)
          return n;
      return t && require.splice(r, 1), -1;
    }, e.Stylable.prototype._paintWithEffects = function (e, t, i, n, r, l, h, A, c, p) {
      var u, d, g = false;
      h || (h = []), this._reinvalidateFxDeps(r, h), (e.getWidth() < c.getWidth() - 1 || e.getHeight() < c.getHeight() - 1) && (d = true);
      var f, m = {};
      for (r.some(function (e) {
          return e.isAffectedByContents();
        }) && (f = e.clone(false, {
          renderPhaseDraw: true,
          dontCopyContents: false
        })), u = 0; u < r.length; ++u) {
        var y = r[u], _ = y.getEffectType();
        if (y.isSingleton()) {
          var v = o.getTypeId(y);
          if (m[v])
            continue;
        }
        if (m[v] = true, _ === a.Effect.Type.Filter)
          !A || y instanceof a.Effect && !y.isCacheable(e) ? y.render(e, null, t, e.getScale(), c, this, p) : this._getFxCache(e, y, d ? c : null) || (y.render(e, null, t, e.getScale(), c, this, p), d || this._setFxCache(e, y, r.slice(0, u).concat(h))), f && y.render(f, null, t, e.getScale(), c, this, p);
        else if (_ === a.Effect.Type.PreEffect || _ === a.Effect.Type.PostEffect || _ === a.Effect.Type.Multi) {
          _ === a.Effect.Type.PostEffect && !g && n > 0 && (i.drawCanvas(e, 0, 0, n), g = true), l.clear();
          var b, C = e;
          y.isAffectedByContents() && (C = e, e = f), !A || y instanceof a.Effect && !y.isCacheable(e) ? b = y.render(e, l, t, l.getScale(), c, this, p) : this._getFxCache(l, y, d ? c : null) || (b = y.render(e, l, t, l.getScale(), c, this, p), d || this._setFxCache(l, y, r.slice(0, u).concat(h))), y.isAffectedByContents() && (e = C);
          var w = s.BlendMode.Normal;
          _ === a.Effect.Type.PostEffect && "string" == typeof b && (w = b), i.drawCanvas(l, 0, 0, 1, w), f && f.drawCanvas(l, 0, 0, 1, w);
        }
      }
      f && f.clear(), !g && n > 0 && i.drawCanvas(e, 0, 0, n);
    }, e.Stylable.prototype._paintStyleLayer = function (e, t, i) {
    }, e.Stylable.prototype._isSeparateStylePaintLayer = function (e, t) {
      return false;
    }, e.Stylable.prototype._getStyleMaskClipArea = function (e) {
      return "m" === this.$_sbl ? null : "!m" === this.$_sbl ? "m" === e ? null : this.getPaintBBox() : null;
    }, e.Stylable.prototype._createStyleCanvas = function (e, t, i, n, r) {
      var o = e.canvas.getScale();
      if (e.configuration.paintMode === l.PaintMode.Fast) {
        var a = new s();
        if (o > 1) {
          var c = e.canvas.getScaleBoxCorrection(t.getX(), t.getY(), t.getWidth(), t.getHeight(), o, true);
          a.resize(Math.ceil(c.getWidth()), Math.ceil(c.getHeight()));
        }
        t = t.toAlignedRect(), o <= 1 && a.resize(t.getWidth(), t.getHeight()), a.prepare();
        var u = t.getSide(A.Side.TOP_LEFT);
        return a.setOrigin(u), a.setOffset(u), n && (n[0] = t), a;
      }
      var d = e.canvas.getPaintExtents(t, false, i), g = e.canvas.getFinalExtents(d), f = e.canvas.getTransform().getTranslation(), m = new h(-g.getX(), -g.getY()), y = e.canvas.getTranslateCorrection(f, m), _ = 1 / o;
      if (i) {
        var v = p.computeDownScale(e.canvas, i, e.configuration.defaultEffectDetailLevel);
        r && (r[0] = v), v < 1 && (i = i.map(function (e) {
          return e + Math.max(0, Math.ceil(1 / v));
        }));
      }
      var b = y.getX() * _, C = y.getY() * _, w = t.translated(b, C).expanded(_, _, _, _), E = e.canvas.createCanvas(w, "undefined" != typeof CLIPDIRTY ? CLIPDIRTY : e.configuration.clipDirty, i);
      return n && (d = e.canvas.getPaintExtents(t, true, i), g = e.canvas.getFinalExtents(d), m = new h(-g.getX(), -g.getY()), b = (y = e.canvas.getTranslateCorrection(f, m)).getX() * _, C = y.getY() * _, w = t.translated(b, C).expanded(_, _, _, _), d = e.canvas.getPaintExtents(w, true, i), g = e.canvas.getFinalExtents(d).toRoundedPrecision(), n[0] = new A(g.getX(), g.getY(), Math.ceil(g.getWidth()), Math.ceil(g.getHeight()))), E;
    }, e.Stylable.prototype._stylePrepareGeometryChange = function (t) {
      if (this._notifyChange(e._Change.PrepareGeometryUpdate), t && this.hasMixin(n.Container))
        for (var require = this.getFirstChild(); null !== require; require = require.getNext())
          require instanceof e && require.hasMixin(e.Stylable) && require._stylePrepareGeometryChange(t);
    }, e.Stylable.prototype._styleFinishGeometryChange = function (t) {
      if (this._notifyChange(e._Change.FinishGeometryUpdate, 1), t) {
        if (t instanceof a.Effect ? this._resetFxCacheAndState(t) : this._resetFxCacheAndState(), this.hasMixin(n.Container))
          for (var require = this.getFirstChild(); null !== require; require = require.getNext())
            require instanceof e && require.hasMixin(e.Stylable) && require._styleFinishGeometryChange(t);
      } else
        this._resetFxCacheAndState();
    }, e.Stylable.prototype._styleRepaint = function (t) {
      t && t instanceof a.Effect ? this._resetFxCacheAndState(t) : this._resetFxCacheAndState(), this._notifyChange(e._Change.InvalidationRequest);
    }, e.Stylable.prototype._handleStyleChange = function (e, t) {
      if (this._workspace) {
        if ((e === n._Change.BeforePropertiesChange || e === n._Change.AfterPropertiesChange) && t.properties.indexOf("sref") >= 0 || e === r._Change.SceneAttached || e === r._Change.SceneDetached) {
          var require = this.getReferencedStyle();
          if (require)
            switch (e) {
            case n._Change.BeforePropertiesChange:
            case r._Change.SceneDetached:
              this._scene.unlink(require, this);
              break;
            case n._Change.AfterPropertiesChange:
            case r._Change.SceneAttached:
              this._scene.link(require, this), e === n._Change.AfterPropertiesChange && this.assignStyleFrom(require, true);
            }
        }
        if (e === n._Change.AfterPropertiesChange) {
          var o = t.properties.indexOf("_sbl");
          if (o >= 0) {
            var s = t.values[o], l = this.$_sbl;
            (o >= 0 && "m" === l || "!m" === l || "m" === s || "!m" === s) && this._requestInvalidationArea(this._getStyleMaskClipArea(s));
          }
        }
        this._workspace && (e === n._Change.ParentAttached ? "m" === this.$_sbl && this._requestInvalidationArea(this._getStyleMaskClipArea()) : e === n._Change.ParentDetach && "m" === this.$_sbl && this._requestInvalidationArea(this._getStyleMaskClipArea()));
      }
      e === n._Change.Store ? this.$sref && (t.blob.sref = this.$sref) : e === n._Change.Restore && (this.$sref = t.blob.sref), a.prototype._handleStyleChange.call(this, e, t);
    }, e.Stylable.prototype.equalsStyle = function () {
      return a.prototype.equalsStyle.call(this, this.getReferencedStyle());
    }, e.Stylable.prototype.toString = function () {
      return "[Mixin GElement.Stylable]";
    };
  };
}
