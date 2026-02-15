/**
 * Module 713
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
  module.parse = function (e, t) {
    var i = {}, o = new r.Parser(e, t);
    return i.version = o.parseVersion(), i.fontRevision = Math.round(1000 * o.parseFixed()) / 1000, i.checkSumAdjustment = o.parseULong(), i.magicNumber = o.parseULong(), n.argument(1594834165 === i.magicNumber, "Font header has wrong magic number."), i.flags = o.parseUShort(), i.unitsPerEm = o.parseUShort(), i.created = o.parseLongDateTime(), i.modified = o.parseLongDateTime(), i.xMin = o.parseShort(), i.yMin = o.parseShort(), i.xMax = o.parseShort(), i.yMax = o.parseShort(), i.macStyle = o.parseUShort(), i.lowestRecPPEM = o.parseUShort(), i.fontDirectionHint = o.parseShort(), i.indexToLocFormat = o.parseShort(), i.glyphDataFormat = o.parseShort(), i;
  }, module.make = function (e) {
    var t = Math.round(new Date().getTime() / 1000) + 2082844800, i = t;
    return e.createdTimestamp && (i = e.createdTimestamp + 2082844800), new o.Table("head", [
      {
        name: "version",
        type: "FIXED",
        value: 65536
      },
      {
        name: "fontRevision",
        type: "FIXED",
        value: 65536
      },
      {
        name: "checkSumAdjustment",
        type: "ULONG",
        value: 0
      },
      {
        name: "magicNumber",
        type: "ULONG",
        value: 1594834165
      },
      {
        name: "flags",
        type: "USHORT",
        value: 0
      },
      {
        name: "unitsPerEm",
        type: "USHORT",
        value: 1000
      },
      {
        name: "created",
        type: "LONGDATETIME",
        value: i
      },
      {
        name: "modified",
        type: "LONGDATETIME",
        value: t
      },
      {
        name: "xMin",
        type: "SHORT",
        value: 0
      },
      {
        name: "yMin",
        type: "SHORT",
        value: 0
      },
      {
        name: "xMax",
        type: "SHORT",
        value: 0
      },
      {
        name: "yMax",
        type: "SHORT",
        value: 0
      },
      {
        name: "macStyle",
        type: "USHORT",
        value: 0
      },
      {
        name: "lowestRecPPEM",
        type: "USHORT",
        value: 0
      },
      {
        name: "fontDirectionHint",
        type: "SHORT",
        value: 2
      },
      {
        name: "indexToLocFormat",
        type: "SHORT",
        value: 0
      },
      {
        name: "glyphDataFormat",
        type: "SHORT",
        value: 0
      }
    ], e);
  };
}
