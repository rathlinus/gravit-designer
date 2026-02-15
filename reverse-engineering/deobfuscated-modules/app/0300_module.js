/**
 * Webpack Module #300
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(296) /* module_296 */,
      i = require(258) /* module_258 */,
      a = o("keys");
    exports.exports = function (e) {
      return a[e] || (a[e] = i(e));
    };
  }