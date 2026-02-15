/**
 * Module 1082
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
  var n = i(82), r = i(0), o = i(233), a = i(63), s = i(128), l = i(36), h = i(141), A = i(22), c = i(39), p = i(24), u = i(9), d = i(47);
  function g(e) {
    s.call(this, e);
  }
  r.inherit(g, s), l.exports(g, o), g.prototype.setBooleanOp = function (e, t) {
    var i = n.getEditor(this.getElement().getScene());
    if (!i)
      return !1;
    if (!this._editors || !this._editors.length)
      return !1;
    for (var r = !1, o = 0; o < this._editors.length; ++o) {
      (a = this._editors[o]) instanceof s && (r = !0);
    }
    if (!r)
      return !1;
    i.beginTransaction();
    try {
      for (o = 0; o < this._editors.length; ++o) {
        var a;
        (a = this._editors[o]) instanceof s && a.getElement().setProperty("bool", e);
      }
    } finally {
      i.commitTransaction(u.get(new d("GCompoundShapeEditor", "action.drop-pattern")));
    }
    return !0;
  }, g.prototype._paintOutline = function (e, t, i, n, r) {
    var o, s = this.getPaintElement(), l = new a(s, e);
    (o = new h(l)) && (t.canvas.putVertices(o, !1), t.canvas.strokeVertices(n || (this.hasFlag(c.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), p.outlineWidth));
  }, g.prototype.getBox = function () {
    return this.getPaintElement().getGeometryBBox();
  }, g.prototype.getBoxTransform = function () {
    return null;
  }, g.prototype.edTransform = function (e, t, i, n) {
    for (var r = this.getElement().getFirstChild(); null != r; r = r.getNext())
      if (r instanceof A) {
        var o = l.openEditor(r);
        o && o.edTransform(e, null, null, n);
      }
    s.prototype.edTransform.call(this, e, t, i, n);
  }, g.prototype.resetTransform = function () {
    for (var e = this._editors ? this._editors.length : 0; e > 0; --e) {
      var t = this._editors[e - 1];
      t && t instanceof l && t.resetTransform();
    }
    s.prototype.resetTransform.call(this);
  }, g.prototype.toString = function () {
    return "[Object GCompoundShapeEditor]";
  }, e.exports = g;
}
