/**
 * Module 716
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
  var n = require(105) /* module */, r = require(89) /* module */, o = require(115) /* module */;
  module.make = function (e) {
    for (var module = new o.Table("ltag", [
          {
            name: "version",
            type: "ULONG",
            value: 1
          },
          {
            name: "flags",
            type: "ULONG",
            value: 0
          },
          {
            name: "numTags",
            type: "ULONG",
            value: e.length
          }
        ]), require = "", n = 12 + 4 * e.length, r = 0; r < e.length; ++r) {
      var a = require.indexOf(e[r]);
      a < 0 && (a = require.length, require += e[r]), module.fields.push({
        name: "offset " + r,
        type: "USHORT",
        value: n + a
      }), module.fields.push({
        name: "length " + r,
        type: "USHORT",
        value: e[r].length
      });
    }
    return module.fields.push({
      name: "stringPool",
      type: "CHARARRAY",
      value: require
    }), module;
  }, module.parse = function (e, t) {
    var i = new r.Parser(e, t), o = i.parseULong();
    n.argument(1 === o, "Unsupported ltag table version."), i.skip("uLong", 1);
    for (var a = i.parseULong(), s = [], l = 0; l < a; l++) {
      for (var h = "", A = t + i.parseUShort(), c = i.parseUShort(), p = A; p < A + c; ++p)
        h += String.fromCharCode(e.getInt8(p));
      s.push(h);
    }
    return s;
  };
}
