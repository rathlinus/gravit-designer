/**
 * Module 1088
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
  require(7) /* GTransform */;
  var n = require(547) /* GTextTool */, r = require(370) /* GTextAnnotation */, o = require(0) /* GObject */, a = require(212) /* GAnnotationTool */;
  function s() {
    n.call(this, true, true);
  }
  require(783) /* GTextAnnotationEditor */, o.inherit(s, n, [a]), s.prototype._getRelatedItemClass = function () {
    return r;
  }, s.prototype.toString = function () {
    return "[Object GTextAnnotationTool]";
  }, exports.exports = s;
}
