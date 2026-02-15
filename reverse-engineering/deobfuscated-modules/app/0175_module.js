/**
 * Webpack Module #175
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(619) /* module_619 */,
      toLength = require(46) /* toLength */,
      classof = require(92) /* classof */,
      r = require(620) /* module_620 */;
    exports.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = false,
              n = {};
            try {
              (e = o(Object.prototype, "__proto__", "set"))(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, o) {
              return (
                classof(n), r(o), toLength(n) ? (t ? e(n, o) : (n.__proto__ = o), n) : n
              );
            };
          })()
        : undefined);
  }