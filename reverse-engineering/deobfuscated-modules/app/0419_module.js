/**
 * Webpack Module #419
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(251) /* Exports_GGY */.IteratorPrototype,
      i = require(136) /* module_136 */,
      a = require(174) /* module_174 */,
      r = require(137) /* module_137 */,
      s = require(203) /* module_203 */,
      l = function () {
        return this;
      };
    exports.exports = function (e, t, n, c) {
      var d = t + " Iterator";
      return (
        (e.prototype = i(o, { next: a(+!c, n) })),
        r(e, d, false, true),
        (s[d] = l),
        e
      );
    };
  }