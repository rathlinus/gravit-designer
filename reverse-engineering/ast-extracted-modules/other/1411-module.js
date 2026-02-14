/**
 * Module 1411
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
  var n = i(90), r = i(0), o = i(564);
  function a(e) {
    this._array = e;
  }
  r.inherit(a, n), a.prototype.write = function (e) {
    this._array.write(e), e.writeln(o.TJ);
  }, a.prototype.toString = function () {
    return "[Object GPDFShowText]";
  }, e.exports = a;
}
