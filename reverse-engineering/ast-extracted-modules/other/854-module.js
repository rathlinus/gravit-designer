/**
 * Module 854
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
  var n = i(90), r = function (e) {
      this._path = e;
    };
  i(0).inherit(r, n), r.prototype.getPath = function () {
    return this._path;
  }, r.prototype.write = function (e) {
    this._path && (this._path.write(e), e.writeln(), e.write("W n"));
  }, e.exports = r;
}
