/**
 * Module 912
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
  var n = require(2) /* GNode */, r = require(140) /* module */;
  exports.exports = function (e) {
    e.Accelerated = function () {
    }, e.Accelerated.PAINT_QTREES = false, e.Accelerated.prototype._childrenPaintQTree = null, e.Accelerated.prototype._childrenGeometryQTree = null, e.Accelerated.prototype._dirtyIndex = false;
    e.Accelerated.prototype._updateQTree = function () {
      this._createQTreeIfNotExists();
      for (var module = 0, require = this.getFirstChild(); null !== require; require = require.getNext())
        require instanceof e && (require._elementIndex = module++, require._containingPaintQTreeElement || require._containingGeometryQTreeElement ? (this._removeAccelElement(require), this._insertAccelElement(require)) : this._insertAccelElement(require));
    }, e.Accelerated.prototype._createQTreeIfNotExists = function () {
      var e;
      this._childrenPaintQTree || (e = {
        x: -5000,
        y: -5000,
        width: 10000,
        height: 10000
      }, this._childrenPaintQTree = new r(e, 10, 50)), this._childrenGeometryQTree || (e = {
        x: -5000,
        y: -5000,
        width: 10000,
        height: 10000
      }, this._childrenGeometryQTree = new r(e, 10, 50));
    }, e.Accelerated.prototype._removeAccelElement = function (e, t, i) {
      !i && e._containingGeometryQTreeElement && (this._childrenGeometryQTree.remove(e._containingGeometryQTreeElement), e._containingGeometryQTreeElement = null), !t && e._containingPaintQTreeElement && (this._childrenPaintQTree.remove(e._containingPaintQTreeElement), e._containingPaintQTreeElement = null);
    }, e.Accelerated.prototype._getAccelElementOffset = function (e) {
      return null;
    }, e.Accelerated.prototype._insertAccelElement = function (e, t, i) {
      var n, o;
      if (!t) {
        var a = e.getPaintBBox();
        if (a && (a.getWidth() > 0 || a.getHeight() > 0)) {
          var s = e.getCustomCollisionBBox();
          s && (a = a && a.united(s) || s), o = true, (n = this._getAccelElementOffset(e)) && (a = a.translated(n.getX(), n.getY()));
          var l = new r.Element(a.getX(), a.getY(), a.getWidth(), a.getHeight());
          l.data = e, this._childrenPaintQTree.insert(l), e._containingPaintQTreeElement = l;
        }
      }
      if (!i) {
        var h = e.getGeometryBBox();
        if (h && (h.getWidth() > 0 || h.getHeight() > 0)) {
          o || (n = this._getAccelElementOffset(e)), n && (h = h.translated(n.getX(), n.getY()));
          var A = new r.Element(h.getX(), h.getY(), h.getWidth(), h.getHeight());
          A.data = e, this._childrenGeometryQTree.insert(A), e._containingGeometryQTreeElement = A;
        }
      }
    }, e.Accelerated.prototype._handleChildrenStructureChange = function (t, i) {
      if (t === n._Change.Restore) {
        this._createQTreeIfNotExists();
        for (var r = 0, o = this.getFirstChild(); null !== o; o = o.getNext())
          o instanceof e && (o._elementIndex = r++, o._containingGeometryQTreeElement && o._containingPaintQTreeElement || this._insertAccelElement(o));
      } else if (t === n._Change.BeforeChildRemove)
        i instanceof e && this._refreshIndicesForward(i, i._elementIndex - 1);
      else if (t === n._Change.AfterChildRemove)
        i instanceof e && (this._removeAccelElement(i), i._dirtyIndex = true);
      else if (t === n._Change.AfterChildInsert) {
        if (i instanceof e && i._dirtyIndex) {
          r = this._getIndexOfPrevious(i);
          this._refreshIndicesForward(i, r + 1), i._dirtyIndex = false;
        }
      } else if (t === e._Change.ChildGeometryUpdate) {
        if (i[0] instanceof e && i[0].getParent() === this)
          if (this._createQTreeIfNotExists(), i[0]._containingPaintQTreeElement || i[0]._containingGeometryQTreeElement)
            this._removeAccelElement(i[0]), this._insertAccelElement(i[0]);
          else {
            this._insertAccelElement(i[0]);
            r = this._getIndexOfPrevious(i[0]);
            this._refreshIndicesForward(i[0], r + 1);
          }
      } else if (t === e._Change.ChildVisualUpdate && i[0] instanceof e && i[0].getParent() === this)
        if (this._createQTreeIfNotExists(), i[0]._containingPaintQTreeElement)
          this._removeAccelElement(i[0], false, true), this._insertAccelElement(i[0], false, true);
        else {
          this._insertAccelElement(i[0], false, true);
          r = this._getIndexOfPrevious(i[0]);
          this._refreshIndicesForward(i[0], r);
        }
    }, e.Accelerated.prototype._refreshIndicesForward = function (t, i) {
      if (t instanceof e)
        for (var n = "number" != typeof i || isNaN(i) ? 0 : i, r = t; null !== r; r = r.getNext())
          r._elementIndex = n++;
    }, e.Accelerated.prototype._getIndexOfPrevious = function (t) {
      if (!t)
        return -1;
      for (var require = t.getPrevious(); null !== require; require = require.getPrevious())
        if (require instanceof e)
          return require._elementIndex;
      return -1;
    }, e.Accelerated.prototype.retrieveChildrenInPaintBBox = function (e, t) {
      return this._childrenPaintQTree ? this._childrenPaintQTree.retrieve({
        x: e.getX(),
        y: e.getY(),
        width: e.getWidth(),
        height: e.getHeight()
      }, t).map(function (e) {
        return e.data;
      }) : null;
    }, e.Accelerated.prototype.retrieveChildrenInGeometryBBox = function (e, t) {
      return this._childrenGeometryQTree ? this._childrenGeometryQTree.retrieve({
        x: e.getX(),
        y: e.getY(),
        width: e.getWidth(),
        height: e.getHeight()
      }, t).map(function (e) {
        return e.data;
      }) : null;
    }, e.Accelerated.prototype.paintQTree = function (e, t, i, n) {
      var r = t || this._childrenPaintQTree || this._childrenGeometryQTree;
      if (r) {
        for (var o = e.canvas, a = n || "#f0f", s = i || 0.9, l = 0; l < r.objects.length; l++) {
          var h = r.objects[l];
          o.strokeRect(h.x, h.y, h.width, h.height, 1, a, s);
        }
        if (r.nodes)
          for (l = 0; l < r.nodes.length; l++)
            this.paintQTree(e, r.nodes[l], 0.6 * i);
      }
    }, e.Accelerated.prototype.toString = function () {
      return "[Mixin GElement.Accelerated]";
    };
  };
}
