/**
 * Webpack Module #189
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(152) /* module_152 */,
      i = require(427) /* module_427 */,
      a = require(429) /* module_429 */,
      r = require(131) /* module_131 */,
      isCallable = require(29) /* isCallable */,
      uncurryThis = require(27) /* uncurryThis */,
      tryCall = require(21) /* tryCall */,
      d = o.aTypedArray,
      u = o.exportTypedArrayMethod,
      p = uncurryThis("".slice);
    u(
      "fill",
      function (e) {
        var t = arguments.length;
        d(this);
        var n = "Big" === p(r(this), 0, 3) ? a(e) : +e;
        return isCallable(
          i,
          this,
          n,
          t > 1 ? arguments[1] : undefined,
          t > 2 ? arguments[2] : undefined
        );
      },
      tryCall(function () {
        var e = 0;
        return (
          new Int8Array(2).fill({
            valueOf: function () {
              return e++;
            },
          }),
          1 !== e
        );
      })
    );
  }