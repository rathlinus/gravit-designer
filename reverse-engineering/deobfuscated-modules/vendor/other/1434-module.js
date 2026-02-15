/**
 * Module 1434
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

function (exports, module) {
  function i(e, t, i) {
    this.cid = e, this.width = t, this.unicode = i;
  }
  i.prototype.cid = 0, i.prototype.width = 0, i.prototype.unicode = 0, i.from = function (e, t) {
    var n = e.glyphs.get(t);
    return n ? new i(t, Math.ceil(1000 * n.advanceWidth / e.tables.head.unitsPerEm), n.unicode) : null;
  }, i.prototype.toString = function () {
    return "[GPDFGlyph]";
  }, exports.exports = i;
}
