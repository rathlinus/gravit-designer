/**
 * Module 922
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
  var n = require(195) /* module */;
  exports.exports = function (e) {
    e.String = function (e, t) {
      this.value = t, this.obj = e;
    }, e.String.prototype.value = null, e.String.prototype.obj = null, e.String.prototype.measure = function (e) {
      return n.measure(this.value, e);
    }, e.String.prototype.draw = function (e, t, i, r, o, a, s) {
      n.draw(e, this.value, s, t, i, r, o, a);
    };
  };
}
