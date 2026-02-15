/**
 * Webpack Module #204
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(131) /* module_131 */,
      i = require(145) /* module_145 */,
      a = require(194) /* module_194 */,
      r = require(203) /* module_203 */,
      s = require(43) /* module_43 */("iterator");
    exports.exports = function (e) {
      if (!a(e)) return i(e, s) || i(e, "@@iterator") || r[o(e)];
    };
  }