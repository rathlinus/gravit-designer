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

function (e, t, i) {
  var n = i(438);
  function r() {
  }
  r.apply = function (e, t, i) {
    e.createSeriesFilter(this).addFilter("feGaussianBlur", { stdDeviation: n.pixelToStdDeviation(t.getProperty("r")) });
  }, e.exports = r;
}
