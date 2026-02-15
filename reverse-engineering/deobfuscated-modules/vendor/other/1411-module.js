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

function (exports, module, require) {
  var n = require(90) /* Container */, r = require(0) /* GObject */, o = require(564) /* module */;
  function a(e) {
    this._array = e;
  }
  r.inherit(a, n), a.prototype.write = function (e) {
    this._array.write(e), e.writeln(o.TJ);
  }, a.prototype.toString = function () {
    return "[Object GPDFShowText]";
  }, exports.exports = a;
}
