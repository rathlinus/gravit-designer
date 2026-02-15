/**
 * Webpack Module #288
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(35) /* module_35 */,
      i = n(46) /* module_46 */,
      a = n(175) /* module_175 */;
    e.exports = function (e, t, n) {
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