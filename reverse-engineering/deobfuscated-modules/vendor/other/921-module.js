/**
 * Module 921
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(267) /* module */;
  function a(e, t, i, n, o) {
    this.uuid = r.uuid(), this.type = e, this._children = [], this._parent = t, this._left = "number" == typeof i ? i : Number.MAX_VALUE, this._top = "number" == typeof n ? n : Number.MAX_VALUE, this._depth = "number" == typeof o ? o : 0;
  }
  n.inherit(a, o), a.prototype.type = null, a.prototype.uuid = null, a.prototype._depth = 0, a.prototype._children = null, a.prototype._parent = null, a.prototype._left = undefined, a.prototype._top = undefined, a.prototype.getDepth = function () {
    return this._depth;
  }, a.prototype.children = function () {
    return this._children;
  }, a.prototype.parent = function () {
    return this._parent;
  }, a.prototype.finalize = function (e, t, i) {
    var n = Number.MAX_VALUE, r = 0, o = 0, a = 0, s = 0, l = Number.MAX_VALUE, h = function (e, t) {
        var i = 0;
        return "number" == typeof e[t] ? i = e[t] : "function" == typeof e[t] && (i = e[t]()), i;
      };
    this._children.forEach(function (e) {
      n = Math.min(n, e.ordinal), r = Math.max(r, e.ordinal + e.length), o = Math.max(o, h(e, "actualWidth")), a = Math.max(a, h(e, "ascent")), s = Math.max(s, h(e, "descent")), l = Math.min(l, h(e, "baseline"));
    }), i && (o += i), Object.defineProperty(this, "ordinal", { value: n - (e || 0) }), Object.defineProperty(this, "length", { value: (t || 0) + r - n }), Object.defineProperty(this, "actualWidth", { value: o }), Object.defineProperty(this, "ascent", { value: a }), Object.defineProperty(this, "descent", { value: s }), Object.defineProperty(this, "baseline", { value: l });
  }, exports.exports = a;
}
