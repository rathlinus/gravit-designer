/**
 * Module 391
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
  var n = require(90) /* Container */;
  function r(e) {
    this.pdfIndirectObject = e;
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.write = function (e) {
    e.write(this.getPDFIndirectObject().number), e.write(" "), e.write(this.getPDFIndirectObject().type), e.write(" R");
  }, r.prototype.getPDFIndirectObject = function () {
    return this.pdfIndirectObject;
  }, r.prototype.getPDFObject = function () {
    return this.getPDFIndirectObject().getPDFObject();
  }, exports.exports = r;
}
