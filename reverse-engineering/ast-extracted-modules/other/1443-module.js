/**
 * Module 1443
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
  var n = i(1215), r = function () {
      this.out = [], this.position = 0;
    };
  i(0).inherit(r, n), r.prototype.getPosition = function () {
    return this.position;
  }, r.prototype._write = function (e) {
    this.position += e.toString().length, this.out.push(e);
  }, r.prototype._writeBuffer = function (e) {
    this.position += e.length || e.byteLength, this.out.push(e);
  }, r.prototype._concat = function (e) {
    this.position += e.getPosition(), this.out = this.out.concat(e.asArray());
  }, r.prototype.asArray = function () {
    return this.out;
  }, e.exports = r;
}
