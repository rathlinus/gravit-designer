/**
 * Module 1146
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
  var n = require(0) /* GObject */, r = require(197) /* module */, o = function (e, t) {
      r.call(this), this.put("/ShadingType", e), this.put("/ColorSpace", t.name);
    };
  n.inherit(o, r), o.prototype._hasTransparency = false, o.prototype.hasTransparency = function () {
    return this._hasTransparency;
  }, o.prototype.isValid = function () {
    return true;
  }, o.Type = {
    AXIAL: 2,
    RADIAL: 3
  }, exports.exports = o;
}
