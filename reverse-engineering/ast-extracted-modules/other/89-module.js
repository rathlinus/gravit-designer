/**
 * Module 89
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
  var n = i(105);
  function r(e, t) {
    return e.getUint16(t, !1);
  }
  t.getByte = function (e, t) {
    return e.getUint8(t);
  }, t.getCard8 = t.getByte, t.getUShort = t.getCard16 = r, t.getShort = function (e, t) {
    return e.getInt16(t, !1);
  }, t.getULong = function (e, t) {
    return e.getUint32(t, !1);
  }, t.getFixed = function (e, t) {
    return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
  }, t.getTag = function (e, t) {
    for (var i = "", n = t; n < t + 4; n += 1)
      i += String.fromCharCode(e.getInt8(n));
    return i;
  }, t.getOffset = function (e, t, i) {
    for (var n = 0, r = 0; r < i; r += 1)
      n <<= 8, n += e.getUint8(t + r);
    return n;
  }, t.getBytes = function (e, t, i) {
    for (var n = [], r = t; r < i; r += 1)
      n.push(e.getUint8(r));
    return n;
  }, t.bytesToString = function (e) {
    for (var t = "", i = 0; i < e.length; i += 1)
      t += String.fromCharCode(e[i]);
    return t;
  };
  var o = {
    byte: 1,
    uShort: 2,
    short: 2,
    uLong: 4,
    fixed: 4,
    longDateTime: 8,
    tag: 4
  };
  function a(e, t) {
    this.data = e, this.offset = t, this.relativeOffset = 0;
  }
  a.prototype.parseByte = function () {
    var e = this.data.getUint8(this.offset + this.relativeOffset);
    return this.relativeOffset += 1, e;
  }, a.prototype.parseChar = function () {
    var e = this.data.getInt8(this.offset + this.relativeOffset);
    return this.relativeOffset += 1, e;
  }, a.prototype.parseCard8 = a.prototype.parseByte, a.prototype.parseUShort = function () {
    var e = this.data.getUint16(this.offset + this.relativeOffset);
    return this.relativeOffset += 2, e;
  }, a.prototype.parseCard16 = a.prototype.parseUShort, a.prototype.parseSID = a.prototype.parseUShort, a.prototype.parseOffset16 = a.prototype.parseUShort, a.prototype.parseShort = function () {
    var e = this.data.getInt16(this.offset + this.relativeOffset);
    return this.relativeOffset += 2, e;
  }, a.prototype.parseF2Dot14 = function () {
    var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
    return this.relativeOffset += 2, e;
  }, a.prototype.parseULong = function () {
    var e = t.getULong(this.data, this.offset + this.relativeOffset);
    return this.relativeOffset += 4, e;
  }, a.prototype.parseULongList = function (e) {
    void 0 === e && (e = this.parseULong());
    for (var t = new Array(e), i = this.data, n = this.offset + this.relativeOffset, r = 0; r < e; r++)
      t[r] = i.getUint32(n), n += 4;
    return this.relativeOffset += 4 * e, t;
  }, a.prototype.parseOffset32 = a.prototype.parseULong, a.prototype.parseFixed = function () {
    var e = t.getFixed(this.data, this.offset + this.relativeOffset);
    return this.relativeOffset += 4, e;
  }, a.prototype.parseString = function (e) {
    var t = this.data, i = this.offset + this.relativeOffset, n = "";
    this.relativeOffset += e;
    for (var r = 0; r < e; r++)
      n += String.fromCharCode(t.getUint8(i + r));
    return n;
  }, a.prototype.parseTag = function () {
    return this.parseString(4);
  }, a.prototype.parseLongDateTime = function () {
    var e = t.getULong(this.data, this.offset + this.relativeOffset + 4);
    return e -= 2082844800, this.relativeOffset += 8, e;
  }, a.prototype.parseVersion = function (e) {
    var t = r(this.data, this.offset + this.relativeOffset), i = r(this.data, this.offset + this.relativeOffset + 2);
    return this.relativeOffset += 4, void 0 === e && (e = 4096), t + i / e / 10;
  }, a.prototype.skip = function (e, t) {
    void 0 === t && (t = 1), this.relativeOffset += o[e] * t;
  }, a.prototype.parseOffset16List = a.prototype.parseUShortList = function (e) {
    void 0 === e && (e = this.parseUShort());
    for (var t = new Array(e), i = this.data, n = this.offset + this.relativeOffset, r = 0; r < e; r++)
      t[r] = i.getUint16(n), n += 2;
    return this.relativeOffset += 2 * e, t;
  }, a.prototype.parseShortList = function (e) {
    for (var t = new Array(e), i = this.data, n = this.offset + this.relativeOffset, r = 0; r < e; r++)
      t[r] = i.getInt16(n), n += 2;
    return this.relativeOffset += 2 * e, t;
  }, a.prototype.parseByteList = function (e) {
    for (var t = new Array(e), i = this.data, n = this.offset + this.relativeOffset, r = 0; r < e; r++)
      t[r] = i.getUint8(n++);
    return this.relativeOffset += e, t;
  }, a.prototype.parseList = function (e, t) {
    t || (t = e, e = this.parseUShort());
    for (var i = new Array(e), n = 0; n < e; n++)
      i[n] = t.call(this);
    return i;
  }, a.prototype.parseRecordList = function (e, t) {
    t || (t = e, e = this.parseUShort());
    for (var i = new Array(e), n = Object.keys(t), r = 0; r < e; r++) {
      for (var o = {}, a = 0; a < n.length; a++) {
        var s = n[a], l = t[s];
        o[s] = l.call(this);
      }
      i[r] = o;
    }
    return i;
  }, a.prototype.parseRecordList32 = function (e, t) {
    t || (t = e, e = this.parseULong());
    for (var i = new Array(e), n = Object.keys(t), r = 0; r < e; r++) {
      for (var o = {}, a = 0; a < n.length; a++) {
        var s = n[a], l = t[s];
        o[s] = l.call(this);
      }
      i[r] = o;
    }
    return i;
  }, a.prototype.parseStruct = function (e) {
    if ("function" == typeof e)
      return e.call(this);
    for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
      var r = t[n], o = e[r];
      i[r] = o.call(this);
    }
    return i;
  }, a.prototype.parsePointer = function (e) {
    var t = this.parseOffset16();
    if (t > 0)
      return new a(this.data, this.offset + t).parseStruct(e);
  }, a.prototype.parseValueRecord = function (e) {
    if (void 0 === e && (e = this.parseUShort()), 0 !== e) {
      var t = {};
      return 1 & e && (t.xPlacement = this.parseShort()), 2 & e && (t.yPlacement = this.parseShort()), 4 & e && (t.xAdvance = this.parseShort()), 8 & e && (t.yAdvance = this.parseShort()), 16 & e && (t.xPlaDevice = void 0, this.parseShort()), 32 & e && (t.yPlaDevice = void 0, this.parseShort()), 64 & e && (t.xAdvDevice = void 0, this.parseShort()), 128 & e && (t.yAdvDevice = void 0, this.parseShort()), t;
    }
  }, a.prototype.parseValueRecordList = function () {
    for (var e = this.parseUShort(), t = this.parseUShort(), i = new Array(t), n = 0; n < t; n++)
      i[n] = this.parseValueRecord(e);
    return i;
  }, a.prototype.parsePointer32 = function (e) {
    var t = this.parseOffset32();
    if (t > 0)
      return new a(this.data, this.offset + t).parseStruct(e);
  }, a.prototype.parseListOfLists = function (e) {
    for (var t = this.parseOffset16List(), i = t.length, n = this.relativeOffset, r = new Array(i), o = 0; o < i; o++) {
      var a = t[o];
      if (0 !== a)
        if (this.relativeOffset = a, e) {
          for (var s = this.parseOffset16List(), l = new Array(s.length), h = 0; h < s.length; h++)
            this.relativeOffset = a + s[h], l[h] = e.call(this);
          r[o] = l;
        } else
          r[o] = this.parseUShortList();
      else
        r[o] = void 0;
    }
    return this.relativeOffset = n, r;
  }, a.prototype.parseCoverage = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort(), i = this.parseUShort();
    if (1 === t)
      return {
        format: 1,
        glyphs: this.parseUShortList(i)
      };
    if (2 === t) {
      for (var n = new Array(i), r = 0; r < i; r++)
        n[r] = {
          start: this.parseUShort(),
          end: this.parseUShort(),
          index: this.parseUShort()
        };
      return {
        format: 2,
        ranges: n
      };
    }
    throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
  }, a.prototype.parseClassDef = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    if (1 === t)
      return {
        format: 1,
        startGlyph: this.parseUShort(),
        classes: this.parseUShortList()
      };
    if (2 === t)
      return {
        format: 2,
        ranges: this.parseRecordList({
          start: a.uShort,
          end: a.uShort,
          classId: a.uShort
        })
      };
    throw new Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
  }, a.list = function (e, t) {
    return function () {
      return this.parseList(e, t);
    };
  }, a.list32 = function (e, t) {
    return function () {
      return this.parseList32(e, t);
    };
  }, a.recordList = function (e, t) {
    return function () {
      return this.parseRecordList(e, t);
    };
  }, a.recordList32 = function (e, t) {
    return function () {
      return this.parseRecordList32(e, t);
    };
  }, a.pointer = function (e) {
    return function () {
      return this.parsePointer(e);
    };
  }, a.pointer32 = function (e) {
    return function () {
      return this.parsePointer32(e);
    };
  }, a.tag = a.prototype.parseTag, a.byte = a.prototype.parseByte, a.uShort = a.offset16 = a.prototype.parseUShort, a.uShortList = a.prototype.parseUShortList, a.uLong = a.offset32 = a.prototype.parseULong, a.uLongList = a.prototype.parseULongList, a.struct = a.prototype.parseStruct, a.coverage = a.prototype.parseCoverage, a.classDef = a.prototype.parseClassDef;
  var s = {
    reserved: a.uShort,
    reqFeatureIndex: a.uShort,
    featureIndexes: a.uShortList
  };
  a.prototype.parseScriptList = function () {
    return this.parsePointer(a.recordList({
      tag: a.tag,
      script: a.pointer({
        defaultLangSys: a.pointer(s),
        langSysRecords: a.recordList({
          tag: a.tag,
          langSys: a.pointer(s)
        })
      })
    })) || [];
  }, a.prototype.parseFeatureList = function () {
    return this.parsePointer(a.recordList({
      tag: a.tag,
      feature: a.pointer({
        featureParams: a.offset16,
        lookupListIndexes: a.uShortList
      })
    })) || [];
  }, a.prototype.parseLookupList = function (e) {
    return this.parsePointer(a.list(a.pointer(function () {
      var t = this.parseUShort();
      n.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
      var i = this.parseUShort(), r = 16 & i;
      return {
        lookupType: t,
        lookupFlag: i,
        subtables: this.parseList(a.pointer(e[t])),
        markFilteringSet: r ? this.parseUShort() : void 0
      };
    }))) || [];
  }, a.prototype.parseFeatureVariationsList = function () {
    return this.parsePointer32(function () {
      var e = this.parseUShort(), t = this.parseUShort();
      return n.argument(1 === e && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({
        conditionSetOffset: a.offset32,
        featureTableSubstitutionOffset: a.offset32
      });
    }) || [];
  }, t.Parser = a;
}
