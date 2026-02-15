/**
 * Module 1148
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
  var n = i(147), r = i(11), o = i(1237), a = i(158), s = i(7), l = i(801), h = function () {
    };
  h.GradientUnits = {
    UserSpaceOnUse: "userSpaceOnUse",
    ObjectBoundingBox: "objectBoundingBox"
  }, n._nextExportId = 0, a._nextExportId = 0, n.prototype._setPosition = function (e, t, i, n) {
    this._x0 = e, this._x1 = i, this._y0 = t, this._y1 = n;
  }, n.prototype.asSVG = function (e, t) {
    var i = "_lgradient_" + n._nextExportId++, a = e.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    return a.setAttribute("id", i), a.setAttribute("x1", this._x0), a.setAttribute("y1", this._y0), a.setAttribute("x2", this._x1), a.setAttribute("y2", this._y1), r.each(this._stops2, function (t, i) {
      var n = e.createElementNS("http://www.w3.org/2000/svg", "stop");
      a.appendChild(n), n.setAttribute("offset", 100 * i.position + "%");
      var r = o.toFill(i.color);
      n.setAttribute("style", "stop-color:" + r), null != i.opacity && n.setAttribute("stop-opacity", i.opacity);
    }.bind(this)), a;
  }, a.prototype.asSVG = function (e) {
    var t = "_rgradient_" + a._nextExportId++, i = e.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    if (i.setAttribute("id", t), i.setAttribute("fx", 100 * this._fx + "%"), i.setAttribute("fy", 100 * this._fy + "%"), i.setAttribute("cx", 100 * this._cx + "%"), i.setAttribute("cy", 100 * this._cy + "%"), i.setAttribute("r", 100 * this._scale + "%"), this._transform && !this._transform.isIdentity()) {
      var n = [
        this._transform._sx,
        this._transform._shy,
        this._transform._shx,
        this._transform._sy,
        this._transform._tx,
        this._transform._ty
      ];
      i.setAttribute("gradientTransform", "matrix(" + n.join(" ") + ")");
    }
    return r.each(this._stops2, function (t, n) {
      var r = e.createElementNS("http://www.w3.org/2000/svg", "stop");
      i.appendChild(r), r.setAttribute("offset", 100 * n.position + "%");
      var a = o.toFill(n.color);
      r.setAttribute("style", "stop-color:" + a), null != n.opacity && r.setAttribute("stop-opacity", n.opacity);
    }.bind(this)), i;
  }, h._getGradientMatrixTransform = function (e, t, i, n) {
    var r = e._transform || new s();
    if (t) {
      var o = s.getNativeRectTransformation(t);
      r = r.multiplied(o);
    }
    return i && !i.isIdentity() && (r = r.multiplied(i)), n && !n.isIdentity() && n.invertible() && (r = r.multiplied(n.inverted())), r;
  }, h.createSvgRadialGradient = function (e, t, i, n, s, A) {
    var c = "_rgradient_" + a._nextExportId++, p = h._getGradientMatrixTransform(i, n, s, A), u = t.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    return u.setAttribute("id", c), u.setAttribute("fx", i._fx), u.setAttribute("fy", i._fy), u.setAttribute("cx", i._cx), u.setAttribute("cy", i._cy), u.setAttribute("r", i._scale), p.isIdentity() || (u.setAttribute("gradientTransform", "matrix(" + l.formatMatrix(p.getMatrix()).join(",") + ")"), u.setAttribute("gradientUnits", h.GradientUnits.UserSpaceOnUse)), r.each(i._stops2 || i._stops, function (e, i) {
      var n = t.createElementNS("http://www.w3.org/2000/svg", "stop");
      u.appendChild(n), n.setAttribute("offset", 100 * i.position + "%"), null != i.opacity && n.setAttribute("stop-opacity", i.opacity);
      var r = o.toFill(i.color);
      n.setAttribute("style", "stop-color:" + r);
    }.bind(this)), u;
  }, h.createSvgLinearGradient = function (e, t, i, a, s, A) {
    var c = "_lgradient_" + n._nextExportId++, p = t.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    p.setAttribute("id", c);
    var u, d, g, f, m = h._getGradientMatrixTransform(i, a, s, A), y = i.getAngle(), _ = i.getScale();
    return void 0 !== i._x0 && void 0 !== i._x1 && void 0 !== i._y0 && void 0 !== i._y1 ? (u = i._x0, g = i._x1, d = i._y0, f = i._y1) : (u = i._fx, d = i._fy, f = i._fy + Math.sin(y) * _, g = i._fx + Math.cos(y) * _), p.setAttribute("x1", u), p.setAttribute("y1", d), p.setAttribute("x2", g), p.setAttribute("y2", f), m.isIdentity() || (p.setAttribute("gradientTransform", "matrix(" + l.formatMatrix(m.getMatrix()).join(",") + ")"), p.setAttribute("gradientUnits", h.GradientUnits.UserSpaceOnUse)), r.each(i._stops2 || i._stops, function (e, i) {
      var n = t.createElementNS("http://www.w3.org/2000/svg", "stop");
      p.appendChild(n), n.setAttribute("offset", 100 * i.position + "%"), null != i.opacity && n.setAttribute("stop-opacity", i.opacity);
      var r = o.toFill(i.color);
      n.setAttribute("style", "stop-color:" + r);
    }.bind(this)), p;
  }, e.exports = h;
}
