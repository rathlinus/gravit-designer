/**
 * Webpack Module #120
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(401) /* module_401 */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */;
    exports.exports = function (e, t, n) {
      return (
        n.get && o(n.get, t, { getter: true }),
        n.set && o(n.set, t, { setter: true }),
        createPropertyDescriptor.f(e, t, n)
      );
    };
  }