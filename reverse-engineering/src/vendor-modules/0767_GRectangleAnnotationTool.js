/**
 * chunk.vendor.js Module #767
 * Type: class
 * Name: GRectangleAnnotationTool
 */

function (e, t, i) {
      i(7);
      var n = i(549),
        r = i(316),
        o = i(0),
        a = i(212),
        s = i(52);

      function l() {
        n.call(this, !0, !0);
      }
      (i(768),
        o.inheritAndMix(l, n, [a]),
        (l.prototype._getRelatedItemClass = function () {
          return r;
        }),
        (l.prototype.getCursor = function () {
          return s.CrossRectangle;
        }),
        (l.prototype._showMousePositionInlineHint = function () {
          return !1;
        }),
        (l.prototype.toString = function () {
          return "[Object GRectangleAnnotationTool]";
        }),
        (e.exports = l));
    }