/**
 * Webpack Module #1102
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i = require(786) /* module_786 */,
      a = require(23) /* module_23 */,
      r = require(27) /* module_27 */,
      s = require(232) /* module_232 */,
      l = require(558) /* module_558 */,
      c = require(1106) /* module_1106 */,
      d = require(1107) /* module_1107 */,
      u = require(46) /* module_46 */,
      p = require(80) /* module_80 */.enforce,
      g = require(21) /* module_21 */,
      h = require(452) /* module_452 */,
      f = Object,
      m = Array.isArray,
      y = f.isExtensible,
      v = f.isFrozen,
      _ = f.isSealed,
      b = f.freeze,
      w = f.seal,
      C = !a.ActiveXObject && "ActiveXObject" in a,
      x = function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : undefined);
        };
      },
      S = c("WeakMap", x, d),
      E = S.prototype,
      A = r(E.set);
    if (h)
      if (C) {
        (o = d.getConstructor(x, "WeakMap", true)), l.enable();
        var T = r(E.delete),
          G = r(E.has),
          P = r(E.get);
        s(E, {
          delete: function (e) {
            if (u(e) && !y(e)) {
              var module = p(this);
              return (
                module.frozen || (module.frozen = new o()),
                T(this, e) || module.frozen.delete(e)
              );
            }
            return T(this, e);
          },
          has: function (e) {
            if (u(e) && !y(e)) {
              var module = p(this);
              return (
                module.frozen || (module.frozen = new o()), G(this, e) || module.frozen.has(e)
              );
            }
            return G(this, e);
          },
          get: function (e) {
            if (u(e) && !y(e)) {
              var module = p(this);
              return (
                module.frozen || (module.frozen = new o()),
                G(this, e) ? P(this, e) : module.frozen.get(e)
              );
            }
            return P(this, e);
          },
          set: function (e, t) {
            if (u(e) && !y(e)) {
              var require = p(this);
              require.frozen || (require.frozen = new o()),
                G(this, e) ? A(this, e, t) : require.frozen.set(e, t);
            } else A(this, e, t);
            return this;
          },
        });
      } else
        i &&
          g(function () {
            var e = b([]);
            return A(new S(), e, 1), !v(e);
          }) &&
          s(E, {
            set: function (e, t) {
              var n;
              return (
                m(e) && (v(e) ? (n = b) : _(e) && (n = w)),
                A(this, e, t),
                n && n(e),
                this
              );
            },
          });
  }