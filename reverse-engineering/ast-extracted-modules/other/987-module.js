/**
 * Module 987
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
  var n, r = i(725);
  function o(e) {
    this.font = e, this.getCommands = function (e) {
      return r.getPath(e).commands;
    }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
  }
  function a(e) {
    return e;
  }
  function s(e) {
    return Math.sign(e) * Math.round(Math.abs(e));
  }
  function l(e) {
    return Math.sign(e) * Math.round(Math.abs(2 * e)) / 2;
  }
  function h(e) {
    return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
  }
  function A(e) {
    return Math.sign(e) * Math.ceil(Math.abs(e));
  }
  function c(e) {
    return Math.sign(e) * Math.floor(Math.abs(e));
  }
  var p = function (e) {
      var t = this.srPeriod, i = this.srPhase, n = 1;
      return e < 0 && (e = -e, n = -1), e += this.srThreshold - i, e = Math.trunc(e / t) * t, (e += i) < 0 ? i * n : e * n;
    }, u = {
      x: 1,
      y: 0,
      axis: "x",
      distance: function (e, t, i, n) {
        return (i ? e.xo : e.x) - (n ? t.xo : t.x);
      },
      interpolate: function (e, t, i, n) {
        var r, o, a, s, l, h, A;
        if (!n || n === this)
          return r = e.xo - t.xo, o = e.xo - i.xo, l = t.x - t.xo, h = i.x - i.xo, 0 === (A = (a = Math.abs(r)) + (s = Math.abs(o))) ? void (e.x = e.xo + (l + h) / 2) : void (e.x = e.xo + (l * s + h * a) / A);
        r = n.distance(e, t, !0, !0), o = n.distance(e, i, !0, !0), l = n.distance(t, t, !1, !0), h = n.distance(i, i, !1, !0), 0 !== (A = (a = Math.abs(r)) + (s = Math.abs(o))) ? u.setRelative(e, e, (l * s + h * a) / A, n, !0) : u.setRelative(e, e, (l + h) / 2, n, !0);
      },
      normalSlope: Number.NEGATIVE_INFINITY,
      setRelative: function (e, t, i, n, r) {
        if (n && n !== this) {
          if (0 === n.normalSlope)
            throw new Error("Wrong slope in axis x");
          var o = r ? t.xo : t.x, a = r ? t.yo : t.y, s = o + i * n.x, l = a + i * n.y;
          e.x = s + (e.y - l) / n.normalSlope;
        } else
          e.x = (r ? t.xo : t.x) + i;
      },
      slope: 0,
      touch: function (e) {
        e.xTouched = !0;
      },
      touched: function (e) {
        return e.xTouched;
      },
      untouch: function (e) {
        e.xTouched = !1;
      }
    }, d = {
      x: 0,
      y: 1,
      axis: "y",
      distance: function (e, t, i, n) {
        return (i ? e.yo : e.y) - (n ? t.yo : t.y);
      },
      interpolate: function (e, t, i, n) {
        var r, o, a, s, l, h, A;
        if (!n || n === this)
          return r = e.yo - t.yo, o = e.yo - i.yo, l = t.y - t.yo, h = i.y - i.yo, 0 === (A = (a = Math.abs(r)) + (s = Math.abs(o))) ? void (e.y = e.yo + (l + h) / 2) : void (e.y = e.yo + (l * s + h * a) / A);
        r = n.distance(e, t, !0, !0), o = n.distance(e, i, !0, !0), l = n.distance(t, t, !1, !0), h = n.distance(i, i, !1, !0), 0 !== (A = (a = Math.abs(r)) + (s = Math.abs(o))) ? d.setRelative(e, e, (l * s + h * a) / A, n, !0) : d.setRelative(e, e, (l + h) / 2, n, !0);
      },
      normalSlope: 0,
      setRelative: function (e, t, i, n, r) {
        if (n && n !== this) {
          if (!isFinite(n.normalSlope))
            throw new Error("Wrong slope in axis y");
          var o = r ? t.xo : t.x, a = r ? t.yo : t.y, s = o + i * n.x, l = a + i * n.y;
          e.y = l + n.normalSlope * (e.x - s);
        } else
          e.y = (r ? t.yo : t.y) + i;
      },
      slope: Number.POSITIVE_INFINITY,
      touch: function (e) {
        e.yTouched = !0;
      },
      touched: function (e) {
        return e.yTouched;
      },
      untouch: function (e) {
        e.yTouched = !1;
      }
    };
  function g(e, t) {
    this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this);
  }
  function f(e, t) {
    var i = Math.sqrt(e * e + t * t);
    return t /= i, 1 === (e /= i) && 0 === t ? u : 0 === e && 1 === t ? d : new g(e, t);
  }
  function m(e, t, i, n) {
    this.x = this.xo = Math.round(64 * e) / 64, this.y = this.yo = Math.round(64 * t) / 64, this.lastPointOfContour = i, this.onCurve = n, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
  }
  Object.freeze(u), Object.freeze(d), g.prototype.distance = function (e, t, i, n) {
    return this.x * u.distance(e, t, i, n) + this.y * d.distance(e, t, i, n);
  }, g.prototype.interpolate = function (e, t, i, n) {
    var r, o, a, s, l, h, A;
    a = n.distance(e, t, !0, !0), s = n.distance(e, i, !0, !0), r = n.distance(t, t, !1, !0), o = n.distance(i, i, !1, !0), 0 !== (A = (l = Math.abs(a)) + (h = Math.abs(s))) ? this.setRelative(e, e, (r * h + o * l) / A, n, !0) : this.setRelative(e, e, (r + o) / 2, n, !0);
  }, g.prototype.setRelative = function (e, t, i, n, r) {
    n = n || this;
    var o = r ? t.xo : t.x, a = r ? t.yo : t.y, s = o + i * n.x, l = a + i * n.y, h = n.normalSlope, A = this.slope, c = A - h, p = e.x, u = e.y;
    if (!isFinite(A) || !isFinite(h) || 0 === c)
      throw new Error("Wrong slope in unit vector");
    e.x = (A * p - h * s + l - u) / c, e.y = A * (e.x - p) + u;
  }, g.prototype.touch = function (e) {
    e.xTouched = !0, e.yTouched = !0;
  }, m.prototype.nextTouched = function (e) {
    for (var t = this.nextPointOnContour; !e.touched(t) && t !== this;)
      t = t.nextPointOnContour;
    return t;
  }, m.prototype.prevTouched = function (e) {
    for (var t = this.prevPointOnContour; !e.touched(t) && t !== this;)
      t = t.prevPointOnContour;
    return t;
  };
  var y = Object.freeze(new m(0, 0)), _ = {
      cvCutIn: 17 / 16,
      deltaBase: 9,
      deltaShift: 0.125,
      loop: 1,
      minDis: 1,
      autoFlip: !0
    };
  function v(e, t) {
    switch (this.env = e, this.stack = [], this.prog = t, e) {
    case "glyf":
      this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
    case "prep":
      this.fv = this.pv = this.dpv = u, this.round = s;
    }
  }
  function b(e, i, n, r) {
    var o, a, s, l = e.points || [], h = l.length, A = i.gZone = i.z0 = i.z1 = i.z2 = [], c = i.contours = [];
    for (p = 0; p < h; p++)
      o = l[p], A[p] = new m(o.x * n, o.y * r, o.lastPointOfContour, o.onCurve);
    for (p = 0; p < h; p++)
      o = A[p], a || (a = o, c.push(p)), o.lastPointOfContour ? (o.nextPointOnContour = a, a.prevPointOnContour = o, a = void 0) : (s = A[p + 1], o.nextPointOnContour = s, s.prevPointOnContour = o);
    if (!i.inhibitGridFit) {
      if (t.DEBUG) {
        console.log("PROCESSING GLYPH", i.stack);
        for (var p = 0; p < h; p++)
          console.log(p, A[p].x, A[p].y);
      }
      if (A.push(new m(0, 0), new m(Math.round(e.advanceWidth * n), 0)), C(i), A.length -= 2, t.DEBUG)
        for (console.log("FINISHED GLYPH", i.stack), p = 0; p < h; p++)
          console.log(p, A[p].x, A[p].y);
    }
  }
  function C(e) {
    var i = e.prog;
    if (i) {
      var r, o = i.length;
      for (e.ip = 0; e.ip < o; e.ip++) {
        if (t.DEBUG && (e.step++, e.gZone))
          for (var a = 0; a < e.gZone.length; a++) {
            var s = e.gZone[a];
            !(isNaN(s.x) || isNaN(s.y) || isNaN(s.xo) || isNaN(s.yo)) && isFinite(s.x) && isFinite(s.y) && isFinite(s.yo) && isFinite(s.xo) || console.warn("error detected");
          }
        if (!(r = n[i[e.ip]]))
          throw new Error("unknown instruction: 0x" + Number(i[e.ip]).toString(16));
        r(e);
      }
    }
  }
  function w(e) {
    for (var t = e.tZone = new Array(e.gZone ? e.gZone.length : 0), i = 0; i < t.length; i++)
      t[i] = new m(0, 0);
  }
  function E(e, t) {
    var i, n = e.prog, r = e.ip, o = 1;
    do {
      if ("number" != typeof (i = n[++r]))
        break;
      if (88 === i)
        o++;
      else if (89 === i)
        o--;
      else if (64 === i)
        r += n[r + 1] + 1;
      else if (65 === i)
        r += 2 * n[r + 1] + 1;
      else if (i >= 176 && i <= 183)
        r += i - 176 + 1;
      else if (i >= 184 && i <= 191)
        r += 2 * (i - 184 + 1);
      else if (t && 1 === o && 27 === i)
        break;
    } while (o > 0);
    e.ip = r;
  }
  function B(e, i) {
    t.DEBUG && console.log(i.step, "SVTCA[" + e.axis + "]"), i.fv = i.pv = i.dpv = e;
  }
  function x(e, i) {
    t.DEBUG && console.log(i.step, "SPVTCA[" + e.axis + "]"), i.pv = i.dpv = e;
  }
  function P(e, i) {
    t.DEBUG && console.log(i.step, "SFVTCA[" + e.axis + "]"), i.fv = e;
  }
  function S(e, i) {
    var n, r, o = i.stack, a = o.pop(), s = o.pop(), l = i.z2[a], h = i.z1[s];
    t.DEBUG && console.log("SPVTL[" + e + "]", a, s), e ? (n = l.y - h.y, r = h.x - l.x) : (n = h.x - l.x, r = h.y - l.y), i.pv = i.dpv = f(n, r);
  }
  function T(e, i) {
    var n, r, o = i.stack, a = o.pop(), s = o.pop(), l = i.z2[a], h = i.z1[s];
    t.DEBUG && console.log("SFVTL[" + e + "]", a, s), e ? (n = l.y - h.y, r = h.x - l.x) : (n = h.x - l.x, r = h.y - l.y), i.fv = f(n, r);
  }
  function I(e) {
    t.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
  }
  function F(e, i) {
    var n = i.stack.pop(), r = i.z0[n], o = i.fv, a = i.microsoftWorkaround ? i.dpv : i.pv;
    t.DEBUG && console.log(i.step, "MDAP[" + e + "]", n);
    var s = a.distance(r, y);
    e && (s = i.round(s));
    try {
      o.setRelative(r, y, s, a);
    } catch (t) {
      if (i.microsoftWorkaround)
        throw t;
      i.microsoftWorkaround = !0, s = (a = i.dpv).distance(r, y), e && (s = i.round(s)), o.setRelative(r, y, s, i.dpv);
    }
    o.touch(r), i.rp0 = i.rp1 = n;
  }
  function R(e, i) {
    var n, r, o, a = i.z2, s = a.length - 2;
    t.DEBUG && console.log(i.step, "IUP[" + e.axis + "]");
    for (var l = 0; l < s; l++)
      n = a[l], e.touched(n) || (r = n.prevTouched(e)) !== n && (r === (o = n.nextTouched(e)) && e.setRelative(n, n, e.distance(r, r, !1, !0), e, !0), e.interpolate(n, r, o, e));
  }
  function D(e, i) {
    for (var n = i.stack, r = e ? i.rp1 : i.rp2, o = (e ? i.z0 : i.z1)[r], a = i.fv, s = i.pv, l = i.loop, h = i.z2; l--;) {
      var A = n.pop(), c = h[A], p = s.distance(o, o, !1, !0);
      a.setRelative(c, c, p, s), a.touch(c), t.DEBUG && console.log(i.step, (i.loop > 1 ? "loop " + (i.loop - l) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", A);
    }
    i.loop = 1;
  }
  function k(e, i) {
    var n = i.stack, r = e ? i.rp1 : i.rp2, o = (e ? i.z0 : i.z1)[r], a = i.fv, s = i.pv, l = n.pop(), h = i.z2[i.contours[l]], A = h;
    t.DEBUG && console.log(i.step, "SHC[" + e + "]", l);
    var c = s.distance(o, o, !1, !0);
    do {
      A !== o && a.setRelative(A, A, c, s), A = A.nextPointOnContour;
    } while (A !== h);
  }
  function G(e, i) {
    var n, r, o = i.stack, a = e ? i.rp1 : i.rp2, s = (e ? i.z0 : i.z1)[a], l = i.fv, h = i.pv, A = o.pop();
    switch (t.DEBUG && console.log(i.step, "SHZ[" + e + "]", A), A) {
    case 0:
      n = i.tZone;
      break;
    case 1:
      n = i.gZone;
      break;
    default:
      throw new Error("Invalid zone");
    }
    for (var c = h.distance(s, s, !1, !0), p = n.length - 2, u = 0; u < p; u++)
      r = n[u], l.setRelative(r, r, c, h);
  }
  function Q(e, i) {
    var n = i.stack, r = n.pop() / 64, o = n.pop(), a = i.z1[o], s = i.z0[i.rp0], l = i.fv, h = i.pv;
    l.setRelative(a, s, r, h), l.touch(a), t.DEBUG && console.log(i.step, "MSIRP[" + e + "]", r, o), i.rp1 = i.rp0, i.rp2 = o, e && (i.rp0 = o);
  }
  function M(e, i) {
    var n = i.stack, r = n.pop(), o = n.pop(), a = i.z0[o], s = i.fv, l = i.pv, h = i.cvt[r];
    t.DEBUG && console.log(i.step, "MIAP[" + e + "]", r, "(", h, ")", o);
    var A = l.distance(a, y);
    e && (Math.abs(A - h) < i.cvCutIn && (A = h), A = i.round(A)), s.setRelative(a, y, A || h, l), 0 === i.zp0 && (a.xo = a.x, a.yo = a.y), s.touch(a), i.rp0 = i.rp1 = o;
  }
  function N(e, i) {
    var n = i.stack, r = n.pop(), o = i.z2[r];
    t.DEBUG && console.log(i.step, "GC[" + e + "]", r), n.push(64 * i.dpv.distance(o, y, e, !1));
  }
  function U(e, i) {
    var n = i.stack, r = n.pop(), o = n.pop(), a = i.z1[r], s = i.z0[o], l = i.dpv.distance(s, a, e, e);
    t.DEBUG && console.log(i.step, "MD[" + e + "]", r, o, "->", l), i.stack.push(Math.round(64 * l));
  }
  function V(e, i) {
    var n = i.stack, r = n.pop(), o = i.fv, a = i.pv, s = i.ppem, l = i.deltaBase + 16 * (e - 1), h = i.deltaShift, A = i.z0;
    t.DEBUG && console.log(i.step, "DELTAP[" + e + "]", r, n);
    for (var c = 0; c < r; c++) {
      var p = n.pop(), u = n.pop();
      if (l + ((240 & u) >> 4) === s) {
        var d = (15 & u) - 8;
        d >= 0 && d++, t.DEBUG && console.log(i.step, "DELTAPFIX", p, "by", d * h);
        var g = A[p];
        o.setRelative(g, g, d * h, a);
      }
    }
  }
  function O(e, i) {
    var n = i.stack, r = n.pop();
    t.DEBUG && console.log(i.step, "ROUND[]"), n.push(64 * i.round(r / 64));
  }
  function L(e, i) {
    var n = i.stack, r = n.pop(), o = i.ppem, a = i.deltaBase + 16 * (e - 1), s = i.deltaShift;
    t.DEBUG && console.log(i.step, "DELTAC[" + e + "]", r, n);
    for (var l = 0; l < r; l++) {
      var h = n.pop(), A = n.pop();
      if (a + ((240 & A) >> 4) === o) {
        var c = (15 & A) - 8;
        c >= 0 && c++;
        var p = c * s;
        t.DEBUG && console.log(i.step, "DELTACFIX", h, "by", p), i.cvt[h] += p;
      }
    }
  }
  function Y(e, i) {
    var n, r, o = i.stack, a = o.pop(), s = o.pop(), l = i.z2[a], h = i.z1[s];
    t.DEBUG && console.log(i.step, "SDPVTL[" + e + "]", a, s), e ? (n = l.y - h.y, r = h.x - l.x) : (n = h.x - l.x, r = h.y - l.y), i.dpv = f(n, r);
  }
  function X(e, i) {
    var n = i.stack, r = i.prog, o = i.ip;
    t.DEBUG && console.log(i.step, "PUSHB[" + e + "]");
    for (var a = 0; a < e; a++)
      n.push(r[++o]);
    i.ip = o;
  }
  function H(e, i) {
    var n = i.ip, r = i.prog, o = i.stack;
    t.DEBUG && console.log(i.ip, "PUSHW[" + e + "]");
    for (var a = 0; a < e; a++) {
      var s = r[++n] << 8 | r[++n];
      32768 & s && (s = -(1 + (65535 ^ s))), o.push(s);
    }
    i.ip = n;
  }
  function W(e, i, n, r, o, a) {
    var s, l, h, A, c = a.stack, p = e && c.pop(), u = c.pop(), d = a.rp0, g = a.z0[d], f = a.z1[u], m = a.minDis, y = a.fv, _ = a.dpv;
    h = (l = s = _.distance(f, g, !0, !0)) >= 0 ? 1 : -1, l = Math.abs(l), e && (A = a.cvt[p], r && Math.abs(l - A) < a.cvCutIn && (l = A)), n && l < m && (l = m), r && (l = a.round(l)), y.setRelative(f, g, h * l, _), y.touch(f), t.DEBUG && console.log(a.step, (e ? "MIRP[" : "MDRP[") + (i ? "M" : "m") + (n ? ">" : "_") + (r ? "R" : "_") + (0 === o ? "Gr" : 1 === o ? "Bl" : 2 === o ? "Wh" : "") + "]", e ? p + "(" + a.cvt[p] + "," + A + ")" : "", u, "(d =", s, "->", h * l, ")"), a.rp1 = a.rp0, a.rp2 = u, i && (a.rp0 = u);
  }
  o.prototype.exec = function (e, i) {
    if ("number" != typeof i)
      throw new Error("Point size is not a number!");
    if (!(this._errorState > 2)) {
      var n = this.font, r = this._prepState;
      if (!r || r.ppem !== i) {
        var o = this._fpgmState;
        if (!o) {
          v.prototype = _, (o = this._fpgmState = new v("fpgm", n.tables.fpgm)).funcs = [], o.font = n, t.DEBUG && (console.log("---EXEC FPGM---"), o.step = -1);
          try {
            C(o);
          } catch (e) {
            return console.log("Hinting error in FPGM:" + e), void (this._errorState = 3);
          }
        }
        v.prototype = o, (r = this._prepState = new v("prep", n.tables.prep)).ppem = i;
        var a = n.tables.cvt;
        if (a)
          for (var s = r.cvt = new Array(a.length), l = i / n.unitsPerEm, h = 0; h < a.length; h++)
            s[h] = a[h] * l;
        else
          r.cvt = [];
        t.DEBUG && (console.log("---EXEC PREP---"), r.step = -1);
        try {
          C(r);
        } catch (e) {
          this._errorState < 2 && console.log("Hinting error in PREP:" + e), this._errorState = 2;
        }
      }
      if (!(this._errorState > 1))
        try {
          return function (e, i) {
            var n, r, o, a = i.ppem / i.font.unitsPerEm, s = a, l = e.components;
            if (v.prototype = i, l) {
              var h = i.font;
              r = [], n = [];
              for (var A = 0; A < l.length; A++) {
                var c = l[A], p = h.glyphs.get(c.glyphIndex);
                o = new v("glyf", p.instructions), t.DEBUG && (console.log("---EXEC COMP " + A + "---"), o.step = -1), b(p, o, a, s);
                for (var u = Math.round(c.dx * a), d = Math.round(c.dy * s), g = o.gZone, f = o.contours, y = 0; y < g.length; y++) {
                  var _ = g[y];
                  _.xTouched = _.yTouched = !1, _.xo = _.x = _.x + u, _.yo = _.y = _.y + d;
                }
                var w = r.length;
                r.push.apply(r, g);
                for (var E = 0; E < f.length; E++)
                  n.push(f[E] + w);
              }
              e.instructions && !o.inhibitGridFit && ((o = new v("glyf", e.instructions)).gZone = o.z0 = o.z1 = o.z2 = r, o.contours = n, r.push(new m(0, 0), new m(Math.round(e.advanceWidth * a), 0)), t.DEBUG && (console.log("---EXEC COMPOSITE---"), o.step = -1), C(o), r.length -= 2);
            } else
              o = new v("glyf", e.instructions), t.DEBUG && (console.log("---EXEC GLYPH---"), o.step = -1), b(e, o, a, s), r = o.gZone;
            return r;
          }(e, r);
        } catch (e) {
          return this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), void (this._errorState = 1);
        }
    }
  }, n = [
    B.bind(void 0, d),
    B.bind(void 0, u),
    x.bind(void 0, d),
    x.bind(void 0, u),
    P.bind(void 0, d),
    P.bind(void 0, u),
    S.bind(void 0, 0),
    S.bind(void 0, 1),
    T.bind(void 0, 0),
    T.bind(void 0, 1),
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "SPVFS[]", n, r), e.pv = e.dpv = f(r, n);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "SPVFS[]", n, r), e.fv = f(r, n);
    },
    function (e) {
      var i = e.stack, n = e.pv;
      t.DEBUG && console.log(e.step, "GPV[]"), i.push(16384 * n.x), i.push(16384 * n.y);
    },
    function (e) {
      var i = e.stack, n = e.fv;
      t.DEBUG && console.log(e.step, "GFV[]"), i.push(16384 * n.x), i.push(16384 * n.y);
    },
    function (e) {
      e.fv = e.pv, t.DEBUG && console.log(e.step, "SFVTPV[]");
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop(), o = i.pop(), a = i.pop(), s = i.pop(), l = e.z0, h = e.z1, A = l[n], c = l[r], p = h[o], u = h[a], d = e.z2[s];
      t.DEBUG && console.log("ISECT[], ", n, r, o, a, s);
      var g = A.x, f = A.y, m = c.x, y = c.y, _ = p.x, v = p.y, b = u.x, C = u.y, w = (g - m) * (v - C) - (f - y) * (_ - b), E = g * y - f * m, B = _ * C - v * b;
      d.x = (E * (_ - b) - B * (g - m)) / w, d.y = (E * (v - C) - B * (f - y)) / w;
    },
    function (e) {
      e.rp0 = e.stack.pop(), t.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
    },
    function (e) {
      e.rp1 = e.stack.pop(), t.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
    },
    function (e) {
      e.rp2 = e.stack.pop(), t.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
    },
    function (e) {
      var i = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "SZP0[]", i), e.zp0 = i, i) {
      case 0:
        e.tZone || w(e), e.z0 = e.tZone;
        break;
      case 1:
        e.z0 = e.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
      }
    },
    function (e) {
      var i = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "SZP1[]", i), e.zp1 = i, i) {
      case 0:
        e.tZone || w(e), e.z1 = e.tZone;
        break;
      case 1:
        e.z1 = e.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
      }
    },
    function (e) {
      var i = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "SZP2[]", i), e.zp2 = i, i) {
      case 0:
        e.tZone || w(e), e.z2 = e.tZone;
        break;
      case 1:
        e.z2 = e.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
      }
    },
    function (e) {
      var i = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "SZPS[]", i), e.zp0 = e.zp1 = e.zp2 = i, i) {
      case 0:
        e.tZone || w(e), e.z0 = e.z1 = e.z2 = e.tZone;
        break;
      case 1:
        e.z0 = e.z1 = e.z2 = e.gZone;
        break;
      default:
        throw new Error("Invalid zone pointer");
      }
    },
    function (e) {
      e.loop = e.stack.pop(), t.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
    },
    function (e) {
      t.DEBUG && console.log(e.step, "RTG[]"), e.round = s;
    },
    function (e) {
      t.DEBUG && console.log(e.step, "RTHG[]"), e.round = h;
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SMD[]", i), e.minDis = i / 64;
    },
    function (e) {
      t.DEBUG && console.log(e.step, "ELSE[]"), E(e, !1);
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "JMPR[]", i), e.ip += i - 1;
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SCVTCI[]", i), e.cvCutIn = i / 64;
    },
    void 0,
    void 0,
    function (e) {
      var i = e.stack;
      t.DEBUG && console.log(e.step, "DUP[]"), i.push(i[i.length - 1]);
    },
    I,
    function (e) {
      t.DEBUG && console.log(e.step, "CLEAR[]"), e.stack.length = 0;
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "SWAP[]"), i.push(n), i.push(r);
    },
    function (e) {
      var i = e.stack;
      t.DEBUG && console.log(e.step, "DEPTH[]"), i.push(i.length);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "CINDEX[]", n), i.push(i[i.length - n]);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "MINDEX[]", n), i.push(i.splice(i.length - n, 1)[0]);
    },
    void 0,
    void 0,
    void 0,
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "LOOPCALL[]", n, r);
      var o = e.ip, a = e.prog;
      e.prog = e.funcs[n];
      for (var s = 0; s < r; s++)
        C(e), t.DEBUG && console.log(++e.step, s + 1 < r ? "next loopcall" : "done loopcall", s);
      e.ip = o, e.prog = a;
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "CALL[]", i);
      var n = e.ip, r = e.prog;
      e.prog = e.funcs[i], C(e), e.ip = n, e.prog = r, t.DEBUG && console.log(++e.step, "returning from", i);
    },
    function (e) {
      if ("fpgm" !== e.env)
        throw new Error("FDEF not allowed here");
      var i = e.stack, n = e.prog, r = e.ip, o = i.pop(), a = r;
      for (t.DEBUG && console.log(e.step, "FDEF[]", o); 45 !== n[++r];);
      e.ip = r, e.funcs[o] = n.slice(a + 1, r);
    },
    void 0,
    F.bind(void 0, 0),
    F.bind(void 0, 1),
    R.bind(void 0, d),
    R.bind(void 0, u),
    D.bind(void 0, 0),
    D.bind(void 0, 1),
    k.bind(void 0, 0),
    k.bind(void 0, 1),
    G.bind(void 0, 0),
    G.bind(void 0, 1),
    function (e) {
      for (var i = e.stack, n = e.loop, r = e.fv, o = i.pop() / 64, a = e.z2; n--;) {
        var s = i.pop(), l = a[s];
        t.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - n) + ": " : "") + "SHPIX[]", s, o), r.setRelative(l, l, o), r.touch(l);
      }
      e.loop = 1;
    },
    function (e) {
      for (var i = e.stack, n = e.rp1, r = e.rp2, o = e.loop, a = e.z0[n], s = e.z1[r], l = e.fv, h = e.dpv, A = e.z2; o--;) {
        var c = i.pop(), p = A[c];
        t.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - o) + ": " : "") + "IP[]", c, n, "<->", r), l.interpolate(p, a, s, h), l.touch(p);
      }
      e.loop = 1;
    },
    Q.bind(void 0, 0),
    Q.bind(void 0, 1),
    function (e) {
      for (var i = e.stack, n = e.rp0, r = e.z0[n], o = e.loop, a = e.fv, s = e.microsoftWorkaround ? e.dpv : e.pv, l = e.z1; o--;) {
        var h = i.pop(), A = l[h];
        t.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - o) + ": " : "") + "ALIGNRP[]", h);
        try {
          a.setRelative(A, r, 0, s);
        } catch (t) {
          if (e.microsoftWorkaround)
            throw t;
          e.microsoftWorkaround = !0, s = e.dpv, a.setRelative(A, r, 0, s);
        }
        a.touch(A);
      }
      e.loop = 1;
    },
    function (e) {
      t.DEBUG && console.log(e.step, "RTDG[]"), e.round = l;
    },
    M.bind(void 0, 0),
    M.bind(void 0, 1),
    function (e) {
      var i = e.prog, n = e.ip, r = e.stack, o = i[++n];
      t.DEBUG && console.log(e.step, "NPUSHB[]", o);
      for (var a = 0; a < o; a++)
        r.push(i[++n]);
      e.ip = n;
    },
    function (e) {
      var i = e.ip, n = e.prog, r = e.stack, o = n[++i];
      t.DEBUG && console.log(e.step, "NPUSHW[]", o);
      for (var a = 0; a < o; a++) {
        var s = n[++i] << 8 | n[++i];
        32768 & s && (s = -(1 + (65535 ^ s))), r.push(s);
      }
      e.ip = i;
    },
    function (e) {
      var i = e.stack, n = e.store;
      n || (n = e.store = []);
      var r = i.pop(), o = i.pop();
      t.DEBUG && console.log(e.step, "WS", r, o), n[o] = r;
    },
    function (e) {
      var i = e.stack, n = e.store, r = i.pop();
      t.DEBUG && console.log(e.step, "RS", r);
      var o = n && n[r] || 0;
      i.push(o);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "WCVTP", n, r), e.cvt[r] = n / 64;
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "RCVT", n), i.push(64 * e.cvt[n]);
    },
    N.bind(void 0, 0),
    N.bind(void 0, 1),
    void 0,
    U.bind(void 0, 0),
    U.bind(void 0, 1),
    function (e) {
      t.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
    },
    void 0,
    function (e) {
      t.DEBUG && console.log(e.step, "FLIPON[]"), e.autoFlip = !0;
    },
    void 0,
    void 0,
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "LT[]", n, r), i.push(r < n ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "LTEQ[]", n, r), i.push(r <= n ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "GT[]", n, r), i.push(r > n ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "GTEQ[]", n, r), i.push(r >= n ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "EQ[]", n, r), i.push(n === r ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "NEQ[]", n, r), i.push(n !== r ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "ODD[]", n), i.push(Math.trunc(n) % 2 ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "EVEN[]", n), i.push(Math.trunc(n) % 2 ? 0 : 1);
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "IF[]", i), i || (E(e, !0), t.DEBUG && console.log(e.step, "EIF[]"));
    },
    function (e) {
      t.DEBUG && console.log(e.step, "EIF[]");
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "AND[]", n, r), i.push(n && r ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "OR[]", n, r), i.push(n || r ? 1 : 0);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "NOT[]", n), i.push(n ? 0 : 1);
    },
    V.bind(void 0, 1),
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SDB[]", i), e.deltaBase = i;
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SDS[]", i), e.deltaShift = Math.pow(0.5, i);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "ADD[]", n, r), i.push(r + n);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "SUB[]", n, r), i.push(r - n);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "DIV[]", n, r), i.push(64 * r / n);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "MUL[]", n, r), i.push(r * n / 64);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "ABS[]", n), i.push(Math.abs(n));
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "NEG[]", n), i.push(-n);
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "FLOOR[]", n), i.push(64 * Math.floor(n / 64));
    },
    function (e) {
      var i = e.stack, n = i.pop();
      t.DEBUG && console.log(e.step, "CEILING[]", n), i.push(64 * Math.ceil(n / 64));
    },
    O.bind(void 0, 0),
    O.bind(void 0, 1),
    O.bind(void 0, 2),
    O.bind(void 0, 3),
    void 0,
    void 0,
    void 0,
    void 0,
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "WCVTF[]", n, r), e.cvt[r] = n * e.ppem / e.font.unitsPerEm;
    },
    V.bind(void 0, 2),
    V.bind(void 0, 3),
    L.bind(void 0, 1),
    L.bind(void 0, 2),
    L.bind(void 0, 3),
    function (e) {
      var i, n = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "SROUND[]", n), e.round = p, 192 & n) {
      case 0:
        i = 0.5;
        break;
      case 64:
        i = 1;
        break;
      case 128:
        i = 2;
        break;
      default:
        throw new Error("invalid SROUND value");
      }
      switch (e.srPeriod = i, 48 & n) {
      case 0:
        e.srPhase = 0;
        break;
      case 16:
        e.srPhase = 0.25 * i;
        break;
      case 32:
        e.srPhase = 0.5 * i;
        break;
      case 48:
        e.srPhase = 0.75 * i;
        break;
      default:
        throw new Error("invalid SROUND value");
      }
      n &= 15, e.srThreshold = 0 === n ? 0 : (n / 8 - 0.5) * i;
    },
    function (e) {
      var i, n = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "S45ROUND[]", n), e.round = p, 192 & n) {
      case 0:
        i = Math.sqrt(2) / 2;
        break;
      case 64:
        i = Math.sqrt(2);
        break;
      case 128:
        i = 2 * Math.sqrt(2);
        break;
      default:
        throw new Error("invalid S45ROUND value");
      }
      switch (e.srPeriod = i, 48 & n) {
      case 0:
        e.srPhase = 0;
        break;
      case 16:
        e.srPhase = 0.25 * i;
        break;
      case 32:
        e.srPhase = 0.5 * i;
        break;
      case 48:
        e.srPhase = 0.75 * i;
        break;
      default:
        throw new Error("invalid S45ROUND value");
      }
      n &= 15, e.srThreshold = 0 === n ? 0 : (n / 8 - 0.5) * i;
    },
    void 0,
    void 0,
    function (e) {
      t.DEBUG && console.log(e.step, "ROFF[]"), e.round = a;
    },
    void 0,
    function (e) {
      t.DEBUG && console.log(e.step, "RUTG[]"), e.round = A;
    },
    function (e) {
      t.DEBUG && console.log(e.step, "RDTG[]"), e.round = c;
    },
    I,
    I,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SCANCTRL[]", i);
    },
    Y.bind(void 0, 0),
    Y.bind(void 0, 1),
    function (e) {
      var i = e.stack, n = i.pop(), r = 0;
      t.DEBUG && console.log(e.step, "GETINFO[]", n), 1 & n && (r = 35), 32 & n && (r |= 4096), i.push(r);
    },
    void 0,
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop(), o = i.pop();
      t.DEBUG && console.log(e.step, "ROLL[]"), i.push(r), i.push(n), i.push(o);
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "MAX[]", n, r), i.push(Math.max(r, n));
    },
    function (e) {
      var i = e.stack, n = i.pop(), r = i.pop();
      t.DEBUG && console.log(e.step, "MIN[]", n, r), i.push(Math.min(r, n));
    },
    function (e) {
      var i = e.stack.pop();
      t.DEBUG && console.log(e.step, "SCANTYPE[]", i);
    },
    function (e) {
      var i = e.stack.pop(), n = e.stack.pop();
      switch (t.DEBUG && console.log(e.step, "INSTCTRL[]", i, n), i) {
      case 1:
        return void (e.inhibitGridFit = !!n);
      case 2:
        return void (e.ignoreCvt = !!n);
      default:
        throw new Error("invalid INSTCTRL[] selector");
      }
    },
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    X.bind(void 0, 1),
    X.bind(void 0, 2),
    X.bind(void 0, 3),
    X.bind(void 0, 4),
    X.bind(void 0, 5),
    X.bind(void 0, 6),
    X.bind(void 0, 7),
    X.bind(void 0, 8),
    H.bind(void 0, 1),
    H.bind(void 0, 2),
    H.bind(void 0, 3),
    H.bind(void 0, 4),
    H.bind(void 0, 5),
    H.bind(void 0, 6),
    H.bind(void 0, 7),
    H.bind(void 0, 8),
    W.bind(void 0, 0, 0, 0, 0, 0),
    W.bind(void 0, 0, 0, 0, 0, 1),
    W.bind(void 0, 0, 0, 0, 0, 2),
    W.bind(void 0, 0, 0, 0, 0, 3),
    W.bind(void 0, 0, 0, 0, 1, 0),
    W.bind(void 0, 0, 0, 0, 1, 1),
    W.bind(void 0, 0, 0, 0, 1, 2),
    W.bind(void 0, 0, 0, 0, 1, 3),
    W.bind(void 0, 0, 0, 1, 0, 0),
    W.bind(void 0, 0, 0, 1, 0, 1),
    W.bind(void 0, 0, 0, 1, 0, 2),
    W.bind(void 0, 0, 0, 1, 0, 3),
    W.bind(void 0, 0, 0, 1, 1, 0),
    W.bind(void 0, 0, 0, 1, 1, 1),
    W.bind(void 0, 0, 0, 1, 1, 2),
    W.bind(void 0, 0, 0, 1, 1, 3),
    W.bind(void 0, 0, 1, 0, 0, 0),
    W.bind(void 0, 0, 1, 0, 0, 1),
    W.bind(void 0, 0, 1, 0, 0, 2),
    W.bind(void 0, 0, 1, 0, 0, 3),
    W.bind(void 0, 0, 1, 0, 1, 0),
    W.bind(void 0, 0, 1, 0, 1, 1),
    W.bind(void 0, 0, 1, 0, 1, 2),
    W.bind(void 0, 0, 1, 0, 1, 3),
    W.bind(void 0, 0, 1, 1, 0, 0),
    W.bind(void 0, 0, 1, 1, 0, 1),
    W.bind(void 0, 0, 1, 1, 0, 2),
    W.bind(void 0, 0, 1, 1, 0, 3),
    W.bind(void 0, 0, 1, 1, 1, 0),
    W.bind(void 0, 0, 1, 1, 1, 1),
    W.bind(void 0, 0, 1, 1, 1, 2),
    W.bind(void 0, 0, 1, 1, 1, 3),
    W.bind(void 0, 1, 0, 0, 0, 0),
    W.bind(void 0, 1, 0, 0, 0, 1),
    W.bind(void 0, 1, 0, 0, 0, 2),
    W.bind(void 0, 1, 0, 0, 0, 3),
    W.bind(void 0, 1, 0, 0, 1, 0),
    W.bind(void 0, 1, 0, 0, 1, 1),
    W.bind(void 0, 1, 0, 0, 1, 2),
    W.bind(void 0, 1, 0, 0, 1, 3),
    W.bind(void 0, 1, 0, 1, 0, 0),
    W.bind(void 0, 1, 0, 1, 0, 1),
    W.bind(void 0, 1, 0, 1, 0, 2),
    W.bind(void 0, 1, 0, 1, 0, 3),
    W.bind(void 0, 1, 0, 1, 1, 0),
    W.bind(void 0, 1, 0, 1, 1, 1),
    W.bind(void 0, 1, 0, 1, 1, 2),
    W.bind(void 0, 1, 0, 1, 1, 3),
    W.bind(void 0, 1, 1, 0, 0, 0),
    W.bind(void 0, 1, 1, 0, 0, 1),
    W.bind(void 0, 1, 1, 0, 0, 2),
    W.bind(void 0, 1, 1, 0, 0, 3),
    W.bind(void 0, 1, 1, 0, 1, 0),
    W.bind(void 0, 1, 1, 0, 1, 1),
    W.bind(void 0, 1, 1, 0, 1, 2),
    W.bind(void 0, 1, 1, 0, 1, 3),
    W.bind(void 0, 1, 1, 1, 0, 0),
    W.bind(void 0, 1, 1, 1, 0, 1),
    W.bind(void 0, 1, 1, 1, 0, 2),
    W.bind(void 0, 1, 1, 1, 0, 3),
    W.bind(void 0, 1, 1, 1, 1, 0),
    W.bind(void 0, 1, 1, 1, 1, 1),
    W.bind(void 0, 1, 1, 1, 1, 2),
    W.bind(void 0, 1, 1, 1, 1, 3)
  ], e.exports = o;
}
