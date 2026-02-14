/**
 * Module 712
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
  "use strict";
  var n = i(105), r = i(984), o = i(326);
  function a(e) {
    this.bindConstructorValues(e);
  }
  a.prototype.bindConstructorValues = function (e) {
    var t, i;
    this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : [], e.xMin && (this.xMin = e.xMin), e.yMin && (this.yMin = e.yMin), e.xMax && (this.xMax = e.xMax), e.yMax && (this.yMax = e.yMax), e.advanceWidth && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", (t = e.path, i = t || new o.Path(), {
      configurable: !0,
      get: function () {
        return "function" == typeof i && (i = i()), i;
      },
      set: function (e) {
        i = e;
      }
    }));
  }, a.prototype.addUnicode = function (e) {
    0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e);
  }, a.prototype.getBoundingBox = function () {
    return this.path.getBoundingBox();
  }, a.prototype.getPath = function (e, t, i, n, r) {
    var a, s;
    e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 72, n || (n = {});
    var l = n.xScale, h = n.yScale, A = new o.Path();
    if (n.hinting && r && r.hinting && (s = this.path && r.hinting.exec(this, i)), s)
      a = r.hinting.getCommands(s), e = Math.round(e), t = Math.round(t), l = h = 1;
    else {
      a = this.path.commands;
      var c = 1 / this.path.unitsPerEm * i;
      void 0 === l && (l = c), void 0 === h && (h = c);
    }
    for (var p = 0; p < a.length; p += 1) {
      var u = a[p];
      "M" === u.type ? A.moveTo(e + u.x * l, t + -u.y * h) : "L" === u.type ? A.lineTo(e + u.x * l, t + -u.y * h) : "Q" === u.type ? A.quadraticCurveTo(e + u.x1 * l, t + -u.y1 * h, e + u.x * l, t + -u.y * h) : "C" === u.type ? A.curveTo(e + u.x1 * l, t + -u.y1 * h, e + u.x2 * l, t + -u.y2 * h, e + u.x * l, t + -u.y * h) : "Z" === u.type && A.closePath();
    }
    return A;
  }, a.prototype.getContours = function () {
    if (void 0 === this.points)
      return [];
    for (var e = [], t = [], i = 0; i < this.points.length; i += 1) {
      var r = this.points[i];
      t.push(r), r.lastPointOfContour && (e.push(t), t = []);
    }
    return n.argument(0 === t.length, "There are still points left in the current contour."), e;
  }, a.prototype.getMetrics = function () {
    for (var e = this.path.commands, t = [], i = [], n = 0; n < e.length; n += 1) {
      var r = e[n];
      "Z" !== r.type && (t.push(r.x), i.push(r.y)), "Q" !== r.type && "C" !== r.type || (t.push(r.x1), i.push(r.y1)), "C" === r.type && (t.push(r.x2), i.push(r.y2));
    }
    var o = {
      xMin: Math.min.apply(null, t),
      yMin: Math.min.apply(null, i),
      xMax: Math.max.apply(null, t),
      yMax: Math.max.apply(null, i),
      leftSideBearing: this.leftSideBearing
    };
    return isFinite(o.xMin) || (o.xMin = 0), isFinite(o.xMax) || (o.xMax = this.advanceWidth), isFinite(o.yMin) || (o.yMin = 0), isFinite(o.yMax) || (o.yMax = 0), o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin), o;
  }, a.prototype.draw = function (e, t, i, n, r) {
    this.getPath(t, i, n, r).draw(e);
  }, a.prototype.drawPoints = function (e, t, i, n) {
    function r(t, i, n, r) {
      var o = 2 * Math.PI;
      e.beginPath();
      for (var a = 0; a < t.length; a += 1)
        e.moveTo(i + t[a].x * r, n + t[a].y * r), e.arc(i + t[a].x * r, n + t[a].y * r, 2, 0, o, !1);
      e.closePath(), e.fill();
    }
    t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 24;
    for (var o = 1 / this.path.unitsPerEm * n, a = [], s = [], l = this.path, h = 0; h < l.commands.length; h += 1) {
      var A = l.commands[h];
      void 0 !== A.x && a.push({
        x: A.x,
        y: -A.y
      }), void 0 !== A.x1 && s.push({
        x: A.x1,
        y: -A.y1
      }), void 0 !== A.x2 && s.push({
        x: A.x2,
        y: -A.y2
      });
    }
    e.fillStyle = "blue", r(a, t, i, o), e.fillStyle = "red", r(s, t, i, o);
  }, a.prototype.drawMetrics = function (e, t, i, n) {
    var o;
    t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 24, o = 1 / this.path.unitsPerEm * n, e.lineWidth = 1, e.strokeStyle = "black", r.line(e, t, -10000, t, 10000), r.line(e, -10000, i, 10000, i);
    var a = this.xMin || 0, s = this.yMin || 0, l = this.xMax || 0, h = this.yMax || 0, A = this.advanceWidth || 0;
    e.strokeStyle = "blue", r.line(e, t + a * o, -10000, t + a * o, 10000), r.line(e, t + l * o, -10000, t + l * o, 10000), r.line(e, -10000, i + -s * o, 10000, i + -s * o), r.line(e, -10000, i + -h * o, 10000, i + -h * o), e.strokeStyle = "green", r.line(e, t + A * o, -10000, t + A * o, 10000);
  }, t.Glyph = a;
}
