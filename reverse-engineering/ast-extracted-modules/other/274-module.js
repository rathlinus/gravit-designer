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

function (e, t, i) {
  var n = i(154), r = i(0), o = i(11), a = i(56), s = i(24), l = (i(22), i(113)), h = i(7), A = i(39), c = i(81), p = i(17), u = (i(104), i(5));
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
    var n = this.getPaintElement(), r = n.getTransform(), o = n.getCenter(!1);
    return o = r ? r.mapPoint(o || new u(0, 0)) : o, c.getAnnotationBBox(t, o, s.annotationHandles.catch.size, !1).expanded(s.annotPickDistance, s.annotPickDistance, s.annotPickDistance, s.annotPickDistance).containsPoint(e) ? new A.PartInfo(this, d.CATCH_HANDLE_PART_ID, { point: o }, !1, !1) : null;
  }, d.prototype._postPaint = function (e, t) {
    if (this.hasFlag(A.Flag.Selected) && this._catchHandleAllowed() && this.getPaintElement().findParent(function (e) {
        return e instanceof a;
      })) {
      var i = this.getPaintElement(), n = i.getTransform(), r = n || new h(1, 0, 0, 1, 0, 0);
      r = e ? r.multiplied(e) : r;
      var o = i.getCenter(!1), l = o ? r.mapPoint(o) : null;
      if (l) {
        var u = s.annotationHandles.catch;
        c.paintAnnotation(t, null, l, u.type, !0, u.size, p.WHITE, t.selectionOutlineColor);
      }
    }
  }, d.prototype._catchHandleAllowed = function () {
    return !0;
  }, d.prototype.toString = function () {
    return "[Object GItemEditor]";
  }, e.exports = d;
}
