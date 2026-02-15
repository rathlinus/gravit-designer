/**
 * Module 1111
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
  var n = require(559) /* module */, r = require(0) /* GObject */, o = require(437) /* module */, a = require(390) /* module */, s = require(182) /* module */, l = function (e) {
      this._alpha = new n(e).getAlpha();
    };
  r.inheritAndMix(l, o, [a]), l.prototype.getAlpha = function () {
    return this._alpha;
  }, l.prototype.asArray = function () {
    return new s([this._alpha]);
  }, exports.exports = l;
}
