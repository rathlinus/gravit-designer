/**
 * Module 507
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
  var n = i(160), r = i(2), o = i(22), a = {}, s = function (e, t, i, n) {
      e = "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : "";
      var r = a[e] || (a[e] = new s.initialize(e));
      return null == t ? r : r.search(t, i, n);
    };
  s.initialize = function (e) {
    this.text = e;
  };
  var l, h = s.initialize.prototype = s.prototype, A = function () {
      return !0;
    };
  h.queryAll = function (e, t, i) {
    var n, o;
    if (i = i || {}, !(e && e instanceof r))
      throw new Error("Missing context or invalid context");
    if (!(e instanceof r))
      if ("string" == typeof e)
        e = s.queryAll(e), n = !0;
      else if ("[object Array]" == Object.prototype.toString.call(e) || "number" == typeof e.length && e.item) {
        var a = [];
        for (y = 0; o = e[y]; y++)
          o instanceof r && a.push(o);
        e = (n = a.length > 1) ? a : a[0];
      }
    var l, h, c = {}, p = {}, u = c, d = s.getUid, g = function (e) {
        var t = d(e);
        return u[t] ? null : u[t] = !0;
      };
    if (t && t.length)
      for (y = 0; o = t[y]; y++)
        g(o);
    var f = this.parse();
    if (!f.length)
      return [];
    for (var m, y = 0; m = f[y]; y++) {
      var _ = g;
      if (m.first && (t ? !0 : _ = A, n ? h = e : m.combinator && (h = [e])), m.last && t ? (u = c, l = t) : (u = {}, l = []), m.combinator || n)
        for (var v = 0, b = h.length; v < b; v++)
          l = m.combine(l, h[v], m, p, _);
      else
        l = m.combine(l, e, m, p, _, !l.length);
      m.last ? l.length && (t = l) : h = l;
    }
    return t || [];
  }, h.querySingle = function (e, t, i) {
    return this.queryAll(e, t, i)[0];
  }, h.match = function (e, t) {
    if (1 == this.parse().length)
      return !!this.parse()[0].match(e, {});
    if (!t)
      for (t = e; t.getParent();)
        t = t.getParent();
    for (var i = this.queryAll(t), n = i.length; n--;)
      if (i[n] == e)
        return !0;
    return !1;
  }, h.filter = function (e) {
    for (var t, i = [], n = this.parse(), r = 0; t = e[r]; r++)
      for (var o = 0; o < n.length; ++o) {
        (0, n[o].match)(t) && i.push(t);
      }
    return i;
  }, s.recompile = function () {
    var e, t = [","], i = ["!"];
    for (e in b)
      " " != e && t[e.length > 1 ? "unshift" : "push"](s.escapeRegExp(e));
    for (e in w)
      i.push(e);
    l = new RegExp("[\\w\\u00a1-\\uFFFF][\\w\\u00a1-\\uFFFF-]*|[#.](?:[\\w\\u00a1-\\uFFFF-]|\\\\:|\\\\.)+|[ \\t\\r\\n\\f](?=[\\w\\u00a1-\\uFFFF*#.[:])|[ \\t\\r\\n\\f]*(" + t.join("|") + ")[ \\t\\r\\n\\f]*|\\[([\\w\\u00a1-\\uFFFF-]+)[ \\t\\r\\n\\f]*(?:([" + i.join("") + "]?=)[ \\t\\r\\n\\f]*(?:\"([^\"]*)\"|'([^']*)'|([^\\]]*)))?]|:([-\\w\\u00a1-\\uFFFF]+)(?:\\((?:\"([^\"]*)\"|'([^']*)'|([^)]*))\\))?|\\*|(.+)", "g");
  };
  var c = function (e) {
      return {
        ident: [],
        tags: [],
        properties: [],
        pseudos: [],
        combinator: e
      };
    }, p = function (e) {
      return e;
    };
  function u(e, t, i, n) {
    return e ? n ? function (n, r) {
      return t(n, i, r) && e(n, r);
    } : function (n, r) {
      return e(n, r) && t(n, i, r);
    } : function (e, n) {
      return t(e, i, n);
    };
  }
  h.parse = function (e) {
    var t = e ? "plain" : "parsed";
    if (this[t])
      return this[t];
    var i = this.text, n = e ? p : this.compute, r = [], o = c(null);
    o.first = !0;
    var a, h, A = function (e) {
        r.push(n(o)), o = c(e);
      };
    for (l.lastIndex = 0; a = l.exec(i);) {
      if (a[11]) {
        if (s.verbose)
          throw SyntaxError("Syntax error, \"" + h + "\" unexpected at #" + l.lastIndex + " in \"" + i + "\"");
        return this[t] = [];
      }
      switch ((h = a[0]).charAt(0)) {
      case ".":
        o.tags.push(h.slice(1).replace(/\\/g, ""));
        break;
      case "#":
        o.id = h.slice(1).replace(/\\/g, "");
        break;
      case "[":
        o.properties.push({
          name: a[2],
          operator: a[3] || null,
          value: a[4] || a[5] || a[6] || null
        });
        break;
      case ":":
        o.pseudos.push({
          name: a[7],
          value: a[8] || a[9] || a[10] || null
        });
        break;
      case " ":
      case "\t":
      case "\r":
      case "\n":
      case "\f":
        a[1] = a[1] || " ";
      default:
        var u = a[1];
        if (u) {
          if ("," == u) {
            o.last = !0, A(null), o.first = !0;
            continue;
          }
          o.first && !o.ident.length ? o.combinator = u : A(u);
        } else
          "*" != h && (o.nodeName = h);
      }
      o.ident.push(h);
    }
    return o.last = !0, r.push(n(o)), this[t] = r;
  };
  var d = function () {
      return !0;
    }, g = function (e, t) {
      return !!e.hasMixin(r.Identity) && t === e.getId();
    }, f = function (e, t) {
      return e.getNodeName().toUpperCase() == t.toUpperCase();
    }, m = function (e) {
      return new RegExp("(?:^|[ \\t\\r\\n\\f])" + e + "(?:$|[ \\t\\r\\n\\f])");
    }, y = function (e, t) {
      if (e.hasMixin(r.Tag)) {
        var i = e.getTags();
        return i && t.test(i);
      }
      return !1;
    }, _ = function (e) {
      if (!e.operator || !e.value)
        return e;
      var t = w[e.operator];
      return t && (e.escaped = s.escapeRegExp(e.value), e.pattern = new RegExp(t(e.value, e.escaped, e))), e;
    }, v = function (e, t) {
      var i = e.hasMixin(r.Properties) ? e.getProperty(t.name) : null;
      switch (t.operator) {
      case null:
        return i;
      case "=":
        return i == t.value;
      case "!=":
        return i != t.value;
      }
      return !(!i && t.value) && t.pattern.test(i);
    };
  h.compute = function (e) {
    var t, i, n, r, o, a, l = e.nodeName, h = e.id, A = e.tags;
    if (h && (a = !0, o = u(null, g, h), r = function (e) {
        var t = e._scene.getById(h);
        return !t || l && !f(t, l) ? [] : [t];
      }), A.length > 0)
      if (r || 1 != A.length)
        for (t = 0; i = A[t]; t++)
          n = u(n, y, m(i));
      else {
        a = !0;
        var c = m(A[0]);
        o = u(o, y, c), r = function (e) {
          for (var t, i = e.getNodesByName(l || "*"), n = [], r = 0; t = i[r]; r++)
            y(t, A[0]) && n.push(t);
          return n;
        };
      }
    for (l ? r ? a || (n = u(n, f, l)) : (o = u(o, f, l), r = function (e) {
        return e.getNodesByName(l);
      }) : r || (r = function (e) {
        return e.getNodesByName("*");
      }), t = 0; i = e.pseudos[t]; t++)
      if ("not" == i.name) {
        var p = s(i.value);
        n = u(n, function (e, t) {
          return !t.match(e);
        }, 1 == p.parse().length ? p.parsed[0] : p);
      } else {
        var b = C[i.name];
        b && (n = u(n, b, i.value));
      }
    for (t = 0; i = e.properties[t]; t++)
      n = u(n, v, _(i));
    return (e.simple = !n) ? e.matchAux = d : (e.matchAux = n, o = u(o, n)), e.match = o || d, e.combine = s.combinators[e.combinator || " "], e.search = r, e;
  };
  var b = s.combinators = {
      " ": function (e, t, i, n, r, o) {
        var a = i.search(t);
        if (o && i.simple)
          return s.toArray(a);
        for (var l, h = 0, A = i.matchAux; l = a[h]; h++)
          r(l) && A(l, n) && e.push(l);
        return e;
      },
      ">": function (e, t, i, n, r) {
        for (var o, a = i.search(t), s = 0; o = a[s]; s++)
          o.getParent() == t && r(o) && i.matchAux(o, n) && e.push(o);
        return e;
      },
      "+": function (e, t, i, n, r) {
        for (; t = t.getNext();) {
          r(t) && i.match(t, n) && e.push(t);
          break;
        }
        return e;
      },
      "~": function (e, t, i, n, r) {
        for (; (t = t.getNext()) && r(t);)
          i.match(t, n) && e.push(t);
        return e;
      },
      "<": function (e, t, i, r, o) {
        for (; (t = t.getParent()) && !(t instanceof n);)
          o(t) && i.match(t, r) && e.push(t);
        return e;
      },
      "^": function (e, t, i, n, r) {
        return (t = t.getFirstChild()) && (r(t) && i.match(t, n) ? e.push(t) : e = s.combinators["+"](e, t, i, t, n)), e;
      },
      "++": function (e, t, i, n, r) {
        for (; t = t.getNext();)
          r(t) && this.match(t, n) && e.push(t);
        return e;
      },
      "--": function (e, t, i, n, r) {
        for (; t = t.getPrevious();)
          r(t) && this.match(t, n) && e.push(t);
        return e;
      }
    }, C = s.pseudos = {
      "first-child": function (e) {
        return C.index(e, 0);
      },
      "last-child": function (e) {
        return null == e.getNext();
      },
      "only-child": function (e) {
        return null == e.getPrevious() && null == e.getNext();
      },
      "nth-child": function (e, t, i) {
        var n = s.parseNth(t || "n");
        if ("n" != n.special)
          return C[n.special](e, n.a, i);
        (i = i || {}).positions = i.positions || {};
        var r = s.getUid(e);
        if (!i.positions[r]) {
          for (var o = 0; e = e.getPrevious();) {
            o++;
            var a = i.positions[s.getUid(e)];
            if (null != a) {
              o = a + o;
              break;
            }
          }
          i.positions[r] = o;
        }
        return i.positions[r] % n.a == n.b;
      },
      empty: function (e) {
        return !1;
      },
      contains: function (e, t) {
        return !1;
      },
      index: function (e, t) {
        for (var i = 1; e = e.getPrevious();)
          if (++i > t)
            return !1;
        return i == t;
      },
      even: function (e, t, i) {
        return C["nth-child"](e, "2n+1", i);
      },
      odd: function (e, t, i) {
        return C["nth-child"](e, "2n", i);
      },
      has: function (e, t) {
        return s.querySingle(t, e);
      },
      active: function (e) {
        return e.hasFlag(r.Flag.Active);
      },
      selected: function (e) {
        return e.hasFlag(r.Flag.Selected);
      },
      hidden: function (e) {
        return e instanceof o && e.hasFlag(o.Flag.Hidden);
      },
      visible: function (e) {
        return e instanceof o && !e.hasFlag(o.Flag.Hidden);
      }
    };
  C.first = C["first-child"], C.last = C["last-child"], C.nth = C["nth-child"], C.eq = C.index;
  var w = s.propertyOperators = {
      "*=": function (e, t) {
        return t;
      },
      "^=": function (e, t) {
        return "^" + t;
      },
      "$=": function (e, t) {
        return e + "$";
      },
      "~=": function (e, t) {
        return "(?:^|[ \\t\\r\\n\\f])" + t + "(?:$|[ \\t\\r\\n\\f])";
      },
      "|=": function (e, t) {
        return "(?:^|\\|)" + t + "(?:$|\\|)";
      },
      "/=": function (e, t) {
        return e;
      }
    }, E = Array.slice || function (e) {
      return Array.prototype.slice.call(e);
    };
  try {
    E(scene.sceneElement.childNodes);
  } catch (e) {
    E = function (e) {
      if (e instanceof Array)
        return e;
      for (var t = e.length, i = new Array(t); t--;)
        i[t] = e[t];
      return i;
    };
  }
  s.toArray = E;
  var B = 1;
  s.getUid = function (e) {
    return e.__slyUid || (e.__slyUid = B++);
  };
  var x = {};
  s.parseNth = function (e) {
    if (x[e])
      return x[e];
    var t = e.match(/^([+-]?\d*)?([a-z]+)?([+-]?\d*)?$/);
    if (!t)
      return !1;
    var i = parseInt(t[1], 10), n = (parseInt(t[3], 10) || 0) - 1;
    if (i = isNaN(i) ? 1 : i) {
      for (; n < 1;)
        n += i;
      for (; n >= i;)
        n -= i;
    }
    switch (t[2]) {
    case "n":
      t = {
        a: i,
        b: n,
        special: "n"
      };
      break;
    case "odd":
      t = {
        a: 2,
        b: 0,
        special: "n"
      };
      break;
    case "even":
      t = {
        a: 2,
        b: 1,
        special: "n"
      };
      break;
    case "first":
      t = {
        a: 0,
        special: "index"
      };
      break;
    case "last":
      t = { special: "last-child" };
      break;
    case "only":
      t = { special: "only-child" };
      break;
    default:
      t = {
        a: i ? i - 1 : n,
        special: "index"
      };
    }
    return x[e] = t;
  }, s.escapeRegExp = function (e) {
    return e.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
  }, s.generise = function (e) {
    s[e] = function (t) {
      var i = s(t);
      return i[e].apply(i, Array.prototype.slice.call(arguments, 1));
    };
  };
  for (var P = [
        "parse",
        "queryAll",
        "querySingle",
        "match",
        "filter"
      ], S = 0; P[S]; S++)
    s.generise(P[S]);
  s.recompile(), r.prototype.queryCount = function (e) {
    var t = s.queryAll(e, this);
    return t ? t.length : 0;
  }, r.prototype.queryAll = function (e) {
    return s.queryAll(e, this);
  }, r.prototype.querySingle = function (e) {
    var t = s.querySingle(e, this);
    return t || null;
  }, r.prototype.matches = function (e) {
    return s.match(e, this);
  }, r.prototype.filtered = function (e) {
    return 1 === s.filter(e, [this]).length;
  }, e.exports = s;
}
