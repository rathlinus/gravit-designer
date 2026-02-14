/**
 * Module 1465
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
  var n = i(147), r = i(7), o = i(5), a = i(6), s = i(158), l = i(801);
  function h(e, t) {
    this.canvas = e, this._svg = "", this._svgs = [], this._svgStyles = [], this._saveRestoreStack = [], this.globalCompositeOperation = "source-over", this._origin = new o(0, 0), this._scale = 1, this._options = t || {};
  }
  h.prototype._options = null, h.prototype._duplicateLastPath = function () {
    this._svgs.length > 0 && (this._svg = this._svgs[this._svgs.length - 1], this._push());
  }, h.prototype._push = function () {
    "" != this._svg && (this._svgs.push(this._svg), this._pushStyles(this._svgStyles), this._svg = "");
  }, h.prototype._pushStyles = function (e) {
    e.push({
      _isStroke: this._isStroke,
      _isClear: this._isClear,
      _fillRule: this._fillRule,
      _transform: this._transform,
      _dashArray: this._dashArray,
      _dc_globalAlpha: this._dc_globalAlpha,
      _dc_globalCompositeOperation: this._dc_globalCompositeOperation,
      fillStyle: this.fillStyle,
      lineWidth: this.lineWidth,
      strokeStyle: this.strokeStyle,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      miterLimit: this.miterLimit,
      globalAlpha: this.globalAlpha,
      globalCompositeOperation: this.globalCompositeOperation
    });
  }, h.prototype._popStyles = function (e) {
    var t = e.pop();
    this._isStroke = t._isStroke, this._isClear = t._isClear, this._fillRule = t._fillRule, this._transform = t._transform, this._dashArray = t._dashArray, this._dc_globalAlpha = t._dc_globalAlpha, this._dc_globalCompositeOperation = t._dc_globalCompositeOperation, this.fillStyle = t.fillStyle, this.lineWidth = t.lineWidth, this.strokeStyle = t.strokeStyle, this.lineCap = t.lineCap, this.lineJoin = t.lineJoin, this.miterLimit = t.miterLimit, this.globalAlpha = t.globalAlpha, this.globalCompositeOperation = t.globalCompositeOperation;
  }, h.prototype.moveTo = function (e, t) {
    Number.isNaN(e) || Number.isNaN(t) || (this._svg.length > 0 && (this._svg += " "), this._svg += "M " + l.formatNumber(e) + " " + l.formatNumber(t));
  }, h.prototype.lineTo = function (e, t) {
    Number.isNaN(e) || Number.isNaN(t) || (this._svg.length > 0 && (this._svg += " "), this._svg += "L " + l.formatNumber(e) + " " + l.formatNumber(t));
  }, h.prototype.quadraticCurveTo = function (e, t, i, n) {
    Number.isNaN(e) || Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(n) || (this._svg.length > 0 && (this._svg += " "), this._svg += "Q " + l.formatNumber(e) + " " + l.formatNumber(t) + " " + l.formatNumber(i) + " " + l.formatNumber(n));
  }, h.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    Number.isNaN(e) || Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(n) || Number.isNaN(r) || Number.isNaN(o) || (this._svg.length > 0 && (this._svg += " "), this._svg += "C " + l.formatNumber(e) + " " + l.formatNumber(t) + " " + l.formatNumber(i) + " " + l.formatNumber(n) + " " + l.formatNumber(r) + " " + l.formatNumber(o));
  }, h.prototype.beginPath = function () {
  }, h.prototype.closePath = function () {
    this._svg.length > 0 && (this._svg += " "), this._svg += "Z";
  }, h.prototype.stroke = function () {
    this._isStroke = !0, this._push();
  }, h.prototype.fill = function (e) {
    this._isStroke = !1, this._fillRule = e, this._push();
  }, h.prototype.clearRect = function (e, t, i, n) {
    0;
  }, h.prototype.fillRect = function (e, t, i, n) {
    var r = this._svg;
    if (this._svg = "", this.getTransform) {
      var o = new a(e, t, i, n);
      e = (o = this.canvas._transform.mapRect(o)).getX(), t = o.getY(), i = o.getWidth(), n = o.getHeight();
    }
    this.beginPath(), this.moveTo(e, t), this.lineTo(e + i, t), this.lineTo(e + i, t + n), this.lineTo(e, t + n), this.lineTo(e, t), this.closePath(), this.fill(), this._svg = r;
  }, h.prototype.createPattern = function () {
  }, h.prototype.createLinearGradient = function (e, t, i, r) {
    var o = new n();
    return o._setPosition(e, t, i, r), o.addColorStop = A, o;
  }, h.prototype.createRadialGradient = function (e, t, i, n, r, o) {
    var a = new s(null, o, e, t, n, r, null);
    return a.addColorStop = A, a;
  }, h.prototype.setTransform = function (e, t, i, n, o, a) {
    this._transform = new r(e, t, i, n, o, a);
  }, h.prototype.getTransform = function (e) {
    var t = this._transform;
    if (!e) {
      var i = this._origin.getX(), n = this._origin.getY(), o = this._scale;
      t = t.multiplied(new r().scaled(o, o).translated(-i, -n));
    }
    return t;
  }, h.prototype.drawImage = function (e, t, i) {
    if (e._canvasContext)
      if (e._canvasContext instanceof h) {
        var n = e._canvasContext;
        0 != n._svg.length || "destination-out" != n.globalCompositeOperation && "destination-in" != n.globalCompositeOperation || n._duplicateLastPath(), this._svgs.push({
          drawImage: e,
          x: t,
          y: i
        }), e._canvasContext.globalAlpha = this._dc_globalAlpha, e._canvasContext.globalCompositeOperation = this._dc_globalCompositeOperation, e._canvasContext._pushStyles(this._svgStyles);
      } else
        console.error("GSVGContext:drawImage does not accept type " + e);
  }, h.prototype.setLineDash = function (e) {
    this._dashArray = e;
  }, h.prototype.save = function () {
    this._pushStyles(this._saveRestoreStack);
  }, h.prototype.restore = function () {
    this._popStyles(this._saveRestoreStack);
  };
  var A = function (e, t) {
    this._stops2 || (this._stops2 = []), this._stops2.push({
      position: e,
      color: t
    });
  };
  e.exports = h;
}
