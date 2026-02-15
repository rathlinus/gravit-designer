/**
 * Webpack Module #109
 * Type: unknown
 */

function (exports, module) {
  var n;
  n = (function () {
    return this;
  })();
  try {
    n = n || new Function('return this')();
  } catch (e) {
    'object' == typeof window && (n = window);
  }
  exports.exports = n;
}
