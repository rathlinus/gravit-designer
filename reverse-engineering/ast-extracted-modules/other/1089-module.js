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

function (e, t, i) {
  var n = i(0), r = i(330), o = i(36), a = i(533), s = i(172), l = i(66);
  function h(e, t) {
    r.call(this, e), this._uid = t, this._flags = this._flags & ~(l.Flag.RotateCorners | l.Flag.RotateHandle | l.Flag.ResizeAll | l.Flag.ResizeCenters | l.Flag.ResizeEdges);
  }
  n.inheritAndMix(h, r, [s]), o.exports(h, a), h.prototype._showEditor = function (e) {
    return !1;
  }, h.prototype.toString = function () {
    return "[Object GCollaborativeTextAnnotationEditor]";
  }, e.exports = h;
}
