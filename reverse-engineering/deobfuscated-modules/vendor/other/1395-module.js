/**
 * Module 1395
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
  var n = require(0) /* GObject */, r = require(587) /* GOpenTypeFont */, o = require(708) /* module */;
  function a(e, t, i, n) {
    var a = o.parse(n);
    if (!a || !a.supported)
      throw "Could not load embedded font";
    r.call(this, e, t, i, n, a);
  }
  n.inherit(a, r), a.prototype.isEmbedded = function () {
    return true;
  }, exports.exports = a;
}
