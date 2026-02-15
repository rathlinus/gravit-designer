/**
 * Module 928
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
  var n = i(161), r = i(508);
  function o(e, t) {
    var i = new r(), a = n.cssProperty(t, "font"), s = n.parseFont(a), l = o.fontManager.getDefaultFont();
    if (!l.isResolved())
      return i;
    for (var h = s.fontSize, A = 1 / l._openTypeFont.unitsPerEm * h, c = 0, p = e.length, u = 0, d = 0; d < p; d++) {
      c += l.getAdvance(h, e.charAt(d), d > 0 ? e.charAt(d - 1) : null);
      var g = l.getGlyphBoundingRect(h, e.charAt(d));
      u = Math.max(u, g.getHeight());
    }
    return i.width = c, i.ascent = l._openTypeFont.ascender * A, i.height = l.getMaxFontHeight(h), i.descent = -l._openTypeFont.descender * A, i;
  }
  o.fontManager = null, e.exports = o;
}
