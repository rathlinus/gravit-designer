/**
 * Module 643
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
  var n = i(346), r = i(473), o = i(226), a = i(42), s = i(0), l = i(5), h = i(14), A = i(166), c = i(118);
  function p(e) {
    this._paintCanvas = e, this._ctx = e._canvasContext, this.globalCompositeOperation = this._ctx.globalCompositeOperation;
  }
  s.inheritAndMix(p, s, [
    r,
    c
  ]), p.prototype._ctx = null, p.prototype._paintCanvas = null, p.prototype._bgTexture = null, Object.defineProperty(p.prototype, "globalCompositeOperation", {
    set: function (e) {
      this._globalCompositeOperation = "normal" === e ? "source-over" : e;
    },
    get: function () {
      return this._globalCompositeOperation;
    }
  }), p.prototype._globalCompositeOperation = null, p.prototype.getShaderClass = function () {
    return n;
  }, p.prototype._isCustomOperation = function () {
    return this.globalCompositeOperation !== this._ctx.globalCompositeOperation && (this._ctx.globalCompositeOperation = this.globalCompositeOperation, this.globalCompositeOperation !== this._ctx.globalCompositeOperation) && "over" !== this._ctx.globalCompositeOperation;
  }, p.prototype.drawImage = function (e, t, i, n, r, o, a, s, l) {
    var h = arguments.length;
    if (!(h < 3)) {
      if (e = arguments[0], 3 == h)
        o = arguments[1], a = arguments[2], t = 0, i = 0, s = n = e.width, l = r = e.height;
      else if (5 == h)
        o = arguments[1], a = arguments[2], s = arguments[3], l = arguments[4], t = 0, i = 0, n = e.width, r = e.height;
      else {
        if (9 != h)
          return;
        t = arguments[1], i = arguments[2], n = arguments[3], r = arguments[4], o = arguments[5], a = arguments[6], s = arguments[7], l = arguments[8];
      }
      if (this._isCustomOperation()) {
        if (!this.prepareShader())
          return;
        if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
          for (var A = this._paintCanvas._areas.slice(), c = A[0], p = 1; p < A.length; p++)
            c = c.united(A[p]);
          this._prepareBackground(c), this._drawImage(e, t, i, n, r, o, a, s, l), this._renderWithBlend(c, null, !0);
        } else
          this._prepareBackground(), this._drawImage(e, t, i, n, r, o, a, s, l), this._renderWithBlend(null, null, !0);
      } else
        this._drawImage(e, t, i, n, r, o, a, s, l);
    }
  }, p.prototype._drawImage = function (e, t, i, n, r, o, a, s, l) {
    if (!(s <= 0 || l <= 0 || n <= 0 || r <= 0))
      try {
        if (n === e.width && r === e.height && 0 === t && 0 === i)
          return s === e.width && l === e.height ? void this._ctx.drawImage(e, o, a) : void this._ctx.drawImage(e, o, a, s, l);
        this._ctx.drawImage(e, t, i, n, r, o, a, s, l);
      } catch (e) {
      }
  }, p.prototype.stroke = function () {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var e = this._paintCanvas._areas.slice(), t = e[0], i = 1; i < e.length; i++)
          t = t.united(e[i]);
        this._prepareBackground(t), this._ctx.stroke(), this._renderWithBlend(t, null, !0);
      } else
        this._prepareBackground(), this._ctx.stroke(), this._renderWithBlend(null, null, !0);
    } else
      this._ctx.stroke();
  }, p.prototype.strokeRect = function (e, t, i, n) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var r = this._paintCanvas._areas.slice(), o = r[0], a = 1; a < r.length; a++)
          o = o.united(r[a]);
        this._prepareBackground(o), this._ctx.strokeRect(e, t, i, n), this._renderWithBlend(o, null, !0);
      } else
        this._prepareBackground(), this._ctx.strokeRect(e, t, i, n), this._renderWithBlend(null, null, !0);
    } else
      this._ctx.strokeRect(e, t, i, n);
  }, p.prototype.fill = function (e) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var t = this._paintCanvas._areas.slice(), i = t[0], n = 1; n < t.length; n++)
          i = i.united(t[n]);
        this._prepareBackground(i), this._ctx.fill(e), this._renderWithBlend(i, null, !0);
      } else
        this._prepareBackground(), this._ctx.fill(e), this._renderWithBlend(null, null, !0);
    } else
      this._ctx.fill(e);
  }, p.prototype.fillRect = function (e, t, i, n) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var r = this._paintCanvas._areas.slice(), o = r[0], a = 1; a < r.length; a++)
          o = o.united(r[a]);
        this._prepareBackground(o), this._ctx.fillRect(e, t, i, n), this._renderWithBlend(o, null, !0);
      } else
        this._prepareBackground(), this._ctx.fillRect(e, t, i, n), this._renderWithBlend(null, null, !0);
    } else
      this._ctx.fillRect(e, t, i, n);
  }, p.prototype._makeNonIntersectingAreas = function (e) {
    for (var t = 0; t < e.length; t++)
      for (var i = e[t], n = t + 1; n < e.length; n++)
        if (i.intersectsRect(e[n])) {
          e[t] = i.united(e[n]), e.splice(n, 1), t = 0;
          break;
        }
  }, p.prototype._prepareBackground = function (e, t) {
    var i, n, r, s, h, A, c, p;
    e ? (i = e.getX(), n = e.getY(), r = e.getWidth(), s = e.getHeight()) : (i = 0, n = 0, r = this._paintCanvas.getWidth(), s = this._paintCanvas.getHeight()), t ? (h = t.getWidth(), A = t.getHeight(), c = t.getX(), p = t.getY()) : (h = r, A = s, c = i, p = n);
    var u = this._paintCanvas.getTransform(!0), d = this._paintCanvas.getOrigin(), g = this._paintCanvas.getScale();
    this._paintCanvas.setTransform(null), this._paintCanvas.setOrigin(new l(0, 0)), this._paintCanvas.setScale(1);
    var f = o.getGLContext();
    f.canvas.width === h && f.canvas.height === A || (f.canvas.width = h, f.canvas.height = A);
    var m = o.createTexture(this._ctx.canvas, i, n, r, s);
    t && (this.isInitialized() && h === this.texture.width && A === this.texture.height || this._initialize.call(this, h, A)), m.use(), t ? this.texture.drawTo(function () {
      a.getDefaultShader().drawRect(i - c, n - p, i - c + r, n - p + s, [
        0,
        0,
        h,
        A
      ]);
    }) : this.draw(m), m.destroy(), this._paintCanvas.clearRect(i, n, r, s), this._paintCanvas.setTransform(u), this._paintCanvas.setOrigin(d), this._paintCanvas.setScale(g);
  }, p.prototype._renderWithBlend = function (e, t, i) {
    var n = this._paintCanvas, r = n.getTransform(!0), a = n.getOrigin(), s = n.getScale();
    n.setTransform(null), n.setOrigin(new l(0, 0)), n.setScale(1);
    var c, p = o.getGLContext();
    if (t && (c = {
        x: t.getX() - e.getX(),
        y: t.getY() - e.getY(),
        width: t.getWidth(),
        height: t.getHeight()
      }), this.shaderInstance.render({
        source: n._canvasContext.canvas,
        blendMode: this.globalCompositeOperation,
        opacity: 1,
        area: t || e,
        dimensions: c
      }, 1), i) {
      this.update();
      var u = n._canvasContext.globalCompositeOperation, d = n._canvasContext.globalAlpha;
      n._canvasContext.globalCompositeOperation = h.CompositeOperator.Copy, n._canvasContext.globalAlpha = 1, n._canvasContext.drawImage(p.canvas, e ? e.getX() : 0, e ? e.getY() : 0), n._canvasContext.globalCompositeOperation = u, n._canvasContext.globalAlpha = d, n.setTransform(r), n.setOrigin(a), n.setScale(s), A.DELETE_BLEND_AND_GRADIENT_TEXTURES_AFTER_DRAW && this.destroy();
    }
  }, p.prototype.destroy = function () {
    this._destroy();
  }, p.prototype.toString = function () {
    return "[Object GBlender]";
  }, e.exports = p;
}
