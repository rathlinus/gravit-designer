/**
 * Module 918
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
  var n = i(654);
  function r(e, t, i, n, r, o, a, s, l, h) {
    this._lineBuffer = [], this._maxAscent = a || 0, this._maxDescent = s || 0, this._top = t, this._y = t, this._parent = r, this._ordinal = n, this._left = e, this._width = i, this._noWrap = l, this._includeTerminator = o, this._spacingPadding = h, this._lineWidth = e;
  }
  r.prototype._lineBuffer = null, r.prototype._lineWidth = 0, r.prototype._maxAscent = 0, r.prototype._maxDescent = 0, r.prototype._quit = !1, r.prototype._lastNewLineHeight = 0, r.prototype._tempLastAscent = 0, r.prototype._tempLastDescent = 0, r.prototype._y = 0, r.prototype._top = 0, r.prototype._consumer = null, r.prototype._parent = null, r.prototype._ordinal = 0, r.prototype._width = 0, r.prototype._noWrap = !1, r.prototype._left = 0, r.prototype._includeTerminator = void 0, r.prototype._lastInputWord = null, r.prototype._lastParagraphSpacing = 0, r.prototype._store = function (e, t, i) {
    if (this._lineBuffer.push(e), this._lineWidth += e.width, e.eof ? (this._maxAscent = Math.max(this._maxAscent, this._tempLastAscent || e.ascent), this._maxDescent = Math.max(this._maxDescent, this._tempLastDescent || e.descent)) : (this._maxAscent = Math.max(this._maxAscent, e.ascent), this._maxDescent = Math.max(this._maxDescent, e.descent)), this._tempLastAscent = e.ascent, this._tempLastDescent = e.descent, e.isNewLine()) {
      var n = this._lineBuffer[0].lineSpacing(), r = this._lineBuffer[0].paragraphSpacing();
      this._send(t, i), "number" == typeof n ? e.eof ? this._lastNewLineHeight = (this._tempLastAscent + this._tempLastDescent) * n : this._lastNewLineHeight = (e.ascent + e.descent) * n : this._lastNewLineHeight = parseFloat(n), r && !e.isSoftBreak() && ("number" == typeof r ? e.eof ? this._y += (this._tempLastAscent + this._tempLastDescent) * r : this._y += (e.ascent + e.descent) * r : this._y += Math.max(parseFloat(r), 0));
    }
  }, r.prototype._send = function (e, t, i) {
    if (!this._quit && 0 !== this._lineBuffer.length) {
      if (1 === this._lineBuffer.length)
        if (this._lineBuffer[0].eof) {
          var r = this._lastInputWord && this._lastInputWord.code();
          r && r.eof && (this._maxAscent = this._maxDescent = 0, this._y -= this._lastParagraphSpacing || 0);
        }
      var o, a = new n(this._parent, this._left, this._width, this._y + this._maxAscent, this._maxAscent, this._maxDescent, this._lineBuffer, this._ordinal, !this._noWrap, t, !!i);
      this._ordinal += a.length, this._quit = e(a), "number" == typeof a.lineSpacing ? (o = this._maxAscent + this._maxDescent, o *= a.lineSpacing) : o = parseFloat(a.lineSpacing), this._y += o, this._lineBuffer.length = 0, this._maxAscent = this._maxDescent = 0, this._lineWidth = this._left;
    }
  }, r.prototype.wrap = function (e, t, i) {
    if (this._consumer) {
      this._lastNewLineHeight = 0;
      var n = this._consumer(t);
      if (n) {
        this._consumer = null, this._ordinal += n.length, this._y += n.bounds().h;
        var r = t.paragraphSpacing();
        this._lastParagraphSpacing = "number" == typeof r ? (this._tempLastAscent + this._tempLastDescent) * r : Math.max(parseFloat(r), 0), this._y += this._lastParagraphSpacing, Object.defineProperty(n, "block", { value: !0 }), e(n);
      }
    } else {
      var o = t.code();
      if (o && o.block) {
        if (this._lineBuffer.length) {
          this._send(e, i);
          r = t.paragraphSpacing();
          this._y += "number" == typeof r ? (this._tempLastAscent + this._tempLastDescent) * r : Math.max(parseFloat(r), 0);
        } else
          this._y += this._lastNewLineHeight;
        this._consumer = o.block(this._left, this._y, this._width, this._ordinal, this._parent, t.codeFormatting(), this._noWrap), this._lastNewLineHeight = 0;
      } else if (o && o.eof || t.eof)
        (!o || this._includeTerminator && this._includeTerminator(o)) && this._store(t, e, i), this._lineBuffer.length ? (this._send(e, i, !!o && !!o.eof), e(this._y - this._top)) : e(this._y + this._lastNewLineHeight - this._top), this._quit = !0;
      else if (this._lastNewLineHeight = 0, this._lineBuffer.length) {
        var a = t.paragraphIndent() || 0;
        !this._noWrap && this._lineWidth + t.text.width + a > this._width + (i || 0) && this._send(e, i), this._store(t, e, i);
      } else
        this._store(t, e, i);
    }
    return this._lastInputWord = t, this._quit;
  }, e.exports = r;
}
