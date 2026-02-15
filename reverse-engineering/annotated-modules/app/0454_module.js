/**
 * Webpack Module #454
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(46) /* toLength */,
      i = n(116) /* module_116 */,
      a = n(43) /* wellKnownSymbol */("match");
    e.exports = function (e) {
      var t;
      return o(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" === i(e));
    };
  }