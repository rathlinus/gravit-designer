/**
 * Module 543
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
  var n = require(24) /* GEditorOptions */, r = require(383) /* module */;
  function o() {
    r.call(this);
  }
  require(0) /* GObject */.inherit(o, r), o.prototype.getAnnotationOptions = function () {
    return n.annotationHandles.preserveAspectRatio;
  }, exports.exports = new o();
}
