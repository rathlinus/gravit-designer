/**
 * Webpack Module #454
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toLength = require(46) /* toLength */,
      i = require(116) /* module_116 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("match");
    exports.exports = function (e) {
      var t;
      return toLength(e) && (undefined !== (t = e[wellKnownSymbol]) ? !!t : "RegExp" === i(e));
    };
  }