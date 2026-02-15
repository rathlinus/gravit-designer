/**
 * Module 70 - GText
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
  (function (t) {
    var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(281) /* GFontManager */, a = require(11) /* GUtil */, s = require(265) /* GBackground */, l = require(5) /* GPoint */, h = (require(14) /* GPaintCanvas */, require(139) /* GTexturePattern */), A = require(568) /* module */, c = require(179) /* GPathUtil */, p = require(28) /* GStylable */, u = require(148) /* module */, d = require(215) /* GTLPathTextTransformer */, g = require(266) /* GTLDirectionTextTransformer */, f = require(367) /* module */, m = require(138) /* GGradient */, y = require(369) /* module */, _ = require(17) /* GRGBColor */, v = require(108) /* GFont */, b = require(56) /* GShape */, C = require(6) /* GRect */, w = require(54) /* GVertexContainer */, E = require(22) /* GElement */, B = require(7) /* GTransform */, x = require(63) /* GVertexTransformer */, P = require(112) /* module */, S = require(48) /* GVertex */, T = require(188) /* GCMYKColor */, I = require(45) /* GPathBase */, F = require(60) /* GPath */, R = require(12) /* GMath */, D = require(76) /* module */, k = require(111) /* GRendererCtx */, G = require(9) /* GLocale */, Q = require(59) /* GVertexInfo */, M = require(176) /* GSystem */;
    function N() {
      b.call(this), this._setDefaultProperties(N.GeometryProperties), this._setDefaultProperties(N.MetaProperties), this._runs = [], this._runsDirty = false, this.$w = 142, this.$h = 27.236, this._vertexContainer = new w();
    }
    N.MAXLENGTH = 8192, N.VMARGIN = 0, N.HMARGIN = 1, N.DEFAULTFONT = new A("gravit", "is", "thebest"), N.dontStorePaths = true, r.inheritAndMix("text", N, b, [r.Reference]), N.HITTEST_TEXT = false, N.HITTEST_BOX = true, N.VerticalAlign = {
      Top: "t",
      Middle: "m",
      Bottom: "b"
    }, N.Markers = {
      Bullet: "Bullet",
      Check: "Check",
      Square: "Square",
      Number: "Number",
      RomanBracket: "RomanBracket",
      RomanDot: "RomanDot"
    }, N.GeometryProperties = {
      aw: true,
      ah: true,
      afs: false,
      va: N.VerticalAlign.Top,
      ttrf: null,
      head: 0,
      content: null,
      w: 1,
      h: 1,
      tpthd: d.TransformerParams.direction,
      tptho: d.TransformerParams.offset,
      tpths: d.TransformerParams.side,
      tpthl: d.TransformerParams.distance,
      atPath: null,
      dir: g.LTR
    }, N.PropertyMapping = {
      _tff: "fontFamily",
      _tfw: "fontWeight",
      _tfs: "fontStyle",
      _plh: "lineSpacing",
      _pas: "paragraphSpacing",
      _pai: "paragraphIndent",
      _pal: "align",
      _tws: "wordSpacing",
      _tcs: "charSpacing",
      _ttsc: "script",
      _ttrf: "transformation",
      _tdu: "underline",
      _tds: "strikeout",
      _tlig: "ligatures",
      _tfrac: "fractions",
      _tstyls: "stylisticSet",
      _tlocl: "localizedForm",
      _fc: "fontColor",
      _tfi: "fontSize",
      _tlsc: "langScript",
      _tv: "variant"
    }, N.VisualProperties = {}, N.MetaProperties = {
      _we: false,
      _bkpPath: null,
      sc: false,
      _ed: true
    }, N._serializeContent = function (e, t) {
      return "fontColor" === e && t instanceof n ? n.serialize(t) : t;
    }, N._deserializeContent = function (e, t) {
      if ("fontColor" === e) {
        if ("transparent" === t)
          return _.BLACK;
        if ("string" == typeof t)
          return n.deserialize(t) || t;
        if ("object" == typeof t)
          return 3 === t._value.length ? new _(t._value) : new T(t._value);
      }
      return t;
    }, N.prototype._tempText = null, N.prototype._startText = null, N.prototype._setTextWhenAvailable = false, N.prototype._lastResolutionFill = -1, N.prototype._lastResolutionBorder = -1, N.prototype._attachedPath = null, N.prototype._pendingAttachedPath = null, N.prototype._oldTrf = null, N.prototype._lastFillPaintLayer = null, N.prototype._lastBorderPaintLayer = null, N.prototype._legacyHeight = false, N.prototype._repairedHeight = false, N.prototype._addedDestroyable = false, N.prototype._lastActualBounds = null, N.prototype.getNodeNameTranslated = function () {
      return G.getValue("GText", "name", this.getNodeName());
    }, N.prototype._hasStyleBorderPadding = false, N.prototype._fontsToResolve = null, N.prototype._deferredRangeSetters = null, N.prototype._waitForWorkspace = false, N.prototype._deferredRestore = null, N.prototype._pendingProperties = null, N.prototype._hasFontManagerListener = false, N.prototype._verticalShift = 0, N.prototype._runs = null, N.prototype._runsDirty = false, N.prototype._verticesDirty = false, N.prototype._tlCore = null, N.prototype._resolution = 1, N.prototype._vertexContainer = null, N.prototype._isVirgin = true, N.prototype._vertexIterator = 0, N.prototype._hasEmbeddedFonts = false, N.prototype._isEdited = false, N.prototype._contentChangedHandler = null, N.prototype.deferredLoadHandler = null, N.prototype._serializedBackupPaths = null, N.prototype.__deserializedBackupPaths = null, Object.defineProperty(N.prototype, "_deserializedBackupPaths", {
      get: function () {
        if (this.__deserializedBackupPaths)
          return this.__deserializedBackupPaths;
        if (this._serializedBackupPaths) {
          var exports, t = this._serializedBackupPaths;
          try {
            exports = "string" == typeof t ? JSON.parse(t) : t, this.__deserializedBackupPaths = exports.map(function (e) {
              return "string" == typeof e ? r.deserialize(e) : r.restore(e);
            });
          } finally {
            return this.__deserializedBackupPaths;
          }
        }
        return null;
      },
      set: function (e) {
        this._serializedBackupPaths = "dummy", this.__deserializedBackupPaths = e;
      }
    }), N.prototype.getContent = function () {
      var e = this.getTLCore();
      return !e || this._tempText ? this._tempText : e.getRichContent();
    }, N.prototype.contentChangedHandler = function (e, t) {
      var i = this.getTLCore();
      i ? (i.contentChanged(e, t), this._contentChangedHandler = null) : this._contentChangedHandler = {
        handler: e,
        removeSub: t
      };
    }, N.prototype.hasPathAttached = function () {
      return !!this._attachedPath;
    }, N.prototype.attachPath = function (e) {
      var t = null;
      if (this.isRecordedTransaction())
        t = this.getProperty("atPath"), this._attachPath(e, t ? r.deserialize(t) : null);
      else {
        if (this._atPath = e, e) {
          var require = e.cloneAnchorPoints(), n = e instanceof F || e.getProperty("closed") ? new F(e.getProperty("closed"), e.getProperty("evenodd"), require) : new I(e.getProperty("evenodd"), require);
          n && (n.assignFrom(e), t = r.serialize(n));
        }
        this.setProperty("atPath", t), this._atPath = null;
      }
    }, N.prototype._trySetPath = function (e, t, i, n, r, o) {
      var s = this.getTLCore();
      if (s && e) {
        var l = s.getTransformer(d.TYPE), h = 0;
        if (e && e.hasMixin(p)) {
          var A = e.getPaintLayers();
          A && a.each(A.getBorderLayers(true), function (e, t) {
            h = Math.max(h, t.$_bw);
          });
        }
        s.setPath(e, this._correctDirOnPath(t), this._correctSideOnPath(i), e ? n ? n - h / 2 + 0.5 : -h / 2 + 0.5 : n, e ? r ? r - h / 2 + 0.5 : -h / 2 + 0.5 : r), this._runsDirty = true, this._verticesDirty = true;
        var c = this._getApplyPreTransform(d.TYPE);
        return l ? s.setPath(l._basePath, d.DIRECTION_OUTWARDS, l._params.side, l._params.offset, l._params.distance, null) : s.setPath(null, d.DIRECTION_OUTWARDS, this._correctSideOnPath(i), 0, 0), this._runsDirty = true, this._verticesDirty = true, c;
      }
      return null;
    }, N.prototype._setDirection = function (e) {
      var t = this.getTLCore();
      return t && t.getDirection() !== e ? (t.setDirection(e), this._runsDirty = true, this._verticesDirty = true, this._getApplyPreTransform(g.TYPE) || new B()) : null;
    }, N.prototype._getApplyPreTransform = function (e) {
      var t = this.getTLCore();
      if (!t || !t.getTransformer())
        return null;
      var i = t.getTransformer(e);
      return i ? i.getPreTransform(this) : null;
    }, N.prototype._correctDirOnPath = function (e) {
      var t = e || this.$tpthd;
      if (this.$dir === g.LTR)
        return t;
      if (this.$trf) {
        var require = this.$trf.decomposed();
        require && require.scale.getMatrix()[0] < 0 && (t = t === d.DIRECTION_INWARDS ? d.DIRECTION_OUTWARDS : d.DIRECTION_INWARDS);
      }
      return t;
    }, N.prototype._correctSideOnPath = function (e) {
      var t = e || this.$tpths;
      if (this.$dir === g.LTR)
        return t;
      if (this.$trf) {
        var require = this.$trf.decomposed();
        require && require.scale.getMatrix()[0] < 0 && (t = t === d.OUTSIDE ? d.INSIDE : d.OUTSIDE);
      }
      return t;
    }, N.prototype._attachPath = function (e, t) {
      var i = this.getTLCore();
      if (i) {
        this._verticesDirty = true, this._runsDirty = true;
        var n = 0;
        if (t && t.hasMixin(p)) {
          var r = t.getPaintLayers();
          r && a.each(r.getBorderLayers(true), function (e, t) {
            n = Math.max(n, t.$_bw);
          });
        }
        i.setPath(t, this._correctDirOnPath(), this._correctSideOnPath(), t ? this.$tptho ? this.$tptho - n / 2 + 0.5 : -n / 2 + 0.5 : this.$tptho, this.$tpthl), t && (this.hasPathAttached() || this.isRecordedTransaction() || (this._oldTrf = this.getProperty("trf"))), this._attachedPath = e;
      } else
        this._pendingAttachedPath = e;
    }, N.prototype._calculatePreTransformRect = function (e) {
      var t = null;
      if (e && e.invertible()) {
        var require = null;
        (t = this.getGeometryBBox()) ? (require = e.inverted().mapQuadrilateral(t), t = C.fromPoints.apply(null, require)) : t = null;
      } else
        t = this.getGeometryBBox();
      return t;
    }, N.prototype._calculateSourceBBox = function (e) {
      if (this.isFakeText()) {
        for (var t = this.getProperty("trf"), require = this._deserializedBackupPaths.length ? this._deserializedBackupPaths[0].getPreTransformRect(t) : null, n = 1; n < this._deserializedBackupPaths.length; n++) {
          var r = this._deserializedBackupPaths[n].getPreTransformRect(t);
          require && r ? require = require.united(r) : r && (require = r);
        }
        return require;
      }
      return new C(0, 0, this._getWidth(), this._getHeight());
    }, N.prototype._calculateBBoxSpacing = function () {
      if (!this.$aw)
        return 0;
      var e = this.getTLCore();
      return e ? e.getBBoxSpacing() : 0;
    }, N.prototype._calculateGeometryBBox = function (e) {
      if (this.isFakeText()) {
        for (var t = this._deserializedBackupPaths.length ? this._deserializedBackupPaths[0].getGeometryBBox(e) : null, require = 1; require < this._deserializedBackupPaths.length; require++)
          t = t.united(this._deserializedBackupPaths[require].getGeometryBBox(e));
        return t;
      }
      var n = new C(), r = this.getTLCore();
      if (!r)
        return n;
      if (this.isFakeText())
        return this.getGeometryBBox(e);
      if (this._runsDirty || !r.getCanvas()) {
        if (!this._workspace)
          return this._waitForWorkspace = true, n;
        r.setWidth(this.$aw ? f.AUTO : this._getWidth() - 2 * N.HMARGIN), r.setHeight(this.$ah ? f.AUTO : this._getHeight() - 2 * N.VMARGIN), (-1 === this.$w || this.hasPathAttached()) && (this.$w = r.getWidth() + 2 * N.HMARGIN), (-1 === this.$h || this.hasPathAttached()) && (this.$h = r.getHeight() + 2 * N.VMARGIN);
      }
      if (e) {
        if (r.constructor === f) {
          var o = this.getTextShapes();
          for (n = null, require = 0; require < o.length; ++require) {
            var a = o[require];
            t = Q.calculateBounds(a, true);
            n = n ? n.united(t) : t;
          }
          if (n)
            return n;
        }
        if (this.hasPathAttached()) {
          var s = r.getWidth();
          s = s > 0 ? s : this._getWidth() - 2 * N.HMARGIN;
          var l = r.getHeight();
          l = l > 0 ? l : this._getHeight() - 2 * N.VMARGIN, n = new C(0, 0, s, l);
        } else {
          var h = r.getRealBounds();
          n = new C(h.l, h.t, h.w, h.h);
        }
      } else
        n = new C(0, 0, this._getWidth(), this._getHeight());
      return this.$trf && (n = this.$trf.mapRect(n)), n;
    }, N.prototype._calculatePaintBBox = function (e, t) {
      var i = b.prototype._calculatePaintBBox.apply(this, arguments);
      if (i) {
        var n = this.getTLCore();
        if (n) {
          var r = Math.max(2 * n.getLeftPadding(), 2 * n.getRightPadding()), o = 2 * n.getTopPadding();
          if (i = i.expanded(r, o, r + this._calculateBBoxSpacing(), o), this.hasStyleBorder() || this._hasStyleBorderPadding) {
            var a = 0;
            this.getPaintLayers().getBorderLayers(true).forEach(function (e) {
              var t = this.getStyleBorderPadding(e);
              t && (a = Math.max(a, t));
            }.bind(this)), a && n.setPadding(a), this.hasStyleBorder() ? this._hasStyleBorderPadding = true : this._hasStyleBorderPadding = false;
          }
        }
      }
      return i;
    }, N.prototype._styleRepaint = function (e) {
      this._runsDirty = true, b.prototype._styleRepaint.call(this, e);
    }, N.prototype._styleFinishGeometryChange = function (e) {
      this._runsDirty = true, b.prototype._styleFinishGeometryChange.call(this, e);
    }, N.prototype._checkHasEmbeddedAndResetFakeText = function () {
      if (this._hasEmbeddedFonts = false, this._workspace)
        try {
          var exports = this.$content && JSON.parse(this.$content, N._deserializeContent) || this.getContent();
          if (exports) {
            var t = true;
            return (exports = this._fixText(exports)).forEach(function (e) {
              var i = this._workspace.getFontManager().getFont(this._getGravitValue("fontFamily", e.fontFamily), this._getGravitValue("fontStyle", e.fontStyle), this._getGravitValue("fontWeight", e.fontWeight));
              i && i.isResolved() || (t = false), i && i.isEmbedded() && (this._hasEmbeddedFonts = true);
            }.bind(this)), void (t && !this._hasEmbeddedFonts && (this._serializedBackupPaths = null));
          }
        } catch (e) {
          console.warn("Text: couldn't parse content: " + e.message);
        }
    }, N.prototype.setText = function (e, t, i) {
      var n, r = this.getTLCore();
      if (e = this._shorten(e), M.OperatingSystem.Windows && (e = a.replaceMicrosoftLineFeed(e)), r) {
        t && (n = r.getDocumentRange().plainText()), i && r.lockChangeEvents(1);
        if (this._workspace) {
          if (e instanceof Array) {
            for (var o, s, l, h, A = true, c = 0; c < e.length; c++)
              s = this._getGravitValue("fontFamily", e[c].fontFamily || u.defaultFormatting.fontFamily), l = this._getGravitValue("fontStyle", e[c].fontStyle || u.defaultFormatting.fontStyle), h = this._getGravitValue("fontWeight", e[c].fontWeight || u.defaultFormatting.fontWeight), (o = this._workspace.getFontManager().getFont(s, l, h)) && o.isResolved() || (this._requireResolvedFont(o), A = false);
            if (!A)
              return void (this._setTextWhenAvailable = true);
          }
        } else
          this._waitForWorkspace = true;
        var p = r.setText(e);
        if (i && r.lockChangeEvents(0), this._startText || (this._startText = p ? JSON.stringify(r.getRichContent(), N._serializeContent) : e), !p)
          return;
        if (this._setTextWhenAvailable = false, this._tempText = null, t) {
          var d, g, f;
          d = (f = r.getDocumentRange().plainText()).length, g = n.length;
          var m, y, _, v = Math.min(d, g);
          for (c = 0; c < v && n.charAt(c) == f.charAt(c);)
            c++;
          for (m = c, c = 0; c < v && n.charAt(g - c - 1) == f.charAt(d - c - 1);)
            c++;
          (_ = d - c) - (y = m) <= 1 && (d < g ? _ = y : y = _), r.select(y, _);
        }
      } else
        this._tempText = e;
    }, N.prototype.getPlainText = function () {
      var e = null, t = this.getTLCore();
      return t ? (e = t.getDocumentRange().plainText()) || (e = this._startText) : this._tempText && (e = this._tempText), e;
    }, N.prototype.getStylePropertySets = function () {
      return b.prototype.getStylePropertySets.call(this).concat(p.PropertySet.Text, p.PropertySet.Paragraph);
    }, N.prototype.rewindVertices = function (e) {
      if (this.isFakeText()) {
        var t = true;
        this._vertexIterator = 0;
        for (var require = 0; require < this._deserializedBackupPaths.length; require++)
          t = t && this._deserializedBackupPaths[require].rewindVertices(0);
        return t;
      }
      var n = this.getTLCore();
      return !!n && (this._verticesDirty && (this._vertexContainer.clearVertices(), n.renderVertices(this._vertexContainer), this._verticesDirty = false), this._vertexContainer.rewindVertices(e));
    }, N.prototype.getTextShapes = function () {
      if (this.isFakeText())
        return this._deserializedBackupPaths;
      var e = this.getTLCore();
      if (!e)
        return [];
      if (!I || !c.createPathFromVertexSource)
        return [];
      e.setWidth(this.$aw ? f.AUTO : this._getWidth() - 2 * N.HMARGIN), e.setHeight(this.$ah ? f.AUTO : this._getHeight() - 2 * N.VMARGIN);
      var t = [], i = [], n = e.getDocumentRange().getFormatting().fontColor;
      if (n && "transparent" !== n) {
        e.renderVerticesWithStyle(t);
        for (var r = t.length - 2; r >= 0; r--) {
          var o = t[r], a = t[r + 1];
          o.fill == a.fill && o.stroke == a.stroke && o.textFill == a.textFill && o.textStroke == a.textStroke && (t.splice(r, 1), o.vertices && a.vertices && a.vertices.appendVertices(o.vertices));
        }
        m = this.$trf || new B();
        (g = e.getRenderBounds()) || (g = new C(0, 0, e.getWidth(), e.getHeight()));
        y = new l(0, 0);
        this.$va && !this.hasPathAttached() && ("m" == this.$va ? y = new l(0, (e.getHeight() - e.getActualHeight()) / 2) : "b" == this.$va && (y = new l(0, e.getHeight() - e.getActualHeight()))), this.$trf = null;
        for (r = 0; r < t.length; r++) {
          var s, h = t[r];
          if (h.vertices && h.vertices.getCount())
            if (h.vertices = new x(h.vertices, new B().translated(-g.getX() + y.getX(), -g.getY() + y.getY()).multiplied(m)), s = c.createPathFromVertexSource(h.vertices, null, true)) {
              if (s.assignFrom(this), s.setProperty("evenodd", this._isEvenOddFill()), h.textFill)
                this.getPaintLayers().getFillLayers(false).length || (s.getPaintLayers().clearFillLayers(), s.getPaintLayers().appendChild(new p.FillPaintLayer(h.textFill)));
              else if ("string" == typeof h.fill || h.fill instanceof String) {
                if (!this.getPaintLayers().getFillLayers(false).length)
                  (A = _.parseCSSColor(h.fill)) && (s.getPaintLayers().clearFillLayers(), s.getPaintLayers().appendChild(new p.FillPaintLayer(new _(A.slice(0, 3)), A[3])));
              }
              if ((h.textStroke || "string" == typeof h.stroke || h.stroke instanceof String) && !this.getPaintLayers().getBorderLayers(true).length) {
                var A, u = null, d = 1;
                if (h.textStroke)
                  u = h.textStroke;
                else
                  (A = _.parseCSSColor(h.stroke)) && A[3] > 0 && (u = new _(A.slice(0, 3)), d = A[3]);
                u && (s.getPaintLayers().clearBorderLayers(), s.getPaintLayers().appendChild(new p.BorderPaintLayer(u, d)));
              }
              i.push(s);
            }
        }
        m.isIdentity() || (this.$trf = m);
      } else {
        this.rewindVertices(0);
        var g, m = this.$trf || new B();
        (g = e.getRenderBounds()) || (g = new C(0, 0, e.getWidth(), e.getHeight()));
        var y = new l(0, 0);
        this.$va && !this.hasPathAttached() && ("m" == this.$va ? y = new l(0, (e.getHeight() - e.getActualHeight()) / 2) : "b" == this.$va && (y = new l(0, e.getHeight() - e.getActualHeight())));
        var v = this._vertexContainer;
        v = new x(v, new B().translated(-g.getX() + y.getX(), -g.getY() + y.getY()).multiplied(m)), (s = c.createPathFromVertexSource(v, null, true)) && (this.$trf = null, s.assignFrom(this), m.isIdentity() || (this.$trf = m), i.push(s));
      }
      return i;
    }, N.prototype.readVertex = function (e, t) {
      if (this.isFakeText())
        return !!this.hasVertexForRead() && this._deserializedBackupPaths[this._vertexIterator].readVertex(e);
      var i = this._vertexContainer.readVertex(e);
      if ((e.x || 0 === e.x) && t && (e.x += N.HMARGIN / t), i && e.command !== S.Command.Close && this.$trf || this.hasPathAttached() && this._tlCore && this._tlCore.isInitialized()) {
        var n;
        if (this.hasPathAttached()) {
          var r = this._tlCore.getRenderBounds();
          n = new B(1, 0, 0, 1, -r.getX(), -r.getY()).multiplied(this.$trf || new B());
        } else
          n = this.$trf;
        n.map(e);
      }
      return i;
    }, N.prototype.assignFrom = function (e) {
      e instanceof N && this.transferProperties(e, [
        N.GeometryProperties,
        N.MetaProperties
      ]), I.prototype.assignFrom.call(this, e);
    }, N.prototype.hasVertexForRead = function () {
      return this.isFakeText() ? this._deserializedBackupPaths[this._vertexIterator] && this._deserializedBackupPaths[this._vertexIterator].hasVertexForRead() : this._vertexContainer.hasVertexForRead();
    }, N.prototype.repaint = function (e) {
      undefined !== e && (this._isEdited = e), this._notifyChange(E._Change.PrepareGeometryUpdate), this._notifyChange(E._Change.FinishGeometryUpdate);
    }, N.prototype.setBounds = function (e, t, i, n) {
      if (!this.hasPathAttached()) {
        var r = this.$trf, o = new B().scaled(i / this._getWidth(), n / this._getHeight()).translated(e, t);
        if (r) {
          var a = r.inverted();
          a && (o = o.multiplied(a));
        }
        this.beginUpdate(), this.setProperties([
          "aw",
          "ah"
        ], [
          false,
          false
        ], false, false, false), this.transformSourceBBox(o), this.endUpdate();
      }
    }, N.prototype.transformSourceBBox = function (e, t, i, n, r) {
      if (e) {
        this._notifyChange(E._Change.PrepareGeometryUpdate);
        var o = e.getMatrix(), a = this.$trf, s = a ? a.getTranslation() : new l(0, 0), h = this._getWidth(), A = this._getHeight(), c = new C(s.getX(), s.getY(), t ? 1 : h, i ? 1 : A), p = e.mapQuadrilateral(c), u = Math.max(1, Math.abs(p[0].getX() - p[1].getX())), d = Math.max(1, Math.abs(p[0].getY() - p[3].getY())), g = this.getProperty("aw"), f = this.getProperty("ah");
        g && n && !R.isEqualEps(this._getWidth(), u, 1e-9) ? (g = false, this.getProperty("vacr") == E.Anchor.AnchorType.Stretch && (f = false)) : f && r && !R.isEqualEps(this._getHeight(), d, 1e-9) && (f = false);
        var m = this.$trf || new B(), y = e.getTranslation();
        m.getMatrix();
        return m = m.preMultiplied(new B(o[0] < 0 ? -1 : 1, 0, 0, o[3] < 0 ? -1 : 1, y.getX(), y.getY())), this.setProperties([
          "w",
          "h",
          "trf",
          "aw",
          "ah"
        ], [
          u,
          d,
          m,
          g,
          f
        ]), this._notifyChange(E._Change.FinishGeometryUpdate), h && A ? new B(u / h * (o[0] < 0 ? -1 : 1), 0, 0, d / A * (o[3] < 0 ? -1 : 1), y.getX(), y.getY()) : null;
      }
      return null;
    }, N.prototype._detailHitTest = function (e, t, i, n) {
      if (this.isFakeText() && N.HITTEST_TEXT)
        return b.prototype._detailHitTest.call(this, e, t, i, n);
      var r;
      if (this.isFakeText() || (r = this.getTLCore()), N.HITTEST_TEXT && r && r.getCanvas()) {
        var o = new B();
        this.$trf && (o = o.multiplied(this.$trf)), t && (o = o.multiplied(t));
        var a = o.inverted().mapPoint(e), s = a.getX(), l = a.getY();
        if (!isFinite(s) || !isFinite(l))
          return null;
        var h = 1 + 2 * (i = Math.floor(i + 0.5 * t.getScaleFactor())), A = r.getCanvas(y.RENDERFLAG_FILL), c = r.getCanvas(y.RENDERFLAG_STROKE), p = [];
        A && p.push(A), c && p.push(c);
        for (var u = 0; u < p.length; u++)
          for (var d, g, f, m = p[u].getContext("2d").getImageData(s - i, l - i, h, h), _ = m ? m.data : [
                0,
                0,
                0
              ], v = Number.MAX_VALUE, C = NaN, w = 3; w < _.length; w += 4)
            0 !== _[w] && (d = (i - (g = (w >> 2) % h)) * (i - g) + (i - (f = (w >> 2) / h)) * (i - f)) < v && (v = d, C = w);
        return Math.sqrt(v) > i ? null : new P(this, { pixel: _.slice(C - 3, C + 1) });
      }
      if (N.HITTEST_BOX) {
        o = new B();
        this.$trf && (o = o.multiplied(this.$trf)), t && (o = o.multiplied(t));
        var E = o.inverted().mapPoint(e), x = this.getSourceBBox();
        return x && x.containsPoint(E) ? new P(this) : null;
      }
      return new P(this);
    }, N.prototype.setTLCore = function (e) {
      this._tlCore = e, this._runsDirty = true;
    }, N.prototype.getTLCore = function () {
      if (this._tlCore || (this._tlCore = new f()), !this._workspace && !this._tlCore.isInitialized())
        return this._waitForWorkspace = true, null;
      if (!this._tlCore.isInitialized()) {
        var exports = this._workspace.getFontManager().getDefaultFont();
        if (!exports)
          return this._requireResolvedFont(N.DEFAULTFONT), null;
        if (!exports.isResolved())
          return this._requireResolvedFont(exports), null;
        this._tlCore.initialize(this.$w, this.$h, this._workspace.getFontManager(), function (e) {
          this._requireResolvedFont(e);
        }.bind(this)), this._tlCore.setWrap(!this.$aw);
        for (var t, require, n = this._tlCore.getDocumentRange(), r = this.getStylePropertySets(), o = r.length - 1; o >= 0; o--) {
          var a = p.PropertySetInfo[r[o]];
          if (a.geometryProperties)
            for (var s in a.geometryProperties)
              t = N.PropertyMapping[s], require = this._getGTLValue(s, a.geometryProperties[s]), t && n.setFormatting(t, require);
          if (a.visualProperties)
            for (var s in a.visualProperties)
              t = N.PropertyMapping[s], require = this._getGTLValue(s, a.visualProperties[s]), t && n.setFormatting(t, require);
        }
        if (this._contentChangedHandler && (this._tlCore.contentChanged(this._contentChangedHandler.handler, this._contentChangedHandler.removeSub), this._contentChangedHandler = null), this._tempText) {
          this._beginBlockChanges([
            E._Change.PrepareGeometryUpdate,
            E._Change.FinishGeometryUpdate
          ]);
          var l = this._pendingProperties, h = this._tempText;
          this._pendingProperties = null;
          var A = this._pendingAttachedPath;
          if (this._pendingAttachedPath = null, this.setText(this._tempText, true, true), this._checkHasEmbeddedAndResetFakeText(), this._pendingProperties = l, this._pendingAttachedPath = A, l && h instanceof Array) {
            var c = false, u = 0;
            l.every(function (e, t) {
              return !(!e.toRange && (c = true, u = t, e.props.hasOwnProperty("content"))) || (c = false, false);
            }), c && (l[u].props.push("content"), l[u].values.push(JSON.stringify(h, N._serializeContent)));
          }
          this._endBlockChanges([
            E._Change.PrepareGeometryUpdate,
            E._Change.FinishGeometryUpdate
          ]), this.deferredLoadHandler && this.deferredLoadHandler();
        }
      }
      if (this._pendingProperties) {
        var d = this._pendingProperties;
        A = this._pendingAttachedPath;
        this._pendingProperties = null, this._pendingAttachedPath = null;
        var g = {
            props: [],
            values: []
          }, m = {
            props: [],
            values: []
          };
        d.forEach(function (e) {
          e.toRange ? (m.props = m.props.concat(e.props), m.values = m.values.concat(e.values)) : (g.props = g.props.concat(e.props), g.values = g.values.concat(e.values));
        }), m.props.length && this.setProperties(m.props, m.values, false, false, false, true, true), g.props.length && this.setProperties(g.props, g.values, false, false, false, false, true), this._pendingAttachedPath = A;
      }
      if (this._pendingAttachedPath) {
        var y = this._pendingAttachedPath;
        this._pendingAttachedPath = null, this.attachPath(y);
      }
      return this._tlCore;
    }, N.prototype._getWidth = function () {
      if (!this.$aw)
        return this.$w;
      var e = this.getTLCore();
      return e ? e.getWidth() - this._calculateBBoxSpacing() + 2 * N.HMARGIN : this.$w;
    }, N.prototype._getHeight = function () {
      var e = this.getTLCore();
      if (!e)
        return this.$h;
      if (!this.$ah) {
        if (this._legacyHeight && !this._fontsToResolve) {
          var t = e.getActualHeight() + 2 * N.VMARGIN;
          this.$h = Math.max(t, this.$h), this._legacyHeight = false, this._repairedHeight = true;
        }
        return this.$h;
      }
      return e.getHeight() + 2 * N.VMARGIN;
    }, N.prototype._getGravitValue = function (e, t) {
      var i = t, n = e, r = null;
      if (n) {
        switch (n) {
        case "fontStyle":
          r = "italic" === i ? v.Style.Italic : "normal" === i || undefined === i ? v.Style.Normal : i === v.Style.Normal || i === v.Style.Italic ? i : null;
          break;
        case "fontFamily":
          var o = "";
          if (this._workspace) {
            var a = this._workspace.getFontManager().getDefaultFont();
            a && (o = a.getFamily());
          }
          r = i || o;
          break;
        case "fontColor":
          if ("transparent" == i)
            r = _.BLACK;
          else if ("string" == typeof i) {
            var s;
            r = (s = _.RGBREGEX.exec(i)) && 5 == s.length && 0 == s[4] ? null : _.fromCSSColor(i);
          } else
            r = i || _.fromCSSColor(u.defaultFormatting[n]);
          break;
        case "fontWeight":
          var l;
          if (l = undefined !== i ? parseInt(i) : 0, isNaN(l))
            switch (i) {
            case "normal":
              r = v.Weight.Regular;
              break;
            case "lighter":
              r = v.Weight.Thin;
              break;
            case "bold":
              r = v.Weight.Bold;
              break;
            case "bolder":
              r = v.Weight.Heavy;
              break;
            default:
              r = null;
            }
          else
            r = l || v.Weight.Regular;
          break;
        case "align":
          switch (i) {
          case "left":
            r = p.ParagraphAlignment.Left;
            break;
          case "center":
            r = p.ParagraphAlignment.Center;
            break;
          case "right":
            r = p.ParagraphAlignment.Right;
            break;
          case "justify":
            r = p.ParagraphAlignment.Justify;
          }
          break;
        case "transformation":
          switch (i) {
          case "lowercase":
            r = p.TextTransformation.Lowercase;
            break;
          case "uppercase":
            r = p.TextTransformation.Uppercase;
            break;
          case "capitalize":
            r = p.TextTransformation.Capitalize;
            break;
          case "smallcaps":
            r = p.TextTransformation.SmallCaps;
          }
          break;
        case "paragraphSpacing":
          r = i || !Number.isNaN(i) ? i : u.defaultFormatting[n] || null;
          break;
        default:
          r = i || u.defaultFormatting[n] || null;
        }
        r === u.multipleValues && (r = null);
      }
      return r;
    }, N.prototype._getGTLValue = function (e, t) {
      var i = t, r = e, o = null;
      if (!N.PropertyMapping[r])
        return null;
      switch (r) {
      case "_tfw":
        o = parseInt(i), Number.isNaN(o) && (o = i);
        break;
      case "_tws":
      case "_tcs":
      case "_tfi":
      case "_plh":
      case "_pas":
      case "_pai":
        i instanceof String || "string" == typeof i ? o = i : (o = parseFloat(i), Number.isNaN(o) && (o = i));
        break;
      case "_tff":
        o = i;
        break;
      case "_tfs":
        o = i === v.Style.Italic ? "italic" : i === v.Style.Normal ? "normal" : i;
        break;
      case "_fc":
        o = i instanceof _ ? i.toScreenCSS() : null === i ? "transparent" : ("string" == typeof i || i instanceof String) && (o = n.deserialize(i)) ? o.toScreenCSS() : i;
        break;
      case "_pal":
        switch (i) {
        case p.ParagraphAlignment.Left:
          o = "left";
          break;
        case p.ParagraphAlignment.Center:
          o = "center";
          break;
        case p.ParagraphAlignment.Right:
          o = "right";
          break;
        case p.ParagraphAlignment.Justify:
          o = "justify";
        }
        break;
      case "_ttrf":
        switch (i) {
        case p.TextTransformation.Lowercase:
          o = "lowercase";
          break;
        case p.TextTransformation.Uppercase:
          o = "uppercase";
          break;
        case p.TextTransformation.Capitalize:
          o = "capitalize";
          break;
        case p.TextTransformation.SmallCaps:
          o = "smallcaps";
        }
        break;
      default:
        o = i;
      }
      return o;
    }, N.prototype.getProperty = function (e, t, i, n, r) {
      var o;
      if (r) {
        if (!(o = this.getTLCore()))
          return;
        if ((A = "_pal" === e || "_plh" === e || "_pas" === e || "_pai" === e ? o.selectedParagraphRange() : o.selectedRange()).start === A.end)
          for (var a in (c = A.getFormatting(), A.doc.nextInsertFormatting))
            c[a] = A.doc.nextInsertFormatting[a];
        else
          c = A.getFormatting();
        var s = c[l = N.PropertyMapping[e]];
        return h = this._getGravitValue(l, s);
      }
      var l = N.PropertyMapping[e], h = null;
      if ((o = this.getTLCore()) && l && !this._tempText) {
        var A, c;
        s = (c = (A = o.getDocumentRange()).getFormatting())[l];
        h = this._getGravitValue(l, s);
      } else {
        var p = false;
        if (this._tempText && this._tempText instanceof Array)
          for (var u = 0; u < this._tempText.length; u++)
            if (this._tempText[u].hasOwnProperty(l))
              if (p) {
                if (this._tempText[u][l] !== s) {
                  h = null;
                  break;
                }
              } else
                s = this._tempText[u][l], h = this._getGravitValue(l, s), p = true;
        p || (h = b.prototype.getProperty.call(this, e, t, i, n));
      }
      return h;
    }, N.prototype.setProperties = function (e, t, i, n, o, s, l, h) {
      var A, c = this.getTLCore();
      if (!c)
        return this._pendingProperties || (this._pendingProperties = []), this._pendingProperties.push({
          props: e,
          values: t,
          rng: s
        }), void (s || l || b.prototype.setProperties.call(this, e, t, i, n, o));
      c.lockChangeEvents(1), A = s ? c.selectedRange() : c.getDocumentRange();
      var p = null, u = null, f = null, m = null, y = false, _ = [], C = [], w = false, x = this.$tptho, P = this.$tpthd, S = this.$tpths, T = this.$tpthl, R = false, D = null, k = null, G = null, Q = -1, M = this.getProperty("trf"), U = false;
      for (J = 0; J < e.length; J++) {
        var V = e[J];
        if ("content" == V)
          m = t[J] || this._startText, y = true;
        else if ("aw" == V)
          c.setWrap(!t[J]);
        else if ("atPath" != V || this.isRecordedTransaction())
          "trf" != V || o ? "dir" === V ? t[J] !== c.getDirection() && (Q = t[J], this.hasPathAttached() && (U = true)) : this.hasPathAttached() && 0 === V.indexOf("tpth") && (U = true, this._runsDirty = true, this._verticesDirty = true, "tpthd" === V ? P = t[J] : "tptho" === V ? x = t[J] : "tpths" === V ? S = t[J] : "tpthl" === V && (T = t[J])) : M = t[J];
        else if (U = true, R = true, G = t[J], k = this._atPath ? this._atPath : null, G && !k)
          D = r.deserialize(G);
        else if (k) {
          var O = k.cloneAnchorPoints();
          (D = k instanceof F || k.getProperty("closed") ? new F(k.getProperty("closed"), k.getProperty("evenodd"), O) : new I(k.getProperty("evenodd"), O)) && D.assignFrom(k);
        }
      }
      for (J = 0; J < e.length; J++) {
        var L = N.PropertyMapping[e[J]], Y = t[J], X = null;
        L && (y = true), "fontWeight" == L ? (Y instanceof Array && (Y = 1 !== Y.length || Y[0] instanceof Array ? null : Y[0]), u = ~~Y) : "fontStyle" == L ? (Y instanceof Array && (Y = 1 !== Y.length || Y[0] instanceof Array ? null : Y[0]), f = Y) : "fontFamily" == L ? (Y instanceof Array && (Y = 1 !== Y.length || Y[0] instanceof Array ? null : Y[0]), p = Y) : L ? (m || (w || (this._notifyChange(E._Change.PrepareGeometryUpdate), w = true), A.setFormatting(L, this._getGTLValue(e[J], Y))), "fontColor" === L && (_.push(e[J]), C.push(Y))) : "content" !== e[J] && (_.push(e[J]), C.push(Y));
      }
      if (u || p || f) {
        var H, W, Z, z = function (e, t) {
            var i, n = [];
            if (t)
              n.push(t);
            else if (i = this.getProperty(e, false, null, false, this._isEdited))
              n.push(i);
            else if (null === i) {
              i = A.save();
              for (var r = N.PropertyMapping[e], o = 0; o < i.length; o++)
                n.push(this._getGravitValue(r, i[o][r]));
              n = a.unique(n);
            }
            return n;
          }.bind(this);
        W = z("_tff", p), H = z("_tfw", u), Z = z("_tfs", f), this._isEdited || (1 === W.length && (_.push("_tff"), C.push(W[0])), 1 === Z.length && (_.push("_tfs"), C.push(Z[0])), 1 === H.length && (_.push("_tfw"), C.push(H[0])));
        var j = [];
        if (m)
          JSON.parse(m, N._deserializeContent).forEach(function (e) {
            if (e.fontFamily) {
              var t = this._getGravitValue("fontFamily", e.fontFamily), i = this._getGravitValue("fontStyle", e.fontStyle), n = this._getGravitValue("fontWeight", e.fontWeight), r = this._workspace.getFontManager().getFont(t, i, n);
              r.isResolved() || (j.indexOf(r) < 0 && j.push(r), this._requireResolvedFont(r));
            }
          }.bind(this));
        for (var J = 0; J < W.length; J++)
          for (var q = 0; q < Z.length; q++)
            for (var K = 0; K < H.length; K++) {
              (X = this._workspace.getFontManager().getFont(W[J], Z[q], H[K])).isResolved() || (j.indexOf(X) < 0 && j.push(X), this._requireResolvedFont(X));
            }
        var $ = {
            fontFamily: p,
            fontStyle: f,
            fontWeight: u,
            content: m
          }, ee = function (e, t) {
            for (var i = true, n = e.fontFamily ? e.fontFamily : null, r = e.fontStyle ? e.fontStyle : null, s = e.fontWeight ? e.fontWeight : null, l = 0; l < j.length; l++) {
              var h = j[l], p = h.getFamily(), u = p, d = h.getStyle(), g = h.getWeight();
              if (t && (t instanceof v ? (u = t.getFamily(), g = t.getWeight(), d = t.getStyle()) : p in t && (u = t[p], g = v.Weight.Regular, d = v.Style.Normal)), (!n || n && n == p && p != u) && (n = u, r = d, s = g, e.fontFamily = u, e.fontWeight = g, e.fontStyle = d), e.content && p != u) {
                var f = this._shorten(JSON.parse(e.content, N._deserializeContent)), m = {};
                m.fontFamily = p;
                var y = {};
                y.fontFamily = u, y.fontWeight = g, y.fontStyle = d, this._replaceFF(f, m, y), e.content = JSON.stringify(f, N._serializeContent), this.$_tff === p && (this.$_tff = u);
              }
              var _ = this._workspace.getFontManager().getFont(u, d, g);
              _ && _.isResolved() || (_ && !_.isResolved() && p !== u && (j[l] = _, this._requireResolvedFont(_)), i = false);
            }
            if (!i)
              return false;
            if (e.content) {
              if (i) {
                f = this._shorten(JSON.parse(e.content, N._deserializeContent));
                a.equals(f, this.getContent(), true) || (this._notifyChange(E._Change.PrepareGeometryUpdate), this.setText(f, true, o));
              }
            } else {
              this._notifyChange(E._Change.PrepareGeometryUpdate);
              var b = [], C = [];
              n && (b.push("fontFamily"), C.push(n)), s && (b.push("fontWeight"), C.push(s)), r && (b.push("fontStyle"), C.push(r === v.Style.Normal ? "normal" : "italic")), b.length && (o && c.lockChangeEvents(1), A.setFormatting(b, C), o && c.lockChangeEvents(0));
            }
            return i;
          };
        j.length ? (this._deferredRangeSetters || (this._deferredRangeSetters = []), y = false, this._deferredRangeSetters.push({
          func: ee,
          vars: $
        })) : m || (ee.call(this, $), y = true);
      }
      if (m && !h) {
        var te = this._shorten(JSON.parse(m, N._deserializeContent));
        a.equals(te, this.getContent(), true) || (w || (this._notifyChange(E._Change.PrepareGeometryUpdate), w = true), this.setText(te, true));
      }
      var ie = false;
      if (Q >= 0) {
        var ne = this._getApplyPreTransform(g.TYPE) || new B(), re = this._setDirection(Q);
        M = (M || new B()).preMultiplied((re || new B()).multiplied(ne.inverted())), ie = true;
      }
      if (c.lockChangeEvents(0), !l) {
        var oe = _, ae = C, se = null;
        if (y && (oe.push("content"), ae.push(m || JSON.stringify(this.getContent(), N._serializeContent)), ie = true, U = U || this.hasPathAttached(), n = true), this.isRecordedTransaction()) {
          if (M && this.isFakeText()) {
            var le = ((this.getProperty("trf") || new B()).inverted() || new B()).multiplied(M);
            a.each(this._deserializedBackupPaths, function (e, t) {
              t.transform(le);
            });
          }
        } else {
          if (U) {
            if (!R && this._attachedPath) {
              O = this._attachedPath.cloneAnchorPoints();
              (D = this._attachedPath instanceof F || this._attachedPath.getProperty("closed") ? new F(this._attachedPath.getProperty("closed"), this._attachedPath.getProperty("evenodd"), O) : new I(this._attachedPath.getProperty("evenodd"), O)) && D.assignFrom(this._attachedPath);
            }
            if (w || (w = true, this._notifyChange(E._Change.PrepareGeometryUpdate)), M && D && M.invertible()) {
              var he = D.getProperty("trf");
              D.setProperty("trf", he ? he.multiplied(M.inverted()) : M.inverted()), G = r.serialize(D);
            } else
              D && !G && (G = r.serialize(D));
            se = this._trySetPath(D, P, S, x, T, M), ie = true;
            var Ae = oe.indexOf("atPath");
            Ae >= 0 ? ae[Ae] = G : (oe.push("atPath"), ae.push(G));
          } else if (ie && c.getTransformer(d.TYPE)) {
            this._runsDirty = true, this._verticesDirty = true;
            var ce = this._getApplyPreTransform(d.TYPE);
            se = se ? se.multiplied(ce) : ce;
          }
          if (ie && se ? M = M ? se.multiplied(M) : se : R && !D && (ie = true, M = this._oldTrf ? this._oldTrf : null, this._oldTrf = null, n = true), ie) {
            var pe = oe.indexOf("trf");
            pe >= 0 ? ae[pe] = M : (oe.push("trf"), ae.push(M));
          }
        }
        b.prototype.setProperties.call(this, oe, ae, i, n, o);
      }
    }, N.prototype._replaceFF = function (e, t, i) {
      if (e && t && i) {
        var n = function (e) {
          for (var r in e)
            if (e.hasOwnProperty(r))
              if ("object" == typeof e[r])
                n(e[r]);
              else if ("fontFamily" == r && e.hasOwnProperty("fontFamily") && (!t.fontFamily || e.fontFamily == t.fontFamily)) {
                if (e.fontFamily = i.fontFamily, e.hasOwnProperty("fontStyle")) {
                  var o = i.fontStyle;
                  switch (o) {
                  case v.Style.Normal:
                    e.fontStyle = "normal";
                    break;
                  case v.Style.Italic:
                    e.fontStyle = "italic";
                    break;
                  default:
                    e.fontStyle = o;
                  }
                }
                e.hasOwnProperty("fontWeight") && (e.fontWeight = i.fontWeight);
              }
        };
        if (e instanceof Array)
          for (var r = 0; r < e.length; ++r)
            n(e[r]);
        else
          n(e);
      }
    }, N.prototype._checkPartialCollision = function (e, t, i, n, r, o) {
      return E.prototype._checkPartialCollision.call(this, e, t, i, n, r, o);
    }, N.prototype._preparePaint = function (e) {
      if (b.prototype._preparePaint.call(this, e)) {
        var t = this._getClipBox(e);
        return t && e.canvas.hasClip() && e.canvas.clipRect(t.getX(), t.getY(), t.getWidth(), t.getHeight()), true;
      }
      return false;
    }, N.prototype._finishPaint = function (e) {
      null !== this._getClipBox(e) && e.canvas.hasClip() && e.canvas.resetClip(), this._runsDirty = false, b.prototype._finishPaint.call(this, e);
    }, N.prototype._fixText = function (e) {
      return e instanceof Array || !(e instanceof Object) || e instanceof String || !e.hasOwnProperty("text") || (e = [e]), e;
    }, N.prototype._shorten = function (e) {
      if ("string" == typeof (e = this._fixText(e)) || e instanceof String)
        e.length > N.MAXLENGTH && (e = e.substr(0, N.MAXLENGTH));
      else if (e instanceof Array)
        for (var t = 0, require = N.MAXLENGTH, n = 0; n < e.length; n++) {
          var r = e[n];
          if (r.hasOwnProperty("text")) {
            if (t + r.text.length > require) {
              e = e.slice(0, n + 1), r.text = r.text.substr(0, require - t);
              break;
            }
            t += r.text.length;
          }
        }
      return e;
    }, N.prototype.toFakeText = function () {
      this._deserializedBackupPaths = this.getTextShapes();
      var e = this.getContent() || [];
      this.$content = JSON.stringify(e, N._serializeContent);
    }, N.prototype.hasEmbeddedFonts = function () {
      return this._hasEmbeddedFonts;
    }, N.prototype.hasFontsToResolve = function () {
      return this._fontsToResolve;
    }, N.prototype.isFakeText = function () {
      return (this._fontsToResolve || this._hasEmbeddedFonts) && this._isVirgin && (this._serializedBackupPaths && !!this._serializedBackupPaths.length || this._deserializedBackupPaths && !!this._deserializedBackupPaths.length);
    }, N.prototype.replaceFonts = function (e, t) {
      if (e) {
        var require = false;
        if (this._deferredRangeSetters) {
          for (var n = this._deferredRangeSetters.length - 1; n >= 0; --n)
            this._deferredRangeSetters[n].func.call(this, this._deferredRangeSetters[n].vars, e) && (this._deferredRangeSetters.splice(n, 1), require = true);
          0 == this._deferredRangeSetters.length && (this._deferredRangeSetters = null);
        }
        if (this._fontsToResolve)
          for (var r = this._fontsToResolve.length - 1; r >= 0; --r) {
            var o = this._fontsToResolve[r].getFamily();
            if (e instanceof v || o in e) {
              if (e instanceof v)
                var a = e.getFamily(), s = e.getWeight(), l = e.getStyle();
              else
                a = e[o], s = v.Weight.Regular, l = v.Style.Normal;
              var h = this._workspace.getFontManager().getFont(a, l, s);
              h && (this._fontsToResolve.splice(r, 1), h.isResolved() || this._requireResolvedFont(h)), 0 === this._fontsToResolve.length && (this._fontsToResolve = null, this._updateFontManagerListener());
            }
          }
        if (require && (this._runsDirty = true, this._verticesDirty = true, this._resetFxCacheAndState(), this.hasPathAttached() && this.attachPath(this._attachedPath), this._notifyChange(E._Change.PrepareGeometryUpdate), this._notifyChange(E._Change.FinishGeometryUpdate)), t) {
          var A = this.isFakeText() ? JSON.parse(this.$content, N._deserializeContent) : this.getContent(), c = true;
          A.forEach(function (t) {
            if (e instanceof v || e[t.fontFamily]) {
              var require, n = v.Weight.Regular, r = v.Style.Normal;
              if (e instanceof v ? (require = e.getFamily(), n = e.getWeight(), r = e.getStyle()) : require = e[t.fontFamily], require) {
                var o = this._workspace.getFontManager().getFont(require, r, n);
                if (o)
                  t.fontFamily = o.getFamily(), t.fontStyle = this._getGTLValue("_tfs", o.getStyle()), t.fontWeight = o.getWeight(), o.isResolved() || (this._requireResolvedFont(o), c = false);
                else {
                  var a = this._workspace.getFontManager().getDefaultFont();
                  a ? (t.fontFamily = a.getFamily(), t.fontStyle = this._getGTLValue("_tfs", a.getStyle()), t.fontWeight = a.getWeight()) : c = false;
                }
              }
            }
          }.bind(this)), e instanceof v ? (this.$_tff = e.getFamily(), this.$_tfs = e.getWeight(), this.$_tfs = e.getStyle()) : e[this.$_tff] && (this.$_tff = e[this.$_tff]), c ? (this.setProperty("content", JSON.stringify(A, N._serializeContent)), this.repaint()) : this._workspace.getFontManager().getDefaultFont() && (this.$content = JSON.stringify(A, N._serializeContent), this._setTextWhenAvailable = true);
        }
      }
    }, N.prototype._fixFontAttributes = function (e) {
      if (e.ct && (e._tff || e._tfs || e._tfw)) {
        e._tff && !e._tff.length && (e._tff = null);
        var t = false;
        "function" == typeof gdb_loaddesign && (t = true), e._tfs = e._tfs || null, e._tfw = e._tfw || null;
        for (var require = 0; require < e.ct.length; require++) {
          var n = e.ct[require];
          if (e._tff && this._getGravitValue("fontFamily", n.fontFamily) !== e._tff && (t && console.warn("invalid tff"), delete e._tff), e._tfw && this._getGravitValue("fontWeight", n.fontWeight) !== e._tfw && (t && console.warn("invalid tfw"), delete e._tfw), e._tfs && this._getGravitValue("fontStyle", n.fontStyle) !== e._tfs && (t && console.warn("invalid tfs"), delete e._tfs), !(e._tff || e._tfs || e._tfw))
            break;
        }
        null === e._tff && delete e._tff, null === e._tfs && delete e._tfs, null === e._tfw && delete e._tfw;
      } else
        delete e._tff, delete e._tfs, delete e._tfw;
    }, N.prototype._handleChange = function (e, t) {
      if (e === r._Change.Store) {
        var require, n = this.getTLCore();
        n && !this._tempText ? this._isEdited && t.options && false === t.options.save ? t.blob.ct = n.selectedRange().save() : this.isFakeText() ? t.blob.ct = JSON.parse(this.getProperty("content"), N._deserializeContent) : t.blob.ct = n.getRichContent() : t.blob.ct = this._tempText, require = t.blob.ct, !this.isFakeText() && (require instanceof String || "string" == typeof require) && (require = [{ text: require }]), this.hasPathAttached() || (t.blob["#"] = a.uuid()), this.storeProperties(t.blob, N.GeometryProperties, function (e, t) {
          return "ttrf" === e && t ? B.serialize(t) : "content" === e && require ? JSON.stringify(require, N._serializeContent) : t;
        }), this._fixFontAttributes(t.blob), this.storeProperties(t.blob, N.MetaProperties, function (e, t) {
          if ("_bkpPath" === e) {
            if (N.dontStorePaths)
              return null;
            var require = null;
            try {
              if (this.isFakeText())
                this._deserializedBackupPaths && (require = this._deserializedBackupPaths.map(function (e) {
                  return r.store(e);
                }));
              else {
                var n = this.getTextShapes();
                require = n = n.map(function (e) {
                  return r.store(e);
                });
              }
            } catch (e) {
              console.warn("Couldn't serialize text to path");
            } finally {
              return require || null;
            }
          }
          return t;
        }.bind(this));
      } else if (e === r._Change.Restore)
        if (t.blob.blx && t.blob.trx) {
          var o = t.blob, s = [], l = [];
          [
            "aw",
            "ah"
          ].forEach(function (e) {
            o.hasOwnProperty(e) && (s.push(e), l.push(o[e]));
          }), s.push("w"), l.push(Math.abs(o.trx - o.tlx)), s.push("h"), l.push(Math.abs(o.try - o.bry));
          var h, A = o.tlx, c = o.tly, u = new B();
          t.blob.hasOwnProperty("ttrf") ? h = B.deserialize(t.blob.ttrf).makeInvertible() : t.blob.hasOwnProperty("trf") && (h = t.blob.trf), u = u.translated(A, c), h || (h = new B()), t.blob.trf = B.serialize(h.preMultiplied(u));
          var d = function (e, t, i, n) {
              if (e && t) {
                i = i ? JSON.parse(JSON.stringify(i)) : { fontColor: "transparent" };
                var r = e["@"], o = false;
                for (var a in N.PropertyMapping)
                  if (e.hasOwnProperty(a)) {
                    var s = this._getGTLValue(a, e[a]);
                    (n || s) && ("_tff" === a && s && (s = v.getFontFamilyCorrected(s)), i[N.PropertyMapping[a]] = s);
                  }
                if ("text" === r)
                  d(e.ct, t, i);
                else if (e.hasOwnProperty("cnt") && (i.text = e.cnt, o = true), o && t.push(i), "txPara" === r && t.length ? t[t.length - 1].text += "\n" : "txBrk" === r && (i.text = "\n", t.push(i)), e.$)
                  for (var l = e.$, h = 0; h < l.length; h++)
                    d(l[h], t, i);
              }
            }.bind(this), g = [];
          d(o, g, null, true), g.length && (s.push("content"), l.push(JSON.stringify(g, N._serializeContent))), this.setProperties(s, l);
        } else {
          if (!t.blob.hasOwnProperty("_fpt") || t.blob._fpt && "C#[0,0,0]" !== t.blob._fpt || t.blob.hasOwnProperty("_fvs") && !t.blob._fvs || delete t.blob._fpt, this._fixFontAttributes(t.blob), t.blob.content) {
            var f = JSON.parse(t.blob.content, N._deserializeContent);
            this._fixFontFamily(f), t.blob.content = JSON.stringify(f, N._serializeContent);
          }
          this._fixFontFamily(t.blob.ct), this.setText(t.blob.ct, true, true), this.restoreProperties(t.blob, N.GeometryProperties, function (e, t) {
            return "ttrf" === e && t ? B.deserialize(t) : t;
          }), this.restoreProperties(t.blob, N.MetaProperties, function (e, t) {
            if ("_bkpPath" === e && t) {
              return this._isVirgin = true, this._serializedBackupPaths = t, null;
            }
            return t;
          }.bind(this));
        }
      else if (e === r._Change.WorkspaceAttached || e === r._Change.WorkspaceDetach)
        e === r._Change.WorkspaceAttached && this._workspace && (this._waitForWorkspace || this.hasPathAttached() && this._attachedPath.getScene()) && (this._waitForWorkspace = false, this._runsDirty = true, this._verticesDirty = true, this._resetFxCacheAndState(), this.hasPathAttached() && this.attachPath(this._attachedPath), this._notifyChange(E._Change.PrepareGeometryUpdate), this._notifyChange(E._Change.FinishGeometryUpdate)), e === r._Change.WorkspaceDetach && this._workspace && setTimeout(function () {
          this._workspace || this._updateFontManagerListener(true);
        }.bind(this), 100);
      else if (e === D._Change.SceneAttached) {
        var m = this.getScene();
        this._addedDestroyable || (m.addDestroyable(this._tlCore), this._addedDestroyable = true), this.getParent()._notifyChange(E._Change.ChildVisualUpdate, [this]), !m._pre310 || this._repairedHeight || this.$ah || (this._legacyHeight = true, null === this._fontsToResolve && this.setProperty("h", this._getHeight(), false, true));
      } else if (e == r._Change.BeforePropertiesChange) {
        var y = t.properties.indexOf("aw"), _ = t.properties.indexOf("ah"), C = t.properties.indexOf("w"), w = t.properties.indexOf("h"), x = t.properties.indexOf("trf"), P = t.properties.indexOf("content"), S = false, T = false, I = t.properties.indexOf("hacr"), F = t.properties.indexOf("vacr");
        if ((I >= 0 || F >= 0) && this.getParent() && this.getParent().hasMixin(E.Layout) && !this.isRestoring() && this.isRecordedTransaction(), y >= 0 && C < 0)
          false === t.values[y] ? this.hasPathAttached() ? S = true : (t.properties.push("w"), t.values.push(this._getWidth())) : (t.properties.push("w"), t.values.push(-1));
        if (_ >= 0 && w < 0)
          false === t.values[_] ? this.hasPathAttached() ? T = true : (t.properties.push("h"), t.values.push(this._getHeight())) : (t.properties.push("h"), t.values.push(-1));
        if (x >= 0 && !(P >= 0)) {
          var R = this.$trf ? this.$trf.getMatrix() : null, k = t.values[x] ? t.values[x].getMatrix() : null;
          R && k && R !== k ? (R[0] !== k[0] || R[1] !== k[1] || R[2] !== k[2] || R[3] !== k[3] || w >= 0 && !this.$ah || C >= 0 && !this.$aw) && (this._runsDirty = true, this._verticesDirty = true) : (this._runsDirty = true, this._verticesDirty = true);
        } else
          this._runsDirty = true, this._verticesDirty = true;
        S ? (t.properties.splice(y, 1), t.values.splice(y, 1), T && (y < _ && _--, t.properties.splice(_, 1), t.values.splice(_, 1))) : T && (t.properties.splice(_, 1), t.values.splice(_, 1));
      } else if (e == r._Change.AfterPropertiesChange) {
        var G = t.properties.indexOf("atPath");
        if (G >= 0) {
          var Q = t.values[G], M = this.getProperty("atPath");
          if (null !== Q || null !== M) {
            var U = this._atPath ? this._atPath : null, V = null;
            M && !U ? this._scene && this._scene.hasLinks(this) && this._scene.visitLinks(this, function (e) {
              U = e;
            }) : U && !M && (U = null), M && (V = r.deserialize(M)), this._attachPath(U, V);
          }
        } else if (t.properties.indexOf("tptho") >= 0 || t.properties.indexOf("tpthd") >= 0 || t.properties.indexOf("tpths") >= 0 || t.properties.indexOf("tpthl") >= 0)
          if (this._attachedPath && this.$atPath) {
            V = r.deserialize(this.$atPath);
            this._attachPath(this._attachedPath, V);
          } else
            this._attachPath(null, null);
        else
          t.properties.indexOf("content") >= 0 && (this._checkHasEmbeddedAndResetFakeText(), this.$aw && this.$ah || this._resetFxCacheAndState());
      }
      this._handleGeometryChangeForProperties(e, t, N.GeometryProperties), this._handleGeometryChangeForProperties(e, t, a.extend({}, p.AllGeometryProperties)), b.prototype._handleChange.call(this, e, t);
    }, N.prototype._fixFontFamilyName = function (e) {
      e.fontFamily && (e.fontFamily = v.getFontFamilyCorrected(e.fontFamily));
    }, N.prototype._fixFontFamily = function (e) {
      if (e instanceof Array)
        for (var t = 0; t < e.length; ++t)
          this._fixFontFamilyName(e[t]);
      else
        e && this._fixFontFamilyName(e);
    }, N.prototype._paint = function (e) {
      this.isFakeText() ? a.each(this._deserializedBackupPaths, function (t, i) {
        b.prototype._paint.call(i, e);
      }) : b.prototype._paint.call(this, e);
    }, N.prototype._paintFill = function (e, t, i) {
      !e.configuration.isOutline(e) && this.hasStyleFill() && this._paintTextFill(e, i);
    }, N.prototype.hasStyleFill = function () {
      var e = this.getPaintLayers();
      if (!e)
        return true;
      var t = e.getLayers(p.FillPaintLayer);
      return !t.length || (t = t.filter(function (e) {
        return e.hasStyle();
      })).length;
    }, N.prototype.setTransform = function (e) {
      b.prototype.setTransform.call(this, e), this.isFakeText() && a.each(this._deserializedBackupPaths, function (t, i) {
        i.setTransform(e);
      });
    }, N.prototype.transform = function (e, t, i) {
      this.beginUpdate();
      try {
        if (e && !e.isIdentity()) {
          this._layoutTransform = e, this._relayoutNow = !this._relayout;
          var n = t || this.getProperty("sc");
          if (!n) {
            var r = e, o = this.$trf, s = r.noSkewDecomposed();
            if (s) {
              var l = o ? o.multiplied(s.rotation) : s.rotation, h = this.getSourceBBox(), A = l.mapPoint(h.getSide(C.Side.CENTER)), c = l.mapQuadrilateral(h), p = c[0], u = c[3], d = c[2], g = p.subtract(u), f = d.subtract(u), m = g.getX() * f.getY() - g.getY() * f.getX();
              if (R.isEqualEps(m, 0) || R.isEqualEps(f.getX(), 0) && R.isEqualEps(f.getY(), 0) || R.isEqualEps(g.getX(), 0) && R.isEqualEps(g.getY(), 0))
                n = true;
              else {
                var y, _, v, b, w = s.scalation.getMatrix(), x = w[0], P = w[3];
                if (R.isEqualEps(f.getY(), 0) ? (_ = 0, y = 1 / f.getX()) : y = -(_ = f.getY() / m) * g.getY() / f.getY(), R.isEqualEps(f.getX(), 0) ? (b = 0, v = 1 / f.getY()) : v = -(b = -f.getX() / m) * g.getX() / f.getX(), R.isEqualEps(y + _, 0) || R.isEqualEps(v + b, 0))
                  n = true;
                else {
                  var S = y / (y + _), T = _ / (y + _), I = v / (v + b), F = b / (v + b), D = h.getSide(C.Side.CENTER);
                  r = new B(1, 0, 0, 1, -D.getX(), -D.getY()).multiplied(new B(S * x + T, 0, 0, T * x + S, 0, 0)).multiplied(new B(I * P + F, 0, 0, F * P + I, 0, 0)).multiplied(new B(1, 0, 0, 1, D.getX(), D.getY()));
                  var k = o ? o.inverted() : null;
                  k && (r = r.multiplied(o)), A = s.scalation.mapPoint(A), r = r.multiplied(s.rotation).multiplied(s.scalation).multiplied(new B(1, 0, 0, 1, -A.getX(), -A.getY())).multiplied(s.scalation.inverted()).multiplied(new B(1, 0, 0, 1, A.getX(), A.getY())).multiplied(s.rotationBack).multiplied(s.translation), k && (r = r.multiplied(k));
                }
              }
            } else
              n = true;
          }
          if (n)
            this.setProperties(["trf"], [this.$trf ? this.$trf.multiplied(e) : e]);
          else if (this.dependentUpdate && (this._noAnchoringPropsUpdate = true), r = this.transformSourceBBox(r, false, false, true, true), this.dependentUpdate && r) {
            var G = k ? k.multiplied(r).multiplied(o) : r;
            if (this.getProperty("hacr")) {
              var Q = this.getProperty("hstrf");
              Q = Q ? Q.multiplied(G) : G, this.setProperty("hstrf", Q);
            }
            if (this.getProperty("vacr")) {
              var M = this.getProperty("vstrf");
              M = M ? M.multiplied(G) : G, this.setProperty("vstrf", M);
            }
            this._noAnchoringPropsUpdate = false;
          }
          this._relayout = true, E.Transform.prototype.transform.call(this, e, t, i), this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null, this._relayoutNow = false);
        }
        e && !e.isIdentity() && this.isFakeText() && a.each(this._deserializedBackupPaths, function (t, i) {
          i.transform(e);
        });
      } catch (e) {
        console.warn("ERROR during text rendering:" + e.message);
      } finally {
        this.endUpdate();
      }
    }, N.prototype._paintTextFill = function (e, i) {
      e.canvas;
      var n = this.getTLCore();
      if (n) {
        var r = null, o = e.isIncludingInvisible(), a = this.getPatternBBox(o);
        p.prototype.hasStyleFill.call(this) && (r = this.createShapePaint(e, i.$_pt, a));
        var s = this._createStyleCanvas(e, this.getPaintBBox(false, null, o)), h = e.pushCanvas(s), A = s.getScale() * (this.$trf ? this.$trf.getScaleFactor() : 1);
        try {
          var c = n.getCanvas(y.RENDERFLAG_FILL), u = !!c && (!(c instanceof k.RendererCanvas) || c instanceof k.RendererCanvas && c.isRendered());
          if (1 * A !== this._lastResolutionFill || this._runsDirty || !u || this._lastFillPaintLayer !== i && (i && i.hasStyle() || this._lastFillPaintLayer && this._lastFillPaintLayer.hasStyle())) {
            if (r && r.transform) {
              if (i.$_pt && i.$_pt instanceof m && i.$_pt.getTransform()) {
                var d = a ? B.getNativeRectTransformation(a) : new B(), g = i.$_pt.getTransform(), f = g.getTranslation(), _ = A, v = a ? a.getWidth() : 1, b = a ? a.getHeight() : 1, C = g.multiplied(new B(_, 0, 0, _, -_ * f.getX(), -_ * f.getY())).multiplied(d).multiplied(new B(1 / _, 0, 0, 1 / _, f.getX() * v * _, f.getY() * b * _));
                r.transform = C;
              }
              i.$_px && !i.$_px.isIdentity() && (r.transform = r.transform.preMultiplied(i.$_px));
            }
            var w = {
              shapePaint: r ? r.paint : null,
              paintTransform: r ? r.transform : null,
              opacity: r ? i.$_op : 1,
              objTransform: this.$trf,
              evenodd: this._isEvenOddFill(),
              valign: this.$va
            };
            n.render(this._isEdited, 1 * A, w, y.RENDERFLAG_FILL | y.RENDERFLAG_VERTEX | y.RENDERFLAG_SCALEBITMAP), c = n.getCanvas(y.RENDERFLAG_FILL), this._lastResolutionFill = 1 * A, this._lastFillPaintLayer = i;
          }
          var E, x = s.getTransform(true), P = 1 / (1 * A), S = new B(P, 0, 0, P, 0, 0);
          E = (E = this.$trf ? x.preMultiplied(this.$trf) : new (Function.prototype.bind.apply(B, [null].concat(x.getMatrix())))()).preMultiplied(S), s.setTransform(E);
          var T = s.getTranslateCorrection(new l(0, 0), s.getTransform().getTranslation());
          if (c && c.width * c.height > 0)
            try {
              s.drawImage(c, N.HMARGIN + T.getX() - n.getLeftPadding() * A, N.VMARGIN + T.getY() - n.getTopPadding() * A, false), s.setTransform(x), c instanceof k.RendererCanvas || M.hardware === M.Hardware.Desktop && (undefined !== t && t.release && "node" === t.release.name || h.getBitmap().getPixelValue(0, 0)), h.drawCanvas(s, 0, 0, 1, i.getBlendingForContext(e));
            } catch (e) {
            }
        } catch (e) {
          console.warn("ERROR during text rendering:" + e.message);
        } finally {
          s.finish(), e.popCanvas();
        }
      }
    }, N.prototype._paintBorder = function (e, t, i) {
      var n = this.getTLCore();
      if (n) {
        var r = e.configuration.isOutline(e);
        if (!r && this.hasStyleBorder()) {
          var o = e.isIncludingInvisible(), a = this.getPatternBBox(o), s = this._createStyleCanvas(e, this.getPaintBBox(false, null, o)), h = e.pushCanvas(s), A = s.getScale() * (this.$trf ? this.$trf.getScaleFactor() : 1);
          if (a && this.$_ba !== p.BorderAlignment.Inside) {
            var c = i.$_bw;
            if (i.$_ba === p.BorderAlignment.Center && (c *= 0.5), this.$trf)
              c /= this.$trf.getScaleFactor(), a = a.expanded(c, c, c, c);
            else
              a = a.expanded(c, c, c, c);
          }
          var u = this.createShapePaint(e, i.$_pt, a);
          if (u && u.paint) {
            e.canvas;
            var d = i.$_bw, g = null;
            try {
              var f = n.getCanvas(y.RENDERFLAG_STROKE), _ = !(f instanceof k.RendererCanvas) || f instanceof k.RendererCanvas && f.isRendered();
              if (1 * A !== this._lastResolutionBorder || this._runsDirty || !_ || this._lastBorderPaintLayer !== i && (i && i.hasStyle() || this._lastBorderPaintLayer && this._lastBorderPaintLayer.hasStyle())) {
                if (i.$_ba !== p.BorderAlignment.Center && (d *= 2), u.transform && u.transform.isValid()) {
                  if (i.$_pt && i.$_pt instanceof m && i.$_pt.getTransform()) {
                    var v = a ? B.getNativeRectTransformation(a) : new B(), b = i.$_pt.getTransform(), C = b.getTranslation(), w = A, E = a ? a.getWidth() : 1, P = a ? a.getHeight() : 1, S = b.multiplied(new B(w, 0, 0, w, -w * C.getX(), -w * C.getY())).multiplied(v).multiplied(new B(1 / w, 0, 0, 1 / w, C.getX() * E * w, C.getY() * P * w));
                    u.transform = S;
                  }
                  i.$_px && !i.$_px.isIdentity() && (u.transform = u.transform.preMultiplied(i.$_px));
                  var T = this.getSourceBBox(o), I = this.getStyleBorderPadding(i);
                  I && (T = T.expanded(I, I, I, I)), d /= u.transform.getScaleFactor(), g = T;
                }
                var F = {
                  shapePaint: u.paint,
                  paintTransform: u.transform,
                  opacity: i.$_op,
                  objTransform: this.$trf,
                  strokeWidth: d,
                  lineJoin: i.$_blj,
                  miterLimit: i.$_bml,
                  lineCap: i.$_blc,
                  strokeAlign: i.$_ba,
                  borderArea: g,
                  valign: this.$va
                };
                n.render(this._isEdited, 1 * A, F, y.RENDERFLAG_STROKE | y.RENDERFLAG_VERTEX | y.RENDERFLAG_SCALEBITMAP), f = n.getCanvas(y.RENDERFLAG_STROKE), this._lastResolutionBorder = 1 * A, this._lastBorderPaintLayer = i;
              }
              var R, D = s.getTransform(true), G = 1 / (1 * A), Q = new B(G, 0, 0, G, 0, 0);
              R = (R = this.$trf ? D.preMultiplied(this.$trf) : new (Function.prototype.bind.apply(B, [null].concat(D.getMatrix())))()).preMultiplied(Q), s.setTransform(R);
              var M = s.getTranslateCorrection(new l(0, 0), s.getTransform().getTranslation());
              if (f && f.width * f.height > 0)
                try {
                  s.drawImage(f, N.HMARGIN + M.getX() - n.getLeftPadding() * A, N.VMARGIN + M.getY() - n.getTopPadding() * A, false), s.setTransform(D), h.drawCanvas(s, 0, 0, null, i.getBlendingForContext(e));
                } catch (e) {
                }
            } catch (e) {
              console.warn("ERROR during text rendering:" + e.message);
            } finally {
              s.finish(), e.popCanvas();
            }
          }
        } else if (r) {
          var U = e.canvas.resetTransform(), V = new x(this, U);
          e.canvas.putVertices(V), e.canvas.strokeVertices(e.getOutlineColor()), e.canvas.setTransform(U);
        }
      }
    }, N.prototype.createShapePaint = function (e, t, i) {
      if (t instanceof s) {
        var n = e.getRootCanvas();
        if (!n)
          return null;
        var r = n.getOrigin(), o = n.getScale(), a = new B(), l = this.$trf ? this.$trf.getScaleFactor() : 1;
        if (a = (a = a.scaled(1 / o, 1 / o)).translated(r.getX() * l, r.getY() * l), this.$trf && this.$trf.invertible()) {
          var A = this.$trf.inverted(), c = A.getTranslation();
          a = (a = (a = (a = a.multiplied(A)).translated(-c.getX(), -c.getY())).translated(c.getX() * o * l, c.getY() * o * l)).translated(-N.HMARGIN, -N.VMARGIN);
        }
        return this._resetFxCacheAndState(), {
          paint: e.canvas.createTexture(n, h.RepeatMode.None),
          transform: a
        };
      }
      return b.prototype.createShapePaint.call(this, e, t, i);
    }, N.prototype._getClipBox = function (e) {
      return null;
    }, N.prototype._requireMiterLimitApproximation = function () {
      return true;
    }, N.prototype._requireResolvedFont = function (e) {
      if (this._fontsToResolve)
        for (var t = 0; t < this._fontsToResolve.length; ++t)
          if (v.equals(this._fontsToResolve[t], e))
            return;
      this._fontsToResolve = this._fontsToResolve || [], this._fontsToResolve.push(e), this._updateFontManagerListener();
    }, N.prototype._updateFontManagerListener = function (e) {
      this._workspace && (this._fontsToResolve && !e || !this._hasFontManagerListener ? this._fontsToResolve && !this._hasFontManagerListener && (this._hasFontManagerListener = true, this._workspace.getFontManager().addEventListener(o.FontAvailableEvent, this._fontAvailableEvent, this)) : (this._workspace.getFontManager().removeEventListener(o.FontAvailableEvent, this._fontAvailableEvent, this), this._hasFontManagerListener = false));
    }, N.prototype._fontAvailableEvent = function (e) {
      var t = false;
      if (this._workspace) {
        var require = this._workspace.getFontManager().getDefaultFont();
        if (require) {
          if (this._fontsToResolve)
            for (var n = this._fontsToResolve.length - 1; n >= 0; --n)
              if ((v.equals(this._fontsToResolve[n], e.font) || this._fontsToResolve[n] === N.DEFAULTFONT && v.equals(e.font, require)) && (this._fontsToResolve.splice(n, 1), 0 === this._fontsToResolve.length && (this._fontsToResolve = null, this._updateFontManagerListener()), t = true, this._deferredRangeSetters))
                for (var r = this._deferredRangeSetters.length - 1; r >= 0; --r)
                  this._deferredRangeSetters[r].func.call(this, this._deferredRangeSetters[r].vars) && this._deferredRangeSetters.splice(r, 1);
          t && (this._setTextWhenAvailable && null === this._fontsToResolve && (this._setTextWhenAvailable = false, this.$content && this.setText(JSON.parse(this.$content, N._deserializeContent), true)), this._runsDirty = true, this._verticesDirty = true, this._resetFxCacheAndState(), this.hasPathAttached() && this.attachPath(this._attachedPath), this._notifyChange(E._Change.PrepareGeometryUpdate), this._notifyChange(E._Change.FinishGeometryUpdate));
        }
      } else
        this._waitForWorkspace = true;
    }, N.prototype.adaptFontSizeToFitBBox = function () {
      if (!(this.isFakeText() || this.hasPathAttached() || this.getProperty("aw") || this.getProperty("ah"))) {
        var exports = this.getTLCore();
        if (exports) {
          var t = this.getGeometryBBox();
          if (t) {
            var require = exports.getActualBounds();
            if (require && (!this._lastActualBounds || this._lastActualBounds.b !== require.b)) {
              this._lastActualBounds = require;
              var n, r, o = this.getProperty("_tfi") || u.defaultFormatting.fontSize, a = t.getHeight() / require.b;
              a > 1 ? (n = Math.max(6, Math.floor(o)), r = Math.min(72, Math.ceil(o * a) + 5)) : (n = Math.max(6, Math.floor(o * a) - 5), r = Math.ceil(o));
              for (var s = o, l = 0, h = (r - n) / 0.1; l <= h;) {
                var A = Math.ceil(l + (h - l) / 2), c = n + 0.1 * A, p = exports.cloneDocument();
                p.documentRange().setFormatting("fontSize", c);
                var d = p.realBounds();
                if (!d)
                  break;
                d.b <= t.getHeight() + 2 ? (l = A + 1, s = c) : h = A - 1;
              }
              s !== o && this.setProperty("_tfi", s);
            }
          }
        }
      }
    }, N.prototype.toString = function () {
      return "[GText]";
    }, exports.exports = N;
  }.call(this, require(183) /* module_183 */));
}
