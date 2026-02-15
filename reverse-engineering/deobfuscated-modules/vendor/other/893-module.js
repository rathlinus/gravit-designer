/**
 * Module 893
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
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(132) /* GLength */, a = require(12) /* GMath */, s = require(14) /* GPaintCanvas */, l = require(644) /* module */;
  function h(e, t, i, r, o) {
    l.call(this, i), this._scene = t, this._isUnitRuler = r, this._scene.addEventListener(n.AfterPropertiesChangeEvent, this._afterPropertiesChangeEvent, this);
    var a = e === h.Orientation.Vertical ? "vertical" : e === h.Orientation.Horizontal ? "horizontal" : "";
    this._htmlElement.style.position = "absolute", this._htmlElement.style.color = "black", this._htmlElement.className = "g-ruler-widget " + a, r ? (this._createUnitRuler(o), this._updateUnitRuler(o)) : (this._orientation = e || h.Orientation.Horizontal, this._canvas = document.createElement("canvas"), this._canvas.style.position = "absolute", this._canvas.style.left = "0px", this._canvas.style.top = "0px", this._canvas.style.imageRendering = "pixelated", "pixelated" !== this._canvas.style.imageRendering && (this._canvas.style.imageRendering = "nearest-neighbor"), this._context = this._canvas.getContext("2d"), this._htmlElement.appendChild(this._canvas), this._mouseMarker = document.createElement("div"), this._mouseMarker.style.position = "absolute", this._mouseMarker.className = "mouse-marker", this._mouseMarker.style.background = "black", this._orientation === h.Orientation.Horizontal ? (this._mouseMarker.style.top = "0px", this._mouseMarker.style.height = "19px", this._mouseMarker.style.width = "1px", this._mouseMarker.style.left = "-1px") : (this._mouseMarker.style.left = "0px", this._mouseMarker.style.width = "19px", this._mouseMarker.style.height = "1px", this._mouseMarker.style.top = "-1px"), this._htmlElement.appendChild(this._mouseMarker));
  }
  r.inherit(h, l), h.Orientation = {
    Horizontal: 0,
    Vertical: 1
  }, h.prototype._scene = null, h.prototype._orientation = null, h.prototype._canvas = null, h.prototype._context = null, h.prototype._mouseMarker = null, h.prototype._offset = 0, h.prototype._scale = 1, h.prototype._isUnitRuler = null, h.prototype._verticalWidth = null, h.prototype.setMousePosition = function (e) {
    this._orientation === h.Orientation.Horizontal ? this._mouseMarker.style.left = e + "px" : this._mouseMarker.style.top = e + "px";
  }, h.prototype.updateView = function (e, t) {
    e === this._offset && t === this._scale || (this._offset = e, this._scale = t, this._paint());
  }, h.prototype.release = function () {
    this._scene.removeEventListener(n.AfterPropertiesChangeEvent, this._afterPropertiesChangeEvent, this);
  }, h.prototype.getHeight = function () {
    return this._orientation === h.Orientation.Horizontal ? 19 : l.prototype.getHeight.call(this);
  }, h.prototype.getWidth = function () {
    return this._orientation === h.Orientation.Vertical ? this._verticalWidth ? this._verticalWidth : 19 : l.prototype.getWidth.call(this);
  }, h.prototype.resize = function (e, t) {
    if (this._isUnitRuler)
      this._htmlElement.style.width = e + "px";
    else if (e !== this.getWidth() || t !== this.getHeight()) {
      l.prototype.resize.call(this, e, t);
      var require = s.getScreenDPI();
      this._orientation == h.Orientation.Horizontal && (e = window.screen.availWidth), this._canvas.width = e * require, this._canvas.height = t * require, this._canvas.style.width = e + "px", this._canvas.style.height = t + "px", this._orientation === h.Orientation.Vertical && (this._verticalWidth = e), this._paint();
    }
  }, h.prototype._paint = function () {
    if (this.isDisplayed()) {
      var exports = s.getScreenDPI(), module = this.getWidth() * exports, require = this.getHeight() * exports, n = this._context, r = window.getComputedStyle(this._htmlElement, null).getPropertyValue("color");
      n.clearRect(0, 0, module, require), n.fillStyle = r, n.strokeStyle = r, n.lineWidth = 1;
      var l = 9 * exports;
      n.font = l + "px Verdana", n.save(), this._orientation === h.Orientation.Vertical && (n.translate(module, 0), n.rotate(Math.PI / 180 * 90)), n.beginPath();
      var A = 0, c = l, p = 19 * exports / 1.5, u = this._orientation === h.Orientation.Vertical ? require : module, d = 1 / this._scale, g = new o(1, this._scene.getProperty("ut")).toPoint(), f = 1, m = 0, y = false, _ = 50 * d / g;
      if (g > 1)
        for (; 0 == Math.round(_) && f < 10 * g;)
          f *= 10, m += 1, _ *= 10, y = true;
      var v = 1;
      (_ = Math.round(_)) <= 1 ? (_ = 1, v = 0.1) : _ > 1 && _ <= 2 ? (_ = 2, v = 0.2) : _ > 2 && _ <= 5 ? (_ = 5, v = 0.5) : _ > 5 && _ <= 10 ? (_ = 10, v = 1) : _ > 10 && _ % 10 != 0 ? _ = 10 * (v = Math.round(_ / 10)) : v = Math.round(_ / 10), y && (_ /= f, v /= f);
      for (var b = -this._offset * d / g, C = Math.ceil(b / v) * v, w = Math.ceil(b / _) * _, E = (u - this._offset) * d / g, B = "", x = C, P = -9; x < E; x += v, ++P) {
        var S = Math.round(x / d * g) + this._offset;
        a.isEqualEps(x, w, 0.01 / f) && (P = Math.floor(10 * exports)), P % Math.floor(10 * exports) == 0 ? (B = a.round(x, false, y ? m : 0), A = c) : (B = "", A = p), n.moveTo(S + 0.5, 19.5 * exports), n.lineTo(S + 0.5, A + 0.5);
        var T = n.measureText(B).width;
        n.fillText(B, Math.ceil(S - T / 2), l - exports);
      }
      n.stroke(), n.restore();
    }
  }, h.prototype._afterPropertiesChangeEvent = function (e) {
    !e.temporary && e.node === this._scene && e.properties.indexOf("ut") >= 0 && (this._isUnitRuler ? this._updateUnitRuler() : this._paint());
  }, h.prototype._createUnitRuler = function (e) {
    this._htmlElement.style.width = "19px", this._htmlElement.style.height = "19px", this._htmlElement.style.display = "flex", this._htmlElement.style.justifyContent = e.rulerLeftFill ? "flex-end" : "center";
  }, h.prototype._updateUnitRuler = function (e) {
    if (!this._htmlElement.firstChild) {
      var module = document.createElement("span");
      module.style.font = "9px Verdana", module.style.alignSelf = "center", e.rulerLeftFill && (module.style.marginRight = "5px"), module.style.color = window.getComputedStyle(this._htmlElement, null).getPropertyValue("color"), this._htmlElement.appendChild(module);
    }
    this._htmlElement.firstChild.innerHTML = this._scene.getProperty("ut");
  }, h.prototype.toString = function () {
    return "[Object GRulerWidget]";
  }, exports.exports = h;
}
