/**
 * Module 656 - GPGFacet
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
  var n = require(68) /* GColor */, r = require(59) /* GVertexInfo */, o = require(2) /* GNode */, a = require(0) /* GObject */, s = require(28) /* GStylable */, l = require(60) /* GPath */, h = require(513) /* module */, A = require(347) /* GPGEdge */, c = require(5) /* GPoint */, p = require(930) /* module */, u = require(14) /* GPaintCanvas */, d = require(17) /* GRGBColor */, g = require(113) /* GCompoundPath */, f = require(45) /* GPathBase */, m = require(229) /* GHitResult */, y = require(11) /* GUtil */, _ = require(22) /* GElement */;
  function v() {
    this._setDefaultProperties(v.GeometryProperties), this.$uid = new h(), this._init();
  }
  o.inheritAndMix("GPGFacet", v, o, [
    o.Store,
    o.Properties,
    s,
    o.Multireference
  ]), v.GeometryProperties = {
    uid: null,
    cSt: false
  }, v.prototype._directedEdges = null, v.prototype._path = null, v.DirectedEdge = function (e, t) {
    this.$direction = t || v.DirectedEdge.Direction.Straight, this.updateEdge(e);
  }, a.inheritAndMix(v.DirectedEdge, o, [o.Properties]), v.DirectedEdge.Direction = {
    Straight: 1,
    Reverse: 2
  }, v.DirectedEdge.GeometryProperties = { direction: v.DirectedEdge.Direction.Straight }, v.DirectedEdge.prototype._edge = null, v.DirectedEdge.prototype.getEdge = function () {
    return this._edge.getEdge();
  }, v.DirectedEdge.prototype.updateEdge = function (e, t) {
    e instanceof p ? this._edge = e : e instanceof A && (this._edge = new p(null, e));
  }, v.DirectedEdge.prototype.getEdgeId = function () {
    return this._edge.getId();
  }, v.DirectedEdge.prototype.getStartPoint = function () {
    var e, t = this._edge.getEdge().getPathBase();
    return e = this.$direction == v.DirectedEdge.Direction.Straight ? t.getAnchorPoints().getFirstChild() : t.getAnchorPoints().getLastChild(), new c(e.getProperty("x"), e.getProperty("y"));
  }, v.DirectedEdge.prototype.getEndPoint = function () {
    var e, t = this._edge.getEdge().getPathBase();
    return e = this.$direction == v.DirectedEdge.Direction.Straight ? t.getAnchorPoints().getLastChild() : t.getAnchorPoints().getFirstChild(), new c(e.getProperty("x"), e.getProperty("y"));
  }, v.DirectedEdge.prototype.validateInsertion = function (e, t) {
    return e instanceof v.DirectedEdges;
  }, v.DirectedEdge.prototype.toString = function () {
    return "[Object GPGFacet.DirectedEdge]";
  }, v.DirectedEdges = function () {
  }, a.inheritAndMix(v.DirectedEdges, o, [o.Container]), v.DirectedEdges.prototype.toString = function () {
    return "[Object GPGFacet.DirectedEdges]";
  }, v.prototype.getId = function () {
    return this.$uid;
  }, v.prototype.validateInsertion = function (e, t) {
    return e instanceof o.MapContainer && (!e.getParent() || "Paths Graph" === o.getName(e.getParent()));
  }, v.prototype.getStylePropertySets = function () {
    return [
      s.PropertySet.BorderPaintLayers,
      s.PropertySet.FillPaintLayers
    ];
  }, v.prototype.getPath = function () {
    return this._path;
  }, v.prototype.init = function (e) {
    if (this._init(), !e || !e.length)
      return false;
    for (var module, require = null, n = null, r = 0; r < e.length; ++r) {
      var o = e[r];
      if (this._directedEdges.appendChild(o), n) {
        if ((module = o.getStartPoint()).getX() != n.getX() && module.getY() != n.getY())
          return this._init(), false;
      } else
        require = o.getStartPoint();
      n = o.getEndPoint();
    }
    if (require.getX() != n.getX() && require.getY() != n.getY())
      return this._init(), false;
    for (var a = new f.AnchorPoints(), s = null, h = null, A = this._directedEdges.getFirstChild(); A; A = A.getNext()) {
      var c = new f();
      c.getAnchorPoints().deserialize(A.getEdge().getPathBase().getAnchorPoints().serialize()), A.$direction == v.DirectedEdge.Direction.Reverse && c.reverseOrder();
      var p = c.getAnchorPoints().getFirstChild();
      c.getAnchorPoints().removeChild(p), a.getFirstChild() ? a.getLastChild().setProperties([
        "ah",
        "tp",
        "hrx",
        "hry"
      ], [
        false,
        f.AnchorPoint.Type.Asymmetric,
        p.getProperty("hrx"),
        p.getProperty("hry")
      ]) : (s = p.getProperty("hrx"), h = p.getProperty("hry"));
      for (var u = c.getAnchorPoints().getFirstChild(); u; u = c.getAnchorPoints().getFirstChild())
        c.getAnchorPoints().removeChild(u), a.appendChild(u);
      a.getLastChild().setProperties([
        "ah",
        "tp",
        "hrx",
        "hry"
      ], [
        false,
        f.AnchorPoint.Type.Asymmetric,
        s,
        h
      ]);
    }
    return this._path = new l(true, false, a), this._path.assignStyleFrom(this), true;
  }, v.prototype.getHash = function () {
    for (var exports = "", module = this._directedEdges.getFirstChild(); module; module = module.getNext()) {
      exports += module.getEdge().getId().toString()[0];
    }
    return exports;
  }, v.prototype.isSame = function (e) {
    var t = true;
    this._directedEdges && e._directedEdges || (t = false);
    for (var require = this._directedEdges.getFirstChild(), n = e._directedEdges.getFirstChild(); null != require && null != n && t; require = require.getNext(), n = n.getNext())
      t = require.getProperty("direction") == n.getProperty("direction") && require.getEdge().getId().toString() == n.getEdge().getId().toString();
    return t && (null == require && null != n || null != require && null == n) && (t = false), t;
  }, v.prototype.isInside = function (e, t) {
    if (this._path) {
      var require = new m();
      if (r.hitTest(e.getX(), e.getY(), this._path, 0, true, require, t))
        return !require.outline;
    }
    return false;
  }, v.prototype.getPath = function () {
    return f.prototype.clone.call(this._path);
  }, v.prototype.extendPath = function (e) {
    if (e && e.length) {
      var module = this._path;
      this._path = new g(), this._path.assignFrom(module), this._path.getPaths().insertChild(module);
      for (var require = 0; require < e.length; ++require)
        this._path.getPaths().appendChild(e[require]);
    }
  }, v.prototype.serialize = function () {
    var e = [];
    if (e.push(this.$uid.toString()), e.push(this.$cSt), this._directedEdges && this._directedEdges.getFirstChild())
      for (var module = this._directedEdges.getFirstChild(); null != module; module = module.getNext())
        e.push({
          dir: module.$direction,
          euid: module.getEdge().getId().toString()
        });
    return e;
  }, v.prototype.deserialize = function (e) {
    if (e.length >= 3) {
      this.$uid = new h(e[0]), this.$cSt = e[1];
      for (var module = 1; module < e.length; ++module) {
        var require = new v.DirectedEdge(new p(new h(e[module].euid)), e[module].dir);
        this._directedEdges.appendChild(require);
      }
    }
  }, v.prototype.getDirectedEdges = function () {
    return this._directedEdges;
  }, v.prototype._handleChange = function (e, t) {
    e === o._Change.Store ? t.blob.props = this.serialize() : e === o._Change.Restore && t.blob.hasOwnProperty("props") && this.deserialize(t.blob.props), s.prototype._handleStyleChange.call(this, e, t), o.prototype._handleChange.call(this, e, t);
  }, v.prototype._styleRepaint = function (e) {
    this._parent instanceof o.MapContainer && this._parent.getParent() && "Paths Graph" === o.getName(this._parent.getParent()) && this._parent.getParent()._notifyChange(_._Change.InvalidationRequest);
  }, v.prototype._styleFinishGeometryChange = function (e) {
    this._parent instanceof o.MapContainer && this._parent.getParent() && "Paths Graph" === o.getName(this._parent.getParent()) && this._parent.getParent()._notifyChange(_._Change.FinishGeometryUpdate, 1);
  }, v.prototype._init = function () {
    this._directedEdges = new v.DirectedEdges(), this._directedEdges._setParent(this);
  }, v.prototype._paintFill = function (e, t, i, r, o) {
    if (this._path._scene = this._scene, i && this._path.setTransform(i), !e.configuration.isOutline(e) && this.hasStyleFill()) {
      var a = this._path.getGeometryBBox();
      y.each(this.getPaintLayers().getFillLayers(true), function (t, s) {
        var l = this._path.createShapePaint(e, s.$_pt, this._path.getPatternBBox());
        if (l) {
          var h = this._path, A = e.canvas, c = s.$_op / 2, p = c / (1 - c), g = null;
          if (undefined !== A.putVertices(h)) {
            if (l.transform && (i && (l.transform = l.transform.multiplied(i)), s.$_px && !s.$_px.isIdentity() && (l.transform = l.transform.preMultiplied(s.$_px))), r)
              if (A.strokeVertices(d.Black, 1, null, null, null, 1, 1, u.CompositeOperator.DestinationOut), s.$_pt instanceof n)
                A.strokeVertices(l.paint, 1, null, null, null, 1, s.$_op, u.CompositeOperator.SourceOver);
              else {
                A.strokeVertices(d.White, 1, null, null, null, 1, s.$_op, u.CompositeOperator.SourceOver), l.transform && (g = A.setTransform(A.getTransform(true).preMultiplied(l.transform)));
                var f = l.transform ? l.transform.inverted().mapRect(a) : a;
                A.fillRect(f.getX(), f.getY(), f.getWidth(), f.getHeight(), l.paint, s.$_op, u.CompositeOperator.SourceAtTop);
              }
            else
              l.transform && (g = A.setTransform(A.getTransform(true).preMultiplied(l.transform))), o && A.fillVertices(d.Black, 1, u.CompositeOperator.DestinationOut, this._path._isEvenOddFill()), A.fillVertices(l.paint, o ? c : p, s.getBlendingForContext(e), this._path._isEvenOddFill());
            g && A.setTransform(g);
          }
        }
      }.bind(this));
    }
    i && this._path.setTransform(null);
  }, v.prototype.toString = function () {
    return "[Object GPGFacet]";
  }, exports.exports = v;
}
