/**
 * Module 268 - GConnector
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
  var n = require(60) /* GPath */, r = require(28) /* GStylable */, o = require(2) /* GNode */, a = require(22) /* GElement */, s = require(45) /* GPathBase */, l = require(6) /* GRect */, h = require(12) /* GMath */, A = require(76) /* module */, c = require(9) /* GLocale */;
  function p() {
    n.apply(this, arguments);
  }
  o.inherit("connector", p, n), p.prototype._srcPath = null, p.prototype._dstPath = null, p.prototype.connect = function (e, t) {
    this._srcPath = e, this._dstPath = t, this._scene.link(this._anchorPoints.getFirstChild(), this._srcPath), this._scene.link(this._anchorPoints.getLastChild(), this._dstPath), this._relayoutConnectors();
  }, p.prototype._relayoutConnectors = function () {
    var e = this._getSiblingConnectors();
    e && e.forEach(function (e) {
      e.relayout();
    });
  }, p.prototype.getNodeNameTranslated = function () {
    return c.getValue("GConnector", "name", this.getNodeName());
  }, p.prototype.relayout = function () {
    if (this._anchorPoints && this._anchorPoints.getFirstChild() && this._anchorPoints.getLastChild()) {
      if (!this._srcPath || !this._dstPath)
        return null;
      var exports = this._srcPath.getGeometryBBox(), module = this._dstPath.getGeometryBBox();
      if (!exports || !module)
        return null;
      var require, n, r, o = function (e) {
          return [
            l.Side.LEFT_CENTER,
            l.Side.RIGHT_CENTER,
            l.Side.TOP_CENTER,
            l.Side.BOTTOM_CENTER
          ].map(function (t) {
            return {
              side: t,
              pt: e.getSide(t)
            };
          });
        }, a = o(exports), s = o(module);
      a.forEach(function (e) {
        s.forEach(function (t) {
          var o = e.pt, a = t.pt, s = h.ptDist(o.getX(), o.getY(), a.getX(), a.getY());
          (!require || s < require) && (require = s, n = e, r = t);
        });
      });
      var A = n.pt, c = r.pt;
      switch (r.side) {
      case l.Side.RIGHT_CENTER:
        c = c.translated(5, 0);
        break;
      case l.Side.LEFT_CENTER:
        c = c.translated(-5, 0);
        break;
      case l.Side.BOTTOM_CENTER:
        c = c.translated(0, 5);
        break;
      case l.Side.TOP_CENTER:
        c = c.translated(0, -5);
      }
      var p = function (e, t, i) {
          switch (t) {
          case l.Side.RIGHT_CENTER:
          case l.Side.LEFT_CENTER:
            return e.translated(0, i);
          case l.Side.BOTTOM_CENTER:
          case l.Side.TOP_CENTER:
            return e.translated(i, 0);
          }
        }.bind(this), u = this._getSiblingConnectors();
      if (u && u.length > 1) {
        var d = u.indexOf(this);
        if (-1 !== d) {
          var g = -(20 * u.length) / 2 + 20 * d + 10;
          A = p(A, n.side, g), c = p(c, r.side, g);
        }
      }
      this._anchorPoints.getFirstChild().setProperties([
        "x",
        "y"
      ], [
        A.getX(),
        A.getY()
      ]), this._anchorPoints.getLastChild().setProperties([
        "x",
        "y"
      ], [
        c.getX(),
        c.getY()
      ]);
    }
  }, p.prototype._getSiblingConnectors = function () {
    var e = function (e, t) {
        var i = [];
        return this._scene.visitReferences(e, function (e) {
          e instanceof s.AnchorPoint && "connector" === o.getName(e.getPath()) && t === e.getPath().getDstPath() && i.push(e.getPath());
        }.bind(this)), i;
      }.bind(this), t = e(this._srcPath, this._dstPath).concat(e(this._dstPath, this._srcPath)).filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    return o.order(t);
  }, p.prototype.attachPath = function (e, t) {
    e === this._anchorPoints.getFirstChild() ? this._srcPath = t : this._dstPath = t;
  }, p.prototype.getSrcPath = function () {
    return this._srcPath;
  }, p.prototype.getDstPath = function () {
    return this._dstPath;
  }, p.prototype.transformAnchors = function (e) {
    this._beginBlockEvents([a.GeometryChangeEvent]), this.beginUpdate(), this.getAnchorPoints()._beginBlockCompositeEvents(false, true, false);
    for (var module = this.getAnchorPoints().getFirstChild(); null != module; module = module.getNext())
      module.transferProperties(module._getTransformedCopy(e), [s.AnchorPoint.GeometryProperties]);
    this._endBlockEvents([a.GeometryChangeEvent]), this.getAnchorPoints()._endBlockCompositeEvents(false, true, false), this.endUpdate();
  }, p.prototype._handleChange = function (e, t) {
    n.prototype._handleChange.call(this, e, t), e !== A._Change.SceneDetached && e !== A._Change.SceneAttached || this._relayoutConnectors();
  }, p.prototype.getStylePropertySets = function () {
    return [
      r.PropertySet.Style,
      r.PropertySet.BorderPaintLayers,
      r.PropertySet.Effects
    ];
  }, exports.exports = p;
}
