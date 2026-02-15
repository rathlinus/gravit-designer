/**
 * Webpack Module #299
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      anObject = require(35) /* anObject */,
      a = require(297) /* module_297 */,
      r = uncurryThis(Function.toString);
    anObject(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return r(e);
      }),
      (exports.exports = a.inspectSource);
  }