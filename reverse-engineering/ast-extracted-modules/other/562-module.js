/**
 * Module 562
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
  function i(e, t) {
    this._data = e, this._file = t;
  }
  i.prototype._file = null, i.prototype._data = null, i.prototype.clone = function () {
    var e = Object.create(Object.getPrototypeOf(this));
    return e._data = this._data, e._file = this._file, e;
  }, i.prototype.parse = function (e, t) {
    throw new Error("Not implemented");
  }, i.prototype._getReference = function (e) {
    return this._file.getReference(e);
  }, e.exports = i;
}
