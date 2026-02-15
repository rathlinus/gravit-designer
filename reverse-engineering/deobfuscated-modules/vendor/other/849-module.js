/**
 * Module 849
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
  var n = require(850) /* module */, r = require(11) /* GUtil */;
  function o() {
  }
  o.ColorSpace = {
    RGBA: {
      length: 3,
      init: function (e) {
        e._componentsId = [
          1,
          2,
          3
        ], e._hsampFactor = [
          1,
          1,
          1
        ], e._vsampFactor = [
          1,
          1,
          1
        ], e._qtableNumber = [
          0,
          1,
          1
        ], e._dctableNumber = [
          0,
          1,
          1
        ], e._actableNumber = [
          0,
          1,
          1
        ];
      },
      converter: function (e) {
        var t = 255 & e, i = e >> 8 & 255, n = e >> 16 & 255;
        return [
          0.299 * t + 0.587 * i + 0.114 * n,
          -0.16874 * t - 0.33126 * i + 0.5 * n + 128,
          0.5 * t - 0.41869 * i - 0.08131 * n + 128
        ];
      }
    },
    CMYK: {
      APP14: true,
      length: 4,
      init: function (e) {
        e._componentsId = [
          67,
          77,
          89,
          75
        ], e._hsampFactor = [
          1,
          1,
          1,
          1
        ], e._vsampFactor = [
          1,
          1,
          1,
          1
        ], e._qtableNumber = [
          0,
          0,
          0,
          0
        ], e._dctableNumber = [
          0,
          0,
          0,
          0
        ], e._actableNumber = [
          0,
          0,
          0,
          0
        ];
      },
      converter: function (e) {
        return [
          255 & e,
          e >> 8 & 255,
          e >> 16 & 255,
          e >> 24 & 255
        ];
      }
    }
  }, o.prototype._dct = null, o.prototype._huf = null, o.prototype._info = null, o.prototype._colorspace = null, o.prototype._out = null, o.prototype.concurrenyEncode = function (e, t, i, n, a, s, l) {
    var h = Object.keys(o.ColorSpace).find(function (e) {
      return o.ColorSpace[e] === s;
    });
    return e.createPromise(function (e, o) {
      var s = t[0], A = r.uuid();
      s.postMessage({
        uuid: A,
        command: "jpegencoder",
        buffer: i,
        width: n,
        height: a,
        colorspace: h,
        quality: l
      }, [i]);
      var c = function (e) {
          s.removeEventListener("message", p), s.removeEventListener("error", c), o(e);
        }, p = function (t) {
          var i = t.data;
          i.uuid === A && "jpegencoder" === i.command && (s.removeEventListener("message", p), s.removeEventListener("error", c), e(i.buffer));
        };
      s.addEventListener("message", p), s.addEventListener("error", c);
    });
  }, o.prototype.encode = function (e, t, i, r, o) {
    return this._colorspace = o, this._out = new n(524288), this._info = new c(e, t, i, o), this._dct = new h(r), this._huf = new A(t, i), this._writeHeaders(), this._writeCompressedData(), this._writeEOI(), this._out.getBuffer();
  }, o.prototype._writeHeaders = function () {
    this._writeWord(65496), this._colorspace.APP14 ? this._writeAPP14() : this._writeAPP0(), this._writeDQT(), this._writeSOF(), this._writeDHT(), this._writeSOS();
  }, o.prototype._writeCompressedData = function () {
    var e, t, i, n, r, o = p(this._info._numberOfComponents), a = new Int32Array(64), s = this._info._imageWidth, l = this._info._imageHeight;
    for (n = s % 8 != 0 ? 8 * (Math.floor(s / 8) + 1) : s, r = l % 8 != 0 ? 8 * (Math.floor(l / 8) + 1) : l, e = 0; e < this._info._numberOfComponents; e++)
      n = Math.min(n, this._info._blockWidth[e]), r = Math.min(r, this._info._blockHeight[e]);
    t = 0;
    for (var h = 0; h < r; h++)
      for (var A = 0; A < n; A++) {
        t = 8 * A, i = 8 * h;
        for (var c = 0, u = 0; u < 8; u++)
          for (var d = 0; d < 8; d++)
            a[c++] = this._info.getPixel(t + d, i + u);
        for (e = 0; e < this._info._numberOfComponents; e++) {
          var g = a.slice().map(function (t) {
              return this._colorspace.converter(t)[e];
            }.bind(this)), f = this._dct.forwardDCT(g), m = this._dct.quantizeBlock(f, this._info._qtableNumber[e]);
          this._huf.blockEncoder(this._out, m, o[e], this._info._dctableNumber[e], this._info._actableNumber[e]), o[e] = m[0];
        }
      }
    this._huf.flushBuffer(this._out);
  }, o.prototype._writeAPP0 = function () {
    this._writeWord(65504), this._writeWord(16), this._writeByte(74), this._writeByte(70), this._writeByte(73), this._writeByte(70), this._writeByte(0), this._writeByte(1), this._writeByte(1), this._writeByte(0), this._writeWord(1), this._writeWord(1), this._writeByte(0), this._writeByte(0);
  }, o.prototype._writeAPP14 = function () {
    this._writeWord(65518), this._writeWord(14), this._writeByte(65), this._writeByte(100), this._writeByte(111), this._writeByte(98), this._writeByte(101), this._writeWord(100), this._writeWord(0), this._writeWord(0), this._writeByte(0);
  }, o.prototype._writeDQT = function () {
    this._writeWord(65499), this._writeByte(0), this._writeByte(132);
    for (var exports = 0; exports < 2; exports++) {
      this._writeByte(0 + exports);
      for (var module = this._dct._quantum[exports], require = 0; require < 64; require++)
        this._writeByte(module[A.jpegNaturalOrder[require]]);
    }
  }, o.prototype._writeSOF = function () {
    this._writeWord(65472), this._writeWord(3 * this._info._numberOfComponents + 2 + 5 + 1), this._writeByte(this._info.precision), this._writeWord(this._info._imageHeight), this._writeWord(this._info._imageWidth), this._writeByte(this._info._numberOfComponents);
    for (var exports = 0; exports < this._info._numberOfComponents; exports++)
      this._writeByte(this._info._componentsId[exports]), this._writeByte((this._info._hsampFactor[exports] << 4) + this._info._vsampFactor[exports]), this._writeByte(this._info._qtableNumber[exports]);
  }, o.prototype._writeDHT = function () {
    var e, t, i, n = p(17), r = [], o = [], a = p(4), s = 4, l = 4;
    a[0] = 255, a[1] = 196;
    for (var h = 0; h < 4; h++) {
      e = 0, n[s++ - l] = this._huf._bits[h][0];
      for (var A = 1; A < 17; A++)
        t = this._huf._bits[h][A], n[s++ - l] = t, e += t;
      for (i = s, r = p(e), A = 0; A < e; A++)
        r[s++ - i] = this._huf._val[h][A];
      o = p(s), Array.prototype.splice.apply(o, [
        0,
        l
      ].concat(a.slice(0, l))), Array.prototype.splice.apply(o, [
        l,
        17
      ].concat(n.slice(0, 17))), Array.prototype.splice.apply(o, [
        l + 17,
        e
      ].concat(r.slice(0, e))), a = o, l = s;
    }
    a[2] = s - 2 >> 8 & 255, a[3] = s - 2 & 255, this._writeArray(a);
  }, o.prototype._writeSOS = function () {
    this._writeWord(65498), this._writeWord(2 * this._info._numberOfComponents + 2 + 1 + 3), this._writeByte(this._info._numberOfComponents);
    for (var exports = 0; exports < this._info._numberOfComponents; exports++)
      this._writeByte(this._info._componentsId[exports]), this._writeByte((this._info._dctableNumber[exports] << 4) + this._info._actableNumber[exports]);
    this._writeByte(this._info.ss), this._writeByte(this._info.se), this._writeByte((this._info.ah << 4) + this._info.al);
  }, o.prototype._writeEOI = function () {
    this._writeWord(65497);
  }, o.prototype._writeArray = function (e) {
    this._out.writeArray(e);
  }, o.prototype._writeByte = function (e) {
    this._out.writeByte(e);
  }, o.prototype._writeWord = function (e) {
    this._out.writeWord(e);
  };
  var a = new Float64Array([
      1,
      1.387039845,
      1.306562965,
      1.175875602,
      1,
      0.785694958,
      0.5411961,
      0.275899379
    ]), s = new Uint32Array([
      16,
      11,
      10,
      16,
      24,
      40,
      51,
      61,
      12,
      12,
      14,
      19,
      26,
      58,
      60,
      55,
      14,
      13,
      16,
      24,
      40,
      57,
      69,
      56,
      14,
      17,
      22,
      29,
      51,
      87,
      80,
      62,
      18,
      22,
      37,
      56,
      68,
      109,
      103,
      77,
      24,
      35,
      55,
      64,
      81,
      104,
      113,
      92,
      49,
      64,
      78,
      87,
      103,
      121,
      120,
      101,
      72,
      92,
      95,
      98,
      112,
      100,
      103,
      99
    ]), l = new Uint32Array([
      17,
      18,
      24,
      47,
      99,
      99,
      99,
      99,
      18,
      21,
      26,
      66,
      99,
      99,
      99,
      99,
      24,
      26,
      56,
      99,
      99,
      99,
      99,
      99,
      47,
      66,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99,
      99
    ]);
  function h(e) {
    this._divisorsLuminance = new Array(h.N * h.N), this._divisorsChrominance = new Array(h.N * h.N), this._divisors = p(2), this._quantum = p(2), this._initMatrix(e);
  }
  function A(e, t) {
    this._bitsDCluminance = new Uint32Array([
      0,
      0,
      1,
      5,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]), this._valDCluminance = new Uint32Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]), this._bitsDCchrominance = new Uint32Array([
      1,
      0,
      3,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0
    ]), this._valDCchrominance = new Uint32Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]), this._bitsACluminance = new Uint32Array([
      16,
      0,
      2,
      1,
      3,
      3,
      2,
      4,
      3,
      5,
      5,
      4,
      4,
      0,
      0,
      1,
      125
    ]), this._bitsACchrominance = new Uint32Array([
      17,
      0,
      2,
      1,
      2,
      4,
      4,
      3,
      4,
      7,
      5,
      4,
      4,
      0,
      1,
      2,
      119
    ]), this._valACluminance = new Uint32Array([
      1,
      2,
      3,
      0,
      4,
      17,
      5,
      18,
      33,
      49,
      65,
      6,
      19,
      81,
      97,
      7,
      34,
      113,
      20,
      50,
      129,
      145,
      161,
      8,
      35,
      66,
      177,
      193,
      21,
      82,
      209,
      240,
      36,
      51,
      98,
      114,
      130,
      9,
      10,
      22,
      23,
      24,
      25,
      26,
      37,
      38,
      39,
      40,
      41,
      42,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ]), this._valACchrominance = new Uint32Array([
      0,
      1,
      2,
      3,
      17,
      4,
      5,
      33,
      49,
      6,
      18,
      65,
      81,
      7,
      97,
      113,
      19,
      34,
      50,
      129,
      8,
      20,
      66,
      145,
      161,
      177,
      193,
      9,
      35,
      51,
      82,
      240,
      21,
      98,
      114,
      209,
      10,
      22,
      36,
      52,
      225,
      37,
      241,
      23,
      24,
      25,
      26,
      38,
      39,
      40,
      41,
      42,
      53,
      54,
      55,
      56,
      57,
      58,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ]), this._bits = [], this._bits.push(this._bitsDCluminance), this._bits.push(this._bitsACluminance), this._bits.push(this._bitsDCchrominance), this._bits.push(this._bitsACchrominance), this._val = [], this._val.push(this._valDCluminance), this._val.push(this._valACluminance), this._val.push(this._valDCchrominance), this._val.push(this._valACchrominance), this._imageWidth = e, this._imageHeight = t, this._initHuf();
  }
  function c(e, t, i, n) {
    var r = n.length;
    this._imageBuffer = e, this._imageWidth = t, this._imageHeight = i, this._colorspace = n, this._numberOfComponents = r, this._lastColumnIsDummy = p(r), this._lastRowIsDummy = p(r), this._compWidth = p(r), this._compHeight = p(r), this._blockWidth = p(r), this._blockHeight = p(r), this._maxHsampFactor = 1, this._maxVsampFactor = 1, this._init();
  }
  function p(e) {
    for (var module = new Array(e), require = 0; require < e; require++)
      module[require] = 0;
    return module;
  }
  h.N = 8, h.prototype._divisors = null, h.prototype._quantum = null, h.prototype._divisorsLuminance = null, h.prototype._divisorsChrominance = null, h.prototype._YQT = null, h.prototype._UVQT = null, h.prototype._initMatrix = function (e) {
    e <= 0 && (e = 1), e > 100 && (e = 100), e = e < 50 ? 5000 / e : 200 - 2 * e, this._YQT = new Int32Array(32), this._UVQT = new Int32Array(32);
    for (var module = 0; module < 64; module++) {
      var require = parseInt((s[module] * e + 50) / 100);
      require <= 0 && (require = 1), require > 255 && (require = 255), this._YQT[module] = require;
    }
    var n = 0;
    for (module = 0; module < 8; module++)
      for (var r = 0; r < 8; r++)
        this._divisorsLuminance[n] = 1 / (this._YQT[n] * a[module] * a[r] * 8), n++;
    for (r = 0; r < 64; r++) {
      var o = parseInt((l[r] * e + 50) / 100);
      o <= 0 && (o = 1), o >= 255 && (o = 255), this._UVQT[r] = o;
    }
    for (n = 0, module = 0; module < 8; module++)
      for (r = 0; r < 8; r++)
        this._divisorsChrominance[n] = 1 / (this._UVQT[n] * a[module] * a[r] * 8), n++;
    this._divisors[0] = this._divisorsLuminance, this._divisors[1] = this._divisorsChrominance, this._quantum[0] = this._YQT, this._quantum[1] = this._UVQT;
  }, h.prototype.forwardDCT = function (e) {
    var t, i, n, r, o, a, s, l, h, A = e.map(function (e) {
        return e - 128;
      }), c = 0;
    for (h = 0; h < 8; h++) {
      t = A[c], i = A[c + 1], n = A[c + 2], r = A[c + 3], o = A[c + 4], a = A[c + 5], s = A[c + 6];
      var p = t + (l = A[c + 7]), u = t - l, d = i + s, g = i - s, f = n + a, m = n - a, y = r + o, _ = r - o;
      v = p + y, p - y, C = d + f, w = d - f;
      var v = p + y, b = p - y, C = d + f, w = d - f;
      A[c] = v + C, A[c + 4] = v - C;
      var E = 0.707106781 * (w + b);
      A[c + 2] = b + E, A[c + 6] = b - E;
      var B = 0.382683433 * ((v = _ + m) - (w = g + u)), x = 0.5411961 * v + B, P = 1.306562965 * w + B, S = 0.707106781 * (C = m + g), T = u + S, I = u - S;
      A[c + 5] = I + x, A[c + 3] = I - x, A[c + 1] = T + P, A[c + 7] = T - P, c += 8;
    }
    for (c = 0, h = 0; h < 8; h++) {
      t = A[c], i = A[c + 8], n = A[c + 16], r = A[c + 24], o = A[c + 32], a = A[c + 40], s = A[c + 48];
      var F = t + (l = A[c + 56]), R = t - l, D = i + s, k = i - s, G = n + a, Q = n - a, M = r + o, N = r - o, U = F + M, V = F - M, O = D + G, L = D - G;
      A[c] = U + O, A[c + 32] = U - O;
      var Y = 0.707106781 * (L + V);
      A[c + 16] = V + Y, A[c + 48] = V - Y;
      var X = 0.382683433 * ((U = N + Q) - (L = k + R)), H = 0.5411961 * U + X, W = 1.306562965 * L + X, Z = 0.707106781 * (O = Q + k), z = R + Z, j = R - Z;
      A[c + 40] = j + H, A[c + 24] = j - H, A[c + 8] = z + W, A[c + 56] = z - W, c++;
    }
    return A;
  }, h.prototype.quantizeBlock = function (e, t) {
    for (var require = new Int32Array(64), n = 0; n < 64; n++)
      require[n] = Math.round(e[n] * this._divisors[t][n]);
    return require;
  }, A.jpegNaturalOrder = new Uint32Array([
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
  ]), A.prototype._bufferPutBits = null, A.prototype._bufferPutBuffer = null, A.prototype._imageHeight = null, A.prototype._imageWidth = null, A.prototype._DC_matrix0 = null, A.prototype._AC_matrix0 = null, A.prototype._DC_matrix1 = null, A.prototype._AC_matrix1 = null, A.prototype._DC_matrix = null, A.prototype._AC_matrix = null, A.prototype._code = null, A.prototype._bitsDCluminance = null, A.prototype._valDCluminance = null, A.prototype._bitsDCchrominance = null, A.prototype._valDCchrominance = null, A.prototype._bitsACluminance = null, A.prototype._valACluminance = null, A.prototype._bitsACchrominance = null, A.prototype._valACchrominance = null, A.prototype._bits = null, A.prototype._val = null, A.prototype._initHuf = function () {
    var e, t, i, n, r, o;
    this._DC_matrix0 = [], this._DC_matrix1 = [], this._AC_matrix0 = [], this._AC_matrix1 = [], this._DC_matrix = [], this._AC_matrix = [];
    var a = p(257), s = p(257);
    for (e = 0, t = 1; t <= 16; t++)
      for (i = 1; i <= this._bitsDCchrominance[t]; i++)
        a[e++] = t;
    for (a[e] = 0, n = e, o = 0, r = a[0], e = 0; 0 != a[e];) {
      for (; a[e] == r;)
        s[e++] = o, o++;
      o <<= 1, r++;
    }
    for (e = 0; e < n; e++)
      this._DC_matrix1[this._valDCchrominance[e]] || (this._DC_matrix1[this._valDCchrominance[e]] = []), this._DC_matrix1[this._valDCchrominance[e]][0] = s[e], this._DC_matrix1[this._valDCchrominance[e]][1] = a[e];
    for (e = 0, t = 1; t <= 16; t++)
      for (i = 1; i <= this._bitsACchrominance[t]; i++)
        a[e++] = t;
    for (a[e] = 0, n = e, o = 0, r = a[0], e = 0; 0 != a[e];) {
      for (; a[e] == r;)
        s[e++] = o, o++;
      o <<= 1, r++;
    }
    for (e = 0; e < n; e++)
      this._AC_matrix1[this._valACchrominance[e]] || (this._AC_matrix1[this._valACchrominance[e]] = []), this._AC_matrix1[this._valACchrominance[e]][0] = s[e], this._AC_matrix1[this._valACchrominance[e]][1] = a[e];
    for (e = 0, t = 1; t <= 16; t++)
      for (i = 1; i <= this._bitsDCluminance[t]; i++)
        a[e++] = t;
    for (a[e] = 0, n = e, o = 0, r = a[0], e = 0; 0 != a[e];) {
      for (; a[e] == r;)
        s[e++] = o, o++;
      o <<= 1, r++;
    }
    for (e = 0; e < n; e++)
      this._DC_matrix0[this._valDCluminance[e]] || (this._DC_matrix0[this._valDCluminance[e]] = []), this._DC_matrix0[this._valDCluminance[e]][0] = s[e], this._DC_matrix0[this._valDCluminance[e]][1] = a[e];
    for (e = 0, t = 1; t <= 16; t++)
      for (i = 1; i <= this._bitsACluminance[t]; i++)
        a[e++] = t;
    for (a[e] = 0, n = e, o = 0, r = a[0], e = 0; 0 != a[e];) {
      for (; a[e] == r;)
        s[e++] = o, o++;
      o <<= 1, r++;
    }
    for (var l = 0; l < n; l++)
      this._AC_matrix0[this._valACluminance[l]] || (this._AC_matrix0[this._valACluminance[l]] = []), this._AC_matrix0[this._valACluminance[l]][0] = s[l], this._AC_matrix0[this._valACluminance[l]][1] = a[l];
    this._DC_matrix[0] = this._DC_matrix0, this._DC_matrix[1] = this._DC_matrix1, this._AC_matrix[0] = this._AC_matrix0, this._AC_matrix[1] = this._AC_matrix1;
  }, A.prototype.blockEncoder = function (e, t, i, n, r) {
    var o, a, s, l, h, c;
    for ((o = a = t[0] - i) < 0 && (o = -o, a--), s = 0; 0 != o;)
      s++, o >>= 1;
    for (this._bufferIt(e, this._DC_matrix[n][s][0], this._DC_matrix[n][s][1]), 0 != s && this._bufferIt(e, a, s), h = 0, l = 1; l < 64; l++)
      if (0 == (o = t[A.jpegNaturalOrder[l]]))
        h++;
      else {
        for (; h > 15;)
          this._bufferIt(e, this._AC_matrix[r][240][0], this._AC_matrix[r][240][1]), h -= 16;
        for (a = o, o < 0 && (o = -o, a--), s = 1; 0 != (o >>= 1);)
          s++;
        c = (h << 4) + s, this._bufferIt(e, this._AC_matrix[r][c][0], this._AC_matrix[r][c][1]), this._bufferIt(e, a, s), h = 0;
      }
    h > 0 && this._bufferIt(e, this._AC_matrix[r][0][0], this._AC_matrix[r][0][1]);
  }, A.prototype._bufferIt = function (e, t, i) {
    var n = t, r = this._bufferPutBits;
    for (n &= (1 << i) - 1, n <<= 24 - (r += i), n |= this._bufferPutBuffer; r >= 8;) {
      var o = n >> 16 & 255;
      e.writeByte(o), 255 == o && e.writeByte(0), n <<= 8, r -= 8;
    }
    this._bufferPutBuffer = n, this._bufferPutBits = r;
  }, A.prototype.flushBuffer = function (e) {
    for (var module = this._bufferPutBuffer, require = this._bufferPutBits; require >= 8;) {
      var n = module >> 16 & 255;
      e.writeByte(n), 255 == n && e.writeByte(0), module <<= 8, require -= 8;
    }
    if (require > 0) {
      n = module >> 16 & 255;
      e.writeByte(n);
    }
  }, c.prototype.ss = 0, c.prototype.se = 63, c.prototype.ah = 0, c.prototype.al = 0, c.prototype.precision = 8, c.prototype._imageBuffer = null, c.prototype._imageHeight = null, c.prototype._imageWidth = null, c.prototype._colorspace = null, c.prototype._blockWidth = null, c.prototype._blockHeight = null, c.prototype._numberOfComponents = null, c.prototype._componentsId = null, c.prototype._hsampFactor = null, c.prototype._vsampFactor = null, c.prototype._qtableNumber = null, c.prototype._dctableNumber = null, c.prototype._actableNumber = null, c.prototype._lastColumnIsDummy = null, c.prototype._lastRowIsDummy = null, c.prototype._compWidth = null, c.prototype._compHeight = null, c.prototype._maxHsampFactor = null, c.prototype._maxVsampFactor = null, c.prototype._init = function () {
    var e;
    for (this._colorspace.init(this), e = 0; e < this._numberOfComponents; e++)
      this._maxHsampFactor = Math.max(this._maxHsampFactor, this._hsampFactor[e]), this._maxVsampFactor = Math.max(this._maxVsampFactor, this._vsampFactor[e]);
    for (e = 0; e < this._numberOfComponents; e++)
      this._compWidth[e] = (this._imageWidth % 8 != 0 ? 8 * Math.ceil(this._imageWidth / 8) : this._imageWidth) / this._maxHsampFactor * this._hsampFactor[e], this._compWidth[e] != this._imageWidth / this._maxHsampFactor * this._hsampFactor[e] && (this._lastColumnIsDummy[e] = true), this._blockWidth[e] = Math.ceil(this._compWidth[e] / 8), this._compHeight[e] = (this._imageHeight % 8 != 0 ? 8 * Math.ceil(this._imageHeight / 8) : this._imageHeight) / this._maxVsampFactor * this._vsampFactor[e], this._compHeight[e] != this._imageHeight / this._maxVsampFactor * this._vsampFactor[e] && (this._lastRowIsDummy[e] = true), this._blockHeight[e] = Math.ceil(this._compHeight[e] / 8);
  }, c.prototype.getPixel = function (e, t) {
    var i = e + this._imageWidth * t;
    return this._imageBuffer[i];
  }, exports.exports = o;
}
