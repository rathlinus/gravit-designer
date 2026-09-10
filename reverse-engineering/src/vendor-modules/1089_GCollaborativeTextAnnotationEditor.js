/**
 * chunk.vendor.js Module #1089
 * Type: class
 * Name: GCollaborativeTextAnnotationEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(330),
        o = i(36),
        a = i(533),
        s = i(172),
        l = i(66);

      function h(e, t) {
        (r.call(this, e),
          (this._uid = t),
          (this._flags =
            this._flags &
            ~(
              l.Flag.RotateCorners |
              l.Flag.RotateHandle |
              l.Flag.ResizeAll |
              l.Flag.ResizeCenters |
              l.Flag.ResizeEdges
            )));
      }
      (n.inheritAndMix(h, r, [s]),
        o.exports(h, a),
        (h.prototype._showEditor = function (e) {
          return !1;
        }),
        (h.prototype.toString = function () {
          return "[Object GCollaborativeTextAnnotationEditor]";
        }),
        (e.exports = h));
    }