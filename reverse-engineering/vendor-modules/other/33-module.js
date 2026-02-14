/**
 * Module 33
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
      var n = i(28),
        r = i(22),
        o = i(2),
        a = i(0),
        s = i(6),
        l = i(112),
        h = i(207),
        A = i(14),
        c = i(11);

      function p() {
        r.call(this),
          this._setDefaultProperties(p.VisualProperties, p.MetaProperties);
      }
      a.inheritAndMix(p, r, [o.Properties, o.Store]),
        (p.LockType = {
          Partial: "P",
          Full: "F",
        }),
        (p.ProgramLck = {
          NoLock: 0,
          NoRealTime: 1,
          NoSizeChanges: 2,
          NoEdit: 4,
          NoMove: 8,
          NoOrigChildrenEdit: 16,
          NoNewChildren: 32,
          NoDelete: 64,
          AlwaysBack: 128,
          NoDirectVisibilityChange: 256,
          NoSelect: 512,
        }),
        (p.VisualProperties = {
          vis: !0,
        }),
        (p.MetaProperties = {
          name: null,
          lkt: null,
          plkt: p.ProgramLck.NoLock,
        }),
        (p.LabelHolder = function () {}),
        (p.LabelHolder.prototype.measureLabelWidth = function (e) {
          if (!this._scene) return 0;
          e = e || 1;
          var t = document.createElement("canvas").getContext("2d");
          return (
            (t.font = this._scene.$lbs * e * A.getScreenDPI() + "px Verdana"),
            t.measureText(this.$name).width
          );
        }),
        (p.LabelHolder.prototype._getLabelGeometryBBox = function () {
          return this.getGeometryBBox();
        }),
        (p.LabelHolder.prototype._hitTestLabel = function (e, t, i, n, r) {
          var o = this._getLabelGeometryBBox(),
            a = 1;
          if ((o || (o = new s(0, 0, 0, 0)), !this._scene)) return null;
          !r ||
            (0 === r.getX() && 0 === r.getY()) ||
            (o = o.translated(r.getX(), r.getY())),
            i && ((o = i.mapRect(o)), (a = i.getScaleFactor()));
          var A = h.scaleLabel ? a : this.getScaleLabelFactor(),
            c = this._scene.getLabelBBox(n ? 1 : A).getHeight();
          return new s(
            o.getX() - t,
            o.getY() - c - t,
            o.getWidth() + 2 * t,
            c + 2 * t
          ).containsPoint(e)
            ? new l(this, {
                label: !0,
              })
            : null;
        }),
        (p.LabelHolder.prototype.getScaleLabelFactor = function () {
          return h.scaleLabel ? 1 : h.scaleLabelFactor;
        }),
        (p.LabelHolder.prototype.isScaleLabel = function () {
          return h.scaleLabel;
        }),
        (p.LabelHolder.prototype.toString = function () {
          return "[Mixin GBlock.LabelHolder]";
        }),
        (p.prototype.assignFrom = function (e) {
          e instanceof p &&
            this.transferProperties(e, [p.VisualProperties, p.MetaProperties]),
            r.prototype.assignFrom.call(this, e);
        }),
        (p.prototype.getLabel = function () {
          return this.$name && "" !== this.$name
            ? this.$name
            : this.getNodeNameTranslated();
        }),
        (p.prototype.isLocked = function () {
          return (
            this.getProperty("lkt") || (this._parent && this._parent.isLocked())
          );
        }),
        (p.prototype._handleChange = function (e, t) {
          if (e === o._Change.Store)
            this.storeProperties(t.blob, p.VisualProperties),
              this.storeProperties(t.blob, p.MetaProperties, function (e, t) {
                return "name" === e && t ? c.xss(t) : t;
              });
          else if (e === o._Change.Restore)
            this.restoreProperties(t.blob, p.VisualProperties),
              this.restoreProperties(t.blob, p.MetaProperties, function (e, t) {
                return "name" === e && t ? c.xss(t) : t;
              });
          else if (e == o._Change.AfterPropertiesChange) {
            var i = t,
              n = i.properties.indexOf("vis") >= 0,
              a = i.properties.indexOf("lkt") >= 0;
            (n || a) &&
              (a &&
                this.accept(
                  function (e) {
                    e instanceof r && this._updateElementLock(e);
                  }.bind(this)
                ),
              n &&
                (this.accept(
                  function (e) {
                    e instanceof r && e._beforeVisibilityUpdate();
                  }.bind(this)
                ),
                this.accept(
                  function (e) {
                    e instanceof r && this._updateElementVisibility(e);
                  }.bind(this)
                ),
                this.accept(
                  function (e) {
                    e instanceof r && e._afterVisibilityUpdate();
                  }.bind(this)
                )));
          } else if (e === o._Change.BeforeChildRemove)
            t instanceof r &&
              (this._updateElementVisibility(t, !0),
              this._updateElementLock(t, null));
          else if (e === o._Change.AfterChildInsert)
            t instanceof r &&
              (this._updateElementVisibility(t), this._updateElementLock(t));
          else if (e === o._Change.BeforePropertiesChange) {
            var s = t.properties.indexOf("name");
            -1 !== s && (t.values[s] = c.xss(t.values[s]));
          }
          r.prototype._handleChange.call(this, e, t);
        }),
        (p.prototype._updateElementVisibility = function (e, t) {
          var i = void 0 !== t ? t : this.getProperty("vis");
          i && e instanceof p && (i = e.getProperty("vis"));
          var o =
            e.getParent() &&
            e.getParent().hasMixin(n) &&
            !("[GCompoundShape]" === e.getParent().toString()) &&
            null !== e.getParent().getEffects().getFirstChild();
          i
            ? (e.removeFlag(r.Flag.Hidden),
              e.getParent() &&
                e
                  .getParent()
                  ._notifyChange(r._Change.ChildGeometryUpdate, [e, !0]),
              o
                ? e.getParent()._requestInvalidation()
                : e._requestInvalidation())
            : (o
                ? e.getParent()._requestInvalidation()
                : e._requestInvalidation(),
              e.setFlag(r.Flag.Hidden),
              e.getParent() &&
                e
                  .getParent()
                  ._notifyChange(r._Change.ChildGeometryUpdate, [e, !1]));
        }),
        (p.prototype._requestInvalidateNode = function (e) {
          if (this.hasMixin(p.LabelHolder) && this._scene && e === this) {
            if (this.isPaintable()) {
              var t = e.getPaintBBox(null, !0);
              if (t) {
                var i = this.getScene()
                  .getLabelBBox(this.getScaleLabelFactor())
                  .getHeight();
                this._requestInvalidationArea(t.expanded(0, i, 0, 0));
              }
            }
          } else r.prototype._requestInvalidateNode.call(this, e);
        }),
        (p.prototype._invalidateOldPaintBBox = function () {
          if (this.hasMixin(p.LabelHolder) && this._scene) {
            if (this._savedPaintBBox && !this._savedPaintBBox.isEmpty()) {
              var e = this.getScene()
                .getLabelBBox(this.getScaleLabelFactor())
                .getHeight();
              this._requestInvalidationArea(
                this._savedPaintBBox.expanded(0, e, 0, 0)
              );
            }
          } else r.prototype._invalidateOldPaintBBox.call(this);
        }),
        (p.prototype._updateElementLock = function (e, t) {
          var i = void 0 !== t ? t : this.getProperty("lkt");
          if ((!i && e instanceof p && (i = e.getProperty("lkt")), i))
            switch (i) {
              case p.LockType.Full:
                e.setFlag(r.Flag.FullLocked);
              case p.LockType.Partial:
                e.setFlag(r.Flag.PartialLocked);
            }
          else
            e.removeFlag(r.Flag.PartialLocked), e.removeFlag(r.Flag.FullLocked);
        }),
        (e.exports = p);
    }
