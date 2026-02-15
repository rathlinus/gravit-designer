/**
 * Webpack Module #619
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var uncurryThis = require(27) /* uncurryThis */,
    DataModule_65 = require(65); /* DataModule_65 */
  exports.exports = function (e, t, n) {
    try {
      return uncurryThis(DataModule_65(Object.getOwnPropertyDescriptor(e, t)[n]));
    } catch (e) {}
  };
}
