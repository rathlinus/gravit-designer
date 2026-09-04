/**
 * chunk.vendor.js Module #1003
 * Type: unknown
 */

function (e, t, i) {
      var n = i(380),
        r = i(5),
        o = i(0);

      function a() {
        ((this._m_w = 123456789), (this._m_z = 987654321));
      }
      (o.inherit(a, o),
        (a.prototype._m_w = 123456789),
        (a.prototype._m_z = 987654321),
        (a.prototype.imagedataToTracedata = function (e, t) {
          t = this.checkoptions(t);
          var i = this.colorquantization(e, t),
            n = this.layering(i),
            r = this.batchpathscan(n, t.pathomit),
            o = this.batchinternodes(r);
          return {
            layers: this.batchtracelayers(o, t.ltres, t.qtres),
            palette: i.palette,
            width: e.width,
            height: e.height,
          };
        }),
        (a.prototype.checkoptions = function (e) {
          return (
            (e = e || {}).hasOwnProperty("ltres") || (e.ltres = 1),
            e.hasOwnProperty("qtres") || (e.qtres = 1),
            e.hasOwnProperty("pathomit") || (e.pathomit = 8),
            e.hasOwnProperty("colorsampling") || (e.colorsampling = !0),
            e.hasOwnProperty("numberofcolors") || (e.numberofcolors = 16),
            e.hasOwnProperty("mincolorratio") || (e.mincolorratio = 0.02),
            e.hasOwnProperty("colorquantcycles") || (e.colorquantcycles = 3),
            e.hasOwnProperty("scale") || (e.scale = 1),
            e.hasOwnProperty("simplifytolerance") || (e.simplifytolerance = 0),
            e.hasOwnProperty("roundcoords") || (e.roundcoords = 1),
            e.hasOwnProperty("lcpr") || (e.lcpr = 0),
            e.hasOwnProperty("qcpr") || (e.qcpr = 0),
            e.hasOwnProperty("desc") || (e.desc = !0),
            e.hasOwnProperty("viewbox") || (e.viewbox = !1),
            e.hasOwnProperty("blurradius") || (e.blurradius = 0),
            e.hasOwnProperty("blurdelta") || (e.blurdelta = 20),
            e
          );
        }));
      var s = 4294967295;
      ((a.prototype.rand = function () {
        ((this._m_z = (36969 * (65535 & this._m_z) + (this._m_z >> 16)) & s),
          (this._m_w = (18e3 * (65535 & this._m_w) + (this._m_w >> 16)) & s));
        var e = ((this._m_z << 16) + this._m_w) & s;
        return (e /= 4294967296) + 0.5;
      }),
        (a.prototype.colorquantization = function (e, t) {
          var i,
            n,
            r,
            o,
            a,
            s,
            l,
            h,
            A = [],
            c = 0,
            p = [],
            u = e.width * e.height;
          for (a = 0; a < e.height + 2; a++)
            for (A[a] = [], o = 0; o < e.width + 2; o++) A[a][o] = -1;
          for (
            h = t.pal
              ? t.pal
              : t.colorsampling
                ? this.samplepalette(t.numberofcolors, e)
                : this.generatepalette(t.numberofcolors),
              t.blurradius > 0 && (e = this.blur(e, t.blurradius, t.blurdelta)),
              l = 0;
            l < t.colorquantcycles;
            l++
          ) {
            if (l > 0)
              for (s = 0; s < h.length; s++)
                (p[s].n > 0 &&
                  ((h[s].r = Math.floor(p[s].r / p[s].n)),
                  (h[s].g = Math.floor(p[s].g / p[s].n)),
                  (h[s].b = Math.floor(p[s].b / p[s].n)),
                  (h[s].a = Math.floor(p[s].a / p[s].n))),
                  p[s].n / u < t.mincolorratio &&
                    l < t.colorquantcycles - 1 &&
                    ((h[s].r = Math.floor(255 * this.rand())),
                    (h[s].g = Math.floor(255 * this.rand())),
                    (h[s].b = Math.floor(255 * this.rand())),
                    (h[s].a = Math.floor(255 * this.rand()))));
            for (o = 0; o < h.length; o++)
              ((p[o] = {}),
                (p[o].r = 0),
                (p[o].g = 0),
                (p[o].b = 0),
                (p[o].a = 0),
                (p[o].n = 0));
            for (a = 0; a < e.height; a++)
              for (o = 0; o < e.width; o++) {
                for (
                  c = 4 * (a * e.width + o), n = 1024, r = 0, s = 0;
                  s < h.length;
                  s++
                )
                  (i =
                    Math.abs(h[s].r - e.data[c]) +
                    Math.abs(h[s].g - e.data[c + 1]) +
                    Math.abs(h[s].b - e.data[c + 2]) +
                    4 * Math.abs(h[s].a - e.data[c + 3])) < n &&
                    ((n = i), (r = s));
                ((p[r].r += e.data[c]),
                  (p[r].g += e.data[c + 1]),
                  (p[r].b += e.data[c + 2]),
                  (p[r].a += e.data[c + 3]),
                  p[r].n++,
                  (A[a + 1][o + 1] = r));
              }
          }
          return {
            array: A,
            palette: h,
          };
        }),
        (a.prototype.samplepalette = function (e, t) {
          for (var i, n = [], r = 0; r < e; r++)
            ((i = 4 * Math.floor((this.rand() * t.data.length) / 4)),
              (n[r] = {}),
              (n[r].r = t.data[i]),
              (n[r].g = t.data[i + 1]),
              (n[r].b = t.data[i + 2]),
              (n[r].a = t.data[i + 3]));
          return n;
        }),
        (a.prototype.generatepalette = function (e) {
          var t,
            i,
            n,
            r = [];
          if (e < 8)
            for (var o = Math.floor(255 / (e - 1)), a = 0; a < e; a++)
              r.push({
                r: a * o,
                g: a * o,
                b: a * o,
                a: 255,
              });
          else {
            var s = Math.floor(Math.pow(e, 1 / 3)),
              l = Math.floor(255 / (s - 1)),
              h = e - s * s * s;
            for (t = 0; t < s; t++)
              for (i = 0; i < s; i++)
                for (n = 0; n < s; n++) {
                  var A = {
                    r: t * l,
                    g: i * l,
                    b: n * l,
                    a: 255,
                  };
                  r.push(A);
                }
            for (t = 0; t < h; t++)
              r.push({
                r: Math.floor(255 * this.rand()),
                g: Math.floor(255 * this.rand()),
                b: Math.floor(255 * this.rand()),
                a: Math.floor(255 * this.rand()),
              });
          }
          return r;
        }),
        (a.prototype.layering = function (e) {
          var t,
            i,
            n,
            r,
            o,
            a,
            s,
            l,
            h,
            A,
            c,
            p = [],
            u = 0,
            d = e.array.length,
            g = e.array[0].length;
          for (c = 0; c < e.palette.length; c++)
            for (p[c] = [], A = 0; A < d; A++)
              for (p[c][A] = [], h = 0; h < g; h++) p[c][A][h] = 0;
          for (A = 1; A < d - 1; A++)
            for (h = 1; h < g - 1; h++)
              ((u = e.array[A][h]),
                (t = A > 0 && h > 0 && e.array[A - 1][h - 1] === u ? 1 : 0),
                (i = A > 0 && e.array[A - 1][h] === u ? 1 : 0),
                (n = A > 0 && h < g - 1 && e.array[A - 1][h + 1] === u ? 1 : 0),
                (r = h > 0 && e.array[A][h - 1] === u ? 1 : 0),
                (o = h < g - 1 && e.array[A][h + 1] === u ? 1 : 0),
                (a = A < d - 1 && h > 0 && e.array[A + 1][h - 1] === u ? 1 : 0),
                (s = A < d - 1 && e.array[A + 1][h] === u ? 1 : 0),
                (l =
                  A < d - 1 && h < g - 1 && e.array[A + 1][h + 1] === u
                    ? 1
                    : 0),
                (p[u][A + 1][h + 1] = 1 + 2 * o + 4 * l + 8 * s),
                r || (p[u][A + 1][h] = 2 + 4 * s + 8 * a),
                i || (p[u][A][h + 1] = 0 + 2 * n + 4 * o + 8),
                t || (p[u][A][h] = 0 + 2 * i + 4 + 8 * r));
          return p;
        }),
        (a.prototype.pathscan = function (e, t) {
          t = t || 8;
          for (
            var i = [],
              n = 0,
              r = 0,
              o = 0,
              a = 0,
              s = e[0].length,
              l = e.length,
              h = 0,
              A = !0,
              c = !1,
              p = 0;
            p < l;
            p++
          )
            for (var u = 0; u < s; u++)
              if (0 !== e[p][u] && 15 !== e[p][u])
                for (
                  o = u,
                    a = p,
                    i[n] = [],
                    A = !1,
                    r = 0,
                    1 === e[a][o] && (h = 0),
                    2 === e[a][o] && (h = 3),
                    3 === e[a][o] && (h = 0),
                    4 === e[a][o] && ((h = 1), (c = !1)),
                    5 === e[a][o] && (h = 0),
                    6 === e[a][o] && (h = 3),
                    7 === e[a][o] && ((h = 0), (c = !0)),
                    8 === e[a][o] && (h = 0),
                    9 === e[a][o] && (h = 3),
                    10 === e[a][o] && (h = 3),
                    11 === e[a][o] && ((h = 1), (c = !0)),
                    12 === e[a][o] && (h = 0),
                    13 === e[a][o] && ((h = 3), (c = !0)),
                    14 === e[a][o] && ((h = 0), (c = !0));
                  !A;
                )
                  ((i[n][r] = {}),
                    (i[n][r].x = o - 1),
                    (i[n][r].y = a - 1),
                    (i[n][r].t = e[a][o]),
                    1 === e[a][o]
                      ? ((e[a][o] = 0),
                        0 === h
                          ? (a--, (h = 1))
                          : 3 === h
                            ? (o--, (h = 2))
                            : ((A = !0), i.pop()))
                      : 2 === e[a][o]
                        ? ((e[a][o] = 0),
                          3 === h
                            ? (o++, (h = 0))
                            : 2 === h
                              ? (a--, (h = 1))
                              : ((A = !0), i.pop()))
                        : 3 === e[a][o]
                          ? ((e[a][o] = 0),
                            0 === h ? o++ : 2 === h ? o-- : ((A = !0), i.pop()))
                          : 4 === e[a][o]
                            ? ((e[a][o] = 0),
                              1 === h
                                ? (o++, (h = 0))
                                : 2 === h
                                  ? (a++, (h = 3))
                                  : ((A = !0), i.pop()))
                            : 5 === e[a][o]
                              ? 0 === h
                                ? ((e[a][o] = 13), a++, (h = 3))
                                : 1 === h
                                  ? ((e[a][o] = 13), o--, (h = 2))
                                  : 2 === h
                                    ? ((e[a][o] = 7), a--, (h = 1))
                                    : 3 === h && ((e[a][o] = 7), o++, (h = 0))
                              : 6 === e[a][o]
                                ? ((e[a][o] = 0),
                                  1 === h
                                    ? a--
                                    : 3 === h
                                      ? a++
                                      : ((A = !0), i.pop()))
                                : 7 === e[a][o] || 8 === e[a][o]
                                  ? ((e[a][o] = 0),
                                    0 === h
                                      ? (a++, (h = 3))
                                      : 1 === h
                                        ? (o--, (h = 2))
                                        : ((A = !0), i.pop()))
                                  : 9 === e[a][o]
                                    ? ((e[a][o] = 0),
                                      1 === h
                                        ? a--
                                        : 3 === h
                                          ? a++
                                          : ((A = !0), i.pop()))
                                    : 10 === e[a][o]
                                      ? 0 === h
                                        ? ((e[a][o] = 11), a--, (h = 1))
                                        : 1 === h
                                          ? ((e[a][o] = 14), o++, (h = 0))
                                          : 2 === h
                                            ? ((e[a][o] = 14), a++, (h = 3))
                                            : 3 === h &&
                                              ((e[a][o] = 11), o--, (h = 2))
                                      : 11 === e[a][o]
                                        ? ((e[a][o] = 0),
                                          1 === h
                                            ? (o++, (h = 0))
                                            : 2 === h
                                              ? (a++, (h = 3))
                                              : ((A = !0), i.pop()))
                                        : 12 === e[a][o]
                                          ? ((e[a][o] = 0),
                                            0 === h
                                              ? o++
                                              : 2 === h
                                                ? o--
                                                : ((A = !0), i.pop()))
                                          : 13 === e[a][o]
                                            ? ((e[a][o] = 0),
                                              2 === h
                                                ? (a--, (h = 1))
                                                : 3 === h
                                                  ? (o++, (h = 0))
                                                  : ((A = !0), i.pop()))
                                            : 14 === e[a][o] &&
                                              ((e[a][o] = 0),
                                              0 === h
                                                ? (a--, (h = 1))
                                                : 3 === h
                                                  ? (o--, (h = 2))
                                                  : ((A = !0), i.pop())),
                    o - 1 === i[n][0].x &&
                      a - 1 === i[n][0].y &&
                      ((A = !0), c || i[n].length < t ? i.pop() : n++),
                    r++);
          return i;
        }),
        (a.prototype.batchpathscan = function (e, t) {
          var i = [];
          for (var n in e)
            e.hasOwnProperty(n) && (i[n] = this.pathscan(e[n], t));
          return i;
        }),
        (a.prototype.internodes = function (e) {
          var t,
            i,
            n = [],
            r = 0,
            o = 0,
            a = 0,
            s = 0,
            l = 0;
          for (t = 0; t < e.length; t++)
            for (n[t] = [], r = e[t].length, i = 0; i < r; i++)
              ((o = (i + 1) % r),
                (a = (i + 2) % r),
                (n[t][i] = {}),
                (n[t][i].x = (e[t][i].x + e[t][o].x) / 2),
                (n[t][i].y = (e[t][i].y + e[t][o].y) / 2),
                (s = (e[t][o].x + e[t][a].x) / 2),
                (l = (e[t][o].y + e[t][a].y) / 2),
                n[t][i].x < s
                  ? n[t][i].y < l
                    ? (n[t][i].linesegment = 1)
                    : n[t][i].y > l
                      ? (n[t][i].linesegment = 7)
                      : (n[t][i].linesegment = 0)
                  : n[t][i].x > s
                    ? n[t][i].y < l
                      ? (n[t][i].linesegment = 3)
                      : n[t][i].y > l
                        ? (n[t][i].linesegment = 5)
                        : (n[t][i].linesegment = 4)
                    : n[t][i].y < l
                      ? (n[t][i].linesegment = 2)
                      : n[t][i].y > l
                        ? (n[t][i].linesegment = 6)
                        : (n[t][i].linesegment = 8));
          return n;
        }),
        (a.prototype.batchinternodes = function (e) {
          var t = [];
          for (var i in e)
            e.hasOwnProperty(i) && (t[i] = this.internodes(e[i]));
          return t;
        }),
        (a.prototype.tracepath = function (e, t, i) {
          for (var n, r, o, a = 0, s = []; a < e.length; ) {
            for (
              n = e[a].linesegment, r = -1, o = a + 1;
              (e[o].linesegment === n || e[o].linesegment === r || -1 === r) &&
              o < e.length - 1;
            )
              (e[o].linesegment !== n && -1 === r && (r = e[o].linesegment),
                o++);
            (o === e.length - 1 && (o = 0),
              (s = s.concat(this.fitseq(e, t, i, a, o))),
              (a = o > 0 ? o : e.length));
          }
          return s;
        }),
        (a.prototype.tracepath2 = function (e) {
          for (var t, i, o, a = 0, s = [], l = new n(0.5); a < e.length; ) {
            for (
              t = e[a].linesegment, i = -1, o = a + 1;
              (e[o].linesegment === t || e[o].linesegment === i || -1 === i) &&
              o < e.length - 1;
            )
              (e[o].linesegment !== t && -1 === i && (i = e[o].linesegment),
                o++);
            o === e.length - 1 && (o = 0);
            for (var h = [], A = a; A < o; A++) h.push(new r(e[A].x, e[A].y));
            if (h.length > 1) {
              var c, p;
              (s.length &&
                (c = new r(
                  s[s.length - 1].cx2 - s[s.length - 1].x2,
                  s[s.length - 1].cy2 - s[s.length - 1].y2,
                )),
                (p = l._computeRightTangent(h, h.length - 1)));
              var u = l.fitCurve(h, h.length, c, p);
              for (A = 0; A < u.length; A++) {
                var d = u[A];
                s.push({
                  type: "C",
                  x1: d[0].getX(),
                  y1: d[0].getY(),
                  x2: d[3].getX(),
                  y2: d[3].getY(),
                  cx1: d[1].getX(),
                  cy1: d[1].getY(),
                  cx2: d[2].getX(),
                  cy2: d[2].getY(),
                });
              }
            }
            a = o > 0 ? o : e.length;
          }
          return s;
        }),
        (a.prototype.fitseq = function (e, t, i, n, r) {
          if (r > e.length || r < 0) return [];
          var o,
            a,
            s,
            l = n,
            h = 0,
            A = !0,
            c = r - n;
          c < 0 && (c += e.length);
          for (
            var p,
              u = (e[r].x - e[n].x) / c,
              d = (e[r].y - e[n].y) / c,
              g = (n + 1) % e.length;
            g != r;
          )
            ((p = g - n) < 0 && (p += e.length),
              (o = e[n].x + u * p),
              (a = e[n].y + d * p),
              (s = (e[g].x - o) * (e[g].x - o) + (e[g].y - a) * (e[g].y - a)) >
                t && (A = !1),
              s > h && ((l = g), (h = s)),
              (g = (g + 1) % e.length));
          if (A)
            return [
              {
                type: "L",
                x1: e[n].x,
                y1: e[n].y,
                x2: e[r].x,
                y2: e[r].y,
              },
            ];
          var f = l;
          ((A = !0), (h = 0));
          var m = (f - n) / c,
            y = (1 - m) * (1 - m),
            _ = 2 * (1 - m) * m,
            v = m * m,
            b = (y * e[n].x + v * e[r].x - e[f].x) / -_,
            C = (y * e[n].y + v * e[r].y - e[f].y) / -_;
          for (g = n + 1; g != r; )
            ((_ = 2 * (1 - (m = (g - n) / c)) * m),
              (v = m * m),
              (o = (y = (1 - m) * (1 - m)) * e[n].x + _ * b + v * e[r].x),
              (a = y * e[n].y + _ * C + v * e[r].y),
              (s = (e[g].x - o) * (e[g].x - o) + (e[g].y - a) * (e[g].y - a)) >
                i && (A = !1),
              s > h && ((l = g), (h = s)),
              (g = (g + 1) % e.length));
          if (A)
            return [
              {
                type: "Q",
                x1: e[n].x,
                y1: e[n].y,
                x2: b,
                y2: C,
                x3: e[r].x,
                y3: e[r].y,
              },
            ];
          var w = Math.floor((f + l) / 2),
            E = this.fitseq(e, t, i, n, w);
          return (E = E.concat(this.fitseq(e, t, i, w, r)));
        }),
        (a.prototype.batchtracepaths = function (e, t, i) {
          var n = [];
          for (var r in e)
            e.hasOwnProperty(r) && n.push(this.tracepath(e[r], t, i));
          return n;
        }),
        (a.prototype.batchtracelayers = function (e, t, i) {
          var n = [];
          for (var r in e)
            e.hasOwnProperty(r) && (n[r] = this.batchtracepaths(e[r], t, i));
          return n;
        }),
        (a.prototype.gks = [
          [0.27901, 0.44198, 0.27901],
          [0.135336, 0.228569, 0.272192, 0.228569, 0.135336],
          [
            0.086776, 0.136394, 0.178908, 0.195843, 0.178908, 0.136394,
            0.086776,
          ],
          [
            0.063327, 0.093095, 0.122589, 0.144599, 0.152781, 0.144599,
            0.122589, 0.093095, 0.063327,
          ],
          [
            0.049692, 0.069304, 0.089767, 0.107988, 0.120651, 0.125194,
            0.120651, 0.107988, 0.089767, 0.069304, 0.049692,
          ],
        ]),
        (a.prototype.blur = function (e, t, i) {
          var n,
            r,
            o,
            a,
            s,
            l,
            h,
            A,
            c,
            p = document.createElement("canvas");
          ((p.width = e.width), (p.height = e.height));
          var u = p.getContext("2d").createImageData(e);
          if ((t = Math.floor(t)) < 1) return e;
          (t > 5 && (t = 5), (i = Math.abs(i)) > 1024 && (i = 1024));
          var d = this.gks[t - 1];
          for (r = 0; r < e.height; r++)
            for (n = 0; n < e.width; n++) {
              for (s = 0, l = 0, h = 0, A = 0, c = 0, o = -t; o < t + 1; o++)
                n + o > 0 &&
                  n + o < e.width &&
                  ((a = 4 * (r * e.width + n + o)),
                  (s += e.data[a] * d[o + t]),
                  (l += e.data[a + 1] * d[o + t]),
                  (h += e.data[a + 2] * d[o + t]),
                  (A += e.data[a + 3] * d[o + t]),
                  (c += d[o + t]));
              ((a = 4 * (r * e.width + n)),
                (u.data[a] = Math.floor(s / c)),
                (u.data[a + 1] = Math.floor(l / c)),
                (u.data[a + 2] = Math.floor(h / c)),
                (u.data[a + 3] = Math.floor(A / c)));
            }
          var g = new Uint8ClampedArray(u.data);
          for (r = 0; r < e.height; r++)
            for (n = 0; n < e.width; n++) {
              for (s = 0, l = 0, h = 0, A = 0, c = 0, o = -t; o < t + 1; o++)
                r + o > 0 &&
                  r + o < e.height &&
                  ((s += g[(a = 4 * ((r + o) * e.width + n))] * d[o + t]),
                  (l += g[a + 1] * d[o + t]),
                  (h += g[a + 2] * d[o + t]),
                  (A += g[a + 3] * d[o + t]),
                  (c += d[o + t]));
              ((a = 4 * (r * e.width + n)),
                (u.data[a] = Math.floor(s / c)),
                (u.data[a + 1] = Math.floor(l / c)),
                (u.data[a + 2] = Math.floor(h / c)),
                (u.data[a + 3] = Math.floor(A / c)));
            }
          for (r = 0; r < e.height; r++)
            for (n = 0; n < e.width; n++)
              ((a = 4 * (r * e.width + n)),
                Math.abs(u.data[a] - e.data[a]) +
                  Math.abs(u.data[a + 1] - e.data[a + 1]) +
                  Math.abs(u.data[a + 2] - e.data[a + 2]) +
                  Math.abs(u.data[a + 3] - e.data[a + 3]) >
                  i &&
                  ((u.data[a] = e.data[a]),
                  (u.data[a + 1] = e.data[a + 1]),
                  (u.data[a + 2] = e.data[a + 2]),
                  (u.data[a + 3] = e.data[a + 3])));
          return u;
        }),
        (a.prototype.loadImage = function (e, t) {
          var i = new Image();
          ((i.src = e),
            (i.onload = function () {
              var e = document.createElement("canvas");
              ((e.width = i.width),
                (e.height = i.height),
                e.getContext("2d").drawImage(i, 0, 0),
                t(e));
            }));
        }),
        (a.prototype.getImgdata = function (e) {
          return e.getContext("2d").getImageData(0, 0, e.width, e.height);
        }),
        (e.exports = a));
    }