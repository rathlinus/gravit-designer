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

function (exports, module, require) {
  var n = require(82) /* SavePoint */, r = require(0) /* GObject */, o = require(233) /* GCompoundShape */, a = require(63) /* GVertexTransformer */, s = require(128) /* GShapeEditor */, l = require(36) /* PartsPropertyVals */, h = require(141) /* module */, A = require(22) /* GElement */, c = require(39) /* PartInfo */, p = require(24) /* GEditorOptions */, u = require(9) /* GLocale */, d = require(47) /* GLocaleKey */;
  function g(e) {
    s.call(this, e);
  }
  r.inherit(g, s), l.exports(g, o), g.prototype.setBooleanOp = function (e, t) {
    var i = n.getEditor(this.getElement().getScene());
    if (!i)
      return false;
    if (!this._editors || !this._editors.length)
      return false;
    for (var r = false, o = 0; o < this._editors.length; ++o) {
      (a = this._editors[o]) instanceof s && (r = true);
    }
    if (!r)
      return false;
    i.beginTransaction();
    try {
      for (o = 0; o < this._editors.length; ++o) {
        var a;
        (a = this._editors[o]) instanceof s && a.getElement().setProperty("bool", e);
      }
    } finally {
      i.commitTransaction(u.get(new d("GCompoundShapeEditor", "action.drop-pattern")));
    }
    return true;
  }, g.prototype._paintOutline = function (e, t, i, n, r) {
    var o, s = this.getPaintElement(), l = new a(s, e);
    (o = new h(l)) && (t.canvas.putVertices(o, false), t.canvas.strokeVertices(n || (this.hasFlag(c.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), p.outlineWidth));
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
    for (var exports = this._editors ? this._editors.length : 0; exports > 0; --exports) {
      var module = this._editors[exports - 1];
      module && module instanceof l && module.resetTransform();
    }
    s.prototype.resetTransform.call(this);
  }, g.prototype.toString = function () {
    return "[Object GCompoundShapeEditor]";
  }, exports.exports = g;
}
