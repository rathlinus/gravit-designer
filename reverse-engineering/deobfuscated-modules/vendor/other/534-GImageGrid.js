/**
 * Module 534 - GImageGrid
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
  var r = require(56) /* GShape */, o = (require(112) /* module */, require(2) /* GNode */), a = require(22) /* GElement */, s = require(63) /* GVertexTransformer */, l = require(6) /* GRect */, h = require(54) /* GVertexContainer */, A = require(7) /* GTransform */, c = require(11) /* GUtil */, p = require(5) /* GPoint */, u = require(95) /* GImage */, d = require(48) /* GVertex */, g = require(76) /* module */, f = require(12) /* GMath */;
  function m(e) {
    r.call(this);
    var t = m.VisualProperties;
    if (e) {
      t = c.extend({
        grid: [
          [
            [
              0.2,
              0.2
            ],
            [
              0.4,
              0.2
            ],
            [
              0.2,
              0.2
            ]
          ],
          [
            [
              0.3,
              0.3
            ],
            [
              0.3,
              0.3
            ],
            [
              0.4,
              0.3
            ]
          ],
          [
            [
              0.4,
              0.5
            ],
            [
              0.2,
              0.5
            ],
            [
              0.4,
              0.5
            ]
          ]
        ]
      }, m.VisualProperties);
    }
    this._images = new m.Images(), this._images._setParent(this), this._setDefaultProperties(t);
  }
  o.inherit("imagegrid", m, r), m.prototype._images = null, m.prototype._gridMeasure = null, m.prototype._vertexSource = null, m.GeometryProperties = { grid: null }, m.VisualProperties = {
    im: null,
    mg: 0.1,
    off: null
  }, m.Images = function () {
  }, o.inheritAndMix("imagegrid.images", m.Images, o, [
    o.Container,
    o.Multireference
  ]), m.Images.prototype.validateInsertion = function (e, t) {
    return e instanceof m;
  }, m.Images.prototype.validateRemoval = function () {
    return false;
  }, m.Images.prototype.serialize = function () {
    for (var exports = [], module = this.getFirstChild(); null !== module; module = module.getNext())
      exports.push(o.serialize(module));
    return exports;
  }, m.Images.prototype.deserialize = function (e) {
    for (var module = 0; module < e.length; ++module) {
      var i = o.deserialize(e[module]);
      this.appendChild(i);
    }
  }, m.Images.prototype._handleChange = function (e, t) {
    var i = this._parent;
    if (i)
      switch (e) {
      case o._Change.BeforeChildRemove:
      case o._Change.BeforeChildInsert:
        i._notifyChange(a._Change.PrepareGeometryUpdate);
        break;
      case o._Change.AfterChildRemove:
      case o._Change.AfterChildInsert:
        i.rewindVertices(0), i._notifyChange(a._Change.FinishGeometryUpdate);
        break;
      case a._Change.ChildGeometryUpdate:
        i._notifyChange(a._Change.PrepareGeometryUpdate), i.rewindVertices(0), i._notifyChange(a._Change.FinishGeometryUpdate);
      }
    o.prototype._handleChange.call(this, e, t);
  }, m.Images.prototype._setWorkspace = function (e) {
    a.prototype._setWorkspace.call(this, e);
  }, m.Images.prototype._attachToParent = function (e) {
    a.prototype._attachToParent.call(this, e);
  }, m.Images.prototype._detachFromParent = function (e) {
    a.prototype._detachFromParent.call(this, e);
  }, m.Images.prototype._setScene = function (e) {
    this.acceptChildren(function (t) {
      t instanceof a && t._setScene(e);
    });
  }, m.Images.prototype.toString = function () {
    return "[Object GImageGrid.Images]";
  }, m.prototype._images = null, m.prototype._prepareVertices = function () {
    var e, t, i, n = new h(), r = this.$im || [], o = this.$off || [], l = (this.$trf || new A(), 0), c = 0;
    if (!this.$grid)
      return null;
    this.$grid;
    this._gridMeasure = this._iterateGrid(function (e, t, i, r) {
      n.addVertex(d.Command.Move, e, t), n.addVertex(d.Command.Line, e + i, t), n.addVertex(d.Command.Line, e + i, t + r), n.addVertex(d.Command.Line, e, t + r), n.addVertex(d.Command.Close);
    });
    this.$mg;
    return l = this._gridMeasure.getX(), c = this._gridMeasure.getY(), e = new A(1 / c, 0, 0, 1 / l, 0, 0), i = this.$trf || new A(), t = i.preMultiplied(e), this._images._beginBlockChanges([a._Change.ChildGeometryUpdate]), this._iterateGrid(function (e, i, n, a, s) {
      if (!(r.length > s && r[s]))
        return false;
      var l = r[s];
      l.setProperty("dblMode", false);
      var h = l.getSourceBBox();
      if (h && !h.isEmpty()) {
        var c, p;
        A.getNativeRectTransformation(h).inverted();
        o.length > 2 * s ? (c = o[2 * s], p = o[2 * s + 1]) : (c = 0, p = 0);
        new A();
        var u, d, g, f = h.getWidth() / h.getHeight(), m = n / a;
        d = n / h.getWidth(), g = a / h.getHeight();
        var y = new A(u = f >= m ? g : d, 0, 0, u, e + c, i + p), _ = new A(d, 0, 0, g, e, i), v = y.multiplied(t);
        l.setProperty("itrf", v), l.setProperty("trf", _.multiplied(t));
      }
    }), this._images._endBlockChanges([a._Change.ChildGeometryUpdate]), new s(n, t);
  }, m.prototype.rewindVertices = function () {
    return this._vertexSource || (this._vertexSource = this._prepareVertices()), !!this._vertexSource && (this._vertexSource.rewindVertices(0), true);
  }, m.prototype.readVertex = function (e) {
    return this._vertexSource.readVertex(e);
  }, m.prototype.hasVertexForRead = function () {
    return this._vertexSource.hasVertexForRead();
  }, m.prototype.getWorldToBoxTransform = function () {
    var e, t = this.$trf || new A();
    if (!t.invertible())
      return null;
    e = t.inverted();
    var i = this.$grid;
    if (!i)
      return null;
    if (!i.length || !i[0] || !i[0].length)
      return null;
    var n = this._gridMeasure.getX(), r = this._gridMeasure.getY(), o = new A(n, 0, 0, r, 0, 0);
    return e.multiplied(o);
  }, m.prototype._iterateGrid = function (e) {
    var t = this.$grid;
    if (t) {
      var i, require, r, o, a, s, l = this.$mg, h = -1, A = l, c = 0;
      for (o = 0; o < t.length; o++) {
        for (i = l, s = 0, a = 0; a < t[o].length; a++) {
          if (require = t[o][a][0], r = t[o][a][1], s = Math.max(r, s), false === e(i, A, require, r, c))
            return;
          i += require + l, c++;
        }
        h = Math.max(h, i), A += s + l;
      }
      return h > 0 && A > 0 ? new p(h, A) : new p(0, 0);
    }
  }, m.prototype.addImage = function (e, t) {
    if (this.$grid) {
      var i = this.getWorldToBoxTransform();
      if (i) {
        var require, r = (t = i.mapRect(t)).getSide(l.Side.CENTER), o = r.getX(), a = r.getY(), s = Number.MAX_VALUE, h = -1;
        if (this._iterateGrid(function (e, t, i, r, l) {
            var A = e + i / 2, c = t + r / 2, p = f.ptSqrDist(A, c, o, a);
            p < s && (s = p, h = l, require = o - A, a - c);
          }), !(h < 0)) {
          var A = (this.$im || []).slice(), c = (this.$off || []).slice();
          A[h] = e, c[h] = [
            require,
            require
          ], this.setProperties([
            "im",
            "off"
          ], [
            A,
            c
          ]);
        }
      }
    }
  }, m.prototype._paintFill = function (e) {
    var t = this.$im;
    if (t)
      for (i = 0; i < t.length; i++) {
        var require = t[i];
        require && require.paint(e);
      }
  }, m.prototype._paintChildren = function (e) {
  }, m.prototype._invalidateGeometryForChildUpdate = function (e) {
    this._vertexSource = null, this._geometryBBox = null, this._preTransformRect = null, this._paintBBox = null, this._childrenPaintBBox = null;
  }, m.prototype._handleChange = function (e, t) {
    if (e) {
      if (e == o._Change.Store)
        this.storeProperties(t.blob, m.GeometryProperties), this.storeProperties(t.blob, m.VisualProperties, function (e, t) {
          return "im" === e && t ? t.map(function (e) {
            return u.serialize(e);
          }) : t;
        });
      else if (e === o._Change.Restore)
        this.restoreProperties(t.blob, m.GeometryProperties), this.restoreProperties(t.blob, m.VisualProperties, function (e, t) {
          return "im" === e && t ? t.map(function (e) {
            return u.deserialize(e);
          }) : t;
        });
      else if (e == a._Change.InvalidationRequest);
      else if (e == a._Change.FinishGeometryUpdate)
        this._vertexSource = null;
      else if (e == o._Change.BeforePropertiesChange);
      else if (e === o._Change.ParentAttached || e === o._Change.ParentDetach)
        this.$im && (this._images._detachFromParent(this), e === o._Change.ParentAttached && this._images._attachToParent(this));
      else if (e === o._Change.WorkspaceAttached || e === o._Change.WorkspaceDetach) {
        if (this._images) {
          this._images._setWorkspace(e === o._Change.WorkspaceDetach ? null : this._workspace);
          for (var i = this._images.getFirstChild(); null != i; i = i.getNext())
            i._setWorkspace(e === o._Change.WorkspaceDetach ? null : this._workspace);
        }
      } else if (e === g._Change.SceneAttached || e === g._Change.SceneDetached) {
        if (this._images) {
          this._images._setScene(e === g._Change.SceneDetached ? null : this._scene);
          for (i = this._images.getFirstChild(); null != i; i = i.getNext())
            i._setScene(e === g._Change.SceneDetached ? null : this._scene);
        }
      } else if (e === o._Change.AfterPropertiesChange && t.properties.indexOf("im") >= 0) {
        var require, s, l, h = this.$im;
        try {
          for (this._images._beginBlockChanges([
              o._Change.BeforeChildRemove,
              o._Change.AfterChildRemove,
              o._Change.BeforeChildInsert,
              o._Change.AfterChildInsert
            ]), s = 0; s < h.length; s++)
            if (l = h[s]) {
              for (require = this._images.getFirstChild(); null != require && l !== require; require = require.getNext());
              null === require && this._images.appendChild(l);
            }
          for (require = this._images.getFirstChild(); null != require; require = require.getNext())
            h.indexOf(require) < 0 && this._images.removeChild(require);
        } finally {
          this._images._endBlockChanges([
            o._Change.BeforeChildRemove,
            o._Change.AfterChildRemove,
            o._Change.BeforeChildInsert,
            o._Change.AfterChildInsert
          ]);
        }
      }
      r.prototype._handleChange.call(this, e, t);
    }
  }, m.prototype.getSubnodeIds = function (e) {
    r.prototype.getSubnodeIds.call(this, e), this._images && (e[this._images.getMultireferenceId()] && this._images.resetMultireference(), e[this._images.getMultireferenceId()] = this._images, this._images.getSubnodeIds(e));
  }, m.prototype.toString = function () {
    return "[GImageGrid]";
  }, exports.exports = m;
}
