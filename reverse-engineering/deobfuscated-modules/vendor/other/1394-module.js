/**
 * Module 1394
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
  var n = require(147) /* GLinearGradient */, r = require(2) /* GNode */, o = require(11) /* GUtil */, a = require(5) /* GPoint */, s = require(87) /* GVertexSource */, l = require(14) /* GPaintCanvas */, h = require(179) /* GPathUtil */, A = require(1395) /* module */, c = require(195) /* module */, p = require(158) /* GRadialGradient */, u = require(108) /* GFont */, d = require(138) /* GGradient */, g = require(0) /* GObject */, f = require(17) /* GRGBColor */, m = require(367) /* module */, y = require(1203) /* module */, _ = require(73) /* GRectangle */, v = require(70) /* GText */, b = require(1396) /* module */, C = require(6) /* GRect */, w = require(54) /* GVertexContainer */, E = (require(63) /* GVertexTransformer */, require(7) /* GTransform */), B = require(122) /* GGroup */, x = require(161) /* GTLUtil */, P = require(416) /* module */, S = require(48) /* GVertex */, T = require(95) /* GImage */, I = require(1204) /* module */, F = require(188) /* GCMYKColor */, R = require(12) /* GMath */, D = require(1120) /* module */, k = require(28) /* GStylable */, G = require(139) /* GTexturePattern */, Q = require(50) /* GPattern */, M = require(345) /* GBitmap */, N = require(22) /* GElement */, U = 0, V = 1, O = 2, L = 3;
  function Y() {
    this._map = [];
  }
  function X() {
  }
  Y.prototype.get = function (e) {
    return this._map[e];
  }, Y.prototype.put = function (e, t) {
    this._map[e] = t;
  }, X.Properties = [
    "strokeStyle",
    "fillStyle",
    "globalAlpha",
    "lineWidth",
    "lineCap",
    "lineJoin",
    "miterLimit",
    "shadowOffsetX",
    "shadowOffsetY",
    "shadowBlur",
    "shadowColor",
    "globalCompositeOperation",
    "font",
    "textAlign",
    "textBaseline",
    "_transform",
    "_clipping",
    "_currentClip"
  ], X.prototype.save = function (e) {
    return o.each(X.Properties, function (t, i) {
      this[i] = e[i];
    }.bind(this)), this;
  }, X.prototype.restore = function (e) {
    return o.each(Object.keys(this), function (t, i) {
      e[i] = this[i];
    }.bind(this)), this;
  };
  var H = function (e, t, i) {
    if (this.canvas = t, this.canvas.context = this, this._stackState = [], this._root = e, this._clipping = e, this._dashArray = [], this._transform = new E(), this._path = null, this._fontManager = i, this._words = [], this._fontCache = new Y(), this._missingFonts = [], this._embeddedFonts = [], this._fontManager)
      try {
        new m().initialize(0, 0, this._fontManager);
      } catch (e) {
        console.log("WARN: Could not load GTLCore");
      }
  };
  function W(e) {
    var t = null;
    e instanceof s ? t = e : e instanceof E && (this._transform = e), this._vertices = new w(t);
  }
  function Z(e, t, i, n, r, o) {
    this._stops = e, this._x0 = t, this._y0 = i, this._x1 = n, this._y1 = r, this._matrix = o;
  }
  function z(e, t, i, n, r, o) {
    Z.call(this, e, t, i, n, r, o);
  }
  function j(e, t, i, n, r, o) {
    Z.call(this, e, t, i, n, r, o);
  }
  H.prototype.gfx = null, H.prototype.canvas = null, H.prototype._stackState = null, H.prototype._root = null, H.prototype._transform = null, H.prototype._clipping = null, H.prototype._path = null, H.prototype._dashArray = null, H.prototype._fontManager = null, H.prototype._words = null, H.prototype._fontCache = null, H.prototype._missingFonts = null, H.prototype._currentClip = null, H.prototype._embeddedFonts = null, H.prototype._bitmap = null, H.prototype.createContext = function (e) {
    var t = new H(new B(), e, this._fontManager);
    return t.gfx = this.gfx, t;
  }, H.prototype.createBitmap = function () {
    return new Promise(function (e) {
      if (this._root && this._root instanceof N) {
        var module = 0, require = function () {
            if (module <= 0) {
              var require = this.canvas.getHTMLElement(), n = this._root.toBitmap();
              n && require.getContext("2d").drawImage(n.getHTMLElement(), 0, 0), this._bitmap = new M(require), e();
            }
          }.bind(this), n = function (e) {
            return e.getStatus() === T.ImageStatus.Loaded || e.getStatus() === T.ImageStatus.Error;
          }, r = function (e) {
            n(e.image) && (module--, e.image.removeEventListener(T.StatusEvent, r), require());
          };
        this._root.accept(function (e) {
          e instanceof T && (n(e) || (module++, e.addEventListener(T.StatusEvent, r)));
        }), require();
      } else
        e();
    }.bind(this));
  }, H.prototype.getImageData = function () {
    var e = this._getBitmap().getHTMLElement().getContext("2d");
    return e.getImageData.apply(e, arguments);
  }, H.prototype.createImageData = function () {
    var e = this._getBitmap().getHTMLElement().getContext("2d");
    return e.createImageData.apply(e, arguments);
  }, H.prototype.putImageData = function () {
    var e = this._getBitmap().getHTMLElement().getContext("2d");
    e.putImageData.apply(e, arguments);
  }, H.prototype._getBitmap = function () {
    if (!this._bitmap) {
      var exports = this.canvas.getHTMLElement(), module = this._root.toBitmap();
      if (module) {
        var require = module.getHTMLElement();
        if (!(require.width > 0 && require.height > 0))
          return new M(exports);
        exports.getContext("2d").drawImage(require, 0, 0);
      }
      this._bitmap = new M(exports);
    }
    return this._bitmap;
  }, H.prototype.toImage = function (e) {
    var t = this._bitmap;
    if (e) {
      var require = this._bitmap.getHTMLElement(), n = document.createElement("canvas");
      n.width = require.width, n.height = require.height;
      var r = n.getContext("2d");
      r.setTransform(1, 0, 0, -1, 0, 0), r.drawImage(require, 0, -n.height), t = new M(n);
    }
    return t.trim(), t.toImageDataUrl(M.ImageType.PNG);
  }, H.prototype.createPattern = function (e, t) {
    if (e instanceof D) {
      if (e.context._bitmap) {
        var require = e.context.toImage(true);
        if (require) {
          var n = new G(require, t);
          return t === G.RepeatMode.None && G.ScaleSettings.fit(n), n;
        }
      }
      return new G(e.context._root, t);
    }
    return null;
  }, H.prototype.isSingleVertexSource = function () {
    return 1 === this._root.getChildren().length;
  }, H.prototype.applyLayer = function (e) {
    if (this.isSingleVertexSource() && e.isSingleVertexSource()) {
      var module = this._root.getFirstChild(), require = e._root.getFirstChild();
      if (new W(module).equals(new W(require))) {
        var n = module.getPaintLayers(), r = require.getPaintLayers();
        if (n && r) {
          var a = n.getFillLayers(true)[0], s = r.getFillLayers(true)[0];
          if (a && s && a.constructor === s.constructor && a instanceof d) {
            var l = s.getStops(), h = a.getStops();
            if (h.length === l.length)
              return o.each(l, function (e, t) {
                var i = h[e].color.getValue()[0] / 255;
                t.opacity = i, h[e] = t;
              }), true;
          }
        }
      }
    }
    return false;
  }, H.prototype.getMissingFonts = function () {
    return this._missingFonts;
  }, H.prototype.getEmbeddedFonts = function () {
    return this._embeddedFonts;
  }, H.prototype.updateTransform = function (e) {
    this._transform = e, this._path && this._path.updateTransform(e);
  }, H.prototype.setTransform = function (e, t, i, n, r, o) {
    this.updateTransform(new E(e, t, i, n, r, o));
  }, H.prototype.transform = function (e, t, i, n, r, o) {
    this.updateTransform(this._transform.preMultiplied(new E(e, t, i, n, r, o)));
  }, H.prototype.translate = function (e, t) {
    this.updateTransform(this._transform.preMultiplied(new E().translated(e, t)));
  }, H.prototype.scale = function (e, t) {
    this.updateTransform(this._transform.preMultiplied(new E().scaled(e, t)));
  }, H.prototype.rotate = function (e) {
    this.updateTransform(this._transform.rotated(e));
  }, H.prototype.createLinearGradient = function (e, t, i, n, r) {
    return new z([], e, t, i, n, r);
  }, H.prototype.createRadialGradient = function (e, t, i, n, r, o, a) {
    return new j([], e, t, n, r, a);
  }, H.prototype.clip = function () {
    if (this._consumePath()) {
      var exports = this._clipping.getLastChild(), module = exports.getPrevious(), require = exports;
      module && H.VertexSource.equals(exports, module) && (this._clipping.removeChild(exports), require = module), this._clipping = require, this._currentClip = require;
    }
  }, H.prototype.rect = function (e, t, i, n) {
    this._getCurrentPath().rect(e, t, i, n);
  }, H.prototype.measureText = function (e) {
    return { width: new P(e, "font:" + this._getFont()).width || 0 };
  }, H.prototype._getFont = function () {
    var e = this._getCurrentFont().otf, t = [];
    return t.push(e.getStyle() === u.Style.Normal ? "normal" : "italic"), t.push(e.getWeight()), t.push(this.gfx.current.fontSize / this.gfx.current.fontSizeScale + "px"), t.push(e.getFamily()), t.join(" ");
  }, H.prototype.strokeText = function (e, t, i, n) {
    if (this._isDisplayedCharacter(e))
      if ((this.gfx.current.textRenderingMode & L) === O) {
        var r = this._getPattern(this.strokeStyle || "rgb(0,0,0)"), o = this._words.slice(-1).pop();
        o.borderColor = r, o.borderWidth = this.lineWidth;
      } else
        this._putChar(e, t, i, n, V);
  }, H.prototype.fillText = function (e, t, i, n) {
    this._putChar(e, t, i, n, U);
  }, H.prototype._putChar = function (e, t, i, n, r) {
    if (this._isDisplayedCharacter(e)) {
      var a, s = this.gfx.current.fontSize / this.gfx.current.fontSizeScale;
      a = this.gfx.current.font.ascent ? this.gfx.current.font.ascent * s : s;
      var l = 0;
      this.gfx.current.font.ascent && (l = this.gfx.current.font.descent * s);
      var h = 0;
      if (this.gfx.current.font.fontMatrix) {
        for (var A, c, p = this.gfx.current.font.fontMatrix[0] * s, d = 0; d < " -1iI".length && !h; d++)
          c = this.gfx.current.font.toFontChar[" -1iI".charCodeAt(d)], h = (A = this.gfx.current.font.widths[c]) ? A * p + this.gfx.current.charSpacing * this.gfx.current.fontDirection : this.measureText(" -1iI".charAt(d)).width;
        if (!h) {
          console.warn("space width not found, using mean length");
          var g = (this.gfx.current.font.widths || [0]).map(function (e) {
            return 0 | e;
          }).sort(function (e, t) {
            return e - t;
          });
          h = (A = g[Math.floor(g.length / 2)]) * p + this.gfx.current.charSpacing * this.gfx.current.fontDirection;
        }
      }
      var f = o.extend({}, x.parseFont(this._getFont()));
      f.text = x.deCRLFify(e), f.ascent = a, f.descent = l, f.width = n || this.measureText(e).width, f.fontName = this.gfx.current.font.name, f.fontSizeScale = this.gfx.current.fontSizeScale, f.wordSpacing = this.gfx.current.wordSpacing, f.charSpacing = this.gfx.current.charSpacing, f.x = t, f.y = i, f.transform = this._transform, f.spaceWidth = h, Math.round(100000 * this._transform.getScaleFactor()) / 100000 !== f.fontSizeScale && (f.width *= 1 / f.fontSizeScale), f.startPoint = this._transform.preMultiplied(new E().translated(t, i)).getTranslation(), f.endPoint = this._transform.preMultiplied(new E().translated(t + f.width, i)).getTranslation();
      var m = this._getCurrentFont();
      f.fontFamily = m.otf.getFamily(), f.fontStyle = m.otf.getStyle() === u.Style.Normal ? "normal" : "italic", f.fontWeight = m.otf.getWeight(), r === U ? f.fontColor = this._getPattern(this.fillStyle || "rgb(0,0,0)") : (delete f.fontColor, f.borderColor = this._getPattern(this.strokeStyle || "rgb(0,0,0)"), f.borderWidth = this.lineWidth);
      var y = this._words.slice(-1).pop();
      y && o.equals(y.startPoint, f.startPoint) && this._words.pop(), this._words.push(f);
    }
  }, H.prototype._isDisplayedCharacter = function (e) {
    if (this._getCurrentFont().supported && 1 === e.length && (255 & e.charCodeAt(0)) <= 31)
      return false;
    return true;
  }, H.prototype.beginText = function () {
    this._consumePath();
  }, H.prototype.endText = function () {
    var e = new b();
    o.each(e.createTexts(this._words), function (t, i) {
      var n = i.toGText();
      if (n) {
        var r = this._clipping.getLastChild();
        if (r instanceof v && e.mergeTexts(r, n))
          return;
        this._clipping.appendChild(n);
      }
    }.bind(this));
  }, H.prototype.drawImage = function (e, t, i, n, r, o, a, s, l) {
    e instanceof HTMLImageElement && ((h = document.createElement("canvas")).width = s, h.height = l, h.getContext("2d").drawImage(e, 0, 0, s, l), e = h);
    if (e instanceof HTMLCanvasElement) {
      var h, A = this._transform.preMultiplied(new E().scaled(n / s, r / l)).preMultiplied(new E().translated(o, a)), c = 100000000 / (e.width * e.height);
      if (c < 1)
        c = Math.sqrt(c), (h = document.createElement("canvas")).width = e.width * c, h.height = e.height * c, h.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, h.width, h.height), e = h, A = A.preMultiplied(new E().scaled(1 / c, 1 / c));
      if ((f = new T()).__imageCanvas__ = e, f.setTransform(A), f.setProperty("url", e.toDataURL()), (_ = this._getCurrentBlendMode()) && f.setProperty("_sbl", _), this._clipping === this._currentClip && 0 === this._clipping.getChildren().length) {
        var p = s || n, u = l || r, d = A.mapRect(new C(o || t, (a || i) + u, p, u));
        if (C.equals(d, this._clipping.getGeometryBBox())) {
          var g = this._clipping.getParent();
          g.removeChild(this._clipping), this._currentClip = null, this._clipping = g;
        }
      }
      this._clipping.appendChild(f);
    } else if (e instanceof D)
      if (e.context._bitmap) {
        var f, m = (d = e.context._root.getGeometryBBox()) ? E.getNativeRectTransformation(d).decomposed().translate : new E();
        A = this._transform.multiplied(m);
        (f = new T()).transform(A), f.setProperty("_bvs", false), f.setProperty("_fvs", false), f.setProperty("url", e.context.toImage()), this._clipping.appendChild(f);
      } else
        for (var y = e.context._root.getFirstChild(); y;) {
          var _;
          e.context._root.removeChild(y), y instanceof T && n && r && y.transform(new E().multiplied(new E().scaled(n / s, r / l)).multiplied(new E().translated(o, a))), (_ = this._getCurrentBlendMode()) && y.setProperty("_sbl", _), this.globalAlpha && y.setProperty("_stop", this.globalAlpha), y.transform(this._transform), this._clipping.appendChild(y), y = e.context._root.getFirstChild();
        }
    else
      console.log("WARN: Unsupported image: " + e);
  }, H.prototype.beginPath = function () {
    this._consumePath();
  }, H.prototype.setLineDash = function (e) {
    this._dashArray = e;
  }, H.prototype.getLineDash = function () {
    return this._dashArray;
  }, H.prototype.moveTo = function (e, t) {
    this._getCurrentPath().moveTo(e, t);
  }, H.prototype.lineTo = function (e, t) {
    this._getCurrentPath().lineTo(e, t);
  }, H.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    this._getCurrentPath().bezierCurveTo(e, t, i, n, r, o);
  }, H.prototype.quadraticCurveTo = function (e, t, i, n) {
    this._getCurrentPath().quadraticCurveTo(e, t, i, n);
  }, H.prototype.closePath = function () {
    this._getCurrentPath().closePath();
  }, H.prototype.stroke = function (e) {
    if (this._consumePath() || e) {
      var module = e || this._clipping.getLastChild();
      module.setProperty("_stop", this.globalAlpha || 1);
      var require = new k.BorderPaintLayer(), n = this._transform.getScaleFactor();
      require.setProperty("_bw", this.lineWidth * n), require.setProperty("_bds", this._dashArray.map(function (e) {
        return e * n;
      })), require.setProperty("_blc", this.lineCap), require.setProperty("_bl", this.globalCompositeOperation || "normal");
      var r = this.strokeStyle;
      this.lineWidth && (r = r || "rgb(0,0,0)");
      var o = this._getPattern(r);
      o instanceof Z && (o = o.createGPattern(this._transform, module.getGeometryBBox())), o instanceof Q && require.setProperty("_pt", o), module.getPaintLayers().appendChild(require);
    }
  }, H.prototype.fill = function (e, t) {
    if (this._consumePath() || t) {
      var require = t || this._clipping.getLastChild();
      require.setProperty("evenodd", "evenodd" === e), require.setProperty("_sfop", this.globalAlpha || 1);
      var n = this._getPattern(this.fillStyle);
      if (n instanceof Z && (n = n.createGPattern(this._transform, require.getGeometryBBox())), n instanceof Q && require.hasMixin(k)) {
        var r = require.getPaintLayers();
        r && r.appendChild(new k.FillPaintLayer(n));
      }
    }
  }, H.prototype.fillRect = function (e, t, i, n) {
    if (!this.globalCompositeOperation || this.globalCompositeOperation === l.CompositeOperator.SourceOver) {
      var r = this._transform.mapRect(new C(e, t, i, n));
      this._path = new _(), this._path.setBounds(r.getX(), r.getY(), r.getWidth(), r.getHeight()), this.fill();
    }
  }, H.prototype.clearRect = function () {
  }, H.prototype.save = function () {
    this._stackState.push(new X().save(this));
  }, H.prototype.restore = function () {
    this._stackState.pop().restore(this);
  }, H.prototype._getCurrentBlendMode = function () {
    var e;
    return this.globalCompositeOperation && o.each(Object.keys(l.BlendMode), function (t, i) {
      l.BlendMode[i] === this.globalCompositeOperation && (e = l.BlendMode[i]);
    }.bind(this)), e;
  }, H.prototype._getCurrentPath = function () {
    return this._path || (this._path = new W(this._transform)), this._path;
  }, H.prototype._consumePath = function () {
    var e, t = this._path;
    if ((this._path = null, t) && (e = t instanceof r ? t : t.toGPath()))
      return this._clipping.appendChild(e), true;
    return false;
  }, H.prototype._getPattern = function (e) {
    if ("string" == typeof e) {
      if (0 == e.indexOf("cmyk")) {
        var module = e.match(/\d+(\.\d+)?/g).map(function (e) {
          return e / 100;
        });
        return new F(module);
      }
      return f.fromCSSColor(e);
    }
    return e;
  }, H.prototype._getCurrentFont = function () {
    var e = this._fontCache.get(this.gfx.current.font.loadedName);
    if (!e) {
      var module, require = I.Font.getWeight(this.gfx.current.font.name), n = I.Font.getStyle(this.gfx.current.font.name);
      if ((e = this.gfx.current.font).data)
        try {
          var r = new A(null, null, null, e.data.buffer);
          if (r) {
            module = r._openTypeFont.names.fontFamily ? r._openTypeFont.names.fontFamily.en : r._openTypeFont.names.postScriptName.en, n = I.Font.getStyle(r._openTypeFont.names.fontSubfamily.en), require = I.Font.getWeight(r._openTypeFont.names.fontSubfamily.en);
            var a = y.contains(module);
            if (!a) {
              var s = r._openTypeFont.names.fullName.en.toLowerCase();
              o.each(I.Font.Weight, function (e, t) {
                t = t.toLowerCase(), -1 !== s.indexOf(t) && (s = s.replace(t, ""));
              }), s = s.trim(), (a = y.contains(s)) && (module = a, require = I.Font.getWeight(r._openTypeFont.names.fullName.en));
            }
            if (a)
              e.otf = this._fontManager.getFont(module, n, require), e.supported = true;
            else {
              var l = r._openTypeFont.names.postScriptName ? r._openTypeFont.names.postScriptName.en : r._openTypeFont.names.fullName.en;
              if (r._family = l, r._weight = require, r._style = n, e.otf = r, !r._openTypeFont.charToGlyphIndex(c.NBSP)) {
                var h = r._openTypeFont.charToGlyphIndex(" ");
                h && (r._openTypeFont.encoding.cmap.glyphIndexMap[c.NBSP.charCodeAt(0)] = h);
              }
              for (var p = this._fontManager.getFonts().filter(function (e) {
                    return 0 === e.getFamily().indexOf(r.getFamily()) && e.getStyle() === r.getStyle() && e.getWeight() === r.getWeight();
                  }), u = [].slice.call(new Uint8Array(r._buffer)), d = 0; d < p.length; d++) {
                var g = p[d], f = [].slice.call(new Uint8Array(g._buffer));
                if (o.equals(f, u)) {
                  r = null, e.otf = g;
                  break;
                }
                r._family = r._family + "_" + o.uuid(3), l = r._family;
              }
              r && (this._embeddedFonts.push(r), this._fontManager.getFonts().push(r)), this._missingFonts.push(l);
            }
          } else
            console.log("WARN: Unsupported font: " + this.gfx.current.font.name);
        } catch (e) {
          console.log("WARN: Could not load font: " + this.gfx.current.font.name);
        }
      else
        this._missingFonts.push(this.gfx.current.font.name);
      this._fontCache.put(this.gfx.current.font.loadedName, e);
    }
    return e.otf || (e.otf = this._fontManager.getFont("Open Sans", n, require), e.substituteFont = true), e;
  }, H.VertexSource = {
    equals: function (e, t) {
      return C.equals(e.getGeometryBBox(), t.getGeometryBBox());
    },
    readVertices: function (e) {
      var t = [];
      if (e.rewindVertices(0))
        for (var require = new S(); e.readVertex(require);)
          t.push(require);
      return t;
    }
  }, W.prototype._transform = null, W.prototype._vertices = null, W.prototype.equals = function (e) {
    return e instanceof W && o.equals(this._vertices, e._vertices, true);
  }, W.prototype.updateTransform = function (e) {
    this._transform = e;
  }, W.prototype.lineTo = function (e, t) {
    this._vertices.addVertex(S.Command.Line, e, t, this._transform);
  }, W.prototype.moveTo = function (e, t) {
    this._vertices.addVertex(S.Command.Move, e, t, this._transform);
  }, W.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    this._vertices.addVertex(S.Command.Curve2, r, o, this._transform), this._vertices.addVertex(S.Command.Curve2, e, t, this._transform), this._vertices.addVertex(S.Command.Curve2, i, n, this._transform);
  }, W.prototype.quadraticCurveTo = function (e, t, i, n) {
    this._vertices.addVertex(S.Command.Curve, i, n, this._transform), this._vertices.addVertex(S.Command.Curve, e, t, this._transform);
  }, W.prototype.closePath = function () {
    this._vertices.addVertex(S.Command.Close);
  }, W.prototype.rect = function (e, t, i, n) {
    this.moveTo(e, t), this.lineTo(e + i, t), this.lineTo(e + i, t + n), this.lineTo(e, t + n);
  }, W.prototype.toGPath = function () {
    if (this._vertices.getCount()) {
      var exports = h.createPathFromVertexSource(this._vertices);
      return exports;
    }
    return null;
  }, Z.prototype._x0 = null, Z.prototype._y0 = null, Z.prototype._x1 = null, Z.prototype._y1 = null, Z.prototype._stops = null, Z.prototype._matrix = null, Z.prototype.__pdfimportgradtype__ = null, Z.prototype.addColorStop = function (e, t) {
    this._stops.push({
      position: e,
      color: f.fromCSSColor(t),
      opacity: 1
    });
  }, Z.prototype.createGPattern = function (e, t) {
    var i = new a(this._x0, this._y0), r = new a(this._x1, this._y1);
    e && (i = e.mapPoint(i), r = e.mapPoint(r));
    var o, s = t && E.getNativeRectTransformation(t).inverted();
    if (!s)
      return this instanceof z ? new n(this._stops) : this instanceof j ? new p(this._stops) : null;
    if (i = s.mapPoint(i), r = s.mapPoint(r), this instanceof z) {
      var l = r.getX() - i.getX(), h = r.getY() - i.getY(), A = R.normalizeAngleRadians(-Math.atan2(h, l));
      A > Math.PI && (A -= R.PI2), A = -A;
      var c = (0 !== l ? l : h) / Math.cos(A);
      (c < Number.MIN_VALUE || c > Number.MAX_VALUE) && (c = 1), o = new n(this._stops, c, A, i.getX(), i.getY());
    } else
      this instanceof j && (o = new p(this._stops));
    return o;
  }, H.Gradient = Z, g.inherit(z, Z), g.inherit(j, Z), exports.exports = H;
}
