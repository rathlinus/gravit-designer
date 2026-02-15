/**
 * Module 513
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
  var n = require(11) /* GUtil */;
  function r(e) {
    this._uid = e || n.uuid();
  }
  r.prototype._uid = null, r.prototype.isEqual = function (e) {
    return this._uid === e._uid;
  }, r.prototype.toString = function () {
    return this._uid.toString();
  }, exports.exports = r;
}
