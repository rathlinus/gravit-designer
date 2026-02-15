/**
 * Module 745
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
  var n = i(0), r = i(36), o = i(66), a = i(22), s = i(39), l = i(5), h = i(7), A = i(11), c = i(82), p = i(70), u = (i(56), i(6)), d = i(69);
  function g() {
    o.call(this);
  }
  n.inherit(g, o), g.prototype._selection = null, g.prototype._scene = null, g.prototype._graphicEditor = null, g.prototype._activated = !1, g.prototype.activate = function (e, t) {
    this._activated && this.deactivate(), this._scene = e, this._scene.addEventListener(a.GeometryChangeEvent, this._geometryChange, this), this._graphicEditor = t, this.updateFromSelection(), this._activated = !0;
  }, g.prototype.deactivate = function () {
    this._graphicEditor = null, this._scene.removeEventListener(a.GeometryChangeEvent, this._geometryChange, this), this._scene = null, this._selection = null, this._activated = !1;
  }, g.prototype.getBox = function (e) {
    if (this._selection) {
      var t = c.getGroupGeometryBBox(this._selection, !0, e);
      if (t) {
        var i = this._scene.getActivePage(), n = i ? i.getPosition(!0) : null;
        n && (t = t.translated(-n.getX(), -n.getY()));
      }
      return t;
    }
    return null;
  }, g.prototype._getSelectionPages = function () {
    var e = null;
    if (this._selection) {
      for (var t = this._selection, i = 0; i < t.length; i++)
        e = (e || []).concat([c.getElementPage(t[i])]);
      e = A.uniqueObj(e);
    }
    return e;
  }, g.prototype._computeOutlineColor = function (e, t) {
    if (this._selection && this._selection.length) {
      for (var i, n = new h(), r = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY, A = 0, c = 0; c < this._selection.length; c++) {
        var p = this._selection[c].getPaintBBox();
        if (p) {
          var d = p.getSide(u.Side.TOP_LEFT);
          d.getX() <= r && d.getY() < a && (r = d.getX(), a = d.getY(), A = c);
        }
      }
      var g = (i = this._selection[A]).getPaintBBox() || new u(), f = new l(g.getX() - 1, g.getY() - 1);
      t && (n = n.multiplied(t));
      var m = n.mapPoint(f), y = m.getX(), _ = m.getY();
      this._computedOutlineColor = s.getOutlineColor(e, y, _, e.selectionShapeOutlineColor, i);
    } else
      o.prototype._computeOutlineColor.call(this, e, t);
  }, g.prototype.getObjectNameModified = function () {
    return "Selection";
  }, g.prototype.paint = function (e, t) {
    var i, n = this._selection;
    if (t.configuration.multiPageView && n) {
      var r = this._scene.getActivePage(), a = r ? r.getPosition(!0) : null;
      a && (i = e.preMultiplied(new h(1, 0, 0, 1, a.getX(), a.getY())));
    }
    o.prototype.paint.call(this, i || e, t);
  }, g.prototype.updateFromSelection = function () {
    if (this.setFlag(o.Flag.ResizeAll, !0), this.setFlag(o.Flag.RotateCorners, !0), this.setFlag(o.Flag.RotateHandle, !0), this.requestInvalidation(), this._selection = this._graphicEditor.getIndividualSelection(), this._selection) {
      for (var e = 0; e < this._selection.length; ++e) {
        var t = this._selection[e];
        t.getProperty("plkt") & d.ProgramLck.NoSizeChanges && (this.removeFlag(o.Flag.ResizeAll, !0), this.removeFlag(o.Flag.RotateCorners, !0), this.removeFlag(o.Flag.RotateHandle, !0));
        var i = r.openEditor(t);
        i.hasFlag(s.Flag.Outline) || i.setFlag(s.Flag.Outline);
      }
      this.requestInvalidation();
    }
  }, g.prototype.edTransform = function (e, t, i, n) {
    if (this._selection)
      for (var a = this._scene.getActivePage(), s = a ? a.getPosition(!0) : null, l = 0; l < this._selection.length; ++l) {
        var A, p = this._selection[l], u = r.openEditor(p);
        if (n && n.isMultiPage && (A = c.getElementPage(p))) {
          var d = A.getPosition(!0);
          s && (d = d.subtract(s));
          var g = new h(1, 0, 0, 1, d.getX(), d.getY());
          u.edTransform(g.multiplied(e).multiplied(g.inverted()), null, null, n);
        } else
          u.edTransform(e, null, null, n);
      }
    o.prototype.edTransform.call(this, e, t, i, n);
  }, g.prototype._getBBox = function (e, t) {
    var i = o.prototype._getBBox.call(this, e, t);
    if (this._selection)
      for (var n = 0; n < this._selection.length; ++n) {
        var a = this._selection[n];
        if (a instanceof p) {
          var s = r.getEditor(a);
          if (s) {
            var l = s._getBBox(e, t);
            l && (i = i ? i.united(l) : l);
          }
        }
      }
    return i;
  }, g.prototype._paintResizeBoxOutline = function (e, t, i, n) {
    var o = null;
    if (this._selection)
      for (var a = 0; a < this._selection.length; ++a) {
        var s = this._selection[a];
        if (s instanceof p) {
          var l = r.getEditor(s);
          if (l) {
            var A = l._getBBox(e, !1);
            A && (o = o ? o.united(A) : A);
          }
        }
      }
    var c = this.getBox();
    if (c) {
      var u = e, d = this.getBoxTransform();
      u = d ? d.multiplied(u) : u, o ? (c = (c = u.mapRect(c)).united(o), this._paintTransformedQuadrilateral(new h(), c, t, n)) : this._paintTransformedQuadrilateral(u, c, t, n);
    }
  }, g.prototype._applyPartMove = function (e, t, i, n) {
    if ((e === o.RESIZE_HANDLE_PART_ID || e === o.ROTATION_HANDLE_PART_ID) && o.prototype.canApplyTransform.call(this) && this._selection)
      for (var a = 0; a < this._selection.length; ++a) {
        var s = this._selection[a];
        if (!n || n.indexOf(s) < 0)
          r.getEditor(s).applyTransform(s, e === o.ROTATION_HANDLE_PART_ID, n, i);
      }
    this.resetTransform(), o.prototype._applyPartMove.call(this, e, t, i, n);
  }, g.prototype.requestInvalidation = function (e) {
    var t = null, i = this._selection;
    if (i && i.length) {
      var n = this._scene.getActivePage(), r = n ? n.getPosition(!0) : null;
      r && (t = new h(1, 0, 0, 1, r.getX(), r.getY()));
    }
    t && (e ? e.pageTransform = t : e = { pageTransform: t }), s.getEditor(this._scene).requestInvalidation(this, e);
  }, g.prototype.invalidate = function (e, t) {
    return o.prototype.invalidate.call(this, e, null);
  }, g.prototype.getPartInfoAt = function (e, t, i, n, r) {
    if (n = n || 0, i && !0 !== i.call(null, this))
      return null;
    var o = t || new h(), a = this.getBBox(o, r);
    if (a && a.expanded(n, n, n, n).containsPoint(e)) {
      var s = this._getPartInfoAt(e, o, n);
      if (s)
        return s;
    }
    return null;
  }, g.prototype.isRelativeToPage = function () {
    return !1;
  }, g.prototype._showOutline = function () {
    return !0;
  }, g.prototype._geometryChange = function (e) {
    this.requestInvalidation();
  }, g.prototype.toString = function () {
    return "[Object GSelectionPositionEditor]";
  }, e.exports = g;
}
