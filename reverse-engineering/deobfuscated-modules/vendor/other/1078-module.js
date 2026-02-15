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

function (exports, module, require) {
  var n = require(0) /* GObject */, r = require(127) /* GPathEditor */, o = require(36) /* PartsPropertyVals */, a = require(66) /* EdTransformOptions */, s = require(268) /* GConnector */;
  function l() {
    r.apply(this, arguments);
  }
  n.inherit(l, r), o.exports(l, s), l.prototype.filterFlags = function (e) {
    return 0 != (e & a.Flag.ResizeAll) && (e &= ~a.Flag.ResizeAll), 0 != (e & a.Flag.RotateHandle) && (e &= ~a.Flag.RotateHandle), e;
  }, l.prototype._applyTransform = function (e, t, i, n) {
    this._partSelection && this._partSelection.length > 0 && !this.hasFlag(a.Flag.ResizeAll) ? r.prototype._applyTransform.call(this, e, t, i, n) : this._transform && !this._transform.isIdentity() && e.getSrcPath() && e.getDstPath() && (e.transformAnchors(this._transform), e.getSrcPath().transform(this._transform, true, i), e.getDstPath().transform(this._transform, true, i), this.resetTransform());
  }, l.prototype.isDeletePartsAllowed = function () {
    if (this._partSelection && this._partSelection.length)
      for (var exports = this._element.getAnchorPoints().getFirstChild(), module = this._element.getAnchorPoints().getLastChild(), require = 0; require < this._partSelection.length; require++)
        if (this._partSelection[require].type == r.PartType.Point && (this._partSelection[require].point === exports || this._partSelection[require].point === module))
          return false;
    return r.prototype.isDeletePartsAllowed.call(this);
  }, exports.exports = l;
}
