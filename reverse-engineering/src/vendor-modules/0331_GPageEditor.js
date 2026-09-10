/**
 * chunk.vendor.js Module #331
 * Type: class
 * Name: GPageEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(36),
        o = i(154),
        a = i(83),
        s = (i(2), i(82)),
        l = i(6),
        h = i(7),
        A = i(39),
        c = (i(11), i(66)),
        p = i(24),
        u = i(12),
        d = (i(5), i(14), i(9), i(47), i(64));

      function g(e) {
        (o.call(this, e), (this._flags = c.Flag.ResizeAll));
      }
      (n.inheritAndMix(g, o, [o.LabelHolder]),
        r.exports(g, a),
        (g.FIRST_PAGE = 57005),
        (g.SWITCH_ORDER = !1),
        (g.MOVE_MASTER = !0),
        (g.prototype._collisionlessTransform = p.pageCollisionTransform),
        (g.prototype.setCollisionlessTransform = function (e) {
          this._collisionlessTransform = e;
        }),
        (g.prototype.movePart = function (e, t, i, n, r, a, s, l) {
          var A = o.prototype.movePart.call(this, e, t, i, n, r, a, s, l);
          if (e === o.LabelHolder.LABEL_PART_ID && l) {
            var p,
              u = n.mapPoint(i),
              g = n.mapPoint(t.point);
            p = this._collisionlessTransform
              ? this.getElement().doCollisionlessTransform(
                  new h(1, 0, 0, 1, u.getX() - g.getX(), u.getY() - g.getY()),
                )
              : d.modifiers.shiftKey
                ? this.getElement().doCollisionlessTransform(
                    new h(1, 0, 0, 1, u.getX() - g.getX(), u.getY() - g.getY()),
                    s,
                  )
                : new h(1, 0, 0, 1, u.getX() - g.getX(), u.getY() - g.getY());
            var f = new c.EdTransformOptions();
            ((f.isMultiPage = !0),
              (f.fullContentsTransform = !0),
              o.prototype.edTransform.call(this, p, null, null, f));
          }
          return A;
        }),
        (g.prototype._getPartInfoAt = function (e, t, i, n) {
          var r = o.prototype._getPartInfoAt.call(this, e, t, i);
          if (
            !r &&
            this.getElement().getScene() &&
            this.getElement().getScene().isFixedSized()
          ) {
            if (!p.pageSelectable) return null;
            var a = this._getLabelBBox(t);
            if (a && a.expanded(i, i, i, i).containsPoint(e)) {
              var s = this.getElement().getScene();
              if (g.MOVE_MASTER || !s.hasLinks(this.getElement())) {
                var l = new A.PartInfo(
                  this,
                  o.LabelHolder.LABEL_PART_ID,
                  {
                    point: e,
                    origTrf: t,
                  },
                  !0,
                  !0,
                );
                if (l) return l;
              }
            }
          }
          return r;
        }),
        (g.prototype.allowPartSelection = function () {
          return !0;
        }),
        (g.prototype.getCustomBBox = function (e, t) {
          var i = o.prototype.getCustomBBox.call(this, e, t);
          if (
            this.getElement().getScene() &&
            this.getElement().getScene().isFixedSized()
          )
            if (i) {
              var n = e.getScaleFactor(),
                r =
                  this.getElement()
                    .getScene()
                    .getLabelBBox(this.getElement().isScaleLabel() ? n : 1 / n)
                    .getHeight() + 1;
              i = i.expanded(0, r, 0, 0);
            } else
              this.getElement().getScene().isFixedSized() &&
                (i = this._getLabelBBox(e));
          return i;
        }),
        (g.prototype.canApplyTransform = function () {
          return !p.pageCollisionTransform || this._collisionlessTransform;
        }),
        (g.prototype._prepareApplyTransform = function (e) {
          var t = e;
          if (
            ((t._layoutTransform = null),
            this._transform && !this._transform.isIdentity())
          ) {
            var i = this._transform.getMatrix(),
              n = i[0],
              r = i[3];
            (u.isEqualEps(n, 1) && u.isEqualEps(r, 1)) ||
              ((t._layoutTransform = new h().scaled(n, r)), (t._relayout = !0));
          }
        }),
        (g.prototype.applyTransform = function (e, t, i, n) {
          if (this._transform && (!e || this._element === e)) {
            var r = this._transform.getTranslation(),
              a = this.getElement().getProperty("off") || new h();
            this.getElement().setProperty(
              "off",
              a.translated(r.getX(), r.getY()),
            );
          }
          o.prototype.applyTransform.call(this, e, t, i, n);
        }),
        (g.prototype._applyTransform = function (e, t, i, n) {
          if (e && this._element && this._element !== e) {
            var r = this._element.getPosition(!0).subtract(e.getPosition(!0)),
              o = this._transform
                .getTranslation()
                .translated(r.getX(), r.getY()),
              a = this._element.getProperty("off") || new h();
            e.setProperty("off", a.translated(o.getX(), o.getY()));
          }
          this.resetTransform();
        }),
        (g.prototype._applyPartMove = function (e, t, i, n) {
          var a = this.getElement().getScene();
          if (e === o.LabelHolder.LABEL_PART_ID) {
            var A,
              p = s.getEditor(a),
              u = this._transform
                .mapRect(this.getElement().getGeometryBBox())
                .getSide(l.Side.CENTER),
              d = null,
              f = Number.MAX_VALUE;
            if (
              (g.SWITCH_ORDER &&
                a.iteratePages(
                  function (e) {
                    A || (A = e);
                    var t = e
                        .getGeometryBBox()
                        .getSide(l.Side.CENTER)
                        .subtract(u),
                      i = t.dot(t);
                    (i < f && ((f = i), (d = e)), e);
                  }.bind(this),
                ),
              d && d !== this.getElement())
            ) {
              r.getEditor(a);
              var m = a.getIndexOfChild(this.getElement()),
                y = a.getIndexOfChild(d);
              (a.startBlockReferenceChanges(),
                a.beginUpdate(),
                a.removeChild(this.getElement()),
                m < y
                  ? d.getNext()
                    ? a.insertChild(this.getElement(), d.getNext())
                    : a.appendChild(this.getElement())
                  : a.insertChild(this.getElement(), d),
                p.updateSelection(!1, [this.getElement()]),
                a.endBlockReferenceChanges(),
                a.endUpdate());
            } else if (g.SWITCH_ORDER) this.resetTransform();
            else {
              var _ = this._transform.getTranslation(),
                v = this.getElement().getProperty("off") || new h();
              (this.getElement().setProperty(
                "off",
                v.translated(_.getX(), _.getY()),
              ),
                o.prototype.applyTransform.call(this, this.getElement(), n, i));
            }
          } else if (
            e === c.RESIZE_HANDLE_PART_ID &&
            !g.SWITCH_ORDER &&
            this.canApplyTransform()
          ) {
            this._transform.getMatrix();
            var b = this.getElement().getGeometryBBox(),
              C = this._transform.mapRect(this.getElement().getGeometryBBox()),
              w = C.getWidth() / b.getWidth(),
              E = C.getHeight() / b.getHeight(),
              B = C.getX() - b.getX(),
              x = C.getY() - b.getY(),
              P =
                ((v = (
                  this.getElement().getProperty("off") || new h()
                ).translated(B, x)),
                this.getElement().getProperty("w")),
              S = this.getElement().getProperty("h");
            w * E != 0 &&
              this.getElement().setProperties(
                ["w", "h", "off"],
                [P * w, S * E, v],
              );
          }
          o.prototype._applyPartMove.call(this, e, t, i, n);
        }),
        (g.prototype.edTransform = function (e, t, i, n) {
          ((this._collisionlessTransform || n.doCollisionlessTransform) &&
            (e = this.getElement().doCollisionlessTransform(e)),
            o.prototype.edTransform.call(this, e, t, i, n));
        }),
        (g.prototype.resetTransform = function () {
          for (var e = this._editors ? this._editors.length : 0; e > 0; --e) {
            this._editors[e - 1].resetTransform();
          }
          o.prototype.resetTransform.call(this);
        }),
        (g.prototype.paint = function (e, t) {
          if (!t.configuration.multiPageView) {
            var i = this.getElement().getScene();
            if (i.getActivePage() && i.getActivePage() !== this.getElement())
              return;
          }
          o.prototype.paint.call(this, e, t);
        }),
        (g.prototype._paintResizeBoxOutline = function (e, t, i, n, r) {
          o.prototype._paintResizeBoxOutline.call(
            this,
            e,
            t,
            i,
            n,
            p.pageOutlineWidth,
          );
        }),
        (g.prototype.toString = function () {
          return "[Object GPageEditor]";
        }),
        (g.prototype._showEditor = function (e) {
          return !!p.pageSelectable && o.prototype._showEditor.call(this, e);
        }),
        (e.exports = g));
    }