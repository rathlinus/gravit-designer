/**
 * Module 1231
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
  var n = require(1232) /* module */, r = require(0) /* GObject */, o = require(197) /* module */;
  function a(e) {
    o.call(this), this.name = e, this._encoding = n.WINANSI;
  }
  r.inherit(a, o), a.prototype._encoding = null, a.prototype.encode = function (e, t) {
    return this._encoding.encode(e, t);
  }, a.prototype.equals = function (e) {
    return this.name === e.name;
  }, a.prototype.getName = function () {
    return this.name;
  }, a.prototype.toString = function () {
    return "[GPDFFont]";
  }, exports.exports = a;
}
