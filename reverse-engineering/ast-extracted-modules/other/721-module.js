/**
 * Module 721
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
  var n = i(105), r = i(89).Parser, o = new Array(9), a = i(115);
  o[1] = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    return 1 === t ? {
      substFormat: 1,
      coverage: this.parsePointer(r.coverage),
      deltaGlyphId: this.parseUShort()
    } : 2 === t ? {
      substFormat: 2,
      coverage: this.parsePointer(r.coverage),
      substitute: this.parseOffset16List()
    } : void n.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
  }, o[2] = function () {
    var e = this.parseUShort();
    return n.argument(1 === e, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
      substFormat: e,
      coverage: this.parsePointer(r.coverage),
      sequences: this.parseListOfLists()
    };
  }, o[3] = function () {
    var e = this.parseUShort();
    return n.argument(1 === e, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
      substFormat: e,
      coverage: this.parsePointer(r.coverage),
      alternateSets: this.parseListOfLists()
    };
  }, o[4] = function () {
    var e = this.parseUShort();
    return n.argument(1 === e, "GSUB ligature table identifier-format must be 1"), {
      substFormat: e,
      coverage: this.parsePointer(r.coverage),
      ligatureSets: this.parseListOfLists(function () {
        return {
          ligGlyph: this.parseUShort(),
          components: this.parseUShortList(this.parseUShort() - 1)
        };
      })
    };
  };
  var s = {
    sequenceIndex: r.uShort,
    lookupListIndex: r.uShort
  };
  o[5] = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    if (1 === t)
      return {
        substFormat: t,
        coverage: this.parsePointer(r.coverage),
        ruleSets: this.parseListOfLists(function () {
          var e = this.parseUShort(), t = this.parseUShort();
          return {
            input: this.parseUShortList(e - 1),
            lookupRecords: this.parseRecordList(t, s)
          };
        })
      };
    if (2 === t)
      return {
        substFormat: t,
        coverage: this.parsePointer(r.coverage),
        classDef: this.parsePointer(r.classDef),
        classSets: this.parseListOfLists(function () {
          var e = this.parseUShort(), t = this.parseUShort();
          return {
            classes: this.parseUShortList(e - 1),
            lookupRecords: this.parseRecordList(t, s)
          };
        })
      };
    if (3 === t) {
      var i = this.parseUShort(), o = this.parseUShort();
      return {
        substFormat: t,
        coverages: this.parseList(i, r.pointer(r.coverage)),
        lookupRecords: this.parseRecordList(o, s)
      };
    }
    n.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
  }, o[6] = function () {
    var e = this.offset + this.relativeOffset, t = this.parseUShort();
    return 1 === t ? {
      substFormat: 1,
      coverage: this.parsePointer(r.coverage),
      chainRuleSets: this.parseListOfLists(function () {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(s)
        };
      })
    } : 2 === t ? {
      substFormat: 2,
      coverage: this.parsePointer(r.coverage),
      backtrackClassDef: this.parsePointer(r.classDef),
      inputClassDef: this.parsePointer(r.classDef),
      lookaheadClassDef: this.parsePointer(r.classDef),
      chainClassSet: this.parseListOfLists(function () {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(s)
        };
      })
    } : 3 === t ? {
      substFormat: 3,
      backtrackCoverage: this.parseList(r.pointer(r.coverage)),
      inputCoverage: this.parseList(r.pointer(r.coverage)),
      lookaheadCoverage: this.parseList(r.pointer(r.coverage)),
      lookupRecords: this.parseRecordList(s)
    } : void n.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
  }, o[7] = function () {
    var e = this.parseUShort();
    n.argument(1 === e, "GSUB Extension Substitution subtable identifier-format must be 1");
    var t = this.parseUShort(), i = new r(this.data, this.offset + this.parseULong());
    return {
      substFormat: 1,
      lookupType: t,
      extension: o[t].call(i)
    };
  }, o[8] = function () {
    var e = this.parseUShort();
    return n.argument(1 === e, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
      substFormat: e,
      coverage: this.parsePointer(r.coverage),
      backtrackCoverage: this.parseList(r.pointer(r.coverage)),
      lookaheadCoverage: this.parseList(r.pointer(r.coverage)),
      substitutes: this.parseUShortList()
    };
  };
  var l = new Array(9);
  l[1] = function (e) {
    return 1 === e.substFormat ? new a.Table("substitutionTable", [
      {
        name: "substFormat",
        type: "USHORT",
        value: 1
      },
      {
        name: "coverage",
        type: "TABLE",
        value: new a.Coverage(e.coverage)
      },
      {
        name: "deltaGlyphID",
        type: "USHORT",
        value: e.deltaGlyphId
      }
    ]) : new a.Table("substitutionTable", [
      {
        name: "substFormat",
        type: "USHORT",
        value: 2
      },
      {
        name: "coverage",
        type: "TABLE",
        value: new a.Coverage(e.coverage)
      }
    ].concat(a.ushortList("substitute", e.substitute)));
  }, l[3] = function (e) {
    return n.assert(1 === e.substFormat, "Lookup type 3 substFormat must be 1."), new a.Table("substitutionTable", [
      {
        name: "substFormat",
        type: "USHORT",
        value: 1
      },
      {
        name: "coverage",
        type: "TABLE",
        value: new a.Coverage(e.coverage)
      }
    ].concat(a.tableList("altSet", e.alternateSets, function (e) {
      return new a.Table("alternateSetTable", a.ushortList("alternate", e));
    })));
  }, l[4] = function (e) {
    return n.assert(1 === e.substFormat, "Lookup type 4 substFormat must be 1."), new a.Table("substitutionTable", [
      {
        name: "substFormat",
        type: "USHORT",
        value: 1
      },
      {
        name: "coverage",
        type: "TABLE",
        value: new a.Coverage(e.coverage)
      }
    ].concat(a.tableList("ligSet", e.ligatureSets, function (e) {
      return new a.Table("ligatureSetTable", a.tableList("ligature", e, function (e) {
        return new a.Table("ligatureTable", [{
            name: "ligGlyph",
            type: "USHORT",
            value: e.ligGlyph
          }].concat(a.ushortList("component", e.components, e.components.length + 1)));
      }));
    })));
  }, t.parse = function (e, t) {
    var i = new r(e, t = t || 0), a = i.parseVersion(1);
    return n.argument(1 === a || 1.1 === a, "Unsupported GSUB table version."), 1 === a ? {
      version: a,
      scripts: i.parseScriptList(),
      features: i.parseFeatureList(),
      lookups: i.parseLookupList(o)
    } : {
      version: a,
      scripts: i.parseScriptList(),
      features: i.parseFeatureList(),
      lookups: i.parseLookupList(o),
      variations: i.parseFeatureVariationsList()
    };
  }, t.make = function (e) {
    return new a.Table("GSUB", [
      {
        name: "version",
        type: "ULONG",
        value: 65536
      },
      {
        name: "scripts",
        type: "TABLE",
        value: new a.ScriptList(e.scripts)
      },
      {
        name: "features",
        type: "TABLE",
        value: new a.FeatureList(e.features)
      },
      {
        name: "lookups",
        type: "TABLE",
        value: new a.LookupList(e.lookups, l)
      }
    ]);
  };
}
