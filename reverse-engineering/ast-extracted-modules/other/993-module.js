/**
 * Module 993
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
  var n = i(378).ContextParams, r = i(379).isTashkeelArabicChar, o = "ltr";
  function a(e, t) {
    this.font = e, this.features = {}, o = t || o;
  }
  function s(e, t, i, n) {
    this.tag = e, this.featureRef = t, this.lookups = i.lookups, this.script = n;
  }
  function l(e) {
    this.table = e;
  }
  function h(e) {
    this.ligatureSets = e;
  }
  function A(e, t, i) {
    this.lookups = e, this.subtable = i, this.lookupTable = t, i.hasOwnProperty("coverage") && (this.coverage = new l(i.coverage)), i.hasOwnProperty("inputCoverage") && (this.inputCoverage = i.inputCoverage.map(function (e) {
      return new l(e);
    })), i.hasOwnProperty("backtrackCoverage") && (this.backtrackCoverage = i.backtrackCoverage.map(function (e) {
      return new l(e);
    })), i.hasOwnProperty("lookaheadCoverage") && (this.lookaheadCoverage = i.lookaheadCoverage.map(function (e) {
      return new l(e);
    })), i.hasOwnProperty("ligatureSets") && (this.ligatureSets = new h(i.ligatureSets));
  }
  function c(e, t) {
    this.index = e, this.subtables = t[e].subtables.map(function (i) {
      return new A(t, t[e], i);
    });
  }
  function p(e, t) {
    this.lookups = t.map(function (t) {
      return new c(t, e);
    });
  }
  function u(e) {
    var t = e.current.activeState.value;
    t = Array.isArray(t) ? t[0] : t;
    var i = this.coverage.lookup(t);
    return -1 === i ? [] : [this.subtable.substitute[i]];
  }
  function d(e, t) {
    for (var i = [], n = 0; n < e.length; n++) {
      var r = e[n], o = t.current.activeState.value;
      o = Array.isArray(o) ? o[0] : o;
      var a = r.lookup(o);
      -1 !== a && i.push(a);
    }
    return i.length !== e.length ? -1 : i;
  }
  function g(e) {
    var t = this.inputCoverage.length + this.lookaheadCoverage.length + this.backtrackCoverage.length;
    if (e.context.length < t)
      return [];
    var i = d(this.inputCoverage, e);
    if (-1 === i)
      return [];
    var o = this.inputCoverage.length - 1;
    if (e.lookahead.length < this.lookaheadCoverage.length)
      return [];
    for (var a = e.lookahead.slice(o); a.length && r(a[0].char);)
      a.shift();
    var s = new n(a, 0), l = d(this.lookaheadCoverage, s), h = [].concat(e.backtrack);
    for (h.reverse(); h.length && r(h[0].char);)
      h.shift();
    if (h.length < this.backtrackCoverage.length)
      return [];
    var A = new n(h, 0), p = d(this.backtrackCoverage, A), u = [];
    if (i.length === this.inputCoverage.length && l.length === this.lookaheadCoverage.length && p.length === this.backtrackCoverage.length)
      for (var g = this.subtable.lookupRecords, f = 0; f < g.length; f++)
        for (var m = g[f], y = 0; y < i.length; y++) {
          var _ = new n([e.get(y)], 0), v = new c(m.lookupListIndex, this.lookups).lookup(_);
          u = u.concat(v);
        }
    return u;
  }
  function f(e) {
    var t = e.current.activeState.value, i = this.coverage.lookup(t);
    if (-1 === i)
      return [];
    var n = this.ligatureSets.lookup(e, i);
    return n ? [n] : [];
  }
  h.prototype.lookup = function (e, t) {
    for (var i = this.ligatureSets[t], n = function (e, t) {
          if (e.length > t.length)
            return null;
          for (var i = 0; i < e.length; i++) {
            if (e[i] !== t[i])
              return !1;
          }
          return !0;
        }, r = 0; r < i.length; r++) {
      var a = i[r], s = e.lookahead.map(function (e) {
          return e.activeState.value;
        });
      if ("rtl" === o && s.reverse(), n(a.components, s))
        return a;
    }
    return null;
  }, c.prototype.lookup = function (e) {
    for (var t = [], i = 0; i < this.subtables.length; i++) {
      var n = this.subtables[i].lookup(e);
      (null !== n || n.length) && (t = t.concat(n));
    }
    return t;
  }, A.prototype.lookup = function (e) {
    var t, i = [], n = this.lookupTable.lookupType, r = this.subtable.substFormat;
    1 === n && 2 === r && (t = u.call(this, e)).length > 0 && i.push({
      id: 12,
      substitution: t
    });
    6 === n && 3 === r && (t = g.call(this, e)).length > 0 && i.push({
      id: 63,
      substitution: t
    });
    4 === n && 1 === r && (t = f.call(this, e)).length > 0 && i.push({
      id: 41,
      substitution: t
    });
    return i;
  }, l.prototype.lookup = function (e) {
    if (!e)
      return -1;
    switch (this.table.format) {
    case 1:
      return this.table.glyphs.indexOf(e);
    case 2:
      for (var t = this.table.ranges, i = 0; i < t.length; i++) {
        var n = t[i];
        if (e >= n.start && e <= n.end) {
          var r = e - n.start;
          return n.index + r;
        }
      }
      break;
    default:
      return -1;
    }
    return -1;
  }, s.prototype.lookup = function (e) {
    for (var t = [], i = 0; i < this.lookups.length; i++) {
      var n = this.lookups[i].lookup(e);
      (null !== n || n.length) && (t = t.concat(n));
    }
    return t;
  }, a.prototype.getScriptFeaturesIndexes = function (e) {
    if (!e)
      return [];
    if (!this.font.tables.gsub)
      return [];
    for (var t = this.font.tables.gsub.scripts, i = 0; i < t.length; i++) {
      var n = t[i];
      if (n.tag === e)
        return n.script.defaultLangSys.featureIndexes;
      var r = n.langSysRecords;
      if (r)
        for (var o = 0; o < r.length; o++) {
          var a = r[o];
          if (a.tag === e)
            return a.langSys.featureIndexes;
        }
    }
    return [];
  }, a.prototype.mapTagsToFeatures = function (e, t) {
    for (var i = {}, n = 0; n < e.length; n++) {
      var r = e[n].feature, o = e[n].tag, a = new p(this.font.tables.gsub.lookups, r.lookupListIndexes);
      i[o] = new s(o, r, a, t);
    }
    this.features[t].tags = i;
  }, a.prototype.getScriptFeatures = function (e) {
    var t = this.features[e];
    if (this.features.hasOwnProperty(e))
      return t;
    var i = this.getScriptFeaturesIndexes(e);
    if (!i)
      return null;
    var n = this.font.tables.gsub;
    return t = i.map(function (e) {
      return n.features[e];
    }), this.features[e] = t, this.mapTagsToFeatures(t, e), t;
  }, a.prototype.getFeature = function (e) {
    return this.font ? (this.features.hasOwnProperty(e.script) || this.getScriptFeatures(e.script), this.features[e.script].tags[e.tag] || null) : { FAIL: "No font was found" };
  }, t.FeatureQuery = a, t.Feature = s;
}
