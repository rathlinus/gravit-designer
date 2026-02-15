/**
 * Module 798
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
  var n = require(11) /* GUtil */, r = require(5) /* GPoint */, o = require(6) /* GRect */, a = require(132) /* GLength */, s = require(64) /* GPlatform */;
  function l() {
    throw new Error("This class cannot be instantiated");
  }
  l.export = function (e, t, i, r, o, s, h, A) {
    var c = e._getBitmapPaintArea(), p = [0], u = l.convertSizeToScale(c.getWidth(), c.getHeight(), t, o, p);
    if (h)
      for (var d = (c = l.getMaxCanvasUsedArea(e)).getWidth() * p[0] / a.DPI, g = c.getHeight() * p[0] / a.DPI, f = l.getMaximumCanvasSize(); d * u.getX() > f.width || g * u.getY() > f.height || d * g * u.getX() * u.getY() > f.area;)
        u = u.scale(0.9);
    return r = n.extend({ forceEffectsWhenZoomed: true }, r), e.toBitmap(u.getX(), u.getY(), 2, i, r, p[0], s, A);
  }, l.getBitmapPaintArea = function (e, t, i) {
    var n = e._getBitmapPaintArea(), r = [0], s = l.convertSizeToScale(n.getWidth(), n.getHeight(), t, i, r), h = n.getWidth() * r[0] / a.DPI, A = n.getHeight() * r[0] / a.DPI;
    return new o(n.getX(), n.getY(), h * s.getX(), A * s.getY());
  }, l.getNodeSelfBitmapUsedArea = function (e, t, i) {
    var n = e.getSelfCanvasUsedArea(), r = [0], s = l.convertSizeToScale(n.getWidth(), n.getHeight(), t, i, r), h = n.getWidth() * r[0] / a.DPI, A = n.getHeight() * r[0] / a.DPI;
    return new o(n.getX(), n.getY(), h * s.getX(), A * s.getY());
  }, l.getMaxCanvasUsedArea = function (e) {
    var t = 0, i = 0;
    return e.accept(function (e) {
      if (e.getSelfCanvasUsedArea) {
        var n = e.getSelfCanvasUsedArea();
        n.getWidth() > t && (t = n.getWidth()), n.getHeight() > i && (i = n.getHeight());
      }
      return true;
    }), new o(0, 0, t, i);
  }, l.getMaximumCanvasSize = function () {
    return {
      width: s.absoluteMaxImgLinearDimension,
      height: s.absoluteMaxImgLinearDimension,
      area: s.absoluteMaxImgAreaDots
    };
  }, l.convertSizeToScale = function (e, t, i, o, s) {
    if (!e || !t)
      return new r(0, 0);
    var l = 1, h = 1;
    if (s && (s[0] = o || a.DPI), i) {
      i = i.trim().toLowerCase();
      var A = n.parseNumber(i);
      if (!Number.isNaN(A) && A > 0) {
        var c = i.substr(A.toString().length);
        switch (c) {
        case "x":
          l = A, h = A;
          break;
        case "w":
          h = l = A / e;
          break;
        case "h":
          l = h = A / t;
          break;
        case "dpi":
          if (s) {
            var p = A / a.DPI;
            l = h = 1, s[0] *= p;
          } else
            l = h = A / a.DPI;
          break;
        default:
          if (c.length && "x" === c.charAt(0)) {
            var u = n.parseNumber(c.substr(1));
            !Number.isNaN(u) && u > 0 && (l = A / e, h = u / t);
          }
        }
      }
    }
    return new r(l, h);
  }, exports.exports = l;
}
