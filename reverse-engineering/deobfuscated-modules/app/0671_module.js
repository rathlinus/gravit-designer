/**
 * Webpack Module #671
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(349) /* module_349 */.forEach,
      i = n(350) /* module_350 */("forEach");
    e.exports = i
      ? [].forEach
      : function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : undefined);
        };
  }