/**
 * Module 1123
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(0), r = i(282), o = i(839), a = i(265), s = i(28), l = i(22), h = i(597), A = i(598);
  function c() {
    h.apply(this, arguments);
  }
  n.inherit(c, h), c.Type = {
    GaussianBlur: 0,
    MotionBlur: 1,
    ZoomBlur: 2,
    BackgroundBlur: 3
  }, c.prototype._getEffect = function () {
    var e;
    if (this._data.isEnabled)
      if (this._data.type === c.Type.ZoomBlur || this._data.type === c.Type.MotionBlur) {
        var t = A.parse(this._data.center);
        (e = new o()).setProperty("shp", {
          centerX: 100 * t.getX(),
          centerY: 100 * t.getY(),
          strength: this._data.radius / 50
        });
      } else
        (e = new r()).setProperty("shp", {
          radius: 3 * this._data.radius,
          clip: this._data.type === c.Type.BackgroundBlur
        });
    return e;
  }, c.prototype.applyTo = function (e) {
    if (h.prototype.applyTo.call(this, e), this._data.isEnabled && this._data.type === c.Type.BackgroundBlur && e.hasMixin(s)) {
      var t = e.getPaintLayers();
      t && (t.appendChild(new s.FillPaintLayer(new a())), e.hasMixin(l) && e._requestInvalidation());
    }
  }, e.exports = c;
}
