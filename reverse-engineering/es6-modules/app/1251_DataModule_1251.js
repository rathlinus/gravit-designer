/**
 * Webpack Module #1251
 * Type: unknown
 */

function (exports, module) {
  function n(t) {
    return (
      (exports.exports = n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      (exports.exports.__esModule = true),
      (exports.exports.default = exports.exports),
      n(t)
    );
  }
  ((exports.exports = n),
    (exports.exports.__esModule = true),
    (exports.exports.default = exports.exports));
}
