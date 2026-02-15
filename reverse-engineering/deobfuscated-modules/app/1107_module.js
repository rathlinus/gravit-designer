/**
 * Webpack Module #1107
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      i = require(232) /* module_232 */,
      a = require(558) /* polyfill_Object_getOwnPropertyNames */.getWeakData,
      r = require(146) /* module_146 */,
      toString_default = require(37) /* toString_default */,
      l = require(194) /* module_194 */,
      toLength = require(46) /* toLength */,
      d = require(121) /* module_121 */,
      u = require(349) /* module_349 */,
      p = require(61) /* module_61 */,
      internalState = require(80) /* internalState */,
      h = internalState.set,
      f = internalState.getterFor,
      m = u.find,
      y = u.findIndex,
      v = uncurryThis([].splice),
      _ = 0,
      b = function (e) {
        return e.frozen || (e.frozen = new w());
      },
      w = function () {
        this.entries = [];
      },
      C = function (e, t) {
        return m(e.entries, function (e) {
          return e[0] === t;
        });
      };
    (w.prototype = {
      get: function (e) {
        var t = C(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!C(this, e);
      },
      set: function (e, t) {
        var n = C(this, e);
        n ? (n[1] = t) : this.entries.push([e, t]);
      },
      delete: function (e) {
        var t = y(this.entries, function (t) {
          return t[0] === e;
        });
        return ~t && v(this.entries, t, 1), !!~t;
      },
    }),
      (exports.exports = {
        getConstructor: function (e, t, n, uncurryThis) {
          var u = e(function (e, i) {
              r(e, internalState),
                h(e, { type: t, id: _++, frozen: null }),
                l(i) || d(i, e[uncurryThis], { that: e, AS_ENTRIES: n });
            }),
            internalState = u.prototype,
            m = f(t),
            y = function (e, t, n) {
              var uncurryThis = m(e),
                i = a(toString_default(t), true);
              return true === i ? b(uncurryThis).set(t, n) : (i[uncurryThis.id] = n), e;
            };
          return (
            i(internalState, {
              delete: function (e) {
                var t = m(this);
                if (!toLength(e)) return false;
                var n = a(e);
                return true === n
                  ? b(t).delete(e)
                  : n && p(n, t.id) && delete n[t.id];
              },
              has: function (e) {
                var t = m(this);
                if (!toLength(e)) return false;
                var n = a(e);
                return true === n ? b(t).has(e) : n && p(n, t.id);
              },
            }),
            i(
              internalState,
              n
                ? {
                    get: function (e) {
                      var t = m(this);
                      if (toLength(e)) {
                        var n = a(e);
                        if (true === n) return b(t).get(e);
                        if (n) return n[t.id];
                      }
                    },
                    set: function (e, t) {
                      return y(this, e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return y(this, e, true);
                    },
                  }
            ),
            u
          );
        },
      });
  }