/**
 * Module 995
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
  var n = i(105), r = i(89), o = i(115), a = r.Parser, s = new Array(10);
  s[1] = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    return 1 === t ? {
      posFormat: 1,
      coverage: this.parsePointer(a.coverage),
      value: this.parseValueRecord()
    } : 2 === t ? {
      posFormat: 2,
      coverage: this.parsePointer(a.coverage),
      values: this.parseValueRecordList()
    } : void n.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
  }, s[2] = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    n.assert(1 === t || 2 === t, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
    var i = this.parsePointer(a.coverage), r = this.parseUShort(), o = this.parseUShort();
    if (1 === t)
      return {
        posFormat: t,
        coverage: i,
        valueFormat1: r,
        valueFormat2: o,
        pairSets: this.parseList(a.pointer(a.list(function () {
          return {
            secondGlyph: this.parseUShort(),
            value1: this.parseValueRecord(r),
            value2: this.parseValueRecord(o)
          };
        })))
      };
    if (2 === t) {
      var s = this.parsePointer(a.classDef), l = this.parsePointer(a.classDef), h = this.parseUShort(), A = this.parseUShort();
      return {
        posFormat: t,
        coverage: i,
        valueFormat1: r,
        valueFormat2: o,
        classDef1: s,
        classDef2: l,
        class1Count: h,
        class2Count: A,
        classRecords: this.parseList(h, a.list(A, function () {
          return {
            value1: this.parseValueRecord(r),
            value2: this.parseValueRecord(o)
          };
        }))
      };
    }
  }, s[3] = function () {
    return { error: "GPOS Lookup 3 not supported" };
  }, s[4] = function () {
    return { error: "GPOS Lookup 4 not supported" };
  }, s[5] = function () {
    return { error: "GPOS Lookup 5 not supported" };
  }, s[6] = function () {
    return { error: "GPOS Lookup 6 not supported" };
  }, s[7] = function () {
    return { error: "GPOS Lookup 7 not supported" };
  }, s[8] = function () {
    return { error: "GPOS Lookup 8 not supported" };
  }, s[9] = function () {
    return { error: "GPOS Lookup 9 not supported" };
  };
  var l = new Array(10);
  t.parse = function (e, t) {
    var i = new a(e, t = t || 0), r = i.parseVersion(1);
    return n.argument(1 === r || 1.1 === r, "Unsupported GPOS table version " + r), 1 === r ? {
      version: r,
      scripts: i.parseScriptList(),
      features: i.parseFeatureList(),
      lookups: i.parseLookupList(s)
    } : {
      version: r,
      scripts: i.parseScriptList(),
      features: i.parseFeatureList(),
      lookups: i.parseLookupList(s),
      variations: i.parseFeatureVariationsList()
    };
  }, t.make = function (e) {
    return new o.Table("GPOS", [
      {
        name: "version",
        type: "ULONG",
        value: 65536
      },
      {
        name: "scripts",
        type: "TABLE",
        value: new o.ScriptList(e.scripts)
      },
      {
        name: "features",
        type: "TABLE",
        value: new o.FeatureList(e.features)
      },
      {
        name: "lookups",
        type: "TABLE",
        value: new o.LookupList(e.lookups, l)
      }
    ]);
  };
}
