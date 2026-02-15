/**
 * Module 1442
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

function (e, t) {
  var i = function () {
  };
  i.prototype.version = 1.7, i.prototype.write = function (e) {
    e.write("%PDF-"), e.write(this.version), e.writeln(), e.writeBuffer(new Uint8Array([
      37,
      226,
      227,
      207,
      211
    ])), e.writeln();
  }, e.exports = i;
}
