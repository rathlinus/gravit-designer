/**
 * chunk.vendor.js Module #710
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(89),
        o = i(115);

      function a(e, t, i) {
        e.segments.push({
          end: t,
          start: t,
          delta: -(t - i),
          offset: 0,
        });
      }
      ((t.parse = function (e, t) {
        var i,
          o = {};
        ((o.version = r.getUShort(e, t)),
          n.argument(0 === o.version, "cmap table version should be 0."),
          (o.numTables = r.getUShort(e, t + 2)));
        var a = -1,
          s = -1;
        for (i = o.numTables - 1; i >= 0; i -= 1) {
          var l = r.getUShort(e, t + 4 + 8 * i),
            h = r.getUShort(e, t + 4 + 8 * i + 2);
          if (
            !((3 !== l && 1 !== l) || (0 !== h && 1 !== h && 10 !== h)) ||
            (0 === l && (0 === h || 1 === h || 2 === h || 3 === h || 4 === h))
          ) {
            a = r.getULong(e, t + 4 + 8 * i + 4);
            break;
          }
          0 === l && (s = r.getULong(e, t + 4 + 8 * i + 4));
        }
        if (-1 === a) {
          if (-1 === s) return null;
          a = s;
        }
        var A = new r.Parser(e, t + a);
        if (((o.format = A.parseUShort()), 12 === o.format))
          !(function (e, t) {
            var i, n;
            for (
              t.parseUShort(),
                e.length = t.parseULong(),
                e.language = t.parseULong(),
                e.groupCount = n = t.parseULong(),
                e.glyphIndexMap = {},
                i = 0;
              i < n;
              i += 1
            )
              for (
                var r = t.parseULong(),
                  o = t.parseULong(),
                  a = t.parseULong(),
                  s = r;
                s <= o;
                s += 1
              )
                ((e.glyphIndexMap[s] = a), a++);
          })(o, A);
        else if (4 === o.format)
          !(function (e, t, i, n, o) {
            var a, s;
            ((e.length = t.parseUShort()),
              (e.language = t.parseUShort()),
              (e.segCount = s = t.parseUShort() >> 1),
              t.skip("uShort", 3),
              (e.glyphIndexMap = {}));
            var l = new r.Parser(i, n + o + 14),
              h = new r.Parser(i, n + o + 16 + 2 * s),
              A = new r.Parser(i, n + o + 16 + 4 * s),
              c = new r.Parser(i, n + o + 16 + 6 * s),
              p = n + o + 16 + 8 * s;
            for (a = 0; a < s - 1; a += 1)
              for (
                var u,
                  d = l.parseUShort(),
                  g = h.parseUShort(),
                  f = A.parseShort(),
                  m = c.parseUShort(),
                  y = g;
                y <= d;
                y += 1
              )
                (0 !== m
                  ? ((p = c.offset + c.relativeOffset - 2),
                    (p += m),
                    (p += 2 * (y - g)),
                    0 !== (u = r.getUShort(i, p)) && (u = (u + f) & 65535))
                  : (u = (y + f) & 65535),
                  (e.glyphIndexMap[y] = u));
          })(o, A, e, t, a);
        else if (6 === o.format)
          !(function (e, t) {
            var i;
            ((e.length = t.parseUShort()), (e.language = t.parseUShort()));
            var n = t.parseUShort(),
              r = n + t.parseUShort();
            for (e.glyphIndexMap = {}, i = n; i < r; i += 1) {
              var o = t.parseUShort();
              e.glyphIndexMap[i] = o;
            }
          })(o, A);
        else if (10 === o.format)
          !(function (e, t) {
            var i;
            (t.parseUShort(),
              (e.length = t.parseULong()),
              (e.language = t.parseULong()));
            var n = t.parseULong(),
              r = n + t.parseULong();
            for (e.glyphIndexMap = {}, i = n; i < r; i += 1) {
              var o = t.parseUShort();
              e.glyphIndexMap[i] = o;
            }
          })(o, A);
        else if (13 === o.format)
          !(function (e, t) {
            var i, n;
            for (
              t.parseUShort(),
                e.length = t.parseULong(),
                e.language = t.parseULong(),
                e.groupCount = n = t.parseULong(),
                e.glyphIndexMap = {},
                i = 0;
              i < n;
              i += 1
            )
              for (
                var r = t.parseULong(),
                  o = t.parseULong(),
                  a = t.parseULong(),
                  s = r;
                s <= o;
                s += 1
              )
                e.glyphIndexMap[s] = a;
          })(o, A);
        else {
          if (0 !== o.format)
            throw new Error("Only format 4 and 12 cmap tables are supported.");
          !(function (e, t) {
            ((e.length = t.parseUShort()),
              (e.language = t.parseUShort()),
              (e.glyphIndexMap = {}));
            for (var i = 0; i < 256; i += 1) e.glyphIndexMap[i] = t.parseByte();
          })(o, A);
        }
        return o;
      }),
        (t.make = function (e) {
          var t,
            i,
            n = new o.Table("cmap", [
              {
                name: "version",
                type: "USHORT",
                value: 0,
              },
              {
                name: "numTables",
                type: "USHORT",
                value: 1,
              },
              {
                name: "platformID",
                type: "USHORT",
                value: 3,
              },
              {
                name: "encodingID",
                type: "USHORT",
                value: 1,
              },
              {
                name: "offset",
                type: "ULONG",
                value: 12,
              },
              {
                name: "format",
                type: "USHORT",
                value: 4,
              },
              {
                name: "length",
                type: "USHORT",
                value: 0,
              },
              {
                name: "language",
                type: "USHORT",
                value: 0,
              },
              {
                name: "segCountX2",
                type: "USHORT",
                value: 0,
              },
              {
                name: "searchRange",
                type: "USHORT",
                value: 0,
              },
              {
                name: "entrySelector",
                type: "USHORT",
                value: 0,
              },
              {
                name: "rangeShift",
                type: "USHORT",
                value: 0,
              },
            ]);
          for (n.segments = [], t = 0; t < e.length; t += 1) {
            for (var r = e.get(t), s = 0; s < r.unicodes.length; s += 1)
              a(n, r.unicodes[s], t);
            n.segments = n.segments.sort(function (e, t) {
              return e.start - t.start;
            });
          }
          (!(function (e) {
            e.segments.push({
              end: 65535,
              start: 65535,
              delta: 1,
              offset: 0,
            });
          })(n),
            (i = n.segments.length),
            (n.segCountX2 = 2 * i),
            (n.searchRange =
              2 * Math.pow(2, Math.floor(Math.log(i) / Math.log(2)))),
            (n.entrySelector = Math.log(n.searchRange / 2) / Math.log(2)),
            (n.rangeShift = n.segCountX2 - n.searchRange));
          var l = [],
            h = [],
            A = [],
            c = [],
            p = [];
          for (t = 0; t < i; t += 1) {
            var u = n.segments[t];
            ((l = l.concat({
              name: "end_" + t,
              type: "USHORT",
              value: u.end,
            })),
              (h = h.concat({
                name: "start_" + t,
                type: "USHORT",
                value: u.start,
              })),
              (A = A.concat({
                name: "idDelta_" + t,
                type: "SHORT",
                value: u.delta,
              })),
              (c = c.concat({
                name: "idRangeOffset_" + t,
                type: "USHORT",
                value: u.offset,
              })),
              void 0 !== u.glyphId &&
                (p = p.concat({
                  name: "glyph_" + t,
                  type: "USHORT",
                  value: u.glyphId,
                })));
          }
          return (
            (n.fields = n.fields.concat(l)),
            n.fields.push({
              name: "reservedPad",
              type: "USHORT",
              value: 0,
            }),
            (n.fields = n.fields.concat(h)),
            (n.fields = n.fields.concat(A)),
            (n.fields = n.fields.concat(c)),
            (n.fields = n.fields.concat(p)),
            (n.length =
              14 +
              2 * l.length +
              2 +
              2 * h.length +
              2 * A.length +
              2 * c.length +
              2 * p.length),
            n
          );
        }));
    }