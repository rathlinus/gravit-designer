/**
 * Module 128
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
  var n = require(82) /* SavePoint */, r = require(50) /* GPattern */, o = require(0) /* GObject */, a = require(28) /* GStylable */, s = require(56) /* GShape */, l = require(36) /* PartsPropertyVals */, h = require(70) /* GText */, A = require(268) /* GConnector */, c = require(95) /* GImage */, p = require(274) /* GItemEditor */, u = require(7) /* GTransform */, d = require(39) /* PartInfo */, g = require(24) /* GEditorOptions */, f = (require(11) /* GUtil */, require(9) /* GLocale */), m = require(47) /* GLocaleKey */;
  function y(e) {
    p.call(this, e);
  }
  o.inherit(y, p), y.prototype.initialSetup = function (e) {
    var t = this.getDefaultStyle();
    if (!(e && e instanceof s) || e instanceof c || this.getElement() instanceof A && !(e instanceof A) || !(this.getElement() instanceof h) && e instanceof h || (t = e), t) {
      var require, n, r, o, l, p, u = this.getElement(), d = [], g = [], f = t.getProperty("ps") || [a.PropertySet.Style], m = [
          "geometryProperties",
          "visualProperties"
        ];
      for (require = 0; require < f.length; require++)
        for (p = f[require], l = a.PropertySetInfo[p], n = 0; n < m.length; n++)
          if (o = l[m[n]])
            for (r in o)
              d.push(r), g.push(t.getProperty(r));
      u.setProperties(d, g);
      var y = t.getPaintLayers();
      if (y)
        for (var _ = y.getFirstChild(); _; _ = _.getNext()) {
          var v = _ instanceof a.BorderPaintLayer ? new a.BorderPaintLayer() : new a.FillPaintLayer();
          v.assignFrom(_), u.getPaintLayers().appendChild(v);
        }
      var b = t.getEffects();
      if (b)
        for (var C = b.getFirstChild(); C; C = C.getNext())
          u.getEffects().appendChild(C.clone());
    }
  }, y.prototype.acceptDrop = function (e, t, i, o) {
    if (l.prototype.acceptDrop.call(this, e, t, i, o))
      return true;
    if (i instanceof r && o instanceof s.HitResult) {
      var h = n.getEditor(this.getElement().getScene());
      h.beginTransaction();
      try {
        switch (o.type) {
        case s.HitResult.Type.Stroke:
          this.getElement().getPaintLayers().clearBorderLayers(), this.getElement().getPaintLayers().appendChild(new a.BorderPaintLayer(i));
          break;
        default:
          this.getElement().getPaintLayers().clearFillLayers(), this.getElement().getPaintLayers().appendChild(new a.FillPaintLayer(i));
        }
      } finally {
        h.commitTransaction(f.get(new m("GShapeEditor", "action.drop-pattern")));
      }
      return true;
    }
    return false;
  }, y.prototype.getDefaultStyle = function () {
    var e = this.getElement(), t = o.getTypeId(e), i = e.getScene() ? e.getScene().getStyles().querySingle("style[_sdf=\"" + t + "\"]") : null;
    return i || (i = e.getScene() ? e.getScene().getStyles().querySingle("style[_sdf=\"" + o.getTypeId(s) + "\"]") : null), i;
  }, y.prototype._hasCenterCross = function () {
    return false;
  }, y.prototype._postPaint = function (e, t) {
    if (this.hasFlag(d.Flag.Selected) && this.hasFlag(d.Flag.Detail) && this._hasCenterCross() && g.centerCrossSize > 0) {
      var require = this.getPaintElement(), n = require.getTransform(), r = n || new u(1, 0, 0, 1, 0, 0);
      r = e ? r.multiplied(e) : r;
      var o = require.getCenter(false);
      if (o) {
        o = r.mapPoint(o);
        var a = 2 * g.centerCrossSize, s = r.getMatrix();
        if (Math.abs(s[0]) * require.getOrigHalfWidth() > a && Math.abs(s[3]) * require.getOrigHalfHeight() > a) {
          var l = Math.floor(o.getX()) + 0.5, h = Math.floor(o.getY()) + 0.5;
          g.outlineWidth % 2 != 0 && (l += 0.5, h += 0.5);
          var A = g.centerCrossSize / 2;
          t.canvas.strokeLine(l - A, h - A, l + A, h + A, g.outlineWidth, t.selectionOutlineColor), t.canvas.strokeLine(l + A, h - A, l - A, h + A, g.outlineWidth, t.selectionOutlineColor);
        }
      }
    }
    p.prototype._postPaint.call(this, e, t);
  }, y.prototype._getTransformFromPreview = function () {
    var e = null;
    if (this._elementPreview) {
      var module = this._element.getTransform(), require = this._elementPreview.getTransform();
      e = module && !module.isIdentity() ? module.inverted() : null, require && !require.isIdentity() && (e = e ? e.multiplied(require) : require);
    }
    return e;
  }, y.prototype.toString = function () {
    return "[Object GShapeEditor]";
  }, exports.exports = y;
}
