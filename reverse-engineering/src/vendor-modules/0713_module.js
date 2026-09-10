/**
 * chunk.vendor.js Module #713
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(89),
        o = i(115);
      ((t.parse = function (e, t) {
        var i = {},
          o = new r.Parser(e, t);
        return (
          (i.version = o.parseVersion()),
          (i.fontRevision = Math.round(1e3 * o.parseFixed()) / 1e3),
          (i.checkSumAdjustment = o.parseULong()),
          (i.magicNumber = o.parseULong()),
          n.argument(
            1594834165 === i.magicNumber,
            "Font header has wrong magic number.",
          ),
          (i.flags = o.parseUShort()),
          (i.unitsPerEm = o.parseUShort()),
          (i.created = o.parseLongDateTime()),
          (i.modified = o.parseLongDateTime()),
          (i.xMin = o.parseShort()),
          (i.yMin = o.parseShort()),
          (i.xMax = o.parseShort()),
          (i.yMax = o.parseShort()),
          (i.macStyle = o.parseUShort()),
          (i.lowestRecPPEM = o.parseUShort()),
          (i.fontDirectionHint = o.parseShort()),
          (i.indexToLocFormat = o.parseShort()),
          (i.glyphDataFormat = o.parseShort()),
          i
        );
      }),
        (t.make = function (e) {
          var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
            i = t;
          return (
            e.createdTimestamp && (i = e.createdTimestamp + 2082844800),
            new o.Table(
              "head",
              [
                {
                  name: "version",
                  type: "FIXED",
                  value: 65536,
                },
                {
                  name: "fontRevision",
                  type: "FIXED",
                  value: 65536,
                },
                {
                  name: "checkSumAdjustment",
                  type: "ULONG",
                  value: 0,
                },
                {
                  name: "magicNumber",
                  type: "ULONG",
                  value: 1594834165,
                },
                {
                  name: "flags",
                  type: "USHORT",
                  value: 0,
                },
                {
                  name: "unitsPerEm",
                  type: "USHORT",
                  value: 1e3,
                },
                {
                  name: "created",
                  type: "LONGDATETIME",
                  value: i,
                },
                {
                  name: "modified",
                  type: "LONGDATETIME",
                  value: t,
                },
                {
                  name: "xMin",
                  type: "SHORT",
                  value: 0,
                },
                {
                  name: "yMin",
                  type: "SHORT",
                  value: 0,
                },
                {
                  name: "xMax",
                  type: "SHORT",
                  value: 0,
                },
                {
                  name: "yMax",
                  type: "SHORT",
                  value: 0,
                },
                {
                  name: "macStyle",
                  type: "USHORT",
                  value: 0,
                },
                {
                  name: "lowestRecPPEM",
                  type: "USHORT",
                  value: 0,
                },
                {
                  name: "fontDirectionHint",
                  type: "SHORT",
                  value: 2,
                },
                {
                  name: "indexToLocFormat",
                  type: "SHORT",
                  value: 0,
                },
                {
                  name: "glyphDataFormat",
                  type: "SHORT",
                  value: 0,
                },
              ],
              e,
            )
          );
        }));
    }