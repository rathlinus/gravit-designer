/**
 * Webpack Module #458
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(21) /* module_21 */,
      i = n(23) /* module_23 */.RegExp;
    e.exports = o(function () {
      var e = i(".", "s");
      return !(e.dotAll && e.test("\n") && "s" === e.flags);
    });
  }