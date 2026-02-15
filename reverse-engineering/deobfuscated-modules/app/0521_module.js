/**
 * Webpack Module #521
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(129) /* module_129 */.match(/firefox\/(\d+)/i);
    exports.exports = !!o && +o[1];
  }