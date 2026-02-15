/**
 * Module 560
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
  var n = require(1110) /* module */, r = require(90) /* Container */, o = require(0) /* GObject */, a = function (e) {
      this.value = e;
    };
  o.inherit(a, r), a.prototype.equals = function (e) {
    return this._wrap().equals(e);
  }, a.prototype.isEmpty = function () {
    return this._wrap().isEmpty();
  }, a.prototype.getValue = function () {
    return this.value;
  }, a.prototype._wrap = function () {
    var e = this.value;
    return e instanceof r || (e = new n(e)), e;
  }, a.prototype.write = function (e) {
    this._wrap().write(e);
  }, a.Null = function () {
    a.call(this, new r());
  }, o.inherit(a.Null, a), exports.exports = a;
}
