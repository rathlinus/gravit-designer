/**
 * Webpack Module #120
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(401) /* module_401 */,
      i = require(88) /* module_88 */;
    exports.exports = function (e, t, n) {
      return (
        n.get && o(n.get, t, { getter: true }),
        n.set && o(n.set, t, { setter: true }),
        i.f(e, t, n)
      );
    };
  }