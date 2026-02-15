/**
 * Module 510
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
  var n = i(195), r = i(508);
  function o(e, t) {
    var i, a, s, l, h;
    if ("string" == typeof e.text ? (1 === e.text.length && ("\n" === e.text[0] || e.text[0] === n.LS ? (a = !0, h = e.text[0] === n.LS) : a = !1, s = " " === e.text[0]), i = o.DoMeasure ? n.measure(a ? n.NBSP : e.text, e) : new r()) : i = (l = t(e.text) || o.DefaultInline).measure ? l.measure(e) : new r(), !i)
      throw new Error("Measurement failed.");
    this.run = e, this.isNewLine = a, this.isSoftBreak = h, this.width = a ? 0 : i.width, s && "number" == typeof e.wordSpacing && (this.width += e.wordSpacing), this.ascent = i.ascent, this.descent = i.descent, this.minY = i.minY, this.maxY = i.maxY, this.minX = i.minX, this.maxX = i.maxX, this.lastGlyphAdvance = i.lastGlyphAdvance, this.lastGlyphWidth = i.lastGlyphWidth, l && (this.code = l);
  }
  o.prototype.run = null, o.prototype.isNewLine = !1, o.prototype.isSoftBreak = !1, o.prototype.width = 0, o.prototype.ascent = 0, o.prototype.descent = 0, o.prototype.minY = 0, o.prototype.maxY = 0, o.prototype.minX = 0, o.prototype.maxX = 0, o.prototype.code = null, o.prototype.lastGlyphWidth = 0, o.prototype.lastGlyphAdvance = 0, o.prototype.draw = function (e, t, i) {
    "string" == typeof this.run.text ? n.draw(e, this.run.text, this.run, t, i, this.width, this.ascent, this.descent) : this.code && this.code.draw && (e.save(), this.code.draw(e, t, i, this.width, this.ascent, this.descent, this.run), e.restore());
  }, o.DefaultInline = function () {
  }, o.DoMeasure = !0, o.DefaultInline.measure = function (e) {
    var t = n.measure("?", e);
    return {
      width: t.width + 4,
      ascent: t.width + 2,
      descent: t.width + 2,
      minY: -t.width - 2,
      maxY: t.width + t.width + 4,
      minX: 0,
      maxX: t.width + 4
    };
  }, o.DefaultInline.draw = function (e, t, i, n, r, o) {
    e.fillStyle = "silver", e.fillRect(t, i - r, n, r + o), e.strokeRect(t, i - r, n, r + o), e.fillStyle = "black", e.fillText("?", t + 2, i);
  }, e.exports = o;
}
