/**
 * Module 897
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
  i(0);
  e.exports = function (e) {
    var t = e.SMALL_SIZE, n = (e.MAX_SIZE, !1), r = !1;
    e.prototype.arc = function (t, i, n, r, o, a) {
      this.__pushByte(e.arc), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__pushFlt(o), this.__pushByte(a ? 1 : 0), this.__call();
    }, e.prototype.__pathStart = null, e.prototype.__pathStartArr = new Float64Array(2), e.prototype.beginPath = function () {
      this.__pathStart = null, this.__pushByte(e.beginPath), this.__call();
    }, e.prototype.bezierCurveTo = function (t, i, n, r, o, a) {
      this.__pushByte(e.bezierCurveTo), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__pushFlt(o), this.__pushFlt(a), this.__call();
    }, e.prototype.clearRect = function (t, i, n, r) {
      a("clearRect :", arguments), this.__pushByte(e.clearRect), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__call();
    }, e.prototype.clip = function (t) {
      this.__pushByte(e.clip), void 0 !== t && this.__pushPtr(t), this.__call();
    }, e.prototype.closePath = function (t) {
      t || "round" === this.$lineJoin && "round" === this.$lineCap ? this.__pathStart ? this.lineTo(this.__pathStart[0], this.__pathStart[1]) : this.lineTo(0, 0) : (this.__pushByte(e.closePath), this.__call()), this.__pathStart = null;
    }, e.LinearGradient = function (i, n, r, o, a) {
      var s = void 0;
      this.ctx = new e(t, s, s, s, s, s, s, i.__multiThreaded, i.__persistent), this.ctx.__pushFltT(n), this.ctx.__pushFltT(r), this.ctx.__pushFltT(o), this.ctx.__pushFltT(a), this.ctx.__pushPtrT(i, !0), e.Renderable.call(this, this.ctx, !0);
    }, e.Renderable.inherit(e.LinearGradient, e.Renderable), e.LinearGradient.prototype.addColorStop = function (e, t) {
      this.ctx.__pushFltT(e), this.ctx.__pushPtrT(t);
    }, e.LinearGradient.prototype._render = function () {
      e.resetExec(this.ctx);
      for (var t = e.getFlt(this.ctx), i = e.getFlt(this.ctx), n = e.getFlt(this.ctx), r = e.getFlt(this.ctx), o = e.getPtr(this.ctx).$realCtx.createLinearGradient(t, i, n, r); this.ctx.__execPtr < this.ctx.__len;) {
        var a = e.getFlt(this.ctx), s = e.getPtr(this.ctx);
        o.addColorStop(a, s);
      }
      return o;
    }, e.LinearGradient.prototype._dumpCode = function (t, i) {
      e.resetExec(this.ctx);
      for (var n = [
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx)
          ], r = (e.getPtr(this.ctx), "var " + i + " = " + t + ".createLinearGradient(" + n.join(", ") + ");\n"); this.ctx.__execPtr < this.ctx.__len;) {
        r += i + ".addColorStop(" + e.getFlt(this.ctx) + ",\"" + e.getPtr(this.ctx) + "\");\n";
      }
      return r;
    }, e.RadialGradient = function (i, n, r, o, a, s, l) {
      var h = void 0;
      this.ctx = new e(t, h, h, h, h, h, h, i.__multiThreaded, i.__persistent), this.ctx.__pushFltT(n), this.ctx.__pushFltT(r), this.ctx.__pushFltT(o), this.ctx.__pushFltT(a), this.ctx.__pushFltT(s), this.ctx.__pushFltT(l), this.ctx.__pushPtrT(i, !0), e.Renderable.call(this, this.ctx, !0);
    }, e.Renderable.inherit(e.RadialGradient, e.Renderable), e.RadialGradient.prototype.addColorStop = function (e, t) {
      this.ctx.__pushFltT(e), this.ctx.__pushPtrT(t);
    }, e.RadialGradient.prototype._render = function () {
      e.resetExec(this.ctx);
      for (var t = e.getFlt(this.ctx), i = e.getFlt(this.ctx), n = e.getFlt(this.ctx), r = e.getFlt(this.ctx), o = e.getFlt(this.ctx), a = e.getFlt(this.ctx), s = e.getPtr(this.ctx).$realCtx.createRadialGradient(t, i, n, r, o, a); this.ctx.__execPtr < this.ctx.__len;) {
        var l = e.getFlt(this.ctx), h = e.getPtr(this.ctx);
        s.addColorStop(l, h);
      }
      return s;
    }, e.RadialGradient.prototype._dumpCode = function (t, i) {
      e.resetExec(this.ctx);
      for (var n = [
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx),
            e.getFlt(this.ctx)
          ], r = (e.getPtr(this.ctx), "var " + i + " = " + t + ".createRadialGradient(" + n.join(", ") + ");\n"); this.ctx.__execPtr < this.ctx.__len;) {
        r += i + ".addColorStop(" + e.getFlt(this.ctx) + ",\"" + e.getPtr(this.ctx) + "\");\n";
      }
      return r;
    }, e.Pattern = function (i, n, r) {
      var o = void 0;
      this.ctx = new e(t, o, o, o, o, o, o, i.__multiThreaded, i.__persistent), this.ctx.__pushPtrT(n), this.ctx.__pushPtrT(r), this.ctx.__pushPtrT(i, !0), e.Renderable.call(this, this.ctx);
    }, e.Renderable.inherit(e.Pattern, e.Renderable), e.Pattern.prototype._render = function (t, i, n) {
      e.resetExec(this.ctx);
      var r = e.getPtr(this.ctx), o = e.getPtr(this.ctx), a = e.getPtr(this.ctx);
      r.$type === e.INSTANCE_RENDERERCANVAS && (r = t.render(r.parent, i, null, n));
      var s = void 0;
      return r && (s = a.$realCtx.createPattern(r, o)), s;
    }, e.Pattern.prototype._dumpCode = function (t, n, r, o, a) {
      e.resetExec(this.ctx);
      var s = i(103).DUMP_IMAGES, l = e.getPtr(this.ctx), h = e.getPtr(this.ctx), A = (e.getPtr(this.ctx), "");
      if (l.$type === e.INSTANCE_RENDERERCANVAS)
        A += r.dumpCode(l.parent, !1, null), l = l.renderingName || l.renderedName;
      else if (s && (l instanceof HTMLCanvasElement || l instanceof HTMLImageElement || l instanceof Image)) {
        var c = "tmp" + a[0];
        if (l instanceof HTMLImageElement || l instanceof Image) {
          var p = document.createElement("canvas");
          p.width = l.naturalWidth, p.height = l.naturalHeight, p.getContext("2d").drawImage(l, 0, 0), l = p;
        }
        A += "var " + c + " = new Image();\n", A += c + ".src = \"" + l.toDataURL() + "\";\n", A += c + ".onload=()=>{\n", l = c, a[0]++;
      }
      return A += "var " + n + " = " + t + ".createPattern(" + l + ",\"" + h + "\");\n";
    }, e.ImageDataUint8Array = function (t, i) {
      e.Renderable.call(this, t), this.parentImgData = i;
    }, e.Renderable.inherit(e.ImageDataUint8Array, e.Renderable), e.ImageDataUint8Array.prototype.parentImgData = null, e.ImageDataUint8Array.prototype._render = function () {
      return new Uint8Array(this.parentImgData.render().data.buffer);
    }, e.ImageDataUint8Array.prototype._dumpCode = function (e, t) {
      return "console.log('computing uint8array imgdata.data here');";
    }, e.ImageDataArray = function (t, i) {
      e.Renderable.call(this, t), this.parentImgData = i;
    }, e.Renderable.inherit(e.ImageDataArray, e.Renderable), e.ImageDataArray.prototype.parentImgData = null, e.ImageDataArray.prototype.$data = null, Object.defineProperties(e.ImageDataArray.prototype, {
      uint8Array: {
        get: function () {
          return this.$data || (this.$data = new e.ImageDataUint8Array(this.ctx, this.parentImgData)), this.$data;
        }
      }
    }), e.ImageDataArray.prototype._render = function () {
      return this.parentImgData.render().data;
    }, e.ImageDataArray.prototype._dumpCode = function (e, t) {
      return "console.log('computing imgdata.data here');";
    }, e.ImageData = function (t, i, n, r, o) {
      if (e.Renderable.call(this, t), r < 1)
        throw new Error("GRendererCtx: Empty imagedata");
      if (o < 1)
        throw new Error("GRendererCtx: Empty imagedata");
      this.sx = i, this.sy = n, this.sw = r, this.sh = o;
    }, e.Renderable.inherit(e.ImageData, e.Renderable), e.ImageData.prototype.sx = 0, e.ImageData.prototype.sy = 0, e.ImageData.prototype.sw = 0, e.ImageData.prototype.sh = 0, e.ImageData.prototype.$data = null, Object.defineProperties(e.ImageData.prototype, {
      data: {
        get: function () {
          return this.$data || (this.$data = new e.ImageDataArray(this.ctx, this)), this.$data;
        }
      }
    }), e.ImageData.prototype.imgCtx = null, e.ImageData.prototype._render = function () {
      var t = this.ctx.$realCtx.getImageData(this.sx, this.sy, this.sw, this.sh);
      if (this.imgCtx)
        for (e.resetExec(this.imgCtx); this.imgCtx.__execPtr < this.imgCtx.__len;) {
          var i = e.getPtr(this.imgCtx), n = e.getFlt(this.imgCtx), r = e.getFlt(this.imgCtx), o = e.getPtr(this.imgCtx);
          i(t.data, n, r, o);
        }
      return t;
    }, e.ImageData.prototype.runModifier = function (i, n, r, o) {
      n < 1 || r < 1 || (this.imgCtx || (this.imgCtx = new e(t)), this.imgCtx.__pushPtrT(i), this.imgCtx.__pushFltT(n), this.imgCtx.__pushFltT(r), this.imgCtx.__pushPtrT(o));
    }, e.ImageData.prototype._dumpCode = function (t, i) {
      var n = "var " + i + " = " + t + ".getImageData(" + this.sx + "," + this.sy + "," + this.sw + "," + this.sh + ");\n";
      return this.imgCtx && (e.resetExec(this.ctx), this.imgCtx.__execPtr < this.imgCtx.__len && (n += "// some modifier executed on data.\n")), n;
    }, e.prototype.createLinearGradient = function (t, i, n, r) {
      return new e.LinearGradient(this, t, i, n, r);
    }, e.prototype.createPattern = function (t, i) {
      var n = new e.Pattern(this, t, i);
      return t.$type === e.INSTANCE_RENDERERCANVAS && t.parent !== this && (t.parent._flush(this), t.parent.__finish(this)), n;
    }, e.prototype.createRadialGradient = function (t, i, n, r, o, a) {
      return new e.RadialGradient(this, t, i, n, r, o, a);
    }, e.prototype.drawImage = function (t, i, n, r, o, a, s, l, h) {
      this.__pushByte(e.drawImage), this.__pushPtr(t), this.__pushFlt(i), this.__pushFlt(n), void 0 !== r && (this.__pushPtr(r), this.__pushPtr(o)), void 0 !== a && (this.__pushPtr(a), this.__pushPtr(s), this.__pushPtr(l), this.__pushPtr(h)), this.__call(), t.$type === e.INSTANCE_RENDERERCANVAS && t.parent !== this && (t.parent._flush(this), t.parent.__finish(this));
    }, e.prototype.fill = function (t) {
      this.__pathStart = null, this.__pushByte(e.fill), this.__pushPtr(t), this.__call();
    }, e.prototype.fillRect = function (t, i, n, r) {
      this.__pushByte(e.fillRect), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__call();
    }, e.prototype.fillText = function (t, i, n) {
      this.__pushByte(e.fillText), this.__pushPtr(t), this.__pushFlt(i), this.__pushFlt(n), this.__call();
    }, e.prototype.getImageData = function (t, i, r, o) {
      return n || (n = !0, console.warn("Warning: using slow function getImageData")), r < 1 || o < 1 ? null : new e.ImageData(this, t, i, r, o);
    }, e.prototype.flushCanvas = function () {
      r || (r = !0, console.warn("Warning: using slow flush function")), this.__pushByte(e.getImageData), this.__pushFlt(0), this.__pushFlt(0), this.__pushFlt(1), this.__pushFlt(1), this.__call();
    }, e.prototype.putImageData = function (t, i, n) {
      this.__pushByte(e.putImageData), this.__pushPtr(t), this.__pushFlt(i), this.__pushFlt(n), this.__call();
    }, e.prototype.getLineDash = function () {
      return this.$lineDash;
    }, e.prototype.lineTo = function (t, i) {
      this.__pushByte(e.lineTo), this.__pushFlt(t), this.__pushFlt(i), this.__call();
    }, e.prototype.measureText = function (e) {
      var t = this.__realCtx;
      return t ? t.measureText(e) : 0;
    }, e.prototype.moveTo = function (t, i) {
      this.__pathStart || (this.__pathStart = this.__pathStartArr, this.__pathStart[0] = t, this.__pathStart[1] = i), this.__pushByte(e.moveTo), this.__pushFlt(t), this.__pushFlt(i), this.__call();
    }, e.prototype.quadraticCurveTo = function (t, i, n, r) {
      this.__pushByte(e.quadraticCurveTo), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__call();
    }, e.prototype.restore = function () {
      this.__pushByte(e.restore), this.__call();
      var t = this.$savedProperties;
      if (t)
        for (var i = e.propertiesToSync["2d"], n = 0; n < i.length; n++)
          this["$" + i[n]] = t[n];
      this.$restoreCount > 0 && this.$restoreCount--;
    }, e.prototype.rotate = function (t) {
      this.__pushByte(e.rotate), this.__pushFlt(t), this.__call();
    }, e.prototype.save = function () {
      this.__pushByte(e.save), this.__call();
      var t = e.propertiesToSync["2d"];
      this.$savedProperties = new Array(t.length);
      for (var i = 0; i < t.length; i++)
        this.$savedProperties[i] = this[t[i]];
      this.$restoreCount++, this.$maxRestoreCount = this.$restoreCount;
    }, e.prototype.scale = function (t, i) {
      a("scale:", arguments), this.__pushByte(e.scale), this.__pushFlt(t), this.__pushFlt(i), this.__call();
    }, e.prototype.setLineDash = function (t) {
      this.__pushByte(e.setLineDash), this.__pushPtr(t), this.__call(), this.$lineDash = t;
    }, e.prototype.setTransform = function (t, i, n, r, o, a) {
      this.__pushByte(e.setTransform), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__pushFlt(o), this.__pushFlt(a), this.__call();
    }, e.prototype.stroke = function () {
      this.__pathStart = null, this.__pushByte(e.stroke), this.__call();
    }, e.prototype.strokeRect = function (t, i, n, r) {
      this.__pushByte(e.strokeRect), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__call();
    }, e.prototype.strokeText = function (t, i, n) {
      this.__pushByte(e.strokeText), this.__pushPtr(t), this.__pushFlt(i), this.__pushFlt(n), this.__call();
    }, e.prototype.transform = function (t, i, n, r, o, a) {
      this.__pushByte(e.transform), this.__pushFlt(t), this.__pushFlt(i), this.__pushFlt(n), this.__pushFlt(r), this.__pushFlt(o), this.__pushFlt(a), this.__call();
    }, e.prototype.translate = function (t, i) {
      this.__pushByte(e.translate), this.__pushFlt(t), this.__pushFlt(i), this.__call();
    }, e.prototype.$realCtx = null, e.prototype.$fillStyle = "#000", e.prototype.$filter = "none", e.prototype.$globalAlpha = 1, e.prototype.$globalCompositeOperation = "source-over", e.prototype.$lineDashOffset = 0, e.prototype.$lineWidth = 1, e.prototype.$lineCap = "butt", e.prototype.$lineJoin = "miter", e.prototype.$miterLimit = 10, e.prototype.$strokeStyle = "#000", e.prototype.$textAlign = "start", e.prototype.$imageSmoothingEnabled = !0, e.prototype.$imageSmoothingQuality = "high", e.prototype.$textBaseline = "alphabetic", e.prototype.$font = "10px sans-serif", e.prototype.$savedProperties = null, e.prototype.$restoreCount = 0, e.prototype.$maxRestoreCount = 0, e.prototype.$shadowColor = "rgba(0, 0, 0, 0)", e.prototype.$shadowOffsetX = 0, e.prototype.$shadowOffsetY = 0, e.prototype.$shadowBlur = 0;
    var o = [
      "lighter",
      "xor",
      "copy",
      "destination-out",
      "destination-in",
      "destination-atop",
      "destination-over",
      "source-out",
      "source-in",
      "source-atop",
      "source-over",
      "luminosity",
      "color",
      "saturation",
      "hue",
      "exclusion",
      "difference",
      "soft-light",
      "hard-light",
      "color-burn",
      "color-dodge",
      "lighten",
      "darken",
      "overlay",
      "screen",
      "multiply",
      "normal"
    ];
    function a() {
      if (e.DEBUG && "function" == typeof gdb_loaddesign) {
        var t = Array.prototype.slice.call(arguments).map(function (e) {
          return "object" == typeof e ? Array.prototype.slice.call(e) : e;
        });
        console.log("RenderCtx2D:" + t);
      }
    }
    Object.defineProperties(e.prototype, {
      fillStyle: {
        get: function () {
          return this.$fillStyle;
        },
        set: function (t) {
          a("setting fillStyle:", t), this.$fillStyle = t, this.__pushByte(e.fillStyle), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      filter: {
        get: function () {
          return this.$filter;
        },
        set: function (t) {
          a("setting filter:", t), this.$filter = t, this.__pushByte(e.filter), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      globalAlpha: {
        get: function () {
          return this.$globalAlpha;
        },
        set: function (t) {
          a("setting globalAlpha:", t), this.$globalAlpha = t, this.__pushByte(e.globalAlpha), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      globalCompositeOperation: {
        get: function () {
          return this.$globalCompositeOperation;
        },
        set: function (t) {
          a("setting globalCompositeOperation:", t), o.indexOf(t) < 0 || (this.$globalCompositeOperation = t, this.__pushByte(e.globalCompositeOperation), this.__pushPtr(t), this.__mov());
        },
        enumerable: !0
      },
      lineDashOffset: {
        get: function () {
          return this.$lineDashOffset;
        },
        set: function (t) {
          this.$lineDashOffset = t, this.__pushByte(e.lineDashOffset), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      lineWidth: {
        get: function () {
          return this.$lineWidth;
        },
        set: function (t) {
          a("setting lineWidth:", t), this.$lineWidth = t, this.__pushByte(e.lineWidth), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      lineCap: {
        get: function () {
          return this.$lineCap;
        },
        set: function (t) {
          this.$lineCap = t, this.__pushByte(e.lineCap), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      lineJoin: {
        get: function () {
          return this.$lineJoin;
        },
        set: function (t) {
          this.$lineJoin = t, this.__pushByte(e.lineJoin), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      miterLimit: {
        get: function () {
          return this.$miterLimit;
        },
        set: function (t) {
          this.$miterLimit = t, this.__pushByte(e.miterLimit), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      strokeStyle: {
        get: function () {
          return this.$strokeStyle;
        },
        set: function (t) {
          this.$strokeStyle = t, this.__pushByte(e.strokeStyle), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      font: {
        get: function () {
          return this.$font;
        },
        set: function (t) {
          this.$font = t, this.__pushByte(e.font), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      textBaseline: {
        get: function () {
          return this.$textBaseline;
        },
        set: function (t) {
          this.$textBaseline = t, this.__pushByte(e.textBaseline), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      textAlign: {
        get: function () {
          return this.$textAlign;
        },
        set: function (t) {
          a("setting textAlign:", t), this.$textAlign = t, this.__pushByte(e.textAlign), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      imageRendering: {
        get: function () {
          return 1;
        },
        set: function (e) {
          a("setting imageRendering:", e);
        },
        enumerable: !0
      },
      imageSmoothingEnabled: {
        get: function () {
          return this.$imageSmoothingEnabled;
        },
        set: function (t) {
          a("setting imageSmoothingEnabled: ", t), this.$imageSmoothingEnabled = t, this.__pushByte(e.imageSmoothingEnabled), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      imageSmoothingQuality: {
        get: function () {
          return this.$imageSmoothingQuality;
        },
        set: function (t) {
          a("setting imageSmoothQuality:", t), this.$imageSmoothingQuality = t, this.__pushByte(e.imageSmoothingQuality), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      shadowBlur: {
        get: function () {
          return this.$shadowBlur;
        },
        set: function (t) {
          a("setting shadowBlur:", t), this.$shadowBlur = t, this.__pushByte(e.shadowBlur), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      shadowColor: {
        get: function () {
          return this.$shadowColor;
        },
        set: function (t) {
          a("setting shadowColor:", t), this.$shadowColor = t, this.__pushByte(e.shadowColor), this.__pushPtr(t), this.__mov();
        },
        enumerable: !0
      },
      shadowOffsetX: {
        get: function () {
          return this.$shadowOffsetX;
        },
        set: function (t) {
          a("setting shadowOffsetX:", t), this.$shadowOffsetX = t, this.__pushByte(e.shadowOffsetX), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      },
      shadowOffsetY: {
        get: function () {
          return this.$shadowOffsetY;
        },
        set: function (t) {
          a("setting shadowOffsetY:", t), this.$shadowOffsetY = t, this.__pushByte(e.shadowOffsetY), this.__pushFlt(t), this.__mov();
        },
        enumerable: !0
      }
    }), e.propertiesToSync["2d"] = [
      "imageSmoothingQuality",
      "imageSmoothingEnabled",
      "textAlign",
      "textBaseline",
      "font",
      "strokeStyle",
      "miterLimit",
      "fillStyle",
      "filter",
      "lineJoin",
      "lineCap",
      "lineWidth",
      "lineDashOffset",
      "globalAlpha",
      "globalCompositeOperation",
      "shadowColor",
      "shadowBlur",
      "shadowOffsetX",
      "shadowOffsetY"
    ];
  };
}
