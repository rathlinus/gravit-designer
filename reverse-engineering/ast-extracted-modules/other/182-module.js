/**
 * Module 182
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
  var n = i(11), r = i(560), o = i(90), a = i(0), s = function (e) {
      this.array = [], e && this.push(e);
    };
  a.inherit(s, o), s.prototype.get = function (e) {
    return this.array[e || 0];
  }, s.prototype.push = function (e) {
    if (Array.isArray(e)) {
      var t = this;
      n.each(e, function (e, i) {
        t.push(i);
      });
    } else
      this.array.push(new r(e));
  }, s.prototype.equals = function (e) {
    return e instanceof s && this.size() === e.size() && this.array.every(function (t, i) {
      return t.getValue() === e.array[i].getValue();
    });
  }, s.prototype.size = function () {
    return this.array.length;
  }, s.prototype.forEach = function (e) {
    this.array.forEach(e);
  }, s.prototype.every = function (e) {
    return this.array.every(e);
  }, s.prototype.write = function (e) {
    e.write("[");
    var t = this.size();
    n.each(this.array, function (i, n) {
      n.write(e), i < t - 1 && e.writeSpace();
    }), e.write("]");
  }, e.exports = s;
}
