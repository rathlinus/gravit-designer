/**
 * chunk.vendor.js Module #777
 * Type: class
 * Name: GEditorPaintConfiguration
 */

function (e, t, i) {
      var n = i(133);

      function r() {}
      (i(0).inherit(r, n),
        (r.prototype.pageDecoration = {
          chessboard: !0,
          margin: !0,
          shadow: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBackground: "rgba(0,0,0,0.5)",
          background: "white",
        }),
        (r.prototype.gridVisible = !0),
        (r.prototype.pageLabelsVisible = !1),
        (r.prototype.symbolLabelsVisible = !0),
        (r.prototype.guideLinesVisible = !0),
        (r.prototype.toString = function () {
          return "[Object GEditorPaintConfiguration]";
        }),
        (e.exports = r));
    }