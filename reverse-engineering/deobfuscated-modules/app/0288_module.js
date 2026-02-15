/**
 * Webpack Module #288
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(35) /* module_35 */,
      i = require(46) /* module_46 */,
      a = require(175) /* module_175 */;
    exports.exports = function (e, t, n) {
      var r, s;
      return (
        a &&
          o((r = t.constructor)) &&
          r !== n &&
          i((s = r.prototype)) &&
          s !== n.prototype &&
          a(e, s),
        e
      );
    };
  }