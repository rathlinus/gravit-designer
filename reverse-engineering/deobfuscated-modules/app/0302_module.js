/**
 * Webpack Module #302
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(21) /* module_21 */,
      a = require(35) /* module_35 */,
      r = require(131) /* module_131 */,
      s = require(110) /* module_110 */,
      l = require(299) /* module_299 */,
      c = function () {},
      d = s("Reflect", "construct"),
      u = /^\s*(?:class|function)\b/,
      p = o(u.exec),
      g = !u.test(c),
      h = function (e) {
        if (!a(e)) return false;
        try {
          return d(c, [], e), true;
        } catch (e) {
          return false;
        }
      },
      f = function (e) {
        if (!a(e)) return false;
        switch (r(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return g || !!p(u, l(e));
        } catch (e) {
          return true;
        }
      };
    (f.sham = true),
      (exports.exports =
        !d ||
        i(function () {
          var e;
          return (
            h(h.call) ||
            !h(Object) ||
            !h(function () {
              e = true;
            }) ||
            e
          );
        })
          ? f
          : h);
  }