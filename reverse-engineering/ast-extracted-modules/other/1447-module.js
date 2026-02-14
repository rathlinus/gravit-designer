/**
 * Module 1447
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
  var n = i(90), r = i(0), o = function (e, t) {
      this.fontResource = e, this.size = t;
    };
  r.inherit(o, n), o.prototype.equals = function (e) {
    return e instanceof o && e.fontResource.getFont().equals(this.fontResource.getFont()) && e.size === this.size;
  }, o.prototype.getFont = function () {
    return this.getFontResource().getFont();
  }, o.prototype.getFontResource = function () {
    return this.fontResource;
  }, o.prototype.write = function (e) {
    e.write("/"), e.write(this.fontResource.getName()), e.writeSpace(), e.write(this.size), e.writeSpace(), e.writeln("Tf");
  }, e.exports = o;
}
