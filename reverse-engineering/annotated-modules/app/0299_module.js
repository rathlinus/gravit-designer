/**
 * Webpack Module #299
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* module_27 */,
      i = n(35) /* module_35 */,
      a = n(297) /* module_297 */,
      r = o(Function.toString);
    i(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return r(e);
      }),
      (e.exports = a.inspectSource);
  }