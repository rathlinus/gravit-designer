/**
 * Module 708
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
  require(837) /* DataModule_837 */;
  var n = require(165) /* module_165 */, r = require(376) /* module */, o = require(982) /* module */, a = require(712) /* module */, s = require(89) /* module */, l = require(709) /* module */, h = require(326) /* module */, A = require(724) /* module */, c = require(710) /* module */, p = require(711) /* module */, u = require(994) /* module */, d = require(725) /* module */, g = require(995) /* module */, f = require(721) /* module */, m = require(713) /* module */, y = require(714) /* module */, _ = require(715) /* module */, v = require(996) /* module */, b = require(716) /* module */, C = require(997) /* module */, w = require(717) /* module */, E = require(718) /* module */, B = require(719) /* module */, x = require(720) /* module */, P = require(722) /* module */;
  function S(e, t) {
    require(178) /* module_178 */.readFile(e, function (e, i) {
      if (e)
        return t(e.message);
      t(null, A.nodeBufferToArrayBuffer(i));
    });
  }
  function T(e, t) {
    var i = new XMLHttpRequest();
    i.open("get", e, true), i.responseType = "arraybuffer", i.onload = function () {
      return i.response ? t(null, i.response) : t("Font could not be loaded: " + i.statusText);
    }, i.onerror = function () {
      t("Font could not be loaded");
    }, i.send();
  }
  function I(e, t) {
    for (var require = [], n = 12, r = 0; r < t; r += 1) {
      var o = s.getTag(e, n), a = s.getULong(e, n + 4), l = s.getULong(e, n + 8), h = s.getULong(e, n + 12);
      require.push({
        tag: o,
        checksum: a,
        offset: l,
        length: h,
        compression: false
      }), n += 16;
    }
    return require;
  }
  function F(e, t) {
    for (var require = [], n = 44, r = 0; r < t; r += 1) {
      var o, a = s.getTag(e, n), l = s.getULong(e, n + 4), h = s.getULong(e, n + 8), A = s.getULong(e, n + 12);
      o = h < A && "WOFF", require.push({
        tag: a,
        offset: l,
        compression: o,
        compressedLength: h,
        length: A
      }), n += 20;
    }
    return require;
  }
  function R(e, t) {
    if ("WOFF" === t.compression) {
      var require = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2), r = n.inflate(require, { raw: true });
      if (r.byteLength !== t.length)
        throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
      return {
        data: new DataView(r.buffer, 0),
        offset: 0
      };
    }
    return {
      data: e,
      offset: t.offset
    };
  }
  function D(e) {
    var t, i, n, a, l = new o.Font({ empty: true });
    n = e instanceof DataView ? e : new DataView(e, 0);
    var h, A, S, T, D, k, G, Q, M, N, U, V = [], O = s.getTag(n, 0);
    if (O === String.fromCharCode(0, 1, 0, 0) || "true" === O || "typ1" === O)
      l.outlinesFormat = "truetype", V = I(n, a = s.getUShort(n, 4));
    else if ("OTTO" === O)
      l.outlinesFormat = "cff", V = I(n, a = s.getUShort(n, 4));
    else {
      if ("wOFF" !== O)
        throw new Error("Unsupported OpenType signature " + O);
      var L = s.getTag(n, 4);
      if (L === String.fromCharCode(0, 1, 0, 0))
        l.outlinesFormat = "truetype";
      else {
        if ("OTTO" !== L)
          throw new Error("Unsupported OpenType flavor " + O);
        l.outlinesFormat = "cff";
      }
      V = F(n, a = s.getUShort(n, 12));
    }
    for (var Y = 0; Y < a; Y += 1) {
      var X, H = V[Y];
      switch (H.tag) {
      case "cmap":
        X = R(n, H), l.tables.cmap = c.parse(X.data, X.offset), l.encoding = new r.CmapEncoding(l.tables.cmap);
        break;
      case "cvt ":
        X = R(n, H), U = new s.Parser(X.data, X.offset), l.tables.cvt = U.parseShortList(H.length / 2);
        break;
      case "fvar":
        A = H;
        break;
      case "fpgm":
        X = R(n, H), U = new s.Parser(X.data, X.offset), l.tables.fpgm = U.parseByteList(H.length);
        break;
      case "head":
        X = R(n, H), l.tables.head = m.parse(X.data, X.offset), l.unitsPerEm = l.tables.head.unitsPerEm, t = l.tables.head.indexToLocFormat;
        break;
      case "hhea":
        X = R(n, H), l.tables.hhea = y.parse(X.data, X.offset), l.ascender = l.tables.hhea.ascender, l.descender = l.tables.hhea.descender, l.numberOfHMetrics = l.tables.hhea.numberOfHMetrics;
        break;
      case "hmtx":
        k = H;
        break;
      case "ltag":
        X = R(n, H), i = b.parse(X.data, X.offset);
        break;
      case "maxp":
        X = R(n, H), l.tables.maxp = w.parse(X.data, X.offset), l.numGlyphs = l.tables.maxp.numGlyphs;
        break;
      case "name":
        M = H;
        break;
      case "OS/2":
        X = R(n, H), l.tables.os2 = B.parse(X.data, X.offset);
        break;
      case "post":
        X = R(n, H), l.tables.post = x.parse(X.data, X.offset), l.glyphNames = new r.GlyphNames(l.tables.post);
        break;
      case "prep":
        X = R(n, H), U = new s.Parser(X.data, X.offset), l.tables.prep = U.parseByteList(H.length);
        break;
      case "glyf":
        S = H;
        break;
      case "loca":
        Q = H;
        break;
      case "CFF ":
        h = H;
        break;
      case "kern":
        G = H;
        break;
      case "GPOS":
        T = H;
        break;
      case "GSUB":
        D = H;
        break;
      case "meta":
        N = H;
        break;
      case "morx":
        l.hasGHBTables = true;
      }
    }
    if (!l.tables.cmap)
      throw new Error("Font doesn't contain known CMAP table.");
    var W = R(n, M);
    if (l.tables.name = E.parse(W.data, W.offset, i), l.names = l.tables.name, S && Q) {
      var Z = 0 === t, z = R(n, Q), j = C.parse(z.data, z.offset, l.numGlyphs, Z), J = R(n, S);
      l.glyphs = d.parse(J.data, J.offset, j, l);
    } else {
      if (!h)
        throw new Error("Font doesn't contain TrueType or CFF outlines.");
      var q = R(n, h);
      p.parse(q.data, q.offset, l);
    }
    l.numGlyphs = Math.min(l.numGlyphs, l.glyphs.length);
    var K = R(n, k);
    if (_.parse(K.data, K.offset, l.numberOfHMetrics, l.numGlyphs, l.glyphs), r.addGlyphNames(l), G) {
      var $ = R(n, G);
      l.kerningPairs = v.parse($.data, $.offset);
    } else
      l.kerningPairs = {};
    if (T) {
      var ee = R(n, T);
      l.tables.gpos = g.parse(ee.data, ee.offset), l.position.init();
    }
    if (D) {
      var te = R(n, D);
      l.tables.gsub = f.parse(te.data, te.offset);
    }
    if (A) {
      var ie = R(n, A);
      l.tables.fvar = u.parse(ie.data, ie.offset, l.names);
    }
    if (N) {
      var ne = R(n, N);
      l.tables.meta = P.parse(ne.data, ne.offset), l.metas = l.tables.meta;
    }
    return l;
  }
  module._parse = s, module.Font = o.Font, module.Glyph = a.Glyph, module.Path = h.Path, module.BoundingBox = l.BoundingBox, module.parse = D, module.parseTableEntries = function (e) {
    var t = new DataView(e, 0), i = s.getTag(t, 0);
    if (i === String.fromCharCode(0, 1, 0, 0) || "true" === i || "typ1" === i)
      return I(t, s.getUShort(t, 4));
    if ("OTTO" === i)
      return I(t, s.getUShort(t, 4));
    if ("wOFF" === i) {
      var n = s.getTag(t, 4);
      if (n === String.fromCharCode(0, 1, 0, 0));
      else if ("OTTO" !== n)
        throw new Error("Unsupported OpenType flavor " + i);
      return F(t, s.getUShort(t, 12));
    }
    throw new Error("Unsupported OpenType signature " + i);
  }, module.load = function (e, t) {
    ("undefined" == typeof window ? S : T)(e, function (e, i) {
      if (e)
        return t(e);
      var n;
      try {
        n = D(i);
      } catch (e) {
        return t(e, null);
      }
      return t(null, n);
    });
  }, module.loadSync = function (e) {
    var t = require(178) /* module_178 */.readFileSync(e);
    return D(A.nodeBufferToArrayBuffer(t));
  };
}
