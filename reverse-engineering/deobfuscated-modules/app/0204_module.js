/**
 * Webpack Module #204
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(131) /* module_131 */,
      getSubstitution = require(145) /* getSubstitution */,
      a = require(194) /* module_194 */,
      iteratorPrototype = require(203) /* iteratorPrototype */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("iterator");
    exports.exports = function (e) {
      if (!a(e)) return getSubstitution(e, wellKnownSymbol) || getSubstitution(e, "@@iterator") || iteratorPrototype[o(e)];
    };
  }