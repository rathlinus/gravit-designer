/**
 * Webpack Module #614
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var isCallable = require(29) /* isCallable */,
      anObject = require(35) /* anObject */,
      toLength = require(46) /* toLength */,
      r = TypeError;
    exports.exports = function (e, t) {
      var n, s;
      if ("string" === t && anObject((n = e.toString)) && !toLength((s = isCallable(n, e)))) return s;
      if (anObject((n = e.valueOf)) && !toLength((s = isCallable(n, e)))) return s;
      if ("string" !== t && anObject((n = e.toString)) && !toLength((s = isCallable(n, e)))) return s;
      throw new r("Can't convert object to primitive value");
    };
  }