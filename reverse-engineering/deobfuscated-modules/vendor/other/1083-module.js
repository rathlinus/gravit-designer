/**
 * Module 1083
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
  var n = require(0) /* GObject */, r = require(534) /* GImageGrid */, o = require(63) /* GVertexTransformer */, a = require(128) /* GShapeEditor */, s = require(36) /* PartsPropertyVals */, l = require(141) /* module */, h = require(39) /* PartInfo */, A = require(24) /* GEditorOptions */;
  function c(e) {
    a.call(this, e);
  }
  n.inherit(c, a), s.exports(c, r), c.prototype._paintOutline = function (e, t, i, n, r) {
    var a, s = this.getPaintElement(), c = new o(s, e);
    (a = new l(c)) && (t.canvas.putVertices(a, false), t.canvas.strokeVertices(n || (this.hasFlag(h.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), A.outlineWidth));
  }, c.prototype.getBox = function () {
    return this.getPaintElement().getGeometryBBox();
  }, c.prototype.getBoxTransform = function () {
    return null;
  }, c.prototype.resetTransform = function () {
    for (var exports = this._editors ? this._editors.length : 0; exports > 0; --exports) {
      var module = this._editors[exports - 1];
      module && module instanceof s && module.resetTransform();
    }
    a.prototype.resetTransform.call(this);
  }, c.prototype.toString = function () {
    return "[Object GImageGridEditor]";
  }, exports.exports = c;
}
