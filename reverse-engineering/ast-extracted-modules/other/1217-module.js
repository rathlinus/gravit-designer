/**
 * Module 1217
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
  var n = i(182), r = i(90), o = i(338), a = function (e, t) {
      this.operator = e, this.gtransform = t;
    };
  i(0).inherit(a, r), a.prototype.write = function (e) {
    this.asArray().forEach(function (t) {
      t.write(e), e.writeSpace();
    }), e.write(this.operator);
  }, a.prototype.asArray = function () {
    var e = this.gtransform.getMatrix(), t = new n();
    return t.push(this._normalizeNumber(e[0])), t.push(this._normalizeNumber(e[1])), t.push(this._normalizeNumber(e[2])), t.push(this._normalizeNumber(e[3])), t.push(this._normalizeNumber(e[4])), t.push(this._normalizeNumber(e[5])), t;
  }, a.prototype._normalizeNumber = function (e) {
    return o.normalizeNumber(e);
  }, e.exports = a;
}
