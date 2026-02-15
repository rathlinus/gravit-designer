/**
 * Webpack Module #131
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(622) /* module_622 */,
      i = n(35) /* module_35 */,
      a = n(116) /* module_116 */,
      r = n(43) /* module_43 */("toStringTag"),
      s = Object,
      l =
        "Arguments" ===
        a(
          (function () {
            return arguments;
          })()
        );
    e.exports = o
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