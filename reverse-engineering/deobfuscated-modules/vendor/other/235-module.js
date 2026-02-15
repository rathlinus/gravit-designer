/**
 * Module 235
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
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(127) /* GPathEditor */, a = require(128) /* GShapeEditor */, s = require(36) /* PartsPropertyVals */, l = require(66) /* EdTransformOptions */, h = require(60) /* GPath */, A = require(22) /* GElement */, c = require(113) /* GCompoundPath */, p = require(39) /* PartInfo */, u = require(82) /* SavePoint */, d = require(24) /* GEditorOptions */;
  function g(e) {
    a.call(this, e);
  }
  r.inherit(g, a), s.exports(g, c), g.prototype.edTransform = function (e, t, i, n) {
    this._transform = e, this.hasFlag(p.Flag.Outline) ? this.requestInvalidation() : this.setOutlineTmpFlag();
    var r = this.hasPathPartSelection();
    this._iterateChildPathsEditors(function (n) {
      r && !n.getPartSelection() || n.edTransform(e, t, i);
    }.bind(this));
  }, g.prototype.resetTransform = function (e) {
    this._transform = null, this._iterateChildPathsEditors(function (t) {
      e ? t._setTransform(null) : t.resetTransform();
    }.bind(this)), this.removeOutlineTmpFlag();
  }, g.prototype.canApplyTransform = function () {
    var e = false;
    return this._iterateChildPathsEditors(function (t) {
      if (t.canApplyTransform())
        return e = true, true;
    }.bind(this)), e;
  }, g.prototype._applyTransform = function (e, t, i, n) {
    var r = !this.hasPathPartSelection() || this.hasFlag(l.Flag.ResizeAll);
    e.beginUpdate(), e._beginBlockEvents([A.GeometryChangeEvent]), r ? a.prototype._applyTransform.call(this, e, t, i, n) : this._iterateChildPathsEditors(function (e) {
      e.canApplyTransform() && e.applyTransform(e._element, false, null, n);
    }.bind(this)), this.resetTransform(r), e._endBlockEvents([A.GeometryChangeEvent]), e.endUpdate();
  }, g.prototype.getBBox = function (e) {
    var t = a.prototype.getBBox.call(this, e);
    if ((this.hasFlag(p.Flag.Selected) || this.hasFlag(p.Flag.Highlighted)) && this._iterateChildPathsEditors(function (i) {
        var n = i.getBBox(e);
        n && (t = t ? t.united(n) : n);
      }.bind(this)), t && this.hasFlag(l.Flag.ResizeAll) && !t.isEmpty()) {
      var require = this.getBBoxMargin();
      t = t.expanded(require, require, require, require);
    }
    return t;
  }, g.prototype.getElementSelectionBBox = function () {
    var e = null;
    return this._iterateChildPathsEditors(function (t) {
      var i = null;
      t.getPartsSelectionLength() && (i = t.getElementSelectionBBox()), i && (e = e ? e.united(i) : i);
    }.bind(this)), e || (e = this._element.getGeometryBBox()), e;
  }, g.prototype._attach = function () {
    var e = this._element.getScene();
    null != e && e.addEventListener(A.GeometryChangeEvent, this._geometryChange, this);
  }, g.prototype._detach = function () {
    for (var exports = this._element.getPaths().getFirstChild(); null != exports; exports = exports.getNext())
      exports.removeFlag(n.Flag.Selected);
    var t = this._element.getScene();
    null != t && t.removeEventListener(A.GeometryChangeEvent, this._geometryChange, this), a.prototype._detach.call(this);
  }, g.prototype.getPartInfoAt = function (e, t, i, n) {
    var r = a.prototype.getPartInfoAt.call(this, e, t, i, n);
    return r ? (r.data || (r.data = {}), r.data.ownerEditor = this, r) : null;
  }, g.prototype._getPartInfoAt = function (e, t, i) {
    if (!this.hasFlag(l.Flag.ResizeAll))
      for (var n = null, r = this._element.getPaths().getFirstChild(); null != r; r = r.getNext()) {
        var o = s.openEditor(r);
        if (o.removeFlag(l.Flag.ResizeAll), o.setCatchHandle(false), n = o._getPartInfoAt(e, t, i))
          return n.data || (n.data = {}), n.data.ownerEditor = this, n;
      }
    return (n = a.prototype._getPartInfoAt.call(this, e, t, i)) ? (n.data || (n.data = {}), n.data.ownerEditor = this, n) : null;
  }, g.prototype._partIdAreEqual = function (e, t) {
    var i = e.type === t.type;
    return i && e.type == o.PartType.Point ? i = e.point === t.point : i && e.type == o.PartType.Segment && (i = e.apLeft === t.apLeft && e.apRight == t.apRight), i;
  }, g.prototype.updatePartSelection = function (e, t) {
    this._partSelection && (this._partSelection = null), !t && this.hasFlag(p.Flag.Selected) && this._editors && this._iterateChildPathsEditors(function (t) {
      t.updatePartSelection(e, null);
    }.bind(this));
  }, g.prototype._paintChildren = function (e, t, i) {
    this._editors && this._editors.length <= d.maxNumberOfEditorsToDraw && a.prototype._paintChildren.call(this, e, t, i);
  }, g.prototype.updateOwnedPartsSelection = function (e, t) {
    if (t && t.length) {
      for (var require = null, n = 0; n < t.length; ++n) {
        var r = t[n];
        r.data.ownerEditor === this && (e ? r.editor.updatePartSelection(e, [r.id]) : require = r);
      }
      require && (this.updatePartSelection(false), require.editor.updatePartSelection(false, [require.id]));
    }
  }, g.prototype.getActiveExtendingMode = function () {
    return null;
  }, g.prototype.isPartSelectionUnderCollisionAllowed = function () {
    return true;
  }, g.prototype.updatePartSelectionUnderCollision = function (e, t, i) {
    for (var n = false, r = this._element.getPaths().getFirstChild(); null != r; r = r.getNext()) {
      var o = s.openEditor(r);
      o.removeFlag(l.Flag.ResizeAll), o.setCatchHandle(false), o.updatePartSelectionUnderCollision(e, t, i) && (n = true);
    }
    return n;
  }, g.prototype.isDeletePartsAllowed = function () {
    var e = false;
    if (this.hasFlag(p.Flag.Selected) && this._editors) {
      var module = true, require = false;
      this._iterateChildPathsEditors(function (n) {
        (e = e || n.isDeletePartsAllowed()) || (n.hasAllPointsSelected() ? require = true : module = false);
      }.bind(this)), e || !require || module || (e = true);
    }
    return e;
  }, g.prototype.deletePartsSelected = function () {
    if (this.hasFlag(p.Flag.Selected) && this._editors) {
      var exports = [];
      if (this._iterateChildPathsEditors(function (t) {
          t.isDeletePartsAllowed() ? t.deletePartsSelected() : t instanceof o && t.hasAllPointsSelected() && exports.push(t);
        }.bind(this)), exports.length) {
        for (var module = this._element, require = 0; require < exports.length; ++require) {
          exports[require].deletePartsSelected();
          var r = exports[require].getPath();
          r.hasFlag(n.Flag.Selected) && r.removeFlag(n.Flag.Selected), module.getPaths().removeChild(r);
        }
        if (this._element.getPaths().getFirstChild() == this._element.getPaths().getLastChild()) {
          var a = module.getPaths().getFirstChild();
          u.getEditor(module.getScene()).exchangeElements(module, [a], true);
        }
      }
    }
  }, g.prototype.isAlignPartsAllowed = function () {
    var e = false;
    return this.hasFlag(p.Flag.Selected) && this._editors && this._iterateChildPathsEditors(function (t) {
      if (t.isAlignPartsAllowed())
        return e = true;
    }.bind(this)), e;
  }, g.prototype.alignParts = function (e, t, i) {
    this.hasFlag(p.Flag.Selected) && this._editors && (this._element.beginUpdate(), this._iterateChildPathsEditors(function (n) {
      n.isAlignPartsAllowed() && n.alignParts(e, t, i);
    }.bind(this)), this._element.endUpdate());
  }, g.prototype._geometryChange = function (e) {
    if (e.type == A.GeometryChangeEvent.Type.Before || e.type == A.GeometryChangeEvent.Type.After) {
      var module = e.element == this._element;
      if (!module && e.element instanceof h)
        for (var require = this._element.getPaths().getFirstChild(); null != require && !module; require = require.getNext())
          require == e.element && (module = true);
      module && (e.type == A.GeometryChangeEvent.Type.After && this.releasePathPreview(), this.requestInvalidation());
    }
  }, g.prototype.setFlag = function (e) {
    if (0 == (this._flags & e)) {
      this.requestInvalidation(), this._flags = this._flags | e;
      for (var module = this._element.getPaths().getFirstChild(); null != module; module = module.getNext()) {
        var require = s.openEditor(module);
        require.setCatchHandle(false), (e & l.Flag.ResizeAll) != l.Flag.ResizeAll && require && !require.hasFlag(e) && require.setFlag(e), this.hasFlag(l.Flag.ResizeAll) && require && !require.hasFlag(p.Flag.Outline) && require.setFlag(p.Flag.Outline), require && require.hasFlag(l.Flag.ResizeAll) && require.removeFlag(l.Flag.ResizeAll);
      }
      this.requestInvalidation();
    }
  }, g.prototype.removeFlag = function (e) {
    0 != (this._flags & e) && (this.requestInvalidation(), this._editors && this._iterateChildPathsEditors(function (t) {
      (e & l.Flag.ResizeAll) == l.Flag.ResizeAll ? t.removeFlag(p.Flag.Outline) : (e & p.Flag.Outline) == p.Flag.Outline && (this._flags & l.Flag.ResizeAll) == l.Flag.ResizeAll || t.removeFlag(e);
    }.bind(this)), this._flags = this._flags & ~e, this.requestInvalidation());
  }, g.prototype._paintOutline = function (e, t, i, n, r) {
    this._editors && this._editors.length > d.maxNumberOfEditorsToDraw ? l.prototype._paintOutline.call(this, e, t, i, n) : !this.hasFlag(p.Flag.Selected) && this.hasFlag(p.Flag.Outline) && this._editors && this._iterateChildPathsEditors(function (o) {
      o._paintOutline(e, t, i, n, r);
    }.bind(this));
  }, g.prototype.releasePathPreview = function () {
    for (var exports = this._element.getPaths().getFirstChild(); null != exports; exports = exports.getNext()) {
      var module = s.getEditor(exports);
      module && module.releasePathPreview();
    }
  }, g.prototype.hasPathPartSelection = function () {
    var e = false;
    return this._editors && this._iterateChildPathsEditors(function (t) {
      if (t.getPartSelection())
        return e = true, true;
    }.bind(this)), e;
  }, g.prototype._iterateChildPathsEditors = function (e) {
    if (this._editors && this._element.getPaths().getFirstChild() && s.getEditor(this._element.getPaths().getFirstChild()))
      for (var module = false, require = this._element.getPaths().getFirstChild(); null != require && !module; require = require.getNext()) {
        var n = s.getEditor(require);
        if (n)
          true === e(n) && (module = true);
      }
  }, g.prototype.toString = function () {
    return "[Object GCompoundPathEditor]";
  }, exports.exports = g;
}
