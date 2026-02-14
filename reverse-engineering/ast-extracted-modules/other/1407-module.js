/**
 * Module 1407
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
  var n = i(90), r = i(440), o = function (e) {
      this.resource = e;
    };
  i(0).inherit(o, n), o.prototype.getGState = function () {
    return this.resource.getPDFObject();
  }, o.prototype.write = function (e) {
    var t = this.getGState()._origin;
    t && (new r(t.inverted()).write(e), e.writeln()), e.write("/"), e.write(this.resource.getName()), e.writeSpace(), e.write("gs"), t && (e.writeln(), new r(t).write(e));
  }, e.exports = o;
}
