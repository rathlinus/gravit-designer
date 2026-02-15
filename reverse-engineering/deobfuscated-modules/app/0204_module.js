/**
 * Webpack Module #204
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(131) /* module_131 */,
      i = require(145) /* getSubstitution */,
      a = require(194) /* module_194 */,
      r = require(203) /* iteratorPrototype */,
      s = require(43) /* wellKnownSymbol */("iterator");
    exports.exports = function (e) {
      if (!a(e)) return i(e, s) || i(e, "@@iterator") || r[o(e)];
    };
  }