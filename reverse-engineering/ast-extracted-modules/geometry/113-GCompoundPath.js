/**
 * Module 113 - GCompoundPath
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
  var n = i(2), r = i(63), o = i(56), a = i(141), s = i(104), l = i(22), h = i(76), A = i(59), c = i(45), p = i(9), u = i(140), d = i(6);
  function g() {
    o.call(this), this._setDefaultProperties(g.VisualProperties, g.MetaProperties), this._paths = new g.Paths(), this._paths._setParent(this), this._paintSharp = !0;
  }
  n.inherit("compoundpath", g, o), g.VisualProperties = { evenodd: !0 }, g.GeometryProperties = {}, g.MetaProperties = { csc: !0 }, g.Paths = function () {
  }, n.inheritAndMix("compoundpath.paths", g.Paths, n, [
    n.Container,
    n.Multireference,
    l.Accelerated
  ]), g.Paths.prototype.validateInsertion = function (e, t) {
    return e instanceof g;
  }, g.Paths.prototype.validateRemoval = function () {
    return !1;
  }, g.Paths.prototype.serialize = function () {
    var e;
    e = this._multiReferenceId ? [
      "&",
      this._multiReferenceId
    ] : [];
    for (var t = this.getFirstChild(); null !== t; t = t.getNext())
      e.push(n.serialize(t));
    return e;
  }, g.Paths.prototype.deserialize = function (e) {
    var t;
    for (t = "&" === e[0] ? 2 : 0; t < e.length;) {
      var i = n.deserialize(e[t++]);
      i ? this.appendChild(i) : console.warn("Cannot deserialize path");
    }
  }, g.Paths.prototype._handleChange = function (e, t) {
    var i = this._parent;
    if (i) {
      switch (e) {
      case n._Change.BeforeChildRemove:
      case n._Change.BeforeChildInsert:
        i._notifyChange(l._Change.PrepareGeometryUpdate);
        break;
      case n._Change.AfterChildRemove:
      case n._Change.AfterChildInsert:
        if (i.rewindVertices(0), i._notifyChange(l._Change.FinishGeometryUpdate), e == n._Change.AfterChildInsert)
          t.setFlag(i._flags);
        break;
      case l._Change.ChildGeometryUpdate:
        i._notifyChange(l._Change.PrepareGeometryUpdate), i.rewindVertices(0), i._notifyChange(l._Change.FinishGeometryUpdate);
      }
      l.Accelerated.prototype._handleChildrenStructureChange.call(this, e, t);
    }
    n.prototype._handleChange.call(this, e, t);
  }, g.Paths.prototype._setWorkspace = function (e) {
    l.prototype._setWorkspace.call(this, e);
  }, g.Paths.prototype._attachToParent = function (e) {
    l.prototype._attachToParent.call(this, e);
  }, g.Paths.prototype._detachFromParent = function (e) {
    l.prototype._detachFromParent.call(this, e);
  }, g.Paths.prototype._setScene = function (e) {
    this.acceptChildren(function (t) {
      t instanceof l && t._setScene(e);
    });
  }, g.Paths.prototype.toString = function () {
    return "[Object GCompoundPath.Paths]";
  }, g.prototype.getNodeNameTranslated = function () {
    return p.getValue("GCompoundPath", "name", this.getNodeName());
  }, g.isOwnedPath = function (e) {
    var t = e.getParent();
    return t && t instanceof g.Paths;
  }, g.prototype._referencedNodes = null, g.prototype._delayedRefresh = !1, g.prototype._paths = null, g.prototype._currentPath = null, g.prototype.rewindVertices = function (e) {
    if (this._currentPath = this._paths.getFirstChild(), 0 === e && this._currentPath) {
      for (var t = this._currentPath; null != t; t = t.getNext())
        t.rewindVertices(0);
      return !0;
    }
    return !1;
  }, g.prototype.readVertex = function (e) {
    return !!this._currentPath && (!!this._currentPath.readVertex(e) || (this._currentPath = this._currentPath.getNext(), this._currentPath && this._currentPath.readVertex(e)));
  }, g.prototype.hasVertexForRead = function () {
    if (this._currentPath) {
      if (this._currentPath.hasVertexForRead())
        return !0;
      var e = this._currentPath.getNext();
      if (e && e.hasVertexForRead())
        return !0;
    }
    return !1;
  }, g.prototype.getPaths = function () {
    return this._paths;
  }, g.prototype.getSubnodeIds = function (e) {
    o.prototype.getSubnodeIds.call(this, e), this._paths && (e[this._paths.getMultireferenceId()] && this._paths.resetMultireference(), e[this._paths.getMultireferenceId()] = this._paths, this._paths.getSubnodeIds(e));
  }, g.prototype._getVertexHitCandidates = function (e, t, i) {
    var n = t ? t.inverted().mapPoint(e) : e, r = new d(n.getX() - i / 2, n.getY() - i / 2, i, i);
    return this._paths.retrieveChildrenInPaintBBox(r, u.RETRIEVE_MODE_INTERSECT) || [];
  }, g.prototype._hitInside = function (e, t, i, n) {
    for (var o = 0, a = 0; a < n.length; a++) {
      var s = t ? new r(n[a], t) : n[a];
      if (A.hitTest(e.getX(), e.getY(), s, 0, !0, i)) {
        if (!i.outline) {
          if (!this.getProperty("evenodd"))
            return !0;
          ++o;
        }
        i.x = null, i.y = null, i.slope = null, i.outline = null, i.segment = null;
      }
    }
    return !!(o > 0 && 1 & o) && (i.outline = !1, !0);
  }, g.prototype._doPixelAlignment = function (e, t) {
    var i = this._getAlignTransformation(e);
    return t = new r(t, i), t = new a(t, e.getTransform());
  }, g.prototype._referenceEvent = function (e) {
    if (e.target === this) {
      var t = e.linked;
      e.reference instanceof c.AnchorPoint && "connector" === n.getName(e.reference.getPath()) && (e.reference.getPath().attachPath(e.reference, t ? this : null), o.prototype._referenceEvent.call(this, e));
    }
  }, g.prototype._handleReferencesOnSceneAttach = function () {
    o.prototype._handleReferencesOnSceneAttach.call(this, this._referencedNodes), this._referencedNodes = null;
  }, g.prototype._handleVisualChangeForProperties = function (e, t, i) {
    e == n._Change.AfterPropertiesChange && t.properties.indexOf("evenodd") >= 0 && (this._collidesWithChildrenSeparate = void 0, this._collidesWithChildren = void 0), o.prototype._handleVisualChangeForProperties.call(this, e, t, i);
  }, g.prototype._handleChange = function (e, t) {
    if (this._handleVisualChangeForProperties(e, t, g.VisualProperties), e === n._Change.Store) {
      if (this.storeProperties(t.blob, g.VisualProperties), this.storeProperties(t.blob, g.MetaProperties), t.blob.paths = this._paths.serialize(), this._scene) {
        var i = [];
        this._scene.visitReferences(this, function (e) {
          e instanceof c.AnchorPoint && "connector" === n.getName(e.getPath()) && i.push(e.serialize());
        }), t.blob.refanchors = i;
      }
    } else if (e === n._Change.Restore)
      this.restoreProperties(t.blob, g.MetaProperties), this.restoreProperties(t.blob, g.VisualProperties), t.blob.hasOwnProperty("paths") && this._paths.deserialize(t.blob.paths), this._referencedNodes = [], t.blob.hasOwnProperty("refanchors") && t.blob.refanchors.forEach(function (e) {
        var t = new c.AnchorPoint();
        t.deserialize(e), this._referencedNodes.push(t);
      }.bind(this));
    else if (e === n._Change.ParentAttached || e === n._Change.ParentDetach)
      this._paths && (this._paths._detachFromParent(this), e === n._Change.ParentAttached ? this._paths._attachToParent(this) : this._scene && this._scene.visitReferences(this, function (e) {
        if (e instanceof c.AnchorPoint && "connector" === n.getName(e.getPath())) {
          var t = e.getPath();
          t && t.getParent() && t.getParent().removeChild(t);
        }
      }.bind(this)));
    else if (e === n._Change.WorkspaceAttached || e === n._Change.WorkspaceDetach) {
      if (this._paths) {
        this._paths._setWorkspace(e === n._Change.WorkspaceDetach ? null : this._workspace);
        for (var r = this._paths.getFirstChild(); null != r; r = r.getNext())
          r._setWorkspace(e === n._Change.WorkspaceDetach ? null : this._workspace);
      }
    } else if (e === h._Change.SceneAttached || e === h._Change.SceneDetached) {
      if (this._paths) {
        this._paths._setScene(e === h._Change.SceneDetached ? null : this._scene);
        for (r = this._paths.getFirstChild(); null != r; r = r.getNext())
          r._setScene(e === h._Change.SceneDetached ? null : this._scene);
      }
    } else if (e === n._Change.AfterPropertiesChange)
      if (t.properties.indexOf("refs") >= 0)
        this._scene || (this._delayedRefresh = !0);
      else if (t.properties.indexOf("csc") >= 0 && this._paths)
        for (r = this._paths.getFirstChild(); null != r; r = r.getNext())
          r._beginBlockChanges([
            n._Change.BeforePropertiesChange,
            n._Change.AfterPropertiesChange
          ]), r.setProperty("csc", this.getProperty("csc"), t.custom, t.forceEvent, t.temporary), r._endBlockChanges([
            n._Change.BeforePropertiesChange,
            n._Change.AfterPropertiesChange
          ]);
    if (o.prototype._handleChange.call(this, e, t), e !== l._Change.FinishGeometryUpdate || this.isRecordedTransaction() && !this.isRestoring() || (this._scene ? this._scene.visitReferences(this, function (e) {
        e instanceof c.AnchorPoint && "connector" === n.getName(e.getPath()) && e.getPath().relayout();
      }.bind(this)) : this._delayedRefresh = !0), e === h._Change.SceneAttached && this._delayedRefresh && (this._scene.visitReferences(this, function (e) {
        e instanceof c.AnchorPoint && "connector" === n.getName(e.getPath()) && e.getPath().relayout();
      }.bind(this)), this._delayedRefresh = !1), e == n._Change.AfterFlagChange && t.set) {
      var a = t;
      this._currentPath = this._paths.getFirstChild();
      for (r = this._currentPath; null != r; r = r.getNext())
        r.setFlag(a.flag);
    } else if (e == n._Change.BeforeFlagChange && !t.set) {
      a = t;
      this._currentPath = this._paths.getFirstChild();
      for (r = this._currentPath; null != r; r = r.getNext())
        r.removeFlag(a.flag);
    }
  }, g.prototype._handleChildrenStructureChange = function (e, t) {
    l.Accelerated.prototype._handleChildrenStructureChange.call(this._paths, e, t);
  }, g.prototype.setTransform = function (e) {
    this.setProperty("trf", e);
    for (var t = this._paths.getFirstChild(); null != t; t = t.getNext())
      t.setTransform(e);
  }, g.prototype.assignFrom = function (e) {
    e instanceof g && this.transferProperties(e, [g.VisualProperties]), o.prototype.assignFrom.call(this, e);
  }, g.prototype.transform = function (e, t, i) {
    this.beginUpdate();
    try {
      if (o.prototype.transform.call(this, e, t, i), e && !e.isIdentity())
        for (var r = this._paths.getFirstChild(); null != r; r = r.getNext())
          r.transform(e);
      this._scene && this._scene.visitReferences(this, function (e) {
        e instanceof c.AnchorPoint && "connector" === n.getName(e.getPath()) && e.getPath().relayout();
      }.bind(this));
    } finally {
      this.endUpdate();
    }
  }, g.prototype._checkPartialCollision = function (e, t, i, n, r, a) {
    var s = r & l.CollisionFlag.CollisionInfo, h = r & l.CollisionFlag.FullyContained;
    if (s && h)
      return o.prototype._checkPartialCollision.call(this, e, t, i, n, r, a);
    if (e.intersectsRect(t, n)) {
      var A = 0 != (r & l.CollisionFlag.PaintBBox), c = h ? u.RETRIEVE_MODE_FULLYCONTAINED : u.RETRIEVE_MODE_INTERSECT, p = A ? this._paths.retrieveChildrenInPaintBBox(e, c) : this._paths.retrieveChildrenInGeometryBBox(e, c);
      if (p) {
        var d = 0;
        if (s);
        else if (this._isEvenOddFill()) {
          var g = [], f = !1;
          for (m = 0; m < p.length && !f; m++) {
            y = A ? p[m].getPaintBBox() : p[m].getGeometryBBox();
            p[m]._checkPartialCollision(e, y, i, n, r | l.CollisionFlag.CollisionInfo, function (e) {
              g.push(e), f = f || e.intersects;
            });
          }
          if (f)
            return void a(this);
          for (m = 0; m < g.length; m++)
            if (!g[m].containsArea)
              return void a(this);
        } else {
          for (var m = 0; m < p.length && !d; m++) {
            var y = A ? p[m].getPaintBBox() : p[m].getGeometryBBox();
            p[m]._checkPartialCollision(e, y, i, n, r, function () {
              d += 1;
            });
          }
          d && a(this);
        }
      }
    }
  }, g.prototype.findPivots = function (e, t) {
    if (t) {
      var i = this._paths.retrieveChildrenInGeometryBBox(t, u.RETRIEVE_MODE_INTERSECT);
      return i && i.length ? i.reduce(function (e, i) {
        return e.concat(i.findPivots(!1, t) || []);
      }, i[0].findPivots(!1, t) || []) : null;
    }
    for (var n = null, r = this._paths.getFirstChild(); null != r; r = r.getNext()) {
      var o = r.findPivots(!1, t);
      o && (n = n ? n.concat(o) : o);
    }
    return n;
  }, g.prototype.cloneSubPaths = function () {
    var e = this._paths.serialize(), t = new g.Paths();
    return t.deserialize(e), t;
  }, g.prototype.getCenter = function (e) {
    return s.prototype.getCenter.call(this, e);
  }, g.prototype._calculateGeometryBBox = function (e) {
    for (var t = null, i = this._paths.getFirstChild(); null != i; i = i.getNext()) {
      var n = i.getGeometryBBox(e);
      n && (n.getWidth() > 0 || n.getHeight() > 0) && (t = t ? t.united(n) : n);
    }
    return t || null;
  }, g.prototype._updateQTree = function () {
    this._paths._updateQTree();
  }, g.prototype._isEvenOddFill = function () {
    return !!this.$evenodd;
  }, g.prototype._beginBlockEvents = function (e) {
    n.prototype._beginBlockEvents.call(this, e);
    for (var t = this._paths.getFirstChild(); null != t; t = t.getNext())
      t._beginBlockEvents(e);
  }, g.prototype._endBlockEvents = function (e) {
    n.prototype._endBlockEvents.call(this, e);
    for (var t = this._paths.getFirstChild(); null != t; t = t.getNext())
      t._endBlockEvents(e);
  }, g.prototype.toString = function () {
    return "[GCompoundPath]";
  }, e.exports = g;
}
