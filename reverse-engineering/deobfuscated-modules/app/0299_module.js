/**
 * Webpack Module #299
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      anObject = require(35) /* anObject */,
      DataModule_297 = require(297) /* DataModule_297 */,
      r = uncurryThis(Function.toString);
    anObject(DataModule_297.inspectSource) ||
      (DataModule_297.inspectSource = function (e) {
        return r(e);
      }),
      (exports.exports = DataModule_297.inspectSource);
  }