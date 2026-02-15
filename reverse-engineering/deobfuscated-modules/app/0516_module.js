/**
 * Webpack Module #516
 * Type: unknown
 */

function (exports, module) {
    var n = {}.toString;
    exports.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  }