/**
 * chunk.vendor.js Module #276
 * Type: class
 * Name: GGradientStyleEditor
 */

function (e, t, i) {
      var n = i(82),
        r = i(138),
        o = i(2),
        a = i(83),
        s = i(0),
        l = i(28),
        h = i(11),
        A = i(56),
        c = i(122),
        p = i(24),
        u = i(6),
        d = i(160),
        g = i(7),
        f = i(385),
        m = i(12),
        y = i(64),
        _ = i(81),
        v = i(5),
        b = i(52),
        C = i(39),
        w = i(17),
        E = i(14),
        B = i(9),
        x = i(47);

      function P() {
        f.call(this);
      }
      (s.inherit(P, f),
        (P.DEFAULT_EPS = 1e-6),
        (P.STOP_HANDLE_PART_ID = h.uuid()),
        (P.PLUS_STOP_PART_ID = h.uuid()),
        (P.alignHandlePoint = function (e, t) {
          var i = t % 2 != 0,
            n = Math.floor(e.getX()),
            r = Math.floor(e.getY());
          return (i && ((n += 0.5), (r += 0.5)), new v(n, r));
        }),
        (P.prototype._gradient = null),
        (P.prototype._componentOfEffect = !1),
        (P.prototype._propName = null),
        (P.prototype._propHolder = null),
        (P.prototype._snapPoints = null),
        (P.prototype.activate = function (e) {
          if (e.propName && e.propHolder instanceof o) {
            var t = e.propHolder.getProperty(
              e.propName,
              !1,
              null,
              e.propTemporary,
            );
            if (t instanceof r)
              return (
                (this._propName = e.propName),
                (this._propHolder = e.propHolder),
                (this._gradient = t.clone()),
                (this._componentOfEffect = e.propHolder instanceof l.Effect),
                (this._snapPoints = null),
                f.prototype.activate.call(this, e)
              );
          }
          return !1;
        }),
        (P.prototype.deactivate = function () {
          (f.prototype.deactivate.call(this),
            (this._gradient = null),
            (this._propName = null),
            (this._propHolder = null),
            (this._componentOfEffect = !1),
            (this._snapPoints = null));
        }),
        (P.prototype.validateAlreadyActive = function (e) {
          return (
            !(
              this._propHolder !== e.propHolder ||
              this._propName !== e.propName ||
              !h.equals(this._gradient, e.propHolder.getProperty(e.propName))
            ) && f.prototype.validateAlreadyActive.call(this, e)
          );
        }),
        (P.prototype.getEditObj = function () {
          return this._gradient;
        }),
        (P.prototype._partIdAreEqual = function (e, t) {
          if (e && t) {
            if (
              e.type === t.type &&
              e.type === P.STOP_HANDLE_PART_ID &&
              e.idx == t.idx
            )
              return !0;
            if (
              e.type === t.type &&
              e.type === P.PLUS_STOP_PART_ID &&
              e.pos == t.pos
            )
              return !0;
            if (!e.type && !t.type && e == t) return !0;
          }
          return !1;
        }),
        (P.prototype.getCursor = function (e, t) {
          return e && e.type === P.STOP_HANDLE_PART_ID
            ? b.SelectDot
            : e && e.type === P.PLUS_STOP_PART_ID
              ? b.SelectPlus
              : null;
        }),
        (P.prototype.getCustomBBox = function (e, t) {
          var i = null;
          return (
            this._gradient.getStops().length &&
              this._iterateAnnotations(
                function (t, n) {
                  var r = _.getAnnotationBBox(
                    e,
                    t,
                    p.annotationHandles.gradient.size,
                    !0,
                  );
                  i = i ? i.united(r) : r;
                }.bind(this),
              ),
            i
          );
        }),
        (P.prototype.getObjectNameModified = function () {
          return B.get(new x("GGradientStyleEditor", "text.gradient"));
        }),
        (P.prototype._applyPartMove = function (e, t, i, n) {
          (this._manager.preparePermanentChange(),
            (this._snapPoints = null),
            this._propHolder.setProperty(
              this._propName,
              this._gradient.clone(),
              !1,
              !1,
              !1,
            ),
            f.prototype._applyPartMove.call(this, e, t, i, n));
        }),
        (P.prototype.movePart = function (e, t, i, n, r, o, a) {
          (f.prototype.movePart.call(this, e, t, i, n, r, o, a),
            y.modifiers.metaKey ||
              this._snapPoints ||
              (this._snapPoints = this._getSnapPoints(n.inverted())));
        }),
        (P.prototype.updatePartSelection = function (e, t, i) {
          var n = t && t.length ? t[0] : null,
            r = null;
          if (n && n.type === P.PLUS_STOP_PART_ID) {
            var o = n.pos,
              a = this._prepareNewStop(o),
              s = this._gradient.getStops();
            s.push(a);
            var l = s.length - 1;
            (this._gradient.sortStops(),
              this._manager.blockEditorUpdate(),
              this._manager.beginTransaction());
            try {
              this._propHolder.setProperty(
                this._propName,
                this._gradient.clone(),
                !1,
                !1,
              );
            } finally {
              (this._manager.commitTransaction(
                B.get(
                  new x("GGradientStyleEditor", "action.add-gradient-stop"),
                ),
                this.getEditorData(),
              ),
                this._manager.releaseEditorUpdate());
            }
            for (var h = 0; h < s.length; ++h) s[h] == a && (l = h);
            ((n = (r = new C.PartInfo(
              this,
              {
                type: P.STOP_HANDLE_PART_ID,
                idx: l,
              },
              {
                noEditorSelectionChangedEvent: !0,
              },
              !0,
              !0,
            )).id),
              P.prototype.updatePartSelection.call(this, !1, [r.id], i));
          } else f.prototype.updatePartSelection.call(this, !1, n ? [n] : null);
          if ((i || this._manager.handleEditorPartUpdate(n), r)) return r;
        }),
        (P.prototype.getEditorData = function () {
          var e = {
            chooserOn: !0,
          };
          if (this._propHolder instanceof l.FillPaintLayer)
            (t = this._propHolder.getParent()) &&
              (e.fillLayerIndex = t.getIndexOfChild(this._propHolder));
          else if (this._propHolder instanceof l.BorderPaintLayer) {
            (t = this._propHolder.getParent()) &&
              (e.borderLayerIndex = t.getIndexOfChild(this._propHolder));
          } else if (this._propHolder instanceof a) e.pagePattern = !0;
          else if (this._componentOfEffect) {
            var t;
            (t = this._propHolder.getParent()) &&
              (e.effectIndex = t.getIndexOfChild(this._propHolder));
          }
          return (
            this._partSelection &&
              this._partSelection.length &&
              null != this._partSelection[0].idx &&
              (e.activeStopIdx = this._partSelection[0].idx),
            e
          );
        }),
        (P.prototype._paintCross = function (e, t) {
          var i = p.annotationHandles.gradient,
            n = (i.size, Math.floor(e.getX()) + 0.5),
            r = Math.floor(e.getY()) + 0.5;
          i.outlineWidth % 2 != 0 && ((n += 0.5), (r += 0.5));
          var o = i.size / 2;
          (t.canvas.strokeLine(
            n - o,
            r - o,
            n + o,
            r + o,
            i.outlineWidth + 2 * E.getScreenDPI(),
            new w(w.parseCSSColor(i.lineShadowColor)),
            !1,
            0.6,
          ),
            t.canvas.strokeLine(
              n + o,
              r - o,
              n - o,
              r + o,
              i.outlineWidth + 2 * E.getScreenDPI(),
              new w(w.parseCSSColor(i.lineShadowColor)),
              !1,
              0.6,
            ),
            t.canvas.strokeLine(
              n - o,
              r - o,
              n + o,
              r + o,
              i.outlineWidth,
              w.WHITE,
            ),
            t.canvas.strokeLine(
              n + o,
              r - o,
              n - o,
              r + o,
              i.outlineWidth,
              w.WHITE,
            ));
        }),
        (P.prototype._prepareNewStop = function (e) {
          for (
            var t = this._gradient.getStops(), i = null, n = null, r = 0;
            r < t.length;
            ++r
          ) {
            var o = t[r].position;
            (o < e && (!i || o > i.position) && (i = t[r]),
              o > e && (!n || o < n.position) && (n = t[r]));
          }
          var a = new w(t[0].color.getValue()),
            s = t[0].opacity;
          if (i && n) {
            var l = n.position - i.position,
              h = l ? (e - i.position) / l : 1,
              A = l ? (n.position - e) / l : 0,
              c = i.color.getValue(),
              p = n.color.getValue(),
              u = i.opacity,
              d = n.opacity;
            ((a = new w([
              Math.round(c[0] * A + p[0] * h),
              Math.round(c[1] * A + p[1] * h),
              Math.round(c[2] * A + p[2] * h),
            ])),
              (s = u * A + d * h));
          } else
            n ||
              ((a = new w(t[t.length - 1].color.getValue())),
              (s = t[t.length - 1].opacity));
          return {
            position: e,
            color: a,
            opacity: s,
          };
        }),
        (P.prototype._iterateAnnotations = function (e) {
          var t = this._getAnnotationPoints();
          if (t) for (var i = 0; i < t.length; ++i) if (e(t[i], i)) return;
        }),
        (P.prototype._getAnnotationPoints = function () {
          return null;
        }),
        (P.prototype._getCompositeTransform = function (e) {
          var t =
              e && this._gradient.getTransform()
                ? this._gradient.getTransform()
                : new g(),
            i = this._getBBoxElem();
          if (i)
            if (!this._componentOfEffect && i instanceof A) {
              var n = null;
              ((o = i.getPatternBBox()) &&
                (n = g.getNativeRectTransformation(o)),
                (t = n ? t.multiplied(n) : t));
              var r = i.getTransform();
              t = r ? t.multiplied(r) : t;
            } else {
              var o;
              n = null;
              ((o = i.getGeometryBBox()) &&
                (n = g.getNativeRectTransformation(o)),
                (t = n ? t.multiplied(n) : t));
            }
          return t;
        }),
        (P.prototype._getSnapPoints = function (e) {
          var t = [],
            i = this._getBBoxElem(),
            n = null,
            r = i.getSourceBBox();
          if (
            (r && !r.isEmpty()
              ? (n = i.getTransform() || new g())
              : ((n = new g()), (r = i.getGeometryBBox())),
            e && (n = n.multiplied(e)),
            r && !r.isEmpty())
          )
            for (
              var o = [
                  u.Side.TOP_LEFT,
                  u.Side.TOP_RIGHT,
                  u.Side.BOTTOM_LEFT,
                  u.Side.BOTTOM_RIGHT,
                  u.Side.RIGHT_CENTER,
                  u.Side.LEFT_CENTER,
                  u.Side.TOP_CENTER,
                  u.Side.BOTTOM_CENTER,
                  u.Side.CENTER,
                ],
                a = 0;
              a < o.length;
              ++a
            ) {
              var s = o[a],
                l = n.mapPoint(r.getSide(s));
              t.push(l);
            }
          return t;
        }),
        (P.prototype._snapPosition = function (e) {
          var t = e;
          if (this._snapPoints)
            for (var i = 0; i < this._snapPoints.length; ++i) {
              var n = this._snapPoints[i];
              if (
                m.ptSqrDist(n.getX(), n.getY(), e.getX(), e.getY()) <=
                f.options.snapDistance * f.options.snapDistance
              ) {
                t = n;
                break;
              }
            }
          return t;
        }),
        (P.prototype._constrainPosition = function (e, t, i, r) {
          if (!i && !r) return null;
          var o = null,
            a = r;
          if (i) {
            var s = this._getBBoxElem(),
              l = s.getSourceBBox();
            (l
              ? (o = s.getTransform() || new g())
              : ((o = new g()), (l = s.getGeometryBBox())),
              l && (a = l.getSide(i)),
              t && (o = o.multiplied(t)));
          } else o = t || new g();
          return (
            (a = o.mapPoint(a)),
            n.convertToConstrain(
              a.getX(),
              a.getY(),
              e.getX(),
              e.getY(),
              p.cursorConstraint,
            )
          );
        }),
        (P.prototype._getBBoxElem = function () {
          var e =
            this._propHolder instanceof A || this._propHolder instanceof d
              ? this._propHolder
              : null;
          if (!e)
            for (
              var t = this._propHolder.getParent();
              !e && t;
              t = t.getParent()
            )
              e = t instanceof A || t instanceof d || t instanceof c ? t : null;
          return e;
        }),
        (P.prototype._synchIdx = function (e) {
          var t = this._gradient.getStops();
          if (
            t &&
            t.length &&
            e &&
            e.type == P.STOP_HANDLE_PART_ID &&
            null != e.idx &&
            e.idx < t.length &&
            this._partSelection &&
            this._partSelection.length &&
            this._partIdAreEqual(e, this._partSelection[0])
          ) {
            var i = t[e.idx];
            this._gradient.sortStops();
            for (var n = 0; n < t.length; ++n)
              t[n] == i &&
                n != e.idx &&
                ((e.idx = n), (this._partSelection[0].idx = n));
          }
        }),
        (P.prototype.toString = function () {
          return "[Object GGradientStyleEditor]";
        }),
        (e.exports = P));
    }