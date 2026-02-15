/**
 * Webpack Module #71
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(27) /* uncurryThis */,
      a = n(361) /* module_361 */,
      r = n(92) /* classof */,
      s = n(62) /* requireObjectCoercible */,
      l = n(362) /* module_362 */,
      c = i("".indexOf);
    o(
      { target: "String", proto: !0, forced: !l("includes") },
      {
        includes: function (e) {
          return !!~c(
            s(r(this)),
            s(a(e)),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  }