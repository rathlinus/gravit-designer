/**
 * Webpack Module #134
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i = require(25) /* core_export */,
      a = require(223) /* module_223 */,
      r = require(222) /* objectGetOwnPropertyDescriptor */.f,
      s = require(117) /* toStringTagSupport */,
      l = require(62) /* requireObjectCoercible */,
      c = require(361) /* module_361 */,
      d = require(92) /* classof */,
      u = require(362) /* module_362 */,
      p = require(74) /* createNonEnumerableProperty */,
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