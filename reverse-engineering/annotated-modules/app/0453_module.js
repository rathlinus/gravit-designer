/**
 * Webpack Module #453
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(37) /* module_37 */,
      i = n(46) /* module_46 */,
      a = n(202) /* module_202 */;
    e.exports = function (e, t) {
      if ((o(e), i(t) && t.constructor === e)) return t;
      var n = a.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  }