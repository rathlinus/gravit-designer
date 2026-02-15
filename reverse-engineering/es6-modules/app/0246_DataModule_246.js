/**
 * Webpack Module #246
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    DataModule_65 = require(65) /* DataModule_65 */,
    toString_default = require(37) /* toString_default */,
    DataModule_185 = require(185) /* DataModule_185 */,
    DataModule_204 = require(204) /* DataModule_204 */,
    l = TypeError;
  exports.exports = function (e, t) {
    var n = arguments.length < 2 ? DataModule_204(e) : t;
    if (DataModule_65(n)) return toString_default(isCallable(n, e));
    throw new l(DataModule_185(e) + ' is not iterable');
  };
}
