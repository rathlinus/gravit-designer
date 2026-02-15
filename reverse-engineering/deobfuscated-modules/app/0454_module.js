/**
 * Webpack Module #454
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(46) /* toLength */,
      i = require(116) /* module_116 */,
      a = require(43) /* wellKnownSymbol */("match");
    exports.exports = function (e) {
      var t;
      return o(e) && (undefined !== (t = e[a]) ? !!t : "RegExp" === i(e));
    };
  }