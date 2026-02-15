/**
 * Module 1441
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
  var n = i(11), r = i(90), o = function (e) {
      this.references = e;
    };
  i(0).inherit(o, r), o.prototype.write = function (e) {
    this.offset = e.getPosition(), e.writeln("xref"), e.write(0), e.write(" "), e.writeln(this.references.length + 1), e.writeln("0000000000 65535 f "), n.each(this.references, function (t, i) {
      var n = "0000000000".substr(i.offset.toString().length) + i.offset;
      e.write(n), e.writeln(" 00000 n ");
    });
  }, e.exports = o;
}
