/**
 * Module 1451
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
  var n = i(1452), r = i(798), o = i(132), a = i(840), s = i(729), l = i(28), h = i(14);
  function A() {
  }
  A.prototype._prepareForRastering = function (e) {
    return e.hasMixin(l) ? new Proxy(e, {
      get: function (e, t) {
        switch (t) {
        case "$_stop":
          return 1;
        case "$_sbl":
          return h.BlendMode.Normal;
        default:
          return e[t];
        }
      }
    }) : e;
  }, A.prototype.export = function (e, t, i, h) {
    return t.createPromise(function (A, c) {
      try {
        var p = i._getBitmapPaintArea(), u = [0], d = r.convertSizeToScale(p.getWidth(), p.getHeight(), h, null, u), g = d.getX() * u[0] / o.DPI, f = d.getY() * u[0] / o.DPI, m = 1024;
        g > 1 && f > 1 && (m *= Math.min(1 / g, 1 / f));
        var y = !1;
        if (i.hasMixin(l)) {
          var _ = i.getEffects();
          if (_)
            for (var v = _.getFirstChild(); null != v; v = v.getNext())
              if (v instanceof a || v instanceof s) {
                y = !0;
                break;
              }
        }
        var b = y ? null : n.tile(p, m);
        if (b) {
          var C = t.createExecutor(0), w = [], E = r.getBitmapPaintArea(i, h), B = Math.round(E.getWidth()), x = Math.round(E.getHeight()), P = function (e) {
              var t = e.translated(p.getX(), p.getY()), n = this._prepareForRastering(i), o = r.export(n, h, null, null, null, null, !1, t);
              o && o.getWidth() > 0 && o.getHeight() > 0 && w.push({
                bitmap: o,
                area: e
              });
            }.bind(this), S = function () {
              var t = document.createElement("canvas");
              t.width = B, t.height = x;
              var n = t.getContext("2d"), r = u[0] / o.DPI;
              w.forEach(function (e) {
                n.drawImage(e.bitmap.getHTMLElement(), e.area.getX() * r, e.area.getY() * r);
              }), e.canvas.getContext().replaceWithBitmap(t, i, null, null, !0), A();
            }.bind(this);
          C.execute(b, P, S);
        } else {
          var T = this._prepareForRastering(i), I = r.export(T, h);
          I && I.getWidth() > 0 && I.getHeight() > 0 && e.canvas.getContext().replaceWithBitmap(I.getHTMLElement(), i, null, null, !0), A();
        }
      } catch (e) {
        c(e);
      }
    }.bind(this));
  }, e.exports = A;
}
