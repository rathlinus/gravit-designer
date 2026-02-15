/**
 * Module 68 - GColor
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
  var n = require(50) /* GPattern */, r = require(0) /* GObject */, o = require(641) /* MFTHeaderData */, a = require(11) /* GUtil */;
  function s(e) {
    this._value = e && e instanceof Array ? e.slice() : null;
  }
  function l(e) {
    return Math.min(255, Math.max(0, Math.round(e)));
  }
  r.inherit(s, n), s.ColorModes = {
    RGB: "RGB",
    HSB: "HSB",
    CMYK: "CMYK"
  }, s.IccProfileNames = { USWebCoatedSWOPv2: "USWebCoatedSWOP.icc" }, s.IccProfiles = {}, s.D50 = [
    0.9642,
    1,
    0.82491
  ], s.currentCMYKProfile = null, s.iccReader = null, s.setCMYKProfile = function (e, t, n) {
    if (e in s.IccProfileNames)
      if (e in s.IccProfiles)
        s.currentCMYKProfile = s.IccProfiles[e], n && n();
      else {
        var r = function (t) {
          s.iccReader || (s.iccReader = new o()), s.iccReader.read(t, function (t) {
            t && (s.IccProfiles[e] = t, s.currentCMYKProfile = s.IccProfiles[e]);
          });
        };
        if (t && 0 === t.indexOf("file"))
          try {
            var a = require(178) /* module_178 */.readFileSync(t.substring("file://".length) + "/" + s.IccProfileNames[e]);
            a && r(a.buffer);
          } finally {
            n && n();
          }
        else {
          var l = new XMLHttpRequest();
          l.addEventListener("load", function () {
            200 == l.status && l.response && l.response instanceof ArrayBuffer && r(l.response);
          }), n && l.addEventListener("loadend", n, false), l.open("GET", (t || "assets/data/icc/") + s.IccProfileNames[e]), l.responseType = "arraybuffer", l.send(null);
        }
      }
  }, s.rgbToHSV = function (e) {
    var t = e[0] / 255, i = e[1] / 255, n = e[2] / 255, r = Math.min(t, Math.min(i, n)), o = Math.max(t, Math.max(i, n));
    if (r === o)
      return [
        0,
        0,
        r
      ];
    var a = t === r ? i - n : n === r ? t - i : n - t, s = t === r ? 3 : n === r ? 1 : 5;
    return [
      Math.min(360, Math.max(0, Math.round(60 * (s - a / (o - r))))),
      (o - r) / o,
      o
    ];
  }, s.hsvToCMYK = function (e) {
    return s.rgbToCMYK(s.hsvToRGB(e));
  }, s.cmykToHSV = function (e) {
    return s.rgbToHSV(s.cmykToRGB(e));
  }, s.hsvToRGB = function (e) {
    var t, i = e[2] * e[1], n = e[0] / 60, r = i * (1 - Math.abs(n % 2 - 1)), o = e[2] - i;
    return [
      l(255 * ((t = n < 1 ? [
        i,
        r,
        0
      ] : n < 2 ? [
        r,
        i,
        0
      ] : n < 3 ? [
        0,
        i,
        r
      ] : n < 4 ? [
        0,
        r,
        i
      ] : n < 5 ? [
        r,
        0,
        i
      ] : n <= 6 ? [
        i,
        0,
        r
      ] : [
        0,
        0,
        0
      ])[0] + o)),
      l(255 * (t[1] + o)),
      l(255 * (t[2] + o))
    ];
  }, s.cmykToRGB = function (e, t) {
    var i = 4 === e.length ? e[3] : 0, n = e[0] * (1 - i) + i, r = e[1] * (1 - i) + i, o = e[2] * (1 - i) + i, a = [
        l(255 * (1 - n)),
        l(255 * (1 - r)),
        l(255 * (1 - o))
      ];
    if (t || !s.currentCMYKProfile)
      return a;
    n = l(255 * e[0]), r = l(255 * e[1]), o = l(255 * e[2]), i = 4 === e.length ? l(255 * e[3]) : 0;
    var h = s.currentCMYKProfile.AtoB1normalizationRange;
    n = s._mapChannel(n, 0, 4, 255, s.currentCMYKProfile.AtoB1InputChange, h), r = s._mapChannel(r, 1, 4, 255, s.currentCMYKProfile.AtoB1InputChange, h), o = s._mapChannel(o, 2, 4, 255, s.currentCMYKProfile.AtoB1InputChange, h), i = s._mapChannel(i, 3, 4, 255, s.currentCMYKProfile.AtoB1InputChange, h);
    for (var A = s.currentCMYKProfile.AtoB1CLUTNumPts, c = s.currentCMYKProfile.AtoB1CLUT, p = Math.ceil(255 / (A - 1)), u = [], d = 0, g = 0, f = 0, m = 0, y = 0, _ = 0; _ < 256; _ += p, ++y) {
      var v = _ + p;
      v = v < 255 ? v : 255, u.push([
        _,
        v
      ]), n >= _ && n <= v && (d = y, (n - _) / (v - _)), r >= _ && r <= v && (g = y, (r - _) / (v - _)), o >= _ && o <= v && (f = y, (o - _) / (v - _)), i >= _ && i <= v && (m = y, (i - _) / (v - _));
    }
    var b, C, w, E, B, x, P, S, T, I = (u[d][1] - u[d][0]) * (u[g][1] - u[g][0]) * (u[f][1] - u[f][0]) * (u[m][1] - u[m][0]);
    if (!I)
      return a;
    var F, R, D = 0, k = 0, G = 0;
    for (_ = 0; _ < 16; ++_)
      b = (8 & _) >> 3, C = (4 & _) >> 2, w = (2 & _) >> 1, E = 1 & _, P = 4 & _ ? 0 : 1, S = 2 & _ ? 0 : 1, T = 1 & _ ? 0 : 1, D += (B = ((x = 8 & _ ? 0 : 1) > 0 ? u[d][x] - n : n - u[d][x]) * (P > 0 ? u[g][P] - r : r - u[g][P]) * (S > 0 ? u[f][S] - o : o - u[f][S]) * (T > 0 ? u[m][T] - i : i - u[m][T]) / I) * (F = [
        c[3 * (R = A * (A * (A * (d + b) + (g + C)) + (f + w)) + m + E)],
        c[3 * R + 1],
        c[3 * R + 2]
      ])[0], k += B * F[1], G += B * F[2];
    if (D = s._mapChannel(D, 0, 3, h, s.currentCMYKProfile.AtoB1OutputChange, h), k = s._mapChannel(k, 1, 3, h, s.currentCMYKProfile.AtoB1OutputChange, h), G = s._mapChannel(G, 2, 3, h, s.currentCMYKProfile.AtoB1OutputChange, h), D = 100 * D / h, 255 != h) {
      var Q = Math.ceil(h / 2);
      k = (k -= Q) < 0 ? k / Q * 128 : k / (Q - 1) * 127, G = (G -= Q) < 0 ? G / Q * 128 : G / (Q - 1) * 127;
    } else
      k -= 128, G -= 128;
    var M = (D + 16) / 116, N = M - G / 200, U = k / 500 + M, V = U * U * U, O = M * M * M, L = N * N * N;
    V <= 216 / 24389 && (V = (116 * U - 16) / (24389 / 27)), L <= 216 / 24389 && (L = (116 * N - 16) / (24389 / 27)), O <= 216 / 24389 && (O = D / 255 * 100 / (24389 / 27)), V *= s.D50[0], O *= s.D50[1], L *= s.D50[2];
    var Y = [
        3.1338561,
        -1.6168667,
        -0.4906146,
        -0.9787684,
        1.9161415,
        0.033454,
        0.0719453,
        -0.2289914,
        1.4052427
      ], X = Y[0] * V + Y[1] * O + Y[2] * L, H = Y[3] * V + Y[4] * O + Y[5] * L, W = Y[6] * V + Y[7] * O + Y[8] * L, Z = function (e) {
        return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055;
      };
    return X = Z(X), H = Z(H), W = Z(W), [
      l(255 * X),
      l(255 * H),
      l(255 * W)
    ];
  }, s.rgbToCMYK = function (e, t) {
    var i = 1 - (e[0] ? e[0] / 255 : 0), n = 1 - (e[1] ? e[1] / 255 : 0), r = 1 - (e[2] ? e[2] / 255 : 0), o = Math.min(r, Math.min(n, Math.min(i, 1))), a = i - o, l = n - o, h = r - o, A = 1 - o, c = [
        Math.min(1, Math.max(0, a && A ? a / A : 0)),
        Math.min(1, Math.max(0, l && A ? l / A : 0)),
        Math.min(1, Math.max(0, h && A ? h / A : 0)),
        Math.min(1, Math.max(0, o))
      ];
    if (t || !s.currentCMYKProfile)
      return c;
    var p = function (e) {
        return e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      }, u = p(e[0] ? e[0] / 255 : 0), d = p(e[1] ? e[1] / 255 : 0), g = p(e[2] ? e[2] / 255 : 0), f = [
        0.4360747,
        0.3850649,
        0.1430804,
        0.2225045,
        0.7168786,
        0.0606169,
        0.0139322,
        0.0971045,
        0.7141733
      ], m = f[0] * u + f[1] * d + f[2] * g, y = f[3] * u + f[4] * d + f[5] * g, _ = f[6] * u + f[7] * d + f[8] * g;
    m /= s.D50[0], y /= s.D50[1], _ /= s.D50[2];
    var v = function (e) {
        return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (24389 / 27 * e + 16) / 116;
      }, b = v(m), C = v(y), w = 116 * C - 16, E = 500 * (b - C), B = 200 * (C - v(_)), x = s.currentCMYKProfile.BtoA1normalizationRange;
    if (w = w * x / 100, 255 != x) {
      var P = Math.ceil(x / 2);
      E = E < 0 ? E / 128 * P : E / 127 * (P - 1), B = B < 0 ? B / 128 * P : B / 127 * (P - 1), E += P, B += P;
    } else
      E += 128, B += 128;
    w = s._mapChannel(w, 0, 3, x, s.currentCMYKProfile.BtoA1InputChange, x), E = s._mapChannel(E, 1, 3, x, s.currentCMYKProfile.BtoA1InputChange, x), B = s._mapChannel(B, 2, 3, x, s.currentCMYKProfile.BtoA1InputChange, x);
    for (var S = s.currentCMYKProfile.BtoA1CLUTNumPts, T = s.currentCMYKProfile.BtoA1CLUT, I = Math.ceil(255 / (S - 1)), F = [], R = 0, D = 0, k = 0, G = 0, Q = 0; Q < 256; Q += I, ++G) {
      var M = Q + I;
      M = M < 255 ? M : 255, F.push([
        Q,
        M
      ]), w >= Q && w <= M && (R = G, (w - Q) / (M - Q)), E >= Q && n <= M && (D = G, (E - Q) / (M - Q)), B >= Q && B <= M && (k = G, (B - Q) / (M - Q));
    }
    var N, U, V, O, L, Y, X, H = (F[R][1] - F[R][0]) * (F[D][1] - F[D][0]) * (F[k][1] - F[k][0]);
    if (!H)
      return c;
    var W, Z;
    i = 0, n = 0, r = 0, o = 0;
    for (Q = 0; Q < 8; ++Q)
      N = (4 & Q) >> 2, V = (2 & Q) >> 1, U = 1 & Q, X = 2 & Q ? 0 : 1, Y = 1 & Q ? 0 : 1, i += (O = ((L = 4 & Q ? 0 : 1) > 0 ? F[R][L] - w : w - F[R][L]) * (X > 0 ? F[D][X] - E : E - F[D][X]) * (Y > 0 ? F[k][Y] - B : B - F[k][Y]) / H) * (W = [
        T[4 * (Z = S * (S * (R + N) + (D + V)) + k + U)],
        T[4 * Z + 1],
        T[4 * Z + 2],
        T[4 * Z + 3]
      ])[0], n += O * W[1], r += O * W[2], o += O * W[3];
    return i = s._mapChannel(i, 0, 4, 255, s.currentCMYKProfile.BtoA1OutputChange, x), n = s._mapChannel(n, 1, 4, 255, s.currentCMYKProfile.BtoA1OutputChange, x), r = s._mapChannel(r, 2, 4, 255, s.currentCMYKProfile.BtoA1OutputChange, x), o = s._mapChannel(o, 3, 4, 255, s.currentCMYKProfile.BtoA1OutputChange, x), isFinite(i) && isFinite(n) && isFinite(r) && isFinite(o) || console.log("BOMB"), [
      i / 255,
      n / 255,
      r / 255,
      o / 255
    ];
  }, s.rgbToHtmlHex = function (e) {
    var t = e[0] << 16 | e[1] << 8 | e[2];
    return "#" + a.numToHexSixDigitsString(t);
  }, s.rgbToCSS = function (e, t) {
    return "number" == typeof t && 1 !== t ? "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + t + ")" : s.rgbToHtmlHex(e);
  }, s._mapChannel = function (e, t, i, n, r, o) {
    var a = e;
    if (r && r.length >= 2) {
      var s = Math.floor(r.length / i), l = t * s;
      n != o && (a = e / n * o);
      var h = Math.ceil(o / (s - 1)), A = Math.floor(a / h), c = A * h;
      c == a && 0 != a && (A -= 1, c -= h);
      var p = c + h, u = (a - c) / ((p = p < o ? p : o) - c || 1);
      a = r[l + A] + u * (r[l + A + 1] - r[l + A]), n != o && (a = a / o * n);
    }
    return a;
  }, s.prototype._value = null, s.prototype.getValue = function () {
    return this._value;
  }, s.prototype.serialize = function () {
    return this._value ? JSON.stringify(this._value) : "";
  }, s.prototype.deserialize = function (e) {
    e && (this._value = JSON.parse(e));
  }, s.prototype.toHumanString = function () {
    throw new Error("Not Supported.");
  }, s.prototype.toScreen = function (e) {
    throw new Error("Not Supported.");
  }, s.prototype.toScreenCSS = function (e, t) {
    return s.rgbToCSS(this.toScreen(t), e);
  }, s.prototype.getAverageColor = function () {
    return this.toScreen().concat([1]);
  }, s.prototype.asCSSBackground = function (e) {
    var t = this.toScreenCSS(e);
    return "linear-gradient(" + t + ", " + t + ")";
  }, s.prototype.toString = function () {
    return "[Object GColor]";
  }, exports.exports = s;
}
