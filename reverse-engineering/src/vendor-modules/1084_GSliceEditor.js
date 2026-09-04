/**
 * chunk.vendor.js Module #1084
 * Type: class
 * Name: GSliceEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(73),
        o = i(289),
        a = i(66),
        s = i(274),
        l = i(22),
        h = i(36);

      function A(e) {
        (s.call(this, e),
          (this._flags &= ~(a.Flag.RotateCorners | a.Flag.RotateHandle)));
      }
      (n.inherit(A, s),
        h.exports(A, o),
        (A.prototype.createElementPreview = function () {
          if (!this._elementPreview) {
            var e = this._element.getSourceBBox();
            this._setElementPreview(
              new r(e.getX(), e.getY(), e.getWidth(), e.getHeight()),
            );
          }
        }),
        (A.prototype.canApplyTransform = function () {
          return (
            (this._elementPreview &&
              this._elementPreview.getTransform().invertible()) ||
            (a.prototype.canApplyTransform.call(this) &&
              !this.getElement().hasFlag(l.Flag.PartialLocked))
          );
        }),
        (A.prototype._applyTransform = function (e, t, i, n) {
          var r = null;
          if (
            (this._elementPreview
              ? (r = this._elementPreview.getTransform())
              : ((r = this._transform), this.resetTransform()),
            r && !r.getRotationFactor())
          ) {
            var o = r.getMatrix(),
              a = (this._element.getProperty("x") || 0) + o[4],
              s = (this._element.getProperty("y") || 0) + o[5],
              l = (this._element.getProperty("w") || 0) * o[0],
              h = (this._element.getProperty("h") || 0) * o[1];
            if (1 != r.getScaleFactor()) {
              if (this._elementPreview) {
                var A = this._elementPreview.getGeometryBBox();
                A &&
                  ((a = A.getX()),
                  (s = A.getY()),
                  (l = A.getWidth()),
                  (h = A.getHeight()));
              }
              this._element.setProperties(["w", "h"], [l, h]);
            }
            this._element.setProperties(["x", "y"], [a, s]);
          }
        }),
        (A.prototype.toString = function () {
          return "[Object GSliceEditor]";
        }),
        (e.exports = A));
    }