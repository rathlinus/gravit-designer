/**
 * Webpack Module #672
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(348) /* module_348 */,
      i = n(302) /* module_302 */,
      a = n(46) /* module_46 */,
      r = n(43) /* module_43 */("species"),
      s = Array;
    e.exports = function (e) {
      var t;
      return (
        o(e) &&
          ((t = e.constructor),
          ((i(t) && (t === s || o(t.prototype))) ||
            (a(t) && null === (t = t[r]))) &&
            (t = undefined)),
        undefined === t ? s : t
      );
    };
  }