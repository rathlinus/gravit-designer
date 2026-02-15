/**
 * Webpack Module #615
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(110) /* module_110 */,
    uncurryThis = require(27) /* uncurryThis */,
    a = require(243) /* module_243 */,
    r = require(404) /* module_404 */,
    toString_default = require(37) /* toString_default */,
    l = uncurryThis([].concat);
  exports.exports =
    o('Reflect', 'ownKeys') ||
    function (e) {
      var t = a.f(toString_default(e)),
        n = r.f;
      return n ? l(t, n(e)) : t;
    };
}
