/**
 * Module 529
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
  var n = require(712) /* module */;
  function r(e, t, i) {
    Object.defineProperty(e, t, {
      get: function () {
        return e.path, e[i];
      },
      set: function (t) {
        e[i] = t;
      },
      enumerable: true,
      configurable: true
    });
  }
  function o(e, t) {
    if (this.font = e, this.glyphs = {}, Array.isArray(t))
      for (var require = 0; require < t.length; require++)
        this.glyphs[require] = t[require];
    this.length = t && t.length || 0;
  }
  o.prototype.get = function (e) {
    return "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]()), this.glyphs[e];
  }, o.prototype.push = function (e, t) {
    this.glyphs[e] = t, this.length++;
  }, module.GlyphSet = o, module.glyphLoader = function (e, t) {
    return new n.Glyph({
      index: t,
      font: e
    });
  }, module.ttfGlyphLoader = function (e, t, i, o, a, s) {
    return function () {
      var l = new n.Glyph({
        index: t,
        font: e
      });
      return l.path = function () {
        i(l, o, a);
        var t = s(e.glyphs, l);
        return t.unitsPerEm = e.unitsPerEm, t;
      }, r(l, "xMin", "_xMin"), r(l, "xMax", "_xMax"), r(l, "yMin", "_yMin"), r(l, "yMax", "_yMax"), l;
    };
  }, module.cffGlyphLoader = function (e, t, i, r) {
    return function () {
      var o = new n.Glyph({
        index: t,
        font: e
      });
      return o.path = function () {
        var t = i(e, o, r);
        return t.unitsPerEm = e.unitsPerEm, t;
      }, o;
    };
  };
}
