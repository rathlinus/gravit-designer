/**
 * Module 233 - GCompoundShape
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
  var n = i(264), r = i(2), o = i(56), a = i(28), s = i(11), l = i(63), h = i(6), A = i(54), c = i(87), p = i(22), u = (i(7), i(0)), d = i(9);
  function g() {
    o.call(this), this._setDefaultProperties(g.VisualProperties), this._paintSharp = !0, this.$evenodd = !0;
  }
  r.inherit("Compound Shape", g, o), g.VisualProperties = { evenodd: !1 }, g.GeometryProperties = {}, g.BLOCK_INTERSECTOR_CHILD_NUM = 100, g.prototype._resetVertexSource = !1, g.prototype._blockIntersector = !1, g.prototype._blockVertexComputation = !1, g.prototype._vertexSource = null, g.prototype._mainShape = function () {
    for (var e = this.getFirstChild(); null !== e; e = e.getNext())
      if (e.hasMixin(c))
        return e;
    return null;
  }, g.prototype.getNodeNameTranslated = function () {
    return d.getValue("GCompoundShape", "name", this.getNodeName());
  }, g.prototype._prepareVertices = function () {
    var e = this._mainShape();
    if (!e)
      return new A();
    for (var t = this.$trf && !this.$trf.isIdentity() && this.$trf.invertible() ? this.$trf.inverted() : null, i = [new l(e, t)], r = [], o = new Date().getTime(), a = e; null !== a; a = a.getNext())
      if (a.hasMixin(c)) {
        var s = [new l(a, t)];
        if (a !== e) {
          if (a.$bool) {
            if (i.length) {
              var h = new n(this._isEvenOddFill() ? n.PIP_CHECK_ODDEVEN : n.PIP_CHECK_WINDING, n.AUTO_MAX_PASSTHROUGH, !1, this._blockIntersector);
              h.initializeSources(i[0], s[0]) ? i = h.clipOp(a.$bool) || i : r = r.concat(s);
            }
          } else
            a.$bool = 0, r = r.concat(s);
          !this._blockIntersector && new Date().getTime() - o > 10000 && (console.warn("Compound shape computed too long. Falling back to less accurate algorithm."), this._blockIntersector = !0);
        } else
          i = s;
      }
    i = i && i.concat(r) || r;
    var p = this.$trf && !this.$trf.isIdentity() ? this.$trf : null;
    i && (i = i.filter(function (e) {
      return !!e && (e instanceof u && e.hasMixin(c) || e instanceof c || e instanceof A);
    }));
    var d = A.mergeVertexSources(i);
    return d = new l(d, p);
  }, g.prototype.rewindVertices = function () {
    return !this._blockVertexComputation && (this._vertexSource || (this._vertexSource = this._prepareVertices(), this._resetVertexSource = !1), !!this._vertexSource && (this._vertexSource.rewindVertices(0), !0));
  }, g.prototype.isFakeContainer = function () {
    return !0;
  }, g.prototype.readVertex = function (e) {
    return this._vertexSource.readVertex(e);
  }, g.prototype.hasVertexForRead = function () {
    return this._vertexSource.hasVertexForRead();
  }, g.prototype._handleChange = function (e, t) {
    if (this._handleVisualChangeForProperties(e, t, g.VisualProperties), e == r._Change.BeforePropertiesChange)
      t.properties.indexOf("bool") >= 0 && (this._resetVertexSource = !0), t.properties.indexOf("trf") >= 0 && (this._geometryBBox = null, this._preTransformRect = null, this._sourceBBox = null, this._paintBBox = null, this._childrenPaintBBox = null);
    else if (e == r._Change.AfterPropertiesChange) {
      if (t.properties.indexOf("vis") >= 0 && this._beginBlockChanges([p._Change.ChildGeometryUpdate]), t.properties.indexOf("trf") >= 0 && this._vertexSource) {
        var i = this.$trf;
        this._vertexSource instanceof l ? this._vertexSource.setTransform(i) : this._vertexSource && (this._vertexSource = new l(this._vertexSource, i));
      }
    } else
      e === p._Change.PrepareGeometryUpdate ? t || this._requestInvalidation() : e === p._Change.FinishGeometryUpdate ? this._resetVertexSource && (this._vertexSource = null) : e === r._Change.AfterChildInsert || e === r._Change.AfterChildRemove ? (this._resetVertexSource = !0, this._geometryBBox = null, this._preTransformRect = null, this._blockIntersector = this.getChildren().length > g.BLOCK_INTERSECTOR_CHILD_NUM) : e === p._Change.ChildGeometryUpdate ? (this._resetVertexSource = !0, this._notifyChange(p._Change.PrepareGeometryUpdate), this._notifyChange(p._Change.FinishGeometryUpdate, 0), this._resetFxCacheAndState(), e = null) : e === r._Change.Store ? this.storeProperties(t.blob, g.VisualProperties) : e === r._Change.Restore ? this.restoreProperties(t.blob, g.VisualProperties) : e === r._Change.PrepareRestore && (this._blockVertexComputation = !0);
    if (e && o.prototype._handleChange.call(this, e, t), e === r._Change.Restore)
      this._blockVertexComputation = !1, t.blob && !t.blob.hasOwnProperty("evenodd") && this.rewindVertices();
    else if (e == r._Change.AfterPropertiesChange) {
      t.properties.indexOf("vis") >= 0 && this._endBlockChanges([p._Change.ChildGeometryUpdate]);
    }
  }, g.prototype._beforeVisibilityUpdate = function () {
    this._beginBlockChanges([p._Change.ChildGeometryUpdate]);
  }, g.prototype._afterVisibilityUpdate = function () {
    this._endBlockChanges([p._Change.ChildGeometryUpdate]);
  }, g.prototype._styleFinishGeometryChange = function (e) {
    if (this._notifyChange(p._Change.FinishGeometryUpdate, 1), e)
      e instanceof a.Effect ? this._resetFxCacheAndState(e) : this._resetFxCacheAndState();
    else if (!e)
      return void this._resetFxCacheAndState();
    var t = this._mainShape();
    if (t) {
      this._beginBlockChanges([
        r._Change.BeforePropertiesChange,
        r._Change.AfterPropertiesChange
      ]);
      var i = t, n = this.getEffects(), o = i.getEffects();
      o._beginBlockChanges([
        r._Change.BeforeChildRemove,
        r._Change.AfterChildRemove,
        r._Change.BeforeChildInsert,
        r._Change.AfterChildInsert
      ]);
      try {
        for (var s = 0, l = n.getFirstChild(); null !== l; l = l.getNext()) {
          if (A = o.getChildByIndex(s))
            if (l.constructor.equals(A, l)) {
              var h = [a.Effect.GeometryProperties];
              l.constructor.GeometryProperties && h.push(l.constructor.GeometryProperties), l.constructor.VisualProperties && h.push(l.constructor.VisualProperties), h && (A._beginBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange
              ]), A.transferProperties(l, h, !0), A._endBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange
              ]));
            } else
              o.insertChild(l.clone(), A), o.removeChild(A);
          else
            o.insertChild(l.clone());
          s++;
        }
        for (var A = o.getChildByIndex(s); null !== A; A = o.getNext())
          o.removeChild(A);
      } finally {
        o._endBlockChanges([
          r._Change.BeforeChildRemove,
          r._Change.AfterChildRemove,
          r._Change.BeforeChildInsert,
          r._Change.AfterChildInsert
        ]);
      }
      this._endBlockChanges([
        r._Change.BeforePropertiesChange,
        r._Change.AfterPropertiesChange
      ]);
    }
  }, g.prototype._stylePropertiesUpdated = function (e, t) {
    if (this._mainShape()) {
      for (var i = this.getProperties(e), n = [], o = [], a = 0; a < e.length; a++)
        s.equals(t[a], i[a]) || (n.push(e[a]), o.push(i[a]));
      if (n.length) {
        this._beginBlockChanges([
          r._Change.BeforePropertiesChange,
          r._Change.AfterPropertiesChange
        ]);
        for (var l = this.getFirstChild(); null !== l; l = l.getNext())
          l.setProperties(n, o);
        this._endBlockChanges([
          r._Change.BeforePropertiesChange,
          r._Change.AfterPropertiesChange
        ]);
      }
    }
  }, g.prototype._mergeBoxes = function () {
    if (!this._mainShape())
      return null;
    var e;
    e = this._mainShape() instanceof g ? this._mainShape()._mergeBoxes() : this._mainShape().getGeometryBBox() || this._mainShape()._calculateGeometryBBox();
    for (var t = null, i = this.getFirstChild().getNext(); null !== i; i = i.getNext()) {
      i.$bool === n.AND && (r = i instanceof g ? i._mergeBoxes() : i.getGeometryBBox() || i._calculateGeometryBBox()) && (t ? t = t.united(e.intersected(r)) : e && (t = e.intersected(r)));
    }
    for (i = this.getFirstChild().getNext(); null !== i; i = i.getNext()) {
      switch (i.$bool) {
      case n.OR:
      case n.XOR:
        (r = i instanceof g ? i._mergeBoxes() : i.getGeometryBBox() || i._calculateGeometryBBox()) && (t ? t = t.united(r) : e && (t = e.united(r)));
      }
    }
    for (i = this.getFirstChild().getNext(); null !== i; i = i.getNext()) {
      var r;
      i.$bool === n.SUB && (r = i instanceof g ? i._mergeBoxes() : i.getGeometryBBox() || i._calculateGeometryBBox()) && (t ? t = t.subtracted(r) : e && (t = e.subtracted(r)));
    }
    return t || (t = e), t;
  }, g.prototype.assignFrom = function (e) {
    e instanceof g && this.transferProperties(e, [g.VisualProperties]), o.prototype.assignFrom.call(this, e);
  }, g.prototype.getCenter = function (e) {
    var t = this.getGeometryBBox(), i = t ? t.getSide(h.Side.CENTER) : null;
    return i && !e && this.$trf && this.$trf.invertible() && (i = this.$trf.inverted().mapPoint(i)), i;
  }, g.prototype._requireMiterLimitApproximation = function () {
    return this.getGeometryBBox() && !this.getGeometryBBox().isEmpty();
  }, g.prototype._invalidateGeometryForChildUpdate = function (e) {
  }, g.prototype._invalidatePaintBoxForChildUpdate = function () {
  }, g.prototype._isEvenOddFill = function () {
    return !!this.$evenodd;
  }, g.prototype._handleVisualChangeForProperties = function (e, t, i) {
    e == r._Change.AfterPropertiesChange && t.properties.indexOf("evenodd") >= 0 && (this._collidesWithChildrenSeparate = void 0, this._collidesWithChildren = void 0), o.prototype._handleVisualChangeForProperties.call(this, e, t, i);
  }, g.prototype._paintContents = function (e) {
  }, g.prototype._paintChildren = function (e) {
  }, g.prototype.transform = function (e, t, i) {
    this.beginUpdate();
    try {
      e && !e.isIdentity() && (this._layoutTransform = e, this._relayoutNow = !this._relayout, this._relayout = !0, this.setProperty("trf", this.$trf ? this.$trf.multiplied(e) : e), this._transformChildren(e, t, i), this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null, this._relayoutNow = !1));
    } finally {
      this.endUpdate();
    }
  }, g.prototype.findPivots = function (e, t) {
    for (var i = null, n = this.getFirstChild(); null != n; n = n.getNext()) {
      var r = n.findPivots(!1, t);
      r && (i = i ? i.concat(r) : r);
    }
    return i;
  }, g.prototype.toString = function () {
    return "[GCompoundShape]";
  }, e.exports = g;
}
