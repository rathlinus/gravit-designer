/**
 * Module 506 - GAnnotationsList
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
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(84) /* GAnnotation */, a = require(22) /* GElement */, s = require(6) /* GRect */, l = require(59) /* GVertexInfo */, h = require(7) /* GTransform */, A = require(142) /* GDate */;
  function c() {
    r.call(this), this._setDefaultProperties(c.MetaProperties), this.setProperty("aid", this.getId());
  }
  n.inheritAndMix("annlst", c, r, [
    n.Container,
    n.Properties,
    n.Store
  ]), c.MetaProperties = {
    pgid: null,
    Guid: null,
    aid: null,
    rmd: false,
    sid: null
  }, c.prototype.restored = false, c.prototype._geometryBBox = null, c.prototype._paintBBox = null, c.prototype._savedPaintBBox = null, c.prototype._savedGeometryBBox = null, c.prototype._preTransformRect = null, c.prototype._preTransformRectTrf = null, c.prototype.appendAnnotation = function (e, t, i, n, r) {
    for (var a = -1, s = this.getFirstChild(); null !== s; s = s.getNext())
      a = Math.max(a, s.getProperty("seq") || 0);
    e.setProperties([
      "name",
      "uid",
      "time",
      "seq",
      "loc",
      "typ"
    ], [
      t || e.getProperty("name"),
      i || o.MetaProperties.uid,
      A.now(),
      a + 1,
      r || o.MetaProperties.loc,
      n || o.MetaProperties.typ
    ]), this.appendChild(e);
  }, c.prototype.paint = function (e) {
    if (this.isPaintable(e))
      for (var module = this.getFirstChild(); null !== module; module = module.getNext())
        module instanceof a && module.paint(e);
  }, c.prototype.getSelected = function () {
    return this.acceptChildren(function (e) {
      e.hasFlag(n.Flag.Selected) && selectedAnnots.push(e);
    }), [];
  }, c.prototype.getSourceBBox = function () {
    return null;
  }, c.prototype.getGeometryBBox = function () {
    return null == this._geometryBBox && (this._geometryBBox = this._calculateChildrenGeometryBBox()), this._geometryBBox;
  }, c.prototype.getPaintBBox = function (e, t) {
    return null == this._paintBBox && (this._paintBBox = this._calculateChildrenPaintBBox(e, t)), this._paintBBox;
  }, c.prototype._calculatePreTransformRect = function (e) {
    var t = null;
    if (e && e.invertible()) {
      var require = null;
      (t = this.getGeometryBBox()) ? (require = e.inverted().mapQuadrilateral(t), t = s.fromPoints.apply(null, require)) : t = null;
    } else
      t = this.getGeometryBBox();
    return t;
  }, c.prototype.getPreTransformRect = function (e) {
    return null != this._preTransformRect && h.equals(e, this._preTransformRectTrf) || (this._preTransformRect = this._calculatePreTransformRect(e), this._preTransformRectTrf = e), this._preTransformRect;
  }, c.prototype.getCustomCollisionBBox = function () {
    return null;
  }, c.prototype._calculateChildrenGeometryBBox = function () {
    for (var exports = null, module = this.getFirstChild(); null != module; module = module.getNext())
      if (module instanceof a) {
        var require = module.getGeometryBBox();
        require && (exports = exports ? exports.united(require) : require);
      }
    return exports || null;
  }, c.prototype.getChildrenPaintBBox = function (e, t) {
    return this.getPaintBBox();
  }, c.prototype.getChildrenGeometryBBox = function (e, t) {
    return this.getGeometryBBox();
  }, c.prototype._calculateChildrenPaintBBox = function (e, t) {
    for (var require = null, n = this.getFirstChild(); null != n; n = n.getNext())
      if (n instanceof a) {
        var r = n.getPaintBBox();
        r && (r.getHeight() > 0 || r.getWidth() > 0) && (require = require ? require.united(r) : r);
      }
    return require || new s(0, 0, 0, 0);
  }, c.prototype.hitTest = function (e, t, i, n, r, o, s, l, h, A) {
    return a.prototype.hitTest.call(this, e, t, i, n, r, o, s, l, h, A);
  }, c.prototype._detailHitTest = function () {
    return null;
  }, c.prototype.getCollisions = function (e, t, i, n, r, o, s) {
    return a.prototype.getCollisions.call(this, e, t, i, n, r, o, s);
  }, c.prototype._checkElementCollision = function (e, t, i, n, r) {
    if (0 != (t & a.CollisionFlag.GeometryBBox) || 0 != (t & a.CollisionFlag.PaintBBox)) {
      if (i && false === i(this))
        return false;
      var o = 0 != (t & a.CollisionFlag.PaintBBox) ? this.getPaintBBox() : this.getGeometryBBox(), s = this.getCustomCollisionBBox();
      s && (o = o && o.united(s) || s), o && (0 != (t & a.CollisionFlag.Partial) ? this._checkPartialCollision(r, o, e, true, t, n) : r.containsRect(o, true) && n(this));
    }
    return true;
  }, c.prototype._checkPartialCollision = function (e, t, i, n, r, o) {
    e.intersectsRect(t, n) && o(this);
  }, c.prototype.isFullUnderCollision = function (e) {
    var t = false, i = this.getPaintBBox();
    i && (t = l.calculateBounds(e, true).containsRect(i, true));
    return t;
  }, c.prototype.beginUpdate = function (e) {
    this._updateCounter ? this._updateCounter++ : (this._updateCounter = 1, this._notifyChange(a._Change.PrepareGeometryUpdate), this._blockUpdateChanges([
      true,
      !!e
    ]));
  }, c.prototype.endUpdate = function (e) {
    null != this._updateCounter && 0 == --this._updateCounter && (this._releaseUpdateChanges([
      true,
      !!e
    ]), this._notifyChange(a._Change.FinishGeometryUpdate, e ? -1 : 0), delete this._updateCounter);
  }, c.prototype.isPaintable = function (e, t) {
    if (this.hasFlag(a.Flag.NoPaint))
      return false;
    if (!e)
      return !!this._scene && !!this.getParent();
    var i = this.getPaintBBox(e.configuration.multiPageView, t);
    if (null == i || i.isEmpty())
      return false;
    if (e) {
      if (!e.configuration.isElementAnnotationsVisible())
        return false;
      if (e.dirtyMatcher && !e.dirtyMatcher.isDirty(i))
        return false;
      if (e.configuration && e.configuration.clipArea && !e.configuration.clipArea.intersectsRect(i))
        return false;
    }
    return true;
  }, c.prototype._requestInvalidateNode = function (e) {
    if (e.isPaintable()) {
      var module = e.getPaintBBox();
      module && this._requestInvalidationArea(module);
    }
  }, c.prototype._requestInvalidationArea = function (e) {
    this._scene && (this._scene._invalidateArea(e, this), this._handleChange(a._Change.InvalidationRequested, e));
  }, c.prototype._requestInvalidation = function () {
    this._requestInvalidateNode(this);
  }, c.prototype._invalidateOldPaintBBox = function () {
    this._savedPaintBBox && !this._savedPaintBBox.isEmpty() && this._requestInvalidationArea(this._savedPaintBBox);
  }, c.prototype._handleChange = function (e, t) {
    if (e === n._Change.PrepareRestore)
      this.restored = true;
    else if (e === n._Change.Store)
      this.storeProperties(t.blob, c.MetaProperties, function (e, i) {
        return "pgid" !== e || t.options && (!t.options || t.options.copy) ? ("Guid" === e || "sid" === e || "aid" === e || "pgid" === e) && t.options && t.options.copy ? null : i : this.getParent() ? this.getParent().getId() : null;
      }.bind(this));
    else if (e === n._Change.Restore)
      this.restoreProperties(t.blob, c.MetaProperties);
    else if (e === a._Change.InvalidationRequest)
      this.isPaintable() && this._requestInvalidation();
    else if (e === a._Change.InvalidationRequested)
      this.getParent() && this.getParent()._notifyChange(a._Change.InvalidationRequested, t);
    else if (e == a._Change.PrepareGeometryUpdate)
      this._canEventBeSent(a.GeometryChangeEvent) && this._sendEvent(new a.GeometryChangeEvent(this, a.GeometryChangeEvent.Type.Before)), this._savedGeometryBBox = this.getGeometryBBox(), this._savedPaintBBox = this.isPaintable() && this.getPaintBBox() || null;
    else if (e == a._Change.FinishGeometryUpdate) {
      var require, o = 0, l = false;
      t && Array.isArray(t) && (require = t[1], t = t[0]), "number" == typeof t && (o = t), 2 === o && (o = 0, l = true), 1 === o ? this._paintBBox = null : 0 === o && (this._geometryBBox = null, this._preTransformRect = null, this._paintBBox = null);
      var h = this.isPaintable() && this.getPaintBBox() || null, A = (this.getGeometryBBox(), !s.equals(this._savedPaintBBox, h));
      this.getParent() && (0 === o ? this.getParent()._notifyChange(a._Change.ChildGeometryUpdate, [
        this,
        A,
        require
      ]) : A && 1 === o && this.getParent()._notifyChange(a._Change.ChildVisualUpdate, [this])), this._canEventBeSent(a.GeometryChangeEvent) && this._sendEvent(new a.GeometryChangeEvent(this, a.GeometryChangeEvent.Type.After)), this.isPaintable() && !l && (A && this._invalidateOldPaintBBox(), this._requestInvalidation()), this._savedGeometryBBox = null, this._savedPaintBBox = null;
    } else if (e == a._Change.ChildGeometryUpdate)
      this._invalidateGeometryForChildUpdate(t[1]), this._canEventBeSent(a.GeometryChangeEvent) && this._sendEvent(new a.GeometryChangeEvent(this, a.GeometryChangeEvent.Type.Child)), this.getParent() && this.getParent()._notifyChange(e, t);
    else if (e == a._Change.ChildVisualUpdate)
      this._invalidatePaintBoxForChildUpdate(), this.getParent() && this.getParent()._notifyChange(e, t);
    else if (e == n._Change.AfterChildInsert)
      t instanceof a && (this._notifyChange(a._Change.ChildGeometryUpdate, [
        t,
        1
      ]), t._handleChange(a._Change.InvalidationRequest));
    else if (e == n._Change.BeforeChildRemove)
      t instanceof a && this._requestInvalidateNode(t);
    else if (e == n._Change.AfterChildRemove)
      t instanceof a && this._notifyChange(a._Change.ChildGeometryUpdate, [
        t,
        1
      ]);
    else if (e == n._Change.AfterFlagChange)
      switch (t.flag) {
      case a.Flag.NoPaint:
        this._requestInvalidation();
      }
    r.prototype._handleChange.call(this, e, t);
  }, c.prototype._invalidatePaintBoxForChildUpdate = function () {
    this._paintBBox = null;
  }, c.prototype._invalidateGeometryForChildUpdate = function (e) {
    e && (this._geometryBBox = null, this._preTransformRect = null, this._paintBBox = null);
  }, c.prototype.resolve = function (e) {
    this.beginUpdate();
    for (var module = this.getFirstChild(); module; module = module.getNext())
      e && e !== module.getProperty("uid") || module.setProperty("rsv", true);
    this.endUpdate();
  }, c.prototype.validateInsertion = function (e, t) {
    return "page" === n.getName(e);
  }, exports.exports = c;
}
