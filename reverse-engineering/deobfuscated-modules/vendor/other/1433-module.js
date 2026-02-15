/**
 * Module 1433
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
  var n = require(0) /* GObject */, r = require(1233) /* module */, o = require(1234) /* module */, a = require(1434) /* module */, s = require(1144) /* module */;
  function l(e) {
    this._glyphMap = {}, this._openTypeFont = e;
  }
  n.inherit(l, r), l.prototype._glyphMap = null, l.prototype._openTypeFont = null, l.prototype.getGlyphs = function () {
    return Object.keys(this._glyphMap).map(function (e) {
      return this._glyphMap[e];
    }.bind(this));
  }, l.prototype.encode = function (e, t) {
    for (var require = [], n = null, r = this._openTypeFont.stringToGlyphs(e, 0, 0, 24, t || {}), l = r.length - 1, h = 0; h < l; ++h) {
      var A = r[h].glyph.index, c = a.from(this._openTypeFont._openTypeFont, A);
      c && (this._glyphMap[c.cid] || (this._glyphMap[c.cid] = c), n || (n = []), n.push(c.cid), r[h].kerning && (require.push(s.newFromBytes(o.encodeToUTF16BE(n))), require.push(-1 * r[h].kerning), n = null));
    }
    return n && require.push(s.newFromBytes(o.encodeToUTF16BE(n))), require;
  }, l.prototype.toString = function () {
    return "[GPDFIdentityEncoding]";
  }, exports.exports = l;
}
