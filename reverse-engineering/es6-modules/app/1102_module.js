/**
 * Webpack Module #1102
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o,
    i = require(786) /* module_786 */,
    globalThis = require(23) /* globalThis */,
    uncurryThis = require(27) /* uncurryThis */,
    s = require(232) /* module_232 */,
    l = require(558) /* polyfill_Object_getOwnPropertyNames */,
    c = require(1106) /* module_1106 */,
    d = require(1107) /* module_1107 */,
    toLength = require(46) /* toLength */,
    internalState = require(80) /* internalState */.enforce,
    tryCall = require(21) /* tryCall */,
    h = require(452) /* module_452 */,
    f = Object,
    m = Array.isArray,
    y = f.isExtensible,
    v = f.isFrozen,
    _ = f.isSealed,
    b = f.freeze,
    w = f.seal,
    C = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis,
    x = function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : undefined);
      };
    },
    S = c('WeakMap', x, d),
    E = S.prototype,
    A = uncurryThis(E.set);
  if (h)
    if (C) {
      ((o = d.getConstructor(x, 'WeakMap', true)), l.enable());
      var T = uncurryThis(E.delete),
        G = uncurryThis(E.has),
        P = uncurryThis(E.get);
      s(E, {
        delete: function (e) {
          if (toLength(e) && !y(e)) {
            var module = internalState(this);
            return (
              module.frozen || (module.frozen = new o()),
              T(this, e) || module.frozen.delete(e)
            );
          }
          return T(this, e);
        },
        has: function (e) {
          if (toLength(e) && !y(e)) {
            var module = internalState(this);
            return (module.frozen || (module.frozen = new o()), G(this, e) || module.frozen.has(e));
          }
          return G(this, e);
        },
        get: function (e) {
          if (toLength(e) && !y(e)) {
            var module = internalState(this);
            return (
              module.frozen || (module.frozen = new o()),
              G(this, e) ? P(this, e) : module.frozen.get(e)
            );
          }
          return P(this, e);
        },
        set: function (e, t) {
          if (toLength(e) && !y(e)) {
            var require = internalState(this);
            (require.frozen || (require.frozen = new o()),
              G(this, e) ? A(this, e, t) : require.frozen.set(e, t));
          } else A(this, e, t);
          return this;
        },
      });
    } else
      i &&
        tryCall(function () {
          var e = b([]);
          return (A(new S(), e, 1), !v(e));
        }) &&
        s(E, {
          set: function (e, t) {
            var n;
            return (m(e) && (v(e) ? (n = b) : _(e) && (n = w)), A(this, e, t), n && n(e), this);
          },
        });
}
