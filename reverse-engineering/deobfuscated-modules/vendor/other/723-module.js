/**
 * Module 723
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
  var n = require(105) /* module */;
  function r(e, t) {
    for (var require = 0, n = e.length - 1; require <= n;) {
      var r = require + n >>> 1, o = e[r].tag;
      if (o === t)
        return r;
      o < t ? require = r + 1 : n = r - 1;
    }
    return -require - 1;
  }
  function o(e, t) {
    for (var require = 0, n = e.length - 1; require <= n;) {
      var r = require + n >>> 1, o = e[r];
      if (o === t)
        return r;
      o < t ? require = r + 1 : n = r - 1;
    }
    return -require - 1;
  }
  function a(e, t) {
    for (var require, n = 0, r = e.length - 1; n <= r;) {
      var o = n + r >>> 1, a = (require = e[o]).start;
      if (a === t)
        return require;
      a < t ? n = o + 1 : r = o - 1;
    }
    if (n > 0)
      return t > (require = e[n - 1]).end ? 0 : require;
  }
  function s(e, t) {
    this.font = e, this.tableName = t;
  }
  s.prototype = {
    searchTag: r,
    binSearch: o,
    getTable: function (e) {
      var t = this.font.tables[this.tableName];
      return t && !t.scripts && (t.scripts = []), !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
    },
    getScriptNames: function () {
      var e = this.getTable();
      return e ? e.scripts.map(function (e) {
        return e.tag;
      }) : [];
    },
    getDefaultScriptName: function () {
      var e = this.getTable();
      if (e) {
        for (var module = false, require = 0; require < e.scripts.length; require++) {
          var n = e.scripts[require].tag;
          if ("DFLT" === n)
            return n;
          "latn" === n && (module = true);
        }
        return module ? "latn" : undefined;
      }
    },
    getScriptTable: function (e, t) {
      var i = this.getTable(t);
      if (i) {
        e = e || "DFLT";
        var n = i.scripts, o = r(i.scripts, e);
        if (o >= 0)
          return n[o].script;
        if (t) {
          var a = {
            tag: e,
            script: {
              defaultLangSys: {
                reserved: 0,
                reqFeatureIndex: 65535,
                featureIndexes: []
              },
              langSysRecords: []
            }
          };
          return n.splice(-1 - o, 0, a), a.script;
        }
      }
    },
    getLangSysTags: function (e) {
      var t = this.getScriptTable(e, false);
      return t && t.langSysRecords ? t.langSysRecords.map(function (e) {
        return e.tag;
      }) : [];
    },
    getLangSysTable: function (e, t, i) {
      var n = this.getScriptTable(e, i);
      if (n) {
        if (!t || "dflt" === t || "DFLT" === t)
          return n.defaultLangSys;
        var o = r(n.langSysRecords, t);
        if (o >= 0)
          return n.langSysRecords[o].langSys;
        if (i) {
          var a = {
            tag: t,
            langSys: {
              reserved: 0,
              reqFeatureIndex: 65535,
              featureIndexes: []
            }
          };
          return n.langSysRecords.splice(-1 - o, 0, a), a.langSys;
        }
      }
    },
    getFeatureTable: function (e, t, i, r) {
      var o = this.getLangSysTable(e, t, r);
      if (o) {
        for (var a, s = o.featureIndexes, l = this.font.tables[this.tableName].features, h = 0; h < s.length; h++)
          if ((a = l[s[h]]).tag === i)
            return a.feature;
        if (r) {
          var A = l.length;
          return n.assert(0 === A || i >= l[A - 1].tag, "Features must be added in alphabetical order."), a = {
            tag: i,
            feature: {
              params: 0,
              lookupListIndexes: []
            }
          }, l.push(a), s.push(A), a.feature;
        }
      }
    },
    getLookupTables: function (e, t, i, n, r) {
      var o = this.getFeatureTable(e, t, i, r), a = [];
      if (o) {
        for (var s, l = o.lookupListIndexes, h = this.font.tables[this.tableName].lookups, A = 0; A < l.length; A++)
          (s = h[l[A]]).lookupType === n && a.push(s);
        if (0 === a.length && r) {
          s = {
            lookupType: n,
            lookupFlag: 0,
            subtables: [],
            markFilteringSet: undefined
          };
          var c = h.length;
          return h.push(s), l.push(c), [s];
        }
      }
      return a;
    },
    getGlyphClass: function (e, t) {
      switch (e.format) {
      case 1:
        return e.startGlyph <= t && t < e.startGlyph + e.classes.length ? e.classes[t - e.startGlyph] : 0;
      case 2:
        var require = a(e.ranges, t);
        return require ? require.classId : 0;
      }
    },
    getCoverageIndex: function (e, t) {
      switch (e.format) {
      case 1:
        var require = o(e.glyphs, t);
        return require >= 0 ? require : -1;
      case 2:
        var n = a(e.ranges, t);
        return n ? n.index + t - n.start : -1;
      }
    },
    expandCoverage: function (e) {
      if (1 === e.format)
        return e.glyphs;
      for (var module = [], require = e.ranges, n = 0; n < require.length; n++)
        for (var r = require[n], o = r.start, a = r.end, s = o; s <= a; s++)
          module.push(s);
      return module;
    }
  }, exports.exports = s;
}
