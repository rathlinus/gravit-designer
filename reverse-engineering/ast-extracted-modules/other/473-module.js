/**
 * Module 473
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
  var n = i(226), r = i(42), o = i(14), a = i(5), s = i(17);
  i(103);
  function l() {
  }
  l.RENDERMETHOD = {
    DIRECT: 0,
    BYTES: 1
  }, l.prototype.renderMethod = l.RENDERMETHOD.DIRECT, l.prototype.currentGL = null, l.prototype.texture = null, l.prototype.spareTexture = null, l.prototype.flippedShader = null, l.prototype.shaderInstance = null, l.prototype.backupShaderData = null, l.prototype.width = 0, l.prototype.height = 0;
  var h = void 0;
  l.prototype.draw = function (e, t, i) {
    this.isInitialized() && e.width == this.width && e.height == this.height || this._initialize.call(this, t || e.width, i || e.height), e.use();
    var n = this.width, o = this.height;
    return this.texture.drawTo(function () {
      r.getDefaultShader().drawRect(void 0, void 0, void 0, void 0, [
        0,
        0,
        n,
        o
      ]);
    }), this;
  }, l.prototype._destroy = function () {
    this.shaderInstance && this.shaderInstance.destroy(), this.texture && this.texture.destroy(), this.spareTexture && this.spareTexture.destroy(), this.extraTexture && this.extraTexture.destroy(), this.flippedShader && this.flippedShader.destroy(), this.shaderInstance = this.texture = this.spareTexture = this.extraTexture = this.flippedShader = null;
  }, l.prototype.isInitialized = function () {
    return !!this.texture && this.texture.isInitialized();
  }, l.prototype._initialize = function (e, t) {
    this.texture && this.texture.destroy(), this.spareTexture && this.spareTexture.destroy();
    var i = n.getGLContext();
    this.width = e, this.height = t, this.texture = n.createTexture(e, t, i.RGBA), this.spareTexture = n.createTexture(e, t, i.RGBA), this.extraTexture && this.extraTexture.isInitialized() || (this.extraTexture = n.createTexture(0, 0, i.RGBA)), this.flippedShader = this.flippedShader || new r(this, null, "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));        }    ");
  }, l.prototype.getShaderClass = function () {
    throw new Error("Not implemented");
  }, l.prototype.isAffectedByGLBug = function () {
    return this._isAffectedByGLBug;
  }, l.prototype._isAffectedByGLBug = !1, l.prototype.update = function () {
    return this.texture.use(), this.flippedShader.drawRect(void 0, void 0, void 0, void 0, [
      0,
      0,
      this.width,
      this.height
    ]), this;
  }, l.prototype.readPixels = function (e, t, i, r, o, a) {
    var s = o || this.texture.width, l = a || this.texture.height, h = n.getGLContext();
    return this.texture.drawTo(function () {
      h.readPixels(i || 0, r || 0, s, l, h.RGBA, t || h.UNSIGNED_BYTE, e);
    }), e;
  }, l.prototype.prepareShader = function () {
    var e = n.getGLContext();
    if (!e)
      return !1;
    if (this.shaderInstance && this.shaderInstance instanceof this.getShaderClass() ? this.currentGL || (this.currentGL = e) : (this.shaderInstance && this.shaderInstance.destroy(), this.shaderInstance = new (this.getShaderClass())(this), this.currentGL = e), this.currentGL !== e) {
      if (this.backupShaderData)
        if (this.backupShaderData.currentGL === e)
          for (var t in this.backupShaderData) {
            var i = this[t];
            this[t] = this.backupShaderData[t], this.backupShaderData[t] = i;
          }
        else {
          for (var t in (console.warn("third webgl type created"), this.backupShaderData))
            "function" == typeof this.backupShaderData[t].destroy && this.backupShaderData[t].destroy(), this.backupShaderData[t] = this[t];
          this.shaderInstance = this.texture = this.spareTexture = this.extraTexture = this.flippedShader = null, this.shaderInstance = new (this.getShaderClass())(this);
        }
      else
        this.backupShaderData = {
          shaderInstance: this.shaderInstance,
          texture: this.texture,
          spareTexture: this.spareTexture,
          extraTexture: this.extraTexture,
          flippedShader: this.flippedShader,
          currentGL: this.currentGL,
          width: this.width,
          height: this.height
        }, this.texture = this.spareTexture = this.extraTexture = this.flippedShader = null, this.shaderInstance = new (this.getShaderClass())(this);
      this.currentGL = e;
    }
    return !0;
  }, l.prototype.drawShader = function (e, t, n, A, c, p, u, d) {
    var g = {
      properties: t,
      scale: n,
      shader: this.shaderInstance
    };
    if (!e) {
      if (A <= 0 || c <= 0)
        return null;
      (e = new o()).resize(Math.round(A), Math.round(c)), e.prepare(), e.setOrigin(new a(0, 0)), e.setOffset(new a(0, 0));
    }
    if (this.isAffectedByGLBug()) {
      if (void 0 === h) {
        if ("undefined" != typeof navigator && navigator && 0 == navigator.userAgent.indexOf("Mozilla") && 0 == navigator.platform.indexOf("Linux") && navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf("Safari") < 0 && (h = !0, console.warn("Firefox on Linux has problems using fast webgl render method. Slower method will be used")), !h) {
          (_ = new o(!1, !0)).resize(16, 16), _.prepare(), _.setOffset(new a(0, 0)), _.setOrigin(new a(0, 0)), _.strokeRect(0, 0, 16, 16, 4, s.RED);
          var f = new o(!1, !0);
          f.resize(16, 16), f.prepare(), f.setOffset(new a(0, 0)), f.setOrigin(new a(0, 0));
          var m = new (i(282))();
          if (!m.prepareShader())
            return h = !1, null;
          var y = {
            properties: { radius: 1 },
            scale: 1,
            shader: m.shaderInstance
          };
          r.apply(f, 16, 16, y, null, !1, u, d), _.drawCanvas(f), 255 === (v = _.getBitmap().getPixelValue(0, 0))[1] || 255 === v[2] ? (h = !0, console.warn("This browser has a WebGL drawing bug. Some effects will be rendered with slower method.")) : h = !1;
        }
        if (!h && "undefined" != typeof document) {
          var _;
          (_ = new o(!1, !0)).resize(128, 128), _.prepare(), _.setOffset(new a(0, 0)), _.setOrigin(new a(0, 0)), _.fillRect(0, 0, 128, 128, s.BLACK);
          var v, b = document.createElement("canvas"), C = b.getContext("webgl", {
              premultipliedAlpha: !1,
              alpha: !0
            });
          if (b.width = 16, b.height = 16, C.clearColor(1, 0, 0, 0), C.clear(C.COLOR_BUFFER_BIT), _.drawImage(b, 0, 0), 0 !== (v = _.getBitmap().getPixelValue(0, 0))[0] || 255 !== v[3] ? (h = !0, console.warn("This browser has a WebGL bug with transparency. Most effects will be rendered with slower method.")) : h = !1, !1 === h)
            C.clearColor(1, 0, 0, 0.1), C.clear(C.COLOR_BUFFER_BIT), _.drawImage(b, 0, 0), 255 === (v = _.getBitmap().getPixelValue(0, 0))[0] && 255 === v[3] ? (h = !0, console.warn("This browser has a WebGL bug with transparency. Most effects will be rendered with slower method.")) : h = !1;
        }
      }
      h && (this.renderMethod = l.RENDERMETHOD.BYTES);
    }
    return this.renderMethod === l.RENDERMETHOD.BYTES ? e.getBitmap().modifyPixels(r.apply, g, null, !1) : r.apply(e, A || e.getWidth(), c || e.getHeight(), g, p, u, d);
  }, l.prototype.toString = function () {
    return "[Object GWebGLRenderer]";
  }, e.exports = l;
}
