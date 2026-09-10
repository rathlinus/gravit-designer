/**
 * chunk.vendor.js Module #744
 * Type: class
 * Name: GLabelGuide
 */

function (e, t, i) {
      var n = i(0),
        r = i(99),
        o = i(17),
        a = i(14);

      function s(e) {
        r.call(this, e);
      }
      (n.inheritAndMix(s, r, [r.Visual]),
        (s.SCALE = !0),
        (s.GATHER_ALL = !1),
        (s.LabelItem = function (e, t, i, n, r) {
          ((this._position = e),
            (this._label = i),
            (this._color = n || null),
            (this._isScaleLabel = !!r),
            (this._width = t));
        }),
        (s.LabelItem._position = null),
        (s.LabelItem._label = null),
        (s.LabelItem._isScaleLabel = !1),
        (s.LabelItem.prototype.getLabel = function () {
          return this._label;
        }),
        (s.LabelItem.prototype.getPosition = function () {
          return this._position;
        }),
        (s.LabelItem.prototype.getColor = function () {
          return this._color;
        }),
        (s.LabelItem.prototype.isScaleLabel = function () {
          return this._isScaleLabel;
        }),
        (s.LabelItem.prototype.getWidth = function () {
          return this._width;
        }),
        (s.prototype.getId = function () {
          throw new Error("GLabelGuide::getId virtual");
        }),
        (s.prototype.paint = function (e, t) {
          var i = this._gatherLabels(e, t);
          if (i) {
            var n = this._scene.$lbc || t.labelColor || o.BLACK,
              r = t.canvas,
              s = this._scene;
            i.forEach(function (t) {
              if (t.getLabel()) {
                var i = t.isScaleLabel() ? e.getScaleFactor() : 1;
                i *= a.getScreenDPI();
                var o = s.$lbs * i,
                  l = s.$lbp * i,
                  h = t.getLabel(),
                  A = t.getPosition(),
                  c = t.getColor() || n;
                if (!t.isScaleLabel()) {
                  var p = t.getWidth() - l,
                    u = r.measureText(h, o).width,
                    d = r.measureText("…", o).width;
                  if (u > p) {
                    for (var g = h.length; u >= p - d && g-- > 0; )
                      ((h = h.substring(0, g)),
                        (u = r.measureText(h, o).width));
                    h += "…";
                  }
                }
                r.putAuxilliaryText(
                  h,
                  A.getX(),
                  A.getY() - l,
                  o + "px Verdana",
                  "bottom",
                  "start",
                  0.8,
                  c.toScreenCSS(),
                );
              }
            });
          }
        }),
        (s.prototype.map = function () {
          return null;
        }),
        (s.prototype._gatherLabels = function () {
          throw new Error("Default label guides not supported");
        }),
        (s.prototype.toString = function () {
          return "[Object GLabelGuide]";
        }),
        (e.exports = s));
    }