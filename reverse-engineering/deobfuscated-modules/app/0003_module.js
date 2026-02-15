/**
 * Webpack Module #3
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(199) /* Exports_GURABLE */.PROPER,
      i = require(79) /* module_79 */,
      a = require(37) /* module_37 */,
      r = require(62) /* module_62 */,
      s = require(21) /* module_21 */,
      l = require(460) /* module_460 */,
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