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

function (exports, module, require) {
  var n = require(1452) /* module */, r = require(798) /* GBitmapExport */, o = require(132) /* GLength */, a = require(840) /* GMirrorEffect */, s = require(729) /* GOverlayEffect */, l = require(28) /* GStylable */, h = require(14) /* GPaintCanvas */;
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
        var y = false;
        if (i.hasMixin(l)) {
          var _ = i.getEffects();
          if (_)
            for (var v = _.getFirstChild(); null != v; v = v.getNext())
              if (v instanceof a || v instanceof s) {
                y = true;
                break;
              }
        }
        var b = y ? null : n.tile(p, m);
        if (b) {
          var C = t.createExecutor(0), w = [], E = r.getBitmapPaintArea(i, h), B = Math.round(E.getWidth()), x = Math.round(E.getHeight()), P = function (e) {
              var t = e.translated(p.getX(), p.getY()), n = this._prepareForRastering(i), o = r.export(n, h, null, null, null, null, false, t);
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
              }), e.canvas.getContext().replaceWithBitmap(t, i, null, null, true), A();
            }.bind(this);
          C.execute(b, P, S);
        } else {
          var T = this._prepareForRastering(i), I = r.export(T, h);
          I && I.getWidth() > 0 && I.getHeight() > 0 && e.canvas.getContext().replaceWithBitmap(I.getHTMLElement(), i, null, null, true), A();
        }
      } catch (e) {
        c(e);
      }
    }.bind(this));
  }, exports.exports = A;
}
