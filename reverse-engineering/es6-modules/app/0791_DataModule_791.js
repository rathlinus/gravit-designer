/**
 * Webpack Module #791
 * Type: unknown
 */

function (exports, module, require) {
  (function (t) {
    var BluebirdPromise;
    ('function' != typeof t.Promise
      ? ((BluebirdPromise = require(1114)) /* BluebirdPromise */,
        Object.defineProperty(BluebirdPromise, 'polyfilled', {
          value: true,
          writable: false,
          enumerable: false,
        }))
      : (BluebirdPromise = t.Promise),
      (exports.exports = BluebirdPromise));
  }).call(this, require(109) /* module_109 */);
}
