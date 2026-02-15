/**
 * Module 747
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
  var n = require(284) /* GPolygon */, r = require(0) /* GObject */, o = require(11) /* GUtil */, a = require(56) /* GShape */, s = (require(22) /* GElement */, require(45) /* GPathBase */), l = require(128) /* GShapeEditor */, h = require(36) /* PartsPropertyVals */, A = require(5) /* GPoint */, c = require(24) /* GEditorOptions */, p = require(155) /* GPathBaseEditor */, u = require(39) /* PartInfo */, d = require(12) /* GMath */, g = require(81) /* GEditorAnnotation */, f = require(17) /* GRGBColor */;
  require(7) /* GTransform */;
  function m(e) {
    p.call(this, e);
  }
  r.inherit(m, p), h.exports(m, n), m.INSIDE_PART_ID = o.uuid(), m.OUTSIDE_PART_ID = o.uuid(), m.prototype.getBBoxMargin = function () {
    return p.prototype.getBBoxMargin.call(this);
  }, m.prototype.getCustomBBox = function (e, t) {
    var i = p.prototype.getCustomBBox.call(this, e, t);
    if (this._showSegmentDetails()) {
      var n = e;
      t && this._transform && (n = n ? this._transform.multiplied(n) : this._transform);
      this.getPaintElement().iterateSegments(function (e, t, r) {
        var o;
        (o = g.getAnnotationBBox(n, e, c.annotationHandles.polygon.size, true)) && !o.isEmpty() && (i = i ? i.united(o) : o);
      }.bind(this), true);
    }
    return i;
  }, m.prototype.createElementPreview = function () {
    this._elementPreview || (this._setElementPreview(new n()), this._elementPreview.transferProperties(this._element, [
      a.GeometryProperties,
      n.GeometryProperties,
      s.MetaProperties
    ]));
  }, m.prototype.movePart = function (e, t, i, n, r, o, a) {
    var s = p.prototype.movePart.call(this, e, t, i, n, r, o, a);
    if (e === m.INSIDE_PART_ID || e === m.OUTSIDE_PART_ID) {
      var l = n.mapPoint(i), h = this._element.getProperty("trf");
      h && (l = h.inverted().mapPoint(l)), this.createElementPreview();
      var c = this._element.getCenter(false), u = Math.atan2(l.getY() - c.getY(), l.getX() - c.getX()) - t, g = d.ptDist(l.getX(), l.getY(), c.getX(), c.getY()), f = this._element.getProperty("oa"), y = this._element.getProperty("or"), _ = this._element.getProperty("ia"), v = this._element.getProperty("ir"), b = _, C = v, w = f, E = y, B = this._partSelection.indexOf(m.INSIDE_PART_ID) >= 0, x = this._partSelection.indexOf(m.OUTSIDE_PART_ID) >= 0;
      if (1 == this._partSelection.length)
        B && (o || (b = d.normalizeAngleRadians(u + _)), C = g), x && (o || (w = d.normalizeAngleRadians(u + f)), E = g);
      else if (B && x)
        if (e == m.INSIDE_PART_ID) {
          o || (b = d.normalizeAngleRadians(u + _));
          var P = (C = g) * Math.cos(b) - v * Math.cos(_), S = C * Math.sin(b) - v * Math.sin(_), T = new A(y * Math.cos(f) + P, y * Math.sin(f) + S);
          w = Math.atan2(T.getY(), T.getX()), E = d.ptDist(T.getX(), T.getY(), 0, 0);
        } else if (e == m.OUTSIDE_PART_ID) {
          o || (w = d.normalizeAngleRadians(u + f));
          P = (E = g) * Math.cos(w) - y * Math.cos(f), S = E * Math.sin(w) - y * Math.sin(f);
          var I = new A(v * Math.cos(_) + P, v * Math.sin(_) + S);
          b = Math.atan2(I.getY(), I.getX()), C = d.ptDist(I.getX(), I.getY(), 0, 0);
        }
      this._elementPreview.setProperties([
        "oa",
        "or",
        "ia",
        "ir"
      ], [
        w,
        E,
        b,
        C
      ]), this.requestInvalidation();
    }
    return s;
  }, m.prototype._applyPartMove = function (e, t, i, n) {
    if (e === m.INSIDE_PART_ID || e === m.OUTSIDE_PART_ID) {
      var r = this._elementPreview.getProperties([
        "oa",
        "or",
        "ia",
        "ir"
      ]);
      this.resetPartMove(e, t), this._element.setProperties([
        "oa",
        "or",
        "ia",
        "ir"
      ], r);
    }
    p.prototype._applyPartMove.call(this, e, t, i, n);
  }, m.prototype.canApplyTransform = function () {
    return this._elementPreview && this._elementPreview.getTransform().invertible() || p.prototype.canApplyTransform.call(this);
  }, m.prototype._hasCenterCross = function () {
    return true;
  }, m.prototype._postPaint = function (e, t) {
    (p.prototype._postPaint.call(this, e, t), this._showSegmentDetails()) && this.getPaintElement().iterateSegments(function (i, n, r) {
      var o = n ? m.INSIDE_PART_ID : m.OUTSIDE_PART_ID, a = c.annotationHandles.polygon, s = this._partSelection && this._partSelection.indexOf(o) >= 0;
      a.inverted && (s = !s);
      var l = n ? a.innerType : a.outerType;
      if (g.paintAnnotation(t, e, i, l, s, a.size, f.WHITE, t.annotationColor, a.outlineWidth, a.shadowColor, a.outsideStroke), c.annotationHandles.suppressRedundantCorners && n)
        return true;
    }.bind(this), true);
  }, m.prototype._getPartInfoAt = function (e, t, i) {
    if (this._showSegmentDetails()) {
      var n = null;
      if (this._element.iterateSegments(function (i, r, o) {
          if (g.getAnnotationBBox(t, i, c.annotationHandles.polygon.size, false).expanded(c.annotPickDistance, c.annotPickDistance, c.annotPickDistance, c.annotPickDistance).containsPoint(e)) {
            var a = r ? m.INSIDE_PART_ID : m.OUTSIDE_PART_ID;
            return n = new u.PartInfo(this, a, o, true, true), true;
          }
        }.bind(this), true), n)
        return n;
    }
    return l.prototype._getPartInfoAt.call(this, e, t, i);
  }, m.prototype._showSegmentDetails = function () {
    return this._showAnnotations() && this.hasFlag(u.Flag.Detail) && !this._elementPreview;
  }, m.prototype.toString = function () {
    return "[Object GPolygonEditor]";
  }, exports.exports = m;
}
