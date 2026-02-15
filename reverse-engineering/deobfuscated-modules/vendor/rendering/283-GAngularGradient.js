/**
 * Module 283 - GAngularGradient
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
  var n = require(138) /* GGradient */, r = require(50) /* GPattern */, o = require(17) /* GRGBColor */, a = require(12) /* GMath */, s = require(364) /* module */, l = require(473) /* module */, h = require(6) /* GRect */, A = require(5) /* GPoint */, c = require(103) /* module */, p = require(14) /* GPaintCanvas */, u = require(166) /* GRendererConfig */, d = require(118) /* module */;
  function g(e, t, i, r, o, a) {
    n.call(this, e, t, i, r, a), this._scale = "number" == typeof t ? t : 0.5, this._a0 = "number" == typeof o ? o : -Math.PI;
  }
  r.inheritAndMix("A", g, n, [
    l,
    d
  ]), g.prototype._isAffectedByGLBug = true, g.equals = function (e, t, i) {
    return !(!(e instanceof g && t instanceof g) || !i && e._a0 !== t._a0) && n.equals(e, t, i);
  }, g.prototype.getShaderClass = function () {
    return s;
  }, g.prototype.asCSSBackground = function (e, t, i) {
    if (c.isDebug())
      return o.WHITE.asCSSBackground();
    if (c.isRenderPhase())
      throw new Error("Cannot get CSS background, renderer is busy.");
    var n = this.getGradient(e || 1, new h(0, 0, t || 20, i || 20));
    return n ? "url(" + n._canvasContext.canvas.toDataURL() + ")" : o.WHITE.asCSSBackground();
  }, g.prototype.clone = function () {
    return new g(this.getClonedStops(), this._scale, this._fx, this._fy, this._a0, this._transform);
  }, g.prototype.destroy = function () {
    this._destroy();
  }, g.prototype._serializeToBlob = function () {
    var e = n.prototype._serializeToBlob.call(this);
    return e && (a.isEqualEps(this._a0, 0) || (e.a0 = this._a0)), e;
  }, g.prototype.getGradient = function (e, t) {
    if (!t || t.isEmpty())
      return null;
    var i = null;
    if (this.prepareShader()) {
      (i = new p()).resize(Math.round(t.getWidth()), Math.round(t.getHeight())), i.prepare(), i.setOrigin(new A(0, 0)), i.setOffset(new A(0, 0));
      var n = this._getRGBStops();
      this.drawShader(i, {
        cx: this._fx,
        cy: this._fy,
        a0: this._a0,
        a1: this._a0 + a.PI2,
        stops: n,
        opacity: e
      }, this._scale, t.getWidth(), t.getHeight()), u.DELETE_BLEND_AND_GRADIENT_TEXTURES_AFTER_DRAW && this.destroy();
    }
    return i;
  }, g.prototype._deserializeFromBlob = function (e) {
    if (n.prototype._deserializeFromBlob.call(this, e), this._a0 = e.hasOwnProperty("a0") ? e.a0 : 0, e.hasOwnProperty("a1")) {
      for (var module = (e.a1 - this._a0) / a.PI2, require = 0; require < this._stops.length; ++require)
        this._stops[require].position *= module;
      var r = this._stops[this._stops.length - 1];
      r.position < 0.999999 && (this._stops.push({
        position: r.position + 0.000001,
        color: r.color,
        opacity: 0
      }), this._stops.push({
        position: 1,
        color: r.color,
        opacity: 0
      }));
    }
  }, g.prototype.isWebGL = function () {
    return true;
  }, g.prototype.toString = function () {
    return "[Object GAngularGradient]";
  }, g.prototype._getRGBStops = function () {
    var e = this.getClonedStops();
    return e.forEach(e => {
      e.color instanceof o || (e.color = new o(e.color.toScreen()));
    }), e;
  }, exports.exports = g;
}
