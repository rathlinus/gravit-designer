/**
 * chunk.vendor.js Module #781
 * Type: class
 * Name: GAngularGradientEditor
 */

function (e, t, i) {
      var n = i(2),
        r = i(0),
        o = i(17),
        a = i(11),
        s = i(52),
        l = i(5),
        h = i(24),
        A = i(276),
        c = i(7),
        p = i(12),
        u = i(283),
        d = i(39),
        g = i(81),
        f = i(64),
        m = i(6),
        y = i(14),
        _ = i(48),
        v = i(54),
        b = i(214),
        C = i(63),
        w = i(59);

      function E() {
        A.call(this);
      }
      (r.inherit(E, A),
        (E.END_HANDLE_PART_ID = a.uuid()),
        (E.CENTER_HANDLE_PART_ID = a.uuid()),
        (E.prototype.activate = function (e) {
          if (
            e.propName &&
            e.propHolder instanceof n &&
            e.propHolder.getProperty(
              e.propName,
              !1,
              null,
              e.propTemporary,
            ) instanceof u
          )
            return A.prototype.activate.call(this, e);
          return !1;
        }),
        (E.prototype.paint = function (e, t) {
          var i = this._getAnnotationPoints(),
            n = this._getPivotPoints();
          if (i && n && 2 == n.length) {
            if (e && !e.isIdentity()) {
              for (var r = 0; r < i.length; ++r) i[r] = e.mapPoint(i[r]);
              for (r = 0; r < n.length; ++r) n[r] = e.mapPoint(n[r]);
            }
            var a = h.annotationHandles.gradient,
              s = n[0],
              l = n[1],
              p = new v();
            (p.addVertex(_.Command.Move, l.getX(), l.getY()),
              p.addVertex(_.Command.Line, s.getX(), s.getY()),
              t.canvas.putVertices(p),
              t.canvas.strokeVertices(
                new o(o.parseCSSColor(a.lineShadowColor)),
                a.outlineWidth + 2 * y.getScreenDPI(),
                null,
                null,
                null,
                null,
                0.6,
              ),
              t.canvas.strokeVertices(o.WHITE, a.outlineWidth));
            var u = new b(),
              d = new c(0.5, 0, 0, 0.5, this._gradient._fx, this._gradient._fy),
              f = this._getCompositeTransform(!0);
            ((f = d.multiplied(f)),
              e && !e.isIdentity() && (f = f.multiplied(e)),
              (p = new C(u, f)),
              t.canvas.putVertices(p),
              t.canvas.strokeVertices(
                new o(o.parseCSSColor(a.lineShadowColor)),
                a.outlineWidth + 2 * y.getScreenDPI(),
                null,
                null,
                null,
                null,
                0.6,
              ),
              t.canvas.strokeVertices(o.WHITE, a.outlineWidth),
              g.paintAnnotation(
                t,
                null,
                l,
                a.type,
                !1,
                a.size,
                o.WHITE,
                o.WHITE,
                a.outlineWidth,
                a.shadowColor,
              ));
            var m = this._gradient.getStops();
            (!m.length ||
              (0 != m[0].position && 1 != m[m.length - 1].position)) &&
              this._paintCross(s, t);
            var w = null;
            for (r = 0; r < i.length; ++r) {
              this._partSelection &&
              this._partSelection.length &&
              this._partSelection[0].idx == r
                ? (w = r)
                : g.paintAnnotation(
                    t,
                    null,
                    i[r],
                    a.type,
                    !1,
                    a.size,
                    o.WHITE,
                    o.WHITE,
                    a.outlineWidth,
                    a.shadowColor,
                  );
            }
            null !== w &&
              g.paintAnnotation(
                t,
                null,
                i[w],
                a.type,
                !1,
                a.sizeBig,
                o.WHITE,
                m[w].color,
                a.outlineWidth,
                a.shadowColor,
              );
          }
          A.prototype.paint.call(this, e, t);
        }),
        (E.prototype.getPartInfoAt = function (e, t, i, n) {
          var r = null;
          if (
            (this._iterateAnnotations(
              function (i, n) {
                if (
                  g
                    .getAnnotationBBox(
                      t,
                      i,
                      h.annotationHandles.gradient.size,
                      !1,
                    )
                    .expanded(
                      h.annotPickDistance,
                      h.annotPickDistance,
                      h.annotPickDistance,
                      h.annotPickDistance,
                    )
                    .containsPoint(e) &&
                  ((r = new d.PartInfo(
                    this,
                    {
                      type: A.STOP_HANDLE_PART_ID,
                      idx: n,
                    },
                    {
                      noEditorSelectionChangedEvent: !0,
                    },
                    !0,
                    !0,
                  )),
                  this._partSelection &&
                    this._partSelection.length &&
                    this._partSelection[0].idx == n)
                )
                  return !0;
              }.bind(this),
            ),
            r)
          )
            return r;
          var o = this._getPivotPoints();
          if (
            (o &&
              2 == o.length &&
              (g
                .getAnnotationBBox(
                  t,
                  o[1],
                  h.annotationHandles.gradient.size,
                  !1,
                )
                .expanded(
                  h.annotPickDistance,
                  h.annotPickDistance,
                  h.annotPickDistance,
                  h.annotPickDistance,
                )
                .containsPoint(e)
                ? (r = new d.PartInfo(
                    this,
                    E.CENTER_HANDLE_PART_ID,
                    {
                      point: o[1],
                      noEditorSelectionChangedEvent: !0,
                    },
                    !0,
                    !1,
                  ))
                : g
                    .getAnnotationBBox(
                      t,
                      o[0],
                      h.annotationHandles.gradient.size,
                      !1,
                    )
                    .expanded(
                      h.annotPickDistance,
                      h.annotPickDistance,
                      h.annotPickDistance,
                      h.annotPickDistance,
                    )
                    .containsPoint(e) &&
                  (r = new d.PartInfo(
                    this,
                    E.END_HANDLE_PART_ID,
                    {
                      point: o[0],
                      noEditorSelectionChangedEvent: !0,
                    },
                    !0,
                    !1,
                  ))),
            r)
          )
            return r;
          var a = new b(),
            s = new c(0.5, 0, 0, 0.5, this._gradient._fx, this._gradient._fy),
            l = this._getCompositeTransform(!0);
          ((l = s.multiplied(l)),
            t && !t.isIdentity() && (l = l.multiplied(t)));
          var u = new C(a, l);
          if (w.hitTest(e.getX(), e.getY(), u, 2 * n, !1) && l.invertible()) {
            var f = l.inverted().mapPoint(e),
              m = Math.atan2(-f.getY(), -f.getX());
            m < this._gradient._a0 && (m += p.PI2);
            var y = (m - this._gradient._a0) / p.PI2;
            (p.isEqualEps(y, 1, A.DEFAULT_EPS) || y > 1
              ? (y = 1)
              : (p.isEqualEps(y, 0, A.DEFAULT_EPS) || y < 0) && (y = 0),
              (r = new d.PartInfo(
                this,
                {
                  type: A.PLUS_STOP_PART_ID,
                  pos: y,
                },
                {
                  noEditorSelectionChangedEvent: !0,
                },
                !0,
                !0,
              )));
          }
          return r;
        }),
        (E.prototype.movePart = function (e, t, i, n, r, o, a) {
          A.prototype.movePart.call(this, e, t, i, n, r, o, a);
          var s = i,
            h = this._gradient.getStops();
          if (e === E.CENTER_HANDLE_PART_ID)
            (f.modifiers.metaKey || (s = this._snapPosition(s)),
              (s = n.mapPoint(s)),
              (g = this._getCompositeTransform(!0).inverted()) &&
                ((s = g.mapPoint(s)),
                (this._gradient._fx = s.getX()),
                (this._gradient._fy = s.getY()),
                this._propHolder.setProperty(
                  this._propName,
                  this._gradient.clone(),
                  !1,
                  !1,
                  !0,
                )));
          else if (
            e &&
            ((e.type === A.STOP_HANDLE_PART_ID &&
              0 == e.idx &&
              h.length &&
              0 == h[0].position) ||
              (e.type === A.STOP_HANDLE_PART_ID &&
                h.length &&
                e.idx == h.length - 1 &&
                1 == h[h.length - 1].position) ||
              e === E.END_HANDLE_PART_ID)
          ) {
            if ((f.modifiers.metaKey || (s = this._snapPosition(s)), o))
              (d = this._getPivotPoints()) &&
                2 == d.length &&
                (s = this._constrainPosition(s, n.inverted(), null, d[1]));
            s = n.mapPoint(s);
            if ((g = this._getCompositeTransform(!0).inverted())) {
              s = g.mapPoint(s);
              var c = new l(this._gradient._fx, this._gradient._fy),
                u = s.subtract(c);
              ((this._gradient._a0 = Math.atan2(-u.getY(), -u.getX())),
                this._propHolder.setProperty(
                  this._propName,
                  this._gradient.clone(),
                  !1,
                  !1,
                  !0,
                ));
            }
          } else if (
            e &&
            e.type === A.STOP_HANDLE_PART_ID &&
            h.length &&
            e.idx >= 0 &&
            e.idx <= h.length - 1
          ) {
            var d;
            if ((f.modifiers.metaKey || (s = this._snapPosition(s)), o))
              (d = this._getPivotPoints()) &&
                2 == d.length &&
                (s = this._constrainPosition(s, n.inverted(), null, d[1]));
            var g;
            s = n.mapPoint(s);
            if ((g = this._getCompositeTransform(!0).inverted())) {
              s = g.mapPoint(s);
              ((c = new l(this._gradient._fx, this._gradient._fy)),
                (u = s.subtract(c)));
              var m = Math.atan2(-u.getY(), -u.getX());
              m < this._gradient._a0 && (m += p.PI2);
              var y = (m - this._gradient._a0) / p.PI2;
              (p.isEqualEps(y, 1, A.DEFAULT_EPS) || y > 1
                ? (y = 1)
                : (p.isEqualEps(y, 0, A.DEFAULT_EPS) || y < 0) && (y = 0),
                (h[e.idx].position = y),
                this._synchIdx(e),
                this._propHolder.setProperty(
                  this._propName,
                  this._gradient.clone(),
                  !1,
                  !1,
                  !0,
                ));
            }
          }
        }),
        (E.prototype.getCursor = function (e, t) {
          var i = A.prototype.getCursor.call(this, e, t);
          return i || (e === E.CENTER_HANDLE_PART_ID ? s.SelectCross : null);
        }),
        (E.prototype.getCustomBBox = function (e, t) {
          var i = A.prototype.getCustomBBox.call(this, e, t),
            n = new m(this._gradient._fx - 0.5, this._gradient._fy - 0.5, 1, 1),
            r = this._getCompositeTransform(!0),
            o = (r = e ? r.multiplied(e) : r).mapRect(n);
          i = i ? i.united(o) : o;
          var a = h.annotationHandles.gradient.sizeBig + 1;
          return (i = i.expanded(a, a, a, a));
        }),
        (E.prototype._getAnnotationPoints = function () {
          for (
            var e = this._getGradientPoints(),
              t = this._getCompositeTransform(!0),
              i = 0;
            i < e.length;
            ++i
          )
            e[i] = t.mapPoint(e[i]);
          return e;
        }),
        (E.prototype._getPivotPoints = function () {
          var e = new l(this._gradient._fx, this._gradient._fy),
            t = [];
          ((t[0] = new l(
            this._gradient._fx + this._gradient._scale,
            this._gradient._fy,
          ).rotatedAt(this._gradient._a0 + Math.PI, e)),
            (t[1] = e));
          for (
            var i = this._getCompositeTransform(!0), n = 0;
            n < t.length;
            ++n
          )
            t[n] = i.mapPoint(t[n]);
          return t;
        }),
        (E.prototype._getGradientPoints = function () {
          for (
            var e = [],
              t = this._gradient.getStops(),
              i = new l(this._gradient._fx, this._gradient._fy),
              n = 0;
            n < t.length;
            ++n
          ) {
            var r = new l(
              this._gradient._fx + this._gradient._scale,
              this._gradient._fy,
            ).rotatedAt(
              this._gradient._a0 + Math.PI + t[n].position * p.PI2,
              i,
            );
            e.push(r);
          }
          return e;
        }),
        (E.prototype.toString = function () {
          return "[Object GAngularGradientEditor]";
        }),
        (e.exports = E));
    }