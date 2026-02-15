/**
 * Module 83 - GPage
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
  require(75) /* GEventTarget */;
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(0) /* GObject */, a = require(72) /* GEvent */, s = require(5) /* GPoint */, l = require(69) /* GBlock */, h = require(104) /* GItem */, A = require(6) /* GRect */, c = require(7) /* GTransform */, p = require(22) /* GElement */, u = require(159) /* GLayer */, d = require(112) /* module */, g = require(139) /* GTexturePattern */, f = require(68) /* GColor */, m = require(207) /* GSceneOptions */, y = require(14) /* GPaintCanvas */, _ = require(9) /* GLocale */, v = require(133) /* GScenePaintConfiguration */, b = require(228) /* GPaintContext */, C = require(103) /* module */, w = require(506) /* GAnnotationsList */;
  function E() {
    l.call(this), this._setDefaultProperties(E.GeometryProperties, E.VisualProperties);
  }
  r.inheritAndMix("page", E, l, [
    r.Container,
    p.Transform,
    p.Layout,
    p.Accelerated,
    r.Reference,
    l.LabelHolder
  ]), E.GeometryProperties = {
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
    off: null
  }, E.VisualProperties = {
    bck: null,
    bop: 1
  }, E.InvalidationRequestEvent = function (e) {
    this.area = e || null;
  }, o.inherit(E.InvalidationRequestEvent, a), E.InvalidationRequestEvent.prototype.area = null, E.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GPage.InvalidationRequestEvent]";
  }, E.AfterThumbnailUpdate = function (e, t) {
    this.page = e, this.image = t;
  }, o.inherit(E.AfterThumbnailUpdate, a), E.AfterThumbnailUpdate.prototype.page = null, E.AfterThumbnailUpdate.prototype.image = null, E.AfterThumbnailUpdate.prototype.toString = function () {
    return "[Event GPage.AfterThumbnailUpdate]";
  }, E.prototype._cachedPosition = null, E.prototype._isInvalidating = false, E.prototype._cachedImage = null, E.prototype._shouldRepaintThumbnail = true, E.prototype._annotations = null, E.prototype.getNodeNameTranslated = function () {
    return _.getValue("GPage", "name", this.getNodeName());
  }, E.prototype.transform = function (e, t, i) {
  }, E.prototype.getTransform = function () {
    var e = this.getPosition(1);
    return new c(1, 0, 0, 1, e.getX(), e.getY());
  }, E.prototype.getTrackTempPropNames = function () {
    return this.getPatternPropNames();
  }, E.prototype.getPatternPropNames = function () {
    return ["bck"];
  }, E.prototype.hasAnnotations = function () {
    return !!this._getAnnotations() && !!this._getAnnotations().getFirstChild();
  }, E.prototype.getAnnotations = function () {
    var e = this._getAnnotations();
    return e || (this._annotations = new w(), this.appendChild(this._annotations), this._annotations);
  }, E.prototype._getAnnotations = function () {
    return this._annotations || (this._annotations = this._findAnnotations()), this._annotations;
  }, E.prototype._findAnnotations = function () {
    for (var exports = null, module = this.getLastChild(); null !== module; module = module.getPrevious())
      if (module instanceof w) {
        exports = module;
        break;
      }
    return exports;
  }, E.prototype.setAnnotations = function (e) {
    var t = this._getAnnotations();
    this._annotations = e, t ? (this.insertChild(e, t), this.removeChild(t)) : this.appendChild(this._annotations);
  }, E.prototype.isFixedSized = function () {
    return this.$w && this.$h;
  }, E.prototype.trimToContent = function () {
    var e = this.getContentBBox();
    if (e && !e.isEmpty()) {
      this.setProperties([
        "w",
        "h"
      ], [
        e.getWidth(),
        e.getHeight()
      ]);
      var module = new c().translated(-e.getX(), -e.getY());
      this.getChildren().forEach(function (e) {
        e instanceof p && e.hasMixin(p.Transform) && e.transform(module);
      });
    }
  }, E.prototype.getContentBBox = function () {
    for (var exports = null, module = this.getFirstChild(); null != module; module = module.getNext())
      if (module instanceof p) {
        if ("symbol" === r.getName(module)) {
          var require = module.getChildrenPaintBBox();
          require = module.getEffects() && require && module.getEffects().getEffectsBBox(require, null, require) || require;
          var n = module.getFrame();
          n && !n.isEmpty() && (require = require && require.united(n) || n);
        } else
          require = module.getPaintBBox();
        require && !require.isEmpty() && (exports = exports ? exports.united(require) : require);
      }
    return exports;
  }, E.prototype.getPosition = function (e, t, i, n) {
    if (!t && this._cachedPosition)
      return this._cachedPosition;
    var r = this._getGridPosition(e, i, n);
    return !n && this._scene && e && this.$off && !m.pagesPerRow ? r.add(this.$off.getTranslation()) : r;
  }, E.prototype._getGridPosition = function (e, t, i) {
    if (!this._scene)
      return new s(0, 0);
    if (!e)
      return new s(0, 0);
    var n = this._scene.$lbs + this._scene.$lbp + 5, r = n, o = n;
    if (m.pageGap)
      r = o = m.pageGap;
    else if (!this.isScaleLabel() && this.isFixedSized()) {
      var a = this.getGeometryBBox(), l = 0.125 * (a && a.getWidth() || 0);
      r = o = Math.max(l, this._scene.getLabelBBox(t ? 1 : this.getScaleLabelFactor()).getHeight());
    }
    var h, c, p, u, d = m.pagesPerRow || this._scene.getProperty("pgx"), g = 1, f = Number.MAX_VALUE, y = new s(0, 0), _ = null, v = null;
    h = 0, c = 0, (i || !this.$off || m.pagesPerRow) && this._scene.iteratePages(function (e) {
      if (e === this)
        return false;
      var t = e.$off;
      if (t && !m.pagesPerRow) {
        if (v = t.getTranslation(), m.pagesCanOverlap) {
          var i = v.getX() - h;
          if (i < 0 || i > 0 && i <= e.$w)
            return;
        }
      } else
        v = y;
      g++ % d == 0 ? (h = 0, c += Math.min(f, e.$h + Math.min(0, v.getY())) + r, f = Number.MAX_VALUE) : (h += e.$w + o + Math.min(0, v.getX()), f = Math.min(f, e.$h + Math.min(0, v.getY()) + r));
    }.bind(this)), p = h, u = c, this.$off && (_ = this.$off.getTranslation(), p += _.getX(), u += _.getY());
    var b = new A(p, u, this.$w, this.$h), C = function (i) {
        this._scene.iteratePages(function (n) {
          if (n === this)
            return false;
          var a = n.getPosition(e, true, t), s = new A(a.getX(), a.getY(), n.$w, n.$h).expanded(o, r, o, r);
          s.intersectsRect(b) && (b = i(n, s) || b);
        }.bind(this));
      }.bind(this);
    return this.isScaleLabel() && C(function (e, t) {
      var i = b.intersected(t);
      if (i.getWidth() > i.getHeight())
        return new A(p, t.getY() + e.$h + r + r + this._scene.$lbp * this.getScaleLabelFactor(), this.$w, this.$h);
    }.bind(this)), h = b.getX(), c = b.getY(), _ && (h -= _.getX(), c -= _.getY()), new s(h, c);
  }, E.prototype.getPaintBBox = function (e, t, i, n) {
    return i || this.isVisible() ? t || i ? this._calculatePaintBBox(t, i, n) : (null == this._paintBBox && (this._paintBBox = this._calculatePaintBBox(null, i, n)), this._paintBBox) : null;
  }, E.prototype._calculateGeometryBBox = function (e) {
    if (this.isFixedSized())
      return new A(this.$x, this.$y, this.$w, this.$h);
    var t = l.prototype._calculateGeometryBBox.call(this, e);
    if (t && this.hasAnnotations()) {
      var require = this._getAnnotations().getGeometryBBox();
      require && (t = t.united(require));
    }
    return t;
  }, E.prototype._calculatePageBBox = function (e) {
    var t = this.getGeometryBBox(e);
    if (this.$bl && this.$bl > 0 && (t = t.expanded(this.$bl, this.$bl, this.$bl, this.$bl)), this._scene && !e) {
      var require = this._scene.getShadowExpandArea();
      require && (t = t.expanded(require.left, require.top, require.right, require.bottom));
    }
    return t;
  }, E.prototype._calculatePaintBBox = function (e, t, i) {
    var n = l.prototype._calculatePaintBBox.call(this, null, t);
    if (n && this.hasAnnotations()) {
      var r = this._getAnnotations().getPaintBBox();
      r && (n = n.united(r));
    }
    if (!i && this._scene && this._scene.visitReferences(this, function (i) {
        if (i instanceof E) {
          var r = i.getPaintBBox(null, e, t, true);
          r && (n = n ? n.united(r, true) : n);
        }
      }), this.isFixedSized()) {
      var o = this._calculatePageBBox(t);
      return n ? n.united(o, true) : o;
    }
    return e && e instanceof A ? this._screen = e : e && !this._screen && this._scene && (this._screen = this._scene.getScreenBox()), e && this._screen ? this._screen : n;
  }, E.prototype.getElementsByBBox = function (e, t) {
    var i = [];
    return this.acceptChildren(function (n) {
      if (n instanceof p) {
        var r = n.getPaintBBox();
        r && !r.isEmpty() && (t && e.intersectsRect(r) || !t && e.containsRect(r)) && i.push(n);
      }
    }), i;
  }, E.prototype.getActiveLayer = function () {
    return this.querySingle || require(507) /* module */, this.querySingle("layer:active");
  }, E.prototype.setActiveLayer = function (e) {
    this.acceptChildren(function (t) {
      t instanceof u && t !== e && t.removeFlag(r.Flag.Active);
    }), e && e.setFlag(r.Flag.Active);
  }, E.prototype.updateActiveLayerForElem = function (e) {
    if (e instanceof h) {
      var module = e.findParent(function (e) {
        return e instanceof u;
      });
      module && !module.hasFlag(r.Flag.Active) ? this.setActiveLayer(module) : module || this.setActiveLayer(null);
    } else
      e instanceof u && (e.hasFlag(r.Flag.Active) || e.hasFlag(r.Flag.Selected) ? e !== this.getActiveLayer() && this.setActiveLayer(null) : this.setActiveLayer(e));
  }, E.prototype.getSuccessorActiveLayer = function (e) {
    var t = null;
    if (e instanceof u) {
      for (var require = e.getPrevious(); null !== require; require = require.getPrevious())
        if (require instanceof u) {
          t = require;
          break;
        }
      if (!t)
        for (require = e.getNext(); null !== require; require = require.getNext())
          if (require instanceof u) {
            t = require;
            break;
          }
      t || (t = e.findParent(function (e) {
        return e instanceof u;
      }));
    }
    return t;
  }, E.prototype.deleteActiveLayer = function (e) {
    if (e = e || this.getActiveLayer()) {
      var module = this.getSuccessorActiveLayer(e);
      this.setActiveLayer(module || null), e.getParent().removeChild(e);
    }
  }, E.prototype.getClipBBox = function () {
    if (this.isFixedSized()) {
      var exports = this.getGeometryBBox();
      if (exports && !exports.isEmpty()) {
        var module = this.$bl || 0;
        return exports.expanded(module, module, module, module);
      }
      return exports;
    }
    return null;
  }, E.prototype.getMarginBBox = function () {
    if (this.isFixedSized()) {
      var exports = this.getGeometryBBox();
      return exports && !exports.isEmpty() ? exports.expanded(-this.$ml, -this.$mt, -this.$mr, -this.$mb) : exports;
    }
    return null;
  }, E.prototype._detailHitTest = function (e, t, i, n, r, o, a) {
    var s = this.getGeometryBBox();
    if (!s || s.isEmpty())
      return null;
    var l = this.getPosition(o);
    0 === l.getX() && 0 === l.getY() || (s = s.translated(l.getX(), l.getY()));
    return t && (s = t.mapRect(s)), s.expanded(i, i, i, i).containsPoint(e) ? new d(this, { label: false }) : this._hitTestLabel(e, i, t, !this.isScaleLabel(), l);
  }, E.prototype.validateInsertion = function (e, t) {
    return "scene" === r.getName(e);
  }, E.prototype._invalidateArea = function (e) {
    this.hasEventListeners(E.InvalidationRequestEvent) && this.trigger(new E.InvalidationRequestEvent(e));
  }, E.prototype._paintChildren = function (e) {
    var t = false;
    if (e.configuration.clipArea && e.canvas.hasClip()) {
      var require = e.configuration.clipArea;
      e.canvas.clipRect(require.getX(), require.getY(), require.getWidth(), require.getHeight()), t = true;
    }
    for (var n = this.getFirstChild(); null != n; n = n.getNext())
      n instanceof p && n.paint(e);
    if (this.hasAnnotations() && this._getAnnotations().paint(e), p.Accelerated.PAINT_QTREES) {
      this.paintQTree(e);
      var r = this;
      this.acceptChildren(function (t) {
        if (t.hasMixin(p.Accelerated)) {
          for (var require = 1, n = t; n.getParent() !== r;)
            n = n.getParent(), require++;
          var o = 16711935 >>> (31 & require) | 16711935 << (24 - require & 31) & 16777215;
          t.paintQTree(e, undefined, undefined, "#" + Number(o).toString(16));
        }
      });
    }
    t && e.canvas.resetClip();
  }, E.prototype._getBitmapPaintArea = function () {
    var e = this.getClipBBox();
    return e || l.prototype._getBitmapPaintArea.call(this);
  }, E.prototype._paintToBitmap = function (e) {
    return e.configuration.clipToPage = true, l.prototype._paintToBitmap.call(this, e);
  }, E.prototype.getMasterPages = function () {
    var e = [];
    return this._scene ? this.$refs ? (this._scene.iteratePages(function (t) {
      t !== this && this.$refs.indexOf(t.getReferenceId()) >= 0 && e.push(t);
    }.bind(this), true), e) : null : e;
  }, E.prototype.getSlavePages = function () {
    var e = [];
    return this._scene ? (this._scene.iteratePages(function (t) {
      t !== this && t.$refs && t.$refs.indexOf(this.getReferenceId()) >= 0 && e.push(t);
    }.bind(this), true), e) : e;
  }, E.prototype.isSingleMasterBackgroundContent = function () {
    if (!this._scene)
      return false;
    var e = false, t = null, i = this._scene.getProperty("mpg");
    if (this._scene.isLinked(this, i) ? t = i : (i = this._scene.getProperty("empg"), this._scene.isLinked(this, i) ? t = i : (i = this._scene.getProperty("ompg"), this._scene.isLinked(this, i) && (t = i))), t) {
      var n = t.getProperty("bck"), r = t.getProperty("bop");
      if (n && r > 0 && !(n instanceof f))
        e = true;
      else
        e = !!t.getChildrenGeometryBBox();
    }
    return e;
  }, E.prototype._referenceEvent = function (e) {
    e.target === this && (!e.reference || e.reference instanceof E) && (this._requestInvalidation(), l.prototype._referenceEvent.call(this, e));
  }, E.prototype.isPaintable = function (e, t) {
    if (!e)
      return l.prototype.isPaintable.call(this, e, t);
    if (!this.isVisible())
      return false;
    var i;
    if (null == (i = !e.configuration.multiPageView && e.configuration.isClipToPage() && this.isFixedSized() ? this._calculatePageBBox() : this.getPaintBBox(e.configuration.multiPageView, t)) || i.isEmpty())
      return false;
    if ("m" === this.$_sbl)
      return true;
    if (e) {
      if (e.dirtyMatcher && !e.dirtyMatcher.isDirty(i))
        return false;
      if (e.configuration && e.configuration.clipArea && !e.configuration.clipArea.intersectsRect(i))
        return false;
    }
    return true;
  }, E.prototype._getMasterPageClipRectForPage = function (e, t) {
    var i = null;
    return i = this.isFixedSized() ? new A(this.$x, this.$y, this.$w, this.$h) : this.getPaintBBox(null, e, t), this._scene && this._scene.visitReferences(this, function (n) {
      if (n instanceof E) {
        var r = n.getPaintBBox(null, e, t, true);
        r && (i = i ? i.united(r, true) : i);
      }
    }), i;
  }, E.prototype._paint = function (e, t) {
    for (var require = e.canvas, n = false, r = this.getFirstChild(); null !== r; r = r.getNext())
      if (r instanceof p) {
        n = true;
        break;
      }
    !n && this._getAnnotations() && this._getAnnotations().isPaintable() && (n = true);
    var o = require.resetTransform(), a = e.isIncludingInvisible();
    if (this.isFixedSized()) {
      var l = false, h = new A(this.$x, this.$y, this.$w, this.$h), u = (F = o.mapRect(h).toAlignedRect()).getX(), d = F.getY(), y = F.getWidth(), _ = F.getHeight();
      if (e.configuration.sceneBackground && !e.configuration.isOutline(e) && this.$bck && this.$bop > 0) {
        var v;
        if (this.$bck instanceof g) {
          var b = this.getTransform() || new c(), C = this.getSourceBBox(a) || this.getGeometryBBox(a);
          v = this.$bck.createTextureTransform(C, b);
        }
        if (R = e.canvas.createPatternPaint(this.$bck, this.$bck instanceof g ? null : F, v))
          if (R.transform) {
            require.putVertices([
              new s(u, d),
              new s(u + y, d),
              new s(u + y, d + _),
              new s(u, d + _)
            ], true);
            var w = require.setTransform(require.getTransform(true).preMultiplied(R.transform));
            require.fillVertices(R.paint, this.$bop, null, false), require.setTransform(w);
          } else {
            if (e.configuration.multiPageView && m.pagesCanOverlap)
              if ("undefined" != typeof navigator && navigator && 0 == navigator.userAgent.indexOf("Mozilla") && 0 == navigator.platform.indexOf("Win") && navigator.userAgent.indexOf("Edge") < 0 && navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Safari") < 0)
                require.strokeRect(u - 0.5, d - 0.5, y + 1, _ + 1, null, 1, 0.4);
              else {
                var B = e.configuration.pageDecoration, x = (B.shadow, B.shadowOffsetX || 0), P = B.shadowOffsetY || 0;
                require._canvasContext.shadowColor = B.shadowBackground || "rgba(0,0,0,0.5)", require._canvasContext.shadowBlur = B.shadow, require._canvasContext.shadowOffsetX = x, require._canvasContext.shadowOffsetY = P;
              }
            require.fillRect(u, d, y, _, R.paint, this.$bop), e.configuration.multiPageView && m.pagesCanOverlap && (require._canvasContext.shadowColor = "rgba(0,0,0,0)");
          }
      }
      if (this._scene && !this.getProperty("cdr", true)) {
        var S = this._getMasterPageClipRectForPage(t, true);
        if (S && !S.isEmpty()) {
          var T = o.mapRect(S).toAlignedRect();
          this._scene.visitReferences(this, function (t) {
            if (t instanceof E) {
              if (require.hasClip() && !l)
                if (l = true, e.configuration.isClipToPage()) {
                  var n = this.$bl || 0;
                  require.clipRect(u - n, d - n, y + 2 * n, _ + 2 * n);
                } else
                  require.clipRect(T.getX(), T.getY(), T.getWidth(), T.getHeight());
              t.$bck && require.fillRect(u, d, y, _, t.$bck, t.$bop), t._paintChildren(e);
            }
          }.bind(this));
        }
      }
      if (n && !l && e.configuration.isClipToPage() && require.hasClip() && !e.configuration.multiPageView) {
        var I = this.$bl || 0;
        require.clipRect(u - I, d - I, y + 2 * I, _ + 2 * I), l = true;
      } else
        l && (require.resetClip(), l = false);
      n && this._paintChildren(e), l && require.resetClip();
    } else {
      if ((h = this.getPaintBBox(null, t, a)) && !h.isEmpty()) {
        var F, R;
        u = (F = o.mapRect(h).toAlignedRect()).getX(), d = F.getY(), y = F.getWidth(), _ = F.getHeight();
        if (e.configuration.sceneBackground && !e.configuration.isOutline(e) && this.$bck && this.$bop > 0 && this.$bck instanceof f)
          if (R = e.canvas.createPatternPaint(this.$bck, F, null))
            if (R.transform) {
              require.putVertices([
                new s(u, d),
                new s(u + y, d),
                new s(u + y, d + _),
                new s(u, d + _)
              ], true);
              w = require.setTransform(require.getTransform(true).preMultiplied(R.transform));
              require.fillVertices(R.paint, this.$bop, null, false), require.setTransform(w);
            } else
              require.fillRect(u, d, y, _, R.paint, this.$bop);
      }
      n && this._paintChildren(e);
    }
    require.setTransform(o);
  }, E.prototype._handleChange = function (e, t) {
    if (e === r._Change.Store)
      this.storeProperties(t.blob, E.GeometryProperties, function (e, t) {
        return "off" === e && t ? c.serialize(t) : t;
      }), this.storeProperties(t.blob, E.VisualProperties, function (e, t) {
        return "bck" === e && t ? n.serialize(t) : t;
      });
    else if (e === r._Change.Restore)
      this.restoreProperties(t.blob, E.GeometryProperties, function (e, t) {
        return "off" === e && t ? c.deserialize(t) : t;
      }), this.restoreProperties(t.blob, E.VisualProperties, function (e, t) {
        return "bck" === e && t ? n.deserialize(t) : t;
      });
    else if (e === r._Change.BeforePropertiesChange) {
      var require = false, o = t.properties.indexOf("w"), a = t.properties.indexOf("h");
      if (o >= 0 ? t.values[o] > 0 ? 0 == t.values[a] && (require = true) : require = true : 0 == t.values[a] && (require = true), this._scene)
        t.properties.indexOf("off") >= 0 && this._requestInvalidation();
      if (require && this._scene) {
        var s = 0;
        this._scene.iteratePages(function (e) {
          if (s++)
            return false;
        }), s > 1 && !(o >= 0 && a >= 0) && (o >= 0 && (t.properties.splice(o, 1), t.values.splice(o, 1)), a >= 0 && (t.properties.splice(a, 1), t.values.splice(a, 1)));
      }
    } else if (e === r._Change.AfterPropertiesChange) {
      if (this._scene) {
        t.properties.indexOf("name") >= 0 && this._requestInvalidation();
        o = t.properties.indexOf("w"), a = t.properties.indexOf("h");
        if (!m.pagesCanOverlap && (o >= 0 || a >= 0)) {
          var h = this.doCollisionlessTransform(new c(), null, true).getTranslation(), A = this.getProperty("off") || new c();
          this.setProperty("off", A.translated(h.getX(), h.getY()));
        }
      }
    } else if (e === r._Change.AfterFlagChange) {
      var u = this.getScene();
      u && t.set && t.flag === r.Flag.Active && u.setActivePage(this);
    } else
      e == r._Change.AfterChildInsert ? t instanceof w && (this._notifyChange(p._Change.ChildGeometryUpdate, [
        t,
        1
      ]), t._handleChange(p._Change.InvalidationRequest)) : e == r._Change.BeforeChildRemove ? t instanceof w && this._requestInvalidateNode(t) : e == r._Change.AfterChildRemove && t instanceof w && this._notifyChange(p._Change.ChildGeometryUpdate, [
        t,
        1
      ]);
    if (this._handleGeometryChangeForProperties(e, t, E.GeometryProperties), this._handleVisualChangeForProperties(e, t, E.VisualProperties), l.prototype._handleChange.call(this, e, t), e !== p._Change.InvalidationRequested || this._isInvalidating) {
      if (e === p._Change.FinishGeometryUpdate)
        this.isPaintable() && (this._shouldRepaintThumbnail = true);
      else if (e === p._Change.ChildGeometryUpdate && (t[0] instanceof p || t[0] instanceof w) && t[0].getParent() === this && t[1] && this._scene) {
        var d = t[2] || t[0].getPaintBBox();
        this._scene._notifyChange(p._Change.ChildGeometryUpdate, [
          this,
          1,
          d
        ]);
      }
    } else
      this._isInvalidating = true, this._scene && (this.isPaintable() && (this._shouldRepaintThumbnail = true), this._scene.visitLinks(this, function (e) {
        e instanceof E && e._requestInvalidation();
      }.bind(this))), this._isInvalidating = false;
  }, E.prototype.doCollisionlessTransform = function (e, t, i) {
    var n = this.getScene();
    if (!n)
      return e;
    var r, o, a, s, l = 0, h = i ? this._calculateGeometryBBox() : this.getGeometryBBox();
    if (!h)
      return e;
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
    var d = this.getPosition(true), g = new c(1, 0, 0, 1, d.getX(), d.getY()), f = e.multiplied(g).mapRect(h), m = f.getX(), _ = f.getX() + f.getWidth(), v = f.getY(), b = f.getY() + f.getHeight(), C = f.getSide(A.Side.CENTER);
    do {
      o = false, n.iteratePages(function (i) {
        if (t || i !== this) {
          var n = i.getGeometryBBox();
          if (n) {
            var l = i.getPosition(true), p = (n = n.translated(l.getX(), l.getY()).expanded(s, a, a, a)).getX(), u = n.getX() + n.getWidth(), d = n.getY(), y = n.getY() + n.getHeight();
            if (n.intersectsRect(f)) {
              if (!r) {
                var w = n.getSide(A.Side.CENTER);
                r = C.subtract(w);
              }
              var E = 0, B = 0;
              return E = r.getX() > 0 ? u - m : p - _, B = r.getY() > 0 ? y - v : d - b, Math.abs(E) < Math.abs(B) ? B = 0 : E = 0, e = e.multiplied(new c(1, 0, 0, 1, E, B)), f = e.multiplied(g).mapRect(h), m = f.getX(), _ = f.getX() + f.getWidth(), v = f.getY(), b = f.getY() + f.getHeight(), C = f.getSide(A.Side.CENTER), o = true, false;
            }
          }
        }
      }.bind(this)), u++;
    } while (o && u < l);
    return e;
  }, E.prototype.getPageImage = function () {
    if (!this._cachedImage || this._shouldRepaintThumbnail) {
      this.toBitmap(null, null, null, null, {
        paintMode: v.PaintMode.Fast,
        defaultEffectDetailLevel: 0.5 / y.getScreenDPI()
      });
      return this._cachedImage;
    }
    return this._cachedImage;
  }, E.prototype.assignFrom = function (e) {
    e instanceof E && this.transferProperties(e, [
      E.GeometryProperties,
      E.VisualProperties
    ]), this._cachedImage = e._cachedImage, l.prototype.assignFrom.call(this, e);
  }, E.prototype._invalidationFinishedHandler = function (e) {
    if (this._shouldRepaintThumbnail && e.configuration.pageThumbnails) {
      this._shouldRepaintThumbnail = false;
      var module = this;
      this._getPageThumbnail(e.configuration.pageThumbnailSize, e.configuration.pageThumbnailSize, function (e) {
        e && (module._cachedImage = e, setTimeout(function () {
          module.trigger(new E.AfterThumbnailUpdate(module, module._cachedImage));
        }));
      });
    }
  }, E.prototype.paint = function (e, t) {
    if (this._preparePaint(e, t) && (this._paint(e, t), this._finishPaint(e), this._shouldRepaintThumbnail && e.configuration.pageThumbnails)) {
      this._shouldRepaintThumbnail = false;
      var require = this;
      require._getPageThumbnail(e.configuration.pageThumbnailSize, e.configuration.pageThumbnailSize, function (e) {
        e && (require._cachedImage = e, setTimeout(function () {
          require.trigger(new E.AfterThumbnailUpdate(require, require._cachedImage));
        }));
      });
    }
  }, E.prototype._getPageThumbnail = function (e, t, i) {
    var n = this.getGeometryBBox();
    if (!n || n.isEmpty())
      return null;
    var r = n.getWidth(), o = n.getHeight() / r, a = e, l = a * o;
    l > t && (a = (l = t) / o);
    var h = a / n.getWidth(), A = l / n.getHeight(), c = 1 * Math.min(h, A), p = Math.round(1 * a), u = Math.round(1 * l), d = new y();
    d.resize(p, u);
    var g = new b();
    g.canvas = d;
    var f = new v();
    if (f.paintMode = v.PaintMode.Full, f.paintSharp = false, f.annotations = false, g.configuration = f, f.clipArea = n.scaled(1, 1), f.clipDirty = false, f.enableFxCache = false, f.defaultEffectDetailLevel = 1, d.prepare(), d.setOrigin(new s(n.getX() * c, n.getY() * c)), d.setScale(c), C.isRenderPhase()) {
      var m = this;
      C.tryRunRendering(d, function () {
        try {
          m.paint(g);
        } finally {
          d.finish();
        }
      }, i, false);
    } else {
      try {
        this.paint(g);
      } finally {
        d.finish();
      }
      i(d);
    }
  }, exports.exports = E;
}
