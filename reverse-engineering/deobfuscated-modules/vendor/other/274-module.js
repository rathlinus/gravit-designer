/**
 * Module 274
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
  var n = require(154) /* LabelHolder */, r = require(0) /* GObject */, o = require(11) /* GUtil */, a = require(56) /* GShape */, s = require(24) /* GEditorOptions */, l = (require(22) /* GElement */, require(113) /* GCompoundPath */), h = require(7) /* GTransform */, A = require(39) /* PartInfo */, c = require(81) /* GEditorAnnotation */, p = require(17) /* GRGBColor */, u = (require(104) /* GItem */, require(5) /* GPoint */);
  function d(e) {
    n.call(this, e);
  }
  r.inherit(d, n), d.CATCH_HANDLE_PART_ID = o.uuid(), d.prototype._getPartInfoAt = function (e, t, i) {
    if (this.hasFlag(A.Flag.Selected) && !(this.getPaintElement().getParent() instanceof l.Paths) && this.getPaintElement().findParent(function (e) {
        return e instanceof a;
      })) {
      var r = this._getCatchPartInfoAt(e, t, i);
      if (r)
        return r;
    }
    return n.prototype._getPartInfoAt.call(this, e, t, i);
  }, d.prototype._getCatchPartInfoAt = function (e, t, i) {
    var n = this.getPaintElement(), r = n.getTransform(), o = n.getCenter(false);
    return o = r ? r.mapPoint(o || new u(0, 0)) : o, c.getAnnotationBBox(t, o, s.annotationHandles.catch.size, false).expanded(s.annotPickDistance, s.annotPickDistance, s.annotPickDistance, s.annotPickDistance).containsPoint(e) ? new A.PartInfo(this, d.CATCH_HANDLE_PART_ID, { point: o }, false, false) : null;
  }, d.prototype._postPaint = function (e, t) {
    if (this.hasFlag(A.Flag.Selected) && this._catchHandleAllowed() && this.getPaintElement().findParent(function (e) {
        return e instanceof a;
      })) {
      var require = this.getPaintElement(), n = require.getTransform(), r = n || new h(1, 0, 0, 1, 0, 0);
      r = e ? r.multiplied(e) : r;
      var o = require.getCenter(false), l = o ? r.mapPoint(o) : null;
      if (l) {
        var u = s.annotationHandles.catch;
        c.paintAnnotation(t, null, l, u.type, true, u.size, p.WHITE, t.selectionOutlineColor);
      }
    }
  }, d.prototype._catchHandleAllowed = function () {
    return true;
  }, d.prototype.toString = function () {
    return "[Object GItemEditor]";
  }, exports.exports = d;
}
