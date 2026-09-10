/**
 * chunk.vendor.js Module #1083
 * Type: class
 * Name: GImageGridEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(534),
        o = i(63),
        a = i(128),
        s = i(36),
        l = i(141),
        h = i(39),
        A = i(24);

      function c(e) {
        a.call(this, e);
      }
      (n.inherit(c, a),
        s.exports(c, r),
        (c.prototype._paintOutline = function (e, t, i, n, r) {
          var a,
            s = this.getPaintElement(),
            c = new o(s, e);
          (a = new l(c)) &&
            (t.canvas.putVertices(a, !1),
            t.canvas.strokeVertices(
              n ||
                (this.hasFlag(h.Flag.Highlighted)
                  ? t.highlightOutlineColor
                  : t.selectionOutlineColor),
              A.outlineWidth,
            ));
        }),
        (c.prototype.getBox = function () {
          return this.getPaintElement().getGeometryBBox();
        }),
        (c.prototype.getBoxTransform = function () {
          return null;
        }),
        (c.prototype.resetTransform = function () {
          for (var e = this._editors ? this._editors.length : 0; e > 0; --e) {
            var t = this._editors[e - 1];
            t && t instanceof s && t.resetTransform();
          }
          a.prototype.resetTransform.call(this);
        }),
        (c.prototype.toString = function () {
          return "[Object GImageGridEditor]";
        }),
        (e.exports = c));
    }