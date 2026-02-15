/**
 * Module 997
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
  var n = i(89);
  t.parse = function (e, t, i, r) {
    for (var o = new n.Parser(e, t), a = r ? o.parseUShort : o.parseULong, s = [], l = 0; l < i + 1; l += 1) {
      var h = a.call(o);
      r && (h *= 2), s.push(h);
    }
    return s;
  };
}
