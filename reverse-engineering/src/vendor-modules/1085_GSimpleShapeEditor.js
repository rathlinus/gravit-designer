/**
 * chunk.vendor.js Module #1085
 * Type: class
 * Name: GSimpleShapeEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(11),
        o = i(56),
        a = (i(22), i(530)),
        s = i(128),
        l = i(36),
        h = i(24),
        A = i(39),
        c = i(81),
        p = i(17);

      function u(e) {
        s.call(this, e);
      }
      (n.inherit(u, s),
        l.exports(u, a),
        (u.ANNOTATION_PART_ID = r.uuid()),
        (u.prototype.getCustomBBox = function (e, t) {
          var i = s.prototype.getCustomBBox.call(this, e, t);
          if (this._showSegmentDetails()) {
            var n = e;
            t &&
              this._transform &&
              (n = n ? this._transform.multiplied(n) : this._transform);
            this.getPaintElement().iterateAnnotations(
              function (e, t) {
                var r;
                (r = c.getAnnotationBBox(
                  n,
                  e,
                  h.annotationHandles.simpleShape.size,
                  !0,
                )) &&
                  !r.isEmpty() &&
                  (i = i ? i.united(r) : r);
              }.bind(this),
              !0,
            );
          }
          return i;
        }),
        (u.prototype.createElementPreview = function () {
          this._elementPreview ||
            (this._setElementPreview(
              new a(
                this._element._parameterizedVertexProcessor,
                this._element._annotationsParamVals,
                null,
                null,
                this._element._sShapeName,
              ),
            ),
            this._elementPreview.transferProperties(this._element, [
              o.GeometryProperties,
            ]));
        }),
        (u.prototype.movePart = function (e, t, i, n, r, o, a) {
          var l = s.prototype.movePart.call(this, e, t, i, n, r, o, a);
          if (e === u.ANNOTATION_PART_ID) {
            var h = n.mapPoint(i);
            (this.createElementPreview(),
              this.getPaintElement().setAnnotationMouseLocation(
                t.annotationIdx,
                h,
              ),
              this.requestInvalidation(),
              (l = null));
          }
          return l;
        }),
        (u.prototype._applyPartMove = function (e, t, i, n) {
          e === u.ANNOTATION_PART_ID
            ? (this._elementPreview &&
                this._element.setAnnotationMouseLocation(
                  t.annotationIdx,
                  this._elementPreview.getAnnotationPosition(t.annotationIdx),
                ),
              this.resetPartMove(e, t),
              this.requestInvalidation())
            : s.prototype._applyPartMove.call(this, e, t, i, n);
        }),
        (u.prototype.isDeletePartsAllowed = function () {
          return !1;
        }),
        (u.prototype.canApplyTransform = function () {
          return (
            (this._elementPreview &&
              this._elementPreview.getTransform().invertible()) ||
            s.prototype.canApplyTransform.call(this)
          );
        }),
        (u.prototype._postPaint = function (e, t) {
          (s.prototype._postPaint.call(this, e, t),
          this._showSegmentDetails()) &&
            this.getPaintElement().iterateAnnotations(
              function (i, n) {
                var r =
                    this._partSelection &&
                    this._partSelection.indexOf(u.ANNOTATION_PART_ID) >= 0,
                  o = h.annotationHandles.simpleShape;
                c.paintAnnotation(
                  t,
                  e,
                  i,
                  o.type,
                  r,
                  o.size,
                  p.WHITE,
                  t.annotationColor,
                );
              }.bind(this),
              !0,
            );
        }),
        (u.prototype._getPartInfoAt = function (e, t, i) {
          if (this._showSegmentDetails()) {
            var n = null;
            if (
              (this._element.iterateAnnotations(
                function (i, r) {
                  if (
                    c
                      .getAnnotationBBox(
                        t,
                        i,
                        h.annotationHandles.simpleShape.size,
                        !1,
                      )
                      .expanded(
                        h.annotPickDistance,
                        h.annotPickDistance,
                        h.annotPickDistance,
                        h.annotPickDistance,
                      )
                      .containsPoint(e)
                  )
                    return (
                      (n = new A.PartInfo(
                        this,
                        u.ANNOTATION_PART_ID,
                        {
                          annotationIdx: r,
                        },
                        !0,
                        !1,
                      )),
                      !0
                    );
                }.bind(this),
                !0,
              ),
              n)
            )
              return n;
          }
          return s.prototype._getPartInfoAt.call(this, e, t, i);
        }),
        (u.prototype._showSegmentDetails = function () {
          return (
            this._showAnnotations() &&
            this.hasFlag(A.Flag.Detail) &&
            !this._elementPreview
          );
        }),
        (u.prototype.toString = function () {
          return "[Object GSimpleShapeEditor]";
        }),
        (e.exports = u));
    }