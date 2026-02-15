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

function (exports, module, require) {
  var n = require(264) /* GVertexPolyBoolean */, r = require(2) /* GNode */, o = require(56) /* GShape */, a = require(28) /* GStylable */, s = require(11) /* GUtil */, l = require(63) /* GVertexTransformer */, h = require(6) /* GRect */, A = require(54) /* GVertexContainer */, c = require(87) /* GVertexSource */, p = require(22) /* GElement */, u = (require(7) /* GTransform */, require(0) /* GObject */), d = require(9) /* GLocale */;
  function g() {
    o.call(this), this._setDefaultProperties(g.VisualProperties), this._paintSharp = true, this.$evenodd = true;
  }
  r.inherit("Compound Shape", g, o), g.VisualProperties = { evenodd: false }, g.GeometryProperties = {}, g.BLOCK_INTERSECTOR_CHILD_NUM = 100, g.prototype._resetVertexSource = false, g.prototype._blockIntersector = false, g.prototype._blockVertexComputation = false, g.prototype._vertexSource = null, g.prototype._mainShape = function () {
    for (var exports = this.getFirstChild(); null !== exports; exports = exports.getNext())
      if (exports.hasMixin(c))
        return exports;
    return null;
  }, g.prototype.getNodeNameTranslated = function () {
    return d.getValue("GCompoundShape", "name", this.getNodeName());
  }, g.prototype._prepareVertices = function () {
    var e = this._mainShape();
    if (!e)
      return new A();
    for (var module = this.$trf && !this.$trf.isIdentity() && this.$trf.invertible() ? this.$trf.inverted() : null, require = [new l(e, module)], r = [], o = new Date().getTime(), a = e; null !== a; a = a.getNext())
      if (a.hasMixin(c)) {
        var s = [new l(a, module)];
        if (a !== e) {
          if (a.$bool) {
            if (require.length) {
              var h = new n(this._isEvenOddFill() ? n.PIP_CHECK_ODDEVEN : n.PIP_CHECK_WINDING, n.AUTO_MAX_PASSTHROUGH, false, this._blockIntersector);
              h.initializeSources(require[0], s[0]) ? require = h.clipOp(a.$bool) || require : r = r.concat(s);
            }
          } else
            a.$bool = 0, r = r.concat(s);
          !this._blockIntersector && new Date().getTime() - o > 10000 && (console.warn("Compound shape computed too long. Falling back to less accurate algorithm."), this._blockIntersector = true);
        } else
          require = s;
      }
    require = require && require.concat(r) || r;
    var p = this.$trf && !this.$trf.isIdentity() ? this.$trf : null;
    require && (require = require.filter(function (e) {
      return !!e && (e instanceof u && e.hasMixin(c) || e instanceof c || e instanceof A);
    }));
    var d = A.mergeVertexSources(require);
    return d = new l(d, p);
  }, g.prototype.rewindVertices = function () {
    return !this._blockVertexComputation && (this._vertexSource || (this._vertexSource = this._prepareVertices(), this._resetVertexSource = false), !!this._vertexSource && (this._vertexSource.rewindVertices(0), true));
  }, g.prototype.isFakeContainer = function () {
    return true;
  }, g.prototype.readVertex = function (e) {
    return this._vertexSource.readVertex(e);
  }, g.prototype.hasVertexForRead = function () {
    return this._vertexSource.hasVertexForRead();
  }, g.prototype._handleChange = function (e, t) {
    if (this._handleVisualChangeForProperties(e, t, g.VisualProperties), e == r._Change.BeforePropertiesChange)
      t.properties.indexOf("bool") >= 0 && (this._resetVertexSource = true), t.properties.indexOf("trf") >= 0 && (this._geometryBBox = null, this._preTransformRect = null, this._sourceBBox = null, this._paintBBox = null, this._childrenPaintBBox = null);
    else if (e == r._Change.AfterPropertiesChange) {
      if (t.properties.indexOf("vis") >= 0 && this._beginBlockChanges([p._Change.ChildGeometryUpdate]), t.properties.indexOf("trf") >= 0 && this._vertexSource) {
        var require = this.$trf;
        this._vertexSource instanceof l ? this._vertexSource.setTransform(require) : this._vertexSource && (this._vertexSource = new l(this._vertexSource, require));
      }
    } else
      e === p._Change.PrepareGeometryUpdate ? t || this._requestInvalidation() : e === p._Change.FinishGeometryUpdate ? this._resetVertexSource && (this._vertexSource = null) : e === r._Change.AfterChildInsert || e === r._Change.AfterChildRemove ? (this._resetVertexSource = true, this._geometryBBox = null, this._preTransformRect = null, this._blockIntersector = this.getChildren().length > g.BLOCK_INTERSECTOR_CHILD_NUM) : e === p._Change.ChildGeometryUpdate ? (this._resetVertexSource = true, this._notifyChange(p._Change.PrepareGeometryUpdate), this._notifyChange(p._Change.FinishGeometryUpdate, 0), this._resetFxCacheAndState(), e = null) : e === r._Change.Store ? this.storeProperties(t.blob, g.VisualProperties) : e === r._Change.Restore ? this.restoreProperties(t.blob, g.VisualProperties) : e === r._Change.PrepareRestore && (this._blockVertexComputation = true);
    if (e && o.prototype._handleChange.call(this, e, t), e === r._Change.Restore)
      this._blockVertexComputation = false, t.blob && !t.blob.hasOwnProperty("evenodd") && this.rewindVertices();
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
      var require = t, n = this.getEffects(), o = require.getEffects();
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
              ]), A.transferProperties(l, h, true), A._endBlockChanges([
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
      for (var require = this.getProperties(e), n = [], o = [], a = 0; a < e.length; a++)
        s.equals(t[a], require[a]) || (n.push(e[a]), o.push(require[a]));
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
    for (var module = null, require = this.getFirstChild().getNext(); null !== require; require = require.getNext()) {
      require.$bool === n.AND && (r = require instanceof g ? require._mergeBoxes() : require.getGeometryBBox() || require._calculateGeometryBBox()) && (module ? module = module.united(e.intersected(r)) : e && (module = e.intersected(r)));
    }
    for (require = this.getFirstChild().getNext(); null !== require; require = require.getNext()) {
      switch (require.$bool) {
      case n.OR:
      case n.XOR:
        (r = require instanceof g ? require._mergeBoxes() : require.getGeometryBBox() || require._calculateGeometryBBox()) && (module ? module = module.united(r) : e && (module = e.united(r)));
      }
    }
    for (require = this.getFirstChild().getNext(); null !== require; require = require.getNext()) {
      var r;
      require.$bool === n.SUB && (r = require instanceof g ? require._mergeBoxes() : require.getGeometryBBox() || require._calculateGeometryBBox()) && (module ? module = module.subtracted(r) : e && (module = e.subtracted(r)));
    }
    return module || (module = e), module;
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
    e == r._Change.AfterPropertiesChange && t.properties.indexOf("evenodd") >= 0 && (this._collidesWithChildrenSeparate = undefined, this._collidesWithChildren = undefined), o.prototype._handleVisualChangeForProperties.call(this, e, t, i);
  }, g.prototype._paintContents = function (e) {
  }, g.prototype._paintChildren = function (e) {
  }, g.prototype.transform = function (e, t, i) {
    this.beginUpdate();
    try {
      e && !e.isIdentity() && (this._layoutTransform = e, this._relayoutNow = !this._relayout, this._relayout = true, this.setProperty("trf", this.$trf ? this.$trf.multiplied(e) : e), this._transformChildren(e, t, i), this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null, this._relayoutNow = false));
    } finally {
      this.endUpdate();
    }
  }, g.prototype.findPivots = function (e, t) {
    for (var require = null, n = this.getFirstChild(); null != n; n = n.getNext()) {
      var r = n.findPivots(false, t);
      r && (require = require ? require.concat(r) : r);
    }
    return require;
  }, g.prototype.toString = function () {
    return "[GCompoundShape]";
  }, exports.exports = g;
}
