/**
 * Module 602
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
  var n = i(560), r = i(90), o = i(11), a = function () {
      this._objects = [];
    };
  i(0).inherit(a, r), a.prototype.peek = function () {
    return this._objects[this._objects.length - 1];
  }, a.prototype.forEach = function (e) {
    this._objects.forEach(e);
  }, a.prototype.add = function (e, t) {
    var i = new n(e);
    null != t ? this._objects.splice(t, 0, i) : this._objects.push(i);
  }, a.prototype.isEmpty = function () {
    return 0 === this.size();
  }, a.prototype.size = function () {
    return this._objects.length;
  }, a.prototype.write = function (e) {
    if (this._objects.length) {
      var t = this;
      o.each(this._objects, function (i, n) {
        n.isEmpty() || (n.write(e), i !== t._objects.length - 1 && e.writeln());
      });
    }
  }, e.exports = a;
}
