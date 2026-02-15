/**
 * Module 367
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
  var n = require(161) /* GTLUtil */, r = require(416) /* module */, o = require(652) /* module */, a = require(28) /* GStylable */, s = require(14) /* GPaintCanvas */, l = require(148) /* module */, h = require(230) /* module */, A = require(17) /* GRGBColor */, c = require(928) /* module */, p = require(369) /* module */, u = require(655) /* module */, d = require(6) /* GRect */, g = (require(5) /* GPoint */, require(215) /* GTLPathTextTransformer */), f = require(266) /* GTLDirectionTextTransformer */, m = require(54) /* GVertexContainer */, y = require(7) /* GTransform */, _ = require(59) /* GVertexInfo */, v = require(103) /* module */, b = require(111) /* GRendererCtx */, C = require(0) /* GObject */, w = require(118) /* module */;
  function E() {
  }
  C.inheritAndMix(E, C, [w]), E.AUTO = -1, E.textMeter = null, E.INITIALIZATION_ERROR = "GTLCore: not initialized", E.prototype._fontManager = null, E.prototype._doc = null, E.prototype._changeLock = 0, E.prototype._changeParam = 0, E.prototype._canvas = null, E.prototype._fillCanvas = null, E.prototype._strokeCanvas = null, E.prototype._ctx = null, E.prototype._maxWidth = 0, E.prototype._width = 1, E.prototype._height = 1, E.prototype._deferredSettings = null, E.prototype._verticalShift = 0, E.prototype._textTransformer = null, E.prototype._renderBounds = null, E.prototype._padding = null, E.prototype._wasEdited = false, E.prototype._isInlineEdit = false, E.prototype.initialize = function (e, t, i, n) {
    E.textMeter || (r.fontManager = i, c.fontManager = i, E.textMeter = r);
    var a = i.getDefaultFont();
    if (!a)
      throw new Error("GTLCore: Cannot instantiate - default font unavailable");
    this._initializeDefaults(a), this._doc = new o();
    var s = v.getRenderer(true, undefined, undefined, true);
    if (this._canvas = s.canvas, this._width = e || 1, this._height = t || 1, this._ctx = new u(this, s), this._maxWidth = 4096, this._fontManager = i || null, this._fontCallback = n, this._deferredSettings) {
      var l = this._deferredSettings;
      l.hasOwnProperty(text) && this.setText(l.text), l.hasOwnProperty(width) && this.setWidth(l.width), l.hasOwnProperty(height) && this.setHeight(l.height), l.hasOwnProperty(select) && this.select(l.select.start, l.select, end), l.hasOwnProperty(selectAll) && this.selectAll(), l.hasOwnProperty(wrap) && this.setWrap(l.wrap), l.hasOwnProperty(path) && this.setPath(l.path.path, l.path.direction, l.path.side, l.path.offset, l.path.distance), l.hasOwnProperty(direction) && this.setDirection(l.direction.direction);
    }
  }, E.prototype.destroy = function () {
    v.destroy(this._canvas), v.destroy(this._fillCanvas), v.destroy(this._strokeCanvas);
  }, E.prototype._initializeDefaults = function (e) {
    if (!l.defaultFormatting.fontFamily) {
      var module = e.toCssProperties();
      l.defaultFormatting.fontFamily = module["font-family"];
      var require = parseInt(module["font-weight"]);
      Number.isNaN(require) ? l.defaultFormatting.fontWeight = module["font-weight"] : l.defaultFormatting.fontWeight = require, l.defaultFormatting.fontStyle = module["font-style"];
      var n = a.PropertySetInfo[a.PropertySet.Text].geometryProperties, r = a.PropertySetInfo[a.PropertySet.Paragraph].geometryProperties;
      l.defaultFormatting.fontSize = n._tfi;
      var o = n._fc && n._fc instanceof A ? n._fc.toScreenCSS() : "transparent";
      switch (l.defaultFormatting.fontColor = o, l.defaultFormatting.charSpacing = n._tcs, l.defaultFormatting.wordSpacing = n._tws, l.defaultFormatting.lineSpacing = r._plh, r._pal) {
      case a.ParagraphAlignment.Left:
        l.defaultFormatting.align = "left";
        break;
      case a.ParagraphAlignment.Center:
        l.defaultFormatting.align = "center";
        break;
      case a.ParagraphAlignment.Right:
        l.defaultFormatting.align = "right";
        break;
      case a.ParagraphAlignment.Justify:
        l.defaultFormatting.align = "justify";
      }
    }
  }, E.prototype.requireFont = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    this._fontCallback && this._fontCallback(e);
  }, E.prototype.lockChangeEvents = function (e) {
    this._changeLock = e;
  }, E.prototype.paramChangeEvent = function (e) {
    this._changeParam = e;
  }, E.prototype.setText = function (e) {
    if (this.isInitialized()) {
      var module = null;
      if ("string" == typeof e) {
        var require = this.getDocumentRange().getFormatting();
        e = n.deCRLFify(e), module = {}, require ? (module = require).text = e : module = { text: e }, module = [module];
      } else
        module = e instanceof Array ? e : [e];
      return this._doc.load(module, false);
    }
    this._setDeferred("text", e);
  }, E.prototype.transaction = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    this._doc.transaction(e);
  }, E.prototype.insert = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    this._doc.insert(e);
  }, E.prototype.setWrap = function (e) {
    this.isInitialized() ? this._doc.wrap(e) : this._setDeferred("wrap", e);
  }, E.prototype.setInlineEdit = function (e) {
    this._isInlineEdit = e;
  }, E.prototype.isInlineEdit = function () {
    return this._isInlineEdit;
  }, E.prototype.setPadding = function (e) {
    this._padding = e;
  }, E.prototype.getPadding = function () {
    return [
      this.getLeftPadding(),
      this._padding || 0,
      this.getRightPadding(),
      this._padding || 0
    ];
  }, E.prototype.setWidth = function (e) {
    this.isInitialized() ? (this._width = e, e == E.AUTO ? this._doc.width(this.getActualWidth() || this._maxWidth) : this._doc.width(e)) : this._setDeferred("width", e);
  }, E.prototype.setDirection = function (e) {
    if (this.isInitialized()) {
      if (this._textTransformer)
        if (this._textTransformer.getType() === g.TYPE) {
          if (e !== f.LTR) {
            var module = new f(this, { direction: parseInt(e) });
            this._textTransformer.prepend(module), this._textTransformer = module, this._ctx.textTransformer = this._textTransformer;
          }
        } else
          this._textTransformer.getType() === f.TYPE && (e === f.LTR ? (this._textTransformer = this._textTransformer.remove(), this._ctx.textTransformer = this._textTransformer) : this._textTransformer.setDirection(e));
      else
        e !== f.LTR && (this._textTransformer = new f(this, { direction: parseInt(e) }), this._ctx.textTransformer = this._textTransformer);
      this._calculateRenderBounds();
    } else
      this._setDeferred("direction", { direction: e });
  }, E.prototype.getDirection = function () {
    if (this._textTransformer) {
      var exports = this._textTransformer.get(f.TYPE);
      if (exports)
        return exports.getDirection();
    }
    return f.LTR;
  }, E.prototype.setPath = function (e, t, i, n, r) {
    if (this.isInitialized()) {
      if (this._textTransformer || e) {
        if (this._textTransformer && this._textTransformer.getType() === f.TYPE) {
          var o = this._textTransformer.get(g.TYPE);
          o && o.remove(), e && this._textTransformer.append(new g(this, e, {
            direction: parseInt(t),
            side: parseInt(i),
            offset: parseFloat(n),
            distance: parseFloat(r)
          }));
        } else
          this._textTransformer = e && new g(this, e, {
            direction: parseInt(t),
            side: parseInt(i),
            offset: parseFloat(n),
            distance: parseFloat(r)
          });
        this.setWrap(!e), this._ctx.textTransformer = this._textTransformer, this._calculateRenderBounds(), this.setWidth(E.AUTO);
      }
    } else
      this._setDeferred("path", {
        path: e,
        direction: t,
        side: i,
        offset: n,
        distance: r
      });
  }, E.prototype.getTransformer = function (e) {
    return e ? this._textTransformer ? this._textTransformer.get(e) : null : this._textTransformer ? this._textTransformer.getFirst() : null;
  }, E.prototype.getRealBounds = function () {
    return this._doc.frame.realBounds();
  }, E.prototype.getActualBounds = function () {
    var e = this.getRealBounds();
    if (e) {
      var module = this._doc.frame && this._doc.frame.children();
      if (module && module.length)
        if (module[module.length - 1].isEOF()) {
          var require = this.getCaretCoords(this._doc.frame.length - 1);
          require && (e = e.united(require));
        }
    }
    return e;
  }, E.prototype.getTopMargin = function () {
    var e = this._doc.frame.topMargin();
    return Number.isNaN(e) ? 0 : e;
  }, E.prototype.getBottomMargin = function () {
    var e = this._doc.frame.bottomMargin();
    return Number.isNaN(e) ? 0 : e;
  }, E.prototype.setHeight = function (e) {
    this.isInitialized() ? this._height = e : this._setDeferred("height", e);
  }, E.prototype.getActualWidth = function () {
    return this.isInitialized() && this._doc.frame ? Math.ceil(this._doc.frame.actualWidth()) : 0;
  }, E.prototype.getTopPadding = function () {
    return this._padding || 0;
  }, E.prototype.getLeftPadding = function () {
    if (!this.isInitialized())
      return null;
    if (this.hasPathTransformer())
      return this._padding || 0;
    if (!this._doc.frame)
      return null;
    var e = this._padding || 0, t = this._doc.frame.leftPadding() || 0;
    return t < 0 && (e += Math.abs(t)), e;
  }, E.prototype.getRightPadding = function () {
    if (!this.isInitialized())
      return null;
    if (this.hasPathTransformer())
      return this._padding || 0;
    if (!this._doc.frame)
      return null;
    var e = this._padding || 0, t = this._doc.frame.rightPadding() || 0;
    return t > 0 && (e += Math.abs(t)), e;
  }, E.prototype.getWidth = function () {
    return this.isInitialized() ? this.hasPathTransformer() ? this._renderBounds.getWidth() : this._width == E.AUTO ? this.getActualWidth() : this._width : 0;
  }, E.prototype.getActualHeight = function () {
    if (!this.isInitialized())
      return 0;
    if (!this._doc.frame)
      return 0;
    var e = this._doc.frame.bounds().h;
    if (this.isInlineEdit()) {
      var module = this.getSelection();
      if (module && module.end === module.start) {
        var require = this.getCaretCoords(module.start);
        require && !require.isEmpty() && (e = Math.max(require.b, e));
      }
    }
    return e;
  }, E.prototype.getHeight = function () {
    return this.isInitialized() ? this.hasPathTransformer() ? this._renderBounds.getHeight() : this._height == E.AUTO ? this.getActualHeight() : this._height : 0;
  }, E.prototype.getLength = function () {
    return this.isInitialized() ? this._doc.frame ? this._doc.frame.length : 0 : this._deferredSettings && this._deferredSettings.text ? this._deferredSettings.text.length - 1 : 0;
  }, E.prototype.getCaretCoords = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.getCaretCoords(e);
  }, E.prototype.getSelection = function () {
    return this.isInitialized() ? this._doc.selection : this._deferredSettings && this._deferredSettings.select ? this._deferredSettings.select : null;
  }, E.prototype.getBoxes = function (e, t) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    if (e && e.end !== e.start) {
      var require = [], n = function (e, i) {
          switch (e.type) {
          case "character":
          case "inline":
            t && !t(e) || i(e);
            break;
          case "word":
          case "line":
          case "list":
          case "item":
          case "frame":
            e.children().forEach(function (e) {
              n(e, i);
            });
            break;
          default:
            throw new Error("Gravit Text Layout Error: unknown node type");
          }
        };
      return e.parts(function (e) {
        var t = null;
        if (this._textTransformer) {
          var r = function (e) {
            var n = e.bounds(false, true), r = new d(n.l, n.t - this.getVShift(), n.w, n.h), o = new d(0, 0, n.w, n.h), a = this._renderBounds, s = this._textTransformer.getMatrix(n.l, isNaN(e.baseline) ? 0 : e.baseline, o) || new y(), l = new y(1, 0, 0, 1, -a.getX(), -a.getY());
            t = s.multiplied(l), require.push({
              box: r,
              transform: t
            });
          }.bind(this);
          n(e, r);
        } else
          n(e, function (e) {
            var t = e.bounds(false, true), n = new d(t.l, t.t - this.getVShift(), t.w, t.h);
            require.push({ box: n });
          }.bind(this));
      }.bind(this)), require;
    }
    return null;
  }, E.prototype.wordContainingOrdinal = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.wordContainingOrdinal(e);
  }, E.prototype.wordOrdinal = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.wordOrdinal(e);
  }, E.prototype.select = function (e, t) {
    return this.isInitialized() ? this._doc.select(e, t) : (this._setDeferred("selectAll", null), this._setDeferred("select", {
      start: e,
      end: t
    }), null);
  }, E.prototype.undo = function () {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.performUndo();
  }, E.prototype.redo = function () {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.performUndo(true);
  }, E.prototype.getRange = function (e, t) {
    return this.isInitialized() ? this._doc.range(e, t) : null;
  }, E.prototype.selectedRange = function () {
    return this.isInitialized() ? this._doc.selectedRange() : null;
  }, E.prototype.selectedParagraphRange = function () {
    if (!this.isInitialized())
      return null;
    var e = this._doc.selectedRange();
    return this._doc.paragraphRange(e.start, e.end);
  }, E.prototype.selectAll = function () {
    return this.isInitialized() ? this.select(0, this.getLength() - 1) : (this._setDeferred("select", null), void this._setDeferred("selectAll"));
  }, E.prototype.selectionChanged = function (e, t) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return t && this._doc.selectionChanged.clearHandlers(), this._doc.selectionChanged(e);
  }, E.prototype.contentChanged = function (e, t) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    var i = this._changeParam;
    t && this._doc.contentChanged.clearHandlers(), this._doc.contentChanged(function (t) {
      var n;
      return this._changeLock || (n = e(i)), this._wasEdited = true, n;
    }.bind(this));
  }, E.prototype.getDocumentRange = function () {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.documentRange();
  }, E.prototype.byCoordinate = function (e, t) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.byCoordinate(e, t + this._verticalShift);
  }, E.prototype.byOrdinal = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.byOrdinal(e);
  }, E.prototype.getVShift = function () {
    return this._verticalShift;
  }, E.prototype.getLines = function () {
    var e = [], t = function (i) {
        "line" === i.type && e.push(i), "function" == typeof i.children && i.children().forEach(t);
      };
    return this._checkFrame() && this._doc.frame.lines && this._doc.frame.lines.forEach(t), e;
  }, E.prototype.toggleCaret = function () {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.toggleCaret();
  }, E.prototype.isSelectionChanged = function () {
    return !!this.isInitialized() && this._doc.selectionJustChanged;
  }, E.prototype.isCaretVisible = function () {
    return !!this.isInitialized() && this._doc.caretVisible;
  }, E.prototype.getRenderBounds = function () {
    return this._renderBounds;
  }, E.prototype._calculateRenderBounds = function () {
    if (!this.isInitialized())
      return new d(0, 0);
    var e, t = new m();
    return this.renderVertices(t), e = _.calculateBounds(t), this._renderBounds = e || new d(0, 0), this._renderBounds;
  }, E.prototype.render = function (e, t, i, n) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    var r = Math.max(this.getLeftPadding(), this.getRightPadding()), o = this._padding || 0, l = this.getWidth() + 2 * r, A = this.getHeight() + 2 * o, c = 0, u = 0, g = 1, f = l, m = A;
    if (this.hasPathTransformer()) {
      var y = this.getRenderBounds();
      c = -y.getX(), u = -y.getY(), f = y.getWidth() + Math.max(2 * r, 2 * o), m = y.getHeight() + Math.max(2 * r, 2 * o), this._renderBounds = y, l = this.getActualWidth(), A = this.getActualHeight();
    } else
      this._renderBounds = new d(0, 0, l, A);
    this._ctx.renderMode(0), t || (t = 1), n & p.RENDERFLAG_SCALEBITMAP && (g *= t);
    var _ = Math.ceil(g * f), b = Math.ceil(g * m), C = false, w = this.getCanvas();
    w.width !== _ && (w.width = _ <= 0 ? 1 : _, v.isRenderPhase() || (this._canvas.width = w.width), C = true), w.height !== b && (w.height = b <= 0 ? 1 : b, v.isRenderPhase() || (this._canvas.height = w.height), C = true), C || (this._ctx.setTranslate(0, 0), this._ctx.clearRect(0, 0, f, m)), i.shapePaint ? (n & p.RENDERFLAG_STROKE && (n |= p.RENDERFLAG_LOCKSTROKE, this._ctx.strokeStyle = s.prototype._convertStyle.call(this, i.shapePaint)), n & p.RENDERFLAG_FILL && (this._ctx.defaultFill = s.prototype._convertStyle.call(this, i.shapePaint))) : n & p.RENDERFLAG_FILL && (this._ctx.defaultFill = "transparent"), this._ctx.globalAlpha = "number" == typeof i.opacity ? i.opacity : 1, this._ctx.globalCompositeOperation = s.CompositeOperator.SourceOver, n & p.RENDERFLAG_STROKE && ("number" == typeof i.strokeWidth ? this._ctx.lineWidth = i.strokeWidth : this._ctx.lineWidth = 1, this._ctx.lineCap = i.lineCap || "butt", this._ctx.lineJoin = i.lineJoin || "miter", this._ctx.miterLimit = "number" == typeof i.miterLimit ? i.miterLimit : 10, n & p.RENDERFLAG_VERTEX && (n |= p.RENDERFLAG_NODRAW)), i.evenodd && (n |= p.RENDERFLAG_EVENODDFILL), i.strokeAlign === a.BorderAlignment.Inside ? n |= p.RENDERFLAG_INSIDEBRD : i.strokeAlign === a.BorderAlignment.Outside && (n |= p.RENDERFLAG_OUTSIDEBRD), this._ctx.renderMode(n);
    var B = 0;
    i.valign && !this.hasPathTransformer() && ("m" == i.valign ? B = (A - (this._doc.frame ? this._doc.frame.bounds().h : 0)) / 2 : "b" == i.valign && (B = A - (this._doc.frame ? this._doc.frame.bounds().h : 0))), this._verticalShift = -B, this._ctx.setTranslate(c * g + this.getLeftPadding() * t, g * (B + u) + o * t), this._ctx.setScale(g, g);
    var x = this._ctx.getFillTransform(), P = this._ctx.globalAlpha;
    i.paintTransform && this._ctx.appendFillTransform(i.paintTransform), n & p.RENDERFLAG_NODRAW && n & p.RENDERFLAG_STROKE && this._ctx._canvasContext.beginPath(), this._doc.draw(this._ctx, new h(0, Math.max(0, this._verticalShift), l, A + Math.max(0, this._verticalShift))), n & p.RENDERFLAG_NODRAW && n & p.RENDERFLAG_STROKE && (this._ctx.strokeVertices(), n & p.RENDERFLAG_INSIDEBRD ? this._ctx.fillVertices("#000", 1, s.CompositeOperator.DestinationIn) : n & p.RENDERFLAG_OUTSIDEBRD && this._ctx.fillVertices("#000", 1, s.CompositeOperator.DestinationOut)), this._ctx.renderMode(0), i.paintTransform && (this._ctx.setFillTransform(x), n & p.RENDERFLAG_STROKE && (this._ctx.globalAlpha = P, this._ctx.globalCompositeOperation = s.CompositeOperator.SourceOver)), e && n & p.RENDERFLAG_DRAWSELECTION && this._doc.drawSelection(this._ctx, e || false);
    var S = function (e, t) {
      e.width * e.height != 0 && (t.width = e.width, t.height = e.height, t.globalCompositeOperation = s.CompositeOperator.Copy, t.getContext("2d").drawImage(e, 0, 0));
    };
    if (n & p.RENDERFLAG_FILL) {
      if (!this._fillCanvas) {
        var T = v.getRenderer(true, undefined, undefined, true);
        this._fillCanvas = T.canvas;
      }
      !v.isRenderPhase() && w.width * w.height > 0 && (this._fillCanvas.width = w.width, this._fillCanvas.height = w.height), S(w, this.getCanvas(p.RENDERFLAG_FILL));
    }
    n & p.RENDERFLAG_STROKE && (n & p.RENDERFLAG_FILL ? (v.destroy(this._strokeCanvas), this._strokeCanvas = this._fillCanvas) : (this._strokeCanvas && this._fillCanvas !== this._strokeCanvas || (this._strokeCanvas = v.getRenderer(true, undefined, undefined, true).canvas), !v.isRenderPhase() && w.width * w.height > 0 && (this._strokeCanvas.width = w.width, this._strokeCanvas.height = w.height), S(w, this.getCanvas(p.RENDERFLAG_STROKE))));
  }, E.prototype.hasPathTransformer = function () {
    return this._textTransformer && this._textTransformer.get(g.TYPE);
  }, E.prototype.renderVertices = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    this._ctx.renderMode(p.RENDERFLAG_VERTEX), this._ctx.clearVertices(), this.hasPathTransformer() ? this._doc.draw(this._ctx, new h(0, Math.max(0, this._verticalShift), this.getActualWidth(), this.getActualHeight() + Math.max(0, this._verticalShift))) : this._doc.draw(this._ctx, new h(0, Math.max(0, this._verticalShift), this.getWidth(), this.getHeight() + Math.max(0, this._verticalShift))), this._ctx.addVertices(e);
  }, E.prototype.renderVerticesWithStyle = function (e) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    this._ctx.renderMode(p.RENDERFLAG_VERTEX | p.RENDERFLAG_RENDERSTYLES), this._ctx.clearVertices(), this.hasPathTransformer() ? this._doc.draw(this._ctx, new h(0, Math.max(0, this._verticalShift), this.getActualWidth(), this.getActualHeight() + Math.max(0, this._verticalShift))) : this._doc.draw(this._ctx, new h(0, Math.max(0, this._verticalShift), this.getWidth(), this.getHeight() + Math.max(0, this._verticalShift))), this._ctx.addStyleVertices(e);
  }, E.prototype.getCanvas = function (e, t) {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    var i;
    return e & p.RENDERFLAG_STROKE ? v.isRenderPhase() ? this._strokeCanvas : this._strokeCanvas instanceof b.RendererCanvas ? ((i = this._strokeCanvas.$realCanvas) || (i = this._strokeCanvas.__realCanvas), i) : this._strokeCanvas : e & p.RENDERFLAG_FILL ? v.isRenderPhase() ? this._fillCanvas : this._fillCanvas instanceof b.RendererCanvas ? ((i = this._fillCanvas.$realCanvas) || (i = this._fillCanvas.__realCanvas), i) : this._fillCanvas : v.isRenderPhase() ? this._canvas : this._canvas instanceof b.RendererCanvas ? ((i = this._canvas.$realCanvas) || (i = this._canvas.__realCanvas), i) : this._canvas;
  }, E.prototype.isInitialized = function () {
    return null !== this._fontManager;
  }, E.prototype.getWasEdited = function () {
    return this._wasEdited;
  }, E.prototype.getRichContent = function () {
    if (!this.isInitialized())
      throw new Error(E.INITIALIZATION_ERROR);
    return this._doc.save();
  }, E.prototype._setDeferred = function (e, t) {
    this._deferredSettings || (this._deferredSettings = {}), this._deferredSettings.name = t;
  }, E.prototype._checkFrame = function () {
    return this.isInitialized() && !!this._doc.frame;
  }, E.prototype.getBBoxSpacing = function () {
    return this._checkFrame() ? this._doc.frame.getBBoxSpacing() : 0;
  }, E.prototype.getMinX = function () {
    return this._checkFrame() ? this._doc.frame.getMinX() : 0;
  }, E.prototype.cloneDocument = function () {
    return this._doc.clone();
  }, exports.exports = E;
}
