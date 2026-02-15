/**
 * Webpack Module #453
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(37) /* toString_default */,
      i = require(46) /* toLength */,
      a = require(202) /* module_202 */;
    exports.exports = function (e, t) {
      if ((o(e), i(t) && t.constructor === e)) return t;
      var n = a.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  }