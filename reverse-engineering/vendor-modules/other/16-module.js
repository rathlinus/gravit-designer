/**
 * Module 16
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(11),
        r = i(7),
        o = i(0),
        a = i(17),
        s = i(28);

      function l() {}
      o.inherit(l, o),
        (l._Editors = {}),
        (l.exports = function (e, t) {
          l._Editors[o.getTypeId(t)] = e;
        }),
        (l.getEditor = function (e) {
          return e.__graphic_editor__ ? e.__graphic_editor__ : null;
        }),
        (l.getOutlineColor = function (e, t, i, n, r) {
          var o,
            l = [255, 255, 255];
          (t = Math.max(0, Math.min(e.canvas.getWidth() - 1))),
            (i = Math.max(0, Math.min(e.canvas.getHeight() - 1))),
            (o = e.computedBackgroundColor
              ? e.computedBackgroundColor
              : e.canvas.getBitmap().getPixelValue(t, i).slice(0, 3)),
            (e.computedBackgroundColor = o);
          var h = a.closeEnough(o, n.toScreen(), 100),
            A = null;
          if (r && r.hasMixin(s) && r.isVisible()) {
            var c = 0,
              p = 0,
              u = 0,
              d = 1;
            r.hasProperty("_stop") && (d = r.getProperty("_stop"));
            for (
              var g = r.getPaintLayers(),
                f = g ? g.getLayers() : [],
                m = [],
                y = f.length - 1;
              y >= 0;
              y--
            ) {
              var _ = f[y];
              if (_ instanceof s.FillPaintLayer) {
                var v = _.getProperty("_pt"),
                  b = _.getProperty("_vs"),
                  C = _.getProperty("_op");
                if (v && b)
                  if (
                    (w = v.getAverageColor()) &&
                    (m.unshift(w), (w[3] *= C), (w[3] *= d), w[3] >= 1)
                  )
                    break;
              }
            }
            if (m.length) {
              m[0][3] < 1 && ((c = o[0]), (p = o[1]), (u = o[2]));
              for (y = 0; y < m.length; y++) {
                var w = m[y],
                  E = Math.min(1, Math.max(0, w[3]));
                (c = c * (1 - E) + w[0] * E),
                  (p = p * (1 - E) + w[1] * E),
                  (u = u * (1 - E) + w[2] * E);
              }
              A = new a([c, p, u]);
            } else A = new a(o);
          } else r && (A = new a(o));
          return A && h && a.closeEnough(A.toScreen(), l, 100)
            ? new a([0, 0, 40])
            : h
            ? new a(l)
            : n;
        }),
        (l.Flag = {
          Selected: 1,
          Detail: 2,
          Outline: 4,
          HideEditor: 8,
          BackEditor: 16,
          Highlighted: 32,
        }),
        (l.closeEditor = function (e) {
          if (e) {
            for (var t = e.getEditors(); t && t.length; )
              l.closeEditor(t[0]), (t = e.getEditors());
            e.deactivate instanceof Function && e.deactivate(),
              e.getParentEditor() && e.getParentEditor().removeEditor(e);
          }
        }),
        (l.PartInfo = function (e, t, i, n, r) {
          (this.editor = e),
            (this.id = t),
            (this.data = i),
            (this.isolated = n),
            (this.selectable = r);
        }),
        (l.PartInfo.prototype.id = null),
        (l.PartInfo.prototype.data = null),
        (l.PartInfo.prototype.editor = null),
        (l.PartInfo.prototype.isolated = null),
        (l.PartInfo.prototype.selectable = null),
        (l.prototype._flags = 0),
        (l.prototype._temporalOutlineFlag = !1),
        (l.prototype._transform = null),
        (l.prototype._parentEditor = null),
        (l.prototype._editors = null),
        (l.prototype._partSelection = null),
        (l.prototype._blockDeletion = !1),
        (l.prototype._color = null),
        (l.prototype.hasFlag = function (e) {
          return 0 != (this._flags & e);
        }),
        (l.prototype.setFlag = function (e, t) {
          0 == (this._flags & e) &&
            (t || this.requestInvalidation(),
            (this._flags = this._flags | e),
            t || this.requestInvalidation());
        }),
        (l.prototype.removeFlag = function (e, t) {
          0 != (this._flags & e) &&
            (t || this.requestInvalidation(),
            (this._flags = this._flags & ~e),
            t || this.requestInvalidation());
        }),
        (l.prototype.setColor = function (e) {
          this._color = e;
        }),
        (l.prototype.getColor = function () {
          return this._color;
        }),
        (l.prototype.getParentEditor = function () {
          return this._parentEditor;
        }),
        (l.prototype.getEditors = function () {
          return this._editors;
        }),
        (l.prototype.appendEditor = function (e) {
          this.insertEditor(e, null);
        }),
        (l.prototype.insertEditor = function (e, t) {
          var i = this._editors ? this._editors.length : 0;
          if (t && this._editors && (i = this._editors.indexOf(t)) < 0)
            throw new Error("Unknown reference editor.");
          if (null != e._parentEditor)
            throw new Error("Editor already appended.");
          this._editors || (this._editors = []),
            i >= this._editors.length
              ? this._editors.push(e)
              : this._editors.splice(i, 0, e),
            (e._parentEditor = this);
        }),
        (l.prototype.removeEditor = function (e, t) {
          var i = this._editors.indexOf(e);
          if (i < 0) throw new Error("Unknown editor.");
          this._editors.splice(i, 1),
            (e._parentEditor = null),
            t && this.requestInvalidation();
        }),
        (l.prototype.accept = function (e) {
          if (!1 === e.call(null, this)) return !1;
          if (this._editors)
            for (var t = 0; t < this._editors.length; ++t)
              if (!1 === this._editors[t].accept(e)) return !1;
          return !0;
        }),
        (l.prototype.isPartSelected = function (e) {
          return this._indexOfPartId(this._partSelection, e) >= 0;
        }),
        (l.prototype.getPartSelection = function () {
          return this._partSelection;
        }),
        (l.prototype.getPartsSelectionLength = function () {
          return this._partSelection ? this._partSelection.length : 0;
        }),
        (l.prototype.updatePartSelection = function (e, t) {
          if (this.hasFlag(l.Flag.Selected)) {
            var i = null;
            if (e && this._partSelection) {
              if (t) {
                i = [];
                for (var r = 0; r < this._partSelection.length; ++r)
                  this._indexOfPartId(t, this._partSelection[r]) < 0 &&
                    i.push(this._partSelection[r]);
                for (r = 0; r < t.length; ++r)
                  this._indexOfPartId(this._partSelection, t[r]) < 0 &&
                    i.push(t[r]);
                0 === i.length && (i = null);
              }
            } else i = t && t.length > 0 ? t.slice() : null;
            n.equals(i, this._partSelection, !1) ||
              this._updatePartSelection(i);
          }
        }),
        (l.prototype.updateOwnedPartsSelection = function (e, t) {
          if (t) {
            for (var i = [], n = 0; n < t.length; ++n) {
              var r = t[n];
              r.data.ownerEditor === this && i.push(r.id);
            }
            i.length && this.updatePartSelection(e, i);
          }
        }),
        (l.prototype.getOwnedPartsSelectionLength = function () {
          var e = this.getPartsSelectionLength();
          if (this.hasFlag(l.Flag.Selected) && this._editors)
            for (var t = 0; t < this._editors.length; ++t)
              e += this._editors[t].getPartsSelectionLength();
          return e;
        }),
        (l.prototype.isPartSelectionUnderCollisionAllowed = function () {
          return !1;
        }),
        (l.prototype.updatePartSelectionUnderCollision = function (e, t, i) {
          return !1;
        }),
        (l.prototype.isDeletePartsAllowed = function () {
          return !1;
        }),
        (l.prototype.deletePartsSelected = function () {}),
        (l.prototype.isAlignPartsAllowed = function () {
          return !1;
        }),
        (l.prototype.hasSelectionEditing = function () {
          return !1;
        }),
        (l.prototype.alignParts = function (e, t, i) {}),
        (l.prototype.getPartInfoAt = function (e, t, i, n, r) {
          n = n || 0;
          var o = null;
          if (this._editors && this._editors.length)
            for (var a = this._editors.length - 1; a >= 0; --a) {
              if (this._editors[a].hasFlag(l.Flag.BackEditor))
                o || (o = []), o.push(this._editors[a]);
              else if ((h = this._editors[a].getPartInfoAt(e, t, i, n, r)))
                return h;
            }
          if (i && !0 !== i.call(null, this)) return null;
          var s = this.getBBox(t);
          if (
            s &&
            s.expanded(n, n, n, n).containsPoint(e) &&
            (h = this._getPartInfoAt(e, t, n, r))
          )
            return h;
          if (o)
            for (a = o.length - 1; a >= 0; --a) {
              var h;
              if ((h = o[a].getPartInfoAt(e, t, i, n, r))) return h;
            }
          return null;
        }),
        (l.prototype.paint = function (e, t) {
          this._paintChildren(e, t);
        }),
        (l.prototype.getBBox = function (e) {
          return this.getCustomBBox(e);
        }),
        (l.prototype.getBBoxMargin = function () {
          return 1.5;
        }),
        (l.prototype.getCustomBBox = function (e, t) {
          return null;
        }),
        (l.prototype.requestInvalidation = function (e) {}),
        (l.prototype.invalidate = function (e, t) {
          return t ? null : this.getBBox(e);
        }),
        (l.prototype.setOutlineTmpFlag = function () {
          this.hasFlag(l.Flag.Outline) ||
            (this.setFlag(l.Flag.Outline), (this._temporalOutlineFlag = !0));
        }),
        (l.prototype.removeOutlineTmpFlag = function () {
          this._temporalOutlineFlag &&
            (this.removeFlag(l.Flag.Outline), (this._temporalOutlineFlag = !1));
        }),
        (l.prototype.movePart = function (e, t, i, n, r, o, a) {
          return (
            this.hasFlag(l.Flag.Outline)
              ? this.requestInvalidation()
              : this.setOutlineTmpFlag(),
            null
          );
        }),
        (l.prototype.resetPartMove = function (e, t) {
          this.removeOutlineTmpFlag();
        }),
        (l.prototype.applyPartMove = function (e, t, i, n) {
          this._prepareApplyPartMove(e, t),
            this._applyPartMove(e, t, i, n),
            this._finishApplyPartMove(e, t);
        }),
        (l.prototype._applyPartMove = function (e, t, i, n) {
          this.removeOutlineTmpFlag();
        }),
        (l.prototype._prepareApplyPartMove = function (e, t) {}),
        (l.prototype._finishApplyPartMove = function (e, t) {}),
        (l.prototype.edTransform = function (e, t, i, n) {
          this._setTransform(e);
        }),
        (l.prototype.resetTransform = function () {
          (this._transform = null),
            this.requestInvalidation(),
            this.removeOutlineTmpFlag();
        }),
        (l.prototype.canApplyTransform = function () {
          return (
            this._transform &&
            !this._transform.isIdentity() &&
            this._transform.invertible()
          );
        }),
        (l.prototype.applyTransform = function (e) {
          this._prepareApplyTransform(e),
            this._applyTransform(e),
            this._finishApplyTransform(e);
        }),
        (l.prototype._applyTransform = function (e) {
          this.resetTransform();
        }),
        (l.prototype._prepareApplyTransform = function (e) {}),
        (l.prototype._finishApplyTransform = function (e) {}),
        (l.prototype.canInlineEdit = function () {
          return !1;
        }),
        (l.prototype.isContentModified = function () {
          return !1;
        }),
        (l.prototype.allowPartSelection = function () {
          return this.hasFlag(l.Flag.Selected);
        }),
        (l.prototype.isRelativeToPage = function () {
          return !0;
        }),
        (l.prototype.isInlineEdit = function () {
          return !1;
        }),
        (l.prototype.beginInlineEdit = function (e) {
          throw new Error("Not Supported.");
        }),
        (l.prototype.adjustInlineEditForView = function (e, t) {
          throw new Error("Not Supported.");
        }),
        (l.prototype.finishInlineEdit = function () {
          throw new Error("Not Supported.");
        }),
        (l.prototype.selectToolDragStartAction = function (e, t) {
          var i = null;
          if (this._editors)
            for (var n = 0; n < this._editors.length; ++n)
              if ((i = this._editors[n].selectToolDragStartAction(e, t)))
                return i;
          return e.editor !== this || t || (i = e), i;
        }),
        (l.prototype.validateSelectionChange = function () {
          return !0;
        }),
        (l.prototype.canHandleDblClick = function () {
          return !1;
        }),
        (l.prototype.handleDblClick = function (e, t) {
          return !1;
        }),
        (l.prototype.blockRemoval = function () {
          this._blockRemoval = !0;
        }),
        (l.prototype.allowRemoval = function () {
          this._blockRemoval = !1;
        }),
        (l.prototype.isRemovalBlocked = function () {
          return this._blockRemoval;
        }),
        (l.prototype.getCursor = function (e, t) {
          return null;
        }),
        (l.prototype.getObjectNameModified = function () {
          return null;
        }),
        (l.prototype._paintChildren = function (e, t, i) {
          if (this._editors)
            for (var n = 0; n < this._editors.length; ++n)
              (i && !i(this._editors[n])) || this._editors[n].paint(e, t);
        }),
        (l.prototype._getPartInfoAt = function (e, t, i) {
          return null;
        }),
        (l.prototype._partIdAreEqual = function (e, t) {
          return e === t;
        }),
        (l.prototype._indexOfPartId = function (e, t) {
          if (e && e.length > 0)
            for (var i = 0; i < e.length; ++i)
              if (this._partIdAreEqual(e[i], t)) return i;
          return -1;
        }),
        (l.prototype._updatePartSelection = function (e) {
          this.requestInvalidation(),
            (this._partSelection = e),
            this.requestInvalidation();
        }),
        (l.prototype._showAnnotations = function () {
          return !0;
        }),
        (l.prototype._setTransform = function (e) {
          r.equals(this._transform, e) ||
            (this.hasFlag(l.Flag.Outline)
              ? this.requestInvalidation()
              : this.setOutlineTmpFlag(),
            (this._transform = e),
            this.requestInvalidation());
        }),
        (l.prototype.canHandleKeyEvents = function () {
          return !1;
        }),
        (l.prototype.handleKeyEvent = function (e) {}),
        (l.prototype.toString = function () {
          return "[Object GBaseEditor]";
        }),
        (e.exports = l);
    }
