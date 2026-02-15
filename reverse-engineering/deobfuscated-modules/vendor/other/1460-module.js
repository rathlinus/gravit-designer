/**
 * Module 1460
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  var n = require(438) /* module */;
  function r() {
  }
  r.apply = function (e, t, i) {
    e.createSeriesFilter(this).addFilter("feGaussianBlur", { stdDeviation: n.pixelToStdDeviation(t.getProperty("r")) });
  }, exports.exports = r;
}
