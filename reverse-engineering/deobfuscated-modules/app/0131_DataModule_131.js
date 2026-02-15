/**
 * Webpack Module #131
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(622) /* stub_requires_43 */,
      anObject = require(35) /* anObject */,
      DataModule_116 = require(116) /* DataModule_116 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("toStringTag"),
      s = Object,
      l =
        "Arguments" ===
        DataModule_116(
          (function () {
            return arguments;
          })()
        );
    exports.exports = o
      ? DataModule_116
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
              })((t = s(e)), wellKnownSymbol))
            ? n
            : l
            ? DataModule_116(t)
            : "Object" === (o = DataModule_116(t)) && anObject(t.callee)
            ? "Arguments"
            : o;
        };
  }