/**
 * Module 800
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
  var n = i(0), r = i(90), o = i(197), a = function (e) {
      this.filter = e, this.dictionary = new o();
    };
  n.inherit(a, r), a.prototype.getFilter = function () {
    return this.filter;
  }, a.prototype.putDictionary = function (e, t) {
    this.dictionary.put(e, t);
  }, a.prototype.length = function () {
    return this.filter.length();
  }, a.prototype.write = function (e) {
    this.putDictionary("/Length", this.length()), this.filter.name && this.putDictionary("/Filter", "/" + this.filter.name), this.dictionary.write(e), e.writeln("stream"), this.filter.write(e), e.writeln(), e.write("endstream");
  }, e.exports = a;
}
