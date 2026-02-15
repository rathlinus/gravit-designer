/**
 * Module 913
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
  var n;
  !function (r) {
    "use strict";
    var o, a = "[big.js] ", s = a + "Invalid ", l = s + "decimal places", h = {}, A = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    function c(e, t) {
      var i, n, r;
      if (!A.test(t))
        throw Error(s + "number");
      for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (i = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (i < 0 && (i = n), i += +t.slice(n + 1), t = t.substring(0, n)) : i < 0 && (i = t.length), r = t.length, n = 0; n < r && "0" == t.charAt(n);)
        ++n;
      if (n == r)
        e.c = [e.e = 0];
      else {
        for (; r > 0 && "0" == t.charAt(--r););
        for (e.e = i - n - 1, e.c = [], i = 0; n <= r;)
          e.c[i++] = +t.charAt(n++);
      }
      return e;
    }
    function p(e, t, i, n) {
      var r = e.c;
      if (undefined === i && (i = e.constructor.RM), 0 !== i && 1 !== i && 2 !== i && 3 !== i)
        throw Error("[big.js] Invalid rounding mode");
      if (t < 1)
        n = 3 === i && (n || !!r[0]) || 0 === t && (1 === i && r[0] >= 5 || 2 === i && (r[0] > 5 || 5 === r[0] && (n || undefined !== r[1]))), r.length = 1, n ? (e.e = e.e - t + 1, r[0] = 1) : r[0] = e.e = 0;
      else if (t < r.length) {
        if (n = 1 === i && r[t] >= 5 || 2 === i && (r[t] > 5 || 5 === r[t] && (n || undefined !== r[t + 1] || 1 & r[t - 1])) || 3 === i && (n || !!r[0]), r.length = t, n)
          for (; ++r[--t] > 9;)
            if (r[t] = 0, 0 === t) {
              ++e.e, r.unshift(1);
              break;
            }
        for (t = r.length; !r[--t];)
          r.pop();
      }
      return e;
    }
    function u(e, t, i) {
      var n = e.e, r = e.c.join(""), o = r.length;
      if (t)
        r = r.charAt(0) + (o > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
      else if (n < 0) {
        for (; ++n;)
          r = "0" + r;
        r = "0." + r;
      } else if (n > 0)
        if (++n > o)
          for (n -= o; n--;)
            r += "0";
        else
          n < o && (r = r.slice(0, n) + "." + r.slice(n));
      else
        o > 1 && (r = r.charAt(0) + "." + r.slice(1));
      return e.s < 0 && i ? "-" + r : r;
    }
    h.abs = function () {
      var e = new this.constructor(this);
      return e.s = 1, e;
    }, h.cmp = function (e) {
      var t, i = this, n = i.c, r = (e = new i.constructor(e)).c, o = i.s, a = e.s, s = i.e, l = e.e;
      if (!n[0] || !r[0])
        return n[0] ? o : r[0] ? -a : 0;
      if (o != a)
        return o;
      if (t = o < 0, s != l)
        return s > l ^ t ? 1 : -1;
      for (a = (s = n.length) < (l = r.length) ? s : l, o = -1; ++o < a;)
        if (n[o] != r[o])
          return n[o] > r[o] ^ t ? 1 : -1;
      return s == l ? 0 : s > l ^ t ? 1 : -1;
    }, h.div = function (e) {
      var t = this, i = t.constructor, n = t.c, r = (e = new i(e)).c, o = t.s == e.s ? 1 : -1, a = i.DP;
      if (a !== ~~a || a < 0 || a > 1000000)
        throw Error(l);
      if (!r[0])
        throw Error("[big.js] Division by zero");
      if (!n[0])
        return e.s = o, e.c = [e.e = 0], e;
      var s, h, A, c, u, d = r.slice(), g = s = r.length, f = n.length, m = n.slice(0, s), y = m.length, _ = e, v = _.c = [], b = 0, C = a + (_.e = t.e - e.e) + 1;
      for (_.s = o, o = C < 0 ? 0 : C, d.unshift(0); y++ < s;)
        m.push(0);
      do {
        for (A = 0; A < 10; A++) {
          if (s != (y = m.length))
            c = s > y ? 1 : -1;
          else
            for (u = -1, c = 0; ++u < s;)
              if (r[u] != m[u]) {
                c = r[u] > m[u] ? 1 : -1;
                break;
              }
          if (!(c < 0))
            break;
          for (h = y == s ? r : d; y;) {
            if (m[--y] < h[y]) {
              for (u = y; u && !m[--u];)
                m[u] = 9;
              --m[u], m[y] += 10;
            }
            m[y] -= h[y];
          }
          for (; !m[0];)
            m.shift();
        }
        v[b++] = c ? A : ++A, m[0] && c ? m[y] = n[g] || 0 : m = [n[g]];
      } while ((g++ < f || undefined !== m[0]) && o--);
      return v[0] || 1 == b || (v.shift(), _.e--, C--), b > C && p(_, C, i.RM, undefined !== m[0]), _;
    }, h.eq = function (e) {
      return 0 === this.cmp(e);
    }, h.gt = function (e) {
      return this.cmp(e) > 0;
    }, h.gte = function (e) {
      return this.cmp(e) > -1;
    }, h.lt = function (e) {
      return this.cmp(e) < 0;
    }, h.lte = function (e) {
      return this.cmp(e) < 1;
    }, h.minus = h.sub = function (e) {
      var t, i, n, r, o = this, a = o.constructor, s = o.s, l = (e = new a(e)).s;
      if (s != l)
        return e.s = -l, o.plus(e);
      var h = o.c.slice(), A = o.e, c = e.c, p = e.e;
      if (!h[0] || !c[0])
        return c[0] ? e.s = -l : h[0] ? e = new a(o) : e.s = 1, e;
      if (s = A - p) {
        for ((r = s < 0) ? (s = -s, n = h) : (p = A, n = c), n.reverse(), l = s; l--;)
          n.push(0);
        n.reverse();
      } else
        for (i = ((r = h.length < c.length) ? h : c).length, s = l = 0; l < i; l++)
          if (h[l] != c[l]) {
            r = h[l] < c[l];
            break;
          }
      if (r && (n = h, h = c, c = n, e.s = -e.s), (l = (i = c.length) - (t = h.length)) > 0)
        for (; l--;)
          h[t++] = 0;
      for (l = t; i > s;) {
        if (h[--i] < c[i]) {
          for (t = i; t && !h[--t];)
            h[t] = 9;
          --h[t], h[i] += 10;
        }
        h[i] -= c[i];
      }
      for (; 0 === h[--l];)
        h.pop();
      for (; 0 === h[0];)
        h.shift(), --p;
      return h[0] || (e.s = 1, h = [p = 0]), e.c = h, e.e = p, e;
    }, h.mod = function (e) {
      var t, i = this, n = i.constructor, r = i.s, o = (e = new n(e)).s;
      if (!e.c[0])
        throw Error("[big.js] Division by zero");
      return i.s = e.s = 1, t = 1 == e.cmp(i), i.s = r, e.s = o, t ? new n(i) : (r = n.DP, o = n.RM, n.DP = n.RM = 0, i = i.div(e), n.DP = r, n.RM = o, this.minus(i.times(e)));
    }, h.neg = function () {
      var e = new this.constructor(this);
      return e.s = -e.s, e;
    }, h.plus = h.add = function (e) {
      var t, i, n, r = this, o = r.constructor;
      if (e = new o(e), r.s != e.s)
        return e.s = -e.s, r.minus(e);
      var a = r.e, s = r.c, l = e.e, h = e.c;
      if (!s[0] || !h[0])
        return h[0] || (s[0] ? e = new o(r) : e.s = r.s), e;
      if (s = s.slice(), t = a - l) {
        for (t > 0 ? (l = a, n = h) : (t = -t, n = s), n.reverse(); t--;)
          n.push(0);
        n.reverse();
      }
      for (s.length - h.length < 0 && (n = h, h = s, s = n), t = h.length, i = 0; t; s[t] %= 10)
        i = (s[--t] = s[t] + h[t] + i) / 10 | 0;
      for (i && (s.unshift(i), ++l), t = s.length; 0 === s[--t];)
        s.pop();
      return e.c = s, e.e = l, e;
    }, h.pow = function (e) {
      var t = this, i = new t.constructor("1"), n = i, r = e < 0;
      if (e !== ~~e || e < -1000000 || e > 1000000)
        throw Error(s + "exponent");
      for (r && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;)
        t = t.times(t);
      return r ? i.div(n) : n;
    }, h.prec = function (e, t) {
      if (e !== ~~e || e < 1 || e > 1000000)
        throw Error(s + "precision");
      return p(new this.constructor(this), e, t);
    }, h.round = function (e, t) {
      if (undefined === e)
        e = 0;
      else if (e !== ~~e || e < -1000000 || e > 1000000)
        throw Error(l);
      return p(new this.constructor(this), e + this.e + 1, t);
    }, h.sqrt = function () {
      var e, t, i, n = this, r = n.constructor, o = n.s, s = n.e, l = new r("0.5");
      if (!n.c[0])
        return new r(n);
      if (o < 0)
        throw Error(a + "No square root");
      0 === (o = Math.sqrt(+u(n, true, true))) || o === 1 / 0 ? ((t = n.c.join("")).length + s & 1 || (t += "0"), s = ((s + 1) / 2 | 0) - (s < 0 || 1 & s), e = new r(((o = Math.sqrt(t)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + s)) : e = new r(o + ""), s = e.e + (r.DP += 4);
      do {
        i = e, e = l.times(i.plus(n.div(i)));
      } while (i.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
      return p(e, (r.DP -= 4) + e.e + 1, r.RM);
    }, h.times = h.mul = function (e) {
      var t, i = this, n = i.constructor, r = i.c, o = (e = new n(e)).c, a = r.length, s = o.length, l = i.e, h = e.e;
      if (e.s = i.s == e.s ? 1 : -1, !r[0] || !o[0])
        return e.c = [e.e = 0], e;
      for (e.e = l + h, a < s && (t = r, r = o, o = t, h = a, a = s, s = h), t = new Array(h = a + s); h--;)
        t[h] = 0;
      for (l = s; l--;) {
        for (s = 0, h = a + l; h > l;)
          s = t[h] + o[l] * r[h - l - 1] + s, t[h--] = s % 10, s = s / 10 | 0;
        t[h] = s;
      }
      for (s ? ++e.e : t.shift(), l = t.length; !t[--l];)
        t.pop();
      return e.c = t, e;
    }, h.toExponential = function (e, t) {
      var i = this, n = i.c[0];
      if (undefined !== e) {
        if (e !== ~~e || e < 0 || e > 1000000)
          throw Error(l);
        for (i = p(new i.constructor(i), ++e, t); i.c.length < e;)
          i.c.push(0);
      }
      return u(i, true, !!n);
    }, h.toFixed = function (e, t) {
      var i = this, n = i.c[0];
      if (undefined !== e) {
        if (e !== ~~e || e < 0 || e > 1000000)
          throw Error(l);
        for (e = e + (i = p(new i.constructor(i), e + i.e + 1, t)).e + 1; i.c.length < e;)
          i.c.push(0);
      }
      return u(i, false, !!n);
    }, h.toJSON = h.toString = function () {
      var e = this, t = e.constructor;
      return u(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
    }, h.toNumber = function () {
      var e = +u(this, true, true);
      if (true === this.constructor.strict && !this.eq(e.toString()))
        throw Error(a + "Imprecise conversion");
      return e;
    }, h.toPrecision = function (e, t) {
      var i = this, n = i.constructor, r = i.c[0];
      if (undefined !== e) {
        if (e !== ~~e || e < 1 || e > 1000000)
          throw Error(s + "precision");
        for (i = p(new n(i), e, t); i.c.length < e;)
          i.c.push(0);
      }
      return u(i, e <= i.e || i.e <= n.NE || i.e >= n.PE, !!r);
    }, h.valueOf = function () {
      var e = this, t = e.constructor;
      if (true === t.strict)
        throw Error(a + "valueOf disallowed");
      return u(e, e.e <= t.NE || e.e >= t.PE, true);
    }, (o = function e() {
      function module(i) {
        var n = this;
        if (!(n instanceof module))
          return undefined === i && 0 === arguments.length ? e() : new module(i);
        if (i instanceof module)
          n.s = i.s, n.e = i.e, n.c = i.c.slice();
        else {
          if ("string" != typeof i) {
            if (true === module.strict && "bigint" != typeof i)
              throw TypeError(s + "value");
            i = 0 === i && 1 / i < 0 ? "-0" : String(i);
          }
          c(n, i);
        }
        n.constructor = module;
      }
      return module.prototype = h, module.DP = 20, module.RM = 1, module.NE = -7, module.PE = 21, module.strict = false, module.roundDown = 0, module.roundHalfUp = 1, module.roundHalfEven = 2, module.roundUp = 3, module;
    }()).default = o.Big = o, undefined === (n = function () {
      return o;
    }.call(module, require, module, exports)) || (exports.exports = n);
  }();
}
