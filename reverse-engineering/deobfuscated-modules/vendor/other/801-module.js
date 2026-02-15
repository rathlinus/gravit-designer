/**
 * Module 801
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
  var n = require(1119) /* module */;
  function r() {
    this._decimalPlacesPrecision = 3;
  }
  r.prototype._decimalPlacesPrecision = 3, r.prototype.setDecimalPlacesPrecision = function (e) {
    this._decimalPlacesPrecision = e;
  }, r.prototype.formatMatrix = function (e) {
    return this.formatNumber(e);
  }, r.prototype.formatNumber = function (e) {
    return n.round(e, this._decimalPlacesPrecision);
  }, exports.exports = new r();
}
