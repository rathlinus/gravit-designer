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

function (exports, module, require) {
  var n = require(346) /* module */, r = require(473) /* module */, o = require(226) /* module */, a = require(42) /* module */, s = require(0) /* GObject */, l = require(5) /* GPoint */, h = require(14) /* GPaintCanvas */, A = require(166) /* GRendererConfig */, c = require(118) /* module */;
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
          this._prepareBackground(c), this._drawImage(e, t, i, n, r, o, a, s, l), this._renderWithBlend(c, null, true);
        } else
          this._prepareBackground(), this._drawImage(e, t, i, n, r, o, a, s, l), this._renderWithBlend(null, null, true);
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
        for (var exports = this._paintCanvas._areas.slice(), module = exports[0], require = 1; require < exports.length; require++)
          module = module.united(exports[require]);
        this._prepareBackground(module), this._ctx.stroke(), this._renderWithBlend(module, null, true);
      } else
        this._prepareBackground(), this._ctx.stroke(), this._renderWithBlend(null, null, true);
    } else
      this._ctx.stroke();
  }, p.prototype.strokeRect = function (e, t, i, n) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var r = this._paintCanvas._areas.slice(), o = r[0], a = 1; a < r.length; a++)
          o = o.united(r[a]);
        this._prepareBackground(o), this._ctx.strokeRect(e, t, i, n), this._renderWithBlend(o, null, true);
      } else
        this._prepareBackground(), this._ctx.strokeRect(e, t, i, n), this._renderWithBlend(null, null, true);
    } else
      this._ctx.strokeRect(e, t, i, n);
  }, p.prototype.fill = function (e) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var module = this._paintCanvas._areas.slice(), require = module[0], n = 1; n < module.length; n++)
          require = require.united(module[n]);
        this._prepareBackground(require), this._ctx.fill(e), this._renderWithBlend(require, null, true);
      } else
        this._prepareBackground(), this._ctx.fill(e), this._renderWithBlend(null, null, true);
    } else
      this._ctx.fill(e);
  }, p.prototype.fillRect = function (e, t, i, n) {
    if (this._isCustomOperation()) {
      if (!this.prepareShader())
        return;
      if (this._paintCanvas._areas && this._paintCanvas._areas.length) {
        for (var r = this._paintCanvas._areas.slice(), o = r[0], a = 1; a < r.length; a++)
          o = o.united(r[a]);
        this._prepareBackground(o), this._ctx.fillRect(e, t, i, n), this._renderWithBlend(o, null, true);
      } else
        this._prepareBackground(), this._ctx.fillRect(e, t, i, n), this._renderWithBlend(null, null, true);
    } else
      this._ctx.fillRect(e, t, i, n);
  }, p.prototype._makeNonIntersectingAreas = function (e) {
    for (var module = 0; module < e.length; module++)
      for (var require = e[module], n = module + 1; n < e.length; n++)
        if (require.intersectsRect(e[n])) {
          e[module] = require.united(e[n]), e.splice(n, 1), module = 0;
          break;
        }
  }, p.prototype._prepareBackground = function (e, t) {
    var i, n, r, s, h, A, c, p;
    e ? (i = e.getX(), n = e.getY(), r = e.getWidth(), s = e.getHeight()) : (i = 0, n = 0, r = this._paintCanvas.getWidth(), s = this._paintCanvas.getHeight()), t ? (h = t.getWidth(), A = t.getHeight(), c = t.getX(), p = t.getY()) : (h = r, A = s, c = i, p = n);
    var u = this._paintCanvas.getTransform(true), d = this._paintCanvas.getOrigin(), g = this._paintCanvas.getScale();
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
    var n = this._paintCanvas, r = n.getTransform(true), a = n.getOrigin(), s = n.getScale();
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
  }, exports.exports = p;
}
