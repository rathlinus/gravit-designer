/**
 * Webpack Module #3
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(199) /* Exports_GURABLE */.PROPER,
      i = require(79) /* defineBuiltIn */,
      a = require(37) /* toString_default */,
      r = require(62) /* requireObjectCoercible */,
      s = require(21) /* tryCall */,
      l = require(460) /* regexpStickyHelpers */,
      c = RegExp.prototype,
      d = c.toString,
      u = s(function () {
        return "/a/b" !== d.call({ source: "a", flags: "b" });
      }),
      p = o && "toString" !== d.name;
    (u || p) &&
      i(
        c,
        "toString",
        function () {
          var e = a(this);
          return "/" + r(e.source) + "/" + r(l(e));
        },
        { unsafe: true }
      );
  }