/**
 * Webpack Module #134
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i = require(25) /* module_25 */,
      a = require(223) /* module_223 */,
      r = require(222) /* module_222 */.f,
      s = require(117) /* module_117 */,
      l = require(62) /* module_62 */,
      c = require(361) /* module_361 */,
      d = require(92) /* module_92 */,
      u = require(362) /* module_362 */,
      p = require(74) /* module_74 */,
      g = a("".slice),
      h = Math.min,
      f = u("startsWith");
    i(
      {
        target: "String",
        proto: true,
        forced:
          !!(
            p ||
            f ||
            ((o = r(String.prototype, "startsWith")), !o || o.writable)
          ) && !f,
      },
      {
        startsWith: function (e) {
          var t = l(d(this));
          c(e);
          var n = s(h(arguments.length > 1 ? arguments[1] : undefined, t.length)),
            o = l(e);
          return g(t, n, n + o.length) === o;
        },
      }
    );
  }