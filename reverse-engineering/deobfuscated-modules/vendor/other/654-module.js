/**
 * Module 654
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
  var n = require(230) /* module */, r = require(919) /* PositionedChar */, o = require(0) /* GObject */, a = require(267) /* module */;
  function s(e, t, i, n, o, a, s, l, h, A, c) {
    var p = s[0].align();
    this.doc = e, this.left = t, this.width = i, this.baseline = n, this.ascent = o, this.descent = a, this.ordinal = l, this.align = p, this.lineSpacing = s[0].lineSpacing(), this.paragraphSpacing = s[0].paragraphSpacing(), this.paragraphIndent = s[0].paragraphIndent() || 0;
    var u = this.paragraphIndent;
    s.forEach(function (e) {
      this.minX = Math.min(e.minX + u, this.minX), this.maxX = Math.max(e.maxX + u, this.maxX), u += e.width, this.maxY = Math.max(e.maxY, this.maxY), this.minY = Math.min(e.minY, this.minY);
    }.bind(this)), u -= s[s.length - 1].space.width;
    var d = s[s.length - 2];
    d && d.text && d.text.lastGlyphWidth && d.text.lastGlyphAdvance && d.text.lastGlyphWidth > d.text.lastGlyphAdvance && Object.defineProperty(this, "rightPadding", { value: d.text.lastGlyphWidth - d.text.lastGlyphAdvance });
    var g = this.getLastValidCharSpacing(s);
    A && !h || (A = 0);
    var f = this.paragraphIndent, m = 0;
    if (u - g < i)
      switch (p) {
      case "right":
        f = i - u - A + g + this.paragraphIndent - t;
        break;
      case "center":
        f = (i - u + g - A) / 2 + this.paragraphIndent - t;
        break;
      case "justify":
        s.length > 1 && !s[s.length - 1].isNewLine() && !c && (m = (i - u - t + g - A) / (s.length - 1));
      }
    this.minX !== Number.MAX_VALUE && (this.minX += f), this.maxX !== -Number.MAX_VALUE && (this.maxX += f), Object.defineProperty(this, "positionedWords", {
      value: s.map(function (e) {
        var t = f;
        f += e.width + m;
        var i = l;
        return l += e.text.length + e.space.length, new r(e, this, t, i, e.width + m);
      }.bind(this))
    }), Object.defineProperty(this, "actualWidth", { value: u }), Object.defineProperty(this, "length", { value: l - this.ordinal });
  }
  o.inherit(s, a), s.prototype.bounds = function (e, t) {
    if (e)
      return a.prototype.bounds.call(this, e);
    if (t) {
      var require = this.first().bounds(), r = this.last().bounds();
      return new n(require.l, this.baseline - this.ascent, r.l + r.w - require.l, this.ascent + this.descent);
    }
    return new n(this.left, this.baseline - this.ascent, this.width, this.ascent + this.descent);
  }, s.prototype.parent = function () {
    return this.doc;
  }, s.prototype.children = function () {
    return this.positionedWords;
  }, s.prototype.getLastValidCharSpacing = function (e) {
    var t = null;
    e || (e = [], (this.children() || []).forEach(function (t) {
      e.push(t.word);
    })), e.forEach(function (e) {
      "\n" !== e.text.plainText && (t = e);
    });
    var i = 0;
    if (t) {
      var n = t.text.parts;
      n.length && (i = n[n.length - 1].run.charSpacing || 0);
    }
    return i;
  }, s.prototype.isEOF = function () {
    if (this.positionedWords && 1 === this.positionedWords.length) {
      var exports = this.positionedWords[0];
      return !!exports && !!exports.word && !!exports.word.eof;
    }
    return false;
  }, s.prototype.type = "line", s.prototype.doc = null, s.prototype.left = null, s.prototype.width = NaN, s.prototype.baseline = 0, s.prototype.ascent = 0, s.prototype.descent = 0, s.prototype.minY = Number.MAX_VALUE, s.prototype.maxY = -Number.MAX_VALUE, s.prototype.minX = Number.MAX_VALUE, s.prototype.maxX = -Number.MAX_VALUE, s.prototype.ordinal = 0, s.prototype.align = null, s.prototype.lineSpacing = 1, s.prototype.paragraphSpacing = "0", s.prototype.paragraphIndent = 0, exports.exports = s;
}
