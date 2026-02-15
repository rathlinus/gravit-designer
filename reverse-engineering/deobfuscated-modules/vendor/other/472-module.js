/**
 * Module 472
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
  var n = require(72) /* GEvent */;
  function r(e, t, i) {
    this.reference = e, this.target = t, this.linked = i;
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.reference = null, r.prototype.target = null, r.prototype.linked = null, r.prototype.toString = function () {
    return "[Event GReferenceEvent]";
  }, exports.exports = r;
}
