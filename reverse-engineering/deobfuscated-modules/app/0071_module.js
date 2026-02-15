/**
 * Webpack Module #71
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(27) /* uncurryThis */,
      a = require(361) /* module_361 */,
      r = require(92) /* classof */,
      s = require(62) /* requireObjectCoercible */,
      l = require(362) /* module_362 */,
      c = i("".indexOf);
    o(
      { target: "String", proto: true, forced: !l("includes") },
      {
        includes: function (e) {
          return !!~c(
            s(r(this)),
            s(a(e)),
            arguments.length > 1 ? arguments[1] : undefined
          );
        },
      }
    );
  }