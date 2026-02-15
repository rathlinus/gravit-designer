/**
 * Webpack Module #1106
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var core_export = require(25) /* core_export */,
    globalThis = require(23) /* globalThis */,
    uncurryThis = require(27) /* uncurryThis */,
    DataModule_277 = require(277) /* DataModule_277 */,
    defineBuiltIn = require(79) /* defineBuiltIn */,
    l = require(558) /* polyfill_Object_getOwnPropertyNames */,
    DataModule_121 = require(121) /* DataModule_121 */,
    DataModule_146 = require(146) /* DataModule_146 */,
    anObject = require(35) /* anObject */,
    p = require(194) /* module_194 */,
    toLength = require(46) /* toLength */,
    tryCall = require(21) /* tryCall */,
    f = require(343) /* module_343 */,
    setToStringTag = require(137) /* setToStringTag */,
    y = require(288); /* module_288 */
  exports.exports = function (e, t, n) {
    var v = -1 !== e.indexOf('Map'),
      _ = -1 !== e.indexOf('Weak'),
      b = v ? 'set' : 'add',
      w = globalThis[e],
      C = w && w.prototype,
      x = w,
      S = {},
      E = function (e) {
        var t = uncurryThis(C[e]);
        defineBuiltIn(
          C,
          e,
          'add' === e
            ? function (e) {
                return (t(this, 0 === e ? 0 : e), this);
              }
            : 'delete' === e
              ? function (e) {
                  return !(_ && !toLength(e)) && t(this, 0 === e ? 0 : e);
                }
              : 'get' === e
                ? function (e) {
                    return _ && !toLength(e) ? undefined : t(this, 0 === e ? 0 : e);
                  }
                : 'has' === e
                  ? function (e) {
                      return !(_ && !toLength(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, n) {
                      return (t(this, 0 === e ? 0 : e, n), this);
                    }
        );
      };
    if (
      DataModule_277(
        e,
        !anObject(w) ||
          !(
            _ ||
            (C.forEach &&
              !tryCall(function () {
                new w().entries().next();
              }))
          )
      )
    )
      ((x = n.getConstructor(t, e, v, b)), l.enable());
    else if (DataModule_277(e, true)) {
      var A = new x(),
        T = A[b](_ ? {} : -0, 1) !== A,
        G = tryCall(function () {
          A.has(1);
        }),
        P = f(function (e) {
          new w(e);
        }),
        D =
          !_ &&
          tryCall(function () {
            for (var e = new w(), t = 5; t--; ) e[b](t, t);
            return !e.has(-0);
          });
      (P ||
        (((x = t(function (e, t) {
          DataModule_146(e, C);
          var n = y(new w(), e, x);
          return (p(t) || DataModule_121(t, n[b], { that: n, AS_ENTRIES: v }), n);
        })).prototype = C),
        (C.constructor = x)),
        (G || D) && (E('delete'), E('has'), v && E('get')),
        (D || T) && E(b),
        _ && C.clear && delete C.clear);
    }
    return (
      (S[e] = x),
      core_export({ global: true, constructor: true, forced: x !== w }, S),
      setToStringTag(x, e),
      _ || n.setStrong(x, e, v),
      x
    );
  };
}
