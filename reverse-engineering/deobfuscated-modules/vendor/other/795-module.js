/**
 * Module 795
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
  var n = require(0) /* GObject */, r = require(22) /* GElement */, o = (require(70) /* GText */, require(73) /* GRectangle */, require(284) /* GPolygon */, require(45) /* GPathBase */), a = require(2) /* GNode */, s = require(796) /* module */;
  function l(e, t, i, n) {
    this._node = n || new (this._getRelatedNodeClass())(), s.apply(this, arguments);
  }
  n.inherit(l, s), l.transformStyledCorners = function (e, t) {
    if (t && !t.isIdentity() && (e instanceof o && e.transformStyledCorners(e, t), e.hasMixin(a.Container)))
      for (var require = e.getFirstChild(); null != require; require = require.getNext())
        l.transformStyledCorners(require, t);
  }, l.prototype._node = null, l.prototype.getNode = function () {
    return this._node;
  }, l.prototype._getRelatedNodeClass = function () {
    throw new Error("Not implemented");
  }, l.prototype.parse = function () {
    this._node && (this._node.__sketchNode__ = this, s.prototype.parse.apply(this, arguments));
  }, l.prototype.transform = function (e) {
    e && !e.isIdentity() && this._node instanceof r && this._node.hasMixin(r.Transform) && this._node.transform(e);
  }, l.prototype.setBounds = function (e) {
    if (this._node.hasMixin(r.Transform)) {
      var module = this._node.$vis;
      try {
        module || this._node.setProperty("vis", true), this._node.getGeometryBBox() && this._node.setBounds(e.getX(), e.getY(), e.getWidth(), e.getHeight());
      } finally {
        this._node.setProperty("vis", module);
      }
    }
  }, l.prototype.appendTo = function (e, t) {
    this._node && (e.appendChild(this._node), s.prototype.appendTo.call(this, this._node, t));
  }, l.prototype.clone = function () {
    var e = s.prototype.clone.call(this);
    return e._node = this._node.clone(), e;
  }, exports.exports = l;
}
