/**
 * Module 796
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
  var n = require(0) /* GObject */, r = require(7) /* GTransform */, o = require(6) /* GRect */, a = require(12) /* GMath */, s = require(562) /* module */, l = require(601) /* module */, h = require(561) /* module */;
  function A(e, t, i) {
    this._parent = i, s.call(this, e, t);
  }
  n.inherit(A, s), A.ResizingType = {
    Stretch: 0,
    PinToCorner: 1
  }, A.ResizeFlag = {
    Width: 2,
    Height: 16
  }, A.WindingRule = {
    NonZero: 0,
    EvenOdd: 1
  }, A.prototype._shapes = [], A.prototype._id = null, A.prototype._symbolId = null, A.prototype._parent = null, A.prototype.isEvenOdd = function () {
    return undefined === this._data.windingRule || this._data.windingRule === A.WindingRule.EvenOdd;
  }, A.prototype.getParent = function () {
    return this._parent;
  }, A.prototype.findSymbol = function (e) {
    for (var module, require = this.getChildren(), n = require.length, r = 0; r < n; r++)
      if (require[r].getId() === e) {
        module = require[r];
        break;
      }
    if (!module)
      for (r = 0; r < n && !(module = require[r].findSymbol(e)); r++);
    return module;
  }, A.prototype.replaceChild = function (e, t) {
    var i;
    if (!this.getChildren().some(function (t, n) {
        if (t.getId() === e.getId())
          return i = n, t;
      }))
      return t ? this.getChildren().splice(i, 1, t) : this.getChildren().splice(i, 1), true;
    for (var n = this.getChildren(), r = n.length, o = 0; o < r; o++)
      if (n[o].replaceChild(e, t))
        return true;
  }, A.prototype.hasResizeFlag = function (e) {
    return 0 != ((this._data.resizingConstraint || 0) & e);
  }, A.prototype.getResizingType = function () {
    return this._data.resizingType;
  }, A.prototype.getData = function () {
    return this._data;
  }, A.prototype.getId = function () {
    return this._id;
  }, A.prototype.getSymbolId = function () {
    return this._symbolId;
  }, A.prototype.parse = function (e, t) {
    this._shapes = [];
    var i = this._data;
    this._id = i.do_objectID, this._symbolId = i.symbolID, this._file.addObject(this), this._data.layers && this._data.layers.forEach(function (e) {
      e.parent = i;
      var t = h.getClassFromName(e._class);
      t && this._shapes.push(new t(e, this._file, this));
    }.bind(this));
    var n = function (e) {
      try {
        e.parse(null, t);
      } catch (e) {
        console.log(e);
      }
    };
    this._shapes.length ? t ? t.execute(this._shapes, n, this._postParse.bind(this)) : (this._shapes.forEach(n), this._postParse()) : this._postParse();
  }, A.prototype._postParse = function () {
    for (var exports = this.getChildren(), module = 0; module < exports.length; module++) {
      var require = exports[module];
      if (require.hasClippingMask())
        return void require._clip(exports.splice(module + 1, exports.length));
    }
  }, A.prototype._clip = function (e) {
    this._shapes = this._shapes.concat(e);
  }, A.prototype.getChildren = function () {
    return this._shapes;
  }, A.prototype.hasClippingMask = function () {
    return !!this._data.hasClippingMask;
  }, A.prototype.transform = function (e) {
    this._shapes.forEach(function (t) {
      t.transform(e);
    });
  }, A.prototype.setBounds = function (e) {
    this._shapes.forEach(function (t) {
      t.setBounds(e);
    });
  }, A.prototype._getGeometryBBox = function () {
    var e;
    return this.visitReferences(function (t) {
      if (t.frame) {
        var require = l.parse(t.frame);
        e = e ? e.translated(require.getX(), require.getY()) : require;
      }
    }), e;
  }, A.prototype._getTransform = function () {
    var e = 1, t = 1, i = -(this._data.rotation || 0);
    this._data.isFlippedHorizontal && (e = -1), this._data.isFlippedVertical && (t = -1);
    var n = new r().rotated(a.toRadians(i)).scaled(e, t), s = this._getGeometryBBox(), l = s.getSide(o.Side.CENTER);
    return r.getNativeRectTransformation(s).translated(-l.getX(), -l.getY()).multiplied(n).translated(l.getX(), l.getY());
  }, A.prototype._getTransformation = function () {
    var e = this._getTransform().decomposed(), t = this._getGeometryBBox().getSide(o.Side.CENTER), i = e.scale.scaled(1 / Math.abs(e.scale._sx), 1 / Math.abs(e.scale._sy));
    return new r().translated(-t.getX(), -t.getY()).multiplied(e.skew.multiplied(e.rotate).multiplied(i)).translated(t.getX(), t.getY());
  }, A.prototype.visitReferences = function (e) {
    for (var module = e(this._data), require = this._data.parent; require && !module;)
      module = e(require), require = require.parent;
  }, A.prototype.clone = function () {
    var e = s.prototype.clone.call(this);
    e._id = this._id, e._symbolId = this._symbolId, e._parent = this._parent;
    var t = [];
    return this._shapes.forEach(function (e) {
      t.push(e.clone());
    }), e._shapes = t, e;
  }, A.prototype.accept = function (e) {
    e(this), this._shapes.forEach(function (t) {
      t.accept(e);
    });
  }, A.prototype.appendTo = function (e, t) {
    var i = function (i) {
      i.appendTo(e, t);
    };
    t ? t.execute(this._shapes, i, this._postAppendTo.bind(this)) : this._shapes.forEach(i);
  }, A.prototype._postAppendTo = function () {
  }, exports.exports = A;
}
