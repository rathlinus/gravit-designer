/**
 * Module 377
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
  var n = i(105), r = {}, o = {}, a = {};
  function s(e) {
    return function () {
      return e;
    };
  }
  o.BYTE = function (e) {
    return n.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."), [e];
  }, a.BYTE = s(1), o.CHAR = function (e) {
    return [e.charCodeAt(0)];
  }, a.CHAR = s(1), o.CHARARRAY = function (e) {
    for (var t = [], i = 0; i < e.length; i += 1)
      t[i] = e.charCodeAt(i);
    return t;
  }, a.CHARARRAY = function (e) {
    return e.length;
  }, o.USHORT = function (e) {
    return [
      e >> 8 & 255,
      255 & e
    ];
  }, a.USHORT = s(2), o.SHORT = function (e) {
    return e >= 32768 && (e = -(65536 - e)), [
      e >> 8 & 255,
      255 & e
    ];
  }, a.SHORT = s(2), o.UINT24 = function (e) {
    return [
      e >> 16 & 255,
      e >> 8 & 255,
      255 & e
    ];
  }, a.UINT24 = s(3), o.ULONG = function (e) {
    return [
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      255 & e
    ];
  }, a.ULONG = s(4), o.LONG = function (e) {
    return e >= 2147483648 && (e = -(4294967296 - e)), [
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      255 & e
    ];
  }, a.LONG = s(4), o.FIXED = o.ULONG, a.FIXED = a.ULONG, o.FWORD = o.SHORT, a.FWORD = a.SHORT, o.UFWORD = o.USHORT, a.UFWORD = a.USHORT, o.LONGDATETIME = function (e) {
    return [
      0,
      0,
      0,
      0,
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      255 & e
    ];
  }, a.LONGDATETIME = s(8), o.TAG = function (e) {
    return n.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [
      e.charCodeAt(0),
      e.charCodeAt(1),
      e.charCodeAt(2),
      e.charCodeAt(3)
    ];
  }, a.TAG = s(4), o.Card8 = o.BYTE, a.Card8 = a.BYTE, o.Card16 = o.USHORT, a.Card16 = a.USHORT, o.OffSize = o.BYTE, a.OffSize = a.BYTE, o.SID = o.USHORT, a.SID = a.USHORT, o.NUMBER = function (e) {
    return e >= -107 && e <= 107 ? [e + 139] : e >= 108 && e <= 1131 ? [
      247 + ((e -= 108) >> 8),
      255 & e
    ] : e >= -1131 && e <= -108 ? [
      251 + ((e = -e - 108) >> 8),
      255 & e
    ] : e >= -32768 && e <= 32767 ? o.NUMBER16(e) : o.NUMBER32(e);
  }, a.NUMBER = function (e) {
    return o.NUMBER(e).length;
  }, o.NUMBER16 = function (e) {
    return [
      28,
      e >> 8 & 255,
      255 & e
    ];
  }, a.NUMBER16 = s(3), o.NUMBER32 = function (e) {
    return [
      29,
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      255 & e
    ];
  }, a.NUMBER32 = s(5), o.REAL = function (e) {
    var t = e.toString(), i = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
    if (i) {
      var n = parseFloat("1e" + ((i[2] ? +i[2] : 0) + i[1].length));
      t = (Math.round(e * n) / n).toString();
    }
    var r, o, a = "";
    for (r = 0, o = t.length; r < o; r += 1) {
      var s = t[r];
      a += "e" === s ? "-" === t[++r] ? "c" : "b" : "." === s ? "a" : "-" === s ? "e" : s;
    }
    var l = [30];
    for (r = 0, o = (a += 1 & a.length ? "f" : "ff").length; r < o; r += 2)
      l.push(parseInt(a.substr(r, 2), 16));
    return l;
  }, a.REAL = function (e) {
    return o.REAL(e).length;
  }, o.NAME = o.CHARARRAY, a.NAME = a.CHARARRAY, o.STRING = o.CHARARRAY, a.STRING = a.CHARARRAY, r.UTF8 = function (e, t, i) {
    for (var n = [], r = i, o = 0; o < r; o++, t += 1)
      n[o] = e.getUint8(t);
    return String.fromCharCode.apply(null, n);
  }, r.UTF16 = function (e, t, i) {
    for (var n = [], r = i / 2, o = 0; o < r; o++, t += 2)
      n[o] = e.getUint16(t);
    return String.fromCharCode.apply(null, n);
  }, o.UTF16 = function (e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      var n = e.charCodeAt(i);
      t[t.length] = n >> 8 & 255, t[t.length] = 255 & n;
    }
    return t;
  }, a.UTF16 = function (e) {
    return 2 * e.length;
  };
  var l = {
    "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü\u2020\xB0\xA2\xA3\xA7\u2022\xB6ß\xAEŠ\u2122\xB4\xA8\u2260ŽØ\u221E\xB1\u2264\u2265\u2206µ\u2202\u2211\u220Fš\u222BªºΩžø\xBF\xA1\xAC\u221Aƒ\u2248Ć\xABČ\u2026\xA0ÀÃÕŒœĐ\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203AÆ\xBB\u2013\xB7\u201A\u201E\u2030ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ\u02DC\xAFπË\u02DA\xB8Êæˇ",
    "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ\u2020\xB0Ґ\xA3\xA7\u2022\xB6І\xAE\xA9\u2122Ђђ\u2260Ѓѓ\u221E\xB1\u2264\u2265іµґЈЄєЇїЉљЊњјЅ\xAC\u221Aƒ\u2248\u2206\xAB\xBB\u2026\xA0ЋћЌќѕ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201EЎўЏџ\u2116Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
    "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü\u2020\xB0\xA2\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122\xB4\xA8\u2260ÆØḂ\xB1\u2264\u2265ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ\xAB\xBB\u2026\xA0ÀÃÕŒœ\u2013\u2014\u201C\u201D\u2018\u2019ṡẛÿŸṪ\u20AC\u2039\u203AŶŷṫ\xB7Ỳỳ\u204AÂÊÁËÈÍÎÏÌÓÔ\u2663ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
    "x-mac-greek": "Ä\xB9\xB2É\xB3ÖÜ\u0385àâä\u0384\xA8çéèêë\xA3\u2122îï\u2022\xBD\u2030ôö\xA6\u20ACùûü\u2020ΓΔΘΛΞΠß\xAE\xA9ΣΪ\xA7\u2260\xB0\xB7Α\xB1\u2264\u2265\xA5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xACΟΡ\u2248Τ\xAB\xBB\u2026\xA0ΥΧΆΈœ\u2013\u2015\u201C\u201D\u2018\u2019\xF7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xAD",
    "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ\xB0\xA2\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122\xB4\xA8\u2260ÆØ\u221E\xB1\u2264\u2265\xA5µ\u2202\u2211\u220Fπ\u222BªºΩæø\xBF\xA1\xAC\u221Aƒ\u2248\u2206\xAB\xBB\u2026\xA0ÀÃÕŒœ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CAÿŸ\u2044\u20ACÐðÞþý\xB7\u201A\u201E\u2030ÂÊÁËÈÍÎÏÌÓÔ\uF8FFÒÚÛÙıˆ\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DBˇ",
    "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xB0ᒡᒥᒦ\u2022\xB6ᒧ\xAE\xA9\u2122ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ\u2026\xA0ᔮᔾᕕᕖᕗ\u2013\u2014\u201C\u201D\u2018\u2019ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
    "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü\u2020\xB0Ę\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122ę\xA8\u2260ģĮįĪ\u2264\u2265īĶ\u2202\u2211łĻļĽľĹĺŅņŃ\xAC\u221AńŇ\u2206\xAB\xBB\u2026\xA0ňŐÕőŌ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CAōŔŕŘ\u2039\u203AřŖŗŠ\u201A\u201EšŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
    macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü\u2020\xB0\xA2\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122\xB4\xA8\u2260ÆØ\u221E\xB1\u2264\u2265\xA5µ\u2202\u2211\u220Fπ\u222BªºΩæø\xBF\xA1\xAC\u221Aƒ\u2248\u2206\xAB\xBB\u2026\xA0ÀÃÕŒœ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CAÿŸ\u2044\u20AC\u2039\u203Aﬁﬂ\u2021\xB7\u201A\u201E\u2030ÂÊÁËÈÍÎÏÌÓÔ\uF8FFÒÚÛÙıˆ\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DBˇ",
    "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü\u2020\xB0\xA2\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122\xB4\xA8\u2260ĂȘ\u221E\xB1\u2264\u2265\xA5µ\u2202\u2211\u220Fπ\u222BªºΩăș\xBF\xA1\xAC\u221Aƒ\u2248\u2206\xAB\xBB\u2026\xA0ÀÃÕŒœ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CAÿŸ\u2044\u20AC\u2039\u203AȚț\u2021\xB7\u201A\u201E\u2030ÂÊÁËÈÍÎÏÌÓÔ\uF8FFÒÚÛÙıˆ\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DBˇ",
    "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü\u2020\xB0\xA2\xA3\xA7\u2022\xB6ß\xAE\xA9\u2122\xB4\xA8\u2260ÆØ\u221E\xB1\u2264\u2265\xA5µ\u2202\u2211\u220Fπ\u222BªºΩæø\xBF\xA1\xAC\u221Aƒ\u2248\u2206\xAB\xBB\u2026\xA0ÀÃÕŒœ\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CAÿŸĞğİıŞş\u2021\xB7\u201A\u201E\u2030ÂÊÁËÈÍÎÏÌÓÔ\uF8FFÒÚÛÙ\uF8A0ˆ\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DBˇ"
  };
  r.MACSTRING = function (e, t, i, n) {
    var r = l[n];
    if (void 0 !== r) {
      for (var o = "", a = 0; a < i; a++) {
        var s = e.getUint8(t + a);
        o += s <= 127 ? String.fromCharCode(s) : r[127 & s];
      }
      return o;
    }
  };
  var h, A = "function" == typeof WeakMap && new WeakMap();
  function c(e) {
    return e >= -128 && e <= 127;
  }
  function p(e, t, i) {
    for (var n = 0, r = e.length; t < r && n < 64 && 0 === e[t];)
      ++t, ++n;
    return i.push(128 | n - 1), t;
  }
  function u(e, t, i) {
    for (var n = 0, r = e.length, o = t; o < r && n < 64;) {
      var a = e[o];
      if (!c(a))
        break;
      if (0 === a && o + 1 < r && 0 === e[o + 1])
        break;
      ++o, ++n;
    }
    i.push(n - 1);
    for (var s = t; s < o; ++s)
      i.push(e[s] + 256 & 255);
    return o;
  }
  function d(e, t, i) {
    for (var n = 0, r = e.length, o = t; o < r && n < 64;) {
      var a = e[o];
      if (0 === a)
        break;
      if (c(a) && o + 1 < r && c(e[o + 1]))
        break;
      ++o, ++n;
    }
    i.push(64 | n - 1);
    for (var s = t; s < o; ++s) {
      var l = e[s];
      i.push(l + 65536 >> 8 & 255, l + 256 & 255);
    }
    return o;
  }
  o.MACSTRING = function (e, t) {
    var i = function (e) {
      if (!h)
        for (var t in (h = {}, l))
          h[t] = new String(t);
      var i = h[e];
      if (void 0 !== i) {
        if (A) {
          var n = A.get(i);
          if (void 0 !== n)
            return n;
        }
        var r = l[e];
        if (void 0 !== r) {
          for (var o = {}, a = 0; a < r.length; a++)
            o[r.charCodeAt(a)] = a + 128;
          return A && A.set(i, o), o;
        }
      }
    }(t);
    if (void 0 !== i) {
      for (var n = [], r = 0; r < e.length; r++) {
        var o = e.charCodeAt(r);
        if (o >= 128 && void 0 === (o = i[o]))
          return;
        n[r] = o;
      }
      return n;
    }
  }, a.MACSTRING = function (e, t) {
    var i = o.MACSTRING(e, t);
    return void 0 !== i ? i.length : 0;
  }, o.VARDELTAS = function (e) {
    for (var t = 0, i = []; t < e.length;) {
      var n = e[t];
      t = 0 === n ? p(e, t, i) : n >= -128 && n <= 127 ? u(e, t, i) : d(e, t, i);
    }
    return i;
  }, o.INDEX = function (e) {
    var t, i = 1, n = [i], r = [];
    for (t = 0; t < e.length; t += 1) {
      var a = o.OBJECT(e[t]);
      Array.prototype.push.apply(r, a), i += a.length, n.push(i);
    }
    if (0 === r.length)
      return [
        0,
        0
      ];
    var s = [], l = 1 + Math.floor(Math.log(i) / Math.log(2)) / 8 | 0, h = [
        void 0,
        o.BYTE,
        o.USHORT,
        o.UINT24,
        o.ULONG
      ][l];
    for (t = 0; t < n.length; t += 1) {
      var A = h(n[t]);
      Array.prototype.push.apply(s, A);
    }
    return Array.prototype.concat(o.Card16(e.length), o.OffSize(l), s, r);
  }, a.INDEX = function (e) {
    return o.INDEX(e).length;
  }, o.DICT = function (e) {
    for (var t = [], i = Object.keys(e), n = i.length, r = 0; r < n; r += 1) {
      var a = parseInt(i[r], 0), s = e[a];
      t = (t = t.concat(o.OPERAND(s.value, s.type))).concat(o.OPERATOR(a));
    }
    return t;
  }, a.DICT = function (e) {
    return o.DICT(e).length;
  }, o.OPERATOR = function (e) {
    return e < 1200 ? [e] : [
      12,
      e - 1200
    ];
  }, o.OPERAND = function (e, t) {
    var i = [];
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r += 1)
        n.argument(e.length === t.length, "Not enough arguments given for type" + t), i = i.concat(o.OPERAND(e[r], t[r]));
    else if ("SID" === t)
      i = i.concat(o.NUMBER(e));
    else if ("offset" === t)
      i = i.concat(o.NUMBER32(e));
    else if ("number" === t)
      i = i.concat(o.NUMBER(e));
    else {
      if ("real" !== t)
        throw new Error("Unknown operand type " + t);
      i = i.concat(o.REAL(e));
    }
    return i;
  }, o.OP = o.BYTE, a.OP = a.BYTE;
  var g = "function" == typeof WeakMap && new WeakMap();
  o.CHARSTRING = function (e) {
    if (g) {
      var t = g.get(e);
      if (void 0 !== t)
        return t;
    }
    for (var i = [], n = e.length, r = 0; r < n; r += 1) {
      var a = e[r];
      i = i.concat(o[a.type](a.value));
    }
    return g && g.set(e, i), i;
  }, a.CHARSTRING = function (e) {
    return o.CHARSTRING(e).length;
  }, o.OBJECT = function (e) {
    var t = o[e.type];
    return n.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value);
  }, a.OBJECT = function (e) {
    var t = a[e.type];
    return n.argument(void 0 !== t, "No sizeOf function for type " + e.type), t(e.value);
  }, o.TABLE = function (e) {
    var t, i = [], r = e.fields.length, a = [], s = [];
    for (t = 0; t < r; t += 1) {
      var l = e.fields[t], h = o[l.type];
      n.argument(void 0 !== h, "No encoding function for field type " + l.type + " (" + l.name + ")");
      var A = e[l.name];
      void 0 === A && (A = l.value);
      var c = h(A);
      "TABLE" === l.type ? (s.push(i.length), i = i.concat([
        0,
        0
      ]), a.push(c)) : i = i.concat(c);
    }
    for (t = 0; t < a.length; t += 1) {
      var p = s[t], u = i.length;
      n.argument(u < 65536, "Table " + e.tableName + " too big."), i[p] = u >> 8, i[p + 1] = 255 & u, i = i.concat(a[t]);
    }
    return i;
  }, a.TABLE = function (e) {
    for (var t = 0, i = e.fields.length, r = 0; r < i; r += 1) {
      var o = e.fields[r], s = a[o.type];
      n.argument(void 0 !== s, "No sizeOf function for field type " + o.type + " (" + o.name + ")");
      var l = e[o.name];
      void 0 === l && (l = o.value), t += s(l), "TABLE" === o.type && (t += 2);
    }
    return t;
  }, o.RECORD = o.TABLE, a.RECORD = a.TABLE, o.LITERAL = function (e) {
    return e;
  }, a.LITERAL = function (e) {
    return e.length;
  }, t.decode = r, t.encode = o, t.sizeOf = a;
}
