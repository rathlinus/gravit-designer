/**
 * Webpack Module #1559
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(37) /* module_37 */,
      a = n(121) /* module_121 */,
      r = n(143) /* module_143 */,
      s = [].push;
    o(
      { target: "Iterator", proto: true, real: true },
      {
        toArray: function () {
          var e = [];
          return a(r(i(this)), s, { that: e, IS_RECORD: true }), e;
        },
      }
    );
  }