/**
 * Module 230
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
  var n = require(6) /* GRect */;
  function r(e, t, i, n) {
    this.l = e, this.t = t, this.w = i, this.h = n, this.r = e + i, this.b = t + n;
  }
  r.prototype.l = null, r.prototype.t = null, r.prototype.w = null, r.prototype.h = null, r.prototype.r = null, r.prototype.b = null, r.prototype.united = function (e, t) {
    var i = this.l, r = this.l;
    if (this.w < 0 ? i += this.w : r += this.w, t && i == r)
      return e;
    var o = e.l, a = e.l;
    if (e.w < 0 ? o += e.w : a += e.w, t && o == a)
      return this;
    var s = this.t, l = this.t;
    if (this.h < 0 ? s += this.h : l += this.h, t && s == l)
      return e;
    var h = e.t, A = e.t;
    if (e.h < 0 ? h += e.h : A += e.h, t && h == A)
      return this;
    var c = new n();
    return c.l = Math.min(i, o), c.t = Math.min(s, h), c.w = Math.max(r, a) - c.l, c.h = Math.max(l, A) - c.t, c.r = c.l + c.w, c.b = c.t + c.h, c;
  }, r.prototype.contains = function (e, t) {
    return e >= this.l && e < this.l + this.w && t >= this.t && t < this.t + this.h;
  }, r.prototype.stroke = function (e) {
    e.strokeRect(this.l, this.t, this.w, this.h);
  }, r.prototype.fill = function (e) {
    e.fillRect(this.l, this.t, this.w, this.h);
  }, r.prototype.isEmpty = function () {
    return this.w <= 0 || this.h <= 0 || isNaN(this.w) || isNaN(this.h);
  }, r.prototype.equals = function (e) {
    return this.l === e.l && this.t === e.t && this.w === e.w && this.h === e.h;
  }, r.prototype.center = function () {
    return {
      x: this.l + this.w / 2,
      y: this.t + this.h / 2
    };
  }, exports.exports = r;
}
