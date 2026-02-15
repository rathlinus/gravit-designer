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

function (e, t, i) {
  var n = i(0), r = i(7), o = i(6), a = i(12), s = i(562), l = i(601), h = i(561);
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
    return void 0 === this._data.windingRule || this._data.windingRule === A.WindingRule.EvenOdd;
  }, A.prototype.getParent = function () {
    return this._parent;
  }, A.prototype.findSymbol = function (e) {
    for (var t, i = this.getChildren(), n = i.length, r = 0; r < n; r++)
      if (i[r].getId() === e) {
        t = i[r];
        break;
      }
    if (!t)
      for (r = 0; r < n && !(t = i[r].findSymbol(e)); r++);
    return t;
  }, A.prototype.replaceChild = function (e, t) {
    var i;
    if (!this.getChildren().some(function (t, n) {
        if (t.getId() === e.getId())
          return i = n, t;
      }))
      return t ? this.getChildren().splice(i, 1, t) : this.getChildren().splice(i, 1), !0;
    for (var n = this.getChildren(), r = n.length, o = 0; o < r; o++)
      if (n[o].replaceChild(e, t))
        return !0;
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
    for (var e = this.getChildren(), t = 0; t < e.length; t++) {
      var i = e[t];
      if (i.hasClippingMask())
        return void i._clip(e.splice(t + 1, e.length));
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
        var i = l.parse(t.frame);
        e = e ? e.translated(i.getX(), i.getY()) : i;
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
    for (var t = e(this._data), i = this._data.parent; i && !t;)
      t = e(i), i = i.parent;
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
  }, e.exports = A;
}
