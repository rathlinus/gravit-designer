/**
 * Module 655
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
  var n = require(48) /* GVertex */, r = require(161) /* GTLUtil */, o = require(50) /* GPattern */, a = require(14) /* GPaintCanvas */, s = require(369) /* module */, l = require(54) /* GVertexContainer */, h = require(63) /* GVertexTransformer */, A = require(59) /* GVertexInfo */, c = require(195) /* module */, p = require(7) /* GTransform */, u = require(103) /* module */, d = require(111) /* GRendererCtx */, g = require(266) /* GTLDirectionTextTransformer */;
  function f(e, t) {
    t instanceof d.RendererCanvas ? t = t.parent : "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement && (t = t.getContext("2d")), this._canvasContext = t, this._canvasContext.hasOwnProperty("imageSmoothingQuality") && (this._canvasContext.imageSmoothingQuality = "high"), this._core = e, this._fillTransform = new p(), this._strokeTransform = new p(), this._transform = new p(), this.clearVertices();
  }
  f.FLAGS_DRAWING = s.RENDERFLAG_FILL | s.RENDERFLAG_STROKE, f.prototype._core = null, f.prototype._defaultFill = null, f.prototype._currentFont = null, f.prototype._contextFont = null, f.prototype.$canvasContext = null, f.prototype._vstack = null, f.prototype._sstack = null, f.prototype._vertexRendering = false, f.prototype._renderMode = s.RENDERFLAG_FILL, f.prototype._textFillStyle = null, f.prototype._textStrokeStyle = null, f.prototype._fillTransform = null, f.prototype._strokeTransform = null, f.prototype._transform = null, f.prototype.charSpacing = 0, f.prototype._textUnderline = false, f.prototype._textStrikeout = false, f.prototype._textTransformer = null, f.prototype._textLigatures = true, f.prototype._textVariant = null, f.prototype._langScript = null, f.prototype._textFractions = false, f.prototype._textStylisticSet = null, f.prototype._textLocalizedForm = null, Object.defineProperties(f.prototype, {
    _canvasContext: {
      get: function () {
        return u.isRenderPhase() ? this.$canvasContext : this.$canvasContext instanceof d ? this.$canvasContext.$realCtx ? this.$canvasContext.$realCtx : this.$canvasContext.__realCtx : this.$canvasContext;
      },
      set: function (e) {
        this.$canvasContext = e;
      }
    },
    defaultFill: {
      get: function () {
        return this._defaultFill;
      },
      set: function (e) {
        this._defaultFill = e;
      }
    },
    fillStyle: {
      get: function () {
        var e = this._canvasContext.fillStyle;
        return this._defaultFill && "transparent" !== this._defaultFill && (e = this._defaultFill), e;
      },
      set: function (e) {
        this._renderMode & s.RENDERFLAG_LOCKFILL || (e instanceof o ? this._textFillStyle = e : (this._canvasContext.fillStyle = e, this._textFillStyle = null));
      }
    },
    globalAlpha: {
      get: function () {
        return this._canvasContext.globalAlpha;
      },
      set: function (e) {
        this._canvasContext.globalAlpha = e;
      }
    },
    globalCompositeOperation: {
      get: function () {
        return this._canvasContext.globalCompositeOperation;
      },
      set: function (e) {
        this._canvasContext.globalCompositeOperation = e;
      }
    },
    lineWidth: {
      get: function () {
        return this._canvasContext.lineWidth;
      },
      set: function (e) {
        this._canvasContext.lineWidth = e;
      }
    },
    lineCap: {
      get: function () {
        return this._canvasContext.lineCap;
      },
      set: function (e) {
        this._canvasContext.lineCap = e;
      }
    },
    lineJoin: {
      get: function () {
        return this._canvasContext.lineJoin;
      },
      set: function (e) {
        this._canvasContext.lineJoin = e;
      }
    },
    miterLimit: {
      get: function () {
        return this._canvasContext.miterLimit;
      },
      set: function (e) {
        this._canvasContext.miterLimit = e;
      }
    },
    strokeStyle: {
      get: function () {
        return this._canvasContext.strokeStyle;
      },
      set: function (e) {
        this._renderMode & s.RENDERFLAG_LOCKSTROKE || (e instanceof o ? this._textStrokeStyle = e : (this._canvasContext.strokeStyle = e, this._textStrokeStyle = null));
      }
    },
    font: {
      get: function () {
        return this._contextFont || this._canvasContext.font;
      },
      set: function (e) {
        var t = r.parseFont(e), i = this._getFont(t.fontFamily, t.fontStyle, t.fontWeight);
        i && (this._currentFont = i), this._canvasContext.font = e, this._contextFont = e;
      }
    },
    textBaseline: {
      get: function () {
        return this._canvasContext.textBaseline;
      },
      set: function (e) {
        this._canvasContext.textBaseline = e;
      }
    },
    textAlign: {
      get: function () {
        return this._canvasContext.textAlign;
      },
      set: function (e) {
        this._canvasContext.textAlign = e;
      }
    },
    width: {
      get: function () {
        return this._canvasContext.width;
      },
      set: function (e) {
        this._canvasContext.width = e;
      }
    },
    height: {
      get: function () {
        return this._canvasContext.height;
      },
      set: function (e) {
        this._canvasContext.height = e;
      }
    },
    textUnderline: {
      get: function () {
        return this._textUnderline;
      },
      set: function (e) {
        this._textUnderline = e;
      }
    },
    textStrikeout: {
      get: function () {
        return this._textStrikeout;
      },
      set: function (e) {
        this._textStrikeout = e;
      }
    },
    textTransformer: {
      get: function () {
        return this._textTransformer;
      },
      set: function (e) {
        this._textTransformer = e;
      }
    },
    textLigatures: {
      get: function () {
        return this._textLigatures;
      },
      set: function (e) {
        this._textLigatures = e;
      }
    },
    langScript: {
      get: function () {
        return this._langScript;
      },
      set: function (e) {
        this._langScript = e;
      }
    },
    textVariant: {
      get: function () {
        return this._textVariant;
      },
      set: function (e) {
        this._textVariant = e;
      }
    },
    textFractions: {
      get: function () {
        return this._textFractions;
      },
      set: function (e) {
        this._textFractions = e;
      }
    },
    textStylisticSet: {
      get: function () {
        return this._textStylisticSet;
      },
      set: function (e) {
        this._textStylisticSet = e;
      }
    },
    textLocalizedForm: {
      get: function () {
        return this._textLocalizedForm;
      },
      set: function (e) {
        this._textLocalizedForm = e;
      }
    }
  }), f.prototype.renderMode = function (e) {
    this._renderMode = e;
  }, f.prototype.save = function () {
    this._canvasContext.save();
  }, f.prototype.restore = function () {
    this._canvasContext.restore();
  }, f.prototype.fill = function () {
    this._canvasContext.fill();
  }, f.prototype.fillRect = function (e, t, i, n, r) {
    var o;
    r && (o = this._canvasContext.fillStyle, this._canvasContext.fillStyle = r), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.fillRect(e, t, i, n), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix()), r && (this._canvasContext.fillStyle = o);
  }, f.prototype.strokeRect = function (e, t, i, n) {
    this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.strokeRect(e, t, i, n), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix());
  }, f.prototype.getCurrentFont = function () {
    var e = this.font, t = r.parseFont(e), i = this._currentFont;
    return null === i && null == (i = this._getFont(t.fontFamily, t.fontStyle, t.fontWeight)) ? (this._currentFont = this._core._fontManager.getDefaultFont(), this._currentFont) : t.fontFamily !== i.getFamily() || t.fontWeight !== i.getWeight() || t.fontStyle !== i.getStyle() ? null === (i = this._getFont(t.fontFamily, t.fontStyle, t.fontWeight)) ? this._currentFont : (this._currentFont = i, i) : i;
  }, f.prototype._getFont = function (e, t, i) {
    var n = this._core._fontManager, r = n.getFont(e, t, i), o = r;
    return r || (r = n.getDefaultFont()), r && !r.isResolved() && (this._core.requireFont(r), o = null, (r = n.getDefaultFont()).isResolved() || this._core.requireFont(r)), o;
  }, f.prototype.clearVertices = function () {
    this._vstack = new l(), this._sstack = [];
  }, f.prototype.addVertices = function (e) {
    this._vstack.rewindVertices(0), e.appendVertices(this._vstack);
  }, f.prototype.addStyleVertices = function (e) {
    e && e instanceof Array && this._sstack && e.push.apply(e, this._sstack);
  }, f.prototype.drawMarker = function (e, t, i) {
    if (this._renderMode & s.RENDERFLAG_VERTEX) {
      var n = null;
      if (!(this._renderMode & s.RENDERFLAG_NODRAW) && this._renderMode & f.FLAGS_DRAWING && this._canvasContext.beginPath(), e = new h(e, new p(1, 0, 0, 1, t, i)), this._textTransformer) {
        var r = A.calculateBounds(e, true);
        e = this._textTransformer.transform(e, t, i, r);
      }
      if (this._renderMode & f.FLAGS_DRAWING ? this._putVertices(e, true) : this._renderMode & s.RENDERFLAG_RENDERSTYLES ? (n || (n = new l()), n.appendVertices(e)) : this._vstack.appendVertices(e), this._renderMode & s.RENDERFLAG_NODRAW)
        return;
      this._renderMode & s.RENDERFLAG_FILL && (this._canvasContext.fillStyle = this.fillStyle, this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.fill(this._renderMode & s.RENDERFLAG_EVENODDFILL ? "evenodd" : "nonzero"), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix())), this._renderMode & s.RENDERFLAG_STROKE && (this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.stroke(), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix()), this._renderMode & s.RENDERFLAG_INSIDEBRD ? this.fillVertices("#000", 1, a.CompositeOperator.DestinationIn) : this._renderMode & s.RENDERFLAG_OUTSIDEBRD && this.fillVertices("#000", 1, a.CompositeOperator.DestinationOut)), this._renderMode & s.RENDERFLAG_RENDERSTYLES && (n && n.rewindVertices(0), this._sstack.push({
        fill: this.fillStyle,
        stroke: this.strokeStyle,
        textFill: this._textFillStyle,
        textStroke: this._textStrokeStyle,
        transform: this._transform,
        fillTransform: this._fillTransform,
        alpha: this.globalAlpha,
        op: this.globalCompositeOperation,
        vertices: n
      }));
    }
  }, f.prototype.drawText = function (e, t, i, n, o) {
    if (this._renderMode & s.RENDERFLAG_VERTEX) {
      var h = this.getCurrentFont();
      if (!h)
        return;
      var A, p = null, u = r.parseFont(this.font).fontSize;
      !(this._renderMode & s.RENDERFLAG_NODRAW) && this._renderMode & f.FLAGS_DRAWING && this._canvasContext.beginPath();
      var d = {
        letterSpacing: this.charSpacing,
        kerning: true,
        direction: "ltr",
        features: {
          stylisticSet: this.textStylisticSet,
          liga: this.textLigatures,
          rlig: this.textLigatures,
          frac: this.textFractions
        }
      };
      this.textLocalizedForm && (d.language = this.textLocalizedForm), this.langScript && "auto" !== this.langScript && (d.script = this.langScript), this.textVariant && (d.variant = this.textVariant);
      for (var m = 0, y = {}, _ = h.stringToGlyphs(e, t, i, u, d), v = _.length - 1, b = 0; b < v; b++) {
        var C = _[b], w = (C.glyph.unicode || e.charCodeAt(b)) === c.NBSP.charCodeAt(0) ? null : h.getGlyphOutline(u, C.x, C.y, C.glyph);
        if (this._textTransformer && w) {
          if (undefined === A) {
            var E = this._textTransformer.get(g.TYPE);
            A = !(!E || E.getDirection() !== g.RTL);
          }
          var B = C.bounds || h.getGlyphBoundingRect(u, C.glyph, true);
          y.next = _[b + 1].x - C.x, y.prev = b > 0 ? C.x - _[b - 1].x : C.x - t, y.unicode = C.glyph.unicode, y.xoff = C.xOff, w = this._textTransformer.transform(w, C.x, C.y, B, y);
        }
        this._renderMode & f.FLAGS_DRAWING ? w && (m += this._putVertices(w)) : this._renderMode & s.RENDERFLAG_RENDERSTYLES ? (p || (p = new l()), w && p.appendVertices(w)) : w && this._vstack.appendVertices(w);
      }
      if (this.textUnderline || this.textStrikeout) {
        w = new l();
        var x = h.getStrikeoutWidth(u);
        if (this.textUnderline && (w = this._makeRect(t, x + i, o, x, A)), this.textStrikeout) {
          var P = h.getStrikeoutPosition(i, n, x, u);
          w.appendVertices(this._makeRect(t, P, o, x, A));
        }
        this._renderMode & f.FLAGS_DRAWING ? m += this._putVertices(w) : this._renderMode & s.RENDERFLAG_RENDERSTYLES ? (p || (p = new l()), p.appendVertices(w)) : this._vstack.appendVertices(w);
      }
      if (this._renderMode & f.FLAGS_DRAWING && !m)
        return;
      if (this._renderMode & s.RENDERFLAG_NODRAW)
        return;
      var S = _[b - 1].text || e.charAt(b - 1) || null;
      if (S && this._renderMode & s.RENDERFLAG_FILL) {
        if (this._textFillStyle) {
          var T = this._textFillStyle, I = h.getGlyphBoundingRect(u, S), F = a.prototype.createPatternPaint.call(this, T, I);
          this._canvasContext.fillStyle = a.prototype._convertStyle.call(this, F.paint);
        }
        this._canvasContext.fillStyle = this.fillStyle, this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.fill(this._renderMode & s.RENDERFLAG_EVENODDFILL ? "evenodd" : "nonzero"), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix());
      }
      if (S && this._renderMode & s.RENDERFLAG_STROKE) {
        if (this._textStrokeStyle) {
          T = this._textStrokeStyle, I = h.getGlyphBoundingRect(u, S);
          var R = a.prototype.createPatternPaint.call(this, T, I);
          this._canvasContext.strokeStyle = a.prototype._convertStyle.call(this, R.paint);
        }
        this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.stroke(), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix()), this._renderMode & s.RENDERFLAG_INSIDEBRD ? this.fillVertices("#000", 1, a.CompositeOperator.DestinationIn) : this._renderMode & s.RENDERFLAG_OUTSIDEBRD && this.fillVertices("#000", 1, a.CompositeOperator.DestinationOut);
      }
      this._renderMode & s.RENDERFLAG_RENDERSTYLES && (p && p.rewindVertices(0), this._sstack.push({
        fill: this.fillStyle,
        stroke: this._canvasContext.strokeStyle,
        textFill: this._textFillStyle,
        textStroke: this._textStrokeStyle,
        transform: this._transform,
        fillTransform: this._fillTransform,
        alpha: this.globalAlpha,
        op: this.globalCompositeOperation,
        vertices: p
      }));
    } else if (this._renderMode & s.RENDERFLAG_RENDERSTYLES && this._sstack.push({
        fill: this.fillStyle,
        stroke: this._canvasContext.strokeStyle,
        alpha: this.globalAlpha,
        op: this.globalCompositeOperation,
        transform: this._transform,
        fillTransform: this._fillTransform
      }), this._renderMode & s.RENDERFLAG_STROKE) {
      if (this._canvasContext.strokeText(e, t, i), this.textUnderline && this._canvasContext.strokeRect(t, 1 + i, o, 1), this.textStrikeout && this._canvasContext.strokeRect(t, 1 + i - n / 2, o, 1), this._renderMode & (s.RENDERFLAG_INSIDEBRD | s.RENDERFLAG_INSIDEBRD)) {
        var D = this.globalCompositeOperation, k = this.globalAlpha, G = this._canvasContext.fillStyle;
        this.globalAlpha = 1, this._canvasContext.fillStyle = "#000", this._renderMode & s.RENDERFLAG_INSIDEBRD ? this.globalCompositeOperation = a.CompositeOperator.DestinationIn : this._renderMode & s.RENDERFLAG_OUTSIDEBRD && (this.globalCompositeOperation = a.CompositeOperator.DestinationOut), this._canvasContext.fillText(e, t, i), this.textUnderline && this._canvasContext.fillRect(t, 1 + i, o, 1), this.textStrikeout && this._canvasContext.fillRect(t, 1 + i - n / 2, o, 1), this.globalCompositeOperation = D, this.globalAlpha = k, this._canvasContext.fillStyle = G;
      }
    } else
      this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.fillStyle = this.fillStyle, this._canvasContext.fillText(e, t, i), this.textUnderline && this._canvasContext.fillRect(t, 1 + i, o, 1), this.textStrikeout && this._canvasContext.fillRect(t, 1 + i - n / 2, o, 1), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix());
  }, f.prototype._putVertices = function (e, t) {
    var i = 0;
    if (e.rewindVertices(0))
      for (var r = new n(); e.readVertex(r);)
        switch (r.command) {
        case n.Command.Move:
          this._canvasContext.moveTo(r.x, r.y);
          break;
        case n.Command.Line:
          this._canvasContext.lineTo(r.x, r.y), i++;
          break;
        case n.Command.Curve:
          var o = r.x, a = r.y;
          e.readVertex(r) && this._canvasContext.quadraticCurveTo(r.x, r.y, o, a), i++;
          break;
        case n.Command.Curve2:
          o = r.x, a = r.y;
          if (e.readVertex(r)) {
            var s = r.x, l = r.y;
            e.readVertex(r) && this._canvasContext.bezierCurveTo(s, l, r.x, r.y, o, a);
          }
          i++;
          break;
        case n.Command.Close:
          this._canvasContext.closePath(!t);
          break;
        default:
          throw new Error("Unknown Command Type - " + r.command);
        }
    return i;
  }, f.prototype._makeRect = function (e, t, i, r, o) {
    var a = new l();
    return o ? (a.addVertex(n.Command.Move, e, t), a.addVertex(n.Command.Line, e, t + r), a.addVertex(n.Command.Line, e + i, t + r), a.addVertex(n.Command.Line, e + i, t)) : (a.addVertex(n.Command.Move, e, t), a.addVertex(n.Command.Line, e + i, t), a.addVertex(n.Command.Line, e + i, t + r), a.addVertex(n.Command.Line, e, t + r)), a.addVertex(n.Command.Close), a;
  }, f.prototype.fillVertices = function (e, t, i) {
    var n = this.fillStyle, r = this.globalAlpha, o = this.globalCompositeOperation;
    this._canvasContext.fillStyle = e || n, this.globalAlpha = t || r, this.globalCompositeOperation = i || o, this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.fill(), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix()), this._canvasContext.fillStyle = n, this.globalCompositeOperation = o, this.globalAlpha = r;
  }, f.prototype.strokeVertices = function (e, t, i) {
    var n = this.fillStyle, r = this.globalAlpha, o = this.globalCompositeOperation;
    this._canvasContext.fillStyle = e || n, this.globalAlpha = t || r, this.globalCompositeOperation = i || o, this._canvasContext.setTransform.apply(this._canvasContext, this._transform.preMultiplied(this._fillTransform).getMatrix()), this._canvasContext.stroke(), this._canvasContext.setTransform.apply(this._canvasContext, this._transform.getMatrix()), this._canvasContext.fillStyle = n, this.globalCompositeOperation = o, this.globalAlpha = r;
  }, f.prototype.setScale = function (e, t) {
    var i = this._transform.getMatrix();
    i[0] = e, i[3] = t, this._canvasContext.setTransform.apply(this._canvasContext, i), this._transform = new p(i[0], i[1], i[2], i[3], i[4], i[5]);
  }, f.prototype.scale = function (e, t) {
    var i = this._transform.multiplied(new p(e, 0, 0, t, 0, 0));
    this._canvasContext.setTransform.apply(this._canvasContext, i.getMatrix()), this._transform = i;
  }, f.prototype.translate = function (e, t) {
    var i = this._transform.multiplied(new p(1, 0, 0, 1, e, t));
    this._canvasContext.setTransform.apply(this._canvasContext, i.getMatrix()), this._transform = i;
  }, f.prototype.setTranslate = function (e, t) {
    var i = this._transform.getMatrix();
    i[4] = e, i[5] = t, this._canvasContext.setTransform.apply(this._canvasContext, i), this._transform = new p(i[0], i[1], i[2], i[3], i[4], i[5]);
  }, f.prototype.setFillTransform = function (e) {
    this._fillTransform = p.deserialize(p.serialize(e));
  }, f.prototype.appendFillTransform = function (e) {
    this._fillTransform = this._fillTransform.multiplied(e);
  }, f.prototype.prependFillTransform = function (e) {
    this._fillTransform = this._fillTransform.preMultiplied(e);
  }, f.prototype.getFillTransform = function () {
    return this._fillTransform;
  }, f.prototype.getTransform = function () {
    return this._transform;
  }, f.prototype.clearRect = function (e, t, i, n) {
    this._canvasContext.clearRect(e, t, i, n);
  }, exports.exports = f;
}
