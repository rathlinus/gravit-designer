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
      s = require(29) /* module_29 */,
      l = require(27) /* module_27 */,
      c = require(21) /* module_21 */,
      d = o.aTypedArray,
      u = o.exportTypedArrayMethod,
      p = l("".slice);
    u(
      "fill",
      function (e) {
        var t = arguments.length;
        d(this);
        var n = "Big" === p(r(this), 0, 3) ? a(e) : +e;
        return s(
          i,
          this,
          n,
          t > 1 ? arguments[1] : undefined,
          t > 2 ? arguments[2] : undefined
        );
      },
      c(function () {
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