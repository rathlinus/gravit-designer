/**
 * Module 718
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
  var n = require(377) /* module */, r = n.decode, o = n.encode, a = require(89) /* module */, s = require(115) /* module */, l = [
      "copyright",
      "fontFamily",
      "fontSubfamily",
      "uniqueID",
      "fullName",
      "version",
      "postScriptName",
      "trademark",
      "manufacturer",
      "designer",
      "description",
      "manufacturerURL",
      "designerURL",
      "license",
      "licenseURL",
      "reserved",
      "preferredFamily",
      "preferredSubfamily",
      "compatibleFullName",
      "sampleText",
      "postScriptFindFontName",
      "wwsFamily",
      "wwsSubfamily"
    ], h = {
      0: "en",
      1: "fr",
      2: "de",
      3: "it",
      4: "nl",
      5: "sv",
      6: "es",
      7: "da",
      8: "pt",
      9: "no",
      10: "he",
      11: "ja",
      12: "ar",
      13: "fi",
      14: "el",
      15: "is",
      16: "mt",
      17: "tr",
      18: "hr",
      19: "zh-Hant",
      20: "ur",
      21: "hi",
      22: "th",
      23: "ko",
      24: "lt",
      25: "pl",
      26: "hu",
      27: "es",
      28: "lv",
      29: "se",
      30: "fo",
      31: "fa",
      32: "ru",
      33: "zh",
      34: "nl-BE",
      35: "ga",
      36: "sq",
      37: "ro",
      38: "cz",
      39: "sk",
      40: "si",
      41: "yi",
      42: "sr",
      43: "mk",
      44: "bg",
      45: "uk",
      46: "be",
      47: "uz",
      48: "kk",
      49: "az-Cyrl",
      50: "az-Arab",
      51: "hy",
      52: "ka",
      53: "mo",
      54: "ky",
      55: "tg",
      56: "tk",
      57: "mn-CN",
      58: "mn",
      59: "ps",
      60: "ks",
      61: "ku",
      62: "sd",
      63: "bo",
      64: "ne",
      65: "sa",
      66: "mr",
      67: "bn",
      68: "as",
      69: "gu",
      70: "pa",
      71: "or",
      72: "ml",
      73: "kn",
      74: "ta",
      75: "te",
      76: "si",
      77: "my",
      78: "km",
      79: "lo",
      80: "vi",
      81: "id",
      82: "tl",
      83: "ms",
      84: "ms-Arab",
      85: "am",
      86: "ti",
      87: "om",
      88: "so",
      89: "sw",
      90: "rw",
      91: "rn",
      92: "ny",
      93: "mg",
      94: "eo",
      128: "cy",
      129: "eu",
      130: "ca",
      131: "la",
      132: "qu",
      133: "gn",
      134: "ay",
      135: "tt",
      136: "ug",
      137: "dz",
      138: "jv",
      139: "su",
      140: "gl",
      141: "af",
      142: "br",
      143: "iu",
      144: "gd",
      145: "gv",
      146: "ga",
      147: "to",
      148: "el-polyton",
      149: "kl",
      150: "az",
      151: "nn"
    }, A = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 5,
      11: 1,
      12: 4,
      13: 0,
      14: 6,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 2,
      20: 4,
      21: 9,
      22: 21,
      23: 3,
      24: 29,
      25: 29,
      26: 29,
      27: 29,
      28: 29,
      29: 0,
      30: 0,
      31: 4,
      32: 7,
      33: 25,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
      38: 29,
      39: 29,
      40: 0,
      41: 5,
      42: 7,
      43: 7,
      44: 7,
      45: 7,
      46: 7,
      47: 7,
      48: 7,
      49: 7,
      50: 4,
      51: 24,
      52: 23,
      53: 7,
      54: 7,
      55: 7,
      56: 7,
      57: 27,
      58: 7,
      59: 4,
      60: 4,
      61: 4,
      62: 4,
      63: 26,
      64: 9,
      65: 9,
      66: 9,
      67: 13,
      68: 13,
      69: 11,
      70: 10,
      71: 12,
      72: 17,
      73: 16,
      74: 14,
      75: 15,
      76: 18,
      77: 19,
      78: 20,
      79: 22,
      80: 30,
      81: 0,
      82: 0,
      83: 0,
      84: 4,
      85: 28,
      86: 28,
      87: 28,
      88: 0,
      89: 0,
      90: 0,
      91: 0,
      92: 0,
      93: 0,
      94: 0,
      128: 0,
      129: 0,
      130: 0,
      131: 0,
      132: 0,
      133: 0,
      134: 0,
      135: 7,
      136: 4,
      137: 26,
      138: 0,
      139: 0,
      140: 0,
      141: 0,
      142: 0,
      143: 28,
      144: 0,
      145: 0,
      146: 0,
      147: 0,
      148: 6,
      149: 0,
      150: 0,
      151: 0
    }, c = {
      1078: "af",
      1052: "sq",
      1156: "gsw",
      1118: "am",
      5121: "ar-DZ",
      15361: "ar-BH",
      3073: "ar",
      2049: "ar-IQ",
      11265: "ar-JO",
      13313: "ar-KW",
      12289: "ar-LB",
      4097: "ar-LY",
      6145: "ary",
      8193: "ar-OM",
      16385: "ar-QA",
      1025: "ar-SA",
      10241: "ar-SY",
      7169: "aeb",
      14337: "ar-AE",
      9217: "ar-YE",
      1067: "hy",
      1101: "as",
      2092: "az-Cyrl",
      1068: "az",
      1133: "ba",
      1069: "eu",
      1059: "be",
      2117: "bn",
      1093: "bn-IN",
      8218: "bs-Cyrl",
      5146: "bs",
      1150: "br",
      1026: "bg",
      1027: "ca",
      3076: "zh-HK",
      5124: "zh-MO",
      2052: "zh",
      4100: "zh-SG",
      1028: "zh-TW",
      1155: "co",
      1050: "hr",
      4122: "hr-BA",
      1029: "cs",
      1030: "da",
      1164: "prs",
      1125: "dv",
      2067: "nl-BE",
      1043: "nl",
      3081: "en-AU",
      10249: "en-BZ",
      4105: "en-CA",
      9225: "en-029",
      16393: "en-IN",
      6153: "en-IE",
      8201: "en-JM",
      17417: "en-MY",
      5129: "en-NZ",
      13321: "en-PH",
      18441: "en-SG",
      7177: "en-ZA",
      11273: "en-TT",
      2057: "en-GB",
      1033: "en",
      12297: "en-ZW",
      1061: "et",
      1080: "fo",
      1124: "fil",
      1035: "fi",
      2060: "fr-BE",
      3084: "fr-CA",
      1036: "fr",
      5132: "fr-LU",
      6156: "fr-MC",
      4108: "fr-CH",
      1122: "fy",
      1110: "gl",
      1079: "ka",
      3079: "de-AT",
      1031: "de",
      5127: "de-LI",
      4103: "de-LU",
      2055: "de-CH",
      1032: "el",
      1135: "kl",
      1095: "gu",
      1128: "ha",
      1037: "he",
      1081: "hi",
      1038: "hu",
      1039: "is",
      1136: "ig",
      1057: "id",
      1117: "iu",
      2141: "iu-Latn",
      2108: "ga",
      1076: "xh",
      1077: "zu",
      1040: "it",
      2064: "it-CH",
      1041: "ja",
      1099: "kn",
      1087: "kk",
      1107: "km",
      1158: "quc",
      1159: "rw",
      1089: "sw",
      1111: "kok",
      1042: "ko",
      1088: "ky",
      1108: "lo",
      1062: "lv",
      1063: "lt",
      2094: "dsb",
      1134: "lb",
      1071: "mk",
      2110: "ms-BN",
      1086: "ms",
      1100: "ml",
      1082: "mt",
      1153: "mi",
      1146: "arn",
      1102: "mr",
      1148: "moh",
      1104: "mn",
      2128: "mn-CN",
      1121: "ne",
      1044: "nb",
      2068: "nn",
      1154: "oc",
      1096: "or",
      1123: "ps",
      1045: "pl",
      1046: "pt",
      2070: "pt-PT",
      1094: "pa",
      1131: "qu-BO",
      2155: "qu-EC",
      3179: "qu",
      1048: "ro",
      1047: "rm",
      1049: "ru",
      9275: "smn",
      4155: "smj-NO",
      5179: "smj",
      3131: "se-FI",
      1083: "se",
      2107: "se-SE",
      8251: "sms",
      6203: "sma-NO",
      7227: "sms",
      1103: "sa",
      7194: "sr-Cyrl-BA",
      3098: "sr",
      6170: "sr-Latn-BA",
      2074: "sr-Latn",
      1132: "nso",
      1074: "tn",
      1115: "si",
      1051: "sk",
      1060: "sl",
      11274: "es-AR",
      16394: "es-BO",
      13322: "es-CL",
      9226: "es-CO",
      5130: "es-CR",
      7178: "es-DO",
      12298: "es-EC",
      17418: "es-SV",
      4106: "es-GT",
      18442: "es-HN",
      2058: "es-MX",
      19466: "es-NI",
      6154: "es-PA",
      15370: "es-PY",
      10250: "es-PE",
      20490: "es-PR",
      3082: "es",
      1034: "es",
      21514: "es-US",
      14346: "es-UY",
      8202: "es-VE",
      2077: "sv-FI",
      1053: "sv",
      1114: "syr",
      1064: "tg",
      2143: "tzm",
      1097: "ta",
      1092: "tt",
      1098: "te",
      1054: "th",
      1105: "bo",
      1055: "tr",
      1090: "tk",
      1152: "ug",
      1058: "uk",
      1070: "hsb",
      1056: "ur",
      2115: "uz-Cyrl",
      1091: "uz",
      1066: "vi",
      1106: "cy",
      1160: "wo",
      1157: "sah",
      1144: "ii",
      1130: "yo"
    };
  function p(e, t, i) {
    switch (e) {
    case 0:
      if (65535 === t)
        return "und";
      if (i)
        return i[t];
      break;
    case 1:
      return h[t];
    case 3:
      return c[t];
    }
  }
  var u = {
      0: "macintosh",
      1: "x-mac-japanese",
      2: "x-mac-chinesetrad",
      3: "x-mac-korean",
      6: "x-mac-greek",
      7: "x-mac-cyrillic",
      9: "x-mac-devanagai",
      10: "x-mac-gurmukhi",
      11: "x-mac-gujarati",
      12: "x-mac-oriya",
      13: "x-mac-bengali",
      14: "x-mac-tamil",
      15: "x-mac-telugu",
      16: "x-mac-kannada",
      17: "x-mac-malayalam",
      18: "x-mac-sinhalese",
      19: "x-mac-burmese",
      20: "x-mac-khmer",
      21: "x-mac-thai",
      22: "x-mac-lao",
      23: "x-mac-georgian",
      24: "x-mac-armenian",
      25: "x-mac-chinesesimp",
      26: "x-mac-tibetan",
      27: "x-mac-mongolian",
      28: "x-mac-ethiopic",
      29: "x-mac-ce",
      30: "x-mac-vietnamese",
      31: "x-mac-extarabic"
    }, d = {
      15: "x-mac-icelandic",
      17: "x-mac-turkish",
      18: "x-mac-croatian",
      24: "x-mac-ce",
      25: "x-mac-ce",
      26: "x-mac-ce",
      27: "x-mac-ce",
      28: "x-mac-ce",
      30: "x-mac-icelandic",
      37: "x-mac-romanian",
      38: "x-mac-ce",
      39: "x-mac-ce",
      40: "x-mac-ce",
      143: "x-mac-inuit",
      146: "x-mac-gaelic"
    };
  function g(e, t, i) {
    switch (e) {
    case 0:
      return "utf-16";
    case 1:
      return d[i] || u[t];
    case 3:
      if (1 === t || 10 === t)
        return "utf-16";
    }
  }
  function f(e) {
    var t = {};
    for (var require in e)
      t[e[require]] = parseInt(require);
    return t;
  }
  function m(e, t, i, n, r, o) {
    return new s.Record("NameRecord", [
      {
        name: "platformID",
        type: "USHORT",
        value: e
      },
      {
        name: "encodingID",
        type: "USHORT",
        value: t
      },
      {
        name: "languageID",
        type: "USHORT",
        value: i
      },
      {
        name: "nameID",
        type: "USHORT",
        value: n
      },
      {
        name: "length",
        type: "USHORT",
        value: r
      },
      {
        name: "offset",
        type: "USHORT",
        value: o
      }
    ]);
  }
  function y(e, t) {
    var i = function (e, t) {
      var i = e.length, n = t.length - i + 1;
      e:
        for (var r = 0; r < n; r++)
          for (; r < n; r++) {
            for (var o = 0; o < i; o++)
              if (t[r + o] !== e[o])
                continue e;
            return r;
          }
      return -1;
    }(e, t);
    if (i < 0) {
      i = t.length;
      for (var n = 0, r = e.length; n < r; ++n)
        t.push(e[n]);
    }
    return i;
  }
  module.parse = function (e, t, i) {
    for (var n = {}, o = new a.Parser(e, t), s = o.parseUShort(), h = o.parseUShort(), A = o.offset + o.parseUShort(), c = 0; c < h; c++) {
      var u, d = o.parseUShort(), f = o.parseUShort(), m = o.parseUShort(), y = o.parseUShort(), _ = l[y] || y, v = o.parseUShort(), b = o.parseUShort(), C = p(d, m, i), w = g(d, f, m);
      if (undefined !== w && undefined !== C)
        if (u = "utf-16" === w ? r.UTF16(e, A + b, v) : r.MACSTRING(e, A + b, v, w)) {
          var E = n[_];
          undefined === E && (E = n[_] = {}), E[C] = u;
        }
    }
    return 1 === s && o.parseUShort(), n;
  }, module.make = function (e, t) {
    var i, n = [], r = {}, a = f(l);
    for (var p in e) {
      var u = a[p];
      if (undefined === u && (u = p), i = parseInt(u), isNaN(i))
        throw new Error("Name table entry \"" + p + "\" does not exist, see nameTableNames for complete list.");
      r[i] = e[p], n.push(i);
    }
    for (var d = f(h), _ = f(c), v = [], b = [], C = 0; C < n.length; C++) {
      var w = r[i = n[C]];
      for (var E in w) {
        var B = w[E], x = 1, P = d[E], S = A[P], T = g(x, S, P), I = o.MACSTRING(B, T);
        undefined === I && (x = 0, (P = t.indexOf(E)) < 0 && (P = t.length, t.push(E)), S = 4, I = o.UTF16(B));
        var F = y(I, b);
        v.push(m(x, S, P, i, I.length, F));
        var R = _[E];
        if (undefined !== R) {
          var D = o.UTF16(B), k = y(D, b);
          v.push(m(3, 1, R, i, D.length, k));
        }
      }
    }
    v.sort(function (e, t) {
      return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID;
    });
    for (var G = new s.Table("name", [
          {
            name: "format",
            type: "USHORT",
            value: 0
          },
          {
            name: "count",
            type: "USHORT",
            value: v.length
          },
          {
            name: "stringOffset",
            type: "USHORT",
            value: 6 + 12 * v.length
          }
        ]), Q = 0; Q < v.length; Q++)
      G.fields.push({
        name: "record_" + Q,
        type: "RECORD",
        value: v[Q]
      });
    return G.fields.push({
      name: "strings",
      type: "LITERAL",
      value: b
    }), G;
  };
}
