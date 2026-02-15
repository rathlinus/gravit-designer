/**
 * Module 722
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
  var n = require(377) /* module */.decode, r = require(105) /* module */, o = require(89) /* module */, a = require(115) /* module */;
  module.parse = function (e, t) {
    var i = new o.Parser(e, t), a = i.parseULong();
    r.argument(1 === a, "Unsupported META table version."), i.parseULong(), i.parseULong();
    for (var s = i.parseULong(), l = {}, h = 0; h < s; h++) {
      var A = i.parseTag(), c = i.parseULong(), p = i.parseULong(), u = n.UTF8(e, t + c, p);
      l[A] = u;
    }
    return l;
  }, module.make = function (e) {
    var t = Object.keys(e).length, i = "", n = 16 + 12 * t, r = new a.Table("meta", [
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
          name: "offset",
          type: "ULONG",
          value: n
        },
        {
          name: "numTags",
          type: "ULONG",
          value: t
        }
      ]);
    for (var o in e) {
      var s = i.length;
      i += e[o], r.fields.push({
        name: "tag " + o,
        type: "TAG",
        value: o
      }), r.fields.push({
        name: "offset " + o,
        type: "ULONG",
        value: n + s
      }), r.fields.push({
        name: "length " + o,
        type: "ULONG",
        value: e[o].length
      });
    }
    return r.fields.push({
      name: "stringPool",
      type: "CHARARRAY",
      value: i
    }), r;
  };
}
