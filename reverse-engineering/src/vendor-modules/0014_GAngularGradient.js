/**
 * chunk.vendor.js Module #14
 * Type: class
 * Name: GAngularGradient
 */

function (e, t, i) {
      var n = i(147),
        r = i(68),
        o = i(0),
        a = i(17),
        s = i(138),
        l = i(345),
        h = i(112),
        A = i(5),
        c = i(48),
        p = i(6),
        u = i(7),
        d = i(158),
        g = i(139),
        f = i(12),
        m = i(103),
        y = i(111),
        _ = i(205),
        v = i(118);
      i(176);

      function b(e, t, n, r) {
        this._canvasContext = t
          ? document.createElement("canvas").getContext("2d")
          : m.getRenderer(e, void 0, void 0, n, r);
        var o = i(643);
        this._blender = new o(this);
      }
      (o.inheritAndMix(b, o, [v]),
        (b.LineCap = {
          Butt: "butt",
          Round: "round",
          Square: "square",
        }),
        (b.LineJoin = {
          Miter: "miter",
          Bevel: "bevel",
          Round: "round",
        }),
        (b.BlendMode = {
          Normal: "normal",
          Multiply: "multiply",
          Screen: "screen",
          Overlay: "overlay",
          Darken: "darken",
          Lighten: "lighten",
          ColorDodge: "color-dodge",
          ColorBurn: "color-burn",
          HardLight: "hard-light",
          SoftLight: "soft-light",
          Difference: "difference",
          Exclusion: "exclusion",
          Hue: "hue",
          Saturation: "saturation",
          Color: "color",
          Luminosity: "luminosity",
        }),
        (b.WebGLBlendMode = {
          LinearBurn: "linear_burn",
          LinearDodge: "linear_dodge",
          VividLight: "vivid_light",
          LinearLight: "linear_light",
          PinLight: "pin_light",
          Divide: "divide",
          Add: "add",
          Subtract: "subtract",
          HardMix: "hardmix",
          Power: "power",
          Harmonic: "harmonic",
          Sin: "sin",
        }),
        Object.assign(b.BlendMode, b.WebGLBlendMode),
        (b.CompositeOperator = {
          SourceOver: "source-over",
          SourceAtTop: "source-atop",
          SourceIn: "source-in",
          SourceOut: "source-out",
          DestinationOver: "destination-over",
          DestinationAtTop: "destination-atop",
          DestinationIn: "destination-in",
          DestinationOut: "destination-out",
          Copy: "copy",
          Xor: "xor",
          Lighter: "lighter",
          Darker: "darker",
        }),
        (b.FillRule = {
          NonZero: "nonzero",
          EvenOdd: "evenodd",
        }),
        (b.Filter = {
          Blur: "blur",
          Brightness: "brightness",
          Contrast: "contrast",
          DropShadow: "drop-shadow",
          GrayScale: "grayscale",
          HueRotate: "hue-rotate",
          Invert: "invert",
          Opacity: "opacity",
          Saturate: "saturate",
          Sepia: "sepia",
          SVG: "url",
        }),
        (b.RenderAlgorithm = {
          Pixelated: 0,
          Crisp: 1,
          Auto: 2,
        }),
        (b.SmoothingQuality = {
          Low: 0,
          Medium: 1,
          High: 2,
        }),
        (b.createChessboard = function (e, t, i) {
          var n = document.createElement("canvas");
          ((n.width = 2 * e), (n.height = 2 * e));
          var r = n.getContext("2d");
          return (
            (r.fillStyle = t),
            r.fillRect(0, 0, n.width, n.height),
            (r.fillStyle = i),
            r.fillRect(0, 0, e, e),
            r.fillRect(e, e, e, e),
            n
          );
        }));
      var C = -1,
        w = -1,
        E = 1,
        B = !1;
      ((b.hasFilters = function () {
        if (C < 0)
          if ("undefined" != typeof window) {
            var e = document.createElement("canvas").getContext("2d");
            C = "string" == typeof e.filter ? 1 : 0;
          } else C = 0;
        return C > 0;
      }),
        (b.disableFilters = function () {
          0 !== C && ((w = C), (C = 0));
        }),
        (b.enableFilters = function () {
          0 === C && (C = w);
        }),
        (b.getScreenDPI = function () {
          return (B || this._initScreenDPI(), E);
        }),
        (b._initScreenDPI = function () {
          if ("undefined" != typeof window && "undefined" != typeof document) {
            var e = document.createElement("canvas").getContext("2d") || {},
              t =
                e.webkitBackingStorePixelRatio ||
                e.mozBackingStorePixelRatio ||
                e.msBackingStorePixelRatio ||
                e.oBackingStorePixelRatio ||
                e.backingStorePixelRatio ||
                1;
            E = window.devicePixelRatio / t || 1;
          }
          B = !0;
        }),
        (b.prototype._canvasContext = null),
        (b.prototype._bitmap = null),
        (b.prototype._transform = null),
        (b.prototype._offset = null),
        (b.prototype._origin = null),
        (b.prototype._scale = null),
        (b.prototype._areas = null),
        (b.prototype._filters = null),
        (b.prototype._isMasked = 0),
        (b.prototype.getWidth = function () {
          return this._canvasContext.canvas.width;
        }),
        (b.prototype.getHeight = function () {
          return this._canvasContext.canvas.height;
        }),
        (b.prototype.getBitmap = function () {
          return (this._bitmap || (this._bitmap = new l(this)), this._bitmap);
        }),
        (b.prototype.resize = function (e, t) {
          (e == this._canvasContext.canvas.width &&
            t == this._canvasContext.canvas.height) ||
            ((this._canvasContext.canvas.width = e),
            (this._canvasContext.canvas.height = t));
        }),
        (b.prototype.getOffset = function () {
          return this._offset;
        }),
        (b.prototype.setOffset = function (e) {
          this._offset = e;
        }),
        (b.prototype.getOrigin = function () {
          return this._origin;
        }),
        (b.prototype.setOrigin = function (e) {
          A.equals(e, this._origin) ||
            ((this._origin = e), this._updateTransform());
        }),
        (b.prototype.getScale = function () {
          return this._scale;
        }),
        (b.prototype.setScale = function (e) {
          e !== this._scale && ((this._scale = e), this._updateTransform());
        }),
        (b.prototype.getTransform = function (e) {
          var t = this._transform;
          if (!e) {
            var i = this._origin.getX(),
              n = this._origin.getY(),
              r = this._scale;
            t = t.multiplied(new u().scaled(r, r).translated(-i, -n));
          }
          return t;
        }),
        (b.prototype.setTransform = function (e) {
          null == e && (e = new u());
          var t = this._transform;
          return ((this._transform = e), this._updateTransform(), t);
        }),
        (b.prototype.resetTransform = function () {
          return this.setTransform(null);
        }),
        (b.prototype.prepare = function (e, t) {
          if (
            (this._canvasContext.save(),
            (this._transform = new u()),
            (this._origin = new A(0, 0)),
            (this._scale = 1),
            (this._areas = e ? e.slice() : null),
            this._updateTransform(),
            e && e.length > 0)
          ) {
            this._canvasContext.beginPath();
            for (var i = 0; i < e.length; ++i) {
              var n = e[i],
                r = n.getX(),
                o = r + n.getWidth(),
                a = n.getY(),
                s = a + n.getHeight();
              ((r = Math.max(0, r)),
                (o = Math.min(this.getWidth(), o)),
                (a = Math.max(0, a)),
                (s = Math.min(this.getHeight(), s)),
                this._canvasContext.moveTo(r, a),
                this._canvasContext.lineTo(o, a),
                this._canvasContext.lineTo(o, s),
                this._canvasContext.lineTo(r, s),
                this._canvasContext.lineTo(r, a),
                this._canvasContext.clearRect(r, a, o - r, s - a),
                t &&
                  ((this._canvasContext.fillStyle = "#0f0"),
                  this._canvasContext.fill()));
            }
            this._canvasContext.clip();
          } else
            this._canvasContext.clearRect(
              0,
              0,
              this.getWidth(),
              this.getHeight(),
            );
        }),
        (b.prototype.getAreas = function () {
          return this._areas ? this._areas.slice() : null;
        }),
        (b.prototype.isMasked = function () {
          return this._isMasked > 0;
        }),
        (b.prototype.setMasked = function (e) {
          e < 0 ? (this._isMasked = 0) : e && this._isMasked++;
        }),
        (b.prototype.isClipped = function () {
          if (this._areas) {
            if (this._areas.length > 1) return !0;
            if (1 === this._areas.length) {
              var e = this._areas[0],
                t = new p(0, 0, this.getWidth(), this.getHeight());
              if (!e.containsRect(t)) return !0;
            }
          }
          return !1;
        }),
        (b.prototype.finish = function () {
          (this._canvasContext.restore(),
            (this._transform = new u()),
            (this._origin = new A(0, 0)),
            (this._scale = 1),
            (this._areas = null));
        }),
        (b.prototype.destroy = function () {
          (this._canvasContext instanceof y && m.destroy(this._canvasContext),
            this._blender.destroy());
        }),
        (b.prototype.getPaintExtents = function (e, t, i) {
          var n = this.getTransform(!1).mapRect(e),
            r = n.getX(),
            o = n.getY(),
            a = n.getWidth(),
            s = n.getHeight();
          return (
            t ||
              (i
                ? "number" == typeof i && (i = [i, i, i, i])
                : (i = [0, 0, 0, 0]),
              o < -i[1] && ((s += o + i[1]), (o = -i[1])),
              r < -i[0] && ((a += r + i[0]), (r = -i[0])),
              r + a > this.getWidth() + i[2] + i[0] &&
                (a = this.getWidth() - r + i[2] + i[0]),
              o + s > this.getHeight() + i[1] + i[3] &&
                (s = this.getHeight() - o + i[1] + i[3])),
            new p(r, o, a, s)
          );
        }),
        (b.prototype.getFinalExtents = function (e) {
          var t = this.getTransform(!1).inverted().mapRect(e);
          return new p(
            t.getX() * this._scale,
            t.getY() * this._scale,
            t.getWidth() * this._scale,
            t.getHeight() * this._scale,
          );
        }),
        (b.prototype.getTranslateCorrection = function (e, t) {
          var i = Math.abs(t.getX() - e.getX()),
            n = Math.abs(t.getY() - e.getY());
          return (
            (i -= Math.floor(i)),
            (n -= Math.floor(n)),
            i > 0.5 ? (i = 1 - i) : i > f.defaultEps && (i = -i),
            n > 0.5 ? (n = 1 - n) : n > f.defaultEps && (n = -n),
            new A(i, n)
          );
        }),
        (b.prototype.getScaleBoxCorrection = function (e, t, i, n, r, o) {
          var a = function (e) {
              return (e * Math.floor(e * r)) / (e * r);
            },
            s = function (e) {
              return (e * Math.ceil(e * r)) / (e * r);
            },
            l = function (e) {
              return (e * Math.round(e * r)) / (e * r);
            },
            h = e * r,
            A = t * r;
          if (o)
            ((i = a(i) || 0),
              (n = a(n) || 0),
              (e = s(e) || 0),
              (t = s(t) || 0));
          else {
            var c = Math.round(h);
            ((i = c < h ? a(i) || 0 : s(i) || 0),
              (n = (c = Math.round(A)) < A ? a(n) || 0 : s(n) || 0),
              (e = l(e) || 0),
              (t = l(t) || 0));
          }
          return new p(e, t, i, n);
        }),
        (b.prototype.createCanvas = function (e, t, i) {
          var n = new b(),
            r = this.getPaintExtents(e, !1, i),
            o = r.getX(),
            a = r.getY(),
            s =
              (r.getWidth(),
              r.getHeight(),
              this.getFinalExtents(r).toRoundedPrecision());
          n.resize(Math.ceil(s.getWidth()), Math.ceil(s.getHeight()));
          var l = null;
          if (t && this._areas) {
            l = [];
            for (var h = 0; h < this._areas.length; ++h) {
              i
                ? "number" == typeof i && (i = [i, i, i, i])
                : (i = [0, 0, 0, 0]);
              var A = this._areas[h]
                .translated(-o, -a)
                .expanded(i[0], i[1], i[2], i[3]);
              l.push(A);
            }
          }
          n.prepare(l);
          var c = s.getSide(p.Side.TOP_LEFT);
          return (n.setOrigin(c), n.setOffset(c), n.setScale(this._scale), n);
        }),
        (b.prototype.clear = function () {
          var e = this.getTransform(!1)
            .inverted()
            .mapRect(new p(0, 0, this.getWidth(), this.getHeight()));
          this._canvasContext.clearRect(
            e.getX(),
            e.getY(),
            e.getWidth(),
            e.getHeight(),
          );
        }),
        (b.prototype.drawCanvas = function (e, t, i, n, r, o, a, s) {
          var l = this._getImageSmoothingEnabled(),
            h = this._scale;
          (this._setImageSmoothingEnabled(h < 1),
            1 !== e.getScale() && this.setScale(1));
          var c = this.resetTransform(),
            p = c ? c.getTranslation() : new A(0, 0);
          ((t |= 0), (i |= 0));
          var u = e.getOffset(),
            d = u ? u.getX() : 0,
            g = u ? u.getY() : 0,
            f = a || e.getWidth(),
            m = s || e.getHeight(),
            y = e.getScale();
          ((y = y || 1), (d += t + p.getX() * y), (g += i + p.getY() * y));
          var _ = 0,
            v = this.getScale();
          if (1 != v) {
            var C = this.getScaleBoxCorrection(d, g, f, m, v, v > 1);
            ((d = C.getX()),
              (g = C.getY()),
              (f = C.getWidth()),
              (m = C.getHeight()),
              (_ = v > 1 ? 0 : 1 / v / 2 - 1));
          } else {
            var w = this.getTranslateCorrection(
              e.getTransform().getTranslation(),
              this.getTransform().getTranslation(),
            );
            ((d += w.getX()), (g += w.getY()));
          }
          (o && this._canvasContext.clearRect(d, g, f, m),
            (this._canvasContext.globalAlpha = "number" == typeof n ? n : 1),
            (this._blender.globalCompositeOperation =
              r || b.CompositeOperator.SourceOver),
            this._blender.drawImage(
              e._canvasContext.canvas,
              -_,
              -_,
              e.getWidth() + 2 * _,
              e.getHeight() + 2 * _,
              d,
              g,
              f,
              m,
            ),
            this.setTransform(c),
            this.setScale(h),
            this._setImageSmoothingEnabled(l));
        }),
        (b.prototype.createTexture = function (e, t) {
          if (!e) return null;
          if (
            ((t = t || g.RepeatMode.Both),
            (e = this._convertImage(e)) instanceof HTMLImageElement ||
              e instanceof Image)
          ) {
            if (e.complete && e.naturalWidth && 0 !== e.naturalWidth)
              return this._canvasContext.createPattern(e, t);
          } else if (
            e.width &&
            0 !== Math.floor(e.width) &&
            0 !== Math.floor(e.height)
          ) {
            var i = null;
            try {
              i = this._canvasContext.createPattern(e, t);
            } catch (e) {
              console.warn("pattern couldn't have been created");
            }
            return i;
          }
          return null;
        }),
        (b.prototype.createPatternPaint = function (e, t, i) {
          var o = null,
            a = null,
            l = null;
          if (e instanceof r) o = e;
          else if ("[Object GAngularGradient]" === e.toString()) {
            var h = e.getTransform();
            ((a =
              i ||
              (!t || (0 == t.getX() && 0 == t.getY())
                ? null
                : new u(1, 0, 0, 1, t.getX(), t.getY()))),
              h && (a = a ? a.preMultiplied(h) : h));
            var A = e.getGradient(1, t);
            A && (o = this.createTexture(A, g.RepeatMode.None));
          } else if (e instanceof s) {
            var c = e.getScale();
            if (e instanceof n) {
              var p = e.getAngle();
              ((o = this._canvasContext.createLinearGradient(
                e._fx,
                e._fy,
                e._fx + Math.cos(p) * c,
                e._fy + Math.sin(p) * c,
              )),
                (l = e.getTransform()));
              for (var f = e.getStops(), m = 0; m < f.length; ++m)
                o.addColorStop(
                  Math.min(1, Math.max(0, f[m].position)),
                  this._toScreenCSS(f[m].color, f[m].opacity),
                );
            } else {
              if (!(e instanceof d)) throw new Error("Unknown pattern");
              ((o = this._canvasContext.createRadialGradient(
                e._fx,
                e._fy,
                0,
                e._cx,
                e._cy,
                c,
              )),
                (l = e.getTransform()));
              for (f = e.getStops(), m = 0; m < f.length; ++m)
                o.addColorStop(
                  Math.min(1, Math.max(0, f[m].position)),
                  this._toScreenCSS(f[m].color, f[m].opacity),
                );
            }
            (t ? (a = u.getNativeRectTransformation(t)) : i && (a = i),
              l && (a = a ? a.preMultiplied(l) : l));
          } else {
            if (!(e instanceof g)) throw new Error("Unknown pattern.");
            ((a = i),
              (h = e.getTransform()) && (a = a ? a.preMultiplied(h) : h));
            var y = e.getTexture(this, t);
            y && (o = this.createTexture(y, e.getRepeatMode()));
          }
          if (o)
            return {
              paint: o,
              transform: a,
            };
        }),
        (b.prototype._toScreenCSS = function (e, t) {
          return e.toScreenCSS(t);
        }),
        (b.prototype.hasClip = function () {
          return (
            this._canvasContext.clip &&
            this._canvasContext.clip instanceof Function
          );
        }),
        (b.prototype.clipRect = function (e, t, i, n) {
          (this._canvasContext.save(),
            this._canvasContext.beginPath(),
            this._canvasContext.moveTo(e, t),
            this._canvasContext.lineTo(e + i, t),
            this._canvasContext.lineTo(e + i, t + n),
            this._canvasContext.lineTo(e, t + n),
            this._canvasContext.lineTo(e, t),
            this._canvasContext.clip());
        }),
        (b.prototype.resetClip = function () {
          this._canvasContext.restore();
        }),
        (b.prototype.putVertices = function (e, t) {
          var i = void 0;
          if (e instanceof Array) {
            if (e.length) {
              this._canvasContext.beginPath();
              for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                0 === n
                  ? this._canvasContext.moveTo(r.getX(), r.getY())
                  : this._canvasContext.lineTo(r.getX(), r.getY());
              }
              t ? (this._canvasContext.closePath(), (i = !0)) : (i = !1);
            }
          } else if (e.rewindVertices(0)) {
            var o = !1;
            this._canvasContext.beginPath();
            for (var a = this.getScale(), s = new c(); e.readVertex(s, a); )
              switch (s.command) {
                case c.Command.Move:
                  ((o = !1), this._canvasContext.moveTo(s.x, s.y));
                  break;
                case c.Command.Line:
                  this._canvasContext.lineTo(s.x, s.y);
                  break;
                case c.Command.Curve:
                  var l = s.x,
                    h = s.y;
                  e.readVertex(s, a) &&
                    this._canvasContext.quadraticCurveTo(s.x, s.y, l, h);
                  break;
                case c.Command.Curve2:
                  ((l = s.x), (h = s.y));
                  if (e.readVertex(s, a)) {
                    var A = s.x,
                      p = s.y;
                    e.readVertex(s, a) &&
                      this._canvasContext.bezierCurveTo(A, p, s.x, s.y, l, h);
                  }
                  break;
                case c.Command.Close:
                  ((o = !0), this._canvasContext.closePath());
                  break;
                default:
                  throw new Error("Unknown Command Type - " + s.command);
              }
            (!o && t && (this._canvasContext.closePath(), (o = !0)), (i = o));
          }
          return i;
        }),
        (b.prototype.clipVertices = function (e) {
          (this._canvasContext.save(),
            this._canvasContext.clip(
              e ? b.FillRule.EvenOdd : b.FillRule.NonZero,
            ));
        }),
        (b.prototype.strokeVertices = function (e, t, i, n, r, o, a, s) {
          ((this._canvasContext.strokeStyle = this._convertStyle(e)),
            (this._canvasContext.lineWidth = "number" == typeof t ? t : 1),
            (this._canvasContext.lineCap = n || "butt"),
            (this._canvasContext.lineJoin = r || "miter"),
            (this._canvasContext.miterLimit = "number" == typeof o ? o : 10),
            (this._canvasContext.globalAlpha = "number" == typeof a ? a : 1),
            (this._blender.globalCompositeOperation =
              s || b.CompositeOperator.SourceOver));
          var l = i && i instanceof Array;
          (l && this._canvasContext.setLineDash(i),
            this._blender.stroke(),
            l && this._canvasContext.setLineDash([]));
        }),
        (b.prototype.fillVertices = function (e, t, i, n) {
          ((this._canvasContext.fillStyle = this._convertStyle(e)),
            (this._canvasContext.globalAlpha = "number" == typeof t ? t : 1),
            (this._blender.globalCompositeOperation =
              i || b.CompositeOperator.SourceOver),
            this._blender.fill(n ? b.FillRule.EvenOdd : b.FillRule.NonZero));
        }),
        (b.prototype.fillCanvas = function (e, t, i) {
          var n = this.getTransform(!1)
            .inverted()
            .mapRect(new p(0, 0, this.getWidth(), this.getHeight()));
          this.fillRect(
            n.getX(),
            n.getY(),
            n.getWidth(),
            n.getHeight(),
            e,
            t,
            i,
          );
        }),
        (b.prototype.fillRect = function (e, t, i, n, r, o, s) {
          ((r = this._convertStyle(r || a.BLACK)),
            (this._blender.globalCompositeOperation =
              s || b.CompositeOperator.SourceOver),
            (this._canvasContext.globalAlpha = "number" == typeof o ? o : 1),
            (this._canvasContext.fillStyle = r),
            this._blender.fillRect(e, t, i, n));
        }),
        (b.prototype.clearRect = function (e, t, i, n) {
          this._canvasContext.clearRect(e, t, i, n);
        }),
        (b.prototype.strokeRect = function (e, t, i, n, r, o, s, l) {
          ((o = this._convertStyle(o || a.BLACK)),
            (r = r || 1),
            (this._blender.globalCompositeOperation =
              l || b.CompositeOperator.SourceOver),
            (this._canvasContext.globalAlpha = "number" == typeof s ? s : 1),
            (this._canvasContext.strokeStyle = o),
            (this._canvasContext.lineWidth = r),
            this._blender.strokeRect(e, t, i, n));
        }),
        (b.prototype.strokeLine = function (e, t, i, n, r, o, s, l) {
          ((o = this._convertStyle(o || a.BLACK)),
            (r = r || 1),
            (this._blender.globalCompositeOperation =
              b.CompositeOperator.SourceOver),
            (this._canvasContext.globalAlpha = "number" == typeof l ? l : 1),
            (this._canvasContext.strokeStyle = o),
            (this._canvasContext.lineWidth = r),
            s && this._canvasContext.setLineDash([2 * r]),
            this._canvasContext.beginPath(),
            this._canvasContext.moveTo(e, t),
            this._canvasContext.lineTo(i, n),
            this._blender.stroke(),
            s && this._canvasContext.setLineDash([]));
        }),
        (b.prototype.setImageSmoothingQuality = function (e) {
          if (this._canvasContext.hasOwnProperty("imageSmoothingQuality"))
            switch (e) {
              case b.SmoothingQuality.Low:
                this._canvasContext.imageSmoothingQuality = "low";
                break;
              case b.SmoothingQuality.Medium:
                this._canvasContext.imageSmoothingQuality = "medium";
                break;
              case b.SmoothingQuality.High:
                this._canvasContext.imageSmoothingQuality = "high";
            }
        }),
        (b.prototype.setRenderAlgorithm = function (e) {
          var t;
          t =
            this._canvasContext instanceof y || this._canvasContext instanceof _
              ? this._canvasContext
              : this._canvasContext.canvas.style;
          var i = [
            ["pixelated", "nearest-neighbor"],
            ["crisp-edges", "-moz-crisp-edges", "-webkit-optimize-contrast"],
            ["auto", ""],
          ];
          switch (e) {
            case b.RenderAlgorithm.Pixelated:
            case b.RenderAlgorithm.Crisp:
            case b.RenderAlgorithm.Auto:
              for (
                var n = 0;
                n < i[e].length &&
                ((t.imageRendering = i[e][n]), t.imageRendering !== i[e][n]);
                n++
              );
          }
        }),
        (b.prototype.drawImage = function (e, t, i, n, r, o, a, s, l) {
          ((t = t || 0), (i = i || 0), (e = this._convertImage(e)));
          ((s = s || e.width), (l = l || e.height));
          ((this._canvasContext.globalAlpha = "number" == typeof r ? r : 1),
            (this._blender.globalCompositeOperation =
              o || b.CompositeOperator.SourceOver));
          var h = this._getImageSmoothingEnabled();
          (this._setImageSmoothingEnabled(!n),
            (!n &&
              !a &&
              "undefined" != typeof navigator &&
              navigator.userAgent.indexOf("Chrome") >= 0 &&
              b.getScreenDPI() < 2 &&
              this._drawSmoothImage(e, t, i, s, l)) ||
              this._blender.drawImage(e, t || 0, i || 0, s, l),
            this._setImageSmoothingEnabled(h));
        }),
        (b.prototype.drawImageFragment = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          h,
          A,
          c,
        ) {
          e = this._convertImage(e);
          ((A = A || o), (c = c || a));
          ((this._canvasContext.globalAlpha = "number" == typeof l ? l : 1),
            (this._blender.globalCompositeOperation =
              h || b.CompositeOperator.SourceOver));
          var p = this._getImageSmoothingEnabled();
          (this._setImageSmoothingEnabled(!s),
            this._blender.drawImage(e, t, i, o, a, n, r, A, c),
            this._setImageSmoothingEnabled(p));
        }),
        (b.prototype.putAuxilliaryText = function (e, t, i, n, r, o, s, l) {
          ((this._canvasContext.globalAlpha = s || 1),
            (this._canvasContext.fillStyle = l || a.BLACK.toScreenCSS()),
            (this._canvasContext.textAlign = o || "start"),
            (this._canvasContext.font = n || "10px Verdana"),
            (this._canvasContext.textBaseline = r || "bottom"),
            this._canvasContext.fillText(e, t, i));
        }),
        (b.prototype.measureText = function (e, t) {
          return (
            t && "number" == typeof t && (t = t.toFixed(0) + "px Verdana"),
            (this._canvasContext.font = t || "10px Verdana"),
            this._canvasContext.measureText(e)
          );
        }),
        (b.prototype.hitTest = function (e, t) {
          for (
            var i,
              n,
              r,
              o = this.getOffset(),
              a = this.getScale(),
              s = new u().scaled(a, a).mapPoint(e).subtract(o),
              l = s.getX(),
              c = s.getY(),
              p = 1 + 2 * (t = Math.ceil(t)),
              d = this._canvasContext.getImageData(l - t, c - t, p, p).data,
              g = Number.MAX_VALUE,
              f = NaN,
              m = 3;
            m < d.length;
            m += 4
          )
            0 !== d[m] &&
              (i =
                (t - (n = (m >> 2) % p)) * (t - n) +
                (t - (r = (m >> 2) / p)) * (t - r)) < g &&
              ((g = i), (f = m));
          return Math.sqrt(g) > t
            ? null
            : new h(this, {
                pixel: d.slice(f - 3, f + 1),
                location: new A(l + ((f >> 2) % p), c - t + (f >> 2) / p),
              });
        }),
        (b.prototype.setFilter = function (e, t) {
          if (b.hasFilters()) {
            if ((this._filters || (this._filters = {}), null === t))
              delete this._filters[e];
            else {
              if (t instanceof Array) 1 === t.length && (t = t[0]);
              else if ("number" != typeof t && ((t = parseNumber(t)), isNaN(t)))
                throw new Error("GPaintCanvas.setFilter: Invalid parameter");
              switch (e) {
                case b.Filter.Blur:
                  this._filters[e] =
                    String(t / (Math.sqrt(2 * Math.log(255)) - 1)) + "px";
                  break;
                case b.Filter.Brightness:
                case b.Filter.Contrast:
                case b.Filter.GrayScale:
                case b.Filter.Invert:
                case b.Filter.Opacity:
                case b.Filter.Saturate:
                case b.Filter.Sepia:
                  this._filters[e] = String(100 * t) + "%";
                  break;
                case b.Filter.SVG:
                  (t.startsWith("#") || (t = "#".concat(t)),
                    (this._filters[e] = t));
                  break;
                case b.Filter.DropShadow:
                  if (t.length < 4)
                    throw new Error(
                      "GPaintCanvas.setFilter: Invalid parameter",
                    );
                  if (!(t[3] instanceof r))
                    throw new Error(
                      "GPaintCanvas.setFilter: Invalid color provided",
                    );
                  var i = t[2] / (Math.sqrt(2 * Math.log(255)) - 1);
                  this._filters[e] =
                    t[0] +
                    "px " +
                    t[1] +
                    "px " +
                    i +
                    "px " +
                    t[3].toScreenCSS(t[4]);
                  break;
                case b.Filter.HueRotate:
                  this._filters[e] = f.toDegrees(t) + "deg";
              }
            }
            var n = "";
            for (var o in this._filters)
              n = n.concat(o, "(", this._filters[o], ") ");
            (n.length || (n = "none"), (this._canvasContext.filter = n));
          }
        }),
        (b.prototype.clone = function (e, t) {
          var i,
            n = t && t.renderPhaseDraw,
            r = t && t.dontCopyContents,
            o = new b(void 0, void 0, t && t.persistent),
            a = this._canvasContext;
          if (m.isRenderPhase() && !n) {
            ((i = a.__clone()),
              (o._canvasContext = i),
              (i.imageRendering = a.imageRendering),
              (i.canvas.rendered = a.canvas.rendered),
              (i.canvas.rendering = a.canvas.rendering),
              (i.canvas.renderedName = a.canvas.renderedName),
              (i.canvas.renderingName = a.canvas.renderingName));
            var s = null;
            if (this._areas) {
              s = [];
              for (var l = 0; l < this._areas.length; l++) {
                var h = this._areas[l];
                s.push(new p(h.getX(), h.getY(), h.getWidth(), h.getHeight()));
              }
              o._areas = s;
            }
            ((o._blender.globalCompositeOperation =
              this._blender.globalCompositeOperation),
              (o._offset = this._offset
                ? new A(this._offset.getX(), this._offset.getY())
                : null),
              (o._origin = this._origin
                ? new A(this._origin.getX(), this._origin.getY())
                : null),
              (o._transform = this._transform
                ? u.deserialize(u.serialize(this._transform))
                : null),
              (o._scale = this._scale));
          } else {
            var c;
            (((i = o._canvasContext).globalAlpha = a.globalAlpha),
              (i.fillStyle = a.fillStyle),
              (i.strokeStyle = a.strokeStyle),
              (i.shadowColor = a.shadowColor),
              (i.shadowBlur = a.shadowBlur),
              (i.shadowOFfsetX = a.shadowOffsetX),
              (i.shadowOffsetY = a.shadowOffsetY),
              (i.lineCap = a.lineCap),
              (i.lineJoin = a.lineJoin),
              (i.lineWidth = a.lineWidth),
              (i.miterLimit = a.miterLimit),
              (i.font = a.font),
              (i.textAlign = a.textAlign),
              (i.textBaseline = a.baseLine),
              (i.imageSmoothingQuality = a.imageSmoothingQuality),
              (i.canvas.width = a.canvas.width),
              (i.canvas.height = a.canvas.height),
              (c =
                a instanceof y || a instanceof _
                  ? a.imageRendering
                  : a.canvas.style.imageRendering),
              i instanceof y || a instanceof _
                ? (i.imageRendering = c)
                : (i.canvas.style.imageRendering = c));
            s = null;
            if (this._areas) {
              s = [];
              for (l = 0; l < this._areas.length; l++) {
                h = this._areas[l];
                s.push(new p(h.getX(), h.getY(), h.getWidth(), h.getHeight()));
              }
              o.prepare(s);
            }
            ((o._blender.globalCompositeOperation =
              this._blender.globalCompositeOperation),
              (o._offset = this._offset
                ? new A(this._offset.getX(), this._offset.getY())
                : null),
              (o._origin = this._origin
                ? new A(this._origin.getX(), this._origin.getY())
                : null),
              (o._transform = this._transform
                ? u.deserialize(u.serialize(this._transform))
                : null),
              (o._scale = this._scale),
              o._updateTransform(),
              o._setImageSmoothingEnabled(this._getImageSmoothingEnabled()),
              r || o.drawCanvas(this, 0, 0, 1, b.CompositeOperator.Copy));
          }
          return (
            e && (o._bitmap = this._bitmap ? this._bitmap.cloneFast() : null),
            o
          );
        }),
        (b.prototype._drawSmoothImage = function (e, t, i, n, r) {
          var o = this.getTransform(!1);
          o || (o = new u());
          var a = o.decomposed(),
            s = a.skew.multiplied(a.rotate).multiplied(a.translate),
            l = a.scale.getMatrix(),
            h = l[0],
            A = l[3],
            c = 0;
          if ((c = Math.abs(1 - h) > Math.abs(1 - A) ? h : A) >= 1) return !1;
          var p = Math.ceil(
            Math.log(Math.max(1, c) / Math.min(1, c)) / Math.log(2),
          );
          p > 20 && (p = 20);
          var d = n,
            g = r,
            f = d * h,
            m = g * A;
          if (d >= 32768 || g >= 32768 || f >= 32768 || m >= 32768) return !1;
          if (p > 1) {
            var y = document.createElement("canvas"),
              _ = y.getContext("2d"),
              v = document.createElement("canvas"),
              b = v.getContext("2d");
            ((y.width = Math.max(f, d)),
              (y.height = Math.max(m, g)),
              (v.width = y.width),
              (v.height = y.height));
            for (var C = 0; C < p - 1; C++) {
              var w = d,
                E = g;
              (d >> 1 >= f && (w = d >> 1),
                g >> 1 >= m && (E = g >> 1),
                0 === C
                  ? _.drawImage(e, 0, 0, d, g, 0, 0, w, E)
                  : C % 2 == 0
                    ? (_.clearRect(0, 0, d, g),
                      _.drawImage(v, 0, 0, d, g, 0, 0, w, E))
                    : (b.clearRect(0, 0, d, g),
                      b.drawImage(y, 0, 0, d, g, 0, 0, w, E)),
                (d = w),
                (g = E));
            }
            var B = s.getMatrix();
            (this._canvasContext.setTransform(
              B[0],
              B[1],
              B[2],
              B[3],
              B[4],
              B[5],
            ),
              this._blender.drawImage(
                C % 2 == 0 ? v : y,
                t || 0,
                i || 0,
                d,
                g,
                0,
                0,
                f,
                m,
              ));
            var x = this._transform.getMatrix();
            this._canvasContext.setTransform(
              x[0],
              x[1],
              x[2],
              x[3],
              x[4],
              x[5],
            );
          } else this._blender.drawImage(e, t || 0, i || 0, e.width, e.height);
          return !0;
        }),
        (b.prototype._updateTransform = function () {
          var e = this.getTransform(!1).getMatrix();
          try {
            this._canvasContext.setTransform(
              e[0],
              e[1],
              e[2],
              e[3],
              e[4],
              e[5],
            );
          } catch (e) {
            console.warn("Invalid bitmap or Transformation matrix");
          }
        }),
        (b.prototype._convertStyle = function (e) {
          return e instanceof r ? r.rgbToHtmlHex(e.toScreen()) : e;
        }),
        (b.prototype._convertImage = function (e) {
          if (
            e instanceof HTMLImageElement ||
            e instanceof Image ||
            e instanceof HTMLCanvasElement ||
            e instanceof y.RendererCanvas ||
            e instanceof _.RendererCanvas ||
            ("undefined" != typeof OffscreenCanvas &&
              e instanceof OffscreenCanvas)
          )
            return e;
          if (e instanceof b)
            return !(this._canvasContext instanceof y) &&
              e._canvasContext instanceof y
              ? e._canvasContext.canvas.__realCanvas
              : !(this._canvasContext instanceof _) &&
                  e._canvasContext instanceof _
                ? e._canvasContext.canvas.$realCanvas
                : e._canvasContext.canvas;
          if (e instanceof l) return e._canvasContext.canvas;
          throw new Error("Not Supported.");
        }),
        (b.prototype.getRendererContext = function () {
          return this._canvasContext instanceof y ||
            this._canvasContext instanceof _
            ? this._canvasContext
            : null;
        }),
        (b.prototype.isRendered = function () {
          return (
            !(this._canvasContext instanceof y) ||
            this._canvasContext.canvas.isRendered()
          );
        }));
      var x = [
        "imageSmoothingEnabled",
        "webkitImageSmoothingEnabled",
        "mozImageSmoothingEnabled",
      ];
      ((b.prototype._getImageSmoothingEnabled = function () {
        for (var e = 0; e < x.length; ++e)
          if (CanvasRenderingContext2D.prototype.hasOwnProperty(x[e]))
            return this._canvasContext[x[e]];
        return !1;
      }),
        (b.prototype._setImageSmoothingEnabled = function (e) {
          for (var t = 0; t < x.length; ++t)
            if (CanvasRenderingContext2D.prototype.hasOwnProperty(x[t])) {
              this._canvasContext[x[t]] = e;
              break;
            }
          return !1;
        }),
        (e.exports = b));
    }