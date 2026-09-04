/**
 * chunk.vendor.js Module #726
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(108);

      function o() {}

      function a() {}

      function s(e, t) {
        ((this._primitive = e), (this._size = t * e.getSize()));
      }

      function l(e) {
        ((this.__size = e), (this._size = Math.abs(e)));
      }
      ((o.getFont = function (e, t, i, n, r, a) {
        return n ? new o.Parser(n).getFont(e, t, i, r, a) : null;
      }),
        (a.prototype._size = -1),
        (a.prototype.parent = null),
        (a.prototype._position = 0),
        (a.prototype._parse = function (e, t, i, n, r) {
          ((this._position = t), (r[0] = this._size));
        }),
        n.inherit(s, a),
        n.inherit(l, a),
        (l.prototype.__size = 0),
        (l.prototype._parse = function (e, t, i, n, r) {
          switch (((r[0] = this._size), this.__size)) {
            case -2:
              return e.getInt16(t);
            case 1:
              return e.getUint8(t);
            case 2:
              return e.getUint16(t);
            case 3:
              return e.getUint32(t) >> 8;
            case 4:
              return e.getUint32(t);
            default:
              return 0;
          }
        }),
        (l.prototype.getSize = function () {
          return this._size;
        }));
      var h = new l(1),
        A = new l(2),
        c = new l(3),
        p = new l(4),
        u = new l(-2);

      function d(e) {
        this._data = e;
      }

      function g(e, t, i) {
        ((this._snode = e), (this._numField = t), (this._sizeTrf = i || null));
      }

      function f(e) {
        e instanceof a
          ? ((this._size = e), (this._pascalString = !0))
          : (this._size = e);
      }

      function m(e) {
        this._sizeField = e;
      }

      function y(e, t, i) {
        ((this._type = i || "relative"),
          (this._snode = t),
          (this._primitive = e),
          (this._size = e.getSize()));
      }
      (n.inherit(d, a),
        (d.prototype._data = null),
        (d.prototype._parse = function (e, t, i, n, r) {
          var o = Object.keys(this._data),
            a = {},
            s = [0],
            l = 0;
          this._position = t;
          for (
            var h = {
                parent: this,
                one_up: i,
              },
              A = 0;
            A < o.length;
            A++
          ) {
            var c = o[A],
              p = this._data[c];
            ((a[c] = p._parse(e, t, h, a, s)), (l += s[0]), (t += s[0]));
          }
          return ((this._size = l), (r[0] = l), a);
        }),
        n.inherit(g, a),
        (g.prototype._numField = null),
        (g.prototype._snode = null),
        (g.prototype._sizeTrf = null),
        (g.prototype._parse = function (e, t, i, n, r) {
          this._position = t;
          var o = n[this._numField];
          if ((this._sizeTrf && (o = this._sizeTrf(o)), o > 256))
            throw new Error("Something might be wrong");
          for (
            var a = [],
              s = [0],
              l = 0,
              h = {
                parent: this,
                one_up: i,
              },
              A = 0;
            A < o;
            A++
          )
            (a.push(this._snode._parse(e, t, h, n, s)),
              (t += s[0]),
              (l += s[0]));
          return ((r[0] = l), a);
        }),
        n.inherit(f, a),
        (f.prototype._pascalString = !1),
        (f.prototype._parse = function (e, t, i, n, r) {
          this._position = t;
          var o,
            a = "",
            s = null;
          this._pascalString
            ? ((s = [0]), (o = this._size._parse(e, t, i, n, s)), (t += s[0]))
            : (o = this._size < 0 ? 512 : this._size);
          for (var l = 0; l < o && t < e.byteLength; l++, t++) {
            var h = e.getUint8(t);
            if (0 === h) break;
            a += String.fromCharCode(h);
          }
          return ((r[0] = s ? o + s[0] : o), a);
        }),
        n.inherit(m, a),
        (m.prototype._parse = function (e, t, i, n, r) {
          ((this._position = t), (r[0] = n[this._sizeField] || 0));
          var o = r[0];
          return function () {
            return e.slice(t, o);
          };
        }),
        n.inherit(m, a),
        (m.prototype._sizeField = null),
        n.inherit(y, a),
        (y.prototype._type = null),
        (y.prototype._primitive = null),
        (y.prototype._snode = null),
        (y.prototype._parse = function (e, t, i, n, r) {
          a.prototype._parse.call(this, e, t, i, n, r);
          var o = this._primitive._parse(e, t, i, n, r);
          if (this._type && this._type.startsWith("parent")) {
            for (var s = this._type.split(".").length, l = i, h = 0; h < s; h++)
              l = l.one_up;
            if (!l || !l.parent) throw new Error("Invalid file structure");
            t = l.parent._position + o;
          } else
            "absolute" === this._type
              ? (t = o)
              : "immediate" === this._type
                ? (t += o)
                : (t = i.parent._position + o);
          return "string" == typeof this._snode
            ? t
            : this._snode._parse(e, t, i, n, [0]);
        }),
        (o.Parser = function (e) {
          if (e) {
            if (!(e instanceof ArrayBuffer)) {
              if (!(e.buffer instanceof ArrayBuffer))
                return void console.warn("Invalid font buffer given");
              e = e.buffer;
            }
            ((this._buffer = new DataView(e)), this._checkType());
          }
        }),
        (o.Parser.prototype._parse = function (e) {
          return e._parse(this._buffer, 0, null, null, [0]);
        }),
        (o.Parser.prototype._buffer = null),
        (o.Parser.prototype._type = null),
        (o.Parser.prototype._pos = 0),
        (o.Parser.prototype._parsedStruct = null),
        (o.Parser.prototype.getFont = function (e, t, i, n, a) {
          var s = [];
          switch (
            ((i = parseInt(i) || 400), (t = t || r.Style.Normal), this._type)
          ) {
            case _:
              var l = this._parsedStruct.offsets.slice();
              l.sort(function (e, t) {
                return e - t;
              });
              for (var h = 0; h < l.length; h++) {
                var A = l[h];
                if (
                  ((m = a
                    ? new DataView(this._buffer.buffer, A)
                    : this._buffer.buffer.slice(A)),
                  (w = o.getOpenTypeInfo(m, A)),
                  a || o.patchOffsets(m, A),
                  w &&
                    (n ||
                      (w.name === e &&
                        parseInt(w.weight) === parseInt(i) &&
                        w.style === t)) &&
                    (s.push({
                      buffer: a ? null : m,
                      family: w.name,
                      weight: w.weight,
                      style: w.style,
                      subfamily: w.subfamily,
                      displayname: w.displayname,
                    }),
                    !n))
                )
                  return s;
              }
              break;
            case v:
              var c = this._parsedStruct.map.typeList.types,
                p = null;
              for (h = 0; h < c.length; h++) {
                for (var u = c[h].refList, d = 0; d < u.length; d++) {
                  var g = u[d];
                  g.nameOffset >= 0
                    ? (g.name = C._parse(
                        this._buffer,
                        g.nameOffset + this._parsedStruct.map.nameListOffset,
                        null,
                        null,
                        [0],
                      ))
                    : (g.name = null);
                }
                "sfnt" === c[h].name && (p = c[h]);
              }
              if (p) {
                var f = [];
                for (u = p.refList, h = 0; h < u.length; h++)
                  f.push(u[h].dataOffset);
                f.sort(function (e, t) {
                  return e - t;
                });
                for (h = 0; h < f.length; h++) {
                  var m,
                    y = this._parsedStruct.dataOffset + f[h] + 4,
                    w = null;
                  if (
                    ((m = new DataView(this._buffer.buffer, y)),
                    (w = o.getOpenTypeInfo(m, 0)) &&
                      (n ||
                        (w.name === e &&
                          parseInt(w.weight) === parseInt(i) &&
                          w.style === t)) &&
                      (s.push({
                        buffer: a ? null : m,
                        family: w.name,
                        weight: w.weight,
                        style: w.style,
                        subfamily: w.subfamily,
                        displayname: w.displayname,
                      }),
                      !n))
                  )
                    return s;
                }
              }
              break;
            case b:
              (w = o.getOpenTypeInfo(this._buffer)) &&
                (n ||
                  (w.name === e &&
                    parseInt(w.weight) === parseInt(i) &&
                    w.style === t)) &&
                s.push({
                  buffer: a ? null : this._buffer.buffer,
                  family: w.name,
                  weight: w.weight,
                  style: w.style,
                  subfamily: w.subfamily,
                  displayname: w.displayname,
                });
          }
          return s;
        }));
      var _ = 0,
        v = 1,
        b = 2,
        C = new f(h),
        w =
          (new d({
            len: p,
            buf: new m("len"),
          }),
          new d({
            id: A,
            nameOffset: u,
            attr: h,
            dataOffset: c,
            handle: p,
          })),
        E = new d({
          name: new f(4),
          maxTypeIndex: A,
          refList: new y(
            A,
            new g(w, "maxTypeIndex", function (e) {
              return e + 1;
            }),
            "parent.parent",
          ),
        }),
        B = new d({
          length: A,
          types: new g(E, "length", function (e) {
            return e + 1;
          }),
        }),
        x = new d({
          reserved: new s(h, 24),
          typeList: new y(A, B),
          nameListOffset: new y(A, "void"),
        }),
        P = new d({
          dataOffset: p,
          map: new y(p, x),
          dataLength: p,
          mapLength: p,
        }),
        S = new d({
          name: new f(4),
          version: p,
          numFonts: p,
          offsets: new g(p, "numFonts"),
        });
      ((o.Parser.prototype._checkType = function () {
        if (o._getOpenTypeInfo(this._buffer, 0, !0)) this._type = b;
        else {
          var e;
          try {
            e = this._parse(S);
          } catch (e) {}
          if (e && "ttcf" === e.name)
            return ((this._type = _), void (this._parsedStruct = e));
          try {
            if ((e = this._parse(P)))
              for (var t = e.map.typeList.types, i = 0; i < t.length; i++)
                if ("sfnt" === t[i].name)
                  return ((this._type = v), void (this._parsedStruct = e));
          } catch (e) {}
          this._type = -1;
        }
      }),
        (o.nameId = {
          COPYRIGHT: 0,
          FAMILY: 1,
          SUBFAMILY: 2,
          FONTID: 3,
          NAME: 4,
          VERSION: 5,
          POSTSCRIPTID: 6,
          TRADEMARK: 7,
          TYPO_FAMILY: 16,
          TYPO_SUBFAMILY: 17,
        }),
        (o.getOpenTypeInfo = function (e, t) {
          var i,
            n = o._getOpenTypeInfo(e, t || 0),
            a = n ? n[0] : null;
          if (a && (i = a[o.nameId.FAMILY] || a[o.nameId.NAME])) {
            n[1];
            var s = null,
              l = null,
              h = a[o.nameId.SUBFAMILY];
            return (
              h &&
                ((h = h.toLowerCase()),
                l ||
                  ((h.indexOf("italic") >= 0 ||
                    h.indexOf("oblique") >= 0 ||
                    h.indexOf("italique") >= 0) &&
                    (l = r.Style.Italic)),
                s ||
                  (h.indexOf("bold") >= 0 || h.indexOf("gras") >= 0
                    ? (s =
                        h.indexOf("extra") >= 0 || h.indexOf("ultra") >= 0
                          ? 800
                          : h.indexOf("semi") >= 0 || h.indexOf("demi") >= 0
                            ? 600
                            : 700)
                    : h.indexOf("black") >= 0 || h.indexOf("heavy") >= 0
                      ? (s = 900)
                      : h.indexOf("medium") >= 0
                        ? (s = 500)
                        : h.indexOf("regular") >= 0 || h.indexOf("normal") >= 0
                          ? (s = 400)
                          : h.indexOf("light") >= 0
                            ? (s =
                                h.indexOf("extra") >= 0 ||
                                h.indexOf("ultra") >= 0
                                  ? 200
                                  : 300)
                            : h.indexOf("thin") >= 0 && (s = 100))),
              {
                name: i,
                weight: (s = s || 400),
                style: (l = l || r.Style.Normal),
                displayname: a[o.nameId.TYPO_FAMILY],
                subfamily: a[o.nameId.TYPO_SUBFAMILY],
              }
            );
          }
          return null;
        }),
        (o._readTag = function (e, t) {
          return (
            String.fromCharCode(e.getUint8(t)) +
            String.fromCharCode(e.getUint8(t + 1)) +
            String.fromCharCode(e.getUint8(t + 2)) +
            String.fromCharCode(e.getUint8(t + 3))
          ).toLowerCase();
        }),
        (o.patchOffsets = function (e, t) {
          if (t) {
            var i;
            if (e instanceof DataView) i = e;
            else
              try {
                i = new DataView(e.buffer || e);
              } catch (e) {
                return retArr;
              }
            var n = i.byteLength;
            try {
              var r = 4,
                a = i.getUint16(r);
              r = 12;
              for (var s = 0; s < a && n - r >= 16; s++) {
                (o._readTag(i, r), (r += 4), (r += 4));
                var l = i.getUint32(r) - t;
                (i.setUint32(r, l), (r += 8));
              }
            } catch (e) {}
          }
        }));
      var T = [
          1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035,
          1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046,
          1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057,
          1058, 1059, 1060, 1061, 1062, 1063, 1064, 1066, 1067, 1068, 1069,
          1070, 1071, 1074, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083,
          1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096,
          1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107,
          1108, 1110, 1111, 1114, 1115, 1117, 1118, 1121, 1122, 1123, 1124,
          1125, 1128, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1144, 1146,
          1148, 1150, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160,
          1164, 2049, 2052, 2055, 2057, 2058, 2060, 2064, 2067, 2068, 2070,
          2074, 2077, 2092, 2094, 2107, 2108, 2110, 2115, 2117, 2128, 2141,
          2143, 2155, 3073, 3076, 3079, 3081, 3082, 3084, 3098, 3131, 3179,
          4097, 4100, 4103, 4105, 4106, 4108, 4122, 4155, 5121, 5124, 5127,
          5129, 5130, 5132, 5146, 5179, 6145, 6153, 6154, 6156, 6170, 6203,
          7169, 7177, 7178, 7194, 7227, 8193, 8201, 8202, 8218, 8251, 9217,
          9225, 9226, 9275, 10241, 10249, 10250, 11265, 11273, 11274, 12289,
          12297, 12298, 13313, 13321, 13322, 14337, 14346, 15361, 15370, 16385,
          16393, 16394, 17417, 17418, 18441, 18442, 19466, 20490, 21514,
        ],
        I = [
          1033, 2057, 3081, 4105, 5129, 6153, 7177, 8201, 9225, 10249, 11273,
          12297, 13321, 16393, 17417, 18441,
        ],
        F = {
          "x-mac-croatian":
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
          "x-mac-cyrillic":
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
          "x-mac-gaelic":
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
          "x-mac-greek":
            "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
          "x-mac-icelandic":
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
          "x-mac-inuit":
            "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
          "x-mac-ce":
            "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
          macintosh:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
          "x-mac-romanian":
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
          "x-mac-turkish":
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ",
        },
        R = {
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
          31: "x-mac-extarabic",
        },
        D = {
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
          146: "x-mac-gaelic",
        };

      function k(e, t, i) {
        switch (e) {
          case 0:
            return "utf16";
          case 1:
            return D[i] || R[t];
          case 3:
            if (1 === t || 10 === t) return "utf16";
        }
      }

      function G(e, t, i, n) {
        switch (e) {
          case 0:
            if (65535 === t) return "oth";
            if (i) {
              var r = i[t];
              if (r) {
                if ("en" === r) return r;
                if (!n) return 0 === r.indexOf("en") ? "en" : "oth";
                if (r.indexOf("en") < 0) return "oth";
                if (!n.en) return "en";
              }
            }
            break;
          case 1:
            if (0 === t) return "en";
            if (t < 152) return "oth";
          case 3:
            if (T.indexOf(t)) {
              if (1033 === t) return "en";
              if (!n) return I.indexOf(t) >= 0 ? "en" : "oth";
              if (I.indexOf(t) < 0) return "oth";
              if (!n.en) return "en";
            }
        }
      }
      ((o._getOpenTypeInfo = function (e, t, i) {
        var n,
          r,
          a = null,
          s = null,
          l = null,
          h = 0,
          A = e.length || e.byteLength;
        if (e instanceof DataView) r = e;
        else
          try {
            r = new DataView(e.buffer || e);
          } catch (e) {
            return !i && [];
          }
        try {
          h = 4;
          var c = Math.min(256, r.getUint16(h));
          h = 12;
          var p = 0,
            u = 0,
            d = 0,
            g = -1,
            f = -1,
            m = null;
          for (n = 0; n < c && A - h >= 16; n++) {
            if (((m = o._readTag(r, h)), (h += 4), (h += 4), "name" === m))
              p = r.getUint32(h) - t;
            else if ("stat" === m) u = r.getUint32(h) - t;
            else {
              if (i && "cmap" === m) {
                var y = r.getUint32(h) - t;
                if (0 === r.getUint16(y)) {
                  var _ = r.getUint16(y + 4),
                    v = r.getUint16(y + 6);
                  if (0 === _) {
                    if (v <= 6) return !0;
                  } else if (1 === _) {
                    if (v <= 10) return !0;
                  } else if (3 === _ && (v <= 5 || 10 === v)) return !0;
                }
                return !1;
              }
              "ltag" === m && (d = r.getUint32(h) - t);
            }
            if (p > 0 && u > 0) break;
            h += 8;
          }
          if (i) return !1;
          var b = null;
          if (d > 0) {
            h = d;
            var C = r.getUint32();
            if (((h += 8), 1 === C)) {
              h += 8;
              var w = r.getUint32();
              for (h += 8, b = [], n = 0; n < w; n++) {
                m = "";
                var E = d + r.getUint16(h);
                h += 2;
                A = r.getUint16(h);
                h += 2;
                for (var B = E; B < E + A; B++)
                  m += String.fromCharCode(r.getUint8(B));
                tags.push(m);
              }
            }
          }
          if (u > 0) {
            h = u + 4;
            var x = r.getUint16(h);
            h += 2;
            var P = r.getUint16(h);
            h += 2;
            var S = r.getUint32(h);
            h += 4;
            var T = r.getUint16(h);
            h += 2;
            var I = r.getUint32(h);
            ((h += 4), (h = u + I));
            var R = [],
              D = [];
            for (n = 0; n < T; n++) ((R[n] = r.getUint16(h)), (h += 2));
            for (n = 0; n < T; n++) {
              h = u + I + R[n] + 2;
              var Q = r.getUint16(h);
              ((h += 2),
                (h += 4),
                (D[Q] = (Number(r.getUint32(h)) / 65536).toFixed(0)),
                (h += 4));
            }
            for (h = u + S, n = 0; n < P; n++)
              ((m = o._readTag(r, h)),
                (h += 4),
                "wght" == m
                  ? (s = String(D[n]))
                  : "ital" == m && (l = String(D[n])),
                (h = u + S + n * x));
          }
          if (p > 0) {
            ((h = p + 2),
              (f = Math.min(255, r.getUint16(h))),
              (h += 2),
              (g = r.getUint16(h)),
              (h += 2));
            var M = [];
            for (n = 0; n < f && h < A; n++) {
              _ = r.getUint16(h);
              h += 2;
              var N = r.getUint16(h);
              h += 2;
              var U = r.getUint16(h);
              h += 2;
              var V = r.getUint16(h);
              if (
                ((h += 2),
                V <= 7 ||
                  V === o.nameId.TYPO_FAMILY ||
                  V === o.nameId.TYPO_SUBFAMILY)
              ) {
                var O = r.getUint16(h);
                h += 2;
                var L = r.getUint16(h);
                if (((h += 2), O > 0)) {
                  var Y = M[V],
                    X = G(_, U, b, Y),
                    H = k(_, N, U);
                  (0,
                    void 0 !== H &&
                      void 0 !== X &&
                      (Y || (M[V] = []),
                      (M[V][X] = {
                        encoding: H,
                        stringLen: O,
                        stringOff: L,
                      })));
                }
              } else h += 4;
            }
            for (n = 0; n < M.length; n++) {
              var W;
              if ((W = M[n]) && ((W = W.en) || (W = W.oth))) {
                h = W.stringOff + g + p;
                var Z = "",
                  z = W.encoding;
                if ("utf16" === z) {
                  for (
                    var j = [], J = Math.min(W.stringLen / 2, 255), q = 0;
                    q < J && h < A;
                    q++
                  )
                    ((j[q] = r.getUint16(h)), (h += 2));
                  Z = String.fromCharCode.apply(null, j);
                } else {
                  var K = F[z];
                  if (void 0 === K) return;
                  J = Math.min(W.stringLen, 255);
                  for (var q = 0; q < J && h < A; q++) {
                    var $ = r.getUint8(h + q);
                    0 !== $ &&
                      (Z += $ <= 127 ? String.fromCharCode($) : K[127 & $]);
                  }
                }
                (a || (a = [0, 0, 0, 0, 0, 0, 0, 0]), (a[n] = Z));
              }
            }
          }
        } catch (e) {
          0;
        }
        return (null == s && (s = ""), null == l && (l = ""), [a, s + "_" + l]);
      }),
        (e.exports = o));
    }