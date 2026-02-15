/**
 * Webpack Module #242
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(46) /* module_46 */,
      a = o.document,
      r = i(a) && i(a.createElement);
    e.exports = function (e) {
      return r ? a.createElement(e) : {};
    };
  }