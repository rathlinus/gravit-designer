/**
 * Webpack Module #453
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toString_default = require(37) /* toString_default */,
      toLength = require(46) /* toLength */,
      DataModule_202 = require(202) /* DataModule_202 */;
    exports.exports = function (e, t) {
      if ((toString_default(e), toLength(t) && t.constructor === e)) return t;
      var n = DataModule_202.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  }