/**
 * chunk.vendor.js Module #530
 * Type: unknown
 */

function (e, t, i) {
      var n = i(5),
        r = i(6),
        o = i(7),
        a = i(2),
        s = i(22),
        l = i(528),
        h = i(56),
        A = i(179),
        c = i(59);

      function p(e, t, i, a, s, l) {
        if (e) {
          if (
            ((this._parameterizedVertexProcessor = e),
            (this._annotationsParamVals = null),
            t)
          ) {
            this._annotationsParamVals = [];
            for (var p = 0; p < t.length; ++p) {
              var u = t[p];
              this._annotationsParamVals.push(new n(u.getX(), u.getY()));
            }
          }
          ((this._sShapeName = s),
            (this._icon = l || null),
            h.call(this),
            (this._paintSharp = !0));
          var d = this._parameterizedVertexProcessor.getVertices(
            this._annotationsParamVals,
          );
          if (d && d.getCount()) {
            this._paths = A.createPathFromVertexSource(d, !0);
            var g = c.calculateBounds(d, !0);
            if (g && !g.isEmpty() && ((this._srcBBox = g), i && a)) {
              var f = o.getNativeRectTransformation(g),
                m = new r(0, 0, i, a),
                y = o.getNativeRectTransformation(m);
              this.setProperty("trf", f.inverted().multiplied(y));
            }
          }
        }
      }
      (a.inherit("Ready Shape", p, h),
        (p.GeometryProperties = {}),
        (p.VisualProperties = {}),
        (p.prototype._parameterizedVertexProcessor = null),
        (p.prototype._annotationsParamVals = null),
        (p.prototype._sShapeName = null),
        (p.prototype._paths = null),
        (p.prototype._currentPath = null),
        (p.prototype._currentPathIdx = null),
        (p.prototype._srcBBox = null),
        (p.prototype.setAnnotationMouseLocation = function (e, t) {
          if (
            this._annotationsParamVals &&
            this._annotationsParamVals.length &&
            e < this._annotationsParamVals.length
          ) {
            this._notifyChange(s._Change.PrepareGeometryUpdate);
            var i =
              this.$trf && this.$trf.invertible()
                ? this.$trf.inverted().mapPoint(t)
                : t;
            ((this._annotationsParamVals[e] = i),
              this._invalidateVertices(),
              this._notifyChange(s._Change.FinishGeometryUpdate));
          }
        }),
        (p.prototype.getAnnotationsCount = function () {
          return this._annotationsParamVals
            ? this._annotationsParamVals.length
            : 0;
        }),
        (p.prototype.getAnnotationPosition = function (e) {
          var t = null;
          if (
            this._annotationsParamVals &&
            this._annotationsParamVals.length &&
            e < this._annotationsParamVals.length
          ) {
            var i = this._annotationsParamVals[e];
            t = this._parameterizedVertexProcessor.getAnnotationPosition(e, i);
            t = this.$trf ? this.$trf.mapPoint(t) : t;
          }
          return t;
        }),
        (p.prototype.iterateAnnotations = function (e, t) {
          if (this._annotationsParamVals && this._annotationsParamVals.length)
            for (
              var i = t ? this.$trf : null, n = 0;
              n < this._annotationsParamVals.length;
              ++n
            ) {
              var r = this._parameterizedVertexProcessor.getAnnotationPosition(
                n,
                this._annotationsParamVals[n],
              );
              if ((i && (r = i.mapPoint(r)), !0 === e(r, n))) break;
            }
        }),
        (p.prototype.rewindVertices = function (e) {
          if (
            ((this._currentPathIdx =
              this._paths && this._paths.length ? 0 : null),
            0 === e && 0 === this._currentPathIdx)
          ) {
            this._currentPath = this._paths[0];
            for (var t = 0; t < this._paths.length; ++t)
              this._paths[t].rewindVertices(0);
            return !0;
          }
          return !1;
        }),
        (p.prototype.readVertex = function (e) {
          if (null !== this._currentPathIdx) {
            if (this._currentPath.readVertex(e)) return !0;
            if (this._currentPathIdx + 1 < this._paths.length)
              return (
                ++this._currentPathIdx,
                (this._currentPath = this._paths[this._currentPathIdx]),
                this._currentPath.readVertex(e)
              );
          }
          return !1;
        }),
        (p.prototype.hasVertexForRead = function () {
          if (this._currentPath) {
            if (this._currentPath.hasVertexForRead()) return !0;
            if (this._currentPathIdx + 1 < this._paths.length)
              return this._paths[this._currentPathIdx + 1].hasVertexForRead();
          }
          return !1;
        }),
        (p.prototype.getIcon = function () {
          return this._icon;
        }),
        (p.prototype._isEvenOddFill = function () {
          return !0;
        }),
        (p.prototype._handleChange = function (e, t) {
          if (
            e === a._Change.AfterPropertiesChange &&
            t.properties.indexOf("trf") >= 0
          )
            this._setTransform(this.getProperty("trf"));
          else if (e === a._Change.Store) {
            ((t.blob.ssn = this._sShapeName),
              this._icon && (t.blob.icn = this._icon),
              (t.blob.pvp = l.serialize(this._parameterizedVertexProcessor)));
            for (var i = [], r = 0; r < this._annotationsParamVals.length; ++r)
              i.push(
                this._annotationsParamVals[r].getX(),
                this._annotationsParamVals[r].getY(),
              );
            t.blob.apv = JSON.stringify(i, null, null);
          }
          if (
            (h.prototype._handleChange.call(this, e, t),
            e === a._Change.Restore)
          ) {
            if (
              ((this._sShapeName = t.blob.ssn),
              (this._parameterizedVertexProcessor = l.deserialize(t.blob.pvp)),
              t.blob.apv)
            ) {
              this._annotationsParamVals = [];
              for (i = JSON.parse(t.blob.apv), r = 0; r + 1 < i.length; r += 2)
                this._annotationsParamVals.push(new n(i[r], i[r + 1]));
            }
            (t.blob.icn && (this._icon = t.blob.icn),
              this._invalidateVertices());
          }
        }),
        (p.prototype._calculateSourceBBox = function (e) {
          return this._srcBBox;
        }),
        (p.prototype._invalidateVertices = function () {
          if (
            ((this._paths = null),
            (this._srcBBox = null),
            this._parameterizedVertexProcessor)
          ) {
            var e = this._parameterizedVertexProcessor.getVertices(
              this._annotationsParamVals,
            );
            e &&
              e.getCount() &&
              ((this._srcBBox = c.calculateBounds(e, !0)),
              (this._paths = A.createPathFromVertexSource(e, !0)),
              this._setTransform(this.getProperty("trf")));
          }
        }),
        (p.prototype._setTransform = function (e) {
          if (this._paths && this._paths.length)
            for (var t = 0; t < this._paths.length; ++t)
              this._paths[t].setTransform(e);
        }),
        (p.prototype.toString = function () {
          return this._sShapeName;
        }),
        (e.exports = p));
    }