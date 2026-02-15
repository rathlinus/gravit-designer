/**
 * Module 1419
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
  var n = require(197) /* module */, r = require(437) /* module */, o = require(0) /* GObject */, a = require(440) /* module */, s = require(391) /* module */, l = function (e) {
      n.call(this), this._shading = e, this.put("/PatternType", 2), this.put("/Shading", new s(e)), this.put("/Matrix", new a(e.getPDFObject().transform).asArray());
    };
  o.inheritAndMix(l, r, [n]), l.prototype.getShading = function () {
    return this._shading.getPDFObject();
  }, l.prototype.equals = function (e) {
    return e instanceof l && this._shading.equals(e._shading);
  }, exports.exports = l;
}
