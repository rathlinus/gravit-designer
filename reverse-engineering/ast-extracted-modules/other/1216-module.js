/**
 * Module 1216
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
  var n = i(147), r = i(188), o = i(1407), a = i(11), s = i(602), l = i(265), h = i(5), A = i(564), c = i(799), p = i(14), u = i(1408), d = i(1219), g = i(1409), f = i(1413), m = i(28), y = (i(60), i(1414)), _ = i(158), v = i(293), b = i(853), C = i(1147), w = i(854), E = i(73), B = (i(70), i(1221)), x = i(1222), P = i(6), S = i(162), T = i(7), I = i(359), F = i(1220), R = i(391), D = i(1225), k = i(855), G = i(1224), Q = i(440), M = i(182), N = i(1229), U = i(856), V = i(1421), O = i(849), L = i(1112), Y = i(95), X = i(1113), H = i(1230), W = i(798);
  function Z(e, t) {
    this._doc = e, this._graphics = t || e.createGraphics(), this._saveRestoreStack = [], this._pageSize = this._doc.getPageSize(), this._pageOrigin = this._doc.getPageOrigin(), this._resources = e.getCurrentResources();
  }
  Z.prototype._resources = null, Z.prototype._pageSize = null, Z.prototype._pageOrigin = null, Z.prototype._bitmapCache = null, Z.prototype.createGraphics = function () {
    return new v(this._doc);
  }, Z.prototype.setPageOrigin = function (e) {
    this._pageOrigin = e || new h(0, 0);
  }, Z.prototype._makeFillStyle = function () {
    if (this.canvas.getCurrentNode() instanceof S && this.canvas._paintContext._borderPaintLayer) {
      var e;
      do {
        if ((e = this._graphics.peek().getValue()) instanceof C)
          break;
        this._graphics.pop();
      } while (e);
      var t = this.fillStyle;
      this.fillStyle = this.canvas._paintContext._borderPaintLayer.$_pt;
      try {
        this.fill();
      } finally {
        this.fillStyle = t;
      }
    }
  }, Z.prototype.pop = function () {
    return this._graphics.pop();
  }, Z.prototype.peek = function () {
    return this._graphics.peek();
  }, Z.prototype.getGraphics = function () {
    return this._graphics;
  }, Z.prototype.getDocument = function () {
    return this._doc;
  }, Z.prototype.getParent = function () {
    return this.canvas._parent ? this.canvas._parent._canvasContext : null;
  }, Z.prototype.setClip = function (e) {
    this._graphics.setClip(e);
  }, Z.prototype._pushStyles = function (e) {
    e.push({
      fillStyle: this.fillStyle,
      strokeStyle: this.strokeStyle,
      lineWidth: this.lineWidth
    });
  }, Z.prototype._popStyles = function (e) {
    var t = e.pop();
    this.fillStyle = t.fillStyle, this.strokeStyle = t.strokeStyle, this.lineWidth = t.lineWidth;
  }, Z.prototype.accept = function (e) {
    e(this) || this.canvas._children && a.each(this.canvas._children, function (t, i) {
      i._canvasContext.accept(e);
    });
  }, Z.prototype.drawImage = function (e, t, i, n, r, o, a, s, l) {
    var h = this.canvas.getCurrentNode();
    if (h instanceof Y) {
      var A = h.getType() && h.getType() === Y.Type.JPEG, c = h.getImageCanvas(), p = c.width, u = c.height;
      o = o || t || 0, a = a || i || 0, s = s || n || e.width, l = l || r || e.height, n = n || e.width, r = r || e.height;
      var d = h.getImageTransform() || new T();
      if (this._doc.isDownsamplingImages()) {
        var g = W.getMaximumCanvasSize(), f = this._transform.mapRect(new P(0, 0, s, l));
        if (!f.isEmpty() && f.getWidth() < g.width && f.getHeight() < g.height && f.getWidth() * f.getHeight() < g.area) {
          var m = h.getProperty("iw"), y = h.getProperty("ih");
          if (m && y && f.getWidth() < m && f.getHeight() < y) {
            var _ = Math.min(f.getWidth() / c.width, f.getHeight() / c.height), b = document.createElement("canvas");
            b.width = Math.ceil(c.width * _), b.height = Math.ceil(c.height * _), b.getContext("2d").drawImage(c, 0, 0, c.width, c.height, 0, 0, c.width * _, c.height * _), c = b;
          }
        }
      }
      var C = this._createImageResource(c, A);
      (this._hasBlendMode() || 1 != this.globalAlpha) && this._graphics.setGStateResource(this._createGStateResource(this.globalAlpha, v.OPERATIONFLAG_FILL, this.globalCompositeOperation));
      var w = new v(this._doc);
      w.add(new Q(new T(p, 0, 0, u, 0, -u))), w.add("/" + C.getName() + " Do"), this._graphics.add(new Q(this._doc.convertToPDFCoordinates(d))), this._graphics.add(w);
    }
  }, Z.prototype.replaceWithBitmap = function (e, t, i, n, r) {
    var o;
    if (this._bitmapCache && this._bitmapCache.some(function (t) {
        return t.bitmap === e && (o = t.resource, !0);
      }), !o) {
      var a = !0;
      t instanceof Y && (a = t.isJPEG()), o = this._createImageResource(e, a), this._bitmapCache = this._bitmapCache || [], this._bitmapCache.push({
        bitmap: e,
        resource: o
      });
    }
    var s = (i = i || t.getPaintBBox()).getX(), l = i.getY(), h = new P(s, l, e.width, e.height), A = 1 / this.canvas.getScale();
    h = (h = h.scaled(A, A)).translated(-h.getX(), -h.getY()).translated(s, l);
    var c = new T(h.getWidth(), 0, 0, h.getHeight(), h.getX(), this._y(h.getY()) - h.getHeight()), p = new d(t, d.Type.BEGIN), u = new d(t, d.Type.END);
    this.accept(function (e) {
      e._graphics.accept(function (i, a) {
        if (i.equals(p)) {
          var s = new v(this._doc);
          n && s.add(new w(new H(n.getX(), this._y(n.getY()) - n.getHeight(), n.getWidth(), n.getHeight()))), s.add(new Q(c)), s.add("/" + o.getName() + " Do"), e._graphics.add(s, a++);
          var l = e._graphics.get(a + 1);
          if (l && l.getValue() instanceof v)
            (d = l.getValue().getGSStateResource()) && s.setGStateResource(d);
          if (r && !s.getGSStateResource() && t.hasMixin(m)) {
            var h = t.getProperty("_sbl"), A = t.getProperty("_stop");
            if (this._hasBlendMode(h) || 1 != A) {
              var d = this._createGStateResource(A, v.OPERATIONFLAG_FILL, h);
              s.setGStateResource(d);
            }
          }
          do {
            var g = e._graphics.get(a);
            if (g && (e._graphics.remove(a), g.equals(u)))
              break;
          } while (g);
          return !1;
        }
      }.bind(this));
    }.bind(this));
  }, Z.prototype.createPNGImageResource = function (e, t) {
    return this._createImageResource(e, !1, t);
  }, Z.prototype._createImageResource = function (e, t, i) {
    var n = this._doc.getColorSpace();
    if (n != I.CMYK && n != I.RGB)
      throw new Error("Unsupported color space");
    t && n === I.RGB && (n = I.RGBA);
    var r = e.getContext("2d").getImageData(0, 0, e.width, e.height).data, o = new u(e.width, e.height, I.GRAY);
    o.putDictionary("/Interpolate", !0);
    var a = this._doc.getIndirectObject(new u(e.width, e.height, n));
    a.getPDFObject().putDictionary("/Interpolate", !0);
    var s = function () {
        return this._doc.hasConcurrencyFeature() && e.width > 100 && e.height > 100;
      }.bind(this), l = this._resources || this._doc.getCurrentResources(), h = function (e, i) {
        if (i) {
          var r = this._doc.getIndirectObject(o);
          o.setFilter(new U(i)), a.getPDFObject().setMask(new R(r)), this._doc.addIndirectObject(r), l.add(c.Group.Types.XOBJECT, new R(r));
        }
        if (s())
          if (t) {
            var h = this._doc.beginJob("Encode JPEG"), A = n === I.CMYK ? O.ColorSpace.CMYK : O.ColorSpace.RGBA;
            new O().concurrenyEncode(this._doc, this._doc.getWorkers(), e.buffer, a.getPDFObject().getWidth(), a.getPDFObject().getHeight(), A, this._doc.getJPEGQuality()).then(function (e) {
              var t = new V();
              t.setBuffer(new Uint8Array(e)), a.getPDFObject().setFilter(t), h.done();
            }.bind(this)).catch(function (e) {
              h.failed(e);
            });
          } else {
            h = this._doc.beginJob("Encode ZIP");
            new L().concurrencyEncode(this._doc, this._doc.getWorkers(), e.buffer).then(function (e) {
              var t = new U();
              t.setBuffer(new Uint8Array(e)), a.getPDFObject().setFilter(t), h.done();
            }.bind(this)).catch(function (e) {
              h.failed(e);
            });
          }
        else {
          var p;
          if (t) {
            A = n === I.CMYK ? O.ColorSpace.CMYK : O.ColorSpace.RGBA;
            p = new V(a.getPDFObject().getWidth(), a.getPDFObject().getHeight(), new Uint32Array(e.buffer), A, this._doc.getJPEGQuality());
          } else
            p = new U(e);
          a.getPDFObject().setFilter(p);
        }
      }.bind(this);
    if (s()) {
      var A = function (t) {
        var i = this._doc.beginJob("Raster RGBA");
        new X().concurrencyRaster(this._doc, this._doc.getWorkers(), r.buffer, e.width, e.height, n, !!t).then(function (e) {
          h(e[0], t || e[1]), i.done();
        }.bind(this)).catch(function (e) {
          i.failed(e);
        }), r = null;
      }.bind(this);
      if (i) {
        var p = this._doc.beginJob("Raster mask");
        g = i.getContext("2d").getImageData(0, 0, i.width, i.height).data;
        new X().concurrencyRaster(this._doc, this._doc.getWorkers(), g.buffer, i.width, i.height, I.GRAY, !1).then(function (e) {
          A(e[0]), p.done();
        }.bind(this)).catch(function (e) {
          p.failed(e);
        });
      } else
        A();
    } else {
      var d;
      if (i) {
        d = new Uint8ClampedArray(i.width * i.height);
        var g = i.getContext("2d").getImageData(0, 0, i.width, i.height).data;
        new X().raster(g.buffer, I.GRAY, d);
      } else
        d = new Uint8ClampedArray(e.width * e.height);
      var f = new Uint8ClampedArray(e.width * e.height * n.length), m = new X().raster(r.buffer, n, f, i ? null : d);
      h(f, i || m ? d : null);
    }
    var y = l.add(c.Group.Types.XOBJECT, new R(a));
    return this._doc.addIndirectObject(a), y;
  }, Z.prototype.drawCanvas = function (e, t, i, n, r) {
    if (null != n && n < 1 || this._hasBlendMode(r)) {
      var o = this._createGStateResource(n, v.OPERATIONFLAG_FILL, r), a = new v(this._doc);
      a.add(e._canvasContext._graphics.clear());
      var s = new T().translated(this._pageOrigin.getX(), this._pageOrigin.getY()).inverted().getMatrix(), l = s[4], h = s[5], A = new M();
      A.push(l), A.push(-Math.abs(h)), A.push(Math.ceil(this._pageSize.width + Math.abs(l))), A.push(Math.ceil(this._pageSize.height + Math.abs(h)));
      var p = new y(a, A), u = this._doc.getIndirectObject(p), d = this._doc.addResource(c.Group.Types.XOBJECT, new R(u));
      this._doc.addIndirectObject(u), e._canvasContext._graphics.setGStateResource(o), e._canvasContext._graphics.add("/" + d.getName() + " Do");
    }
  }, Z.prototype._createStyleSMaskGStateResource = function (e, t) {
    if (e.getPattern() instanceof N) {
      var i = e.getPattern().getShading();
      if (i.hasTransparency()) {
        var n = i.getGradient(), r = 1 / this.canvas.getScale(), o = new s();
        return o.add(this._graphics.peek()), o.add(new k({
          transform: this.canvas.getTransform().scaled(r, r),
          doc: this._doc,
          color: n,
          colorSpace: I.GRAY
        })), t & v.OPERATIONFLAG_FILL && o.add(A.f), t & v.OPERATIONFLAG_STROKE && o.add(A.S), this.createSMaskGStateResource(o, t);
      }
    }
  }, Z.prototype.createSMaskGStateResource = function (e, t) {
    var i = new T().translated(this._pageOrigin.getX(), this._pageOrigin.getY()), n = new M([
        0,
        0
      ]);
    n.push(this._pageSize.width), n.push(this._pageSize.height);
    var r = new G({
        individual: !0,
        colorSpace: I.GRAY
      }), a = this._doc.getIndirectObject(new D(this._doc, e, r, n, i)), s = this._doc.getIndirectObject(new f({
        subType: f.SubType.LUMINOSITY,
        stream: new R(a)
      })), l = new g({
        type: c.Group.Types.GSTATE.name,
        smask: new R(s),
        opacity: this.globalAlpha,
        operation: t,
        origin: i,
        blendMode: this._hasBlendMode() ? this.globalCompositeOperation : null
      }), h = this._doc.getIndirectObject(l), A = this._doc.addResource(c.Group.Types.GSTATE, new R(h));
    return this._doc.addIndirectObject(h), this._doc.addIndirectObject(a), this._doc.addIndirectObject(s), new o(A);
  }, Z.prototype._createGStateResource = function (e, t, i) {
    var n = new g({
        opacity: e,
        operation: t,
        blendMode: this._hasBlendMode(i) ? i : null
      }), r = this._doc.getIndirectObject(n), a = this._doc.addResource(c.Group.Types.GSTATE, new R(r));
    return this._doc.addIndirectObject(r), new o(a);
  }, Z.prototype.createPattern = function () {
  }, Z.prototype.createLinearGradient = function (e, t, i, r) {
    var o = new n();
    return o._x0 = e, o._y0 = t, o._x1 = i, o._y1 = r, o.addColorStop = z, o;
  }, Z.prototype.createRadialGradient = function (e, t, i, n, r, o) {
    var a = new _(null, o, e, t, n, r, null);
    return a.addColorStop = z, a;
  }, Z.prototype.beginPath = function () {
    this._currentPath = new C(this._doc), this._graphics.add(this._currentPath);
  }, Z.prototype.closePath = function () {
    this._currentPath.close();
  }, Z.prototype.stroke = function () {
    if (this._hasStroke()) {
      var e = this.strokeStyle, t = this.canvas.getTransform(), i = this.canvas.getCurrentNode();
      if (i instanceof S && this.canvas._paintContext._borderPaintLayer) {
        var n = i.createShapePaint(this, this.canvas._paintContext._borderPaintLayer.$_pt, this.canvas._paintContext._patternBBox || i.getPatternBBox());
        n.transform && (i.$trf && (n.transform = n.transform.multiplied(i.$trf)), t = t.multiplied(n.transform)), e = n.paint;
      }
      var r = 1 / this.canvas.getScale(), o = new b({
          transform: t.scaled(r, r),
          doc: this._doc,
          color: e
        });
      if (o.isValid()) {
        var a = new v.Stroke();
        a.strokeStyle = o, a.lineWidth = this.lineWidth, a.miterlimit = this.miterLimit, this.dashArray && this.dashArray.length && (a.lineDash = new F(this.dashArray));
        var s = this._graphics;
        if (1 != this.globalAlpha || this._hasBlendMode(this.globalCompositeOperation)) {
          var l = this._createGStateResource(this.globalAlpha, v.OPERATIONFLAG_STROKE, this.globalCompositeOperation), h = new v(this._doc);
          h.setGStateResource(l), this._graphics.add(h), s = h;
        }
        if (this.lineCap) {
          var A = B.Style[this.lineCap.toUpperCase()];
          A && (a.lineCap = new B(A));
        }
        if (this.lineJoin) {
          var c = x.Style[this.lineJoin.toUpperCase()];
          c && (a.lineJoin = new x(c));
        }
        s.add(a);
      } else
        console.warn("Invalid stroke style");
    }
  }, Z.prototype.fill = function (e) {
    if (this._isBackgroundFill())
      this._graphics.peek().getValue() instanceof C && this._graphics.pop();
    else if (this._hasFill()) {
      var t = this.fillStyle;
      this._doc.getColorSpace() === I.CMYK && this.canvas._paintContext._fillPaintLayer && this.canvas._paintContext._fillPaintLayer.$_pt instanceof r && (t = this.canvas._paintContext._fillPaintLayer.$_pt);
      var i = 1 / this.canvas.getScale(), n = new k({
          transform: this.canvas.getTransform().scaled(i, i),
          doc: this._doc,
          color: t
        });
      if (n.isValid()) {
        var o = new v.Fill();
        o.fillStyle = n, o.rule = e;
        var a = this._graphics, s = this._createStyleSMaskGStateResource(n, v.OPERATIONFLAG_FILL);
        if (s && ((a = new v(this._doc)).setGStateResource(s), this._graphics.add(a)), (1 != this.globalAlpha || this._hasBlendMode()) && !s) {
          var l = this._createGStateResource(this.globalAlpha, v.OPERATIONFLAG_FILL, this.globalCompositeOperation);
          (a = new v(this._doc)).setGStateResource(l), this._graphics.add(a);
        }
        a.add(o);
      } else
        console.warn("Invalid fill style");
    }
  }, Z.prototype._hasFill = function () {
    return this._hasStyle(this.fillStyle);
  }, Z.prototype._hasStroke = function () {
    return this._hasStyle(this.strokeStyle);
  }, Z.prototype._hasStyle = function (e) {
    return this.globalAlpha && e && "transparent" !== e;
  }, Z.prototype._isBackgroundFill = function () {
    var e = this.canvas.getCurrentNode();
    if (e && e.hasMixin(m)) {
      var t = e.getPaintLayers();
      if (t)
        return !!t.getFillLayers(!0).filter(function (e) {
          return e.$_pt instanceof l;
        }).length;
    }
    return !1;
  }, Z.prototype.clearRect = function (e, t, i, n) {
  }, Z.prototype.quadraticCurveTo = function (e, t, i, n) {
    this._currentPath.quadraticCurveTo(e, t, i, n);
  }, Z.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    this._currentPath.bezierCurveTo(e, t, i, n, r, o);
  }, Z.prototype.lineTo = function (e, t) {
    this._currentPath.lineTo(e, t);
  }, Z.prototype.moveTo = function (e, t) {
    this._currentPath.moveTo(e, t);
  }, Z.prototype.fillRect = function (e, t, i, n) {
    if (this.globalCompositeOperation === p.CompositeOperator.SourceIn)
      this._graphics.peek().getValue() instanceof v.Fill && this._makeFillStyle();
    else if (this.globalCompositeOperation == p.CompositeOperator.SourceOver) {
      var r = new E(e, t, i, n);
      r.transform(this.canvas.getTransform(!0)), this.canvas.putVertices(r), this.fill();
    }
  }, Z.prototype.setLineDash = function (e) {
    this.dashArray = e;
  }, Z.prototype.setTransform = function (e, t, i, n, r, o) {
    this._transform = new T(e, t, i, n, r, o);
  }, Z.prototype.getTransform = function (e) {
    return this._transform;
  }, Z.prototype._y = function (e) {
    return this._pageSize.relativeY(e);
  }, Z.prototype._hasBlendMode = function (e) {
    var t;
    return a.each(Object.keys(p.BlendMode), function (i, n) {
      p.BlendMode[n] === (e || this.globalCompositeOperation) && (t = p.BlendMode[n]);
    }.bind(this)), !!t && t !== p.BlendMode.Normal;
  }, Z.prototype.save = function () {
    this._pushStyles(this._saveRestoreStack);
  }, Z.prototype.restore = function () {
    this._popStyles(this._saveRestoreStack);
  }, Z.prototype.finish = function () {
    this._doc.popGraphics(), delete this._bitmapCache;
  };
  var z = function (e, t) {
    this._stops2 || (this._stops2 = []), this._stops2.push({
      stop: e,
      color: t
    });
  };
  e.exports = Z;
}
