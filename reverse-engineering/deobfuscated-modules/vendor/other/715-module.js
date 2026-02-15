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

function (exports, module, require) {
  "use strict";
  var n = require(89) /* module */, r = require(115) /* module */;
  module.parse = function (e, t, i, r, o) {
    for (var a, s, l = new n.Parser(e, t), h = 0; h < r; h += 1) {
      h < i && (a = l.parseUShort(), s = l.parseShort());
      var A = o.get(h);
      A.advanceWidth = a, A.leftSideBearing = s;
    }
  }, module.make = function (e) {
    for (var module = new r.Table("hmtx", []), require = 0; require < e.length; require += 1) {
      var n = e.get(require), o = n.advanceWidth || 0, a = n.leftSideBearing || 0;
      module.fields.push({
        name: "advanceWidth_" + require,
        type: "USHORT",
        value: o
      }), module.fields.push({
        name: "leftSideBearing_" + require,
        type: "SHORT",
        value: a
      });
    }
    return module;
  };
}
