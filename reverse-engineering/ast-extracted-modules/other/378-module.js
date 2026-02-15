/**
 * Module 378
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

function (e, t) {
  function i(e) {
    this.char = e, this.state = {}, this.activeState = null;
  }
  function n(e, t, i) {
    this.contextName = i, this.startIndex = e, this.endOffset = t;
  }
  function r(e, t, i) {
    this.contextName = e, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = i;
  }
  function o(e, t) {
    this.context = e, this.index = t, this.length = e.length, this.current = e[t], this.backtrack = e.slice(0, t), this.lookahead = e.slice(t + 1);
  }
  function a(e) {
    this.eventId = e, this.subscribers = [];
  }
  function s(e) {
    var t = [
        "start",
        "end",
        "next",
        "newToken",
        "contextStart",
        "contextEnd",
        "insertToken",
        "removeToken",
        "removeRange",
        "replaceToken",
        "replaceRange",
        "composeRUD",
        "updateContextsRanges"
      ], i = this.events, n = this.updateContextsRanges;
    t.forEach(function (e) {
      Object.defineProperty(i, e, { value: new a(e) });
    }), e && t.forEach(function (t) {
      var n = e[t];
      "function" == typeof n && i[t].subscribe(n);
    });
    [
      "insertToken",
      "removeToken",
      "removeRange",
      "replaceToken",
      "replaceRange",
      "composeRUD"
    ].forEach(function (e) {
      i[e].subscribe(n);
    });
  }
  function l(e) {
    this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], s.call(this, e);
  }
  i.prototype.setState = function (e, t) {
    return this.state[e] = t, this.activeState = {
      key: e,
      value: this.state[e]
    }, this.activeState;
  }, i.prototype.getState = function (e) {
    return this.state[e] || null;
  }, l.prototype.inboundIndex = function (e) {
    return e >= 0 && e < this.tokens.length;
  }, l.prototype.composeRUD = function (e) {
    var t = this, i = e.map(function (e) {
        return t[e[0]].apply(t, e.slice(1).concat(!0));
      }), n = function (e) {
        return "object" == typeof e && e.hasOwnProperty("FAIL");
      };
    if (i.every(n))
      return {
        FAIL: "composeRUD: one or more operations hasn't completed successfully",
        report: i.filter(n)
      };
    this.dispatch("composeRUD", [i.filter(function (e) {
        return !n(e);
      })]);
  }, l.prototype.replaceRange = function (e, t, n, r) {
    t = null !== t ? t : this.tokens.length;
    var o = n.every(function (e) {
      return e instanceof i;
    });
    if (!isNaN(e) && this.inboundIndex(e) && o) {
      var a = this.tokens.splice.apply(this.tokens, [
        e,
        t
      ].concat(n));
      return r || this.dispatch("replaceToken", [
        e,
        t,
        n
      ]), [
        a,
        n
      ];
    }
    return { FAIL: "replaceRange: invalid tokens or startIndex." };
  }, l.prototype.replaceToken = function (e, t, n) {
    if (!isNaN(e) && this.inboundIndex(e) && t instanceof i) {
      var r = this.tokens.splice(e, 1, t);
      return n || this.dispatch("replaceToken", [
        e,
        t
      ]), [
        r[0],
        t
      ];
    }
    return { FAIL: "replaceToken: invalid token or index." };
  }, l.prototype.removeRange = function (e, t, i) {
    t = isNaN(t) ? this.tokens.length : t;
    var n = this.tokens.splice(e, t);
    return i || this.dispatch("removeRange", [
      n,
      e,
      t
    ]), n;
  }, l.prototype.removeToken = function (e, t) {
    if (!isNaN(e) && this.inboundIndex(e)) {
      var i = this.tokens.splice(e, 1);
      return t || this.dispatch("removeToken", [
        i,
        e
      ]), i;
    }
    return { FAIL: "removeToken: invalid token index." };
  }, l.prototype.insertToken = function (e, t, n) {
    return e.every(function (e) {
      return e instanceof i;
    }) ? (this.tokens.splice.apply(this.tokens, [
      t,
      0
    ].concat(e)), n || this.dispatch("insertToken", [
      e,
      t
    ]), e) : { FAIL: "insertToken: invalid token(s)." };
  }, l.prototype.registerModifier = function (e, t, i) {
    var n = this;
    this.events.newToken.subscribe(function (r, o) {
      var a = [
          r,
          o
        ], s = [
          r,
          o
        ];
      if (null === t || !0 === t.apply(n, a)) {
        var l = i.apply(n, s);
        r.setState(e, l);
      }
    }), this.registeredModifiers.push(e);
  }, a.prototype.subscribe = function (e) {
    return "function" == typeof e ? this.subscribers.push(e) - 1 : { FAIL: "invalid " + this.eventId + " event handler" };
  }, a.prototype.unsubscribe = function (e) {
    this.subscribers.splice(e, 1);
  }, o.prototype.setCurrentIndex = function (e) {
    this.index = e, this.current = this.context[e], this.backtrack = this.context.slice(0, e), this.lookahead = this.context.slice(e + 1);
  }, o.prototype.get = function (e) {
    switch (!0) {
    case 0 === e:
      return this.current;
    case e < 0 && Math.abs(e) <= this.backtrack.length:
      return this.backtrack.slice(e)[0];
    case e > 0 && e <= this.lookahead.length:
      return this.lookahead[e - 1];
    default:
      return null;
    }
  }, l.prototype.rangeToText = function (e) {
    if (e instanceof n)
      return this.getRangeTokens(e).map(function (e) {
        return e.char;
      }).join("");
  }, l.prototype.getText = function () {
    return this.tokens.map(function (e) {
      return e.char;
    }).join("");
  }, l.prototype.getContext = function (e) {
    var t = this.registeredContexts[e];
    return t || null;
  }, l.prototype.on = function (e, t) {
    var i = this.events[e];
    return i ? i.subscribe(t) : null;
  }, l.prototype.dispatch = function (e, t) {
    var i = this.events[e];
    if (i instanceof a) {
      var n = this;
      i.subscribers.forEach(function (e) {
        e.apply(n, t || []);
      });
    }
  }, l.prototype.registerContextChecker = function (e, t, i) {
    if (this.getContext(e))
      return { FAIL: "context name " + e + " is already registered." };
    if ("function" != typeof t)
      return { FAIL: "missing context start check." };
    if ("function" != typeof i)
      return { FAIL: "missing context end check." };
    var n = new r(e, t, i);
    return this.registeredContexts[e] = n, this.contextCheckers.push(n), n;
  }, l.prototype.getRangeTokens = function (e) {
    var t = e.startIndex + e.endOffset;
    return [].concat(this.tokens.slice(e.startIndex, t));
  }, l.prototype.getContextRanges = function (e) {
    var t = this.getContext(e);
    return t ? t.ranges : { FAIL: "context checker " + e + " is not registered." };
  }, l.prototype.resetContextsRanges = function () {
    var e = this.registeredContexts;
    for (var t in e) {
      if (e.hasOwnProperty(t))
        e[t].ranges = [];
    }
  }, l.prototype.updateContextsRanges = function () {
    this.resetContextsRanges();
    for (var e = this.tokens.map(function (e) {
          return e.char;
        }), t = 0; t < e.length; t++) {
      var i = new o(e, t);
      this.runContextCheck(i);
    }
    this.dispatch("updateContextsRanges", [this.registeredContexts]);
  }, l.prototype.setEndOffset = function (e, t) {
    var i = new n(this.getContext(t).openRange.startIndex, e, t), r = this.getContext(t).ranges;
    return i.rangeId = t + "." + r.length, r.push(i), this.getContext(t).openRange = null, i;
  }, l.prototype.runContextCheck = function (e) {
    var t = e.index, i = this;
    this.contextCheckers.forEach(function (r) {
      var o = r.contextName, a = i.getContext(o).openRange;
      if (!a && r.checkStart(e) && (a = new n(t, null, o), i.getContext(o).openRange = a, i.dispatch("contextStart", [
          o,
          t
        ])), a && r.checkEnd(e)) {
        var s = t - a.startIndex + 1, l = i.setEndOffset(s, o);
        i.dispatch("contextEnd", [
          o,
          l
        ]);
      }
    });
  }, l.prototype.tokenize = function (e) {
    this.tokens = [], this.resetContextsRanges();
    var t = Array.from(e);
    this.dispatch("start");
    for (var n = 0; n < t.length; n++) {
      var r = t[n], a = new o(t, n);
      this.dispatch("next", [a]), this.runContextCheck(a);
      var s = new i(r);
      this.tokens.push(s), this.dispatch("newToken", [
        s,
        a
      ]);
    }
    return this.dispatch("end", [this.tokens]), this.tokens;
  }, e.exports.Tokenizer = l, e.exports.Token = i, e.exports.Event = a, e.exports.ContextRange = n, e.exports.ContextParams = o;
}
