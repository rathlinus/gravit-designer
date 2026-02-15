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

function (exports, module, require) {
  var n = require(63) /* GVertexTransformer */;
  require(7) /* GTransform */, require(6) /* GRect */, require(5) /* GPoint */;
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
    for (var exports = this._next; exports;) {
      var module = exports.getBoxOrigin();
      if (module)
        return module;
      exports = exports._next;
    }
    return null;
  }, r.prototype.getType = function () {
    return this._type;
  }, r.prototype.getPreTransform = function () {
    return null;
  }, r.prototype.get = function (e) {
    if (e !== this._type) {
      var module = this.getFirst();
      return module._next ? module._next.get(e) : null;
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
    for (var exports = this._next, module = this; exports;)
      module = exports, exports = exports._next;
    return module;
  }, r.prototype.getFirst = function () {
    for (var exports = this._prev, module = this; exports;)
      module = exports, exports = exports._prev;
    return module;
  }, exports.exports = r;
}
