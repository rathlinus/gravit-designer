/**
 * Webpack Module #288
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(35) /* anObject */,
      i = require(46) /* toLength */,
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