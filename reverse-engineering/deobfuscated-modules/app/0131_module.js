/**
 * Webpack Module #131
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(622) /* module_622 */,
      i = require(35) /* module_35 */,
      a = require(116) /* module_116 */,
      r = require(43) /* module_43 */("toStringTag"),
      s = Object,
      l =
        "Arguments" ===
        a(
          (function () {
            return arguments;
          })()
        );
    exports.exports = o
      ? a
      : function (e) {
          var t, n, o;
          return undefined === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = s(e)), r))
            ? n
            : l
            ? a(t)
            : "Object" === (o = a(t)) && i(t.callee)
            ? "Arguments"
            : o;
        };
  }