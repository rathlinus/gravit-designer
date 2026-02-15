/**
 * Module 1085
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(56) /* GShape */, a = (require(22) /* GElement */, require(530) /* GSimpleShape */), s = require(128) /* GShapeEditor */, l = require(36) /* PartsPropertyVals */, h = require(24) /* GEditorOptions */, A = require(39) /* PartInfo */, c = require(81) /* GEditorAnnotation */, p = require(17) /* GRGBColor */;
  function u(e) {
    s.call(this, e);
  }
  n.inherit(u, s), l.exports(u, a), u.ANNOTATION_PART_ID = r.uuid(), u.prototype.getCustomBBox = function (e, t) {
    var i = s.prototype.getCustomBBox.call(this, e, t);
    if (this._showSegmentDetails()) {
      var n = e;
      t && this._transform && (n = n ? this._transform.multiplied(n) : this._transform);
      this.getPaintElement().iterateAnnotations(function (e, t) {
        var r;
        (r = c.getAnnotationBBox(n, e, h.annotationHandles.simpleShape.size, true)) && !r.isEmpty() && (i = i ? i.united(r) : r);
      }.bind(this), true);
    }
    return i;
  }, u.prototype.createElementPreview = function () {
    this._elementPreview || (this._setElementPreview(new a(this._element._parameterizedVertexProcessor, this._element._annotationsParamVals, null, null, this._element._sShapeName)), this._elementPreview.transferProperties(this._element, [o.GeometryProperties]));
  }, u.prototype.movePart = function (e, t, i, n, r, o, a) {
    var l = s.prototype.movePart.call(this, e, t, i, n, r, o, a);
    if (e === u.ANNOTATION_PART_ID) {
      var h = n.mapPoint(i);
      this.createElementPreview(), this.getPaintElement().setAnnotationMouseLocation(t.annotationIdx, h), this.requestInvalidation(), l = null;
    }
    return l;
  }, u.prototype._applyPartMove = function (e, t, i, n) {
    e === u.ANNOTATION_PART_ID ? (this._elementPreview && this._element.setAnnotationMouseLocation(t.annotationIdx, this._elementPreview.getAnnotationPosition(t.annotationIdx)), this.resetPartMove(e, t), this.requestInvalidation()) : s.prototype._applyPartMove.call(this, e, t, i, n);
  }, u.prototype.isDeletePartsAllowed = function () {
    return false;
  }, u.prototype.canApplyTransform = function () {
    return this._elementPreview && this._elementPreview.getTransform().invertible() || s.prototype.canApplyTransform.call(this);
  }, u.prototype._postPaint = function (e, t) {
    (s.prototype._postPaint.call(this, e, t), this._showSegmentDetails()) && this.getPaintElement().iterateAnnotations(function (i, n) {
      var r = this._partSelection && this._partSelection.indexOf(u.ANNOTATION_PART_ID) >= 0, o = h.annotationHandles.simpleShape;
      c.paintAnnotation(t, e, i, o.type, r, o.size, p.WHITE, t.annotationColor);
    }.bind(this), true);
  }, u.prototype._getPartInfoAt = function (e, t, i) {
    if (this._showSegmentDetails()) {
      var n = null;
      if (this._element.iterateAnnotations(function (i, r) {
          if (c.getAnnotationBBox(t, i, h.annotationHandles.simpleShape.size, false).expanded(h.annotPickDistance, h.annotPickDistance, h.annotPickDistance, h.annotPickDistance).containsPoint(e))
            return n = new A.PartInfo(this, u.ANNOTATION_PART_ID, { annotationIdx: r }, true, false), true;
        }.bind(this), true), n)
        return n;
    }
    return s.prototype._getPartInfoAt.call(this, e, t, i);
  }, u.prototype._showSegmentDetails = function () {
    return this._showAnnotations() && this.hasFlag(A.Flag.Detail) && !this._elementPreview;
  }, u.prototype.toString = function () {
    return "[Object GSimpleShapeEditor]";
  }, exports.exports = u;
}
