/**
 * Module 650
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
  var n = i(63);
  i(7), i(6), i(5);
  function r(e) {
    this._tlCore = e;
  }
  r.prototype._tlCore = null, r.prototype._type = null, r.prototype._next = null, r.prototype._prev = null, r.prototype.transform = function (e, t, i, r, o) {
    var a = this.getMatrix(t, i, r, o);
    return a ? new n(e, a) : e;
  }, r.prototype.inverseTransform = function (e, t) {
    return this.getLast()._inverseTransform(e, t);
  }, r.prototype._inverseTransform = function (e, t) {
    return this._prev ? this._prev._inverseTransform(e, t) : e;
  }, r.prototype.getMatrix = function (e, t, i, n, r) {
    return this._next ? this._next.getMatrix(e, t, i, n, r) : r || null;
  }, r.prototype.getBoxOrigin = function () {
    for (var e = this._next; e;) {
      var t = e.getBoxOrigin();
      if (t)
        return t;
      e = e._next;
    }
    return null;
  }, r.prototype.getType = function () {
    return this._type;
  }, r.prototype.getPreTransform = function () {
    return null;
  }, r.prototype.get = function (e) {
    if (e !== this._type) {
      var t = this.getFirst();
      return t._next ? t._next.get(e) : null;
    }
    return this;
  }, r.prototype.append = function (e) {
    var t = this._next;
    return this._next = e, e._prev = this, e._next = t, t && (t._prev = e), this;
  }, r.prototype.prepend = function (e) {
    var t = this._prev;
    return t && (t._next = e), e._prev = t, this._prev = e, e._next = this, this;
  }, r.prototype.remove = function () {
    return this._next && (this._next._prev = this._prev), this._prev && (this._prev._next = this._next), this._next || this._prev;
  }, r.prototype.getLast = function () {
    for (var e = this._next, t = this; e;)
      t = e, e = e._next;
    return t;
  }, r.prototype.getFirst = function () {
    for (var e = this._prev, t = this; e;)
      t = e, e = e._prev;
    return t;
  }, e.exports = r;
}
