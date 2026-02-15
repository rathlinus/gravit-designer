/**
 * Webpack Module #1038
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(185) /* module_185 */,
      i = TypeError;
    exports.exports = function (e, t) {
      if (!delete e[t])
        throw new i("Cannot delete property " + o(t) + " of " + o(e));
    };
  }