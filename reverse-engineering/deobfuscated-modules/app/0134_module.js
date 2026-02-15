/**
 * Webpack Module #134
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      core_export = require(25) /* core_export */,
      a = require(223) /* module_223 */,
      objectGetOwnPropertyDescriptor = require(222) /* objectGetOwnPropertyDescriptor */.f,
      toStringTagSupport = require(117) /* toStringTagSupport */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      c = require(361) /* module_361 */,
      classof = require(92) /* classof */,
      u = require(362) /* module_362 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      g = a("".slice),
      h = Math.min,
      f = u("startsWith");
    core_export(
      {
        target: "String",
        proto: true,
        forced:
          !!(
            createNonEnumerableProperty ||
            f ||
            ((o = objectGetOwnPropertyDescriptor(String.prototype, "startsWith")), !o || o.writable)
          ) && !f,
      },
      {
        startsWith: function (e) {
          var t = requireObjectCoercible(classof(this));
          c(e);
          var n = toStringTagSupport(h(arguments.length > 1 ? arguments[1] : undefined, t.length)),
            o = requireObjectCoercible(e);
          return g(t, n, n + o.length) === o;
        },
      }
    );
  }