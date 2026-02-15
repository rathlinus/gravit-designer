/**
 * Webpack Module #204
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var DataModule_131 = require(131) /* DataModule_131 */,
    getSubstitution = require(145) /* getSubstitution */,
    a = require(194) /* module_194 */,
    iteratorPrototype = require(203) /* iteratorPrototype */,
    wellKnownSymbol = require(43)(/* wellKnownSymbol */ 'iterator');
  exports.exports = function (e) {
    if (!a(e))
      return (
        getSubstitution(e, wellKnownSymbol) ||
        getSubstitution(e, '@@iterator') ||
        iteratorPrototype[DataModule_131(e)]
      );
  };
}
