/**
 * Webpack Module #175
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(619) /* module_619 */,
      i = n(46) /* toLength */,
      a = n(92) /* classof */,
      r = n(620) /* module_620 */;
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = o(Object.prototype, "__proto__", "set"))(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, o) {
              return (
                a(n), r(o), i(n) ? (t ? e(n, o) : (n.__proto__ = o), n) : n
              );
            };
          })()
        : void 0);
  }