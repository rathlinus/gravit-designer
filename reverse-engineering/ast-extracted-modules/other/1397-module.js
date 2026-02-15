/**
 * Module 1397
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
  var n = i(792), r = n.CanvasGraphics, o = n.getShadingPatternFromIR, a = i(1398), s = i(176), l = i(0), h = 1, A = 2, c = 3;
  function p(e, t, i, n, o, a) {
    r.call(this, e, t, i, n, o, a), e.gfx = this, n.gfx = this;
  }
  l.inherit(p, r), p.prototype.beginDrawing = function (e) {
    var t, i = e.transform, n = e.viewport;
    this.ctx.save(), (t = this.ctx).strokeStyle = "#000000", t.fillStyle = "#000000", t.fillRule = "nonzero", t.globalAlpha = 1, t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.globalCompositeOperation = "source-over", t.font = "10px sans-serif", void 0 !== t.setLineDash && (t.setLineDash([]), t.lineDashOffset = 0), i && this.ctx.transform.apply(this.ctx, i), this.ctx.transform.apply(this.ctx, n.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout();
  }, p.prototype.getColorN_Pattern = function (e) {
    var t;
    if ("TilingPattern" === e[0]) {
      var i = e[1], n = this.baseTransform || this.ctx.mozCurrentTransform.slice(), r = this, s = {
          createCanvasGraphics: function (e) {
            return new p(e, r.commonObjs, r.objs, r.canvasFactory, r.webGLContext);
          }
        };
      t = new a(e, i, this.ctx, s, n);
    } else
      t = o(e);
    return t;
  }, p.prototype[n.OPS.beginText] = function () {
    r.prototype.beginText.call(this), this.ctx.beginText();
  }, p.prototype[n.OPS.endText] = function () {
    r.prototype.endText.call(this), this.ctx.endText();
  }, p.prototype[n.OPS.paintFormXObjectBegin] = function (e, t) {
    this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e) && 6 === e.length && this.transform.apply(this, e), this.baseTransform = this.ctx.mozCurrentTransform;
  }, p.prototype[n.OPS.shadingFill] = function (e) {
    var t = this.ctx;
    this.save();
    var i = o(e);
    t.fillStyle = i.getPattern(t, this, !0), t.fill(null, t._clipping), this.restore();
  }, p.prototype.paintInlineImageXObject = function (e) {
    var t = e.width, i = e.height, n = this.ctx;
    this.save(), n.scale(1 / t, -1 / i);
    var r, o, a = n.mozCurrentTransformInverse, l = a[0], p = a[1], u = Math.max(Math.sqrt(l * l + p * p), 1), d = a[2], g = a[3], f = Math.max(Math.sqrt(d * d + g * g), 1);
    if (e instanceof HTMLElement || !e.data)
      r = e;
    else {
      o = this.cachedCanvases.getCanvas("inlineImage", t, i);
      var m = document.createElement("canvas");
      m.width = e.width, m.height = e.height;
      var y = m.getContext("2d");
      !function (e, t) {
        if ("undefined" != typeof ImageData && t instanceof ImageData)
          e.putImageData(t, 0, 0);
        else {
          var i, n, r, o, a, l = t.height, p = t.width, u = l % 16, d = (l - u) / 16, g = 0 === u ? d : d + 1, f = e.createImageData(p, 16), m = 0, y = t.data, _ = f.data;
          if (t.kind === h) {
            var v = y.byteLength, b = new Uint32Array(_.buffer, 0, _.byteLength >> 2), C = b.length, w = p + 7 >> 3, E = 4294967295, B = s.littleEndian ? 4278190080 : 255;
            for (n = 0; n < g; n++) {
              for (o = n < d ? 16 : u, i = 0, r = 0; r < o; r++) {
                for (var x = v - m, P = 0, S = x > w ? p : 8 * x - 7, T = -8 & S, I = 0, F = 0; P < T; P += 8)
                  F = y[m++], b[i++] = 128 & F ? E : B, b[i++] = 64 & F ? E : B, b[i++] = 32 & F ? E : B, b[i++] = 16 & F ? E : B, b[i++] = 8 & F ? E : B, b[i++] = 4 & F ? E : B, b[i++] = 2 & F ? E : B, b[i++] = 1 & F ? E : B;
                for (; P < S; P++)
                  0 === I && (F = y[m++], I = 128), b[i++] = F & I ? E : B, I >>= 1;
              }
              for (; i < C;)
                b[i++] = 0;
              e.putImageData(f, 0, 16 * n);
            }
          } else if (t.kind === c) {
            for (r = 0, a = 16 * p * 4, n = 0; n < d; n++)
              _.set(y.subarray(m, m + a)), m += a, e.putImageData(f, 0, r), r += 16;
            n < g && (a = p * u * 4, _.set(y.subarray(m, m + a)), e.putImageData(f, 0, r));
          } else {
            if (t.kind !== A)
              throw new Error("bad image kind: " + t.kind);
            for (a = p * (o = 16), n = 0; n < g; n++) {
              for (n >= d && (a = p * (o = u)), i = 0, r = a; r--;)
                _[i++] = y[m++], _[i++] = y[m++], _[i++] = y[m++], _[i++] = 255;
              e.putImageData(f, 0, 16 * n);
            }
          }
        }
      }(y, e), r = m;
    }
    for (var _ = t, v = i, b = "prescale1"; u > 2 && _ > 1 || f > 2 && v > 1;) {
      var C = _, w = v;
      u > 2 && _ > 1 && (u /= _ / (C = Math.ceil(_ / 2))), f > 2 && v > 1 && (f /= v / (w = Math.ceil(v / 2))), (y = (o = this.cachedCanvases.getCanvas(b, C, w)).context).clearRect(0, 0, C, w), y.drawImage(r, 0, 0, _, v, 0, 0, C, w), r = o.canvas, _ = C, v = w, b = "prescale1" === b ? "prescale2" : "prescale1";
    }
    if (n.drawImage(r, 0, 0, _, v, 0, -i, t, i), this.imageLayer) {
      var E = this.getCanvasPosition(0, -i);
      this.imageLayer.appendImage({
        imgData: e,
        left: E[0],
        top: E[1],
        width: t / a[0],
        height: i / a[3]
      });
    }
    this.restore();
  }, e.exports = p;
}
