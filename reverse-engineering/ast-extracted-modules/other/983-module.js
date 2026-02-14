/**
 * Module 983
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
  var n = i(105), r = i(115), o = i(710), a = i(711), s = i(713), l = i(714), h = i(715), A = i(716), c = i(717), p = i(718), u = i(719), d = i(720), g = i(721), f = i(722);
  function m(e) {
    return Math.log(e) / Math.log(2) | 0;
  }
  function y(e) {
    for (; e.length % 4 != 0;)
      e.push(0);
    for (var t = 0, i = 0; i < e.length; i += 4)
      t += (e[i] << 24) + (e[i + 1] << 16) + (e[i + 2] << 8) + e[i + 3];
    return t %= Math.pow(2, 32);
  }
  function _(e, t, i, n) {
    return new r.Record("Table Record", [
      {
        name: "tag",
        type: "TAG",
        value: void 0 !== e ? e : ""
      },
      {
        name: "checkSum",
        type: "ULONG",
        value: void 0 !== t ? t : 0
      },
      {
        name: "offset",
        type: "ULONG",
        value: void 0 !== i ? i : 0
      },
      {
        name: "length",
        type: "ULONG",
        value: void 0 !== n ? n : 0
      }
    ]);
  }
  function v(e) {
    var t = new r.Table("sfnt", [
      {
        name: "version",
        type: "TAG",
        value: "OTTO"
      },
      {
        name: "numTables",
        type: "USHORT",
        value: 0
      },
      {
        name: "searchRange",
        type: "USHORT",
        value: 0
      },
      {
        name: "entrySelector",
        type: "USHORT",
        value: 0
      },
      {
        name: "rangeShift",
        type: "USHORT",
        value: 0
      }
    ]);
    t.tables = e, t.numTables = e.length;
    var i = Math.pow(2, m(t.numTables));
    t.searchRange = 16 * i, t.entrySelector = m(i), t.rangeShift = 16 * t.numTables - t.searchRange;
    for (var o = [], a = [], s = t.sizeOf() + _().sizeOf() * t.numTables; s % 4 != 0;)
      s += 1, a.push({
        name: "padding",
        type: "BYTE",
        value: 0
      });
    for (var l = 0; l < e.length; l += 1) {
      var h = e[l];
      n.argument(4 === h.tableName.length, "Table name" + h.tableName + " is invalid.");
      var A = h.sizeOf(), c = _(h.tableName, y(h.encode()), s, A);
      for (o.push({
          name: c.tag + " Table Record",
          type: "RECORD",
          value: c
        }), a.push({
          name: h.tableName + " table",
          type: "RECORD",
          value: h
        }), s += A, n.argument(!isNaN(s), "Something went wrong calculating the offset."); s % 4 != 0;)
        s += 1, a.push({
          name: "padding",
          type: "BYTE",
          value: 0
        });
    }
    return o.sort(function (e, t) {
      return e.value.tag > t.value.tag ? 1 : -1;
    }), t.fields = t.fields.concat(o), t.fields = t.fields.concat(a), t;
  }
  function b(e, t, i) {
    for (var n = 0; n < t.length; n += 1) {
      var r = e.charToGlyphIndex(t[n]);
      if (r > 0)
        return e.glyphs.get(r).getMetrics();
    }
    return i;
  }
  function C(e) {
    for (var t = 0, i = 0; i < e.length; i += 1)
      t += e[i];
    return t / e.length;
  }
  t.computeCheckSum = y, t.make = v, t.fontToTable = function (e) {
    for (var t, i = [], n = [], r = [], m = [], _ = [], w = [], E = [], B = 0, x = 0, P = 0, S = 0, T = 0, I = 0; I < e.glyphs.length; I += 1) {
      var F = e.glyphs.get(I), R = 0 | F.unicode;
      if (isNaN(F.advanceWidth))
        throw new Error("Glyph " + F.name + " (" + I + "): advanceWidth is not a number.");
      (t > R || void 0 === t) && R > 0 && (t = R), B < R && (B = R);
      var D = u.getUnicodeRange(R);
      if (D < 32)
        x |= 1 << D;
      else if (D < 64)
        P |= 1 << D - 32;
      else if (D < 96)
        S |= 1 << D - 64;
      else {
        if (!(D < 123))
          throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
        T |= 1 << D - 96;
      }
      if (".notdef" !== F.name) {
        var k = F.getMetrics();
        i.push(k.xMin), n.push(k.yMin), r.push(k.xMax), m.push(k.yMax), w.push(k.leftSideBearing), E.push(k.rightSideBearing), _.push(F.advanceWidth);
      }
    }
    var G = {
      xMin: Math.min.apply(null, i),
      yMin: Math.min.apply(null, n),
      xMax: Math.max.apply(null, r),
      yMax: Math.max.apply(null, m),
      advanceWidthMax: Math.max.apply(null, _),
      advanceWidthAvg: C(_),
      minLeftSideBearing: Math.min.apply(null, w),
      maxLeftSideBearing: Math.max.apply(null, w),
      minRightSideBearing: Math.min.apply(null, E)
    };
    G.ascender = e.ascender, G.descender = e.descender;
    var Q = s.make({
        flags: 3,
        unitsPerEm: e.unitsPerEm,
        xMin: G.xMin,
        yMin: G.yMin,
        xMax: G.xMax,
        yMax: G.yMax,
        lowestRecPPEM: 3,
        createdTimestamp: e.createdTimestamp
      }), M = l.make({
        ascender: G.ascender,
        descender: G.descender,
        advanceWidthMax: G.advanceWidthMax,
        minLeftSideBearing: G.minLeftSideBearing,
        minRightSideBearing: G.minRightSideBearing,
        xMaxExtent: G.maxLeftSideBearing + (G.xMax - G.xMin),
        numberOfHMetrics: e.glyphs.length
      }), N = c.make(e.glyphs.length), U = u.make({
        xAvgCharWidth: Math.round(G.advanceWidthAvg),
        usWeightClass: e.tables.os2.usWeightClass,
        usWidthClass: e.tables.os2.usWidthClass,
        usFirstCharIndex: t,
        usLastCharIndex: B,
        ulUnicodeRange1: x,
        ulUnicodeRange2: P,
        ulUnicodeRange3: S,
        ulUnicodeRange4: T,
        fsSelection: e.tables.os2.fsSelection,
        sTypoAscender: G.ascender,
        sTypoDescender: G.descender,
        sTypoLineGap: 0,
        usWinAscent: G.yMax,
        usWinDescent: Math.abs(G.yMin),
        ulCodePageRange1: 1,
        sxHeight: b(e, "xyvw", { yMax: Math.round(G.ascender / 2) }).yMax,
        sCapHeight: b(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", G).yMax,
        usDefaultChar: e.hasChar(" ") ? 32 : 0,
        usBreakChar: e.hasChar(" ") ? 32 : 0
      }), V = h.make(e.glyphs), O = o.make(e.glyphs), L = e.getEnglishName("fontFamily"), Y = e.getEnglishName("fontSubfamily"), X = L + " " + Y, H = e.getEnglishName("postScriptName");
    H || (H = L.replace(/\s/g, "") + "-" + Y);
    var W = {};
    for (var Z in e.names)
      W[Z] = e.names[Z];
    W.uniqueID || (W.uniqueID = { en: e.getEnglishName("manufacturer") + ":" + X }), W.postScriptName || (W.postScriptName = { en: H }), W.preferredFamily || (W.preferredFamily = e.names.fontFamily), W.preferredSubfamily || (W.preferredSubfamily = e.names.fontSubfamily);
    var z = [], j = p.make(W, z), J = z.length > 0 ? A.make(z) : void 0, q = d.make(), K = a.make(e.glyphs, {
        version: e.getEnglishName("version"),
        fullName: X,
        familyName: L,
        weightName: Y,
        postScriptName: H,
        unitsPerEm: e.unitsPerEm,
        fontBBox: [
          0,
          G.yMin,
          G.ascender,
          G.advanceWidthMax
        ]
      }), $ = e.metas && Object.keys(e.metas).length > 0 ? f.make(e.metas) : void 0, ee = [
        Q,
        M,
        N,
        U,
        j,
        O,
        q,
        K,
        V
      ];
    J && ee.push(J), e.tables.gsub && ee.push(g.make(e.tables.gsub)), $ && ee.push($);
    var te = v(ee), ie = y(te.encode()), ne = te.fields, re = !1;
    for (I = 0; I < ne.length; I += 1)
      if ("head table" === ne[I].name) {
        ne[I].value.checkSumAdjustment = 2981146554 - ie, re = !0;
        break;
      }
    if (!re)
      throw new Error("Could not find head table with checkSum to adjust.");
    return te;
  };
}
