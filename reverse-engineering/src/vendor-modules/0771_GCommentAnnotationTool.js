/**
 * chunk.vendor.js Module #771
 * Type: class
 * Name: GCommentAnnotationTool
 */

function (e, t, i) {
      var n = i(7),
        r = i(236),
        o = i(285),
        a = i(0),
        s = i(212),
        l = (i(60), i(17), i(28), i(52));

      function h() {
        r.call(this, !0, !0);
      }
      (i(772),
        a.inheritAndMix(h, r, [s]),
        (h.prototype._getRelatedItemClass = function () {
          return o;
        }),
        (h.prototype._updateShape = function (e, t, i) {
          if (t) {
            var r = new n(
                t.getWidth() / 2,
                0,
                0,
                t.getHeight() / 2,
                t.getX() + t.getWidth() / 2,
                t.getY() + t.getHeight() / 2,
              ),
              o = (e.getProperty("trf") || new n()).inverted() || new n();
            return (e.transform(o.multiplied(r)), !0);
          }
          return !1;
        }),
        (h.prototype._createShape = function () {
          return null;
        }),
        (h.prototype._mouseDragStart = function (e) {}),
        (h.prototype._mouseDrag = function (e) {}),
        (h.prototype._mouseDragEnd = function (e) {}),
        (h.prototype._createShapeManually = function (e) {
          var t = new o();
          (t.initDefaultForLimitedRestore(),
            t.initSizeAndPosition(),
            t.transform(new n(1, 0, 0, 1, e.getX(), e.getY())),
            this._insertShape(t));
        }),
        (h.prototype._showMousePositionInlineHint = function () {
          return !1;
        }),
        (h.prototype._showAreaInlineHint = function () {
          return !0;
        }),
        (h.prototype.getCursor = function () {
          return l.Comment;
        }),
        (h.prototype.toString = function () {
          return "[Object GCommentAnnotationTool]";
        }),
        (e.exports = h));
    }