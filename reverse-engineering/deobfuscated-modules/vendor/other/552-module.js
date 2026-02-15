/**
 * Module 552
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(56) /* GShape */, a = (require(22) /* GElement */, require(45) /* GPathBase */), s = require(214) /* GEllipse */, l = require(28) /* GStylable */, h = require(128) /* GShapeEditor */, A = require(36) /* PartsPropertyVals */, c = require(5) /* GPoint */, p = require(24) /* GEditorOptions */, u = require(155) /* GPathBaseEditor */, d = require(7) /* GTransform */, g = require(6) /* GRect */, f = require(12) /* GMath */, m = require(39) /* PartInfo */, y = require(81) /* GEditorAnnotation */, _ = require(17) /* GRGBColor */, v = require(14) /* GPaintCanvas */;
  function b(e) {
    u.call(this, e);
  }
  n.inherit(b, u), A.exports(b, s), b.START_ANGLE_PART_ID = r.uuid(), b.END_ANGLE_PART_ID = r.uuid(), b.prototype.getBBoxMargin = function () {
    var e = u.prototype.getBBoxMargin.call(this);
    return this._showSegmentDetails() ? Math.max(y.getAnnotationPaintMargin(p.annotationHandles.ellipse.size), e) : e;
  }, b.prototype.getCustomBBox = function (e, t) {
    var i = u.prototype.getCustomBBox.call(this, e, t);
    if (this.hasFlag(m.Flag.Selected) && this.hasFlag(m.Flag.Detail) && p.centerCrossSize > 0) {
      var n = this.getPaintElement().getCenter(true);
      if (n) {
        var r = 2 * p.centerCrossSize, o = new g(n.getX() - r - 1, n.getY() - r - 1, r + 1, r + 1);
        o && (i = i ? i.united(o) : o);
      }
    }
    return i;
  }, b.prototype.createElementPreview = function () {
    this._elementPreview || (this._setElementPreview(new s()), this._elementPreview.transferProperties(this._element, [
      o.GeometryProperties,
      s.GeometryProperties,
      a.MetaProperties
    ]));
  }, b.prototype.movePart = function (e, t, i, n, r, o, a) {
    var s = u.prototype.movePart.call(this, e, t, i, n, r, o, a);
    if (e === b.START_ANGLE_PART_ID || e === b.END_ANGLE_PART_ID) {
      var l = n.mapPoint(i);
      this.createElementPreview();
      var h = this._element.getTransform();
      if (h)
        var A = h.inverted().mapPoint(l);
      else
        A = l;
      var c = Math.atan2(A.getY(), A.getX()), p = this._element.getProperty("sa"), d = this._element.getProperty("ea");
      if (e == b.START_ANGLE_PART_ID)
        var g = c - p;
      else
        g = c - d;
      var m = this._partSelection.indexOf(b.START_ANGLE_PART_ID) >= 0, y = this._partSelection.indexOf(b.END_ANGLE_PART_ID) >= 0;
      (m || y) && (this._elementPreview.setProperties([
        "sa",
        "ea"
      ], [
        m ? f.normalizeAngleRadians(p + g) : p,
        y ? f.normalizeAngleRadians(d + g) : d
      ]), this.requestInvalidation());
    }
    return s;
  }, b.prototype._applyPartMove = function (e, t, i, n) {
    if (e === b.START_ANGLE_PART_ID || e === b.END_ANGLE_PART_ID) {
      var r = this._elementPreview.getProperties([
        "sa",
        "ea"
      ]);
      this.resetPartMove(e, t), this._element.setProperties([
        "sa",
        "ea"
      ], r);
    }
    u.prototype._applyPartMove.call(this, e, t, i, n);
  }, b.prototype.canApplyTransform = function () {
    return this._elementPreview && this._elementPreview.getTransform().invertible() || u.prototype.canApplyTransform.call(this);
  }, b.prototype.initialSetup = function (e) {
    u.prototype.initialSetup.call(this, e);
    var t = false;
    if (!e || e instanceof s || !e.getPaintLayers())
      e && (e instanceof s || e.getPaintLayers()) || (t = true);
    else
      for (var require = e.getPaintLayers().getFirstChild(); null !== require && !t; require = require.getNext())
        require instanceof l.BorderPaintLayer && (t = true);
    if (t && this.getElement().getPaintLayers())
      for (require = this.getElement().getPaintLayers().getFirstChild(); null !== require; require = require.getNext())
        require instanceof l.BorderPaintLayer && require.setProperty("_blc", v.LineCap.Butt);
  }, b.prototype._hasCenterCross = function () {
    return true;
  }, b.prototype._postPaint = function (e, t) {
    u.prototype._postPaint.call(this, e, t), this._showSegmentDetails() && this._iterateArcEnds(true, function (i) {
      var n = this._partSelection && this._partSelection.indexOf(i.id) >= 0, r = p.annotationHandles.ellipse, o = i.id == b.START_ANGLE_PART_ID ? r.startType : r.endType;
      return y.paintAnnotation(t, e, i.position, o, n, r.size, _.WHITE, t.annotationColor, r.outlineWidth, r.shadowColor, r.outsideStroke), false;
    }.bind(this));
  }, b.prototype._getPartInfoAt = function (e, t, i) {
    if (this._showSegmentDetails()) {
      var n = null;
      if (this._iterateArcEnds(false, function (i) {
          return !!y.getAnnotationBBox(t, i.position, p.annotationHandles.ellipse.size, false).expanded(p.annotPickDistance, p.annotPickDistance, p.annotPickDistance, p.annotPickDistance).containsPoint(e) && (n = new m.PartInfo(this, i.id, null, true, true), true);
        }.bind(this)), n)
        return n;
    }
    return h.prototype._getPartInfoAt.call(this, e, t, i);
  }, b.prototype._showSegmentDetails = function () {
    return this._showAnnotations() && this.hasFlag(m.Flag.Detail) && !this._elementPreview;
  }, b.prototype._iterateArcEnds = function (e, t) {
    var i = e ? this.getPaintElement() : this._element, n = i.getTransform(), r = i.getProperty("sa"), o = i.getProperty("ea");
    n = n || new d(1, 0, 0, 1, 0, 0);
    for (var a = [
          {
            id: b.START_ANGLE_PART_ID,
            position: n.mapPoint(new c(Math.cos(r), Math.sin(r)))
          },
          {
            id: b.END_ANGLE_PART_ID,
            position: n.mapPoint(new c(Math.cos(o), Math.sin(o)))
          }
        ], s = 0; s < a.length && true !== t(a[s]); ++s);
  }, b.prototype.toString = function () {
    return "[Object GEllipseEditor]";
  }, exports.exports = b;
}
