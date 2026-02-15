/**
 * Module 739
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
  var n = i(99), r = i(5), o = i(0), a = i(24);
  function s(e) {
    n.call(this, e);
  }
  o.inheritAndMix(s, n, [
    n.Visual,
    n.Map,
    n.DetailMap
  ]), s.ID = "guide.guide-lines", s.MIN_CELL_SPACE = 10, s.prototype.getId = function () {
    return s.ID;
  }, s.prototype.paint = function (e, t) {
    if (t.configuration.guideLinesVisible) {
      var i = this._scene.getProperty("hgl");
      if (i && i.length)
        for (var n = 0; n < i.length; ++n) {
          var o = Math.floor(e.mapPoint(new r(0, i[n])).getY()) + 0.5;
          t.canvas.strokeLine(0, o, t.canvas.getWidth(), o, 1, a.guideLineColor);
        }
      var s = this._scene.getProperty("vgl");
      if (s && s.length)
        for (n = 0; n < s.length; ++n) {
          o = Math.floor(e.mapPoint(new r(s[n], 0)).getX()) + 0.5;
          t.canvas.strokeLine(o, 0, o, t.canvas.getHeight(), 1, a.guideLineColor);
        }
    }
  }, s.prototype.map = function (e, t, i, n, r) {
    var o, a = null, s = null, l = null, h = null, A = null, c = (n = r ? n / r : n, this._scene.getProperty("hgl"));
    if (c && c.length)
      for (var p = 0; p < c.length; ++p)
        o = Math.abs(t - c[p]), null === s && o <= n && (s = c[p], h = o);
    var u = this._scene.getProperty("vgl");
    if (u && u.length)
      for (p = 0; p < u.length; ++p)
        o = Math.abs(e - u[p]), null === a && o <= n && (a = u[p], l = o);
    return null === a && null === s || (A = {
      x: null !== a ? {
        value: a,
        delta: l
      } : null,
      y: null !== s ? {
        value: s,
        delta: h
      } : null
    }), A;
  }, s.prototype.toString = function () {
    return "[Object GGuideLinesGuide]";
  }, e.exports = s;
}
