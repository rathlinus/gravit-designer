/**
 * Webpack Module #299
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* uncurryThis */,
      i = n(35) /* anObject */,
      a = n(297) /* DataModule_297 */,
      r = o(Function.toString);
    i(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return r(e);
      }),
      (e.exports = a.inspectSource);
  }