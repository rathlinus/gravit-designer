/**
 * Module 1427
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
  var n = i(0), r = i(90), o = i(197), a = function (e, t, i) {
      this.dictionary = new o(), this.dictionary.put("/Root", e), this.dictionary.put("/Info", t), this.dictionary.put("/Size", i.length + 1);
    };
  n.inherit(a, r), a.prototype.write = function (e) {
    e.writeln("trailer"), this.dictionary.write(e), e.writeln();
  }, e.exports = a;
}
