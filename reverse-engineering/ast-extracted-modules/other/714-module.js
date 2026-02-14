/**
 * Module 714
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
  t.parse = function (e, t) {
    var i = {}, r = new n.Parser(e, t);
    return i.version = r.parseVersion(), i.ascender = r.parseShort(), i.descender = r.parseShort(), i.lineGap = r.parseShort(), i.advanceWidthMax = r.parseUShort(), i.minLeftSideBearing = r.parseShort(), i.minRightSideBearing = r.parseShort(), i.xMaxExtent = r.parseShort(), i.caretSlopeRise = r.parseShort(), i.caretSlopeRun = r.parseShort(), i.caretOffset = r.parseShort(), r.relativeOffset += 8, i.metricDataFormat = r.parseShort(), i.numberOfHMetrics = r.parseUShort(), i;
  }, t.make = function (e) {
    return new r.Table("hhea", [
      {
        name: "version",
        type: "FIXED",
        value: 65536
      },
      {
        name: "ascender",
        type: "FWORD",
        value: 0
      },
      {
        name: "descender",
        type: "FWORD",
        value: 0
      },
      {
        name: "lineGap",
        type: "FWORD",
        value: 0
      },
      {
        name: "advanceWidthMax",
        type: "UFWORD",
        value: 0
      },
      {
        name: "minLeftSideBearing",
        type: "FWORD",
        value: 0
      },
      {
        name: "minRightSideBearing",
        type: "FWORD",
        value: 0
      },
      {
        name: "xMaxExtent",
        type: "FWORD",
        value: 0
      },
      {
        name: "caretSlopeRise",
        type: "SHORT",
        value: 1
      },
      {
        name: "caretSlopeRun",
        type: "SHORT",
        value: 0
      },
      {
        name: "caretOffset",
        type: "SHORT",
        value: 0
      },
      {
        name: "reserved1",
        type: "SHORT",
        value: 0
      },
      {
        name: "reserved2",
        type: "SHORT",
        value: 0
      },
      {
        name: "reserved3",
        type: "SHORT",
        value: 0
      },
      {
        name: "reserved4",
        type: "SHORT",
        value: 0
      },
      {
        name: "metricDataFormat",
        type: "SHORT",
        value: 0
      },
      {
        name: "numberOfHMetrics",
        type: "USHORT",
        value: 0
      }
    ], e);
  };
}
