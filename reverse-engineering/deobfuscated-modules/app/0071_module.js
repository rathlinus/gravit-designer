/**
 * Webpack Module #71
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(27) /* module_27 */,
      a = require(361) /* module_361 */,
      r = require(92) /* module_92 */,
      s = require(62) /* module_62 */,
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