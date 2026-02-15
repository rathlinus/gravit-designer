/**
 * Module 659
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
  var n = require(68) /* GColor */, r = function () {
      "use strict";
      var e = new Int32Array([
        0,
        1,
        8,
        16,
        9,
        2,
        3,
        10,
        17,
        24,
        32,
        25,
        18,
        11,
        4,
        5,
        12,
        19,
        26,
        33,
        40,
        48,
        41,
        34,
        27,
        20,
        13,
        6,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        56,
        57,
        50,
        43,
        36,
        29,
        22,
        15,
        23,
        30,
        37,
        44,
        51,
        58,
        59,
        52,
        45,
        38,
        31,
        39,
        46,
        53,
        60,
        61,
        54,
        47,
        55,
        62,
        63
      ]);
      function module() {
      }
      function require(e, t) {
        for (var require, n, r = 0, o = [], a = 16; a > 0 && !e[a - 1];)
          a--;
        o.push({
          children: [],
          index: 0
        });
        var s, l = o[0];
        for (require = 0; require < a; require++) {
          for (n = 0; n < e[require]; n++) {
            for ((l = o.pop()).children[l.index] = t[r]; l.index > 0;)
              l = o.pop();
            for (l.index++, o.push(l); o.length <= require;)
              o.push(s = {
                children: [],
                index: 0
              }), l.children[l.index] = s.children, l = s;
            r++;
          }
          require + 1 < a && (o.push(s = {
            children: [],
            index: 0
          }), l.children[l.index] = s.children, l = s);
        }
        return o[0].children;
      }
      function r(t, i, n, r, o, a, s, l, h) {
        n.precision, n.samplesPerLine, n.scanLines;
        var A = n.mcusPerLine, c = n.progressive, p = (n.maxH, n.maxV, i), u = 0, d = 0;
        function g() {
          if (d > 0)
            return d--, u >> d & 1;
          if (255 == (u = t[i++])) {
            var e = t[i++];
            if (e)
              throw "unexpected marker: " + (u << 8 | e).toString(16);
          }
          return d = 7, u >>> 7;
        }
        function f(e) {
          for (var t, i = e; null !== (t = g());) {
            if ("number" == typeof (i = i[t]))
              return i;
            if ("object" != typeof i)
              throw "invalid huffman sequence";
          }
          return null;
        }
        function m(e) {
          for (var t = 0; e > 0;) {
            var i = g();
            if (null === i)
              return;
            t = t << 1 | i, e--;
          }
          return t;
        }
        function y(e) {
          var t = m(e);
          return t >= 1 << e - 1 ? t : t + (-1 << e) + 1;
        }
        var _ = 0;
        var v, b = 0;
        function C(e, t, i, n, r) {
          var o = i % A, a = (i / A | 0) * e.v + n, s = o * e.h + r;
          t(e, e.blocks[a][s]);
        }
        function w(e, t, i) {
          var n = i / e.blocksPerLine | 0, r = i % e.blocksPerLine;
          t(e, e.blocks[n][r]);
        }
        var E, B, x, P, S, T, I = r.length;
        T = c ? 0 === a ? 0 === l ? function (e, t) {
          var i = f(e.huffmanTableDC), n = 0 === i ? 0 : y(i) << h;
          t[0] = e.pred += n;
        } : function (e, t) {
          t[0] |= g() << h;
        } : 0 === l ? function (t, i) {
          if (_ > 0)
            _--;
          else
            for (var n = a, r = s; n <= r;) {
              var o = f(t.huffmanTableAC), l = 15 & o, A = o >> 4;
              if (0 !== l) {
                i[e[n += A]] = y(l) * (1 << h), n++;
              } else {
                if (A < 15) {
                  _ = m(A) + (1 << A) - 1;
                  break;
                }
                n += 16;
              }
            }
        } : function (t, i) {
          for (var n = a, r = s, o = 0; n <= r;) {
            var l = e[n];
            switch (b) {
            case 0:
              var A = f(t.huffmanTableAC), c = 15 & A;
              o = A >> 4;
              if (0 === c)
                o < 15 ? (_ = m(o) + (1 << o), b = 4) : (o = 16, b = 1);
              else {
                if (1 !== c)
                  throw "invalid ACn encoding";
                v = y(c), b = o ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              i[l] ? i[l] += g() << h : 0 === --o && (b = 2 == b ? 3 : 0);
              break;
            case 3:
              i[l] ? i[l] += g() << h : (i[l] = v << h, b = 0);
              break;
            case 4:
              i[l] && (i[l] += g() << h);
            }
            n++;
          }
          4 === b && 0 === --_ && (b = 0);
        } : function (t, i) {
          var n = f(t.huffmanTableDC), r = 0 === n ? 0 : y(n);
          i[0] = t.pred += r;
          for (var o = 1; o < 64;) {
            var a = f(t.huffmanTableAC), s = 15 & a, l = a >> 4;
            if (0 !== s) {
              i[e[o += l]] = y(s), o++;
            } else {
              if (l < 15)
                break;
              o += 16;
            }
          }
        };
        var F, R, D, k, G = 0;
        for (R = 1 == I ? r[0].blocksPerLine * r[0].blocksPerColumn : A * n.mcusPerColumn, o || (o = R); G < R;) {
          for (B = 0; B < I; B++)
            r[B].pred = 0;
          if (_ = 0, 1 == I)
            for (E = r[0], S = 0; S < o; S++)
              w(E, T, G), G++;
          else
            for (S = 0; S < o; S++) {
              for (B = 0; B < I; B++)
                for (D = (E = r[B]).h, k = E.v, x = 0; x < k; x++)
                  for (P = 0; P < D; P++)
                    C(E, T, G, x, P);
              if (++G === R)
                break;
            }
          if (d = 0, (F = t[i] << 8 | t[i + 1]) < 65280)
            throw "marker was not found";
          if (!(F >= 65488 && F <= 65495))
            break;
          i += 2;
        }
        return i - p;
      }
      function o(e, t) {
        var i, n, r = [], o = t.blocksPerLine, a = t.blocksPerColumn, s = o << 3, l = new Int32Array(64), h = new Uint8Array(64);
        function A(e, i, n) {
          var r, o, a, s, l, h, A, c, p, u, d = t.quantizationTable, g = n;
          for (u = 0; u < 64; u++)
            g[u] = e[u] * d[u];
          for (u = 0; u < 8; ++u) {
            var f = 8 * u;
            0 != g[1 + f] || 0 != g[2 + f] || 0 != g[3 + f] || 0 != g[4 + f] || 0 != g[5 + f] || 0 != g[6 + f] || 0 != g[7 + f] ? (r = 5793 * g[0 + f] + 128 >> 8, o = 5793 * g[4 + f] + 128 >> 8, a = g[2 + f], s = g[6 + f], l = 2896 * (g[1 + f] - g[7 + f]) + 128 >> 8, c = 2896 * (g[1 + f] + g[7 + f]) + 128 >> 8, h = g[3 + f] << 4, p = r - o + 1 >> 1, r = r + o + 1 >> 1, o = p, p = 3784 * a + 1567 * s + 128 >> 8, a = 1567 * a - 3784 * s + 128 >> 8, s = p, p = l - (A = g[5 + f] << 4) + 1 >> 1, l = l + A + 1 >> 1, A = p, p = c + h + 1 >> 1, h = c - h + 1 >> 1, c = p, p = r - s + 1 >> 1, r = r + s + 1 >> 1, s = p, p = o - a + 1 >> 1, o = o + a + 1 >> 1, a = p, p = 2276 * l + 3406 * c + 2048 >> 12, l = 3406 * l - 2276 * c + 2048 >> 12, c = p, p = 799 * h + 4017 * A + 2048 >> 12, h = 4017 * h - 799 * A + 2048 >> 12, A = p, g[0 + f] = r + c, g[7 + f] = r - c, g[1 + f] = o + A, g[6 + f] = o - A, g[2 + f] = a + h, g[5 + f] = a - h, g[3 + f] = s + l, g[4 + f] = s - l) : (p = 5793 * g[0 + f] + 512 >> 10, g[0 + f] = p, g[1 + f] = p, g[2 + f] = p, g[3 + f] = p, g[4 + f] = p, g[5 + f] = p, g[6 + f] = p, g[7 + f] = p);
          }
          for (u = 0; u < 8; ++u) {
            var m = u;
            0 != g[8 + m] || 0 != g[16 + m] || 0 != g[24 + m] || 0 != g[32 + m] || 0 != g[40 + m] || 0 != g[48 + m] || 0 != g[56 + m] ? (r = 5793 * g[0 + m] + 2048 >> 12, o = 5793 * g[32 + m] + 2048 >> 12, a = g[16 + m], s = g[48 + m], l = 2896 * (g[8 + m] - g[56 + m]) + 2048 >> 12, c = 2896 * (g[8 + m] + g[56 + m]) + 2048 >> 12, h = g[24 + m], p = r - o + 1 >> 1, r = r + o + 1 >> 1, o = p, p = 3784 * a + 1567 * s + 2048 >> 12, a = 1567 * a - 3784 * s + 2048 >> 12, s = p, p = l - (A = g[40 + m]) + 1 >> 1, l = l + A + 1 >> 1, A = p, p = c + h + 1 >> 1, h = c - h + 1 >> 1, c = p, p = r - s + 1 >> 1, r = r + s + 1 >> 1, s = p, p = o - a + 1 >> 1, o = o + a + 1 >> 1, a = p, p = 2276 * l + 3406 * c + 2048 >> 12, l = 3406 * l - 2276 * c + 2048 >> 12, c = p, p = 799 * h + 4017 * A + 2048 >> 12, h = 4017 * h - 799 * A + 2048 >> 12, A = p, g[0 + m] = r + c, g[56 + m] = r - c, g[8 + m] = o + A, g[48 + m] = o - A, g[16 + m] = a + h, g[40 + m] = a - h, g[24 + m] = s + l, g[32 + m] = s - l) : (p = 5793 * n[u + 0] + 8192 >> 14, g[0 + m] = p, g[8 + m] = p, g[16 + m] = p, g[24 + m] = p, g[32 + m] = p, g[40 + m] = p, g[48 + m] = p, g[56 + m] = p);
          }
          for (u = 0; u < 64; ++u) {
            var y = 128 + (g[u] + 8 >> 4);
            i[u] = y < 0 ? 0 : y > 255 ? 255 : y;
          }
        }
        for (var c = 0; c < a; c++) {
          var p = c << 3;
          for (i = 0; i < 8; i++)
            r.push(new Uint8Array(s));
          for (var u = 0; u < o; u++) {
            A(t.blocks[c][u], h, l);
            var d = 0, g = u << 3;
            for (n = 0; n < 8; n++) {
              var f = r[p + n];
              for (i = 0; i < 8; i++)
                f[g + i] = h[d++];
            }
          }
        }
        return r;
      }
      function a(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e;
      }
      return module.prototype = {
        load: function (e) {
          var t = new XMLHttpRequest();
          t.open("GET", e, true), t.responseType = "arraybuffer", t.onload = function () {
            var e = new Uint8Array(t.response || t.mozResponseArrayBuffer);
            this.parse(e), this.onload && this.onload();
          }.bind(this), t.send(null);
        },
        parse: function (t) {
          var n = 0;
          t.length;
          function a() {
            var e = t[n] << 8 | t[n + 1];
            return n += 2, e;
          }
          function s() {
            var e = a(), i = t.subarray(n, n + e - 2);
            return n += i.length, i;
          }
          function l(e) {
            var t, i, n = 0, r = 0;
            for (i in e.components)
              e.components.hasOwnProperty(i) && (n < (t = e.components[i]).h && (n = t.h), r < t.v && (r = t.v));
            var o = Math.ceil(e.samplesPerLine / 8 / n), a = Math.ceil(e.scanLines / 8 / r);
            for (i in e.components)
              if (e.components.hasOwnProperty(i)) {
                t = e.components[i];
                for (var s = Math.ceil(Math.ceil(e.samplesPerLine / 8) * t.h / n), l = Math.ceil(Math.ceil(e.scanLines / 8) * t.v / r), h = o * t.h, A = a * t.v, c = [], p = 0; p < A; p++) {
                  for (var u = [], d = 0; d < h; d++)
                    u.push(new Int32Array(64));
                  c.push(u);
                }
                t.blocksPerLine = s, t.blocksPerColumn = l, t.blocks = c;
              }
            e.maxH = n, e.maxV = r, e.mcusPerLine = o, e.mcusPerColumn = a;
          }
          var h, A, c = null, p = null, u = [], d = [], g = [], f = [], m = a();
          if (65496 != m)
            throw "SOI not found";
          for (m = a(); 65497 != m;) {
            switch (m) {
            case 65280:
              break;
            case 65504:
            case 65505:
            case 65506:
            case 65507:
            case 65508:
            case 65509:
            case 65510:
            case 65511:
            case 65512:
            case 65513:
            case 65514:
            case 65515:
            case 65516:
            case 65517:
            case 65518:
            case 65519:
            case 65534:
              var y = s();
              65504 === m && 74 === y[0] && 70 === y[1] && 73 === y[2] && 70 === y[3] && 0 === y[4] && (c = {
                version: {
                  major: y[5],
                  minor: y[6]
                },
                densityUnits: y[7],
                xDensity: y[8] << 8 | y[9],
                yDensity: y[10] << 8 | y[11],
                thumbWidth: y[12],
                thumbHeight: y[13],
                thumbData: y.subarray(14, 14 + 3 * y[12] * y[13])
              }), 65518 === m && 65 === y[0] && 100 === y[1] && 111 === y[2] && 98 === y[3] && 101 === y[4] && 0 === y[5] && (p = {
                version: y[6],
                flags0: y[7] << 8 | y[8],
                flags1: y[9] << 8 | y[10],
                transformCode: y[11]
              });
              break;
            case 65499:
              for (var _ = a() + n - 2; n < _;) {
                var v = t[n++], b = new Int32Array(64);
                if (v >> 4 == 0)
                  for (O = 0; O < 64; O++) {
                    b[e[O]] = t[n++];
                  }
                else {
                  if (v >> 4 != 1)
                    throw "DQT: invalid table spec";
                  for (O = 0; O < 64; O++) {
                    b[e[O]] = a();
                  }
                }
                u[15 & v] = b;
              }
              break;
            case 65472:
            case 65473:
            case 65474:
              a(), (h = {}).extended = 65473 === m, h.progressive = 65474 === m, h.precision = t[n++], h.scanLines = a(), h.samplesPerLine = a(), h.components = {}, h.componentsOrder = [];
              var C, w = t[n++];
              for (U = 0; U < w; U++) {
                C = t[n];
                var E = t[n + 1] >> 4, B = 15 & t[n + 1], x = t[n + 2];
                h.componentsOrder.push(C), h.components[C] = {
                  h: E,
                  v: B,
                  quantizationIdx: x
                }, n += 3;
              }
              l(h), d.push(h);
              break;
            case 65476:
              var P = a();
              for (U = 2; U < P;) {
                var S = t[n++], T = new Uint8Array(16), I = 0;
                for (O = 0; O < 16; O++, n++)
                  I += T[O] = t[n];
                var F = new Uint8Array(I);
                for (O = 0; O < I; O++, n++)
                  F[O] = t[n];
                U += 17 + I, (S >> 4 == 0 ? f : g)[15 & S] = require(T, F);
              }
              break;
            case 65501:
              a(), A = a();
              break;
            case 65498:
              a();
              var R = t[n++], D = [];
              for (U = 0; U < R; U++) {
                L = h.components[t[n++]];
                var k = t[n++];
                L.huffmanTableDC = f[k >> 4], L.huffmanTableAC = g[15 & k], D.push(L);
              }
              var G = t[n++], Q = t[n++], M = t[n++], N = r(t, n, h, D, A, G, Q, M >> 4, 15 & M);
              n += N;
              break;
            default:
              if (255 == t[n - 3] && t[n - 2] >= 192 && t[n - 2] <= 254) {
                n -= 3;
                break;
              }
              throw "unknown JPEG marker " + m.toString(16);
            }
            m = a();
          }
          if (1 != d.length)
            throw "only single frame JPEGs supported";
          for (var U = 0; U < d.length; U++) {
            var V = d[U].components;
            for (var O in V)
              V[O].quantizationTable = u[V[O].quantizationIdx], delete V[O].quantizationIdx;
          }
          this.width = h.samplesPerLine, this.height = h.scanLines, this.jfif = c, this.adobe = p, this.components = [];
          for (U = 0; U < h.componentsOrder.length; U++) {
            var L = h.components[h.componentsOrder[U]];
            this.components.push({
              lines: o(0, L),
              scaleX: L.h / h.maxH,
              scaleY: L.v / h.maxV
            });
          }
        },
        getData: function (e, t) {
          var i, n, r, o, s, l, h, A, c, p, u, d, g, f, m, y, _, v, b, C, w, E = this.width / e, B = this.height / t, x = 0, P = e * t * this.components.length, S = new Uint8Array(P);
          switch (this.components.length) {
          case 1:
            for (i = this.components[0], p = 0; p < t; p++)
              for (s = i.lines[0 | p * i.scaleY * B], c = 0; c < e; c++)
                u = s[0 | c * i.scaleX * E], S[x++] = u;
            break;
          case 2:
            for (i = this.components[0], n = this.components[1], p = 0; p < t; p++)
              for (s = i.lines[0 | p * i.scaleY * B], l = n.lines[0 | p * n.scaleY * B], c = 0; c < e; c++)
                u = s[0 | c * i.scaleX * E], S[x++] = u, u = l[0 | c * n.scaleX * E], S[x++] = u;
            break;
          case 3:
            for (w = true, this.adobe && this.adobe.transformCode ? w = true : undefined !== this.colorTransform && (w = !!this.colorTransform), i = this.components[0], n = this.components[1], r = this.components[2], p = 0; p < t; p++)
              for (s = i.lines[0 | p * i.scaleY * B], l = n.lines[0 | p * n.scaleY * B], h = r.lines[0 | p * r.scaleY * B], c = 0; c < e; c++)
                w ? (u = s[0 | c * i.scaleX * E], d = l[0 | c * n.scaleX * E], v = a(u + 1.402 * ((g = h[0 | c * r.scaleX * E]) - 128)), b = a(u - 0.3441363 * (d - 128) - 0.71413636 * (g - 128)), C = a(u + 1.772 * (d - 128))) : (v = s[0 | c * i.scaleX * E], b = l[0 | c * n.scaleX * E], C = h[0 | c * r.scaleX * E]), S[x++] = v, S[x++] = b, S[x++] = C;
            break;
          case 4:
            if (!this.adobe)
              throw "Unsupported color mode (4 components)";
            for (w = false, this.adobe && this.adobe.transformCode ? w = true : undefined !== this.colorTransform && (w = !!this.colorTransform), i = this.components[0], n = this.components[1], r = this.components[2], o = this.components[3], p = 0; p < t; p++)
              for (s = i.lines[0 | p * i.scaleY * B], l = n.lines[0 | p * n.scaleY * B], h = r.lines[0 | p * r.scaleY * B], A = o.lines[0 | p * o.scaleY * B], c = 0; c < e; c++)
                w ? (u = s[0 | c * i.scaleX * E], d = l[0 | c * n.scaleX * E], g = h[0 | c * r.scaleX * E], f = A[0 | c * o.scaleX * E], m = 255 - a(u + 1.402 * (g - 128)), y = 255 - a(u - 0.3441363 * (d - 128) - 0.71413636 * (g - 128)), _ = 255 - a(u + 1.772 * (d - 128))) : (m = s[0 | c * i.scaleX * E], y = l[0 | c * n.scaleX * E], _ = h[0 | c * r.scaleX * E], f = A[0 | c * o.scaleX * E]), S[x++] = 255 - m, S[x++] = 255 - y, S[x++] = 255 - _, S[x++] = 255 - f;
            break;
          default:
            throw "Unsupported color mode";
          }
          return S;
        },
        copyToImageData: function (e) {
          var t, i, r, o, a, s, l = e.width, h = e.height, A = e.data, c = this.getData(l, h), p = 0, u = 0;
          switch (this.components.length) {
          case 1:
            for (i = 0; i < h; i++)
              for (t = 0; t < l; t++)
                r = c[p++], A[u++] = r, A[u++] = r, A[u++] = r, A[u++] = 255;
            break;
          case 3:
            for (i = 0; i < h; i++)
              for (t = 0; t < l; t++)
                o = c[p++], a = c[p++], s = c[p++], A[u++] = o, A[u++] = a, A[u++] = s, A[u++] = 255;
            break;
          case 4:
            for (i = 0; i < h; i++)
              for (t = 0; t < l; t++) {
                var d = [
                    c[p++] / 255,
                    c[p++] / 255,
                    r = c[p++] / 255,
                    c[p++] / 255
                  ], g = n.cmykToRGB(d);
                A[u++] = g[0], A[u++] = g[1], A[u++] = g[2], A[u++] = 255;
              }
            break;
          default:
            throw "Unsupported color mode";
          }
        }
      }, module;
    }();
  function o(e) {
    this._decoder = new r(), this._decoder.parse(e);
  }
  o.ColorSpace = {
    CMYK: "cmyk",
    RGB: "rgb",
    GRAY: "gray"
  }, o.prototype._decoder = null, o.prototype._data = null, o.prototype.getColorSpace = function () {
    switch (this._decoder.components.length) {
    case 1:
      return o.ColorSpace.GRAY;
    case 3:
      return o.ColorSpace.RGB;
    case 4:
      return o.ColorSpace.CMYK;
    default:
      return null;
    }
  }, o.prototype.getData = function () {
    if (!this._data) {
      var exports = {
        width: this._decoder.width,
        height: this._decoder.height,
        data: new Uint8Array(this._decoder.width * this._decoder.height * 4)
      };
      this._decoder.copyToImageData(exports), this._data = exports.data;
    }
    return this._data;
  }, exports.exports = o;
}
