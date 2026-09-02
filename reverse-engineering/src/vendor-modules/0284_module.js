/**
 * chunk.vendor.js Module #284
 * Type: unknown
 */

function (e, t, i) {
      var n = i(5),
        r = i(2),
        o = i(12),
        a = i(45),
        s = i(9);

      function l() {
        (a.call(this),
          (this.$closed = !0),
          this._setDefaultProperties(l.GeometryProperties),
          (this._paintSharp = !0));
      }
      (r.inherit("polygon", l, a),
        (l.GeometryProperties = {
          pts: 6,
          cx: 0,
          cy: 0,
          or: 0,
          ir: 0,
          oa: 0,
          ia: o.PI2 - Math.PI / 3,
          oct: a.CornerType.Rounded,
          ict: a.CornerType.Rounded,
          ocr: 0,
          icr: 0,
        }),
        (l.VisualProperties = {}),
        (l.prototype._transformStyledCorners = function (e, t) {
          var i = t.decomposed().scale.getMatrix(),
            n = Math.abs(i[0] * i[3]),
            r = o.isEqualEps(n, 1) ? 1 : Math.sqrt(n);
          o.isEqualEps(r, 1) ||
            e.setProperties(
              ["ocr", "icr"],
              [this.getProperty("ocr") * r, this.getProperty("icr") * r],
            );
        }),
        (l.prototype.transferStyledCorners = function (e) {
          e instanceof l &&
            e.setProperties(
              ["ocr", "icr"],
              [this.getProperty("ocr"), this.getProperty("icr")],
            );
        }),
        (l.prototype.getNodeNameTranslated = function () {
          return s.getValue("GPolygon", "name", this.getNodeName());
        }),
        (l.prototype.calculateMitterLimit = function (e) {
          var t = function (e, t, i) {
              if (e && t && i) {
                var n = Math.sqrt(
                    Math.pow(i.getX() - e.getX(), 2) +
                      Math.pow(i.getY() - e.getY(), 2),
                  ),
                  r = Math.sqrt(
                    Math.pow(i.getX() - t.getX(), 2) +
                      Math.pow(i.getY() - t.getY(), 2),
                  ),
                  o = Math.sqrt(
                    Math.pow(t.getX() - e.getX(), 2) +
                      Math.pow(t.getY() - e.getY(), 2),
                  );
                return Math.acos((r * r + n * n - o * o) / (2 * r * n));
              }
              return null;
            },
            i = e.$_bml,
            n = [];
          this.iterateSegments(function (e, t, i) {
            n.push(e);
          }, !0);
          for (var r = n.length - 1; r > 0; r -= 2) {
            var o = n[r],
              a = n[r - 1],
              s = t(o, n[r - 2 < 0 ? n.length - 1 : r - 2], a);
            "number" == typeof s &&
              (i = Math.max(i, Math.abs(1 / Math.sin(s / 2))));
          }
          return Math.ceil(i);
        }),
        (l.prototype.iterateSegments = function (e, t) {
          for (
            var i = this.$oa + o.PI2,
              r = o.PI2 / this.$pts,
              a = this.$ia - this.$oa,
              s = t ? this.$trf : null,
              l = this.$oa;
            l < i - 1e-6;
            l += r
          ) {
            var h = new n(
              this.$or * Math.cos(l) + this.$cx,
              this.$or * Math.sin(l) + this.$cy,
            );
            if ((s && (h = s.mapPoint(h)), !0 === e(h, !1, l))) break;
            if (
              ((h = new n(
                this.$ir * Math.cos(l + a) + this.$cx,
                this.$ir * Math.sin(l + a) + this.$cy,
              )),
              s && (h = s.mapPoint(h)),
              !0 === e(h, !0, l + a))
            )
              break;
          }
        }),
        (l.prototype.isPlainEdges = function () {
          var e = null,
            t = null,
            i = null,
            n = 0;
          return (
            this.iterateSegments(function (r, o, a) {
              if (0 !== n || o)
                if (1 === n && o) t = r;
                else {
                  if (2 !== n || o) return !0;
                  i = r;
                }
              else e = r;
              return (++n, !1);
            }),
            !!(
              e &&
              t &&
              i &&
              o.sqrSegmentDist(
                e.getX(),
                e.getY(),
                i.getX(),
                i.getY(),
                t.getX(),
                t.getY(),
              ) <= 1e-6
            )
          );
        }),
        (l.prototype.getPointsMinDistance = function () {
          var e = null,
            t = null,
            i = null,
            n = 0,
            r = 0;
          return (
            this.iterateSegments(function (r, o, a) {
              if (0 !== n || o)
                if (1 === n && o) t = r;
                else {
                  if (2 !== n || o) return !0;
                  i = r;
                }
              else e = r;
              return (++n, !1);
            }, !0),
            e &&
              t &&
              i &&
              (r = Math.min(
                o.ptDist(t.getX(), t.getY(), e.getX(), e.getY()),
                o.ptDist(t.getX(), t.getY(), i.getX(), i.getY()),
              )),
            r
          );
        }),
        (l.prototype.assignFrom = function (e) {
          (e instanceof l && this.transferProperties(e, [l.GeometryProperties]),
            a.prototype.assignFrom.call(this, e));
        }),
        (l.prototype._handleChange = function (e, t) {
          (e === r._Change.Store
            ? this.storeProperties(t.blob, l.GeometryProperties)
            : e === r._Change.Restore &&
              (this.restoreProperties(t.blob, l.GeometryProperties),
              this._invalidatePath()),
            this._canHandleGeometryChangeForProperties(
              e,
              t,
              l.GeometryProperties,
            ) &&
              e == r._Change.AfterPropertiesChange &&
              !this.isRecordedTransaction() &&
              this._invalidatePath(),
            this._handleGeometryChangeForProperties(e, t, l.GeometryProperties),
            a.prototype._handleChange.call(this, e, t));
        }),
        (l.prototype._invalidatePath = function () {
          var e = this.getAnchorPoints();
          (this.beginUpdate(), e._beginBlockCompositeEvents(!0, !0, !0));
          try {
            (e.clearChildren(),
              this.iterateSegments(
                function (t, i, n) {
                  var r = new a.AnchorPoint();
                  (r.setProperties(
                    ["tp", "x", "y", "cl", "cr"],
                    [
                      i ? this.$ict : this.$oct,
                      t.getX(),
                      t.getY(),
                      i ? this.$icr : this.$ocr,
                      i ? this.$icr : this.$ocr,
                    ],
                  ),
                    e.appendChild(r));
                }.bind(this),
              ));
          } finally {
            (this.endUpdate(), e._endBlockCompositeEvents(!0, !0, !0));
          }
        }),
        (l.prototype.getCenter = function (e) {
          var t = new n(this.$cx, this.$cy);
          return (e && this.$trf && (t = this.$trf.mapPoint(t)), t);
        }),
        (l.prototype.getOrigHalfWidth = function () {
          return this.$or >= this.$ir ? this.$or : this.$ir;
        }),
        (l.prototype.getOrigHalfHeight = function () {
          return this.$or >= this.$ir ? this.$or : this.$ir;
        }),
        (l.prototype._requireMiterLimitApproximation = function () {
          return !0;
        }),
        (l.prototype.toString = function () {
          return "[GPolygon]";
        }),
        (e.exports = l));
    }