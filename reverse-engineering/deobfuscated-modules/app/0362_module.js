/**
 * Webpack Module #362
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(43) /* module_43 */("match");
    exports.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[o] = false), "/./"[e](t);
        } catch (e) {}
      }
      return false;
    };
  }