/**
 * Module 1435
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
  var n = require(0) /* GObject */, r = require(1231) /* module */, o = require(1232) /* module */;
  function a(e, t) {
    r.call(this, e), this.put("/Type", "/Font"), this.put("/Subtype", "/Type1"), this.put("/BaseFont", "/" + t), this.put("/Encoding", "/WinAnsiEncoding"), this._encoding = o.WINANSI;
  }
  n.inherit(a, r), a.prototype._encoding = null, a.BASE_14 = [
    "Courier",
    "Courier-Bold",
    "Courier-Oblique",
    "Courier-BoldOblique",
    "Helvetica",
    "Helvetica-Bold",
    "Helvetica-Oblique",
    "Helvetica-BoldOblique",
    "Times-Roman",
    "Times-Bold",
    "Times-Italic",
    "Times-BoldItalic",
    "ZapfDingbats",
    "Symbol"
  ], a.prototype.encode = function (e) {
    return this._encoding.encode(e);
  }, a.isStandardFont = function (e) {
    return a.BASE_14.some(function (t) {
      return t === e;
    });
  }, exports.exports = a;
}
