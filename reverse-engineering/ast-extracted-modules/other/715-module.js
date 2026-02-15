/**
 * Module 715
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
  var n = i(89), r = i(115);
  t.parse = function (e, t, i, r, o) {
    for (var a, s, l = new n.Parser(e, t), h = 0; h < r; h += 1) {
      h < i && (a = l.parseUShort(), s = l.parseShort());
      var A = o.get(h);
      A.advanceWidth = a, A.leftSideBearing = s;
    }
  }, t.make = function (e) {
    for (var t = new r.Table("hmtx", []), i = 0; i < e.length; i += 1) {
      var n = e.get(i), o = n.advanceWidth || 0, a = n.leftSideBearing || 0;
      t.fields.push({
        name: "advanceWidth_" + i,
        type: "USHORT",
        value: o
      }), t.fields.push({
        name: "leftSideBearing_" + i,
        type: "SHORT",
        value: a
      });
    }
    return t;
  };
}
