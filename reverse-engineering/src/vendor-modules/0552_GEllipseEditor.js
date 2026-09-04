/**
 * chunk.vendor.js Module #552
 * Type: class
 * Name: GEllipseEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(11),
        o = i(56),
        a = (i(22), i(45)),
        s = i(214),
        l = i(28),
        h = i(128),
        A = i(36),
        c = i(5),
        p = i(24),
        u = i(155),
        d = i(7),
        g = i(6),
        f = i(12),
        m = i(39),
        y = i(81),
        _ = i(17),
        v = i(14);

      function b(e) {
        u.call(this, e);
      }
      (n.inherit(b, u),
        A.exports(b, s),
        (b.START_ANGLE_PART_ID = r.uuid()),
        (b.END_ANGLE_PART_ID = r.uuid()),
        (b.prototype.getBBoxMargin = function () {
          var e = u.prototype.getBBoxMargin.call(this);
          return this._showSegmentDetails()
            ? Math.max(
                y.getAnnotationPaintMargin(p.annotationHandles.ellipse.size),
                e,
              )
            : e;
        }),
        (b.prototype.getCustomBBox = function (e, t) {
          var i = u.prototype.getCustomBBox.call(this, e, t);
          if (
            this.hasFlag(m.Flag.Selected) &&
            this.hasFlag(m.Flag.Detail) &&
            p.centerCrossSize > 0
          ) {
            var n = this.getPaintElement().getCenter(!0);
            if (n) {
              var r = 2 * p.centerCrossSize,
                o = new g(n.getX() - r - 1, n.getY() - r - 1, r + 1, r + 1);
              o && (i = i ? i.united(o) : o);
            }
          }
          return i;
        }),
        (b.prototype.createElementPreview = function () {
          this._elementPreview ||
            (this._setElementPreview(new s()),
            this._elementPreview.transferProperties(this._element, [
              o.GeometryProperties,
              s.GeometryProperties,
              a.MetaProperties,
            ]));
        }),
        (b.prototype.movePart = function (e, t, i, n, r, o, a) {
          var s = u.prototype.movePart.call(this, e, t, i, n, r, o, a);
          if (e === b.START_ANGLE_PART_ID || e === b.END_ANGLE_PART_ID) {
            var l = n.mapPoint(i);
            this.createElementPreview();
            var h = this._element.getTransform();
            if (h) var A = h.inverted().mapPoint(l);
            else A = l;
            var c = Math.atan2(A.getY(), A.getX()),
              p = this._element.getProperty("sa"),
              d = this._element.getProperty("ea");
            if (e == b.START_ANGLE_PART_ID) var g = c - p;
            else g = c - d;
            var m = this._partSelection.indexOf(b.START_ANGLE_PART_ID) >= 0,
              y = this._partSelection.indexOf(b.END_ANGLE_PART_ID) >= 0;
            (m || y) &&
              (this._elementPreview.setProperties(
                ["sa", "ea"],
                [
                  m ? f.normalizeAngleRadians(p + g) : p,
                  y ? f.normalizeAngleRadians(d + g) : d,
                ],
              ),
              this.requestInvalidation());
          }
          return s;
        }),
        (b.prototype._applyPartMove = function (e, t, i, n) {
          if (e === b.START_ANGLE_PART_ID || e === b.END_ANGLE_PART_ID) {
            var r = this._elementPreview.getProperties(["sa", "ea"]);
            (this.resetPartMove(e, t),
              this._element.setProperties(["sa", "ea"], r));
          }
          u.prototype._applyPartMove.call(this, e, t, i, n);
        }),
        (b.prototype.canApplyTransform = function () {
          return (
            (this._elementPreview &&
              this._elementPreview.getTransform().invertible()) ||
            u.prototype.canApplyTransform.call(this)
          );
        }),
        (b.prototype.initialSetup = function (e) {
          u.prototype.initialSetup.call(this, e);
          var t = !1;
          if (!e || e instanceof s || !e.getPaintLayers())
            (e && (e instanceof s || e.getPaintLayers())) || (t = !0);
          else
            for (
              var i = e.getPaintLayers().getFirstChild();
              null !== i && !t;
              i = i.getNext()
            )
              i instanceof l.BorderPaintLayer && (t = !0);
          if (t && this.getElement().getPaintLayers())
            for (
              i = this.getElement().getPaintLayers().getFirstChild();
              null !== i;
              i = i.getNext()
            )
              i instanceof l.BorderPaintLayer &&
                i.setProperty("_blc", v.LineCap.Butt);
        }),
        (b.prototype._hasCenterCross = function () {
          return !0;
        }),
        (b.prototype._postPaint = function (e, t) {
          (u.prototype._postPaint.call(this, e, t),
            this._showSegmentDetails() &&
              this._iterateArcEnds(
                !0,
                function (i) {
                  var n =
                      this._partSelection &&
                      this._partSelection.indexOf(i.id) >= 0,
                    r = p.annotationHandles.ellipse,
                    o = i.id == b.START_ANGLE_PART_ID ? r.startType : r.endType;
                  return (
                    y.paintAnnotation(
                      t,
                      e,
                      i.position,
                      o,
                      n,
                      r.size,
                      _.WHITE,
                      t.annotationColor,
                      r.outlineWidth,
                      r.shadowColor,
                      r.outsideStroke,
                    ),
                    !1
                  );
                }.bind(this),
              ));
        }),
        (b.prototype._getPartInfoAt = function (e, t, i) {
          if (this._showSegmentDetails()) {
            var n = null;
            if (
              (this._iterateArcEnds(
                !1,
                function (i) {
                  return (
                    !!y
                      .getAnnotationBBox(
                        t,
                        i.position,
                        p.annotationHandles.ellipse.size,
                        !1,
                      )
                      .expanded(
                        p.annotPickDistance,
                        p.annotPickDistance,
                        p.annotPickDistance,
                        p.annotPickDistance,
                      )
                      .containsPoint(e) &&
                    ((n = new m.PartInfo(this, i.id, null, !0, !0)), !0)
                  );
                }.bind(this),
              ),
              n)
            )
              return n;
          }
          return h.prototype._getPartInfoAt.call(this, e, t, i);
        }),
        (b.prototype._showSegmentDetails = function () {
          return (
            this._showAnnotations() &&
            this.hasFlag(m.Flag.Detail) &&
            !this._elementPreview
          );
        }),
        (b.prototype._iterateArcEnds = function (e, t) {
          var i = e ? this.getPaintElement() : this._element,
            n = i.getTransform(),
            r = i.getProperty("sa"),
            o = i.getProperty("ea");
          n = n || new d(1, 0, 0, 1, 0, 0);
          for (
            var a = [
                {
                  id: b.START_ANGLE_PART_ID,
                  position: n.mapPoint(new c(Math.cos(r), Math.sin(r))),
                },
                {
                  id: b.END_ANGLE_PART_ID,
                  position: n.mapPoint(new c(Math.cos(o), Math.sin(o))),
                },
              ],
              s = 0;
            s < a.length && !0 !== t(a[s]);
            ++s
          );
        }),
        (b.prototype.toString = function () {
          return "[Object GEllipseEditor]";
        }),
        (e.exports = b));
    }