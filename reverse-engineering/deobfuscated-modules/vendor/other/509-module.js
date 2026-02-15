/**
 * Module 509
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

function (exports, module) {
  function i(e, t) {
    this.forEach = n(e, t);
  }
  function n(e, t) {
    return "function" != typeof e ? Array.isArray(e) ? function (t) {
      return e.some(t);
    } : function (t) {
      return t(e);
    } : t ? function (i, n) {
      e.call(t, i, n);
    } : e;
  }
  function r(e, t) {
    e(t);
  }
  function o(e, t) {
    return 0 === arguments.length ? new i(r) : e && e instanceof i ? e : new i(e, t);
  }
  function a(e) {
    return "string" == typeof e ? new Function("x", "return " + e) : e;
  }
  function s(e, t) {
    var i = e[t];
    return "function" == typeof i ? i : function (i) {
      e[t] = i;
    };
  }
  function l() {
  }
  function h(e) {
    return !!e;
  }
  function A(e, t) {
    return Math.min(e, t);
  }
  function c(e, t) {
    return Math.max(e, t);
  }
  function p(e, t) {
    return e + t;
  }
  function u(e, t) {
    return !(!e || !t);
  }
  function d(e, t) {
    return !(!e && !t);
  }
  function g(e) {
    return !e;
  }
  i.create = o, i.prototype.per = function (e, t) {
    var i = this.forEach, r = n(e && e.forEach || e, t);
    return o(function (e, t) {
      return i(function (t) {
        return r(e, t);
      }, t);
    });
  }, i.prototype.map = function (e) {
    var t = 0;
    return e = a(e), this.per(function (i, n) {
      return i(e(n, t++));
    });
  }, i.prototype.filter = function (e) {
    return e = a(e), this.per(function (t, i) {
      if (e(i))
        return t(i);
    });
  }, i.prototype.concat = function (e, t) {
    e = e instanceof i ? e.forEach : n(e, t);
    var r = this.forEach;
    return o(function (t, i) {
      r(t, i), e(t, i);
    });
  }, i.prototype.skip = function (e) {
    return this.per(function (t, i) {
      return e > 0 ? (e--, false) : t(i);
    });
  }, i.prototype.take = function (e) {
    return this.per(function (t, i) {
      return e <= 0 || (e--, t(i));
    });
  }, i.prototype.listen = function (e) {
    return this.per(function (t, i) {
      return !!e(i) || t(i);
    });
  }, i.prototype.flatten = function () {
    return this.per(function (e, t) {
      return Array.isArray(t) ? t.some(function (t) {
        return e(t);
      }) : e(t);
    });
  }, i.prototype.reduce = function (e, t) {
    var i = t, n = 2 == arguments.length;
    return this.per(function (t, r) {
      t(i = n ? e(i, r) : r), n = true;
    });
  }, i.prototype.into = function (e, t) {
    if (!Array.isArray(e))
      throw new Error("into expects an array");
    return t = function (e) {
      return "number" != typeof e ? Number.MAX_VALUE : e;
    }(t), this.listen(function (i) {
      if (t <= 0)
        return true;
      e.push(i), t--;
    });
  }, i.prototype.monitor = function (e) {
    var t = 0, i = s(e, "count"), n = s(e, "first"), r = s(e, "last"), o = e.limit;
    return "number" != typeof o && (o = Number.MAX_VALUE), o < 1 ? this : this.listen(function (e) {
      if (0 === t && n(e), t++, i(t), r(e), t >= o)
        return true;
    });
  }, i.prototype.submit = function (e) {
    return this.forEach(l, e);
  }, i.prototype.some = function (e) {
    var t = false;
    return this.listen(function (i) {
      if (e(i))
        return t = true, true;
    }).submit(), t;
  }, i.prototype.all = function () {
    var e = [];
    return this.into(e).submit(), e;
  }, i.prototype.first = function () {
    var e = { limit: 1 };
    return this.monitor(e).submit(), e.count > 0 ? e.first : undefined;
  }, i.prototype.last = function () {
    var e = {};
    return this.monitor(e).submit(), e.count > 0 ? e.last : undefined;
  }, i.prototype.truthy = function () {
    return this.filter(h);
  }, i.prototype.min = function () {
    return this.reduce(A, Number.MAX_VALUE);
  }, i.prototype.max = function () {
    return this.reduce(c, -Number.MAX_VALUE);
  }, i.prototype.sum = function () {
    return this.reduce(p, 0);
  }, i.prototype.and = function () {
    return this.reduce(u, true);
  }, i.prototype.or = function () {
    return this.reduce(d, false);
  }, i.prototype.not = function () {
    return this.map(g);
  }, i.pulse = function (e) {
    var t = 0;
    return o(function (i) {
      !function n() {
        true !== i(t++) && setTimeout(n, e);
      }();
    });
  }, exports.exports = i;
}
