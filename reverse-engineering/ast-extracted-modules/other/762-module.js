/**
 * Module 762
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
  var n = i(0), r = i(5), o = i(6), a = i(7), s = i(236), l = i(528), h = i(530);
  function A(e, t) {
    s.call(this, e, t);
  }
  n.inherit(A, s), A.prototype._sShapeName = null, A.prototype._sShapeInitWidth = null, A.prototype._sShapeInitHeight = null, A.prototype._annotationsParamInitVals = null, A.prototype._parameterizedVertexProcessor = null, A.prototype._icon = null, A.prototype.init = function (e) {
    if (this._sShapeName = e.name, this._sShapeInitWidth = e.width, this._sShapeInitHeight = e.height, this._annotationsParamInitVals = null, e.annotations && e.annotations.annotList && e.annotations.annotList.length)
      for (var t = e.annotations.annotList, i = 0; i < t.length; ++i) {
        var n = t[i];
        this._annotationsParamInitVals ? this._annotationsParamInitVals.push(new r(n.x0, n.y0)) : this._annotationsParamInitVals = [new r(n.x0, n.y0)];
      }
    this._parameterizedVertexProcessor = new l(e.annotations ? e.annotations.name : null, e.annotations ? e.annotations.annotList : null, e.parameters, e.vertices);
  }, A.prototype.setIcon = function (e) {
    this._icon = e;
  }, A.prototype.getIcon = function () {
    return this._icon ? this._icon : null;
  }, A.prototype._createShapeManually = function (e) {
    if (this._parameterizedVertexProcessor) {
      var t = new h(this._parameterizedVertexProcessor, this._annotationsParamInitVals, this._sShapeInitWidth, this._sShapeInitHeight, this._sShapeName, this._icon), i = t.getSourceBBox().getSide(o.Side.TOP_LEFT), n = t.getProperty("trf");
      n && (i = n.mapPoint(i));
      var r = new a(1, 0, 0, 1, e.getX() - i.getX(), e.getY() - i.getY());
      t.setProperty("trf", n ? n.multiplied(r) : r), this._insertShape(t);
    }
  }, A.prototype._createShape = function () {
    var e = null;
    return this._parameterizedVertexProcessor && (e = new h(this._parameterizedVertexProcessor, this._annotationsParamInitVals, this._sShapeInitWidth, this._sShapeInitHeight, this._sShapeName, this._icon)), e;
  }, A.prototype._updateShape = function (e, t, i) {
    if (t) {
      var n = e.getSourceBBox();
      if (n && !n.isEmpty()) {
        var r = a.getNativeRectTransformation(n), o = a.getNativeRectTransformation(t);
        return e.setProperty("trf", r.inverted().multiplied(o)), !0;
      }
    }
    return !1;
  }, A.prototype.toString = function () {
    return "[Object GSimpleShapeTool]";
  }, e.exports = A;
}
