/**
 * Module 387
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
  var n = require(82) /* SavePoint */, r = require(161) /* GTLUtil */, o = require(2) /* GNode */, a = require(0) /* GObject */, s = require(17) /* GRGBColor */, l = require(68) /* GColor */, h = require(11) /* GUtil */, A = require(56) /* GShape */, c = require(69) /* GBlock */, p = require(752) /* GInlineTextEditor */, u = require(128) /* GShapeEditor */, d = require(36) /* PartsPropertyVals */, g = require(70) /* GText */, f = require(5) /* GPoint */, m = require(24) /* GEditorOptions */, y = require(66) /* EdTransformOptions */, _ = require(6) /* GRect */, v = require(7) /* GTransform */, b = require(12) /* GMath */, C = require(73) /* GRectangle */, w = require(39) /* PartInfo */, E = require(81) /* GEditorAnnotation */, B = (require(52) /* module */, require(22) /* GElement */), x = require(167) /* module */, P = require(64) /* GPlatform */, S = require(108) /* GFont */, T = require(215) /* GTLPathTextTransformer */, I = require(164) /* GKey */, F = require(9) /* GLocale */, R = require(47) /* GLocaleKey */, D = require(176) /* GSystem */;
  function k(e) {
    this._inlineEditEnabled = true, u.call(this, e);
  }
  a.inherit(k, u), d.exports(k, g), k.DISTANCE_HANDLER_ID = h.uuid(), k.prototype._inlineEditor = null, k.prototype._dontSetContent = false, k.prototype._currentRangeFormatting = null, k.prototype._fullContentsTransform = false, k.prototype._view = null, k.prototype._inlineEditEnabled = true, k.prototype._toggles = {
    B: "fontWeight",
    I: "fontStyle"
  }, k.prototype.getProperty = function (e, t, i, n) {
    return this.getElement().getProperty(e, t, i, n, this.isInlineEdit());
  }, k.prototype.setProperties = function (e, t, i) {
    var n = this.getElement().hasPathAttached(), r = (this.getElement().getProperty("trf"), e.indexOf("trf"));
    n && r >= 0 && (e.splice(r, 1), t.splice(r, 1), !e.length) || this.getElement().setProperties(e, t, false, false, i, this.isInlineEdit(), false);
  }, k.prototype.getFonts = function () {
    var e = [];
    if (fontProperty = this.getProperty("_tff"), fontProperty)
      e.push(fontProperty);
    else {
      var module = g.PropertyMapping._tff, require = this.getElement().getContent();
      if (require) {
        for (var n = 0; n < require.length; n++)
          e.push(this.getElement()._getGravitValue(module, require[n][module]));
        e = h.unique(e);
      }
    }
    return e;
  }, k.prototype.setProperty = function (e, t, i) {
    this.setProperties([e], [t], i);
  }, k.prototype.hasPathAttached = function () {
    return this.getElement().hasPathAttached();
  }, k.prototype.initialSetup = function (e) {
    u.prototype.initialSetup.call(this, null);
  }, k.prototype.acceptDrop = function (e, t, i, r) {
    if (u.prototype.acceptDrop.call(this, e, t, i, r))
      return true;
    if (t === d.DropType.FontFamily) {
      var o = n.getEditor(this.getElement().getScene());
      if (o) {
        o.beginTransaction();
        try {
          this.getElement().setProperty("_tff", i);
        } finally {
          o.commitTransaction(F.get(new R("GTextEditor", "action.drop-font")));
        }
      }
      return true;
    }
    return false;
  }, k.prototype._detach = function () {
    if (this.isInlineEdit()) {
      var exports = this.getElement();
      if (!exports)
        return;
      var module = n.getEditor(exports.getScene());
      module && module.closeInlineEditor();
    }
  }, k.prototype.handleKeyEvent = function (e) {
    if (!this.isInlineEdit() && e instanceof x.Down) {
      var module = e.key, require = P.modifiers.metaKey, r = P.modifiers.shiftKey, o = this.getElement().getTLCore(), a = n.getEditor(this.getElement().getScene()), s = this._toggles[module];
      if (require && !r && s) {
        var l, h, A, c, p = o.getDocumentRange().getFormatting()[s], u = this.getElement().getWorkspace().getFontManager(), d = this.getProperty("_tff"), g = u.queryFontFamily(d);
        "fontWeight" === s ? (l = this.getProperty("_tfs"), (c = (A = h = parseInt(p) == S.Weight.Bold ? S.Weight.Regular : S.Weight.Bold) === S.Weight.Normal || undefined === g || g.filter(function (e) {
          return e.style === l && e.weight === h;
        }).length > 0) && (a.beginTransaction(), this.setProperties(["_tfw"], [A]), a.commitTransaction(F.get(new R("GTextEditor", "action.modify-text-properties"))))) : "fontStyle" === s && (h = this.getProperty("_tfw"), (c = (A = l = "italic" == p ? S.Style.Normal : S.Style.Italic) === S.Style.Normal || undefined === g || g.filter(function (e) {
          return e.style === l && e.weight === h;
        }).length > 0) && (a.beginTransaction(), this.setProperties(["_tfs"], [A]), a.commitTransaction(F.get(new R("GTextEditor", "action.modify-text-properties"))))), c && this.triggerHotkeyEvent([
          I.Constant.CONTROL,
          module
        ]);
      }
    }
  }, k.prototype._attach = function () {
    var e = this.getElement();
    e.deferredLoadHandler = function () {
      this._triggerSelectionChanged();
    }.bind(this), e.contentChangedHandler(function (e) {
      var t = this.getElement();
      if (t) {
        var require, r, o, a, s = t.getTLCore();
        if (o = n.getEditor(t.getScene()), require = s.getRichContent(), r = JSON.stringify(require), a = s.getWasEdited(), r !== t.getProperty("content")) {
          !e && o && o.beginTransaction();
          try {
            t.setProperties(["content"], [r], false, false, false, false, false, this._dontSetContent), t.getProperty("afs") && t.adaptFontSizeToFitBBox();
          } finally {
            !e && o && o.commitTransaction(F.get(new R("GTextEditor", "action.edit-text"))), o && this.isInlineEdit() && setTimeout(function () {
              this._triggerTextEdited({ wasModifiedBefore: a });
            }.bind(this)), this.requestInvalidation();
          }
        } else
          console.log("same content tried set");
      }
    }.bind(this), true);
  }, k.prototype.getDefaultStyle = function () {
    var e = this.getElement();
    return e.getScene() ? e.getScene().getStyles().querySingle("style[_sdf=\"" + a.getTypeId(g) + "\"]") : null;
  }, k.prototype._getPartInfoAt = function (e, t, i) {
    if (this._element.hasPathAttached()) {
      var n = this._getDistHandlePosition(t);
      if (E.getAnnotationBBox(null, n, m.annotationHandles.textOnPath.size, false).expanded(m.annotPickDistance, m.annotPickDistance, m.annotPickDistance, m.annotPickDistance).containsPoint(e)) {
        var r = new w.PartInfo(this, k.DISTANCE_HANDLER_ID, null, true, true);
        if (r)
          return r;
      }
    }
    return u.prototype._getPartInfoAt.call(this, e, t, i);
  }, k.prototype.createElementPreview = function () {
    if (!this._elementPreview && !this.getElement().hasPathAttached()) {
      var exports = this._element.getSourceBBox();
      exports && (this._setElementPreview(new C(exports.getX(), exports.getY(), exports.getWidth(), exports.getHeight())), this._elementPreview.transferProperties(this._element, [A.GeometryProperties]));
    }
  }, k.prototype.canApplyTransform = function () {
    if (this.hasPathAttached()) {
      if (this._elementPreview)
        return false;
      if (this._transform) {
        var exports = this._transform.getTranslation();
        if (this._transform.translated(-exports.getX(), -exports.getY()).isIdentity())
          return true;
      }
      return false;
    }
    return this._elementPreview || u.prototype.canApplyTransform.call(this);
  }, k.prototype._applyTransform = function (e, t, i, n) {
    this._fullContentsTransform = e.getProperty("sc"), u.prototype._applyTransform.call(this, e.hasPathAttached() ? e._attachedPath : e, t, i, n);
  }, k.prototype.resetTransform = function () {
    this._fullContentsTransform = false, u.prototype.resetTransform.call(this);
  }, k.prototype.edTransform = function (e, t, i, n) {
    this._fullContentsTransform = n && !!n.fullContentsTransform || this.getElement().getProperty("sc"), y.prototype.edTransform.call(this, e, t, i, n);
  }, k.prototype.getPEGeometryBBox = function () {
    var e = null;
    if (this.hasFlag(w.Flag.Selected) || this.hasFlag(w.Flag.Highlighted) || this.hasFlag(w.Flag.Outline)) {
      var module = this.getElement();
      e = module.getSourceBBox();
      var require = module.getTransform(), n = null;
      this._preTransform && (n = this._preTransform), require && (n = n ? n.multiplied(require) : require), this._transform && (n = n ? n.multiplied(this._transform) : this._transform), e && n && (e = n.mapRect(e));
    }
    return e;
  }, k.prototype.movePart = function (e, t, i, n, r, o, a, s) {
    var l = u.prototype.movePart.call(this, e, t, i, n, r, o, a);
    if (e === k.DISTANCE_HANDLER_ID) {
      var h = this._element.getTLCore();
      if (!h || !h.getTransformer())
        return 0;
      var A = h.getTransformer(T.TYPE), c = A.getBoxOrigin();
      if (!c)
        return 0;
      var p = n.mapPoint(i), d = this._element.getProperty("trf");
      d && d.invertible() && (p = d.inverted().mapPoint(p));
      var g = A.inverseTransform(p.subtract(c), true);
      this._element.setProperty("tpthl", g.getX() + (this._element.$tpthl || 0), null, false, true), this.requestInvalidation();
    }
    return l;
  }, k.prototype._applyPartMove = function (e, t, i, n) {
    if (e === y.RESIZE_HANDLE_PART_ID || e === y.ROTATION_HANDLE_PART_ID)
      if (this.canApplyTransform()) {
        var r = this._element.getProperty("sc");
        if (this._fullContentsTransform = r && t.side !== _.Side.BOTTOM_RIGHT, this._element && this._elementPreview && !this._element.isFakeText() && e === y.RESIZE_HANDLE_PART_ID && !this._fullContentsTransform) {
          var o, a, s = [], l = [], h = this._elementPreview.getProperty("trf"), A = this._element.getProperty("trf"), c = A ? A.inverted() : null;
          if (h) {
            if (r && t.side === _.Side.BOTTOM_RIGHT) {
              var p = (c ? c.multiplied(h) : h).getScaleFactor(), f = this._element.getProperty("_tfi");
              if (f)
                o = parseInt(f * p);
              else if (this._element.getTLCore()) {
                var m = this._element.getContent();
                m && (m = m.map(function (e) {
                  return e.fontSize = p * e.fontSize, e;
                }), a = JSON.stringify(m, g._serializeContent));
              }
            }
            c && (h = h.multiplied(c));
          }
          this._element.beginUpdate(), t.side !== _.Side.RIGHT_CENTER && t.side !== _.Side.LEFT_CENTER && this._element.getProperty("ah") && !this._element.hasPathAttached() && (s.push("ah"), l.push(false)), t.side !== _.Side.TOP_CENTER && t.side !== _.Side.BOTTOM_CENTER && this._element.getProperty("aw") && !this._element.hasPathAttached() && (s.push("aw"), l.push(false)), s.length && this._element.setProperties(s, l, false, false, false), this._element.transformSourceBBox(h), undefined !== o ? this._element.setProperties(["_tfi"], [o]) : undefined !== a && this._element.setProperties(["content"], [a]), this._preTransform && !this._preTransform.isIdentity() && B.Transform.prototype.preTransform.call(this._element, this._preTransform, false, n), this._element.endUpdate(), this.resetTransform();
        } else
          this._element && this._element.isFakeText() && e === y.RESIZE_HANDLE_PART_ID || (u.prototype._prepareApplyTransform(this, this._element), u.prototype._applyTransform.call(this, this._element, e === y.ROTATION_HANDLE_PART_ID, n, i));
      } else
        this.resetTransform();
    else
      e === k.DISTANCE_HANDLER_ID && (this._element.setProperty("tpthl", this._element.$tpthl), this.resetPartMove(e, t));
    d.prototype._applyPartMove.call(this, e, t, i, n);
  }, k.prototype.processPaste = function (e) {
    var t = null;
    if (!this.isInlineEdit())
      return false;
    if (e instanceof g ? t = e.getContent() : (e instanceof String || "string" == typeof e) && (D.OperatingSystem.Windows && (e = h.replaceMicrosoftLineFeed(e)), t = e), !t)
      return false;
    var i = this._element.getTLCore();
    return i ? (this.requestInvalidation(), this.contentSetEnabled(0), i.insert(this._element._shorten(t)), this.invalidateTextWidth(), this.contentSetEnabled(1), true) : 0;
  }, k.prototype.invalidateTextWidth = function () {
    var e = this._element;
    if (e.$aw && !e.hasPathAttached()) {
      var module, require, n = e.getGeometryBBox(), r = e.getPage().getGeometryBBox(), o = e.getTransform(), a = e._getWidth();
      if (o && o.getMatrix()[0] < 0) {
        if (n.getX() < 0 && n.getX() + n.getWidth() > 50) {
          e.setProperties([
            "aw",
            "w"
          ], [
            false,
            a
          ]);
          var s = (n.getWidth() + n.getX()) / n.getWidth();
          l = (l = new v()).scaled(s, 1), e.transformSourceBBox(l);
        }
      } else if ((module = n.getX() + n.getWidth()) > (require = r.getWidth())) {
        var l = new v(), h = module - require;
        if (n.getWidth() - h > 50) {
          e.setProperties([
            "aw",
            "w"
          ], [
            false,
            a
          ]);
          s = (n.getWidth() - h) / n.getWidth();
          l = l.scaled(s, 1), e.transformSourceBBox(l);
        }
      }
    }
  }, k.prototype.handleKeyDown = function (e) {
    return !!this.isInlineEdit() && this._inlineEditor.handleDomKeyDown(e);
  }, k.prototype.contentSetEnabled = function (e) {
    this._dontSetContent = !e;
  }, k.prototype.canHandleDblClick = function () {
    return true;
  }, k.prototype.handleDblClick = function (e, t) {
    return e === y.RESIZE_HANDLE_PART_ID && (t.side === _.Side.RIGHT_CENTER ? this._element.setProperty("aw", !this._element.getProperty("aw")) : t.side === _.Side.BOTTOM_CENTER && this._element.setProperty("ah", !this._element.getProperty("ah")), true);
  }, k.prototype._getVerticalOffset = function () {
    var e = this._element.getTLCore();
    if (!e)
      return 0;
    var t = this._element.getSourceBBox(), i = t && t.getHeight() || 0, n = e.getHeight();
    return n < i ? 0.5 * (this._element._getHeight() - n) : 0;
  }, k.prototype.getBBox = function (e) {
    if (this.hasPathAttached() && (this.hasFlag(w.Flag.Selected) || this.hasFlag(w.Flag.Highlighted))) {
      var module = e;
      this._transform && (module = this._transform.multiplied(e));
      var require = this._element.getTLCore();
      if (require) {
        var n = module, r = this.getBoxTransform();
        r && (n = r.multiplied(module));
        var o = require.getBoxes(require.getDocumentRange());
        if (!o)
          return null;
        var a, s, l, h, A = this._mergeRectangles(o);
        a = s = Number.POSITIVE_INFINITY, l = h = Number.NEGATIVE_INFINITY;
        for (var c = 0; c < A.length; c++)
          for (var p = A[c], d = 0; d < p.length; d++) {
            var g = p[d], f = g.getX(), m = g.getY();
            a = Math.min(a, f), l = Math.max(l, f), s = Math.min(s, m), h = Math.max(h, m);
          }
        if (isFinite(a) && isFinite(l) && isFinite(h) && isFinite(s)) {
          var y = new _(a, s, l - a, h - s), v = this.getBBoxMargin();
          return n.mapRect(y).expanded(v, v, v, v);
        }
        return null;
      }
    }
    return u.prototype.getBBox.call(this, e);
  }, k.prototype.getBBoxMargin = function () {
    var e = u.prototype.getBBoxMargin.call(this);
    if (this.getElement().hasPathAttached()) {
      var module = this.isInlineEdit() && this._inlineEditor.getCaretBox(), require = this.hasFlag(w.Flag.Selected) ? E.getAnnotationPaintMargin(m.annotationHandles.textOnPath.size) : 0;
      return module && (require = Math.max(module.box.getWidth(), module.box.getHeight())), Math.max(require, e);
    }
    return e;
  }, k.prototype._getBBox = function (e, t) {
    if (!this._fullContentsTransform && this._transform) {
      var require = this._transform && t ? this._transform.multiplied(e) : e, n = this._getBoxParams(require);
      if (n.bbox) {
        var r = n.bbox;
        if (n.trf)
          return r = n.trf.mapRect(r);
      }
    }
    return null;
  }, k.prototype._paintResizeHandles = function (e, t) {
    var i = m.annotationHandles.resize;
    this._iterateResizeHandles(function (n, r, o) {
      var a = i.inverted;
      m.annotationHandles.text.showAutoSize && (r === _.Side.RIGHT_CENTER && this._element.getProperty("aw") || r === _.Side.BOTTOM_CENTER && this._element.getProperty("ah")) && (a = !a), r === _.Side.BOTTOM_RIGHT && this._element.getProperty("sc") ? E.paintAnnotation(t, e, n, i.type, a, i.size, m.annotationHandles.text.blResizeColor, s.WHITE) : E.paintAnnotation(t, e, n, i.type, a, i.size, this.getColor() || t.selectionOutlineColor, s.WHITE);
    }.bind(this), e);
  }, k.prototype._showResizeHandles = function () {
    return !this.getElement().hasPathAttached() && u.prototype._showResizeHandles.call(this);
  }, k.prototype._drawBBox = function (e, t, i, n, r, o, a) {
    var s, l = i.box || i, h = t;
    if (o) {
      i.transform && (h = h.preMultiplied(i.transform));
      var A = 0, c = 0;
      1 == l.getWidth() ? c = l.getHeight() : A = l.getWidth(), s = [
        h.mapPoint(new f(l.getX() + 0.5, l.getY())),
        h.mapPoint(new f(l.getX() + A + 0.5, l.getY() + c))
      ];
    } else
      l instanceof _ ? s = h.mapQuadrilateral(l) : l.length && (s = l.map(function (e) {
        return h.mapPoint(e);
      }));
    var p = null;
    s && s.length && (p = s.map(function (e) {
      return new f(Math.floor(e.getX()) + 0.5, Math.floor(e.getY()) + 0.5);
    })), p && (e.canvas.putVertices(p, true), 2 == p.length ? e.canvas.strokeVertices(n, Math.sqrt(h.getScaleFactor()) || 1, null, null, null, null, r) : a ? e.canvas.strokeVertices(n, 1, null, null, null, null, r) : e.canvas.fillVertices(n, r));
  }, k.prototype._mergeRectangles = function (e) {
    for (var module = 0, require = []; module < e.length;) {
      var n = e[module].box, r = e[module].transform;
      if (r) {
        for (var o = r.mapQuadrilateral(n), a = (p = b.getTurnAngle(o[0], o[1], o[1], o[2]) <= 0) ? [
              o[0],
              o[1]
            ] : [
              o[1],
              o[0]
            ], s = p ? [
              o[3],
              o[2]
            ] : [
              o[2],
              o[3]
            ], l = null, h = module + 1; h < e.length; h++) {
          var A = e[h].box;
          if (!(A.getX() <= n.getX() + n.getWidth() && A.getX() + A.getWidth() >= n.getX() && A.getY() <= n.getY() + n.getHeight() && A.getY() + A.getHeight() >= n.getY()))
            break;
          if (r = e[h].transform) {
            l = r.mapQuadrilateral(A);
            var c;
            c = b.getIntersectionPoint(l[0].getX(), l[0].getY(), l[1].getX(), l[1].getY(), o[0].getX(), o[0].getY(), o[1].getX(), o[1].getY());
            var p = b.getTurnAngle(l[0], l[1], l[1], l[2]) <= 0;
            c ? (a.pop(), p ? a.push(c, l[1]) : a.push(c, l[0])) : p ? a.push(l[0], l[1]) : a.push(l[1], l[0]);
            var u = null, d = b.normalizePoint(l[2].subtract(l[3]));
            if (!(b.normalizePoint(o[2].subtract(o[3])).dot(d) > 0.999)) {
              var g = [];
              (u = b.getIntersectionPoint(l[2].getX(), l[2].getY(), l[3].getX(), l[3].getY(), o[2].getX(), o[2].getY(), o[3].getX(), o[3].getY(), g)) && g[0] * g[1] > 0 && Math.abs(g[0]) + Math.abs(g[1]) > 2 && (u = null);
            }
            c ? p ? s.push(l[3], l[2]) : s.push(l[2], l[3]) : (s.pop(), u && s.push(u), p ? s.push(l[2]) : s.push(l[3])), n = A, o = l;
          }
        }
        var f = a.concat(s.reverse());
        require.push(f), module = h;
      } else
        module++;
    }
    return require;
  }, k.prototype._paintOutline = function (e, t, i, n, r) {
    if (!this.getElement().hasPathAttached()) {
      var o = true;
      this.isInlineEdit() && (o = !this.getElement().getProperty("ah") || !this.getElement().getProperty("aw")), o && y.prototype._paintOutline.call(this, e, t, true, n);
    }
    var a, h, A, c = e, p = this.getBoxTransform();
    if (c = p ? p.multiplied(c) : c, this.isInlineEdit() && (a = this._inlineEditor.getCaretBox(), h = this._inlineEditor.getSelectionBoxes()), a) {
      for (var u = this.getElement(), d = u.getTLCore(), g = u.getEffects().getFirstChild(), f = g && g.getProperty("GGLBrightnessContrastEffect&shp") || null, m = g && f ? f.brightness : 0, _ = u.getProperty("_stop"), v = d.getRichContent(), b = d.getSelection(), C = b ? b.start : 0, E = 0, B = 0, x = 0, P = v.length; x < P; x++) {
        if (C <= (B += v[x].text.length)) {
          E = x;
          break;
        }
      }
      var S = v.length ? v[E].fontColor : n;
      m && (hsv = l.rgbToHSV(s.parseCSSColor(S)), hsv[2] += m, S = l.rgbToHtmlHex(l.hsvToRGB(hsv))), this._drawBBox(t, c, a, S, _, true);
    } else if (h && h.length)
      if (h[0].transform) {
        A = this._mergeRectangles(h);
        for (x = 0; x < A.length; x++)
          this._drawBBox(t, c, A[x], n || (this.hasFlag(w.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), 0.3, false);
      } else
        for (x = 0; x < h.length; x++)
          this._drawBBox(t, c, h[x], n || (this.hasFlag(w.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), 0.3, false);
    else if (this.getElement().hasPathAttached() && !this.isInlineEdit()) {
      if (!(d = this.getElement().getTLCore()))
        return;
      var T = d.getBoxes(d.getDocumentRange());
      if (T) {
        A = this._mergeRectangles(T);
        for (x = 0; x < A.length; x++)
          this._drawBBox(t, c, A[x], n || (this.hasFlag(w.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), 0.3, false, true);
      }
    }
  }, k.prototype._paintResizeBoxOutline = function (e, t, i, n, r) {
    if (!this._fullContentsTransform && this._transform) {
      var o = this._getBoxParams(e);
      o.bbox && this._paintTransformedQuadrilateral(o.trf, o.bbox, t, n, r);
    } else
      y.prototype._paintResizeBoxOutline.call(this, e, t, i, n, r);
  }, k.prototype._getBoxParams = function (e) {
    var t = this.getBox(), i = this.getBoxTransform();
    if (t && e) {
      var n = e, r = i ? i.inverted() : null, o = this._element.getSourceBBox() || new f(0, 0);
      r && (n = new v(1, 0, 0, 1, o.getX(), o.getY()).multiplied(i).multiplied(n).multiplied(r)), i = i || new v();
      var a = n.getMatrix(), s = i.getTranslation(), l = new _(s.getX(), s.getY(), t.getWidth(), t.getHeight()), h = n.mapQuadrilateral(l), A = Math.max(1, Math.abs(h[0].getX() - h[1].getX())), c = Math.max(1, Math.abs(h[0].getY() - h[3].getY())), p = n.getTranslation();
      i = i.preMultiplied(new v(a[0] < 0 ? -1 : 1, 0, 0, a[3] < 0 ? -1 : 1, p.getX(), p.getY())), t = new _(0, 0, A, c);
    }
    return {
      bbox: t,
      trf: i
    };
  }, k.prototype._getDistHandlePosition = function (e) {
    if (!this._element.hasPathAttached())
      return null;
    var t = this.getElement().getTLCore();
    if (!t || !t.getTransformer())
      return null;
    var i = new f(0, 0), n = new _(i.getX(), -t.getVShift() + i.getY(), 1, 1), r = t.getTransformer().getMatrix(0, 0, n) || new v(), o = t.getRenderBounds(), a = new v(1, 0, 0, 1, -o.getX(), -o.getY()), s = e || new v();
    return (e = r.multiplied(a).multiplied(this._element.$trf || new v()).multiplied(s)).mapPoint(i);
  }, k.prototype._postPaint = function (e, t) {
    if (u.prototype._postPaint.call(this, e, t), this._element.hasFlag(o.Flag.Selected)) {
      var require = this._getDistHandlePosition(e);
      if (require) {
        var n = m.annotationHandles.textOnPath;
        E.paintAnnotation(t, null, require, n.type, false, n.size, s.WHITE, t.annotationColor);
      }
    }
  }, k.prototype._triggerSelectionChanged = function () {
    var e = n.getEditor(this.getElement().getScene());
    e && e.hasEventListeners(n.InlineEditorEvent) && e.trigger(new n.InlineEditorEvent(this, n.InlineEditorEvent.Type.SelectionChanged));
  }, k.prototype._triggerTextEdited = function (e) {
    var t = n.getEditor(this.getElement().getScene());
    t && t.hasEventListeners(n.InlineEditorEvent) && t.trigger(new n.InlineEditorEvent(this, n.InlineEditorEvent.Type.TextEdited, e));
  }, k.prototype.triggerHotkeyEvent = function (e) {
    var t = n.getEditor(this.getElement().getScene());
    t && t.hasEventListeners(n.HotkeyEvent) && t.trigger(new n.HotkeyEvent(e));
  }, k.prototype._nextCaretToggle = 0, k.prototype._caretUpdate = function () {
    var e, t;
    this.isInlineEdit() && (this._inlineEditor.hasFocus() ? (t = new Date().getTime()) > this._nextCaretToggle && (e = this._element.getTLCore(), this._nextCaretToggle = t + 500, e && e.toggleCaret() && this.getElement().repaint(true)) : (e = this._element.getTLCore()) && e.isCaretVisible() && e.toggleCaret());
  }, k.prototype.adjustInlineEditForView = function (e, t) {
    var i = this.getElement().getTLCore();
    i && !this.getElement().getProperty("_we") ? i.selectAll() : t && this._inlineEditor.setCursor(t);
  }, k.prototype.canInlineEdit = function () {
    if (m.inlineEditText && this._inlineEditEnabled && this.getElement().getTLCore() && this._element.getWorkspace().getFontManager().getDefaultFont() && !this._element.isFakeText() && this._element.$_ed)
      return true;
    return false;
  }, k.prototype.isInlineEdit = function () {
    return null !== this._inlineEditor && this._inlineEditor.isActivated();
  }, k.prototype.beginInlineEdit = function (e) {
    var t = this.getElement().getTLCore();
    t && this._element.getWorkspace().getFontManager().getDefaultFont() && !this._element.isFakeText() && (this.removeFlag(y.Flag.ResizeAll), this._inlineEditor || (this._inlineEditor = new p(this), t.selectionChanged(function (e) {
      if (!this.getParentEditor())
        return r.UNSUBSCRIBE;
      this._triggerSelectionChanged(), this.getElement().repaint();
    }.bind(this), true)), this._nextCaretToggle = new Date().getTime(), this._inlineEditor.activate(e), this.getElement().repaint(true));
  }, k.prototype.isSelectionHit = function (e) {
    return !!this.isInlineEdit() && this._inlineEditor.isSelectionHit(e);
  }, k.prototype.isDeletePartsAllowed = function () {
    return this.isInlineEdit();
  }, k.prototype.deletePartsSelected = function () {
    this.isInlineEdit() && this._inlineEditor.deleteSelected();
  }, k.prototype.finishInlineEdit = function () {
    this._inlineEditor._view;
    this._inlineEditor.deactivate(), this.getElement().repaint(false), this.getElement().getProperty("plkt") & c.ProgramLck.NoSizeChanges || this.setFlag(y.Flag.ResizeAll);
    var e = this.getElement().getTLCore();
    if (e && (this.getElement().setProperty("_we", this.getElement().getProperty("_we") || e.getWasEdited(), false, false, false), e.getLength() <= 1)) {
      var module = n.getEditor(this.getElement().getScene());
      module && module.deleteSelection(true);
    }
    return "Modify Text Content";
  }, k.prototype.canHandleKeyEvents = function () {
    return true;
  }, k.prototype.setInlineEditEnabled = function (e) {
    this._inlineEditEnabled = e;
  }, k.prototype.toString = function () {
    return "[Object GTextEditor]";
  }, exports.exports = k;
}
