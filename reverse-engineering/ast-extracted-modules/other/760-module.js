/**
 * Module 760
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
  var n = i(154), r = i(0), o = i(36), a = i(66), s = i(22), l = i(159), h = i(7);
  function A(e) {
    n.call(this, e);
  }
  r.inherit(A, n), o.exports(A, l), A.prototype.paint = function (e, t) {
    var i = t.selectionOutlineColor, r = this._element.getProperty("cls");
    t.selectionOutlineColor = r, n.prototype.paint.call(this, e, t), t.selectionOutlineColor = i;
  }, A.prototype._paintOutline = function (e, t, i, r, o) {
    if (this._transform && this._editors && !this._element.getProperty("frm"))
      for (var a = 0; a < this._editors.length; ++a) {
        this._editors[a]._paintOutline(e, t, i, r, o);
      }
    else
      n.prototype._paintOutline.call(this, e, t, i, r);
  }, A.prototype._applyTransform = function (e, t, i, n) {
    if (!this._transform.isIdentity()) {
      var r = this._element.getProperty("frm");
      if (r) {
        var l = h.correctForFrame(this._transform, r);
        l && !l.isIdentity() && e.setProperty("frm", l.mapRect(r));
      }
      if (!e.getProperty("frm") || t)
        for (var A = e.getFirstChild(); null != A; A = A.getNext())
          if (A instanceof s && (!i || i.indexOf(A) < 0)) {
            var c = o.openEditor(A), p = new a.EdTransformOptions();
            p.fullContentsTransform = !!t, A.dependentUpdate = !0, c.edTransform(this._transform, null, null, p), c.applyTransform(A, t, i, n), A.dependentUpdate = !1;
          }
    }
    a.prototype._applyTransform.call(this, e);
  }, A.prototype.edTransform = function (e, t, i, r) {
    var a = this.getElement();
    if (!a.getProperty("frm"))
      for (var l = a.getFirstChild(); null != l; l = l.getNext()) {
        if (l instanceof s)
          l.dependentUpdate = !0, o.openEditor(l).edTransform(e, null, null, r), l.dependentUpdate = !1;
      }
    n.prototype.edTransform.call(this, e, t, i, r);
  }, A.prototype.resetTransform = function () {
    for (var e = this._editors ? this._editors.length : 0; e > 0; --e) {
      var t = this._editors[e - 1];
      t.resetTransform(), o.closeElementEditor(t.getElement());
    }
    n.prototype.resetTransform.call(this);
  }, A.prototype.getPEGeometryBBox = function () {
    var e = null;
    if (this._transform && this._editors)
      for (var t = 0; t < this._editors.length; ++t) {
        var i = this._editors[t];
        if (i instanceof o) {
          var r = i.getPEGeometryBBox();
          r && (e = e ? e.united(r) : r);
        }
      }
    else
      e = n.prototype.getPEGeometryBBox.call(this);
    return e;
  }, A.prototype.toString = function () {
    return "[Object GLayerEditor]";
  }, e.exports = A;
}
