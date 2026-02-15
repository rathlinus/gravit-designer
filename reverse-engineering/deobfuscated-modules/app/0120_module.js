/**
 * Webpack Module #120
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(401) /* module_401 */,
      i = n(88) /* module_88 */;
    e.exports = function (e, t, n) {
      return (
        n.get && o(n.get, t, { getter: true }),
        n.set && o(n.set, t, { setter: true }),
        i.f(e, t, n)
      );
    };
  }