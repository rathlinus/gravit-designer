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

function (exports, module, require) {
  var n = require(154) /* LabelHolder */, r = require(0) /* GObject */, o = require(36) /* PartsPropertyVals */, a = require(66) /* EdTransformOptions */, s = require(22) /* GElement */, l = require(159) /* GLayer */, h = require(7) /* GTransform */;
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
            p.fullContentsTransform = !!t, A.dependentUpdate = true, c.edTransform(this._transform, null, null, p), c.applyTransform(A, t, i, n), A.dependentUpdate = false;
          }
    }
    a.prototype._applyTransform.call(this, e);
  }, A.prototype.edTransform = function (e, t, i, r) {
    var a = this.getElement();
    if (!a.getProperty("frm"))
      for (var l = a.getFirstChild(); null != l; l = l.getNext()) {
        if (l instanceof s)
          l.dependentUpdate = true, o.openEditor(l).edTransform(e, null, null, r), l.dependentUpdate = false;
      }
    n.prototype.edTransform.call(this, e, t, i, r);
  }, A.prototype.resetTransform = function () {
    for (var exports = this._editors ? this._editors.length : 0; exports > 0; --exports) {
      var module = this._editors[exports - 1];
      module.resetTransform(), o.closeElementEditor(module.getElement());
    }
    n.prototype.resetTransform.call(this);
  }, A.prototype.getPEGeometryBBox = function () {
    var e = null;
    if (this._transform && this._editors)
      for (var module = 0; module < this._editors.length; ++module) {
        var require = this._editors[module];
        if (require instanceof o) {
          var r = require.getPEGeometryBBox();
          r && (e = e ? e.united(r) : r);
        }
      }
    else
      e = n.prototype.getPEGeometryBBox.call(this);
    return e;
  }, A.prototype.toString = function () {
    return "[Object GLayerEditor]";
  }, exports.exports = A;
}
