/**
 * Webpack Module #71
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      a = require(361) /* module_361 */,
      classof = require(92) /* classof */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      l = require(362) /* module_362 */,
      c = uncurryThis("".indexOf);
    core_export(
      { target: "String", proto: true, forced: !l("includes") },
      {
        includes: function (e) {
          return !!~c(
            requireObjectCoercible(classof(this)),
            requireObjectCoercible(a(e)),
            arguments.length > 1 ? arguments[1] : undefined
          );
        },
      }
    );
  }