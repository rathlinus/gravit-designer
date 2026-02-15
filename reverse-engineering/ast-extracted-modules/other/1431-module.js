/**
 * Module 1431
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
  var n = i(0), r = i(1231), o = i(1234), a = i(197), s = i(182), l = i(338), h = i(800), A = i(391), c = i(856), p = i(1433), u = i(708);
  function d(e, t, i) {
    r.call(this, e);
    var n = t.getPDFObject().getOpenTypeFont(), o = new a();
    o.putText("/Registry", "Adobe"), o.putText("/Ordering", "Identity"), o.put("/Supplement", 0), this._cidFontType2 = new a(), this._cidFontType2.put("/Type", "/Font"), this._cidFontType2.put("/Subtype", "/CIDFontType2"), this._cidFontType2.put("/BaseFont", "/" + n.tables.name.postScriptName.en), this._cidFontType2.put("/DW", 1000), this._cidFontType2.put("/CIDSystemInfo", o), this._cidFontType2.put("/CIDToGIDMap", "/Identity"), this._cidFontType2.put("/FontDescriptor", t);
    var l = i.getIndirectObject(this._cidFontType2);
    i.addIndirectObject(l), this._toUnicode = new h();
    var u = i.getIndirectObject(this._toUnicode);
    if (i.addIndirectObject(u), this.put("/Type", "/Font"), this.put("/Subtype", "/Type0"), this.put("/BaseFont", "/" + n.tables.name.postScriptName.en), this.put("/Encoding", "/Identity-H"), this.put("/ToUnicode", new A(u)), this.put("/DescendantFonts", new s([new A(l)])), this._fontDescriptor = t.getPDFObject(), this._encoding = new p(this._fontDescriptor.getFont()), n.isCIDFont) {
      var d = this._getCFFTable(this._fontDescriptor.getFont()._buffer);
      if (d) {
        var g = new h(new c(d));
        g.putDictionary("/Subtype", "/CIDFontType0C");
        var f = i.getIndirectObject(g);
        i.addIndirectObject(f);
        var m = "/" + n.tables.name.postScriptName.en + "-Identity-H";
        this._fontDescriptor.put("/FontFile3", new A(f)), this._fontDescriptor.put("/FontName", m);
        var y = this._fontDescriptor.remove("/FontFile2");
        y && i.removeIndirectObject(y.getPDFIndirectObject()), this._cidFontType2.put("/BaseFont", m), this._cidFontType2.put("/Subtype", "/CIDFontType0"), this._cidFontType2.remove("/CIDToGIDMap"), this.put("/BaseFont", m);
      }
    }
  }
  n.inherit(d, r), d.prototype._fontDescriptor = null, d.prototype._cidFontType2 = null, d.prototype._toUnicode = null, d.prototype.encode = function (e, t) {
    var i = r.prototype.encode.call(this, e, t);
    return this._updateWidths(), this._updateUnicode(), i;
  }, d.prototype._updateWidths = function () {
    var e, t = null, i = new s();
    this._encoding.getGlyphs().sort(function (e, t) {
      return e.glyph - t.glyph;
    }).forEach(function (n) {
      1000 != n.width && (null != t && n.cid === t + 1 || (e = new s(), i.push(n.cid), i.push(e)), e.push(n.width), t = n.cid);
    }), i.size() && this._cidFontType2.put("/W", i);
  }, d.prototype._updateUnicode = function () {
    var e = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo\n<< /Registry (TTX+0)\n/Ordering (T42UV)\n/Supplement 0\n>> def\n/CMapName /TTX+0 def\n/CMapType 2 def\n1 begincodespacerange\n<0000><FFFF>\nendcodespacerange\n", t = 0, i = this._encoding.getGlyphs().filter(function (e) {
        return !!e.unicode;
      }), n = function (e) {
        if (e < 65536)
          return "<" + l.toHex(e, 4) + ">";
        var t = (e -= 65536) / 1024 + o.Surrogate.Lead.FirstChar, i = e % 1024 + o.Surrogate.Trail.FirstChar;
        return "[<" + l.toHex(t, 4) + l.toHex(i, 4) + ">]";
      };
    i.forEach(function (r, o) {
      0 == t && (0 != o && (e += "endbfrange\n"), t = Math.min(100, i.length - o), e += t + " beginbfrange\n"), --t;
      var a = n(r.cid);
      e += a + a + n(r.unicode) + "\n";
    }), e += "endbfrange\nendcmap\nCMapName currentdict /CMap defineresource pop\nend end", this._toUnicode.filter = new c(e);
  }, d.prototype._getCFFTable = function (e) {
    for (var t = u.parseTableEntries(e), i = 0; i < t.length; i += 1) {
      var n = t[i];
      if ("CFF " === n.tag)
        return new Uint8Array(e, n.offset, n.length);
    }
    return null;
  }, d.prototype.toString = function () {
    return "[GPDFCIDFontType]";
  }, e.exports = d;
}
