/**
 * Webpack Module #299
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* uncurryThis */,
      i = require(35) /* anObject */,
      a = require(297) /* module_297 */,
      r = o(Function.toString);
    i(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return r(e);
      }),
      (exports.exports = a.inspectSource);
  }