/**
 * Webpack Module #242
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(46) /* module_46 */,
      a = o.document,
      r = i(a) && i(a.createElement);
    exports.exports = function (e) {
      return r ? a.createElement(e) : {};
    };
  }