/**
 * Webpack Module #302
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      tryCall = require(21) /* tryCall */,
      anObject = require(35) /* anObject */,
      DataModule_131 = require(131) /* DataModule_131 */,
      s = require(110) /* module_110 */,
      l = require(299) /* module_299 */,
      c = function () {},
      d = s("Reflect", "construct"),
      u = /^\s*(?:class|function)\b/,
      p = uncurryThis(u.exec),
      g = !u.test(c),
      h = function (e) {
        if (!anObject(e)) return false;
        try {
          return d(c, [], e), true;
        } catch (e) {
          return false;
        }
      },
      f = function (e) {
        if (!anObject(e)) return false;
        switch (DataModule_131(e)) {
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
        tryCall(function () {
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