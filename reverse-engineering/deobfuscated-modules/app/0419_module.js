/**
 * Webpack Module #419
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GGY = require(251) /* Exports_GGY */.IteratorPrototype,
      i = require(136) /* module_136 */,
      a = require(174) /* module_174 */,
      setToStringTag = require(137) /* setToStringTag */,
      iteratorPrototype = require(203) /* iteratorPrototype */,
      l = function () {
        return this;
      };
    exports.exports = function (e, t, n, c) {
      var d = t + " Iterator";
      return (
        (e.prototype = i(GGY, { next: a(+!c, n) })),
        setToStringTag(e, d, false, true),
        (iteratorPrototype[d] = l),
        e
      );
    };
  }