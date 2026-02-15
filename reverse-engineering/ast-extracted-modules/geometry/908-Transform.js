/**
 * Module 908
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
  var n = i(2), r = i(7);
  e.exports = function (e) {
    e.Transform = function () {
    }, e.Transform.MinimalDimention = 0.000001, e.Transform.prototype.getTransform = function () {
      return null;
    }, e.Transform.prototype.setTransform = function (e) {
      throw new Error("Not Supported.");
    }, e.Transform.prototype.setBounds = function (t, i, n, o) {
      var a = n > e.Transform.MinimalDimention ? n : e.Transform.MinimalDimention, s = o > e.Transform.MinimalDimention ? o : e.Transform.MinimalDimention, l = this.getGeometryBBox(), h = l.getWidth(), A = l.getHeight(), c = h > 0 ? a / h : 0, p = A > 0 ? s / A : 0, u = new r().translated(-l.getX(), -l.getY()).scaled(c, p).translated(t, i), d = this.getTransform();
      this.setTransform(d ? d.multiplied(u) : u);
    }, e.Transform.prototype.transform = function (e, t, i) {
      this.isTransformChildren(e, t) && this._transformChildren(e, t, i);
    }, e.Transform.prototype.preTransform = function (e, t, i) {
      if (this.isTransformChildren(e, t)) {
        var n = this.getProperty("trf"), r = n && n.invertible() ? n.inverted().multiplied(e).multiplied(n) : e;
        this._transformChildren(r, t, i);
      }
    }, e.Transform.prototype.isTransformChildren = function (e, t) {
      var i = this._scene ? this._scene.getTransformSettings() : null, n = i ? i.inheritedGlobal : null;
      return t || n || (void 0 === n || null == n) && this.getProperty("scc", !1, !0);
    }, e.Transform.prototype.assignPreTransformFrom = function (t, i) {
      var n = i.hasMixin(e.Transform) && i.getTransform() || new r();
      n = t.multiplied(n), this.setTransform(n);
    }, e.Transform.prototype.assignTransformFrom = function (t, i) {
      var n = i.hasMixin(e.Transform) && i.getTransform() || new r();
      n = n.multiplied(t), this.setTransform(n);
    }, e.Transform.prototype._transformChildren = function (t, i, r) {
      if (this.hasMixin(n.Container))
        for (var o = this.getFirstChild(!0); null != o; o = o.getNext(!0))
          o instanceof e && o.hasMixin(e.Transform) && (!r || r.indexOf(o) < 0) && (o.dependentUpdate = !0, o.transform(t, i, r), o.dependentUpdate = !1);
    }, e.Transform.prototype.toString = function () {
      return "[Mixin GElement.Transform]";
    };
  };
}
