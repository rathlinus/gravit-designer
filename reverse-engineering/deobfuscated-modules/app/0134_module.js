/**
 * Webpack Module #134
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      core_export = require(25) /* core_export */,
      DataModule_223 = require(223) /* DataModule_223 */,
      objectGetOwnPropertyDescriptor = require(222) /* objectGetOwnPropertyDescriptor */.f,
      toStringTagSupport = require(117) /* toStringTagSupport */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      DataModule_361 = require(361) /* DataModule_361 */,
      classof = require(92) /* classof */,
      u = require(362) /* module_362 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      g = DataModule_223("".slice),
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
          DataModule_361(e);
          var n = toStringTagSupport(h(arguments.length > 1 ? arguments[1] : undefined, t.length)),
            o = requireObjectCoercible(e);
          return g(t, n, n + o.length) === o;
        },
      }
    );
  }