/**
 * chunk.vendor.js Module #549
 * Type: class
 * Name: GRectangleTool
 */

function (e, t, i) {
      var n = i(7),
        r = i(236),
        o = i(0),
        a = i(73);

      function s() {
        r.call(this, !0, !0);
      }
      (i(330),
        o.inherit(s, r),
        (s.prototype._getRelatedItemClass = function () {
          return a;
        }),
        (s.prototype._updateShape = function (e, t, i) {
          return (
            !!t &&
            (e.setProperty(
              "trf",
              new n(
                Math.max(t.getWidth(), 1) / 2,
                0,
                0,
                Math.max(t.getHeight(), 1) / 2,
                t.getX() + t.getWidth() / 2,
                t.getY() + t.getHeight() / 2,
              ),
            ),
            !0)
          );
        }),
        (s.prototype._hasCenterCross = function () {
          return !0;
        }),
        (s.prototype._showMousePositionInlineHint = function () {
          return !0;
        }),
        (s.prototype._showAreaInlineHint = function () {
          return !0;
        }),
        (s.prototype.toString = function () {
          return "[Object GRectangleTool]";
        }),
        (e.exports = s));
    }