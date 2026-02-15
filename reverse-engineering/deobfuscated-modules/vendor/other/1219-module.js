/**
 * Module 1219
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
  var n = require(90) /* Container */, r = require(0) /* GObject */, o = function (e, t) {
      this._node = e, this._type = t;
    };
  r.inherit(o, n), o.Type = {
    BEGIN: 0,
    END: 1
  }, o.prototype.getType = function () {
    return this._type;
  }, o.prototype.isEmpty = function () {
    return true;
  }, o.prototype.equals = function (e) {
    return e instanceof o && this._node == e._node && this._type === e._type;
  }, exports.exports = o;
}
