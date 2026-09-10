/**
 * chunk.vendor.js Module #711
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(376),
        r = i(529),
        o = i(89),
        a = i(326),
        s = i(115);

      function l(e, t) {
        if (e === t) return !0;
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          for (var i = 0; i < e.length; i += 1) if (!l(e[i], t[i])) return !1;
          return !0;
        }
        return !1;
      }

      function h(e) {
        return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
      }

      function A(e, t, i) {
        var n,
          r,
          a,
          s = [],
          l = [],
          h = o.getCard16(e, t);
        if (0 !== h) {
          var A = o.getByte(e, t + 2);
          r = t + (h + 1) * A + 2;
          var c = t + 3;
          for (n = 0; n < h + 1; n += 1)
            (s.push(o.getOffset(e, c, A)), (c += A));
          a = r + s[h];
        } else a = t + 2;
        for (n = 0; n < s.length - 1; n += 1) {
          var p = o.getBytes(e, r + s[n], r + s[n + 1]);
          (i && (p = i(p)), l.push(p));
        }
        return {
          objects: l,
          startOffset: t,
          endOffset: a,
        };
      }

      function c(e, t) {
        if (28 === t) return (e.parseByte() << 8) | e.parseByte();
        if (29 === t)
          return (
            (e.parseByte() << 24) |
            (e.parseByte() << 16) |
            (e.parseByte() << 8) |
            e.parseByte()
          );
        if (30 === t)
          return (function (e) {
            for (
              var t = "",
                i = [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  ".",
                  "E",
                  "E-",
                  null,
                  "-",
                ];
              ;
            ) {
              var n = e.parseByte(),
                r = n >> 4,
                o = 15 & n;
              if (15 === r) break;
              if (((t += i[r]), 15 === o)) break;
              t += i[o];
            }
            return parseFloat(t);
          })(e);
        if (t >= 32 && t <= 246) return t - 139;
        if (t >= 247 && t <= 250) return 256 * (t - 247) + e.parseByte() + 108;
        if (t >= 251 && t <= 254) return 256 * -(t - 251) - e.parseByte() - 108;
        throw new Error("Invalid b0 " + t);
      }

      function p(e, t, i) {
        t = void 0 !== t ? t : 0;
        var n = new o.Parser(e, t),
          r = [],
          a = [];
        for (i = void 0 !== i ? i : e.length; n.relativeOffset < i; ) {
          var s = n.parseByte();
          s <= 21
            ? (12 === s && (s = 1200 + n.parseByte()), r.push([s, a]), (a = []))
            : a.push(c(n, s));
        }
        return (function (e) {
          for (var t = {}, i = 0; i < e.length; i += 1) {
            var n,
              r = e[i][0],
              o = e[i][1];
            if (
              ((n = 1 === o.length ? o[0] : o),
              t.hasOwnProperty(r) && !isNaN(t[r]))
            )
              throw new Error("Object " + t + " already has key " + r);
            t[r] = n;
          }
          return t;
        })(r);
      }

      function u(e, t) {
        return (t = t <= 390 ? n.cffStandardStrings[t] : e[t - 391]);
      }

      function d(e, t, i) {
        for (var n, r = {}, o = 0; o < t.length; o += 1) {
          var a = t[o];
          if (Array.isArray(a.type)) {
            var s = [];
            s.length = a.type.length;
            for (var l = 0; l < a.type.length; l++)
              (void 0 === (n = void 0 !== e[a.op] ? e[a.op][l] : void 0) &&
                (n =
                  void 0 !== a.value && void 0 !== a.value[l]
                    ? a.value[l]
                    : null),
                "SID" === a.type[l] && (n = u(i, n)),
                (s[l] = n));
            r[a.name] = s;
          } else
            (void 0 === (n = e[a.op]) &&
              (n = void 0 !== a.value ? a.value : null),
              "SID" === a.type && (n = u(i, n)),
              (r[a.name] = n));
        }
        return r;
      }
      var g = [
          {
            name: "version",
            op: 0,
            type: "SID",
          },
          {
            name: "notice",
            op: 1,
            type: "SID",
          },
          {
            name: "copyright",
            op: 1200,
            type: "SID",
          },
          {
            name: "fullName",
            op: 2,
            type: "SID",
          },
          {
            name: "familyName",
            op: 3,
            type: "SID",
          },
          {
            name: "weight",
            op: 4,
            type: "SID",
          },
          {
            name: "isFixedPitch",
            op: 1201,
            type: "number",
            value: 0,
          },
          {
            name: "italicAngle",
            op: 1202,
            type: "number",
            value: 0,
          },
          {
            name: "underlinePosition",
            op: 1203,
            type: "number",
            value: -100,
          },
          {
            name: "underlineThickness",
            op: 1204,
            type: "number",
            value: 50,
          },
          {
            name: "paintType",
            op: 1205,
            type: "number",
            value: 0,
          },
          {
            name: "charstringType",
            op: 1206,
            type: "number",
            value: 2,
          },
          {
            name: "fontMatrix",
            op: 1207,
            type: ["real", "real", "real", "real", "real", "real"],
            value: [0.001, 0, 0, 0.001, 0, 0],
          },
          {
            name: "uniqueId",
            op: 13,
            type: "number",
          },
          {
            name: "fontBBox",
            op: 5,
            type: ["number", "number", "number", "number"],
            value: [0, 0, 0, 0],
          },
          {
            name: "strokeWidth",
            op: 1208,
            type: "number",
            value: 0,
          },
          {
            name: "xuid",
            op: 14,
            type: [],
            value: null,
          },
          {
            name: "charset",
            op: 15,
            type: "offset",
            value: 0,
          },
          {
            name: "encoding",
            op: 16,
            type: "offset",
            value: 0,
          },
          {
            name: "charStrings",
            op: 17,
            type: "offset",
            value: 0,
          },
          {
            name: "private",
            op: 18,
            type: ["number", "offset"],
            value: [0, 0],
          },
          {
            name: "ros",
            op: 1230,
            type: ["SID", "SID", "number"],
          },
          {
            name: "cidFontVersion",
            op: 1231,
            type: "number",
            value: 0,
          },
          {
            name: "cidFontRevision",
            op: 1232,
            type: "number",
            value: 0,
          },
          {
            name: "cidFontType",
            op: 1233,
            type: "number",
            value: 0,
          },
          {
            name: "cidCount",
            op: 1234,
            type: "number",
            value: 8720,
          },
          {
            name: "uidBase",
            op: 1235,
            type: "number",
          },
          {
            name: "fdArray",
            op: 1236,
            type: "offset",
          },
          {
            name: "fdSelect",
            op: 1237,
            type: "offset",
          },
          {
            name: "fontName",
            op: 1238,
            type: "SID",
          },
        ],
        f = [
          {
            name: "subrs",
            op: 19,
            type: "offset",
            value: 0,
          },
          {
            name: "defaultWidthX",
            op: 20,
            type: "number",
            value: 0,
          },
          {
            name: "nominalWidthX",
            op: 21,
            type: "number",
            value: 0,
          },
        ];

      function m(e, t) {
        return d(p(e, 0, e.byteLength), g, t);
      }

      function y(e, t, i, n) {
        return d(p(e, t, i), f, n);
      }

      function _(e, t, i, n) {
        for (var r = [], o = 0; o < i.length; o += 1) {
          var a = m(new DataView(new Uint8Array(i[o]).buffer), n);
          ((a._subrs = []), (a._subrsBias = 0));
          var s = a.private[0],
            l = a.private[1];
          if (0 !== s && 0 !== l) {
            var c = y(e, l + t, s, n);
            if (
              ((a._defaultWidthX = c.defaultWidthX),
              (a._nominalWidthX = c.nominalWidthX),
              0 !== c.subrs)
            ) {
              var p = A(e, l + c.subrs + t);
              ((a._subrs = p.objects), (a._subrsBias = h(a._subrs)));
            }
            a._privateDict = c;
          }
          r.push(a);
        }
        return r;
      }

      function v(e, t, i) {
        var n,
          r,
          o,
          s,
          l,
          h,
          A,
          c,
          p = new a.Path(),
          u = [],
          d = 0,
          g = !1,
          f = !1,
          m = 0,
          y = 0;
        if (e.isCIDFont) {
          var _ = e.tables.cff.topDict._fdSelect[t.index],
            v = e.tables.cff.topDict._fdArray[_];
          ((l = v._subrs),
            (h = v._subrsBias),
            (A = v._defaultWidthX),
            (c = v._nominalWidthX || 0));
        } else
          ((l = e.tables.cff.topDict._subrs),
            (h = e.tables.cff.topDict._subrsBias),
            (A = e.tables.cff.topDict._defaultWidthX),
            (c = e.tables.cff.topDict._nominalWidthX || 0));
        var b = A;

        function C(e, t) {
          (f && p.closePath(), p.moveTo(e, t), (f = !0));
        }

        function w() {
          (u.length % 2 != 0 && !g && (b = u.shift() + c),
            (d += u.length >> 1),
            (u.length = 0),
            (g = !0));
        }
        return (
          (function i(a) {
            for (
              var A, _, v, E, B, x, P, S, T, I, F, R, D = 0;
              D < a.length;
            ) {
              var k = a[D];
              switch (((D += 1), k)) {
                case 1:
                case 3:
                  w();
                  break;
                case 4:
                  (u.length > 1 && !g && ((b = u.shift() + c), (g = !0)),
                    (y += u.pop()),
                    C(m, y));
                  break;
                case 5:
                  for (; u.length > 0; )
                    ((m += u.shift()), (y += u.shift()), p.lineTo(m, y));
                  break;
                case 6:
                  for (
                    ;
                    u.length > 0 &&
                    ((m += u.shift()), p.lineTo(m, y), 0 !== u.length);
                  )
                    ((y += u.shift()), p.lineTo(m, y));
                  break;
                case 7:
                  for (
                    ;
                    u.length > 0 &&
                    ((y += u.shift()), p.lineTo(m, y), 0 !== u.length);
                  )
                    ((m += u.shift()), p.lineTo(m, y));
                  break;
                case 8:
                  for (; u.length > 0; )
                    ((n = m + u.shift()),
                      (r = y + u.shift()),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (m = o + u.shift()),
                      (y = s + u.shift()),
                      p.curveTo(n, r, o, s, m, y));
                  break;
                case 10:
                  ((B = u.pop() + h), (x = l[B]) && i(x));
                  break;
                case 11:
                  return;
                case 12:
                  switch (((k = a[D]), (D += 1), k)) {
                    case 35:
                      ((n = m + u.shift()),
                        (r = y + u.shift()),
                        (o = n + u.shift()),
                        (s = r + u.shift()),
                        (P = o + u.shift()),
                        (S = s + u.shift()),
                        (T = P + u.shift()),
                        (I = S + u.shift()),
                        (F = T + u.shift()),
                        (R = I + u.shift()),
                        (m = F + u.shift()),
                        (y = R + u.shift()),
                        u.shift(),
                        p.curveTo(n, r, o, s, P, S),
                        p.curveTo(T, I, F, R, m, y));
                      break;
                    case 34:
                      ((n = m + u.shift()),
                        (r = y),
                        (o = n + u.shift()),
                        (s = r + u.shift()),
                        (P = o + u.shift()),
                        (S = s),
                        (T = P + u.shift()),
                        (I = s),
                        (F = T + u.shift()),
                        (R = y),
                        (m = F + u.shift()),
                        p.curveTo(n, r, o, s, P, S),
                        p.curveTo(T, I, F, R, m, y));
                      break;
                    case 36:
                      ((n = m + u.shift()),
                        (r = y + u.shift()),
                        (o = n + u.shift()),
                        (s = r + u.shift()),
                        (P = o + u.shift()),
                        (S = s),
                        (T = P + u.shift()),
                        (I = s),
                        (F = T + u.shift()),
                        (R = I + u.shift()),
                        (m = F + u.shift()),
                        p.curveTo(n, r, o, s, P, S),
                        p.curveTo(T, I, F, R, m, y));
                      break;
                    case 37:
                      ((n = m + u.shift()),
                        (r = y + u.shift()),
                        (o = n + u.shift()),
                        (s = r + u.shift()),
                        (P = o + u.shift()),
                        (S = s + u.shift()),
                        (T = P + u.shift()),
                        (I = S + u.shift()),
                        (F = T + u.shift()),
                        (R = I + u.shift()),
                        Math.abs(F - m) > Math.abs(R - y)
                          ? (m = F + u.shift())
                          : (y = R + u.shift()),
                        p.curveTo(n, r, o, s, P, S),
                        p.curveTo(T, I, F, R, m, y));
                      break;
                    default:
                      (console.log(
                        "Glyph " + t.index + ": unknown operator 1200" + k,
                      ),
                        (u.length = 0));
                  }
                  break;
                case 14:
                  (u.length > 0 && !g && ((b = u.shift() + c), (g = !0)),
                    f && (p.closePath(), (f = !1)));
                  break;
                case 18:
                  w();
                  break;
                case 19:
                case 20:
                  (w(), (D += (d + 7) >> 3));
                  break;
                case 21:
                  (u.length > 2 && !g && ((b = u.shift() + c), (g = !0)),
                    (y += u.pop()),
                    C((m += u.pop()), y));
                  break;
                case 22:
                  (u.length > 1 && !g && ((b = u.shift() + c), (g = !0)),
                    C((m += u.pop()), y));
                  break;
                case 23:
                  w();
                  break;
                case 24:
                  for (; u.length > 2; )
                    ((n = m + u.shift()),
                      (r = y + u.shift()),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (m = o + u.shift()),
                      (y = s + u.shift()),
                      p.curveTo(n, r, o, s, m, y));
                  ((m += u.shift()), (y += u.shift()), p.lineTo(m, y));
                  break;
                case 25:
                  for (; u.length > 6; )
                    ((m += u.shift()), (y += u.shift()), p.lineTo(m, y));
                  ((n = m + u.shift()),
                    (r = y + u.shift()),
                    (o = n + u.shift()),
                    (s = r + u.shift()),
                    (m = o + u.shift()),
                    (y = s + u.shift()),
                    p.curveTo(n, r, o, s, m, y));
                  break;
                case 26:
                  for (u.length % 2 && (m += u.shift()); u.length > 0; )
                    ((n = m),
                      (r = y + u.shift()),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (m = o),
                      (y = s + u.shift()),
                      p.curveTo(n, r, o, s, m, y));
                  break;
                case 27:
                  for (u.length % 2 && (y += u.shift()); u.length > 0; )
                    ((n = m + u.shift()),
                      (r = y),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (m = o + u.shift()),
                      (y = s),
                      p.curveTo(n, r, o, s, m, y));
                  break;
                case 28:
                  ((A = a[D]),
                    (_ = a[D + 1]),
                    u.push(((A << 24) | (_ << 16)) >> 16),
                    (D += 2));
                  break;
                case 29:
                  ((B = u.pop() + e.gsubrsBias), (x = e.gsubrs[B]) && i(x));
                  break;
                case 30:
                  for (
                    ;
                    u.length > 0 &&
                    ((n = m),
                    (r = y + u.shift()),
                    (o = n + u.shift()),
                    (s = r + u.shift()),
                    (m = o + u.shift()),
                    (y = s + (1 === u.length ? u.shift() : 0)),
                    p.curveTo(n, r, o, s, m, y),
                    0 !== u.length);
                  )
                    ((n = m + u.shift()),
                      (r = y),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (y = s + u.shift()),
                      (m = o + (1 === u.length ? u.shift() : 0)),
                      p.curveTo(n, r, o, s, m, y));
                  break;
                case 31:
                  for (
                    ;
                    u.length > 0 &&
                    ((n = m + u.shift()),
                    (r = y),
                    (o = n + u.shift()),
                    (s = r + u.shift()),
                    (y = s + u.shift()),
                    (m = o + (1 === u.length ? u.shift() : 0)),
                    p.curveTo(n, r, o, s, m, y),
                    0 !== u.length);
                  )
                    ((n = m),
                      (r = y + u.shift()),
                      (o = n + u.shift()),
                      (s = r + u.shift()),
                      (m = o + u.shift()),
                      (y = s + (1 === u.length ? u.shift() : 0)),
                      p.curveTo(n, r, o, s, m, y));
                  break;
                default:
                  k < 32
                    ? console.log(
                        "Glyph " + t.index + ": unknown operator " + k,
                      )
                    : k < 247
                      ? u.push(k - 139)
                      : k < 251
                        ? ((A = a[D]),
                          (D += 1),
                          u.push(256 * (k - 247) + A + 108))
                        : k < 255
                          ? ((A = a[D]),
                            (D += 1),
                            u.push(256 * -(k - 251) - A - 108))
                          : ((A = a[D]),
                            (_ = a[D + 1]),
                            (v = a[D + 2]),
                            (E = a[D + 3]),
                            (D += 4),
                            u.push(
                              ((A << 24) | (_ << 16) | (v << 8) | E) / 65536,
                            ));
              }
            }
          })(i),
          (t.advanceWidth = b),
          p
        );
      }

      function b(e, t) {
        var i,
          r = n.cffStandardStrings.indexOf(e);
        return (
          r >= 0 && (i = r),
          (r = t.indexOf(e)) >= 0
            ? (i = r + n.cffStandardStrings.length)
            : ((i = n.cffStandardStrings.length + t.length), t.push(e)),
          i
        );
      }

      function C(e, t, i) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
          var o = e[r],
            a = t[o.name];
          void 0 === a ||
            l(a, o.value) ||
            ("SID" === o.type && (a = b(a, i)),
            (n[o.op] = {
              name: o.name,
              type: o.type,
              value: a,
            }));
        }
        return n;
      }

      function w(e, t) {
        var i = new s.Record("Top DICT", [
          {
            name: "dict",
            type: "DICT",
            value: {},
          },
        ]);
        return ((i.dict = C(g, e, t)), i);
      }

      function E(e) {
        var t = new s.Record("Top DICT INDEX", [
          {
            name: "topDicts",
            type: "INDEX",
            value: [],
          },
        ]);
        return (
          (t.topDicts = [
            {
              name: "topDict_0",
              type: "TABLE",
              value: e,
            },
          ]),
          t
        );
      }

      function B(e) {
        var t = [],
          i = e.path;
        t.push({
          name: "width",
          type: "NUMBER",
          value: e.advanceWidth,
        });
        for (var n = 0, r = 0, o = 0; o < i.commands.length; o += 1) {
          var a,
            s,
            l = i.commands[o];
          if ("Q" === l.type) {
            l = {
              type: "C",
              x: l.x,
              y: l.y,
              x1: (1 / 3) * n + (2 / 3) * l.x1,
              y1: (1 / 3) * r + (2 / 3) * l.y1,
              x2: (1 / 3) * l.x + (2 / 3) * l.x1,
              y2: (1 / 3) * l.y + (2 / 3) * l.y1,
            };
          }
          if ("M" === l.type)
            ((a = Math.round(l.x - n)),
              (s = Math.round(l.y - r)),
              t.push({
                name: "dx",
                type: "NUMBER",
                value: a,
              }),
              t.push({
                name: "dy",
                type: "NUMBER",
                value: s,
              }),
              t.push({
                name: "rmoveto",
                type: "OP",
                value: 21,
              }),
              (n = Math.round(l.x)),
              (r = Math.round(l.y)));
          else if ("L" === l.type)
            ((a = Math.round(l.x - n)),
              (s = Math.round(l.y - r)),
              t.push({
                name: "dx",
                type: "NUMBER",
                value: a,
              }),
              t.push({
                name: "dy",
                type: "NUMBER",
                value: s,
              }),
              t.push({
                name: "rlineto",
                type: "OP",
                value: 5,
              }),
              (n = Math.round(l.x)),
              (r = Math.round(l.y)));
          else if ("C" === l.type) {
            var h = Math.round(l.x1 - n),
              A = Math.round(l.y1 - r),
              c = Math.round(l.x2 - l.x1),
              p = Math.round(l.y2 - l.y1);
            ((a = Math.round(l.x - l.x2)),
              (s = Math.round(l.y - l.y2)),
              t.push({
                name: "dx1",
                type: "NUMBER",
                value: h,
              }),
              t.push({
                name: "dy1",
                type: "NUMBER",
                value: A,
              }),
              t.push({
                name: "dx2",
                type: "NUMBER",
                value: c,
              }),
              t.push({
                name: "dy2",
                type: "NUMBER",
                value: p,
              }),
              t.push({
                name: "dx",
                type: "NUMBER",
                value: a,
              }),
              t.push({
                name: "dy",
                type: "NUMBER",
                value: s,
              }),
              t.push({
                name: "rrcurveto",
                type: "OP",
                value: 8,
              }),
              (n = Math.round(l.x)),
              (r = Math.round(l.y)));
          }
        }
        return (
          t.push({
            name: "endchar",
            type: "OP",
            value: 14,
          }),
          t
        );
      }
      ((t.parse = function (e, t, i) {
        i.tables.cff = {};
        var a = A(
            e,
            (function (e, t) {
              var i = {};
              return (
                (i.formatMajor = o.getCard8(e, t)),
                (i.formatMinor = o.getCard8(e, t + 1)),
                (i.size = o.getCard8(e, t + 2)),
                (i.offsetSize = o.getCard8(e, t + 3)),
                (i.startOffset = t),
                (i.endOffset = t + 4),
                i
              );
            })(e, t).endOffset,
            o.bytesToString,
          ),
          s = A(e, a.endOffset),
          l = A(e, s.endOffset, o.bytesToString),
          c = A(e, l.endOffset);
        ((i.gsubrs = c.objects), (i.gsubrsBias = h(i.gsubrs)));
        var p = _(e, t, s.objects, l.objects);
        if (1 !== p.length)
          throw new Error(
            "CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " +
              p.length,
          );
        var d = p[0];
        if (
          ((i.tables.cff.topDict = d),
          d._privateDict &&
            ((i.defaultWidthX = d._privateDict.defaultWidthX),
            (i.nominalWidthX = d._privateDict.nominalWidthX)),
          void 0 !== d.ros[0] && void 0 !== d.ros[1] && (i.isCIDFont = !0),
          i.isCIDFont)
        ) {
          var g = d.fdArray,
            f = d.fdSelect;
          if (0 === g || 0 === f)
            throw new Error(
              "Font is marked as a CID font, but FDArray and/or FDSelect information is missing",
            );
          var m = _(e, t, A(e, (g += t)).objects, l.objects);
          ((d._fdArray = m),
            (f += t),
            (d._fdSelect = (function (e, t, i, n) {
              var r,
                a = [],
                s = new o.Parser(e, t),
                l = s.parseCard8();
              if (0 === l)
                for (var h = 0; h < i; h++) {
                  if ((r = s.parseCard8()) >= n)
                    throw new Error(
                      "CFF table CID Font FDSelect has bad FD index value " +
                        r +
                        " (FD count " +
                        n +
                        ")",
                    );
                  a.push(r);
                }
              else {
                if (3 !== l)
                  throw new Error(
                    "CFF Table CID Font FDSelect table has unsupported format " +
                      l,
                  );
                var A,
                  c = s.parseCard16(),
                  p = s.parseCard16();
                if (0 !== p)
                  throw new Error(
                    "CFF Table CID Font FDSelect format 3 range has bad initial GID " +
                      p,
                  );
                for (var u = 0; u < c; u++) {
                  if (((r = s.parseCard8()), (A = s.parseCard16()), r >= n))
                    throw new Error(
                      "CFF table CID Font FDSelect has bad FD index value " +
                        r +
                        " (FD count " +
                        n +
                        ")",
                    );
                  if (A > i)
                    throw new Error(
                      "CFF Table CID Font FDSelect format 3 range has bad GID " +
                        A,
                    );
                  for (; p < A; p++) a.push(r);
                  p = A;
                }
                if (A !== i)
                  throw new Error(
                    "CFF Table CID Font FDSelect format 3 range has bad final GID " +
                      A,
                  );
              }
              return a;
            })(e, f, i.numGlyphs, m.length)));
        }
        var b = t + d.private[1],
          C = y(e, b, d.private[0], l.objects);
        if (
          ((i.defaultWidthX = C.defaultWidthX),
          (i.nominalWidthX = C.nominalWidthX),
          0 !== C.subrs)
        ) {
          var w = A(e, b + C.subrs);
          ((i.subrs = w.objects), (i.subrsBias = h(i.subrs)));
        } else ((i.subrs = []), (i.subrsBias = 0));
        var E = A(e, t + d.charStrings);
        i.nGlyphs = E.objects.length;
        var B = (function (e, t, i, n) {
          var r,
            a,
            s,
            l = new o.Parser(e, t);
          i -= 1;
          var h = [".notdef"],
            A = l.parseCard8();
          if (0 === A)
            for (r = 0; r < i; r += 1) ((a = l.parseSID()), h.push(u(n, a)));
          else if (1 === A)
            for (; h.length <= i; )
              for (a = l.parseSID(), s = l.parseCard8(), r = 0; r <= s; r += 1)
                (h.push(u(n, a)), (a += 1));
          else {
            if (2 !== A) throw new Error("Unknown charset format " + A);
            for (; h.length <= i; )
              for (a = l.parseSID(), s = l.parseCard16(), r = 0; r <= s; r += 1)
                (h.push(u(n, a)), (a += 1));
          }
          return h;
        })(e, t + d.charset, i.nGlyphs, l.objects);
        (0 === d.encoding
          ? (i.cffEncoding = new n.CffEncoding(n.cffStandardEncoding, B))
          : 1 === d.encoding
            ? (i.cffEncoding = new n.CffEncoding(n.cffExpertEncoding, B))
            : (i.cffEncoding = (function (e, t, i) {
                var r,
                  a,
                  s = {},
                  l = new o.Parser(e, t),
                  h = l.parseCard8();
                if (0 === h) {
                  var A = l.parseCard8();
                  for (r = 0; r < A; r += 1) s[(a = l.parseCard8())] = r;
                } else {
                  if (1 !== h) throw new Error("Unknown encoding format " + h);
                  var c = l.parseCard8();
                  for (a = 1, r = 0; r < c; r += 1)
                    for (
                      var p = l.parseCard8(), u = l.parseCard8(), d = p;
                      d <= p + u;
                      d += 1
                    )
                      ((s[d] = a), (a += 1));
                }
                return new n.CffEncoding(s, i);
              })(e, t + d.encoding, B)),
          (i.encoding = i.encoding || i.cffEncoding),
          (i.glyphs = new r.GlyphSet(i)));
        for (var x = 0; x < i.nGlyphs; x += 1) {
          var P = E.objects[x];
          i.glyphs.push(x, r.cffGlyphLoader(i, x, v, P));
        }
      }),
        (t.make = function (e, t) {
          for (
            var i,
              n = new s.Table("CFF ", [
                {
                  name: "header",
                  type: "RECORD",
                },
                {
                  name: "nameIndex",
                  type: "RECORD",
                },
                {
                  name: "topDictIndex",
                  type: "RECORD",
                },
                {
                  name: "stringIndex",
                  type: "RECORD",
                },
                {
                  name: "globalSubrIndex",
                  type: "RECORD",
                },
                {
                  name: "charsets",
                  type: "RECORD",
                },
                {
                  name: "charStringsIndex",
                  type: "RECORD",
                },
                {
                  name: "privateDict",
                  type: "RECORD",
                },
              ]),
              r = 1 / t.unitsPerEm,
              o = {
                version: t.version,
                fullName: t.fullName,
                familyName: t.familyName,
                weight: t.weightName,
                fontBBox: t.fontBBox || [0, 0, 0, 0],
                fontMatrix: [r, 0, 0, r, 0, 0],
                charset: 999,
                encoding: 0,
                charStrings: 999,
                private: [0, 999],
              },
              a = [],
              l = 1;
            l < e.length;
            l += 1
          )
            ((i = e.get(l)), a.push(i.name));
          var h = [];
          ((n.header = new s.Record("Header", [
            {
              name: "major",
              type: "Card8",
              value: 1,
            },
            {
              name: "minor",
              type: "Card8",
              value: 0,
            },
            {
              name: "hdrSize",
              type: "Card8",
              value: 4,
            },
            {
              name: "major",
              type: "Card8",
              value: 1,
            },
          ])),
            (n.nameIndex = (function (e) {
              var t = new s.Record("Name INDEX", [
                {
                  name: "names",
                  type: "INDEX",
                  value: [],
                },
              ]);
              t.names = [];
              for (var i = 0; i < e.length; i += 1)
                t.names.push({
                  name: "name_" + i,
                  type: "NAME",
                  value: e[i],
                });
              return t;
            })([t.postScriptName])));
          var A = w(o, h);
          ((n.topDictIndex = E(A)),
            (n.globalSubrIndex = new s.Record("Global Subr INDEX", [
              {
                name: "subrs",
                type: "INDEX",
                value: [],
              },
            ])),
            (n.charsets = (function (e, t) {
              for (
                var i = new s.Record("Charsets", [
                    {
                      name: "format",
                      type: "Card8",
                      value: 0,
                    },
                  ]),
                  n = 0;
                n < e.length;
                n += 1
              ) {
                var r = b(e[n], t);
                i.fields.push({
                  name: "glyph_" + n,
                  type: "SID",
                  value: r,
                });
              }
              return i;
            })(a, h)),
            (n.charStringsIndex = (function (e) {
              for (
                var t = new s.Record("CharStrings INDEX", [
                    {
                      name: "charStrings",
                      type: "INDEX",
                      value: [],
                    },
                  ]),
                  i = 0;
                i < e.length;
                i += 1
              ) {
                var n = e.get(i),
                  r = B(n);
                t.charStrings.push({
                  name: n.name,
                  type: "CHARSTRING",
                  value: r,
                });
              }
              return t;
            })(e)),
            (n.privateDict = (function (e, t) {
              var i = new s.Record("Private DICT", [
                {
                  name: "dict",
                  type: "DICT",
                  value: {},
                },
              ]);
              return ((i.dict = C(f, e, t)), i);
            })({}, h)),
            (n.stringIndex = (function (e) {
              var t = new s.Record("String INDEX", [
                {
                  name: "strings",
                  type: "INDEX",
                  value: [],
                },
              ]);
              t.strings = [];
              for (var i = 0; i < e.length; i += 1)
                t.strings.push({
                  name: "string_" + i,
                  type: "STRING",
                  value: e[i],
                });
              return t;
            })(h)));
          var c =
            n.header.sizeOf() +
            n.nameIndex.sizeOf() +
            n.topDictIndex.sizeOf() +
            n.stringIndex.sizeOf() +
            n.globalSubrIndex.sizeOf();
          return (
            (o.charset = c),
            (o.encoding = 0),
            (o.charStrings = o.charset + n.charsets.sizeOf()),
            (o.private[1] = o.charStrings + n.charStringsIndex.sizeOf()),
            (A = w(o, h)),
            (n.topDictIndex = E(A)),
            n
          );
        }));
    }