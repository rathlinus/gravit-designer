/**
 * chunk.vendor.js Module #36
 * Type: class
 * Name: GElementEditor
 */

function (e, t, i) {
      var n = i(39),
        r = i(22),
        o = i(84),
        a = i(66),
        s = i(0),
        l = i(6),
        h = i(12),
        A = i(56),
        c = i(7),
        p = i(87),
        u = i(63),
        d = i(59),
        g = i(5);
      (i(9), i(47));

      function f(e) {
        ((this._element = e), a.call(this));
      }
      (s.inherit(f, a),
        (f._Editors = {}),
        (f.exports = function (e, t) {
          f._Editors[s.getTypeId(t)] = e;
        }),
        (f.DropType = {
          Pattern: 0,
          Text: 1,
          Node: 2,
          FontFamily: 10,
        }),
        (f.DROP_MIME_TYPE_FONT_FAMILY = "application/font+family"),
        (f.DROP_MIME_TYPE_CUSTOM = "gravit/custom+drop+data"),
        (f.getEditor = function (e) {
          return e.__editor__ ? e.__editor__ : null;
        }),
        (f.createEditor = function (e, t) {
          var i = f._Editors[s.getTypeId(e)];
          return i ? new i(e, t) : null;
        }),
        (f.openEditor = function (e, t, i) {
          if (!e._scene && !t)
            throw new Error("Node is not attached to create an editor for.");
          if (null != f.getEditor(e)) return f.getEditor(e);
          var n = f.createEditor(e);
          if (!n) return null;
          for (var o = e.getParent(); null !== o; o = o.getParent())
            if (o instanceof r) {
              var a = f.getEditor(o);
              if ((a || (a = f.openEditor(o)), a)) {
                if (!i) {
                  var s = null,
                    l = a.getEditors() || [];
                  s = l[0] || null;
                  var h = null;
                  e: for (var A = l.length - 1; A >= 0; A--) {
                    var c = l[A];
                    if (c instanceof f) {
                      for (
                        var p = c.getElement().getNext();
                        null != p;
                        p = p.getNext()
                      ) {
                        if (p === e) {
                          s = h;
                          break e;
                        }
                        if (h) if (f.getEditor(p) === h) break;
                      }
                      h = c;
                    }
                  }
                }
                a.insertEditor(n, s);
                break;
              }
            }
          return (n._attach(), (e.__editor__ = n), n);
        }),
        (f.closeElementEditor = function (e) {
          var t = f.getEditor(e);
          if (t) {
            if (!f._Editors[s.getTypeId(e)]) return;
            for (var i = t.getEditors(); i && i.length; )
              (i[0] instanceof f
                ? f.closeElementEditor(i[0].getElement())
                : a.closeEditor(i[0]),
                (i = t.getEditors()));
            (t.requestInvalidation(),
              t.getParentEditor() && t.getParentEditor().removeEditor(t),
              t._detach(),
              delete e.__editor__);
          }
        }),
        (f.PartsPropertyVals = function (e) {
          this.property = e;
        }),
        (f.PartsPropertyVals.prototype.property = null),
        (f.PartsPropertyVals.prototype.parts = null),
        (f.PartsPropertyVals.prototype.values = null),
        (f.prototype._element = null),
        (f.prototype._elementPreview = null),
        (f.prototype._preTransform = null),
        (f.prototype.getElement = function () {
          return this._element;
        }),
        (f.prototype.getPaintElement = function () {
          return this._elementPreview ? this._elementPreview : this._element;
        }),
        (f.prototype._computeOutlineColor = function (e, t) {
          var i = new c(),
            r = this._element,
            o = r.getPaintBBox() || new l(),
            a = new g(o.getX() - 1, o.getY() - 1);
          t && (i = i.multiplied(t));
          var s = i.mapPoint(a),
            h = s.getX(),
            A = s.getY();
          this._computedOutlineColor = n.getOutlineColor(
            e,
            h,
            A,
            e.selectionShapeOutlineColor,
            r,
          );
        }),
        (f.prototype.getPEGeometryBBox = function () {
          var e = null;
          if (
            this.hasFlag(n.Flag.Selected) ||
            this.hasFlag(n.Flag.Highlighted) ||
            this.hasFlag(n.Flag.Outline)
          ) {
            var t,
              i = this.getPaintElement(),
              r = this.getElement(),
              o = null;
            if (i && i != r) t = i;
            else {
              var a = (t = r).getTransform();
              (this._preTransform &&
                a &&
                a.invertible() &&
                (o = a.inverted().multiplied(this._preTransform).multiplied(a)),
                this._transform &&
                  (o = o ? o.multiplied(this._transform) : this._transform));
            }
            if (t.hasMixin(p)) {
              var s = o ? new u(t, o) : t;
              e = d.calculateBounds(s, !0);
            } else ((e = t.getGeometryBBox()), o && (e = o.mapRect(e)));
          }
          return e;
        }),
        (f.prototype._isBBoxEmpty = function () {
          return !(
            this.hasFlag(n.Flag.Selected) || this.hasFlag(n.Flag.Highlighted)
          );
        }),
        (f.prototype.getBBox = function (e) {
          if (this._isBBoxEmpty()) return null;
          var t = e;
          this._transform && (t = this._transform.multiplied(e));
          var i = this.getPaintElement().getGeometryBBox(),
            n =
              !this._preTransform &&
              this.getElement() instanceof A &&
              this.getElement().getTransform();
          if (n) {
            var r = this.getElement().getSourceBBox();
            if (r) {
              var o = this.getElement().getGeometryBBox();
              l.equals(i, o) ? ((n = t.preMultiplied(n)), (i = r)) : (n = null);
            } else n = null;
          }
          if (i) {
            var a = this.getBBoxMargin();
            i = (n || t).mapRect(i).expanded(a, a, a, a);
          }
          var s = this.getCustomBBox(t, !1);
          return (s && (i = i ? i.united(s) : s), i);
        }),
        (f.prototype.requestInvalidation = function (e) {
          this._element.getScene() &&
            n.getEditor(this._element.getScene()).requestInvalidation(this, e);
        }),
        (f.prototype.resetPartMove = function (e, t) {
          (this._setElementPreview(null),
            (this._element._relayout = !1),
            a.prototype.resetPartMove.call(this, e, t));
        }),
        (f.prototype._prepareApplyPartMove = function (e, t) {
          this._element.hasMixin(r.Layout) &&
            ((this._element._layoutTransform = null),
            (t && t.noRelayout) ||
              (this._oldBBox = this._element.getGeometryBBox()),
            (this._element._relayout = !0));
        }),
        (f.prototype._applyPartMove = function (e, t, i, n) {
          (a.prototype._applyPartMove.call(this, e, t, i, n),
            this._setElementPreview(null));
        }),
        (f.prototype._finishApplyPartMove = function (e, t) {
          var i = !!t && t.noRelayout;
          if (
            !i &&
            this._element.hasMixin(r.Layout) &&
            this._element._relayout
          ) {
            if (this._element._layoutTransform)
              (this._element._layoutAnchorContents(
                null,
                null,
                this._element._layoutTransform,
              ),
                (this._element._layoutTransform = null));
            else {
              var n = this._element.getGeometryBBox();
              l.equals(this._oldBBox, n) ||
                !this._oldBBox ||
                !n ||
                (h.isEqualEps(this._oldBBox.getWidth(), n.getWidth(), 1e-10) &&
                  h.isEqualEps(
                    this._oldBBox.getHeight(),
                    n.getHeight(),
                    1e-10,
                  )) ||
                this._element._layoutAnchorContents(n, this._oldBBox, null);
            }
            this._element._relayout = !1;
          } else if (i && this._element.hasMixin(r.Layout)) {
            var o = this._element._layoutTransform;
            this._element._layoutTransform || (o = new c());
            for (
              var a = this._element.getFirstChild();
              null !== a;
              a = a.getNext()
            )
              if (
                a.hasMixin(r.Transform) &&
                a.hasMixin(r.Anchor) &&
                (a.getProperty("hacr") || a.getProperty("vacr"))
              ) {
                var s = a.getProperty("hatrf"),
                  A = a.getProperty("vatrf");
                a.setProperties(
                  ["hatrf", "vatrf"],
                  [s ? s.multiplied(o) : o, A ? A.multiplied(o) : o],
                );
              }
            ((this._element._layoutTransform = null),
              (this._element._relayout = !1));
          }
        }),
        (f.prototype.resetTransform = function () {
          (this._setElementPreview(null),
            a.prototype.resetTransform.call(this));
        }),
        (f.prototype.canApplyTransform = function () {
          var e = this.getElement();
          return (
            a.prototype.canApplyTransform.call(this) &&
            e.hasMixin(r.Transform) &&
            !e.hasFlag(r.Flag.PartialLocked)
          );
        }),
        (f.prototype.applyTransform = function (e, t, i, n) {
          (this._prepareApplyTransform(e),
            this._applyTransform(e, t, i, n),
            this._finishApplyTransform(e));
        }),
        (f.prototype._prepareApplyTransform = function (e) {
          var t = e;
          if (t.hasMixin(r.Layout))
            if (
              ((t._layoutTransform = null),
              (this._partSelection && this._partSelection.length) ||
                this._elementPreview)
            )
              ((this._oldBBox = t.getGeometryBBox()), (t._relayout = !0));
            else if (this._transform && !this._transform.isIdentity())
              ((t._layoutTransform = this._transform), (t._relayout = !0));
            else if (this._preTransform && !this._preTransform.isIdentity()) {
              var i = t.getTransform();
              ((t._layoutTransform =
                i && i.invertible()
                  ? i.inverted().multiplied(this._preTransform).multiplied(i)
                  : this._preTransform),
                (t._relayout = !0));
            }
        }),
        (f.prototype._applyTransform = function (e, t, i, n) {
          var r = e;
          if ((this._transform || this._preTransform) && r) {
            var o = !1;
            if (
              !(l =
                this._transform && !this._transform.isIdentity()
                  ? this._transform
                  : null) &&
              this._preTransform &&
              !this._preTransform.isIdentity()
            ) {
              var s = r.getTransform();
              ((l =
                s && s.invertible()
                  ? s.inverted().multiplied(this._preTransform).multiplied(s)
                  : this._preTransform),
                (o = !0));
            }
            l &&
              ((this._transform = null),
              (this._preTransform = null),
              r.transform(l, t, i),
              (this._transform = o ? null : l),
              (this._preTransform = o ? l : null));
          } else if (r && this._elementPreview) {
            var l;
            (l = this._getTransformFromPreview()) &&
              !l.isIdentity() &&
              r.transform(l, t, i);
          }
          a.prototype._applyTransform.call(this);
        }),
        (f.prototype._getTransformFromPreview = function () {
          return null;
        }),
        (f.prototype._finishApplyTransform = function (e) {
          var t = e;
          if (t.hasMixin(r.Layout) && t._relayout) {
            if (t._layoutTransform)
              (t._layoutAnchorContents(null, null, t._layoutTransform),
                (t._layoutTransform = null));
            else {
              var i = t.getGeometryBBox();
              (l.equals(this._oldBBox, i) ||
                !this._oldBBox ||
                !i ||
                (h.isEqualEps(this._oldBBox.getWidth(), i.getWidth(), 1e-10) &&
                  h.isEqualEps(
                    this._oldBBox.getHeight(),
                    i.getHeight(),
                    1e-10,
                  )) ||
                t._layoutAnchorContents(i, this._oldBBox, null),
                (this._oldBBox = null));
            }
            t._relayout = !1;
          }
        }),
        (f.prototype.acceptDrop = function (e, t, i, n) {
          if (this._editors)
            for (var r = 0; r < this._editors.length; ++r)
              if (
                this._editors[r] instanceof f &&
                !0 === this._editors[r].acceptDrop(e, t, i, n)
              )
                return !0;
          return !1;
        }),
        (f.prototype.applyPropertiesToParts = function (e, t, i, n, r) {
          return !1;
        }),
        (f.prototype.getPartsProperty = function (e) {
          return null;
        }),
        (f.prototype.getStylableParts = function () {
          return null;
        }),
        (f.prototype.initialSetup = function (e, t) {
          this._element.hasMixin(o) && this._element.setProperty("uid", t);
        }),
        (f.prototype.getObjectNameModified = function () {
          return this.getElement().getNodeNameTranslated();
        }),
        (f.prototype.getEditorStateData = function () {
          return null;
        }),
        (f.prototype.restoreEditorStateData = function (e) {}),
        (f.prototype.findPivots = function (e) {
          return this._element.findPivots(!0, e);
        }),
        (f.prototype.getElementSelectionBBox = function () {
          return this._element.getGeometryBBox();
        }),
        (f.prototype._setElementPreview = function (e) {
          (this._elementPreview && (this._elementPreview._baseElement = null),
            (this._elementPreview = e),
            this._elementPreview &&
              (this._elementPreview._baseElement = this._element));
        }),
        (f.prototype._attach = function () {}),
        (f.prototype._detach = function () {}),
        (f.prototype.toString = function () {
          return "[Object GElementEditor]";
        }),
        (e.exports = f));
    }