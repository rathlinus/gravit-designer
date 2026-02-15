/**
 * Webpack Module #258
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var uncurryThis = require(27) /* uncurryThis */,
    i = 0,
    a = Math.random(),
    r = uncurryThis((1).toString);
  exports.exports = function (e) {
    return 'Symbol(' + (undefined === e ? '' : e) + ')_' + r(++i + a, 36);
  };
}
