/**
 * Module 1089
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
  var n = require(0) /* GObject */, r = require(330) /* GRectangleEditor */, o = require(36) /* PartsPropertyVals */, a = require(533) /* GCollaborativeTextAnnotation */, s = require(172) /* GAnnotationEditor */, l = require(66) /* EdTransformOptions */;
  function h(e, t) {
    r.call(this, e), this._uid = t, this._flags = this._flags & ~(l.Flag.RotateCorners | l.Flag.RotateHandle | l.Flag.ResizeAll | l.Flag.ResizeCenters | l.Flag.ResizeEdges);
  }
  n.inheritAndMix(h, r, [s]), o.exports(h, a), h.prototype._showEditor = function (e) {
    return false;
  }, h.prototype.toString = function () {
    return "[Object GCollaborativeTextAnnotationEditor]";
  }, exports.exports = h;
}
