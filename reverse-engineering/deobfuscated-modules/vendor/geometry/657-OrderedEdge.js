/**
 * Module 657
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
  var n = require(2) /* GNode */, r = require(17) /* GRGBColor */, o = require(513) /* module */, a = require(5) /* GPoint */, s = require(569) /* module */, l = require(14) /* GPaintCanvas */, h = require(45) /* GPathBase */, A = require(12) /* GMath */;
  function c() {
    s.call(this), this._setDefaultProperties(c.GeometryProperties), this.$uid = new o(), this._outEdges = [], this._inEdges = [];
  }
  n.inheritAndMix("GPGAnchor", c, n, [
    n.Store,
    n.Properties,
    s,
    n.Multireference
  ]);
  c.GeometryProperties = {
    uid: null,
    x: 0,
    y: 0
  }, c.EdgeType = {
    Out: 1,
    In: 2
  }, c.OrderedEdge = function (e, t, i) {
    this.type = t, this.idx = i, this._angle = t === c.EdgeType.Out ? e.getStartAngle() : e.getEndAngle();
  }, c.OrderedEdge.prototype.type = null, c.OrderedEdge.prototype.idx = null, c.OrderedEdge.prototype._angle = null, c.OrderedEdge.prototype.getAngle = function () {
    return this._angle;
  }, c.prototype._orderedEdges = null, c.prototype.validateInsertion = function (e, t) {
    return e instanceof n.MapContainer && (!e.getParent() || "Paths Graph" === n.getName(e.getParent()));
  }, c.prototype.getId = function () {
    return this.$uid;
  }, c.prototype.getPoint = function () {
    return new a(this.$x, this.$y);
  }, c.prototype.addOutEdge = function (e) {
    this._outEdges.push(e);
    var t = new c.OrderedEdge(e, c.EdgeType.Out, this._outEdges.length - 1);
    this._insertOrdered(t);
  }, c.prototype.addInEdge = function (e) {
    this._inEdges.push(e);
    var t = new c.OrderedEdge(e, c.EdgeType.In, this._inEdges.length - 1);
    this._insertOrdered(t);
  }, c.prototype.setData = function (e) {
    this._data = e;
  }, c.prototype.removeEdge = function (e) {
    for (var module = false, require = 0; require < this._outEdges.length && !module; ++require)
      this._outEdges[require].getId().isEqual(e.getId()) && (this._outEdges.splice(require, 1), module = true);
    for (require = 0; require < this._inEdges.length && !module; ++require)
      this._inEdges[require].getId().isEqual(e.getId()) && (this._inEdges.splice(require, 1), module = true);
    this.orderEdges();
  }, c.prototype.removeOutEdge = function (e) {
    for (var module = false, require = 0; require < this._outEdges.length && !module; ++require)
      this._outEdges[require].getId().isEqual(e.getId()) && (this._outEdges.splice(require, 1), this.orderEdges(), module = true);
  }, c.prototype.removeInEdge = function (e) {
    for (var module = false, require = 0; require < this._inEdges.length && !module; ++require)
      this._inEdges[require].getId().isEqual(e.getId()) && (this._inEdges.splice(require, 1), this.orderEdges(), module = true);
  }, c.prototype.orderEdges = function () {
    var e;
    this._orderedEdges = null;
    for (var module = 0; module < this._outEdges.length; ++module)
      e = new c.OrderedEdge(this._outEdges[module], c.EdgeType.Out, module), this._insertOrdered(e);
    for (module = 0; module < this._inEdges.length; ++module)
      e = new c.OrderedEdge(this._inEdges[module], c.EdgeType.In, module), this._insertOrdered(e);
  }, c.prototype.getNextEdgeOrdered = function (e, t, i) {
    if (this._orderedEdges)
      if (this._orderedEdges.length > 1)
        for (var n = null, r = 0; r < this._orderedEdges.length; ++r) {
          if ((n = this._orderedEdges[r]).type == t)
            if ((t == c.EdgeType.Out ? this._outEdges : this._inEdges)[n.idx] == e) {
              var o = r + 1 < this._orderedEdges.length ? this._orderedEdges[r + 1] : this._orderedEdges[0], s = o.type == c.EdgeType.Out ? this._outEdges : this._inEdges;
              if (i) {
                var l = n.getAngle(), h = o.getAngle();
                l > h && (h += A.PI2);
                var p = l + (h - l) / 2, u = 0.001 * Math.cos(p), d = 0.001 * Math.sin(p);
              }
              return {
                edge: s[o.idx],
                type: o.type,
                insidePt: i && l != h ? new a(this.$x + u, this.$y - d) : null
              };
            }
        }
      else if (this._orderedEdges.length) {
        if ((n = this._orderedEdges[0]).type == t)
          if ((t == c.EdgeType.Out ? this._outEdges : this._inEdges)[n.idx] == e) {
            if (i)
              p = n.getAngle() + Math.PI, u = 0.001 * Math.cos(p), d = 0.001 * Math.sin(p);
            return {
              edge: e,
              type: t,
              insidePt: i ? new a(this.$x + u, this.$y - d) : null
            };
          }
      }
    return null;
  }, c.prototype.serialize = function () {
    var e = [];
    return e.push(this.$uid.toString()), e.push(this.$x), e.push(this.$y), e;
  }, c.prototype.deserialize = function (e) {
    e.length > 0 && "string" == typeof e[0] && (this.$uid = new o(e[0])), e.length >= 3 && (this.$x = e[1], this.$y = e[2]);
  }, c.prototype._paintBorder = function (e, t, i, n, o) {
    if (this._orderedEdges && this._orderedEdges.length && 1 != this._orderedEdges.length) {
      for (var a = function (e) {
            return o && e.getProperty("cSt", false, null, true) && e.hasSameStyle(o) || !o && !e.getProperty("cSt", false, null, true) && e.hasStyleBorder();
          }, s = 0, p = 0; p < this._orderedEdges.length; ++p) {
        a((m = this._orderedEdges[p]).type == c.EdgeType.Out ? this._outEdges[m.idx] : this._inEdges[m.idx]) && ++s;
      }
      if (!(s < 2)) {
        var u = this._orderedEdges.length - 1, d = this._orderedEdges[u], g = d.type == c.EdgeType.Out ? this._outEdges[d.idx] : this._inEdges[d.idx], f = u;
        if (!a(g))
          for (u = 0; u < this._orderedEdges.length - 1 && !a(g); ++u)
            g = (d = this._orderedEdges[u]).type == c.EdgeType.Out ? this._outEdges[d.idx] : this._inEdges[d.idx], f = u;
        if (a(g))
          for (p = f == this._orderedEdges.length - 1 ? 0 : f + 1; p < this._orderedEdges.length; ++p) {
            var m, y = (m = this._orderedEdges[p]).type == c.EdgeType.Out ? this._outEdges[m.idx] : this._inEdges[m.idx];
            if (a(y)) {
              var _ = d.getAngle(), v = m.getAngle();
              if (_ > v && (v += A.PI2), v - _ > Math.PI || 2 == s) {
                var b = d.type == c.EdgeType.Out ? g.getFirstSegment(true, 0.01) : g.getLastSegment(null, 0.01), C = (m.type == c.EdgeType.Out ? y.getFirstSegment(null, 0.01) : y.getLastSegment(true, 0.01)).getAnchorPoints().getFirstChild();
                b.getAnchorPoints().getLastChild().setProperties([
                  "hrx",
                  "hry"
                ], [
                  C.getProperty("hrx"),
                  C.getProperty("hry")
                ]);
                for (var w = C.getNext(); null != w; w = w.getNext()) {
                  var E = new h.AnchorPoint();
                  E.deserialize(w.serialize()), b.getAnchorPoints().appendChild(E);
                }
                g.getProperty("_bw") > y.getProperty("_bw") ? b.assignStyleFrom(y) : b.assignStyleFrom(g), t && b.setProperty("trf", t), b._scene = i, n && undefined !== e.canvas.putVertices(b) && e.canvas.strokeVertices(r.BLACK, b.getProperty("_bw"), b.getProperty("_bds"), l.LineCap.Butt, b.getProperty("_blj"), b.getProperty("_bml"), 1);
                break;
              }
              d = m, g = y;
            }
          }
      }
    }
  }, c.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store)
      t.blob.props = this.serialize();
    else if (e === n._Change.Restore)
      t.blob.hasOwnProperty("props") && this.deserialize(t.blob.props);
    else if (e == n._Change.AfterPropertiesChange) {
      var require = t.properties.indexOf("x"), r = t.properties.indexOf("y");
      if (require >= 0 || r >= 0) {
        for (var o = 0; o < this._inEdges.length; ++o)
          this._inEdges[o].getPathBase().getAnchorPoints().getLastChild().setProperties([
            "x",
            "y"
          ], [
            this.$x,
            this.$y
          ]);
        for (o = 0; o < this._outEdges.length; ++o)
          this._outEdges[o].getPathBase().getAnchorPoints().getFirstChild().setProperties([
            "x",
            "y"
          ], [
            this.$x,
            this.$y
          ]);
      }
    }
    n.prototype._handleChange.call(this, e, t);
  }, c.prototype._insertOrdered = function (e) {
    if (this._orderedEdges) {
      for (var module, require = null, n = 0; n < this._orderedEdges.length; ++n)
        module = this._orderedEdges[n], !require && module.getAngle() >= e.getAngle() ? (require = module, this._orderedEdges[n] = e) : require && (this._orderedEdges[n] = require, require = module);
      this._orderedEdges.push(require || e);
    } else
      this._orderedEdges = [e];
  }, c.prototype.toString = function () {
    return "[Object GPGAnchor]";
  }, exports.exports = c;
}
