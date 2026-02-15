/**
 * Module 1424
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
  function r(e, t, i) {
    this.type = e, this.number = t, this.pdfobject = i;
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.write = function (e) {
    e.write(this.number), e.write(" "), e.write(this.type), e.write(" "), e.write("obj"), e.writeln(), this.pdfobject.write(e), e.writeln(), e.write("endobj");
  }, r.prototype.equals = function (e) {
    return e instanceof r && this.getPDFObject().equals(e.getPDFObject());
  }, r.prototype.getPDFObject = function () {
    return this.pdfobject;
  }, exports.exports = r;
}
