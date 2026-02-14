/**
 * Module 996
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
  "use strict";
  var n = i(105), r = i(89);
  t.parse = function (e, t) {
    var i = new r.Parser(e, t), o = i.parseUShort();
    if (0 === o)
      return function (e) {
        var t = {};
        e.skip("uShort");
        var i = e.parseUShort();
        n.argument(0 === i, "Unsupported kern sub-table version."), e.skip("uShort", 2);
        var r = e.parseUShort();
        e.skip("uShort", 3);
        for (var o = 0; o < r; o += 1) {
          var a = e.parseUShort(), s = e.parseUShort(), l = e.parseShort();
          t[a + "," + s] = l;
        }
        return t;
      }(i);
    if (1 === o)
      return function (e) {
        var t = {};
        e.skip("uShort"), e.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
        var i = 255 & e.parseUShort();
        if (e.skip("uShort"), 0 === i) {
          var n = e.parseUShort();
          e.skip("uShort", 3);
          for (var r = 0; r < n; r += 1) {
            var o = e.parseUShort(), a = e.parseUShort(), s = e.parseShort();
            t[o + "," + a] = s;
          }
        }
        return t;
      }(i);
    throw new Error("Unsupported kern table version (" + o + ").");
  };
}
