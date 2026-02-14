/**
 * Module 1078
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
  var n = i(0), r = i(127), o = i(36), a = i(66), s = i(268);
  function l() {
    r.apply(this, arguments);
  }
  n.inherit(l, r), o.exports(l, s), l.prototype.filterFlags = function (e) {
    return 0 != (e & a.Flag.ResizeAll) && (e &= ~a.Flag.ResizeAll), 0 != (e & a.Flag.RotateHandle) && (e &= ~a.Flag.RotateHandle), e;
  }, l.prototype._applyTransform = function (e, t, i, n) {
    this._partSelection && this._partSelection.length > 0 && !this.hasFlag(a.Flag.ResizeAll) ? r.prototype._applyTransform.call(this, e, t, i, n) : this._transform && !this._transform.isIdentity() && e.getSrcPath() && e.getDstPath() && (e.transformAnchors(this._transform), e.getSrcPath().transform(this._transform, !0, i), e.getDstPath().transform(this._transform, !0, i), this.resetTransform());
  }, l.prototype.isDeletePartsAllowed = function () {
    if (this._partSelection && this._partSelection.length)
      for (var e = this._element.getAnchorPoints().getFirstChild(), t = this._element.getAnchorPoints().getLastChild(), i = 0; i < this._partSelection.length; i++)
        if (this._partSelection[i].type == r.PartType.Point && (this._partSelection[i].point === e || this._partSelection[i].point === t))
          return !1;
    return r.prototype.isDeletePartsAllowed.call(this);
  }, e.exports = l;
}
