/**
 * Module 1147
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
  var n = require(602) /* module */, r = require(90) /* Container */, o = require(0) /* GObject */, a = require(1420) /* BezierCurveTo */, s = function (e) {
      this._doc = e, this._collection = new n();
    };
  o.inherit(s, r), s.prototype.peek = function () {
    return this._collection.peek().getValue();
  }, s.prototype.quadraticCurveTo = function (e, t, i, n) {
    var r, o = this.peek();
    if (o instanceof a.PointTo)
      r = o.getPoint();
    else {
      if (!(o instanceof a.BezierCurveTo))
        return this._collection.add(this._x(e) + " " + this._y(t) + " " + this._x(i) + " " + this._y(n) + " y"), void console.log("WARN: Unsupported operator: " + o);
      r = o.getPoint3();
    }
    var s = r.getX(), l = r.getY(), h = i, A = n, c = s + 2 / 3 * (e - s), p = l + 2 / 3 * (t - l), u = i + 2 / 3 * (e - i), d = n + 2 / 3 * (t - n);
    this.bezierCurveTo(c, p, u, d, h, A);
  }, s.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    this._collection.add(new a.BezierCurveTo(this._doc, e, t, i, n, r, o));
  }, s.prototype.lineTo = function (e, t) {
    this._collection.add(new a.LineTo(this._doc, e, t));
  }, s.prototype.moveTo = function (e, t) {
    this._collection.add(new a.MoveTo(this._doc, e, t));
  }, s.prototype.close = function () {
    this._collection.add("h");
  }, s.prototype.write = function (e) {
    this._collection.write(e);
  }, exports.exports = s;
}
