/**
 * Webpack Module #3
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(199) /* Exports_GURABLE */.PROPER,
      i = n(79) /* defineBuiltIn */,
      a = n(37) /* toString_default */,
      r = n(62) /* requireObjectCoercible */,
      s = n(21) /* tryCall */,
      l = n(460) /* regexpStickyHelpers */,
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
        { unsafe: !0 }
      );
  }