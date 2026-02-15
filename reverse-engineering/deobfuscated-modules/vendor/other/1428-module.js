/**
 * Module 1428
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
  var n = require(1429) /* module */, r = require(391) /* module */, o = require(1430) /* module */, a = require(1431) /* module */, s = require(1435) /* module */;
  function l() {
    throw new Error("This class cannot be instantiated");
  }
  l.createFont = function (e, t, i) {
    var l;
    if (s.isStandardFont(t.getFamily()))
      l = new s(i, t.getFamily());
    else {
      var h = null;
      if (!t._openTypeFont.isCIDFont) {
        var A = new o(t._buffer, e.isCompress()), c = e.getIndirectObject(A);
        h = new r(c), e.addIndirectObject(c);
      }
      var p = e.getIndirectObject(new n(t, h));
      e.addIndirectObject(p), l = new a(i, new r(p), e);
    }
    var u = e.getIndirectObject(l);
    return e.addIndirectObject(u), u;
  }, exports.exports = l;
}
