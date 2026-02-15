/**
 * Module 1412
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
  var n = require(90) /* Container */, r = require(0) /* GObject */, o = require(338) /* module */, a = require(564) /* module */;
  function s(e) {
    this._width = e;
  }
  r.inherit(s, n), s.prototype._width = null, s.prototype.write = function (e) {
    e.write(o.normalizeNumber(this._width)), e.writeSpace(), e.write(a.setLineWidth);
  }, s.prototype.toString = function () {
    return "[GPDFSetLineWidthOperation]";
  }, exports.exports = s;
}
