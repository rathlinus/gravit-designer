/**
 * Module 39
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
  var n = require(11) /* GUtil */, r = require(7) /* GTransform */, o = require(0) /* GObject */, a = require(17) /* GRGBColor */, s = require(28) /* GStylable */;
  function l() {
  }
  o.inherit(l, o), l._Editors = {}, l.exports = function (e, t) {
    l._Editors[o.getTypeId(t)] = e;
  }, l.getEditor = function (e) {
    return e.__graphic_editor__ ? e.__graphic_editor__ : null;
  }, l.getOutlineColor = function (e, t, i, n, r) {
    var o, l = [
        255,
        255,
        255
      ];
    t = Math.max(0, Math.min(e.canvas.getWidth() - 1)), i = Math.max(0, Math.min(e.canvas.getHeight() - 1)), o = e.computedBackgroundColor ? e.computedBackgroundColor : e.canvas.getBitmap().getPixelValue(t, i).slice(0, 3), e.computedBackgroundColor = o;
    var h = a.closeEnough(o, n.toScreen(), 100), A = null;
    if (r && r.hasMixin(s) && r.isVisible()) {
      var c = 0, p = 0, u = 0, d = 1;
      r.hasProperty("_stop") && (d = r.getProperty("_stop"));
      for (var g = r.getPaintLayers(), f = g ? g.getLayers() : [], m = [], y = f.length - 1; y >= 0; y--) {
        var _ = f[y];
        if (_ instanceof s.FillPaintLayer) {
          var v = _.getProperty("_pt"), b = _.getProperty("_vs"), C = _.getProperty("_op");
          if (v && b)
            if ((w = v.getAverageColor()) && (m.unshift(w), w[3] *= C, w[3] *= d, w[3] >= 1))
              break;
        }
      }
      if (m.length) {
        m[0][3] < 1 && (c = o[0], p = o[1], u = o[2]);
        for (y = 0; y < m.length; y++) {
          var w = m[y], E = Math.min(1, Math.max(0, w[3]));
          c = c * (1 - E) + w[0] * E, p = p * (1 - E) + w[1] * E, u = u * (1 - E) + w[2] * E;
        }
        A = new a([
          c,
          p,
          u
        ]);
      } else
        A = new a(o);
    } else
      r && (A = new a(o));
    return A && h && a.closeEnough(A.toScreen(), l, 100) ? new a([
      0,
      0,
      40
    ]) : h ? new a(l) : n;
  }, l.Flag = {
    Selected: 1,
    Detail: 2,
    Outline: 4,
    HideEditor: 8,
    BackEditor: 16,
    Highlighted: 32
  }, l.closeEditor = function (e) {
    if (e) {
      for (var module = e.getEditors(); module && module.length;)
        l.closeEditor(module[0]), module = e.getEditors();
      e.deactivate instanceof Function && e.deactivate(), e.getParentEditor() && e.getParentEditor().removeEditor(e);
    }
  }, l.PartInfo = function (e, t, i, n, r) {
    this.editor = e, this.id = t, this.data = i, this.isolated = n, this.selectable = r;
  }, l.PartInfo.prototype.id = null, l.PartInfo.prototype.data = null, l.PartInfo.prototype.editor = null, l.PartInfo.prototype.isolated = null, l.PartInfo.prototype.selectable = null, l.prototype._flags = 0, l.prototype._temporalOutlineFlag = false, l.prototype._transform = null, l.prototype._parentEditor = null, l.prototype._editors = null, l.prototype._partSelection = null, l.prototype._blockDeletion = false, l.prototype._color = null, l.prototype.hasFlag = function (e) {
    return 0 != (this._flags & e);
  }, l.prototype.setFlag = function (e, t) {
    0 == (this._flags & e) && (t || this.requestInvalidation(), this._flags = this._flags | e, t || this.requestInvalidation());
  }, l.prototype.removeFlag = function (e, t) {
    0 != (this._flags & e) && (t || this.requestInvalidation(), this._flags = this._flags & ~e, t || this.requestInvalidation());
  }, l.prototype.setColor = function (e) {
    this._color = e;
  }, l.prototype.getColor = function () {
    return this._color;
  }, l.prototype.getParentEditor = function () {
    return this._parentEditor;
  }, l.prototype.getEditors = function () {
    return this._editors;
  }, l.prototype.appendEditor = function (e) {
    this.insertEditor(e, null);
  }, l.prototype.insertEditor = function (e, t) {
    var i = this._editors ? this._editors.length : 0;
    if (t && this._editors && (i = this._editors.indexOf(t)) < 0)
      throw new Error("Unknown reference editor.");
    if (null != e._parentEditor)
      throw new Error("Editor already appended.");
    this._editors || (this._editors = []), i >= this._editors.length ? this._editors.push(e) : this._editors.splice(i, 0, e), e._parentEditor = this;
  }, l.prototype.removeEditor = function (e, t) {
    var i = this._editors.indexOf(e);
    if (i < 0)
      throw new Error("Unknown editor.");
    this._editors.splice(i, 1), e._parentEditor = null, t && this.requestInvalidation();
  }, l.prototype.accept = function (e) {
    if (false === e.call(null, this))
      return false;
    if (this._editors)
      for (var module = 0; module < this._editors.length; ++module)
        if (false === this._editors[module].accept(e))
          return false;
    return true;
  }, l.prototype.isPartSelected = function (e) {
    return this._indexOfPartId(this._partSelection, e) >= 0;
  }, l.prototype.getPartSelection = function () {
    return this._partSelection;
  }, l.prototype.getPartsSelectionLength = function () {
    return this._partSelection ? this._partSelection.length : 0;
  }, l.prototype.updatePartSelection = function (e, t) {
    if (this.hasFlag(l.Flag.Selected)) {
      var require = null;
      if (e && this._partSelection) {
        if (t) {
          require = [];
          for (var r = 0; r < this._partSelection.length; ++r)
            this._indexOfPartId(t, this._partSelection[r]) < 0 && require.push(this._partSelection[r]);
          for (r = 0; r < t.length; ++r)
            this._indexOfPartId(this._partSelection, t[r]) < 0 && require.push(t[r]);
          0 === require.length && (require = null);
        }
      } else
        require = t && t.length > 0 ? t.slice() : null;
      n.equals(require, this._partSelection, false) || this._updatePartSelection(require);
    }
  }, l.prototype.updateOwnedPartsSelection = function (e, t) {
    if (t) {
      for (var require = [], n = 0; n < t.length; ++n) {
        var r = t[n];
        r.data.ownerEditor === this && require.push(r.id);
      }
      require.length && this.updatePartSelection(e, require);
    }
  }, l.prototype.getOwnedPartsSelectionLength = function () {
    var e = this.getPartsSelectionLength();
    if (this.hasFlag(l.Flag.Selected) && this._editors)
      for (var module = 0; module < this._editors.length; ++module)
        e += this._editors[module].getPartsSelectionLength();
    return e;
  }, l.prototype.isPartSelectionUnderCollisionAllowed = function () {
    return false;
  }, l.prototype.updatePartSelectionUnderCollision = function (e, t, i) {
    return false;
  }, l.prototype.isDeletePartsAllowed = function () {
    return false;
  }, l.prototype.deletePartsSelected = function () {
  }, l.prototype.isAlignPartsAllowed = function () {
    return false;
  }, l.prototype.hasSelectionEditing = function () {
    return false;
  }, l.prototype.alignParts = function (e, t, i) {
  }, l.prototype.getPartInfoAt = function (e, t, i, n, r) {
    n = n || 0;
    var o = null;
    if (this._editors && this._editors.length)
      for (var a = this._editors.length - 1; a >= 0; --a) {
        if (this._editors[a].hasFlag(l.Flag.BackEditor))
          o || (o = []), o.push(this._editors[a]);
        else if (h = this._editors[a].getPartInfoAt(e, t, i, n, r))
          return h;
      }
    if (i && true !== i.call(null, this))
      return null;
    var s = this.getBBox(t);
    if (s && s.expanded(n, n, n, n).containsPoint(e) && (h = this._getPartInfoAt(e, t, n, r)))
      return h;
    if (o)
      for (a = o.length - 1; a >= 0; --a) {
        var h;
        if (h = o[a].getPartInfoAt(e, t, i, n, r))
          return h;
      }
    return null;
  }, l.prototype.paint = function (e, t) {
    this._paintChildren(e, t);
  }, l.prototype.getBBox = function (e) {
    return this.getCustomBBox(e);
  }, l.prototype.getBBoxMargin = function () {
    return 1.5;
  }, l.prototype.getCustomBBox = function (e, t) {
    return null;
  }, l.prototype.requestInvalidation = function (e) {
  }, l.prototype.invalidate = function (e, t) {
    return t ? null : this.getBBox(e);
  }, l.prototype.setOutlineTmpFlag = function () {
    this.hasFlag(l.Flag.Outline) || (this.setFlag(l.Flag.Outline), this._temporalOutlineFlag = true);
  }, l.prototype.removeOutlineTmpFlag = function () {
    this._temporalOutlineFlag && (this.removeFlag(l.Flag.Outline), this._temporalOutlineFlag = false);
  }, l.prototype.movePart = function (e, t, i, n, r, o, a) {
    return this.hasFlag(l.Flag.Outline) ? this.requestInvalidation() : this.setOutlineTmpFlag(), null;
  }, l.prototype.resetPartMove = function (e, t) {
    this.removeOutlineTmpFlag();
  }, l.prototype.applyPartMove = function (e, t, i, n) {
    this._prepareApplyPartMove(e, t), this._applyPartMove(e, t, i, n), this._finishApplyPartMove(e, t);
  }, l.prototype._applyPartMove = function (e, t, i, n) {
    this.removeOutlineTmpFlag();
  }, l.prototype._prepareApplyPartMove = function (e, t) {
  }, l.prototype._finishApplyPartMove = function (e, t) {
  }, l.prototype.edTransform = function (e, t, i, n) {
    this._setTransform(e);
  }, l.prototype.resetTransform = function () {
    this._transform = null, this.requestInvalidation(), this.removeOutlineTmpFlag();
  }, l.prototype.canApplyTransform = function () {
    return this._transform && !this._transform.isIdentity() && this._transform.invertible();
  }, l.prototype.applyTransform = function (e) {
    this._prepareApplyTransform(e), this._applyTransform(e), this._finishApplyTransform(e);
  }, l.prototype._applyTransform = function (e) {
    this.resetTransform();
  }, l.prototype._prepareApplyTransform = function (e) {
  }, l.prototype._finishApplyTransform = function (e) {
  }, l.prototype.canInlineEdit = function () {
    return false;
  }, l.prototype.isContentModified = function () {
    return false;
  }, l.prototype.allowPartSelection = function () {
    return this.hasFlag(l.Flag.Selected);
  }, l.prototype.isRelativeToPage = function () {
    return true;
  }, l.prototype.isInlineEdit = function () {
    return false;
  }, l.prototype.beginInlineEdit = function (e) {
    throw new Error("Not Supported.");
  }, l.prototype.adjustInlineEditForView = function (e, t) {
    throw new Error("Not Supported.");
  }, l.prototype.finishInlineEdit = function () {
    throw new Error("Not Supported.");
  }, l.prototype.selectToolDragStartAction = function (e, t) {
    var i = null;
    if (this._editors)
      for (var n = 0; n < this._editors.length; ++n)
        if (i = this._editors[n].selectToolDragStartAction(e, t))
          return i;
    return e.editor !== this || t || (i = e), i;
  }, l.prototype.validateSelectionChange = function () {
    return true;
  }, l.prototype.canHandleDblClick = function () {
    return false;
  }, l.prototype.handleDblClick = function (e, t) {
    return false;
  }, l.prototype.blockRemoval = function () {
    this._blockRemoval = true;
  }, l.prototype.allowRemoval = function () {
    this._blockRemoval = false;
  }, l.prototype.isRemovalBlocked = function () {
    return this._blockRemoval;
  }, l.prototype.getCursor = function (e, t) {
    return null;
  }, l.prototype.getObjectNameModified = function () {
    return null;
  }, l.prototype._paintChildren = function (e, t, i) {
    if (this._editors)
      for (var n = 0; n < this._editors.length; ++n)
        i && !i(this._editors[n]) || this._editors[n].paint(e, t);
  }, l.prototype._getPartInfoAt = function (e, t, i) {
    return null;
  }, l.prototype._partIdAreEqual = function (e, t) {
    return e === t;
  }, l.prototype._indexOfPartId = function (e, t) {
    if (e && e.length > 0)
      for (var require = 0; require < e.length; ++require)
        if (this._partIdAreEqual(e[require], t))
          return require;
    return -1;
  }, l.prototype._updatePartSelection = function (e) {
    this.requestInvalidation(), this._partSelection = e, this.requestInvalidation();
  }, l.prototype._showAnnotations = function () {
    return true;
  }, l.prototype._setTransform = function (e) {
    r.equals(this._transform, e) || (this.hasFlag(l.Flag.Outline) ? this.requestInvalidation() : this.setOutlineTmpFlag(), this._transform = e, this.requestInvalidation());
  }, l.prototype.canHandleKeyEvents = function () {
    return false;
  }, l.prototype.handleKeyEvent = function (e) {
  }, l.prototype.toString = function () {
    return "[Object GBaseEditor]";
  }, exports.exports = l;
}
