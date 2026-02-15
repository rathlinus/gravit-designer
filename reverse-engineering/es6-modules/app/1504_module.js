/**
 * Webpack Module #1504
 * Type: unknown
 */

function (exports, module, require) {
  var o = require(1505); /* module_1505 */
  ((exports.exports = function (e, t, n) {
    return (
      (t = o(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        : (e[t] = n),
      e
    );
  }),
    (exports.exports.__esModule = true),
    (exports.exports.default = exports.exports));
}
