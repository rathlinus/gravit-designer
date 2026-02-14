/**
 * Module 345 - GBitmap
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
  var n = i(5), r = i(6), o = i(132), a = i(895), s = i(896), l = i(111), h = i(205), A = i(103);
  function c(e, t) {
    var i = 0, r = 0, o = null, a = null;
    "number" == typeof e ? (i = e, r = t) : e instanceof Image || e instanceof HTMLImageElement ? (i = e.naturalWidth, r = e.naturalHeight, a = e) : !(e instanceof c) && e._canvasContext instanceof CanvasRenderingContext2D ? o = e._canvasContext.canvas : e instanceof c || !(e._canvasContext instanceof l || e._canvasContext instanceof h) ? e instanceof HTMLCanvasElement || e instanceof l.RendererCanvas || e instanceof h.RendererCanvas ? o = e : e instanceof CanvasRenderingContext2D && (o = e.canvas) : o = e._canvasContext.canvas, o ? this._canvas = o : (this._canvas = A.getRenderer().canvas, this._canvas.width = i, this._canvas.height = r), this._canvasContext = this._canvas.getContext("2d"), a && i >= 0 && r >= 0 && this._canvasContext.drawImage(a), this._offset = new n(0, 0);
  }
  c.ImageType = {
    PNG: "image/png",
    JPEG: "image/jpeg"
  }, c.prototype._offset = null, c.prototype._dpi = o.DPI, c.prototype._canvas = null, c.prototype._canvasContext = null, c.prototype.setDPI = function (e) {
    this._dpi = e || o.DPI;
  }, c.prototype.getOffset = function () {
    return this._offset;
  }, c.prototype.getWidth = function () {
    return Math.floor(this._canvas.width);
  }, c.prototype.getHeight = function () {
    return Math.floor(this._canvas.height);
  }, c.prototype.getHTMLElement = function (e) {
    return e && (this._canvas instanceof l.RendererCanvas || this._canvas instanceof h.RendererCanvas) ? this._canvas.$realCanvas : this._canvas;
  }, c.prototype.toImageDataUrl = function (e, t) {
    var i = [e];
    return t && (i = i.concat(t)), this._canvas.toDataURL.apply(this._canvas, i);
  }, c.prototype.toImageBlob = function (e, t, i, n) {
    n = n || this._dpi || o.DPI;
    var r = Object.keys(c.ImageType).map(function (e) {
      return c.ImageType[e];
    });
    -1 === r.indexOf(e) && (/jpeg/i.test(e) || /jpg/i.test(e) ? e = c.ImageType.JPEG : /png/i.test(e) && (e = c.ImageType.PNG));
    var l = [
      t,
      e
    ];
    if (i && (l = l.concat(i)), !this._canvas)
      return null;
    if ("function" == typeof this._canvas.toBlob) {
      if (-1 === r.indexOf(e) || isNaN(n) || n === o.DPI)
        return this._canvas.toBlob.apply(this._canvas, l);
      var h = [
        function (i) {
          var r = new FileReader();
          r.onload = function (i) {
            try {
              if (e === c.ImageType.PNG) {
                var r = new a(i.target.result);
                r.setDPI(n), t(r.getBlob());
              } else if (e === c.ImageType.JPEG) {
                var o = new s(i.target.result);
                o.setDPI(n), t(o.getBlob());
              }
            } catch (e) {
              this._canvas.toBlob.apply(this._canvas, l);
            }
          }.bind(this), r.readAsArrayBuffer(i);
        }.bind(this),
        e
      ];
      return i && (h = h.concat(i)), this._canvas.toBlob.apply(this._canvas, h);
    }
    return null;
  }, c.prototype.toImageBuffer = function (e, t, i, n) {
    this.toImageBlob.call(this, e, function (e) {
      if (e instanceof Blob || e instanceof File) {
        var i = new FileReader();
        i.onload = function (e) {
          t(e.target.result);
        }, i.readAsArrayBuffer(e);
      }
    }, i, n);
  }, c.prototype.clone = function (e) {
    if ((e = e || new r(0, 0, this.getWidth(), this.getHeight())).getWidth() < 1 || e.getHeight() < 1)
      return null;
    var t = new c(e.getWidth(), e.getHeight()), i = this._canvasContext.getImageData(e.getX(), e.getY(), e.getWidth(), e.getHeight());
    return t._canvasContext.putImageData(i, 0, 0), t;
  }, c.prototype.resize = function (e, t, i) {
    if (e = e || 0, t = t || 0, i = i || r.Side.TOP_LEFT, e || t) {
      var n = e - this.getWidth(), o = t - this.getHeight(), a = 0, s = 0, l = 0, h = 0;
      if (n !== this.getWidth())
        switch (i) {
        case r.Side.TOP_LEFT:
        case r.Side.LEFT_CENTER:
        case r.Side.BOTTOM_LEFT:
          l = n;
          break;
        case r.Side.TOP_CENTER:
        case r.Side.CENTER:
        case r.Side.BOTTOM_CENTER:
          a = -n / 2, l = n / 2;
          break;
        case r.Side.TOP_RIGHT:
        case r.Side.RIGHT_CENTER:
        case r.Side.BOTTOM_RIGHT:
          a = -n;
        }
      if (o !== this.getHeight())
        switch (i) {
        case r.Side.TOP_LEFT:
        case r.Side.TOP_CENTER:
        case r.Side.TOP_RIGHT:
          h = o;
          break;
        case r.Side.LEFT_CENTER:
        case r.Side.CENTER:
        case r.Side.RIGHT_CENTER:
          s = -o / 2, h = o / 2;
          break;
        case r.Side.BOTTOM_LEFT:
        case r.Side.BOTTOM_CENTER:
        case r.Side.BOTTOM_RIGHT:
          s = -o;
        }
      var A = this._canvasContext.getImageData(0, 0, this.getWidth(), this.getHeight());
      this._canvas.width = this.getWidth() - a + l, this._canvas.height = this.getHeight() - s + h, this._canvasContext.clearRect(0, 0, this.getWidth(), this.getHeight()), this._canvasContext.putImageData(A, -a, -s);
    }
  }, c.prototype.crop = function (e, t, i, r) {
    e = e || 0, t = t || 0, i = i || 0, r = r || 0;
    var o = this.getWidth() - i, a = this.getHeight() - r;
    if (o > 0 && a > 0) {
      var s = this._canvasContext.getImageData(e, t, o, a);
      this._canvas.width = o, this._canvas.height = a, this._canvasContext.clearRect(0, 0, o, a), this._canvasContext.putImageData(s, 0, 0), this._offset = new n(e, t);
    }
  }, c.prototype.trim = function () {
    for (var e, t = this._canvasContext.getImageData(0, 0, this.getWidth(), this.getHeight()), i = t.data.length, n = {
          top: null,
          left: null,
          right: null,
          bottom: null
        }, r = this.getWidth(), o = this.getHeight(), a = null, s = 0; s < i; s += 4)
      0 !== t.data[s + 3] && (e = s / 4 % r, a = ~~(s / 4 / r), null === n.top && (n.top = a), (null === n.left || e < n.left) && (n.left = e), (null === n.right || n.right < e) && (n.right = e), (null === n.bottom || n.bottom < a) && (n.bottom = a));
    n.bottom += 1, n.right += 1, this.crop(n.left, n.top, r - (n.right - n.left), o - (n.bottom - n.top));
  }, c.prototype.getPixelValue = function (e, t) {
    return e = Math.max(0, Math.min(e, this.getWidth())), t = Math.max(0, Math.min(t, this.getHeight())), this._canvasContext.getImageData(e, t, 1, 1).data;
  }, c.prototype.modifyPixels = function (e, t, i, n) {
    if (0 === (i = i || new r(0, 0, this.getWidth(), this.getHeight())).getWidth() || 0 === i.getHeight())
      return null;
    var o = this._canvasContext.getImageData(i.getX(), i.getY(), i.getWidth(), i.getHeight());
    return o.runModifier && n ? o.runModifier(e, i.getWidth(), i.getHeight(), t) : e(o.data, i.getWidth(), i.getHeight(), t), this._canvasContext.putImageData(o, i.getX(), i.getY()), o;
  }, c.prototype.applyFilter = function (e, t, i) {
    return this.modifyPixels(e.apply, t, i, !0);
  }, c.prototype.toString = function () {
    return "[Object GBitmap]";
  }, e.exports = c;
}
