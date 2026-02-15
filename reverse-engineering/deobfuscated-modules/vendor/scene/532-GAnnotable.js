/**
 * Module 532 - GAnnotable
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
  var n = require(84) /* GAnnotation */;
  function r() {
  }
  r.prototype.linkAnnotation = function (e) {
    return !(!e.hasMixin(n.Linkable) || !this._scene) && (this._scene.link(this, e), true);
  }, r.prototype.getLinkedAnnotations = function () {
    var e = [];
    return this._scene && this._scene.visitLinks(this, function (t) {
      t.hasMixin(n) && e.push(t);
    }), e;
  }, exports.exports = r;
}
