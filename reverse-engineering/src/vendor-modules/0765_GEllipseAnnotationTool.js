/**
 * chunk.vendor.js Module #765
 * Type: class
 * Name: GEllipseAnnotationTool
 */

function (e, t, i) {
      i(7);
      var n = i(551),
        r = i(317),
        o = i(0),
        a = i(212),
        s = i(52);

      function l() {
        n.call(this, !0, !0);
      }
      (i(766),
        o.inheritAndMix(l, n, [a]),
        (l.prototype._getRelatedItemClass = function () {
          return r;
        }),
        (l.prototype.getCursor = function () {
          return s.CrossEllipse;
        }),
        (l.prototype._showMousePositionInlineHint = function () {
          return !1;
        }),
        (l.prototype.toString = function () {
          return "[Object GEllipseAnnotationTool]";
        }),
        (e.exports = l));
    }