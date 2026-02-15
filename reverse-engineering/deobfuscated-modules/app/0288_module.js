/**
 * Webpack Module #288
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var anObject = require(35) /* anObject */,
      toLength = require(46) /* toLength */,
      a = require(175) /* module_175 */;
    exports.exports = function (e, t, n) {
      var r, s;
      return (
        a &&
          anObject((r = t.constructor)) &&
          r !== n &&
          toLength((s = r.prototype)) &&
          s !== n.prototype &&
          a(e, s),
        e
      );
    };
  }